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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1ce45d69-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VueFormulateDatepicker.vue?vue&type=template&id=83a3b716&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('datepicker',_vm._b({class:("formulate-input-element formulate-input-element--" + (_vm.context.type)),attrs:{"data-type":_vm.context.type,"options":_vm.context.options,"language":_vm.languages[_vm.context.attributes.language]},model:{value:(_vm.context.model),callback:function ($$v) {_vm.$set(_vm.context, "model", $$v)},expression:"context.model"}},'datepicker',_vm.context.attributes,false))}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/VueFormulateDatepicker.vue?vue&type=template&id=83a3b716&

// CONCATENATED MODULE: ./node_modules/@sum.cumo/vue-datepicker/dist/Datepicker.esm.js
/*
* @sum.cumo/vue-datepicker v3.1.0
* (c) 2018-2021 sum.cumo GmbH
* Released under the Apache-2.0 License.
*/
class Language {
  // eslint-disable-next-line max-params
  constructor(language, months, monthsAbbr, days, rtl = false, ymd = false, yearSuffix = '') {
    this.language = language;
    this.months = months;
    this.monthsAbbr = monthsAbbr;
    this.days = days;
    this.rtl = rtl;
    this.ymd = ymd;
    this.yearSuffix = yearSuffix;
  }
  /* eslint-disable no-underscore-dangle */


  get language() {
    return this._language;
  }

  set language(language) {
    if (typeof language !== 'string') {
      throw new TypeError('Language must be a string');
    }

    this._language = language;
  }

  get months() {
    return this._months;
  }

  set months(months) {
    if (months.length !== 12) {
      throw new RangeError(`There must be 12 months for ${this.language} language`);
    }

    this._months = months;
  }

  get monthsAbbr() {
    return this._monthsAbbr;
  }

  set monthsAbbr(monthsAbbr) {
    if (monthsAbbr.length !== 12) {
      throw new RangeError(`There must be 12 abbreviated months for ${this.language} language`);
    }

    this._monthsAbbr = monthsAbbr;
  }

  get days() {
    return this._days;
  }

  set days(days) {
    if (days.length !== 7) {
      throw new RangeError(`There must be 7 days for ${this.language} language`);
    }

    this._days = days;
  }

  getDaysStartingOn(firstDayOfWeek) {
    const firstDays = this._days.slice(firstDayOfWeek);

    const lastDays = this._days.slice(0, firstDayOfWeek);

    return firstDays.concat(lastDays);
  }

  getMonthByAbbrName(name) {
    const monthValue = this._monthsAbbr.findIndex(month => month === name) + 1;
    return monthValue < 10 ? `0${monthValue}` : `${monthValue}`;
  }

  getMonthByName(name) {
    const monthValue = this._months.findIndex(month => month === name) + 1;
    return monthValue < 10 ? `0${monthValue}` : `${monthValue}`;
  }

}

