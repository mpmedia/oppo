parser = try exports
catch e then @oppo.parser = {}
  
g = try window
catch e then global

recurse = try require './recurse'
catch e then @oppo.recurse

{Token, ProgramList} = try require './types'
catch e then @oppo.types

###
TOKENS
###
LIST_OPEN = new Token "("
LIST_CLOSE = new Token ")"
TYPED_LIST_OPEN = new Token "["
TYPED_LIST_CLOSE = new Token "]"
SPECIAL_OPEN = new Token "#"
SEP = new Token /\s|,/
QUOTE = new Token "'"
COMMENT_BEGIN = new Token ";"
COMMENT_END = new Token "\n"


###
LIST PROCESSING FUNCTIONS
###
empty = (item) -> !item.length
head = (item) -> item[0]
tail = (item) ->
  if typeof item is "string"
    item.substr 1
  else
    Array.prototype.slice.apply item, 1


###
PARSER/TOKENIZER
###
inQuote = null
inString = null
inComment = null
listItem = null
quoteWaitForListEnd = null

parser.parse = parse = (text, list, base) =>
  if arguments.length is 1
    # Assume a new call and initialize some things
    base = list = new ProgramList()
    list.push "do"
    inQuote = 0
    quoteWaitForListEnd = []
    inString = false
    inComment = false
    listItem = null
    
  h = head text
  t = tail text
  
  if COMMENT_BEGIN.test h
    inComment = true
  else if COMMENT_END.test h
    inComment = false
  
  if not inComment
    if empty text
      if listItem then list.push listItem
      return base
    else if QUOTE.test h
      t = "(quote #{t}"
      inQuote++
    else if (LIST_OPEN.test h) and not inString
      ls = new ProgramList parent:list
      list.push ls
      if quoteShouldWaitForListEnd t
        quoteWaitForListEnd.push list
        --inQuote
    else if (LIST_CLOSE.test h) and not inString
      ls = list.parent
    else if (TYPED_LIST_OPEN.test h) and not inString
      t = "(typed-list #{t}"
    else if (TYPED_LIST_CLOSE.test h) and not inString
      t = ") #{t}"
    else if (SPECIAL_OPEN.test h) and not inString
      if LIST_OPEN.test head t
        t = "(fn () #{t}"
        console.warn 'The #() syntax for lambda functions is incomplete. Do not use it.'
    else if not SEP.test h
      if (not listItem or inString) and h is '"'
        inString = not inString
      listItem or= ''
      listItem = "#{listItem}#{h}"
    
    if ((SEP.test h) or LIST_CLOSE.test h) and not inString
      t = resolveQuote list, h, t
      # This needs to be called second or errors will result
      resolveListItem list
    
  recurse parse, t, ls or list, base


###
HELPERS
###
quoteShouldWaitForListEnd = (t) ->
  if inQuote
    exception = "quote"
    len = exception.length
    test = t.substr 0, len
    if not (test is exception and SEP.test t.charAt len)
      return true
  false

resolveQuote = (list, h, t) ->
  listClose = LIST_CLOSE.test h
  closeThisList = quoteWaitForListEnd[quoteWaitForListEnd.length - 1] is list
  if (not closeThisList and (inQuote and listItem isnt 'quote')) or (closeThisList and listClose)
    inQuote = Math.max --inQuote, 0
    if closeThisList and listClose
      quoteWaitForListEnd.pop()
    ") #{t}"
  else
    t
    
resolveListItem = (list) ->
  if listItem?
    list.push listItem
    listItem = null
  list