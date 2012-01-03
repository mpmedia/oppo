var parser = function() {
  var parser = {trace:function trace() {
  }, yy:{}, symbols_:{"error":2, "program":3, "s_expression_list":4, "EOF":5, "s_expression":6, "special_form":7, "list":8, "symbol":9, "literal":10, "atom":11, "callable_list":12, "quoted_list":13, "js_map":14, "(":15, "element_list":16, ")":17, "[":18, "]":19, "JS_MAP_START":20, "MAP_END":21, "element":22, "QUOTE":23, "SYNTAX_QUOTE":24, "UNQUOTE":25, "FUNCTION":26, "NIL":27, "BOOLEAN_TRUE":28, "BOOLEAN_FALSE":29, "STRING":30, "REGEX":31, "FLAGS":32, "number":33, "DECIMAL_NUMBER":34, "OCTAL_NUMBER":35, 
  "HEXIDECIMAL_NUMBER":36, "BINARY_NUMBER":37, "IDENTIFIER":38, ":":39, "splat":40, "SPLAT":41, "$accept":0, "$end":1}, terminals_:{2:"error", 5:"EOF", 15:"(", 17:")", 18:"[", 19:"]", 20:"JS_MAP_START", 21:"MAP_END", 23:"QUOTE", 24:"SYNTAX_QUOTE", 25:"UNQUOTE", 26:"FUNCTION", 27:"NIL", 28:"BOOLEAN_TRUE", 29:"BOOLEAN_FALSE", 30:"STRING", 31:"REGEX", 32:"FLAGS", 34:"DECIMAL_NUMBER", 35:"OCTAL_NUMBER", 36:"HEXIDECIMAL_NUMBER", 37:"BINARY_NUMBER", 38:"IDENTIFIER", 39:":", 41:"SPLAT"}, productions_:[0, 
  [3, 2], [4, 2], [4, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [8, 1], [8, 1], [8, 1], [12, 3], [12, 2], [13, 3], [13, 2], [14, 3], [14, 2], [16, 1], [16, 2], [22, 1], [7, 2], [7, 2], [7, 2], [7, 3], [11, 1], [11, 1], [11, 1], [10, 1], [10, 2], [10, 1], [33, 1], [33, 1], [33, 1], [33, 1], [9, 1], [9, 2], [9, 1], [40, 2]], performAction:function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
    var $0 = $$.length - 1;
    switch(yystate) {
      case 1:
        return[["symbol", "do"]].concat($$[$0 - 1]);
        break;
      case 2:
        this.$ = $$[$0 - 1];
        this.$.push($$[$0]);
        break;
      case 3:
        this.$ = [$$[$0]];
        break;
      case 12:
        this.$ = $$[$0 - 1];
        break;
      case 13:
        this.$ = [];
        break;
      case 14:
        this.$ = [["symbol", "quote"], $$[$0 - 1]];
        break;
      case 15:
        this.$ = [["symbol", "quote"], []];
        break;
      case 16:
        this.$ = [["symbol", "js-map"]].concat($$[$0 - 1]);
        break;
      case 17:
        this.$ = [["symbol", "js-map"]];
        break;
      case 18:
        this.$ = [$$[$0]];
        break;
      case 19:
        this.$ = $$[$0 - 1];
        this.$.push($$[$0]);
        break;
      case 21:
        this.$ = [["symbol", "quote"], $$[$0]];
        break;
      case 22:
        this.$ = [["symbol", "syntax-quote"], $$[$0]];
        break;
      case 23:
        this.$ = [["symbol", "unquote"], $$[$0]];
        break;
      case 24:
        this.$ = [["symbol", "lambda"], [], $$[$0 - 1]];
        break;
      case 25:
        this.$ = null;
        break;
      case 26:
        this.$ = true;
        break;
      case 27:
        this.$ = false;
        break;
      case 28:
        this.$ = $$[$0];
        break;
      case 29:
        this.$ = [["symbol", "regex"], $$[$0 - 1], $$[$0].substr(1)];
        break;
      case 31:
        this.$ = parseInt(yytext, 10);
        break;
      case 32:
        this.$ = parseInt(yytext.replace(/^#0/, ""), 8);
        break;
      case 33:
        this.$ = parseInt(yytext.replace(/^#x/, ""), 16);
        break;
      case 34:
        this.$ = parseInt(yytext.replace(/^#b/, ""), 2);
        break;
      case 35:
        this.$ = ["symbol", yytext];
        break;
      case 36:
        this.$ = [["symbol", "keyword"], $$[$0]];
        break;
      case 38:
        this.$ = [["symbol", "splat"], $$[$0]];
        break
    }
  }, table:[{3:1, 4:2, 6:3, 7:4, 8:5, 9:6, 10:7, 11:8, 12:13, 13:14, 14:15, 15:[1, 25], 18:[1, 26], 20:[1, 27], 23:[1, 9], 24:[1, 10], 25:[1, 11], 26:[1, 12], 27:[1, 22], 28:[1, 23], 29:[1, 24], 30:[1, 19], 31:[1, 20], 33:21, 34:[1, 29], 35:[1, 30], 36:[1, 31], 37:[1, 32], 38:[1, 16], 39:[1, 17], 40:18, 41:[1, 28]}, {1:[3]}, {5:[1, 33], 6:34, 7:4, 8:5, 9:6, 10:7, 11:8, 12:13, 13:14, 14:15, 15:[1, 25], 18:[1, 26], 20:[1, 27], 23:[1, 9], 24:[1, 10], 25:[1, 11], 26:[1, 12], 27:[1, 22], 28:[1, 23], 29:[1, 
  24], 30:[1, 19], 31:[1, 20], 33:21, 34:[1, 29], 35:[1, 30], 36:[1, 31], 37:[1, 32], 38:[1, 16], 39:[1, 17], 40:18, 41:[1, 28]}, {5:[2, 3], 15:[2, 3], 18:[2, 3], 20:[2, 3], 23:[2, 3], 24:[2, 3], 25:[2, 3], 26:[2, 3], 27:[2, 3], 28:[2, 3], 29:[2, 3], 30:[2, 3], 31:[2, 3], 34:[2, 3], 35:[2, 3], 36:[2, 3], 37:[2, 3], 38:[2, 3], 39:[2, 3], 41:[2, 3]}, {5:[2, 4], 15:[2, 4], 17:[2, 4], 18:[2, 4], 19:[2, 4], 20:[2, 4], 21:[2, 4], 23:[2, 4], 24:[2, 4], 25:[2, 4], 26:[2, 4], 27:[2, 4], 28:[2, 4], 29:[2, 
  4], 30:[2, 4], 31:[2, 4], 34:[2, 4], 35:[2, 4], 36:[2, 4], 37:[2, 4], 38:[2, 4], 39:[2, 4], 41:[2, 4]}, {5:[2, 5], 15:[2, 5], 17:[2, 5], 18:[2, 5], 19:[2, 5], 20:[2, 5], 21:[2, 5], 23:[2, 5], 24:[2, 5], 25:[2, 5], 26:[2, 5], 27:[2, 5], 28:[2, 5], 29:[2, 5], 30:[2, 5], 31:[2, 5], 34:[2, 5], 35:[2, 5], 36:[2, 5], 37:[2, 5], 38:[2, 5], 39:[2, 5], 41:[2, 5]}, {5:[2, 6], 15:[2, 6], 17:[2, 6], 18:[2, 6], 19:[2, 6], 20:[2, 6], 21:[2, 6], 23:[2, 6], 24:[2, 6], 25:[2, 6], 26:[2, 6], 27:[2, 6], 28:[2, 6], 
  29:[2, 6], 30:[2, 6], 31:[2, 6], 34:[2, 6], 35:[2, 6], 36:[2, 6], 37:[2, 6], 38:[2, 6], 39:[2, 6], 41:[2, 6]}, {5:[2, 7], 15:[2, 7], 17:[2, 7], 18:[2, 7], 19:[2, 7], 20:[2, 7], 21:[2, 7], 23:[2, 7], 24:[2, 7], 25:[2, 7], 26:[2, 7], 27:[2, 7], 28:[2, 7], 29:[2, 7], 30:[2, 7], 31:[2, 7], 34:[2, 7], 35:[2, 7], 36:[2, 7], 37:[2, 7], 38:[2, 7], 39:[2, 7], 41:[2, 7]}, {5:[2, 8], 15:[2, 8], 17:[2, 8], 18:[2, 8], 19:[2, 8], 20:[2, 8], 21:[2, 8], 23:[2, 8], 24:[2, 8], 25:[2, 8], 26:[2, 8], 27:[2, 8], 28:[2, 
  8], 29:[2, 8], 30:[2, 8], 31:[2, 8], 34:[2, 8], 35:[2, 8], 36:[2, 8], 37:[2, 8], 38:[2, 8], 39:[2, 8], 41:[2, 8]}, {6:35, 7:4, 8:5, 9:6, 10:7, 11:8, 12:13, 13:14, 14:15, 15:[1, 25], 18:[1, 26], 20:[1, 27], 23:[1, 9], 24:[1, 10], 25:[1, 11], 26:[1, 12], 27:[1, 22], 28:[1, 23], 29:[1, 24], 30:[1, 19], 31:[1, 20], 33:21, 34:[1, 29], 35:[1, 30], 36:[1, 31], 37:[1, 32], 38:[1, 16], 39:[1, 17], 40:18, 41:[1, 28]}, {6:36, 7:4, 8:5, 9:6, 10:7, 11:8, 12:13, 13:14, 14:15, 15:[1, 25], 18:[1, 26], 20:[1, 27], 
  23:[1, 9], 24:[1, 10], 25:[1, 11], 26:[1, 12], 27:[1, 22], 28:[1, 23], 29:[1, 24], 30:[1, 19], 31:[1, 20], 33:21, 34:[1, 29], 35:[1, 30], 36:[1, 31], 37:[1, 32], 38:[1, 16], 39:[1, 17], 40:18, 41:[1, 28]}, {6:37, 7:4, 8:5, 9:6, 10:7, 11:8, 12:13, 13:14, 14:15, 15:[1, 25], 18:[1, 26], 20:[1, 27], 23:[1, 9], 24:[1, 10], 25:[1, 11], 26:[1, 12], 27:[1, 22], 28:[1, 23], 29:[1, 24], 30:[1, 19], 31:[1, 20], 33:21, 34:[1, 29], 35:[1, 30], 36:[1, 31], 37:[1, 32], 38:[1, 16], 39:[1, 17], 40:18, 41:[1, 28]}, 
  {6:40, 7:4, 8:5, 9:6, 10:7, 11:8, 12:13, 13:14, 14:15, 15:[1, 25], 16:38, 18:[1, 26], 20:[1, 27], 22:39, 23:[1, 9], 24:[1, 10], 25:[1, 11], 26:[1, 12], 27:[1, 22], 28:[1, 23], 29:[1, 24], 30:[1, 19], 31:[1, 20], 33:21, 34:[1, 29], 35:[1, 30], 36:[1, 31], 37:[1, 32], 38:[1, 16], 39:[1, 17], 40:18, 41:[1, 28]}, {5:[2, 9], 15:[2, 9], 17:[2, 9], 18:[2, 9], 19:[2, 9], 20:[2, 9], 21:[2, 9], 23:[2, 9], 24:[2, 9], 25:[2, 9], 26:[2, 9], 27:[2, 9], 28:[2, 9], 29:[2, 9], 30:[2, 9], 31:[2, 9], 34:[2, 9], 35:[2, 
  9], 36:[2, 9], 37:[2, 9], 38:[2, 9], 39:[2, 9], 41:[2, 9]}, {5:[2, 10], 15:[2, 10], 17:[2, 10], 18:[2, 10], 19:[2, 10], 20:[2, 10], 21:[2, 10], 23:[2, 10], 24:[2, 10], 25:[2, 10], 26:[2, 10], 27:[2, 10], 28:[2, 10], 29:[2, 10], 30:[2, 10], 31:[2, 10], 34:[2, 10], 35:[2, 10], 36:[2, 10], 37:[2, 10], 38:[2, 10], 39:[2, 10], 41:[2, 10]}, {5:[2, 11], 15:[2, 11], 17:[2, 11], 18:[2, 11], 19:[2, 11], 20:[2, 11], 21:[2, 11], 23:[2, 11], 24:[2, 11], 25:[2, 11], 26:[2, 11], 27:[2, 11], 28:[2, 11], 29:[2, 
  11], 30:[2, 11], 31:[2, 11], 34:[2, 11], 35:[2, 11], 36:[2, 11], 37:[2, 11], 38:[2, 11], 39:[2, 11], 41:[2, 11]}, {5:[2, 35], 15:[2, 35], 17:[2, 35], 18:[2, 35], 19:[2, 35], 20:[2, 35], 21:[2, 35], 23:[2, 35], 24:[2, 35], 25:[2, 35], 26:[2, 35], 27:[2, 35], 28:[2, 35], 29:[2, 35], 30:[2, 35], 31:[2, 35], 34:[2, 35], 35:[2, 35], 36:[2, 35], 37:[2, 35], 38:[2, 35], 39:[2, 35], 41:[2, 35]}, {38:[1, 41]}, {5:[2, 37], 15:[2, 37], 17:[2, 37], 18:[2, 37], 19:[2, 37], 20:[2, 37], 21:[2, 37], 23:[2, 37], 
  24:[2, 37], 25:[2, 37], 26:[2, 37], 27:[2, 37], 28:[2, 37], 29:[2, 37], 30:[2, 37], 31:[2, 37], 34:[2, 37], 35:[2, 37], 36:[2, 37], 37:[2, 37], 38:[2, 37], 39:[2, 37], 41:[2, 37]}, {5:[2, 28], 15:[2, 28], 17:[2, 28], 18:[2, 28], 19:[2, 28], 20:[2, 28], 21:[2, 28], 23:[2, 28], 24:[2, 28], 25:[2, 28], 26:[2, 28], 27:[2, 28], 28:[2, 28], 29:[2, 28], 30:[2, 28], 31:[2, 28], 34:[2, 28], 35:[2, 28], 36:[2, 28], 37:[2, 28], 38:[2, 28], 39:[2, 28], 41:[2, 28]}, {32:[1, 42]}, {5:[2, 30], 15:[2, 30], 17:[2, 
  30], 18:[2, 30], 19:[2, 30], 20:[2, 30], 21:[2, 30], 23:[2, 30], 24:[2, 30], 25:[2, 30], 26:[2, 30], 27:[2, 30], 28:[2, 30], 29:[2, 30], 30:[2, 30], 31:[2, 30], 34:[2, 30], 35:[2, 30], 36:[2, 30], 37:[2, 30], 38:[2, 30], 39:[2, 30], 41:[2, 30]}, {5:[2, 25], 15:[2, 25], 17:[2, 25], 18:[2, 25], 19:[2, 25], 20:[2, 25], 21:[2, 25], 23:[2, 25], 24:[2, 25], 25:[2, 25], 26:[2, 25], 27:[2, 25], 28:[2, 25], 29:[2, 25], 30:[2, 25], 31:[2, 25], 34:[2, 25], 35:[2, 25], 36:[2, 25], 37:[2, 25], 38:[2, 25], 39:[2, 
  25], 41:[2, 25]}, {5:[2, 26], 15:[2, 26], 17:[2, 26], 18:[2, 26], 19:[2, 26], 20:[2, 26], 21:[2, 26], 23:[2, 26], 24:[2, 26], 25:[2, 26], 26:[2, 26], 27:[2, 26], 28:[2, 26], 29:[2, 26], 30:[2, 26], 31:[2, 26], 34:[2, 26], 35:[2, 26], 36:[2, 26], 37:[2, 26], 38:[2, 26], 39:[2, 26], 41:[2, 26]}, {5:[2, 27], 15:[2, 27], 17:[2, 27], 18:[2, 27], 19:[2, 27], 20:[2, 27], 21:[2, 27], 23:[2, 27], 24:[2, 27], 25:[2, 27], 26:[2, 27], 27:[2, 27], 28:[2, 27], 29:[2, 27], 30:[2, 27], 31:[2, 27], 34:[2, 27], 
  35:[2, 27], 36:[2, 27], 37:[2, 27], 38:[2, 27], 39:[2, 27], 41:[2, 27]}, {6:40, 7:4, 8:5, 9:6, 10:7, 11:8, 12:13, 13:14, 14:15, 15:[1, 25], 16:43, 17:[1, 44], 18:[1, 26], 20:[1, 27], 22:39, 23:[1, 9], 24:[1, 10], 25:[1, 11], 26:[1, 12], 27:[1, 22], 28:[1, 23], 29:[1, 24], 30:[1, 19], 31:[1, 20], 33:21, 34:[1, 29], 35:[1, 30], 36:[1, 31], 37:[1, 32], 38:[1, 16], 39:[1, 17], 40:18, 41:[1, 28]}, {6:40, 7:4, 8:5, 9:6, 10:7, 11:8, 12:13, 13:14, 14:15, 15:[1, 25], 16:45, 18:[1, 26], 19:[1, 46], 20:[1, 
  27], 22:39, 23:[1, 9], 24:[1, 10], 25:[1, 11], 26:[1, 12], 27:[1, 22], 28:[1, 23], 29:[1, 24], 30:[1, 19], 31:[1, 20], 33:21, 34:[1, 29], 35:[1, 30], 36:[1, 31], 37:[1, 32], 38:[1, 16], 39:[1, 17], 40:18, 41:[1, 28]}, {6:40, 7:4, 8:5, 9:6, 10:7, 11:8, 12:13, 13:14, 14:15, 15:[1, 25], 16:47, 18:[1, 26], 20:[1, 27], 21:[1, 48], 22:39, 23:[1, 9], 24:[1, 10], 25:[1, 11], 26:[1, 12], 27:[1, 22], 28:[1, 23], 29:[1, 24], 30:[1, 19], 31:[1, 20], 33:21, 34:[1, 29], 35:[1, 30], 36:[1, 31], 37:[1, 32], 38:[1, 
  16], 39:[1, 17], 40:18, 41:[1, 28]}, {9:49, 38:[1, 16], 39:[1, 17], 40:18, 41:[1, 28]}, {5:[2, 31], 15:[2, 31], 17:[2, 31], 18:[2, 31], 19:[2, 31], 20:[2, 31], 21:[2, 31], 23:[2, 31], 24:[2, 31], 25:[2, 31], 26:[2, 31], 27:[2, 31], 28:[2, 31], 29:[2, 31], 30:[2, 31], 31:[2, 31], 34:[2, 31], 35:[2, 31], 36:[2, 31], 37:[2, 31], 38:[2, 31], 39:[2, 31], 41:[2, 31]}, {5:[2, 32], 15:[2, 32], 17:[2, 32], 18:[2, 32], 19:[2, 32], 20:[2, 32], 21:[2, 32], 23:[2, 32], 24:[2, 32], 25:[2, 32], 26:[2, 32], 27:[2, 
  32], 28:[2, 32], 29:[2, 32], 30:[2, 32], 31:[2, 32], 34:[2, 32], 35:[2, 32], 36:[2, 32], 37:[2, 32], 38:[2, 32], 39:[2, 32], 41:[2, 32]}, {5:[2, 33], 15:[2, 33], 17:[2, 33], 18:[2, 33], 19:[2, 33], 20:[2, 33], 21:[2, 33], 23:[2, 33], 24:[2, 33], 25:[2, 33], 26:[2, 33], 27:[2, 33], 28:[2, 33], 29:[2, 33], 30:[2, 33], 31:[2, 33], 34:[2, 33], 35:[2, 33], 36:[2, 33], 37:[2, 33], 38:[2, 33], 39:[2, 33], 41:[2, 33]}, {5:[2, 34], 15:[2, 34], 17:[2, 34], 18:[2, 34], 19:[2, 34], 20:[2, 34], 21:[2, 34], 
  23:[2, 34], 24:[2, 34], 25:[2, 34], 26:[2, 34], 27:[2, 34], 28:[2, 34], 29:[2, 34], 30:[2, 34], 31:[2, 34], 34:[2, 34], 35:[2, 34], 36:[2, 34], 37:[2, 34], 38:[2, 34], 39:[2, 34], 41:[2, 34]}, {1:[2, 1]}, {5:[2, 2], 15:[2, 2], 18:[2, 2], 20:[2, 2], 23:[2, 2], 24:[2, 2], 25:[2, 2], 26:[2, 2], 27:[2, 2], 28:[2, 2], 29:[2, 2], 30:[2, 2], 31:[2, 2], 34:[2, 2], 35:[2, 2], 36:[2, 2], 37:[2, 2], 38:[2, 2], 39:[2, 2], 41:[2, 2]}, {5:[2, 21], 15:[2, 21], 17:[2, 21], 18:[2, 21], 19:[2, 21], 20:[2, 21], 21:[2, 
  21], 23:[2, 21], 24:[2, 21], 25:[2, 21], 26:[2, 21], 27:[2, 21], 28:[2, 21], 29:[2, 21], 30:[2, 21], 31:[2, 21], 34:[2, 21], 35:[2, 21], 36:[2, 21], 37:[2, 21], 38:[2, 21], 39:[2, 21], 41:[2, 21]}, {5:[2, 22], 15:[2, 22], 17:[2, 22], 18:[2, 22], 19:[2, 22], 20:[2, 22], 21:[2, 22], 23:[2, 22], 24:[2, 22], 25:[2, 22], 26:[2, 22], 27:[2, 22], 28:[2, 22], 29:[2, 22], 30:[2, 22], 31:[2, 22], 34:[2, 22], 35:[2, 22], 36:[2, 22], 37:[2, 22], 38:[2, 22], 39:[2, 22], 41:[2, 22]}, {5:[2, 23], 15:[2, 23], 
  17:[2, 23], 18:[2, 23], 19:[2, 23], 20:[2, 23], 21:[2, 23], 23:[2, 23], 24:[2, 23], 25:[2, 23], 26:[2, 23], 27:[2, 23], 28:[2, 23], 29:[2, 23], 30:[2, 23], 31:[2, 23], 34:[2, 23], 35:[2, 23], 36:[2, 23], 37:[2, 23], 38:[2, 23], 39:[2, 23], 41:[2, 23]}, {6:40, 7:4, 8:5, 9:6, 10:7, 11:8, 12:13, 13:14, 14:15, 15:[1, 25], 17:[1, 50], 18:[1, 26], 20:[1, 27], 22:51, 23:[1, 9], 24:[1, 10], 25:[1, 11], 26:[1, 12], 27:[1, 22], 28:[1, 23], 29:[1, 24], 30:[1, 19], 31:[1, 20], 33:21, 34:[1, 29], 35:[1, 30], 
  36:[1, 31], 37:[1, 32], 38:[1, 16], 39:[1, 17], 40:18, 41:[1, 28]}, {15:[2, 18], 17:[2, 18], 18:[2, 18], 19:[2, 18], 20:[2, 18], 21:[2, 18], 23:[2, 18], 24:[2, 18], 25:[2, 18], 26:[2, 18], 27:[2, 18], 28:[2, 18], 29:[2, 18], 30:[2, 18], 31:[2, 18], 34:[2, 18], 35:[2, 18], 36:[2, 18], 37:[2, 18], 38:[2, 18], 39:[2, 18], 41:[2, 18]}, {15:[2, 20], 17:[2, 20], 18:[2, 20], 19:[2, 20], 20:[2, 20], 21:[2, 20], 23:[2, 20], 24:[2, 20], 25:[2, 20], 26:[2, 20], 27:[2, 20], 28:[2, 20], 29:[2, 20], 30:[2, 20], 
  31:[2, 20], 34:[2, 20], 35:[2, 20], 36:[2, 20], 37:[2, 20], 38:[2, 20], 39:[2, 20], 41:[2, 20]}, {5:[2, 36], 15:[2, 36], 17:[2, 36], 18:[2, 36], 19:[2, 36], 20:[2, 36], 21:[2, 36], 23:[2, 36], 24:[2, 36], 25:[2, 36], 26:[2, 36], 27:[2, 36], 28:[2, 36], 29:[2, 36], 30:[2, 36], 31:[2, 36], 34:[2, 36], 35:[2, 36], 36:[2, 36], 37:[2, 36], 38:[2, 36], 39:[2, 36], 41:[2, 36]}, {5:[2, 29], 15:[2, 29], 17:[2, 29], 18:[2, 29], 19:[2, 29], 20:[2, 29], 21:[2, 29], 23:[2, 29], 24:[2, 29], 25:[2, 29], 26:[2, 
  29], 27:[2, 29], 28:[2, 29], 29:[2, 29], 30:[2, 29], 31:[2, 29], 34:[2, 29], 35:[2, 29], 36:[2, 29], 37:[2, 29], 38:[2, 29], 39:[2, 29], 41:[2, 29]}, {6:40, 7:4, 8:5, 9:6, 10:7, 11:8, 12:13, 13:14, 14:15, 15:[1, 25], 17:[1, 52], 18:[1, 26], 20:[1, 27], 22:51, 23:[1, 9], 24:[1, 10], 25:[1, 11], 26:[1, 12], 27:[1, 22], 28:[1, 23], 29:[1, 24], 30:[1, 19], 31:[1, 20], 33:21, 34:[1, 29], 35:[1, 30], 36:[1, 31], 37:[1, 32], 38:[1, 16], 39:[1, 17], 40:18, 41:[1, 28]}, {5:[2, 13], 15:[2, 13], 17:[2, 13], 
  18:[2, 13], 19:[2, 13], 20:[2, 13], 21:[2, 13], 23:[2, 13], 24:[2, 13], 25:[2, 13], 26:[2, 13], 27:[2, 13], 28:[2, 13], 29:[2, 13], 30:[2, 13], 31:[2, 13], 34:[2, 13], 35:[2, 13], 36:[2, 13], 37:[2, 13], 38:[2, 13], 39:[2, 13], 41:[2, 13]}, {6:40, 7:4, 8:5, 9:6, 10:7, 11:8, 12:13, 13:14, 14:15, 15:[1, 25], 18:[1, 26], 19:[1, 53], 20:[1, 27], 22:51, 23:[1, 9], 24:[1, 10], 25:[1, 11], 26:[1, 12], 27:[1, 22], 28:[1, 23], 29:[1, 24], 30:[1, 19], 31:[1, 20], 33:21, 34:[1, 29], 35:[1, 30], 36:[1, 31], 
  37:[1, 32], 38:[1, 16], 39:[1, 17], 40:18, 41:[1, 28]}, {5:[2, 15], 15:[2, 15], 17:[2, 15], 18:[2, 15], 19:[2, 15], 20:[2, 15], 21:[2, 15], 23:[2, 15], 24:[2, 15], 25:[2, 15], 26:[2, 15], 27:[2, 15], 28:[2, 15], 29:[2, 15], 30:[2, 15], 31:[2, 15], 34:[2, 15], 35:[2, 15], 36:[2, 15], 37:[2, 15], 38:[2, 15], 39:[2, 15], 41:[2, 15]}, {6:40, 7:4, 8:5, 9:6, 10:7, 11:8, 12:13, 13:14, 14:15, 15:[1, 25], 18:[1, 26], 20:[1, 27], 21:[1, 54], 22:51, 23:[1, 9], 24:[1, 10], 25:[1, 11], 26:[1, 12], 27:[1, 22], 
  28:[1, 23], 29:[1, 24], 30:[1, 19], 31:[1, 20], 33:21, 34:[1, 29], 35:[1, 30], 36:[1, 31], 37:[1, 32], 38:[1, 16], 39:[1, 17], 40:18, 41:[1, 28]}, {5:[2, 17], 15:[2, 17], 17:[2, 17], 18:[2, 17], 19:[2, 17], 20:[2, 17], 21:[2, 17], 23:[2, 17], 24:[2, 17], 25:[2, 17], 26:[2, 17], 27:[2, 17], 28:[2, 17], 29:[2, 17], 30:[2, 17], 31:[2, 17], 34:[2, 17], 35:[2, 17], 36:[2, 17], 37:[2, 17], 38:[2, 17], 39:[2, 17], 41:[2, 17]}, {5:[2, 38], 15:[2, 38], 17:[2, 38], 18:[2, 38], 19:[2, 38], 20:[2, 38], 21:[2, 
  38], 23:[2, 38], 24:[2, 38], 25:[2, 38], 26:[2, 38], 27:[2, 38], 28:[2, 38], 29:[2, 38], 30:[2, 38], 31:[2, 38], 34:[2, 38], 35:[2, 38], 36:[2, 38], 37:[2, 38], 38:[2, 38], 39:[2, 38], 41:[2, 38]}, {5:[2, 24], 15:[2, 24], 17:[2, 24], 18:[2, 24], 19:[2, 24], 20:[2, 24], 21:[2, 24], 23:[2, 24], 24:[2, 24], 25:[2, 24], 26:[2, 24], 27:[2, 24], 28:[2, 24], 29:[2, 24], 30:[2, 24], 31:[2, 24], 34:[2, 24], 35:[2, 24], 36:[2, 24], 37:[2, 24], 38:[2, 24], 39:[2, 24], 41:[2, 24]}, {15:[2, 19], 17:[2, 19], 
  18:[2, 19], 19:[2, 19], 20:[2, 19], 21:[2, 19], 23:[2, 19], 24:[2, 19], 25:[2, 19], 26:[2, 19], 27:[2, 19], 28:[2, 19], 29:[2, 19], 30:[2, 19], 31:[2, 19], 34:[2, 19], 35:[2, 19], 36:[2, 19], 37:[2, 19], 38:[2, 19], 39:[2, 19], 41:[2, 19]}, {5:[2, 12], 15:[2, 12], 17:[2, 12], 18:[2, 12], 19:[2, 12], 20:[2, 12], 21:[2, 12], 23:[2, 12], 24:[2, 12], 25:[2, 12], 26:[2, 12], 27:[2, 12], 28:[2, 12], 29:[2, 12], 30:[2, 12], 31:[2, 12], 34:[2, 12], 35:[2, 12], 36:[2, 12], 37:[2, 12], 38:[2, 12], 39:[2, 
  12], 41:[2, 12]}, {5:[2, 14], 15:[2, 14], 17:[2, 14], 18:[2, 14], 19:[2, 14], 20:[2, 14], 21:[2, 14], 23:[2, 14], 24:[2, 14], 25:[2, 14], 26:[2, 14], 27:[2, 14], 28:[2, 14], 29:[2, 14], 30:[2, 14], 31:[2, 14], 34:[2, 14], 35:[2, 14], 36:[2, 14], 37:[2, 14], 38:[2, 14], 39:[2, 14], 41:[2, 14]}, {5:[2, 16], 15:[2, 16], 17:[2, 16], 18:[2, 16], 19:[2, 16], 20:[2, 16], 21:[2, 16], 23:[2, 16], 24:[2, 16], 25:[2, 16], 26:[2, 16], 27:[2, 16], 28:[2, 16], 29:[2, 16], 30:[2, 16], 31:[2, 16], 34:[2, 16], 
  35:[2, 16], 36:[2, 16], 37:[2, 16], 38:[2, 16], 39:[2, 16], 41:[2, 16]}], defaultActions:{33:[2, 1]}, parseError:function parseError(str, hash) {
    throw new Error(str);
  }, parse:function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if(typeof this.lexer.yylloc == "undefined") {
      this.lexer.yylloc = {}
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    if(typeof this.yy.parseError === "function") {
      this.parseError = this.yy.parseError
    }
    function popStack(n) {
      stack.length = stack.length - 2 * n;
      vstack.length = vstack.length - n;
      lstack.length = lstack.length - n
    }
    function lex() {
      var token;
      token = self.lexer.lex() || 1;
      if(typeof token !== "number") {
        token = self.symbols_[token] || token
      }
      return token
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while(true) {
      state = stack[stack.length - 1];
      if(this.defaultActions[state]) {
        action = this.defaultActions[state]
      }else {
        if(symbol == null) {
          symbol = lex()
        }
        action = table[state] && table[state][symbol]
      }
      _handle_error:if(typeof action === "undefined" || !action.length || !action[0]) {
        if(!recovering) {
          expected = [];
          for(p in table[state]) {
            if(this.terminals_[p] && p > 2) {
              expected.push("'" + this.terminals_[p] + "'")
            }
          }
          var errStr = "";
          if(this.lexer.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + this.terminals_[symbol] + "'"
          }else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'")
          }
          this.parseError(errStr, {text:this.lexer.match, token:this.terminals_[symbol] || symbol, line:this.lexer.yylineno, loc:yyloc, expected:expected})
        }
        if(recovering == 3) {
          if(symbol == EOF) {
            throw new Error(errStr || "Parsing halted.");
          }
          yyleng = this.lexer.yyleng;
          yytext = this.lexer.yytext;
          yylineno = this.lexer.yylineno;
          yyloc = this.lexer.yylloc;
          symbol = lex()
        }
        while(1) {
          if(TERROR.toString() in table[state]) {
            break
          }
          if(state == 0) {
            throw new Error(errStr || "Parsing halted.");
          }
          popStack(1);
          state = stack[stack.length - 1]
        }
        preErrorSymbol = symbol;
        symbol = TERROR;
        state = stack[stack.length - 1];
        action = table[state] && table[state][TERROR];
        recovering = 3
      }
      if(action[0] instanceof Array && action.length > 1) {
        throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
      }
      switch(action[0]) {
        case 1:
          stack.push(symbol);
          vstack.push(this.lexer.yytext);
          lstack.push(this.lexer.yylloc);
          stack.push(action[1]);
          symbol = null;
          if(!preErrorSymbol) {
            yyleng = this.lexer.yyleng;
            yytext = this.lexer.yytext;
            yylineno = this.lexer.yylineno;
            yyloc = this.lexer.yylloc;
            if(recovering > 0) {
              recovering--
            }
          }else {
            symbol = preErrorSymbol;
            preErrorSymbol = null
          }
          break;
        case 2:
          len = this.productions_[action[1]][1];
          yyval.$ = vstack[vstack.length - len];
          yyval._$ = {first_line:lstack[lstack.length - (len || 1)].first_line, last_line:lstack[lstack.length - 1].last_line, first_column:lstack[lstack.length - (len || 1)].first_column, last_column:lstack[lstack.length - 1].last_column};
          r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
          if(typeof r !== "undefined") {
            return r
          }
          if(len) {
            stack = stack.slice(0, -1 * len * 2);
            vstack = vstack.slice(0, -1 * len);
            lstack = lstack.slice(0, -1 * len)
          }
          stack.push(this.productions_[action[1]][0]);
          vstack.push(yyval.$);
          lstack.push(yyval._$);
          newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
          stack.push(newState);
          break;
        case 3:
          return true
      }
    }
    return true
  }};
  var lexer = function() {
    var lexer = {EOF:1, parseError:function parseError(str, hash) {
      if(this.yy.parseError) {
        this.yy.parseError(str, hash)
      }else {
        throw new Error(str);
      }
    }, setInput:function(input) {
      this._input = input;
      this._more = this._less = this.done = false;
      this.yylineno = this.yyleng = 0;
      this.yytext = this.matched = this.match = "";
      this.conditionStack = ["INITIAL"];
      this.yylloc = {first_line:1, first_column:0, last_line:1, last_column:0};
      return this
    }, input:function() {
      var ch = this._input[0];
      this.yytext += ch;
      this.yyleng++;
      this.match += ch;
      this.matched += ch;
      var lines = ch.match(/\n/);
      if(lines) {
        this.yylineno++
      }
      this._input = this._input.slice(1);
      return ch
    }, unput:function(ch) {
      this._input = ch + this._input;
      return this
    }, more:function() {
      this._more = true;
      return this
    }, pastInput:function() {
      var past = this.matched.substr(0, this.matched.length - this.match.length);
      return(past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "")
    }, upcomingInput:function() {
      var next = this.match;
      if(next.length < 20) {
        next += this._input.substr(0, 20 - next.length)
      }
      return(next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "")
    }, showPosition:function() {
      var pre = this.pastInput();
      var c = (new Array(pre.length + 1)).join("-");
      return pre + this.upcomingInput() + "\n" + c + "^"
    }, next:function() {
      if(this.done) {
        return this.EOF
      }
      if(!this._input) {
        this.done = true
      }
      var token, match, col, lines;
      if(!this._more) {
        this.yytext = "";
        this.match = ""
      }
      var rules = this._currentRules();
      for(var i = 0;i < rules.length;i++) {
        match = this._input.match(this.rules[rules[i]]);
        if(match) {
          lines = match[0].match(/\n.*/g);
          if(lines) {
            this.yylineno += lines.length
          }
          this.yylloc = {first_line:this.yylloc.last_line, last_line:this.yylineno + 1, first_column:this.yylloc.last_column, last_column:lines ? lines[lines.length - 1].length - 1 : this.yylloc.last_column + match[0].length};
          this.yytext += match[0];
          this.match += match[0];
          this.matches = match;
          this.yyleng = this.yytext.length;
          this._more = false;
          this._input = this._input.slice(match[0].length);
          this.matched += match[0];
          token = this.performAction.call(this, this.yy, this, rules[i], this.conditionStack[this.conditionStack.length - 1]);
          if(token) {
            return token
          }else {
            return
          }
        }
      }
      if(this._input === "") {
        return this.EOF
      }else {
        this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {text:"", token:null, line:this.yylineno})
      }
    }, lex:function lex() {
      var r = this.next();
      if(typeof r !== "undefined") {
        return r
      }else {
        return this.lex()
      }
    }, begin:function begin(condition) {
      this.conditionStack.push(condition)
    }, popState:function popState() {
      return this.conditionStack.pop()
    }, _currentRules:function _currentRules() {
      return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
    }, topState:function() {
      return this.conditionStack[this.conditionStack.length - 2]
    }, pushState:function begin(condition) {
      this.begin(condition)
    }};
    lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
      var YYSTATE = YY_START;
      switch($avoiding_name_collisions) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          this.begin("string");
          break;
        case 3:
          this.popState();
          break;
        case 4:
          return 30;
          break;
        case 5:
          this.begin("regexp");
          break;
        case 6:
          this.popState();
          return 32;
          break;
        case 7:
          return 31;
          break;
        case 8:
          return 34;
          break;
        case 9:
          return 35;
          break;
        case 10:
          return 36;
          break;
        case 11:
          return 37;
          break;
        case 12:
          return 27;
          break;
        case 13:
          return 28;
          break;
        case 14:
          return 29;
          break;
        case 15:
          return 15;
          break;
        case 16:
          return 17;
          break;
        case 17:
          return 18;
          break;
        case 18:
          return 19;
          break;
        case 19:
          return"HASH_MAP_START";
          break;
        case 20:
          return 20;
          break;
        case 21:
          return 21;
          break;
        case 22:
          return 26;
          break;
        case 23:
          return 23;
          break;
        case 24:
          return 24;
          break;
        case 25:
          return 25;
          break;
        case 26:
          return 41;
          break;
        case 27:
          return 39;
          break;
        case 28:
          return"@";
          break;
        case 29:
          return 38;
          break;
        case 30:
          return 5;
          break;
        case 31:
          return"INVALID";
          break
      }
    };
    lexer.rules = [/^;.*/, /^\s+/, /^"/, /^"/, /^[^"]*/, /^#"/, /^"[a-z]*/, /^[^"]*/, /^[+-]?[0-9]+(\.[0-9]+)?\b/, /^[+-]?#0[0-8]+\b/, /^[+-]?#x[0-9a-fA-F]+\b/, /^[+-]?#b[0-1]+\b/, /^nil\b/, /^#t\b/, /^#f\b/, /^\(/, /^\)/, /^\[/, /^\]/, /^#\{/, /^\{/, /^\}/, /^#\(/, /^'/, /^`/, /^~/, /^\.\.\./, /^:/, /^@/, /^[\w!@#\$%\^&\*\-\+=:'\?\/\\<>\.,]+/, /^$/, /^./];
    lexer.conditions = {"string":{"rules":[3, 4], "inclusive":false}, "regex":{"rules":[6, 7], "inclusive":false}, "INITIAL":{"rules":[0, 1, 2, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "inclusive":true}};
    return lexer
  }();
  parser.lexer = lexer;
  return parser
}();
if(typeof require !== "undefined" && typeof exports !== "undefined") {
  exports.parser = parser;
  exports.parse = function() {
    return parser.parse.apply(parser, arguments)
  };
  exports.main = function commonjsMain(args) {
    if(!args[1]) {
      throw new Error("Usage: " + args[0] + " FILE");
    }
    if(typeof process !== "undefined") {
      var source = require("fs").readFileSync(require("path").join(process.cwd(), args[1]), "utf8")
    }else {
      var cwd = require("file").path(require("file").cwd());
      var source = cwd.join(args[1]).read({charset:"utf-8"})
    }
    return exports.parser.parse(source)
  };
  if(typeof module !== "undefined" && require.main === module) {
    exports.main(typeof process !== "undefined" ? process.argv.slice(1) : require("system").args)
  }
}
;(function() {
  var JS_ILLEGAL_IDENTIFIER_CHARS, JS_KEYWORDS, began, compile, compiler, destructure_list, end_final_var_group, end_var_group, first_var_group, gensym, get_args, is_splat, is_symbol, is_unquote, last_var_group, make_error, new_var_group, objectSet, oppo, quote_all, raise, raiseDefError, raiseParseError, read, read_compile, recursive_map, restructure_list, to_js_symbol, to_symbol, trim, _ref, _ref2, _ref3;
  var __hasProp = Object.prototype.hasOwnProperty, __indexOf = Array.prototype.indexOf || function(item) {
    for(var i = 0, l = this.length;i < l;i++) {
      if(__hasProp.call(this, i) && this[i] === item) {
        return i
      }
    }
    return-1
  }, __slice = Array.prototype.slice;
  if(typeof global === "undefined" || global === null) {
    global = window
  }
  if(typeof _ === "undefined" || _ === null) {
    _ = require("underscore")
  }
  JS_KEYWORDS = ["break", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "export", "extends", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", "label", "let", "new", "package", "private", "protected", "public", "static", "return", "switch", "super", "this", "throw", "try", "catch", "typeof", "var", "void", "while", "with", "yield"];
  JS_ILLEGAL_IDENTIFIER_CHARS = {"~":"tilde", "`":"backtick", "!":"exclmark", "@":"at", "#":"pound", "%":"percent", "^":"carat", "&":"amperstand", "*":"star", "(":"oparen", ")":"cparen", "-":"dash", "+":"plus", "=":"equals", "{":"ocurly", "}":"ccurly", "[":"osquare", "]":"csquare", "|":"pipe", "\\":"bslash", '"':"dblquote", "'":"snglquote", ":":"colon", ";":"semicolon", "<":"oangle", ">":"rangle", ",":"comma", ".":"dot", "?":"qmark", "/":"fslash", " ":"space", "\t":"tab", "\n":"newline", "\r":"return", 
  "\u000b":"vertical", "\x00":"null"};
  is_splat = function(s) {
    var _ref;
    return(s != null ? (_ref = s[0]) != null ? _ref[1] : void 0 : void 0) === "splat"
  };
  is_unquote = function(u) {
    var _ref;
    return(u != null ? (_ref = u[0]) != null ? _ref[1] : void 0 : void 0) === "unquote"
  };
  is_symbol = function(s) {
    return(s != null ? s[0] : void 0) === "symbol"
  };
  to_symbol = function(s) {
    return["symbol", s]
  };
  objectSet = function(o, s, v) {
    var get, path, ret, _final, _ref;
    if(arguments.length < 3) {
      _ref = [o, s, null], s = _ref[0], v = _ref[1], o = _ref[2]
    }
    if(o == null) {
      o = global
    }
    path = (s != null ? s : "").split(".");
    _final = path.pop();
    get = function(o, k) {
      var _ref2;
      return(_ref2 = o[k]) != null ? _ref2 : o[k] = {}
    };
    ret = _.reduce(path, get, o);
    return ret[_final] = v
  };
  recursive_map = function(ls, fn, pass_back, parent, parent_index) {
    if(pass_back == null) {
      pass_back = function(item) {
        return!_.isArray(item)
      }
    }
    return _.map(ls, function(item, i, ls) {
      if(pass_back(item)) {
        return fn(item, i, ls, parent, parent_index)
      }else {
        return recursive_map(item, fn, pass_back, ls, i)
      }
    })
  };
  to_js_symbol = function(ident) {
    var keyword, replaced, _char, _i, _len;
    for(_i = 0, _len = JS_KEYWORDS.length;_i < _len;_i++) {
      keyword = JS_KEYWORDS[_i];
      ident = ident === keyword ? "_" + ident + "_" : ident
    }
    ident = ident.replace(/\-/g, "_");
    for(_char in JS_ILLEGAL_IDENTIFIER_CHARS) {
      if(!__hasProp.call(JS_ILLEGAL_IDENTIFIER_CHARS, _char)) {
        continue
      }
      replaced = JS_ILLEGAL_IDENTIFIER_CHARS[_char];
      while(ident.indexOf(_char) >= 0) {
        ident = ident.replace(_char, "_" + replaced + "_")
      }
    }
    return ident
  };
  gensym = function(sym) {
    var c_sym, num, time;
    if(sym == null) {
      sym = "gen"
    }
    if(!is_symbol(sym)) {
      c_sym = to_js_symbol(sym)
    }else {
      c_sym = compile(sym)
    }
    time = (+new Date).toString(32);
    num = Math.floor(Math.random() * 1E10).toString(32);
    return"" + c_sym + "_" + time + "_" + num
  };
  trim = (_ref = String.prototype.trim) != null ? _ref : function() {
    return this.replace(/^\s+/, "").replace(/\s+$/, "")
  };
  make_error = function(name, message) {
    var BaseError, err, _ref2;
    if(arguments.length === 1) {
      _ref2 = [name, null], message = _ref2[0], name = _ref2[1]
    }
    BaseError = _.isFunction(name) ? name : Error;
    err = new BaseError;
    if(name != null) {
      err.name = name
    }
    if(message != null) {
      err.message = message
    }
    return err
  };
  raise = function() {
    throw make_error.apply(null, arguments);
  };
  raiseParseError = function(expr) {
    return raise("ParseError", "Can't parse expression: " + expr)
  };
  raiseDefError = function(name) {
    return raise("DefError", "Can't define previously defined value: " + name)
  };
  _ref2 = [], new_var_group = _ref2[0], first_var_group = _ref2[1], last_var_group = _ref2[2], end_var_group = _ref2[3], end_final_var_group = _ref2[4];
  (function() {
    var var_groups;
    var_groups = [[]];
    new_var_group = function() {
      return var_groups.push([])
    };
    first_var_group = function() {
      return var_groups[0]
    };
    last_var_group = function() {
      return _.last(var_groups)
    };
    end_var_group = function() {
      var ret;
      ret = var_groups.pop();
      if(var_groups.length === 0) {
        var_groups.push([])
      }
      return ret
    };
    return end_final_var_group = function() {
      if(var_groups.length !== 1) {
        raise("VarGroupsError", "Expecting 1 final var group, got " + var_groups.length + " instead")
      }
      return end_var_group()
    }
  })();
  destructure_list = function(pattern, sourceName) {
    var c_item, compiled, has_splat, i, item, oldSourceIndex, patternLen, result, sourceIndex, _len;
    result = [];
    has_splat = false;
    patternLen = pattern.length;
    sourceIndex = {value:0, toString:function() {
      var num, numStr;
      if(this.value >= 0) {
        return"" + this.value
      }else {
        num = this.value * -1 - 1;
        numStr = num ? " - " + num : "";
        return"" + sourceName + ".length" + numStr
      }
    }};
    for(i = 0, _len = pattern.length;i < _len;i++) {
      item = pattern[i];
      if(is_splat(item)) {
        has_splat = true;
        c_item = compile(item[1]);
        oldSourceIndex = "" + sourceIndex;
        sourceIndex.value = (patternLen - i) * -1;
        result.push([c_item, "Array.prototype.slice.call(" + sourceName + ", " + oldSourceIndex + ", " + sourceIndex + ")"])
      }else {
        index.value++;
        compiled = [compile(item), "" + sourceName + "[" + sourceIndex + "]"];
        if(item instanceof Array) {
          result = result.concat(destructure_list, item, sourceText)
        }else {
          result.push(compiled)
        }
      }
    }
    if(has_splat) {
      return result
    }else {
      return[]
    }
  };
  restructure_list = function(pattern, sourceName) {
    var c_item, concatArgs, do_slice, i, ident, item, new_ident, restructured, result, slice_start, _len;
    ident = gensym(sourceName);
    concatArgs = [];
    result = [to_symbol(ident)];
    slice_start = null;
    do_slice = function() {
      if(slice_start != null) {
        concatArgs.push("" + sourceName + ".slice(" + slice_start + ", " + i + ")");
        return slice_start = null
      }
    };
    for(i = 0, _len = pattern.length;i < _len;i++) {
      item = pattern[i];
      if(is_splat(item)) {
        do_slice();
        c_item = compile(item[1]);
        concatArgs.push(c_item)
      }else {
        if(is_unquote(item)) {
          do_slice();
          concatArgs.push("[" + compile(item[1]) + "]")
        }else {
          if(_.isArray(item) && !is_symbol(item)) {
            do_slice();
            new_ident = "" + sourceName + "[" + i + "]";
            restructured = restructure_list(item, new_ident);
            concatArgs.push("[" + restructured[1] + "]")
          }else {
            if(!(slice_start != null)) {
              slice_start = i
            }
          }
        }
      }
    }
    do_slice();
    result.push("[].concat(" + concatArgs.join(", ") + ")");
    return result
  };
  if(typeof parser === "undefined" || parser === null) {
    parser = require("./parser")
  }
  oppo = typeof exports !== "undefined" && exports !== null ? exports : global.oppo = {};
  compiler = (_ref3 = oppo.compiler) != null ? _ref3 : oppo.compiler = {};
  read = oppo.read = function(string) {
    var trimmed;
    trimmed = trim.call(string);
    if(trimmed === "") {
      string = "nil"
    }
    return parser.parse(string)
  };
  began = false;
  compile = oppo.compile = function(sexp) {
    var args, fn, macro, ret, top_level, vars;
    if(sexp == null) {
      sexp = null
    }
    if(!began) {
      top_level = began = true
    }
    if(sexp === null || sexp === true || sexp === false || _.isNumber(sexp)) {
      ret = "" + sexp
    }else {
      if(is_symbol(sexp)) {
        ret = to_js_symbol(sexp[1])
      }else {
        if(_.isString(sexp)) {
          ret = '"' + sexp + '"'
        }else {
          if(_.isArray(sexp)) {
            fn = oppo.compile(_.first(sexp));
            if(macro = compiler[fn]) {
              args = sexp.slice(1);
              ret = macro.apply(null, args)
            }else {
              ret = compiler.call.apply(null, sexp)
            }
          }else {
            raiseParseError(sexp)
          }
        }
      }
    }
    if(top_level || !began) {
      began = false;
      vars = end_final_var_group();
      if(vars.length) {
        ret = "var " + vars.join(", ") + ";\n" + ret + ";"
      }
    }
    return ret
  };
  oppo.eval = _.compose(_.bind(global.eval, global), oppo.compile);
  read_compile = _.compose(oppo.compile, oppo.read);
  compiler[to_js_symbol("var")] = function(name, value, current_group) {
    if(current_group == null) {
      current_group = last_var_group()
    }
    name = compile(name);
    value = compile(value);
    if(__indexOf.call(current_group, name) >= 0) {
      raiseDefError(name)
    }
    current_group.push(name);
    return"" + name + " = " + value
  };
  compiler.def = function(name, value) {
    return compiler[to_js_symbol("var")](name, value, first_var_group())
  };
  compiler[to_js_symbol("set!")] = function(name, value) {
    name = compile(name);
    value = compile(value);
    return read_compile('(if (js-eval "typeof ' + name + " !== 'undefined'\")\n  (js-eval \"" + name + " =  " + value + '")\n  (throw "Can\'t set variable that has not been defined: ' + name + '"))')
  };
  compiler.js_eval = function(js) {
    return js
  };
  compiler[to_js_symbol("do")] = function() {
    var body, compiled_body, ret;
    body = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    compiled_body = _.map(arguments, compile);
    ret = compiled_body.join(",\n");
    return"(" + ret + ")"
  };
  compiler[to_js_symbol("if")] = function(test, t, f) {
    var c_f, c_t, c_test, _ref4;
    if(arguments.length === 2) {
      Array.prototype.push.call(arguments, f)
    }
    _ref4 = _.map(arguments, compile), c_test = _ref4[0], c_t = _ref4[1], c_f = _ref4[2];
    return"(/* if */ " + c_test + " ?\n  /* then */ " + c_t + " :\n  /* else */ " + c_f + ")"
  };
  compiler.js_map = function() {
    var c_key, c_value, i, item, ret, sexp, _len;
    sexp = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    ret = "{ ";
    for(i = 0, _len = sexp.length;i < _len;i++) {
      item = sexp[i];
      if(i % 2 === 0) {
        c_key = compile(item);
        ret += "" + c_key + " : "
      }else {
        c_value = compile(item);
        ret += "" + c_value + ",\n"
      }
    }
    return ret.replace(/,\n$/, " }")
  };
  compiler.quote = function(sexp, quote_all) {
    var q_sexp;
    if(_.isArray(sexp)) {
      q_sexp = _.map(sexp, compile);
      return"[" + q_sexp.join(", ") + "]"
    }else {
      return('"' + sexp + '"').replace(/^""/, '"\\"').replace(/""$/, '\\""')
    }
  };
  compiler.eval = function() {
    return compiler.call.apply(compiler, ["oppo.eval"].concat(__slice.call(arguments)))
  };
  compiler[to_js_symbol(".")] = function() {
    var base, c_base, c_names, names;
    base = arguments[0], names = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    c_base = compile(base);
    c_names = _.map(names, compile);
    c_names.unshift(c_base);
    return c_names.join(".")
  };
  compiler.keyword = function(key) {
    return compile(key)
  };
  compiler[to_js_symbol("throw")] = function(err) {
    var c_err;
    c_err = compile(err);
    return"!function () { throw " + c_err + " }()"
  };
  get_args = function(args) {
    var body, destructure, vars, _i, _len, _var;
    destructure = _.any(args, is_splat);
    if(destructure) {
      vars = destructure_list(args, "arguments");
      args = [];
      body = [];
      for(_i = 0, _len = vars.length;_i < _len;_i++) {
        _var = vars[_i];
        body.push(read("(var " + _var[0] + ' (js-eval "' + _var[1] + '"))'))
      }
    }else {
      args = args.map(function(arg) {
        return compile(arg)
      });
      body = []
    }
    return[args, body]
  };
  compiler.lambda = function() {
    var args, argsbody, body, ret, var_stmt, vars, _ref4;
    args = arguments[0], body = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    new_var_group();
    _ref4 = get_args(args), args = _ref4[0], argsbody = _ref4[1];
    body = argsbody.concat(body);
    body = _.map(body, function(item) {
      var num;
      if(is_symbol(item) && /^%\d+$/.test(item[1])) {
        num = item[1].substr(1);
        "arguments[" + num + "]"
      }
      return item
    });
    body = _.map(body, compile);
    vars = end_var_group();
    var_stmt = vars.length ? "var " + vars.join(", ") + ";\n" : "";
    return ret = "(function (" + args.join(", ") + ") {\n  " + var_stmt + "return " + body.join(", ") + ";\n})"
  };
  compile.fn = compiler.lambda;
  compiler.call = function() {
    var args, c_args, c_fn, fn;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    c_fn = compile(fn);
    c_args = _.map(args, compile);
    return"" + c_fn + "(" + c_args.join(", ") + ")"
  };
  compiler[to_js_symbol("let")] = function() {
    var body, i, names_vals, ret, vars;
    names_vals = arguments[0], body = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    vars = [];
    i = 0;
    while(i < names_vals.length) {
      vars.push([to_symbol("var"), names_vals[i++], names_vals[i++]])
    }
    body = vars.concat(body);
    return ret = compile([[to_symbol("lambda"), []].concat(__slice.call(body))])
  };
  quote_all = function(list) {
    var ret, _quote;
    _quote = function(item) {
      return[to_symbol("quote"), item]
    };
    return ret = _quote(_.map(list, function(item) {
      if(_.isArray(item) && !is_symbol(item)) {
        return quote_all(item)
      }else {
        return _quote(item)
      }
    }))
  };
  compiler.defmacro = function(name, argnames, template) {
    var c_name;
    c_name = compile(name);
    objectSet(compiler, c_name, function() {
      var args, evald, js, q_args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      q_args = quote_all(args);
      js = oppo.compile([[["symbol", "lambda"], argnames, template]].concat(__slice.call(q_args[1])));
      evald = eval(js);
      return oppo.compile(evald)
    });
    return"/* defmacro " + c_name + " */ null"
  };
  compiler.syntax_quote = function(list) {
    var code, ident, q_list, restructured_list, ret, sym, uq_list;
    sym = to_symbol;
    ident = gensym("list");
    restructured_list = restructure_list(list, ident);
    restructured_list[1] = [sym("js-eval"), restructured_list[1]];
    q_list = quote_all(list);
    uq_list = compile(q_list);
    code = [[sym("lambda"), [sym(ident)], [sym("var")].concat(__slice.call(restructured_list))], q_list];
    return ret = compile(code)
  }
}).call(this);
(function() {
  var code, result;
  code = oppo.read(";; Macros\n" + "\n" + "(defmacro print (...things)\n" + "  `((. console log) ...things))\n" + "  \n" + "(defmacro defn (nm argslist ...body)\n" + "  `(def ~nm (lambda ~argslist ...body)))\n" + "\n" + ";; Set up underscore\n" + "(let (collections [:each :map :reduce :reduceRight :find :filter :reject :all :any :include :invoke :pluck :max :min :sortBy :groupBy :sortedIndex :shuffle :toArray :size]\n" + "      arrays [:first :initial :last :rest :compact :flatten :without :union :intersection :difference :uniq :zip :indexOf :lastIndexOf :range]\n" + 
  "      functions [:bind :bindAll :memoize :delay :defer :throttle :debounce :once :after :wrap :compose]\n" + "      objects [:keys :values :functions :extend :defaults :clone :tap :isEqual :isEmpty :isElement :isArray :isArguments :isFunction :isString :isNumber :isBoolean :isDate :isRegExp :isNaN :isNull :isUndefined]\n" + "      utility [:noConflict :identity :times :mixin :uniqueId :escape :template]\n" + "      chaining [:chain :value])\n" + "  \n" + "  ;(defn dasherize (s)\n" + "  ;  ((. s replace)))\n" + 
  "  \n" + "  ;; Add all the underscore methods here\n" + "  )\n");
  result = oppo.compile(code);
  return eval(result)
})();

