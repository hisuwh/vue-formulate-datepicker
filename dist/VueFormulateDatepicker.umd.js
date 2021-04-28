(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueFormulateDatepicker"] = factory();
	else
		root["VueFormulateDatepicker"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./node_modules/vuejs-datepicker/src/locale/index.js
var locale_namespaceObject = {};
__webpack_require__.r(locale_namespaceObject);
__webpack_require__.d(locale_namespaceObject, "af", function() { return af; });
__webpack_require__.d(locale_namespaceObject, "ar", function() { return ar; });
__webpack_require__.d(locale_namespaceObject, "bg", function() { return bg; });
__webpack_require__.d(locale_namespaceObject, "bs", function() { return bs; });
__webpack_require__.d(locale_namespaceObject, "ca", function() { return ca; });
__webpack_require__.d(locale_namespaceObject, "cs", function() { return cs; });
__webpack_require__.d(locale_namespaceObject, "da", function() { return da; });
__webpack_require__.d(locale_namespaceObject, "de", function() { return de; });
__webpack_require__.d(locale_namespaceObject, "ee", function() { return ee; });
__webpack_require__.d(locale_namespaceObject, "el", function() { return el; });
__webpack_require__.d(locale_namespaceObject, "en", function() { return translations_en; });
__webpack_require__.d(locale_namespaceObject, "es", function() { return es; });
__webpack_require__.d(locale_namespaceObject, "fa", function() { return fa; });
__webpack_require__.d(locale_namespaceObject, "fi", function() { return fi; });
__webpack_require__.d(locale_namespaceObject, "fo", function() { return fo; });
__webpack_require__.d(locale_namespaceObject, "fr", function() { return fr; });
__webpack_require__.d(locale_namespaceObject, "ge", function() { return ge; });
__webpack_require__.d(locale_namespaceObject, "gl", function() { return gl; });
__webpack_require__.d(locale_namespaceObject, "he", function() { return he; });
__webpack_require__.d(locale_namespaceObject, "hr", function() { return hr; });
__webpack_require__.d(locale_namespaceObject, "hu", function() { return hu; });
__webpack_require__.d(locale_namespaceObject, "id", function() { return id; });
__webpack_require__.d(locale_namespaceObject, "is", function() { return is; });
__webpack_require__.d(locale_namespaceObject, "it", function() { return it; });
__webpack_require__.d(locale_namespaceObject, "ja", function() { return ja; });
__webpack_require__.d(locale_namespaceObject, "kk", function() { return kk; });
__webpack_require__.d(locale_namespaceObject, "ko", function() { return ko; });
__webpack_require__.d(locale_namespaceObject, "lb", function() { return lb; });
__webpack_require__.d(locale_namespaceObject, "lt", function() { return lt; });
__webpack_require__.d(locale_namespaceObject, "lv", function() { return lv; });
__webpack_require__.d(locale_namespaceObject, "mk", function() { return mk; });
__webpack_require__.d(locale_namespaceObject, "mn", function() { return mn; });
__webpack_require__.d(locale_namespaceObject, "nbNO", function() { return nb_NO; });
__webpack_require__.d(locale_namespaceObject, "nl", function() { return nl; });
__webpack_require__.d(locale_namespaceObject, "pl", function() { return pl; });
__webpack_require__.d(locale_namespaceObject, "ptBR", function() { return pt_BR; });
__webpack_require__.d(locale_namespaceObject, "ro", function() { return ro; });
__webpack_require__.d(locale_namespaceObject, "ru", function() { return ru; });
__webpack_require__.d(locale_namespaceObject, "sk", function() { return sk; });
__webpack_require__.d(locale_namespaceObject, "slSI", function() { return sl_SI; });
__webpack_require__.d(locale_namespaceObject, "srCYRL", function() { return sr_CYRL; });
__webpack_require__.d(locale_namespaceObject, "sr", function() { return sr; });
__webpack_require__.d(locale_namespaceObject, "sv", function() { return sv; });
__webpack_require__.d(locale_namespaceObject, "th", function() { return th; });
__webpack_require__.d(locale_namespaceObject, "tr", function() { return tr; });
__webpack_require__.d(locale_namespaceObject, "uk", function() { return uk; });
__webpack_require__.d(locale_namespaceObject, "ur", function() { return ur; });
__webpack_require__.d(locale_namespaceObject, "vi", function() { return vi; });
__webpack_require__.d(locale_namespaceObject, "zh", function() { return zh; });
__webpack_require__.d(locale_namespaceObject, "zhHK", function() { return zh_HK; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bd974b54-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VueFormulateDatepicker.vue?vue&type=template&id=718e0260&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('datepicker',_vm._b({class:("formulate-input-element formulate-input-element--" + (_vm.context.type)),attrs:{"data-type":_vm.context.type,"options":_vm.context.options,"language":_vm.languages[_vm.context.attributes.language]},model:{value:(_vm.context.model),callback:function ($$v) {_vm.$set(_vm.context, "model", $$v)},expression:"context.model"}},'datepicker',_vm.context.attributes,false))}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/VueFormulateDatepicker.vue?vue&type=template&id=718e0260&

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var Language =
/*#__PURE__*/
function () {
  function Language(language, months, monthsAbbr, days) {
    _classCallCheck(this, Language);

    this.language = language;
    this.months = months;
    this.monthsAbbr = monthsAbbr;
    this.days = days;
    this.rtl = false;
    this.ymd = false;
    this.yearSuffix = '';
  }

  _createClass(Language, [{
    key: "language",
    get: function get() {
      return this._language;
    },
    set: function set(language) {
      if (typeof language !== 'string') {
        throw new TypeError('Language must be a string');
      }

      this._language = language;
    }
  }, {
    key: "months",
    get: function get() {
      return this._months;
    },
    set: function set(months) {
      if (months.length !== 12) {
        throw new RangeError("There must be 12 months for ".concat(this.language, " language"));
      }

      this._months = months;
    }
  }, {
    key: "monthsAbbr",
    get: function get() {
      return this._monthsAbbr;
    },
    set: function set(monthsAbbr) {
      if (monthsAbbr.length !== 12) {
        throw new RangeError("There must be 12 abbreviated months for ".concat(this.language, " language"));
      }

      this._monthsAbbr = monthsAbbr;
    }
  }, {
    key: "days",
    get: function get() {
      return this._days;
    },
    set: function set(days) {
      if (days.length !== 7) {
        throw new RangeError("There must be 7 days for ".concat(this.language, " language"));
      }

      this._days = days;
    }
  }]);

  return Language;
}(); // eslint-disable-next-line

var en = new Language('English', ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']) // eslint-disable-next-line
;

var utils = {
  /**
   * @type {Boolean}
   */
  useUtc: false,

  /**
   * Returns the full year, using UTC or not
   * @param {Date} date
   */
  getFullYear: function getFullYear(date) {
    return this.useUtc ? date.getUTCFullYear() : date.getFullYear();
  },

  /**
   * Returns the month, using UTC or not
   * @param {Date} date
   */
  getMonth: function getMonth(date) {
    return this.useUtc ? date.getUTCMonth() : date.getMonth();
  },

  /**
   * Returns the date, using UTC or not
   * @param {Date} date
   */
  getDate: function getDate(date) {
    return this.useUtc ? date.getUTCDate() : date.getDate();
  },

  /**
   * Returns the day, using UTC or not
   * @param {Date} date
   */
  getDay: function getDay(date) {
    return this.useUtc ? date.getUTCDay() : date.getDay();
  },

  /**
   * Returns the hours, using UTC or not
   * @param {Date} date
   */
  getHours: function getHours(date) {
    return this.useUtc ? date.getUTCHours() : date.getHours();
  },

  /**
   * Returns the minutes, using UTC or not
   * @param {Date} date
   */
  getMinutes: function getMinutes(date) {
    return this.useUtc ? date.getUTCMinutes() : date.getMinutes();
  },

  /**
   * Sets the full year, using UTC or not
   * @param {Date} date
   */
  setFullYear: function setFullYear(date, value, useUtc) {
    return this.useUtc ? date.setUTCFullYear(value) : date.setFullYear(value);
  },

  /**
   * Sets the month, using UTC or not
   * @param {Date} date
   */
  setMonth: function setMonth(date, value, useUtc) {
    return this.useUtc ? date.setUTCMonth(value) : date.setMonth(value);
  },

  /**
   * Sets the date, using UTC or not
   * @param {Date} date
   * @param {Number} value
   */
  setDate: function setDate(date, value, useUtc) {
    return this.useUtc ? date.setUTCDate(value) : date.setDate(value);
  },

  /**
   * Check if date1 is equivalent to date2, without comparing the time
   * @see https://stackoverflow.com/a/6202196/4455925
   * @param {Date} date1
   * @param {Date} date2
   */
  compareDates: function compareDates(date1, date2) {
    var d1 = new Date(date1.getTime());
    var d2 = new Date(date2.getTime());

    if (this.useUtc) {
      d1.setUTCHours(0, 0, 0, 0);
      d2.setUTCHours(0, 0, 0, 0);
    } else {
      d1.setHours(0, 0, 0, 0);
      d2.setHours(0, 0, 0, 0);
    }

    return d1.getTime() === d2.getTime();
  },

  /**
   * Validates a date object
   * @param {Date} date - an object instantiated with the new Date constructor
   * @return {Boolean}
   */
  isValidDate: function isValidDate(date) {
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      return false;
    }

    return !isNaN(date.getTime());
  },

  /**
   * Return abbreviated week day name
   * @param {Date}
   * @param {Array}
   * @return {String}
   */
  getDayNameAbbr: function getDayNameAbbr(date, days) {
    if (_typeof(date) !== 'object') {
      throw TypeError('Invalid Type');
    }

    return days[this.getDay(date)];
  },

  /**
   * Return name of the month
   * @param {Number|Date}
   * @param {Array}
   * @return {String}
   */
  getMonthName: function getMonthName(month, months) {
    if (!months) {
      throw Error('missing 2nd parameter Months array');
    }

    if (_typeof(month) === 'object') {
      return months[this.getMonth(month)];
    }

    if (typeof month === 'number') {
      return months[month];
    }

    throw TypeError('Invalid type');
  },

  /**
   * Return an abbreviated version of the month
   * @param {Number|Date}
   * @return {String}
   */
  getMonthNameAbbr: function getMonthNameAbbr(month, monthsAbbr) {
    if (!monthsAbbr) {
      throw Error('missing 2nd paramter Months array');
    }

    if (_typeof(month) === 'object') {
      return monthsAbbr[this.getMonth(month)];
    }

    if (typeof month === 'number') {
      return monthsAbbr[month];
    }

    throw TypeError('Invalid type');
  },

  /**
   * Alternative get total number of days in month
   * @param {Number} year
   * @param {Number} m
   * @return {Number}
   */
  daysInMonth: function daysInMonth(year, month) {
    return /8|3|5|10/.test(month) ? 30 : month === 1 ? !(year % 4) && year % 100 || !(year % 400) ? 29 : 28 : 31;
  },

  /**
   * Get nth suffix for date
   * @param {Number} day
   * @return {String}
   */
  getNthSuffix: function getNthSuffix(day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return 'st';

      case 2:
      case 22:
        return 'nd';

      case 3:
      case 23:
        return 'rd';

      default:
        return 'th';
    }
  },

  /**
   * Formats date object
   * @param {Date}
   * @param {String}
   * @param {Object}
   * @return {String}
   */
  formatDate: function formatDate(date, format, translation) {
    translation = !translation ? en : translation;
    var year = this.getFullYear(date);
    var month = this.getMonth(date) + 1;
    var day = this.getDate(date);
    var str = format.replace(/dd/, ('0' + day).slice(-2)).replace(/d/, day).replace(/yyyy/, year).replace(/yy/, String(year).slice(2)).replace(/MMMM/, this.getMonthName(this.getMonth(date), translation.months)).replace(/MMM/, this.getMonthNameAbbr(this.getMonth(date), translation.monthsAbbr)).replace(/MM/, ('0' + month).slice(-2)).replace(/M(?!a|ä|e)/, month).replace(/su/, this.getNthSuffix(this.getDate(date))).replace(/D(?!e|é|i)/, this.getDayNameAbbr(date, translation.days));
    return str;
  },

  /**
   * Creates an array of dates for each day in between two dates.
   * @param {Date} start
   * @param {Date} end
   * @return {Array}
   */
  createDateArray: function createDateArray(start, end) {
    var dates = [];

    while (start <= end) {
      dates.push(new Date(start));
      start = this.setDate(new Date(start), this.getDate(new Date(start)) + 1);
    }

    return dates;
  },

  /**
   * method used as a prop validator for input values
   * @param {*} val
   * @return {Boolean}
   */
  validateDateInput: function validateDateInput(val) {
    return val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number';
  }
};
var makeDateUtils = function makeDateUtils(useUtc) {
  return _objectSpread({}, utils, {
    useUtc: useUtc
  });
};
var utils$1 = _objectSpread({}, utils) // eslint-disable-next-line
;

var script = {
  props: {
    selectedDate: Date,
    resetTypedDate: [Date],
    format: [String, Function],
    translation: Object,
    inline: Boolean,
    id: String,
    name: String,
    refName: String,
    openDate: Date,
    placeholder: String,
    inputClass: [String, Object, Array],
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    bootstrapStyling: Boolean,
    useUtc: Boolean
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      input: null,
      typedDate: false,
      utils: constructedDateUtils
    };
  },
  computed: {
    formattedValue: function formattedValue() {
      if (!this.selectedDate) {
        return null;
      }

      if (this.typedDate) {
        return this.typedDate;
      }

      return typeof this.format === 'function' ? this.format(this.selectedDate) : this.utils.formatDate(new Date(this.selectedDate), this.format, this.translation);
    },
    computedInputClass: function computedInputClass() {
      if (this.bootstrapStyling) {
        if (typeof this.inputClass === 'string') {
          return [this.inputClass, 'form-control'].join(' ');
        }

        return _objectSpread({
          'form-control': true
        }, this.inputClass);
      }

      return this.inputClass;
    }
  },
  watch: {
    resetTypedDate: function resetTypedDate() {
      this.typedDate = false;
    }
  },
  methods: {
    showCalendar: function showCalendar() {
      this.$emit('showCalendar');
    },

    /**
     * Attempt to parse a typed date
     * @param {Event} event
     */
    parseTypedDate: function parseTypedDate(event) {
      // close calendar if escape or enter are pressed
      if ([27, // escape
      13 // enter
      ].includes(event.keyCode)) {
        this.input.blur();
      }

      if (this.typeable) {
        var typedDate = Date.parse(this.input.value);

        if (!isNaN(typedDate)) {
          this.typedDate = this.input.value;
          this.$emit('typedDate', new Date(this.typedDate));
        }
      }
    },

    /**
     * nullify the typed date to defer to regular formatting
     * called once the input is blurred
     */
    inputBlurred: function inputBlurred() {
      if (this.typeable && isNaN(Date.parse(this.input.value))) {
        this.clearDate();
        this.input.value = null;
        this.typedDate = null;
      }

      this.$emit('closeCalendar');
    },

    /**
     * emit a clearDate event
     */
    clearDate: function clearDate() {
      this.$emit('clearDate');
    }
  },
  mounted: function mounted() {
    this.input = this.$el.querySelector('input');
  }
} // eslint-disable-next-line
;

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: { "input-group": _vm.bootstrapStyling } },
    [
      _vm.calendarButton
        ? _c(
            "span",
            {
              staticClass: "vdp-datepicker__calendar-button",
              class: { "input-group-prepend": _vm.bootstrapStyling },
              style: { "cursor:not-allowed;": _vm.disabled },
              on: { click: _vm.showCalendar }
            },
            [
              _c(
                "span",
                { class: { "input-group-text": _vm.bootstrapStyling } },
                [
                  _c("i", { class: _vm.calendarButtonIcon }, [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.calendarButtonIconContent) +
                        "\n        "
                    ),
                    !_vm.calendarButtonIcon
                      ? _c("span", [_vm._v("…")])
                      : _vm._e()
                  ])
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("input", {
        ref: _vm.refName,
        class: _vm.computedInputClass,
        attrs: {
          type: _vm.inline ? "hidden" : "text",
          name: _vm.name,
          id: _vm.id,
          "open-date": _vm.openDate,
          placeholder: _vm.placeholder,
          "clear-button": _vm.clearButton,
          disabled: _vm.disabled,
          required: _vm.required,
          readonly: !_vm.typeable,
          autocomplete: "off"
        },
        domProps: { value: _vm.formattedValue },
        on: {
          click: _vm.showCalendar,
          keyup: _vm.parseTypedDate,
          blur: _vm.inputBlurred
        }
      }),
      _vm._v(" "),
      _vm.clearButton && _vm.selectedDate
        ? _c(
            "span",
            {
              staticClass: "vdp-datepicker__clear-button",
              class: { "input-group-append": _vm.bootstrapStyling },
              on: {
                click: function($event) {
                  return _vm.clearDate()
                }
              }
            },
            [
              _c(
                "span",
                { class: { "input-group-text": _vm.bootstrapStyling } },
                [
                  _c("i", { class: _vm.clearButtonIcon }, [
                    !_vm.clearButtonIcon ? _c("span", [_vm._v("×")]) : _vm._e()
                  ])
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t("afterDateInput")
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var DateInput = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//
var script$1 = {
  props: {
    showDayView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    fullMonthName: Boolean,
    allowedToShowView: Function,
    dayCellContent: {
      type: Function,
      "default": function _default(day) {
        return day.date;
      }
    },
    disabledDates: Object,
    highlighted: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    mondayFirst: Boolean,
    useUtc: Boolean
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    };
  },
  computed: {
    /**
     * Returns an array of day names
     * @return {String[]}
     */
    daysOfWeek: function daysOfWeek() {
      if (this.mondayFirst) {
        var tempDays = this.translation.days.slice();
        tempDays.push(tempDays.shift());
        return tempDays;
      }

      return this.translation.days;
    },

    /**
     * Returns the day number of the week less one for the first of the current month
     * Used to show amount of empty cells before the first in the day calendar layout
     * @return {Number}
     */
    blankDays: function blankDays() {
      var d = this.pageDate;
      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());

      if (this.mondayFirst) {
        return this.utils.getDay(dObj) > 0 ? this.utils.getDay(dObj) - 1 : 6;
      }

      return this.utils.getDay(dObj);
    },

    /**
     * @return {Object[]}
     */
    days: function days() {
      var d = this.pageDate;
      var days = []; // set up a new date object to the beginning of the current 'page'

      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
      var daysInMonth = this.utils.daysInMonth(this.utils.getFullYear(dObj), this.utils.getMonth(dObj));

      for (var i = 0; i < daysInMonth; i++) {
        days.push({
          date: this.utils.getDate(dObj),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedDate(dObj),
          isDisabled: this.isDisabledDate(dObj),
          isHighlighted: this.isHighlightedDate(dObj),
          isHighlightStart: this.isHighlightStart(dObj),
          isHighlightEnd: this.isHighlightEnd(dObj),
          isToday: this.utils.compareDates(dObj, new Date()),
          isWeekend: this.utils.getDay(dObj) === 0 || this.utils.getDay(dObj) === 6,
          isSaturday: this.utils.getDay(dObj) === 6,
          isSunday: this.utils.getDay(dObj) === 0
        });
        this.utils.setDate(dObj, this.utils.getDate(dObj) + 1);
      }

      return days;
    },

    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */
    currMonthName: function currMonthName() {
      var monthName = this.fullMonthName ? this.translation.months : this.translation.monthsAbbr;
      return this.utils.getMonthNameAbbr(this.utils.getMonth(this.pageDate), monthName);
    },

    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */
    currYearName: function currYearName() {
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(this.utils.getFullYear(this.pageDate)).concat(yearSuffix);
    },

    /**
     * Is this translation using year/month/day format?
     * @return {Boolean}
     */
    isYmd: function isYmd() {
      return this.translation.ymd && this.translation.ymd === true;
    },

    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextMonthDisabled(this.pageTimestamp) : this.isPreviousMonthDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousMonthDisabled(this.pageTimestamp) : this.isNextMonthDisabled(this.pageTimestamp);
    }
  },
  methods: {
    selectDate: function selectDate(date) {
      if (date.isDisabled) {
        this.$emit('selectedDisabled', date);
        return false;
      }

      this.$emit('selectDate', date);
    },

    /**
     * @return {Number}
     */
    getPageMonth: function getPageMonth() {
      return this.utils.getMonth(this.pageDate);
    },

    /**
     * Emit an event to show the month picker
     */
    showMonthCalendar: function showMonthCalendar() {
      this.$emit('showMonthCalendar');
    },

    /**
     * Change the page month
     * @param {Number} incrementBy
     */
    changeMonth: function changeMonth(incrementBy) {
      var date = this.pageDate;
      this.utils.setMonth(date, this.utils.getMonth(date) + incrementBy);
      this.$emit('changedMonth', date);
    },

    /**
     * Decrement the page month
     */
    previousMonth: function previousMonth() {
      if (!this.isPreviousMonthDisabled()) {
        this.changeMonth(-1);
      }
    },

    /**
     * Is the previous month disabled?
     * @return {Boolean}
     */
    isPreviousMonthDisabled: function isPreviousMonthDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      var d = this.pageDate;
      return this.utils.getMonth(this.disabledDates.to) >= this.utils.getMonth(d) && this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(d);
    },

    /**
     * Increment the current page month
     */
    nextMonth: function nextMonth() {
      if (!this.isNextMonthDisabled()) {
        this.changeMonth(+1);
      }
    },

    /**
     * Is the next month disabled?
     * @return {Boolean}
     */
    isNextMonthDisabled: function isNextMonthDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      var d = this.pageDate;
      return this.utils.getMonth(this.disabledDates.from) <= this.utils.getMonth(d) && this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(d);
    },

    /**
     * Whether a day is selected
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedDate: function isSelectedDate(dObj) {
      return this.selectedDate && this.utils.compareDates(this.selectedDate, dObj);
    },

    /**
     * Whether a day is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledDate: function isDisabledDate(date) {
      var _this = this;

      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined') {
        return false;
      }

      if (typeof this.disabledDates.dates !== 'undefined') {
        this.disabledDates.dates.forEach(function (d) {
          if (_this.utils.compareDates(date, d)) {
            disabledDates = true;
            return true;
          }
        });
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to && date < this.disabledDates.to) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from && date > this.disabledDates.from) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.ranges !== 'undefined') {
        this.disabledDates.ranges.forEach(function (range) {
          if (typeof range.from !== 'undefined' && range.from && typeof range.to !== 'undefined' && range.to) {
            if (date < range.to && date > range.from) {
              disabledDates = true;
              return true;
            }
          }
        });
      }

      if (typeof this.disabledDates.days !== 'undefined' && this.disabledDates.days.indexOf(this.utils.getDay(date)) !== -1) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.daysOfMonth !== 'undefined' && this.disabledDates.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1) {
        disabledDates = true;
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    },

    /**
     * Whether a day is highlighted (only if it is not disabled already except when highlighted.includeDisabled is true)
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightedDate: function isHighlightedDate(date) {
      var _this2 = this;

      if (!(this.highlighted && this.highlighted.includeDisabled) && this.isDisabledDate(date)) {
        return false;
      }

      var highlighted = false;

      if (typeof this.highlighted === 'undefined') {
        return false;
      }

      if (typeof this.highlighted.dates !== 'undefined') {
        this.highlighted.dates.forEach(function (d) {
          if (_this2.utils.compareDates(date, d)) {
            highlighted = true;
            return true;
          }
        });
      }

      if (this.isDefined(this.highlighted.from) && this.isDefined(this.highlighted.to)) {
        highlighted = date >= this.highlighted.from && date <= this.highlighted.to;
      }

      if (typeof this.highlighted.days !== 'undefined' && this.highlighted.days.indexOf(this.utils.getDay(date)) !== -1) {
        highlighted = true;
      }

      if (typeof this.highlighted.daysOfMonth !== 'undefined' && this.highlighted.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1) {
        highlighted = true;
      }

      if (typeof this.highlighted.customPredictor === 'function' && this.highlighted.customPredictor(date)) {
        highlighted = true;
      }

      return highlighted;
    },
    dayClasses: function dayClasses(day) {
      return {
        'selected': day.isSelected,
        'disabled': day.isDisabled,
        'highlighted': day.isHighlighted,
        'today': day.isToday,
        'weekend': day.isWeekend,
        'sat': day.isSaturday,
        'sun': day.isSunday,
        'highlight-start': day.isHighlightStart,
        'highlight-end': day.isHighlightEnd
      };
    },

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightStart: function isHighlightStart(date) {
      return this.isHighlightedDate(date) && this.highlighted.from instanceof Date && this.utils.getFullYear(this.highlighted.from) === this.utils.getFullYear(date) && this.utils.getMonth(this.highlighted.from) === this.utils.getMonth(date) && this.utils.getDate(this.highlighted.from) === this.utils.getDate(date);
    },

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightEnd: function isHighlightEnd(date) {
      return this.isHighlightedDate(date) && this.highlighted.to instanceof Date && this.utils.getFullYear(this.highlighted.to) === this.utils.getFullYear(date) && this.utils.getMonth(this.highlighted.to) === this.utils.getMonth(date) && this.utils.getDate(this.highlighted.to) === this.utils.getDate(date);
    },

    /**
     * Helper
     * @param  {mixed}  prop
     * @return {Boolean}
     */
    isDefined: function isDefined(prop) {
      return typeof prop !== 'undefined' && prop;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showDayView,
          expression: "showDayView"
        }
      ],
      class: [_vm.calendarClass, "vdp-datepicker__calendar"],
      style: _vm.calendarStyle,
      on: {
        mousedown: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _vm._t("beforeCalendarHeader"),
      _vm._v(" "),
      _c("header", [
        _c(
          "span",
          {
            staticClass: "prev",
            class: { disabled: _vm.isLeftNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.nextMonth() : _vm.previousMonth();
              }
            }
          },
          [_vm._v("<")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "day__month_btn",
            class: _vm.allowedToShowView("month") ? "up" : "",
            on: { click: _vm.showMonthCalendar }
          },
          [
            _vm._v(
              _vm._s(_vm.isYmd ? _vm.currYearName : _vm.currMonthName) +
                " " +
                _vm._s(_vm.isYmd ? _vm.currMonthName : _vm.currYearName)
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "next",
            class: { disabled: _vm.isRightNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.previousMonth() : _vm.nextMonth();
              }
            }
          },
          [_vm._v(">")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { class: _vm.isRtl ? "flex-rtl" : "" },
        [
          _vm._l(_vm.daysOfWeek, function(d) {
            return _c(
              "span",
              { key: d.timestamp, staticClass: "cell day-header" },
              [_vm._v(_vm._s(d))]
            )
          }),
          _vm._v(" "),
          _vm.blankDays > 0
            ? _vm._l(_vm.blankDays, function(d) {
                return _c("span", {
                  key: d.timestamp,
                  staticClass: "cell day blank"
                })
              })
            : _vm._e(),
          _vm._l(_vm.days, function(day) {
            return _c("span", {
              key: day.timestamp,
              staticClass: "cell day",
              class: _vm.dayClasses(day),
              domProps: { innerHTML: _vm._s(_vm.dayCellContent(day)) },
              on: {
                click: function($event) {
                  return _vm.selectDate(day)
                }
              }
            })
          })
        ],
        2
      )
    ],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerDay = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

//
var script$2 = {
  props: {
    showMonthView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    disabledDates: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    allowedToShowView: Function,
    useUtc: Boolean
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    };
  },
  computed: {
    months: function months() {
      var d = this.pageDate;
      var months = []; // set up a new date object to the beginning of the current 'page'

      var dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), 0, d.getUTCDate())) : new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 12; i++) {
        months.push({
          month: this.utils.getMonthName(i, this.translation.months),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedMonth(dObj),
          isDisabled: this.isDisabledMonth(dObj)
        });
        this.utils.setMonth(dObj, this.utils.getMonth(dObj) + 1);
      }

      return months;
    },

    /**
     * Get year name on current page.
     * @return {String}
     */
    pageYearName: function pageYearName() {
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(this.utils.getFullYear(this.pageDate)).concat(yearSuffix);
    },

    /**
     * Is the left hand navigation disabled
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextYearDisabled(this.pageTimestamp) : this.isPreviousYearDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation disabled
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousYearDisabled(this.pageTimestamp) : this.isNextYearDisabled(this.pageTimestamp);
    }
  },
  methods: {
    /**
     * Emits a selectMonth event
     * @param {Object} month
     */
    selectMonth: function selectMonth(month) {
      if (month.isDisabled) {
        return false;
      }

      this.$emit('selectMonth', month);
    },

    /**
     * Changes the year up or down
     * @param {Number} incrementBy
     */
    changeYear: function changeYear(incrementBy) {
      var date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.$emit('changedYear', date);
    },

    /**
     * Decrements the year
     */
    previousYear: function previousYear() {
      if (!this.isPreviousYearDisabled()) {
        this.changeYear(-1);
      }
    },

    /**
     * Checks if the previous year is disabled or not
     * @return {Boolean}
     */
    isPreviousYearDisabled: function isPreviousYearDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      return this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(this.pageDate);
    },

    /**
     * Increments the year
     */
    nextYear: function nextYear() {
      if (!this.isNextYearDisabled()) {
        this.changeYear(1);
      }
    },

    /**
     * Checks if the next year is disabled or not
     * @return {Boolean}
     */
    isNextYearDisabled: function isNextYearDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      return this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(this.pageDate);
    },

    /**
     * Emits an event that shows the year calendar
     */
    showYearCalendar: function showYearCalendar() {
      this.$emit('showYearCalendar');
    },

    /**
     * Whether the selected date is in this month
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedMonth: function isSelectedMonth(date) {
      return this.selectedDate && this.utils.getFullYear(this.selectedDate) === this.utils.getFullYear(date) && this.utils.getMonth(this.selectedDate) === this.utils.getMonth(date);
    },

    /**
     * Whether a month is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledMonth: function isDisabledMonth(date) {
      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined') {
        return false;
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (this.utils.getMonth(date) < this.utils.getMonth(this.disabledDates.to) && this.utils.getFullYear(date) <= this.utils.getFullYear(this.disabledDates.to) || this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (this.utils.getMonth(date) > this.utils.getMonth(this.disabledDates.from) && this.utils.getFullYear(date) >= this.utils.getFullYear(this.disabledDates.from) || this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showMonthView,
          expression: "showMonthView"
        }
      ],
      class: [_vm.calendarClass, "vdp-datepicker__calendar"],
      style: _vm.calendarStyle,
      on: {
        mousedown: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _vm._t("beforeCalendarHeader"),
      _vm._v(" "),
      _c("header", [
        _c(
          "span",
          {
            staticClass: "prev",
            class: { disabled: _vm.isLeftNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.nextYear() : _vm.previousYear();
              }
            }
          },
          [_vm._v("<")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "month__year_btn",
            class: _vm.allowedToShowView("year") ? "up" : "",
            on: { click: _vm.showYearCalendar }
          },
          [_vm._v(_vm._s(_vm.pageYearName))]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "next",
            class: { disabled: _vm.isRightNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.previousYear() : _vm.nextYear();
              }
            }
          },
          [_vm._v(">")]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.months, function(month) {
        return _c(
          "span",
          {
            key: month.timestamp,
            staticClass: "cell month",
            class: { selected: month.isSelected, disabled: month.isDisabled },
            on: {
              click: function($event) {
                $event.stopPropagation();
                return _vm.selectMonth(month)
              }
            }
          },
          [_vm._v(_vm._s(month.month))]
        )
      })
    ],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerMonth = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//
var script$3 = {
  props: {
    showYearView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    disabledDates: Object,
    highlighted: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    allowedToShowView: Function,
    useUtc: Boolean
  },
  computed: {
    years: function years() {
      var d = this.pageDate;
      var years = []; // set up a new date object to the beginning of the current 'page'7

      var dObj = this.useUtc ? new Date(Date.UTC(Math.floor(d.getUTCFullYear() / 10) * 10, d.getUTCMonth(), d.getUTCDate())) : new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());

      for (var i = 0; i < 10; i++) {
        years.push({
          year: this.utils.getFullYear(dObj),
          timestamp: dObj.getTime(),
          isSelected: this.isSelectedYear(dObj),
          isDisabled: this.isDisabledYear(dObj)
        });
        this.utils.setFullYear(dObj, this.utils.getFullYear(dObj) + 1);
      }

      return years;
    },

    /**
     * @return {String}
     */
    getPageDecade: function getPageDecade() {
      var decadeStart = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10;
      var decadeEnd = decadeStart + 9;
      var yearSuffix = this.translation.yearSuffix;
      return "".concat(decadeStart, " - ").concat(decadeEnd).concat(yearSuffix);
    },

    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled() {
      return this.isRtl ? this.isNextDecadeDisabled(this.pageTimestamp) : this.isPreviousDecadeDisabled(this.pageTimestamp);
    },

    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled() {
      return this.isRtl ? this.isPreviousDecadeDisabled(this.pageTimestamp) : this.isNextDecadeDisabled(this.pageTimestamp);
    }
  },
  data: function data() {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    };
  },
  methods: {
    selectYear: function selectYear(year) {
      if (year.isDisabled) {
        return false;
      }

      this.$emit('selectYear', year);
    },
    changeYear: function changeYear(incrementBy) {
      var date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.$emit('changedDecade', date);
    },
    previousDecade: function previousDecade() {
      if (this.isPreviousDecadeDisabled()) {
        return false;
      }

      this.changeYear(-10);
    },
    isPreviousDecadeDisabled: function isPreviousDecadeDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }

      var disabledYear = this.utils.getFullYear(this.disabledDates.to);
      var lastYearInPreviousPage = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10 - 1;
      return disabledYear > lastYearInPreviousPage;
    },
    nextDecade: function nextDecade() {
      if (this.isNextDecadeDisabled()) {
        return false;
      }

      this.changeYear(10);
    },
    isNextDecadeDisabled: function isNextDecadeDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }

      var disabledYear = this.utils.getFullYear(this.disabledDates.from);
      var firstYearInNextPage = Math.ceil(this.utils.getFullYear(this.pageDate) / 10) * 10;
      return disabledYear < firstYearInNextPage;
    },

    /**
     * Whether the selected date is in this year
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedYear: function isSelectedYear(date) {
      return this.selectedDate && this.utils.getFullYear(this.selectedDate) === this.utils.getFullYear(date);
    },

    /**
     * Whether a year is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledYear: function isDisabledYear(date) {
      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined' || !this.disabledDates) {
        return false;
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates;
    }
  } // eslint-disable-next-line

};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showYearView,
          expression: "showYearView"
        }
      ],
      class: [_vm.calendarClass, "vdp-datepicker__calendar"],
      style: _vm.calendarStyle,
      on: {
        mousedown: function($event) {
          $event.preventDefault();
        }
      }
    },
    [
      _vm._t("beforeCalendarHeader"),
      _vm._v(" "),
      _c("header", [
        _c(
          "span",
          {
            staticClass: "prev",
            class: { disabled: _vm.isLeftNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.nextDecade() : _vm.previousDecade();
              }
            }
          },
          [_vm._v("<")]
        ),
        _vm._v(" "),
        _c("span", [_vm._v(_vm._s(_vm.getPageDecade))]),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "next",
            class: { disabled: _vm.isRightNavDisabled },
            on: {
              click: function($event) {
                _vm.isRtl ? _vm.previousDecade() : _vm.nextDecade();
              }
            }
          },
          [_vm._v(">")]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.years, function(year) {
        return _c(
          "span",
          {
            key: year.timestamp,
            staticClass: "cell year",
            class: { selected: year.isSelected, disabled: year.isDisabled },
            on: {
              click: function($event) {
                $event.stopPropagation();
                return _vm.selectYear(year)
              }
            }
          },
          [_vm._v(_vm._s(year.year))]
        )
      })
    ],
    2
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var PickerYear = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

//
var script$4 = {
  components: {
    DateInput: DateInput,
    PickerDay: PickerDay,
    PickerMonth: PickerMonth,
    PickerYear: PickerYear
  },
  props: {
    value: {
      validator: function validator(val) {
        return utils$1.validateDateInput(val);
      }
    },
    name: String,
    refName: String,
    id: String,
    format: {
      type: [String, Function],
      "default": 'dd MMM yyyy'
    },
    language: {
      type: Object,
      "default": function _default() {
        return en;
      }
    },
    openDate: {
      validator: function validator(val) {
        return utils$1.validateDateInput(val);
      }
    },
    dayCellContent: Function,
    fullMonthName: Boolean,
    disabledDates: Object,
    highlighted: Object,
    placeholder: String,
    inline: Boolean,
    calendarClass: [String, Object, Array],
    inputClass: [String, Object, Array],
    wrapperClass: [String, Object, Array],
    mondayFirst: Boolean,
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    bootstrapStyling: Boolean,
    initialView: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    useUtc: Boolean,
    minimumView: {
      type: String,
      "default": 'day'
    },
    maximumView: {
      type: String,
      "default": 'year'
    }
  },
  data: function data() {
    var startDate = this.openDate ? new Date(this.openDate) : new Date();
    var constructedDateUtils = makeDateUtils(this.useUtc);
    var pageTimestamp = constructedDateUtils.setDate(startDate, 1);
    return {
      /*
       * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
       * This represents the first day of the current viewing month
       * {Number}
       */
      pageTimestamp: pageTimestamp,

      /*
       * Selected Date
       * {Date}
       */
      selectedDate: null,

      /*
       * Flags to show calendar views
       * {Boolean}
       */
      showDayView: false,
      showMonthView: false,
      showYearView: false,

      /*
       * Positioning
       */
      calendarHeight: 0,
      resetTypedDate: new Date(),
      utils: constructedDateUtils
    };
  },
  watch: {
    value: function value(_value) {
      this.setValue(_value);
    },
    openDate: function openDate() {
      this.setPageDate();
    },
    initialView: function initialView() {
      this.setInitialView();
    }
  },
  computed: {
    computedInitialView: function computedInitialView() {
      if (!this.initialView) {
        return this.minimumView;
      }

      return this.initialView;
    },
    pageDate: function pageDate() {
      return new Date(this.pageTimestamp);
    },
    translation: function translation() {
      return this.language;
    },
    calendarStyle: function calendarStyle() {
      return {
        position: this.isInline ? 'static' : undefined
      };
    },
    isOpen: function isOpen() {
      return this.showDayView || this.showMonthView || this.showYearView;
    },
    isInline: function isInline() {
      return !!this.inline;
    },
    isRtl: function isRtl() {
      return this.translation.rtl === true;
    }
  },
  methods: {
    /**
     * Called in the event that the user navigates to date pages and
     * closes the picker without selecting a date.
     */
    resetDefaultPageDate: function resetDefaultPageDate() {
      if (this.selectedDate === null) {
        this.setPageDate();
        return;
      }

      this.setPageDate(this.selectedDate);
    },

    /**
     * Effectively a toggle to show/hide the calendar
     * @return {mixed}
     */
    showCalendar: function showCalendar() {
      if (this.disabled || this.isInline) {
        return false;
      }

      if (this.isOpen) {
        return this.close(true);
      }

      this.setInitialView();
    },

    /**
     * Sets the initial picker page view: day, month or year
     */
    setInitialView: function setInitialView() {
      var initialView = this.computedInitialView;

      if (!this.allowedToShowView(initialView)) {
        throw new Error("initialView '".concat(this.initialView, "' cannot be rendered based on minimum '").concat(this.minimumView, "' and maximum '").concat(this.maximumView, "'"));
      }

      switch (initialView) {
        case 'year':
          this.showYearCalendar();
          break;

        case 'month':
          this.showMonthCalendar();
          break;

        default:
          this.showDayCalendar();
          break;
      }
    },

    /**
     * Are we allowed to show a specific picker view?
     * @param {String} view
     * @return {Boolean}
     */
    allowedToShowView: function allowedToShowView(view) {
      var views = ['day', 'month', 'year'];
      var minimumViewIndex = views.indexOf(this.minimumView);
      var maximumViewIndex = views.indexOf(this.maximumView);
      var viewIndex = views.indexOf(view);
      return viewIndex >= minimumViewIndex && viewIndex <= maximumViewIndex;
    },

    /**
     * Show the day picker
     * @return {Boolean}
     */
    showDayCalendar: function showDayCalendar() {
      if (!this.allowedToShowView('day')) {
        return false;
      }

      this.close();
      this.showDayView = true;
      return true;
    },

    /**
     * Show the month picker
     * @return {Boolean}
     */
    showMonthCalendar: function showMonthCalendar() {
      if (!this.allowedToShowView('month')) {
        return false;
      }

      this.close();
      this.showMonthView = true;
      return true;
    },

    /**
     * Show the year picker
     * @return {Boolean}
     */
    showYearCalendar: function showYearCalendar() {
      if (!this.allowedToShowView('year')) {
        return false;
      }

      this.close();
      this.showYearView = true;
      return true;
    },

    /**
     * Set the selected date
     * @param {Number} timestamp
     */
    setDate: function setDate(timestamp) {
      var date = new Date(timestamp);
      this.selectedDate = date;
      this.setPageDate(date);
      this.$emit('selected', date);
      this.$emit('input', date);
    },

    /**
     * Clear the selected date
     */
    clearDate: function clearDate() {
      this.selectedDate = null;
      this.setPageDate();
      this.$emit('selected', null);
      this.$emit('input', null);
      this.$emit('cleared');
    },

    /**
     * @param {Object} date
     */
    selectDate: function selectDate(date) {
      this.setDate(date.timestamp);

      if (!this.isInline) {
        this.close(true);
      }

      this.resetTypedDate = new Date();
    },

    /**
     * @param {Object} date
     */
    selectDisabledDate: function selectDisabledDate(date) {
      this.$emit('selectedDisabled', date);
    },

    /**
     * @param {Object} month
     */
    selectMonth: function selectMonth(month) {
      var date = new Date(month.timestamp);

      if (this.allowedToShowView('day')) {
        this.setPageDate(date);
        this.$emit('changedMonth', month);
        this.showDayCalendar();
      } else {
        this.selectDate(month);
      }
    },

    /**
     * @param {Object} year
     */
    selectYear: function selectYear(year) {
      var date = new Date(year.timestamp);

      if (this.allowedToShowView('month')) {
        this.setPageDate(date);
        this.$emit('changedYear', year);
        this.showMonthCalendar();
      } else {
        this.selectDate(year);
      }
    },

    /**
     * Set the datepicker value
     * @param {Date|String|Number|null} date
     */
    setValue: function setValue(date) {
      if (typeof date === 'string' || typeof date === 'number') {
        var parsed = new Date(date);
        date = isNaN(parsed.valueOf()) ? null : parsed;
      }

      if (!date) {
        this.setPageDate();
        this.selectedDate = null;
        return;
      }

      this.selectedDate = date;
      this.setPageDate(date);
    },

    /**
     * Sets the date that the calendar should open on
     */
    setPageDate: function setPageDate(date) {
      if (!date) {
        if (this.openDate) {
          date = new Date(this.openDate);
        } else {
          date = new Date();
        }
      }

      this.pageTimestamp = this.utils.setDate(new Date(date), 1);
    },

    /**
     * Handles a month change from the day picker
     */
    handleChangedMonthFromDayPicker: function handleChangedMonthFromDayPicker(date) {
      this.setPageDate(date);
      this.$emit('changedMonth', date);
    },

    /**
     * Set the date from a typedDate event
     */
    setTypedDate: function setTypedDate(date) {
      this.setDate(date.getTime());
    },

    /**
     * Close all calendar layers
     * @param {Boolean} emitEvent - emit close event
     */
    close: function close(emitEvent) {
      this.showDayView = this.showMonthView = this.showYearView = false;

      if (!this.isInline) {
        if (emitEvent) {
          this.$emit('closed');
        }

        document.removeEventListener('click', this.clickOutside, false);
      }
    },

    /**
     * Initiate the component
     */
    init: function init() {
      if (this.value) {
        this.setValue(this.value);
      }

      if (this.isInline) {
        this.setInitialView();
      }
    }
  },
  mounted: function mounted() {
    this.init();
  }
} // eslint-disable-next-line
;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "vdp-datepicker",
      class: [_vm.wrapperClass, _vm.isRtl ? "rtl" : ""]
    },
    [
      _c(
        "date-input",
        {
          attrs: {
            selectedDate: _vm.selectedDate,
            resetTypedDate: _vm.resetTypedDate,
            format: _vm.format,
            translation: _vm.translation,
            inline: _vm.inline,
            id: _vm.id,
            name: _vm.name,
            refName: _vm.refName,
            openDate: _vm.openDate,
            placeholder: _vm.placeholder,
            inputClass: _vm.inputClass,
            typeable: _vm.typeable,
            clearButton: _vm.clearButton,
            clearButtonIcon: _vm.clearButtonIcon,
            calendarButton: _vm.calendarButton,
            calendarButtonIcon: _vm.calendarButtonIcon,
            calendarButtonIconContent: _vm.calendarButtonIconContent,
            disabled: _vm.disabled,
            required: _vm.required,
            bootstrapStyling: _vm.bootstrapStyling,
            "use-utc": _vm.useUtc
          },
          on: {
            showCalendar: _vm.showCalendar,
            closeCalendar: _vm.close,
            typedDate: _vm.setTypedDate,
            clearDate: _vm.clearDate
          }
        },
        [_vm._t("afterDateInput", null, { slot: "afterDateInput" })],
        2
      ),
      _vm._v(" "),
      _vm.allowedToShowView("day")
        ? _c(
            "picker-day",
            {
              attrs: {
                pageDate: _vm.pageDate,
                selectedDate: _vm.selectedDate,
                showDayView: _vm.showDayView,
                fullMonthName: _vm.fullMonthName,
                allowedToShowView: _vm.allowedToShowView,
                disabledDates: _vm.disabledDates,
                highlighted: _vm.highlighted,
                calendarClass: _vm.calendarClass,
                calendarStyle: _vm.calendarStyle,
                translation: _vm.translation,
                pageTimestamp: _vm.pageTimestamp,
                isRtl: _vm.isRtl,
                mondayFirst: _vm.mondayFirst,
                dayCellContent: _vm.dayCellContent,
                "use-utc": _vm.useUtc
              },
              on: {
                changedMonth: _vm.handleChangedMonthFromDayPicker,
                selectDate: _vm.selectDate,
                showMonthCalendar: _vm.showMonthCalendar,
                selectedDisabled: _vm.selectDisabledDate
              }
            },
            [
              _vm._t("beforeCalendarHeader", null, {
                slot: "beforeCalendarHeader"
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.allowedToShowView("month")
        ? _c(
            "picker-month",
            {
              attrs: {
                pageDate: _vm.pageDate,
                selectedDate: _vm.selectedDate,
                showMonthView: _vm.showMonthView,
                allowedToShowView: _vm.allowedToShowView,
                disabledDates: _vm.disabledDates,
                calendarClass: _vm.calendarClass,
                calendarStyle: _vm.calendarStyle,
                translation: _vm.translation,
                isRtl: _vm.isRtl,
                "use-utc": _vm.useUtc
              },
              on: {
                selectMonth: _vm.selectMonth,
                showYearCalendar: _vm.showYearCalendar,
                changedYear: _vm.setPageDate
              }
            },
            [
              _vm._t("beforeCalendarHeader", null, {
                slot: "beforeCalendarHeader"
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.allowedToShowView("year")
        ? _c(
            "picker-year",
            {
              attrs: {
                pageDate: _vm.pageDate,
                selectedDate: _vm.selectedDate,
                showYearView: _vm.showYearView,
                allowedToShowView: _vm.allowedToShowView,
                disabledDates: _vm.disabledDates,
                calendarClass: _vm.calendarClass,
                calendarStyle: _vm.calendarStyle,
                translation: _vm.translation,
                isRtl: _vm.isRtl,
                "use-utc": _vm.useUtc
              },
              on: { selectYear: _vm.selectYear, changedDecade: _vm.setPageDate }
            },
            [
              _vm._t("beforeCalendarHeader", null, {
                slot: "beforeCalendarHeader"
              })
            ],
            2
          )
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-64ca2bb5_0", { source: ".rtl {\n  direction: rtl;\n}\n.vdp-datepicker {\n  position: relative;\n  text-align: left;\n}\n.vdp-datepicker * {\n  box-sizing: border-box;\n}\n.vdp-datepicker__calendar {\n  position: absolute;\n  z-index: 100;\n  background: #fff;\n  width: 300px;\n  border: 1px solid #ccc;\n}\n.vdp-datepicker__calendar header {\n  display: block;\n  line-height: 40px;\n}\n.vdp-datepicker__calendar header span {\n  display: inline-block;\n  text-align: center;\n  width: 71.42857142857143%;\n  float: left;\n}\n.vdp-datepicker__calendar header .prev,\n.vdp-datepicker__calendar header .next {\n  width: 14.285714285714286%;\n  float: left;\n  text-indent: -10000px;\n  position: relative;\n}\n.vdp-datepicker__calendar header .prev:after,\n.vdp-datepicker__calendar header .next:after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  border: 6px solid transparent;\n}\n.vdp-datepicker__calendar header .prev:after {\n  border-right: 10px solid #000;\n  margin-left: -5px;\n}\n.vdp-datepicker__calendar header .prev.disabled:after {\n  border-right: 10px solid #ddd;\n}\n.vdp-datepicker__calendar header .next:after {\n  border-left: 10px solid #000;\n  margin-left: 5px;\n}\n.vdp-datepicker__calendar header .next.disabled:after {\n  border-left: 10px solid #ddd;\n}\n.vdp-datepicker__calendar header .prev:not(.disabled),\n.vdp-datepicker__calendar header .next:not(.disabled),\n.vdp-datepicker__calendar header .up:not(.disabled) {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar header .prev:not(.disabled):hover,\n.vdp-datepicker__calendar header .next:not(.disabled):hover,\n.vdp-datepicker__calendar header .up:not(.disabled):hover {\n  background: #eee;\n}\n.vdp-datepicker__calendar .disabled {\n  color: #ddd;\n  cursor: default;\n}\n.vdp-datepicker__calendar .flex-rtl {\n  display: flex;\n  width: inherit;\n  flex-wrap: wrap;\n}\n.vdp-datepicker__calendar .cell {\n  display: inline-block;\n  padding: 0 5px;\n  width: 14.285714285714286%;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {\n  border: 1px solid #4bd;\n}\n.vdp-datepicker__calendar .cell.selected {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.selected:hover {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.selected.highlighted {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.highlighted {\n  background: #cae5ed;\n}\n.vdp-datepicker__calendar .cell.highlighted.disabled {\n  color: #a3a3a3;\n}\n.vdp-datepicker__calendar .cell.grey {\n  color: #888;\n}\n.vdp-datepicker__calendar .cell.grey:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header {\n  font-size: 75%;\n  white-space: nowrap;\n  cursor: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .month,\n.vdp-datepicker__calendar .year {\n  width: 33.333%;\n}\n.vdp-datepicker__clear-button,\n.vdp-datepicker__calendar-button {\n  cursor: pointer;\n  font-style: normal;\n}\n.vdp-datepicker__clear-button.disabled,\n.vdp-datepicker__calendar-button.disabled {\n  color: #999;\n  cursor: default;\n}\n", map: {"version":3,"sources":["Datepicker.vue"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;AACb;AACA;;EAEE,0BAA0B;EAC1B,WAAW;EACX,qBAAqB;EACrB,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,4CAA4C;EAC5C,6BAA6B;AAC/B;AACA;EACE,6BAA6B;EAC7B,iBAAiB;AACnB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,4BAA4B;EAC5B,gBAAgB;AAClB;AACA;EACE,4BAA4B;AAC9B;AACA;;;EAGE,eAAe;AACjB;AACA;;;EAGE,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,aAAa;EACb,cAAc;EACd,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,0BAA0B;EAC1B,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,6BAA6B;AAC/B;AACA;;;EAGE,eAAe;AACjB;AACA;;;EAGE,sBAAsB;AACxB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;AACb;AACA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;;EAEE,cAAc;AAChB;AACA;;EAEE,eAAe;EACf,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,eAAe;AACjB","file":"Datepicker.vue","sourcesContent":[".rtl {\n  direction: rtl;\n}\n.vdp-datepicker {\n  position: relative;\n  text-align: left;\n}\n.vdp-datepicker * {\n  box-sizing: border-box;\n}\n.vdp-datepicker__calendar {\n  position: absolute;\n  z-index: 100;\n  background: #fff;\n  width: 300px;\n  border: 1px solid #ccc;\n}\n.vdp-datepicker__calendar header {\n  display: block;\n  line-height: 40px;\n}\n.vdp-datepicker__calendar header span {\n  display: inline-block;\n  text-align: center;\n  width: 71.42857142857143%;\n  float: left;\n}\n.vdp-datepicker__calendar header .prev,\n.vdp-datepicker__calendar header .next {\n  width: 14.285714285714286%;\n  float: left;\n  text-indent: -10000px;\n  position: relative;\n}\n.vdp-datepicker__calendar header .prev:after,\n.vdp-datepicker__calendar header .next:after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  border: 6px solid transparent;\n}\n.vdp-datepicker__calendar header .prev:after {\n  border-right: 10px solid #000;\n  margin-left: -5px;\n}\n.vdp-datepicker__calendar header .prev.disabled:after {\n  border-right: 10px solid #ddd;\n}\n.vdp-datepicker__calendar header .next:after {\n  border-left: 10px solid #000;\n  margin-left: 5px;\n}\n.vdp-datepicker__calendar header .next.disabled:after {\n  border-left: 10px solid #ddd;\n}\n.vdp-datepicker__calendar header .prev:not(.disabled),\n.vdp-datepicker__calendar header .next:not(.disabled),\n.vdp-datepicker__calendar header .up:not(.disabled) {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar header .prev:not(.disabled):hover,\n.vdp-datepicker__calendar header .next:not(.disabled):hover,\n.vdp-datepicker__calendar header .up:not(.disabled):hover {\n  background: #eee;\n}\n.vdp-datepicker__calendar .disabled {\n  color: #ddd;\n  cursor: default;\n}\n.vdp-datepicker__calendar .flex-rtl {\n  display: flex;\n  width: inherit;\n  flex-wrap: wrap;\n}\n.vdp-datepicker__calendar .cell {\n  display: inline-block;\n  padding: 0 5px;\n  width: 14.285714285714286%;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {\n  border: 1px solid #4bd;\n}\n.vdp-datepicker__calendar .cell.selected {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.selected:hover {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.selected.highlighted {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.highlighted {\n  background: #cae5ed;\n}\n.vdp-datepicker__calendar .cell.highlighted.disabled {\n  color: #a3a3a3;\n}\n.vdp-datepicker__calendar .cell.grey {\n  color: #888;\n}\n.vdp-datepicker__calendar .cell.grey:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header {\n  font-size: 75%;\n  white-space: nowrap;\n  cursor: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .month,\n.vdp-datepicker__calendar .year {\n  width: 33.333%;\n}\n.vdp-datepicker__clear-button,\n.vdp-datepicker__calendar-button {\n  cursor: pointer;\n  font-style: normal;\n}\n.vdp-datepicker__clear-button.disabled,\n.vdp-datepicker__calendar-button.disabled {\n  color: #999;\n  cursor: default;\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  

  
  var Datepicker = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    browser,
    undefined
  );

/* harmony default export */ var vuejs_datepicker_esm = (Datepicker);

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/Language.js
class Language_Language {
  constructor (language, months, monthsAbbr, days) {
    this.language = language
    this.months = months
    this.monthsAbbr = monthsAbbr
    this.days = days
    this.rtl = false
    this.ymd = false
    this.yearSuffix = ''
  }

  get language () {
    return this._language
  }

  set language (language) {
    if (typeof language !== 'string') {
      throw new TypeError('Language must be a string')
    }
    this._language = language
  }

  get months () {
    return this._months
  }

  set months (months) {
    if (months.length !== 12) {
      throw new RangeError(`There must be 12 months for ${this.language} language`)
    }
    this._months = months
  }

  get monthsAbbr () {
    return this._monthsAbbr
  }

  set monthsAbbr (monthsAbbr) {
    if (monthsAbbr.length !== 12) {
      throw new RangeError(`There must be 12 abbreviated months for ${this.language} language`)
    }
    this._monthsAbbr = monthsAbbr
  }

  get days () {
    return this._days
  }

  set days (days) {
    if (days.length !== 7) {
      throw new RangeError(`There must be 7 days for ${this.language} language`)
    }
    this._days = days
  }
}
// eslint-disable-next-line
;

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/af.js


/* harmony default export */ var af = (new Language_Language(
  'Afrikaans',
  ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'],
  ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
  ['So.', 'Ma.', 'Di.', 'Wo.', 'Do.', 'Vr.', 'Sa.']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/ar.js


const language = new Language_Language(
  'Arabic',
  ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوڤمبر', 'ديسمبر'],
  ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوڤمبر', 'ديسمبر'],
  ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']
)

language.rtl = true

/* harmony default export */ var ar = (language);

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/bg.js


/* harmony default export */ var bg = (new Language_Language(
  'Bulgarian',
  ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
  ['Ян', 'Фев', 'Мар', 'Апр', 'Май', 'Юни', 'Юли', 'Авг', 'Сеп', 'Окт', 'Ное', 'Дек'],
  ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/bs.js


/* harmony default export */ var bs = (new Language_Language(
  'Bosnian',
  ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Juni', 'Juli', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
  ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'],
  ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/ca.js


/* harmony default export */ var ca = (new Language_Language(
  'Catalan',
  ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
  ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des'],
  ['Diu', 'Dil', 'Dmr', 'Dmc', 'Dij', 'Div', 'Dis']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/cs.js


/* harmony default export */ var cs = (new Language_Language(
  'Czech',
  ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
  ['led', 'úno', 'bře', 'dub', 'kvě', 'čer', 'čec', 'srp', 'zář', 'říj', 'lis', 'pro'],
  ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/da.js


/* harmony default export */ var da = (new Language_Language(
  'Danish',
  ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
  ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
  ['Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/de.js


/* harmony default export */ var de = (new Language_Language(
  'German',
  ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/ee.js


/* harmony default export */ var ee = (new Language_Language(
  'Estonian',
  ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'],
  ['Jaan', 'Veebr', 'Märts', 'Apr', 'Mai', 'Juuni', 'Juuli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dets'],
  ['P', 'E', 'T', 'K', 'N', 'R', 'L']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/el.js


/* harmony default export */ var el = (new Language_Language(
  'Greek',
  ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάϊος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
  ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαι', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'],
  ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/en.js


/* harmony default export */ var translations_en = (new Language_Language(
  'English',
  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/es.js


/* harmony default export */ var es = (new Language_Language(
  'Spanish',
  ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/fa.js


/* harmony default export */ var fa = (new Language_Language(
  'Persian',
  ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
  ['فرو', 'ارد', 'خرد', 'تیر', 'مرد', 'شهر', 'مهر', 'آبا', 'آذر', 'دی', 'بهم', 'اسف'],
  ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/fi.js


/* harmony default export */ var fi = (new Language_Language(
  'Finnish',
  ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'],
  ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'],
  ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/fo.js


/* harmony default export */ var fo = (new Language_Language(
  'Faroese',
  ['Januar', 'Februar', 'Mars', 'Apríl', 'Mai', 'Juni', 'Juli', 'August', 'Septembur', 'Oktobur', 'Novembur', 'Desembur'],
  ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
  ['Sun', 'Mán', 'Týs', 'Mik', 'Hós', 'Frí', 'Ley']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/fr.js


/* harmony default export */ var fr = (new Language_Language(
  'French',
  ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
  ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/ge.js


/* harmony default export */ var ge = (new Language_Language(
  'Georgia',
  ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'],
  ['იან', 'თებ', 'მარ', 'აპრ', 'მაი', 'ივნ', 'ივლ', 'აგვ', 'სექ', 'ოქტ', 'ნოე', 'დეკ'],
  ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/gl.js


/* harmony default export */ var gl = (new Language_Language(
  'Galician',
  ['Xaneiro', 'Febreiro', 'Marzo', 'Abril', 'Maio', 'Xuño', 'Xullo', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Decembro'],
  ['Xan', 'Feb', 'Mar', 'Abr', 'Mai', 'Xuñ', 'Xul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
  ['Dom', 'Lun', 'Mar', 'Mér', 'Xov', 'Ven', 'Sáb']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/he.js


const he_language = new Language_Language(
  'Hebrew',
  ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
  ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יונ', 'יול', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'],
  ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש']
)

he_language.rtl = true

/* harmony default export */ var he = (he_language);

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/hr.js


/* harmony default export */ var hr = (new Language_Language(
  'Croatian',
  ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'],
  ['Sij', 'Velj', 'Ožu', 'Tra', 'Svi', 'Lip', 'Srp', 'Kol', 'Ruj', 'Lis', 'Stu', 'Pro'],
  ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/hu.js


/* harmony default export */ var hu = (new Language_Language(
  'Hungarian',
  ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
  ['Jan', 'Febr', 'Márc', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szept', 'Okt', 'Nov', 'Dec'],
  ['Vas', 'Hét', 'Ke', 'Sze', 'Csü', 'Pén', 'Szo']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/id.js


/* harmony default export */ var id = (new Language_Language(
  'Indonesian',
  ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
  ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/is.js


/* harmony default export */ var is = (new Language_Language(
  'Icelandic',
  ['Janúar', 'Febrúar', 'Mars', 'Apríl', 'Maí', 'Júní', 'Júlí', 'Ágúst', 'September', 'Október', 'Nóvember', 'Desember'],
  ['Jan', 'Feb', 'Mars', 'Apr', 'Maí', 'Jún', 'Júl', 'Ágú', 'Sep', 'Okt', 'Nóv', 'Des'],
  ['Sun', 'Mán', 'Þri', 'Mið', 'Fim', 'Fös', 'Lau']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/it.js


/* harmony default export */ var it = (new Language_Language(
  'Italian',
  ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
  ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
  ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/ja.js


const ja_language = new Language_Language(
  'Japanese',
  ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  ['日', '月', '火', '水', '木', '金', '土']
)

ja_language.yearSuffix = '年'
ja_language.ymd = true

/* harmony default export */ var ja = (ja_language);

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/kk.js


/* harmony default export */ var kk = (new Language_Language(
  'Kazakh',
  ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'],
  ['Қаң', 'Ақп', 'Нау', 'Сәу', 'Мам', 'Мау', 'Шіл', 'Там', 'Қыр', 'Қаз', 'Қар', 'Жел'],
  ['Жк', 'Дй', 'Сй', 'Ср', 'Бй', 'Жм', 'Сн']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/ko.js


const ko_language = new Language_Language(
  'Korean',
  ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  ['일', '월', '화', '수', '목', '금', '토']
)
ko_language.yearSuffix = '년'
ko_language.ymd = true

/* harmony default export */ var ko = (ko_language);

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/lb.js


/* harmony default export */ var lb = (new Language_Language(
  'Luxembourgish',
  ['Januar', 'Februar', 'Mäerz', 'Abrëll', 'Mee', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  ['Jan', 'Feb', 'Mäe', 'Abr', 'Mee', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  ['So.', 'Mé.', 'Dë.', 'Më.', 'Do.', 'Fr.', 'Sa.']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/lt.js


const lt_language = new Language_Language(
  'Lithuanian',
  ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
  ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rugp', 'Rugs', 'Spa', 'Lap', 'Gru'],
  ['Sek', 'Pir', 'Ant', 'Tre', 'Ket', 'Pen', 'Šeš']
)

lt_language.ymd = true

/* harmony default export */ var lt = (lt_language);

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/lv.js


/* harmony default export */ var lv = (new Language_Language(
  'Latvian',
  ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'],
  ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jūn', 'Jūl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
  ['Sv', 'Pr', 'Ot', 'Tr', 'Ce', 'Pk', 'Se']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/mk.js


/* harmony default export */ var mk = (new Language_Language(
  'Macedonian',
  ['Јануари', 'Февруари', 'Март', 'Април', 'Мај', 'Јуни', 'Јули', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
  ['Јан', 'Фев', 'Мар', 'Апр', 'Мај', 'Јун', 'Јул', 'Авг', 'Сеп', 'Окт', 'Ное', 'Дек'],
  ['Нед', 'Пон', 'Вто', 'Сре', 'Чет', 'Пет', 'Саб']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/mn.js


const mn_language = new Language_Language(
  'Mongolia',
  ['1 дүгээр сар', '2 дугаар сар', '3 дугаар сар', '4 дүгээр сар', '5 дугаар сар', '6 дугаар сар', '7 дугаар сар', '8 дугаар сар', '9 дүгээр сар', '10 дугаар сар', '11 дүгээр сар', '12 дугаар сар'],
  ['1-р сар', '2-р сар', '3-р сар', '4-р сар', '5-р сар', '6-р сар', '7-р сар', '8-р сар', '9-р сар', '10-р сар', '11-р сар', '12-р сар'],
  ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя']
)

mn_language.ymd = true

/* harmony default export */ var mn = (mn_language);

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/nb-NO.js


/* harmony default export */ var nb_NO = (new Language_Language(
  'Norwegian Bokmål',
  ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
  ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
  ['Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/nl.js


/* harmony default export */ var nl = (new Language_Language(
  'Dutch',
  ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
  ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
  ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/pl.js


/* harmony default export */ var pl = (new Language_Language(
  'Polish',
  ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
  ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
  ['Nd', 'Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/pt-BR.js


/* harmony default export */ var pt_BR = (new Language_Language(
  'Brazilian',
  ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/ro.js


/* harmony default export */ var ro = (new Language_Language(
  'Romanian',
  ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
  ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec'],
  ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/ru.js


/* harmony default export */ var ru = (new Language_Language(
  'Russian',
  ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  ['Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
  ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/sk.js


/* harmony default export */ var sk = (new Language_Language(
  'Slovakian',
  ['január', 'február', 'marec', 'apríl', 'máj', 'jún', 'júl', 'august', 'september', 'október', 'november', 'december'],
  ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec'],
  ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/sl-SI.js


/* harmony default export */ var sl_SI = (new Language_Language(
  'Sloveian',
  ['Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'],
  ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'],
  ['Ned', 'Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/sr-CYRL.js


/* harmony default export */ var sr_CYRL = (new Language_Language(
  'Serbian in Cyrillic script',
  ['Јануар', 'Фебруар', 'Март', 'Април', 'Мај', 'Јун', 'Јул', 'Август', 'Септембар', 'Октобар', 'Новембар', 'Децембар'],
  ['Јан', 'Феб', 'Мар', 'Апр', 'Мај', 'Јун', 'Јул', 'Авг', 'Сеп', 'Окт', 'Нов', 'Дец'],
  ['Нед', 'Пон', 'Уто', 'Сре', 'Чет', 'Пет', 'Суб']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/sr.js


/* harmony default export */ var sr = (new Language_Language(
  'Serbian',
  ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
  ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'],
  ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/sv.js


/* harmony default export */ var sv = (new Language_Language(
  'Swedish',
  ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
  ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
  ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/th.js


/* harmony default export */ var th = (new Language_Language(
  'Thai',
  ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
  ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/tr.js


/* harmony default export */ var tr = (new Language_Language(
  'Turkish',
  ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
  ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/uk.js


/* harmony default export */ var uk = (new Language_Language(
  'Ukraine',
  ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
  ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Чер', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд'],
  ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/ur.js


const ur_language = new Language_Language(
  'Urdu',
  ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'سپتمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
  ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'سپتمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
  ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ']
)

ur_language.rtl = true

/* harmony default export */ var ur = (ur_language);

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/vi.js


/* harmony default export */ var vi = (new Language_Language(
  'Vietnamese',
  ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
  ['T 01', 'T 02', 'T 03', 'T 04', 'T 05', 'T 06', 'T 07', 'T 08', 'T 09', 'T 10', 'T 11', 'T 12'],
  ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']
));

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/zh.js


const zh_language = new Language_Language(
  'Chinese',
  ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  ['日', '一', '二', '三', '四', '五', '六']
)
zh_language.yearSuffix = '年'

/* harmony default export */ var zh = (zh_language);

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/translations/zh-HK.js


const zh_HK_language = new Language_Language(
  'Chinese_HK',
  ['壹月', '贰月', '叁月', '肆月', '伍月', '陆月', '柒月', '捌月', '玖月', '拾月', '拾壹月', '拾贰月'],
  ['壹月', '贰月', '叁月', '肆月', '伍月', '陆月', '柒月', '捌月', '玖月', '拾月', '拾壹月', '拾贰月'],
  ['日', '壹', '贰', '叁', '肆', '伍', '陆']
)
zh_HK_language.yearSuffix = '年'

/* harmony default export */ var zh_HK = (zh_HK_language);

// CONCATENATED MODULE: ./node_modules/vuejs-datepicker/src/locale/index.js





















































// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VueFormulateDatepicker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var VueFormulateDatepickervue_type_script_lang_js_ = ({
  name: "VueFormulateDatapicker",
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      languages: locale_namespaceObject
    };
  },
  components: {
    Datepicker: vuejs_datepicker_esm
  },
  methods: {}
});
// CONCATENATED MODULE: ./src/VueFormulateDatepicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_VueFormulateDatepickervue_type_script_lang_js_ = (VueFormulateDatepickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function componentNormalizer_normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/VueFormulateDatepicker.vue





/* normalize component */

var component = componentNormalizer_normalizeComponent(
  src_VueFormulateDatepickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueFormulateDatepicker = (component.exports);
// CONCATENATED MODULE: ./src/main.js

function VueFormulateDatepickerPlugin(formulateInstance) {
  formulateInstance.extend({
    components: {
      VueFormulateDatepicker: VueFormulateDatepicker
    },
    library: {
      datepicker: {
        classification: "datepicker",
        component: "VueFormulateDatepicker"
      }
    }
  });
}
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (VueFormulateDatepickerPlugin);



/***/ })

/******/ });
});
//# sourceMappingURL=VueFormulateDatepicker.umd.js.map