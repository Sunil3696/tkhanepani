(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./resources/assets/js/misc.js":
/*!*************************************!*\
  !*** ./resources/assets/js/misc.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {
  'use strict';

  $(function () {
    var body = $('body');
    var contentWrapper = $('.content-wrapper');
    var scroller = $('.container-scroller');
    var footer = $('.footer');
    var sidebar = $('.sidebar'); //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required

    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    $('.nav li a', sidebar).each(function () {
      var $this = $(this);

      if (current === "") {
        //for root url
        if ($this.attr('href').indexOf("index.html") !== -1) {
          $(this).parents('.nav-item').last().addClass('active');

          if ($(this).parents('.sub-menu').length) {
            $(this).closest('.collapse').addClass('show');
            $(this).addClass('active');
          }
        }
      } else {
        //for other url
        if ($this.attr('href').indexOf(current) !== -1) {
          $(this).parents('.nav-item').last().addClass('active');

          if ($(this).parents('.sub-menu').length) {
            $(this).closest('.collapse').addClass('show');
            $(this).addClass('active');
          }
        }
      }
    }); //Close other submenu in sidebar on opening any

    sidebar.on('show.bs.collapse', '.collapse', function () {
      sidebar.find('.collapse.show').collapse('hide');
    }); //Change sidebar and content-wrapper height

    applyStyles();

    function applyStyles() {
      //Applying perfect scrollbar
      if (!body.hasClass("rtl")) {
        if ($('.tab-content .tab-pane.scroll-wrapper').length) {
          var settingsPanelScroll = new PerfectScrollbar('.settings-panel .tab-content .tab-pane.scroll-wrapper');
        }

        if ($('.chats').length) {
          var chatsScroll = new PerfectScrollbar('.chats');
        }
      }
    } //checkbox and radios


    $(".form-check label,.form-radio label").append('<i class="input-helper"></i>'); //fullscreen

    $("#fullscreen-button").on("click", function toggleFullScreen() {
      if (document.fullScreenElement !== undefined && document.fullScreenElement === null || document.msFullscreenElement !== undefined && document.msFullscreenElement === null || document.mozFullScreen !== undefined && !document.mozFullScreen || document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    });
  });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/off-canvas.js":
/*!*******************************************!*\
  !*** ./resources/assets/js/off-canvas.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {
  'use strict';

  $(function () {
    $('[data-toggle="offcanvas"]').on("click", function () {
      $('.sidebar-offcanvas').toggleClass('active');
    });
  });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/vendors/js/vendor.bundle.addons.js":
/*!*************************************************************!*\
  !*** ./resources/assets/vendors/js/vendor.bundle.addons.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Chart.js v2.8.0
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e(function () {
    try {
      return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } catch (t) {}
  }()) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (t) {
    return e(function () {
      try {
        return t("moment");
      } catch (t) {}
    }());
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t) {
  "use strict";

  t = t && t.hasOwnProperty("default") ? t["default"] : t;
  var e = {
    rgb2hsl: i,
    rgb2hsv: n,
    rgb2hwb: a,
    rgb2cmyk: o,
    rgb2keyword: s,
    rgb2xyz: l,
    rgb2lab: d,
    rgb2lch: function rgb2lch(t) {
      return x(d(t));
    },
    hsl2rgb: u,
    hsl2hsv: function hsl2hsv(t) {
      var e = t[0],
          i = t[1] / 100,
          n = t[2] / 100;
      if (0 === n) return [0, 0, 0];
      return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)];
    },
    hsl2hwb: function hsl2hwb(t) {
      return a(u(t));
    },
    hsl2cmyk: function hsl2cmyk(t) {
      return o(u(t));
    },
    hsl2keyword: function hsl2keyword(t) {
      return s(u(t));
    },
    hsv2rgb: h,
    hsv2hsl: function hsv2hsl(t) {
      var e,
          i,
          n = t[0],
          a = t[1] / 100,
          o = t[2] / 100;
      return e = a * o, [n, 100 * (e = (e /= (i = (2 - a) * o) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)];
    },
    hsv2hwb: function hsv2hwb(t) {
      return a(h(t));
    },
    hsv2cmyk: function hsv2cmyk(t) {
      return o(h(t));
    },
    hsv2keyword: function hsv2keyword(t) {
      return s(h(t));
    },
    hwb2rgb: c,
    hwb2hsl: function hwb2hsl(t) {
      return i(c(t));
    },
    hwb2hsv: function hwb2hsv(t) {
      return n(c(t));
    },
    hwb2cmyk: function hwb2cmyk(t) {
      return o(c(t));
    },
    hwb2keyword: function hwb2keyword(t) {
      return s(c(t));
    },
    cmyk2rgb: f,
    cmyk2hsl: function cmyk2hsl(t) {
      return i(f(t));
    },
    cmyk2hsv: function cmyk2hsv(t) {
      return n(f(t));
    },
    cmyk2hwb: function cmyk2hwb(t) {
      return a(f(t));
    },
    cmyk2keyword: function cmyk2keyword(t) {
      return s(f(t));
    },
    keyword2rgb: w,
    keyword2hsl: function keyword2hsl(t) {
      return i(w(t));
    },
    keyword2hsv: function keyword2hsv(t) {
      return n(w(t));
    },
    keyword2hwb: function keyword2hwb(t) {
      return a(w(t));
    },
    keyword2cmyk: function keyword2cmyk(t) {
      return o(w(t));
    },
    keyword2lab: function keyword2lab(t) {
      return d(w(t));
    },
    keyword2xyz: function keyword2xyz(t) {
      return l(w(t));
    },
    xyz2rgb: p,
    xyz2lab: m,
    xyz2lch: function xyz2lch(t) {
      return x(m(t));
    },
    lab2xyz: v,
    lab2rgb: y,
    lab2lch: x,
    lch2lab: k,
    lch2xyz: function lch2xyz(t) {
      return v(k(t));
    },
    lch2rgb: function lch2rgb(t) {
      return y(k(t));
    }
  };

  function i(t) {
    var e,
        i,
        n = t[0] / 255,
        a = t[1] / 255,
        o = t[2] / 255,
        r = Math.min(n, a, o),
        s = Math.max(n, a, o),
        l = s - r;
    return s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (r + s) / 2, [e, 100 * (s == r ? 0 : i <= .5 ? l / (s + r) : l / (2 - s - r)), 100 * i];
  }

  function n(t) {
    var e,
        i,
        n = t[0],
        a = t[1],
        o = t[2],
        r = Math.min(n, a, o),
        s = Math.max(n, a, o),
        l = s - r;
    return i = 0 == s ? 0 : l / s * 1e3 / 10, s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10];
  }

  function a(t) {
    var e = t[0],
        n = t[1],
        a = t[2];
    return [i(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(n, a)))];
  }

  function o(t) {
    var e,
        i = t[0] / 255,
        n = t[1] / 255,
        a = t[2] / 255;
    return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e];
  }

  function s(t) {
    return _[JSON.stringify(t)];
  }

  function l(t) {
    var e = t[0] / 255,
        i = t[1] / 255,
        n = t[2] / 255;
    return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)];
  }

  function d(t) {
    var e = l(t),
        i = e[0],
        n = e[1],
        a = e[2];
    return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))];
  }

  function u(t) {
    var e,
        i,
        n,
        a,
        o,
        r = t[0] / 360,
        s = t[1] / 100,
        l = t[2] / 100;
    if (0 == s) return [o = 255 * l, o, o];
    e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];

    for (var d = 0; d < 3; d++) {
      (n = r + 1 / 3 * -(d - 1)) < 0 && n++, n > 1 && n--, o = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[d] = 255 * o;
    }

    return a;
  }

  function h(t) {
    var e = t[0] / 60,
        i = t[1] / 100,
        n = t[2] / 100,
        a = Math.floor(e) % 6,
        o = e - Math.floor(e),
        r = 255 * n * (1 - i),
        s = 255 * n * (1 - i * o),
        l = 255 * n * (1 - i * (1 - o));
    n *= 255;

    switch (a) {
      case 0:
        return [n, l, r];

      case 1:
        return [s, n, r];

      case 2:
        return [r, n, l];

      case 3:
        return [r, s, n];

      case 4:
        return [l, r, n];

      case 5:
        return [n, r, s];
    }
  }

  function c(t) {
    var e,
        i,
        n,
        a,
        o = t[0] / 360,
        s = t[1] / 100,
        l = t[2] / 100,
        d = s + l;

    switch (d > 1 && (s /= d, l /= d), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) {
      default:
      case 6:
      case 0:
        r = i, g = a, b = s;
        break;

      case 1:
        r = a, g = i, b = s;
        break;

      case 2:
        r = s, g = i, b = a;
        break;

      case 3:
        r = s, g = a, b = i;
        break;

      case 4:
        r = a, g = s, b = i;
        break;

      case 5:
        r = i, g = s, b = a;
    }

    return [255 * r, 255 * g, 255 * b];
  }

  function f(t) {
    var e = t[0] / 100,
        i = t[1] / 100,
        n = t[2] / 100,
        a = t[3] / 100;
    return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))];
  }

  function p(t) {
    var e,
        i,
        n,
        a = t[0] / 100,
        o = t[1] / 100,
        r = t[2] / 100;
    return i = -.9689 * a + 1.8758 * o + .0415 * r, n = .0557 * a + -.204 * o + 1.057 * r, e = (e = 3.2406 * a + -1.5372 * o + -.4986 * r) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))];
  }

  function m(t) {
    var e = t[0],
        i = t[1],
        n = t[2];
    return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))];
  }

  function v(t) {
    var e,
        i,
        n,
        a,
        o = t[0],
        r = t[1],
        s = t[2];
    return o <= 8 ? a = (i = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)];
  }

  function x(t) {
    var e,
        i = t[0],
        n = t[1],
        a = t[2];
    return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e];
  }

  function y(t) {
    return p(v(t));
  }

  function k(t) {
    var e,
        i = t[0],
        n = t[1];
    return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)];
  }

  function w(t) {
    return M[t];
  }

  var M = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  },
      _ = {};

  for (var C in M) {
    _[JSON.stringify(M[C])] = C;
  }

  var S = function S() {
    return new T();
  };

  for (var P in e) {
    S[P + "Raw"] = function (t) {
      return function (i) {
        return "number" == typeof i && (i = Array.prototype.slice.call(arguments)), e[t](i);
      };
    }(P);

    var I = /(\w+)2(\w+)/.exec(P),
        A = I[1],
        D = I[2];

    (S[A] = S[A] || {})[D] = S[P] = function (t) {
      return function (i) {
        "number" == typeof i && (i = Array.prototype.slice.call(arguments));
        var n = e[t](i);
        if ("string" == typeof n || void 0 === n) return n;

        for (var a = 0; a < n.length; a++) {
          n[a] = Math.round(n[a]);
        }

        return n;
      };
    }(P);
  }

  var T = function T() {
    this.convs = {};
  };

  T.prototype.routeSpace = function (t, e) {
    var i = e[0];
    return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i));
  }, T.prototype.setValues = function (t, e) {
    return this.space = t, this.convs = {}, this.convs[t] = e, this;
  }, T.prototype.getValues = function (t) {
    var e = this.convs[t];

    if (!e) {
      var i = this.space,
          n = this.convs[i];
      e = S[i][t](n), this.convs[t] = e;
    }

    return e;
  }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
    T.prototype[t] = function (e) {
      return this.routeSpace(t, arguments);
    };
  });
  var F = S,
      L = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  },
      R = {
    getRgba: O,
    getHsla: z,
    getRgb: function getRgb(t) {
      var e = O(t);
      return e && e.slice(0, 3);
    },
    getHsl: function getHsl(t) {
      var e = z(t);
      return e && e.slice(0, 3);
    },
    getHwb: B,
    getAlpha: function getAlpha(t) {
      var e = O(t);
      if (e) return e[3];
      if (e = z(t)) return e[3];
      if (e = B(t)) return e[3];
    },
    hexString: function hexString(t, e) {
      var e = void 0 !== e && 3 === t.length ? e : t[3];
      return "#" + H(t[0]) + H(t[1]) + H(t[2]) + (e >= 0 && e < 1 ? H(Math.round(255 * e)) : "");
    },
    rgbString: function rgbString(t, e) {
      if (e < 1 || t[3] && t[3] < 1) return N(t, e);
      return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
    },
    rgbaString: N,
    percentString: function percentString(t, e) {
      if (e < 1 || t[3] && t[3] < 1) return W(t, e);
      var i = Math.round(t[0] / 255 * 100),
          n = Math.round(t[1] / 255 * 100),
          a = Math.round(t[2] / 255 * 100);
      return "rgb(" + i + "%, " + n + "%, " + a + "%)";
    },
    percentaString: W,
    hslString: function hslString(t, e) {
      if (e < 1 || t[3] && t[3] < 1) return V(t, e);
      return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
    },
    hslaString: V,
    hwbString: function hwbString(t, e) {
      void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
      return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
    },
    keyword: function keyword(t) {
      return j[t.slice(0, 3)];
    }
  };

  function O(t) {
    if (t) {
      var e = [0, 0, 0],
          i = 1,
          n = t.match(/^#([a-fA-F0-9]{3,4})$/i),
          a = "";

      if (n) {
        a = (n = n[1])[3];

        for (var o = 0; o < e.length; o++) {
          e[o] = parseInt(n[o] + n[o], 16);
        }

        a && (i = Math.round(parseInt(a + a, 16) / 255 * 100) / 100);
      } else if (n = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
        a = n[2], n = n[1];

        for (o = 0; o < e.length; o++) {
          e[o] = parseInt(n.slice(2 * o, 2 * o + 2), 16);
        }

        a && (i = Math.round(parseInt(a, 16) / 255 * 100) / 100);
      } else if (n = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
        for (o = 0; o < e.length; o++) {
          e[o] = parseInt(n[o + 1]);
        }

        i = parseFloat(n[4]);
      } else if (n = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
        for (o = 0; o < e.length; o++) {
          e[o] = Math.round(2.55 * parseFloat(n[o + 1]));
        }

        i = parseFloat(n[4]);
      } else if (n = t.match(/(\w+)/)) {
        if ("transparent" == n[1]) return [0, 0, 0, 0];
        if (!(e = L[n[1]])) return;
      }

      for (o = 0; o < e.length; o++) {
        e[o] = E(e[o], 0, 255);
      }

      return i = i || 0 == i ? E(i, 0, 1) : 1, e[3] = i, e;
    }
  }

  function z(t) {
    if (t) {
      var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

      if (e) {
        var i = parseFloat(e[4]);
        return [E(parseInt(e[1]), 0, 360), E(parseFloat(e[2]), 0, 100), E(parseFloat(e[3]), 0, 100), E(isNaN(i) ? 1 : i, 0, 1)];
      }
    }
  }

  function B(t) {
    if (t) {
      var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

      if (e) {
        var i = parseFloat(e[4]);
        return [E(parseInt(e[1]), 0, 360), E(parseFloat(e[2]), 0, 100), E(parseFloat(e[3]), 0, 100), E(isNaN(i) ? 1 : i, 0, 1)];
      }
    }
  }

  function N(t, e) {
    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
  }

  function W(t, e) {
    return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")";
  }

  function V(t, e) {
    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
  }

  function E(t, e, i) {
    return Math.min(Math.max(e, t), i);
  }

  function H(t) {
    var e = t.toString(16).toUpperCase();
    return e.length < 2 ? "0" + e : e;
  }

  var j = {};

  for (var q in L) {
    j[L[q]] = q;
  }

  var Y = function Y(t) {
    return t instanceof Y ? t : this instanceof Y ? (this.valid = !1, this.values = {
      rgb: [0, 0, 0],
      hsl: [0, 0, 0],
      hsv: [0, 0, 0],
      hwb: [0, 0, 0],
      cmyk: [0, 0, 0, 0],
      alpha: 1
    }, void ("string" == typeof t ? (e = R.getRgba(t)) ? this.setValues("rgb", e) : (e = R.getHsla(t)) ? this.setValues("hsl", e) : (e = R.getHwb(t)) && this.setValues("hwb", e) : "object" == _typeof(t) && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new Y(t);
    var e;
  };

  Y.prototype = {
    isValid: function isValid() {
      return this.valid;
    },
    rgb: function rgb() {
      return this.setSpace("rgb", arguments);
    },
    hsl: function hsl() {
      return this.setSpace("hsl", arguments);
    },
    hsv: function hsv() {
      return this.setSpace("hsv", arguments);
    },
    hwb: function hwb() {
      return this.setSpace("hwb", arguments);
    },
    cmyk: function cmyk() {
      return this.setSpace("cmyk", arguments);
    },
    rgbArray: function rgbArray() {
      return this.values.rgb;
    },
    hslArray: function hslArray() {
      return this.values.hsl;
    },
    hsvArray: function hsvArray() {
      return this.values.hsv;
    },
    hwbArray: function hwbArray() {
      var t = this.values;
      return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
    },
    cmykArray: function cmykArray() {
      return this.values.cmyk;
    },
    rgbaArray: function rgbaArray() {
      var t = this.values;
      return t.rgb.concat([t.alpha]);
    },
    hslaArray: function hslaArray() {
      var t = this.values;
      return t.hsl.concat([t.alpha]);
    },
    alpha: function alpha(t) {
      return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
    },
    red: function red(t) {
      return this.setChannel("rgb", 0, t);
    },
    green: function green(t) {
      return this.setChannel("rgb", 1, t);
    },
    blue: function blue(t) {
      return this.setChannel("rgb", 2, t);
    },
    hue: function hue(t) {
      return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
    },
    saturation: function saturation(t) {
      return this.setChannel("hsl", 1, t);
    },
    lightness: function lightness(t) {
      return this.setChannel("hsl", 2, t);
    },
    saturationv: function saturationv(t) {
      return this.setChannel("hsv", 1, t);
    },
    whiteness: function whiteness(t) {
      return this.setChannel("hwb", 1, t);
    },
    blackness: function blackness(t) {
      return this.setChannel("hwb", 2, t);
    },
    value: function value(t) {
      return this.setChannel("hsv", 2, t);
    },
    cyan: function cyan(t) {
      return this.setChannel("cmyk", 0, t);
    },
    magenta: function magenta(t) {
      return this.setChannel("cmyk", 1, t);
    },
    yellow: function yellow(t) {
      return this.setChannel("cmyk", 2, t);
    },
    black: function black(t) {
      return this.setChannel("cmyk", 3, t);
    },
    hexString: function hexString() {
      return R.hexString(this.values.rgb);
    },
    rgbString: function rgbString() {
      return R.rgbString(this.values.rgb, this.values.alpha);
    },
    rgbaString: function rgbaString() {
      return R.rgbaString(this.values.rgb, this.values.alpha);
    },
    percentString: function percentString() {
      return R.percentString(this.values.rgb, this.values.alpha);
    },
    hslString: function hslString() {
      return R.hslString(this.values.hsl, this.values.alpha);
    },
    hslaString: function hslaString() {
      return R.hslaString(this.values.hsl, this.values.alpha);
    },
    hwbString: function hwbString() {
      return R.hwbString(this.values.hwb, this.values.alpha);
    },
    keyword: function keyword() {
      return R.keyword(this.values.rgb, this.values.alpha);
    },
    rgbNumber: function rgbNumber() {
      var t = this.values.rgb;
      return t[0] << 16 | t[1] << 8 | t[2];
    },
    luminosity: function luminosity() {
      for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
        var n = t[i] / 255;
        e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
      }

      return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
    },
    contrast: function contrast(t) {
      var e = this.luminosity(),
          i = t.luminosity();
      return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05);
    },
    level: function level(t) {
      var e = this.contrast(t);
      return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
    },
    dark: function dark() {
      var t = this.values.rgb;
      return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
    },
    light: function light() {
      return !this.dark();
    },
    negate: function negate() {
      for (var t = [], e = 0; e < 3; e++) {
        t[e] = 255 - this.values.rgb[e];
      }

      return this.setValues("rgb", t), this;
    },
    lighten: function lighten(t) {
      var e = this.values.hsl;
      return e[2] += e[2] * t, this.setValues("hsl", e), this;
    },
    darken: function darken(t) {
      var e = this.values.hsl;
      return e[2] -= e[2] * t, this.setValues("hsl", e), this;
    },
    saturate: function saturate(t) {
      var e = this.values.hsl;
      return e[1] += e[1] * t, this.setValues("hsl", e), this;
    },
    desaturate: function desaturate(t) {
      var e = this.values.hsl;
      return e[1] -= e[1] * t, this.setValues("hsl", e), this;
    },
    whiten: function whiten(t) {
      var e = this.values.hwb;
      return e[1] += e[1] * t, this.setValues("hwb", e), this;
    },
    blacken: function blacken(t) {
      var e = this.values.hwb;
      return e[2] += e[2] * t, this.setValues("hwb", e), this;
    },
    greyscale: function greyscale() {
      var t = this.values.rgb,
          e = .3 * t[0] + .59 * t[1] + .11 * t[2];
      return this.setValues("rgb", [e, e, e]), this;
    },
    clearer: function clearer(t) {
      var e = this.values.alpha;
      return this.setValues("alpha", e - e * t), this;
    },
    opaquer: function opaquer(t) {
      var e = this.values.alpha;
      return this.setValues("alpha", e + e * t), this;
    },
    rotate: function rotate(t) {
      var e = this.values.hsl,
          i = (e[0] + t) % 360;
      return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this;
    },
    mix: function mix(t, e) {
      var i = t,
          n = void 0 === e ? .5 : e,
          a = 2 * n - 1,
          o = this.alpha() - i.alpha(),
          r = ((a * o == -1 ? a : (a + o) / (1 + a * o)) + 1) / 2,
          s = 1 - r;
      return this.rgb(r * this.red() + s * i.red(), r * this.green() + s * i.green(), r * this.blue() + s * i.blue()).alpha(this.alpha() * n + i.alpha() * (1 - n));
    },
    toJSON: function toJSON() {
      return this.rgb();
    },
    clone: function clone() {
      var t,
          e,
          i = new Y(),
          n = this.values,
          a = i.values;

      for (var o in n) {
        n.hasOwnProperty(o) && (t = n[o], "[object Array]" === (e = {}.toString.call(t)) ? a[o] = t.slice(0) : "[object Number]" === e ? a[o] = t : console.error("unexpected color value:", t));
      }

      return i;
    }
  }, Y.prototype.spaces = {
    rgb: ["red", "green", "blue"],
    hsl: ["hue", "saturation", "lightness"],
    hsv: ["hue", "saturation", "value"],
    hwb: ["hue", "whiteness", "blackness"],
    cmyk: ["cyan", "magenta", "yellow", "black"]
  }, Y.prototype.maxes = {
    rgb: [255, 255, 255],
    hsl: [360, 100, 100],
    hsv: [360, 100, 100],
    hwb: [360, 100, 100],
    cmyk: [100, 100, 100, 100]
  }, Y.prototype.getValues = function (t) {
    for (var e = this.values, i = {}, n = 0; n < t.length; n++) {
      i[t.charAt(n)] = e[t][n];
    }

    return 1 !== e.alpha && (i.a = e.alpha), i;
  }, Y.prototype.setValues = function (t, e) {
    var i,
        n,
        a = this.values,
        o = this.spaces,
        r = this.maxes,
        s = 1;
    if (this.valid = !0, "alpha" === t) s = e;else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
      for (i = 0; i < t.length; i++) {
        a[t][i] = e[t.charAt(i)];
      }

      s = e.a;
    } else if (void 0 !== e[o[t][0]]) {
      var l = o[t];

      for (i = 0; i < t.length; i++) {
        a[t][i] = e[l[i]];
      }

      s = e.alpha;
    }
    if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t) return !1;

    for (i = 0; i < t.length; i++) {
      n = Math.max(0, Math.min(r[t][i], a[t][i])), a[t][i] = Math.round(n);
    }

    for (var d in o) {
      d !== t && (a[d] = F[t][d](a[t]));
    }

    return !0;
  }, Y.prototype.setSpace = function (t, e) {
    var i = e[0];
    return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this);
  }, Y.prototype.setChannel = function (t, e, i) {
    var n = this.values[t];
    return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this);
  }, "undefined" != typeof window && (window.Color = Y);
  var U,
      X = Y,
      K = {
    noop: function noop() {},
    uid: (U = 0, function () {
      return U++;
    }),
    isNullOrUndef: function isNullOrUndef(t) {
      return null == t;
    },
    isArray: function isArray(t) {
      if (Array.isArray && Array.isArray(t)) return !0;
      var e = Object.prototype.toString.call(t);
      return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
    },
    isObject: function isObject(t) {
      return null !== t && "[object Object]" === Object.prototype.toString.call(t);
    },
    isFinite: function (_isFinite) {
      function isFinite(_x) {
        return _isFinite.apply(this, arguments);
      }

      isFinite.toString = function () {
        return _isFinite.toString();
      };

      return isFinite;
    }(function (t) {
      return ("number" == typeof t || t instanceof Number) && isFinite(t);
    }),
    valueOrDefault: function valueOrDefault(t, e) {
      return void 0 === t ? e : t;
    },
    valueAtIndexOrDefault: function valueAtIndexOrDefault(t, e, i) {
      return K.valueOrDefault(K.isArray(t) ? t[e] : t, i);
    },
    callback: function callback(t, e, i) {
      if (t && "function" == typeof t.call) return t.apply(i, e);
    },
    each: function each(t, e, i, n) {
      var a, o, r;
      if (K.isArray(t)) {
        if (o = t.length, n) for (a = o - 1; a >= 0; a--) {
          e.call(i, t[a], a);
        } else for (a = 0; a < o; a++) {
          e.call(i, t[a], a);
        }
      } else if (K.isObject(t)) for (o = (r = Object.keys(t)).length, a = 0; a < o; a++) {
        e.call(i, t[r[a]], r[a]);
      }
    },
    arrayEquals: function arrayEquals(t, e) {
      var i, n, a, o;
      if (!t || !e || t.length !== e.length) return !1;

      for (i = 0, n = t.length; i < n; ++i) {
        if (a = t[i], o = e[i], a instanceof Array && o instanceof Array) {
          if (!K.arrayEquals(a, o)) return !1;
        } else if (a !== o) return !1;
      }

      return !0;
    },
    clone: function clone(t) {
      if (K.isArray(t)) return t.map(K.clone);

      if (K.isObject(t)) {
        for (var e = {}, i = Object.keys(t), n = i.length, a = 0; a < n; ++a) {
          e[i[a]] = K.clone(t[i[a]]);
        }

        return e;
      }

      return t;
    },
    _merger: function _merger(t, e, i, n) {
      var a = e[t],
          o = i[t];
      K.isObject(a) && K.isObject(o) ? K.merge(a, o, n) : e[t] = K.clone(o);
    },
    _mergerIf: function _mergerIf(t, e, i) {
      var n = e[t],
          a = i[t];
      K.isObject(n) && K.isObject(a) ? K.mergeIf(n, a) : e.hasOwnProperty(t) || (e[t] = K.clone(a));
    },
    merge: function merge(t, e, i) {
      var n,
          a,
          o,
          r,
          s,
          l = K.isArray(e) ? e : [e],
          d = l.length;
      if (!K.isObject(t)) return t;

      for (n = (i = i || {}).merger || K._merger, a = 0; a < d; ++a) {
        if (e = l[a], K.isObject(e)) for (s = 0, r = (o = Object.keys(e)).length; s < r; ++s) {
          n(o[s], t, e, i);
        }
      }

      return t;
    },
    mergeIf: function mergeIf(t, e) {
      return K.merge(t, e, {
        merger: K._mergerIf
      });
    },
    extend: function extend(t) {
      for (var e = function e(_e2, i) {
        t[i] = _e2;
      }, i = 1, n = arguments.length; i < n; ++i) {
        K.each(arguments[i], e);
      }

      return t;
    },
    inherits: function inherits(t) {
      var e = this,
          i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
        return e.apply(this, arguments);
      },
          n = function n() {
        this.constructor = i;
      };

      return n.prototype = e.prototype, i.prototype = new n(), i.extend = K.inherits, t && K.extend(i.prototype, t), i.__super__ = e.prototype, i;
    }
  },
      G = K;
  K.callCallback = K.callback, K.indexOf = function (t, e, i) {
    return Array.prototype.indexOf.call(t, e, i);
  }, K.getValueOrDefault = K.valueOrDefault, K.getValueAtIndexOrDefault = K.valueAtIndexOrDefault;
  var Z = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return -t * (t - 2);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return (t -= 1) * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return -((t -= 1) * t * t * t - 1);
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return (t -= 1) * t * t * t * t + 1;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    },
    easeInSine: function easeInSine(t) {
      return 1 - Math.cos(t * (Math.PI / 2));
    },
    easeOutSine: function easeOutSine(t) {
      return Math.sin(t * (Math.PI / 2));
    },
    easeInOutSine: function easeInOutSine(t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    },
    easeInExpo: function easeInExpo(t) {
      return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
    },
    easeOutExpo: function easeOutExpo(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    },
    easeInOutExpo: function easeInOutExpo(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
    },
    easeInCirc: function easeInCirc(t) {
      return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
    },
    easeOutCirc: function easeOutCirc(t) {
      return Math.sqrt(1 - (t -= 1) * t);
    },
    easeInOutCirc: function easeInOutCirc(t) {
      return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    easeInElastic: function easeInElastic(t) {
      var e = 1.70158,
          i = 0,
          n = 1;
      return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i));
    },
    easeOutElastic: function easeOutElastic(t) {
      var e = 1.70158,
          i = 0,
          n = 1;
      return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1);
    },
    easeInOutElastic: function easeInOutElastic(t) {
      var e = 1.70158,
          i = 0,
          n = 1;
      return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1);
    },
    easeInBack: function easeInBack(t) {
      var e = 1.70158;
      return t * t * ((e + 1) * t - e);
    },
    easeOutBack: function easeOutBack(t) {
      var e = 1.70158;
      return (t -= 1) * t * ((e + 1) * t + e) + 1;
    },
    easeInOutBack: function easeInOutBack(t) {
      var e = 1.70158;
      return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
    },
    easeInBounce: function easeInBounce(t) {
      return 1 - Z.easeOutBounce(1 - t);
    },
    easeOutBounce: function easeOutBounce(t) {
      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    },
    easeInOutBounce: function easeInOutBounce(t) {
      return t < .5 ? .5 * Z.easeInBounce(2 * t) : .5 * Z.easeOutBounce(2 * t - 1) + .5;
    }
  },
      $ = {
    effects: Z
  };
  G.easingEffects = Z;
  var J = Math.PI,
      Q = J / 180,
      tt = 2 * J,
      et = J / 2,
      it = J / 4,
      nt = 2 * J / 3,
      at = {
    clear: function clear(t) {
      t.ctx.clearRect(0, 0, t.width, t.height);
    },
    roundedRect: function roundedRect(t, e, i, n, a, o) {
      if (o) {
        var r = Math.min(o, a / 2, n / 2),
            s = e + r,
            l = i + r,
            d = e + n - r,
            u = i + a - r;
        t.moveTo(e, l), s < d && l < u ? (t.arc(s, l, r, -J, -et), t.arc(d, l, r, -et, 0), t.arc(d, u, r, 0, et), t.arc(s, u, r, et, J)) : s < d ? (t.moveTo(s, i), t.arc(d, l, r, -et, et), t.arc(s, l, r, et, J + et)) : l < u ? (t.arc(s, l, r, -J, 0), t.arc(s, u, r, 0, J)) : t.arc(s, l, r, -J, J), t.closePath(), t.moveTo(e, i);
      } else t.rect(e, i, n, a);
    },
    drawPoint: function drawPoint(t, e, i, n, a, o) {
      var r,
          s,
          l,
          d,
          u,
          h = (o || 0) * Q;

      if (!e || "object" != _typeof(e) || "[object HTMLImageElement]" !== (r = e.toString()) && "[object HTMLCanvasElement]" !== r) {
        if (!(isNaN(i) || i <= 0)) {
          switch (t.beginPath(), e) {
            default:
              t.arc(n, a, i, 0, tt), t.closePath();
              break;

            case "triangle":
              t.moveTo(n + Math.sin(h) * i, a - Math.cos(h) * i), h += nt, t.lineTo(n + Math.sin(h) * i, a - Math.cos(h) * i), h += nt, t.lineTo(n + Math.sin(h) * i, a - Math.cos(h) * i), t.closePath();
              break;

            case "rectRounded":
              d = i - (u = .516 * i), s = Math.cos(h + it) * d, l = Math.sin(h + it) * d, t.arc(n - s, a - l, u, h - J, h - et), t.arc(n + l, a - s, u, h - et, h), t.arc(n + s, a + l, u, h, h + et), t.arc(n - l, a + s, u, h + et, h + J), t.closePath();
              break;

            case "rect":
              if (!o) {
                d = Math.SQRT1_2 * i, t.rect(n - d, a - d, 2 * d, 2 * d);
                break;
              }

              h += it;

            case "rectRot":
              s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + l, a - s), t.lineTo(n + s, a + l), t.lineTo(n - l, a + s), t.closePath();
              break;

            case "crossRot":
              h += it;

            case "cross":
              s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n + l, a - s), t.lineTo(n - l, a + s);
              break;

            case "star":
              s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n + l, a - s), t.lineTo(n - l, a + s), h += it, s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n + l, a - s), t.lineTo(n - l, a + s);
              break;

            case "line":
              s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l);
              break;

            case "dash":
              t.moveTo(n, a), t.lineTo(n + Math.cos(h) * i, a + Math.sin(h) * i);
          }

          t.fill(), t.stroke();
        }
      } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height);
    },
    _isPointInArea: function _isPointInArea(t, e) {
      return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6;
    },
    clipArea: function clipArea(t, e) {
      t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
    },
    unclipArea: function unclipArea(t) {
      t.restore();
    },
    lineTo: function lineTo(t, e, i, n) {
      var a = i.steppedLine;

      if (a) {
        if ("middle" === a) {
          var o = (e.x + i.x) / 2;
          t.lineTo(o, n ? i.y : e.y), t.lineTo(o, n ? e.y : i.y);
        } else "after" === a && !n || "after" !== a && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);

        t.lineTo(i.x, i.y);
      } else i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y);
    }
  },
      ot = at;
  G.clear = at.clear, G.drawRoundedRectangle = function (t) {
    t.beginPath(), at.roundedRect.apply(at, arguments);
  };
  var rt = {
    _set: function _set(t, e) {
      return G.merge(this[t] || (this[t] = {}), e);
    }
  };

  rt._set("global", {
    defaultColor: "rgba(0,0,0,0.1)",
    defaultFontColor: "#666",
    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    defaultFontSize: 12,
    defaultFontStyle: "normal",
    defaultLineHeight: 1.2,
    showLines: !0
  });

  var st = rt,
      lt = G.valueOrDefault;
  var dt = {
    toLineHeight: function toLineHeight(t, e) {
      var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
      if (!i || "normal" === i[1]) return 1.2 * e;

      switch (t = +i[2], i[3]) {
        case "px":
          return t;

        case "%":
          t /= 100;
      }

      return e * t;
    },
    toPadding: function toPadding(t) {
      var e, i, n, a;
      return G.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, n = +t.bottom || 0, a = +t.left || 0) : e = i = n = a = +t || 0, {
        top: e,
        right: i,
        bottom: n,
        left: a,
        height: e + n,
        width: a + i
      };
    },
    _parseFont: function _parseFont(t) {
      var e = st.global,
          i = lt(t.fontSize, e.defaultFontSize),
          n = {
        family: lt(t.fontFamily, e.defaultFontFamily),
        lineHeight: G.options.toLineHeight(lt(t.lineHeight, e.defaultLineHeight), i),
        size: i,
        style: lt(t.fontStyle, e.defaultFontStyle),
        weight: null,
        string: ""
      };
      return n.string = function (t) {
        return !t || G.isNullOrUndef(t.size) || G.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
      }(n), n;
    },
    resolve: function resolve(t, e, i) {
      var n, a, o;

      for (n = 0, a = t.length; n < a; ++n) {
        if (void 0 !== (o = t[n]) && (void 0 !== e && "function" == typeof o && (o = o(e)), void 0 !== i && G.isArray(o) && (o = o[i]), void 0 !== o)) return o;
      }
    }
  },
      ut = G,
      ht = $,
      ct = ot,
      ft = dt;
  ut.easing = ht, ut.canvas = ct, ut.options = ft;

  var gt = function gt(t) {
    ut.extend(this, t), this.initialize.apply(this, arguments);
  };

  ut.extend(gt.prototype, {
    initialize: function initialize() {
      this.hidden = !1;
    },
    pivot: function pivot() {
      var t = this;
      return t._view || (t._view = ut.clone(t._model)), t._start = {}, t;
    },
    transition: function transition(t) {
      var e = this,
          i = e._model,
          n = e._start,
          a = e._view;
      return i && 1 !== t ? (a || (a = e._view = {}), n || (n = e._start = {}), function (t, e, i, n) {
        var a,
            o,
            r,
            s,
            l,
            d,
            u,
            h,
            c,
            f = Object.keys(i);

        for (a = 0, o = f.length; a < o; ++a) {
          if (d = i[r = f[a]], e.hasOwnProperty(r) || (e[r] = d), (s = e[r]) !== d && "_" !== r[0]) {
            if (t.hasOwnProperty(r) || (t[r] = s), (u = _typeof(d)) == _typeof(l = t[r])) if ("string" === u) {
              if ((h = X(l)).valid && (c = X(d)).valid) {
                e[r] = c.mix(h, n).rgbString();
                continue;
              }
            } else if (ut.isFinite(l) && ut.isFinite(d)) {
              e[r] = l + (d - l) * n;
              continue;
            }
            e[r] = d;
          }
        }
      }(n, a, i, t), e) : (e._view = i, e._start = null, e);
    },
    tooltipPosition: function tooltipPosition() {
      return {
        x: this._model.x,
        y: this._model.y
      };
    },
    hasValue: function hasValue() {
      return ut.isNumber(this._model.x) && ut.isNumber(this._model.y);
    }
  }), gt.extend = ut.inherits;
  var pt = gt,
      mt = pt.extend({
    chart: null,
    currentStep: 0,
    numSteps: 60,
    easing: "",
    render: null,
    onAnimationProgress: null,
    onAnimationComplete: null
  }),
      vt = mt;
  Object.defineProperty(mt.prototype, "animationObject", {
    get: function get() {
      return this;
    }
  }), Object.defineProperty(mt.prototype, "chartInstance", {
    get: function get() {
      return this.chart;
    },
    set: function set(t) {
      this.chart = t;
    }
  }), st._set("global", {
    animation: {
      duration: 1e3,
      easing: "easeOutQuart",
      onProgress: ut.noop,
      onComplete: ut.noop
    }
  });
  var bt = {
    animations: [],
    request: null,
    addAnimation: function addAnimation(t, e, i, n) {
      var a,
          o,
          r = this.animations;

      for (e.chart = t, e.startTime = Date.now(), e.duration = i, n || (t.animating = !0), a = 0, o = r.length; a < o; ++a) {
        if (r[a].chart === t) return void (r[a] = e);
      }

      r.push(e), 1 === r.length && this.requestAnimationFrame();
    },
    cancelAnimation: function cancelAnimation(t) {
      var e = ut.findIndex(this.animations, function (e) {
        return e.chart === t;
      });
      -1 !== e && (this.animations.splice(e, 1), t.animating = !1);
    },
    requestAnimationFrame: function requestAnimationFrame() {
      var t = this;
      null === t.request && (t.request = ut.requestAnimFrame.call(window, function () {
        t.request = null, t.startDigest();
      }));
    },
    startDigest: function startDigest() {
      this.advance(), this.animations.length > 0 && this.requestAnimationFrame();
    },
    advance: function advance() {
      for (var t, e, i, n, a = this.animations, o = 0; o < a.length;) {
        e = (t = a[o]).chart, i = t.numSteps, n = Math.floor((Date.now() - t.startTime) / t.duration * i) + 1, t.currentStep = Math.min(n, i), ut.callback(t.render, [e, t], e), ut.callback(t.onAnimationProgress, [t], e), t.currentStep >= i ? (ut.callback(t.onAnimationComplete, [t], e), e.animating = !1, a.splice(o, 1)) : ++o;
      }
    }
  },
      xt = ut.options.resolve,
      yt = ["push", "pop", "shift", "splice", "unshift"];

  function kt(t, e) {
    var i = t._chartjs;

    if (i) {
      var n = i.listeners,
          a = n.indexOf(e);
      -1 !== a && n.splice(a, 1), n.length > 0 || (yt.forEach(function (e) {
        delete t[e];
      }), delete t._chartjs);
    }
  }

  var wt = function wt(t, e) {
    this.initialize(t, e);
  };

  ut.extend(wt.prototype, {
    datasetElementType: null,
    dataElementType: null,
    initialize: function initialize(t, e) {
      this.chart = t, this.index = e, this.linkScales(), this.addElements();
    },
    updateIndex: function updateIndex(t) {
      this.index = t;
    },
    linkScales: function linkScales() {
      var t = this,
          e = t.getMeta(),
          i = t.getDataset();
      null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id);
    },
    getDataset: function getDataset() {
      return this.chart.data.datasets[this.index];
    },
    getMeta: function getMeta() {
      return this.chart.getDatasetMeta(this.index);
    },
    getScaleForId: function getScaleForId(t) {
      return this.chart.scales[t];
    },
    _getValueScaleId: function _getValueScaleId() {
      return this.getMeta().yAxisID;
    },
    _getIndexScaleId: function _getIndexScaleId() {
      return this.getMeta().xAxisID;
    },
    _getValueScale: function _getValueScale() {
      return this.getScaleForId(this._getValueScaleId());
    },
    _getIndexScale: function _getIndexScale() {
      return this.getScaleForId(this._getIndexScaleId());
    },
    reset: function reset() {
      this.update(!0);
    },
    destroy: function destroy() {
      this._data && kt(this._data, this);
    },
    createMetaDataset: function createMetaDataset() {
      var t = this.datasetElementType;
      return t && new t({
        _chart: this.chart,
        _datasetIndex: this.index
      });
    },
    createMetaData: function createMetaData(t) {
      var e = this.dataElementType;
      return e && new e({
        _chart: this.chart,
        _datasetIndex: this.index,
        _index: t
      });
    },
    addElements: function addElements() {
      var t,
          e,
          i = this.getMeta(),
          n = this.getDataset().data || [],
          a = i.data;

      for (t = 0, e = n.length; t < e; ++t) {
        a[t] = a[t] || this.createMetaData(t);
      }

      i.dataset = i.dataset || this.createMetaDataset();
    },
    addElementAndReset: function addElementAndReset(t) {
      var e = this.createMetaData(t);
      this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
    },
    buildOrUpdateElements: function buildOrUpdateElements() {
      var t,
          e,
          i = this,
          n = i.getDataset(),
          a = n.data || (n.data = []);
      i._data !== a && (i._data && kt(i._data, i), a && Object.isExtensible(a) && (e = i, (t = a)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: {
          listeners: [e]
        }
      }), yt.forEach(function (e) {
        var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
            n = t[e];
        Object.defineProperty(t, e, {
          configurable: !0,
          enumerable: !1,
          value: function value() {
            var e = Array.prototype.slice.call(arguments),
                a = n.apply(this, e);
            return ut.each(t._chartjs.listeners, function (t) {
              "function" == typeof t[i] && t[i].apply(t, e);
            }), a;
          }
        });
      }))), i._data = a), i.resyncElements();
    },
    update: ut.noop,
    transition: function transition(t) {
      for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) {
        i[a].transition(t);
      }

      e.dataset && e.dataset.transition(t);
    },
    draw: function draw() {
      var t = this.getMeta(),
          e = t.data || [],
          i = e.length,
          n = 0;

      for (t.dataset && t.dataset.draw(); n < i; ++n) {
        e[n].draw();
      }
    },
    removeHoverStyle: function removeHoverStyle(t) {
      ut.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = this.chart.data.datasets[t._datasetIndex],
          i = t._index,
          n = t.custom || {},
          a = t._model,
          o = ut.getHoverColor;
      t.$previousStyle = {
        backgroundColor: a.backgroundColor,
        borderColor: a.borderColor,
        borderWidth: a.borderWidth
      }, a.backgroundColor = xt([n.hoverBackgroundColor, e.hoverBackgroundColor, o(a.backgroundColor)], void 0, i), a.borderColor = xt([n.hoverBorderColor, e.hoverBorderColor, o(a.borderColor)], void 0, i), a.borderWidth = xt([n.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth], void 0, i);
    },
    resyncElements: function resyncElements() {
      var t = this.getMeta(),
          e = this.getDataset().data,
          i = t.data.length,
          n = e.length;
      n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i);
    },
    insertElements: function insertElements(t, e) {
      for (var i = 0; i < e; ++i) {
        this.addElementAndReset(t + i);
      }
    },
    onDataPush: function onDataPush() {
      var t = arguments.length;
      this.insertElements(this.getDataset().data.length - t, t);
    },
    onDataPop: function onDataPop() {
      this.getMeta().data.pop();
    },
    onDataShift: function onDataShift() {
      this.getMeta().data.shift();
    },
    onDataSplice: function onDataSplice(t, e) {
      this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
    },
    onDataUnshift: function onDataUnshift() {
      this.insertElements(0, arguments.length);
    }
  }), wt.extend = ut.inherits;
  var Mt = wt;

  st._set("global", {
    elements: {
      arc: {
        backgroundColor: st.global.defaultColor,
        borderColor: "#fff",
        borderWidth: 2,
        borderAlign: "center"
      }
    }
  });

  var _t = pt.extend({
    inLabelRange: function inLabelRange(t) {
      var e = this._view;
      return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
    },
    inRange: function inRange(t, e) {
      var i = this._view;

      if (i) {
        for (var n = ut.getAngleFromPoint(i, {
          x: t,
          y: e
        }), a = n.angle, o = n.distance, r = i.startAngle, s = i.endAngle; s < r;) {
          s += 2 * Math.PI;
        }

        for (; a > s;) {
          a -= 2 * Math.PI;
        }

        for (; a < r;) {
          a += 2 * Math.PI;
        }

        var l = a >= r && a <= s,
            d = o >= i.innerRadius && o <= i.outerRadius;
        return l && d;
      }

      return !1;
    },
    getCenterPoint: function getCenterPoint() {
      var t = this._view,
          e = (t.startAngle + t.endAngle) / 2,
          i = (t.innerRadius + t.outerRadius) / 2;
      return {
        x: t.x + Math.cos(e) * i,
        y: t.y + Math.sin(e) * i
      };
    },
    getArea: function getArea() {
      var t = this._view;
      return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
    },
    tooltipPosition: function tooltipPosition() {
      var t = this._view,
          e = t.startAngle + (t.endAngle - t.startAngle) / 2,
          i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
      return {
        x: t.x + Math.cos(e) * i,
        y: t.y + Math.sin(e) * i
      };
    },
    draw: function draw() {
      var t,
          e = this._chart.ctx,
          i = this._view,
          n = i.startAngle,
          a = i.endAngle,
          o = "inner" === i.borderAlign ? .33 : 0;
      e.save(), e.beginPath(), e.arc(i.x, i.y, Math.max(i.outerRadius - o, 0), n, a), e.arc(i.x, i.y, i.innerRadius, a, n, !0), e.closePath(), e.fillStyle = i.backgroundColor, e.fill(), i.borderWidth && ("inner" === i.borderAlign ? (e.beginPath(), t = o / i.outerRadius, e.arc(i.x, i.y, i.outerRadius, n - t, a + t), i.innerRadius > o ? (t = o / i.innerRadius, e.arc(i.x, i.y, i.innerRadius - o, a + t, n - t, !0)) : e.arc(i.x, i.y, o, a + Math.PI / 2, n - Math.PI / 2), e.closePath(), e.clip(), e.beginPath(), e.arc(i.x, i.y, i.outerRadius, n, a), e.arc(i.x, i.y, i.innerRadius, a, n, !0), e.closePath(), e.lineWidth = 2 * i.borderWidth, e.lineJoin = "round") : (e.lineWidth = i.borderWidth, e.lineJoin = "bevel"), e.strokeStyle = i.borderColor, e.stroke()), e.restore();
    }
  }),
      Ct = ut.valueOrDefault,
      St = st.global.defaultColor;

  st._set("global", {
    elements: {
      line: {
        tension: .4,
        backgroundColor: St,
        borderWidth: 3,
        borderColor: St,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        capBezierPoints: !0,
        fill: !0
      }
    }
  });

  var Pt = pt.extend({
    draw: function draw() {
      var t,
          e,
          i,
          n,
          a = this._view,
          o = this._chart.ctx,
          r = a.spanGaps,
          s = this._children.slice(),
          l = st.global,
          d = l.elements.line,
          u = -1;

      for (this._loop && s.length && s.push(s[0]), o.save(), o.lineCap = a.borderCapStyle || d.borderCapStyle, o.setLineDash && o.setLineDash(a.borderDash || d.borderDash), o.lineDashOffset = Ct(a.borderDashOffset, d.borderDashOffset), o.lineJoin = a.borderJoinStyle || d.borderJoinStyle, o.lineWidth = Ct(a.borderWidth, d.borderWidth), o.strokeStyle = a.borderColor || l.defaultColor, o.beginPath(), u = -1, t = 0; t < s.length; ++t) {
        e = s[t], i = ut.previousItem(s, t), n = e._view, 0 === t ? n.skip || (o.moveTo(n.x, n.y), u = t) : (i = -1 === u ? i : s[u], n.skip || (u !== t - 1 && !r || -1 === u ? o.moveTo(n.x, n.y) : ut.canvas.lineTo(o, i._view, e._view), u = t));
      }

      o.stroke(), o.restore();
    }
  }),
      It = ut.valueOrDefault,
      At = st.global.defaultColor;

  function Dt(t) {
    var e = this._view;
    return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
  }

  st._set("global", {
    elements: {
      point: {
        radius: 3,
        pointStyle: "circle",
        backgroundColor: At,
        borderColor: At,
        borderWidth: 1,
        hitRadius: 1,
        hoverRadius: 4,
        hoverBorderWidth: 1
      }
    }
  });

  var Tt = pt.extend({
    inRange: function inRange(t, e) {
      var i = this._view;
      return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2);
    },
    inLabelRange: Dt,
    inXRange: Dt,
    inYRange: function inYRange(t) {
      var e = this._view;
      return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
    },
    getCenterPoint: function getCenterPoint() {
      var t = this._view;
      return {
        x: t.x,
        y: t.y
      };
    },
    getArea: function getArea() {
      return Math.PI * Math.pow(this._view.radius, 2);
    },
    tooltipPosition: function tooltipPosition() {
      var t = this._view;
      return {
        x: t.x,
        y: t.y,
        padding: t.radius + t.borderWidth
      };
    },
    draw: function draw(t) {
      var e = this._view,
          i = this._chart.ctx,
          n = e.pointStyle,
          a = e.rotation,
          o = e.radius,
          r = e.x,
          s = e.y,
          l = st.global,
          d = l.defaultColor;
      e.skip || (void 0 === t || ut.canvas._isPointInArea(e, t)) && (i.strokeStyle = e.borderColor || d, i.lineWidth = It(e.borderWidth, l.elements.point.borderWidth), i.fillStyle = e.backgroundColor || d, ut.canvas.drawPoint(i, n, o, r, s, a));
    }
  }),
      Ft = st.global.defaultColor;

  function Lt(t) {
    return t && void 0 !== t.width;
  }

  function Rt(t) {
    var e, i, n, a, o;
    return Lt(t) ? (o = t.width / 2, e = t.x - o, i = t.x + o, n = Math.min(t.y, t.base), a = Math.max(t.y, t.base)) : (o = t.height / 2, e = Math.min(t.x, t.base), i = Math.max(t.x, t.base), n = t.y - o, a = t.y + o), {
      left: e,
      top: n,
      right: i,
      bottom: a
    };
  }

  function Ot(t, e, i) {
    return t === e ? i : t === i ? e : t;
  }

  function zt(t, e, i) {
    var n,
        a,
        o,
        r,
        s = t.borderWidth,
        l = function (t) {
      var e = t.borderSkipped,
          i = {};
      return e ? (t.horizontal ? t.base > t.x && (e = Ot(e, "left", "right")) : t.base < t.y && (e = Ot(e, "bottom", "top")), i[e] = !0, i) : i;
    }(t);

    return ut.isObject(s) ? (n = +s.top || 0, a = +s.right || 0, o = +s.bottom || 0, r = +s.left || 0) : n = a = o = r = +s || 0, {
      t: l.top || n < 0 ? 0 : n > i ? i : n,
      r: l.right || a < 0 ? 0 : a > e ? e : a,
      b: l.bottom || o < 0 ? 0 : o > i ? i : o,
      l: l.left || r < 0 ? 0 : r > e ? e : r
    };
  }

  function Bt(t, e, i) {
    var n = null === e,
        a = null === i,
        o = !(!t || n && a) && Rt(t);
    return o && (n || e >= o.left && e <= o.right) && (a || i >= o.top && i <= o.bottom);
  }

  st._set("global", {
    elements: {
      rectangle: {
        backgroundColor: Ft,
        borderColor: Ft,
        borderSkipped: "bottom",
        borderWidth: 0
      }
    }
  });

  var Nt = pt.extend({
    draw: function draw() {
      var t = this._chart.ctx,
          e = this._view,
          i = function (t) {
        var e = Rt(t),
            i = e.right - e.left,
            n = e.bottom - e.top,
            a = zt(t, i / 2, n / 2);
        return {
          outer: {
            x: e.left,
            y: e.top,
            w: i,
            h: n
          },
          inner: {
            x: e.left + a.l,
            y: e.top + a.t,
            w: i - a.l - a.r,
            h: n - a.t - a.b
          }
        };
      }(e),
          n = i.outer,
          a = i.inner;

      t.fillStyle = e.backgroundColor, t.fillRect(n.x, n.y, n.w, n.h), n.w === a.w && n.h === a.h || (t.save(), t.beginPath(), t.rect(n.x, n.y, n.w, n.h), t.clip(), t.fillStyle = e.borderColor, t.rect(a.x, a.y, a.w, a.h), t.fill("evenodd"), t.restore());
    },
    height: function height() {
      var t = this._view;
      return t.base - t.y;
    },
    inRange: function inRange(t, e) {
      return Bt(this._view, t, e);
    },
    inLabelRange: function inLabelRange(t, e) {
      var i = this._view;
      return Lt(i) ? Bt(i, t, null) : Bt(i, null, e);
    },
    inXRange: function inXRange(t) {
      return Bt(this._view, t, null);
    },
    inYRange: function inYRange(t) {
      return Bt(this._view, null, t);
    },
    getCenterPoint: function getCenterPoint() {
      var t,
          e,
          i = this._view;
      return Lt(i) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {
        x: t,
        y: e
      };
    },
    getArea: function getArea() {
      var t = this._view;
      return Lt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base);
    },
    tooltipPosition: function tooltipPosition() {
      var t = this._view;
      return {
        x: t.x,
        y: t.y
      };
    }
  }),
      Wt = {},
      Vt = _t,
      Et = Pt,
      Ht = Tt,
      jt = Nt;
  Wt.Arc = Vt, Wt.Line = Et, Wt.Point = Ht, Wt.Rectangle = jt;
  var qt = ut.options.resolve;

  st._set("bar", {
    hover: {
      mode: "label"
    },
    scales: {
      xAxes: [{
        type: "category",
        categoryPercentage: .8,
        barPercentage: .9,
        offset: !0,
        gridLines: {
          offsetGridLines: !0
        }
      }],
      yAxes: [{
        type: "linear"
      }]
    }
  });

  var Yt = Mt.extend({
    dataElementType: Wt.Rectangle,
    initialize: function initialize() {
      var t;
      Mt.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0;
    },
    update: function update(t) {
      var e,
          i,
          n = this.getMeta().data;

      for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) {
        this.updateElement(n[e], e, t);
      }
    },
    updateElement: function updateElement(t, e, i) {
      var n = this,
          a = n.getMeta(),
          o = n.getDataset(),
          r = n._resolveElementOptions(t, e);

      t._xScale = n.getScaleForId(a.xAxisID), t._yScale = n.getScaleForId(a.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
        backgroundColor: r.backgroundColor,
        borderColor: r.borderColor,
        borderSkipped: r.borderSkipped,
        borderWidth: r.borderWidth,
        datasetLabel: o.label,
        label: n.chart.data.labels[e]
      }, n._updateElementGeometry(t, e, i), t.pivot();
    },
    _updateElementGeometry: function _updateElementGeometry(t, e, i) {
      var n = this,
          a = t._model,
          o = n._getValueScale(),
          r = o.getBasePixel(),
          s = o.isHorizontal(),
          l = n._ruler || n.getRuler(),
          d = n.calculateBarValuePixels(n.index, e),
          u = n.calculateBarIndexPixels(n.index, e, l);

      a.horizontal = s, a.base = i ? r : d.base, a.x = s ? i ? r : d.head : u.center, a.y = s ? u.center : i ? r : d.head, a.height = s ? u.size : void 0, a.width = s ? void 0 : u.size;
    },
    _getStacks: function _getStacks(t) {
      var e,
          i,
          n = this.chart,
          a = this._getIndexScale().options.stacked,
          o = void 0 === t ? n.data.datasets.length : t + 1,
          r = [];

      for (e = 0; e < o; ++e) {
        (i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === r.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === r.indexOf(i.stack))) && r.push(i.stack);
      }

      return r;
    },
    getStackCount: function getStackCount() {
      return this._getStacks().length;
    },
    getStackIndex: function getStackIndex(t, e) {
      var i = this._getStacks(t),
          n = void 0 !== e ? i.indexOf(e) : -1;

      return -1 === n ? i.length - 1 : n;
    },
    getRuler: function getRuler() {
      var t,
          e,
          i = this._getIndexScale(),
          n = this.getStackCount(),
          a = this.index,
          o = i.isHorizontal(),
          r = o ? i.left : i.top,
          s = r + (o ? i.width : i.height),
          l = [];

      for (t = 0, e = this.getMeta().data.length; t < e; ++t) {
        l.push(i.getPixelForValue(null, t, a));
      }

      return {
        min: ut.isNullOrUndef(i.options.barThickness) ? function (t, e) {
          var i,
              n,
              a,
              o,
              r = t.isHorizontal() ? t.width : t.height,
              s = t.getTicks();

          for (a = 1, o = e.length; a < o; ++a) {
            r = Math.min(r, Math.abs(e[a] - e[a - 1]));
          }

          for (a = 0, o = s.length; a < o; ++a) {
            n = t.getPixelForTick(a), r = a > 0 ? Math.min(r, n - i) : r, i = n;
          }

          return r;
        }(i, l) : -1,
        pixels: l,
        start: r,
        end: s,
        stackCount: n,
        scale: i
      };
    },
    calculateBarValuePixels: function calculateBarValuePixels(t, e) {
      var i,
          n,
          a,
          o,
          r,
          s,
          l = this.chart,
          d = this.getMeta(),
          u = this._getValueScale(),
          h = u.isHorizontal(),
          c = l.data.datasets,
          f = +u.getRightValue(c[t].data[e]),
          g = u.options.minBarLength,
          p = u.options.stacked,
          m = d.stack,
          v = 0;

      if (p || void 0 === p && void 0 !== m) for (i = 0; i < t; ++i) {
        (n = l.getDatasetMeta(i)).bar && n.stack === m && n.controller._getValueScaleId() === u.id && l.isDatasetVisible(i) && (a = +u.getRightValue(c[i].data[e]), (f < 0 && a < 0 || f >= 0 && a > 0) && (v += a));
      }
      return o = u.getPixelForValue(v), s = (r = u.getPixelForValue(v + f)) - o, void 0 !== g && Math.abs(s) < g && (s = g, r = f >= 0 && !h || f < 0 && h ? o - g : o + g), {
        size: s,
        base: o,
        head: r,
        center: r + s / 2
      };
    },
    calculateBarIndexPixels: function calculateBarIndexPixels(t, e, i) {
      var n = i.scale.options,
          a = "flex" === n.barThickness ? function (t, e, i) {
        var n,
            a = e.pixels,
            o = a[t],
            r = t > 0 ? a[t - 1] : null,
            s = t < a.length - 1 ? a[t + 1] : null,
            l = i.categoryPercentage;
        return null === r && (r = o - (null === s ? e.end - e.start : s - o)), null === s && (s = o + o - r), n = o - (o - Math.min(r, s)) / 2 * l, {
          chunk: Math.abs(s - r) / 2 * l / e.stackCount,
          ratio: i.barPercentage,
          start: n
        };
      }(e, i, n) : function (t, e, i) {
        var n,
            a,
            o = i.barThickness,
            r = e.stackCount,
            s = e.pixels[t];
        return ut.isNullOrUndef(o) ? (n = e.min * i.categoryPercentage, a = i.barPercentage) : (n = o * r, a = 1), {
          chunk: n / r,
          ratio: a,
          start: s - n / 2
        };
      }(e, i, n),
          o = this.getStackIndex(t, this.getMeta().stack),
          r = a.start + a.chunk * o + a.chunk / 2,
          s = Math.min(ut.valueOrDefault(n.maxBarThickness, 1 / 0), a.chunk * a.ratio);
      return {
        base: r - s / 2,
        head: r + s / 2,
        center: r,
        size: s
      };
    },
    draw: function draw() {
      var t = this.chart,
          e = this._getValueScale(),
          i = this.getMeta().data,
          n = this.getDataset(),
          a = i.length,
          o = 0;

      for (ut.canvas.clipArea(t.ctx, t.chartArea); o < a; ++o) {
        isNaN(e.getRightValue(n.data[o])) || i[o].draw();
      }

      ut.canvas.unclipArea(t.ctx);
    },
    _resolveElementOptions: function _resolveElementOptions(t, e) {
      var i,
          n,
          a,
          o = this.chart,
          r = o.data.datasets[this.index],
          s = t.custom || {},
          l = o.options.elements.rectangle,
          d = {},
          u = {
        chart: o,
        dataIndex: e,
        dataset: r,
        datasetIndex: this.index
      },
          h = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth"];

      for (i = 0, n = h.length; i < n; ++i) {
        d[a = h[i]] = qt([s[a], r[a], l[a]], u, e);
      }

      return d;
    }
  }),
      Ut = ut.valueOrDefault,
      Xt = ut.options.resolve;

  st._set("bubble", {
    hover: {
      mode: "single"
    },
    scales: {
      xAxes: [{
        type: "linear",
        position: "bottom",
        id: "x-axis-0"
      }],
      yAxes: [{
        type: "linear",
        position: "left",
        id: "y-axis-0"
      }]
    },
    tooltips: {
      callbacks: {
        title: function title() {
          return "";
        },
        label: function label(t, e) {
          var i = e.datasets[t.datasetIndex].label || "",
              n = e.datasets[t.datasetIndex].data[t.index];
          return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")";
        }
      }
    }
  });

  var Kt = Mt.extend({
    dataElementType: Wt.Point,
    update: function update(t) {
      var e = this,
          i = e.getMeta().data;
      ut.each(i, function (i, n) {
        e.updateElement(i, n, t);
      });
    },
    updateElement: function updateElement(t, e, i) {
      var n = this,
          a = n.getMeta(),
          o = t.custom || {},
          r = n.getScaleForId(a.xAxisID),
          s = n.getScaleForId(a.yAxisID),
          l = n._resolveElementOptions(t, e),
          d = n.getDataset().data[e],
          u = n.index,
          h = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == _typeof(d) ? d : NaN, e, u),
          c = i ? s.getBasePixel() : s.getPixelForValue(d, e, u);

      t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = u, t._index = e, t._model = {
        backgroundColor: l.backgroundColor,
        borderColor: l.borderColor,
        borderWidth: l.borderWidth,
        hitRadius: l.hitRadius,
        pointStyle: l.pointStyle,
        rotation: l.rotation,
        radius: i ? 0 : l.radius,
        skip: o.skip || isNaN(h) || isNaN(c),
        x: h,
        y: c
      }, t.pivot();
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          i = t._options,
          n = ut.getHoverColor;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
        radius: e.radius
      }, e.backgroundColor = Ut(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Ut(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Ut(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius;
    },
    _resolveElementOptions: function _resolveElementOptions(t, e) {
      var i,
          n,
          a,
          o = this.chart,
          r = o.data.datasets[this.index],
          s = t.custom || {},
          l = o.options.elements.point,
          d = r.data[e],
          u = {},
          h = {
        chart: o,
        dataIndex: e,
        dataset: r,
        datasetIndex: this.index
      },
          c = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];

      for (i = 0, n = c.length; i < n; ++i) {
        u[a = c[i]] = Xt([s[a], r[a], l[a]], h, e);
      }

      return u.radius = Xt([s.radius, d ? d.r : void 0, r.radius, l.radius], h, e), u;
    }
  }),
      Gt = ut.options.resolve,
      Zt = ut.valueOrDefault;

  st._set("doughnut", {
    animation: {
      animateRotate: !0,
      animateScale: !1
    },
    hover: {
      mode: "single"
    },
    legendCallback: function legendCallback(t) {
      var e = [];
      e.push('<ul class="' + t.id + '-legend">');
      var i = t.data,
          n = i.datasets,
          a = i.labels;
      if (n.length) for (var o = 0; o < n[0].data.length; ++o) {
        e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
      }
      return e.push("</ul>"), e.join("");
    },
    legend: {
      labels: {
        generateLabels: function generateLabels(t) {
          var e = t.data;
          return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
            var a = t.getDatasetMeta(0),
                o = e.datasets[0],
                r = a.data[n],
                s = r && r.custom || {},
                l = t.options.elements.arc;
            return {
              text: i,
              fillStyle: Gt([s.backgroundColor, o.backgroundColor, l.backgroundColor], void 0, n),
              strokeStyle: Gt([s.borderColor, o.borderColor, l.borderColor], void 0, n),
              lineWidth: Gt([s.borderWidth, o.borderWidth, l.borderWidth], void 0, n),
              hidden: isNaN(o.data[n]) || a.data[n].hidden,
              index: n
            };
          }) : [];
        }
      },
      onClick: function onClick(t, e) {
        var i,
            n,
            a,
            o = e.index,
            r = this.chart;

        for (i = 0, n = (r.data.datasets || []).length; i < n; ++i) {
          (a = r.getDatasetMeta(i)).data[o] && (a.data[o].hidden = !a.data[o].hidden);
        }

        r.update();
      }
    },
    cutoutPercentage: 50,
    rotation: -.5 * Math.PI,
    circumference: 2 * Math.PI,
    tooltips: {
      callbacks: {
        title: function title() {
          return "";
        },
        label: function label(t, e) {
          var i = e.labels[t.index],
              n = ": " + e.datasets[t.datasetIndex].data[t.index];
          return ut.isArray(i) ? (i = i.slice())[0] += n : i += n, i;
        }
      }
    }
  });

  var $t = Mt.extend({
    dataElementType: Wt.Arc,
    linkScales: ut.noop,
    getRingIndex: function getRingIndex(t) {
      for (var e = 0, i = 0; i < t; ++i) {
        this.chart.isDatasetVisible(i) && ++e;
      }

      return e;
    },
    update: function update(t) {
      var e,
          i,
          n = this,
          a = n.chart,
          o = a.chartArea,
          r = a.options,
          s = o.right - o.left,
          l = o.bottom - o.top,
          d = Math.min(s, l),
          u = {
        x: 0,
        y: 0
      },
          h = n.getMeta(),
          c = h.data,
          f = r.cutoutPercentage,
          g = r.circumference,
          p = n._getRingWeight(n.index);

      if (g < 2 * Math.PI) {
        var m = r.rotation % (2 * Math.PI),
            v = (m += 2 * Math.PI * (m >= Math.PI ? -1 : m < -Math.PI ? 1 : 0)) + g,
            b = {
          x: Math.cos(m),
          y: Math.sin(m)
        },
            x = {
          x: Math.cos(v),
          y: Math.sin(v)
        },
            y = m <= 0 && v >= 0 || m <= 2 * Math.PI && 2 * Math.PI <= v,
            k = m <= .5 * Math.PI && .5 * Math.PI <= v || m <= 2.5 * Math.PI && 2.5 * Math.PI <= v,
            w = m <= -Math.PI && -Math.PI <= v || m <= Math.PI && Math.PI <= v,
            M = m <= .5 * -Math.PI && .5 * -Math.PI <= v || m <= 1.5 * Math.PI && 1.5 * Math.PI <= v,
            _ = f / 100,
            C = {
          x: w ? -1 : Math.min(b.x * (b.x < 0 ? 1 : _), x.x * (x.x < 0 ? 1 : _)),
          y: M ? -1 : Math.min(b.y * (b.y < 0 ? 1 : _), x.y * (x.y < 0 ? 1 : _))
        },
            S = {
          x: y ? 1 : Math.max(b.x * (b.x > 0 ? 1 : _), x.x * (x.x > 0 ? 1 : _)),
          y: k ? 1 : Math.max(b.y * (b.y > 0 ? 1 : _), x.y * (x.y > 0 ? 1 : _))
        },
            P = {
          width: .5 * (S.x - C.x),
          height: .5 * (S.y - C.y)
        };

        d = Math.min(s / P.width, l / P.height), u = {
          x: -.5 * (S.x + C.x),
          y: -.5 * (S.y + C.y)
        };
      }

      for (e = 0, i = c.length; e < i; ++e) {
        c[e]._options = n._resolveElementOptions(c[e], e);
      }

      for (a.borderWidth = n.getMaxBorderWidth(), a.outerRadius = Math.max((d - a.borderWidth) / 2, 0), a.innerRadius = Math.max(f ? a.outerRadius / 100 * f : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / (n._getVisibleDatasetWeightTotal() || 1), a.offsetX = u.x * a.outerRadius, a.offsetY = u.y * a.outerRadius, h.total = n.calculateTotal(), n.outerRadius = a.outerRadius - a.radiusLength * n._getRingWeightOffset(n.index), n.innerRadius = Math.max(n.outerRadius - a.radiusLength * p, 0), e = 0, i = c.length; e < i; ++e) {
        n.updateElement(c[e], e, t);
      }
    },
    updateElement: function updateElement(t, e, i) {
      var n = this,
          a = n.chart,
          o = a.chartArea,
          r = a.options,
          s = r.animation,
          l = (o.left + o.right) / 2,
          d = (o.top + o.bottom) / 2,
          u = r.rotation,
          h = r.rotation,
          c = n.getDataset(),
          f = i && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(c.data[e]) * (r.circumference / (2 * Math.PI)),
          g = i && s.animateScale ? 0 : n.innerRadius,
          p = i && s.animateScale ? 0 : n.outerRadius,
          m = t._options || {};
      ut.extend(t, {
        _datasetIndex: n.index,
        _index: e,
        _model: {
          backgroundColor: m.backgroundColor,
          borderColor: m.borderColor,
          borderWidth: m.borderWidth,
          borderAlign: m.borderAlign,
          x: l + a.offsetX,
          y: d + a.offsetY,
          startAngle: u,
          endAngle: h,
          circumference: f,
          outerRadius: p,
          innerRadius: g,
          label: ut.valueAtIndexOrDefault(c.label, e, a.data.labels[e])
        }
      });
      var v = t._model;
      i && s.animateRotate || (v.startAngle = 0 === e ? r.rotation : n.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot();
    },
    calculateTotal: function calculateTotal() {
      var t,
          e = this.getDataset(),
          i = this.getMeta(),
          n = 0;
      return ut.each(i.data, function (i, a) {
        t = e.data[a], isNaN(t) || i.hidden || (n += Math.abs(t));
      }), n;
    },
    calculateCircumference: function calculateCircumference(t) {
      var e = this.getMeta().total;
      return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
    },
    getMaxBorderWidth: function getMaxBorderWidth(t) {
      var e,
          i,
          n,
          a,
          o,
          r,
          s,
          l,
          d = 0,
          u = this.chart;
      if (!t) for (e = 0, i = u.data.datasets.length; e < i; ++e) {
        if (u.isDatasetVisible(e)) {
          t = (n = u.getDatasetMeta(e)).data, e !== this.index && (o = n.controller);
          break;
        }
      }
      if (!t) return 0;

      for (e = 0, i = t.length; e < i; ++e) {
        a = t[e], "inner" !== (r = o ? o._resolveElementOptions(a, e) : a._options).borderAlign && (s = r.borderWidth, d = (l = r.hoverBorderWidth) > (d = s > d ? s : d) ? l : d);
      }

      return d;
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          i = t._options,
          n = ut.getHoverColor;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth
      }, e.backgroundColor = Zt(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Zt(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Zt(i.hoverBorderWidth, i.borderWidth);
    },
    _resolveElementOptions: function _resolveElementOptions(t, e) {
      var i,
          n,
          a,
          o = this.chart,
          r = this.getDataset(),
          s = t.custom || {},
          l = o.options.elements.arc,
          d = {},
          u = {
        chart: o,
        dataIndex: e,
        dataset: r,
        datasetIndex: this.index
      },
          h = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];

      for (i = 0, n = h.length; i < n; ++i) {
        d[a = h[i]] = Gt([s[a], r[a], l[a]], u, e);
      }

      return d;
    },
    _getRingWeightOffset: function _getRingWeightOffset(t) {
      for (var e = 0, i = 0; i < t; ++i) {
        this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
      }

      return e;
    },
    _getRingWeight: function _getRingWeight(t) {
      return Math.max(Zt(this.chart.data.datasets[t].weight, 1), 0);
    },
    _getVisibleDatasetWeightTotal: function _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length);
    }
  });

  st._set("horizontalBar", {
    hover: {
      mode: "index",
      axis: "y"
    },
    scales: {
      xAxes: [{
        type: "linear",
        position: "bottom"
      }],
      yAxes: [{
        type: "category",
        position: "left",
        categoryPercentage: .8,
        barPercentage: .9,
        offset: !0,
        gridLines: {
          offsetGridLines: !0
        }
      }]
    },
    elements: {
      rectangle: {
        borderSkipped: "left"
      }
    },
    tooltips: {
      mode: "index",
      axis: "y"
    }
  });

  var Jt = Yt.extend({
    _getValueScaleId: function _getValueScaleId() {
      return this.getMeta().xAxisID;
    },
    _getIndexScaleId: function _getIndexScaleId() {
      return this.getMeta().yAxisID;
    }
  }),
      Qt = ut.valueOrDefault,
      te = ut.options.resolve,
      ee = ut.canvas._isPointInArea;

  function ie(t, e) {
    return Qt(t.showLine, e.showLines);
  }

  st._set("line", {
    showLines: !0,
    spanGaps: !1,
    hover: {
      mode: "label"
    },
    scales: {
      xAxes: [{
        type: "category",
        id: "x-axis-0"
      }],
      yAxes: [{
        type: "linear",
        id: "y-axis-0"
      }]
    }
  });

  var ne = Mt.extend({
    datasetElementType: Wt.Line,
    dataElementType: Wt.Point,
    update: function update(t) {
      var e,
          i,
          n = this,
          a = n.getMeta(),
          o = a.dataset,
          r = a.data || [],
          s = n.getScaleForId(a.yAxisID),
          l = n.getDataset(),
          d = ie(l, n.chart.options);

      for (d && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o._scale = s, o._datasetIndex = n.index, o._children = r, o._model = n._resolveLineOptions(o), o.pivot()), e = 0, i = r.length; e < i; ++e) {
        n.updateElement(r[e], e, t);
      }

      for (d && 0 !== o._model.tension && n.updateBezierControlPoints(), e = 0, i = r.length; e < i; ++e) {
        r[e].pivot();
      }
    },
    updateElement: function updateElement(t, e, i) {
      var n,
          a,
          o = this,
          r = o.getMeta(),
          s = t.custom || {},
          l = o.getDataset(),
          d = o.index,
          u = l.data[e],
          h = o.getScaleForId(r.yAxisID),
          c = o.getScaleForId(r.xAxisID),
          f = r.dataset._model,
          g = o._resolvePointOptions(t, e);

      n = c.getPixelForValue("object" == _typeof(u) ? u : NaN, e, d), a = i ? h.getBasePixel() : o.calculatePointY(u, e, d), t._xScale = c, t._yScale = h, t._options = g, t._datasetIndex = d, t._index = e, t._model = {
        x: n,
        y: a,
        skip: s.skip || isNaN(n) || isNaN(a),
        radius: g.radius,
        pointStyle: g.pointStyle,
        rotation: g.rotation,
        backgroundColor: g.backgroundColor,
        borderColor: g.borderColor,
        borderWidth: g.borderWidth,
        tension: Qt(s.tension, f ? f.tension : 0),
        steppedLine: !!f && f.steppedLine,
        hitRadius: g.hitRadius
      };
    },
    _resolvePointOptions: function _resolvePointOptions(t, e) {
      var i,
          n,
          a,
          o = this.chart,
          r = o.data.datasets[this.index],
          s = t.custom || {},
          l = o.options.elements.point,
          d = {},
          u = {
        chart: o,
        dataIndex: e,
        dataset: r,
        datasetIndex: this.index
      },
          h = {
        backgroundColor: "pointBackgroundColor",
        borderColor: "pointBorderColor",
        borderWidth: "pointBorderWidth",
        hitRadius: "pointHitRadius",
        hoverBackgroundColor: "pointHoverBackgroundColor",
        hoverBorderColor: "pointHoverBorderColor",
        hoverBorderWidth: "pointHoverBorderWidth",
        hoverRadius: "pointHoverRadius",
        pointStyle: "pointStyle",
        radius: "pointRadius",
        rotation: "pointRotation"
      },
          c = Object.keys(h);

      for (i = 0, n = c.length; i < n; ++i) {
        d[a = c[i]] = te([s[a], r[h[a]], r[a], l[a]], u, e);
      }

      return d;
    },
    _resolveLineOptions: function _resolveLineOptions(t) {
      var e,
          i,
          n,
          a = this.chart,
          o = a.data.datasets[this.index],
          r = t.custom || {},
          s = a.options,
          l = s.elements.line,
          d = {},
          u = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill", "cubicInterpolationMode"];

      for (e = 0, i = u.length; e < i; ++e) {
        d[n = u[e]] = te([r[n], o[n], l[n]]);
      }

      return d.spanGaps = Qt(o.spanGaps, s.spanGaps), d.tension = Qt(o.lineTension, l.tension), d.steppedLine = te([r.steppedLine, o.steppedLine, l.stepped]), d;
    },
    calculatePointY: function calculatePointY(t, e, i) {
      var n,
          a,
          o,
          r = this.chart,
          s = this.getMeta(),
          l = this.getScaleForId(s.yAxisID),
          d = 0,
          u = 0;

      if (l.options.stacked) {
        for (n = 0; n < i; n++) {
          if (a = r.data.datasets[n], "line" === (o = r.getDatasetMeta(n)).type && o.yAxisID === l.id && r.isDatasetVisible(n)) {
            var h = Number(l.getRightValue(a.data[e]));
            h < 0 ? u += h || 0 : d += h || 0;
          }
        }

        var c = Number(l.getRightValue(t));
        return c < 0 ? l.getPixelForValue(u + c) : l.getPixelForValue(d + c);
      }

      return l.getPixelForValue(t);
    },
    updateBezierControlPoints: function updateBezierControlPoints() {
      var t,
          e,
          i,
          n,
          a = this.chart,
          o = this.getMeta(),
          r = o.dataset._model,
          s = a.chartArea,
          l = o.data || [];

      function d(t, e, i) {
        return Math.max(Math.min(t, i), e);
      }

      if (r.spanGaps && (l = l.filter(function (t) {
        return !t._model.skip;
      })), "monotone" === r.cubicInterpolationMode) ut.splineCurveMonotone(l);else for (t = 0, e = l.length; t < e; ++t) {
        i = l[t]._model, n = ut.splineCurve(ut.previousItem(l, t)._model, i, ut.nextItem(l, t)._model, r.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
      }
      if (a.options.elements.line.capBezierPoints) for (t = 0, e = l.length; t < e; ++t) {
        i = l[t]._model, ee(i, s) && (t > 0 && ee(l[t - 1]._model, s) && (i.controlPointPreviousX = d(i.controlPointPreviousX, s.left, s.right), i.controlPointPreviousY = d(i.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && ee(l[t + 1]._model, s) && (i.controlPointNextX = d(i.controlPointNextX, s.left, s.right), i.controlPointNextY = d(i.controlPointNextY, s.top, s.bottom)));
      }
    },
    draw: function draw() {
      var t,
          e = this.chart,
          i = this.getMeta(),
          n = i.data || [],
          a = e.chartArea,
          o = n.length,
          r = 0;

      for (ie(this.getDataset(), e.options) && (t = (i.dataset._model.borderWidth || 0) / 2, ut.canvas.clipArea(e.ctx, {
        left: a.left,
        right: a.right,
        top: a.top - t,
        bottom: a.bottom + t
      }), i.dataset.draw(), ut.canvas.unclipArea(e.ctx)); r < o; ++r) {
        n[r].draw(a);
      }
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          i = t._options,
          n = ut.getHoverColor;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
        radius: e.radius
      }, e.backgroundColor = Qt(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = Qt(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = Qt(i.hoverBorderWidth, i.borderWidth), e.radius = Qt(i.hoverRadius, i.radius);
    }
  }),
      ae = ut.options.resolve;

  st._set("polarArea", {
    scale: {
      type: "radialLinear",
      angleLines: {
        display: !1
      },
      gridLines: {
        circular: !0
      },
      pointLabels: {
        display: !1
      },
      ticks: {
        beginAtZero: !0
      }
    },
    animation: {
      animateRotate: !0,
      animateScale: !0
    },
    startAngle: -.5 * Math.PI,
    legendCallback: function legendCallback(t) {
      var e = [];
      e.push('<ul class="' + t.id + '-legend">');
      var i = t.data,
          n = i.datasets,
          a = i.labels;
      if (n.length) for (var o = 0; o < n[0].data.length; ++o) {
        e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
      }
      return e.push("</ul>"), e.join("");
    },
    legend: {
      labels: {
        generateLabels: function generateLabels(t) {
          var e = t.data;
          return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
            var a = t.getDatasetMeta(0),
                o = e.datasets[0],
                r = a.data[n].custom || {},
                s = t.options.elements.arc;
            return {
              text: i,
              fillStyle: ae([r.backgroundColor, o.backgroundColor, s.backgroundColor], void 0, n),
              strokeStyle: ae([r.borderColor, o.borderColor, s.borderColor], void 0, n),
              lineWidth: ae([r.borderWidth, o.borderWidth, s.borderWidth], void 0, n),
              hidden: isNaN(o.data[n]) || a.data[n].hidden,
              index: n
            };
          }) : [];
        }
      },
      onClick: function onClick(t, e) {
        var i,
            n,
            a,
            o = e.index,
            r = this.chart;

        for (i = 0, n = (r.data.datasets || []).length; i < n; ++i) {
          (a = r.getDatasetMeta(i)).data[o].hidden = !a.data[o].hidden;
        }

        r.update();
      }
    },
    tooltips: {
      callbacks: {
        title: function title() {
          return "";
        },
        label: function label(t, e) {
          return e.labels[t.index] + ": " + t.yLabel;
        }
      }
    }
  });

  var oe = Mt.extend({
    dataElementType: Wt.Arc,
    linkScales: ut.noop,
    update: function update(t) {
      var e,
          i,
          n,
          a = this,
          o = a.getDataset(),
          r = a.getMeta(),
          s = a.chart.options.startAngle || 0,
          l = a._starts = [],
          d = a._angles = [],
          u = r.data;

      for (a._updateRadius(), r.count = a.countVisibleElements(), e = 0, i = o.data.length; e < i; e++) {
        l[e] = s, n = a._computeAngle(e), d[e] = n, s += n;
      }

      for (e = 0, i = u.length; e < i; ++e) {
        u[e]._options = a._resolveElementOptions(u[e], e), a.updateElement(u[e], e, t);
      }
    },
    _updateRadius: function _updateRadius() {
      var t = this,
          e = t.chart,
          i = e.chartArea,
          n = e.options,
          a = Math.min(i.right - i.left, i.bottom - i.top);
      e.outerRadius = Math.max(a / 2, 0), e.innerRadius = Math.max(n.cutoutPercentage ? e.outerRadius / 100 * n.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength;
    },
    updateElement: function updateElement(t, e, i) {
      var n = this,
          a = n.chart,
          o = n.getDataset(),
          r = a.options,
          s = r.animation,
          l = a.scale,
          d = a.data.labels,
          u = l.xCenter,
          h = l.yCenter,
          c = r.startAngle,
          f = t.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
          g = n._starts[e],
          p = g + (t.hidden ? 0 : n._angles[e]),
          m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
          v = t._options || {};
      ut.extend(t, {
        _datasetIndex: n.index,
        _index: e,
        _scale: l,
        _model: {
          backgroundColor: v.backgroundColor,
          borderColor: v.borderColor,
          borderWidth: v.borderWidth,
          borderAlign: v.borderAlign,
          x: u,
          y: h,
          innerRadius: 0,
          outerRadius: i ? m : f,
          startAngle: i && s.animateRotate ? c : g,
          endAngle: i && s.animateRotate ? c : p,
          label: ut.valueAtIndexOrDefault(d, e, d[e])
        }
      }), t.pivot();
    },
    countVisibleElements: function countVisibleElements() {
      var t = this.getDataset(),
          e = this.getMeta(),
          i = 0;
      return ut.each(e.data, function (e, n) {
        isNaN(t.data[n]) || e.hidden || i++;
      }), i;
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          i = t._options,
          n = ut.getHoverColor,
          a = ut.valueOrDefault;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth
      }, e.backgroundColor = a(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = a(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = a(i.hoverBorderWidth, i.borderWidth);
    },
    _resolveElementOptions: function _resolveElementOptions(t, e) {
      var i,
          n,
          a,
          o = this.chart,
          r = this.getDataset(),
          s = t.custom || {},
          l = o.options.elements.arc,
          d = {},
          u = {
        chart: o,
        dataIndex: e,
        dataset: r,
        datasetIndex: this.index
      },
          h = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];

      for (i = 0, n = h.length; i < n; ++i) {
        d[a = h[i]] = ae([s[a], r[a], l[a]], u, e);
      }

      return d;
    },
    _computeAngle: function _computeAngle(t) {
      var e = this,
          i = this.getMeta().count,
          n = e.getDataset(),
          a = e.getMeta();
      if (isNaN(n.data[t]) || a.data[t].hidden) return 0;
      var o = {
        chart: e.chart,
        dataIndex: t,
        dataset: n,
        datasetIndex: e.index
      };
      return ae([e.chart.options.elements.arc.angle, 2 * Math.PI / i], o, t);
    }
  });
  st._set("pie", ut.clone(st.doughnut)), st._set("pie", {
    cutoutPercentage: 0
  });
  var re = $t,
      se = ut.valueOrDefault,
      le = ut.options.resolve;

  st._set("radar", {
    scale: {
      type: "radialLinear"
    },
    elements: {
      line: {
        tension: 0
      }
    }
  });

  var de = Mt.extend({
    datasetElementType: Wt.Line,
    dataElementType: Wt.Point,
    linkScales: ut.noop,
    update: function update(t) {
      var e,
          i,
          n = this,
          a = n.getMeta(),
          o = a.dataset,
          r = a.data || [],
          s = n.chart.scale,
          l = n.getDataset();

      for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o._scale = s, o._datasetIndex = n.index, o._children = r, o._loop = !0, o._model = n._resolveLineOptions(o), o.pivot(), e = 0, i = r.length; e < i; ++e) {
        n.updateElement(r[e], e, t);
      }

      for (n.updateBezierControlPoints(), e = 0, i = r.length; e < i; ++e) {
        r[e].pivot();
      }
    },
    updateElement: function updateElement(t, e, i) {
      var n = this,
          a = t.custom || {},
          o = n.getDataset(),
          r = n.chart.scale,
          s = r.getPointPositionForValue(e, o.data[e]),
          l = n._resolvePointOptions(t, e),
          d = n.getMeta().dataset._model,
          u = i ? r.xCenter : s.x,
          h = i ? r.yCenter : s.y;

      t._scale = r, t._options = l, t._datasetIndex = n.index, t._index = e, t._model = {
        x: u,
        y: h,
        skip: a.skip || isNaN(u) || isNaN(h),
        radius: l.radius,
        pointStyle: l.pointStyle,
        rotation: l.rotation,
        backgroundColor: l.backgroundColor,
        borderColor: l.borderColor,
        borderWidth: l.borderWidth,
        tension: se(a.tension, d ? d.tension : 0),
        hitRadius: l.hitRadius
      };
    },
    _resolvePointOptions: function _resolvePointOptions(t, e) {
      var i,
          n,
          a,
          o = this.chart,
          r = o.data.datasets[this.index],
          s = t.custom || {},
          l = o.options.elements.point,
          d = {},
          u = {
        chart: o,
        dataIndex: e,
        dataset: r,
        datasetIndex: this.index
      },
          h = {
        backgroundColor: "pointBackgroundColor",
        borderColor: "pointBorderColor",
        borderWidth: "pointBorderWidth",
        hitRadius: "pointHitRadius",
        hoverBackgroundColor: "pointHoverBackgroundColor",
        hoverBorderColor: "pointHoverBorderColor",
        hoverBorderWidth: "pointHoverBorderWidth",
        hoverRadius: "pointHoverRadius",
        pointStyle: "pointStyle",
        radius: "pointRadius",
        rotation: "pointRotation"
      },
          c = Object.keys(h);

      for (i = 0, n = c.length; i < n; ++i) {
        d[a = c[i]] = le([s[a], r[h[a]], r[a], l[a]], u, e);
      }

      return d;
    },
    _resolveLineOptions: function _resolveLineOptions(t) {
      var e,
          i,
          n,
          a = this.chart,
          o = a.data.datasets[this.index],
          r = t.custom || {},
          s = a.options.elements.line,
          l = {},
          d = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"];

      for (e = 0, i = d.length; e < i; ++e) {
        l[n = d[e]] = le([r[n], o[n], s[n]]);
      }

      return l.tension = se(o.lineTension, s.tension), l;
    },
    updateBezierControlPoints: function updateBezierControlPoints() {
      var t,
          e,
          i,
          n,
          a = this.getMeta(),
          o = this.chart.chartArea,
          r = a.data || [];

      function s(t, e, i) {
        return Math.max(Math.min(t, i), e);
      }

      for (t = 0, e = r.length; t < e; ++t) {
        i = r[t]._model, n = ut.splineCurve(ut.previousItem(r, t, !0)._model, i, ut.nextItem(r, t, !0)._model, i.tension), i.controlPointPreviousX = s(n.previous.x, o.left, o.right), i.controlPointPreviousY = s(n.previous.y, o.top, o.bottom), i.controlPointNextX = s(n.next.x, o.left, o.right), i.controlPointNextY = s(n.next.y, o.top, o.bottom);
      }
    },
    setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          i = t._options,
          n = ut.getHoverColor;
      t.$previousStyle = {
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth,
        radius: e.radius
      }, e.backgroundColor = se(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = se(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = se(i.hoverBorderWidth, i.borderWidth), e.radius = se(i.hoverRadius, i.radius);
    }
  });

  st._set("scatter", {
    hover: {
      mode: "single"
    },
    scales: {
      xAxes: [{
        id: "x-axis-1",
        type: "linear",
        position: "bottom"
      }],
      yAxes: [{
        id: "y-axis-1",
        type: "linear",
        position: "left"
      }]
    },
    showLines: !1,
    tooltips: {
      callbacks: {
        title: function title() {
          return "";
        },
        label: function label(t) {
          return "(" + t.xLabel + ", " + t.yLabel + ")";
        }
      }
    }
  });

  var ue = {
    bar: Yt,
    bubble: Kt,
    doughnut: $t,
    horizontalBar: Jt,
    line: ne,
    polarArea: oe,
    pie: re,
    radar: de,
    scatter: ne
  };

  function he(t, e) {
    return t["native"] ? {
      x: t.x,
      y: t.y
    } : ut.getRelativePosition(t, e);
  }

  function ce(t, e) {
    var i, n, a, o, r;

    for (n = 0, o = t.data.datasets.length; n < o; ++n) {
      if (t.isDatasetVisible(n)) for (a = 0, r = (i = t.getDatasetMeta(n)).data.length; a < r; ++a) {
        var s = i.data[a];
        s._view.skip || e(s);
      }
    }
  }

  function fe(t, e) {
    var i = [];
    return ce(t, function (t) {
      t.inRange(e.x, e.y) && i.push(t);
    }), i;
  }

  function ge(t, e, i, n) {
    var a = Number.POSITIVE_INFINITY,
        o = [];
    return ce(t, function (t) {
      if (!i || t.inRange(e.x, e.y)) {
        var r = t.getCenterPoint(),
            s = n(e, r);
        s < a ? (o = [t], a = s) : s === a && o.push(t);
      }
    }), o;
  }

  function pe(t) {
    var e = -1 !== t.indexOf("x"),
        i = -1 !== t.indexOf("y");
    return function (t, n) {
      var a = e ? Math.abs(t.x - n.x) : 0,
          o = i ? Math.abs(t.y - n.y) : 0;
      return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
    };
  }

  function me(t, e, i) {
    var n = he(e, t);
    i.axis = i.axis || "x";
    var a = pe(i.axis),
        o = i.intersect ? fe(t, n) : ge(t, n, !1, a),
        r = [];
    return o.length ? (t.data.datasets.forEach(function (e, i) {
      if (t.isDatasetVisible(i)) {
        var n = t.getDatasetMeta(i).data[o[0]._index];

        n && !n._view.skip && r.push(n);
      }
    }), r) : [];
  }

  var ve = {
    modes: {
      single: function single(t, e) {
        var i = he(e, t),
            n = [];
        return ce(t, function (t) {
          if (t.inRange(i.x, i.y)) return n.push(t), n;
        }), n.slice(0, 1);
      },
      label: me,
      index: me,
      dataset: function dataset(t, e, i) {
        var n = he(e, t);
        i.axis = i.axis || "xy";
        var a = pe(i.axis),
            o = i.intersect ? fe(t, n) : ge(t, n, !1, a);
        return o.length > 0 && (o = t.getDatasetMeta(o[0]._datasetIndex).data), o;
      },
      "x-axis": function xAxis(t, e) {
        return me(t, e, {
          intersect: !1
        });
      },
      point: function point(t, e) {
        return fe(t, he(e, t));
      },
      nearest: function nearest(t, e, i) {
        var n = he(e, t);
        i.axis = i.axis || "xy";
        var a = pe(i.axis);
        return ge(t, n, i.intersect, a);
      },
      x: function x(t, e, i) {
        var n = he(e, t),
            a = [],
            o = !1;
        return ce(t, function (t) {
          t.inXRange(n.x) && a.push(t), t.inRange(n.x, n.y) && (o = !0);
        }), i.intersect && !o && (a = []), a;
      },
      y: function y(t, e, i) {
        var n = he(e, t),
            a = [],
            o = !1;
        return ce(t, function (t) {
          t.inYRange(n.y) && a.push(t), t.inRange(n.x, n.y) && (o = !0);
        }), i.intersect && !o && (a = []), a;
      }
    }
  };

  function be(t, e) {
    return ut.where(t, function (t) {
      return t.position === e;
    });
  }

  function xe(t, e) {
    t.forEach(function (t, e) {
      return t._tmpIndex_ = e, t;
    }), t.sort(function (t, i) {
      var n = e ? i : t,
          a = e ? t : i;
      return n.weight === a.weight ? n._tmpIndex_ - a._tmpIndex_ : n.weight - a.weight;
    }), t.forEach(function (t) {
      delete t._tmpIndex_;
    });
  }

  function ye(t, e) {
    ut.each(t, function (t) {
      e[t.position] += t.isHorizontal() ? t.height : t.width;
    });
  }

  st._set("global", {
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }
  });

  var ke = {
    defaults: {},
    addBox: function addBox(t, e) {
      t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e);
    },
    removeBox: function removeBox(t, e) {
      var i = t.boxes ? t.boxes.indexOf(e) : -1;
      -1 !== i && t.boxes.splice(i, 1);
    },
    configure: function configure(t, e, i) {
      for (var n, a = ["fullWidth", "position", "weight"], o = a.length, r = 0; r < o; ++r) {
        n = a[r], i.hasOwnProperty(n) && (e[n] = i[n]);
      }
    },
    update: function update(t, e, i) {
      if (t) {
        var n = t.options.layout || {},
            a = ut.options.toPadding(n.padding),
            o = a.left,
            r = a.right,
            s = a.top,
            l = a.bottom,
            d = be(t.boxes, "left"),
            u = be(t.boxes, "right"),
            h = be(t.boxes, "top"),
            c = be(t.boxes, "bottom"),
            f = be(t.boxes, "chartArea");
        xe(d, !0), xe(u, !1), xe(h, !0), xe(c, !1);
        var g,
            p = d.concat(u),
            m = h.concat(c),
            v = p.concat(m),
            b = e - o - r,
            x = i - s - l,
            y = (e - b / 2) / p.length,
            k = b,
            w = x,
            M = {
          top: s,
          left: o,
          bottom: l,
          right: r
        },
            _ = [];
        ut.each(v, function (t) {
          var e,
              i = t.isHorizontal();
          i ? (e = t.update(t.fullWidth ? b : k, x / 2), w -= e.height) : (e = t.update(y, w), k -= e.width), _.push({
            horizontal: i,
            width: e.width,
            box: t
          });
        }), g = function (t) {
          var e = 0,
              i = 0,
              n = 0,
              a = 0;
          return ut.each(t, function (t) {
            if (t.getPadding) {
              var o = t.getPadding();
              e = Math.max(e, o.top), i = Math.max(i, o.left), n = Math.max(n, o.bottom), a = Math.max(a, o.right);
            }
          }), {
            top: e,
            left: i,
            bottom: n,
            right: a
          };
        }(v), ut.each(p, T), ye(p, M), ut.each(m, T), ye(m, M), ut.each(p, function (t) {
          var e = ut.findNextWhere(_, function (e) {
            return e.box === t;
          }),
              i = {
            left: 0,
            right: 0,
            top: M.top,
            bottom: M.bottom
          };
          e && t.update(e.width, w, i);
        }), ye(v, M = {
          top: s,
          left: o,
          bottom: l,
          right: r
        });
        var C = Math.max(g.left - M.left, 0);
        M.left += C, M.right += Math.max(g.right - M.right, 0);
        var S = Math.max(g.top - M.top, 0);
        M.top += S, M.bottom += Math.max(g.bottom - M.bottom, 0);
        var P = i - M.top - M.bottom,
            I = e - M.left - M.right;
        I === k && P === w || (ut.each(p, function (t) {
          t.height = P;
        }), ut.each(m, function (t) {
          t.fullWidth || (t.width = I);
        }), w = P, k = I);
        var A = o + C,
            D = s + S;
        ut.each(d.concat(h), F), A += k, D += w, ut.each(u, F), ut.each(c, F), t.chartArea = {
          left: M.left,
          top: M.top,
          right: M.left + k,
          bottom: M.top + w
        }, ut.each(f, function (e) {
          e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, w);
        });
      }

      function T(t) {
        var e = ut.findNextWhere(_, function (e) {
          return e.box === t;
        });
        if (e) if (e.horizontal) {
          var i = {
            left: Math.max(M.left, g.left),
            right: Math.max(M.right, g.right),
            top: 0,
            bottom: 0
          };
          t.update(t.fullWidth ? b : k, x / 2, i);
        } else t.update(e.width, w);
      }

      function F(t) {
        t.isHorizontal() ? (t.left = t.fullWidth ? o : M.left, t.right = t.fullWidth ? e - r : M.left + k, t.top = D, t.bottom = D + t.height, D = t.bottom) : (t.left = A, t.right = A + t.width, t.top = M.top, t.bottom = M.top + w, A = t.right);
      }
    }
  };
  var we,
      Me = (we = Object.freeze({
    "default": "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"
  })) && we["default"] || we,
      _e = "$chartjs",
      Ce = "chartjs-size-monitor",
      Se = "chartjs-render-monitor",
      Pe = "chartjs-render-animation",
      Ie = ["animationstart", "webkitAnimationStart"],
      Ae = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
  };

  function De(t, e) {
    var i = ut.getStyle(t, e),
        n = i && i.match(/^(\d+)(\.\d+)?px$/);
    return n ? Number(n[1]) : void 0;
  }

  var Te = !!function () {
    var t = !1;

    try {
      var e = Object.defineProperty({}, "passive", {
        get: function get() {
          t = !0;
        }
      });
      window.addEventListener("e", null, e);
    } catch (t) {}

    return t;
  }() && {
    passive: !0
  };

  function Fe(t, e, i) {
    t.addEventListener(e, i, Te);
  }

  function Le(t, e, i) {
    t.removeEventListener(e, i, Te);
  }

  function Re(t, e, i, n, a) {
    return {
      type: t,
      chart: e,
      "native": a || null,
      x: void 0 !== i ? i : null,
      y: void 0 !== n ? n : null
    };
  }

  function Oe(t) {
    var e = document.createElement("div");
    return e.className = t || "", e;
  }

  function ze(t, e, i) {
    var n,
        a,
        o,
        r,
        s = t[_e] || (t[_e] = {}),
        l = s.resizer = function (t) {
      var e = Oe(Ce),
          i = Oe(Ce + "-expand"),
          n = Oe(Ce + "-shrink");
      i.appendChild(Oe()), n.appendChild(Oe()), e.appendChild(i), e.appendChild(n), e._reset = function () {
        i.scrollLeft = 1e6, i.scrollTop = 1e6, n.scrollLeft = 1e6, n.scrollTop = 1e6;
      };

      var a = function a() {
        e._reset(), t();
      };

      return Fe(i, "scroll", a.bind(i, "expand")), Fe(n, "scroll", a.bind(n, "shrink")), e;
    }((n = function n() {
      if (s.resizer) {
        var n = i.options.maintainAspectRatio && t.parentNode,
            a = n ? n.clientWidth : 0;
        e(Re("resize", i)), n && n.clientWidth < a && i.canvas && e(Re("resize", i));
      }
    }, o = !1, r = [], function () {
      r = Array.prototype.slice.call(arguments), a = a || this, o || (o = !0, ut.requestAnimFrame.call(window, function () {
        o = !1, n.apply(a, r);
      }));
    }));

    !function (t, e) {
      var i = t[_e] || (t[_e] = {}),
          n = i.renderProxy = function (t) {
        t.animationName === Pe && e();
      };

      ut.each(Ie, function (e) {
        Fe(t, e, n);
      }), i.reflow = !!t.offsetParent, t.classList.add(Se);
    }(t, function () {
      if (s.resizer) {
        var e = t.parentNode;
        e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset();
      }
    });
  }

  function Be(t) {
    var e = t[_e] || {},
        i = e.resizer;
    delete e.resizer, function (t) {
      var e = t[_e] || {},
          i = e.renderProxy;
      i && (ut.each(Ie, function (e) {
        Le(t, e, i);
      }), delete e.renderProxy), t.classList.remove(Se);
    }(t), i && i.parentNode && i.parentNode.removeChild(i);
  }

  var Ne = {
    disableCSSInjection: !1,
    _enabled: "undefined" != typeof window && "undefined" != typeof document,
    _ensureLoaded: function _ensureLoaded() {
      var t, e, i;
      this._loaded || (this._loaded = !0, this.disableCSSInjection || (e = Me, i = (t = this)._style || document.createElement("style"), t._style || (t._style = i, e = "/* Chart.js */\n" + e, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))));
    },
    acquireContext: function acquireContext(t, e) {
      "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
      var i = t && t.getContext && t.getContext("2d");
      return this._ensureLoaded(), i && i.canvas === t ? (function (t, e) {
        var i = t.style,
            n = t.getAttribute("height"),
            a = t.getAttribute("width");

        if (t[_e] = {
          initial: {
            height: n,
            width: a,
            style: {
              display: i.display,
              height: i.height,
              width: i.width
            }
          }
        }, i.display = i.display || "block", null === a || "" === a) {
          var o = De(t, "width");
          void 0 !== o && (t.width = o);
        }

        if (null === n || "" === n) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);else {
          var r = De(t, "height");
          void 0 !== o && (t.height = r);
        }
      }(t, e), i) : null;
    },
    releaseContext: function releaseContext(t) {
      var e = t.canvas;

      if (e[_e]) {
        var i = e[_e].initial;
        ["height", "width"].forEach(function (t) {
          var n = i[t];
          ut.isNullOrUndef(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
        }), ut.each(i.style || {}, function (t, i) {
          e.style[i] = t;
        }), e.width = e.width, delete e[_e];
      }
    },
    addEventListener: function addEventListener(t, e, i) {
      var n = t.canvas;

      if ("resize" !== e) {
        var a = i[_e] || (i[_e] = {});
        Fe(n, e, (a.proxies || (a.proxies = {}))[t.id + "_" + e] = function (e) {
          i(function (t, e) {
            var i = Ae[t.type] || t.type,
                n = ut.getRelativePosition(t, e);
            return Re(i, e, n.x, n.y, t);
          }(e, t));
        });
      } else ze(n, i, t);
    },
    removeEventListener: function removeEventListener(t, e, i) {
      var n = t.canvas;

      if ("resize" !== e) {
        var a = ((i[_e] || {}).proxies || {})[t.id + "_" + e];
        a && Le(n, e, a);
      } else Be(n);
    }
  };
  ut.addEvent = Fe, ut.removeEvent = Le;
  var We = Ne._enabled ? Ne : {
    acquireContext: function acquireContext(t) {
      return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null;
    }
  },
      Ve = ut.extend({
    initialize: function initialize() {},
    acquireContext: function acquireContext() {},
    releaseContext: function releaseContext() {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {}
  }, We);

  st._set("global", {
    plugins: {}
  });

  var Ee = {
    _plugins: [],
    _cacheId: 0,
    register: function register(t) {
      var e = this._plugins;
      [].concat(t).forEach(function (t) {
        -1 === e.indexOf(t) && e.push(t);
      }), this._cacheId++;
    },
    unregister: function unregister(t) {
      var e = this._plugins;
      [].concat(t).forEach(function (t) {
        var i = e.indexOf(t);
        -1 !== i && e.splice(i, 1);
      }), this._cacheId++;
    },
    clear: function clear() {
      this._plugins = [], this._cacheId++;
    },
    count: function count() {
      return this._plugins.length;
    },
    getAll: function getAll() {
      return this._plugins;
    },
    notify: function notify(t, e, i) {
      var n,
          a,
          o,
          r,
          s,
          l = this.descriptors(t),
          d = l.length;

      for (n = 0; n < d; ++n) {
        if ("function" == typeof (s = (o = (a = l[n]).plugin)[e]) && ((r = [t].concat(i || [])).push(a.options), !1 === s.apply(o, r))) return !1;
      }

      return !0;
    },
    descriptors: function descriptors(t) {
      var e = t.$plugins || (t.$plugins = {});
      if (e.id === this._cacheId) return e.descriptors;
      var i = [],
          n = [],
          a = t && t.config || {},
          o = a.options && a.options.plugins || {};
      return this._plugins.concat(a.plugins || []).forEach(function (t) {
        if (-1 === i.indexOf(t)) {
          var e = t.id,
              a = o[e];
          !1 !== a && (!0 === a && (a = ut.clone(st.global.plugins[e])), i.push(t), n.push({
            plugin: t,
            options: a || {}
          }));
        }
      }), e.descriptors = n, e.id = this._cacheId, n;
    },
    _invalidate: function _invalidate(t) {
      delete t.$plugins;
    }
  },
      He = {
    constructors: {},
    defaults: {},
    registerScaleType: function registerScaleType(t, e, i) {
      this.constructors[t] = e, this.defaults[t] = ut.clone(i);
    },
    getScaleConstructor: function getScaleConstructor(t) {
      return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
    },
    getScaleDefaults: function getScaleDefaults(t) {
      return this.defaults.hasOwnProperty(t) ? ut.merge({}, [st.scale, this.defaults[t]]) : {};
    },
    updateScaleDefaults: function updateScaleDefaults(t, e) {
      this.defaults.hasOwnProperty(t) && (this.defaults[t] = ut.extend(this.defaults[t], e));
    },
    addScalesToLayout: function addScalesToLayout(t) {
      ut.each(t.scales, function (e) {
        e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, ke.addBox(t, e);
      });
    }
  },
      je = ut.valueOrDefault;

  st._set("global", {
    tooltips: {
      enabled: !0,
      custom: null,
      mode: "nearest",
      position: "average",
      intersect: !0,
      backgroundColor: "rgba(0,0,0,0.8)",
      titleFontStyle: "bold",
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleFontColor: "#fff",
      titleAlign: "left",
      bodySpacing: 2,
      bodyFontColor: "#fff",
      bodyAlign: "left",
      footerFontStyle: "bold",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFontColor: "#fff",
      footerAlign: "left",
      yPadding: 6,
      xPadding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      multiKeyBackground: "#fff",
      displayColors: !0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      callbacks: {
        beforeTitle: ut.noop,
        title: function title(t, e) {
          var i = "",
              n = e.labels,
              a = n ? n.length : 0;

          if (t.length > 0) {
            var o = t[0];
            o.label ? i = o.label : o.xLabel ? i = o.xLabel : a > 0 && o.index < a && (i = n[o.index]);
          }

          return i;
        },
        afterTitle: ut.noop,
        beforeBody: ut.noop,
        beforeLabel: ut.noop,
        label: function label(t, e) {
          var i = e.datasets[t.datasetIndex].label || "";
          return i && (i += ": "), ut.isNullOrUndef(t.value) ? i += t.yLabel : i += t.value, i;
        },
        labelColor: function labelColor(t, e) {
          var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;

          return {
            borderColor: i.borderColor,
            backgroundColor: i.backgroundColor
          };
        },
        labelTextColor: function labelTextColor() {
          return this._options.bodyFontColor;
        },
        afterLabel: ut.noop,
        afterBody: ut.noop,
        beforeFooter: ut.noop,
        footer: ut.noop,
        afterFooter: ut.noop
      }
    }
  });

  var qe = {
    average: function average(t) {
      if (!t.length) return !1;
      var e,
          i,
          n = 0,
          a = 0,
          o = 0;

      for (e = 0, i = t.length; e < i; ++e) {
        var r = t[e];

        if (r && r.hasValue()) {
          var s = r.tooltipPosition();
          n += s.x, a += s.y, ++o;
        }
      }

      return {
        x: n / o,
        y: a / o
      };
    },
    nearest: function nearest(t, e) {
      var i,
          n,
          a,
          o = e.x,
          r = e.y,
          s = Number.POSITIVE_INFINITY;

      for (i = 0, n = t.length; i < n; ++i) {
        var l = t[i];

        if (l && l.hasValue()) {
          var d = l.getCenterPoint(),
              u = ut.distanceBetweenPoints(e, d);
          u < s && (s = u, a = l);
        }
      }

      if (a) {
        var h = a.tooltipPosition();
        o = h.x, r = h.y;
      }

      return {
        x: o,
        y: r
      };
    }
  };

  function Ye(t, e) {
    return e && (ut.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }

  function Ue(t) {
    return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
  }

  function Xe(t) {
    var e = st.global;
    return {
      xPadding: t.xPadding,
      yPadding: t.yPadding,
      xAlign: t.xAlign,
      yAlign: t.yAlign,
      bodyFontColor: t.bodyFontColor,
      _bodyFontFamily: je(t.bodyFontFamily, e.defaultFontFamily),
      _bodyFontStyle: je(t.bodyFontStyle, e.defaultFontStyle),
      _bodyAlign: t.bodyAlign,
      bodyFontSize: je(t.bodyFontSize, e.defaultFontSize),
      bodySpacing: t.bodySpacing,
      titleFontColor: t.titleFontColor,
      _titleFontFamily: je(t.titleFontFamily, e.defaultFontFamily),
      _titleFontStyle: je(t.titleFontStyle, e.defaultFontStyle),
      titleFontSize: je(t.titleFontSize, e.defaultFontSize),
      _titleAlign: t.titleAlign,
      titleSpacing: t.titleSpacing,
      titleMarginBottom: t.titleMarginBottom,
      footerFontColor: t.footerFontColor,
      _footerFontFamily: je(t.footerFontFamily, e.defaultFontFamily),
      _footerFontStyle: je(t.footerFontStyle, e.defaultFontStyle),
      footerFontSize: je(t.footerFontSize, e.defaultFontSize),
      _footerAlign: t.footerAlign,
      footerSpacing: t.footerSpacing,
      footerMarginTop: t.footerMarginTop,
      caretSize: t.caretSize,
      cornerRadius: t.cornerRadius,
      backgroundColor: t.backgroundColor,
      opacity: 0,
      legendColorBackground: t.multiKeyBackground,
      displayColors: t.displayColors,
      borderColor: t.borderColor,
      borderWidth: t.borderWidth
    };
  }

  function Ke(t, e) {
    return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding;
  }

  function Ge(t) {
    return Ye([], Ue(t));
  }

  var Ze = pt.extend({
    initialize: function initialize() {
      this._model = Xe(this._options), this._lastActive = [];
    },
    getTitle: function getTitle() {
      var t = this._options.callbacks,
          e = t.beforeTitle.apply(this, arguments),
          i = t.title.apply(this, arguments),
          n = t.afterTitle.apply(this, arguments),
          a = [];
      return a = Ye(a, Ue(e)), a = Ye(a, Ue(i)), a = Ye(a, Ue(n));
    },
    getBeforeBody: function getBeforeBody() {
      return Ge(this._options.callbacks.beforeBody.apply(this, arguments));
    },
    getBody: function getBody(t, e) {
      var i = this,
          n = i._options.callbacks,
          a = [];
      return ut.each(t, function (t) {
        var o = {
          before: [],
          lines: [],
          after: []
        };
        Ye(o.before, Ue(n.beforeLabel.call(i, t, e))), Ye(o.lines, n.label.call(i, t, e)), Ye(o.after, Ue(n.afterLabel.call(i, t, e))), a.push(o);
      }), a;
    },
    getAfterBody: function getAfterBody() {
      return Ge(this._options.callbacks.afterBody.apply(this, arguments));
    },
    getFooter: function getFooter() {
      var t = this._options.callbacks,
          e = t.beforeFooter.apply(this, arguments),
          i = t.footer.apply(this, arguments),
          n = t.afterFooter.apply(this, arguments),
          a = [];
      return a = Ye(a, Ue(e)), a = Ye(a, Ue(i)), a = Ye(a, Ue(n));
    },
    update: function update(t) {
      var e,
          i,
          n,
          a,
          o,
          r,
          s,
          l,
          d,
          u,
          h = this,
          c = h._options,
          f = h._model,
          g = h._model = Xe(c),
          p = h._active,
          m = h._data,
          v = {
        xAlign: f.xAlign,
        yAlign: f.yAlign
      },
          b = {
        x: f.x,
        y: f.y
      },
          x = {
        width: f.width,
        height: f.height
      },
          y = {
        x: f.caretX,
        y: f.caretY
      };

      if (p.length) {
        g.opacity = 1;
        var k = [],
            w = [];
        y = qe[c.position].call(h, p, h._eventPosition);
        var M = [];

        for (e = 0, i = p.length; e < i; ++e) {
          M.push((n = p[e], a = void 0, o = void 0, r = void 0, s = void 0, l = void 0, d = void 0, u = void 0, a = n._xScale, o = n._yScale || n._scale, r = n._index, s = n._datasetIndex, l = n._chart.getDatasetMeta(s).controller, d = l._getIndexScale(), u = l._getValueScale(), {
            xLabel: a ? a.getLabelForIndex(r, s) : "",
            yLabel: o ? o.getLabelForIndex(r, s) : "",
            label: d ? "" + d.getLabelForIndex(r, s) : "",
            value: u ? "" + u.getLabelForIndex(r, s) : "",
            index: r,
            datasetIndex: s,
            x: n._model.x,
            y: n._model.y
          }));
        }

        c.filter && (M = M.filter(function (t) {
          return c.filter(t, m);
        })), c.itemSort && (M = M.sort(function (t, e) {
          return c.itemSort(t, e, m);
        })), ut.each(M, function (t) {
          k.push(c.callbacks.labelColor.call(h, t, h._chart)), w.push(c.callbacks.labelTextColor.call(h, t, h._chart));
        }), g.title = h.getTitle(M, m), g.beforeBody = h.getBeforeBody(M, m), g.body = h.getBody(M, m), g.afterBody = h.getAfterBody(M, m), g.footer = h.getFooter(M, m), g.x = y.x, g.y = y.y, g.caretPadding = c.caretPadding, g.labelColors = k, g.labelTextColors = w, g.dataPoints = M, x = function (t, e) {
          var i = t._chart.ctx,
              n = 2 * e.yPadding,
              a = 0,
              o = e.body,
              r = o.reduce(function (t, e) {
            return t + e.before.length + e.lines.length + e.after.length;
          }, 0);
          r += e.beforeBody.length + e.afterBody.length;
          var s = e.title.length,
              l = e.footer.length,
              d = e.titleFontSize,
              u = e.bodyFontSize,
              h = e.footerFontSize;
          n += s * d, n += s ? (s - 1) * e.titleSpacing : 0, n += s ? e.titleMarginBottom : 0, n += r * u, n += r ? (r - 1) * e.bodySpacing : 0, n += l ? e.footerMarginTop : 0, n += l * h, n += l ? (l - 1) * e.footerSpacing : 0;

          var c = 0,
              f = function f(t) {
            a = Math.max(a, i.measureText(t).width + c);
          };

          return i.font = ut.fontString(d, e._titleFontStyle, e._titleFontFamily), ut.each(e.title, f), i.font = ut.fontString(u, e._bodyFontStyle, e._bodyFontFamily), ut.each(e.beforeBody.concat(e.afterBody), f), c = e.displayColors ? u + 2 : 0, ut.each(o, function (t) {
            ut.each(t.before, f), ut.each(t.lines, f), ut.each(t.after, f);
          }), c = 0, i.font = ut.fontString(h, e._footerFontStyle, e._footerFontFamily), ut.each(e.footer, f), {
            width: a += 2 * e.xPadding,
            height: n
          };
        }(this, g), b = function (t, e, i, n) {
          var a = t.x,
              o = t.y,
              r = t.caretSize,
              s = t.caretPadding,
              l = t.cornerRadius,
              d = i.xAlign,
              u = i.yAlign,
              h = r + s,
              c = l + s;
          return "right" === d ? a -= e.width : "center" === d && ((a -= e.width / 2) + e.width > n.width && (a = n.width - e.width), a < 0 && (a = 0)), "top" === u ? o += h : o -= "bottom" === u ? e.height + h : e.height / 2, "center" === u ? "left" === d ? a += h : "right" === d && (a -= h) : "left" === d ? a -= c : "right" === d && (a += c), {
            x: a,
            y: o
          };
        }(g, x, v = function (t, e) {
          var i,
              n,
              a,
              o,
              r,
              s = t._model,
              l = t._chart,
              d = t._chart.chartArea,
              u = "center",
              h = "center";
          s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
          var c = (d.left + d.right) / 2,
              f = (d.top + d.bottom) / 2;
          "center" === h ? (i = function i(t) {
            return t <= c;
          }, n = function n(t) {
            return t > c;
          }) : (i = function i(t) {
            return t <= e.width / 2;
          }, n = function n(t) {
            return t >= l.width - e.width / 2;
          }), a = function a(t) {
            return t + e.width + s.caretSize + s.caretPadding > l.width;
          }, o = function o(t) {
            return t - e.width - s.caretSize - s.caretPadding < 0;
          }, r = function r(t) {
            return t <= f ? "top" : "bottom";
          }, i(s.x) ? (u = "left", a(s.x) && (u = "center", h = r(s.y))) : n(s.x) && (u = "right", o(s.x) && (u = "center", h = r(s.y)));
          var g = t._options;
          return {
            xAlign: g.xAlign ? g.xAlign : u,
            yAlign: g.yAlign ? g.yAlign : h
          };
        }(this, x), h._chart);
      } else g.opacity = 0;

      return g.xAlign = v.xAlign, g.yAlign = v.yAlign, g.x = b.x, g.y = b.y, g.width = x.width, g.height = x.height, g.caretX = y.x, g.caretY = y.y, h._model = g, t && c.custom && c.custom.call(h, g), h;
    },
    drawCaret: function drawCaret(t, e) {
      var i = this._chart.ctx,
          n = this._view,
          a = this.getCaretPosition(t, e, n);
      i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3);
    },
    getCaretPosition: function getCaretPosition(t, e, i) {
      var n,
          a,
          o,
          r,
          s,
          l,
          d = i.caretSize,
          u = i.cornerRadius,
          h = i.xAlign,
          c = i.yAlign,
          f = t.x,
          g = t.y,
          p = e.width,
          m = e.height;
      if ("center" === c) s = g + m / 2, "left" === h ? (a = (n = f) - d, o = n, r = s + d, l = s - d) : (a = (n = f + p) + d, o = n, r = s - d, l = s + d);else if ("left" === h ? (n = (a = f + u + d) - d, o = a + d) : "right" === h ? (n = (a = f + p - u - d) - d, o = a + d) : (n = (a = i.caretX) - d, o = a + d), "top" === c) s = (r = g) - d, l = r;else {
        s = (r = g + m) + d, l = r;
        var v = o;
        o = n, n = v;
      }
      return {
        x1: n,
        x2: a,
        x3: o,
        y1: r,
        y2: s,
        y3: l
      };
    },
    drawTitle: function drawTitle(t, e, i) {
      var n = e.title;

      if (n.length) {
        t.x = Ke(e, e._titleAlign), i.textAlign = e._titleAlign, i.textBaseline = "top";
        var a,
            o,
            r = e.titleFontSize,
            s = e.titleSpacing;

        for (i.fillStyle = e.titleFontColor, i.font = ut.fontString(r, e._titleFontStyle, e._titleFontFamily), a = 0, o = n.length; a < o; ++a) {
          i.fillText(n[a], t.x, t.y), t.y += r + s, a + 1 === n.length && (t.y += e.titleMarginBottom - s);
        }
      }
    },
    drawBody: function drawBody(t, e, i) {
      var n,
          a = e.bodyFontSize,
          o = e.bodySpacing,
          r = e._bodyAlign,
          s = e.body,
          l = e.displayColors,
          d = e.labelColors,
          u = 0,
          h = l ? Ke(e, "left") : 0;
      i.textAlign = r, i.textBaseline = "top", i.font = ut.fontString(a, e._bodyFontStyle, e._bodyFontFamily), t.x = Ke(e, r);

      var c = function c(e) {
        i.fillText(e, t.x + u, t.y), t.y += a + o;
      };

      i.fillStyle = e.bodyFontColor, ut.each(e.beforeBody, c), u = l && "right" !== r ? "center" === r ? a / 2 + 1 : a + 2 : 0, ut.each(s, function (o, r) {
        n = e.labelTextColors[r], i.fillStyle = n, ut.each(o.before, c), ut.each(o.lines, function (o) {
          l && (i.fillStyle = e.legendColorBackground, i.fillRect(h, t.y, a, a), i.lineWidth = 1, i.strokeStyle = d[r].borderColor, i.strokeRect(h, t.y, a, a), i.fillStyle = d[r].backgroundColor, i.fillRect(h + 1, t.y + 1, a - 2, a - 2), i.fillStyle = n), c(o);
        }), ut.each(o.after, c);
      }), u = 0, ut.each(e.afterBody, c), t.y -= o;
    },
    drawFooter: function drawFooter(t, e, i) {
      var n = e.footer;
      n.length && (t.x = Ke(e, e._footerAlign), t.y += e.footerMarginTop, i.textAlign = e._footerAlign, i.textBaseline = "top", i.fillStyle = e.footerFontColor, i.font = ut.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), ut.each(n, function (n) {
        i.fillText(n, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing;
      }));
    },
    drawBackground: function drawBackground(t, e, i, n) {
      i.fillStyle = e.backgroundColor, i.strokeStyle = e.borderColor, i.lineWidth = e.borderWidth;
      var a = e.xAlign,
          o = e.yAlign,
          r = t.x,
          s = t.y,
          l = n.width,
          d = n.height,
          u = e.cornerRadius;
      i.beginPath(), i.moveTo(r + u, s), "top" === o && this.drawCaret(t, n), i.lineTo(r + l - u, s), i.quadraticCurveTo(r + l, s, r + l, s + u), "center" === o && "right" === a && this.drawCaret(t, n), i.lineTo(r + l, s + d - u), i.quadraticCurveTo(r + l, s + d, r + l - u, s + d), "bottom" === o && this.drawCaret(t, n), i.lineTo(r + u, s + d), i.quadraticCurveTo(r, s + d, r, s + d - u), "center" === o && "left" === a && this.drawCaret(t, n), i.lineTo(r, s + u), i.quadraticCurveTo(r, s, r + u, s), i.closePath(), i.fill(), e.borderWidth > 0 && i.stroke();
    },
    draw: function draw() {
      var t = this._chart.ctx,
          e = this._view;

      if (0 !== e.opacity) {
        var i = {
          width: e.width,
          height: e.height
        },
            n = {
          x: e.x,
          y: e.y
        },
            a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
            o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
        this._options.enabled && o && (t.save(), t.globalAlpha = a, this.drawBackground(n, e, t, i), n.y += e.yPadding, this.drawTitle(n, e, t), this.drawBody(n, e, t), this.drawFooter(n, e, t), t.restore());
      }
    },
    handleEvent: function handleEvent(t) {
      var e,
          i = this,
          n = i._options;
      return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !ut.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
        x: t.x,
        y: t.y
      }, i.update(!0), i.pivot())), e;
    }
  }),
      $e = qe,
      Je = Ze;
  Je.positioners = $e;
  var Qe = ut.valueOrDefault;

  function ti() {
    return ut.merge({}, [].slice.call(arguments), {
      merger: function merger(t, e, i, n) {
        if ("xAxes" === t || "yAxes" === t) {
          var a,
              o,
              r,
              s = i[t].length;

          for (e[t] || (e[t] = []), a = 0; a < s; ++a) {
            r = i[t][a], o = Qe(r.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || r.type && r.type !== e[t][a].type ? ut.merge(e[t][a], [He.getScaleDefaults(o), r]) : ut.merge(e[t][a], r);
          }
        } else ut._merger(t, e, i, n);
      }
    });
  }

  function ei() {
    return ut.merge({}, [].slice.call(arguments), {
      merger: function merger(t, e, i, n) {
        var a = e[t] || {},
            o = i[t];
        "scales" === t ? e[t] = ti(a, o) : "scale" === t ? e[t] = ut.merge(a, [He.getScaleDefaults(o.type), o]) : ut._merger(t, e, i, n);
      }
    });
  }

  function ii(t) {
    return "top" === t || "bottom" === t;
  }

  st._set("global", {
    elements: {},
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    hover: {
      onHover: null,
      mode: "nearest",
      intersect: !0,
      animationDuration: 400
    },
    onClick: null,
    maintainAspectRatio: !0,
    responsive: !0,
    responsiveAnimationDuration: 0
  });

  var ni = function ni(t, e) {
    return this.construct(t, e), this;
  };

  ut.extend(ni.prototype, {
    construct: function construct(t, e) {
      var i = this;

      e = function (t) {
        var e = (t = t || {}).data = t.data || {};
        return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = ei(st.global, st[t.type], t.options || {}), t;
      }(e);

      var n = Ve.acquireContext(t, e),
          a = n && n.canvas,
          o = a && a.height,
          r = a && a.width;
      i.id = ut.uid(), i.ctx = n, i.canvas = a, i.config = e, i.width = r, i.height = o, i.aspectRatio = o ? r / o : null, i.options = e.options, i._bufferedRender = !1, i.chart = i, i.controller = i, ni.instances[i.id] = i, Object.defineProperty(i, "data", {
        get: function get() {
          return i.config.data;
        },
        set: function set(t) {
          i.config.data = t;
        }
      }), n && a ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item");
    },
    initialize: function initialize() {
      var t = this;
      return Ee.notify(t, "beforeInit"), ut.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), Ee.notify(t, "afterInit"), t;
    },
    clear: function clear() {
      return ut.canvas.clear(this), this;
    },
    stop: function stop() {
      return bt.cancelAnimation(this), this;
    },
    resize: function resize(t) {
      var e = this,
          i = e.options,
          n = e.canvas,
          a = i.maintainAspectRatio && e.aspectRatio || null,
          o = Math.max(0, Math.floor(ut.getMaximumWidth(n))),
          r = Math.max(0, Math.floor(a ? o / a : ut.getMaximumHeight(n)));

      if ((e.width !== o || e.height !== r) && (n.width = e.width = o, n.height = e.height = r, n.style.width = o + "px", n.style.height = r + "px", ut.retinaScale(e, i.devicePixelRatio), !t)) {
        var s = {
          width: o,
          height: r
        };
        Ee.notify(e, "resize", [s]), i.onResize && i.onResize(e, s), e.stop(), e.update({
          duration: i.responsiveAnimationDuration
        });
      }
    },
    ensureScalesHaveIDs: function ensureScalesHaveIDs() {
      var t = this.options,
          e = t.scales || {},
          i = t.scale;
      ut.each(e.xAxes, function (t, e) {
        t.id = t.id || "x-axis-" + e;
      }), ut.each(e.yAxes, function (t, e) {
        t.id = t.id || "y-axis-" + e;
      }), i && (i.id = i.id || "scale");
    },
    buildOrUpdateScales: function buildOrUpdateScales() {
      var t = this,
          e = t.options,
          i = t.scales || {},
          n = [],
          a = Object.keys(i).reduce(function (t, e) {
        return t[e] = !1, t;
      }, {});
      e.scales && (n = n.concat((e.scales.xAxes || []).map(function (t) {
        return {
          options: t,
          dtype: "category",
          dposition: "bottom"
        };
      }), (e.scales.yAxes || []).map(function (t) {
        return {
          options: t,
          dtype: "linear",
          dposition: "left"
        };
      }))), e.scale && n.push({
        options: e.scale,
        dtype: "radialLinear",
        isDefault: !0,
        dposition: "chartArea"
      }), ut.each(n, function (e) {
        var n = e.options,
            o = n.id,
            r = Qe(n.type, e.dtype);
        ii(n.position) !== ii(e.dposition) && (n.position = e.dposition), a[o] = !0;
        var s = null;
        if (o in i && i[o].type === r) (s = i[o]).options = n, s.ctx = t.ctx, s.chart = t;else {
          var l = He.getScaleConstructor(r);
          if (!l) return;
          s = new l({
            id: o,
            type: r,
            options: n,
            ctx: t.ctx,
            chart: t
          }), i[s.id] = s;
        }
        s.mergeTicksOptions(), e.isDefault && (t.scale = s);
      }), ut.each(a, function (t, e) {
        t || delete i[e];
      }), t.scales = i, He.addScalesToLayout(this);
    },
    buildOrUpdateControllers: function buildOrUpdateControllers() {
      var t = this,
          e = [];
      return ut.each(t.data.datasets, function (i, n) {
        var a = t.getDatasetMeta(n),
            o = i.type || t.config.type;
        if (a.type && a.type !== o && (t.destroyDatasetMeta(n), a = t.getDatasetMeta(n)), a.type = o, a.controller) a.controller.updateIndex(n), a.controller.linkScales();else {
          var r = ue[a.type];
          if (void 0 === r) throw new Error('"' + a.type + '" is not a chart type.');
          a.controller = new r(t, n), e.push(a.controller);
        }
      }, t), e;
    },
    resetElements: function resetElements() {
      var t = this;
      ut.each(t.data.datasets, function (e, i) {
        t.getDatasetMeta(i).controller.reset();
      }, t);
    },
    reset: function reset() {
      this.resetElements(), this.tooltip.initialize();
    },
    update: function update(t) {
      var e,
          i,
          n = this;

      if (t && "object" == _typeof(t) || (t = {
        duration: t,
        lazy: arguments[1]
      }), i = (e = n).options, ut.each(e.scales, function (t) {
        ke.removeBox(e, t);
      }), i = ei(st.global, st[e.config.type], i), e.options = e.config.options = i, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = i.tooltips, e.tooltip.initialize(), Ee._invalidate(n), !1 !== Ee.notify(n, "beforeUpdate")) {
        n.tooltip._data = n.data;
        var a = n.buildOrUpdateControllers();
        ut.each(n.data.datasets, function (t, e) {
          n.getDatasetMeta(e).controller.buildOrUpdateElements();
        }, n), n.updateLayout(), n.options.animation && n.options.animation.duration && ut.each(a, function (t) {
          t.reset();
        }), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], Ee.notify(n, "afterUpdate"), n._bufferedRender ? n._bufferedRequest = {
          duration: t.duration,
          easing: t.easing,
          lazy: t.lazy
        } : n.render(t);
      }
    },
    updateLayout: function updateLayout() {
      !1 !== Ee.notify(this, "beforeLayout") && (ke.update(this, this.width, this.height), Ee.notify(this, "afterScaleUpdate"), Ee.notify(this, "afterLayout"));
    },
    updateDatasets: function updateDatasets() {
      if (!1 !== Ee.notify(this, "beforeDatasetsUpdate")) {
        for (var t = 0, e = this.data.datasets.length; t < e; ++t) {
          this.updateDataset(t);
        }

        Ee.notify(this, "afterDatasetsUpdate");
      }
    },
    updateDataset: function updateDataset(t) {
      var e = this.getDatasetMeta(t),
          i = {
        meta: e,
        index: t
      };
      !1 !== Ee.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), Ee.notify(this, "afterDatasetUpdate", [i]));
    },
    render: function render(t) {
      var e = this;
      t && "object" == _typeof(t) || (t = {
        duration: t,
        lazy: arguments[1]
      });
      var i = e.options.animation,
          n = Qe(t.duration, i && i.duration),
          a = t.lazy;

      if (!1 !== Ee.notify(e, "beforeRender")) {
        var o = function o(t) {
          Ee.notify(e, "afterRender"), ut.callback(i && i.onComplete, [t], e);
        };

        if (i && n) {
          var r = new vt({
            numSteps: n / 16.66,
            easing: t.easing || i.easing,
            render: function render(t, e) {
              var i = ut.easing.effects[e.easing],
                  n = e.currentStep,
                  a = n / e.numSteps;
              t.draw(i(a), a, n);
            },
            onAnimationProgress: i.onProgress,
            onAnimationComplete: o
          });
          bt.addAnimation(e, r, n, a);
        } else e.draw(), o(new vt({
          numSteps: 0,
          chart: e
        }));

        return e;
      }
    },
    draw: function draw(t) {
      var e = this;
      e.clear(), ut.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== Ee.notify(e, "beforeDraw", [t]) && (ut.each(e.boxes, function (t) {
        t.draw(e.chartArea);
      }, e), e.drawDatasets(t), e._drawTooltip(t), Ee.notify(e, "afterDraw", [t]));
    },
    transition: function transition(t) {
      for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) {
        this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
      }

      this.tooltip.transition(t);
    },
    drawDatasets: function drawDatasets(t) {
      var e = this;

      if (!1 !== Ee.notify(e, "beforeDatasetsDraw", [t])) {
        for (var i = (e.data.datasets || []).length - 1; i >= 0; --i) {
          e.isDatasetVisible(i) && e.drawDataset(i, t);
        }

        Ee.notify(e, "afterDatasetsDraw", [t]);
      }
    },
    drawDataset: function drawDataset(t, e) {
      var i = this.getDatasetMeta(t),
          n = {
        meta: i,
        index: t,
        easingValue: e
      };
      !1 !== Ee.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), Ee.notify(this, "afterDatasetDraw", [n]));
    },
    _drawTooltip: function _drawTooltip(t) {
      var e = this.tooltip,
          i = {
        tooltip: e,
        easingValue: t
      };
      !1 !== Ee.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), Ee.notify(this, "afterTooltipDraw", [i]));
    },
    getElementAtEvent: function getElementAtEvent(t) {
      return ve.modes.single(this, t);
    },
    getElementsAtEvent: function getElementsAtEvent(t) {
      return ve.modes.label(this, t, {
        intersect: !0
      });
    },
    getElementsAtXAxis: function getElementsAtXAxis(t) {
      return ve.modes["x-axis"](this, t, {
        intersect: !0
      });
    },
    getElementsAtEventForMode: function getElementsAtEventForMode(t, e, i) {
      var n = ve.modes[e];
      return "function" == typeof n ? n(this, t, i) : [];
    },
    getDatasetAtEvent: function getDatasetAtEvent(t) {
      return ve.modes.dataset(this, t, {
        intersect: !0
      });
    },
    getDatasetMeta: function getDatasetMeta(t) {
      var e = this.data.datasets[t];
      e._meta || (e._meta = {});
      var i = e._meta[this.id];
      return i || (i = e._meta[this.id] = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null
      }), i;
    },
    getVisibleDatasetCount: function getVisibleDatasetCount() {
      for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) {
        this.isDatasetVisible(e) && t++;
      }

      return t;
    },
    isDatasetVisible: function isDatasetVisible(t) {
      var e = this.getDatasetMeta(t);
      return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
    },
    generateLegend: function generateLegend() {
      return this.options.legendCallback(this);
    },
    destroyDatasetMeta: function destroyDatasetMeta(t) {
      var e = this.id,
          i = this.data.datasets[t],
          n = i._meta && i._meta[e];
      n && (n.controller.destroy(), delete i._meta[e]);
    },
    destroy: function destroy() {
      var t,
          e,
          i = this,
          n = i.canvas;

      for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) {
        i.destroyDatasetMeta(t);
      }

      n && (i.unbindEvents(), ut.canvas.clear(i), Ve.releaseContext(i.ctx), i.canvas = null, i.ctx = null), Ee.notify(i, "destroy"), delete ni.instances[i.id];
    },
    toBase64Image: function toBase64Image() {
      return this.canvas.toDataURL.apply(this.canvas, arguments);
    },
    initToolTip: function initToolTip() {
      var t = this;
      t.tooltip = new Je({
        _chart: t,
        _chartInstance: t,
        _data: t.data,
        _options: t.options.tooltips
      }, t);
    },
    bindEvents: function bindEvents() {
      var t = this,
          e = t._listeners = {},
          i = function i() {
        t.eventHandler.apply(t, arguments);
      };

      ut.each(t.options.events, function (n) {
        Ve.addEventListener(t, n, i), e[n] = i;
      }), t.options.responsive && (i = function i() {
        t.resize();
      }, Ve.addEventListener(t, "resize", i), e.resize = i);
    },
    unbindEvents: function unbindEvents() {
      var t = this,
          e = t._listeners;
      e && (delete t._listeners, ut.each(e, function (e, i) {
        Ve.removeEventListener(t, i, e);
      }));
    },
    updateHoverStyle: function updateHoverStyle(t, e, i) {
      var n,
          a,
          o,
          r = i ? "setHoverStyle" : "removeHoverStyle";

      for (a = 0, o = t.length; a < o; ++a) {
        (n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[r](n);
      }
    },
    eventHandler: function eventHandler(t) {
      var e = this,
          i = e.tooltip;

      if (!1 !== Ee.notify(e, "beforeEvent", [t])) {
        e._bufferedRender = !0, e._bufferedRequest = null;
        var n = e.handleEvent(t);
        i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), Ee.notify(e, "afterEvent", [t]);
        var a = e._bufferedRequest;
        return a ? e.render(a) : n && !e.animating && (e.stop(), e.render({
          duration: e.options.hover.animationDuration,
          lazy: !0
        })), e._bufferedRender = !1, e._bufferedRequest = null, e;
      }
    },
    handleEvent: function handleEvent(t) {
      var e,
          i = this,
          n = i.options || {},
          a = n.hover;
      return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, a.mode, a), ut.callback(n.onHover || n.hover.onHover, [t["native"], i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t["native"], i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, a.mode, !1), i.active.length && a.mode && i.updateHoverStyle(i.active, a.mode, !0), e = !ut.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e;
    }
  }), ni.instances = {};
  var ai = ni;
  ni.Controller = ni, ni.types = {}, ut.configMerge = ei, ut.scaleMerge = ti;

  function oi() {
    throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.");
  }

  function ri(t) {
    this.options = t || {};
  }

  ut.extend(ri.prototype, {
    formats: oi,
    parse: oi,
    format: oi,
    add: oi,
    diff: oi,
    startOf: oi,
    endOf: oi,
    _create: function _create(t) {
      return t;
    }
  }), ri.override = function (t) {
    ut.extend(ri.prototype, t);
  };
  var si = {
    _date: ri
  },
      li = {
    formatters: {
      values: function values(t) {
        return ut.isArray(t) ? t : "" + t;
      },
      linear: function linear(t, e, i) {
        var n = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
        Math.abs(n) > 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
        var a = ut.log10(Math.abs(n)),
            o = "";
        if (0 !== t) {
          if (Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4) {
            var r = ut.log10(Math.abs(t));
            o = t.toExponential(Math.floor(r) - Math.floor(a));
          } else {
            var s = -1 * Math.floor(a);
            s = Math.max(Math.min(s, 20), 0), o = t.toFixed(s);
          }
        } else o = "0";
        return o;
      },
      logarithmic: function logarithmic(t, e, i) {
        var n = t / Math.pow(10, Math.floor(ut.log10(t)));
        return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === e || e === i.length - 1 ? t.toExponential() : "";
      }
    }
  },
      di = ut.valueOrDefault,
      ui = ut.valueAtIndexOrDefault;

  function hi(t) {
    var e,
        i,
        n = [];

    for (e = 0, i = t.length; e < i; ++e) {
      n.push(t[e].label);
    }

    return n;
  }

  function ci(t, e, i) {
    return ut.isArray(e) ? ut.longestText(t, i, e) : t.measureText(e).width;
  }

  st._set("scale", {
    display: !0,
    position: "left",
    offset: !1,
    gridLines: {
      display: !0,
      color: "rgba(0, 0, 0, 0.1)",
      lineWidth: 1,
      drawBorder: !0,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickMarkLength: 10,
      zeroLineWidth: 1,
      zeroLineColor: "rgba(0,0,0,0.25)",
      zeroLineBorderDash: [],
      zeroLineBorderDashOffset: 0,
      offsetGridLines: !1,
      borderDash: [],
      borderDashOffset: 0
    },
    scaleLabel: {
      display: !1,
      labelString: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      beginAtZero: !1,
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      padding: 0,
      reverse: !1,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 0,
      labelOffset: 0,
      callback: li.formatters.values,
      minor: {},
      major: {}
    }
  });

  var fi = pt.extend({
    getPadding: function getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0
      };
    },
    getTicks: function getTicks() {
      return this._ticks;
    },
    mergeTicksOptions: function mergeTicksOptions() {
      var t = this.options.ticks;

      for (var e in !1 === t.minor && (t.minor = {
        display: !1
      }), !1 === t.major && (t.major = {
        display: !1
      }), t) {
        "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]));
      }
    },
    beforeUpdate: function beforeUpdate() {
      ut.callback(this.options.beforeUpdate, [this]);
    },
    update: function update(t, e, i) {
      var n,
          a,
          o,
          r,
          s,
          l,
          d = this;

      for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = ut.extend({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, i), d._maxLabelLines = 0, d.longestLabelWidth = 0, d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), s = d.buildTicks() || [], s = d.afterBuildTicks(s) || s, d.beforeTickToLabelConversion(), o = d.convertTicksToLabels(s) || d.ticks, d.afterTickToLabelConversion(), d.ticks = o, n = 0, a = o.length; n < a; ++n) {
        r = o[n], (l = s[n]) ? l.label = r : s.push(l = {
          label: r,
          major: !1
        });
      }

      return d._ticks = s, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize;
    },
    afterUpdate: function afterUpdate() {
      ut.callback(this.options.afterUpdate, [this]);
    },
    beforeSetDimensions: function beforeSetDimensions() {
      ut.callback(this.options.beforeSetDimensions, [this]);
    },
    setDimensions: function setDimensions() {
      var t = this;
      t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
    },
    afterSetDimensions: function afterSetDimensions() {
      ut.callback(this.options.afterSetDimensions, [this]);
    },
    beforeDataLimits: function beforeDataLimits() {
      ut.callback(this.options.beforeDataLimits, [this]);
    },
    determineDataLimits: ut.noop,
    afterDataLimits: function afterDataLimits() {
      ut.callback(this.options.afterDataLimits, [this]);
    },
    beforeBuildTicks: function beforeBuildTicks() {
      ut.callback(this.options.beforeBuildTicks, [this]);
    },
    buildTicks: ut.noop,
    afterBuildTicks: function afterBuildTicks(t) {
      var e = this;
      return ut.isArray(t) && t.length ? ut.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = ut.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t);
    },
    beforeTickToLabelConversion: function beforeTickToLabelConversion() {
      ut.callback(this.options.beforeTickToLabelConversion, [this]);
    },
    convertTicksToLabels: function convertTicksToLabels() {
      var t = this.options.ticks;
      this.ticks = this.ticks.map(t.userCallback || t.callback, this);
    },
    afterTickToLabelConversion: function afterTickToLabelConversion() {
      ut.callback(this.options.afterTickToLabelConversion, [this]);
    },
    beforeCalculateTickRotation: function beforeCalculateTickRotation() {
      ut.callback(this.options.beforeCalculateTickRotation, [this]);
    },
    calculateTickRotation: function calculateTickRotation() {
      var t = this,
          e = t.ctx,
          i = t.options.ticks,
          n = hi(t._ticks),
          a = ut.options._parseFont(i);

      e.font = a.string;
      var o = i.minRotation || 0;
      if (n.length && t.options.display && t.isHorizontal()) for (var r, s = ut.longestText(e, a.string, n, t.longestTextCache), l = s, d = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; l > d && o < i.maxRotation;) {
        var u = ut.toRadians(o);

        if (r = Math.cos(u), Math.sin(u) * s > t.maxHeight) {
          o--;
          break;
        }

        o++, l = r * s;
      }
      t.labelRotation = o;
    },
    afterCalculateTickRotation: function afterCalculateTickRotation() {
      ut.callback(this.options.afterCalculateTickRotation, [this]);
    },
    beforeFit: function beforeFit() {
      ut.callback(this.options.beforeFit, [this]);
    },
    fit: function fit() {
      var t = this,
          e = t.minSize = {
        width: 0,
        height: 0
      },
          i = hi(t._ticks),
          n = t.options,
          a = n.ticks,
          o = n.scaleLabel,
          r = n.gridLines,
          s = t._isVisible(),
          l = n.position,
          d = t.isHorizontal(),
          u = ut.options._parseFont,
          h = u(a),
          c = n.gridLines.tickMarkLength;

      if (e.width = d ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : s && r.drawTicks ? c : 0, e.height = d ? s && r.drawTicks ? c : 0 : t.maxHeight, o.display && s) {
        var f = u(o),
            g = ut.options.toPadding(o.padding),
            p = f.lineHeight + g.height;
        d ? e.height += p : e.width += p;
      }

      if (a.display && s) {
        var m = ut.longestText(t.ctx, h.string, i, t.longestTextCache),
            v = ut.numberOfLabelLines(i),
            b = .5 * h.size,
            x = t.options.ticks.padding;

        if (t._maxLabelLines = v, t.longestLabelWidth = m, d) {
          var y = ut.toRadians(t.labelRotation),
              k = Math.cos(y),
              w = Math.sin(y) * m + h.lineHeight * v + b;
          e.height = Math.min(t.maxHeight, e.height + w + x), t.ctx.font = h.string;

          var M,
              _,
              C = ci(t.ctx, i[0], h.string),
              S = ci(t.ctx, i[i.length - 1], h.string),
              P = t.getPixelForTick(0) - t.left,
              I = t.right - t.getPixelForTick(i.length - 1);

          0 !== t.labelRotation ? (M = "bottom" === l ? k * C : k * b, _ = "bottom" === l ? k * b : k * S) : (M = C / 2, _ = S / 2), t.paddingLeft = Math.max(M - P, 0) + 3, t.paddingRight = Math.max(_ - I, 0) + 3;
        } else a.mirror ? m = 0 : m += x + b, e.width = Math.min(t.maxWidth, e.width + m), t.paddingTop = h.size / 2, t.paddingBottom = h.size / 2;
      }

      t.handleMargins(), t.width = e.width, t.height = e.height;
    },
    handleMargins: function handleMargins() {
      var t = this;
      t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
    },
    afterFit: function afterFit() {
      ut.callback(this.options.afterFit, [this]);
    },
    isHorizontal: function isHorizontal() {
      return "top" === this.options.position || "bottom" === this.options.position;
    },
    isFullWidth: function isFullWidth() {
      return this.options.fullWidth;
    },
    getRightValue: function getRightValue(t) {
      if (ut.isNullOrUndef(t)) return NaN;
      if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
      if (t) if (this.isHorizontal()) {
        if (void 0 !== t.x) return this.getRightValue(t.x);
      } else if (void 0 !== t.y) return this.getRightValue(t.y);
      return t;
    },
    getLabelForIndex: ut.noop,
    getPixelForValue: ut.noop,
    getValueForPixel: ut.noop,
    getPixelForTick: function getPixelForTick(t) {
      var e = this,
          i = e.options.offset;

      if (e.isHorizontal()) {
        var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
            a = n * t + e.paddingLeft;
        i && (a += n / 2);
        var o = e.left + a;
        return o += e.isFullWidth() ? e.margins.left : 0;
      }

      var r = e.height - (e.paddingTop + e.paddingBottom);
      return e.top + t * (r / (e._ticks.length - 1));
    },
    getPixelForDecimal: function getPixelForDecimal(t) {
      var e = this;

      if (e.isHorizontal()) {
        var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
            n = e.left + i;
        return n += e.isFullWidth() ? e.margins.left : 0;
      }

      return e.top + t * e.height;
    },
    getBasePixel: function getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    },
    getBaseValue: function getBaseValue() {
      var t = this.min,
          e = this.max;
      return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
    },
    _autoSkip: function _autoSkip(t) {
      var e,
          i,
          n = this,
          a = n.isHorizontal(),
          o = n.options.ticks.minor,
          r = t.length,
          s = !1,
          l = o.maxTicksLimit,
          d = n._tickSize() * (r - 1),
          u = a ? n.width - (n.paddingLeft + n.paddingRight) : n.height - (n.paddingTop + n.PaddingBottom),
          h = [];

      for (d > u && (s = 1 + Math.floor(d / u)), r > l && (s = Math.max(s, 1 + Math.floor(r / l))), e = 0; e < r; e++) {
        i = t[e], s > 1 && e % s > 0 && delete i.label, h.push(i);
      }

      return h;
    },
    _tickSize: function _tickSize() {
      var t = this,
          e = t.isHorizontal(),
          i = t.options.ticks.minor,
          n = ut.toRadians(t.labelRotation),
          a = Math.abs(Math.cos(n)),
          o = Math.abs(Math.sin(n)),
          r = i.autoSkipPadding || 0,
          s = t.longestLabelWidth + r || 0,
          l = ut.options._parseFont(i),
          d = t._maxLabelLines * l.lineHeight + r || 0;

      return e ? d * a > s * o ? s / a : d / o : d * o < s * a ? d / a : s / o;
    },
    _isVisible: function _isVisible() {
      var t,
          e,
          i,
          n = this.chart,
          a = this.options.display;
      if ("auto" !== a) return !!a;

      for (t = 0, e = n.data.datasets.length; t < e; ++t) {
        if (n.isDatasetVisible(t) && ((i = n.getDatasetMeta(t)).xAxisID === this.id || i.yAxisID === this.id)) return !0;
      }

      return !1;
    },
    draw: function draw(t) {
      var e = this,
          i = e.options;

      if (e._isVisible()) {
        var n,
            a,
            o,
            r = e.chart,
            s = e.ctx,
            l = st.global.defaultFontColor,
            d = i.ticks.minor,
            u = i.ticks.major || d,
            h = i.gridLines,
            c = i.scaleLabel,
            f = i.position,
            g = 0 !== e.labelRotation,
            p = d.mirror,
            m = e.isHorizontal(),
            v = ut.options._parseFont,
            b = d.display && d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
            x = di(d.fontColor, l),
            y = v(d),
            k = y.lineHeight,
            w = di(u.fontColor, l),
            M = v(u),
            _ = d.padding,
            C = d.labelOffset,
            S = h.drawTicks ? h.tickMarkLength : 0,
            P = di(c.fontColor, l),
            I = v(c),
            A = ut.options.toPadding(c.padding),
            D = ut.toRadians(e.labelRotation),
            T = [],
            F = h.drawBorder ? ui(h.lineWidth, 0, 0) : 0,
            L = ut._alignPixel;
        "top" === f ? (n = L(r, e.bottom, F), a = e.bottom - S, o = n - F / 2) : "bottom" === f ? (n = L(r, e.top, F), a = n + F / 2, o = e.top + S) : "left" === f ? (n = L(r, e.right, F), a = e.right - S, o = n - F / 2) : (n = L(r, e.left, F), a = n + F / 2, o = e.left + S);

        if (ut.each(b, function (n, s) {
          if (!ut.isNullOrUndef(n.label)) {
            var l,
                d,
                u,
                c,
                v,
                b,
                x,
                y,
                w,
                M,
                P,
                I,
                A,
                R,
                O,
                z,
                B = n.label;
            s === e.zeroLineIndex && i.offset === h.offsetGridLines ? (l = h.zeroLineWidth, d = h.zeroLineColor, u = h.zeroLineBorderDash || [], c = h.zeroLineBorderDashOffset || 0) : (l = ui(h.lineWidth, s), d = ui(h.color, s), u = h.borderDash || [], c = h.borderDashOffset || 0);

            var N = ut.isArray(B) ? B.length : 1,
                W = function (t, e, i) {
              var n = t.getPixelForTick(e);
              return i && (1 === t.getTicks().length ? n -= t.isHorizontal() ? Math.max(n - t.left, t.right - n) : Math.max(n - t.top, t.bottom - n) : n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n;
            }(e, s, h.offsetGridLines);

            if (m) {
              var V = S + _;
              W < e.left - 1e-7 && (d = "rgba(0,0,0,0)"), v = x = w = P = L(r, W, l), b = a, y = o, A = e.getPixelForTick(s) + C, "top" === f ? (M = L(r, t.top, F) + F / 2, I = t.bottom, O = ((g ? 1 : .5) - N) * k, z = g ? "left" : "center", R = e.bottom - V) : (M = t.top, I = L(r, t.bottom, F) - F / 2, O = (g ? 0 : .5) * k, z = g ? "right" : "center", R = e.top + V);
            } else {
              var E = (p ? 0 : S) + _;
              W < e.top - 1e-7 && (d = "rgba(0,0,0,0)"), v = a, x = o, b = y = M = I = L(r, W, l), R = e.getPixelForTick(s) + C, O = (1 - N) * k / 2, "left" === f ? (w = L(r, t.left, F) + F / 2, P = t.right, z = p ? "left" : "right", A = e.right - E) : (w = t.left, P = L(r, t.right, F) - F / 2, z = p ? "right" : "left", A = e.left + E);
            }

            T.push({
              tx1: v,
              ty1: b,
              tx2: x,
              ty2: y,
              x1: w,
              y1: M,
              x2: P,
              y2: I,
              labelX: A,
              labelY: R,
              glWidth: l,
              glColor: d,
              glBorderDash: u,
              glBorderDashOffset: c,
              rotation: -1 * D,
              label: B,
              major: n.major,
              textOffset: O,
              textAlign: z
            });
          }
        }), ut.each(T, function (t) {
          var e = t.glWidth,
              i = t.glColor;

          if (h.display && e && i && (s.save(), s.lineWidth = e, s.strokeStyle = i, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
            s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? M.string : y.string, s.fillStyle = t.major ? w : x, s.textBaseline = "middle", s.textAlign = t.textAlign;
            var n = t.label,
                a = t.textOffset;
            if (ut.isArray(n)) for (var o = 0; o < n.length; ++o) {
              s.fillText("" + n[o], 0, a), a += k;
            } else s.fillText(n, 0, a);
            s.restore();
          }
        }), c.display) {
          var R,
              O,
              z = 0,
              B = I.lineHeight / 2;
          if (m) R = e.left + (e.right - e.left) / 2, O = "bottom" === f ? e.bottom - B - A.bottom : e.top + B + A.top;else {
            var N = "left" === f;
            R = N ? e.left + B + A.top : e.right - B - A.top, O = e.top + (e.bottom - e.top) / 2, z = N ? -.5 * Math.PI : .5 * Math.PI;
          }
          s.save(), s.translate(R, O), s.rotate(z), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = P, s.font = I.string, s.fillText(c.labelString, 0, 0), s.restore();
        }

        if (F) {
          var W,
              V,
              E,
              H,
              j = F,
              q = ui(h.lineWidth, b.length - 1, 0);
          m ? (W = L(r, e.left, j) - j / 2, V = L(r, e.right, q) + q / 2, E = H = n) : (E = L(r, e.top, j) - j / 2, H = L(r, e.bottom, q) + q / 2, W = V = n), s.lineWidth = F, s.strokeStyle = ui(h.color, 0), s.beginPath(), s.moveTo(W, E), s.lineTo(V, H), s.stroke();
        }
      }
    }
  }),
      gi = fi.extend({
    getLabels: function getLabels() {
      var t = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
    },
    determineDataLimits: function determineDataLimits() {
      var t,
          e = this,
          i = e.getLabels();
      e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex];
    },
    buildTicks: function buildTicks() {
      var t = this,
          e = t.getLabels();
      t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
    },
    getLabelForIndex: function getLabelForIndex(t, e) {
      var i = this,
          n = i.chart;
      return n.getDatasetMeta(e).controller._getValueScaleId() === i.id ? i.getRightValue(n.data.datasets[e].data[t]) : i.ticks[t - i.minIndex];
    },
    getPixelForValue: function getPixelForValue(t, e) {
      var i,
          n = this,
          a = n.options.offset,
          o = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);

      if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
        t = i || t;
        var r = n.getLabels().indexOf(t);
        e = -1 !== r ? r : e;
      }

      if (n.isHorizontal()) {
        var s = n.width / o,
            l = s * (e - n.minIndex);
        return a && (l += s / 2), n.left + l;
      }

      var d = n.height / o,
          u = d * (e - n.minIndex);
      return a && (u += d / 2), n.top + u;
    },
    getPixelForTick: function getPixelForTick(t) {
      return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
    },
    getValueForPixel: function getValueForPixel(t) {
      var e = this,
          i = e.options.offset,
          n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
          a = e.isHorizontal(),
          o = (a ? e.width : e.height) / n;
      return t -= a ? e.left : e.top, i && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex;
    },
    getBasePixel: function getBasePixel() {
      return this.bottom;
    }
  }),
      pi = {
    position: "bottom"
  };
  gi._defaults = pi;
  var mi = ut.noop,
      vi = ut.isNullOrUndef;
  var bi = fi.extend({
    getRightValue: function getRightValue(t) {
      return "string" == typeof t ? +t : fi.prototype.getRightValue.call(this, t);
    },
    handleTickRangeOptions: function handleTickRangeOptions() {
      var t = this,
          e = t.options.ticks;

      if (e.beginAtZero) {
        var i = ut.sign(t.min),
            n = ut.sign(t.max);
        i < 0 && n < 0 ? t.max = 0 : i > 0 && n > 0 && (t.min = 0);
      }

      var a = void 0 !== e.min || void 0 !== e.suggestedMin,
          o = void 0 !== e.max || void 0 !== e.suggestedMax;
      void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a !== o && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--);
    },
    getTickLimit: function getTickLimit() {
      var t,
          e = this.options.ticks,
          i = e.stepSize,
          n = e.maxTicksLimit;
      return i ? t = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1 : (t = this._computeTickLimit(), n = n || 11), n && (t = Math.min(n, t)), t;
    },
    _computeTickLimit: function _computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    },
    handleDirectionalChanges: mi,
    buildTicks: function buildTicks() {
      var t = this,
          e = t.options.ticks,
          i = t.getTickLimit(),
          n = {
        maxTicks: i = Math.max(2, i),
        min: e.min,
        max: e.max,
        precision: e.precision,
        stepSize: ut.valueOrDefault(e.fixedStepSize, e.stepSize)
      },
          a = t.ticks = function (t, e) {
        var i,
            n,
            a,
            o,
            r = [],
            s = t.stepSize,
            l = s || 1,
            d = t.maxTicks - 1,
            u = t.min,
            h = t.max,
            c = t.precision,
            f = e.min,
            g = e.max,
            p = ut.niceNum((g - f) / d / l) * l;
        if (p < 1e-14 && vi(u) && vi(h)) return [f, g];
        (o = Math.ceil(g / p) - Math.floor(f / p)) > d && (p = ut.niceNum(o * p / d / l) * l), s || vi(c) ? i = Math.pow(10, ut._decimalPlaces(p)) : (i = Math.pow(10, c), p = Math.ceil(p * i) / i), n = Math.floor(f / p) * p, a = Math.ceil(g / p) * p, s && (!vi(u) && ut.almostWhole(u / p, p / 1e3) && (n = u), !vi(h) && ut.almostWhole(h / p, p / 1e3) && (a = h)), o = (a - n) / p, o = ut.almostEquals(o, Math.round(o), p / 1e3) ? Math.round(o) : Math.ceil(o), n = Math.round(n * i) / i, a = Math.round(a * i) / i, r.push(vi(u) ? n : u);

        for (var m = 1; m < o; ++m) {
          r.push(Math.round((n + m * p) * i) / i);
        }

        return r.push(vi(h) ? a : h), r;
      }(n, t);

      t.handleDirectionalChanges(), t.max = ut.max(a), t.min = ut.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
    },
    convertTicksToLabels: function convertTicksToLabels() {
      var t = this;
      t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), fi.prototype.convertTicksToLabels.call(t);
    }
  }),
      xi = {
    position: "left",
    ticks: {
      callback: li.formatters.linear
    }
  },
      yi = bi.extend({
    determineDataLimits: function determineDataLimits() {
      var t = this,
          e = t.options,
          i = t.chart,
          n = i.data.datasets,
          a = t.isHorizontal();

      function o(e) {
        return a ? e.xAxisID === t.id : e.yAxisID === t.id;
      }

      t.min = null, t.max = null;
      var r = e.stacked;

      if (void 0 === r && ut.each(n, function (t, e) {
        if (!r) {
          var n = i.getDatasetMeta(e);
          i.isDatasetVisible(e) && o(n) && void 0 !== n.stack && (r = !0);
        }
      }), e.stacked || r) {
        var s = {};
        ut.each(n, function (n, a) {
          var r = i.getDatasetMeta(a),
              l = [r.type, void 0 === e.stacked && void 0 === r.stack ? a : "", r.stack].join(".");
          void 0 === s[l] && (s[l] = {
            positiveValues: [],
            negativeValues: []
          });
          var d = s[l].positiveValues,
              u = s[l].negativeValues;
          i.isDatasetVisible(a) && o(r) && ut.each(n.data, function (i, n) {
            var a = +t.getRightValue(i);
            isNaN(a) || r.data[n].hidden || (d[n] = d[n] || 0, u[n] = u[n] || 0, e.relativePoints ? d[n] = 100 : a < 0 ? u[n] += a : d[n] += a);
          });
        }), ut.each(s, function (e) {
          var i = e.positiveValues.concat(e.negativeValues),
              n = ut.min(i),
              a = ut.max(i);
          t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? a : Math.max(t.max, a);
        });
      } else ut.each(n, function (e, n) {
        var a = i.getDatasetMeta(n);
        i.isDatasetVisible(n) && o(a) && ut.each(e.data, function (e, i) {
          var n = +t.getRightValue(e);
          isNaN(n) || a.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n));
        });
      });

      t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions();
    },
    _computeTickLimit: function _computeTickLimit() {
      var t;
      return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = ut.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight));
    },
    handleDirectionalChanges: function handleDirectionalChanges() {
      this.isHorizontal() || this.ticks.reverse();
    },
    getLabelForIndex: function getLabelForIndex(t, e) {
      return +this.getRightValue(this.chart.data.datasets[e].data[t]);
    },
    getPixelForValue: function getPixelForValue(t) {
      var e = this,
          i = e.start,
          n = +e.getRightValue(t),
          a = e.end - i;
      return e.isHorizontal() ? e.left + e.width / a * (n - i) : e.bottom - e.height / a * (n - i);
    },
    getValueForPixel: function getValueForPixel(t) {
      var e = this,
          i = e.isHorizontal(),
          n = i ? e.width : e.height,
          a = (i ? t - e.left : e.bottom - t) / n;
      return e.start + (e.end - e.start) * a;
    },
    getPixelForTick: function getPixelForTick(t) {
      return this.getPixelForValue(this.ticksAsNumbers[t]);
    }
  }),
      ki = xi;
  yi._defaults = ki;
  var wi = ut.valueOrDefault;
  var Mi = {
    position: "left",
    ticks: {
      callback: li.formatters.logarithmic
    }
  };

  function _i(t, e) {
    return ut.isFinite(t) && t >= 0 ? t : e;
  }

  var Ci = fi.extend({
    determineDataLimits: function determineDataLimits() {
      var t = this,
          e = t.options,
          i = t.chart,
          n = i.data.datasets,
          a = t.isHorizontal();

      function o(e) {
        return a ? e.xAxisID === t.id : e.yAxisID === t.id;
      }

      t.min = null, t.max = null, t.minNotZero = null;
      var r = e.stacked;

      if (void 0 === r && ut.each(n, function (t, e) {
        if (!r) {
          var n = i.getDatasetMeta(e);
          i.isDatasetVisible(e) && o(n) && void 0 !== n.stack && (r = !0);
        }
      }), e.stacked || r) {
        var s = {};
        ut.each(n, function (n, a) {
          var r = i.getDatasetMeta(a),
              l = [r.type, void 0 === e.stacked && void 0 === r.stack ? a : "", r.stack].join(".");
          i.isDatasetVisible(a) && o(r) && (void 0 === s[l] && (s[l] = []), ut.each(n.data, function (e, i) {
            var n = s[l],
                a = +t.getRightValue(e);
            isNaN(a) || r.data[i].hidden || a < 0 || (n[i] = n[i] || 0, n[i] += a);
          }));
        }), ut.each(s, function (e) {
          if (e.length > 0) {
            var i = ut.min(e),
                n = ut.max(e);
            t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? n : Math.max(t.max, n);
          }
        });
      } else ut.each(n, function (e, n) {
        var a = i.getDatasetMeta(n);
        i.isDatasetVisible(n) && o(a) && ut.each(e.data, function (e, i) {
          var n = +t.getRightValue(e);
          isNaN(n) || a.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n));
        });
      });

      this.handleTickRangeOptions();
    },
    handleTickRangeOptions: function handleTickRangeOptions() {
      var t = this,
          e = t.options.ticks;
      t.min = _i(e.min, t.min), t.max = _i(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(ut.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(ut.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(ut.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(ut.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(ut.log10(t.max))) : t.minNotZero = 1);
    },
    buildTicks: function buildTicks() {
      var t = this,
          e = t.options.ticks,
          i = !t.isHorizontal(),
          n = {
        min: _i(e.min),
        max: _i(e.max)
      },
          a = t.ticks = function (t, e) {
        var i,
            n,
            a = [],
            o = wi(t.min, Math.pow(10, Math.floor(ut.log10(e.min)))),
            r = Math.floor(ut.log10(e.max)),
            s = Math.ceil(e.max / Math.pow(10, r));
        0 === o ? (i = Math.floor(ut.log10(e.minNotZero)), n = Math.floor(e.minNotZero / Math.pow(10, i)), a.push(o), o = n * Math.pow(10, i)) : (i = Math.floor(ut.log10(o)), n = Math.floor(o / Math.pow(10, i)));
        var l = i < 0 ? Math.pow(10, Math.abs(i)) : 1;

        do {
          a.push(o), 10 == ++n && (n = 1, l = ++i >= 0 ? 1 : l), o = Math.round(n * Math.pow(10, i) * l) / l;
        } while (i < r || i === r && n < s);

        var d = wi(t.max, o);
        return a.push(d), a;
      }(n, t);

      t.max = ut.max(a), t.min = ut.min(a), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && a.reverse();
    },
    convertTicksToLabels: function convertTicksToLabels() {
      this.tickValues = this.ticks.slice(), fi.prototype.convertTicksToLabels.call(this);
    },
    getLabelForIndex: function getLabelForIndex(t, e) {
      return +this.getRightValue(this.chart.data.datasets[e].data[t]);
    },
    getPixelForTick: function getPixelForTick(t) {
      return this.getPixelForValue(this.tickValues[t]);
    },
    _getFirstTickValue: function _getFirstTickValue(t) {
      var e = Math.floor(ut.log10(t));
      return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
    },
    getPixelForValue: function getPixelForValue(t) {
      var e,
          i,
          n,
          a,
          o,
          r = this,
          s = r.options.ticks,
          l = s.reverse,
          d = ut.log10,
          u = r._getFirstTickValue(r.minNotZero),
          h = 0;

      return t = +r.getRightValue(t), l ? (n = r.end, a = r.start, o = -1) : (n = r.start, a = r.end, o = 1), r.isHorizontal() ? (e = r.width, i = l ? r.right : r.left) : (e = r.height, o *= -1, i = l ? r.top : r.bottom), t !== n && (0 === n && (e -= h = wi(s.fontSize, st.global.defaultFontSize), n = u), 0 !== t && (h += e / (d(a) - d(n)) * (d(t) - d(n))), i += o * h), i;
    },
    getValueForPixel: function getValueForPixel(t) {
      var e,
          i,
          n,
          a,
          o = this,
          r = o.options.ticks,
          s = r.reverse,
          l = ut.log10,
          d = o._getFirstTickValue(o.minNotZero);

      if (s ? (i = o.end, n = o.start) : (i = o.start, n = o.end), o.isHorizontal() ? (e = o.width, a = s ? o.right - t : t - o.left) : (e = o.height, a = s ? t - o.top : o.bottom - t), a !== i) {
        if (0 === i) {
          var u = wi(r.fontSize, st.global.defaultFontSize);
          a -= u, e -= u, i = d;
        }

        a *= l(n) - l(i), a /= e, a = Math.pow(10, l(i) + a);
      }

      return a;
    }
  }),
      Si = Mi;
  Ci._defaults = Si;
  var Pi = ut.valueOrDefault,
      Ii = ut.valueAtIndexOrDefault,
      Ai = ut.options.resolve,
      Di = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      color: "rgba(0, 0, 0, 0.1)",
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0
    },
    gridLines: {
      circular: !1
    },
    ticks: {
      showLabelBackdrop: !0,
      backdropColor: "rgba(255,255,255,0.75)",
      backdropPaddingY: 2,
      backdropPaddingX: 2,
      callback: li.formatters.linear
    },
    pointLabels: {
      display: !0,
      fontSize: 10,
      callback: function callback(t) {
        return t;
      }
    }
  };

  function Ti(t) {
    var e = t.options;
    return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
  }

  function Fi(t) {
    var e = t.ticks;
    return e.display && t.display ? Pi(e.fontSize, st.global.defaultFontSize) + 2 * e.backdropPaddingY : 0;
  }

  function Li(t, e, i, n, a) {
    return t === n || t === a ? {
      start: e - i / 2,
      end: e + i / 2
    } : t < n || t > a ? {
      start: e - i,
      end: e
    } : {
      start: e,
      end: e + i
    };
  }

  function Ri(t) {
    return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
  }

  function Oi(t, e, i, n) {
    var a,
        o,
        r = i.y + n / 2;
    if (ut.isArray(e)) for (a = 0, o = e.length; a < o; ++a) {
      t.fillText(e[a], i.x, r), r += n;
    } else t.fillText(e, i.x, r);
  }

  function zi(t, e, i) {
    90 === t || 270 === t ? i.y -= e.h / 2 : (t > 270 || t < 90) && (i.y -= e.h);
  }

  function Bi(t) {
    return ut.isNumber(t) ? t : 0;
  }

  var Ni = bi.extend({
    setDimensions: function setDimensions() {
      var t = this;
      t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Fi(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2;
    },
    determineDataLimits: function determineDataLimits() {
      var t = this,
          e = t.chart,
          i = Number.POSITIVE_INFINITY,
          n = Number.NEGATIVE_INFINITY;
      ut.each(e.data.datasets, function (a, o) {
        if (e.isDatasetVisible(o)) {
          var r = e.getDatasetMeta(o);
          ut.each(a.data, function (e, a) {
            var o = +t.getRightValue(e);
            isNaN(o) || r.data[a].hidden || (i = Math.min(o, i), n = Math.max(o, n));
          });
        }
      }), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions();
    },
    _computeTickLimit: function _computeTickLimit() {
      return Math.ceil(this.drawingArea / Fi(this.options));
    },
    convertTicksToLabels: function convertTicksToLabels() {
      var t = this;
      bi.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t);
    },
    getLabelForIndex: function getLabelForIndex(t, e) {
      return +this.getRightValue(this.chart.data.datasets[e].data[t]);
    },
    fit: function fit() {
      var t = this.options;
      t.display && t.pointLabels.display ? function (t) {
        var e,
            i,
            n,
            a = ut.options._parseFont(t.options.pointLabels),
            o = {
          l: 0,
          r: t.width,
          t: 0,
          b: t.height - t.paddingTop
        },
            r = {};

        t.ctx.font = a.string, t._pointLabelSizes = [];
        var s,
            l,
            d,
            u = Ti(t);

        for (e = 0; e < u; e++) {
          n = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = a.lineHeight, d = t.pointLabels[e] || "", i = ut.isArray(d) ? {
            w: ut.longestText(s, s.font, d),
            h: d.length * l
          } : {
            w: s.measureText(d).width,
            h: l
          }, t._pointLabelSizes[e] = i;
          var h = t.getIndexAngle(e),
              c = ut.toDegrees(h) % 360,
              f = Li(c, n.x, i.w, 0, 180),
              g = Li(c, n.y, i.h, 90, 270);
          f.start < o.l && (o.l = f.start, r.l = h), f.end > o.r && (o.r = f.end, r.r = h), g.start < o.t && (o.t = g.start, r.t = h), g.end > o.b && (o.b = g.end, r.b = h);
        }

        t.setReductions(t.drawingArea, o, r);
      }(this) : this.setCenterPoint(0, 0, 0, 0);
    },
    setReductions: function setReductions(t, e, i) {
      var n = this,
          a = e.l / Math.sin(i.l),
          o = Math.max(e.r - n.width, 0) / Math.sin(i.r),
          r = -e.t / Math.cos(i.t),
          s = -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(i.b);
      a = Bi(a), o = Bi(o), r = Bi(r), s = Bi(s), n.drawingArea = Math.min(Math.floor(t - (a + o) / 2), Math.floor(t - (r + s) / 2)), n.setCenterPoint(a, o, r, s);
    },
    setCenterPoint: function setCenterPoint(t, e, i, n) {
      var a = this,
          o = a.width - e - a.drawingArea,
          r = t + a.drawingArea,
          s = i + a.drawingArea,
          l = a.height - a.paddingTop - n - a.drawingArea;
      a.xCenter = Math.floor((r + o) / 2 + a.left), a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop);
    },
    getIndexAngle: function getIndexAngle(t) {
      return t * (2 * Math.PI / Ti(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360;
    },
    getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
      var e = this;
      if (null === t) return 0;
      var i = e.drawingArea / (e.max - e.min);
      return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i;
    },
    getPointPosition: function getPointPosition(t, e) {
      var i = this.getIndexAngle(t) - Math.PI / 2;
      return {
        x: Math.cos(i) * e + this.xCenter,
        y: Math.sin(i) * e + this.yCenter
      };
    },
    getPointPositionForValue: function getPointPositionForValue(t, e) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    },
    getBasePosition: function getBasePosition() {
      var t = this.min,
          e = this.max;
      return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0);
    },
    draw: function draw() {
      var t = this,
          e = t.options,
          i = e.gridLines,
          n = e.ticks;

      if (e.display) {
        var a = t.ctx,
            o = this.getIndexAngle(0),
            r = ut.options._parseFont(n);

        (e.angleLines.display || e.pointLabels.display) && function (t) {
          var e = t.ctx,
              i = t.options,
              n = i.angleLines,
              a = i.gridLines,
              o = i.pointLabels,
              r = Pi(n.lineWidth, a.lineWidth),
              s = Pi(n.color, a.color),
              l = Fi(i);
          e.save(), e.lineWidth = r, e.strokeStyle = s, e.setLineDash && (e.setLineDash(Ai([n.borderDash, a.borderDash, []])), e.lineDashOffset = Ai([n.borderDashOffset, a.borderDashOffset, 0]));

          var d = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
              u = ut.options._parseFont(o);

          e.font = u.string, e.textBaseline = "middle";

          for (var h = Ti(t) - 1; h >= 0; h--) {
            if (n.display && r && s) {
              var c = t.getPointPosition(h, d);
              e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(c.x, c.y), e.stroke();
            }

            if (o.display) {
              var f = 0 === h ? l / 2 : 0,
                  g = t.getPointPosition(h, d + f + 5),
                  p = Ii(o.fontColor, h, st.global.defaultFontColor);
              e.fillStyle = p;
              var m = t.getIndexAngle(h),
                  v = ut.toDegrees(m);
              e.textAlign = Ri(v), zi(v, t._pointLabelSizes[h], g), Oi(e, t.pointLabels[h] || "", g, u.lineHeight);
            }
          }

          e.restore();
        }(t), ut.each(t.ticks, function (e, s) {
          if (s > 0 || n.reverse) {
            var l = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);

            if (i.display && 0 !== s && function (t, e, i, n) {
              var a,
                  o = t.ctx,
                  r = e.circular,
                  s = Ti(t),
                  l = Ii(e.color, n - 1),
                  d = Ii(e.lineWidth, n - 1);

              if ((r || s) && l && d) {
                if (o.save(), o.strokeStyle = l, o.lineWidth = d, o.setLineDash && (o.setLineDash(e.borderDash || []), o.lineDashOffset = e.borderDashOffset || 0), o.beginPath(), r) o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI);else {
                  a = t.getPointPosition(0, i), o.moveTo(a.x, a.y);

                  for (var u = 1; u < s; u++) {
                    a = t.getPointPosition(u, i), o.lineTo(a.x, a.y);
                  }
                }
                o.closePath(), o.stroke(), o.restore();
              }
            }(t, i, l, s), n.display) {
              var d = Pi(n.fontColor, st.global.defaultFontColor);

              if (a.font = r.string, a.save(), a.translate(t.xCenter, t.yCenter), a.rotate(o), n.showLabelBackdrop) {
                var u = a.measureText(e).width;
                a.fillStyle = n.backdropColor, a.fillRect(-u / 2 - n.backdropPaddingX, -l - r.size / 2 - n.backdropPaddingY, u + 2 * n.backdropPaddingX, r.size + 2 * n.backdropPaddingY);
              }

              a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = d, a.fillText(e, 0, -l), a.restore();
            }
          }
        });
      }
    }
  }),
      Wi = Di;
  Ni._defaults = Wi;
  var Vi = ut.valueOrDefault,
      Ei = Number.MIN_SAFE_INTEGER || -9007199254740991,
      Hi = Number.MAX_SAFE_INTEGER || 9007199254740991,
      ji = {
    millisecond: {
      common: !0,
      size: 1,
      steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
    },
    second: {
      common: !0,
      size: 1e3,
      steps: [1, 2, 5, 10, 15, 30]
    },
    minute: {
      common: !0,
      size: 6e4,
      steps: [1, 2, 5, 10, 15, 30]
    },
    hour: {
      common: !0,
      size: 36e5,
      steps: [1, 2, 3, 6, 12]
    },
    day: {
      common: !0,
      size: 864e5,
      steps: [1, 2, 5]
    },
    week: {
      common: !1,
      size: 6048e5,
      steps: [1, 2, 3, 4]
    },
    month: {
      common: !0,
      size: 2628e6,
      steps: [1, 2, 3]
    },
    quarter: {
      common: !1,
      size: 7884e6,
      steps: [1, 2, 3, 4]
    },
    year: {
      common: !0,
      size: 3154e7
    }
  },
      qi = Object.keys(ji);

  function Yi(t, e) {
    return t - e;
  }

  function Ui(t) {
    var e,
        i,
        n,
        a = {},
        o = [];

    for (e = 0, i = t.length; e < i; ++e) {
      a[n = t[e]] || (a[n] = !0, o.push(n));
    }

    return o;
  }

  function Xi(t, e, i, n) {
    var a = function (t, e, i) {
      for (var n, a, o, r = 0, s = t.length - 1; r >= 0 && r <= s;) {
        if (a = t[(n = r + s >> 1) - 1] || null, o = t[n], !a) return {
          lo: null,
          hi: o
        };
        if (o[e] < i) r = n + 1;else {
          if (!(a[e] > i)) return {
            lo: a,
            hi: o
          };
          s = n - 1;
        }
      }

      return {
        lo: o,
        hi: null
      };
    }(t, e, i),
        o = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
        r = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
        s = r[e] - o[e],
        l = s ? (i - o[e]) / s : 0,
        d = (r[n] - o[n]) * l;

    return o[n] + d;
  }

  function Ki(t, e) {
    var i = t._adapter,
        n = t.options.time,
        a = n.parser,
        o = a || n.format,
        r = e;
    return "function" == typeof a && (r = a(r)), ut.isFinite(r) || (r = "string" == typeof o ? i.parse(r, o) : i.parse(r)), null !== r ? +r : (a || "function" != typeof o || (r = o(e), ut.isFinite(r) || (r = i.parse(r))), r);
  }

  function Gi(t, e) {
    if (ut.isNullOrUndef(e)) return null;
    var i = t.options.time,
        n = Ki(t, t.getRightValue(e));
    return null === n ? n : (i.round && (n = +t._adapter.startOf(n, i.round)), n);
  }

  function Zi(t) {
    for (var e = qi.indexOf(t) + 1, i = qi.length; e < i; ++e) {
      if (ji[qi[e]].common) return qi[e];
    }
  }

  function $i(t, e, i, n) {
    var a,
        o = t._adapter,
        r = t.options,
        s = r.time,
        l = s.unit || function (t, e, i, n) {
      var a,
          o,
          r,
          s = qi.length;

      for (a = qi.indexOf(t); a < s - 1; ++a) {
        if (r = (o = ji[qi[a]]).steps ? o.steps[o.steps.length - 1] : Hi, o.common && Math.ceil((i - e) / (r * o.size)) <= n) return qi[a];
      }

      return qi[s - 1];
    }(s.minUnit, e, i, n),
        d = Zi(l),
        u = Vi(s.stepSize, s.unitStepSize),
        h = "week" === l && s.isoWeekday,
        c = r.ticks.major.enabled,
        f = ji[l],
        g = e,
        p = i,
        m = [];

    for (u || (u = function (t, e, i, n) {
      var a,
          o,
          r,
          s = e - t,
          l = ji[i],
          d = l.size,
          u = l.steps;
      if (!u) return Math.ceil(s / (n * d));

      for (a = 0, o = u.length; a < o && (r = u[a], !(Math.ceil(s / (d * r)) <= n)); ++a) {
        ;
      }

      return r;
    }(e, i, l, n)), h && (g = +o.startOf(g, "isoWeek", h), p = +o.startOf(p, "isoWeek", h)), g = +o.startOf(g, h ? "day" : l), (p = +o.startOf(p, h ? "day" : l)) < i && (p = +o.add(p, 1, l)), a = g, c && d && !h && !s.round && (a = +o.startOf(a, d), a = +o.add(a, ~~((g - a) / (f.size * u)) * u, l)); a < p; a = +o.add(a, u, l)) {
      m.push(+a);
    }

    return m.push(+a), m;
  }

  var Ji = fi.extend({
    initialize: function initialize() {
      this.mergeTicksOptions(), fi.prototype.initialize.call(this);
    },
    update: function update() {
      var t = this.options,
          e = t.time || (t.time = {}),
          i = this._adapter = new si._date(t.adapters.date);
      return e.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), ut.mergeIf(e.displayFormats, i.formats()), fi.prototype.update.apply(this, arguments);
    },
    getRightValue: function getRightValue(t) {
      return t && void 0 !== t.t && (t = t.t), fi.prototype.getRightValue.call(this, t);
    },
    determineDataLimits: function determineDataLimits() {
      var t,
          e,
          i,
          n,
          a,
          o,
          r = this,
          s = r.chart,
          l = r._adapter,
          d = r.options.time,
          u = d.unit || "day",
          h = Hi,
          c = Ei,
          f = [],
          g = [],
          p = [],
          m = s.data.labels || [];

      for (t = 0, i = m.length; t < i; ++t) {
        p.push(Gi(r, m[t]));
      }

      for (t = 0, i = (s.data.datasets || []).length; t < i; ++t) {
        if (s.isDatasetVisible(t)) {
          if (a = s.data.datasets[t].data, ut.isObject(a[0])) for (g[t] = [], e = 0, n = a.length; e < n; ++e) {
            o = Gi(r, a[e]), f.push(o), g[t][e] = o;
          } else {
            for (e = 0, n = p.length; e < n; ++e) {
              f.push(p[e]);
            }

            g[t] = p.slice(0);
          }
        } else g[t] = [];
      }

      p.length && (p = Ui(p).sort(Yi), h = Math.min(h, p[0]), c = Math.max(c, p[p.length - 1])), f.length && (f = Ui(f).sort(Yi), h = Math.min(h, f[0]), c = Math.max(c, f[f.length - 1])), h = Gi(r, d.min) || h, c = Gi(r, d.max) || c, h = h === Hi ? +l.startOf(Date.now(), u) : h, c = c === Ei ? +l.endOf(Date.now(), u) + 1 : c, r.min = Math.min(h, c), r.max = Math.max(h + 1, c), r._horizontal = r.isHorizontal(), r._table = [], r._timestamps = {
        data: f,
        datasets: g,
        labels: p
      };
    },
    buildTicks: function buildTicks() {
      var t,
          e,
          i,
          n = this,
          a = n.min,
          o = n.max,
          r = n.options,
          s = r.time,
          l = [],
          d = [];

      switch (r.ticks.source) {
        case "data":
          l = n._timestamps.data;
          break;

        case "labels":
          l = n._timestamps.labels;
          break;

        case "auto":
        default:
          l = $i(n, a, o, n.getLabelCapacity(a));
      }

      for ("ticks" === r.bounds && l.length && (a = l[0], o = l[l.length - 1]), a = Gi(n, s.min) || a, o = Gi(n, s.max) || o, t = 0, e = l.length; t < e; ++t) {
        (i = l[t]) >= a && i <= o && d.push(i);
      }

      return n.min = a, n.max = o, n._unit = s.unit || function (t, e, i, n, a) {
        var o, r;

        for (o = qi.length - 1; o >= qi.indexOf(i); o--) {
          if (r = qi[o], ji[r].common && t._adapter.diff(a, n, r) >= e.length) return r;
        }

        return qi[i ? qi.indexOf(i) : 0];
      }(n, d, s.minUnit, n.min, n.max), n._majorUnit = Zi(n._unit), n._table = function (t, e, i, n) {
        if ("linear" === n || !t.length) return [{
          time: e,
          pos: 0
        }, {
          time: i,
          pos: 1
        }];
        var a,
            o,
            r,
            s,
            l,
            d = [],
            u = [e];

        for (a = 0, o = t.length; a < o; ++a) {
          (s = t[a]) > e && s < i && u.push(s);
        }

        for (u.push(i), a = 0, o = u.length; a < o; ++a) {
          l = u[a + 1], r = u[a - 1], s = u[a], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || d.push({
            time: s,
            pos: a / (o - 1)
          });
        }

        return d;
      }(n._timestamps.data, a, o, r.distribution), n._offsets = function (t, e, i, n, a) {
        var o,
            r,
            s = 0,
            l = 0;
        return a.offset && e.length && (a.time.min || (o = Xi(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - o : (Xi(t, "time", e[1], "pos") - o) / 2), a.time.max || (r = Xi(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? r : (r - Xi(t, "time", e[e.length - 2], "pos")) / 2)), {
          start: s,
          end: l
        };
      }(n._table, d, 0, 0, r), r.ticks.reverse && d.reverse(), function (t, e, i) {
        var n,
            a,
            o,
            r,
            s = [];

        for (n = 0, a = e.length; n < a; ++n) {
          o = e[n], r = !!i && o === +t._adapter.startOf(o, i), s.push({
            value: o,
            major: r
          });
        }

        return s;
      }(n, d, n._majorUnit);
    },
    getLabelForIndex: function getLabelForIndex(t, e) {
      var i = this,
          n = i._adapter,
          a = i.chart.data,
          o = i.options.time,
          r = a.labels && t < a.labels.length ? a.labels[t] : "",
          s = a.datasets[e].data[t];
      return ut.isObject(s) && (r = i.getRightValue(s)), o.tooltipFormat ? n.format(Ki(i, r), o.tooltipFormat) : "string" == typeof r ? r : n.format(Ki(i, r), o.displayFormats.datetime);
    },
    tickFormatFunction: function tickFormatFunction(t, e, i, n) {
      var a = this._adapter,
          o = this.options,
          r = o.time.displayFormats,
          s = r[this._unit],
          l = this._majorUnit,
          d = r[l],
          u = +a.startOf(t, l),
          h = o.ticks.major,
          c = h.enabled && l && d && t === u,
          f = a.format(t, n || (c ? d : s)),
          g = c ? h : o.ticks.minor,
          p = Vi(g.callback, g.userCallback);
      return p ? p(f, e, i) : f;
    },
    convertTicksToLabels: function convertTicksToLabels(t) {
      var e,
          i,
          n = [];

      for (e = 0, i = t.length; e < i; ++e) {
        n.push(this.tickFormatFunction(t[e].value, e, t));
      }

      return n;
    },
    getPixelForOffset: function getPixelForOffset(t) {
      var e = this,
          i = e.options.ticks.reverse,
          n = e._horizontal ? e.width : e.height,
          a = e._horizontal ? i ? e.right : e.left : i ? e.bottom : e.top,
          o = Xi(e._table, "time", t, "pos"),
          r = n * (e._offsets.start + o) / (e._offsets.start + 1 + e._offsets.end);
      return i ? a - r : a + r;
    },
    getPixelForValue: function getPixelForValue(t, e, i) {
      var n = null;
      if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = Gi(this, t)), null !== n) return this.getPixelForOffset(n);
    },
    getPixelForTick: function getPixelForTick(t) {
      var e = this.getTicks();
      return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
    },
    getValueForPixel: function getValueForPixel(t) {
      var e = this,
          i = e._horizontal ? e.width : e.height,
          n = e._horizontal ? e.left : e.top,
          a = (i ? (t - n) / i : 0) * (e._offsets.start + 1 + e._offsets.start) - e._offsets.end,
          o = Xi(e._table, "pos", a, "time");
      return e._adapter._create(o);
    },
    getLabelWidth: function getLabelWidth(t) {
      var e = this.options.ticks,
          i = this.ctx.measureText(t).width,
          n = ut.toRadians(e.maxRotation),
          a = Math.cos(n),
          o = Math.sin(n);
      return i * a + Vi(e.fontSize, st.global.defaultFontSize) * o;
    },
    getLabelCapacity: function getLabelCapacity(t) {
      var e = this,
          i = e.options.time.displayFormats.millisecond,
          n = e.tickFormatFunction(t, 0, [], i),
          a = e.getLabelWidth(n),
          o = e.isHorizontal() ? e.width : e.height,
          r = Math.floor(o / a);
      return r > 0 ? r : 1;
    }
  }),
      Qi = {
    position: "bottom",
    distribution: "linear",
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      format: !1,
      unit: !1,
      round: !1,
      displayFormat: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {}
    },
    ticks: {
      autoSkip: !1,
      source: "auto",
      major: {
        enabled: !1
      }
    }
  };
  Ji._defaults = Qi;
  var tn = {
    category: gi,
    linear: yi,
    logarithmic: Ci,
    radialLinear: Ni,
    time: Ji
  },
      en = {
    datetime: "MMM D, YYYY, h:mm:ss a",
    millisecond: "h:mm:ss.SSS a",
    second: "h:mm:ss a",
    minute: "h:mm a",
    hour: "hA",
    day: "MMM D",
    week: "ll",
    month: "MMM YYYY",
    quarter: "[Q]Q - YYYY",
    year: "YYYY"
  };
  si._date.override("function" == typeof t ? {
    _id: "moment",
    formats: function formats() {
      return en;
    },
    parse: function parse(e, i) {
      return "string" == typeof e && "string" == typeof i ? e = t(e, i) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null;
    },
    format: function format(e, i) {
      return t(e).format(i);
    },
    add: function add(e, i, n) {
      return t(e).add(i, n).valueOf();
    },
    diff: function diff(e, i, n) {
      return t.duration(t(e).diff(t(i))).as(n);
    },
    startOf: function startOf(e, i, n) {
      return e = t(e), "isoWeek" === i ? e.isoWeekday(n).valueOf() : e.startOf(i).valueOf();
    },
    endOf: function endOf(e, i) {
      return t(e).endOf(i).valueOf();
    },
    _create: function _create(e) {
      return t(e);
    }
  } : {}), st._set("global", {
    plugins: {
      filler: {
        propagate: !0
      }
    }
  });
  var nn = {
    dataset: function dataset(t) {
      var e = t.fill,
          i = t.chart,
          n = i.getDatasetMeta(e),
          a = n && i.isDatasetVisible(e) && n.dataset._children || [],
          o = a.length || 0;
      return o ? function (t, e) {
        return e < o && a[e]._view || null;
      } : null;
    },
    boundary: function boundary(t) {
      var e = t.boundary,
          i = e ? e.x : null,
          n = e ? e.y : null;
      return function (t) {
        return {
          x: null === i ? t.x : i,
          y: null === n ? t.y : n
        };
      };
    }
  };

  function an(t, e, i) {
    var n,
        a = t._model || {},
        o = a.fill;
    if (void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o) return !1;
    if (!0 === o) return "origin";
    if (n = parseFloat(o, 10), isFinite(n) && Math.floor(n) === n) return "-" !== o[0] && "+" !== o[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;

    switch (o) {
      case "bottom":
        return "start";

      case "top":
        return "end";

      case "zero":
        return "origin";

      case "origin":
      case "start":
      case "end":
        return o;

      default:
        return !1;
    }
  }

  function on(t) {
    var e,
        i = t.el._model || {},
        n = t.el._scale || {},
        a = t.fill,
        o = null;
    if (isFinite(a)) return null;

    if ("start" === a ? o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? o = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? o = i.scaleZero : n.getBasePosition ? o = n.getBasePosition() : n.getBasePixel && (o = n.getBasePixel()), null != o) {
      if (void 0 !== o.x && void 0 !== o.y) return o;
      if (ut.isFinite(o)) return {
        x: (e = n.isHorizontal()) ? o : null,
        y: e ? null : o
      };
    }

    return null;
  }

  function rn(t, e, i) {
    var n,
        a = t[e].fill,
        o = [e];
    if (!i) return a;

    for (; !1 !== a && -1 === o.indexOf(a);) {
      if (!isFinite(a)) return a;
      if (!(n = t[a])) return !1;
      if (n.visible) return a;
      o.push(a), a = n.fill;
    }

    return !1;
  }

  function sn(t) {
    var e = t.fill,
        i = "dataset";
    return !1 === e ? null : (isFinite(e) || (i = "boundary"), nn[i](t));
  }

  function ln(t) {
    return t && !t.skip;
  }

  function dn(t, e, i, n, a) {
    var o;

    if (n && a) {
      for (t.moveTo(e[0].x, e[0].y), o = 1; o < n; ++o) {
        ut.canvas.lineTo(t, e[o - 1], e[o]);
      }

      for (t.lineTo(i[a - 1].x, i[a - 1].y), o = a - 1; o > 0; --o) {
        ut.canvas.lineTo(t, i[o], i[o - 1], !0);
      }
    }
  }

  var un = {
    id: "filler",
    afterDatasetsUpdate: function afterDatasetsUpdate(t, e) {
      var i,
          n,
          a,
          o,
          r = (t.data.datasets || []).length,
          s = e.propagate,
          l = [];

      for (n = 0; n < r; ++n) {
        o = null, (a = (i = t.getDatasetMeta(n)).dataset) && a._model && a instanceof Wt.Line && (o = {
          visible: t.isDatasetVisible(n),
          fill: an(a, n, r),
          chart: t,
          el: a
        }), i.$filler = o, l.push(o);
      }

      for (n = 0; n < r; ++n) {
        (o = l[n]) && (o.fill = rn(l, n, s), o.boundary = on(o), o.mapper = sn(o));
      }
    },
    beforeDatasetDraw: function beforeDatasetDraw(t, e) {
      var i = e.meta.$filler;

      if (i) {
        var n = t.ctx,
            a = i.el,
            o = a._view,
            r = a._children || [],
            s = i.mapper,
            l = o.backgroundColor || st.global.defaultColor;
        s && l && r.length && (ut.canvas.clipArea(n, t.chartArea), function (t, e, i, n, a, o) {
          var r,
              s,
              l,
              d,
              u,
              h,
              c,
              f = e.length,
              g = n.spanGaps,
              p = [],
              m = [],
              v = 0,
              b = 0;

          for (t.beginPath(), r = 0, s = f + !!o; r < s; ++r) {
            u = i(d = e[l = r % f]._view, l, n), h = ln(d), c = ln(u), h && c ? (v = p.push(d), b = m.push(u)) : v && b && (g ? (h && p.push(d), c && m.push(u)) : (dn(t, p, m, v, b), v = b = 0, p = [], m = []));
          }

          dn(t, p, m, v, b), t.closePath(), t.fillStyle = a, t.fill();
        }(n, r, s, o, l, a._loop), ut.canvas.unclipArea(n));
      }
    }
  },
      hn = ut.noop,
      cn = ut.valueOrDefault;

  function fn(t, e) {
    return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
  }

  st._set("global", {
    legend: {
      display: !0,
      position: "top",
      fullWidth: !0,
      reverse: !1,
      weight: 1e3,
      onClick: function onClick(t, e) {
        var i = e.datasetIndex,
            n = this.chart,
            a = n.getDatasetMeta(i);
        a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update();
      },
      onHover: null,
      onLeave: null,
      labels: {
        boxWidth: 40,
        padding: 10,
        generateLabels: function generateLabels(t) {
          var e = t.data;
          return ut.isArray(e.datasets) ? e.datasets.map(function (e, i) {
            return {
              text: e.label,
              fillStyle: ut.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
              hidden: !t.isDatasetVisible(i),
              lineCap: e.borderCapStyle,
              lineDash: e.borderDash,
              lineDashOffset: e.borderDashOffset,
              lineJoin: e.borderJoinStyle,
              lineWidth: e.borderWidth,
              strokeStyle: e.borderColor,
              pointStyle: e.pointStyle,
              datasetIndex: i
            };
          }, this) : [];
        }
      }
    },
    legendCallback: function legendCallback(t) {
      var e = [];
      e.push('<ul class="' + t.id + '-legend">');

      for (var i = 0; i < t.data.datasets.length; i++) {
        e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
      }

      return e.push("</ul>"), e.join("");
    }
  });

  var gn = pt.extend({
    initialize: function initialize(t) {
      ut.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1;
    },
    beforeUpdate: hn,
    update: function update(t, e, i) {
      var n = this;
      return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
    },
    afterUpdate: hn,
    beforeSetDimensions: hn,
    setDimensions: function setDimensions() {
      var t = this;
      t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: hn,
    beforeBuildLabels: hn,
    buildLabels: function buildLabels() {
      var t = this,
          e = t.options.labels || {},
          i = ut.callback(e.generateLabels, [t.chart], t) || [];
      e.filter && (i = i.filter(function (i) {
        return e.filter(i, t.chart.data);
      })), t.options.reverse && i.reverse(), t.legendItems = i;
    },
    afterBuildLabels: hn,
    beforeFit: hn,
    fit: function fit() {
      var t = this,
          e = t.options,
          i = e.labels,
          n = e.display,
          a = t.ctx,
          o = ut.options._parseFont(i),
          r = o.size,
          s = t.legendHitBoxes = [],
          l = t.minSize,
          d = t.isHorizontal();

      if (d ? (l.width = t.maxWidth, l.height = n ? 10 : 0) : (l.width = n ? 10 : 0, l.height = t.maxHeight), n) if (a.font = o.string, d) {
        var u = t.lineWidths = [0],
            h = 0;
        a.textAlign = "left", a.textBaseline = "top", ut.each(t.legendItems, function (t, e) {
          var n = fn(i, r) + r / 2 + a.measureText(t.text).width;
          (0 === e || u[u.length - 1] + n + i.padding > l.width) && (h += r + i.padding, u[u.length - (e > 0 ? 0 : 1)] = i.padding), s[e] = {
            left: 0,
            top: 0,
            width: n,
            height: r
          }, u[u.length - 1] += n + i.padding;
        }), l.height += h;
      } else {
        var c = i.padding,
            f = t.columnWidths = [],
            g = i.padding,
            p = 0,
            m = 0,
            v = r + c;
        ut.each(t.legendItems, function (t, e) {
          var n = fn(i, r) + r / 2 + a.measureText(t.text).width;
          e > 0 && m + v > l.height - c && (g += p + i.padding, f.push(p), p = 0, m = 0), p = Math.max(p, n), m += v, s[e] = {
            left: 0,
            top: 0,
            width: n,
            height: r
          };
        }), g += p, f.push(p), l.width += g;
      }
      t.width = l.width, t.height = l.height;
    },
    afterFit: hn,
    isHorizontal: function isHorizontal() {
      return "top" === this.options.position || "bottom" === this.options.position;
    },
    draw: function draw() {
      var t = this,
          e = t.options,
          i = e.labels,
          n = st.global,
          a = n.defaultColor,
          o = n.elements.line,
          r = t.width,
          s = t.lineWidths;

      if (e.display) {
        var l,
            d = t.ctx,
            u = cn(i.fontColor, n.defaultFontColor),
            h = ut.options._parseFont(i),
            c = h.size;

        d.textAlign = "left", d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = u, d.fillStyle = u, d.font = h.string;
        var f = fn(i, c),
            g = t.legendHitBoxes,
            p = t.isHorizontal();
        l = p ? {
          x: t.left + (r - s[0]) / 2 + i.padding,
          y: t.top + i.padding,
          line: 0
        } : {
          x: t.left + i.padding,
          y: t.top + i.padding,
          line: 0
        };
        var m = c + i.padding;
        ut.each(t.legendItems, function (n, u) {
          var h = d.measureText(n.text).width,
              v = f + c / 2 + h,
              b = l.x,
              x = l.y;
          p ? u > 0 && b + v + i.padding > t.left + t.minSize.width && (x = l.y += m, l.line++, b = l.x = t.left + (r - s[l.line]) / 2 + i.padding) : u > 0 && x + m > t.top + t.minSize.height && (b = l.x = b + t.columnWidths[l.line] + i.padding, x = l.y = t.top + i.padding, l.line++), function (t, i, n) {
            if (!(isNaN(f) || f <= 0)) {
              d.save();
              var r = cn(n.lineWidth, o.borderWidth);

              if (d.fillStyle = cn(n.fillStyle, a), d.lineCap = cn(n.lineCap, o.borderCapStyle), d.lineDashOffset = cn(n.lineDashOffset, o.borderDashOffset), d.lineJoin = cn(n.lineJoin, o.borderJoinStyle), d.lineWidth = r, d.strokeStyle = cn(n.strokeStyle, a), d.setLineDash && d.setLineDash(cn(n.lineDash, o.borderDash)), e.labels && e.labels.usePointStyle) {
                var s = f * Math.SQRT2 / 2,
                    l = t + f / 2,
                    u = i + c / 2;
                ut.canvas.drawPoint(d, n.pointStyle, s, l, u);
              } else 0 !== r && d.strokeRect(t, i, f, c), d.fillRect(t, i, f, c);

              d.restore();
            }
          }(b, x, n), g[u].left = b, g[u].top = x, function (t, e, i, n) {
            var a = c / 2,
                o = f + a + t,
                r = e + a;
            d.fillText(i.text, o, r), i.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(o, r), d.lineTo(o + n, r), d.stroke());
          }(b, x, n, h), p ? l.x += v + i.padding : l.y += m;
        });
      }
    },
    _getLegendItemAt: function _getLegendItemAt(t, e) {
      var i,
          n,
          a,
          o = this;
      if (t >= o.left && t <= o.right && e >= o.top && e <= o.bottom) for (a = o.legendHitBoxes, i = 0; i < a.length; ++i) {
        if (t >= (n = a[i]).left && t <= n.left + n.width && e >= n.top && e <= n.top + n.height) return o.legendItems[i];
      }
      return null;
    },
    handleEvent: function handleEvent(t) {
      var e,
          i = this,
          n = i.options,
          a = "mouseup" === t.type ? "click" : t.type;

      if ("mousemove" === a) {
        if (!n.onHover && !n.onLeave) return;
      } else {
        if ("click" !== a) return;
        if (!n.onClick) return;
      }

      e = i._getLegendItemAt(t.x, t.y), "click" === a ? e && n.onClick && n.onClick.call(i, t["native"], e) : (n.onLeave && e !== i._hoveredItem && (i._hoveredItem && n.onLeave.call(i, t["native"], i._hoveredItem), i._hoveredItem = e), n.onHover && e && n.onHover.call(i, t["native"], e));
    }
  });

  function pn(t, e) {
    var i = new gn({
      ctx: t.ctx,
      options: e,
      chart: t
    });
    ke.configure(t, i, e), ke.addBox(t, i), t.legend = i;
  }

  var mn = {
    id: "legend",
    _element: gn,
    beforeInit: function beforeInit(t) {
      var e = t.options.legend;
      e && pn(t, e);
    },
    beforeUpdate: function beforeUpdate(t) {
      var e = t.options.legend,
          i = t.legend;
      e ? (ut.mergeIf(e, st.global.legend), i ? (ke.configure(t, i, e), i.options = e) : pn(t, e)) : i && (ke.removeBox(t, i), delete t.legend);
    },
    afterEvent: function afterEvent(t, e) {
      var i = t.legend;
      i && i.handleEvent(e);
    }
  },
      vn = ut.noop;

  st._set("global", {
    title: {
      display: !1,
      fontStyle: "bold",
      fullWidth: !0,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3
    }
  });

  var bn = pt.extend({
    initialize: function initialize(t) {
      ut.extend(this, t), this.legendHitBoxes = [];
    },
    beforeUpdate: vn,
    update: function update(t, e, i) {
      var n = this;
      return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
    },
    afterUpdate: vn,
    beforeSetDimensions: vn,
    setDimensions: function setDimensions() {
      var t = this;
      t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
        width: 0,
        height: 0
      };
    },
    afterSetDimensions: vn,
    beforeBuildLabels: vn,
    buildLabels: vn,
    afterBuildLabels: vn,
    beforeFit: vn,
    fit: function fit() {
      var t = this,
          e = t.options,
          i = e.display,
          n = t.minSize,
          a = ut.isArray(e.text) ? e.text.length : 1,
          o = ut.options._parseFont(e),
          r = i ? a * o.lineHeight + 2 * e.padding : 0;

      t.isHorizontal() ? (n.width = t.maxWidth, n.height = r) : (n.width = r, n.height = t.maxHeight), t.width = n.width, t.height = n.height;
    },
    afterFit: vn,
    isHorizontal: function isHorizontal() {
      var t = this.options.position;
      return "top" === t || "bottom" === t;
    },
    draw: function draw() {
      var t = this,
          e = t.ctx,
          i = t.options;

      if (i.display) {
        var n,
            a,
            o,
            r = ut.options._parseFont(i),
            s = r.lineHeight,
            l = s / 2 + i.padding,
            d = 0,
            u = t.top,
            h = t.left,
            c = t.bottom,
            f = t.right;

        e.fillStyle = ut.valueOrDefault(i.fontColor, st.global.defaultFontColor), e.font = r.string, t.isHorizontal() ? (a = h + (f - h) / 2, o = u + l, n = f - h) : (a = "left" === i.position ? h + l : f - l, o = u + (c - u) / 2, n = c - u, d = Math.PI * ("left" === i.position ? -.5 : .5)), e.save(), e.translate(a, o), e.rotate(d), e.textAlign = "center", e.textBaseline = "middle";
        var g = i.text;
        if (ut.isArray(g)) for (var p = 0, m = 0; m < g.length; ++m) {
          e.fillText(g[m], 0, p, n), p += s;
        } else e.fillText(g, 0, 0, n);
        e.restore();
      }
    }
  });

  function xn(t, e) {
    var i = new bn({
      ctx: t.ctx,
      options: e,
      chart: t
    });
    ke.configure(t, i, e), ke.addBox(t, i), t.titleBlock = i;
  }

  var yn = {},
      kn = un,
      wn = mn,
      Mn = {
    id: "title",
    _element: bn,
    beforeInit: function beforeInit(t) {
      var e = t.options.title;
      e && xn(t, e);
    },
    beforeUpdate: function beforeUpdate(t) {
      var e = t.options.title,
          i = t.titleBlock;
      e ? (ut.mergeIf(e, st.global.title), i ? (ke.configure(t, i, e), i.options = e) : xn(t, e)) : i && (ke.removeBox(t, i), delete t.titleBlock);
    }
  };

  for (var _n in yn.filler = kn, yn.legend = wn, yn.title = Mn, ai.helpers = ut, function () {
    function t(t, e, i) {
      var n;
      return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n;
    }

    function e(t) {
      return null != t && "none" !== t;
    }

    function i(i, n, a) {
      var o = document.defaultView,
          r = ut._getParentNode(i),
          s = o.getComputedStyle(i)[n],
          l = o.getComputedStyle(r)[n],
          d = e(s),
          u = e(l),
          h = Number.POSITIVE_INFINITY;

      return d || u ? Math.min(d ? t(s, i, a) : h, u ? t(l, r, a) : h) : "none";
    }

    ut.where = function (t, e) {
      if (ut.isArray(t) && Array.prototype.filter) return t.filter(e);
      var i = [];
      return ut.each(t, function (t) {
        e(t) && i.push(t);
      }), i;
    }, ut.findIndex = Array.prototype.findIndex ? function (t, e, i) {
      return t.findIndex(e, i);
    } : function (t, e, i) {
      i = void 0 === i ? t : i;

      for (var n = 0, a = t.length; n < a; ++n) {
        if (e.call(i, t[n], n, t)) return n;
      }

      return -1;
    }, ut.findNextWhere = function (t, e, i) {
      ut.isNullOrUndef(i) && (i = -1);

      for (var n = i + 1; n < t.length; n++) {
        var a = t[n];
        if (e(a)) return a;
      }
    }, ut.findPreviousWhere = function (t, e, i) {
      ut.isNullOrUndef(i) && (i = t.length);

      for (var n = i - 1; n >= 0; n--) {
        var a = t[n];
        if (e(a)) return a;
      }
    }, ut.isNumber = function (t) {
      return !isNaN(parseFloat(t)) && isFinite(t);
    }, ut.almostEquals = function (t, e, i) {
      return Math.abs(t - e) < i;
    }, ut.almostWhole = function (t, e) {
      var i = Math.round(t);
      return i - e < t && i + e > t;
    }, ut.max = function (t) {
      return t.reduce(function (t, e) {
        return isNaN(e) ? t : Math.max(t, e);
      }, Number.NEGATIVE_INFINITY);
    }, ut.min = function (t) {
      return t.reduce(function (t, e) {
        return isNaN(e) ? t : Math.min(t, e);
      }, Number.POSITIVE_INFINITY);
    }, ut.sign = Math.sign ? function (t) {
      return Math.sign(t);
    } : function (t) {
      return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
    }, ut.log10 = Math.log10 ? function (t) {
      return Math.log10(t);
    } : function (t) {
      var e = Math.log(t) * Math.LOG10E,
          i = Math.round(e);
      return t === Math.pow(10, i) ? i : e;
    }, ut.toRadians = function (t) {
      return t * (Math.PI / 180);
    }, ut.toDegrees = function (t) {
      return t * (180 / Math.PI);
    }, ut._decimalPlaces = function (t) {
      if (ut.isFinite(t)) {
        for (var e = 1, i = 0; Math.round(t * e) / e !== t;) {
          e *= 10, i++;
        }

        return i;
      }
    }, ut.getAngleFromPoint = function (t, e) {
      var i = e.x - t.x,
          n = e.y - t.y,
          a = Math.sqrt(i * i + n * n),
          o = Math.atan2(n, i);
      return o < -.5 * Math.PI && (o += 2 * Math.PI), {
        angle: o,
        distance: a
      };
    }, ut.distanceBetweenPoints = function (t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    }, ut.aliasPixel = function (t) {
      return t % 2 == 0 ? 0 : .5;
    }, ut._alignPixel = function (t, e, i) {
      var n = t.currentDevicePixelRatio,
          a = i / 2;
      return Math.round((e - a) * n) / n + a;
    }, ut.splineCurve = function (t, e, i, n) {
      var a = t.skip ? e : t,
          o = e,
          r = i.skip ? e : i,
          s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
          l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
          d = s / (s + l),
          u = l / (s + l),
          h = n * (d = isNaN(d) ? 0 : d),
          c = n * (u = isNaN(u) ? 0 : u);
      return {
        previous: {
          x: o.x - h * (r.x - a.x),
          y: o.y - h * (r.y - a.y)
        },
        next: {
          x: o.x + c * (r.x - a.x),
          y: o.y + c * (r.y - a.y)
        }
      };
    }, ut.EPSILON = Number.EPSILON || 1e-14, ut.splineCurveMonotone = function (t) {
      var e,
          i,
          n,
          a,
          o,
          r,
          s,
          l,
          d,
          u = (t || []).map(function (t) {
        return {
          model: t._model,
          deltaK: 0,
          mK: 0
        };
      }),
          h = u.length;

      for (e = 0; e < h; ++e) {
        if (!(n = u[e]).model.skip) {
          if (i = e > 0 ? u[e - 1] : null, (a = e < h - 1 ? u[e + 1] : null) && !a.model.skip) {
            var c = a.model.x - n.model.x;
            n.deltaK = 0 !== c ? (a.model.y - n.model.y) / c : 0;
          }

          !i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2;
        }
      }

      for (e = 0; e < h - 1; ++e) {
        n = u[e], a = u[e + 1], n.model.skip || a.model.skip || (ut.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (o = n.mK / n.deltaK, r = a.mK / n.deltaK, (l = Math.pow(o, 2) + Math.pow(r, 2)) <= 9 || (s = 3 / Math.sqrt(l), n.mK = o * s * n.deltaK, a.mK = r * s * n.deltaK)));
      }

      for (e = 0; e < h; ++e) {
        (n = u[e]).model.skip || (i = e > 0 ? u[e - 1] : null, a = e < h - 1 ? u[e + 1] : null, i && !i.model.skip && (d = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - d, n.model.controlPointPreviousY = n.model.y - d * n.mK), a && !a.model.skip && (d = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + d, n.model.controlPointNextY = n.model.y + d * n.mK));
      }
    }, ut.nextItem = function (t, e, i) {
      return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
    }, ut.previousItem = function (t, e, i) {
      return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
    }, ut.niceNum = function (t, e) {
      var i = Math.floor(ut.log10(t)),
          n = t / Math.pow(10, i);
      return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i);
    }, ut.requestAnimFrame = "undefined" == typeof window ? function (t) {
      t();
    } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
      return window.setTimeout(t, 1e3 / 60);
    }, ut.getRelativePosition = function (t, e) {
      var i,
          n,
          a = t.originalEvent || t,
          o = t.target || t.srcElement,
          r = o.getBoundingClientRect(),
          s = a.touches;
      s && s.length > 0 ? (i = s[0].clientX, n = s[0].clientY) : (i = a.clientX, n = a.clientY);
      var l = parseFloat(ut.getStyle(o, "padding-left")),
          d = parseFloat(ut.getStyle(o, "padding-top")),
          u = parseFloat(ut.getStyle(o, "padding-right")),
          h = parseFloat(ut.getStyle(o, "padding-bottom")),
          c = r.right - r.left - l - u,
          f = r.bottom - r.top - d - h;
      return {
        x: i = Math.round((i - r.left - l) / c * o.width / e.currentDevicePixelRatio),
        y: n = Math.round((n - r.top - d) / f * o.height / e.currentDevicePixelRatio)
      };
    }, ut.getConstraintWidth = function (t) {
      return i(t, "max-width", "clientWidth");
    }, ut.getConstraintHeight = function (t) {
      return i(t, "max-height", "clientHeight");
    }, ut._calculatePadding = function (t, e, i) {
      return (e = ut.getStyle(t, e)).indexOf("%") > -1 ? i * parseInt(e, 10) / 100 : parseInt(e, 10);
    }, ut._getParentNode = function (t) {
      var e = t.parentNode;
      return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
    }, ut.getMaximumWidth = function (t) {
      var e = ut._getParentNode(t);

      if (!e) return t.clientWidth;

      var i = e.clientWidth,
          n = i - ut._calculatePadding(e, "padding-left", i) - ut._calculatePadding(e, "padding-right", i),
          a = ut.getConstraintWidth(t);

      return isNaN(a) ? n : Math.min(n, a);
    }, ut.getMaximumHeight = function (t) {
      var e = ut._getParentNode(t);

      if (!e) return t.clientHeight;

      var i = e.clientHeight,
          n = i - ut._calculatePadding(e, "padding-top", i) - ut._calculatePadding(e, "padding-bottom", i),
          a = ut.getConstraintHeight(t);

      return isNaN(a) ? n : Math.min(n, a);
    }, ut.getStyle = function (t, e) {
      return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
    }, ut.retinaScale = function (t, e) {
      var i = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;

      if (1 !== i) {
        var n = t.canvas,
            a = t.height,
            o = t.width;
        n.height = a * i, n.width = o * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = o + "px");
      }
    }, ut.fontString = function (t, e, i) {
      return e + " " + t + "px " + i;
    }, ut.longestText = function (t, e, i, n) {
      var a = (n = n || {}).data = n.data || {},
          o = n.garbageCollect = n.garbageCollect || [];
      n.font !== e && (a = n.data = {}, o = n.garbageCollect = [], n.font = e), t.font = e;
      var r = 0;
      ut.each(i, function (e) {
        null != e && !0 !== ut.isArray(e) ? r = ut.measureText(t, a, o, r, e) : ut.isArray(e) && ut.each(e, function (e) {
          null == e || ut.isArray(e) || (r = ut.measureText(t, a, o, r, e));
        });
      });
      var s = o.length / 2;

      if (s > i.length) {
        for (var l = 0; l < s; l++) {
          delete a[o[l]];
        }

        o.splice(0, s);
      }

      return r;
    }, ut.measureText = function (t, e, i, n, a) {
      var o = e[a];
      return o || (o = e[a] = t.measureText(a).width, i.push(a)), o > n && (n = o), n;
    }, ut.numberOfLabelLines = function (t) {
      var e = 1;
      return ut.each(t, function (t) {
        ut.isArray(t) && t.length > e && (e = t.length);
      }), e;
    }, ut.color = X ? function (t) {
      return t instanceof CanvasGradient && (t = st.global.defaultColor), X(t);
    } : function (t) {
      return console.error("Color.js not found!"), t;
    }, ut.getHoverColor = function (t) {
      return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : ut.color(t).saturate(.5).darken(.1).rgbString();
    };
  }(), ai._adapters = si, ai.Animation = vt, ai.animationService = bt, ai.controllers = ue, ai.DatasetController = Mt, ai.defaults = st, ai.Element = pt, ai.elements = Wt, ai.Interaction = ve, ai.layouts = ke, ai.platform = Ve, ai.plugins = Ee, ai.Scale = fi, ai.scaleService = He, ai.Ticks = li, ai.Tooltip = Je, ai.helpers.each(tn, function (t, e) {
    ai.scaleService.registerScaleType(e, t, t._defaults);
  }), yn) {
    yn.hasOwnProperty(_n) && ai.plugins.register(yn[_n]);
  }

  ai.platform.initialize();
  var Cn = ai;
  return "undefined" != typeof window && (window.Chart = ai), ai.Chart = ai, ai.Legend = yn.legend._element, ai.Title = yn.title._element, ai.pluginService = ai.plugins, ai.PluginBase = ai.Element.extend({}), ai.canvasHelpers = ai.helpers.canvas, ai.layoutService = ai.layouts, ai.LinearScaleBase = bi, ai.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function (t) {
    ai[t] = function (e, i) {
      return new ai(e, ai.helpers.merge(i || {}, {
        type: t.charAt(0).toLowerCase() + t.slice(1)
      }));
    };
  }), Cn;
});

