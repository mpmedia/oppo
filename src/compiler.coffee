
{JavaScriptCode, JavaScriptComment, Symbol} = oppo
{text_to_js_identifier, to_type, clone} = oppo.helpers

symbol = (text, base_symbol) ->
  return text if text instanceof Symbol
  new Symbol text, base_symbol

get_symbol_text = (sym) ->
  if (is_symbol sym)
    c_sym = (compile sym)[0]
    c_sym
  else if typeof sym is "string"
    get_symbol_text (symbol sym)
  else
    throw new OppoCompileError "Can't get symbol text from non-symbol #{sym}", sym

module_splitter = null
get_module = (sym) ->
  module_splitter ?= compile_symbol (symbol '::')
  s_sym = get_symbol_text sym
  a_sym = s_sym.split module_splitter
  switch a_sym.length
    when 1
      [s_sym] = a_sym
    when 2
      [module, s_sym] = a_sym
    else
      throw new OppoCompileError "Can't define more than one module for symbol #{s_sym}", sym

  return [module, (symbol s_sym, sym)]

first_item_matches = (x, sym) ->
  c_sym = compile_symbol sym
  if (to_type x) is "array"
    [fst] = x
    if is_symbol fst
      (compile_symbol fst) is c_sym
    else
      no
  else
    no

is_symbol = (x) ->
  x instanceof Symbol or
  (first_item_matches x, "symbol") or
  ((to_type x) is "array" and (is_quoted x) and is_symbol x[1])

is_quoted = (x) -> x?.quoted or first_item_matches x, "quote"

class OppoCompileError extends Error
  constructor: (message, @form) ->
    @line_number = @form and @form.line_number
    if @line_number
      message = "at line #{@line_number}: #{message}"
    @message = message


class Macro
  constructor: (@transform) ->


class Context
  constructor: (@parent_context) ->
    @context = clone @parent_context?.context ? Object.prototype

  var_stmt: ->
    vars = for own k, v of @context when v not instanceof Context and (to_type v) isnt 'function'
      compile (symbol k)
    if vars.length
      "var #{vars.join ', '};\n"
    else
      ""

  lookup: (sym) ->
    s_sym = get_symbol_text sym
    result = @context[s_sym]
    if result is undefined and (this not instanceof Module or @name isnt "core")
      core = Module.get 'core'
      result = core.lookup sym
    result

  def: (sym, value) ->
    s_sym = get_symbol_text sym
    if not @context[s_sym]?
      @context[s_sym] = value
    else
      throw new OppoCompileError "Can't define previously defined symbol: #{s_sym}", sym

  set: (sym, value) ->
    s_sym = get_symbol_text sym
    if @context[s_sym]?
      @context[s_sym] = value
    else
      throw new OppoCompileError "Can't set value of undefined symbol: #{s_sym}", sym

  get: (sym) ->
    s_sym = get_symbol_text sym
    @context[s_sym]


class Module extends Context
  constructor: (parent_context, @name) ->
    Module.set @name, this
    super parent_context
    glob = oppo.context_stack?.global_context
    if glob?[@name]?
      glob[@name] = this

  @modules = {}

  @get: (name, create) ->
    m = @modules[name]
    if create and not m?
      m = new Module null, name
    m

  @set: (name, module) ->
    if @modules[name]?
      throw new OppoCompileError "Can't make same module twice: #{name}"
    else
      @modules[name] = module


class ContextStack
  constructor: ->
    @global_context = new Context()
    for own name, mod of Module
      @global_context[name] = mod

    @stack = [@global_context]
    @current_context = @global_context

  push: (c) ->
    @current_context = c
    @stack.push c
    c

  push_new: ->
    c = new Context @current_context
    @push c

  push_new_module: (name) ->
    m = new Module @current_context, name
    @push m

  pop: ->
    c = @stack.pop()
    @current_context = @stack[@stack.length - 1]
    c

