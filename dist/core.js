// Generated by CoffeeScript 1.3.3
(function() {
  var root, _ref;

  root = typeof global !== "undefined" && global !== null ? global : window;

  root.oppo = {
    helpers: {
      to_type: (function() {
        var toString;
        toString = Object.prototype.toString;
        return function(o) {
          var s;
          return (s = toString.call(o)).substring(8, s.length - 1).toLowerCase();
        };
      })(),
      clone: (_ref = Object.create) != null ? _ref : function(o) {
        var Noop;
        Noop = (function() {

          function Noop() {}

          return Noop;

        })();
        Noop.prototype = o;
        return new Noop;
      },
      text_to_js_identifier: (function() {
        var JS_ILLEGAL_IDENTIFIER_CHARS, JS_KEYWORDS, WRAPPER_PREFIX, WRAPPER_REGEX, WRAPPER_SUFFIX, char_wrapper, text_to_js_identifier, wrapper;
        WRAPPER_PREFIX = "_$";
        WRAPPER_SUFFIX = "_";
        WRAPPER_REGEX = /_\$[^_]+_/g;
        JS_KEYWORDS = ["break", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", "let", "new", "null", "package", "private", "protected", "public", "return", "static", "switch", "super", "this", "throw", "true", "try", "typeof", "undefined", "var", "void", "while", "with", "yield"];
        JS_ILLEGAL_IDENTIFIER_CHARS = {
          "~": "tilde",
          "`": "backtick",
          "!": "exclamationmark",
          "@": "at",
          "#": "pound",
          "%": "percent",
          "^": "carat",
          "&": "amperstand",
          "*": "asterisk",
          "(": "leftparen",
          ")": "rightparen",
          "-": "dash",
          "+": "plus",
          "=": "equals",
          "{": "leftcurly",
          "}": "rightcurly",
          "[": "leftsquare",
          "]": "rightsquare",
          "|": "pipe",
          "\\": "backslash",
          "\"": "doublequote",
          "'": "singlequote",
          ":": "colon",
          ";": "semicolon",
          "<": "leftangle",
          ">": "rightangle",
          ",": "comma",
          ".": "period",
          "?": "questionmark",
          "/": "forwardslash",
          " ": "space",
          "\t": "tab",
          "\n": "newline",
          "\r": "carriagereturn"
        };
        char_wrapper = function(conversions, _char) {
          var txt, _ref1, _ref2;
          if (conversions == null) {
            conversions = {};
          }
          txt = (_ref1 = (_ref2 = conversions[_char]) != null ? _ref2 : JS_ILLEGAL_IDENTIFIER_CHARS[_char]) != null ? _ref1 : "ASCII_" + (_char.charCodeAt(0));
          return wrapper(txt);
        };
        wrapper = function(text) {
          return "" + WRAPPER_PREFIX + text + WRAPPER_SUFFIX;
        };
        return text_to_js_identifier = function(text, conversions) {
          var _char_wrapper;
          if ((JS_KEYWORDS.indexOf(text)) >= 0) {
            return wrapper(text);
          }
          if (text.length === 0) {
            return wrapper("null");
          }
          _char_wrapper = char_wrapper.bind(this, conversions);
          return (text.replace(/^\d/, _char_wrapper)).replace(/[^\w\$]/g, _char_wrapper);
        };
      })()
    }
  };

}).call(this);