var en = new Language('English', ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

const getParsedDate = ({
  formatStr,
  dateStr,
  translation
}) => {
  const splitter = formatStr.match(/-|\/|\s|\./) || ['-'];
  const df = formatStr.split(splitter[0]);
  const ds = dateStr.split(splitter[0]);
  const ymd = [new Date().getFullYear(), '01', '01'];

  for (let i = 0; i < df.length; i += 1) {
    if (/yyyy/i.test(df[i])) {
      ymd[0] = ds[i];
    } else if (/mmmm/i.test(df[i])) {
      ymd[1] = translation.getMonthByName(ds[i]);
    } else if (/mmm/i.test(df[i])) {
      ymd[1] = translation.getMonthByAbbrName(ds[i]);
    } else if (/mm/i.test(df[i])) {
      ymd[1] = ds[i];
    } else if (/m/i.test(df[i])) {
      ymd[1] = ds[i];
    } else if (/dd/i.test(df[i])) {
      ymd[2] = ds[i];
    } else if (/d/i.test(df[i])) {
      const tmp = ds[i].replace(/st|rd|nd|th/g, '');
      ymd[2] = tmp < 10 ? `0${tmp}` : `${tmp}`;
    }
  }

  return ymd;
};

const utils = {
  /**
   * @type {Boolean}
   */
  useUtc: false,

  /**
   * Returns the full year, using UTC or not
   * @param {Date} date
   */
  getFullYear(date) {
    return this.useUtc ? date.getUTCFullYear() : date.getFullYear();
  },

  /**
   * Returns the month, using UTC or not
   * @param {Date} date
   */
  getMonth(date) {
    return this.useUtc ? date.getUTCMonth() : date.getMonth();
  },

  /**
   * Returns the number of days in the month, using UTC or not
   * @param {Date} date
   */
  getDaysInMonth(date) {
    return this.daysInMonth(this.getFullYear(date), this.getMonth(date));
  },

  /**
   * Returns the date, using UTC or not
   * @param {Date} date
   */
  getDate(date) {
    return this.useUtc ? date.getUTCDate() : date.getDate();
  },

  /**
   * Returns the day, using UTC or not
   * @param {Date} date
   */
  getDay(date) {
    return this.useUtc ? date.getUTCDay() : date.getDay();
  },

  /**
   * Returns the hours, using UTC or not
   * @param {Date} date
   */
  getHours(date) {
    return this.useUtc ? date.getUTCHours() : date.getHours();
  },

  /**
   * Returns the minutes, using UTC or not
   * @param {Date} date
   */
  getMinutes(date) {
    return this.useUtc ? date.getUTCMinutes() : date.getMinutes();
  },

  /**
   * Sets the full year, using UTC or not
   * @param {Date} date
   * @param {String, Number} value
   */
  setFullYear(date, value) {
    return this.useUtc ? date.setUTCFullYear(value) : date.setFullYear(value);
  },

  /**
   * Sets the month, using UTC or not
   * @param {Date} date
   * @param {String, Number} value
   */
  setMonth(date, value) {
    return this.useUtc ? date.setUTCMonth(value) : date.setMonth(value);
  },

  /**
   * Sets the date, using UTC or not
   * @param {Date} date
   * @param {String, Number} value
   */
  setDate(date, value) {
    return this.useUtc ? date.setUTCDate(value) : date.setDate(value);
  },

  /**
   * Check if date1 is equivalent to date2, without comparing the time
   * @see https://stackoverflow.com/a/6202196/4455925
   * @param {Date} date1
   * @param {Date} date2
   */
  compareDates(date1, date2) {
    const d1 = new Date(date1.valueOf());
    const d2 = new Date(date2.valueOf());
    this.resetDateTime(d1);
    this.resetDateTime(d2);
    return d1.valueOf() === d2.valueOf();
  },

  /**
   * Validates a date object
   * @param {Date} date - an object instantiated with the new Date constructor
   * @return {Boolean}
   */
  isValidDate(date) {
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      return false;
    }

    return !Number.isNaN(date.valueOf());
  },

  /**
   * Return abbreviated week day name
   * @param {Date} date
   * @param {Array} days
   * @return {String}
   */
  getDayNameAbbr(date, days) {
    if (typeof date !== 'object') {
      throw TypeError('Invalid Type');
    }

    return days[this.getDay(date)];
  },

  /**
   * Return day number from abbreviated week day name
   * @param {String} abbr
   * @return {Number}
   */
  getDayFromAbbr(abbr) {
    for (let i = 0; i < en.days.length; i += 1) {
      if (abbr.toLowerCase() === en.days[i].toLowerCase()) {
        return i;
      }
    }

    throw TypeError('Invalid week day');
  },

  /**
   * Return name of the month
   * @param {Number|Date} month
   * @param {Array} months
   * @return {String}
   */
  getMonthName(month, months) {
    if (!months) {
      throw Error('missing 2nd parameter Months array');
    }

    if (typeof month === 'object') {
      return months[this.getMonth(month)];
    }

    if (typeof month === 'number') {
      return months[month];
    }

    throw TypeError('Invalid type');
  },

  /**
   * Return an abbreviated version of the month
   * @param {Number|Date} month
   * @param {Array} monthsAbbr
   * @return {String}
   */
  getMonthNameAbbr(month, monthsAbbr) {
    if (!monthsAbbr) {
      throw Error('missing 2nd paramter Months array');
    }

    if (typeof month === 'object') {
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
   * @param {Number} month
   * @return {Number}
   */
  // eslint-disable-next-line complexity
  daysInMonth(year, month) {
    if (/8|3|5|10/.test(month)) {
      return 30;
    }

    if (month === 1) {
      return !(year % 4) && year % 100 || !(year % 400) ? 29 : 28;
    }

    return 31;
  },

  /**
   * Get nth suffix for date
   * @param {Number} day
   * @return {String}
   */
  // eslint-disable-next-line complexity
  getNthSuffix(day) {
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
   * @param {Date} date
   * @param {String} formatStr
   * @param {Object} translation
   * @return {String}
   */
  formatDate(date, formatStr, translation = en) {
    const year = this.getFullYear(date);
    const month = this.getMonth(date) + 1;
    const day = this.getDate(date);
    const matches = {
      dd: `0${day}`.slice(-2),
      d: day,
      yyyy: year,
      yy: String(year).slice(2),
      MMMM: this.getMonthName(this.getMonth(date), translation.months),
      MMM: this.getMonthNameAbbr(this.getMonth(date), translation.monthsAbbr),
      MM: `0${month}`.slice(-2),
      M: month,
      o: this.getNthSuffix(this.getDate(date)),
      E: this.getDayNameAbbr(date, translation.days)
    };
    const REGEX_FORMAT = /y{4}|y{2}|M{1,4}(?![aäe])|d{1,2}|o{1}|E{1}(?![eéi])/g;
    return formatStr.replace(REGEX_FORMAT, match => matches[match] || match);
  },

  /**
   * makes date parseable
   * to use with international dates
   * @param {String} dateStr
   * @param {String|Function} formatStr
   * @param {Object} translation
   * @param {Function} parser
   * @return {Date | String}
   */
  // eslint-disable-next-line max-params,complexity,max-statements
  parseDate(dateStr, formatStr, translation = en, parser = null) {
    if (!(dateStr && formatStr)) {
      return dateStr;
    }

    if (typeof formatStr === 'function') {
      if (!parser || typeof parser !== 'function') {
        throw new Error('Parser need to be a function if you are using a custom formatter');
      }

      return parser(dateStr);
    }

    const ymd = getParsedDate({
      formatStr,
      dateStr,
      translation
    });
    const dat = `${ymd.join('-')}${this.getTime()}`;

    if (Number.isNaN(Date.parse(dat))) {
      return dateStr;
    }

    return dat;
  },

  getTime() {
    const time = 'T00:00:00';

    if (this.useUtc) {
      return `${time}Z`;
    }

    return time;
  },

  /**
   * Creates an array of dates for each day in between two dates.
   * @param {Date} start
   * @param {Date} end
   * @return {Array}
   */
  createDateArray(start, end) {
    const dates = [];
    let startTemp = start;

    while (startTemp <= end) {
      dates.push(new Date(startTemp));
      startTemp = this.setDate(new Date(startTemp), this.getDate(new Date(startTemp)) + 1);
    }

    return dates;
  },

  /**
   * Remove hours/minutes/seconds/milliseconds from a date object
   * @param {Date} date
   * @return {Date}
   */
  resetDateTime(date) {
    return new Date(this.useUtc ? date.setUTCHours(0, 0, 0, 0) : date.setHours(0, 0, 0, 0));
  },

  /**
   * Return a new date object with hours/minutes/seconds/milliseconds removed
   * @return {Date}
   */
  getNewDateObject(date) {
    return date ? this.resetDateTime(new Date(date)) : this.resetDateTime(new Date());
  }

};
var makeDateUtils = (useUtc => ({ ...utils,
  useUtc
}));

var calendarSlots = ['beforeCalendarHeaderDay', 'calendarFooterDay', 'beforeCalendarHeaderMonth', 'calendarFooterMonth', 'beforeCalendarHeaderYear', 'calendarFooterYear', 'nextIntervalBtn', 'prevIntervalBtn'];

var script = {
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    bootstrapStyling: {
      type: Boolean,
      default: false
    },
    clearButton: {
      type: Boolean,
      default: false
    },
    clearButtonIcon: {
      type: String,
      default: ''
    },
    calendarButton: {
      type: Boolean,
      default: false
    },
    calendarButtonIcon: {
      type: String,
      default: ''
    },
    calendarButtonIconContent: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    format: {
      type: [String, Function],
      default: 'dd MMM yyyy'
    },
    id: {
      type: String,
      default: null
    },
    inline: {
      type: Boolean,
      default: false
    },
    inputClass: {
      type: [String, Object, Array],
      default: null
    },
    maxlength: {
      type: [Number, String],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    openDate: {
      type: [String, Date, Number],
      default: null,
      validator: val => val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number'
    },
    parser: {
      type: Function,
      default: null
    },
    pattern: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    refName: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    showCalendarOnButtonClick: {
      type: Boolean,
      default: false
    },
    showCalendarOnFocus: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: [Number, String],
      default: null
    },
    typeable: {
      type: Boolean,
      default: false
    },
    useUtc: {
      type: Boolean,
      default: false
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;

/* template */

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

//
var script$1 = {
  name: 'DateInput',
  mixins: [__vue_component__],
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    resetTypedDate: {
      type: [Date],
      default: null
    },
    selectedDate: {
      type: Date,
      default: null
    },
    translation: {
      type: Object,

      default() {
        return {};
      }

    }
  },

  data() {
    const constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      input: null,
      isFocusedUsed: false,
      isBlurred: false,
      typedDate: '',
      utils: constructedDateUtils
    };
  },

  computed: {
    computedInputClass() {
      if (this.bootstrapStyling) {
        if (typeof this.inputClass === 'string') {
          return [this.inputClass, 'form-control'].join(' ');
        }

        return {
          'form-control': true,
          ...this.inputClass
        };
      }

      return this.inputClass;
    },

    formattedValue() {
      if (!this.selectedDate) {
        return null;
      }

      if (this.typedDate.length) {
        return this.typedDate;
      }

      return this.formattedDate;
    },

    formattedDate() {
      return typeof this.format === 'function' ? this.format(new Date(this.selectedDate)) : this.utils.formatDate(new Date(this.selectedDate), this.format, this.translation);
    }

  },
  watch: {
    resetTypedDate() {
      this.typedDate = '';
    }

  },

  mounted() {
    this.input = this.$el.querySelector('input');
  },

  methods: {
    /**
     * emit a clearDate event
     */
    clearDate() {
      this.$emit('clear-date');
    },

    /**
     * submit typedDate and emit a blur event
     */
    inputBlurred() {
      this.isBlurred = this.isOpen;

      if (this.typeable) {
        this.submitTypedDate();
      }

      this.$emit('blur');
      this.$emit('close-calendar');
      this.isFocusedUsed = false;
    },

    /**
     * Attempt to parse a typed date
     * @param {Event} event
     */
    parseTypedDate(event) {
      const code = event.keyCode ? event.keyCode : event.which; // close calendar if escape or enter are pressed

      if ([27, // escape
      13 // enter
      ].indexOf(code) !== -1) {
        this.input.blur();
      }

      if (this.typeable) {
        const parsableDate = this.parseDate(this.input.value);
        const parsedDate = Date.parse(parsableDate);

        if (!Number.isNaN(parsedDate)) {
          this.typedDate = this.input.value;
          this.$emit('typed-date', new Date(parsedDate));
        }
      }
    },

    parseDate(value) {
      return this.utils.parseDate(value, this.format, this.translation, this.parser);
    },

    showCalendarByClick() {
      const isFocusedUsed = this.showCalendarOnFocus && !this.isFocusedUsed;

      if (!this.showCalendarOnButtonClick && !isFocusedUsed) {
        this.toggleCalendar();
      }

      if (this.showCalendarOnFocus) {
        this.isFocusedUsed = true;
      }
    },

    showCalendarByFocus() {
      if (this.showCalendarOnFocus) {
        this.$emit('show-calendar');
      }

      this.isBlurred = false;
      this.$emit('focus');
    },

    /**
     * Submits a typed date if it's valid
     */
    submitTypedDate() {
      const parsableDate = this.parseDate(this.input.value);
      const parsedDate = Date.parse(parsableDate);

      if (Number.isNaN(parsedDate)) {
        this.clearDate();
      } else {
        this.input.value = this.formattedDate;
        this.typedDate = '';
        this.$emit('typed-date', parsedDate);
      }
    },

    toggleCalendar() {
      if (!this.isOpen && this.isBlurred) {
        this.isBlurred = false;
        return;
      }

      this.$emit(this.isOpen ? 'close-calendar' : 'show-calendar');
    }

  }
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: { "input-group": _vm.bootstrapStyling } },
    [
      _vm._t("beforeDateInput"),
      _vm._v(" "),
      _vm.calendarButton
        ? _c(
            "span",
            {
              staticClass: "vdp-datepicker__calendar-button",
              class: {
                "input-group-prepend": _vm.bootstrapStyling,
                "calendar-btn-disabled": _vm.disabled
              },
              on: { click: _vm.toggleCalendar }
            },
            [
              _c(
                "span",
                { class: { "input-group-text": _vm.bootstrapStyling } },
                [
                  _vm._t("calendarBtn", [
                    _c("i", { class: _vm.calendarButtonIcon }, [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.calendarButtonIconContent) +
                          "\n          "
                      ),
                      !_vm.calendarButtonIcon
                        ? _c("span", [_vm._v("…")])
                        : _vm._e()
                    ])
                  ])
                ],
                2
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("input", {
        ref: _vm.refName,
        class: _vm.computedInputClass,
        attrs: {
          id: _vm.id,
          autocomplete: "off",
          autofocus: _vm.autofocus,
          "clear-button": _vm.clearButton,
          disabled: _vm.disabled,
          maxlength: _vm.maxlength,
          name: _vm.name,
          pattern: _vm.pattern,
          placeholder: _vm.placeholder,
          readonly: !_vm.typeable,
          required: _vm.required,
          tabindex: _vm.tabindex,
          type: _vm.inline ? "hidden" : "text"
        },
        domProps: { value: _vm.formattedValue },
        on: {
          blur: _vm.inputBlurred,
          click: _vm.showCalendarByClick,
          focus: _vm.showCalendarByFocus,
          keyup: _vm.parseTypedDate
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
                  _vm._t("clearBtn", [
                    _c("i", { class: _vm.clearButtonIcon }, [
                      !_vm.clearButtonIcon
                        ? _c("span", [_vm._v("×")])
                        : _vm._e()
                    ])
                  ])
                ],
                2
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
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

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
//
//
var script$2 = {
  name: 'PickerHeader',
  props: {
    config: {
      type: Object,

      default() {
        return {
          showHeader: true,
          isRtl: false,
          isNextDisabled: false,
          isPreviousDisabled: false
        };
      }

    },
    next: {
      type: Function,
      required: true
    },
    previous: {
      type: Function,
      required: true
    }
  },
  computed: {
    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    isLeftNavDisabled() {
      return this.config.isRtl ? this.config.isNextDisabled : this.config.isPreviousDisabled;
    },

    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    isRightNavDisabled() {
      return this.config.isRtl ? this.config.isPreviousDisabled : this.config.isNextDisabled;
    }

  }
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.config.showHeader
    ? _c(
        "header",
        [
          _c(
            "span",
            {
              staticClass: "prev",
              class: { disabled: _vm.isLeftNavDisabled },
              on: {
                click: function($event) {
                  _vm.config.isRtl ? _vm.next() : _vm.previous();
                }
              }
            },
            [
              _vm._t("prevIntervalBtn", [
                _c("span", { staticClass: "default" }, [_vm._v("<")])
              ])
            ],
            2
          ),
          _vm._v(" "),
          _vm._t("default"),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "next",
              class: { disabled: _vm.isRightNavDisabled },
              on: {
                click: function($event) {
                  _vm.config.isRtl ? _vm.previous() : _vm.next();
                }
              }
            },
            [
              _vm._t("nextIntervalBtn", [
                _c("span", { staticClass: "default" }, [_vm._v(">")])
              ])
            ],
            2
          )
        ],
        2
      )
    : _vm._e()
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

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
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

const cellUtils = {
  configExists(obj) {
    return typeof obj !== 'undefined' && Object.keys(obj).length > 0;
  },

  isDefined(obj, prop) {
    return this.configExists(obj) && typeof obj[prop] !== 'undefined';
  },

  hasArray(obj, prop) {
    return this.isDefined(obj, prop) && obj[prop].length > 0;
  },

  hasDate(obj, prop) {
    return this.isDefined(obj, prop) && this.utils.isValidDate(obj[prop]);
  },

  dayMonthYear(obj, prop) {
    const {
      utils
    } = this;
    const hasDate = this.hasDate(obj, prop);

    if (!hasDate) {
      return {
        day: undefined,
        month: undefined,
        year: undefined
      };
    }

    const d = obj[prop];
    return {
      day: utils.getDate(d),
      month: utils.getMonth(d),
      year: utils.getFullYear(d)
    };
  }

};
var makeCellUtils = (utils => ({ ...cellUtils,
  utils
}));

/* eslint-disable no-underscore-dangle */
class DisabledDate {
  constructor(utils, disabledDates) {
    this._utils = utils;
    this._disabledDates = disabledDates;
  }

  get config() {
    const disabledDates = this._disabledDates;
    const utils = makeCellUtils(this._utils);
    return {
      exists: utils.configExists(disabledDates),
      to: utils.dayMonthYear(disabledDates, 'to'),
      from: utils.dayMonthYear(disabledDates, 'from'),
      has: {
        customPredictor: utils.isDefined(disabledDates, 'customPredictor'),
        daysOfMonth: utils.hasArray(disabledDates, 'daysOfMonth'),
        daysOfWeek: utils.hasArray(disabledDates, 'days'),
        from: utils.hasDate(disabledDates, 'from'),
        ranges: utils.hasArray(disabledDates, 'ranges'),
        specificDates: utils.hasArray(disabledDates, 'dates'),
        to: utils.hasDate(disabledDates, 'to')
      }
    };
  }

  daysInMonth(date) {
    const utils = this._utils;
    const month = utils.getMonth(date);
    const year = utils.getFullYear(date);
    return utils.daysInMonth(year, month);
  }

  isDateDisabledVia(date) {
    const disabledDates = this._disabledDates;
    const {
      has
    } = this.config;
    return {
      to: () => {
        return has.to && date < disabledDates.to;
      },
      from: () => {
        return has.from && date > disabledDates.from;
      },
      range: () => {
        if (!has.ranges) return false;
        const {
          ranges
        } = disabledDates;
        const u = makeCellUtils(this._utils);
        return ranges.some(thisRange => {
          const hasFrom = u.isDefined(thisRange, 'from');
          const hasTo = u.isDefined(thisRange, 'to');
          return hasFrom && hasTo && date < thisRange.to && date > thisRange.from;
        });
      },
      customPredictor: () => {
        return has.customPredictor && disabledDates.customPredictor(date);
      },
      specificDate: () => {
        if (!has.specificDates) return false;
        return disabledDates.dates.some(d => {
          return this._utils.compareDates(date, d);
        });
      },
      daysOfWeek: () => {
        if (!has.daysOfWeek) return false;
        return disabledDates.days.indexOf(this._utils.getDay(date)) !== -1;
      },
      daysOfMonth: () => {
        if (!has.daysOfMonth) return false;
        return disabledDates.daysOfMonth.indexOf(this._utils.getDate(date)) !== -1;
      }
    };
  }

  isMonthDisabledVia(date) {
    const {
      from,
      has,
      to
    } = this.config;

    const month = this._utils.getMonth(date);

    const year = this._utils.getFullYear(date);

    return {
      to: () => {
        const isYearInPast = has.to && year < to.year;

        if (isYearInPast) {
          return true;
        }

        return has.to && month < to.month && year <= to.year;
      },
      from: () => {
        const isYearInFuture = has.from && year > from.year;

        if (isYearInFuture) {
          return true;
        }

        return has.from && month > from.month && year >= from.year;
      }
    };
  }

  isYearDisabledVia(date) {
    const {
      from,
      has,
      to
    } = this.config;

    const year = this._utils.getFullYear(date);

    return {
      to: () => {
        return has.to && year < to.year;
      },
      from: () => {
        return has.from && year > from.year;
      }
    };
  }
  /**
   * Checks if the given date should be disabled
   * @param {Date} date
   * @return {Boolean}
   */
  // eslint-disable-next-line complexity,max-statements


  isDateDisabled(date) {
    if (!this.config.exists) return false;
    const isDisabledVia = this.isDateDisabledVia(date);
    return isDisabledVia.to() || isDisabledVia.from() || isDisabledVia.range() || isDisabledVia.specificDate() || isDisabledVia.daysOfWeek() || isDisabledVia.daysOfMonth() || isDisabledVia.customPredictor();
  }
  /**
   * Checks if the given month should be disabled
   * @param {Date} date
   * @return {Boolean}
   */
  // eslint-disable-next-line complexity,max-statements


  isMonthDisabled(date) {
    const {
      config
    } = this;
    const isDisabledVia = this.isMonthDisabledVia(date);

    if (!config.exists) {
      return false;
    }

    if (isDisabledVia.to() || isDisabledVia.from()) {
      return true;
    } // now we have to check each day of the month


    for (let i = 1; i <= this.daysInMonth(date); i += 1) {
      const dayDate = new Date(date);
      dayDate.setDate(i); // if at least one day of this month is NOT disabled,
      // we can conclude that this month SHOULD be selectable

      if (!this.isDateDisabled(dayDate)) {
        return false;
      }
    }

    return true;
  }
  /**
   * Checks if the given year should be disabled
   * @param {Date} date
   * @return {Boolean}
   */
  // eslint-disable-next-line complexity,max-statements


  isYearDisabled(date) {
    const {
      config
    } = this;
    const isDisabledVia = this.isYearDisabledVia(date);

    if (!config.exists) {
      return false;
    }

    if (isDisabledVia.to() || isDisabledVia.from()) {
      return true;
    } // now we have to check each month of the year


    for (let i = 0; i < 12; i += 1) {
      const monthDate = new Date(date);
      monthDate.setMonth(i); // if at least one month of this year is NOT disabled,
      // we can conclude that this year SHOULD be selectable

      if (!this.isMonthDisabled(monthDate)) {
        return false;
      }
    }

    return true;
  }

}

var script$3 = {
  components: {
    PickerHeader: __vue_component__$2
  },
  inheritAttrs: false,
  props: {
    allowedToShowView: {
      type: Function,

      default() {}

    },
    disabledDates: {
      type: Object,

      default() {
        return {};
      }

    },
    isRtl: {
      type: Boolean,
      default: false
    },
    pageDate: {
      type: Date,
      default: null
    },
    pageTimestamp: {
      type: Number,
      default: 0
    },
    selectedDate: {
      type: Date,
      default: null
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    translation: {
      type: Object,

      default() {
        return {};
      }

    },
    useUtc: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      headerConfig: {
        showHeader: this.showHeader,
        isRtl: this.isRtl,

        /**
         * Need to be set inside the different pickers for month, year, decade
         */
        isNextDisabled: this.isNextDisabled,
        isPreviousDisabled: this.isPreviousDisabled
      },
      utils: makeDateUtils(this.useUtc)
    };
  },

  computed: {
    /**
     * A look-up object created from 'disabledDates' prop
     * @return {Object}
     */
    disabledConfig() {
      return new DisabledDate(this.utils, this.disabledDates).config;
    },

    /**
     * Returns the current page's full year as an integer.
     * @return {Number}
     */
    pageYear() {
      return this.utils.getFullYear(this.pageDate);
    }

  },
  methods: {
    /**
     * Emit an event to show the month picker
     */
    showPickerCalendar(type) {
      this.$emit(`show-${type}-calendar`);
    }

  }
};

/* script */
const __vue_script__$3 = script$3;

/* template */

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
    {},
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  );

/* eslint-disable no-underscore-dangle */
class HighlightedDate {
  constructor(utils, disabledDates, highlighted) {
    this._utils = utils;
    this._disabledDates = disabledDates;
    this._highlighted = highlighted;
  }

  get config() {
    const highlightedDates = this._highlighted;
    const utils = makeCellUtils(this._utils);
    return {
      exists: utils.configExists(highlightedDates),
      to: utils.dayMonthYear(highlightedDates, 'to'),
      from: utils.dayMonthYear(highlightedDates, 'from'),
      has: {
        customPredictor: utils.isDefined(highlightedDates, 'customPredictor'),
        daysOfMonth: utils.hasArray(highlightedDates, 'daysOfMonth'),
        daysOfWeek: utils.hasArray(highlightedDates, 'days'),
        from: utils.hasDate(highlightedDates, 'from'),
        specificDates: utils.hasArray(highlightedDates, 'dates'),
        to: utils.hasDate(highlightedDates, 'to'),
        includeDisabled: utils.isDefined(highlightedDates, 'includeDisabled') && highlightedDates.includeDisabled
      }
    };
  }

  isDateDisabled(date) {
    const utils = this._utils;
    const disabledDates = this._disabledDates;
    return new DisabledDate(utils, disabledDates).isDateDisabled(date);
  }

  isHighlightingNotPossible(date) {
    const {
      config
    } = this;
    if (!config.exists) return false;
    return !config.has.includeDisabled && this.isDateDisabled(date);
  }

  isDateHighlightedVia(date) {
    const highlightedDates = this._highlighted;
    const {
      has
    } = this.config;
    return {
      to: () => {
        return has.to && date <= highlightedDates.to;
      },
      from: () => {
        return has.from && date >= highlightedDates.from;
      },
      customPredictor: () => {
        return has.customPredictor && highlightedDates.customPredictor(date);
      },
      specificDate: () => {
        if (!has.specificDates) return false;
        return highlightedDates.dates.some(d => {
          return this._utils.compareDates(date, d);
        });
      },
      daysOfWeek: () => {
        if (!has.daysOfWeek) return false;
        return highlightedDates.days.indexOf(this._utils.getDay(date)) !== -1;
      },
      daysOfMonth: () => {
        if (!has.daysOfMonth) return false;
        return highlightedDates.daysOfMonth.indexOf(this._utils.getDate(date)) !== -1;
      }
    };
  } // eslint-disable-next-line complexity,max-statements


  isDateHighlighted(date) {
    if (this.isHighlightingNotPossible(date)) return false;
    const isHighlightedVia = this.isDateHighlightedVia(date);
    return isHighlightedVia.to() && isHighlightedVia.from() || isHighlightedVia.specificDate() || isHighlightedVia.daysOfWeek() || isHighlightedVia.daysOfMonth() || isHighlightedVia.customPredictor();
  }

}

//
var script$4 = {
  name: 'DatepickerDayView',
  mixins: [__vue_component__$3],
  props: {
    dayCellContent: {
      type: Function,
      default: day => day.date
    },
    highlighted: {
      type: Object,

      default() {
        return {};
      }

    },
    firstDayOfWeek: {
      type: String,
      default: 'sun'
    },
    showFullMonthName: {
      type: Boolean,
      default: false
    },
    showEdgeDates: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */
    currMonthName() {
      const monthName = this.showFullMonthName ? this.translation.months : this.translation.monthsAbbr;
      return this.utils.getMonthNameAbbr(this.pageMonth, monthName);
    },

    /**
     * Gets the name of the year that current page is on
     * @return {String}
     */
    currYearName() {
      const {
        yearSuffix
      } = this.translation;
      return `${this.pageYear}${yearSuffix}`;
    },

    /**
     * Sets an array with all days to show this month
     * @return {Array}
     */
    days() {
      const days = [];
      const daysInCalendar = this.daysFromPrevMonth + this.daysInMonth + this.daysFromNextMonth;
      const firstOfMonth = this.newPageDate();
      const dObj = new Date(firstOfMonth.setDate(firstOfMonth.getDate() - this.daysFromPrevMonth));

      for (let i = 0; i < daysInCalendar; i += 1) {
        days.push(this.makeDay(i, dObj));
        this.utils.setDate(dObj, this.utils.getDate(dObj) + 1);
      }

      return days;
    },

    /**
     * Returns an array of day names
     * @return {String[]}
     */
    daysOfWeek() {
      return this.translation.getDaysStartingOn(this.firstDayOfWeekNumber);
    },

    /**
     * Returns the number of days in this month
     * @return {String[]}
     */
    daysInMonth() {
      const dObj = this.newPageDate();
      return this.utils.getDaysInMonth(dObj);
    },

    /**
     * Calculates how many days to show from the previous month
     * @return {number}
     */
    daysFromPrevMonth() {
      const dObj = this.newPageDate();
      return (7 - this.firstDayOfWeekNumber + this.utils.getDay(dObj)) % 7;
    },

    /**
     * Calculates how many days to show from the next month
     * @return {number}
     */
    daysFromNextMonth() {
      const daysThisAndPrevMonth = this.daysFromPrevMonth + this.daysInMonth;
      return Math.ceil(daysThisAndPrevMonth / 7) * 7 - daysThisAndPrevMonth;
    },

    /**
     * Returns first-day-of-week as a number (Sunday is 0)
     * @return {Number}
     */
    firstDayOfWeekNumber() {
      return this.utils.getDayFromAbbr(this.firstDayOfWeek);
    },

    /**
     * Is the next month disabled?
     * @return {Boolean}
     */
    isNextDisabled() {
      if (!this.disabledConfig.has.from) {
        return false;
      }

      return this.disabledConfig.from.month <= this.pageMonth && this.disabledConfig.from.year <= this.pageYear;
    },

    /**
     * Is the previous month disabled?
     * @return {Boolean}
     */
    isPreviousDisabled() {
      if (!this.disabledConfig.has.to) {
        return false;
      }

      return this.disabledConfig.to.month >= this.pageMonth && this.disabledConfig.to.year >= this.pageYear;
    },

    /**
     * Returns the current page's month as an integer.
     * @return {Number}
     */
    pageMonth() {
      return this.utils.getMonth(this.pageDate);
    },

    /**
     * Display the current page's month & year as the title.
     * @return {String}
     */
    pageTitleDay() {
      return this.translation.ymd ? `${this.currYearName} ${this.currMonthName}` : `${this.currMonthName} ${this.currYearName}`;
    },

    /**
     * The first day of the next page's month.
     * @return {Date}
     */
    nextPageDate() {
      const d = new Date(this.pageTimestamp);
      return new Date(this.utils.setMonth(d, this.utils.getMonth(d) + 1));
    },

    highlightedConfig() {
      return new HighlightedDate(this.utils, this.disabledDates, this.highlighted).config;
    }

  },
  methods: {
    /**
     * Change the page month
     * @param {Number} incrementBy
     */
    changeMonth(incrementBy) {
      const date = this.pageDate;
      this.utils.setMonth(date, this.utils.getMonth(date) + incrementBy);
      this.$emit('changed-month', date);
    },

    /**
     * set the class for a specific day
     * @param {Object} day
     * @return {Object}
     */
    dayClasses(day) {
      return {
        'selected': day.isSelected,
        'disabled': day.isDisabled,
        'highlighted': day.isHighlighted,
        'muted': day.isPreviousMonth || day.isNextMonth,
        'today': day.isToday,
        'weekend': day.isWeekend,
        'sat': day.isSaturday,
        'sun': day.isSunday,
        'highlight-start': day.isHighlightStart,
        'highlight-end': day.isHighlightEnd
      };
    },

    /**
     * @return {Number}
     */
    getPageMonth() {
      return this.utils.getMonth(this.pageDate);
    },

    /**
     * Whether a day is disabled
     * @param {Date} date to check if disabled
     * @return {Boolean}
     */
    isDisabledDate(date) {
      return new DisabledDate(this.utils, this.disabledDates).isDateDisabled(date);
    },

    /**
     * Whether a day is highlighted
     * (only if it is not disabled already except when highlighted.includeDisabled is true)
     * @param {Date} date to check if highlighted
     * @return {Boolean}
     */
    isHighlightedDate(date) {
      const dateWithoutTime = this.utils.resetDateTime(date);
      return new HighlightedDate(this.utils, this.disabledDates, this.highlighted).isDateHighlighted(dateWithoutTime);
    },

    /**
     * Whether a day is highlighted and it is the last date
     * in the highlighted range of dates
     * @param {Date} date end highlight
     * @return {Boolean}
     */
    isHighlightEnd(date) {
      const config = this.highlightedConfig;
      return this.isHighlightedDate(date) && config.to.year === this.utils.getFullYear(date) && config.to.month === this.utils.getMonth(date) && config.to.day === this.utils.getDate(date);
    },

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date} date start highlight
     * @return {Boolean}
     */
    isHighlightStart(date) {
      const config = this.highlightedConfig;
      return this.isHighlightedDate(date) && config.from.year === this.utils.getFullYear(date) && config.from.month === this.utils.getMonth(date) && config.from.day === this.utils.getDate(date);
    },

    /**
     * Whether a day is selected
     * @param {Date} dObj to check if selected
     * @return {Boolean}
     */
    isSelectedDate(dObj) {
      return this.selectedDate && this.utils.compareDates(this.selectedDate, dObj);
    },

    /**
     * Defines the objects within the days array
     * @param  {id}  id
     * @param  {Date}  dObj
     * @return {Object}
     */
    // eslint-disable-next-line complexity
    makeDay(id, dObj) {
      const isNextMonth = dObj >= this.nextPageDate;
      const isPreviousMonth = dObj < this.pageDate;
      const isSaturday = this.utils.getDay(dObj) === 6;
      const isSunday = this.utils.getDay(dObj) === 0;
      const showDate = this.showEdgeDates || !(isPreviousMonth || isNextMonth);
      return {
        date: showDate ? this.utils.getDate(dObj) : '',
        timestamp: dObj.valueOf(),
        isSelected: this.isSelectedDate(dObj),
        isDisabled: showDate ? this.isDisabledDate(dObj) : true,
        isHighlighted: this.isHighlightedDate(dObj),
        isHighlightStart: this.isHighlightStart(dObj),
        isHighlightEnd: this.isHighlightEnd(dObj),
        isToday: this.utils.compareDates(dObj, new Date()),
        isWeekend: isSaturday || isSunday,
        isSaturday,
        isSunday,
        isPreviousMonth,
        isNextMonth
      };
    },

    /**
     * Set up a new date object to the first day of the current 'page'
     * @return Date
     */
    newPageDate() {
      const d = this.pageDate;
      return this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)) : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
    },

    /**
     * Increment the current page month
     */
    nextMonth() {
      if (!this.isNextDisabled) {
        this.changeMonth(+1);
      }
    },

    /**
     * Decrement the page month
     */
    previousMonth() {
      if (!this.isPreviousDisabled) {
        this.changeMonth(-1);
      }
    },

    /**
     * Emits a selectDate event
     * @param {Object} date
     */
    selectDate(date) {
      if (date.isDisabled) {
        this.$emit('selected-disabled', date);
      } else {
        this.$emit('select-date', date);
      }
    }

  }
};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "picker-view" },
    [
      _vm._t("beforeCalendarHeaderDay"),
      _vm._v(" "),
      _c(
        "PickerHeader",
        {
          attrs: {
            config: _vm.headerConfig,
            next: _vm.nextMonth,
            previous: _vm.previousMonth
          }
        },
        [
          _c(
            "span",
            {
              staticClass: "day__month_btn",
              class: _vm.allowedToShowView("month") ? "up" : "",
              on: {
                click: function($event) {
                  return _vm.showPickerCalendar("month")
                }
              }
            },
            [_vm._v("\n      " + _vm._s(_vm.pageTitleDay) + "\n    ")]
          ),
          _vm._v(" "),
          _vm._t("nextIntervalBtn", null, { slot: "nextIntervalBtn" }),
          _vm._v(" "),
          _vm._t("prevIntervalBtn", null, { slot: "prevIntervalBtn" })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { class: _vm.isRtl ? "flex-rtl" : "" },
        [
          _vm._l(_vm.daysOfWeek, function(d) {
            return _c(
              "span",
              { key: d.timestamp, staticClass: "cell day-header" },
              [_vm._v("\n      " + _vm._s(d) + "\n    ")]
            )
          }),
          _vm._v(" "),
          _vm._l(_vm.days, function(day) {
            return _c(
              "span",
              {
                key: day.timestamp,
                staticClass: "cell day",
                class: _vm.dayClasses(day),
                on: {
                  click: function($event) {
                    return _vm.selectDate(day)
                  }
                }
              },
              [_vm._v("\n      " + _vm._s(_vm.dayCellContent(day)) + "\n    ")]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _vm._t("calendarFooterDay")
    ],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    undefined,
    undefined,
    undefined
  );

//
var script$5 = {
  name: 'DatepickerMonthView',
  mixins: [__vue_component__$3],
  computed: {
    /**
     * Is the next year disabled?
     * @return {Boolean}
     */
    isNextDisabled() {
      if (!this.disabledConfig.has.from) {
        return false;
      }

      return this.disabledConfig.from.year <= this.pageYear;
    },

    /**
     * Is the previous year disabled?
     * @return {Boolean}
     */
    isPreviousDisabled() {
      if (!this.disabledConfig.has.to) {
        return false;
      }

      return this.disabledConfig.to.year >= this.pageYear;
    },

    /**
     * Set an array with all months
     * @return {Array}
     */
    months() {
      const d = this.pageDate;
      const months = []; // set up a new date object to the beginning of the current 'page'

      const dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), 0, d.getUTCDate())) : new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes());

      for (let i = 0; i < 12; i += 1) {
        months.push({
          month: this.utils.getMonthName(i, this.translation.months),
          timestamp: dObj.valueOf(),
          isSelected: this.isSelectedMonth(dObj),
          isDisabled: this.isDisabledMonth(dObj)
        });
        this.utils.setMonth(dObj, this.utils.getMonth(dObj) + 1);
      }

      return months;
    },

    /**
     * Display the current page's year as the title.
     * @return {String}
     */
    pageTitleMonth() {
      const {
        yearSuffix
      } = this.translation;
      return `${this.pageYear}${yearSuffix}`;
    }

  },
  methods: {
    /**
     * Changes the year up or down
     * @param {Number} incrementBy
     */
    changeYear(incrementBy) {
      const date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.$emit('changed-year', date);
    },

    /**
     * Whether a month is disabled
     * @param {Date} date
     * @return {Boolean}
     */
    isDisabledMonth(date) {
      return new DisabledDate(this.utils, this.disabledDates).isMonthDisabled(date);
    },

    /**
     * Whether the selected date is in this month
     * @param {Date} date
     * @return {Boolean}
     */
    isSelectedMonth(date) {
      const month = this.utils.getMonth(date);
      const year = this.utils.getFullYear(date);
      return this.selectedDate && year === this.utils.getFullYear(this.selectedDate) && month === this.utils.getMonth(this.selectedDate);
    },

    /**
     * Increments the year
     */
    nextYear() {
      if (!this.isNextDisabled) {
        this.changeYear(1);
      }
    },

    /**
     * Decrements the year
     */
    previousYear() {
      if (!this.isPreviousDisabled) {
        this.changeYear(-1);
      }
    },

    /**
     * Emits a selectMonth event
     * @param {Object} month
     */
    selectMonth(month) {
      if (!month.isDisabled) {
        this.$emit('select-month', month);
      }
    }

  }
};

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "picker-view" },
    [
      _vm._t("beforeCalendarHeaderMonth"),
      _vm._v(" "),
      _c(
        "PickerHeader",
        {
          attrs: {
            config: _vm.headerConfig,
            next: _vm.nextYear,
            previous: _vm.previousYear
          }
        },
        [
          _c(
            "span",
            {
              staticClass: "month__year_btn",
              class: _vm.allowedToShowView("year") ? "up" : "",
              on: {
                click: function($event) {
                  return _vm.showPickerCalendar("year")
                }
              }
            },
            [_vm._v("\n      " + _vm._s(_vm.pageTitleMonth) + "\n    ")]
          ),
          _vm._v(" "),
          _vm._t("nextIntervalBtn", null, { slot: "nextIntervalBtn" }),
          _vm._v(" "),
          _vm._t("prevIntervalBtn", null, { slot: "prevIntervalBtn" })
        ],
        2
      ),
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
          [_vm._v("\n    " + _vm._s(month.month) + "\n  ")]
        )
      }),
      _vm._v(" "),
      _vm._t("calendarFooterMonth")
    ],
    2
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    undefined,
    undefined,
    undefined
  );