/***/ }),

/***/ "./resources/assets/vendors/js/vendor.bundle.base.js":
/*!***********************************************************!*\
  !*** ./resources/assets/vendors/js/vendor.bundle.base.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = [],
      E = C.document,
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.concat,
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.4.1",
      k = function k(e, t) {
    return new k.fn.init(e, t);
  },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function d(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  k.fn = k.prototype = {
    jquery: f,
    constructor: k,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = k.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return k.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(k.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, k.extend = k.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, k.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t) {
      b(e, {
        nonce: t && t.nonce
      });
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (d(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(p, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (d(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g.apply([], a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var h = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        k = "sizzle" + 1 * new Date(),
        m = n.document,
        S = 0,
        r = 0,
        p = ue(),
        x = ue(),
        N = ue(),
        A = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        F = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp($),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + $),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ne = function ne(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && U.test(t)) {
            (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length;

            while (o--) {
              l[o] = "#" + s + " " + xe(l[o]);
            }

            c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e;
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace(B, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[k] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : m;
      return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        A(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = p[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [S, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
          return s[k] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [S, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(B, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = N[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
        }

        (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = S += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument === C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (S = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (S = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;

  var T = function T(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && k(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      N = k.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? k.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? k.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? k.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : k.filter(n, e, r);
  }

  k.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, k.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (k.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        k.find(e, i[t], n);
      }

      return 1 < r ? k.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
  }).prototype = k.fn, q = k(E);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  k.fn.extend({
    has: function has(e) {
      var t = k(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (k.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && k(e);
      if (!N.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), k.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return T(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return T(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return T(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return T(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return T(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return T(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
    }
  }, function (r, i) {
    k.fn[r] = function (e, t) {
      var n = k.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var R = /[^\x20\t\r\n\f]+/g;

  function M(e) {
    return e;
  }

  function I(e) {
    throw e;
  }

  function W(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  k.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
      n[t] = !0;
    }), n) : k.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          k.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return k.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = k.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < k.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, k.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return k.Deferred(function (r) {
            k.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return k.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? k.extend(e, a) : a;
        }
      },
          s = {};
      return k.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        W(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, k.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = k.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready();
  }

  k.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      k.readyException(e);
    }), this;
  }, k.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]);
    }
  }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var _ = function _(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      _(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(k(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      z = /^-ms-/,
      U = /-([a-z])/g;

  function X(e, t) {
    return t.toUpperCase();
  }

  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }

  var G = function G(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Y() {
    this.expando = k.expando + Y.uid++;
  }

  Y.uid = 1, Y.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
        i[V(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !k.isEmptyObject(t);
    }
  };
  var Q = new Y(),
      J = new Y(),
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;

  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      J.set(e, t, n);
    } else n = void 0;
    return n;
  }

  k.extend({
    hasData: function hasData(e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function data(e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      J.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Q.remove(e, t);
    }
  }), k.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
          }

          Q.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        J.set(this, n);
      }) : _(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
        this.each(function () {
          J.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        J.remove(this, e);
      });
    }
  }), k.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        k.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Q.get(e, n) || Q.access(e, n, {
        empty: k.Callbacks("once memory").add(function () {
          Q.remove(e, [t + "queue", n]);
        })
      });
    }
  }), k.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = k.queue(this, t, n);
        k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        k.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
      re = ["Top", "Right", "Bottom", "Left"],
      ie = E.documentElement,
      oe = function oe(e) {
    return k.contains(e.ownerDocument, e);
  },
      ae = {
    composed: !0
  };

  ie.getRootNode && (oe = function oe(e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
  });

  var se = function se(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
  },
      ue = function ue(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    for (o in i = n.apply(e, r || []), t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function le(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return k.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, k.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ce = {};

  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  k.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        se(this) ? k(this).show() : k(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
  }

  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
  var me,
      xe,
      be = /<|&#?\w+;/;

  function we(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        k.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
  var Te = /^key/,
      Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ee = /^([^.]*)(?:\.(.+)|)/;

  function ke() {
    return !0;
  }

  function Se() {
    return !1;
  }

  function Ne(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ae(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ae(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return k().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
      k.event.add(this, t, i, r, n);
    });
  }

  function De(e, i, o) {
    o ? (Q.set(e, i, !1), k.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Q.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Q.set(this, i, {
          value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }

  k.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.get(t);

      if (v) {
        n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(R) || [""]).length;

        while (l--) {
          d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && k.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.hasData(e) && Q.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;

        while (l--) {
          if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            k.event.remove(e, d + t[l], n, r, !0);
          }
        }

        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = k.event.fix(e),
          u = new Array(arguments.length),
          l = (Q.get(this, "events") || {})[s.type] || [],
          c = k.event.special[s.type] || {};

      for (u[0] = s, t = 1; t < arguments.length; t++) {
        u[t] = arguments[t];
      }

      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        a = k.event.handlers.call(this, s, l), t = 0;

        while ((i = a[t++]) && !s.isPropagationStopped()) {
          s.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) {
            s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, k.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, k.Event = function (e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
  }, k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: Se,
    isPropagationStopped: Se,
    isImmediatePropagationStopped: Se,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, k.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, k.event.addProp), k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    k.event.special[e] = {
      setup: function setup() {
        return De(this, e, Ne), !1;
      },
      trigger: function trigger() {
        return De(this, e), !0;
      },
      delegateType: t
    };
  }), k.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    k.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), k.fn.extend({
    on: function on(e, t, n, r) {
      return Ae(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ae(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
        k.event.remove(this, e, n, t);
      });
    }
  });
  var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      qe = /<script|<style|<link/i,
      Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Oe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
  }

  function Pe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Re(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Me(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) {
        for (n = 0, r = l[i].length; n < r; n++) {
          k.event.add(t, i, l[i][n]);
        }
      }
      J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u));
    }
  }

  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
    });

    if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) {
        u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }) : b(u.textContent.replace(He, ""), u, l));
      }
    }

    return n;
  }

  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  k.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = oe(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Me(o[r], a[r]);
      } else Me(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (G(n)) {
          if (t = n[Q.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            }
            n[Q.expando] = void 0;
          }

          n[J.expando] && (n[J.expando] = void 0);
        }
      }
    }
  }), k.fn.extend({
    detach: function detach(e) {
      return We(this, e, !0);
    },
    remove: function remove(e) {
      return We(this, e);
    },
    text: function text(e) {
      return _(this, function (e) {
        return void 0 === e ? k.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Ie(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Ie(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Oe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return k.clone(this, e, t);
      });
    },
    html: function html(e) {
      return _(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = k.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Ie(this, arguments, function (e) {
        var t = this.parentNode;
        k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), k.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    k.fn[e] = function (e) {
      for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
      Fe = function Fe(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Be = new RegExp(re.join("|"), "i");

  function _e(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function ze(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (u) {
        s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s = E.createElement("div"),
        u = E.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), a;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      }
    }));
  }();
  var Ue = ["Webkit", "Moz", "ms"],
      Xe = E.createElement("div").style,
      Ve = {};

  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return t || (e in Xe ? e : Ve[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Ue.length;

      while (n--) {
        if ((e = Ue[n] + t) in Xe) return e;
      }
    }(e) || e);
  }

  var Ye = /^(none|table(?!-c[ea]).+)/,
      Qe = /^--/,
      Je = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ke = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function tt(e, t, n) {
    var r = Fe(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
        o = i,
        a = _e(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }

  k.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = _e(e, "opacity");

            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = V(t),
            u = Qe.test(t),
            l = e.style;
        if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = V(t);
      return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), k.each(["height", "width"], function (e, u) {
    k.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
          return tt(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s);
      }
    };
  }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), k.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    k.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (k.cssHooks[i + o].set = Ze);
  }), k.fn.extend({
    css: function css(e, t) {
      return _(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Fe(e), i = t.length; a < i; a++) {
            o[t[a]] = k.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((k.Tween = nt).prototype = {
    constructor: nt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = nt.propHooks[this.prop];
      return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = nt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
    }
  }).init.prototype = nt.prototype, (nt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = nt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, k.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, k.fx = nt.prototype.init, k.fx.step = {};
  var rt,
      it,
      ot,
      at,
      st = /^(?:toggle|show|hide)$/,
      ut = /queueHooks$/;

  function lt() {
    it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick());
  }

  function ct() {
    return C.setTimeout(function () {
      rt = void 0;
    }), rt = Date.now();
  }

  function ft(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function pt(e, t, n) {
    for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function dt(o, e, t) {
    var n,
        a,
        r = 0,
        i = dt.prefilters.length,
        s = k.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: k.extend({}, e),
      opts: k.extend(!0, {
        specialEasing: {},
        easing: k.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: rt || ct(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  k.Animation = k.extend(dt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return le(n.elem, e, ne.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(R);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");

      for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], st.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || k.style(e, r);
        }
      }

      if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
          for (r in g || fe([e]), Q.remove(e, "fxshow"), d) {
            k.style(e, r, d[r]);
          }
        })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    }
  }), k.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? k.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
    }, r;
  }, k.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(se).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function a() {
        var e = dt(this, k.extend({}, t), o);
        (i || Q.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = k.timers,
            r = Q.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && ut.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || k.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Q.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = k.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), k.each(["toggle", "show", "hide"], function (e, r) {
    var i = k.fn[r];

    k.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
    };
  }), k.each({
    slideDown: ft("show"),
    slideUp: ft("hide"),
    slideToggle: ft("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    k.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), k.timers = [], k.fx.tick = function () {
    var e,
        t = 0,
        n = k.timers;

    for (rt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || k.fx.stop(), rt = void 0;
  }, k.fx.timer = function (e) {
    k.timers.push(e), k.fx.start();
  }, k.fx.interval = 13, k.fx.start = function () {
    it || (it = !0, lt());
  }, k.fx.stop = function () {
    it = null;
  }, k.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, k.fn.delay = function (r, e) {
    return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
  var ht,
      gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function attr(e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    }
  }), k.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(R);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ht = {
    set: function set(e, t, n) {
      return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = gt[t] || k.find.attr;

    gt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r;
    };
  });
  var vt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;

  function mt(e) {
    return (e.match(R) || []).join(" ");
  }

  function xt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function bt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
  }

  k.fn.extend({
    prop: function prop(e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    }
  }), k.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = k.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (k.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    k.propFix[this.toLowerCase()] = this;
  }), k.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).addClass(t.call(this, e, xt(this)));
      });
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).removeClass(t.call(this, e, xt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        k(this).toggleClass(i.call(this, e, xt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = k(this), r = bt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var wt = /\r/g;
  k.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0;
    }
  }), k.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = k.find.attr(e, "value");
          return null != t ? t : mt(k.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = k(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), k.each(["radio", "checkbox"], function () {
    k.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
      }
    }, y.checkOn || (k.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var Tt = /^(?:focusinfocus|focusoutblur)$/,
      Ct = function Ct(e) {
    e.stopPropagation();
  };

  k.extend(k.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = k.extend(new k.Event(), n, {
        type: e,
        isSimulated: !0
      });
      k.event.trigger(r, null, t);
    }
  }), k.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        k.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return k.event.trigger(e, t, n, !0);
    }
  }), y.focusin || k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      k.event.simulate(r, e.target, k.event.fix(e));
    };

    k.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r);
        t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r) - 1;
        t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
      }
    };
  });
  var Et = C.location,
      kt = Date.now(),
      St = /\?/;

  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t;
  };

  var Nt = /\[\]$/,
      At = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      jt = /^(?:input|select|textarea|keygen)/i;

  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) k.each(e, function (e, t) {
      r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      qt(n + "[" + t + "]", e[t], r, i);
    }
  }

  k.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      qt(n, e[n], t, i);
    }
    return r.join("&");
  }, k.fn.extend({
    serialize: function serialize() {
      return k.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = k.prop(this, "elements");
        return e ? k.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = k(this).val();
        return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(At, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(At, "\r\n")
        };
      }).get();
    }
  });
  var Lt = /%20/g,
      Ht = /#.*$/,
      Ot = /([?&])_=[^&]*/,
      Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Rt = /^(?:GET|HEAD)$/,
      Mt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Ft = E.createElement("a");

  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(R) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function _t(t, i, o, a) {
    var s = {},
        u = t === Wt;

    function l(e) {
      var r;
      return s[e] = !0, k.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = k.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && k.extend(!0, e, r), e;
  }

  Ft.href = Et.href, k.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": k.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
    },
    ajaxPrefilter: Bt(It),
    ajaxTransport: Bt(Wt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Pt.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;

      for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return k.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return k.get(e, void 0, t, "script");
    }
  }), k.each(["get", "post"], function (e, i) {
    k[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, k.isPlainObject(e) && e));
    };
  }), k._evalUrl = function (e, t) {
    return k.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        k.globalEval(e, t);
      }
    });
  }, k.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        k(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = k(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        k(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        k(this).replaceWith(this.childNodes);
      }), this;
    }
  }), k.expr.pseudos.hidden = function (e) {
    return !k.expr.pseudos.visible(e);
  }, k.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, k.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Ut = {
    0: 200,
    1223: 204
  },
      Xt = k.ajaxSettings.xhr();
  y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || Xt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), k.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), k.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return k.globalEval(e), e;
      }
    }
  }), k.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), k.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = k("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Vt,
      Gt = [],
      Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return this[e] = !0, e;
    }
  }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || k.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
    var r, i, o;
  }, k.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && k.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    k.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), k.expr.pseudos.animated = function (t) {
    return k.grep(k.timers, function (e) {
      return t === e.elem;
    }).length;
  }, k.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, k.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        k.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - k.css(r, "marginTop", !0),
          left: t.left - i.left - k.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === k.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || ie;
      });
    }
  }), k.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    k.fn[t] = function (e) {
      return _(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), k.each(["top", "left"], function (e, n) {
    k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
      if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t;
    });
  }), k.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    k.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      k.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return _(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    k.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), k.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), k.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), k.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || k.guid++, i;
  }, k.holdReady = function (e) {
    e ? k.readyWait++ : k.ready(!0);
  }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
    var t = k.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_0__ = ((function () {
    return k;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
  var Qt = C.jQuery,
      Jt = C.$;
  return k.noConflict = function (e) {
    return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
  }, e || (C.jQuery = C.$ = k), k;
});
/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */

(function (e, t) {
  'object' == ( false ? undefined : _typeof(exports)) && 'undefined' != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = e.ownerDocument.defaultView,
        n = o.getComputedStyle(e, null);
    return t ? n[t] : n;
  }

  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }

  function n(e) {
    if (!e) return document.body;

    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;

      case '#document':
        return e.body;
    }

    var i = t(e),
        r = i.overflow,
        p = i.overflowX,
        s = i.overflowY;
    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
  }

  function r(e) {
    return 11 === e ? pe : 10 === e ? se : pe || se;
  }

  function p(e) {
    if (!e) return document.documentElement;

    for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }

    var i = n && n.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }

  function s(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e);
  }

  function d(e) {
    return null === e.parentNode ? e : d(e.parentNode);
  }

  function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        n = o ? e : t,
        i = o ? t : e,
        r = document.createRange();
    r.setStart(n, 0), r.setEnd(i, 0);
    var l = r.commonAncestorContainer;
    if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
    var f = d(e);
    return f.host ? a(f.host, t) : a(e, d(t).host);
  }

  function l(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        o = 'top' === t ? 'scrollTop' : 'scrollLeft',
        n = e.nodeName;

    if ('BODY' === n || 'HTML' === n) {
      var i = e.ownerDocument.documentElement,
          r = e.ownerDocument.scrollingElement || i;
      return r[o];
    }

    return e[o];
  }

  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        n = l(t, 'top'),
        i = l(t, 'left'),
        r = o ? -1 : 1;
    return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e;
  }

  function m(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
        n = 'Left' == o ? 'Right' : 'Bottom';
    return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10);
  }

  function h(e, t, o, n) {
    return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0);
  }

  function c(e) {
    var t = e.body,
        o = e.documentElement,
        n = r(10) && getComputedStyle(o);
    return {
      height: h('Height', t, o, n),
      width: h('Width', t, o, n)
    };
  }

  function g(e) {
    return fe({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }

  function u(e) {
    var o = {};

    try {
      if (r(10)) {
        o = e.getBoundingClientRect();
        var n = l(e, 'top'),
            i = l(e, 'left');
        o.top += n, o.left += i, o.bottom += n, o.right += i;
      } else o = e.getBoundingClientRect();
    } catch (t) {}

    var p = {
      left: o.left,
      top: o.top,
      width: o.right - o.left,
      height: o.bottom - o.top
    },
        s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {},
        d = s.width || e.clientWidth || p.right - p.left,
        a = s.height || e.clientHeight || p.bottom - p.top,
        f = e.offsetWidth - d,
        h = e.offsetHeight - a;

    if (f || h) {
      var u = t(e);
      f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h;
    }

    return g(p);
  }

  function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        p = r(10),
        s = 'HTML' === o.nodeName,
        d = u(e),
        a = u(o),
        l = n(e),
        m = t(o),
        h = parseFloat(m.borderTopWidth, 10),
        c = parseFloat(m.borderLeftWidth, 10);
    i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
    var b = g({
      top: d.top - a.top - h,
      left: d.left - a.left - c,
      width: d.width,
      height: d.height
    });

    if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
      var w = parseFloat(m.marginTop, 10),
          y = parseFloat(m.marginLeft, 10);
      b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y;
    }

    return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b;
  }

  function w(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = e.ownerDocument.documentElement,
        n = b(e, o),
        i = ee(o.clientWidth, window.innerWidth || 0),
        r = ee(o.clientHeight, window.innerHeight || 0),
        p = t ? 0 : l(o),
        s = t ? 0 : l(o, 'left'),
        d = {
      top: p - n.top + n.marginTop,
      left: s - n.left + n.marginLeft,
      width: i,
      height: r
    };
    return g(d);
  }

  function y(e) {
    var n = e.nodeName;
    if ('BODY' === n || 'HTML' === n) return !1;
    if ('fixed' === t(e, 'position')) return !0;
    var i = o(e);
    return !!i && y(i);
  }

  function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;

    for (var o = e.parentElement; o && 'none' === t(o, 'transform');) {
      o = o.parentElement;
    }

    return o || document.documentElement;
  }

  function v(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        s = {
      top: 0,
      left: 0
    },
        d = p ? E(e) : a(e, t);
    if ('viewport' === r) s = w(d, p);else {
      var l;
      'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
      var f = b(l, d, p);

      if ('HTML' === l.nodeName && !y(d)) {
        var m = c(e.ownerDocument),
            h = m.height,
            g = m.width;
        s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left;
      } else s = f;
    }
    i = i || 0;
    var u = 'number' == typeof i;
    return s.left += u ? i : i.left || 0, s.top += u ? i : i.top || 0, s.right -= u ? i : i.right || 0, s.bottom -= u ? i : i.bottom || 0, s;
  }

  function x(e) {
    var t = e.width,
        o = e.height;
    return t * o;
  }

  function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = v(o, n, r, i),
        s = {
      top: {
        width: p.width,
        height: t.top - p.top
      },
      right: {
        width: p.right - t.right,
        height: p.height
      },
      bottom: {
        width: p.width,
        height: p.bottom - t.bottom
      },
      left: {
        width: t.left - p.left,
        height: p.height
      }
    },
        d = Object.keys(s).map(function (e) {
      return fe({
        key: e
      }, s[e], {
        area: x(s[e])
      });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        a = d.filter(function (e) {
      var t = e.width,
          n = e.height;
      return t >= o.clientWidth && n >= o.clientHeight;
    }),
        l = 0 < a.length ? a[0].key : d[0].key,
        f = e.split('-')[1];
    return l + (f ? '-' + f : '');
  }

  function L(e, t, o) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
        i = n ? E(t) : a(t, o);
    return b(o, i, n);
  }

  function S(e) {
    var t = e.ownerDocument.defaultView,
        o = t.getComputedStyle(e),
        n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
        i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
        r = {
      width: e.offsetWidth + i,
      height: e.offsetHeight + n
    };
    return r;
  }

  function T(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }

  function C(e, t, o) {
    o = o.split('-')[0];
    var n = S(e),
        i = {
      width: n.width,
      height: n.height
    },
        r = -1 !== ['right', 'left'].indexOf(o),
        p = r ? 'top' : 'left',
        s = r ? 'left' : 'top',
        d = r ? 'height' : 'width',
        a = r ? 'width' : 'height';
    return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i;
  }

  function D(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }

  function N(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });
    var n = D(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(n);
  }

  function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
    return i.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var n = t['function'] || t.fn;
      t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t));
    }), o;
  }

  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }

  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
          n = e.enabled;
      return n && o === t;
    });
  }

  function B(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
      var i = t[n],
          r = i ? '' + i + o : e;
      if ('undefined' != typeof document.body.style[r]) return r;
    }

    return null;
  }

  function H() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }

  function A(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }

  function M(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
        p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, {
      passive: !0
    }), r || M(n(p.parentNode), t, o, i), i.push(p);
  }

  function F(e, t, o, i) {
    o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }

  function I() {
    this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
  }

  function R(e, t) {
    return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }

  function U() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state));
  }

  function Y(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }

  function V(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n;
    });
  }

  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = t[o];
      !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }

  function q(e, t) {
    var o = e.offsets,
        n = o.popper,
        i = o.reference,
        r = $,
        p = function p(e) {
      return e;
    },
        s = r(i.width),
        d = r(n.width),
        a = -1 !== ['left', 'right'].indexOf(e.placement),
        l = -1 !== e.placement.indexOf('-'),
        f = t ? a || l || s % 2 == d % 2 ? r : Z : p,
        m = t ? r : p;

    return {
      left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
      top: m(n.top),
      bottom: m(n.bottom),
      right: f(n.right)
    };
  }

  function K(e, t, o) {
    var n = D(e, function (e) {
      var o = e.name;
      return o === t;
    }),
        i = !!n && e.some(function (e) {
      return e.name === o && e.enabled && e.order < n.order;
    });

    if (!i) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }

    return i;
  }

  function z(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }

  function G(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = ce.indexOf(e),
        n = ce.slice(o + 1).concat(ce.slice(0, o));
    return t ? n.reverse() : n;
  }

  function _(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +i[1],
        p = i[2];
    if (!r) return e;

    if (0 === p.indexOf('%')) {
      var s;

      switch (p) {
        case '%p':
          s = o;
          break;

        case '%':
        case '%r':
        default:
          s = n;
      }

      var d = g(s);
      return d[t] / 100 * r;
    }

    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }

    return r;
  }

  function X(e, t, o, n) {
    var i = [0, 0],
        r = -1 !== ['right', 'left'].indexOf(n),
        p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        s = p.indexOf(D(p, function (e) {
      return -1 !== e.search(/,|\s/);
    }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
        a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, n) {
      var i = (1 === n ? !r : r) ? 'height' : 'width',
          p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return _(e, i, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, n) {
        Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1));
      });
    }), i;
  }

  function J(e, t) {
    var o,
        n = t.offset,
        i = e.placement,
        r = e.offsets,
        p = r.popper,
        s = r.reference,
        d = i.split('-')[0];
    return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
  }

  for (var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window && 'undefined' != typeof document, oe = ['Edge', 'Trident', 'Firefox'], ne = 0, ie = 0; ie < oe.length; ie += 1) {
    if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
      ne = 1;
      break;
    }
  }

  var i = te && window.Promise,
      re = i ? function (e) {
    var t = !1;
    return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, ne));
    };
  },
      pe = te && !!(window.MSInputMethodContext && document.documentMode),
      se = te && /MSIE 10/.test(navigator.userAgent),
      de = function de(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  },
      ae = function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) {
        o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, o, n) {
      return o && e(t.prototype, o), n && e(t, n), t;
    };
  }(),
      le = function le(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
      value: o,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = o, e;
  },
      fe = Object.assign || function (e) {
    for (var t, o = 1; o < arguments.length; o++) {
      for (var n in t = arguments[o], t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
    }

    return e;
  },
      me = te && /Firefox/i.test(navigator.userAgent),
      he = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      ce = he.slice(3),
      ge = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  },
      ue = function () {
    function t(o, n) {
      var i = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      de(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = re(this.update.bind(this)), this.options = fe({}, t.Defaults, r), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        i.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return fe({
          name: e
        }, i.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }), this.update();
      var p = this.options.eventsEnabled;
      p && this.enableEventListeners(), this.state.eventsEnabled = p;
    }

    return ae(t, [{
      key: 'update',
      value: function value() {
        return k.call(this);
      }
    }, {
      key: 'destroy',
      value: function value() {
        return H.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function value() {
        return I.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function value() {
        return U.call(this);
      }
    }]), t;
  }();

  return ue.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ue.placements = he, ue.Defaults = {
    placement: 'bottom',
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = t.split('-')[1];

          if (n) {
            var i = e.offsets,
                r = i.reference,
                p = i.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = {
              start: le({}, d, r[d]),
              end: le({}, d, r[d] + r[a] - p[a])
            };
            e.offsets.popper = fe({}, p, l[n]);
          }

          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: J,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.boundariesElement || p(e.instance.popper);
          e.instance.reference === o && (o = p(o));
          var n = B('transform'),
              i = e.instance.popper.style,
              r = i.top,
              s = i.left,
              d = i[n];
          i.top = '', i.left = '', i[n] = '';
          var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
          i.top = r, i.left = s, i[n] = d, t.boundaries = a;
          var l = t.priority,
              f = e.offsets.popper,
              m = {
            primary: function primary(e) {
              var o = f[e];
              return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), le({}, e, o);
            },
            secondary: function secondary(e) {
              var o = 'right' === e ? 'left' : 'top',
                  n = f[o];
              return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), le({}, o, n);
            }
          };
          return l.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            f = fe({}, f, m[t](e));
          }), e.offsets.popper = f, e;
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(e) {
          var t = e.offsets,
              o = t.popper,
              n = t.reference,
              i = e.placement.split('-')[0],
              r = Z,
              p = -1 !== ['top', 'bottom'].indexOf(i),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';
          return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(e, o) {
          var n;
          if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var i = o.element;

          if ('string' == typeof i) {
            if (i = e.instance.popper.querySelector(i), !i) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;

          var r = e.placement.split('-')[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ['left', 'right'].indexOf(r),
              l = a ? 'height' : 'width',
              f = a ? 'Top' : 'Left',
              m = f.toLowerCase(),
              h = a ? 'left' : 'top',
              c = a ? 'bottom' : 'right',
              u = S(i)[l];
          d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
          var b = d[m] + d[l] / 2 - u / 2,
              w = t(e.instance.popper),
              y = parseFloat(w['margin' + f], 10),
              E = parseFloat(w['border' + f + 'Width'], 10),
              v = b - e.offsets.popper[m] - y - E;
          return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, le(n, m, $(v)), le(n, h, ''), n), e;
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              n = e.placement.split('-')[0],
              i = T(n),
              r = e.placement.split('-')[1] || '',
              p = [];

          switch (t.behavior) {
            case ge.FLIP:
              p = [n, i];
              break;

            case ge.CLOCKWISE:
              p = G(n);
              break;

            case ge.COUNTERCLOCKWISE:
              p = G(n, !0);
              break;

            default:
              p = t.behavior;
          }

          return p.forEach(function (s, d) {
            if (n !== s || p.length === d + 1) return e;
            n = e.placement.split('-')[0], i = T(n);
            var a = e.offsets.popper,
                l = e.offsets.reference,
                f = Z,
                m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                h = f(a.left) < f(o.left),
                c = f(a.right) > f(o.right),
                g = f(a.top) < f(o.top),
                u = f(a.bottom) > f(o.bottom),
                b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                w = -1 !== ['top', 'bottom'].indexOf(n),
                y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u),
                E = !!t.flipVariationsByContent && (w && 'start' === r && c || w && 'end' === r && h || !w && 'start' === r && u || !w && 'end' === r && g),
                v = y || E;
            (m || b || v) && (e.flipped = !0, (m || b) && (n = p[d + 1]), v && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = fe({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'));
          }), e;
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport',
        flipVariations: !1,
        flipVariationsByContent: !1
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = e.offsets,
              i = n.popper,
              r = n.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);
          return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(e) {
          if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
              o = D(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name;
          }).boundaries;

          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }

          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.x,
              n = t.y,
              i = e.offsets.popper,
              r = D(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name;
          }).gpuAcceleration;
          void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s,
              d,
              a = void 0 === r ? t.gpuAcceleration : r,
              l = p(e.instance.popper),
              f = u(l),
              m = {
            position: i.position
          },
              h = q(e, 2 > window.devicePixelRatio || !me),
              c = 'bottom' === o ? 'top' : 'bottom',
              g = 'right' === n ? 'left' : 'right',
              b = B('transform');
          if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';else {
            var w = 'bottom' == c ? -1 : 1,
                y = 'right' == g ? -1 : 1;
            m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g;
          }
          var E = {
            "x-placement": e.placement
          };
          return e.attributes = fe({}, E, e.attributes), e.styles = fe({}, m, e.styles), e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(e) {
          return V(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles), e;
        },
        onLoad: function onLoad(e, t, o, n, i) {
          var r = L(i, t, e, o.positionFixed),
              p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), V(t, {
            position: o.positionFixed ? 'fixed' : 'absolute'
          }), o;
        },
        gpuAcceleration: void 0
      }
    }
  }, ue;
});
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */


