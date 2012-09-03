// Generated by CoffeeScript 1.3.3
(function() {
  var compiled, oppo_code, parse_tree, result;

  oppo_code = "\n(def map (js::eval \"function (fn, ls) {\n  var ret = [];\n  for (var i = 0, len = ls.length; i < len; i++) {\n    var item = ls[i];\n    ret.push(fn(item));\n  }\n  return ret;\n}\"))\n\n(def (->string x) (String x))\n\n(def (str ...strings)\n  (.join (map ->string strings) \"\"))\n\n(str 1 2 3 4 5)\n";

  parse_tree = oppo.read(oppo_code);

  compiled = oppo.compile(parse_tree);

  result = eval(compiled);

}).call(this);