//
var script$6 = {
  name: 'DatepickerYearView',
  mixins: [__vue_component__$3],
  props: {
    yearRange: {
      type: Number,
      default: 10
    }
  },
  computed: {
    /**
     * Is the next decade disabled?
     * @return {Boolean}
     */
    isNextDisabled() {
      if (!this.disabledConfig.has.from) {
        return false;
      }

      return this.disabledConfig.from.year <= this.pageDecadeEnd;
    },

    /**
     * Is the previous decade disabled?
     * @return {Boolean}
     */
    isPreviousDisabled() {
      if (!this.disabledConfig.has.to) {
        return false;
      }

      return this.disabledConfig.to.year >= this.pageDecadeStart;
    },

    /**
     * The year at which the current yearRange starts
     * @return {Number}
     */
    pageDecadeStart() {
      return Math.floor(this.pageYear / this.yearRange) * this.yearRange;
    },

    /**
     * The year at which the current yearRange ends
     * @return {Number}
     */
    pageDecadeEnd() {
      return this.pageDecadeStart + this.yearRange - 1;
    },

    /**
     * Display the current page's decade (or year range) as the title.
     * @return {String}
     */
    pageTitleYear() {
      const {
        yearSuffix
      } = this.translation;
      return `${this.pageDecadeStart} - ${this.pageDecadeEnd}${yearSuffix}`;
    },

    /**
     * Set an array with years for a decade
     * @return {Array}
     */
    years() {
      const d = this.pageDate;
      const years = [];
      const year = this.useUtc ? Math.floor(d.getUTCFullYear() / this.yearRange) * this.yearRange : Math.floor(d.getFullYear() / this.yearRange) * this.yearRange; // set up a new date object to the beginning of the current 'page'7

      const dObj = this.useUtc ? new Date(Date.UTC(year, d.getUTCMonth(), d.getUTCDate())) : new Date(year, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());

      for (let i = 0; i < this.yearRange; i += 1) {
        years.push({
          year: this.utils.getFullYear(dObj),
          timestamp: dObj.valueOf(),
          isSelected: this.isSelectedYear(dObj),
          isDisabled: this.isDisabledYear(dObj)
        });
        this.utils.setFullYear(dObj, this.utils.getFullYear(dObj) + 1);
      }

      return years;
    }

  },
  methods: {
    /**
     * Changes the year up or down
     * @param {Number} incrementBy
     */
    changeYear(incrementBy) {
      const date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.$emit('changed-decade', date);
    },

    /**
     * Whether a year is disabled
     * @param {Date} date
     * @return {Boolean}
     */
    isDisabledYear(date) {
      return new DisabledDate(this.utils, this.disabledDates).isYearDisabled(date);
    },

    /**
     * Whether the selected date is in this year
     * @param {Date} date
     * @return {Boolean}
     */
    isSelectedYear(date) {
      const year = this.utils.getFullYear(date);
      return this.selectedDate && year === this.utils.getFullYear(this.selectedDate);
    },

    /**
     * Increments the decade
     */
    nextDecade() {
      if (!this.isNextDisabled) {
        this.changeYear(this.yearRange);
      }
    },

    /**
     * Decrements the decade
     */
    previousDecade() {
      if (!this.isPreviousDisabled) {
        this.changeYear(-this.yearRange);
      }
    },

    /**
     * Emits a selectYear event
     * @param {Object} year
     */
    selectYear(year) {
      if (!year.isDisabled) {
        this.$emit('select-year', year);
      }
    }

  }
};

