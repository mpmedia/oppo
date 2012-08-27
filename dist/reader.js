// Generated by CoffeeScript 1.3.3

/*
HELPERS / SETUP
*/


(function() {
  var JavaScriptCode, OppoReaderError, ReadTable, Symbol, make_reader, r_number, r_symbol, r_whitespace, read_false, read_nil, read_token, read_true, reader, to_type,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  to_type = oppo.helpers.to_type;

  r_whitespace = /^\s+/;

  r_number = /^-?(\d*\.\d+|\d+)/;

  r_symbol = /^[\w~`!@#$%^&*\-+=|\\"':?\/<>,\.]+/;

  reader = oppo.reader = {};

  OppoReaderError = (function(_super) {

    __extends(OppoReaderError, _super);

    function OppoReaderError(message, text, index) {}

    return OppoReaderError;

  })(Error);

  oppo.JavaScriptCode = JavaScriptCode = (function() {

    function JavaScriptCode(text) {
      this.text = text;
    }

    return JavaScriptCode;

  })();

  oppo.Symbol = Symbol = (function() {

    function Symbol(text) {
      this.text = text;
    }

    return Symbol;

  })();

  /*
  READTABLES
  */


  make_reader = function(opts, f) {
    var comment_end, string_end, _ref, _ref1;
    if (arguments.length === 1) {
      _ref = [opts, f], f = _ref[0], opts = _ref[1];
    }
    _ref1 = opts != null ? opts : {}, comment_end = _ref1.comment_end, string_end = _ref1.string_end;
    return function(input) {
      if (!comment_end && (reader.comment_buffer != null)) {
        reader.comment_buffer += input;
        return;
      } else if (!string_end && (reader.string_buffer != null)) {
        reader.string_buffer += input;
        return;
      } else if (reader.read_special) {
        reader.read_special = false;
      }
      return f.apply(null, arguments);
    };
  };

  read_true = make_reader(function() {
    return true;
  });

  read_false = make_reader(function() {
    return false;
  });

  read_nil = make_reader(function() {
    return null;
  });

  oppo.ReadTable = ReadTable = (function() {

    function ReadTable() {
      var arg, i, item, _i, _len;
      this.table = [];
      for (i = _i = 0, _len = arguments.length; _i < _len; i = ++_i) {
        arg = arguments[i];
        if (i % 2 === 0) {
          item = [];
          this.table.push(item);
        }
        item.push(arg);
      }
    }

    ReadTable.prototype.get_match = function(m, text) {
      var match, _ref;
      if ((to_type(m)) === "regexp") {
        return match = (_ref = text.match(m)) != null ? _ref[0] : void 0;
      } else if (m === (text.substr(0, m.length))) {
        return match = m;
      }
    };

    ReadTable.prototype.read = function(text) {
      var f, k, match, result, _i, _len, _ref, _ref1;
      _ref = this.table;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        _ref1 = _ref[_i], k = _ref1[0], f = _ref1[1];
        if (match = this.get_match(k, text)) {
          result = f(match);
          if (result !== void 0) {
            reader.current_list.push(result);
          }
          return match.length;
        }
      }
    };

    ReadTable.tables = {
      "default": new ReadTable(';', make_reader(function() {
        reader.comment_buffer = '';
        return void 0;
      }), '\\', make_reader(function() {
        reader.escape_next_char = true;
        return void 0;
      }), '\n', make_reader({
        comment_end: true
      }, function(input) {
        var comment;
        reader.line_number += 1;
        if (reader.comment_buffer != null) {
          comment = "//" + reader.comment_buffer + input;
          reader.comment_buffer = null;
          return new JavaScriptCode(comment);
        } else {
          return void 0;
        }
      }), '(', make_reader(function() {
        var list;
        list = [];
        reader.lists.push(list);
        reader.current_list = list;
        list.starting_line_number = reader.line_number;
        return void 0;
      }), ')', make_reader(function() {
        var list;
        list = reader.lists.pop();
        reader.current_list = reader.lists[reader.lists.length - 1];
        return list;
      }), '"', make_reader({
        string_end: true
      }, function() {
        var string;
        if (reader.string_buffer != null) {
          string = reader.string_buffer;
          reader.string_buffer = null;
          return string;
        } else {
          reader.string_buffer = "";
          return void 0;
        }
      }), '#', make_reader(function() {
        reader.read_special = true;
        return void 0;
      })),
      last: new ReadTable(r_whitespace, make_reader(function() {
        return void 0;
      }), r_number, make_reader(function(input) {
        return +input;
      }), r_symbol, make_reader(function(input) {
        return new Symbol(input);
      })),
      special: new ReadTable('true', read_true, 't', read_true, 'false', read_false, 'f', read_false, 'nil', read_nil, 'n', read_nil)
    };

    return ReadTable;

  })();

  /*
  READER
  */


  read_token = function(text, index) {
    var length;
    if (reader.read_special) {
      length = ReadTable.tables.special.read(text);
      if (!(length != null)) {
        throw new OppoReaderError("Invalid special syntax", text, index);
      }
    } else {
      length = ReadTable.tables["default"].read(text);
      if (!(length != null)) {
        length = ReadTable.tables.last.read(text);
      }
    }
    if (length != null) {
      return text.substr(length);
    }
  };

  oppo.read = function(text) {
    var current_list, list;
    list = [];
    reader.line_number = 1;
    reader.lists = [list];
    current_list = reader.current_list = list;
    while (text.length) {
      text = read_token(text);
    }
    reader.lists = reader.current_list = null;
    return list;
  };

}).call(this);