!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports, __WEBPACK_LOCAL_MODULE_0__, __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __WEBPACK_LOCAL_MODULE_0__, __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t, g, u) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;
        e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i;
      });
    }

    return o;
  }

  g = g && g.hasOwnProperty("default") ? g["default"] : g, u = u && u.hasOwnProperty("default") ? u["default"] : u;
  var e = "transitionend";

  function n(t) {
    var e = this,
        n = !1;
    return g(this).one(_.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || _.triggerTransitionEnd(e);
    }, t), this;
  }

  var _ = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function getUID(t) {
      for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {
        ;
      }

      return t;
    },
    getSelectorFromElement: function getSelectorFromElement(t) {
      var e = t.getAttribute("data-target");

      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }

      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
      if (!t) return 0;
      var e = g(t).css("transition-duration"),
          n = g(t).css("transition-delay"),
          i = parseFloat(e),
          o = parseFloat(n);
      return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
    },
    reflow: function reflow(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(t) {
      g(t).trigger(e);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(e);
    },
    isElement: function isElement(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(t, e, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = e[i],
              s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
          if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }
      }

      var a;
    },
    findShadowRoot: function findShadowRoot(t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
  };
  g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = {
    bindType: e,
    delegateType: e,
    handle: function handle(t) {
      if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    }
  };

  var o = "alert",
      r = "bs.alert",
      a = "." + r,
      c = g.fn[o],
      h = {
    CLOSE: "close" + a,
    CLOSED: "closed" + a,
    CLICK_DATA_API: "click" + a + ".data-api"
  },
      f = "alert",
      d = "fade",
      m = "show",
      p = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      g.removeData(this._element, r), this._element = null;
    }, t._getRootElement = function (t) {
      var e = _.getSelectorFromElement(t),
          n = !1;

      return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = g.Event(h.CLOSE);
      return g(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;

      if (g(e).removeClass(m), g(e).hasClass(d)) {
        var t = _.getTransitionDurationFromElement(e);

        g(e).one(_.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      g(t).detach().trigger(h.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(r);
        e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), i;
  }();

  g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function () {
    return g.fn[o] = c, p._jQueryInterface;
  };

  var v = "button",
      y = "bs.button",
      E = "." + y,
      C = ".data-api",
      T = g.fn[v],
      S = "active",
      b = "btn",
      I = "focus",
      D = '[data-toggle^="button"]',
      w = '[data-toggle="buttons"]',
      A = 'input:not([type="hidden"])',
      N = ".active",
      O = ".btn",
      k = {
    CLICK_DATA_API: "click" + E + C,
    FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C
  },
      P = function () {
    function n(t) {
      this._element = t;
    }

    var t = n.prototype;
    return t.toggle = function () {
      var t = !0,
          e = !0,
          n = g(this._element).closest(w)[0];

      if (n) {
        var i = this._element.querySelector(A);

        if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(S)) t = !1;else {
            var o = n.querySelector(N);
            o && g(o).removeClass(S);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !this._element.classList.contains(S), g(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S);
    }, t.dispose = function () {
      g.removeData(this._element, y), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(y);
        t || (t = new n(this), g(this).data(y, t)), "toggle" === e && t[e]();
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), n;
  }();

  g(document).on(k.CLICK_DATA_API, D, function (t) {
    t.preventDefault();
    var e = t.target;
    g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle");
  }).on(k.FOCUS_BLUR_DATA_API, D, function (t) {
    var e = g(t.target).closest(O)[0];
    g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
  }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function () {
    return g.fn[v] = T, P._jQueryInterface;
  };

  var L = "carousel",
      j = "bs.carousel",
      H = "." + j,
      R = ".data-api",
      x = g.fn[L],
      F = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      U = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      W = "next",
      q = "prev",
      M = "left",
      K = "right",
      Q = {
    SLIDE: "slide" + H,
    SLID: "slid" + H,
    KEYDOWN: "keydown" + H,
    MOUSEENTER: "mouseenter" + H,
    MOUSELEAVE: "mouseleave" + H,
    TOUCHSTART: "touchstart" + H,
    TOUCHMOVE: "touchmove" + H,
    TOUCHEND: "touchend" + H,
    POINTERDOWN: "pointerdown" + H,
    POINTERUP: "pointerup" + H,
    DRAG_START: "dragstart" + H,
    LOAD_DATA_API: "load" + H + R,
    CLICK_DATA_API: "click" + H + R
  },
      B = "carousel",
      V = "active",
      Y = "slide",
      z = "carousel-item-right",
      X = "carousel-item-left",
      $ = "carousel-item-next",
      G = "carousel-item-prev",
      J = "pointer-event",
      Z = ".active",
      tt = ".active.carousel-item",
      et = ".carousel-item",
      nt = ".carousel-item img",
      it = ".carousel-item-next, .carousel-item-prev",
      ot = ".carousel-indicators",
      rt = "[data-slide], [data-slide-to]",
      st = '[data-ride="carousel"]',
      at = {
    TOUCH: "touch",
    PEN: "pen"
  },
      lt = function () {
    function r(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }

    var t = r.prototype;
    return t.next = function () {
      this._isSliding || this._slide(W);
    }, t.nextWhenVisible = function () {
      !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(q);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;
      this._activeElement = this._element.querySelector(tt);

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Q.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = n < t ? W : q;

        this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = l({}, F, t), _.typeCheckConfig(L, t, U), t;
    }, t._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);

      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        0 < e && this.prev(), e < 0 && this.next();
      }
    }, t._addEventListeners = function () {
      var e = this;
      this._config.keyboard && g(this._element).on(Q.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(Q.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, t._addTouchEventListeners = function () {
      var n = this;

      if (this._touchSupported) {
        var e = function e(t) {
          n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX);
        },
            i = function i(t) {
          n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
            return n.cycle(t);
          }, 500 + n._config.interval));
        };

        g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) {
          return t.preventDefault();
        }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function (t) {
          return e(t);
        }), g(this._element).on(Q.POINTERUP, function (t) {
          return i(t);
        }), this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function (t) {
          return e(t);
        }), g(this._element).on(Q.TOUCHMOVE, function (t) {
          var e;
          (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX;
        }), g(this._element).on(Q.TOUCHEND, function (t) {
          return i(t);
        }));
      }
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, t._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === W,
          i = t === q,
          o = this._getItemIndex(e),
          r = this._items.length - 1;

      if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
      var s = (o + (t === q ? -1 : 1)) % this._items.length;
      return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector(tt)),
          o = g.Event(Q.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });

      return g(this._element).trigger(o), o;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
        g(e).removeClass(V);

        var n = this._indicatorsElement.children[this._getItemIndex(t)];

        n && g(n).addClass(V);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          o,
          r = this,
          s = this._element.querySelector(tt),
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);

      if (o = t === W ? (n = X, i = $, M) : (n = z, i = G, K), l && g(l).hasClass(V)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
        var u = g.Event(Q.SLID, {
          relatedTarget: l,
          direction: o,
          from: a,
          to: c
        });

        if (g(this._element).hasClass(Y)) {
          g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
          var f = parseInt(l.getAttribute("data-interval"), 10);
          this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;

          var d = _.getTransitionDurationFromElement(s);

          g(s).one(_.TRANSITION_END, function () {
            g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
              return g(r._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(d);
        } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u);

        h && this.cycle();
      }
    }, r._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this).data(j),
            e = l({}, F, g(this).data());
        "object" == _typeof(i) && (e = l({}, e, i));
        var n = "string" == typeof i ? i : e.slide;
        if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        } else e.interval && e.ride && (t.pause(), t.cycle());
      });
    }, r._dataApiClickHandler = function (t) {
      var e = _.getSelectorFromElement(this);

      if (e) {
        var n = g(e)[0];

        if (n && g(n).hasClass(B)) {
          var i = l({}, g(n).data(), g(this).data()),
              o = this.getAttribute("data-slide-to");
          o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault();
        }
      }
    }, s(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return F;
      }
    }]), r;
  }();

  g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
      var i = g(t[e]);

      lt._jQueryInterface.call(i, i.data());
    }
  }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function () {
    return g.fn[L] = x, lt._jQueryInterface;
  };

  var ct = "collapse",
      ht = "bs.collapse",
      ut = "." + ht,
      ft = g.fn[ct],
      dt = {
    toggle: !0,
    parent: ""
  },
      gt = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      _t = {
    SHOW: "show" + ut,
    SHOWN: "shown" + ut,
    HIDE: "hide" + ut,
    HIDDEN: "hidden" + ut,
    CLICK_DATA_API: "click" + ut + ".data-api"
  },
      mt = "show",
      pt = "collapse",
      vt = "collapsing",
      yt = "collapsed",
      Et = "width",
      Ct = "height",
      Tt = ".show, .collapsing",
      St = '[data-toggle="collapse"]',
      bt = function () {
    function a(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = _.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
          return t === e;
        });

        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var t = a.prototype;
    return t.toggle = function () {
      g(this._element).hasClass(mt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;

      if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) {
        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt);
      })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
        var i = g.Event(_t.SHOW);

        if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));

          var o = this._getDimension();

          g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0);

          var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
              s = _.getTransitionDurationFromElement(this._element);

          g(this._element).one(_.TRANSITION_END, function () {
            g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;

      if (!this._isTransitioning && g(this._element).hasClass(mt)) {
        var e = g.Event(_t.HIDE);

        if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
          var i = this._triggerArray.length;
          if (0 < i) for (var o = 0; o < i; o++) {
            var r = this._triggerArray[o],
                s = _.getSelectorFromElement(r);

            if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";

          var a = _.getTransitionDurationFromElement(this._element);

          g(this._element).one(_.TRANSITION_END, function () {
            t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t;
    }, t._getDimension = function () {
      return g(this._element).hasClass(Et) ? Et : Ct;
    }, t._getParent = function () {
      var t,
          n = this;
      _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(t.querySelectorAll(e));
      return g(i).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      var n = g(t).hasClass(mt);
      e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n);
    }, a._getTargetFromElement = function (t) {
      var e = _.getSelectorFromElement(t);

      return e ? document.querySelector(e) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this),
            e = t.data(ht),
            n = l({}, dt, t.data(), "object" == _typeof(i) && i ? i : {});

        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
          e[i]();
        }
      });
    }, s(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return dt;
      }
    }]), a;
  }();

  g(document).on(_t.CLICK_DATA_API, St, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();

    var n = g(this),
        e = _.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(e));

    g(i).each(function () {
      var t = g(this),
          e = t.data(ht) ? "toggle" : n.data();

      bt._jQueryInterface.call(t, e);
    });
  }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function () {
    return g.fn[ct] = ft, bt._jQueryInterface;
  };

  var It = "dropdown",
      Dt = "bs.dropdown",
      wt = "." + Dt,
      At = ".data-api",
      Nt = g.fn[It],
      Ot = new RegExp("38|40|27"),
      kt = {
    HIDE: "hide" + wt,
    HIDDEN: "hidden" + wt,
    SHOW: "show" + wt,
    SHOWN: "shown" + wt,
    CLICK: "click" + wt,
    CLICK_DATA_API: "click" + wt + At,
    KEYDOWN_DATA_API: "keydown" + wt + At,
    KEYUP_DATA_API: "keyup" + wt + At
  },
      Pt = "disabled",
      Lt = "show",
      jt = "dropup",
      Ht = "dropright",
      Rt = "dropleft",
      xt = "dropdown-menu-right",
      Ft = "position-static",
      Ut = '[data-toggle="dropdown"]',
      Wt = ".dropdown form",
      qt = ".dropdown-menu",
      Mt = ".navbar-nav",
      Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Qt = "top-start",
      Bt = "top-end",
      Vt = "bottom-start",
      Yt = "bottom-end",
      zt = "right-start",
      Xt = "left-start",
      $t = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  },
      Gt = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  },
      Jt = function () {
    function c(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var t = c.prototype;
    return t.toggle = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
        var t = c._getParentFromElement(this._element),
            e = g(this._menu).hasClass(Lt);

        if (c._clearMenus(), !e) {
          var n = {
            relatedTarget: this._element
          },
              i = g.Event(kt.SHOW, n);

          if (g(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
              var o = this._element;
              "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Ft), this._popper = new u(o, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n));
          }
        }
      }
    }, t.show = function () {
      if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
        var t = {
          relatedTarget: this._element
        },
            e = g.Event(kt.SHOW, t),
            n = c._getParentFromElement(this._element);

        g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)));
      }
    }, t.hide = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
        var t = {
          relatedTarget: this._element
        },
            e = g.Event(kt.HIDE, t),
            n = c._getParentFromElement(this._element);

        g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)));
      }
    }, t.dispose = function () {
      g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;
      g(this._element).on(kt.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = c._getParentFromElement(this._element);

        t && (this._menu = t.querySelector(qt));
      }

      return this._menu;
    }, t._getPlacement = function () {
      var t = g(this._element.parentNode),
          e = Vt;
      return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt), e;
    }, t._detectNavbar = function () {
      return 0 < g(this._element).closest(".navbar").length;
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, t._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (t.modifiers.applyStyle = {
        enabled: !1
      }), t;
    }, c._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(Dt);

        if (t || (t = new c(this, "object" == _typeof(e) ? e : null), g(this).data(Dt, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, c._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
        var o = c._getParentFromElement(e[n]),
            r = g(e[n]).data(Dt),
            s = {
          relatedTarget: e[n]
        };

        if (t && "click" === t.type && (s.clickEvent = t), r) {
          var a = r._menu;

          if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
            var l = g.Event(kt.HIDE, s);
            g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)));
          }
        }
      }
    }, c._getParentFromElement = function (t) {
      var e,
          n = _.getSelectorFromElement(t);

      return n && (e = document.querySelector(n)), e || t.parentNode;
    }, c._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
        var e = c._getParentFromElement(this),
            n = g(e).hasClass(Lt);

        if (n && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = [].slice.call(e.querySelectorAll(Kt));

          if (0 !== i.length) {
            var o = i.indexOf(t.target);
            38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
          }
        } else {
          if (27 === t.which) {
            var r = e.querySelector(Ut);
            g(r).trigger("focus");
          }

          g(this).trigger("click");
        }
      }
    }, s(c, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return $t;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Gt;
      }
    }]), c;
  }();

  g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function (t) {
    t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle");
  }).on(kt.CLICK_DATA_API, Wt, function (t) {
    t.stopPropagation();
  }), g.fn[It] = Jt._jQueryInterface, g.fn[It].Constructor = Jt, g.fn[It].noConflict = function () {
    return g.fn[It] = Nt, Jt._jQueryInterface;
  };

  var Zt = "modal",
      te = "bs.modal",
      ee = "." + te,
      ne = g.fn[Zt],
      ie = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      oe = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      re = {
    HIDE: "hide" + ee,
    HIDDEN: "hidden" + ee,
    SHOW: "show" + ee,
    SHOWN: "shown" + ee,
    FOCUSIN: "focusin" + ee,
    RESIZE: "resize" + ee,
    CLICK_DISMISS: "click.dismiss" + ee,
    KEYDOWN_DISMISS: "keydown.dismiss" + ee,
    MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
    CLICK_DATA_API: "click" + ee + ".data-api"
  },
      se = "modal-dialog-scrollable",
      ae = "modal-scrollbar-measure",
      le = "modal-backdrop",
      ce = "modal-open",
      he = "fade",
      ue = "show",
      fe = ".modal-dialog",
      de = ".modal-body",
      ge = '[data-toggle="modal"]',
      _e = '[data-dismiss="modal"]',
      me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      pe = ".sticky-top",
      ve = function () {
    function o(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(fe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }

    var t = o.prototype;
    return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;

      if (!this._isShown && !this._isTransitioning) {
        g(this._element).hasClass(he) && (this._isTransitioning = !0);
        var n = g.Event(re.SHOW, {
          relatedTarget: t
        });
        g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, _e, function (t) {
          return e.hide(t);
        }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
          g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
            g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = g.Event(re.HIDE);

        if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = g(this._element).hasClass(he);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(ue), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) {
            var o = _.getTransitionDurationFromElement(this._element);

            g(this._element).one(_.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(o);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return g(t).off(ee);
      }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = l({}, ie, t), _.typeCheckConfig(Zt, t, oe), t;
    }, t._showElement = function (t) {
      var e = this,
          n = g(this._element).hasClass(he);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ue), this._config.focus && this._enforceFocus();

      var i = g.Event(re.SHOWN, {
        relatedTarget: t
      }),
          o = function o() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i);
      };

      if (n) {
        var r = _.getTransitionDurationFromElement(this._dialog);

        g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
      } else o();
    }, t._enforceFocus = function () {
      var e = this;
      g(document).off(re.FOCUSIN).on(re.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;
      this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;
      this._isShown ? g(window).on(re.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : g(window).off(re.RESIZE);
    }, t._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (g(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = g(this._element).hasClass(he) ? he : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = le, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ue), !t) return;
        if (!n) return void t();

        var i = _.getTransitionDurationFromElement(this._backdrop);

        g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        g(this._backdrop).removeClass(ue);

        var o = function o() {
          e._removeBackdrop(), t && t();
        };

        if (g(this._element).hasClass(he)) {
          var r = _.getTransitionDurationFromElement(this._backdrop);

          g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var o = this;

      if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(me)),
            e = [].slice.call(document.querySelectorAll(pe));
        g(t).each(function (t, e) {
          var n = e.style.paddingRight,
              i = g(e).css("padding-right");
          g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
        }), g(e).each(function (t, e) {
          var n = e.style.marginRight,
              i = g(e).css("margin-right");
          g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
        });
        var n = document.body.style.paddingRight,
            i = g(document.body).css("padding-right");
        g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }

      g(document.body).addClass(ce);
    }, t._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(me));
      g(t).each(function (t, e) {
        var n = g(e).data("padding-right");
        g(e).removeData("padding-right"), e.style.paddingRight = n || "";
      });
      var e = [].slice.call(document.querySelectorAll("" + pe));
      g(e).each(function (t, e) {
        var n = g(e).data("margin-right");
        "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right");
      });
      var n = g(document.body).data("padding-right");
      g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = ae, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, o._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = g(this).data(te),
            e = l({}, ie, g(this).data(), "object" == _typeof(n) && n ? n : {});

        if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n](i);
        } else e.show && t.show(i);
      });
    }, s(o, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return ie;
      }
    }]), o;
  }();

  g(document).on(re.CLICK_DATA_API, ge, function (t) {
    var e,
        n = this,
        i = _.getSelectorFromElement(this);

    i && (e = document.querySelector(i));
    var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var r = g(e).one(re.SHOW, function (t) {
      t.isDefaultPrevented() || r.one(re.HIDDEN, function () {
        g(n).is(":visible") && n.focus();
      });
    });

    ve._jQueryInterface.call(g(e), o, this);
  }), g.fn[Zt] = ve._jQueryInterface, g.fn[Zt].Constructor = ve, g.fn[Zt].noConflict = function () {
    return g.fn[Zt] = ne, ve._jQueryInterface;
  };
  var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Ee = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function Se(t, s, e) {
    if (0 === t.length) return t;
    if (e && "function" == typeof e) return e(t);

    for (var n = new window.DOMParser().parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function i(t, e) {
      var n = l[t],
          i = n.nodeName.toLowerCase();
      if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
      var o = [].slice.call(n.attributes),
          r = [].concat(s["*"] || [], s[i] || []);
      o.forEach(function (t) {
        (function (t, e) {
          var n = t.nodeName.toLowerCase();
          if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));

          for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }

          return !1;
        })(t, r) || n.removeAttribute(t.nodeName);
      });
    }, o = 0, r = l.length; o < r; o++) {
      i(o);
    }

    return n.body.innerHTML;
  }

  var be = "tooltip",
      Ie = "bs.tooltip",
      De = "." + Ie,
      we = g.fn[be],
      Ae = "bs-tooltip",
      Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"),
      Oe = ["sanitize", "whiteList", "sanitizeFn"],
      ke = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object"
  },
      Pe = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      Le = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: Ee
  },
      je = "show",
      He = "out",
      Re = {
    HIDE: "hide" + De,
    HIDDEN: "hidden" + De,
    SHOW: "show" + De,
    SHOWN: "shown" + De,
    INSERTED: "inserted" + De,
    CLICK: "click" + De,
    FOCUSIN: "focusin" + De,
    FOCUSOUT: "focusout" + De,
    MOUSEENTER: "mouseenter" + De,
    MOUSELEAVE: "mouseleave" + De
  },
      xe = "fade",
      Fe = "show",
      Ue = ".tooltip-inner",
      We = ".arrow",
      qe = "hover",
      Me = "focus",
      Ke = "click",
      Qe = "manual",
      Be = function () {
    function i(t, e) {
      if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var t = i.prototype;
    return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = g(t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;
      if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
      var t = g.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        g(this.element).trigger(t);

        var n = _.findShadowRoot(this.element),
            i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);

        if (t.isDefaultPrevented() || !i) return;

        var o = this.getTipElement(),
            r = _.getUID(this.constructor.NAME);

        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe);

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
            a = this._getAttachment(s);

        this.addAttachmentClass(a);

        var l = this._getContainer();

        g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, {
          placement: a,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: We
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          },
          onUpdate: function onUpdate(t) {
            return e._handlePopperPlacementChange(t);
          }
        }), g(o).addClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);

        var c = function c() {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e);
        };

        if (g(this.tip).hasClass(xe)) {
          var h = _.getTransitionDurationFromElement(this.tip);

          g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
        } else c();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = g.Event(this.constructor.Event.HIDE),
          o = function o() {
        e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };

      if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (g(n).removeClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ke] = !1, this._activeTrigger[Me] = !1, this._activeTrigger[qe] = !1, g(this.tip).hasClass(xe)) {
          var r = _.getTransitionDurationFromElement(n);

          g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();

        this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass(Ae + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe);
    }, t.setElementContent = function (t, e) {
      "object" != _typeof(e) || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text());
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, t._getContainer = function () {
      return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container);
    }, t._getAttachment = function (t) {
      return Pe[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== Qe) {
          var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          g(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }
      }), g(this.element).closest(".modal").on("hide.bs.modal", function () {
        i.element && i.hide();
      }), this.config.selector ? this.config = l({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0), g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout), e._hoverState = je, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === je && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === He && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, t._getConfig = function (t) {
      var e = g(this.element).data();
      return Object.keys(e).forEach(function (t) {
        -1 !== Oe.indexOf(t) && delete e[t];
      }), "number" == typeof (t = l({}, this.constructor.Default, e, "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(be, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)), t;
    }, t._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, t._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(Ne);
      null !== e && e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      var e = t.instance;
      this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (g(t).removeClass(xe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ie),
            e = "object" == _typeof(n) && n;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ie, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Le;
      }
    }, {
      key: "NAME",
      get: function get() {
        return be;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Ie;
      }
    }, {
      key: "Event",
      get: function get() {
        return Re;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return De;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ke;
      }
    }]), i;
  }();

  g.fn[be] = Be._jQueryInterface, g.fn[be].Constructor = Be, g.fn[be].noConflict = function () {
    return g.fn[be] = we, Be._jQueryInterface;
  };

  var Ve = "popover",
      Ye = "bs.popover",
      ze = "." + Ye,
      Xe = g.fn[Ve],
      $e = "bs-popover",
      Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
      Je = l({}, Be.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Ze = l({}, Be.DefaultType, {
    content: "(string|element|function)"
  }),
      tn = "fade",
      en = "show",
      nn = ".popover-header",
      on = ".popover-body",
      rn = {
    HIDE: "hide" + ze,
    HIDDEN: "hidden" + ze,
    SHOW: "show" + ze,
    SHOWN: "shown" + ze,
    INSERTED: "inserted" + ze,
    CLICK: "click" + ze,
    FOCUSIN: "focusin" + ze,
    FOCUSOUT: "focusout" + ze,
    MOUSEENTER: "mouseenter" + ze,
    MOUSELEAVE: "mouseleave" + ze
  },
      sn = function (t) {
    var e, n;

    function i() {
      return t.apply(this, arguments) || this;
    }

    n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
    var o = i.prototype;
    return o.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, o.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass($e + "-" + t);
    }, o.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, o.setContent = function () {
      var t = g(this.getTipElement());
      this.setElementContent(t.find(nn), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en);
    }, o._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, o._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(Ge);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ye),
            e = "object" == _typeof(n) ? n : null;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ye, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Je;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ve;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Ye;
      }
    }, {
      key: "Event",
      get: function get() {
        return rn;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ze;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ze;
      }
    }]), i;
  }(Be);

  g.fn[Ve] = sn._jQueryInterface, g.fn[Ve].Constructor = sn, g.fn[Ve].noConflict = function () {
    return g.fn[Ve] = Xe, sn._jQueryInterface;
  };

  var an = "scrollspy",
      ln = "bs.scrollspy",
      cn = "." + ln,
      hn = g.fn[an],
      un = {
    offset: 10,
    method: "auto",
    target: ""
  },
      fn = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      dn = {
    ACTIVATE: "activate" + cn,
    SCROLL: "scroll" + cn,
    LOAD_DATA_API: "load" + cn + ".data-api"
  },
      gn = "dropdown-item",
      _n = "active",
      mn = '[data-spy="scroll"]',
      pn = ".nav, .list-group",
      vn = ".nav-link",
      yn = ".nav-item",
      En = ".list-group-item",
      Cn = ".dropdown",
      Tn = ".dropdown-item",
      Sn = ".dropdown-toggle",
      bn = "offset",
      In = "position",
      Dn = function () {
    function n(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(dn.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var t = n.prototype;
    return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? bn : In,
          o = "auto" === this._config.method ? t : this._config.method,
          r = o === In ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var e,
            n = _.getSelectorFromElement(t);

        if (n && (e = document.querySelector(n)), e) {
          var i = e.getBoundingClientRect();
          if (i.width || i.height) return [g(e)[o]().top + r, n];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      g.removeData(this._element, ln), g(this._scrollElement).off(cn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = l({}, un, "object" == _typeof(t) && t ? t : {})).target) {
        var e = g(t.target).attr("id");
        e || (e = _.getUID(an), g(t.target).attr("id", e)), t.target = "#" + e;
      }

      return _.typeCheckConfig(an, t, fn), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();

      var t = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          n = g([].slice.call(document.querySelectorAll(t.join(","))));

      n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(pn).prev(vn + ", " + En).addClass(_n), n.parents(pn).prev(yn).children(vn).addClass(_n)), g(this._scrollElement).trigger(dn.ACTIVATE, {
        relatedTarget: e
      });
    }, t._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
        return t.classList.contains(_n);
      }).forEach(function (t) {
        return t.classList.remove(_n);
      });
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(ln);

        if (t || (t = new n(this, "object" == _typeof(e) && e), g(this).data(ln, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return un;
      }
    }]), n;
  }();

  g(window).on(dn.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) {
      var n = g(t[e]);

      Dn._jQueryInterface.call(n, n.data());
    }
  }), g.fn[an] = Dn._jQueryInterface, g.fn[an].Constructor = Dn, g.fn[an].noConflict = function () {
    return g.fn[an] = hn, Dn._jQueryInterface;
  };

  var wn = "bs.tab",
      An = "." + wn,
      Nn = g.fn.tab,
      On = {
    HIDE: "hide" + An,
    HIDDEN: "hidden" + An,
    SHOW: "show" + An,
    SHOWN: "shown" + An,
    CLICK_DATA_API: "click" + An + ".data-api"
  },
      kn = "dropdown-menu",
      Pn = "active",
      Ln = "disabled",
      jn = "fade",
      Hn = "show",
      Rn = ".dropdown",
      xn = ".nav, .list-group",
      Fn = ".active",
      Un = "> li > .active",
      Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      qn = ".dropdown-toggle",
      Mn = "> .dropdown-menu .active",
      Kn = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
        var t,
            i,
            e = g(this._element).closest(xn)[0],
            o = _.getSelectorFromElement(this._element);

        if (e) {
          var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
          i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
        }

        var s = g.Event(On.HIDE, {
          relatedTarget: this._element
        }),
            a = g.Event(On.SHOW, {
          relatedTarget: i
        });

        if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          o && (t = document.querySelector(o)), this._activate(this._element, e);

          var l = function l() {
            var t = g.Event(On.HIDDEN, {
              relatedTarget: n._element
            }),
                e = g.Event(On.SHOWN, {
              relatedTarget: i
            });
            g(i).trigger(t), g(n._element).trigger(e);
          };

          t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      g.removeData(this._element, wn), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0],
          r = n && o && g(o).hasClass(jn),
          s = function s() {
        return i._transitionComplete(t, o, n);
      };

      if (o && r) {
        var a = _.getTransitionDurationFromElement(o);

        g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a);
      } else s();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        g(e).removeClass(Pn);
        var i = g(e.parentNode).find(Mn)[0];
        i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn)) {
        var o = g(t).closest(Rn)[0];

        if (o) {
          var r = [].slice.call(o.querySelectorAll(qn));
          g(r).addClass(Pn);
        }

        t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(wn);

        if (e || (e = new i(this), t.data(wn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), i;
  }();

  g(document).on(On.CLICK_DATA_API, Wn, function (t) {
    t.preventDefault(), Kn._jQueryInterface.call(g(this), "show");
  }), g.fn.tab = Kn._jQueryInterface, g.fn.tab.Constructor = Kn, g.fn.tab.noConflict = function () {
    return g.fn.tab = Nn, Kn._jQueryInterface;
  };

  var Qn = "toast",
      Bn = "bs.toast",
      Vn = "." + Bn,
      Yn = g.fn[Qn],
      zn = {
    CLICK_DISMISS: "click.dismiss" + Vn,
    HIDE: "hide" + Vn,
    HIDDEN: "hidden" + Vn,
    SHOW: "show" + Vn,
    SHOWN: "shown" + Vn
  },
      Xn = "fade",
      $n = "hide",
      Gn = "show",
      Jn = "showing",
      Zn = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      ti = {
    animation: !0,
    autohide: !0,
    delay: 500
  },
      ei = '[data-dismiss="toast"]',
      ni = function () {
    function i(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
    }

    var t = i.prototype;
    return t.show = function () {
      var t = this;
      g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn);

      var e = function e() {
        t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide();
      };

      if (this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation) {
        var n = _.getTransitionDurationFromElement(this._element);

        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, t.hide = function (t) {
      var e = this;
      this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
        e._close();
      }, this._config.delay));
    }, t.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), g(this._element).off(zn.CLICK_DISMISS), g.removeData(this._element, Bn), this._element = null, this._config = null;
    }, t._getConfig = function (t) {
      return t = l({}, ti, g(this._element).data(), "object" == _typeof(t) && t ? t : {}), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t;
    }, t._setListeners = function () {
      var t = this;
      g(this._element).on(zn.CLICK_DISMISS, ei, function () {
        return t.hide(!0);
      });
    }, t._close = function () {
      var t = this,
          e = function e() {
        t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN);
      };

      if (this._element.classList.remove(Gn), this._config.animation) {
        var n = _.getTransitionDurationFromElement(this._element);

        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(Bn);

        if (e || (e = new i(this, "object" == _typeof(n) && n), t.data(Bn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n](this);
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Zn;
      }
    }, {
      key: "Default",
      get: function get() {
        return ti;
      }
    }]), i;
  }();

  g.fn[Qn] = ni._jQueryInterface, g.fn[Qn].Constructor = ni, g.fn[Qn].noConflict = function () {
    return g.fn[Qn] = Yn, ni._jQueryInterface;
  }, function () {
    if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t = g.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Jt, t.Modal = ve, t.Popover = sn, t.Scrollspy = Dn, t.Tab = Kn, t.Toast = ni, t.Tooltip = Be, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function t(t) {
    return getComputedStyle(t);
  }

  function e(t, e) {
    for (var i in e) {
      var r = e[i];
      "number" == typeof r && (r += "px"), t.style[i] = r;
    }

    return t;
  }

  function i(t) {
    var e = document.createElement("div");
    return e.className = t, e;
  }

  function r(t, e) {
    if (!v) throw new Error("No element matching method supported");
    return v.call(t, e);
  }

  function l(t) {
    t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
  }

  function n(t, e) {
    return Array.prototype.filter.call(t.children, function (t) {
      return r(t, e);
    });
  }

  function o(t, e) {
    var i = t.element.classList,
        r = m.state.scrolling(e);
    i.contains(r) ? clearTimeout(Y[e]) : i.add(r);
  }

  function s(t, e) {
    Y[e] = setTimeout(function () {
      return t.isAlive && t.element.classList.remove(m.state.scrolling(e));
    }, t.settings.scrollingThreshold);
  }

  function a(t, e) {
    o(t, e), s(t, e);
  }

  function c(t) {
    if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
    var e = document.createEvent("CustomEvent");
    return e.initCustomEvent(t, !1, !1, void 0), e;
  }

  function h(t, e, i, r, l) {
    var n = i[0],
        o = i[1],
        s = i[2],
        h = i[3],
        u = i[4],
        d = i[5];
    void 0 === r && (r = !0), void 0 === l && (l = !1);
    var f = t.element;
    t.reach[h] = null, f[s] < 1 && (t.reach[h] = "start"), f[s] > t[n] - t[o] - 1 && (t.reach[h] = "end"), e && (f.dispatchEvent(c("ps-scroll-" + h)), e < 0 ? f.dispatchEvent(c("ps-scroll-" + u)) : e > 0 && f.dispatchEvent(c("ps-scroll-" + d)), r && a(t, h)), t.reach[h] && (e || l) && f.dispatchEvent(c("ps-" + h + "-reach-" + t.reach[h]));
  }

  function u(t) {
    return parseInt(t, 10) || 0;
  }

  function d(t) {
    return r(t, "input,[contenteditable]") || r(t, "select,[contenteditable]") || r(t, "textarea,[contenteditable]") || r(t, "button,[contenteditable]");
  }

  function f(e) {
    var i = t(e);
    return u(i.width) + u(i.paddingLeft) + u(i.paddingRight) + u(i.borderLeftWidth) + u(i.borderRightWidth);
  }

  function p(t, e) {
    return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
  }

  function b(t, i) {
    var r = {
      width: i.railXWidth
    },
        l = Math.floor(t.scrollTop);
    i.isRtl ? r.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : r.left = t.scrollLeft, i.isScrollbarXUsingBottom ? r.bottom = i.scrollbarXBottom - l : r.top = i.scrollbarXTop + l, e(i.scrollbarXRail, r);
    var n = {
      top: l,
      height: i.railYHeight
    };
    i.isScrollbarYUsingRight ? i.isRtl ? n.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth : n.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? n.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : n.left = i.scrollbarYLeft + t.scrollLeft, e(i.scrollbarYRail, n), e(i.scrollbarX, {
      left: i.scrollbarXLeft,
      width: i.scrollbarXWidth - i.railBorderXWidth
    }), e(i.scrollbarY, {
      top: i.scrollbarYTop,
      height: i.scrollbarYHeight - i.railBorderYWidth
    });
  }

  function g(t, e) {
    function i(e) {
      b[d] = g + Y * (e[a] - v), o(t, f), R(t), e.stopPropagation(), e.preventDefault();
    }

    function r() {
      s(t, f), t[p].classList.remove(m.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", i);
    }

    var l = e[0],
        n = e[1],
        a = e[2],
        c = e[3],
        h = e[4],
        u = e[5],
        d = e[6],
        f = e[7],
        p = e[8],
        b = t.element,
        g = null,
        v = null,
        Y = null;
    t.event.bind(t[h], "mousedown", function (e) {
      g = b[d], v = e[a], Y = (t[n] - t[l]) / (t[c] - t[u]), t.event.bind(t.ownerDocument, "mousemove", i), t.event.once(t.ownerDocument, "mouseup", r), t[p].classList.add(m.state.clicking), e.stopPropagation(), e.preventDefault();
    });
  }

  var v = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
      m = {
    main: "ps",
    element: {
      thumb: function thumb(t) {
        return "ps__thumb-" + t;
      },
      rail: function rail(t) {
        return "ps__rail-" + t;
      },
      consuming: "ps__child--consume"
    },
    state: {
      focus: "ps--focus",
      clicking: "ps--clicking",
      active: function active(t) {
        return "ps--active-" + t;
      },
      scrolling: function scrolling(t) {
        return "ps--scrolling-" + t;
      }
    }
  },
      Y = {
    x: null,
    y: null
  },
      X = function X(t) {
    this.element = t, this.handlers = {};
  },
      w = {
    isEmpty: {
      configurable: !0
    }
  };

  X.prototype.bind = function (t, e) {
    void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
  }, X.prototype.unbind = function (t, e) {
    var i = this;
    this.handlers[t] = this.handlers[t].filter(function (r) {
      return !(!e || r === e) || (i.element.removeEventListener(t, r, !1), !1);
    });
  }, X.prototype.unbindAll = function () {
    var t = this;

    for (var e in t.handlers) {
      t.unbind(e);
    }
  }, w.isEmpty.get = function () {
    var t = this;
    return Object.keys(this.handlers).every(function (e) {
      return 0 === t.handlers[e].length;
    });
  }, Object.defineProperties(X.prototype, w);

  var y = function y() {
    this.eventElements = [];
  };

  y.prototype.eventElement = function (t) {
    var e = this.eventElements.filter(function (e) {
      return e.element === t;
    })[0];
    return e || (e = new X(t), this.eventElements.push(e)), e;
  }, y.prototype.bind = function (t, e, i) {
    this.eventElement(t).bind(e, i);
  }, y.prototype.unbind = function (t, e, i) {
    var r = this.eventElement(t);
    r.unbind(e, i), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1);
  }, y.prototype.unbindAll = function () {
    this.eventElements.forEach(function (t) {
      return t.unbindAll();
    }), this.eventElements = [];
  }, y.prototype.once = function (t, e, i) {
    var r = this.eventElement(t),
        l = function l(t) {
      r.unbind(e, l), i(t);
    };

    r.bind(e, l);
  };

  var W = function W(t, e, i, r, l) {
    void 0 === r && (r = !0), void 0 === l && (l = !1);
    var n;
    if ("top" === e) n = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];else {
      if ("left" !== e) throw new Error("A proper axis should be provided");
      n = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
    }
    h(t, i, n, r, l);
  },
      L = {
    isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
    supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
    isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
  },
      R = function R(t) {
    var e = t.element,
        i = Math.floor(e.scrollTop);
    t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight, e.contains(t.scrollbarXRail) || (n(e, m.element.rail("x")).forEach(function (t) {
      return l(t);
    }), e.appendChild(t.scrollbarXRail)), e.contains(t.scrollbarYRail) || (n(e, m.element.rail("y")).forEach(function (t) {
      return l(t);
    }), e.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = p(t, u(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = u((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = p(t, u(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = u(i * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), b(e, t), t.scrollbarXActive ? e.classList.add(m.state.active("x")) : (e.classList.remove(m.state.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = 0), t.scrollbarYActive ? e.classList.add(m.state.active("y")) : (e.classList.remove(m.state.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0);
  },
      T = {
    "click-rail": function clickRail(t) {
      t.event.bind(t.scrollbarY, "mousedown", function (t) {
        return t.stopPropagation();
      }), t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
        var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
        t.element.scrollTop += i * t.containerHeight, R(t), e.stopPropagation();
      }), t.event.bind(t.scrollbarX, "mousedown", function (t) {
        return t.stopPropagation();
      }), t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
        var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
        t.element.scrollLeft += i * t.containerWidth, R(t), e.stopPropagation();
      });
    },
    "drag-thumb": function dragThumb(t) {
      g(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), g(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
    },
    keyboard: function keyboard(t) {
      function e(e, r) {
        var l = Math.floor(i.scrollTop);

        if (0 === e) {
          if (!t.scrollbarYActive) return !1;
          if (0 === l && r > 0 || l >= t.contentHeight - t.containerHeight && r < 0) return !t.settings.wheelPropagation;
        }

        var n = i.scrollLeft;

        if (0 === r) {
          if (!t.scrollbarXActive) return !1;
          if (0 === n && e < 0 || n >= t.contentWidth - t.containerWidth && e > 0) return !t.settings.wheelPropagation;
        }

        return !0;
      }

      var i = t.element,
          l = function l() {
        return r(i, ":hover");
      },
          n = function n() {
        return r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus");
      };

      t.event.bind(t.ownerDocument, "keydown", function (r) {
        if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented) && (l() || n())) {
          var o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;

          if (o) {
            if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;else for (; o.shadowRoot;) {
              o = o.shadowRoot.activeElement;
            }
            if (d(o)) return;
          }

          var s = 0,
              a = 0;

          switch (r.which) {
            case 37:
              s = r.metaKey ? -t.contentWidth : r.altKey ? -t.containerWidth : -30;
              break;

            case 38:
              a = r.metaKey ? t.contentHeight : r.altKey ? t.containerHeight : 30;
              break;

            case 39:
              s = r.metaKey ? t.contentWidth : r.altKey ? t.containerWidth : 30;
              break;

            case 40:
              a = r.metaKey ? -t.contentHeight : r.altKey ? -t.containerHeight : -30;
              break;

            case 32:
              a = r.shiftKey ? t.containerHeight : -t.containerHeight;
              break;

            case 33:
              a = t.containerHeight;
              break;

            case 34:
              a = -t.containerHeight;
              break;

            case 36:
              a = t.contentHeight;
              break;

            case 35:
              a = -t.contentHeight;
              break;

            default:
              return;
          }

          t.settings.suppressScrollX && 0 !== s || t.settings.suppressScrollY && 0 !== a || (i.scrollTop -= a, i.scrollLeft += s, R(t), e(s, a) && r.preventDefault());
        }
      });
    },
    wheel: function wheel(e) {
      function i(t, i) {
        var r = Math.floor(o.scrollTop),
            l = 0 === o.scrollTop,
            n = r + o.offsetHeight === o.scrollHeight,
            s = 0 === o.scrollLeft,
            a = o.scrollLeft + o.offsetWidth === o.scrollWidth;
        return !(Math.abs(i) > Math.abs(t) ? l || n : s || a) || !e.settings.wheelPropagation;
      }

      function r(t) {
        var e = t.deltaX,
            i = -1 * t.deltaY;
        return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e !== e && i !== i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i];
      }

      function l(e, i, r) {
        if (!L.isWebKit && o.querySelector("select:focus")) return !0;
        if (!o.contains(e)) return !1;

        for (var l = e; l && l !== o;) {
          if (l.classList.contains(m.element.consuming)) return !0;
          var n = t(l);

          if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
            var s = l.scrollHeight - l.clientHeight;
            if (s > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === s && r < 0)) return !0;
            var a = l.scrollWidth - l.clientWidth;
            if (a > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === a && i > 0)) return !0;
          }

          l = l.parentNode;
        }

        return !1;
      }

      function n(t) {
        var n = r(t),
            s = n[0],
            a = n[1];

        if (!l(t.target, s, a)) {
          var c = !1;
          e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (a ? o.scrollTop -= a * e.settings.wheelSpeed : o.scrollTop += s * e.settings.wheelSpeed, c = !0) : e.scrollbarXActive && !e.scrollbarYActive && (s ? o.scrollLeft += s * e.settings.wheelSpeed : o.scrollLeft -= a * e.settings.wheelSpeed, c = !0) : (o.scrollTop -= a * e.settings.wheelSpeed, o.scrollLeft += s * e.settings.wheelSpeed), R(e), (c = c || i(s, a)) && !t.ctrlKey && (t.stopPropagation(), t.preventDefault());
        }
      }

      var o = e.element;
      void 0 !== window.onwheel ? e.event.bind(o, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(o, "mousewheel", n);
    },
    touch: function touch(e) {
      function i(t, i) {
        var r = Math.floor(h.scrollTop),
            l = h.scrollLeft,
            n = Math.abs(t),
            o = Math.abs(i);

        if (o > n) {
          if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && 0 === r) return 0 === window.scrollY && i > 0 && L.isChrome;
        } else if (n > o && (t < 0 && l === e.contentWidth - e.containerWidth || t > 0 && 0 === l)) return !0;

        return !0;
      }

      function r(t, i) {
        h.scrollTop -= i, h.scrollLeft -= t, R(e);
      }

      function l(t) {
        return t.targetTouches ? t.targetTouches[0] : t;
      }

      function n(t) {
        return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE));
      }

      function o(t) {
        if (n(t)) {
          var e = l(t);
          u.pageX = e.pageX, u.pageY = e.pageY, d = new Date().getTime(), null !== p && clearInterval(p);
        }
      }

      function s(e, i, r) {
        if (!h.contains(e)) return !1;

        for (var l = e; l && l !== h;) {
          if (l.classList.contains(m.element.consuming)) return !0;
          var n = t(l);

          if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
            var o = l.scrollHeight - l.clientHeight;
            if (o > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === o && r < 0)) return !0;
            var s = l.scrollLeft - l.clientWidth;
            if (s > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === s && i > 0)) return !0;
          }

          l = l.parentNode;
        }

        return !1;
      }

      function a(t) {
        if (n(t)) {
          var e = l(t),
              o = {
            pageX: e.pageX,
            pageY: e.pageY
          },
              a = o.pageX - u.pageX,
              c = o.pageY - u.pageY;
          if (s(t.target, a, c)) return;
          r(a, c), u = o;
          var h = new Date().getTime(),
              p = h - d;
          p > 0 && (f.x = a / p, f.y = c / p, d = h), i(a, c) && t.preventDefault();
        }
      }

      function c() {
        e.settings.swipeEasing && (clearInterval(p), p = setInterval(function () {
          e.isInitialized ? clearInterval(p) : f.x || f.y ? Math.abs(f.x) < .01 && Math.abs(f.y) < .01 ? clearInterval(p) : (r(30 * f.x, 30 * f.y), f.x *= .8, f.y *= .8) : clearInterval(p);
        }, 10));
      }

      if (L.supportsTouch || L.supportsIePointer) {
        var h = e.element,
            u = {},
            d = 0,
            f = {},
            p = null;
        L.supportsTouch ? (e.event.bind(h, "touchstart", o), e.event.bind(h, "touchmove", a), e.event.bind(h, "touchend", c)) : L.supportsIePointer && (window.PointerEvent ? (e.event.bind(h, "pointerdown", o), e.event.bind(h, "pointermove", a), e.event.bind(h, "pointerup", c)) : window.MSPointerEvent && (e.event.bind(h, "MSPointerDown", o), e.event.bind(h, "MSPointerMove", a), e.event.bind(h, "MSPointerUp", c)));
      }
    }
  },
      H = function H(r, l) {
    var n = this;
    if (void 0 === l && (l = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
    this.element = r, r.classList.add(m.main), this.settings = {
      handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollingThreshold: 1e3,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipeEasing: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !0,
      wheelSpeed: 1
    };

    for (var o in l) {
      n.settings[o] = l[o];
    }

    this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;

    var s = function s() {
      return r.classList.add(m.state.focus);
    },
        a = function a() {
      return r.classList.remove(m.state.focus);
    };

    this.isRtl = "rtl" === t(r).direction, this.isNegativeScroll = function () {
      var t = r.scrollLeft,
          e = null;
      return r.scrollLeft = -1, e = r.scrollLeft < 0, r.scrollLeft = t, e;
    }(), this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0, this.event = new y(), this.ownerDocument = r.ownerDocument || document, this.scrollbarXRail = i(m.element.rail("x")), r.appendChild(this.scrollbarXRail), this.scrollbarX = i(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
    var c = t(this.scrollbarXRail);
    this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), e(this.scrollbarXRail, {
      display: "block"
    }), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), e(this.scrollbarXRail, {
      display: ""
    }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = i(m.element.rail("y")), r.appendChild(this.scrollbarYRail), this.scrollbarY = i(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
    var h = t(this.scrollbarYRail);
    this.scrollbarYRight = parseInt(h.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(h.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? f(this.scrollbarY) : null, this.railBorderYWidth = u(h.borderTopWidth) + u(h.borderBottomWidth), e(this.scrollbarYRail, {
      display: "block"
    }), this.railYMarginHeight = u(h.marginTop) + u(h.marginBottom), e(this.scrollbarYRail, {
      display: ""
    }), this.railYHeight = null, this.railYRatio = null, this.reach = {
      x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
      y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
    }, this.isAlive = !0, this.settings.handlers.forEach(function (t) {
      return T[t](n);
    }), this.lastScrollTop = Math.floor(r.scrollTop), this.lastScrollLeft = r.scrollLeft, this.event.bind(this.element, "scroll", function (t) {
      return n.onScroll(t);
    }), R(this);
  };

  return H.prototype.update = function () {
    this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, e(this.scrollbarXRail, {
      display: "block"
    }), e(this.scrollbarYRail, {
      display: "block"
    }), this.railXMarginWidth = u(t(this.scrollbarXRail).marginLeft) + u(t(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(t(this.scrollbarYRail).marginTop) + u(t(this.scrollbarYRail).marginBottom), e(this.scrollbarXRail, {
      display: "none"
    }), e(this.scrollbarYRail, {
      display: "none"
    }), R(this), W(this, "top", 0, !1, !0), W(this, "left", 0, !1, !0), e(this.scrollbarXRail, {
      display: ""
    }), e(this.scrollbarYRail, {
      display: ""
    }));
  }, H.prototype.onScroll = function (t) {
    this.isAlive && (R(this), W(this, "top", this.element.scrollTop - this.lastScrollTop), W(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
  }, H.prototype.destroy = function () {
    this.isAlive && (this.event.unbindAll(), l(this.scrollbarX), l(this.scrollbarY), l(this.scrollbarXRail), l(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
  }, H.prototype.removePsClasses = function () {
    this.element.className = this.element.className.split(" ").filter(function (t) {
      return !t.match(/^ps([-_].+|)$/);
    }).join(" ");
  }, H;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

__webpack_require__(/*! ../assets/vendors/js/vendor.bundle.base */ "./resources/assets/vendors/js/vendor.bundle.base.js");

__webpack_require__(/*! ../assets/vendors/js/vendor.bundle.addons */ "./resources/assets/vendors/js/vendor.bundle.addons.js");

__webpack_require__(/*! ../assets/js/misc */ "./resources/assets/js/misc.js");

__webpack_require__(/*! ../assets/js/off-canvas */ "./resources/assets/js/off-canvas.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/home.scss":
/*!**********************************!*\
  !*** ./resources/sass/home.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleNotFoundError: Module not found: Error: Can't resolve '../fonts/glyphicons-halflings-regular.eot' in '/var/www/html/tkhanepani/resources/front/css'\n    at factory.create (/var/www/html/tkhanepani/node_modules/webpack/lib/Compilation.js:925:10)\n    at factory (/var/www/html/tkhanepani/node_modules/webpack/lib/NormalModuleFactory.js:401:22)\n    at resolver (/var/www/html/tkhanepani/node_modules/webpack/lib/NormalModuleFactory.js:130:21)\n    at asyncLib.parallel (/var/www/html/tkhanepani/node_modules/webpack/lib/NormalModuleFactory.js:224:22)\n    at /var/www/html/tkhanepani/node_modules/neo-async/async.js:2830:7\n    at /var/www/html/tkhanepani/node_modules/neo-async/async.js:6877:13\n    at normalResolver.resolve (/var/www/html/tkhanepani/node_modules/webpack/lib/NormalModuleFactory.js:214:25)\n    at doResolve (/var/www/html/tkhanepani/node_modules/enhanced-resolve/lib/Resolver.js:213:14)\n    at hook.callAsync (/var/www/html/tkhanepani/node_modules/enhanced-resolve/lib/Resolver.js:285:5)\n    at _fn0 (eval at create (/var/www/html/tkhanepani/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at resolver.doResolve (/var/www/html/tkhanepani/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:44:7)\n    at hook.callAsync (/var/www/html/tkhanepani/node_modules/enhanced-resolve/lib/Resolver.js:285:5)\n    at _fn0 (eval at create (/var/www/html/tkhanepani/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at hook.callAsync (/var/www/html/tkhanepani/node_modules/enhanced-resolve/lib/Resolver.js:285:5)\n    at _fn0 (eval at create (/var/www/html/tkhanepani/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at resolver.doResolve (/var/www/html/tkhanepani/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:67:43)\n    at hook.callAsync (/var/www/html/tkhanepani/node_modules/enhanced-resolve/lib/Resolver.js:285:5)\n    at _fn43 (eval at create (/var/www/html/tkhanepani/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at hook.callAsync (/var/www/html/tkhanepani/node_modules/enhanced-resolve/lib/Resolver.js:285:5)\n    at _fn0 (eval at create (/var/www/html/tkhanepani/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at resolver.doResolve (/var/www/html/tkhanepani/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:67:43)\n    at hook.callAsync (/var/www/html/tkhanepani/node_modules/enhanced-resolve/lib/Resolver.js:285:5)\n    at _fn1 (eval at create (/var/www/html/tkhanepani/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at hook.callAsync (/var/www/html/tkhanepani/node_modules/enhanced-resolve/lib/Resolver.js:285:5)\n    at _fn0 (eval at create (/var/www/html/tkhanepani/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at fs.stat (/var/www/html/tkhanepani/node_modules/enhanced-resolve/lib/DirectoryExistsPlugin.js:27:15)\n    at process.nextTick (/var/www/html/tkhanepani/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:85:15)\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ }),

/***/ 0:
/*!****************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/home.scss ./resources/sass/app.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/tkhanepani/resources/js/app.js */"./resources/js/app.js");
__webpack_require__(/*! /var/www/html/tkhanepani/resources/sass/home.scss */"./resources/sass/home.scss");
module.exports = __webpack_require__(/*! /var/www/html/tkhanepani/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);