/* script */
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "picker-view" },
    [
      _vm._t("beforeCalendarHeaderYear"),
      _vm._v(" "),
      _c(
        "PickerHeader",
        {
          attrs: {
            config: _vm.headerConfig,
            next: _vm.nextDecade,
            previous: _vm.previousDecade
          }
        },
        [
          _c("span", [
            _vm._v("\n      " + _vm._s(_vm.pageTitleYear) + "\n    ")
          ]),
          _vm._v(" "),
          _vm._t("nextIntervalBtn", null, { slot: "nextIntervalBtn" }),
          _vm._v(" "),
          _vm._t("prevIntervalBtn", null, { slot: "prevIntervalBtn" })
        ],
        2
      ),
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
          [_vm._v("\n    " + _vm._s(year.year) + "\n  ")]
        )
      }),
      _vm._v(" "),
      _vm._t("calendarFooterYear")
    ],
    2
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    undefined,
    undefined,
    undefined
  );

/* eslint no-param-reassign: 0 */

/**
 * get the hidden element width, height
 * @param {HTMLElement} element dom
 */
function getPopupElementSize(element) {
  const originalDisplay = element.style.display;
  const originalVisibility = element.style.visibility;
  element.style.display = 'block';
  element.style.visibility = 'hidden';
  const styles = window.getComputedStyle(element);
  const width = element.offsetWidth + parseInt(styles.marginLeft, 10) + parseInt(styles.marginRight, 10);
  const height = element.offsetHeight + parseInt(styles.marginTop, 10) + parseInt(styles.marginBottom, 10);
  element.style.display = originalDisplay;
  element.style.visibility = originalVisibility;
  return {
    width,
    height
  };
}
/**
 * get the popup position
 * @param {Element} el element
 * @param {Element} elRelative relative element
 * @param {Number} targetWidth target element's width
 * @param {Number} targetHeight target element's height
 * @param {Boolean} appendToBody
 * @param {String} fixedPosition
 * @param {Boolean} rtl
 */