compile = (parse_tree...) ->
  compiled = []
  for sexp in parse_tree
    sexp_type = to_type sexp
    result = if not sexp? or sexp instanceof Macro
      "null"
    else if sexp instanceof JavaScriptComment
      undefined
    else if sexp instanceof JavaScriptCode
      sexp.text
    else if sexp instanceof Symbol
      compile_symbol sexp
    else if sexp_type in ["boolean", "number"]
      "#{sexp}"
    else if sexp_type is "string"
      "\"#{sexp}\""
    else if sexp_type is "array"
      compile_list sexp

    if result isnt undefined
      compiled.push result
  compiled

oppo.compile = (parse_tree, module_name = "__anonymous__") ->
  oppo.context_stack ?= new ContextStack()
  module = oppo.context_stack.push_new_module module_name
  c = compile parse_tree...
  oppo.context_stack.pop()

  var_stmt = module.var_stmt()
  """
  (function () {
  #{var_stmt}
  return #{c.join ",\n"};

  })()
  """

compile_symbol = (sym) ->
  text_to_js_identifier if (to_type sym) is "string" then sym else sym.text

compile_list = (ls) ->
  [callable] = ls
  call_macro = oppo.context_stack.current_context.lookup callable
  if call_macro not instanceof Macro
    call_macro = Module.get('core').get 'call'
  else
    ls.shift()
  if call_macro not instanceof Macro
    throw new OppoCompileError "Can't call list: #{ls}", ls

  compile(call_macro.transform ls...)[0]

# Macros. These will take care of virtually all compiling.
# The only macros that will need to be predefined in javascript are:
# - def
# - defmacro
# - defmodule
# - js-eval
# - lambda
# - call
# - any reader-level macros

lambda = (args, body...) ->
  context = oppo.context_stack.push_new()

  c_args = compile args...
  c_body = compile body...

  oppo.context_stack.pop()
  var_stmt = context.var_stmt()

  new JavaScriptCode """
    (function (#{c_args.join ', '}) {
      #{var_stmt}return #{c_body.join ',\n'};
    })
    """

define = (name, others...) ->
  if (to_type name) is "array"
    [name, args...] = name
    body = others
    return define name, [(symbol 'lambda'), args, body...]
  else
    [value] = others

  [module, name] = get_module name
  if module?
    context = Module.get module, true
  else
    context = oppo.context_stack.current_context

  context.def name, value

  c_name = compile(name)[0]
  c_val = compile(value)[0]
  new JavaScriptCode "#{c_name} = #{c_val}"

define_macro = (name, argnames, template) ->
  template_compile = if (to_type template) is "function" then template
  value = new Macro template_compile ? ->
    compile([(lambda argnames, template...), args])[0]
  define name, value
  undefined

define_builtin_macro = (name, template_compile) ->
  define_macro (symbol name), null, template_compile

define_builtin_macro "core::defmacro", (name, args, template) ->
  t_name = name.text
  define_macro t_name, args, template

define_builtin_macro "core::def", define

define_builtin_macro "core::lambda", lambda

define_builtin_macro "core::call", (fname, args...) ->
  c_fname = compile(fname)[0]
  c_args = compile args...
  new JavaScriptCode "#{c_fname}(#{c_args.join ', '})"

define_builtin_macro "core::object-get-value", (prop, base) ->
  c_prop = (compile prop)[0]
  c_base = (compile base)[0]
  new JavaScriptCode if is_quoted prop and is_symbol prop
    "#{c_base}.#{c_prop}"
  else
    "#{c_base}[#{c_prop}]"

define_builtin_macro "core::.", (fname, base, args...) ->
  fname = [(symbol 'quote'), fname]
  [[(symbol 'object-get-value'), fname, base], args...]

define_builtin_macro "js::eval", (to_eval) ->
  type = to_type to_eval
  if type is "string"
    new JavaScriptCode to_eval
  else
    [(symbol "eval"), (compile to_eval)[0]]

