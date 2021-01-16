"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }

    return o;
  }

  return r;
})()({
  1: [function (require, module, exports) {
    //Pick the h1 tag
    var h1 = document.querySelector('h1'); //and when i scroll, calculate how big the font size should be

    window.addEventListener("scroll", function () {
      var pixels = window.pageYOffset;
      var fontWeight = pixels * 0.1 + 100;
      var fontWidth = pixels * 0.4 + 100;
      h1.style.fontVariationSettings = "\"wgth\" ".concat(fontWeight, ", \"wdth\" ").concat(fontWidth);
    });
  }, {}]
}, {}, [1]);
//# sourceMappingURL=scripts.js.map