// eslint-disable-next-line complexity,max-statements

function getRelativePosition({
  el,
  elRelative,
  targetWidth,
  targetHeight,
  appendToBody,
  fixedPosition,
  rtl
}) {
  let left = 0;
  let top = 0;
  let offsetX = 0;
  let offsetY = 0;
  const relativeRect = elRelative.getBoundingClientRect();
  const documentWidth = document.documentElement.clientWidth;
  const documentHeight = document.documentElement.clientHeight;

  if (appendToBody) {
    offsetX = window.pageXOffset + relativeRect.left;
    offsetY = window.pageYOffset + relativeRect.top;
  }

  const calendarBounding = el.getBoundingClientRect();
  const outOfBoundsRight = calendarBounding.right > window.innerWidth;
  const outOfBoundsBottom = calendarBounding.bottom > window.innerHeight;
  const fixedPositionRight = fixedPosition && fixedPosition.indexOf('right') !== -1;
  const fixedPositionTop = fixedPosition && fixedPosition.indexOf('top') !== -1;

  const setLeft = () => {
    left = offsetX;
  };

  const setRight = () => {
    left = offsetX + relativeRect.width - targetWidth;
  };

  const setBottom = () => {
    top = offsetY + relativeRect.height;
  };

  const setTop = () => {
    top = offsetY - targetHeight;
  };

  if (fixedPosition === '') {
    if (outOfBoundsRight || rtl) {
      setRight();
    } else {
      setLeft();
    }

    if (outOfBoundsBottom) {
      setTop();
    } else {
      setBottom();
    }

    const hasRelativWidth = documentWidth - relativeRect.left < targetWidth && relativeRect.right < targetWidth;
    const hasRelativHeight = relativeRect.top <= targetHeight && documentHeight - relativeRect.bottom <= targetHeight;

    if (hasRelativWidth) {
      left = offsetX - relativeRect.left + 1;
    }

    if (hasRelativHeight) {
      top = offsetY + documentHeight - relativeRect.top - targetHeight;
    }
  } else {
    if (fixedPositionRight) {
      setRight();
    } else {
      setLeft();
    }

    if (fixedPositionTop) {
      setTop();
    } else {
      setBottom();
    }
  }

  return {
    left: `${left}px`,
    top: `${top}px`
  };
}

