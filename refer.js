(() => {
  "use strict";
  var t = {
    d: (e, i) => {
      for (var n in i)
        t.o(i, n) &&
          !t.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: i[n] });
    },
  };
  (t.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  })()),
    (t.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (t.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    });
  var e = {};
  function i(t) {
    return (
      (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      i(t)
    );
  }
  function n(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function o(t, e, i) {
    return e && s(t.prototype, e), i && s(t, i), t;
  }
  function r(t, e, i) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = i),
      t
    );
  }
  function l(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
          var i = [],
            n = !0,
            s = !1,
            o = void 0;
          try {
            for (
              var r, l = t[Symbol.iterator]();
              !(n = (r = l.next()).done) &&
              (i.push(r.value), !e || i.length !== e);
              n = !0
            );
          } catch (t) {
            (s = !0), (o = t);
          } finally {
            try {
              n || null == l.return || l.return();
            } finally {
              if (s) throw o;
            }
          }
          return i;
        }
      })(t, e) ||
      a(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function a(t, e) {
    if (t) {
      if ("string" == typeof t) return c(t, e);
      var i = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === i && t.constructor && (i = t.constructor.name),
        "Map" === i || "Set" === i
          ? Array.from(t)
          : "Arguments" === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          ? c(t, e)
          : void 0
      );
    }
  }
  function c(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n;
  }
  t.r(e), t.d(e, { Accordion: () => Lt, Load: () => v, Scroll: () => Ot });
  var h = (function () {
      function t(e) {
        n(this, t),
          (this.mAttr = "data-" + e.dataName),
          (this.mCaptureEvents = ["mouseenter", "mouseleave"]),
          (this.el = e.el);
      }
      return (
        o(t, [
          {
            key: "mInit",
            value: function (t) {
              var e = this;
              (this.modules = t),
                (this.mCheckEventTarget = this.mCheckEventTarget.bind(this)),
                this.events &&
                  Object.keys(this.events).forEach(function (t) {
                    return e.mAddEvent(t);
                  });
            },
          },
          {
            key: "mUpdate",
            value: function (t) {
              this.modules = t;
            },
          },
          {
            key: "mDestroy",
            value: function () {
              var t = this;
              this.events &&
                Object.keys(this.events).forEach(function (e) {
                  return t.mRemoveEvent(e);
                });
            },
          },
          {
            key: "mAddEvent",
            value: function (t) {
              var e = !!this.mCaptureEvents.includes(t);
              this.el.addEventListener(t, this.mCheckEventTarget, e);
            },
          },
          {
            key: "mRemoveEvent",
            value: function (t) {
              var e = !!this.mCaptureEvents.includes(t);
              this.el.removeEventListener(t, this.mCheckEventTarget, e);
            },
          },
          {
            key: "mCheckEventTarget",
            value: function (t) {
              var e = this.events[t.type];
              if ("string" == typeof e) this[e](t);
              else {
                var i = "[" + this.mAttr + "]",
                  n = t.target;
                if (this.mCaptureEvents.includes(t.type))
                  n.matches(i) && this.mCallEventMethod(t, e, n);
                else
                  for (
                    ;
                    n &&
                    n !== document &&
                    (!n.matches(i) ||
                      "undefined" == this.mCallEventMethod(t, e, n));

                  )
                    n = n.parentNode;
              }
            },
          },
          {
            key: "mCallEventMethod",
            value: function (t, e, i) {
              var n = i.getAttribute(this.mAttr);
              if (e.hasOwnProperty(n)) {
                var s = e[n];
                t.hasOwnProperty("currentTarget") ||
                  Object.defineProperty(t, "currentTarget", { value: i }),
                  t.hasOwnProperty("curTarget") ||
                    Object.defineProperty(t, "curTarget", { value: i }),
                  this[s](t);
              }
            },
          },
          {
            key: "$",
            value: function (t, e) {
              var n,
                s = [t.indexOf("."), t.indexOf("#"), t.indexOf("[")].filter(
                  function (t) {
                    return -1 != t;
                  }
                ),
                o = !1,
                r = t,
                l = "",
                h = this.el;
              return (
                s.length &&
                  ((o = Math.min.apply(
                    Math,
                    (function (t) {
                      if (Array.isArray(t)) return c(t);
                    })((n = s)) ||
                      (function (t) {
                        if (
                          "undefined" != typeof Symbol &&
                          Symbol.iterator in Object(t)
                        )
                          return Array.from(t);
                      })(n) ||
                      a(n) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()
                  )),
                  (r = t.slice(0, o)),
                  (l = t.slice(o))),
                "object" == i(e) && (h = e),
                h.querySelectorAll("[" + this.mAttr + "=" + r + "]" + l)
              );
            },
          },
          {
            key: "parent",
            value: function (t, e) {
              for (
                var i = "[" + this.mAttr + "=" + t + "]", n = e.parentNode;
                n && n !== document;

              ) {
                if (n.matches(i)) return n;
                n = n.parentNode;
              }
            },
          },
          {
            key: "getData",
            value: function (t, e) {
              return (e || this.el).getAttribute(this.mAttr + "-" + t);
            },
          },
          {
            key: "setData",
            value: function (t, e, i) {
              return (i || this.el).setAttribute(this.mAttr + "-" + t, e);
            },
          },
          {
            key: "call",
            value: function (t, e, i, n) {
              var s = this;
              e && !i && ((i = e), (e = !1)),
                this.modules[i] &&
                  (n
                    ? this.modules[i][n] && this.modules[i][n][t](e)
                    : Object.keys(this.modules[i]).forEach(function (n) {
                        s.modules[i][n][t](e);
                      }));
            },
          },
          {
            key: "on",
            value: function (t, e, i, n) {
              var s = this;
              this.modules[e] &&
                (n
                  ? this.modules[e][n].el.addEventListener(t, function (t) {
                      return i(t);
                    })
                  : Object.keys(this.modules[e]).forEach(function (n) {
                      s.modules[e][n].el.addEventListener(t, function (t) {
                        return i(t);
                      });
                    }));
            },
          },
          { key: "init", value: function () {} },
          { key: "destroy", value: function () {} },
        ]),
        t
      );
    })(),
    u = (function () {
      function t(e) {
        n(this, t),
          this.app,
          (this.modules = e.modules),
          (this.currentModules = {}),
          (this.activeModules = {}),
          (this.newModules = {}),
          (this.moduleId = 0);
      }
      return (
        o(t, [
          {
            key: "init",
            value: function (t, e) {
              var i = this,
                n = (e || document).querySelectorAll("*");
              t && !this.app && (this.app = t),
                (this.activeModules.app = { app: this.app }),
                n.forEach(function (t) {
                  Array.from(t.attributes).forEach(function (n) {
                    if (n.name.startsWith("data-module")) {
                      var s = !1,
                        o = n.name.split("-").splice(2),
                        r = i.toCamel(o);
                      if (
                        (i.modules[r]
                          ? (s = !0)
                          : i.modules[i.toUpper(r)] &&
                            ((r = i.toUpper(r)), (s = !0)),
                        s)
                      ) {
                        var l = { el: t, name: r, dataName: o.join("-") },
                          a = new i.modules[r](l),
                          c = n.value;
                        c ||
                          (i.moduleId++,
                          (c = "m" + i.moduleId),
                          t.setAttribute(n.name, c)),
                          i.addActiveModule(r, c, a);
                        var h = r + "-" + c;
                        e ? (i.newModules[h] = a) : (i.currentModules[h] = a);
                      }
                    }
                  });
                }),
                Object.entries(this.currentModules).forEach(function (t) {
                  var n = l(t, 2),
                    s = n[0],
                    o = n[1];
                  if (e) {
                    var r = s.split("-"),
                      a = r.shift(),
                      c = r.pop();
                    i.addActiveModule(a, c, o);
                  } else i.initModule(o);
                });
            },
          },
          {
            key: "initModule",
            value: function (t) {
              t.mInit(this.activeModules), t.init();
            },
          },
          {
            key: "addActiveModule",
            value: function (t, e, i) {
              this.activeModules[t]
                ? Object.assign(this.activeModules[t], r({}, e, i))
                : (this.activeModules[t] = r({}, e, i));
            },
          },
          {
            key: "update",
            value: function (t) {
              var e = this;
              this.init(this.app, t),
                Object.entries(this.currentModules).forEach(function (t) {
                  var i = l(t, 2);
                  i[0], i[1].mUpdate(e.activeModules);
                }),
                Object.entries(this.newModules).forEach(function (t) {
                  var i = l(t, 2),
                    n = (i[0], i[1]);
                  e.initModule(n);
                }),
                Object.assign(this.currentModules, this.newModules);
            },
          },
          {
            key: "destroy",
            value: function (t) {
              t ? this.destroyScope(t) : this.destroyModules();
            },
          },
          {
            key: "destroyScope",
            value: function (t) {
              var e = this;
              t.querySelectorAll("*").forEach(function (t) {
                Array.from(t.attributes).forEach(function (t) {
                  if (t.name.startsWith("data-module")) {
                    var i = t.value,
                      n = t.name.split("-").splice(2),
                      s = e.toCamel(n) + "-" + i,
                      o = !1;
                    e.currentModules[s]
                      ? (o = !0)
                      : e.currentModules[e.toUpper(s)] &&
                        ((s = e.toUpper(s)), (o = !0)),
                      o &&
                        (e.destroyModule(e.currentModules[s]),
                        delete e.currentModules[s]);
                  }
                });
              }),
                (this.activeModules = {}),
                (this.newModules = {});
            },
          },
          {
            key: "destroyModules",
            value: function () {
              var t = this;
              Object.entries(this.currentModules).forEach(function (e) {
                var i = l(e, 2),
                  n = (i[0], i[1]);
                t.destroyModule(n);
              }),
                (this.currentModules = []);
            },
          },
          {
            key: "destroyModule",
            value: function (t) {
              t.mDestroy(), t.destroy();
            },
          },
          {
            key: "toCamel",
            value: function (t) {
              var e = this;
              return t.reduce(function (t, i) {
                return t + e.toUpper(i);
              });
            },
          },
          {
            key: "toUpper",
            value: function (t) {
              return t.charAt(0).toUpperCase() + t.slice(1);
            },
          },
        ]),
        t
      );
    })();
  const d = u;
  function f(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function p(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n;
  }
  var m = (function () {
    function t(e) {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        (this.defaults = {
          name: "load",
          loadingClass: "is-loading",
          loadedClass: "is-loaded",
          readyClass: "is-ready",
          transitionsPrefix: "is-",
          transitionsHistory: !0,
          enterDelay: 0,
          exitDelay: 0,
          loadedDelay: 0,
          isLoaded: !1,
          isEntered: !1,
          isUrl: !1,
          transitionContainer: null,
          popstateIgnore: !1,
        }),
        Object.assign(this, this.defaults, e),
        (this.options = e),
        (this.namespace = "modular"),
        (this.html = document.documentElement),
        (this.href = window.location.href),
        (this.container = "data-" + this.name + "-container"),
        (this.subContainer = !1),
        (this.prevTransition = null),
        (this.loadAttributes = ["src", "srcset", "style", "href"]),
        (this.isInserted = !1),
        (this.isLoading = !1),
        (this.enterTimeout = !1),
        (this.controller = new AbortController()),
        (this.classContainer = this.html),
        (this.isChrome = -1 != navigator.userAgent.indexOf("Chrome")),
        this.init();
    }
    var e, i;
    return (
      (e = t),
      (i = [
        {
          key: "init",
          value: function () {
            var t = this;
            window.addEventListener(
              "popstate",
              function (e) {
                return t.checkState(e);
              },
              !1
            ),
              this.html.addEventListener(
                "click",
                function (e) {
                  return t.checkClick(e);
                },
                !1
              ),
              this.loadEls(document);
          },
        },
        {
          key: "checkClick",
          value: function (t) {
            if (!t.ctrlKey && !t.metaKey)
              for (var e = t.target; e && e !== document; ) {
                if (e.matches("a") && null == e.getAttribute("download")) {
                  var i = e.getAttribute("href");
                  i.startsWith("#") ||
                    i.startsWith("mailto:") ||
                    i.startsWith("tel:") ||
                    (t.preventDefault(), this.reset(), this.getClickOptions(e));
                  break;
                }
                e = e.parentNode;
              }
          },
        },
        {
          key: "checkState",
          value: function () {
            ("string" == typeof this.popstateIgnore &&
              window.location.href.indexOf(this.popstateIgnore) > -1) ||
              (this.reset(), this.getStateOptions());
          },
        },
        {
          key: "reset",
          value: function () {
            this.isLoading &&
              (this.controller.abort(),
              (this.isLoading = !1),
              (this.controller = new AbortController())),
              window.clearTimeout(this.enterTimeout),
              this.isInserted && this.removeContainer(),
              (this.classContainer = this.html),
              Object.assign(this, this.defaults, this.options);
          },
        },
        {
          key: "getClickOptions",
          value: function (t) {
            (this.transition = t.getAttribute("data-" + this.name)),
              (this.isUrl = t.getAttribute("data-" + this.name + "-url"));
            var e = t.getAttribute("href");
            "_blank" != t.getAttribute("target")
              ? "false" != this.transition
                ? this.setOptions(e, !0)
                : (window.location = e)
              : window.open(e, "_blank");
          },
        },
        {
          key: "getStateOptions",
          value: function () {
            this.transitionsHistory
              ? (this.transition = history.state)
              : (this.transition = !1);
            var t = window.location.href;
            this.setOptions(t);
          },
        },
        {
          key: "goTo",
          value: function (t, e, i) {
            this.reset(),
              (this.transition = e),
              (this.isUrl = i),
              this.setOptions(t, !0);
          },
        },
        {
          key: "setOptions",
          value: function (t, e) {
            var i,
              n = "[" + this.container + "]";
            this.transition &&
              "true" != this.transition &&
              ((this.transitionContainer =
                "[" + this.container + '="' + this.transition + '"]'),
              (this.loadingClass =
                this.transitions[this.transition].loadingClass ||
                this.loadingClass),
              (this.loadedClass =
                this.transitions[this.transition].loadedClass ||
                this.loadedClass),
              (this.readyClass =
                this.transitions[this.transition].readyClass ||
                this.readyClass),
              (this.transitionsPrefix =
                this.transitions[this.transition].transitionsPrefix ||
                this.transitionsPrefix),
              (this.enterDelay =
                this.transitions[this.transition].enterDelay ||
                this.enterDelay),
              (this.exitDelay =
                this.transitions[this.transition].exitDelay || this.exitDelay),
              (this.loadedDelay =
                this.transitions[this.transition].loadedDelay ||
                this.loadedDelay),
              (i = document.querySelector(this.transitionContainer))),
              i
                ? ((n = this.transitionContainer),
                  (this.oldContainer = i),
                  (this.classContainer = this.oldContainer.parentNode),
                  this.subContainer ||
                    history.replaceState(this.transition, null, this.href),
                  (this.subContainer = !0))
                : ((this.oldContainer = document.querySelector(n)),
                  this.subContainer &&
                    history.replaceState(this.prevTransition, null, this.href),
                  (this.subContainer = !1)),
              (this.href = t),
              (this.parentContainer = this.oldContainer.parentNode),
              "" === this.isUrl ||
              (null != this.isUrl && "false" != this.isUrl && 0 != this.isUrl)
                ? history.pushState(this.transition, null, t)
                : (this.oldContainer.classList.add("is-old"),
                  this.setLoading(),
                  this.startEnterDelay(),
                  this.loadHref(t, n, e));
          },
        },
        {
          key: "setLoading",
          value: function () {
            this.classContainer.classList.remove(
              this.loadedClass,
              this.readyClass
            ),
              this.classContainer.classList.add(this.loadingClass),
              this.classContainer.classList.remove(
                this.transitionsPrefix + this.prevTransition
              ),
              this.transition &&
                this.classContainer.classList.add(
                  this.transitionsPrefix + this.transition
                ),
              this.subContainer || (this.prevTransition = this.transition);
            var t = new Event(this.namespace + "loading");
            window.dispatchEvent(t);
          },
        },
        {
          key: "startEnterDelay",
          value: function () {
            var t = this;
            this.enterTimeout = window.setTimeout(function () {
              (t.isEntered = !0), t.isLoaded && t.transitionContainers();
            }, this.enterDelay);
          },
        },
        {
          key: "loadHref",
          value: function (t, e, i) {
            var n = this;
            this.isLoading = !0;
            var s = this.controller.signal;
            fetch(t, { signal: s })
              .then(function (t) {
                return t.text();
              })
              .then(function (s) {
                i && history.pushState(n.transition, null, t);
                var o = new DOMParser();
                (n.data = o.parseFromString(s, "text/html")),
                  (n.newContainer = n.data.querySelector(e)),
                  n.newContainer.classList.add("is-new"),
                  (n.parentNewContainer = n.newContainer.parentNode),
                  n.hideContainer(),
                  n.parentContainer.insertBefore(
                    n.newContainer,
                    n.oldContainer
                  ),
                  (n.isInserted = !0),
                  n.setSvgs(),
                  (n.isLoaded = !0),
                  n.isEntered && n.transitionContainers(),
                  n.loadEls(n.newContainer),
                  (n.isLoading = !1);
              })
              .catch(function (e) {
                window.location = t;
              });
          },
        },
        {
          key: "transitionContainers",
          value: function () {
            var t = this;
            this.setAttributes(),
              this.showContainer(),
              this.setLoaded(),
              setTimeout(function () {
                t.removeContainer(), t.setReady();
              }, this.exitDelay);
          },
        },
        {
          key: "setSvgs",
          value: function () {
            if (this.isChrome) {
              var t = this.newContainer.querySelectorAll("use");
              t.length &&
                t.forEach(function (t) {
                  var e = t.getAttribute("xlink:href");
                  if (e)
                    t.parentNode.innerHTML =
                      '<use xlink:href="' + e + '"></use>';
                  else {
                    var i = t.getAttribute("href");
                    i &&
                      (t.parentNode.innerHTML = '<use href="' + i + '"></use>');
                  }
                });
            }
          },
        },
        {
          key: "setAttributes",
          value: function () {
            var t,
              e,
              i = this,
              n = this.data.getElementsByTagName("title")[0],
              s = this.data.head.querySelector('meta[name="description"]'),
              o = document.head.querySelector('meta[name="description"]');
            this.subContainer
              ? ((e = this.parentNewContainer),
                (t = document.querySelector(
                  this.transitionContainer
                ).parentNode))
              : ((e = this.data.querySelector("html")),
                (t = document.querySelector("html")));
            var r = Object.assign({}, e.dataset);
            n && (document.title = n.innerText),
              o && s && o.setAttribute("content", s.getAttribute("content")),
              r &&
                Object.entries(r).forEach(function (e) {
                  var n,
                    s,
                    o =
                      ((s = 2),
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })((n = e)) ||
                        (function (t, e) {
                          var i =
                            null == t
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  t[Symbol.iterator]) ||
                                t["@@iterator"];
                          if (null != i) {
                            var n,
                              s,
                              o = [],
                              r = !0,
                              l = !1;
                            try {
                              for (
                                i = i.call(t);
                                !(r = (n = i.next()).done) &&
                                (o.push(n.value), !e || o.length !== e);
                                r = !0
                              );
                            } catch (t) {
                              (l = !0), (s = t);
                            } finally {
                              try {
                                r || null == i.return || i.return();
                              } finally {
                                if (l) throw s;
                              }
                            }
                            return o;
                          }
                        })(n, s) ||
                        (function (t, e) {
                          if (t) {
                            if ("string" == typeof t) return p(t, e);
                            var i = Object.prototype.toString
                              .call(t)
                              .slice(8, -1);
                            return (
                              "Object" === i &&
                                t.constructor &&
                                (i = t.constructor.name),
                              "Map" === i || "Set" === i
                                ? Array.from(t)
                                : "Arguments" === i ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    i
                                  )
                                ? p(t, e)
                                : void 0
                            );
                          }
                        })(n, s) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })()),
                    r = o[0],
                    l = o[1];
                  t.setAttribute("data-" + i.toDash(r), l);
                });
          },
        },
        {
          key: "toDash",
          value: function (t) {
            return t
              .split(/(?=[A-Z])/)
              .join("-")
              .toLowerCase();
          },
        },
        {
          key: "hideContainer",
          value: function () {
            (this.newContainer.style.visibility = "hidden"),
              (this.newContainer.style.height = 0),
              (this.newContainer.style.overflow = "hidden");
          },
        },
        {
          key: "showContainer",
          value: function () {
            (this.newContainer.style.visibility = ""),
              (this.newContainer.style.height = ""),
              (this.newContainer.style.overflow = "");
          },
        },
        {
          key: "loadEls",
          value: function (t) {
            var e = this,
              i = [];
            this.loadAttributes.forEach(function (n) {
              var s = "data-" + e.name + "-" + n,
                o = t.querySelectorAll("[" + s + "]");
              o.length &&
                o.forEach(function (t) {
                  var e = t.getAttribute(s);
                  if ((t.setAttribute(n, e), "src" == n || "srcset" == n)) {
                    var o = new Promise(function (e) {
                      t.onload = function () {
                        return e(t);
                      };
                    });
                    i.push(o);
                  }
                });
            }),
              Promise.all(i).then(function (t) {
                var i = new Event(e.namespace + "images");
                window.dispatchEvent(i);
              });
          },
        },
        {
          key: "setLoaded",
          value: function () {
            var t = this;
            this.classContainer.classList.remove(this.loadingClass),
              setTimeout(function () {
                t.classContainer.classList.add(t.loadedClass);
              }, this.loadedDelay);
            var e = new Event(this.namespace + "loaded");
            window.dispatchEvent(e);
          },
        },
        {
          key: "removeContainer",
          value: function () {
            this.parentContainer.removeChild(this.oldContainer),
              this.newContainer.classList.remove("is-new"),
              (this.isInserted = !1);
          },
        },
        {
          key: "setReady",
          value: function () {
            this.classContainer.classList.add(this.readyClass);
            var t = new Event(this.namespace + "ready");
            window.dispatchEvent(t);
          },
        },
        {
          key: "on",
          value: function (t, e) {
            var i = this;
            window.addEventListener(
              this.namespace + t,
              function () {
                switch (t) {
                  case "loading":
                    return e(i.transition, i.oldContainer);
                  case "loaded":
                    return e(i.transition, i.oldContainer, i.newContainer);
                  case "ready":
                    return e(i.transition, i.newContainer);
                  default:
                    return e();
                }
              },
              !1
            );
          },
        },
      ]) && f(e.prototype, i),
      t
    );
  })();
  const y = m,
    v = class extends h {
      constructor(t) {
        super(t);
      }
      init() {
        new y({ enterDelay: 300, transitions: { customTransition: {} } }).on(
          "loaded",
          (t, e, i) => {
            this.call("destroy", e, "app"), this.call("update", i, "app");
          }
        );
      }
    },
    b = (t) => ({
      url: t.src,
      width: t.naturalWidth,
      height: t.naturalHeight,
      ratio: t.naturalWidth / t.naturalHeight,
    }),
    g = [];
  function w(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function k(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function S(t, e, i) {
    return e && k(t.prototype, e), i && k(t, i), t;
  }
  function x(t, e, i) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = i),
      t
    );
  }
  function E(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e &&
        (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        i.push.apply(i, n);
    }
    return i;
  }
  function C(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? E(Object(i), !0).forEach(function (e) {
            x(t, e, i[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
        : E(Object(i)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
          });
    }
    return t;
  }
  function T(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && O(t, e);
  }
  function A(t) {
    return (
      (A = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      A(t)
    );
  }
  function O(t, e) {
    return (
      (O =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        }),
      O(t, e)
    );
  }
  function L(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function M(t) {
    var e = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var i,
        n = A(t);
      if (e) {
        var s = A(this).constructor;
        i = Reflect.construct(n, arguments, s);
      } else i = n.apply(this, arguments);
      return (function (t, e) {
        return !e || ("object" != typeof e && "function" != typeof e)
          ? L(t)
          : e;
      })(this, i);
    };
  }
  function j(t, e, i) {
    return (
      (j =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, i) {
              var n = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = A(t));

                );
                return t;
              })(t, e);
              if (n) {
                var s = Object.getOwnPropertyDescriptor(n, e);
                return s.get ? s.get.call(i) : s.value;
              }
            }),
      j(t, e, i || t)
    );
  }
  function D(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
          var i = [],
            n = !0,
            s = !1,
            o = void 0;
          try {
            for (
              var r, l = t[Symbol.iterator]();
              !(n = (r = l.next()).done) &&
              (i.push(r.value), !e || i.length !== e);
              n = !0
            );
          } catch (t) {
            (s = !0), (o = t);
          } finally {
            try {
              n || null == l.return || l.return();
            } finally {
              if (s) throw o;
            }
          }
          return i;
        }
      })(t, e) ||
      I(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function I(t, e) {
    if (t) {
      if ("string" == typeof t) return _(t, e);
      var i = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === i && t.constructor && (i = t.constructor.name),
        "Map" === i || "Set" === i
          ? Array.from(t)
          : "Arguments" === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          ? _(t, e)
          : void 0
      );
    }
  }
  function _(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n;
  }
  var P = {
      el: document,
      name: "scroll",
      offset: [0, 0],
      repeat: !1,
      smooth: !1,
      initPosition: { x: 0, y: 0 },
      direction: "vertical",
      gestureDirection: "vertical",
      reloadOnContextChange: !1,
      lerp: 0.1,
      class: "is-inview",
      scrollbarContainer: !1,
      scrollbarClass: "c-scrollbar",
      scrollingClass: "has-scroll-scrolling",
      draggingClass: "has-scroll-dragging",
      smoothClass: "has-scroll-smooth",
      initClass: "has-scroll-init",
      getSpeed: !1,
      getDirection: !1,
      scrollFromAnywhere: !1,
      multiplier: 1,
      firefoxMultiplier: 50,
      touchMultiplier: 2,
      resetNativeScroll: !0,
      tablet: {
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
        breakpoint: 1024,
      },
      smartphone: {
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
      },
    },
    B = (function () {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        w(this, t),
          Object.assign(this, P, e),
          (this.smartphone = P.smartphone),
          e.smartphone && Object.assign(this.smartphone, e.smartphone),
          (this.tablet = P.tablet),
          e.tablet && Object.assign(this.tablet, e.tablet),
          (this.namespace = "locomotive"),
          (this.html = document.documentElement),
          (this.windowHeight = window.innerHeight),
          (this.windowWidth = window.innerWidth),
          (this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2,
          }),
          (this.els = {}),
          (this.currentElements = {}),
          (this.listeners = {}),
          (this.hasScrollTicking = !1),
          (this.hasCallEventSet = !1),
          (this.checkScroll = this.checkScroll.bind(this)),
          (this.checkResize = this.checkResize.bind(this)),
          (this.checkEvent = this.checkEvent.bind(this)),
          (this.instance = {
            scroll: { x: 0, y: 0 },
            limit: { x: this.html.offsetWidth, y: this.html.offsetHeight },
            currentElements: this.currentElements,
          }),
          this.isMobile
            ? this.isTablet
              ? (this.context = "tablet")
              : (this.context = "smartphone")
            : (this.context = "desktop"),
          this.isMobile && (this.direction = this[this.context].direction),
          "horizontal" === this.direction
            ? (this.directionAxis = "x")
            : (this.directionAxis = "y"),
          this.getDirection && (this.instance.direction = null),
          this.getDirection && (this.instance.speed = 0),
          this.html.classList.add(this.initClass),
          window.addEventListener("resize", this.checkResize, !1);
      }
      return (
        S(t, [
          {
            key: "init",
            value: function () {
              this.initEvents();
            },
          },
          {
            key: "checkScroll",
            value: function () {
              this.dispatchScroll();
            },
          },
          {
            key: "checkResize",
            value: function () {
              var t = this;
              this.resizeTick ||
                ((this.resizeTick = !0),
                requestAnimationFrame(function () {
                  t.resize(), (t.resizeTick = !1);
                }));
            },
          },
          { key: "resize", value: function () {} },
          {
            key: "checkContext",
            value: function () {
              if (this.reloadOnContextChange) {
                (this.isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) ||
                  ("MacIntel" === navigator.platform &&
                    navigator.maxTouchPoints > 1) ||
                  this.windowWidth < this.tablet.breakpoint),
                  (this.isTablet =
                    this.isMobile &&
                    this.windowWidth >= this.tablet.breakpoint);
                var t = this.context;
                this.isMobile
                  ? this.isTablet
                    ? (this.context = "tablet")
                    : (this.context = "smartphone")
                  : (this.context = "desktop"),
                  t != this.context &&
                    ("desktop" == t ? this.smooth : this[t].smooth) !=
                      ("desktop" == this.context
                        ? this.smooth
                        : this[this.context].smooth) &&
                    window.location.reload();
              }
            },
          },
          {
            key: "initEvents",
            value: function () {
              var t = this;
              (this.scrollToEls = this.el.querySelectorAll(
                "[data-".concat(this.name, "-to]")
              )),
                (this.setScrollTo = this.setScrollTo.bind(this)),
                this.scrollToEls.forEach(function (e) {
                  e.addEventListener("click", t.setScrollTo, !1);
                });
            },
          },
          {
            key: "setScrollTo",
            value: function (t) {
              t.preventDefault(),
                this.scrollTo(
                  t.currentTarget.getAttribute(
                    "data-".concat(this.name, "-href")
                  ) || t.currentTarget.getAttribute("href"),
                  {
                    offset: t.currentTarget.getAttribute(
                      "data-".concat(this.name, "-offset")
                    ),
                  }
                );
            },
          },
          { key: "addElements", value: function () {} },
          {
            key: "detectElements",
            value: function (t) {
              var e = this,
                i = this.instance.scroll.y,
                n = i + this.windowHeight,
                s = this.instance.scroll.x,
                o = s + this.windowWidth;
              Object.entries(this.els).forEach(function (r) {
                var l = D(r, 2),
                  a = l[0],
                  c = l[1];
                if (
                  (!c ||
                    (c.inView && !t) ||
                    ("horizontal" === e.direction
                      ? o >= c.left && s < c.right && e.setInView(c, a)
                      : n >= c.top && i < c.bottom && e.setInView(c, a)),
                  c && c.inView)
                )
                  if ("horizontal" === e.direction) {
                    var h = c.right - c.left;
                    (c.progress =
                      (e.instance.scroll.x - (c.left - e.windowWidth)) /
                      (h + e.windowWidth)),
                      (o < c.left || s > c.right) && e.setOutOfView(c, a);
                  } else {
                    var u = c.bottom - c.top;
                    (c.progress =
                      (e.instance.scroll.y - (c.top - e.windowHeight)) /
                      (u + e.windowHeight)),
                      (n < c.top || i > c.bottom) && e.setOutOfView(c, a);
                  }
              }),
                (this.hasScrollTicking = !1);
            },
          },
          {
            key: "setInView",
            value: function (t, e) {
              (this.els[e].inView = !0),
                t.el.classList.add(t.class),
                (this.currentElements[e] = t),
                t.call &&
                  this.hasCallEventSet &&
                  (this.dispatchCall(t, "enter"),
                  t.repeat || (this.els[e].call = !1));
            },
          },
          {
            key: "setOutOfView",
            value: function (t, e) {
              var i = this;
              (this.els[e].inView = !1),
                Object.keys(this.currentElements).forEach(function (t) {
                  t === e && delete i.currentElements[t];
                }),
                t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                t.repeat && t.el.classList.remove(t.class);
            },
          },
          {
            key: "dispatchCall",
            value: function (t, e) {
              (this.callWay = e),
                (this.callValue = t.call.split(",").map(function (t) {
                  return t.trim();
                })),
                (this.callObj = t),
                1 == this.callValue.length &&
                  (this.callValue = this.callValue[0]);
              var i = new Event(this.namespace + "call");
              this.el.dispatchEvent(i);
            },
          },
          {
            key: "dispatchScroll",
            value: function () {
              var t = new Event(this.namespace + "scroll");
              this.el.dispatchEvent(t);
            },
          },
          {
            key: "setEvents",
            value: function (t, e) {
              this.listeners[t] || (this.listeners[t] = []);
              var i = this.listeners[t];
              i.push(e),
                1 === i.length &&
                  this.el.addEventListener(
                    this.namespace + t,
                    this.checkEvent,
                    !1
                  ),
                "call" === t &&
                  ((this.hasCallEventSet = !0), this.detectElements(!0));
            },
          },
          {
            key: "unsetEvents",
            value: function (t, e) {
              if (this.listeners[t]) {
                var i = this.listeners[t],
                  n = i.indexOf(e);
                n < 0 ||
                  (i.splice(n, 1),
                  0 === i.index &&
                    this.el.removeEventListener(
                      this.namespace + t,
                      this.checkEvent,
                      !1
                    ));
              }
            },
          },
          {
            key: "checkEvent",
            value: function (t) {
              var e = this,
                i = t.type.replace(this.namespace, ""),
                n = this.listeners[i];
              n &&
                0 !== n.length &&
                n.forEach(function (t) {
                  switch (i) {
                    case "scroll":
                      return t(e.instance);
                    case "call":
                      return t(e.callValue, e.callWay, e.callObj);
                    default:
                      return t();
                  }
                });
            },
          },
          { key: "startScroll", value: function () {} },
          { key: "stopScroll", value: function () {} },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance.scroll = { x: 0, y: 0 };
            },
          },
          {
            key: "destroy",
            value: function () {
              var t = this;
              window.removeEventListener("resize", this.checkResize, !1),
                Object.keys(this.listeners).forEach(function (e) {
                  t.el.removeEventListener(t.namespace + e, t.checkEvent, !1);
                }),
                (this.listeners = {}),
                this.scrollToEls.forEach(function (e) {
                  e.removeEventListener("click", t.setScrollTo, !1);
                }),
                this.html.classList.remove(this.initClass);
            },
          },
        ]),
        t
      );
    })(),
    H =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : void 0 !== t.g
        ? t.g
        : "undefined" != typeof self
        ? self
        : {};
  function W(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var R = W(function (t, e) {
      t.exports = {
        polyfill: function () {
          var t = window,
            e = document;
          if (
            !("scrollBehavior" in e.documentElement.style) ||
            !0 === t.__forceSmoothScrollPolyfill__
          ) {
            var i,
              n = t.HTMLElement || t.Element,
              s = 468,
              o = {
                scroll: t.scroll || t.scrollTo,
                scrollBy: t.scrollBy,
                elementScroll: n.prototype.scroll || a,
                scrollIntoView: n.prototype.scrollIntoView,
              },
              r =
                t.performance && t.performance.now
                  ? t.performance.now.bind(t.performance)
                  : Date.now,
              l =
                ((i = t.navigator.userAgent),
                new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i)
                  ? 1
                  : 0);
            (t.scroll = t.scrollTo =
              function () {
                void 0 !== arguments[0] &&
                  (!0 !== c(arguments[0])
                    ? p.call(
                        t,
                        e.body,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : t.scrollX || t.pageXOffset,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : t.scrollY || t.pageYOffset
                      )
                    : o.scroll.call(
                        t,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : t.scrollX || t.pageXOffset,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : t.scrollY || t.pageYOffset
                      ));
              }),
              (t.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (c(arguments[0])
                    ? o.scrollBy.call(
                        t,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : 0,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                      )
                    : p.call(
                        t,
                        e.body,
                        ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                        ~~arguments[0].top + (t.scrollY || t.pageYOffset)
                      ));
              }),
              (n.prototype.scroll = n.prototype.scrollTo =
                function () {
                  if (void 0 !== arguments[0])
                    if (!0 !== c(arguments[0])) {
                      var t = arguments[0].left,
                        e = arguments[0].top;
                      p.call(
                        this,
                        this,
                        void 0 === t ? this.scrollLeft : ~~t,
                        void 0 === e ? this.scrollTop : ~~e
                      );
                    } else {
                      if (
                        "number" == typeof arguments[0] &&
                        void 0 === arguments[1]
                      )
                        throw new SyntaxError("Value could not be converted");
                      o.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : "object" != typeof arguments[0]
                          ? ~~arguments[0]
                          : this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : void 0 !== arguments[1]
                          ? ~~arguments[1]
                          : this.scrollTop
                      );
                    }
                }),
              (n.prototype.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (!0 !== c(arguments[0])
                    ? this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior,
                      })
                    : o.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left + this.scrollLeft
                          : ~~arguments[0] + this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top + this.scrollTop
                          : ~~arguments[1] + this.scrollTop
                      ));
              }),
              (n.prototype.scrollIntoView = function () {
                if (!0 !== c(arguments[0])) {
                  var i = (function (t) {
                      for (; t !== e.body && !1 === d(t); )
                        t = t.parentNode || t.host;
                      return t;
                    })(this),
                    n = i.getBoundingClientRect(),
                    s = this.getBoundingClientRect();
                  i !== e.body
                    ? (p.call(
                        this,
                        i,
                        i.scrollLeft + s.left - n.left,
                        i.scrollTop + s.top - n.top
                      ),
                      "fixed" !== t.getComputedStyle(i).position &&
                        t.scrollBy({
                          left: n.left,
                          top: n.top,
                          behavior: "smooth",
                        }))
                    : t.scrollBy({
                        left: s.left,
                        top: s.top,
                        behavior: "smooth",
                      });
                } else
                  o.scrollIntoView.call(
                    this,
                    void 0 === arguments[0] || arguments[0]
                  );
              });
          }
          function a(t, e) {
            (this.scrollLeft = t), (this.scrollTop = e);
          }
          function c(t) {
            if (
              null === t ||
              "object" != typeof t ||
              void 0 === t.behavior ||
              "auto" === t.behavior ||
              "instant" === t.behavior
            )
              return !0;
            if ("object" == typeof t && "smooth" === t.behavior) return !1;
            throw new TypeError(
              "behavior member of ScrollOptions " +
                t.behavior +
                " is not a valid value for enumeration ScrollBehavior."
            );
          }
          function h(t, e) {
            return "Y" === e
              ? t.clientHeight + l < t.scrollHeight
              : "X" === e
              ? t.clientWidth + l < t.scrollWidth
              : void 0;
          }
          function u(e, i) {
            var n = t.getComputedStyle(e, null)["overflow" + i];
            return "auto" === n || "scroll" === n;
          }
          function d(t) {
            var e = h(t, "Y") && u(t, "Y"),
              i = h(t, "X") && u(t, "X");
            return e || i;
          }
          function f(e) {
            var i,
              n,
              o,
              l,
              a = (r() - e.startTime) / s;
            (l = a = a > 1 ? 1 : a),
              (i = 0.5 * (1 - Math.cos(Math.PI * l))),
              (n = e.startX + (e.x - e.startX) * i),
              (o = e.startY + (e.y - e.startY) * i),
              e.method.call(e.scrollable, n, o),
              (n === e.x && o === e.y) || t.requestAnimationFrame(f.bind(t, e));
          }
          function p(i, n, s) {
            var l,
              c,
              h,
              u,
              d = r();
            i === e.body
              ? ((l = t),
                (c = t.scrollX || t.pageXOffset),
                (h = t.scrollY || t.pageYOffset),
                (u = o.scroll))
              : ((l = i), (c = i.scrollLeft), (h = i.scrollTop), (u = a)),
              f({
                scrollable: l,
                method: u,
                startTime: d,
                startX: c,
                startY: h,
                x: n,
                y: s,
              });
          }
        },
      };
    }),
    Y =
      (R.polyfill,
      (function (t) {
        T(i, t);
        var e = M(i);
        function i() {
          var t,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            w(this, i),
            (t = e.call(this, n)).resetNativeScroll &&
              (history.scrollRestoration &&
                (history.scrollRestoration = "manual"),
              window.scrollTo(0, 0)),
            window.addEventListener("scroll", t.checkScroll, !1),
            void 0 === window.smoothscrollPolyfill &&
              ((window.smoothscrollPolyfill = R),
              window.smoothscrollPolyfill.polyfill()),
            t
          );
        }
        return (
          S(i, [
            {
              key: "init",
              value: function () {
                (this.instance.scroll.y = window.pageYOffset),
                  this.addElements(),
                  this.detectElements(),
                  j(A(i.prototype), "init", this).call(this);
              },
            },
            {
              key: "checkScroll",
              value: function () {
                var t = this;
                j(A(i.prototype), "checkScroll", this).call(this),
                  this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.speedTs = Date.now())),
                  (this.instance.scroll.y = window.pageYOffset),
                  Object.entries(this.els).length &&
                    (this.hasScrollTicking ||
                      (requestAnimationFrame(function () {
                        t.detectElements();
                      }),
                      (this.hasScrollTicking = !0)));
              },
            },
            {
              key: "addDirection",
              value: function () {
                window.pageYOffset > this.instance.scroll.y
                  ? "down" !== this.instance.direction &&
                    (this.instance.direction = "down")
                  : window.pageYOffset < this.instance.scroll.y &&
                    "up" !== this.instance.direction &&
                    (this.instance.direction = "up");
              },
            },
            {
              key: "addSpeed",
              value: function () {
                window.pageYOffset != this.instance.scroll.y
                  ? (this.instance.speed =
                      (window.pageYOffset - this.instance.scroll.y) /
                      Math.max(1, Date.now() - this.speedTs))
                  : (this.instance.speed = 0);
              },
            },
            {
              key: "resize",
              value: function () {
                Object.entries(this.els).length &&
                  ((this.windowHeight = window.innerHeight),
                  this.updateElements());
              },
            },
            {
              key: "addElements",
              value: function () {
                var t = this;
                (this.els = {}),
                  this.el
                    .querySelectorAll("[data-" + this.name + "]")
                    .forEach(function (e, i) {
                      e.getBoundingClientRect();
                      var n,
                        s,
                        o,
                        r = e.dataset[t.name + "Class"] || t.class,
                        l =
                          "string" == typeof e.dataset[t.name + "Id"]
                            ? e.dataset[t.name + "Id"]
                            : i,
                        a =
                          "string" == typeof e.dataset[t.name + "Offset"]
                            ? e.dataset[t.name + "Offset"].split(",")
                            : t.offset,
                        c = e.dataset[t.name + "Repeat"],
                        h = e.dataset[t.name + "Call"],
                        u = e.dataset[t.name + "Target"],
                        d = (o =
                          void 0 !== u
                            ? document.querySelector("".concat(u))
                            : e).getBoundingClientRect();
                      (n = d.top + t.instance.scroll.y),
                        (s = d.left + t.instance.scroll.x);
                      var f = n + o.offsetHeight,
                        p = s + o.offsetWidth;
                      c = "false" != c && (null != c || t.repeat);
                      var m = t.getRelativeOffset(a),
                        y = {
                          el: e,
                          targetEl: o,
                          id: l,
                          class: r,
                          top: (n += m[0]),
                          bottom: (f -= m[1]),
                          left: s,
                          right: p,
                          offset: a,
                          progress: 0,
                          repeat: c,
                          inView: !1,
                          call: h,
                        };
                      (t.els[l] = y),
                        e.classList.contains(r) && t.setInView(t.els[l], l);
                    });
              },
            },
            {
              key: "updateElements",
              value: function () {
                var t = this;
                Object.entries(this.els).forEach(function (e) {
                  var i = D(e, 2),
                    n = i[0],
                    s = i[1],
                    o =
                      s.targetEl.getBoundingClientRect().top +
                      t.instance.scroll.y,
                    r = o + s.targetEl.offsetHeight,
                    l = t.getRelativeOffset(s.offset);
                  (t.els[n].top = o + l[0]), (t.els[n].bottom = r - l[1]);
                }),
                  (this.hasScrollTicking = !1);
              },
            },
            {
              key: "getRelativeOffset",
              value: function (t) {
                var e = [0, 0];
                if (t)
                  for (var i = 0; i < t.length; i++)
                    "string" == typeof t[i]
                      ? t[i].includes("%")
                        ? (e[i] = parseInt(
                            (t[i].replace("%", "") * this.windowHeight) / 100
                          ))
                        : (e[i] = parseInt(t[i]))
                      : (e[i] = t[i]);
                return e;
              },
            },
            {
              key: "scrollTo",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = parseInt(e.offset) || 0,
                  n = !!e.callback && e.callback;
                if ("string" == typeof t) {
                  if ("top" === t) t = this.html;
                  else if ("bottom" === t)
                    t = this.html.offsetHeight - window.innerHeight;
                  else if (!(t = document.querySelector(t))) return;
                } else if ("number" == typeof t) t = parseInt(t);
                else if (!t || !t.tagName)
                  return void console.warn("`target` parameter is not valid");
                i =
                  "number" != typeof t
                    ? t.getBoundingClientRect().top + i + this.instance.scroll.y
                    : t + i;
                var s = function () {
                  return parseInt(window.pageYOffset) === parseInt(i);
                };
                if (n) {
                  if (s()) return void n();
                  window.addEventListener("scroll", function t() {
                    s() && (window.removeEventListener("scroll", t), n());
                  });
                }
                window.scrollTo({
                  top: i,
                  behavior: 0 === e.duration ? "auto" : "smooth",
                });
              },
            },
            {
              key: "update",
              value: function () {
                this.addElements(), this.detectElements();
              },
            },
            {
              key: "destroy",
              value: function () {
                j(A(i.prototype), "destroy", this).call(this),
                  window.removeEventListener("scroll", this.checkScroll, !1);
              },
            },
          ]),
          i
        );
      })(B)),
    z = Object.getOwnPropertySymbols,
    X = Object.prototype.hasOwnProperty,
    q = Object.prototype.propertyIsEnumerable,
    V = (function () {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
          return !1;
        for (var e = {}, i = 0; i < 10; i++)
          e["_" + String.fromCharCode(i)] = i;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(e)
            .map(function (t) {
              return e[t];
            })
            .join("")
        )
          return !1;
        var n = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            n[t] = t;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Object.assign
      : function (t, e) {
          for (
            var i,
              n,
              s = (function (t) {
                if (null == t)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                  );
                return Object(t);
              })(t),
              o = 1;
            o < arguments.length;
            o++
          ) {
            for (var r in (i = Object(arguments[o])))
              X.call(i, r) && (s[r] = i[r]);
            if (z) {
              n = z(i);
              for (var l = 0; l < n.length; l++)
                q.call(i, n[l]) && (s[n[l]] = i[n[l]]);
            }
          }
          return s;
        };
  function F() {}
  F.prototype = {
    on: function (t, e, i) {
      var n = this.e || (this.e = {});
      return (n[t] || (n[t] = [])).push({ fn: e, ctx: i }), this;
    },
    once: function (t, e, i) {
      var n = this;
      function s() {
        n.off(t, s), e.apply(i, arguments);
      }
      return (s._ = e), this.on(t, s, i);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          i = ((this.e || (this.e = {}))[t] || []).slice(),
          n = 0,
          s = i.length;
        n < s;
        n++
      )
        i[n].fn.apply(i[n].ctx, e);
      return this;
    },
    off: function (t, e) {
      var i = this.e || (this.e = {}),
        n = i[t],
        s = [];
      if (n && e)
        for (var o = 0, r = n.length; o < r; o++)
          n[o].fn !== e && n[o].fn._ !== e && s.push(n[o]);
      return s.length ? (i[t] = s) : delete i[t], this;
    },
  };
  var N = F,
    U = W(function (t, e) {
      (function () {
        (null !== e ? e : this).Lethargy = (function () {
          function t(t, e, i, n) {
            (this.stability = null != t ? Math.abs(t) : 8),
              (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
              (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
              (this.delay = null != n ? n : 150),
              (this.lastUpDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.lastDownDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.deltasTimestamp = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this));
          }
          return (
            (t.prototype.check = function (t) {
              var e;
              return (
                null != (t = t.originalEvent || t).wheelDelta
                  ? (e = t.wheelDelta)
                  : null != t.deltaY
                  ? (e = -40 * t.deltaY)
                  : (null == t.detail && 0 !== t.detail) ||
                    (e = -40 * t.detail),
                this.deltasTimestamp.push(Date.now()),
                this.deltasTimestamp.shift(),
                e > 0
                  ? (this.lastUpDeltas.push(e),
                    this.lastUpDeltas.shift(),
                    this.isInertia(1))
                  : (this.lastDownDeltas.push(e),
                    this.lastDownDeltas.shift(),
                    this.isInertia(-1))
              );
            }),
            (t.prototype.isInertia = function (t) {
              var e, i, n, s, o, r, l;
              return null ===
                (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                ? t
                : !(
                    this.deltasTimestamp[2 * this.stability - 2] + this.delay >
                      Date.now() && e[0] === e[2 * this.stability - 1]
                  ) &&
                    ((n = e.slice(0, this.stability)),
                    (i = e.slice(this.stability, 2 * this.stability)),
                    (l = n.reduce(function (t, e) {
                      return t + e;
                    })),
                    (o = i.reduce(function (t, e) {
                      return t + e;
                    })),
                    (r = l / n.length),
                    (s = o / i.length),
                    Math.abs(r) < Math.abs(s * this.tolerance) &&
                      this.sensitivity < Math.abs(s) &&
                      t);
            }),
            (t.prototype.showLastUpDeltas = function () {
              return this.lastUpDeltas;
            }),
            (t.prototype.showLastDownDeltas = function () {
              return this.lastDownDeltas;
            }),
            t
          );
        })();
      }.call(H));
    }),
    K = "onwheel" in document,
    $ = "onmousewheel" in document,
    G =
      "ontouchstart" in window ||
      window.TouchEvent ||
      (window.DocumentTouch && document instanceof DocumentTouch),
    Z = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
    J = !!window.navigator.msPointerEnabled,
    Q = "onkeydown" in document,
    tt = navigator.userAgent.indexOf("Firefox") > -1,
    et = Object.prototype.toString,
    it = Object.prototype.hasOwnProperty,
    nt = function (t) {
      if (!t) return console.warn("bindAll requires at least one argument.");
      var e = Array.prototype.slice.call(arguments, 1);
      if (0 === e.length)
        for (var i in t)
          it.call(t, i) &&
            "function" == typeof t[i] &&
            "[object Function]" == et.call(t[i]) &&
            e.push(i);
      for (var n = 0; n < e.length; n++) {
        var s = e[n];
        t[s] = st(t[s], t);
      }
    };
  function st(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var ot = U.Lethargy,
    rt = "virtualscroll",
    lt = at;
  function at(t) {
    nt(
      this,
      "_onWheel",
      "_onMouseWheel",
      "_onTouchStart",
      "_onTouchMove",
      "_onKeyDown"
    ),
      (this.el = window),
      t && t.el && ((this.el = t.el), delete t.el),
      (this.options = V(
        {
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: !1,
          unpreventTouchClass: "vs-touchmove-allowed",
          limitInertia: !1,
          useKeyboard: !0,
          useTouch: !0,
        },
        t
      )),
      this.options.limitInertia && (this._lethargy = new ot()),
      (this._emitter = new N()),
      (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
      (this.touchStartX = null),
      (this.touchStartY = null),
      (this.bodyTouchAction = null),
      void 0 !== this.options.passive &&
        (this.listenerOptions = { passive: this.options.passive });
  }
  function ct(t, e, i) {
    return (1 - i) * t + i * e;
  }
  function ht(t) {
    var e = {};
    if (window.getComputedStyle) {
      var i = getComputedStyle(t),
        n = i.transform || i.webkitTransform || i.mozTransform,
        s = n.match(/^matrix3d\((.+)\)$/);
      return (
        s
          ? ((e.x = s ? parseFloat(s[1].split(", ")[12]) : 0),
            (e.y = s ? parseFloat(s[1].split(", ")[13]) : 0))
          : ((s = n.match(/^matrix\((.+)\)$/)),
            (e.x = s ? parseFloat(s[1].split(", ")[4]) : 0),
            (e.y = s ? parseFloat(s[1].split(", ")[5]) : 0)),
        e
      );
    }
  }
  function ut(t) {
    for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
    return e;
  }
  (at.prototype._notify = function (t) {
    var e = this._event;
    (e.x += e.deltaX),
      (e.y += e.deltaY),
      this._emitter.emit(rt, {
        x: e.x,
        y: e.y,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        originalEvent: t,
      });
  }),
    (at.prototype._onWheel = function (t) {
      var e = this.options;
      if (!this._lethargy || !1 !== this._lethargy.check(t)) {
        var i = this._event;
        (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
          (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
          tt &&
            1 == t.deltaMode &&
            ((i.deltaX *= e.firefoxMultiplier),
            (i.deltaY *= e.firefoxMultiplier)),
          (i.deltaX *= e.mouseMultiplier),
          (i.deltaY *= e.mouseMultiplier),
          this._notify(t);
      }
    }),
    (at.prototype._onMouseWheel = function (t) {
      if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
        var e = this._event;
        (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
          (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
          this._notify(t);
      }
    }),
    (at.prototype._onTouchStart = function (t) {
      var e = t.targetTouches ? t.targetTouches[0] : t;
      (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
    }),
    (at.prototype._onTouchMove = function (t) {
      var e = this.options;
      e.preventTouch &&
        !t.target.classList.contains(e.unpreventTouchClass) &&
        t.preventDefault();
      var i = this._event,
        n = t.targetTouches ? t.targetTouches[0] : t;
      (i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier),
        (i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier),
        (this.touchStartX = n.pageX),
        (this.touchStartY = n.pageY),
        this._notify(t);
    }),
    (at.prototype._onKeyDown = function (t) {
      var e = this._event;
      e.deltaX = e.deltaY = 0;
      var i = window.innerHeight - 40;
      switch (t.keyCode) {
        case 37:
        case 38:
          e.deltaY = this.options.keyStep;
          break;
        case 39:
        case 40:
          e.deltaY = -this.options.keyStep;
          break;
        case t.shiftKey:
          e.deltaY = i;
          break;
        case 32:
          e.deltaY = -i;
          break;
        default:
          return;
      }
      this._notify(t);
    }),
    (at.prototype._bind = function () {
      K &&
        this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
        $ &&
          this.el.addEventListener(
            "mousewheel",
            this._onMouseWheel,
            this.listenerOptions
          ),
        G &&
          this.options.useTouch &&
          (this.el.addEventListener(
            "touchstart",
            this._onTouchStart,
            this.listenerOptions
          ),
          this.el.addEventListener(
            "touchmove",
            this._onTouchMove,
            this.listenerOptions
          )),
        J &&
          Z &&
          ((this.bodyTouchAction = document.body.style.msTouchAction),
          (document.body.style.msTouchAction = "none"),
          this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
        Q &&
          this.options.useKeyboard &&
          document.addEventListener("keydown", this._onKeyDown);
    }),
    (at.prototype._unbind = function () {
      K && this.el.removeEventListener("wheel", this._onWheel),
        $ && this.el.removeEventListener("mousewheel", this._onMouseWheel),
        G &&
          (this.el.removeEventListener("touchstart", this._onTouchStart),
          this.el.removeEventListener("touchmove", this._onTouchMove)),
        J &&
          Z &&
          ((document.body.style.msTouchAction = this.bodyTouchAction),
          this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
        Q &&
          this.options.useKeyboard &&
          document.removeEventListener("keydown", this._onKeyDown);
    }),
    (at.prototype.on = function (t, e) {
      this._emitter.on(rt, t, e);
      var i = this._emitter.e;
      i && i[rt] && 1 === i[rt].length && this._bind();
    }),
    (at.prototype.off = function (t, e) {
      this._emitter.off(rt, t, e);
      var i = this._emitter.e;
      (!i[rt] || i[rt].length <= 0) && this._unbind();
    }),
    (at.prototype.reset = function () {
      var t = this._event;
      (t.x = 0), (t.y = 0);
    }),
    (at.prototype.destroy = function () {
      this._emitter.off(), this._unbind();
    });
  var dt = 4,
    ft = 0.001,
    pt = 1e-7,
    mt = 10,
    yt = 11,
    vt = 1 / (yt - 1),
    bt = "function" == typeof Float32Array;
  function gt(t, e) {
    return 1 - 3 * e + 3 * t;
  }
  function wt(t, e) {
    return 3 * e - 6 * t;
  }
  function kt(t) {
    return 3 * t;
  }
  function St(t, e, i) {
    return ((gt(e, i) * t + wt(e, i)) * t + kt(e)) * t;
  }
  function xt(t, e, i) {
    return 3 * gt(e, i) * t * t + 2 * wt(e, i) * t + kt(e);
  }
  function Et(t) {
    return t;
  }
  var Ct = function (t, e, i, n) {
      if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      if (t === e && i === n) return Et;
      for (
        var s = bt ? new Float32Array(yt) : new Array(yt), o = 0;
        o < yt;
        ++o
      )
        s[o] = St(o * vt, t, i);
      return function (o) {
        return 0 === o
          ? 0
          : 1 === o
          ? 1
          : St(
              (function (e) {
                for (var n = 0, o = 1, r = yt - 1; o !== r && s[o] <= e; ++o)
                  n += vt;
                --o;
                var l = n + ((e - s[o]) / (s[o + 1] - s[o])) * vt,
                  a = xt(l, t, i);
                return a >= ft
                  ? (function (t, e, i, n) {
                      for (var s = 0; s < dt; ++s) {
                        var o = xt(e, i, n);
                        if (0 === o) return e;
                        e -= (St(e, i, n) - t) / o;
                      }
                      return e;
                    })(e, l, t, i)
                  : 0 === a
                  ? l
                  : (function (t, e, i, n, s) {
                      var o,
                        r,
                        l = 0;
                      do {
                        (o = St((r = e + (i - e) / 2), n, s) - t) > 0
                          ? (i = r)
                          : (e = r);
                      } while (Math.abs(o) > pt && ++l < mt);
                      return r;
                    })(e, n, n + vt, t, i);
              })(o),
              e,
              n
            );
      };
    },
    Tt = (function (t) {
      T(i, t);
      var e = M(i);
      function i() {
        var t,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          w(this, i),
          history.scrollRestoration && (history.scrollRestoration = "manual"),
          window.scrollTo(0, 0),
          (t = e.call(this, n)).inertia && (t.lerp = 0.1 * t.inertia),
          (t.isScrolling = !1),
          (t.isDraggingScrollbar = !1),
          (t.isTicking = !1),
          (t.hasScrollTicking = !1),
          (t.parallaxElements = {}),
          (t.stop = !1),
          (t.scrollbarContainer = n.scrollbarContainer),
          (t.checkKey = t.checkKey.bind(L(t))),
          window.addEventListener("keydown", t.checkKey, !1),
          t
        );
      }
      return (
        S(i, [
          {
            key: "init",
            value: function () {
              var t = this;
              this.html.classList.add(this.smoothClass),
                this.html.setAttribute(
                  "data-".concat(this.name, "-direction"),
                  this.direction
                ),
                (this.instance = C(
                  {
                    delta: { x: this.initPosition.x, y: this.initPosition.y },
                    scroll: { x: this.initPosition.x, y: this.initPosition.y },
                  },
                  this.instance
                )),
                (this.vs = new lt({
                  el: this.scrollFromAnywhere ? document : this.el,
                  mouseMultiplier:
                    navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                  firefoxMultiplier: this.firefoxMultiplier,
                  touchMultiplier: this.touchMultiplier,
                  useKeyboard: !1,
                  passive: !0,
                })),
                this.vs.on(function (e) {
                  t.stop ||
                    t.isDraggingScrollbar ||
                    requestAnimationFrame(function () {
                      t.updateDelta(e), t.isScrolling || t.startScrolling();
                    });
                }),
                this.setScrollLimit(),
                this.initScrollBar(),
                this.addSections(),
                this.addElements(),
                this.checkScroll(!0),
                this.transformElements(!0, !0),
                j(A(i.prototype), "init", this).call(this);
            },
          },
          {
            key: "setScrollLimit",
            value: function () {
              if (
                ((this.instance.limit.y =
                  this.el.offsetHeight - this.windowHeight),
                "horizontal" === this.direction)
              ) {
                for (var t = 0, e = this.el.children, i = 0; i < e.length; i++)
                  t += e[i].offsetWidth;
                this.instance.limit.x = t - this.windowWidth;
              }
            },
          },
          {
            key: "startScrolling",
            value: function () {
              (this.startScrollTs = Date.now()),
                (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass);
            },
          },
          {
            key: "stopScrolling",
            value: function () {
              cancelAnimationFrame(this.checkScrollRaf),
                (this.startScrollTs = void 0),
                this.scrollToRaf &&
                  (cancelAnimationFrame(this.scrollToRaf),
                  (this.scrollToRaf = null)),
                (this.isScrolling = !1),
                (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                this.html.classList.remove(this.scrollingClass);
            },
          },
          {
            key: "checkKey",
            value: function (t) {
              var e = this;
              if (this.stop)
                9 == t.keyCode &&
                  requestAnimationFrame(function () {
                    (e.html.scrollTop = 0),
                      (document.body.scrollTop = 0),
                      (e.html.scrollLeft = 0),
                      (document.body.scrollLeft = 0);
                  });
              else {
                switch (t.keyCode) {
                  case 9:
                    requestAnimationFrame(function () {
                      (e.html.scrollTop = 0),
                        (document.body.scrollTop = 0),
                        (e.html.scrollLeft = 0),
                        (document.body.scrollLeft = 0),
                        e.scrollTo(document.activeElement, {
                          offset: -window.innerHeight / 2,
                        });
                    });
                    break;
                  case 38:
                    this.isActiveElementScrollSensitive() &&
                      (this.instance.delta[this.directionAxis] -= 240);
                    break;
                  case 40:
                    this.isActiveElementScrollSensitive() &&
                      (this.instance.delta[this.directionAxis] += 240);
                    break;
                  case 33:
                    this.instance.delta[this.directionAxis] -=
                      window.innerHeight;
                    break;
                  case 34:
                    this.instance.delta[this.directionAxis] +=
                      window.innerHeight;
                    break;
                  case 36:
                    this.instance.delta[this.directionAxis] -=
                      this.instance.limit[this.directionAxis];
                    break;
                  case 35:
                    this.instance.delta[this.directionAxis] +=
                      this.instance.limit[this.directionAxis];
                    break;
                  case 32:
                    this.isActiveElementScrollSensitive() &&
                      (t.shiftKey
                        ? (this.instance.delta[this.directionAxis] -=
                            window.innerHeight)
                        : (this.instance.delta[this.directionAxis] +=
                            window.innerHeight));
                    break;
                  default:
                    return;
                }
                this.instance.delta[this.directionAxis] < 0 &&
                  (this.instance.delta[this.directionAxis] = 0),
                  this.instance.delta[this.directionAxis] >
                    this.instance.limit[this.directionAxis] &&
                    (this.instance.delta[this.directionAxis] =
                      this.instance.limit[this.directionAxis]),
                  this.stopScrolling(),
                  (this.isScrolling = !0),
                  this.checkScroll(),
                  this.html.classList.add(this.scrollingClass);
              }
            },
          },
          {
            key: "isActiveElementScrollSensitive",
            value: function () {
              return !(
                document.activeElement instanceof HTMLInputElement ||
                document.activeElement instanceof HTMLTextAreaElement ||
                document.activeElement instanceof HTMLButtonElement ||
                document.activeElement instanceof HTMLSelectElement
              );
            },
          },
          {
            key: "checkScroll",
            value: function () {
              var t = this,
                e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              if (e || this.isScrolling || this.isDraggingScrollbar) {
                this.hasScrollTicking ||
                  ((this.checkScrollRaf = requestAnimationFrame(function () {
                    return t.checkScroll();
                  })),
                  (this.hasScrollTicking = !0)),
                  this.updateScroll();
                var n = Math.abs(
                    this.instance.delta[this.directionAxis] -
                      this.instance.scroll[this.directionAxis]
                  ),
                  s = Date.now() - this.startScrollTs;
                if (
                  (!this.animatingScroll &&
                    s > 100 &&
                    ((n < 0.5 &&
                      0 != this.instance.delta[this.directionAxis]) ||
                      (n < 0.5 &&
                        0 == this.instance.delta[this.directionAxis])) &&
                    this.stopScrolling(),
                  Object.entries(this.sections).forEach(function (i) {
                    var n = D(i, 2),
                      s = (n[0], n[1]);
                    s.persistent ||
                    (t.instance.scroll[t.directionAxis] >
                      s.offset[t.directionAxis] &&
                      t.instance.scroll[t.directionAxis] <
                        s.limit[t.directionAxis])
                      ? ("horizontal" === t.direction
                          ? t.transform(
                              s.el,
                              -t.instance.scroll[t.directionAxis],
                              0
                            )
                          : t.transform(
                              s.el,
                              0,
                              -t.instance.scroll[t.directionAxis]
                            ),
                        s.inView ||
                          ((s.inView = !0),
                          (s.el.style.opacity = 1),
                          (s.el.style.pointerEvents = "all"),
                          s.el.setAttribute(
                            "data-".concat(t.name, "-section-inview"),
                            ""
                          )))
                      : ((s.inView || e) &&
                          ((s.inView = !1),
                          (s.el.style.opacity = 0),
                          (s.el.style.pointerEvents = "none"),
                          s.el.removeAttribute(
                            "data-".concat(t.name, "-section-inview")
                          )),
                        t.transform(s.el, 0, 0));
                  }),
                  this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.speedTs = Date.now())),
                  this.detectElements(),
                  this.transformElements(),
                  this.hasScrollbar)
                ) {
                  var o =
                    (this.instance.scroll[this.directionAxis] /
                      this.instance.limit[this.directionAxis]) *
                    this.scrollBarLimit[this.directionAxis];
                  "horizontal" === this.direction
                    ? this.transform(this.scrollbarThumb, o, 0)
                    : this.transform(this.scrollbarThumb, 0, o);
                }
                j(A(i.prototype), "checkScroll", this).call(this),
                  (this.hasScrollTicking = !1);
              }
            },
          },
          {
            key: "resize",
            value: function () {
              (this.windowHeight = window.innerHeight),
                (this.windowWidth = window.innerWidth),
                this.checkContext(),
                (this.windowMiddle = {
                  x: this.windowWidth / 2,
                  y: this.windowHeight / 2,
                }),
                this.update();
            },
          },
          {
            key: "updateDelta",
            value: function (t) {
              var e,
                i =
                  this[this.context] && this[this.context].gestureDirection
                    ? this[this.context].gestureDirection
                    : this.gestureDirection;
              (e =
                "both" === i
                  ? t.deltaX + t.deltaY
                  : "vertical" === i
                  ? t.deltaY
                  : "horizontal" === i
                  ? t.deltaX
                  : t.deltaY),
                (this.instance.delta[this.directionAxis] -=
                  e * this.multiplier),
                this.instance.delta[this.directionAxis] < 0 &&
                  (this.instance.delta[this.directionAxis] = 0),
                this.instance.delta[this.directionAxis] >
                  this.instance.limit[this.directionAxis] &&
                  (this.instance.delta[this.directionAxis] =
                    this.instance.limit[this.directionAxis]);
            },
          },
          {
            key: "updateScroll",
            value: function (t) {
              this.isScrolling || this.isDraggingScrollbar
                ? (this.instance.scroll[this.directionAxis] = ct(
                    this.instance.scroll[this.directionAxis],
                    this.instance.delta[this.directionAxis],
                    this.lerp
                  ))
                : this.instance.scroll[this.directionAxis] >
                  this.instance.limit[this.directionAxis]
                ? this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.limit[this.directionAxis]
                  )
                : this.instance.scroll.y < 0
                ? this.setScroll(this.instance.scroll[this.directionAxis], 0)
                : this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.delta[this.directionAxis]
                  );
            },
          },
          {
            key: "addDirection",
            value: function () {
              this.instance.delta.y > this.instance.scroll.y
                ? "down" !== this.instance.direction &&
                  (this.instance.direction = "down")
                : this.instance.delta.y < this.instance.scroll.y &&
                  "up" !== this.instance.direction &&
                  (this.instance.direction = "up"),
                this.instance.delta.x > this.instance.scroll.x
                  ? "right" !== this.instance.direction &&
                    (this.instance.direction = "right")
                  : this.instance.delta.x < this.instance.scroll.x &&
                    "left" !== this.instance.direction &&
                    (this.instance.direction = "left");
            },
          },
          {
            key: "addSpeed",
            value: function () {
              this.instance.delta[this.directionAxis] !=
              this.instance.scroll[this.directionAxis]
                ? (this.instance.speed =
                    (this.instance.delta[this.directionAxis] -
                      this.instance.scroll[this.directionAxis]) /
                    Math.max(1, Date.now() - this.speedTs))
                : (this.instance.speed = 0);
            },
          },
          {
            key: "initScrollBar",
            value: function () {
              if (
                ((this.scrollbar = document.createElement("span")),
                (this.scrollbarThumb = document.createElement("span")),
                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add(
                  "".concat(this.scrollbarClass, "_thumb")
                ),
                this.scrollbar.append(this.scrollbarThumb),
                this.scrollbarContainer
                  ? this.scrollbarContainer.append(this.scrollbar)
                  : document.body.append(this.scrollbar),
                (this.getScrollBar = this.getScrollBar.bind(this)),
                (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                (this.moveScrollBar = this.moveScrollBar.bind(this)),
                this.scrollbarThumb.addEventListener(
                  "mousedown",
                  this.getScrollBar
                ),
                window.addEventListener("mouseup", this.releaseScrollBar),
                window.addEventListener("mousemove", this.moveScrollBar),
                (this.hasScrollbar = !1),
                "horizontal" == this.direction)
              ) {
                if (
                  this.instance.limit.x + this.windowWidth <=
                  this.windowWidth
                )
                  return;
              } else if (
                this.instance.limit.y + this.windowHeight <=
                this.windowHeight
              )
                return;
              (this.hasScrollbar = !0),
                (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                (this.scrollbarHeight = this.scrollbarBCR.height),
                (this.scrollbarWidth = this.scrollbarBCR.width),
                "horizontal" === this.direction
                  ? (this.scrollbarThumb.style.width = "".concat(
                      (this.scrollbarWidth * this.scrollbarWidth) /
                        (this.instance.limit.x + this.scrollbarWidth),
                      "px"
                    ))
                  : (this.scrollbarThumb.style.height = "".concat(
                      (this.scrollbarHeight * this.scrollbarHeight) /
                        (this.instance.limit.y + this.scrollbarHeight),
                      "px"
                    )),
                (this.scrollbarThumbBCR =
                  this.scrollbarThumb.getBoundingClientRect()),
                (this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                });
            },
          },
          {
            key: "reinitScrollBar",
            value: function () {
              if (((this.hasScrollbar = !1), "horizontal" == this.direction)) {
                if (
                  this.instance.limit.x + this.windowWidth <=
                  this.windowWidth
                )
                  return;
              } else if (
                this.instance.limit.y + this.windowHeight <=
                this.windowHeight
              )
                return;
              (this.hasScrollbar = !0),
                (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                (this.scrollbarHeight = this.scrollbarBCR.height),
                (this.scrollbarWidth = this.scrollbarBCR.width),
                "horizontal" === this.direction
                  ? (this.scrollbarThumb.style.width = "".concat(
                      (this.scrollbarWidth * this.scrollbarWidth) /
                        (this.instance.limit.x + this.scrollbarWidth),
                      "px"
                    ))
                  : (this.scrollbarThumb.style.height = "".concat(
                      (this.scrollbarHeight * this.scrollbarHeight) /
                        (this.instance.limit.y + this.scrollbarHeight),
                      "px"
                    )),
                (this.scrollbarThumbBCR =
                  this.scrollbarThumb.getBoundingClientRect()),
                (this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                });
            },
          },
          {
            key: "destroyScrollBar",
            value: function () {
              this.scrollbarThumb.removeEventListener(
                "mousedown",
                this.getScrollBar
              ),
                window.removeEventListener("mouseup", this.releaseScrollBar),
                window.removeEventListener("mousemove", this.moveScrollBar),
                this.scrollbar.remove();
            },
          },
          {
            key: "getScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !0),
                this.checkScroll(),
                this.html.classList.remove(this.scrollingClass),
                this.html.classList.add(this.draggingClass);
            },
          },
          {
            key: "releaseScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !1),
                this.isScrolling &&
                  this.html.classList.add(this.scrollingClass),
                this.html.classList.remove(this.draggingClass);
            },
          },
          {
            key: "moveScrollBar",
            value: function (t) {
              var e = this;
              this.isDraggingScrollbar &&
                requestAnimationFrame(function () {
                  var i =
                      (((100 * (t.clientX - e.scrollbarBCR.left)) /
                        e.scrollbarWidth) *
                        e.instance.limit.x) /
                      100,
                    n =
                      (((100 * (t.clientY - e.scrollbarBCR.top)) /
                        e.scrollbarHeight) *
                        e.instance.limit.y) /
                      100;
                  n > 0 && n < e.instance.limit.y && (e.instance.delta.y = n),
                    i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i);
                });
            },
          },
          {
            key: "addElements",
            value: function () {
              var t = this;
              (this.els = {}),
                (this.parallaxElements = {}),
                this.el
                  .querySelectorAll("[data-".concat(this.name, "]"))
                  .forEach(function (e, i) {
                    var n,
                      s,
                      o,
                      r = ut(e),
                      l = Object.entries(t.sections)
                        .map(function (t) {
                          var e = D(t, 2);
                          return e[0], e[1];
                        })
                        .find(function (t) {
                          return r.includes(t.el);
                        }),
                      a = e.dataset[t.name + "Class"] || t.class,
                      c =
                        "string" == typeof e.dataset[t.name + "Id"]
                          ? e.dataset[t.name + "Id"]
                          : "el" + i,
                      h = e.dataset[t.name + "Repeat"],
                      u = e.dataset[t.name + "Call"],
                      d = e.dataset[t.name + "Position"],
                      f = e.dataset[t.name + "Delay"],
                      p = e.dataset[t.name + "Direction"],
                      m = "string" == typeof e.dataset[t.name + "Sticky"],
                      y =
                        !!e.dataset[t.name + "Speed"] &&
                        parseFloat(e.dataset[t.name + "Speed"]) / 10,
                      v =
                        "string" == typeof e.dataset[t.name + "Offset"]
                          ? e.dataset[t.name + "Offset"].split(",")
                          : t.offset,
                      b = e.dataset[t.name + "Target"],
                      g = (o =
                        void 0 !== b
                          ? document.querySelector("".concat(b))
                          : e).getBoundingClientRect();
                    null === l || l.inView
                      ? ((n = g.top + t.instance.scroll.y - ht(o).y),
                        (s = g.left + t.instance.scroll.x - ht(o).x))
                      : ((n = g.top - ht(l.el).y - ht(o).y),
                        (s = g.left - ht(l.el).x - ht(o).x));
                    var w = n + o.offsetHeight,
                      k = s + o.offsetWidth,
                      S = { x: (k - s) / 2 + s, y: (w - n) / 2 + n };
                    if (m) {
                      var x = e.getBoundingClientRect(),
                        E = x.top,
                        C = x.left,
                        T = { x: C - s, y: E - n };
                      (n += window.innerHeight),
                        (s += window.innerWidth),
                        (w =
                          E +
                          o.offsetHeight -
                          e.offsetHeight -
                          T[t.directionAxis]),
                        (S = {
                          x:
                            ((k =
                              C +
                              o.offsetWidth -
                              e.offsetWidth -
                              T[t.directionAxis]) -
                              s) /
                              2 +
                            s,
                          y: (w - n) / 2 + n,
                        });
                    }
                    h = "false" != h && (null != h || t.repeat);
                    var A = [0, 0];
                    if (v)
                      if ("horizontal" === t.direction) {
                        for (var O = 0; O < v.length; O++)
                          "string" == typeof v[O]
                            ? v[O].includes("%")
                              ? (A[O] = parseInt(
                                  (v[O].replace("%", "") * t.windowWidth) / 100
                                ))
                              : (A[O] = parseInt(v[O]))
                            : (A[O] = v[O]);
                        (s += A[0]), (k -= A[1]);
                      } else {
                        for (O = 0; O < v.length; O++)
                          "string" == typeof v[O]
                            ? v[O].includes("%")
                              ? (A[O] = parseInt(
                                  (v[O].replace("%", "") * t.windowHeight) / 100
                                ))
                              : (A[O] = parseInt(v[O]))
                            : (A[O] = v[O]);
                        (n += A[0]), (w -= A[1]);
                      }
                    var L = {
                      el: e,
                      id: c,
                      class: a,
                      section: l,
                      top: n,
                      middle: S,
                      bottom: w,
                      left: s,
                      right: k,
                      offset: v,
                      progress: 0,
                      repeat: h,
                      inView: !1,
                      call: u,
                      speed: y,
                      delay: f,
                      position: d,
                      target: o,
                      direction: p,
                      sticky: m,
                    };
                    (t.els[c] = L),
                      e.classList.contains(a) && t.setInView(t.els[c], c),
                      (!1 !== y || m) && (t.parallaxElements[c] = L);
                  });
            },
          },
          {
            key: "addSections",
            value: function () {
              var t = this;
              this.sections = {};
              var e = this.el.querySelectorAll(
                "[data-".concat(this.name, "-section]")
              );
              0 === e.length && (e = [this.el]),
                e.forEach(function (e, i) {
                  var n =
                      "string" == typeof e.dataset[t.name + "Id"]
                        ? e.dataset[t.name + "Id"]
                        : "section" + i,
                    s = e.getBoundingClientRect(),
                    o = {
                      x: s.left - 1.5 * window.innerWidth - ht(e).x,
                      y: s.top - 1.5 * window.innerHeight - ht(e).y,
                    },
                    r = {
                      x: o.x + s.width + 2 * window.innerWidth,
                      y: o.y + s.height + 2 * window.innerHeight,
                    },
                    l = "string" == typeof e.dataset[t.name + "Persistent"];
                  e.setAttribute("data-scroll-section-id", n);
                  var a = {
                    el: e,
                    offset: o,
                    limit: r,
                    inView: !1,
                    persistent: l,
                    id: n,
                  };
                  t.sections[n] = a;
                });
            },
          },
          {
            key: "transform",
            value: function (t, e, i, n) {
              var s;
              if (n) {
                var o = ht(t),
                  r = ct(o.x, e, n),
                  l = ct(o.y, i, n);
                s = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(r, ",")
                  .concat(l, ",0,1)");
              } else
                s = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(e, ",")
                  .concat(i, ",0,1)");
              (t.style.webkitTransform = s),
                (t.style.msTransform = s),
                (t.style.transform = s);
            },
          },
          {
            key: "transformElements",
            value: function (t) {
              var e = this,
                i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = this.instance.scroll.x + this.windowWidth,
                s = this.instance.scroll.y + this.windowHeight,
                o = {
                  x: this.instance.scroll.x + this.windowMiddle.x,
                  y: this.instance.scroll.y + this.windowMiddle.y,
                };
              Object.entries(this.parallaxElements).forEach(function (r) {
                var l = D(r, 2),
                  a = (l[0], l[1]),
                  c = !1;
                if ((t && (c = 0), a.inView || i))
                  switch (a.position) {
                    case "top":
                    case "left":
                      c = e.instance.scroll[e.directionAxis] * -a.speed;
                      break;
                    case "elementTop":
                      c = (s - a.top) * -a.speed;
                      break;
                    case "bottom":
                      c =
                        (e.instance.limit[e.directionAxis] -
                          s +
                          e.windowHeight) *
                        a.speed;
                      break;
                    case "elementLeft":
                      c = (n - a.left) * -a.speed;
                      break;
                    case "right":
                      c =
                        (e.instance.limit[e.directionAxis] -
                          n +
                          e.windowHeight) *
                        a.speed;
                      break;
                    default:
                      c =
                        (o[e.directionAxis] - a.middle[e.directionAxis]) *
                        -a.speed;
                  }
                a.sticky &&
                  (c = a.inView
                    ? "horizontal" === e.direction
                      ? e.instance.scroll.x - a.left + window.innerWidth
                      : e.instance.scroll.y - a.top + window.innerHeight
                    : "horizontal" === e.direction
                    ? e.instance.scroll.x < a.left - window.innerWidth &&
                      e.instance.scroll.x < a.left - window.innerWidth / 2
                      ? 0
                      : e.instance.scroll.x > a.right &&
                        e.instance.scroll.x > a.right + 100 &&
                        a.right - a.left + window.innerWidth
                    : e.instance.scroll.y < a.top - window.innerHeight &&
                      e.instance.scroll.y < a.top - window.innerHeight / 2
                    ? 0
                    : e.instance.scroll.y > a.bottom &&
                      e.instance.scroll.y > a.bottom + 100 &&
                      a.bottom - a.top + window.innerHeight),
                  !1 !== c &&
                    ("horizontal" === a.direction ||
                    ("horizontal" === e.direction && "vertical" !== a.direction)
                      ? e.transform(a.el, c, 0, !t && a.delay)
                      : e.transform(a.el, 0, c, !t && a.delay));
              });
            },
          },
          {
            key: "scrollTo",
            value: function (t) {
              var e,
                i = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                s = parseInt(n.offset) || 0,
                o = isNaN(parseInt(n.duration)) ? 1e3 : parseInt(n.duration),
                r = n.easing || [0.25, 0, 0.35, 1],
                l = !!n.disableLerp,
                a = !!n.callback && n.callback;
              if (
                ((r = Ct.apply(
                  void 0,
                  (function (t) {
                    if (Array.isArray(t)) return _(t);
                  })((e = r)) ||
                    (function (t) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(t)
                      )
                        return Array.from(t);
                    })(e) ||
                    I(e) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                )),
                "string" == typeof t)
              ) {
                if ("top" === t) t = 0;
                else if ("bottom" === t) t = this.instance.limit.y;
                else if ("left" === t) t = 0;
                else if ("right" === t) t = this.instance.limit.x;
                else if (!(t = document.querySelector(t))) return;
              } else if ("number" == typeof t) t = parseInt(t);
              else if (!t || !t.tagName)
                return void console.warn("`target` parameter is not valid");
              if ("number" != typeof t) {
                if (!ut(t).includes(this.el)) return;
                var c,
                  h = t.getBoundingClientRect(),
                  u = h.top,
                  d = h.left,
                  f = ut(t).find(function (t) {
                    return Object.entries(i.sections)
                      .map(function (t) {
                        var e = D(t, 2);
                        return e[0], e[1];
                      })
                      .find(function (e) {
                        return e.el == t;
                      });
                  });
                (c = f
                  ? ht(f)[this.directionAxis]
                  : -this.instance.scroll[this.directionAxis]),
                  (s = "horizontal" === this.direction ? d + s - c : u + s - c);
              } else s = t + s;
              var p = parseFloat(this.instance.delta[this.directionAxis]),
                m =
                  Math.max(
                    0,
                    Math.min(s, this.instance.limit[this.directionAxis])
                  ) - p,
                y = function (t) {
                  l
                    ? "horizontal" === i.direction
                      ? i.setScroll(p + m * t, i.instance.delta.y)
                      : i.setScroll(i.instance.delta.x, p + m * t)
                    : (i.instance.delta[i.directionAxis] = p + m * t);
                };
              (this.animatingScroll = !0),
                this.stopScrolling(),
                this.startScrolling();
              var v = Date.now();
              !(function t() {
                var e = (Date.now() - v) / o;
                e > 1
                  ? (y(1),
                    (i.animatingScroll = !1),
                    0 == o && i.update(),
                    a && a())
                  : ((i.scrollToRaf = requestAnimationFrame(t)), y(r(e)));
              })();
            },
          },
          {
            key: "update",
            value: function () {
              this.setScrollLimit(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.updateScroll(),
                this.transformElements(!0),
                this.reinitScrollBar(),
                this.checkScroll(!0);
            },
          },
          {
            key: "startScroll",
            value: function () {
              this.stop = !1;
            },
          },
          {
            key: "stopScroll",
            value: function () {
              this.stop = !0;
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance = C(
                C({}, this.instance),
                {},
                { scroll: { x: t, y: e }, delta: { x: t, y: e }, speed: 0 }
              );
            },
          },
          {
            key: "destroy",
            value: function () {
              j(A(i.prototype), "destroy", this).call(this),
                this.stopScrolling(),
                this.html.classList.remove(this.smoothClass),
                this.vs.destroy(),
                this.destroyScrollBar(),
                window.removeEventListener("keydown", this.checkKey, !1);
            },
          },
        ]),
        i
      );
    })(B);
  const At = (function () {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        w(this, t),
          (this.options = e),
          Object.assign(this, P, e),
          (this.smartphone = P.smartphone),
          e.smartphone && Object.assign(this.smartphone, e.smartphone),
          (this.tablet = P.tablet),
          e.tablet && Object.assign(this.tablet, e.tablet),
          this.smooth ||
            "horizontal" != this.direction ||
            console.warn(
              "???? `smooth:false` & `horizontal` direction are not yet compatible"
            ),
          this.tablet.smooth ||
            "horizontal" != this.tablet.direction ||
            console.warn(
              "???? `smooth:false` & `horizontal` direction are not yet compatible (tablet)"
            ),
          this.smartphone.smooth ||
            "horizontal" != this.smartphone.direction ||
            console.warn(
              "???? `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"
            ),
          this.init();
      }
      return (
        S(t, [
          {
            key: "init",
            value: function () {
              if (
                ((this.options.isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) ||
                  ("MacIntel" === navigator.platform &&
                    navigator.maxTouchPoints > 1) ||
                  window.innerWidth < this.tablet.breakpoint),
                (this.options.isTablet =
                  this.options.isMobile &&
                  window.innerWidth >= this.tablet.breakpoint),
                (this.smooth && !this.options.isMobile) ||
                (this.tablet.smooth && this.options.isTablet) ||
                (this.smartphone.smooth &&
                  this.options.isMobile &&
                  !this.options.isTablet)
                  ? (this.scroll = new Tt(this.options))
                  : (this.scroll = new Y(this.options)),
                this.scroll.init(),
                window.location.hash)
              ) {
                var t = window.location.hash.slice(
                    1,
                    window.location.hash.length
                  ),
                  e = document.getElementById(t);
                e && this.scroll.scrollTo(e);
              }
            },
          },
          {
            key: "update",
            value: function () {
              this.scroll.update();
            },
          },
          {
            key: "start",
            value: function () {
              this.scroll.startScroll();
            },
          },
          {
            key: "stop",
            value: function () {
              this.scroll.stopScroll();
            },
          },
          {
            key: "scrollTo",
            value: function (t, e) {
              this.scroll.scrollTo(t, e);
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.scroll.setScroll(t, e);
            },
          },
          {
            key: "on",
            value: function (t, e) {
              this.scroll.setEvents(t, e);
            },
          },
          {
            key: "off",
            value: function (t, e) {
              this.scroll.unsetEvents(t, e);
            },
          },
          {
            key: "destroy",
            value: function () {
              this.scroll.destroy();
            },
          },
        ]),
        t
      );
    })(),
    Ot = class extends h {
      constructor(t) {
        super(t);
      }
      init() {
        (this.scroll = new At({ el: this.el, smooth: !0 })),
          this.scroll.on("call", (t, e, i, n) => {
            this.call(t[0], { way: e, obj: i }, t[1], t[2]);
          }),
          this.scroll.on("scroll", (t) => {});
      }
      lazyLoad(t) {
        (async (t, e, i) => {
          let n = e || t.dataset.src,
            s = g.find((t) => t.url === n);
          if (!s) {
            if (
              ((s = await ((t, e = {}) =>
                new Promise((i, n) => {
                  const s = new Image();
                  e.crossOrigin && (s.crossOrigin = e.crossOrigin);
                  const o = () => {
                    i({ element: s, ...b(s) });
                  };
                  s.decode
                    ? ((s.src = t),
                      s
                        .decode()
                        .then(o)
                        .catch((t) => {
                          n(t);
                        }))
                    : ((s.onload = o),
                      (s.onerror = (t) => {
                        n(t);
                      }),
                      (s.src = t));
                }))(n)),
              !s.url)
            )
              return;
            g.push(s);
          }
          t.src !== n &&
            ("IMG" === t.tagName
              ? (t.src = s.url)
              : (t.style.backgroundImage = `url(${s.url})`),
            requestAnimationFrame(() => {
              let e = t.closest(".c-lazy");
              e &&
                (e.classList.add("-lazy-loaded"),
                (e.style.backgroundImage = "")),
                t.classList.add("-lazy-loaded"),
                i?.();
            }));
        })(t.obj.el, null, () => {});
      }
      destroy() {
        this.scroll.destroy();
      }
    },
    Lt = class extends h {
      constructor(t) {
        super(t), (this.events = { click: { header: "toggleSection" } });
      }
      toggleSection(t) {
        const e = t.currentTarget,
          i = this.parent("section", e);
        this.$("main", e),
          new At().update(),
          i.classList.contains("is-open")
            ? i.classList.remove("is-open")
            : i.classList.add("is-open");
      }
    },
    Mt = document.documentElement,
    jt = (document.body, Mt.hasAttribute("data-debug"), new d({ modules: e }));
  function Dt() {
    jt.init(jt),
      Mt.classList.add("is-loaded"),
      Mt.classList.add("is-ready"),
      Mt.classList.remove("is-loading");
  }
  window.onload = (t) => {
    const e = document.getElementById("main-css");
    e
      ? e.isLoaded
        ? Dt()
        : e.addEventListener("load", (t) => {
            Dt();
          })
      : console.warn('The "main-css" stylesheet not found');
  };
})();