var script$7 = {
  name: 'Popup',
  props: {
    appendToBody: {
      type: Boolean,
      default: true
    },
    fixedPosition: {
      type: String,
      default: ''
    },
    inline: {
      type: Boolean,
      default: false
    },
    rtl: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      popupRect: null
    };
  },

  watch: {
    visible: {
      immediate: true,

      handler(val) {
        this.$nextTick(() => {
          if (val) {
            this.displayPopup();
          }
        });
      }

    }
  },

  mounted() {
    if (this.inline) {
      return;
    }

    if (this.appendToBody) {
      document.body.appendChild(this.$el);
    }
  },

  beforeDestroy() {
    if (this.inline) {
      return;
    }

    if (this.appendToBody && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },

  methods: {
    setTopStyle() {
      if (this.appendToBody) {
        const relativeRect = this.$parent.$el.getBoundingClientRect();
        this.$el.style.top = `${relativeRect.bottom + window.scrollY}px`;
      }
    },

    displayPopup() {
      if (this.inline || !this.visible) return;
      this.setTopStyle();
      const popup = this.$el;
      const relativeElement = this.$parent.$el;

      if (!this.popupRect) {
        this.popupRect = getPopupElementSize(popup);
      }

      const {
        width,
        height
      } = this.popupRect;
      const {
        left,
        top
      } = getRelativePosition({
        el: popup,
        elRelative: relativeElement,
        targetWidth: width,
        targetHeight: height,
        appendToBody: this.appendToBody,
        fixedPosition: this.fixedPosition,
        rtl: this.rtl
      });
      this.$el.style.left = left;
      this.$el.style.top = top;
    }

  },

  render() {
    return this.$slots.default;
  }

};

/* script */
const __vue_script__$7 = script$7;

/* template */

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$7 = /*#__PURE__*/normalizeComponent(
    {},
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    false,
    undefined,
    undefined,
    undefined
  );

//

const validDate = val => val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number';

var script$8 = {
  name: 'Datepicker',
  components: {
    DateInput: __vue_component__$1,
    PickerDay: __vue_component__$4,
    PickerMonth: __vue_component__$5,
    PickerYear: __vue_component__$6,
    Popup: __vue_component__$7
  },
  mixins: [__vue_component__],
  props: {
    appendToBody: {
      type: Boolean,
      default: false
    },
    calendarClass: {
      type: [String, Object, Array],
      default: ''
    },
    dayCellContent: {
      type: Function,
      default: day => day.date
    },
    disabledDates: {
      type: Object,

      default() {
        return {};
      }

    },
    firstDayOfWeek: {
      type: String,
      default: 'sun'
    },
    fixedPosition: {
      type: String,
      default: '',
      validator: val => {
        const possibleValues = ['', 'bottom', 'bottom-left', 'bottom-right', 'top', 'top-left', 'top-right'];
        return possibleValues.includes(val);
      }
    },
    fullMonthName: {
      type: Boolean,
      default: false
    },
    highlighted: {
      type: Object,

      default() {
        return {};
      }

    },
    initialView: {
      type: String,
      default: ''
    },
    language: {
      type: Object,
      default: () => en
    },
    maximumView: {
      type: String,
      default: 'year'
    },
    minimumView: {
      type: String,
      default: 'day'
    },
    showEdgeDates: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    value: {
      type: [String, Date, Number],
      default: '',
      validator: validDate
    },
    wrapperClass: {
      type: [String, Object, Array],
      default: ''
    },
    yearPickerRange: {
      type: Number,
      default: 10
    }
  },

  data() {
    // const startDate = this.openDate ? new Date(this.openDate) : new Date()
    const constructedDateUtils = makeDateUtils(this.useUtc);
    let startDate;

    if (this.openDate) {
      startDate = constructedDateUtils.getNewDateObject(this.openDate);
    } else {
      startDate = constructedDateUtils.getNewDateObject();
    }

    const pageTimestamp = constructedDateUtils.setDate(startDate, 1);
    return {
      /*
       * Positioning
       */
      calendarHeight: 0,
      calendarSlots,
      currentPicker: '',

      /*
       * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
       * This represents the first day of the current viewing month
       * {Number}
       */
      pageTimestamp,
      resetTypedDate: constructedDateUtils.getNewDateObject(),

      /*
       * Selected Date
       * {Date}
       */
      selectedDate: null,
      utils: constructedDateUtils
    };
  },

  computed: {
    computedInitialView() {
      return this.initialView ? this.initialView : this.minimumView;
    },

    isInline() {
      return !!this.inline;
    },

    isOpen() {
      return this.currentPicker !== '';
    },

    isRtl() {
      return this.translation.rtl === true;
    },

    pageDate() {
      return new Date(this.pageTimestamp);
    },

    pickerClasses() {
      return [this.calendarClass, 'vdp-datepicker__calendar', this.isInline && 'inline', this.isRtl && this.appendToBody && 'rtl'];
    },

    translation() {
      return this.language;
    },

    disabledDatesClass() {
      return new DisabledDate(this.utils, this.disabledDates);
    }

  },
  watch: {
    initialView() {
      this.setInitialView();
    },

    openDate() {
      this.setPageDate();
    },

    value(value) {
      const parsedValue = this.parseValue(value);
      this.setValue(parsedValue);
    }

  },

  mounted() {
    this.init();
  },

  methods: {
    /**
     * Are we allowed to show a specific picker view?
     * @param {String} view
     * @return {Boolean}
     */
    allowedToShowView(view) {
      const views = ['day', 'month', 'year'];
      const minimumViewIndex = views.indexOf(this.minimumView);
      const maximumViewIndex = views.indexOf(this.maximumView);
      const viewIndex = views.indexOf(view);
      return viewIndex >= minimumViewIndex && viewIndex <= maximumViewIndex;
    },

    /**
     * Clear the selected date
     */
    clearDate() {
      this.selectedDate = null;
      this.setPageDate();
      this.$emit('selected', null);
      this.$emit('input', null);
      this.$emit('cleared');
    },

    /**
     * Close the calendar views
     */
    close() {
      if (!this.isInline) {
        this.currentPicker = '';
        this.$emit('closed');
      }
    },

    /**
     * Handles a month change from the day picker
     */
    handleChangedMonthFromDayPicker(date) {
      this.setPageDate(date);
      this.$emit('changed-month', date);
    },

    /**
     * Initiate the component
     */
    init() {
      if (this.value) {
        let parsedValue = this.parseValue(this.value);
        const isDateDisabled = parsedValue && this.disabledDatesClass.isDateDisabled(parsedValue);

        if (isDateDisabled) {
          parsedValue = null;
          this.$emit('input', parsedValue);
        }

        this.setValue(parsedValue);
      }

      if (this.isInline) {
        this.setInitialView();
      }
    },

    /**
     * Emits a 'blur' event
     */
    onBlur() {
      this.$emit('blur');
    },

    /**
     * Emits a 'focus' event
     */
    onFocus() {
      this.$emit('focus');
    },

    /**
     * Called in the event that the user navigates to date pages and
     * closes the picker without selecting a date.
     */
    resetDefaultPageDate() {
      if (this.selectedDate === null) {
        this.setPageDate();
        return;
      }

      this.setPageDate(this.selectedDate);
    },

    /**
     * Set the selected date
     * @param {Number} timestamp
     */
    setDate(timestamp) {
      const date = new Date(timestamp);
      this.selectedDate = date;
      this.setPageDate(date);
      this.$emit('selected', date);
      this.$emit('input', date);
    },

    /**
     * Sets the initial picker page view: day, month or year
     */
    setInitialView() {
      const initialView = this.computedInitialView;

      if (!this.allowedToShowView(initialView)) {
        throw new Error(`initialView '${this.initialView}' cannot be rendered based on minimum '${this.minimumView}' and maximum '${this.maximumView}'`);
      }

      switch (initialView) {
        case 'year':
          this.showSpecificCalendar('Year');
          break;

        case 'month':
          this.showSpecificCalendar('Month');
          break;

        default:
          this.showSpecificCalendar('Day');
          break;
      }
    },

    /**
     * Sets the date that the calendar should open on
     */
    setPageDate(date) {
      let dateTemp = date;

      if (!dateTemp) {
        if (this.openDate) {
          dateTemp = new Date(this.openDate);
        } else {
          dateTemp = new Date();
        }

        dateTemp = this.utils.resetDateTime(dateTemp);
      }

      this.pageTimestamp = this.utils.setDate(new Date(dateTemp), 1);
    },

    /**
     * Set the date from a typedDate event
     */
    setTypedDate(date) {
      this.setDate(date.valueOf());
    },

    /**
     * Set the datepicker value
     * @param {Date|String|Number|null} date
     */
    setValue(date) {
      if (!date) {
        this.setPageDate();
        this.selectedDate = null;
        return;
      }

      this.selectedDate = date;
      this.setPageDate(date);
    },

    /**
     * parse a datepicker value from string/number to date
     * @param {Date|String|Number|null} date
     */
    parseValue(date) {
      let dateTemp = date;

      if (typeof dateTemp === 'string' || typeof dateTemp === 'number') {
        const parsed = new Date(dateTemp);
        dateTemp = Number.isNaN(parsed.valueOf()) ? null : parsed;
      }

      return dateTemp;
    },

    /**
     * @param {Object} date
     */
    selectDate(date) {
      this.resetTypedDate = this.utils.getNewDateObject();
      this.close();
      this.setDate(date.timestamp);
    },

    /**
     * @param {Object} date
     */
    selectDisabledDate(date) {
      this.$emit('selected-disabled', date);
    },

    /**
     * @param {Object} month
     */
    selectMonth(month) {
      const date = new Date(month.timestamp);

      if (this.allowedToShowView('day')) {
        this.setPageDate(date);
        this.$emit('changed-month', month);
        this.showSpecificCalendar('Day');
      } else {
        this.selectDate(month);
      }
    },

    /**
     * @param {Object} year
     */
    selectYear(year) {
      const date = new Date(year.timestamp);

      if (this.allowedToShowView('month')) {
        this.setPageDate(date);
        this.$emit('changed-year', year);
        this.showSpecificCalendar('Month');
      } else {
        this.selectDate(year);
      }
    },

    /**
     * Shows the calendar at the relevant view: 'day', 'month', or 'year'
     */
    showCalendar() {
      if (this.disabled || this.isInline) {
        return;
      }

      this.setInitialView();
      this.$emit('opened');
    },

    /**
     * Show a specific picker
     */
    showSpecificCalendar(type) {
      if (this.allowedToShowView(type.toLowerCase())) {
        this.currentPicker = `Picker${type}`;
      }
    }

  }
};

/* script */
const __vue_script__$8 = script$8;
/* template */
var __vue_render__$5 = function() {
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
        "DateInput",
        {
          attrs: {
            id: _vm.id,
            autofocus: _vm.autofocus,
            "bootstrap-styling": _vm.bootstrapStyling,
            "calendar-button": _vm.calendarButton,
            "calendar-button-icon": _vm.calendarButtonIcon,
            "calendar-button-icon-content": _vm.calendarButtonIconContent,
            "clear-button": _vm.clearButton,
            "clear-button-icon": _vm.clearButtonIcon,
            disabled: _vm.disabled,
            format: _vm.format,
            inline: _vm.inline,
            "is-open": _vm.isOpen,
            "input-class": _vm.inputClass,
            maxlength: _vm.maxlength,
            name: _vm.name,
            parser: _vm.parser,
            pattern: _vm.pattern,
            placeholder: _vm.placeholder,
            "ref-name": _vm.refName,
            required: _vm.required,
            "reset-typed-date": _vm.resetTypedDate,
            "selected-date": _vm.selectedDate,
            "show-calendar-on-button-click": _vm.showCalendarOnButtonClick,
            "show-calendar-on-focus": _vm.showCalendarOnFocus,
            tabindex: _vm.tabindex,
            translation: _vm.translation,
            typeable: _vm.typeable,
            "use-utc": _vm.useUtc
          },
          on: {
            blur: _vm.onBlur,
            "clear-date": _vm.clearDate,
            "close-calendar": _vm.close,
            focus: _vm.onFocus,
            "show-calendar": _vm.showCalendar,
            "typed-date": _vm.setTypedDate
          }
        },
        [
          _vm._t("beforeDateInput", null, { slot: "beforeDateInput" }),
          _vm._v(" "),
          _vm._t("afterDateInput", null, { slot: "afterDateInput" }),
          _vm._v(" "),
          _vm._t("clearBtn", null, { slot: "clearBtn" }),
          _vm._v(" "),
          _vm._t("calendarBtn", null, { slot: "calendarBtn" })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "Popup",
        {
          ref: "popup",
          attrs: {
            "append-to-body": _vm.appendToBody,
            "fixed-position": _vm.fixedPosition,
            inline: _vm.inline,
            rtl: _vm.isRtl,
            visible: _vm.isOpen
          }
        },
        [
          _vm.isOpen
            ? _c(
                "div",
                {
                  ref: "datepicker",
                  class: _vm.pickerClasses,
                  on: {
                    mousedown: function($event) {
                      $event.preventDefault();
                    }
                  }
                },
                [
                  _vm.isOpen
                    ? [
                        _vm._t("beforeCalendarHeader"),
                        _vm._v(" "),
                        _c(
                          _vm.currentPicker,
                          {
                            tag: "Component",
                            attrs: {
                              "allowed-to-show-view": _vm.allowedToShowView,
                              "day-cell-content": _vm.dayCellContent,
                              "disabled-dates": _vm.disabledDates,
                              "first-day-of-week": _vm.firstDayOfWeek,
                              highlighted: _vm.highlighted,
                              "is-rtl": _vm.isRtl,
                              "page-date": _vm.pageDate,
                              "page-timestamp": _vm.pageTimestamp,
                              "selected-date": _vm.selectedDate,
                              "show-edge-dates": _vm.showEdgeDates,
                              "show-full-month-name": _vm.fullMonthName,
                              "show-header": _vm.showHeader,
                              translation: _vm.translation,
                              "use-utc": _vm.useUtc,
                              "year-range": _vm.yearPickerRange
                            },
                            on: {
                              "select-date": _vm.selectDate,
                              "changed-month":
                                _vm.handleChangedMonthFromDayPicker,
                              "selected-disabled": _vm.selectDisabledDate,
                              "select-month": _vm.selectMonth,
                              "changed-year": _vm.setPageDate,
                              "show-month-calendar": function($event) {
                                return _vm.showSpecificCalendar("Month")
                              },
                              "select-year": _vm.selectYear,
                              "changed-decade": _vm.setPageDate,
                              "show-year-calendar": function($event) {
                                return _vm.showSpecificCalendar("Year")
                              }
                            }
                          },
                          [
                            _vm._l(_vm.calendarSlots, function(slotKey) {
                              return [_vm._t(slotKey, null, { slot: slotKey })]
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm._t("calendarFooter")
                      ]
                    : _vm._e()
                ],
                2
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$8 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ var Datepicker_esm = (__vue_component__$8);
//# sourceMappingURL=Datepicker.esm.js.map

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
    Datepicker: Datepicker_esm
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