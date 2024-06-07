/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(()=>{
    var X_ = Object.create;
    var rn = Object.defineProperty;
    var j_ = Object.getOwnPropertyDescriptor;
    var z_ = Object.getOwnPropertyNames;
    var K_ = Object.getPrototypeOf
      , Y_ = Object.prototype.hasOwnProperty;
    var he = (e,t)=>()=>(e && (t = e(e = 0)),
    t);
    var c = (e,t)=>()=>(t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Fe = (e,t)=>{
        for (var r in t)
            rn(e, r, {
                get: t[r],
                enumerable: !0
            })
    }
      , Rs = (e,t,r,n)=>{
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of z_(t))
                !Y_.call(e, i) && i !== r && rn(e, i, {
                    get: ()=>t[i],
                    enumerable: !(n = j_(t, i)) || n.enumerable
                });
        return e
    }
    ;
    var ue = (e,t,r)=>(r = e != null ? X_(K_(e)) : {},
    Rs(t || !e || !e.__esModule ? rn(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e))
      , Je = e=>Rs(rn({}, "__esModule", {
        value: !0
    }), e);
    var Ri = c(()=>{
        "use strict";
        window.tram = function(e) {
            function t(l, y) {
                var I = new k.Bare;
                return I.init(l, y)
            }
            function r(l) {
                return l.replace(/[A-Z]/g, function(y) {
                    return "-" + y.toLowerCase()
                })
            }
            function n(l) {
                var y = parseInt(l.slice(1), 16)
                  , I = y >> 16 & 255
                  , w = y >> 8 & 255
                  , T = 255 & y;
                return [I, w, T]
            }
            function i(l, y, I) {
                return "#" + (1 << 24 | l << 16 | y << 8 | I).toString(16).slice(1)
            }
            function o() {}
            function a(l, y) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof y + "] " + y)
            }
            function s(l, y, I) {
                f("Units do not match [" + l + "]: " + y + ", " + I)
            }
            function u(l, y, I) {
                if (y !== void 0 && (I = y),
                l === void 0)
                    return I;
                var w = I;
                return St.test(l) || !ct.test(l) ? w = parseInt(l, 10) : ct.test(l) && (w = 1e3 * parseFloat(l)),
                0 > w && (w = 0),
                w === w ? w : I
            }
            function f(l) {
                ce.debug && window && window.console.warn(l)
            }
            function E(l) {
                for (var y = -1, I = l ? l.length : 0, w = []; ++y < I; ) {
                    var T = l[y];
                    T && w.push(T)
                }
                return w
            }
            var p = function(l, y, I) {
                function w(ne) {
                    return typeof ne == "object"
                }
                function T(ne) {
                    return typeof ne == "function"
                }
                function S() {}
                function $(ne, pe) {
                    function B() {
                        var Ce = new oe;
                        return T(Ce.init) && Ce.init.apply(Ce, arguments),
                        Ce
                    }
                    function oe() {}
                    pe === I && (pe = ne,
                    ne = Object),
                    B.Bare = oe;
                    var ae, _e = S[l] = ne[l], Ze = oe[l] = B[l] = new S;
                    return Ze.constructor = B,
                    B.mixin = function(Ce) {
                        return oe[l] = B[l] = $(B, Ce)[l],
                        B
                    }
                    ,
                    B.open = function(Ce) {
                        if (ae = {},
                        T(Ce) ? ae = Ce.call(B, Ze, _e, B, ne) : w(Ce) && (ae = Ce),
                        w(ae))
                            for (var Er in ae)
                                y.call(ae, Er) && (Ze[Er] = ae[Er]);
                        return T(Ze.init) || (Ze.init = ne),
                        B
                    }
                    ,
                    B.open(pe)
                }
                return $
            }("prototype", {}.hasOwnProperty)
              , d = {
                ease: ["ease", function(l, y, I, w) {
                    var T = (l /= w) * l
                      , S = T * l;
                    return y + I * (-2.75 * S * T + 11 * T * T + -15.5 * S + 8 * T + .25 * l)
                }
                ],
                "ease-in": ["ease-in", function(l, y, I, w) {
                    var T = (l /= w) * l
                      , S = T * l;
                    return y + I * (-1 * S * T + 3 * T * T + -3 * S + 2 * T)
                }
                ],
                "ease-out": ["ease-out", function(l, y, I, w) {
                    var T = (l /= w) * l
                      , S = T * l;
                    return y + I * (.3 * S * T + -1.6 * T * T + 2.2 * S + -1.8 * T + 1.9 * l)
                }
                ],
                "ease-in-out": ["ease-in-out", function(l, y, I, w) {
                    var T = (l /= w) * l
                      , S = T * l;
                    return y + I * (2 * S * T + -5 * T * T + 2 * S + 2 * T)
                }
                ],
                linear: ["linear", function(l, y, I, w) {
                    return I * l / w + y
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, y, I, w) {
                    return I * (l /= w) * l + y
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, y, I, w) {
                    return -I * (l /= w) * (l - 2) + y
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, y, I, w) {
                    return (l /= w / 2) < 1 ? I / 2 * l * l + y : -I / 2 * (--l * (l - 2) - 1) + y
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, y, I, w) {
                    return I * (l /= w) * l * l + y
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, y, I, w) {
                    return I * ((l = l / w - 1) * l * l + 1) + y
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, y, I, w) {
                    return (l /= w / 2) < 1 ? I / 2 * l * l * l + y : I / 2 * ((l -= 2) * l * l + 2) + y
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, y, I, w) {
                    return I * (l /= w) * l * l * l + y
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, y, I, w) {
                    return -I * ((l = l / w - 1) * l * l * l - 1) + y
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, y, I, w) {
                    return (l /= w / 2) < 1 ? I / 2 * l * l * l * l + y : -I / 2 * ((l -= 2) * l * l * l - 2) + y
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, y, I, w) {
                    return I * (l /= w) * l * l * l * l + y
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, y, I, w) {
                    return I * ((l = l / w - 1) * l * l * l * l + 1) + y
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, y, I, w) {
                    return (l /= w / 2) < 1 ? I / 2 * l * l * l * l * l + y : I / 2 * ((l -= 2) * l * l * l * l + 2) + y
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, y, I, w) {
                    return -I * Math.cos(l / w * (Math.PI / 2)) + I + y
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, y, I, w) {
                    return I * Math.sin(l / w * (Math.PI / 2)) + y
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, y, I, w) {
                    return -I / 2 * (Math.cos(Math.PI * l / w) - 1) + y
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, y, I, w) {
                    return l === 0 ? y : I * Math.pow(2, 10 * (l / w - 1)) + y
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, y, I, w) {
                    return l === w ? y + I : I * (-Math.pow(2, -10 * l / w) + 1) + y
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, y, I, w) {
                    return l === 0 ? y : l === w ? y + I : (l /= w / 2) < 1 ? I / 2 * Math.pow(2, 10 * (l - 1)) + y : I / 2 * (-Math.pow(2, -10 * --l) + 2) + y
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, y, I, w) {
                    return -I * (Math.sqrt(1 - (l /= w) * l) - 1) + y
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, y, I, w) {
                    return I * Math.sqrt(1 - (l = l / w - 1) * l) + y
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, y, I, w) {
                    return (l /= w / 2) < 1 ? -I / 2 * (Math.sqrt(1 - l * l) - 1) + y : I / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + y
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, y, I, w, T) {
                    return T === void 0 && (T = 1.70158),
                    I * (l /= w) * l * ((T + 1) * l - T) + y
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, y, I, w, T) {
                    return T === void 0 && (T = 1.70158),
                    I * ((l = l / w - 1) * l * ((T + 1) * l + T) + 1) + y
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, y, I, w, T) {
                    return T === void 0 && (T = 1.70158),
                    (l /= w / 2) < 1 ? I / 2 * l * l * (((T *= 1.525) + 1) * l - T) + y : I / 2 * ((l -= 2) * l * (((T *= 1.525) + 1) * l + T) + 2) + y
                }
                ]
            }
              , v = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , b = document
              , _ = window
              , O = "bkwld-tram"
              , m = /[\-\.0-9]/g
              , C = /[A-Z]/
              , A = "number"
              , N = /^(rgb|#)/
              , P = /(em|cm|mm|in|pt|pc|px)$/
              , L = /(em|cm|mm|in|pt|pc|px|%)$/
              , H = /(deg|rad|turn)$/
              , X = "unitless"
              , z = /(all|none) 0s ease 0s/
              , Q = /^(width|height)$/
              , G = " "
              , x = b.createElement("a")
              , g = ["Webkit", "Moz", "O", "ms"]
              , R = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , F = function(l) {
                if (l in x.style)
                    return {
                        dom: l,
                        css: l
                    };
                var y, I, w = "", T = l.split("-");
                for (y = 0; y < T.length; y++)
                    w += T[y].charAt(0).toUpperCase() + T[y].slice(1);
                for (y = 0; y < g.length; y++)
                    if (I = g[y] + w,
                    I in x.style)
                        return {
                            dom: I,
                            css: R[y] + l
                        }
            }
              , D = t.support = {
                bind: Function.prototype.bind,
                transform: F("transform"),
                transition: F("transition"),
                backface: F("backface-visibility"),
                timing: F("transition-timing-function")
            };
            if (D.transition) {
                var Z = D.timing.dom;
                if (x.style[Z] = d["ease-in-back"][0],
                !x.style[Z])
                    for (var J in v)
                        d[J][0] = v[J]
            }
            var q = t.frame = function() {
                var l = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
                return l && D.bind ? l.bind(_) : function(y) {
                    _.setTimeout(y, 16)
                }
            }()
              , V = t.now = function() {
                var l = _.performance
                  , y = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                return y && D.bind ? y.bind(l) : Date.now || function() {
                    return +new Date
                }
            }()
              , K = p(function(l) {
                function y(ee, se) {
                    var ye = E(("" + ee).split(G))
                      , le = ye[0];
                    se = se || {};
                    var Re = W[le];
                    if (!Re)
                        return f("Unsupported property: " + le);
                    if (!se.weak || !this.props[le]) {
                        var He = Re[0]
                          , qe = this.props[le];
                        return qe || (qe = this.props[le] = new He.Bare),
                        qe.init(this.$el, ye, Re, se),
                        qe
                    }
                }
                function I(ee, se, ye) {
                    if (ee) {
                        var le = typeof ee;
                        if (se || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        le == "number" && se)
                            return this.timer = new de({
                                duration: ee,
                                context: this,
                                complete: S
                            }),
                            void (this.active = !0);
                        if (le == "string" && se) {
                            switch (ee) {
                            case "hide":
                                B.call(this);
                                break;
                            case "stop":
                                $.call(this);
                                break;
                            case "redraw":
                                oe.call(this);
                                break;
                            default:
                                y.call(this, ee, ye && ye[1])
                            }
                            return S.call(this)
                        }
                        if (le == "function")
                            return void ee.call(this, this);
                        if (le == "object") {
                            var Re = 0;
                            Ze.call(this, ee, function(be, W_) {
                                be.span > Re && (Re = be.span),
                                be.stop(),
                                be.animate(W_)
                            }, function(be) {
                                "wait"in be && (Re = u(be.wait, 0))
                            }),
                            _e.call(this),
                            Re > 0 && (this.timer = new de({
                                duration: Re,
                                context: this
                            }),
                            this.active = !0,
                            se && (this.timer.complete = S));
                            var He = this
                              , qe = !1
                              , tn = {};
                            q(function() {
                                Ze.call(He, ee, function(be) {
                                    be.active && (qe = !0,
                                    tn[be.name] = be.nextStyle)
                                }),
                                qe && He.$el.css(tn)
                            })
                        }
                    }
                }
                function w(ee) {
                    ee = u(ee, 0),
                    this.active ? this.queue.push({
                        options: ee
                    }) : (this.timer = new de({
                        duration: ee,
                        context: this,
                        complete: S
                    }),
                    this.active = !0)
                }
                function T(ee) {
                    return this.active ? (this.queue.push({
                        options: ee,
                        args: arguments
                    }),
                    void (this.timer.complete = S)) : f("No active transition timer. Use start() or wait() before then().")
                }
                function S() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var ee = this.queue.shift();
                        I.call(this, ee.options, !0, ee.args)
                    }
                }
                function $(ee) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var se;
                    typeof ee == "string" ? (se = {},
                    se[ee] = 1) : se = typeof ee == "object" && ee != null ? ee : this.props,
                    Ze.call(this, se, Ce),
                    _e.call(this)
                }
                function ne(ee) {
                    $.call(this, ee),
                    Ze.call(this, ee, Er, B_)
                }
                function pe(ee) {
                    typeof ee != "string" && (ee = "block"),
                    this.el.style.display = ee
                }
                function B() {
                    $.call(this),
                    this.el.style.display = "none"
                }
                function oe() {
                    this.el.offsetHeight
                }
                function ae() {
                    $.call(this),
                    e.removeData(this.el, O),
                    this.$el = this.el = null
                }
                function _e() {
                    var ee, se, ye = [];
                    this.upstream && ye.push(this.upstream);
                    for (ee in this.props)
                        se = this.props[ee],
                        se.active && ye.push(se.string);
                    ye = ye.join(","),
                    this.style !== ye && (this.style = ye,
                    this.el.style[D.transition.dom] = ye)
                }
                function Ze(ee, se, ye) {
                    var le, Re, He, qe, tn = se !== Ce, be = {};
                    for (le in ee)
                        He = ee[le],
                        le in ge ? (be.transform || (be.transform = {}),
                        be.transform[le] = He) : (C.test(le) && (le = r(le)),
                        le in W ? be[le] = He : (qe || (qe = {}),
                        qe[le] = He));
                    for (le in be) {
                        if (He = be[le],
                        Re = this.props[le],
                        !Re) {
                            if (!tn)
                                continue;
                            Re = y.call(this, le)
                        }
                        se.call(this, Re, He)
                    }
                    ye && qe && ye.call(this, qe)
                }
                function Ce(ee) {
                    ee.stop()
                }
                function Er(ee, se) {
                    ee.set(se)
                }
                function B_(ee) {
                    this.$el.css(ee)
                }
                function Be(ee, se) {
                    l[ee] = function() {
                        return this.children ? H_.call(this, se, arguments) : (this.el && se.apply(this, arguments),
                        this)
                    }
                }
                function H_(ee, se) {
                    var ye, le = this.children.length;
                    for (ye = 0; le > ye; ye++)
                        ee.apply(this.children[ye], se);
                    return this
                }
                l.init = function(ee) {
                    if (this.$el = e(ee),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    ce.keepInherited && !ce.fallback) {
                        var se = U(this.el, "transition");
                        se && !z.test(se) && (this.upstream = se)
                    }
                    D.backface && ce.hideBackface && h(this.el, D.backface.css, "hidden")
                }
                ,
                Be("add", y),
                Be("start", I),
                Be("wait", w),
                Be("then", T),
                Be("next", S),
                Be("stop", $),
                Be("set", ne),
                Be("show", pe),
                Be("hide", B),
                Be("redraw", oe),
                Be("destroy", ae)
            })
              , k = p(K, function(l) {
                function y(I, w) {
                    var T = e.data(I, O) || e.data(I, O, new K.Bare);
                    return T.el || T.init(I),
                    w ? T.start(w) : T
                }
                l.init = function(I, w) {
                    var T = e(I);
                    if (!T.length)
                        return this;
                    if (T.length === 1)
                        return y(T[0], w);
                    var S = [];
                    return T.each(function($, ne) {
                        S.push(y(ne, w))
                    }),
                    this.children = S,
                    this
                }
            })
              , M = p(function(l) {
                function y() {
                    var S = this.get();
                    this.update("auto");
                    var $ = this.get();
                    return this.update(S),
                    $
                }
                function I(S, $, ne) {
                    return $ !== void 0 && (ne = $),
                    S in d ? S : ne
                }
                function w(S) {
                    var $ = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(S);
                    return ($ ? i($[1], $[2], $[3]) : S).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var T = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                l.init = function(S, $, ne, pe) {
                    this.$el = S,
                    this.el = S[0];
                    var B = $[0];
                    ne[2] && (B = ne[2]),
                    Y[B] && (B = Y[B]),
                    this.name = B,
                    this.type = ne[1],
                    this.duration = u($[1], this.duration, T.duration),
                    this.ease = I($[2], this.ease, T.ease),
                    this.delay = u($[3], this.delay, T.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = Q.test(this.name),
                    this.unit = pe.unit || this.unit || ce.defaultUnit,
                    this.angle = pe.angle || this.angle || ce.defaultAngle,
                    ce.fallback || pe.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + G + this.duration + "ms" + (this.ease != "ease" ? G + d[this.ease][0] : "") + (this.delay ? G + this.delay + "ms" : ""))
                }
                ,
                l.set = function(S) {
                    S = this.convert(S, this.type),
                    this.update(S),
                    this.redraw()
                }
                ,
                l.transition = function(S) {
                    this.active = !0,
                    S = this.convert(S, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    S == "auto" && (S = y.call(this))),
                    this.nextStyle = S
                }
                ,
                l.fallback = function(S) {
                    var $ = this.el.style[this.name] || this.convert(this.get(), this.type);
                    S = this.convert(S, this.type),
                    this.auto && ($ == "auto" && ($ = this.convert(this.get(), this.type)),
                    S == "auto" && (S = y.call(this))),
                    this.tween = new te({
                        from: $,
                        to: S,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.get = function() {
                    return U(this.el, this.name)
                }
                ,
                l.update = function(S) {
                    h(this.el, this.name, S)
                }
                ,
                l.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    h(this.el, this.name, this.get()));
                    var S = this.tween;
                    S && S.context && S.destroy()
                }
                ,
                l.convert = function(S, $) {
                    if (S == "auto" && this.auto)
                        return S;
                    var ne, pe = typeof S == "number", B = typeof S == "string";
                    switch ($) {
                    case A:
                        if (pe)
                            return S;
                        if (B && S.replace(m, "") === "")
                            return +S;
                        ne = "number(unitless)";
                        break;
                    case N:
                        if (B) {
                            if (S === "" && this.original)
                                return this.original;
                            if ($.test(S))
                                return S.charAt(0) == "#" && S.length == 7 ? S : w(S)
                        }
                        ne = "hex or rgb string";
                        break;
                    case P:
                        if (pe)
                            return S + this.unit;
                        if (B && $.test(S))
                            return S;
                        ne = "number(px) or string(unit)";
                        break;
                    case L:
                        if (pe)
                            return S + this.unit;
                        if (B && $.test(S))
                            return S;
                        ne = "number(px) or string(unit or %)";
                        break;
                    case H:
                        if (pe)
                            return S + this.angle;
                        if (B && $.test(S))
                            return S;
                        ne = "number(deg) or string(angle)";
                        break;
                    case X:
                        if (pe || B && L.test(S))
                            return S;
                        ne = "number(unitless) or string(unit or %)"
                    }
                    return a(ne, S),
                    S
                }
                ,
                l.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , j = p(M, function(l, y) {
                l.init = function() {
                    y.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), N))
                }
            })
              , ie = p(M, function(l, y) {
                l.init = function() {
                    y.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                l.get = function() {
                    return this.$el[this.name]()
                }
                ,
                l.update = function(I) {
                    this.$el[this.name](I)
                }
            })
              , re = p(M, function(l, y) {
                function I(w, T) {
                    var S, $, ne, pe, B;
                    for (S in w)
                        pe = ge[S],
                        ne = pe[0],
                        $ = pe[1] || S,
                        B = this.convert(w[S], ne),
                        T.call(this, $, B, ne)
                }
                l.init = function() {
                    y.init.apply(this, arguments),
                    this.current || (this.current = {},
                    ge.perspective && ce.perspective && (this.current.perspective = ce.perspective,
                    h(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                l.set = function(w) {
                    I.call(this, w, function(T, S) {
                        this.current[T] = S
                    }),
                    h(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                l.transition = function(w) {
                    var T = this.values(w);
                    this.tween = new ut({
                        current: this.current,
                        values: T,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var S, $ = {};
                    for (S in this.current)
                        $[S] = S in T ? T[S] : this.current[S];
                    this.active = !0,
                    this.nextStyle = this.style($)
                }
                ,
                l.fallback = function(w) {
                    var T = this.values(w);
                    this.tween = new ut({
                        current: this.current,
                        values: T,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.update = function() {
                    h(this.el, this.name, this.style(this.current))
                }
                ,
                l.style = function(w) {
                    var T, S = "";
                    for (T in w)
                        S += T + "(" + w[T] + ") ";
                    return S
                }
                ,
                l.values = function(w) {
                    var T, S = {};
                    return I.call(this, w, function($, ne, pe) {
                        S[$] = ne,
                        this.current[$] === void 0 && (T = 0,
                        ~$.indexOf("scale") && (T = 1),
                        this.current[$] = this.convert(T, pe))
                    }),
                    S
                }
            })
              , te = p(function(l) {
                function y(B) {
                    ne.push(B) === 1 && q(I)
                }
                function I() {
                    var B, oe, ae, _e = ne.length;
                    if (_e)
                        for (q(I),
                        oe = V(),
                        B = _e; B--; )
                            ae = ne[B],
                            ae && ae.render(oe)
                }
                function w(B) {
                    var oe, ae = e.inArray(B, ne);
                    ae >= 0 && (oe = ne.slice(ae + 1),
                    ne.length = ae,
                    oe.length && (ne = ne.concat(oe)))
                }
                function T(B) {
                    return Math.round(B * pe) / pe
                }
                function S(B, oe, ae) {
                    return i(B[0] + ae * (oe[0] - B[0]), B[1] + ae * (oe[1] - B[1]), B[2] + ae * (oe[2] - B[2]))
                }
                var $ = {
                    ease: d.ease[1],
                    from: 0,
                    to: 1
                };
                l.init = function(B) {
                    this.duration = B.duration || 0,
                    this.delay = B.delay || 0;
                    var oe = B.ease || $.ease;
                    d[oe] && (oe = d[oe][1]),
                    typeof oe != "function" && (oe = $.ease),
                    this.ease = oe,
                    this.update = B.update || o,
                    this.complete = B.complete || o,
                    this.context = B.context || this,
                    this.name = B.name;
                    var ae = B.from
                      , _e = B.to;
                    ae === void 0 && (ae = $.from),
                    _e === void 0 && (_e = $.to),
                    this.unit = B.unit || "",
                    typeof ae == "number" && typeof _e == "number" ? (this.begin = ae,
                    this.change = _e - ae) : this.format(_e, ae),
                    this.value = this.begin + this.unit,
                    this.start = V(),
                    B.autoplay !== !1 && this.play()
                }
                ,
                l.play = function() {
                    this.active || (this.start || (this.start = V()),
                    this.active = !0,
                    y(this))
                }
                ,
                l.stop = function() {
                    this.active && (this.active = !1,
                    w(this))
                }
                ,
                l.render = function(B) {
                    var oe, ae = B - this.start;
                    if (this.delay) {
                        if (ae <= this.delay)
                            return;
                        ae -= this.delay
                    }
                    if (ae < this.duration) {
                        var _e = this.ease(ae, 0, 1, this.duration);
                        return oe = this.startRGB ? S(this.startRGB, this.endRGB, _e) : T(this.begin + _e * this.change),
                        this.value = oe + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    oe = this.endHex || this.begin + this.change,
                    this.value = oe + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                l.format = function(B, oe) {
                    if (oe += "",
                    B += "",
                    B.charAt(0) == "#")
                        return this.startRGB = n(oe),
                        this.endRGB = n(B),
                        this.endHex = B,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var ae = oe.replace(m, "")
                          , _e = B.replace(m, "");
                        ae !== _e && s("tween", oe, B),
                        this.unit = ae
                    }
                    oe = parseFloat(oe),
                    B = parseFloat(B),
                    this.begin = this.value = oe,
                    this.change = B - oe
                }
                ,
                l.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = o
                }
                ;
                var ne = []
                  , pe = 1e3
            })
              , de = p(te, function(l) {
                l.init = function(y) {
                    this.duration = y.duration || 0,
                    this.complete = y.complete || o,
                    this.context = y.context,
                    this.play()
                }
                ,
                l.render = function(y) {
                    var I = y - this.start;
                    I < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , ut = p(te, function(l, y) {
                l.init = function(I) {
                    this.context = I.context,
                    this.update = I.update,
                    this.tweens = [],
                    this.current = I.current;
                    var w, T;
                    for (w in I.values)
                        T = I.values[w],
                        this.current[w] !== T && this.tweens.push(new te({
                            name: w,
                            from: this.current[w],
                            to: T,
                            duration: I.duration,
                            delay: I.delay,
                            ease: I.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                l.render = function(I) {
                    var w, T, S = this.tweens.length, $ = !1;
                    for (w = S; w--; )
                        T = this.tweens[w],
                        T.context && (T.render(I),
                        this.current[T.name] = T.value,
                        $ = !0);
                    return $ ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                l.destroy = function() {
                    if (y.destroy.call(this),
                    this.tweens) {
                        var I, w = this.tweens.length;
                        for (I = w; I--; )
                            this.tweens[I].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , ce = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !D.transition,
                agentTests: []
            };
            t.fallback = function(l) {
                if (!D.transition)
                    return ce.fallback = !0;
                ce.agentTests.push("(" + l + ")");
                var y = new RegExp(ce.agentTests.join("|"),"i");
                ce.fallback = y.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(l) {
                return new te(l)
            }
            ,
            t.delay = function(l, y, I) {
                return new de({
                    complete: y,
                    duration: l,
                    context: I
                })
            }
            ,
            e.fn.tram = function(l) {
                return t.call(null, this, l)
            }
            ;
            var h = e.style
              , U = e.css
              , Y = {
                transform: D.transform && D.transform.css
            }
              , W = {
                color: [j, N],
                background: [j, N, "background-color"],
                "outline-color": [j, N],
                "border-color": [j, N],
                "border-top-color": [j, N],
                "border-right-color": [j, N],
                "border-bottom-color": [j, N],
                "border-left-color": [j, N],
                "border-width": [M, P],
                "border-top-width": [M, P],
                "border-right-width": [M, P],
                "border-bottom-width": [M, P],
                "border-left-width": [M, P],
                "border-spacing": [M, P],
                "letter-spacing": [M, P],
                margin: [M, P],
                "margin-top": [M, P],
                "margin-right": [M, P],
                "margin-bottom": [M, P],
                "margin-left": [M, P],
                padding: [M, P],
                "padding-top": [M, P],
                "padding-right": [M, P],
                "padding-bottom": [M, P],
                "padding-left": [M, P],
                "outline-width": [M, P],
                opacity: [M, A],
                top: [M, L],
                right: [M, L],
                bottom: [M, L],
                left: [M, L],
                "font-size": [M, L],
                "text-indent": [M, L],
                "word-spacing": [M, L],
                width: [M, L],
                "min-width": [M, L],
                "max-width": [M, L],
                height: [M, L],
                "min-height": [M, L],
                "max-height": [M, L],
                "line-height": [M, X],
                "scroll-top": [ie, A, "scrollTop"],
                "scroll-left": [ie, A, "scrollLeft"]
            }
              , ge = {};
            D.transform && (W.transform = [re],
            ge = {
                x: [L, "translateX"],
                y: [L, "translateY"],
                rotate: [H],
                rotateX: [H],
                rotateY: [H],
                scale: [A],
                scaleX: [A],
                scaleY: [A],
                skew: [H],
                skewX: [H],
                skewY: [H]
            }),
            D.transform && D.backface && (ge.z = [L, "translateZ"],
            ge.rotateZ = [H],
            ge.scaleZ = [A],
            ge.perspective = [P]);
            var St = /ms/
              , ct = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var Ns = c((MU,Ls)=>{
        "use strict";
        var $_ = window.$
          , Q_ = Ri() && $_.tram;
        Ls.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , r = Array.prototype
              , n = Object.prototype
              , i = Function.prototype
              , o = r.push
              , a = r.slice
              , s = r.concat
              , u = n.toString
              , f = n.hasOwnProperty
              , E = r.forEach
              , p = r.map
              , d = r.reduce
              , v = r.reduceRight
              , b = r.filter
              , _ = r.every
              , O = r.some
              , m = r.indexOf
              , C = r.lastIndexOf
              , A = Array.isArray
              , N = Object.keys
              , P = i.bind
              , L = e.each = e.forEach = function(g, R, F) {
                if (g == null)
                    return g;
                if (E && g.forEach === E)
                    g.forEach(R, F);
                else if (g.length === +g.length) {
                    for (var D = 0, Z = g.length; D < Z; D++)
                        if (R.call(F, g[D], D, g) === t)
                            return
                } else
                    for (var J = e.keys(g), D = 0, Z = J.length; D < Z; D++)
                        if (R.call(F, g[J[D]], J[D], g) === t)
                            return;
                return g
            }
            ;
            e.map = e.collect = function(g, R, F) {
                var D = [];
                return g == null ? D : p && g.map === p ? g.map(R, F) : (L(g, function(Z, J, q) {
                    D.push(R.call(F, Z, J, q))
                }),
                D)
            }
            ,
            e.find = e.detect = function(g, R, F) {
                var D;
                return H(g, function(Z, J, q) {
                    if (R.call(F, Z, J, q))
                        return D = Z,
                        !0
                }),
                D
            }
            ,
            e.filter = e.select = function(g, R, F) {
                var D = [];
                return g == null ? D : b && g.filter === b ? g.filter(R, F) : (L(g, function(Z, J, q) {
                    R.call(F, Z, J, q) && D.push(Z)
                }),
                D)
            }
            ;
            var H = e.some = e.any = function(g, R, F) {
                R || (R = e.identity);
                var D = !1;
                return g == null ? D : O && g.some === O ? g.some(R, F) : (L(g, function(Z, J, q) {
                    if (D || (D = R.call(F, Z, J, q)))
                        return t
                }),
                !!D)
            }
            ;
            e.contains = e.include = function(g, R) {
                return g == null ? !1 : m && g.indexOf === m ? g.indexOf(R) != -1 : H(g, function(F) {
                    return F === R
                })
            }
            ,
            e.delay = function(g, R) {
                var F = a.call(arguments, 2);
                return setTimeout(function() {
                    return g.apply(null, F)
                }, R)
            }
            ,
            e.defer = function(g) {
                return e.delay.apply(e, [g, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(g) {
                var R, F, D;
                return function() {
                    R || (R = !0,
                    F = arguments,
                    D = this,
                    Q_.frame(function() {
                        R = !1,
                        g.apply(D, F)
                    }))
                }
            }
            ,
            e.debounce = function(g, R, F) {
                var D, Z, J, q, V, K = function() {
                    var k = e.now() - q;
                    k < R ? D = setTimeout(K, R - k) : (D = null,
                    F || (V = g.apply(J, Z),
                    J = Z = null))
                };
                return function() {
                    J = this,
                    Z = arguments,
                    q = e.now();
                    var k = F && !D;
                    return D || (D = setTimeout(K, R)),
                    k && (V = g.apply(J, Z),
                    J = Z = null),
                    V
                }
            }
            ,
            e.defaults = function(g) {
                if (!e.isObject(g))
                    return g;
                for (var R = 1, F = arguments.length; R < F; R++) {
                    var D = arguments[R];
                    for (var Z in D)
                        g[Z] === void 0 && (g[Z] = D[Z])
                }
                return g
            }
            ,
            e.keys = function(g) {
                if (!e.isObject(g))
                    return [];
                if (N)
                    return N(g);
                var R = [];
                for (var F in g)
                    e.has(g, F) && R.push(F);
                return R
            }
            ,
            e.has = function(g, R) {
                return f.call(g, R)
            }
            ,
            e.isObject = function(g) {
                return g === Object(g)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var X = /(.)^/
              , z = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , Q = /\\|'|\r|\n|\u2028|\u2029/g
              , G = function(g) {
                return "\\" + z[g]
            }
              , x = /^\s*(\w|\$)+\s*$/;
            return e.template = function(g, R, F) {
                !R && F && (R = F),
                R = e.defaults({}, R, e.templateSettings);
                var D = RegExp([(R.escape || X).source, (R.interpolate || X).source, (R.evaluate || X).source].join("|") + "|$", "g")
                  , Z = 0
                  , J = "__p+='";
                g.replace(D, function(k, M, j, ie, re) {
                    return J += g.slice(Z, re).replace(Q, G),
                    Z = re + k.length,
                    M ? J += `'+
((__t=(` + M + `))==null?'':_.escape(__t))+
'` : j ? J += `'+
((__t=(` + j + `))==null?'':__t)+
'` : ie && (J += `';
` + ie + `
__p+='`),
                    k
                }),
                J += `';
`;
                var q = R.variable;
                if (q) {
                    if (!x.test(q))
                        throw new Error("variable is not a bare identifier: " + q)
                } else
                    J = `with(obj||{}){
` + J + `}
`,
                    q = "obj";
                J = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + J + `return __p;
`;
                var V;
                try {
                    V = new Function(R.variable || "obj","_",J)
                } catch (k) {
                    throw k.source = J,
                    k
                }
                var K = function(k) {
                    return V.call(this, k, e)
                };
                return K.source = "function(" + q + `){
` + J + "}",
                K
            }
            ,
            e
        }()
    }
    );
    var Ve = c((DU,Vs)=>{
        "use strict";
        var fe = {}
          , kt = {}
          , Vt = []
          , Ni = window.Webflow || []
          , Et = window.jQuery
          , Xe = Et(window)
          , Z_ = Et(document)
          , et = Et.isFunction
          , We = fe._ = Ns()
          , qs = fe.tram = Ri() && Et.tram
          , on = !1
          , Pi = !1;
        qs.config.hideBackface = !1;
        qs.config.keepInherited = !0;
        fe.define = function(e, t, r) {
            kt[e] && Ms(kt[e]);
            var n = kt[e] = t(Et, We, r) || {};
            return Fs(n),
            n
        }
        ;
        fe.require = function(e) {
            return kt[e]
        }
        ;
        function Fs(e) {
            fe.env() && (et(e.design) && Xe.on("__wf_design", e.design),
            et(e.preview) && Xe.on("__wf_preview", e.preview)),
            et(e.destroy) && Xe.on("__wf_destroy", e.destroy),
            e.ready && et(e.ready) && J_(e)
        }
        function J_(e) {
            if (on) {
                e.ready();
                return
            }
            We.contains(Vt, e.ready) || Vt.push(e.ready)
        }
        function Ms(e) {
            et(e.design) && Xe.off("__wf_design", e.design),
            et(e.preview) && Xe.off("__wf_preview", e.preview),
            et(e.destroy) && Xe.off("__wf_destroy", e.destroy),
            e.ready && et(e.ready) && eb(e)
        }
        function eb(e) {
            Vt = We.filter(Vt, function(t) {
                return t !== e.ready
            })
        }
        fe.push = function(e) {
            if (on) {
                et(e) && e();
                return
            }
            Ni.push(e)
        }
        ;
        fe.env = function(e) {
            var t = window.__wf_design
              , r = typeof t < "u";
            if (!e)
                return r;
            if (e === "design")
                return r && t;
            if (e === "preview")
                return r && !t;
            if (e === "slug")
                return r && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var nn = navigator.userAgent.toLowerCase()
          , Ds = fe.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , tb = fe.env.chrome = /chrome/.test(nn) && /Google/.test(navigator.vendor) && parseInt(nn.match(/chrome\/(\d+)\./)[1], 10)
          , rb = fe.env.ios = /(ipod|iphone|ipad)/.test(nn);
        fe.env.safari = /safari/.test(nn) && !tb && !rb;
        var Li;
        Ds && Z_.on("touchstart mousedown", function(e) {
            Li = e.target
        });
        fe.validClick = Ds ? function(e) {
            return e === Li || Et.contains(e, Li)
        }
        : function() {
            return !0
        }
        ;
        var Gs = "resize.webflow orientationchange.webflow load.webflow"
          , nb = "scroll.webflow " + Gs;
        fe.resize = qi(Xe, Gs);
        fe.scroll = qi(Xe, nb);
        fe.redraw = qi();
        function qi(e, t) {
            var r = []
              , n = {};
            return n.up = We.throttle(function(i) {
                We.each(r, function(o) {
                    o(i)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(i) {
                typeof i == "function" && (We.contains(r, i) || r.push(i))
            }
            ,
            n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = We.filter(r, function(o) {
                    return o !== i
                })
            }
            ,
            n
        }
        fe.location = function(e) {
            window.location = e
        }
        ;
        fe.env() && (fe.location = function() {}
        );
        fe.ready = function() {
            on = !0,
            Pi ? ib() : We.each(Vt, Ps),
            We.each(Ni, Ps),
            fe.resize.up()
        }
        ;
        function Ps(e) {
            et(e) && e()
        }
        function ib() {
            Pi = !1,
            We.each(kt, Fs)
        }
        var xt;
        fe.load = function(e) {
            xt.then(e)
        }
        ;
        function ks() {
            xt && (xt.reject(),
            Xe.off("load", xt.resolve)),
            xt = new Et.Deferred,
            Xe.on("load", xt.resolve)
        }
        fe.destroy = function(e) {
            e = e || {},
            Pi = !0,
            Xe.triggerHandler("__wf_destroy"),
            e.domready != null && (on = e.domready),
            We.each(kt, Ms),
            fe.resize.off(),
            fe.scroll.off(),
            fe.redraw.off(),
            Vt = [],
            Ni = [],
            xt.state() === "pending" && ks()
        }
        ;
        Et(fe.ready);
        ks();
        Vs.exports = window.Webflow = fe
    }
    );
    var Hs = c((GU,Bs)=>{
        "use strict";
        var Us = Ve();
        Us.define("brand", Bs.exports = function(e) {
            var t = {}, r = document, n = e("html"), i = e("body"), o = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", f;
            t.ready = function() {
                var v = n.attr("data-wf-status")
                  , b = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(b) && a.hostname !== b && (v = !0),
                v && !s && (f = f || p(),
                d(),
                setTimeout(d, 500),
                e(r).off(u, E).on(u, E))
            }
            ;
            function E() {
                var v = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", v ? "display: none !important;" : "")
            }
            function p() {
                var v = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , b = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                })
                  , _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return v.append(b, _),
                v[0]
            }
            function d() {
                var v = i.children(o)
                  , b = v.length && v.get(0) === f
                  , _ = Us.env("editor");
                if (b) {
                    _ && v.remove();
                    return
                }
                v.length && v.remove(),
                _ || i.append(f)
            }
            return t
        }
        )
    }
    );
    var Xs = c((kU,Ws)=>{
        "use strict";
        var Fi = Ve();
        Fi.define("edit", Ws.exports = function(e, t, r) {
            if (r = r || {},
            (Fi.env("test") || Fi.env("frame")) && !r.fixture && !ob())
                return {
                    exit: 1
                };
            var n = {}, i = e(window), o = e(document.documentElement), a = document.location, s = "hashchange", u, f = r.load || d, E = !1;
            try {
                E = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            E ? f() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && f() : i.on(s, p).triggerHandler(s);
            function p() {
                u || /\?edit/.test(a.hash) && f()
            }
            function d() {
                u = !0,
                window.WebflowEditor = !0,
                i.off(s, p),
                C(function(N) {
                    e.ajax({
                        url: m("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: v(N)
                    })
                })
            }
            function v(N) {
                return function(P) {
                    if (!P) {
                        console.error("Could not load editor data");
                        return
                    }
                    P.thirdPartyCookiesSupported = N,
                    b(O(P.scriptPath), function() {
                        window.WebflowEditor(P)
                    })
                }
            }
            function b(N, P) {
                e.ajax({
                    type: "GET",
                    url: N,
                    dataType: "script",
                    cache: !0
                }).then(P, _)
            }
            function _(N, P, L) {
                throw console.error("Could not load editor script: " + P),
                L
            }
            function O(N) {
                return N.indexOf("//") >= 0 ? N : m("https://editor-api.webflow.com" + N)
            }
            function m(N) {
                return N.replace(/([^:])\/\//g, "$1/")
            }
            function C(N) {
                var P = window.document.createElement("iframe");
                P.src = "https://webflow.com/site/third-party-cookie-check.html",
                P.style.display = "none",
                P.sandbox = "allow-scripts allow-same-origin";
                var L = function(H) {
                    H.data === "WF_third_party_cookies_unsupported" ? (A(P, L),
                    N(!1)) : H.data === "WF_third_party_cookies_supported" && (A(P, L),
                    N(!0))
                };
                P.onerror = function() {
                    A(P, L),
                    N(!1)
                }
                ,
                window.addEventListener("message", L, !1),
                window.document.body.appendChild(P)
            }
            function A(N, P) {
                window.removeEventListener("message", P, !1),
                N.remove()
            }
            return n
        }
        );
        function ob() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var zs = c((VU,js)=>{
        "use strict";
        var ab = Ve();
        ab.define("focus-visible", js.exports = function() {
            function e(r) {
                var n = !0
                  , i = !1
                  , o = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(A) {
                    return !!(A && A !== document && A.nodeName !== "HTML" && A.nodeName !== "BODY" && "classList"in A && "contains"in A.classList)
                }
                function u(A) {
                    var N = A.type
                      , P = A.tagName;
                    return !!(P === "INPUT" && a[N] && !A.readOnly || P === "TEXTAREA" && !A.readOnly || A.isContentEditable)
                }
                function f(A) {
                    A.getAttribute("data-wf-focus-visible") || A.setAttribute("data-wf-focus-visible", "true")
                }
                function E(A) {
                    A.getAttribute("data-wf-focus-visible") && A.removeAttribute("data-wf-focus-visible")
                }
                function p(A) {
                    A.metaKey || A.altKey || A.ctrlKey || (s(r.activeElement) && f(r.activeElement),
                    n = !0)
                }
                function d() {
                    n = !1
                }
                function v(A) {
                    s(A.target) && (n || u(A.target)) && f(A.target)
                }
                function b(A) {
                    s(A.target) && A.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                    window.clearTimeout(o),
                    o = window.setTimeout(function() {
                        i = !1
                    }, 100),
                    E(A.target))
                }
                function _() {
                    document.visibilityState === "hidden" && (i && (n = !0),
                    O())
                }
                function O() {
                    document.addEventListener("mousemove", C),
                    document.addEventListener("mousedown", C),
                    document.addEventListener("mouseup", C),
                    document.addEventListener("pointermove", C),
                    document.addEventListener("pointerdown", C),
                    document.addEventListener("pointerup", C),
                    document.addEventListener("touchmove", C),
                    document.addEventListener("touchstart", C),
                    document.addEventListener("touchend", C)
                }
                function m() {
                    document.removeEventListener("mousemove", C),
                    document.removeEventListener("mousedown", C),
                    document.removeEventListener("mouseup", C),
                    document.removeEventListener("pointermove", C),
                    document.removeEventListener("pointerdown", C),
                    document.removeEventListener("pointerup", C),
                    document.removeEventListener("touchmove", C),
                    document.removeEventListener("touchstart", C),
                    document.removeEventListener("touchend", C)
                }
                function C(A) {
                    A.target.nodeName && A.target.nodeName.toLowerCase() === "html" || (n = !1,
                    m())
                }
                document.addEventListener("keydown", p, !0),
                document.addEventListener("mousedown", d, !0),
                document.addEventListener("pointerdown", d, !0),
                document.addEventListener("touchstart", d, !0),
                document.addEventListener("visibilitychange", _, !0),
                O(),
                r.addEventListener("focus", v, !0),
                r.addEventListener("blur", b, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var $s = c((UU,Ys)=>{
        "use strict";
        var Ks = Ve();
        Ks.define("focus", Ys.exports = function() {
            var e = []
              , t = !1;
            function r(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function n(a) {
                var s = a.target
                  , u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }
            function i(a) {
                n(a) && (t = !0,
                setTimeout(()=>{
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ks.env.safari && (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        }
        )
    }
    );
    var Js = c((BU,Zs)=>{
        "use strict";
        var Mi = window.jQuery
          , tt = {}
          , an = []
          , Qs = ".w-ix"
          , sn = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                Mi(t).triggerHandler(tt.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                Mi(t).triggerHandler(tt.types.OUTRO))
            }
        };
        tt.triggers = {};
        tt.types = {
            INTRO: "w-ix-intro" + Qs,
            OUTRO: "w-ix-outro" + Qs
        };
        tt.init = function() {
            for (var e = an.length, t = 0; t < e; t++) {
                var r = an[t];
                r[0](0, r[1])
            }
            an = [],
            Mi.extend(tt.triggers, sn)
        }
        ;
        tt.async = function() {
            for (var e in sn) {
                var t = sn[e];
                sn.hasOwnProperty(e) && (tt.triggers[e] = function(r, n) {
                    an.push([t, n])
                }
                )
            }
        }
        ;
        tt.async();
        Zs.exports = tt
    }
    );
    var cn = c((HU,ru)=>{
        "use strict";
        var Di = Js();
        function eu(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(r)
        }
        var sb = window.jQuery
          , un = {}
          , tu = ".w-ix"
          , ub = {
            reset: function(e, t) {
                Di.triggers.reset(e, t)
            },
            intro: function(e, t) {
                Di.triggers.intro(e, t),
                eu(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                Di.triggers.outro(e, t),
                eu(t, "COMPONENT_INACTIVE")
            }
        };
        un.triggers = {};
        un.types = {
            INTRO: "w-ix-intro" + tu,
            OUTRO: "w-ix-outro" + tu
        };
        sb.extend(un.triggers, ub);
        ru.exports = un
    }
    );
    var nu = c((WU,lt)=>{
        function Gi(e) {
            return lt.exports = Gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            lt.exports.__esModule = !0,
            lt.exports.default = lt.exports,
            Gi(e)
        }
        lt.exports = Gi,
        lt.exports.__esModule = !0,
        lt.exports.default = lt.exports
    }
    );
    var ln = c((XU,yr)=>{
        var cb = nu().default;
        function iu(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (iu = function(i) {
                return i ? r : t
            }
            )(e)
        }
        function lb(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || cb(e) != "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = iu(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        yr.exports = lb,
        yr.exports.__esModule = !0,
        yr.exports.default = yr.exports
    }
    );
    var ou = c((jU,mr)=>{
        function fb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        mr.exports = fb,
        mr.exports.__esModule = !0,
        mr.exports.default = mr.exports
    }
    );
    var Ee = c((zU,au)=>{
        var fn = function(e) {
            return e && e.Math == Math && e
        };
        au.exports = fn(typeof globalThis == "object" && globalThis) || fn(typeof window == "object" && window) || fn(typeof self == "object" && self) || fn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    }
    );
    var Ut = c((KU,su)=>{
        su.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    }
    );
    var Ct = c((YU,uu)=>{
        var db = Ut();
        uu.exports = !db(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    }
    );
    var dn = c(($U,cu)=>{
        var _r = Function.prototype.call;
        cu.exports = _r.bind ? _r.bind(_r) : function() {
            return _r.apply(_r, arguments)
        }
    }
    );
    var pu = c(du=>{
        "use strict";
        var lu = {}.propertyIsEnumerable
          , fu = Object.getOwnPropertyDescriptor
          , pb = fu && !lu.call({
            1: 2
        }, 1);
        du.f = pb ? function(t) {
            var r = fu(this, t);
            return !!r && r.enumerable
        }
        : lu
    }
    );
    var ki = c((ZU,gu)=>{
        gu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    }
    );
    var je = c((JU,hu)=>{
        var vu = Function.prototype
          , Vi = vu.bind
          , Ui = vu.call
          , gb = Vi && Vi.bind(Ui);
        hu.exports = Vi ? function(e) {
            return e && gb(Ui, e)
        }
        : function(e) {
            return e && function() {
                return Ui.apply(e, arguments)
            }
        }
    }
    );
    var mu = c((eB,yu)=>{
        var Eu = je()
          , vb = Eu({}.toString)
          , hb = Eu("".slice);
        yu.exports = function(e) {
            return hb(vb(e), 8, -1)
        }
    }
    );
    var bu = c((tB,_u)=>{
        var Eb = Ee()
          , yb = je()
          , mb = Ut()
          , _b = mu()
          , Bi = Eb.Object
          , bb = yb("".split);
        _u.exports = mb(function() {
            return !Bi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return _b(e) == "String" ? bb(e, "") : Bi(e)
        }
        : Bi
    }
    );
    var Hi = c((rB,Tu)=>{
        var Tb = Ee()
          , Ib = Tb.TypeError;
        Tu.exports = function(e) {
            if (e == null)
                throw Ib("Can't call method on " + e);
            return e
        }
    }
    );
    var br = c((nB,Iu)=>{
        var Ob = bu()
          , Ab = Hi();
        Iu.exports = function(e) {
            return Ob(Ab(e))
        }
    }
    );
    var rt = c((iB,Ou)=>{
        Ou.exports = function(e) {
            return typeof e == "function"
        }
    }
    );
    var Bt = c((oB,Au)=>{
        var wb = rt();
        Au.exports = function(e) {
            return typeof e == "object" ? e !== null : wb(e)
        }
    }
    );
    var Tr = c((aB,wu)=>{
        var Wi = Ee()
          , Sb = rt()
          , xb = function(e) {
            return Sb(e) ? e : void 0
        };
        wu.exports = function(e, t) {
            return arguments.length < 2 ? xb(Wi[e]) : Wi[e] && Wi[e][t]
        }
    }
    );
    var xu = c((sB,Su)=>{
        var Cb = je();
        Su.exports = Cb({}.isPrototypeOf)
    }
    );
    var Ru = c((uB,Cu)=>{
        var Rb = Tr();
        Cu.exports = Rb("navigator", "userAgent") || ""
    }
    );
    var Du = c((cB,Mu)=>{
        var Fu = Ee(), Xi = Ru(), Lu = Fu.process, Nu = Fu.Deno, Pu = Lu && Lu.versions || Nu && Nu.version, qu = Pu && Pu.v8, ze, pn;
        qu && (ze = qu.split("."),
        pn = ze[0] > 0 && ze[0] < 4 ? 1 : +(ze[0] + ze[1]));
        !pn && Xi && (ze = Xi.match(/Edge\/(\d+)/),
        (!ze || ze[1] >= 74) && (ze = Xi.match(/Chrome\/(\d+)/),
        ze && (pn = +ze[1])));
        Mu.exports = pn
    }
    );
    var ji = c((lB,ku)=>{
        var Gu = Du()
          , Lb = Ut();
        ku.exports = !!Object.getOwnPropertySymbols && !Lb(function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && Gu && Gu < 41
        })
    }
    );
    var zi = c((fB,Vu)=>{
        var Nb = ji();
        Vu.exports = Nb && !Symbol.sham && typeof Symbol.iterator == "symbol"
    }
    );
    var Ki = c((dB,Uu)=>{
        var Pb = Ee()
          , qb = Tr()
          , Fb = rt()
          , Mb = xu()
          , Db = zi()
          , Gb = Pb.Object;
        Uu.exports = Db ? function(e) {
            return typeof e == "symbol"
        }
        : function(e) {
            var t = qb("Symbol");
            return Fb(t) && Mb(t.prototype, Gb(e))
        }
    }
    );
    var Hu = c((pB,Bu)=>{
        var kb = Ee()
          , Vb = kb.String;
        Bu.exports = function(e) {
            try {
                return Vb(e)
            } catch {
                return "Object"
            }
        }
    }
    );
    var Xu = c((gB,Wu)=>{
        var Ub = Ee()
          , Bb = rt()
          , Hb = Hu()
          , Wb = Ub.TypeError;
        Wu.exports = function(e) {
            if (Bb(e))
                return e;
            throw Wb(Hb(e) + " is not a function")
        }
    }
    );
    var zu = c((vB,ju)=>{
        var Xb = Xu();
        ju.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : Xb(r)
        }
    }
    );
    var Yu = c((hB,Ku)=>{
        var jb = Ee()
          , Yi = dn()
          , $i = rt()
          , Qi = Bt()
          , zb = jb.TypeError;
        Ku.exports = function(e, t) {
            var r, n;
            if (t === "string" && $i(r = e.toString) && !Qi(n = Yi(r, e)) || $i(r = e.valueOf) && !Qi(n = Yi(r, e)) || t !== "string" && $i(r = e.toString) && !Qi(n = Yi(r, e)))
                return n;
            throw zb("Can't convert object to primitive value")
        }
    }
    );
    var Qu = c((EB,$u)=>{
        $u.exports = !1
    }
    );
    var gn = c((yB,Ju)=>{
        var Zu = Ee()
          , Kb = Object.defineProperty;
        Ju.exports = function(e, t) {
            try {
                Kb(Zu, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Zu[e] = t
            }
            return t
        }
    }
    );
    var vn = c((mB,tc)=>{
        var Yb = Ee()
          , $b = gn()
          , ec = "__core-js_shared__"
          , Qb = Yb[ec] || $b(ec, {});
        tc.exports = Qb
    }
    );
    var Zi = c((_B,nc)=>{
        var Zb = Qu()
          , rc = vn();
        (nc.exports = function(e, t) {
            return rc[e] || (rc[e] = t !== void 0 ? t : {})
        }
        )("versions", []).push({
            version: "3.19.0",
            mode: Zb ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    }
    );
    var oc = c((bB,ic)=>{
        var Jb = Ee()
          , eT = Hi()
          , tT = Jb.Object;
        ic.exports = function(e) {
            return tT(eT(e))
        }
    }
    );
    var yt = c((TB,ac)=>{
        var rT = je()
          , nT = oc()
          , iT = rT({}.hasOwnProperty);
        ac.exports = Object.hasOwn || function(t, r) {
            return iT(nT(t), r)
        }
    }
    );
    var Ji = c((IB,sc)=>{
        var oT = je()
          , aT = 0
          , sT = Math.random()
          , uT = oT(1.toString);
        sc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + uT(++aT + sT, 36)
        }
    }
    );
    var eo = c((OB,dc)=>{
        var cT = Ee()
          , lT = Zi()
          , uc = yt()
          , fT = Ji()
          , cc = ji()
          , fc = zi()
          , Ht = lT("wks")
          , Rt = cT.Symbol
          , lc = Rt && Rt.for
          , dT = fc ? Rt : Rt && Rt.withoutSetter || fT;
        dc.exports = function(e) {
            if (!uc(Ht, e) || !(cc || typeof Ht[e] == "string")) {
                var t = "Symbol." + e;
                cc && uc(Rt, e) ? Ht[e] = Rt[e] : fc && lc ? Ht[e] = lc(t) : Ht[e] = dT(t)
            }
            return Ht[e]
        }
    }
    );
    var hc = c((AB,vc)=>{
        var pT = Ee()
          , gT = dn()
          , pc = Bt()
          , gc = Ki()
          , vT = zu()
          , hT = Yu()
          , ET = eo()
          , yT = pT.TypeError
          , mT = ET("toPrimitive");
        vc.exports = function(e, t) {
            if (!pc(e) || gc(e))
                return e;
            var r = vT(e, mT), n;
            if (r) {
                if (t === void 0 && (t = "default"),
                n = gT(r, e, t),
                !pc(n) || gc(n))
                    return n;
                throw yT("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"),
            hT(e, t)
        }
    }
    );
    var to = c((wB,Ec)=>{
        var _T = hc()
          , bT = Ki();
        Ec.exports = function(e) {
            var t = _T(e, "string");
            return bT(t) ? t : t + ""
        }
    }
    );
    var no = c((SB,mc)=>{
        var TT = Ee()
          , yc = Bt()
          , ro = TT.document
          , IT = yc(ro) && yc(ro.createElement);
        mc.exports = function(e) {
            return IT ? ro.createElement(e) : {}
        }
    }
    );
    var io = c((xB,_c)=>{
        var OT = Ct()
          , AT = Ut()
          , wT = no();
        _c.exports = !OT && !AT(function() {
            return Object.defineProperty(wT("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    }
    );
    var oo = c(Tc=>{
        var ST = Ct()
          , xT = dn()
          , CT = pu()
          , RT = ki()
          , LT = br()
          , NT = to()
          , PT = yt()
          , qT = io()
          , bc = Object.getOwnPropertyDescriptor;
        Tc.f = ST ? bc : function(t, r) {
            if (t = LT(t),
            r = NT(r),
            qT)
                try {
                    return bc(t, r)
                } catch {}
            if (PT(t, r))
                return RT(!xT(CT.f, t, r), t[r])
        }
    }
    );
    var Ir = c((RB,Oc)=>{
        var Ic = Ee()
          , FT = Bt()
          , MT = Ic.String
          , DT = Ic.TypeError;
        Oc.exports = function(e) {
            if (FT(e))
                return e;
            throw DT(MT(e) + " is not an object")
        }
    }
    );
    var Or = c(Sc=>{
        var GT = Ee()
          , kT = Ct()
          , VT = io()
          , Ac = Ir()
          , UT = to()
          , BT = GT.TypeError
          , wc = Object.defineProperty;
        Sc.f = kT ? wc : function(t, r, n) {
            if (Ac(t),
            r = UT(r),
            Ac(n),
            VT)
                try {
                    return wc(t, r, n)
                } catch {}
            if ("get"in n || "set"in n)
                throw BT("Accessors not supported");
            return "value"in n && (t[r] = n.value),
            t
        }
    }
    );
    var hn = c((NB,xc)=>{
        var HT = Ct()
          , WT = Or()
          , XT = ki();
        xc.exports = HT ? function(e, t, r) {
            return WT.f(e, t, XT(1, r))
        }
        : function(e, t, r) {
            return e[t] = r,
            e
        }
    }
    );
    var so = c((PB,Cc)=>{
        var jT = je()
          , zT = rt()
          , ao = vn()
          , KT = jT(Function.toString);
        zT(ao.inspectSource) || (ao.inspectSource = function(e) {
            return KT(e)
        }
        );
        Cc.exports = ao.inspectSource
    }
    );
    var Nc = c((qB,Lc)=>{
        var YT = Ee()
          , $T = rt()
          , QT = so()
          , Rc = YT.WeakMap;
        Lc.exports = $T(Rc) && /native code/.test(QT(Rc))
    }
    );
    var uo = c((FB,qc)=>{
        var ZT = Zi()
          , JT = Ji()
          , Pc = ZT("keys");
        qc.exports = function(e) {
            return Pc[e] || (Pc[e] = JT(e))
        }
    }
    );
    var En = c((MB,Fc)=>{
        Fc.exports = {}
    }
    );
    var Uc = c((DB,Vc)=>{
        var eI = Nc(), kc = Ee(), co = je(), tI = Bt(), rI = hn(), lo = yt(), fo = vn(), nI = uo(), iI = En(), Mc = "Object already initialized", go = kc.TypeError, oI = kc.WeakMap, yn, Ar, mn, aI = function(e) {
            return mn(e) ? Ar(e) : yn(e, {})
        }, sI = function(e) {
            return function(t) {
                var r;
                if (!tI(t) || (r = Ar(t)).type !== e)
                    throw go("Incompatible receiver, " + e + " required");
                return r
            }
        };
        eI || fo.state ? (mt = fo.state || (fo.state = new oI),
        Dc = co(mt.get),
        po = co(mt.has),
        Gc = co(mt.set),
        yn = function(e, t) {
            if (po(mt, e))
                throw new go(Mc);
            return t.facade = e,
            Gc(mt, e, t),
            t
        }
        ,
        Ar = function(e) {
            return Dc(mt, e) || {}
        }
        ,
        mn = function(e) {
            return po(mt, e)
        }
        ) : (Lt = nI("state"),
        iI[Lt] = !0,
        yn = function(e, t) {
            if (lo(e, Lt))
                throw new go(Mc);
            return t.facade = e,
            rI(e, Lt, t),
            t
        }
        ,
        Ar = function(e) {
            return lo(e, Lt) ? e[Lt] : {}
        }
        ,
        mn = function(e) {
            return lo(e, Lt)
        }
        );
        var mt, Dc, po, Gc, Lt;
        Vc.exports = {
            set: yn,
            get: Ar,
            has: mn,
            enforce: aI,
            getterFor: sI
        }
    }
    );
    var Wc = c((GB,Hc)=>{
        var vo = Ct()
          , uI = yt()
          , Bc = Function.prototype
          , cI = vo && Object.getOwnPropertyDescriptor
          , ho = uI(Bc, "name")
          , lI = ho && function() {}
        .name === "something"
          , fI = ho && (!vo || vo && cI(Bc, "name").configurable);
        Hc.exports = {
            EXISTS: ho,
            PROPER: lI,
            CONFIGURABLE: fI
        }
    }
    );
    var Yc = c((kB,Kc)=>{
        var dI = Ee()
          , Xc = rt()
          , pI = yt()
          , jc = hn()
          , gI = gn()
          , vI = so()
          , zc = Uc()
          , hI = Wc().CONFIGURABLE
          , EI = zc.get
          , yI = zc.enforce
          , mI = String(String).split("String");
        (Kc.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1, o = n ? !!n.enumerable : !1, a = n ? !!n.noTargetGet : !1, s = n && n.name !== void 0 ? n.name : t, u;
            if (Xc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!pI(r, "name") || hI && r.name !== s) && jc(r, "name", s),
            u = yI(r),
            u.source || (u.source = mI.join(typeof s == "string" ? s : ""))),
            e === dI) {
                o ? e[t] = r : gI(t, r);
                return
            } else
                i ? !a && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : jc(e, t, r)
        }
        )(Function.prototype, "toString", function() {
            return Xc(this) && EI(this).source || vI(this)
        })
    }
    );
    var Eo = c((VB,$c)=>{
        var _I = Math.ceil
          , bI = Math.floor;
        $c.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? bI : _I)(t)
        }
    }
    );
    var Zc = c((UB,Qc)=>{
        var TI = Eo()
          , II = Math.max
          , OI = Math.min;
        Qc.exports = function(e, t) {
            var r = TI(e);
            return r < 0 ? II(r + t, 0) : OI(r, t)
        }
    }
    );
    var el = c((BB,Jc)=>{
        var AI = Eo()
          , wI = Math.min;
        Jc.exports = function(e) {
            return e > 0 ? wI(AI(e), 9007199254740991) : 0
        }
    }
    );
    var rl = c((HB,tl)=>{
        var SI = el();
        tl.exports = function(e) {
            return SI(e.length)
        }
    }
    );
    var yo = c((WB,il)=>{
        var xI = br()
          , CI = Zc()
          , RI = rl()
          , nl = function(e) {
            return function(t, r, n) {
                var i = xI(t), o = RI(i), a = CI(n, o), s;
                if (e && r != r) {
                    for (; o > a; )
                        if (s = i[a++],
                        s != s)
                            return !0
                } else
                    for (; o > a; a++)
                        if ((e || a in i) && i[a] === r)
                            return e || a || 0;
                return !e && -1
            }
        };
        il.exports = {
            includes: nl(!0),
            indexOf: nl(!1)
        }
    }
    );
    var _o = c((XB,al)=>{
        var LI = je()
          , mo = yt()
          , NI = br()
          , PI = yo().indexOf
          , qI = En()
          , ol = LI([].push);
        al.exports = function(e, t) {
            var r = NI(e), n = 0, i = [], o;
            for (o in r)
                !mo(qI, o) && mo(r, o) && ol(i, o);
            for (; t.length > n; )
                mo(r, o = t[n++]) && (~PI(i, o) || ol(i, o));
            return i
        }
    }
    );
    var _n = c((jB,sl)=>{
        sl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    );
    var cl = c(ul=>{
        var FI = _o()
          , MI = _n()
          , DI = MI.concat("length", "prototype");
        ul.f = Object.getOwnPropertyNames || function(t) {
            return FI(t, DI)
        }
    }
    );
    var fl = c(ll=>{
        ll.f = Object.getOwnPropertySymbols
    }
    );
    var pl = c((YB,dl)=>{
        var GI = Tr()
          , kI = je()
          , VI = cl()
          , UI = fl()
          , BI = Ir()
          , HI = kI([].concat);
        dl.exports = GI("Reflect", "ownKeys") || function(t) {
            var r = VI.f(BI(t))
              , n = UI.f;
            return n ? HI(r, n(t)) : r
        }
    }
    );
    var vl = c(($B,gl)=>{
        var WI = yt()
          , XI = pl()
          , jI = oo()
          , zI = Or();
        gl.exports = function(e, t) {
            for (var r = XI(t), n = zI.f, i = jI.f, o = 0; o < r.length; o++) {
                var a = r[o];
                WI(e, a) || n(e, a, i(t, a))
            }
        }
    }
    );
    var El = c((QB,hl)=>{
        var KI = Ut()
          , YI = rt()
          , $I = /#|\.prototype\./
          , wr = function(e, t) {
            var r = ZI[QI(e)];
            return r == e0 ? !0 : r == JI ? !1 : YI(t) ? KI(t) : !!t
        }
          , QI = wr.normalize = function(e) {
            return String(e).replace($I, ".").toLowerCase()
        }
          , ZI = wr.data = {}
          , JI = wr.NATIVE = "N"
          , e0 = wr.POLYFILL = "P";
        hl.exports = wr
    }
    );
    var ml = c((ZB,yl)=>{
        var bo = Ee()
          , t0 = oo().f
          , r0 = hn()
          , n0 = Yc()
          , i0 = gn()
          , o0 = vl()
          , a0 = El();
        yl.exports = function(e, t) {
            var r = e.target, n = e.global, i = e.stat, o, a, s, u, f, E;
            if (n ? a = bo : i ? a = bo[r] || i0(r, {}) : a = (bo[r] || {}).prototype,
            a)
                for (s in t) {
                    if (f = t[s],
                    e.noTargetGet ? (E = t0(a, s),
                    u = E && E.value) : u = a[s],
                    o = a0(n ? s : r + (i ? "." : "#") + s, e.forced),
                    !o && u !== void 0) {
                        if (typeof f == typeof u)
                            continue;
                        o0(f, u)
                    }
                    (e.sham || u && u.sham) && r0(f, "sham", !0),
                    n0(a, s, f, e)
                }
        }
    }
    );
    var bl = c((JB,_l)=>{
        var s0 = _o()
          , u0 = _n();
        _l.exports = Object.keys || function(t) {
            return s0(t, u0)
        }
    }
    );
    var Il = c((e5,Tl)=>{
        var c0 = Ct()
          , l0 = Or()
          , f0 = Ir()
          , d0 = br()
          , p0 = bl();
        Tl.exports = c0 ? Object.defineProperties : function(t, r) {
            f0(t);
            for (var n = d0(r), i = p0(r), o = i.length, a = 0, s; o > a; )
                l0.f(t, s = i[a++], n[s]);
            return t
        }
    }
    );
    var Al = c((t5,Ol)=>{
        var g0 = Tr();
        Ol.exports = g0("document", "documentElement")
    }
    );
    var Pl = c((r5,Nl)=>{
        var v0 = Ir(), h0 = Il(), wl = _n(), E0 = En(), y0 = Al(), m0 = no(), _0 = uo(), Sl = ">", xl = "<", Io = "prototype", Oo = "script", Rl = _0("IE_PROTO"), To = function() {}, Ll = function(e) {
            return xl + Oo + Sl + e + xl + "/" + Oo + Sl
        }, Cl = function(e) {
            e.write(Ll("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }, b0 = function() {
            var e = m0("iframe"), t = "java" + Oo + ":", r;
            return e.style.display = "none",
            y0.appendChild(e),
            e.src = String(t),
            r = e.contentWindow.document,
            r.open(),
            r.write(Ll("document.F=Object")),
            r.close(),
            r.F
        }, bn, Tn = function() {
            try {
                bn = new ActiveXObject("htmlfile")
            } catch {}
            Tn = typeof document < "u" ? document.domain && bn ? Cl(bn) : b0() : Cl(bn);
            for (var e = wl.length; e--; )
                delete Tn[Io][wl[e]];
            return Tn()
        };
        E0[Rl] = !0;
        Nl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (To[Io] = v0(t),
            n = new To,
            To[Io] = null,
            n[Rl] = t) : n = Tn(),
            r === void 0 ? n : h0(n, r)
        }
    }
    );
    var Fl = c((n5,ql)=>{
        var T0 = eo()
          , I0 = Pl()
          , O0 = Or()
          , Ao = T0("unscopables")
          , wo = Array.prototype;
        wo[Ao] == null && O0.f(wo, Ao, {
            configurable: !0,
            value: I0(null)
        });
        ql.exports = function(e) {
            wo[Ao][e] = !0
        }
    }
    );
    var Ml = c(()=>{
        "use strict";
        var A0 = ml()
          , w0 = yo().includes
          , S0 = Fl();
        A0({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return w0(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        S0("includes")
    }
    );
    var Gl = c((a5,Dl)=>{
        var x0 = Ee()
          , C0 = je();
        Dl.exports = function(e, t) {
            return C0(x0[e].prototype[t])
        }
    }
    );
    var Vl = c((s5,kl)=>{
        Ml();
        var R0 = Gl();
        kl.exports = R0("Array", "includes")
    }
    );
    var Bl = c((u5,Ul)=>{
        var L0 = Vl();
        Ul.exports = L0
    }
    );
    var Wl = c((c5,Hl)=>{
        var N0 = Bl();
        Hl.exports = N0
    }
    );
    var So = c((l5,Xl)=>{
        var P0 = typeof global == "object" && global && global.Object === Object && global;
        Xl.exports = P0
    }
    );
    var Ke = c((f5,jl)=>{
        var q0 = So()
          , F0 = typeof self == "object" && self && self.Object === Object && self
          , M0 = q0 || F0 || Function("return this")();
        jl.exports = M0
    }
    );
    var Wt = c((d5,zl)=>{
        var D0 = Ke()
          , G0 = D0.Symbol;
        zl.exports = G0
    }
    );
    var Ql = c((p5,$l)=>{
        var Kl = Wt()
          , Yl = Object.prototype
          , k0 = Yl.hasOwnProperty
          , V0 = Yl.toString
          , Sr = Kl ? Kl.toStringTag : void 0;
        function U0(e) {
            var t = k0.call(e, Sr)
              , r = e[Sr];
            try {
                e[Sr] = void 0;
                var n = !0
            } catch {}
            var i = V0.call(e);
            return n && (t ? e[Sr] = r : delete e[Sr]),
            i
        }
        $l.exports = U0
    }
    );
    var Jl = c((g5,Zl)=>{
        var B0 = Object.prototype
          , H0 = B0.toString;
        function W0(e) {
            return H0.call(e)
        }
        Zl.exports = W0
    }
    );
    var _t = c((v5,rf)=>{
        var ef = Wt()
          , X0 = Ql()
          , j0 = Jl()
          , z0 = "[object Null]"
          , K0 = "[object Undefined]"
          , tf = ef ? ef.toStringTag : void 0;
        function Y0(e) {
            return e == null ? e === void 0 ? K0 : z0 : tf && tf in Object(e) ? X0(e) : j0(e)
        }
        rf.exports = Y0
    }
    );
    var xo = c((h5,nf)=>{
        function $0(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        nf.exports = $0
    }
    );
    var Co = c((E5,of)=>{
        var Q0 = xo()
          , Z0 = Q0(Object.getPrototypeOf, Object);
        of.exports = Z0
    }
    );
    var ft = c((y5,af)=>{
        function J0(e) {
            return e != null && typeof e == "object"
        }
        af.exports = J0
    }
    );
    var Ro = c((m5,uf)=>{
        var eO = _t()
          , tO = Co()
          , rO = ft()
          , nO = "[object Object]"
          , iO = Function.prototype
          , oO = Object.prototype
          , sf = iO.toString
          , aO = oO.hasOwnProperty
          , sO = sf.call(Object);
        function uO(e) {
            if (!rO(e) || eO(e) != nO)
                return !1;
            var t = tO(e);
            if (t === null)
                return !0;
            var r = aO.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && sf.call(r) == sO
        }
        uf.exports = uO
    }
    );
    var cf = c(Lo=>{
        "use strict";
        Object.defineProperty(Lo, "__esModule", {
            value: !0
        });
        Lo.default = cO;
        function cO(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var lf = c((Po,No)=>{
        "use strict";
        Object.defineProperty(Po, "__esModule", {
            value: !0
        });
        var lO = cf()
          , fO = dO(lO);
        function dO(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Xt;
        typeof self < "u" ? Xt = self : typeof window < "u" ? Xt = window : typeof global < "u" ? Xt = global : typeof No < "u" ? Xt = No : Xt = Function("return this")();
        var pO = (0,
        fO.default)(Xt);
        Po.default = pO
    }
    );
    var qo = c(xr=>{
        "use strict";
        xr.__esModule = !0;
        xr.ActionTypes = void 0;
        xr.default = gf;
        var gO = Ro()
          , vO = pf(gO)
          , hO = lf()
          , ff = pf(hO);
        function pf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var df = xr.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function gf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(gf)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var i = e
              , o = t
              , a = []
              , s = a
              , u = !1;
            function f() {
                s === a && (s = a.slice())
            }
            function E() {
                return o
            }
            function p(_) {
                if (typeof _ != "function")
                    throw new Error("Expected listener to be a function.");
                var O = !0;
                return f(),
                s.push(_),
                function() {
                    if (O) {
                        O = !1,
                        f();
                        var C = s.indexOf(_);
                        s.splice(C, 1)
                    }
                }
            }
            function d(_) {
                if (!(0,
                vO.default)(_))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof _.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0,
                    o = i(o, _)
                } finally {
                    u = !1
                }
                for (var O = a = s, m = 0; m < O.length; m++)
                    O[m]();
                return _
            }
            function v(_) {
                if (typeof _ != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                i = _,
                d({
                    type: df.INIT
                })
            }
            function b() {
                var _, O = p;
                return _ = {
                    subscribe: function(C) {
                        if (typeof C != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function A() {
                            C.next && C.next(E())
                        }
                        A();
                        var N = O(A);
                        return {
                            unsubscribe: N
                        }
                    }
                },
                _[ff.default] = function() {
                    return this
                }
                ,
                _
            }
            return d({
                type: df.INIT
            }),
            n = {
                dispatch: d,
                subscribe: p,
                getState: E,
                replaceReducer: v
            },
            n[ff.default] = b,
            n
        }
    }
    );
    var Mo = c(Fo=>{
        "use strict";
        Fo.__esModule = !0;
        Fo.default = EO;
        function EO(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var Ef = c(Do=>{
        "use strict";
        Do.__esModule = !0;
        Do.default = TO;
        var vf = qo()
          , yO = Ro()
          , I5 = hf(yO)
          , mO = Mo()
          , O5 = hf(mO);
        function hf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function _O(e, t) {
            var r = t && t.type
              , n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function bO(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , n = r(void 0, {
                    type: vf.ActionTypes.INIT
                });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: i
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + vf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function TO(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1)
                var a;
            var s;
            try {
                bO(r)
            } catch (u) {
                s = u
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , E = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var p;
                for (var d = !1, v = {}, b = 0; b < o.length; b++) {
                    var _ = o[b]
                      , O = r[_]
                      , m = f[_]
                      , C = O(m, E);
                    if (typeof C > "u") {
                        var A = _O(_, E);
                        throw new Error(A)
                    }
                    v[_] = C,
                    d = d || C !== m
                }
                return d ? v : f
            }
        }
    }
    );
    var mf = c(Go=>{
        "use strict";
        Go.__esModule = !0;
        Go.default = IO;
        function yf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function IO(e, t) {
            if (typeof e == "function")
                return yf(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i]
                  , a = e[o];
                typeof a == "function" && (n[o] = yf(a, t))
            }
            return n
        }
    }
    );
    var Vo = c(ko=>{
        "use strict";
        ko.__esModule = !0;
        ko.default = OO;
        function OO() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function(o) {
                    return o
                }
                ;
            if (t.length === 1)
                return t[0];
            var n = t[t.length - 1]
              , i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    }
    );
    var _f = c(Uo=>{
        "use strict";
        Uo.__esModule = !0;
        var AO = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ;
        Uo.default = CO;
        var wO = Vo()
          , SO = xO(wO);
        function xO(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function CO() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var s = n(i, o, a)
                      , u = s.dispatch
                      , f = []
                      , E = {
                        getState: s.getState,
                        dispatch: function(d) {
                            return u(d)
                        }
                    };
                    return f = t.map(function(p) {
                        return p(E)
                    }),
                    u = SO.default.apply(void 0, f)(s.dispatch),
                    AO({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    }
    );
    var Bo = c(Ue=>{
        "use strict";
        Ue.__esModule = !0;
        Ue.compose = Ue.applyMiddleware = Ue.bindActionCreators = Ue.combineReducers = Ue.createStore = void 0;
        var RO = qo()
          , LO = jt(RO)
          , NO = Ef()
          , PO = jt(NO)
          , qO = mf()
          , FO = jt(qO)
          , MO = _f()
          , DO = jt(MO)
          , GO = Vo()
          , kO = jt(GO)
          , VO = Mo()
          , C5 = jt(VO);
        function jt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ue.createStore = LO.default;
        Ue.combineReducers = PO.default;
        Ue.bindActionCreators = FO.default;
        Ue.applyMiddleware = DO.default;
        Ue.compose = kO.default
    }
    );
    var Ye, Ho, nt, UO, BO, In, HO, Wo = he(()=>{
        "use strict";
        Ye = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        },
        Ho = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        },
        nt = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        },
        UO = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        },
        BO = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        In = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        HO = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    }
    );
    var Me, WO, On = he(()=>{
        "use strict";
        Me = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        WO = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    }
    );
    var XO, bf = he(()=>{
        "use strict";
        XO = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    }
    );
    var jO, zO, KO, YO, $O, QO, ZO, Xo, Tf = he(()=>{
        "use strict";
        On();
        ({TRANSFORM_MOVE: jO, TRANSFORM_SCALE: zO, TRANSFORM_ROTATE: KO, TRANSFORM_SKEW: YO, STYLE_SIZE: $O, STYLE_FILTER: QO, STYLE_FONT_VARIATION: ZO} = Me),
        Xo = {
            [jO]: !0,
            [zO]: !0,
            [KO]: !0,
            [YO]: !0,
            [$O]: !0,
            [QO]: !0,
            [ZO]: !0
        }
    }
    );
    var Te = {};
    Fe(Te, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: ()=>vA,
        IX2_ANIMATION_FRAME_CHANGED: ()=>cA,
        IX2_CLEAR_REQUESTED: ()=>aA,
        IX2_ELEMENT_STATE_CHANGED: ()=>gA,
        IX2_EVENT_LISTENER_ADDED: ()=>sA,
        IX2_EVENT_STATE_CHANGED: ()=>uA,
        IX2_INSTANCE_ADDED: ()=>fA,
        IX2_INSTANCE_REMOVED: ()=>pA,
        IX2_INSTANCE_STARTED: ()=>dA,
        IX2_MEDIA_QUERIES_DEFINED: ()=>EA,
        IX2_PARAMETER_CHANGED: ()=>lA,
        IX2_PLAYBACK_REQUESTED: ()=>iA,
        IX2_PREVIEW_REQUESTED: ()=>nA,
        IX2_RAW_DATA_IMPORTED: ()=>JO,
        IX2_SESSION_INITIALIZED: ()=>eA,
        IX2_SESSION_STARTED: ()=>tA,
        IX2_SESSION_STOPPED: ()=>rA,
        IX2_STOP_REQUESTED: ()=>oA,
        IX2_TEST_FRAME_RENDERED: ()=>yA,
        IX2_VIEWPORT_WIDTH_CHANGED: ()=>hA
    });
    var JO, eA, tA, rA, nA, iA, oA, aA, sA, uA, cA, lA, fA, dA, pA, gA, vA, hA, EA, yA, If = he(()=>{
        "use strict";
        JO = "IX2_RAW_DATA_IMPORTED",
        eA = "IX2_SESSION_INITIALIZED",
        tA = "IX2_SESSION_STARTED",
        rA = "IX2_SESSION_STOPPED",
        nA = "IX2_PREVIEW_REQUESTED",
        iA = "IX2_PLAYBACK_REQUESTED",
        oA = "IX2_STOP_REQUESTED",
        aA = "IX2_CLEAR_REQUESTED",
        sA = "IX2_EVENT_LISTENER_ADDED",
        uA = "IX2_EVENT_STATE_CHANGED",
        cA = "IX2_ANIMATION_FRAME_CHANGED",
        lA = "IX2_PARAMETER_CHANGED",
        fA = "IX2_INSTANCE_ADDED",
        dA = "IX2_INSTANCE_STARTED",
        pA = "IX2_INSTANCE_REMOVED",
        gA = "IX2_ELEMENT_STATE_CHANGED",
        vA = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        hA = "IX2_VIEWPORT_WIDTH_CHANGED",
        EA = "IX2_MEDIA_QUERIES_DEFINED",
        yA = "IX2_TEST_FRAME_RENDERED"
    }
    );
    var xe = {};
    Fe(xe, {
        ABSTRACT_NODE: ()=>hw,
        AUTO: ()=>ow,
        BACKGROUND: ()=>JA,
        BACKGROUND_COLOR: ()=>ZA,
        BAR_DELIMITER: ()=>uw,
        BORDER_COLOR: ()=>ew,
        BOUNDARY_SELECTOR: ()=>IA,
        CHILDREN: ()=>cw,
        COLON_DELIMITER: ()=>sw,
        COLOR: ()=>tw,
        COMMA_DELIMITER: ()=>aw,
        CONFIG_UNIT: ()=>LA,
        CONFIG_VALUE: ()=>SA,
        CONFIG_X_UNIT: ()=>xA,
        CONFIG_X_VALUE: ()=>OA,
        CONFIG_Y_UNIT: ()=>CA,
        CONFIG_Y_VALUE: ()=>AA,
        CONFIG_Z_UNIT: ()=>RA,
        CONFIG_Z_VALUE: ()=>wA,
        DISPLAY: ()=>rw,
        FILTER: ()=>KA,
        FLEX: ()=>nw,
        FONT_VARIATION_SETTINGS: ()=>YA,
        HEIGHT: ()=>QA,
        HTML_ELEMENT: ()=>gw,
        IMMEDIATE_CHILDREN: ()=>lw,
        IX2_ID_DELIMITER: ()=>mA,
        OPACITY: ()=>zA,
        PARENT: ()=>dw,
        PLAIN_OBJECT: ()=>vw,
        PRESERVE_3D: ()=>pw,
        RENDER_GENERAL: ()=>yw,
        RENDER_PLUGIN: ()=>_w,
        RENDER_STYLE: ()=>mw,
        RENDER_TRANSFORM: ()=>Ew,
        ROTATE_X: ()=>UA,
        ROTATE_Y: ()=>BA,
        ROTATE_Z: ()=>HA,
        SCALE_3D: ()=>VA,
        SCALE_X: ()=>DA,
        SCALE_Y: ()=>GA,
        SCALE_Z: ()=>kA,
        SIBLINGS: ()=>fw,
        SKEW: ()=>WA,
        SKEW_X: ()=>XA,
        SKEW_Y: ()=>jA,
        TRANSFORM: ()=>NA,
        TRANSLATE_3D: ()=>MA,
        TRANSLATE_X: ()=>PA,
        TRANSLATE_Y: ()=>qA,
        TRANSLATE_Z: ()=>FA,
        WF_PAGE: ()=>_A,
        WIDTH: ()=>$A,
        WILL_CHANGE: ()=>iw,
        W_MOD_IX: ()=>TA,
        W_MOD_JS: ()=>bA
    });
    var mA, _A, bA, TA, IA, OA, AA, wA, SA, xA, CA, RA, LA, NA, PA, qA, FA, MA, DA, GA, kA, VA, UA, BA, HA, WA, XA, jA, zA, KA, YA, $A, QA, ZA, JA, ew, tw, rw, nw, iw, ow, aw, sw, uw, cw, lw, fw, dw, pw, gw, vw, hw, Ew, yw, mw, _w, Of = he(()=>{
        "use strict";
        mA = "|",
        _A = "data-wf-page",
        bA = "w-mod-js",
        TA = "w-mod-ix",
        IA = ".w-dyn-item",
        OA = "xValue",
        AA = "yValue",
        wA = "zValue",
        SA = "value",
        xA = "xUnit",
        CA = "yUnit",
        RA = "zUnit",
        LA = "unit",
        NA = "transform",
        PA = "translateX",
        qA = "translateY",
        FA = "translateZ",
        MA = "translate3d",
        DA = "scaleX",
        GA = "scaleY",
        kA = "scaleZ",
        VA = "scale3d",
        UA = "rotateX",
        BA = "rotateY",
        HA = "rotateZ",
        WA = "skew",
        XA = "skewX",
        jA = "skewY",
        zA = "opacity",
        KA = "filter",
        YA = "font-variation-settings",
        $A = "width",
        QA = "height",
        ZA = "backgroundColor",
        JA = "background",
        ew = "borderColor",
        tw = "color",
        rw = "display",
        nw = "flex",
        iw = "willChange",
        ow = "AUTO",
        aw = ",",
        sw = ":",
        uw = "|",
        cw = "CHILDREN",
        lw = "IMMEDIATE_CHILDREN",
        fw = "SIBLINGS",
        dw = "PARENT",
        pw = "preserve-3d",
        gw = "HTML_ELEMENT",
        vw = "PLAIN_OBJECT",
        hw = "ABSTRACT_NODE",
        Ew = "RENDER_TRANSFORM",
        yw = "RENDER_GENERAL",
        mw = "RENDER_STYLE",
        _w = "RENDER_PLUGIN"
    }
    );
    var Af = {};
    Fe(Af, {
        ActionAppliesTo: ()=>WO,
        ActionTypeConsts: ()=>Me,
        EventAppliesTo: ()=>Ho,
        EventBasedOn: ()=>nt,
        EventContinuousMouseAxes: ()=>UO,
        EventLimitAffectedElements: ()=>BO,
        EventTypeConsts: ()=>Ye,
        IX2EngineActionTypes: ()=>Te,
        IX2EngineConstants: ()=>xe,
        InteractionTypeConsts: ()=>XO,
        QuickEffectDirectionConsts: ()=>HO,
        QuickEffectIds: ()=>In,
        ReducedMotionTypes: ()=>Xo
    });
    var De = he(()=>{
        "use strict";
        Wo();
        On();
        bf();
        Tf();
        If();
        Of();
        On();
        Wo()
    }
    );
    var bw, wf, Sf = he(()=>{
        "use strict";
        De();
        ({IX2_RAW_DATA_IMPORTED: bw} = Te),
        wf = (e=Object.freeze({}),t)=>{
            switch (t.type) {
            case bw:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
    }
    );
    var zt = c(me=>{
        "use strict";
        Object.defineProperty(me, "__esModule", {
            value: !0
        });
        var Tw = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        me.clone = wn;
        me.addLast = Rf;
        me.addFirst = Lf;
        me.removeLast = Nf;
        me.removeFirst = Pf;
        me.insert = qf;
        me.removeAt = Ff;
        me.replaceAt = Mf;
        me.getIn = Sn;
        me.set = xn;
        me.setIn = Cn;
        me.update = Gf;
        me.updateIn = kf;
        me.merge = Vf;
        me.mergeDeep = Uf;
        me.mergeIn = Bf;
        me.omit = Hf;
        me.addDefaults = Wf;
        var xf = "INVALID_ARGS";
        function Cf(e) {
            throw new Error(e)
        }
        function jo(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var Iw = {}.hasOwnProperty;
        function wn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = jo(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }
        function Ge(e, t, r) {
            var n = r;
            n == null && Cf(xf);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++)
                a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var f = a[u];
                if (f != null) {
                    var E = jo(f);
                    if (E.length)
                        for (var p = 0; p <= E.length; p++) {
                            var d = E[p];
                            if (!(e && n[d] !== void 0)) {
                                var v = f[d];
                                t && An(n[d]) && An(v) && (v = Ge(e, t, n[d], v)),
                                !(v === void 0 || v === n[d]) && (i || (i = !0,
                                n = wn(n)),
                                n[d] = v)
                            }
                        }
                }
            }
            return n
        }
        function An(e) {
            var t = typeof e > "u" ? "undefined" : Tw(e);
            return e != null && (t === "object" || t === "function")
        }
        function Rf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function Lf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function Nf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Pf(e) {
            return e.length ? e.slice(1) : e
        }
        function qf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }
        function Ff(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function Mf(e, t, r) {
            if (e[t] === r)
                return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++)
                i[o] = e[o];
            return i[t] = r,
            i
        }
        function Sn(e, t) {
            if (!Array.isArray(t) && Cf(xf),
            e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r?.[i],
                    r === void 0)
                        return r
                }
                return r
            }
        }
        function xn(e, t, r) {
            var n = typeof t == "number" ? [] : {}
              , i = e ?? n;
            if (i[t] === r)
                return i;
            var o = wn(i);
            return o[t] = r,
            o
        }
        function Df(e, t, r, n) {
            var i = void 0
              , o = t[n];
            if (n === t.length - 1)
                i = r;
            else {
                var a = An(e) && An(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Df(a, t, r, n + 1)
            }
            return xn(e, o, i)
        }
        function Cn(e, t, r) {
            return t.length ? Df(e, t, r, 0) : r
        }
        function Gf(e, t, r) {
            var n = e?.[t]
              , i = r(n);
            return xn(e, t, i)
        }
        function kf(e, t, r) {
            var n = Sn(e, t)
              , i = r(n);
            return Cn(e, t, i)
        }
        function Vf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Ge.call.apply(Ge, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Ge(!1, !1, e, t, r, n, i, o)
        }
        function Uf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Ge.call.apply(Ge, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Ge(!1, !0, e, t, r, n, i, o)
        }
        function Bf(e, t, r, n, i, o, a) {
            var s = Sn(e, t);
            s == null && (s = {});
            for (var u = void 0, f = arguments.length, E = Array(f > 7 ? f - 7 : 0), p = 7; p < f; p++)
                E[p - 7] = arguments[p];
            return E.length ? u = Ge.call.apply(Ge, [null, !1, !1, s, r, n, i, o, a].concat(E)) : u = Ge(!1, !1, s, r, n, i, o, a),
            Cn(e, t, u)
        }
        function Hf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (Iw.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n)
                return e;
            for (var o = {}, a = jo(e), s = 0; s < a.length; s++) {
                var u = a[s];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }
        function Wf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Ge.call.apply(Ge, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Ge(!0, !1, e, t, r, n, i, o)
        }
        var Ow = {
            clone: wn,
            addLast: Rf,
            addFirst: Lf,
            removeLast: Nf,
            removeFirst: Pf,
            insert: qf,
            removeAt: Ff,
            replaceAt: Mf,
            getIn: Sn,
            set: xn,
            setIn: Cn,
            update: Gf,
            updateIn: kf,
            merge: Vf,
            mergeDeep: Uf,
            mergeIn: Bf,
            omit: Hf,
            addDefaults: Wf
        };
        me.default = Ow
    }
    );
    var jf, Aw, ww, Sw, xw, Cw, Xf, zf, Kf = he(()=>{
        "use strict";
        De();
        jf = ue(zt()),
        {IX2_PREVIEW_REQUESTED: Aw, IX2_PLAYBACK_REQUESTED: ww, IX2_STOP_REQUESTED: Sw, IX2_CLEAR_REQUESTED: xw} = Te,
        Cw = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        Xf = Object.create(null, {
            [Aw]: {
                value: "preview"
            },
            [ww]: {
                value: "playback"
            },
            [Sw]: {
                value: "stop"
            },
            [xw]: {
                value: "clear"
            }
        }),
        zf = (e=Cw,t)=>{
            if (t.type in Xf) {
                let r = [Xf[t.type]];
                return (0,
                jf.setIn)(e, [r], {
                    ...t.payload
                })
            }
            return e
        }
    }
    );
    var Le, Rw, Lw, Nw, Pw, qw, Fw, Mw, Dw, Gw, kw, Yf, Vw, $f, Qf = he(()=>{
        "use strict";
        De();
        Le = ue(zt()),
        {IX2_SESSION_INITIALIZED: Rw, IX2_SESSION_STARTED: Lw, IX2_TEST_FRAME_RENDERED: Nw, IX2_SESSION_STOPPED: Pw, IX2_EVENT_LISTENER_ADDED: qw, IX2_EVENT_STATE_CHANGED: Fw, IX2_ANIMATION_FRAME_CHANGED: Mw, IX2_ACTION_LIST_PLAYBACK_CHANGED: Dw, IX2_VIEWPORT_WIDTH_CHANGED: Gw, IX2_MEDIA_QUERIES_DEFINED: kw} = Te,
        Yf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        },
        Vw = 20,
        $f = (e=Yf,t)=>{
            switch (t.type) {
            case Rw:
                {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0,
                    Le.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
            case Lw:
                return (0,
                Le.set)(e, "active", !0);
            case Nw:
                {
                    let {payload: {step: r=Vw}} = t;
                    return (0,
                    Le.set)(e, "tick", e.tick + r)
                }
            case Pw:
                return Yf;
            case Mw:
                {
                    let {payload: {now: r}} = t;
                    return (0,
                    Le.set)(e, "tick", r)
                }
            case qw:
                {
                    let r = (0,
                    Le.addLast)(e.eventListeners, t.payload);
                    return (0,
                    Le.set)(e, "eventListeners", r)
                }
            case Fw:
                {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0,
                    Le.setIn)(e, ["eventState", r], n)
                }
            case Dw:
                {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0,
                    Le.setIn)(e, ["playbackState", r], n)
                }
            case Gw:
                {
                    let {width: r, mediaQueries: n} = t.payload
                      , i = n.length
                      , o = null;
                    for (let a = 0; a < i; a++) {
                        let {key: s, min: u, max: f} = n[a];
                        if (r >= u && r <= f) {
                            o = s;
                            break
                        }
                    }
                    return (0,
                    Le.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: o
                    })
                }
            case kw:
                return (0,
                Le.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    }
    );
    var Jf = c((Y5,Zf)=>{
        function Uw() {
            this.__data__ = [],
            this.size = 0
        }
        Zf.exports = Uw
    }
    );
    var Rn = c(($5,ed)=>{
        function Bw(e, t) {
            return e === t || e !== e && t !== t
        }
        ed.exports = Bw
    }
    );
    var Cr = c((Q5,td)=>{
        var Hw = Rn();
        function Ww(e, t) {
            for (var r = e.length; r--; )
                if (Hw(e[r][0], t))
                    return r;
            return -1
        }
        td.exports = Ww
    }
    );
    var nd = c((Z5,rd)=>{
        var Xw = Cr()
          , jw = Array.prototype
          , zw = jw.splice;
        function Kw(e) {
            var t = this.__data__
              , r = Xw(t, e);
            if (r < 0)
                return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : zw.call(t, r, 1),
            --this.size,
            !0
        }
        rd.exports = Kw
    }
    );
    var od = c((J5,id)=>{
        var Yw = Cr();
        function $w(e) {
            var t = this.__data__
              , r = Yw(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        id.exports = $w
    }
    );
    var sd = c((eH,ad)=>{
        var Qw = Cr();
        function Zw(e) {
            return Qw(this.__data__, e) > -1
        }
        ad.exports = Zw
    }
    );
    var cd = c((tH,ud)=>{
        var Jw = Cr();
        function eS(e, t) {
            var r = this.__data__
              , n = Jw(r, e);
            return n < 0 ? (++this.size,
            r.push([e, t])) : r[n][1] = t,
            this
        }
        ud.exports = eS
    }
    );
    var Rr = c((rH,ld)=>{
        var tS = Jf()
          , rS = nd()
          , nS = od()
          , iS = sd()
          , oS = cd();
        function Kt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Kt.prototype.clear = tS;
        Kt.prototype.delete = rS;
        Kt.prototype.get = nS;
        Kt.prototype.has = iS;
        Kt.prototype.set = oS;
        ld.exports = Kt
    }
    );
    var dd = c((nH,fd)=>{
        var aS = Rr();
        function sS() {
            this.__data__ = new aS,
            this.size = 0
        }
        fd.exports = sS
    }
    );
    var gd = c((iH,pd)=>{
        function uS(e) {
            var t = this.__data__
              , r = t.delete(e);
            return this.size = t.size,
            r
        }
        pd.exports = uS
    }
    );
    var hd = c((oH,vd)=>{
        function cS(e) {
            return this.__data__.get(e)
        }
        vd.exports = cS
    }
    );
    var yd = c((aH,Ed)=>{
        function lS(e) {
            return this.__data__.has(e)
        }
        Ed.exports = lS
    }
    );
    var it = c((sH,md)=>{
        function fS(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        md.exports = fS
    }
    );
    var zo = c((uH,_d)=>{
        var dS = _t()
          , pS = it()
          , gS = "[object AsyncFunction]"
          , vS = "[object Function]"
          , hS = "[object GeneratorFunction]"
          , ES = "[object Proxy]";
        function yS(e) {
            if (!pS(e))
                return !1;
            var t = dS(e);
            return t == vS || t == hS || t == gS || t == ES
        }
        _d.exports = yS
    }
    );
    var Td = c((cH,bd)=>{
        var mS = Ke()
          , _S = mS["__core-js_shared__"];
        bd.exports = _S
    }
    );
    var Ad = c((lH,Od)=>{
        var Ko = Td()
          , Id = function() {
            var e = /[^.]+$/.exec(Ko && Ko.keys && Ko.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function bS(e) {
            return !!Id && Id in e
        }
        Od.exports = bS
    }
    );
    var Yo = c((fH,wd)=>{
        var TS = Function.prototype
          , IS = TS.toString;
        function OS(e) {
            if (e != null) {
                try {
                    return IS.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        wd.exports = OS
    }
    );
    var xd = c((dH,Sd)=>{
        var AS = zo()
          , wS = Ad()
          , SS = it()
          , xS = Yo()
          , CS = /[\\^$.*+?()[\]{}|]/g
          , RS = /^\[object .+?Constructor\]$/
          , LS = Function.prototype
          , NS = Object.prototype
          , PS = LS.toString
          , qS = NS.hasOwnProperty
          , FS = RegExp("^" + PS.call(qS).replace(CS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function MS(e) {
            if (!SS(e) || wS(e))
                return !1;
            var t = AS(e) ? FS : RS;
            return t.test(xS(e))
        }
        Sd.exports = MS
    }
    );
    var Rd = c((pH,Cd)=>{
        function DS(e, t) {
            return e?.[t]
        }
        Cd.exports = DS
    }
    );
    var bt = c((gH,Ld)=>{
        var GS = xd()
          , kS = Rd();
        function VS(e, t) {
            var r = kS(e, t);
            return GS(r) ? r : void 0
        }
        Ld.exports = VS
    }
    );
    var Ln = c((vH,Nd)=>{
        var US = bt()
          , BS = Ke()
          , HS = US(BS, "Map");
        Nd.exports = HS
    }
    );
    var Lr = c((hH,Pd)=>{
        var WS = bt()
          , XS = WS(Object, "create");
        Pd.exports = XS
    }
    );
    var Md = c((EH,Fd)=>{
        var qd = Lr();
        function jS() {
            this.__data__ = qd ? qd(null) : {},
            this.size = 0
        }
        Fd.exports = jS
    }
    );
    var Gd = c((yH,Dd)=>{
        function zS(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        Dd.exports = zS
    }
    );
    var Vd = c((mH,kd)=>{
        var KS = Lr()
          , YS = "__lodash_hash_undefined__"
          , $S = Object.prototype
          , QS = $S.hasOwnProperty;
        function ZS(e) {
            var t = this.__data__;
            if (KS) {
                var r = t[e];
                return r === YS ? void 0 : r
            }
            return QS.call(t, e) ? t[e] : void 0
        }
        kd.exports = ZS
    }
    );
    var Bd = c((_H,Ud)=>{
        var JS = Lr()
          , ex = Object.prototype
          , tx = ex.hasOwnProperty;
        function rx(e) {
            var t = this.__data__;
            return JS ? t[e] !== void 0 : tx.call(t, e)
        }
        Ud.exports = rx
    }
    );
    var Wd = c((bH,Hd)=>{
        var nx = Lr()
          , ix = "__lodash_hash_undefined__";
        function ox(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            r[e] = nx && t === void 0 ? ix : t,
            this
        }
        Hd.exports = ox
    }
    );
    var jd = c((TH,Xd)=>{
        var ax = Md()
          , sx = Gd()
          , ux = Vd()
          , cx = Bd()
          , lx = Wd();
        function Yt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Yt.prototype.clear = ax;
        Yt.prototype.delete = sx;
        Yt.prototype.get = ux;
        Yt.prototype.has = cx;
        Yt.prototype.set = lx;
        Xd.exports = Yt
    }
    );
    var Yd = c((IH,Kd)=>{
        var zd = jd()
          , fx = Rr()
          , dx = Ln();
        function px() {
            this.size = 0,
            this.__data__ = {
                hash: new zd,
                map: new (dx || fx),
                string: new zd
            }
        }
        Kd.exports = px
    }
    );
    var Qd = c((OH,$d)=>{
        function gx(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        $d.exports = gx
    }
    );
    var Nr = c((AH,Zd)=>{
        var vx = Qd();
        function hx(e, t) {
            var r = e.__data__;
            return vx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Zd.exports = hx
    }
    );
    var ep = c((wH,Jd)=>{
        var Ex = Nr();
        function yx(e) {
            var t = Ex(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        Jd.exports = yx
    }
    );
    var rp = c((SH,tp)=>{
        var mx = Nr();
        function _x(e) {
            return mx(this, e).get(e)
        }
        tp.exports = _x
    }
    );
    var ip = c((xH,np)=>{
        var bx = Nr();
        function Tx(e) {
            return bx(this, e).has(e)
        }
        np.exports = Tx
    }
    );
    var ap = c((CH,op)=>{
        var Ix = Nr();
        function Ox(e, t) {
            var r = Ix(this, e)
              , n = r.size;
            return r.set(e, t),
            this.size += r.size == n ? 0 : 1,
            this
        }
        op.exports = Ox
    }
    );
    var Nn = c((RH,sp)=>{
        var Ax = Yd()
          , wx = ep()
          , Sx = rp()
          , xx = ip()
          , Cx = ap();
        function $t(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        $t.prototype.clear = Ax;
        $t.prototype.delete = wx;
        $t.prototype.get = Sx;
        $t.prototype.has = xx;
        $t.prototype.set = Cx;
        sp.exports = $t
    }
    );
    var cp = c((LH,up)=>{
        var Rx = Rr()
          , Lx = Ln()
          , Nx = Nn()
          , Px = 200;
        function qx(e, t) {
            var r = this.__data__;
            if (r instanceof Rx) {
                var n = r.__data__;
                if (!Lx || n.length < Px - 1)
                    return n.push([e, t]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new Nx(n)
            }
            return r.set(e, t),
            this.size = r.size,
            this
        }
        up.exports = qx
    }
    );
    var $o = c((NH,lp)=>{
        var Fx = Rr()
          , Mx = dd()
          , Dx = gd()
          , Gx = hd()
          , kx = yd()
          , Vx = cp();
        function Qt(e) {
            var t = this.__data__ = new Fx(e);
            this.size = t.size
        }
        Qt.prototype.clear = Mx;
        Qt.prototype.delete = Dx;
        Qt.prototype.get = Gx;
        Qt.prototype.has = kx;
        Qt.prototype.set = Vx;
        lp.exports = Qt
    }
    );
    var dp = c((PH,fp)=>{
        var Ux = "__lodash_hash_undefined__";
        function Bx(e) {
            return this.__data__.set(e, Ux),
            this
        }
        fp.exports = Bx
    }
    );
    var gp = c((qH,pp)=>{
        function Hx(e) {
            return this.__data__.has(e)
        }
        pp.exports = Hx
    }
    );
    var hp = c((FH,vp)=>{
        var Wx = Nn()
          , Xx = dp()
          , jx = gp();
        function Pn(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.__data__ = new Wx; ++t < r; )
                this.add(e[t])
        }
        Pn.prototype.add = Pn.prototype.push = Xx;
        Pn.prototype.has = jx;
        vp.exports = Pn
    }
    );
    var yp = c((MH,Ep)=>{
        function zx(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e))
                    return !0;
            return !1
        }
        Ep.exports = zx
    }
    );
    var _p = c((DH,mp)=>{
        function Kx(e, t) {
            return e.has(t)
        }
        mp.exports = Kx
    }
    );
    var Qo = c((GH,bp)=>{
        var Yx = hp()
          , $x = yp()
          , Qx = _p()
          , Zx = 1
          , Jx = 2;
        function eC(e, t, r, n, i, o) {
            var a = r & Zx
              , s = e.length
              , u = t.length;
            if (s != u && !(a && u > s))
                return !1;
            var f = o.get(e)
              , E = o.get(t);
            if (f && E)
                return f == t && E == e;
            var p = -1
              , d = !0
              , v = r & Jx ? new Yx : void 0;
            for (o.set(e, t),
            o.set(t, e); ++p < s; ) {
                var b = e[p]
                  , _ = t[p];
                if (n)
                    var O = a ? n(_, b, p, t, e, o) : n(b, _, p, e, t, o);
                if (O !== void 0) {
                    if (O)
                        continue;
                    d = !1;
                    break
                }
                if (v) {
                    if (!$x(t, function(m, C) {
                        if (!Qx(v, C) && (b === m || i(b, m, r, n, o)))
                            return v.push(C)
                    })) {
                        d = !1;
                        break
                    }
                } else if (!(b === _ || i(b, _, r, n, o))) {
                    d = !1;
                    break
                }
            }
            return o.delete(e),
            o.delete(t),
            d
        }
        bp.exports = eC
    }
    );
    var Ip = c((kH,Tp)=>{
        var tC = Ke()
          , rC = tC.Uint8Array;
        Tp.exports = rC
    }
    );
    var Ap = c((VH,Op)=>{
        function nC(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }),
            r
        }
        Op.exports = nC
    }
    );
    var Sp = c((UH,wp)=>{
        function iC(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }),
            r
        }
        wp.exports = iC
    }
    );
    var Np = c((BH,Lp)=>{
        var xp = Wt()
          , Cp = Ip()
          , oC = Rn()
          , aC = Qo()
          , sC = Ap()
          , uC = Sp()
          , cC = 1
          , lC = 2
          , fC = "[object Boolean]"
          , dC = "[object Date]"
          , pC = "[object Error]"
          , gC = "[object Map]"
          , vC = "[object Number]"
          , hC = "[object RegExp]"
          , EC = "[object Set]"
          , yC = "[object String]"
          , mC = "[object Symbol]"
          , _C = "[object ArrayBuffer]"
          , bC = "[object DataView]"
          , Rp = xp ? xp.prototype : void 0
          , Zo = Rp ? Rp.valueOf : void 0;
        function TC(e, t, r, n, i, o, a) {
            switch (r) {
            case bC:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case _C:
                return !(e.byteLength != t.byteLength || !o(new Cp(e), new Cp(t)));
            case fC:
            case dC:
            case vC:
                return oC(+e, +t);
            case pC:
                return e.name == t.name && e.message == t.message;
            case hC:
            case yC:
                return e == t + "";
            case gC:
                var s = sC;
            case EC:
                var u = n & cC;
                if (s || (s = uC),
                e.size != t.size && !u)
                    return !1;
                var f = a.get(e);
                if (f)
                    return f == t;
                n |= lC,
                a.set(e, t);
                var E = aC(s(e), s(t), n, i, o, a);
                return a.delete(e),
                E;
            case mC:
                if (Zo)
                    return Zo.call(e) == Zo.call(t)
            }
            return !1
        }
        Lp.exports = TC
    }
    );
    var qn = c((HH,Pp)=>{
        function IC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n; )
                e[i + r] = t[r];
            return e
        }
        Pp.exports = IC
    }
    );
    var Ie = c((WH,qp)=>{
        var OC = Array.isArray;
        qp.exports = OC
    }
    );
    var Jo = c((XH,Fp)=>{
        var AC = qn()
          , wC = Ie();
        function SC(e, t, r) {
            var n = t(e);
            return wC(e) ? n : AC(n, r(e))
        }
        Fp.exports = SC
    }
    );
    var Dp = c((jH,Mp)=>{
        function xC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        Mp.exports = xC
    }
    );
    var ea = c((zH,Gp)=>{
        function CC() {
            return []
        }
        Gp.exports = CC
    }
    );
    var ta = c((KH,Vp)=>{
        var RC = Dp()
          , LC = ea()
          , NC = Object.prototype
          , PC = NC.propertyIsEnumerable
          , kp = Object.getOwnPropertySymbols
          , qC = kp ? function(e) {
            return e == null ? [] : (e = Object(e),
            RC(kp(e), function(t) {
                return PC.call(e, t)
            }))
        }
        : LC;
        Vp.exports = qC
    }
    );
    var Bp = c((YH,Up)=>{
        function FC(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }
        Up.exports = FC
    }
    );
    var Wp = c(($H,Hp)=>{
        var MC = _t()
          , DC = ft()
          , GC = "[object Arguments]";
        function kC(e) {
            return DC(e) && MC(e) == GC
        }
        Hp.exports = kC
    }
    );
    var Pr = c((QH,zp)=>{
        var Xp = Wp()
          , VC = ft()
          , jp = Object.prototype
          , UC = jp.hasOwnProperty
          , BC = jp.propertyIsEnumerable
          , HC = Xp(function() {
            return arguments
        }()) ? Xp : function(e) {
            return VC(e) && UC.call(e, "callee") && !BC.call(e, "callee")
        }
        ;
        zp.exports = HC
    }
    );
    var Yp = c((ZH,Kp)=>{
        function WC() {
            return !1
        }
        Kp.exports = WC
    }
    );
    var Fn = c((qr,Zt)=>{
        var XC = Ke()
          , jC = Yp()
          , Zp = typeof qr == "object" && qr && !qr.nodeType && qr
          , $p = Zp && typeof Zt == "object" && Zt && !Zt.nodeType && Zt
          , zC = $p && $p.exports === Zp
          , Qp = zC ? XC.Buffer : void 0
          , KC = Qp ? Qp.isBuffer : void 0
          , YC = KC || jC;
        Zt.exports = YC
    }
    );
    var Mn = c((JH,Jp)=>{
        var $C = 9007199254740991
          , QC = /^(?:0|[1-9]\d*)$/;
        function ZC(e, t) {
            var r = typeof e;
            return t = t ?? $C,
            !!t && (r == "number" || r != "symbol" && QC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Jp.exports = ZC
    }
    );
    var Dn = c((eW,eg)=>{
        var JC = 9007199254740991;
        function eR(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= JC
        }
        eg.exports = eR
    }
    );
    var rg = c((tW,tg)=>{
        var tR = _t()
          , rR = Dn()
          , nR = ft()
          , iR = "[object Arguments]"
          , oR = "[object Array]"
          , aR = "[object Boolean]"
          , sR = "[object Date]"
          , uR = "[object Error]"
          , cR = "[object Function]"
          , lR = "[object Map]"
          , fR = "[object Number]"
          , dR = "[object Object]"
          , pR = "[object RegExp]"
          , gR = "[object Set]"
          , vR = "[object String]"
          , hR = "[object WeakMap]"
          , ER = "[object ArrayBuffer]"
          , yR = "[object DataView]"
          , mR = "[object Float32Array]"
          , _R = "[object Float64Array]"
          , bR = "[object Int8Array]"
          , TR = "[object Int16Array]"
          , IR = "[object Int32Array]"
          , OR = "[object Uint8Array]"
          , AR = "[object Uint8ClampedArray]"
          , wR = "[object Uint16Array]"
          , SR = "[object Uint32Array]"
          , ve = {};
        ve[mR] = ve[_R] = ve[bR] = ve[TR] = ve[IR] = ve[OR] = ve[AR] = ve[wR] = ve[SR] = !0;
        ve[iR] = ve[oR] = ve[ER] = ve[aR] = ve[yR] = ve[sR] = ve[uR] = ve[cR] = ve[lR] = ve[fR] = ve[dR] = ve[pR] = ve[gR] = ve[vR] = ve[hR] = !1;
        function xR(e) {
            return nR(e) && rR(e.length) && !!ve[tR(e)]
        }
        tg.exports = xR
    }
    );
    var ig = c((rW,ng)=>{
        function CR(e) {
            return function(t) {
                return e(t)
            }
        }
        ng.exports = CR
    }
    );
    var ag = c((Fr,Jt)=>{
        var RR = So()
          , og = typeof Fr == "object" && Fr && !Fr.nodeType && Fr
          , Mr = og && typeof Jt == "object" && Jt && !Jt.nodeType && Jt
          , LR = Mr && Mr.exports === og
          , ra = LR && RR.process
          , NR = function() {
            try {
                var e = Mr && Mr.require && Mr.require("util").types;
                return e || ra && ra.binding && ra.binding("util")
            } catch {}
        }();
        Jt.exports = NR
    }
    );
    var Gn = c((nW,cg)=>{
        var PR = rg()
          , qR = ig()
          , sg = ag()
          , ug = sg && sg.isTypedArray
          , FR = ug ? qR(ug) : PR;
        cg.exports = FR
    }
    );
    var na = c((iW,lg)=>{
        var MR = Bp()
          , DR = Pr()
          , GR = Ie()
          , kR = Fn()
          , VR = Mn()
          , UR = Gn()
          , BR = Object.prototype
          , HR = BR.hasOwnProperty;
        function WR(e, t) {
            var r = GR(e)
              , n = !r && DR(e)
              , i = !r && !n && kR(e)
              , o = !r && !n && !i && UR(e)
              , a = r || n || i || o
              , s = a ? MR(e.length, String) : []
              , u = s.length;
            for (var f in e)
                (t || HR.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || VR(f, u))) && s.push(f);
            return s
        }
        lg.exports = WR
    }
    );
    var kn = c((oW,fg)=>{
        var XR = Object.prototype;
        function jR(e) {
            var t = e && e.constructor
              , r = typeof t == "function" && t.prototype || XR;
            return e === r
        }
        fg.exports = jR
    }
    );
    var pg = c((aW,dg)=>{
        var zR = xo()
          , KR = zR(Object.keys, Object);
        dg.exports = KR
    }
    );
    var Vn = c((sW,gg)=>{
        var YR = kn()
          , $R = pg()
          , QR = Object.prototype
          , ZR = QR.hasOwnProperty;
        function JR(e) {
            if (!YR(e))
                return $R(e);
            var t = [];
            for (var r in Object(e))
                ZR.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        gg.exports = JR
    }
    );
    var Nt = c((uW,vg)=>{
        var eL = zo()
          , tL = Dn();
        function rL(e) {
            return e != null && tL(e.length) && !eL(e)
        }
        vg.exports = rL
    }
    );
    var Dr = c((cW,hg)=>{
        var nL = na()
          , iL = Vn()
          , oL = Nt();
        function aL(e) {
            return oL(e) ? nL(e) : iL(e)
        }
        hg.exports = aL
    }
    );
    var yg = c((lW,Eg)=>{
        var sL = Jo()
          , uL = ta()
          , cL = Dr();
        function lL(e) {
            return sL(e, cL, uL)
        }
        Eg.exports = lL
    }
    );
    var bg = c((fW,_g)=>{
        var mg = yg()
          , fL = 1
          , dL = Object.prototype
          , pL = dL.hasOwnProperty;
        function gL(e, t, r, n, i, o) {
            var a = r & fL
              , s = mg(e)
              , u = s.length
              , f = mg(t)
              , E = f.length;
            if (u != E && !a)
                return !1;
            for (var p = u; p--; ) {
                var d = s[p];
                if (!(a ? d in t : pL.call(t, d)))
                    return !1
            }
            var v = o.get(e)
              , b = o.get(t);
            if (v && b)
                return v == t && b == e;
            var _ = !0;
            o.set(e, t),
            o.set(t, e);
            for (var O = a; ++p < u; ) {
                d = s[p];
                var m = e[d]
                  , C = t[d];
                if (n)
                    var A = a ? n(C, m, d, t, e, o) : n(m, C, d, e, t, o);
                if (!(A === void 0 ? m === C || i(m, C, r, n, o) : A)) {
                    _ = !1;
                    break
                }
                O || (O = d == "constructor")
            }
            if (_ && !O) {
                var N = e.constructor
                  , P = t.constructor;
                N != P && "constructor"in e && "constructor"in t && !(typeof N == "function" && N instanceof N && typeof P == "function" && P instanceof P) && (_ = !1)
            }
            return o.delete(e),
            o.delete(t),
            _
        }
        _g.exports = gL
    }
    );
    var Ig = c((dW,Tg)=>{
        var vL = bt()
          , hL = Ke()
          , EL = vL(hL, "DataView");
        Tg.exports = EL
    }
    );
    var Ag = c((pW,Og)=>{
        var yL = bt()
          , mL = Ke()
          , _L = yL(mL, "Promise");
        Og.exports = _L
    }
    );
    var Sg = c((gW,wg)=>{
        var bL = bt()
          , TL = Ke()
          , IL = bL(TL, "Set");
        wg.exports = IL
    }
    );
    var ia = c((vW,xg)=>{
        var OL = bt()
          , AL = Ke()
          , wL = OL(AL, "WeakMap");
        xg.exports = wL
    }
    );
    var Un = c((hW,Fg)=>{
        var oa = Ig()
          , aa = Ln()
          , sa = Ag()
          , ua = Sg()
          , ca = ia()
          , qg = _t()
          , er = Yo()
          , Cg = "[object Map]"
          , SL = "[object Object]"
          , Rg = "[object Promise]"
          , Lg = "[object Set]"
          , Ng = "[object WeakMap]"
          , Pg = "[object DataView]"
          , xL = er(oa)
          , CL = er(aa)
          , RL = er(sa)
          , LL = er(ua)
          , NL = er(ca)
          , Pt = qg;
        (oa && Pt(new oa(new ArrayBuffer(1))) != Pg || aa && Pt(new aa) != Cg || sa && Pt(sa.resolve()) != Rg || ua && Pt(new ua) != Lg || ca && Pt(new ca) != Ng) && (Pt = function(e) {
            var t = qg(e)
              , r = t == SL ? e.constructor : void 0
              , n = r ? er(r) : "";
            if (n)
                switch (n) {
                case xL:
                    return Pg;
                case CL:
                    return Cg;
                case RL:
                    return Rg;
                case LL:
                    return Lg;
                case NL:
                    return Ng
                }
            return t
        }
        );
        Fg.exports = Pt
    }
    );
    var Hg = c((EW,Bg)=>{
        var la = $o()
          , PL = Qo()
          , qL = Np()
          , FL = bg()
          , Mg = Un()
          , Dg = Ie()
          , Gg = Fn()
          , ML = Gn()
          , DL = 1
          , kg = "[object Arguments]"
          , Vg = "[object Array]"
          , Bn = "[object Object]"
          , GL = Object.prototype
          , Ug = GL.hasOwnProperty;
        function kL(e, t, r, n, i, o) {
            var a = Dg(e)
              , s = Dg(t)
              , u = a ? Vg : Mg(e)
              , f = s ? Vg : Mg(t);
            u = u == kg ? Bn : u,
            f = f == kg ? Bn : f;
            var E = u == Bn
              , p = f == Bn
              , d = u == f;
            if (d && Gg(e)) {
                if (!Gg(t))
                    return !1;
                a = !0,
                E = !1
            }
            if (d && !E)
                return o || (o = new la),
                a || ML(e) ? PL(e, t, r, n, i, o) : qL(e, t, u, r, n, i, o);
            if (!(r & DL)) {
                var v = E && Ug.call(e, "__wrapped__")
                  , b = p && Ug.call(t, "__wrapped__");
                if (v || b) {
                    var _ = v ? e.value() : e
                      , O = b ? t.value() : t;
                    return o || (o = new la),
                    i(_, O, r, n, o)
                }
            }
            return d ? (o || (o = new la),
            FL(e, t, r, n, i, o)) : !1
        }
        Bg.exports = kL
    }
    );
    var fa = c((yW,jg)=>{
        var VL = Hg()
          , Wg = ft();
        function Xg(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Wg(e) && !Wg(t) ? e !== e && t !== t : VL(e, t, r, n, Xg, i)
        }
        jg.exports = Xg
    }
    );
    var Kg = c((mW,zg)=>{
        var UL = $o()
          , BL = fa()
          , HL = 1
          , WL = 2;
        function XL(e, t, r, n) {
            var i = r.length
              , o = i
              , a = !n;
            if (e == null)
                return !o;
            for (e = Object(e); i--; ) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++i < o; ) {
                s = r[i];
                var u = s[0]
                  , f = e[u]
                  , E = s[1];
                if (a && s[2]) {
                    if (f === void 0 && !(u in e))
                        return !1
                } else {
                    var p = new UL;
                    if (n)
                        var d = n(f, E, u, e, t, p);
                    if (!(d === void 0 ? BL(E, f, HL | WL, n, p) : d))
                        return !1
                }
            }
            return !0
        }
        zg.exports = XL
    }
    );
    var da = c((_W,Yg)=>{
        var jL = it();
        function zL(e) {
            return e === e && !jL(e)
        }
        Yg.exports = zL
    }
    );
    var Qg = c((bW,$g)=>{
        var KL = da()
          , YL = Dr();
        function $L(e) {
            for (var t = YL(e), r = t.length; r--; ) {
                var n = t[r]
                  , i = e[n];
                t[r] = [n, i, KL(i)]
            }
            return t
        }
        $g.exports = $L
    }
    );
    var pa = c((TW,Zg)=>{
        function QL(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Zg.exports = QL
    }
    );
    var ev = c((IW,Jg)=>{
        var ZL = Kg()
          , JL = Qg()
          , eN = pa();
        function tN(e) {
            var t = JL(e);
            return t.length == 1 && t[0][2] ? eN(t[0][0], t[0][1]) : function(r) {
                return r === e || ZL(r, e, t)
            }
        }
        Jg.exports = tN
    }
    );
    var Gr = c((OW,tv)=>{
        var rN = _t()
          , nN = ft()
          , iN = "[object Symbol]";
        function oN(e) {
            return typeof e == "symbol" || nN(e) && rN(e) == iN
        }
        tv.exports = oN
    }
    );
    var Hn = c((AW,rv)=>{
        var aN = Ie()
          , sN = Gr()
          , uN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , cN = /^\w*$/;
        function lN(e, t) {
            if (aN(e))
                return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || sN(e) ? !0 : cN.test(e) || !uN.test(e) || t != null && e in Object(t)
        }
        rv.exports = lN
    }
    );
    var ov = c((wW,iv)=>{
        var nv = Nn()
          , fN = "Expected a function";
        function ga(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(fN);
            var r = function() {
                var n = arguments
                  , i = t ? t.apply(this, n) : n[0]
                  , o = r.cache;
                if (o.has(i))
                    return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o,
                a
            };
            return r.cache = new (ga.Cache || nv),
            r
        }
        ga.Cache = nv;
        iv.exports = ga
    }
    );
    var sv = c((SW,av)=>{
        var dN = ov()
          , pN = 500;
        function gN(e) {
            var t = dN(e, function(n) {
                return r.size === pN && r.clear(),
                n
            })
              , r = t.cache;
            return t
        }
        av.exports = gN
    }
    );
    var cv = c((xW,uv)=>{
        var vN = sv()
          , hN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , EN = /\\(\\)?/g
          , yN = vN(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(hN, function(r, n, i, o) {
                t.push(i ? o.replace(EN, "$1") : n || r)
            }),
            t
        });
        uv.exports = yN
    }
    );
    var va = c((CW,lv)=>{
        function mN(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
                i[r] = t(e[r], r, e);
            return i
        }
        lv.exports = mN
    }
    );
    var hv = c((RW,vv)=>{
        var fv = Wt()
          , _N = va()
          , bN = Ie()
          , TN = Gr()
          , IN = 1 / 0
          , dv = fv ? fv.prototype : void 0
          , pv = dv ? dv.toString : void 0;
        function gv(e) {
            if (typeof e == "string")
                return e;
            if (bN(e))
                return _N(e, gv) + "";
            if (TN(e))
                return pv ? pv.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -IN ? "-0" : t
        }
        vv.exports = gv
    }
    );
    var yv = c((LW,Ev)=>{
        var ON = hv();
        function AN(e) {
            return e == null ? "" : ON(e)
        }
        Ev.exports = AN
    }
    );
    var kr = c((NW,mv)=>{
        var wN = Ie()
          , SN = Hn()
          , xN = cv()
          , CN = yv();
        function RN(e, t) {
            return wN(e) ? e : SN(e, t) ? [e] : xN(CN(e))
        }
        mv.exports = RN
    }
    );
    var tr = c((PW,_v)=>{
        var LN = Gr()
          , NN = 1 / 0;
        function PN(e) {
            if (typeof e == "string" || LN(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -NN ? "-0" : t
        }
        _v.exports = PN
    }
    );
    var Wn = c((qW,bv)=>{
        var qN = kr()
          , FN = tr();
        function MN(e, t) {
            t = qN(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[FN(t[r++])];
            return r && r == n ? e : void 0
        }
        bv.exports = MN
    }
    );
    var Xn = c((FW,Tv)=>{
        var DN = Wn();
        function GN(e, t, r) {
            var n = e == null ? void 0 : DN(e, t);
            return n === void 0 ? r : n
        }
        Tv.exports = GN
    }
    );
    var Ov = c((MW,Iv)=>{
        function kN(e, t) {
            return e != null && t in Object(e)
        }
        Iv.exports = kN
    }
    );
    var wv = c((DW,Av)=>{
        var VN = kr()
          , UN = Pr()
          , BN = Ie()
          , HN = Mn()
          , WN = Dn()
          , XN = tr();
        function jN(e, t, r) {
            t = VN(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i; ) {
                var a = XN(t[n]);
                if (!(o = e != null && r(e, a)))
                    break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length,
            !!i && WN(i) && HN(a, i) && (BN(e) || UN(e)))
        }
        Av.exports = jN
    }
    );
    var xv = c((GW,Sv)=>{
        var zN = Ov()
          , KN = wv();
        function YN(e, t) {
            return e != null && KN(e, t, zN)
        }
        Sv.exports = YN
    }
    );
    var Rv = c((kW,Cv)=>{
        var $N = fa()
          , QN = Xn()
          , ZN = xv()
          , JN = Hn()
          , eP = da()
          , tP = pa()
          , rP = tr()
          , nP = 1
          , iP = 2;
        function oP(e, t) {
            return JN(e) && eP(t) ? tP(rP(e), t) : function(r) {
                var n = QN(r, e);
                return n === void 0 && n === t ? ZN(r, e) : $N(t, n, nP | iP)
            }
        }
        Cv.exports = oP
    }
    );
    var jn = c((VW,Lv)=>{
        function aP(e) {
            return e
        }
        Lv.exports = aP
    }
    );
    var ha = c((UW,Nv)=>{
        function sP(e) {
            return function(t) {
                return t?.[e]
            }
        }
        Nv.exports = sP
    }
    );
    var qv = c((BW,Pv)=>{
        var uP = Wn();
        function cP(e) {
            return function(t) {
                return uP(t, e)
            }
        }
        Pv.exports = cP
    }
    );
    var Mv = c((HW,Fv)=>{
        var lP = ha()
          , fP = qv()
          , dP = Hn()
          , pP = tr();
        function gP(e) {
            return dP(e) ? lP(pP(e)) : fP(e)
        }
        Fv.exports = gP
    }
    );
    var Tt = c((WW,Dv)=>{
        var vP = ev()
          , hP = Rv()
          , EP = jn()
          , yP = Ie()
          , mP = Mv();
        function _P(e) {
            return typeof e == "function" ? e : e == null ? EP : typeof e == "object" ? yP(e) ? hP(e[0], e[1]) : vP(e) : mP(e)
        }
        Dv.exports = _P
    }
    );
    var Ea = c((XW,Gv)=>{
        var bP = Tt()
          , TP = Nt()
          , IP = Dr();
        function OP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!TP(t)) {
                    var o = bP(r, 3);
                    t = IP(t),
                    r = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Gv.exports = OP
    }
    );
    var ya = c((jW,kv)=>{
        function AP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
                if (t(e[o], o, e))
                    return o;
            return -1
        }
        kv.exports = AP
    }
    );
    var Uv = c((zW,Vv)=>{
        var wP = /\s/;
        function SP(e) {
            for (var t = e.length; t-- && wP.test(e.charAt(t)); )
                ;
            return t
        }
        Vv.exports = SP
    }
    );
    var Hv = c((KW,Bv)=>{
        var xP = Uv()
          , CP = /^\s+/;
        function RP(e) {
            return e && e.slice(0, xP(e) + 1).replace(CP, "")
        }
        Bv.exports = RP
    }
    );
    var zn = c((YW,jv)=>{
        var LP = Hv()
          , Wv = it()
          , NP = Gr()
          , Xv = 0 / 0
          , PP = /^[-+]0x[0-9a-f]+$/i
          , qP = /^0b[01]+$/i
          , FP = /^0o[0-7]+$/i
          , MP = parseInt;
        function DP(e) {
            if (typeof e == "number")
                return e;
            if (NP(e))
                return Xv;
            if (Wv(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Wv(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = LP(e);
            var r = qP.test(e);
            return r || FP.test(e) ? MP(e.slice(2), r ? 2 : 8) : PP.test(e) ? Xv : +e
        }
        jv.exports = DP
    }
    );
    var Yv = c(($W,Kv)=>{
        var GP = zn()
          , zv = 1 / 0
          , kP = 17976931348623157e292;
        function VP(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = GP(e),
            e === zv || e === -zv) {
                var t = e < 0 ? -1 : 1;
                return t * kP
            }
            return e === e ? e : 0
        }
        Kv.exports = VP
    }
    );
    var ma = c((QW,$v)=>{
        var UP = Yv();
        function BP(e) {
            var t = UP(e)
              , r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        $v.exports = BP
    }
    );
    var Zv = c((ZW,Qv)=>{
        var HP = ya()
          , WP = Tt()
          , XP = ma()
          , jP = Math.max;
        function zP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = r == null ? 0 : XP(r);
            return i < 0 && (i = jP(n + i, 0)),
            HP(e, WP(t, 3), i)
        }
        Qv.exports = zP
    }
    );
    var _a = c((JW,Jv)=>{
        var KP = Ea()
          , YP = Zv()
          , $P = KP(YP);
        Jv.exports = $P
    }
    );
    var rh = {};
    Fe(rh, {
        ELEMENT_MATCHES: ()=>QP,
        FLEX_PREFIXED: ()=>ba,
        IS_BROWSER_ENV: ()=>$e,
        TRANSFORM_PREFIXED: ()=>It,
        TRANSFORM_STYLE_PREFIXED: ()=>Yn,
        withBrowser: ()=>Kn
    });
    var th, $e, Kn, QP, ba, It, eh, Yn, $n = he(()=>{
        "use strict";
        th = ue(_a()),
        $e = typeof window < "u",
        Kn = (e,t)=>$e ? e() : t,
        QP = Kn(()=>(0,
        th.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e=>e in Element.prototype)),
        ba = Kn(()=>{
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , r = "";
            try {
                let {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o,
                    e.style.display === o)
                        return o
                }
                return r
            } catch {
                return r
            }
        }
        , "flex"),
        It = Kn(()=>{
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , r = "Transform"
                  , {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0)
                        return o
                }
            }
            return "transform"
        }
        , "transform"),
        eh = It.split("transform")[0],
        Yn = eh ? eh + "TransformStyle" : "transformStyle"
    }
    );
    var Ta = c((eX,sh)=>{
        var ZP = 4
          , JP = .001
          , eq = 1e-7
          , tq = 10
          , Vr = 11
          , Qn = 1 / (Vr - 1)
          , rq = typeof Float32Array == "function";
        function nh(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function ih(e, t) {
            return 3 * t - 6 * e
        }
        function oh(e) {
            return 3 * e
        }
        function Zn(e, t, r) {
            return ((nh(t, r) * e + ih(t, r)) * e + oh(t)) * e
        }
        function ah(e, t, r) {
            return 3 * nh(t, r) * e * e + 2 * ih(t, r) * e + oh(t)
        }
        function nq(e, t, r, n, i) {
            var o, a, s = 0;
            do
                a = t + (r - t) / 2,
                o = Zn(a, n, i) - e,
                o > 0 ? r = a : t = a;
            while (Math.abs(o) > eq && ++s < tq);
            return a
        }
        function iq(e, t, r, n) {
            for (var i = 0; i < ZP; ++i) {
                var o = ah(t, r, n);
                if (o === 0)
                    return t;
                var a = Zn(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        sh.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var o = rq ? new Float32Array(Vr) : new Array(Vr);
            if (t !== r || n !== i)
                for (var a = 0; a < Vr; ++a)
                    o[a] = Zn(a * Qn, t, n);
            function s(u) {
                for (var f = 0, E = 1, p = Vr - 1; E !== p && o[E] <= u; ++E)
                    f += Qn;
                --E;
                var d = (u - o[E]) / (o[E + 1] - o[E])
                  , v = f + d * Qn
                  , b = ah(v, t, n);
                return b >= JP ? iq(u, v, t, n) : b === 0 ? v : nq(u, f, f + Qn, t, n)
            }
            return function(f) {
                return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : Zn(s(f), r, i)
            }
        }
    }
    );
    var Br = {};
    Fe(Br, {
        bounce: ()=>Vq,
        bouncePast: ()=>Uq,
        ease: ()=>oq,
        easeIn: ()=>aq,
        easeInOut: ()=>uq,
        easeOut: ()=>sq,
        inBack: ()=>Lq,
        inCirc: ()=>Sq,
        inCubic: ()=>dq,
        inElastic: ()=>qq,
        inExpo: ()=>Oq,
        inOutBack: ()=>Pq,
        inOutCirc: ()=>Cq,
        inOutCubic: ()=>gq,
        inOutElastic: ()=>Mq,
        inOutExpo: ()=>wq,
        inOutQuad: ()=>fq,
        inOutQuart: ()=>Eq,
        inOutQuint: ()=>_q,
        inOutSine: ()=>Iq,
        inQuad: ()=>cq,
        inQuart: ()=>vq,
        inQuint: ()=>yq,
        inSine: ()=>bq,
        outBack: ()=>Nq,
        outBounce: ()=>Rq,
        outCirc: ()=>xq,
        outCubic: ()=>pq,
        outElastic: ()=>Fq,
        outExpo: ()=>Aq,
        outQuad: ()=>lq,
        outQuart: ()=>hq,
        outQuint: ()=>mq,
        outSine: ()=>Tq,
        swingFrom: ()=>Gq,
        swingFromTo: ()=>Dq,
        swingTo: ()=>kq
    });
    function cq(e) {
        return Math.pow(e, 2)
    }
    function lq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }
    function fq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }
    function dq(e) {
        return Math.pow(e, 3)
    }
    function pq(e) {
        return Math.pow(e - 1, 3) + 1
    }
    function gq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }
    function vq(e) {
        return Math.pow(e, 4)
    }
    function hq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }
    function Eq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }
    function yq(e) {
        return Math.pow(e, 5)
    }
    function mq(e) {
        return Math.pow(e - 1, 5) + 1
    }
    function _q(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }
    function bq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }
    function Tq(e) {
        return Math.sin(e * (Math.PI / 2))
    }
    function Iq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }
    function Oq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }
    function Aq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }
    function wq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }
    function Sq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }
    function xq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }
    function Cq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
    function Rq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function Lq(e) {
        let t = dt;
        return e * e * ((t + 1) * e - t)
    }
    function Nq(e) {
        let t = dt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function Pq(e) {
        let t = dt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function qq(e) {
        let t = dt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }
    function Fq(e) {
        let t = dt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }
    function Mq(e) {
        let t = dt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }
    function Dq(e) {
        let t = dt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function Gq(e) {
        let t = dt;
        return e * e * ((t + 1) * e - t)
    }
    function kq(e) {
        let t = dt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function Vq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function Uq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Ur, dt, oq, aq, sq, uq, Ia = he(()=>{
        "use strict";
        Ur = ue(Ta()),
        dt = 1.70158,
        oq = (0,
        Ur.default)(.25, .1, .25, 1),
        aq = (0,
        Ur.default)(.42, 0, 1, 1),
        sq = (0,
        Ur.default)(0, 0, .58, 1),
        uq = (0,
        Ur.default)(.42, 0, .58, 1)
    }
    );
    var ch = {};
    Fe(ch, {
        applyEasing: ()=>Hq,
        createBezierEasing: ()=>Bq,
        optimizeFloat: ()=>Hr
    });
    function Hr(e, t=5, r=10) {
        let n = Math.pow(r, t)
          , i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }
    function Bq(e) {
        return (0,
        uh.default)(...e)
    }
    function Hq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Hr(r ? t > 0 ? r(t) : t : t > 0 && e && Br[e] ? Br[e](t) : t)
    }
    var uh, Oa = he(()=>{
        "use strict";
        Ia();
        uh = ue(Ta())
    }
    );
    var dh = {};
    Fe(dh, {
        createElementState: ()=>fh,
        ixElements: ()=>nF,
        mergeActionState: ()=>Aa
    });
    function fh(e, t, r, n, i) {
        let o = r === Wq ? (0,
        rr.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0,
        rr.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }
    function Aa(e, t, r, n, i) {
        let o = oF(i);
        return (0,
        rr.mergeIn)(e, [t, rF, r], n, o)
    }
    function oF(e) {
        let {config: t} = e;
        return iF.reduce((r,n)=>{
            let i = n[0]
              , o = n[1]
              , a = t[i]
              , s = t[o];
            return a != null && s != null && (r[o] = s),
            r
        }
        , {})
    }
    var rr, rX, Wq, nX, Xq, jq, zq, Kq, Yq, $q, Qq, Zq, Jq, eF, tF, lh, rF, nF, iF, ph = he(()=>{
        "use strict";
        rr = ue(zt());
        De();
        ({HTML_ELEMENT: rX, PLAIN_OBJECT: Wq, ABSTRACT_NODE: nX, CONFIG_X_VALUE: Xq, CONFIG_Y_VALUE: jq, CONFIG_Z_VALUE: zq, CONFIG_VALUE: Kq, CONFIG_X_UNIT: Yq, CONFIG_Y_UNIT: $q, CONFIG_Z_UNIT: Qq, CONFIG_UNIT: Zq} = xe),
        {IX2_SESSION_STOPPED: Jq, IX2_INSTANCE_ADDED: eF, IX2_ELEMENT_STATE_CHANGED: tF} = Te,
        lh = {},
        rF = "refState",
        nF = (e=lh,t={})=>{
            switch (t.type) {
            case Jq:
                return lh;
            case eF:
                {
                    let {elementId: r, element: n, origin: i, actionItem: o, refType: a} = t.payload
                      , {actionTypeId: s} = o
                      , u = e;
                    return (0,
                    rr.getIn)(u, [r, n]) !== n && (u = fh(u, n, a, r, o)),
                    Aa(u, r, s, i, o)
                }
            case tF:
                {
                    let {elementId: r, actionTypeId: n, current: i, actionItem: o} = t.payload;
                    return Aa(e, r, n, i, o)
                }
            default:
                return e
            }
        }
        ;
        iF = [[Xq, Yq], [jq, $q], [zq, Qq], [Kq, Zq]]
    }
    );
    var gh = c(Oe=>{
        "use strict";
        Object.defineProperty(Oe, "__esModule", {
            value: !0
        });
        Oe.renderPlugin = Oe.getPluginOrigin = Oe.getPluginDuration = Oe.getPluginDestination = Oe.getPluginConfig = Oe.createPluginInstance = Oe.clearPlugin = void 0;
        var aF = e=>e.value;
        Oe.getPluginConfig = aF;
        var sF = (e,t)=>{
            if (t.config.duration !== "auto")
                return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
        ;
        Oe.getPluginDuration = sF;
        var uF = e=>e || {
            value: 0
        };
        Oe.getPluginOrigin = uF;
        var cF = e=>({
            value: e.value
        });
        Oe.getPluginDestination = cF;
        var lF = e=>{
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
        ;
        Oe.createPluginInstance = lF;
        var fF = (e,t,r)=>{
            if (!e)
                return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
        ;
        Oe.renderPlugin = fF;
        var dF = e=>{
            window.Webflow.require("lottie").createInstance(e).stop()
        }
        ;
        Oe.clearPlugin = dF
    }
    );
    var hh = c(Ae=>{
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var pF = e=>document.querySelector(`[data-w-id="${e}"]`)
          , gF = ()=>window.Webflow.require("spline")
          , vF = (e,t)=>e.filter(r=>!t.includes(r))
          , hF = (e,t)=>e.value[t];
        Ae.getPluginConfig = hF;
        var EF = ()=>null;
        Ae.getPluginDuration = EF;
        var vh = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , yF = (e,t)=>{
            let r = t.config.value
              , n = Object.keys(r);
            if (e) {
                let o = Object.keys(e)
                  , a = vF(n, o);
                return a.length ? a.reduce((u,f)=>(u[f] = vh[f],
                u), e) : e
            }
            return n.reduce((o,a)=>(o[a] = vh[a],
            o), {})
        }
        ;
        Ae.getPluginOrigin = yF;
        var mF = e=>e.value;
        Ae.getPluginDestination = mF;
        var _F = (e,t)=>{
            var r;
            let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
            return n ? pF(n) : null
        }
        ;
        Ae.createPluginInstance = _F;
        var bF = (e,t,r)=>{
            let n = gF()
              , i = n.getInstance(e)
              , o = r.config.target.objectId
              , a = s=>{
                if (!s)
                    throw new Error("Invalid spline app passed to renderSpline");
                let u = o && s.findObjectById(o);
                if (!u)
                    return;
                let {PLUGIN_SPLINE: f} = t;
                f.positionX != null && (u.position.x = f.positionX),
                f.positionY != null && (u.position.y = f.positionY),
                f.positionZ != null && (u.position.z = f.positionZ),
                f.rotationX != null && (u.rotation.x = f.rotationX),
                f.rotationY != null && (u.rotation.y = f.rotationY),
                f.rotationZ != null && (u.rotation.z = f.rotationZ),
                f.scaleX != null && (u.scale.x = f.scaleX),
                f.scaleY != null && (u.scale.y = f.scaleY),
                f.scaleZ != null && (u.scale.z = f.scaleZ)
            }
            ;
            i ? a(i.spline) : n.setLoadHandler(e, a)
        }
        ;
        Ae.renderPlugin = bF;
        var TF = ()=>null;
        Ae.clearPlugin = TF
    }
    );
    var Sa = c(wa=>{
        "use strict";
        Object.defineProperty(wa, "__esModule", {
            value: !0
        });
        wa.normalizeColor = IF;
        var Eh = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };
        function IF(e) {
            let t, r, n, i = 1, o = e.replace(/\s/g, "").toLowerCase(), s = (typeof Eh[o] == "string" ? Eh[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 ? (t = parseInt(u[0] + u[0], 16),
                r = parseInt(u[1] + u[1], 16),
                n = parseInt(u[2] + u[2], 16)) : u.length === 6 && (t = parseInt(u.substring(0, 2), 16),
                r = parseInt(u.substring(2, 4), 16),
                n = parseInt(u.substring(4, 6), 16))
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                r = parseInt(u[1], 10),
                n = parseInt(u[2], 10),
                i = parseFloat(u[3])
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                r = parseInt(u[1], 10),
                n = parseInt(u[2], 10)
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , f = parseFloat(u[0])
                  , E = parseFloat(u[1].replace("%", "")) / 100
                  , p = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let d = (1 - Math.abs(2 * p - 1)) * E, v = d * (1 - Math.abs(f / 60 % 2 - 1)), b = p - d / 2, _, O, m;
                f >= 0 && f < 60 ? (_ = d,
                O = v,
                m = 0) : f >= 60 && f < 120 ? (_ = v,
                O = d,
                m = 0) : f >= 120 && f < 180 ? (_ = 0,
                O = d,
                m = v) : f >= 180 && f < 240 ? (_ = 0,
                O = v,
                m = d) : f >= 240 && f < 300 ? (_ = v,
                O = 0,
                m = d) : (_ = d,
                O = 0,
                m = v),
                t = Math.round((_ + b) * 255),
                r = Math.round((O + b) * 255),
                n = Math.round((m + b) * 255)
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","), f = parseFloat(u[0]), E = parseFloat(u[1].replace("%", "")) / 100, p = parseFloat(u[2].replace("%", "")) / 100, d = (1 - Math.abs(2 * p - 1)) * E, v = d * (1 - Math.abs(f / 60 % 2 - 1)), b = p - d / 2, _, O, m;
                f >= 0 && f < 60 ? (_ = d,
                O = v,
                m = 0) : f >= 60 && f < 120 ? (_ = v,
                O = d,
                m = 0) : f >= 120 && f < 180 ? (_ = 0,
                O = d,
                m = v) : f >= 180 && f < 240 ? (_ = 0,
                O = v,
                m = d) : f >= 240 && f < 300 ? (_ = v,
                O = 0,
                m = d) : (_ = d,
                O = 0,
                m = v),
                t = Math.round((_ + b) * 255),
                r = Math.round((O + b) * 255),
                n = Math.round((m + b) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
                throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    }
    );
    var yh = c(we=>{
        "use strict";
        Object.defineProperty(we, "__esModule", {
            value: !0
        });
        we.renderPlugin = we.getPluginOrigin = we.getPluginDuration = we.getPluginDestination = we.getPluginConfig = we.createPluginInstance = we.clearPlugin = void 0;
        var OF = Sa()
          , AF = (e,t)=>e.value[t];
        we.getPluginConfig = AF;
        var wF = ()=>null;
        we.getPluginDuration = wF;
        var SF = (e,t)=>{
            if (e)
                return e;
            let r = t.config.value
              , n = t.config.target.objectId
              , i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null)
                return {
                    size: parseInt(i, 10)
                };
            if (r.red != null && r.green != null && r.blue != null)
                return (0,
                OF.normalizeColor)(i)
        }
        ;
        we.getPluginOrigin = SF;
        var xF = e=>e.value;
        we.getPluginDestination = xF;
        var CF = ()=>null;
        we.createPluginInstance = CF;
        var RF = (e,t,r)=>{
            let n = r.config.target.objectId, i = r.config.value.unit, {PLUGIN_VARIABLE: o} = t, {size: a, red: s, green: u, blue: f, alpha: E} = o, p;
            a != null && (p = a + i),
            s != null && f != null && u != null && E != null && (p = `rgba(${s}, ${u}, ${f}, ${E})`),
            p != null && document.documentElement.style.setProperty(n, p)
        }
        ;
        we.renderPlugin = RF;
        var LF = (e,t)=>{
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        }
        ;
        we.clearPlugin = LF
    }
    );
    var mh = c(Jn=>{
        "use strict";
        var Ca = ln().default;
        Object.defineProperty(Jn, "__esModule", {
            value: !0
        });
        Jn.pluginMethodMap = void 0;
        var xa = (De(),
        Je(Af))
          , NF = Ca(gh())
          , PF = Ca(hh())
          , qF = Ca(yh())
          , uX = Jn.pluginMethodMap = new Map([[xa.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...NF
        }], [xa.ActionTypeConsts.PLUGIN_SPLINE, {
            ...PF
        }], [xa.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...qF
        }]])
    }
    );
    var _h = {};
    Fe(_h, {
        clearPlugin: ()=>Fa,
        createPluginInstance: ()=>MF,
        getPluginConfig: ()=>La,
        getPluginDestination: ()=>Pa,
        getPluginDuration: ()=>FF,
        getPluginOrigin: ()=>Na,
        isPluginType: ()=>qt,
        renderPlugin: ()=>qa
    });
    function qt(e) {
        return Ra.pluginMethodMap.has(e)
    }
    var Ra, Ft, La, Na, FF, Pa, MF, qa, Fa, Ma = he(()=>{
        "use strict";
        $n();
        Ra = ue(mh());
        Ft = e=>t=>{
            if (!$e)
                return ()=>null;
            let r = Ra.pluginMethodMap.get(t);
            if (!r)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
        ,
        La = Ft("getPluginConfig"),
        Na = Ft("getPluginOrigin"),
        FF = Ft("getPluginDuration"),
        Pa = Ft("getPluginDestination"),
        MF = Ft("createPluginInstance"),
        qa = Ft("renderPlugin"),
        Fa = Ft("clearPlugin")
    }
    );
    var Th = c((fX,bh)=>{
        function DF(e, t) {
            return e == null || e !== e ? t : e
        }
        bh.exports = DF
    }
    );
    var Oh = c((dX,Ih)=>{
        function GF(e, t, r, n) {
            var i = -1
              , o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o; )
                r = t(r, e[i], i, e);
            return r
        }
        Ih.exports = GF
    }
    );
    var wh = c((pX,Ah)=>{
        function kF(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
                    var u = a[e ? s : ++i];
                    if (r(o[u], u, o) === !1)
                        break
                }
                return t
            }
        }
        Ah.exports = kF
    }
    );
    var xh = c((gX,Sh)=>{
        var VF = wh()
          , UF = VF();
        Sh.exports = UF
    }
    );
    var Da = c((vX,Ch)=>{
        var BF = xh()
          , HF = Dr();
        function WF(e, t) {
            return e && BF(e, t, HF)
        }
        Ch.exports = WF
    }
    );
    var Lh = c((hX,Rh)=>{
        var XF = Nt();
        function jF(e, t) {
            return function(r, n) {
                if (r == null)
                    return r;
                if (!XF(r))
                    return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
                    ;
                return r
            }
        }
        Rh.exports = jF
    }
    );
    var Ga = c((EX,Nh)=>{
        var zF = Da()
          , KF = Lh()
          , YF = KF(zF);
        Nh.exports = YF
    }
    );
    var qh = c((yX,Ph)=>{
        function $F(e, t, r, n, i) {
            return i(e, function(o, a, s) {
                r = n ? (n = !1,
                o) : t(r, o, a, s)
            }),
            r
        }
        Ph.exports = $F
    }
    );
    var Mh = c((mX,Fh)=>{
        var QF = Oh()
          , ZF = Ga()
          , JF = Tt()
          , eM = qh()
          , tM = Ie();
        function rM(e, t, r) {
            var n = tM(e) ? QF : eM
              , i = arguments.length < 3;
            return n(e, JF(t, 4), r, i, ZF)
        }
        Fh.exports = rM
    }
    );
    var Gh = c((_X,Dh)=>{
        var nM = ya()
          , iM = Tt()
          , oM = ma()
          , aM = Math.max
          , sM = Math.min;
        function uM(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = n - 1;
            return r !== void 0 && (i = oM(r),
            i = r < 0 ? aM(n + i, 0) : sM(i, n - 1)),
            nM(e, iM(t, 3), i, !0)
        }
        Dh.exports = uM
    }
    );
    var Vh = c((bX,kh)=>{
        var cM = Ea()
          , lM = Gh()
          , fM = cM(lM);
        kh.exports = fM
    }
    );
    function Uh(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    function dM(e, t) {
        if (Uh(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        let r = Object.keys(e)
          , n = Object.keys(t);
        if (r.length !== n.length)
            return !1;
        for (let i = 0; i < r.length; i++)
            if (!Object.hasOwn(t, r[i]) || !Uh(e[r[i]], t[r[i]]))
                return !1;
        return !0
    }
    var ka, Bh = he(()=>{
        "use strict";
        ka = dM
    }
    );
    var aE = {};
    Fe(aE, {
        cleanupHTMLElement: ()=>cD,
        clearAllStyles: ()=>uD,
        clearObjectCache: ()=>CM,
        getActionListProgress: ()=>fD,
        getAffectedElements: ()=>Wa,
        getComputedStyle: ()=>DM,
        getDestinationValues: ()=>WM,
        getElementId: ()=>PM,
        getInstanceId: ()=>LM,
        getInstanceOrigin: ()=>VM,
        getItemConfigByKey: ()=>HM,
        getMaxDurationItemIndex: ()=>oE,
        getNamespacedParameterId: ()=>gD,
        getRenderType: ()=>rE,
        getStyleProp: ()=>XM,
        mediaQueriesEqual: ()=>hD,
        observeStore: ()=>MM,
        reduceListToGroup: ()=>dD,
        reifyState: ()=>qM,
        renderHTMLElement: ()=>jM,
        shallowEqual: ()=>ka,
        shouldAllowMediaQuery: ()=>vD,
        shouldNamespaceEventParameter: ()=>pD,
        stringifyTarget: ()=>ED
    });
    function CM() {
        ei.clear()
    }
    function LM() {
        return "i" + RM++
    }
    function PM(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t)
                return n.id
        }
        return "e" + NM++
    }
    function qM({events: e, actionLists: t, site: r}={}) {
        let n = (0,
        ii.default)(e, (a,s)=>{
            let {eventTypeId: u} = s;
            return a[u] || (a[u] = {}),
            a[u][s.id] = s,
            a
        }
        , {})
          , i = r && r.mediaQueries
          , o = [];
        return i ? o = i.map(a=>a.key) : (i = [],
        console.warn("IX2 missing mediaQueries in site data")),
        {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }
    function MM({store: e, select: t, onChange: r, comparator: n=FM}) {
        let {getState: i, subscribe: o} = e
          , a = o(u)
          , s = t(i());
        function u() {
            let f = t(i());
            if (f == null) {
                a();
                return
            }
            n(f, s) || (s = f,
            r(s, e))
        }
        return a
    }
    function Xh(e) {
        let t = typeof e;
        if (t === "string")
            return {
                id: e
            };
        if (e != null && t === "object") {
            let {id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s} = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }
    function Wa({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i}) {
        if (!i)
            throw new Error("IX2 missing elementApi");
        let {targets: o} = e;
        if (Array.isArray(o) && o.length > 0)
            return o.reduce((x,g)=>x.concat(Wa({
                config: {
                    target: g
                },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i
            })), []);
        let {getValidDocument: a, getQuerySelector: s, queryDocument: u, getChildElements: f, getSiblingElements: E, matchSelector: p, elementContains: d, isSiblingNode: v} = i
          , {target: b} = e;
        if (!b)
            return [];
        let {id: _, objectId: O, selector: m, selectorGuids: C, appliesTo: A, useEventTarget: N} = Xh(b);
        if (O)
            return [ei.has(O) ? ei.get(O) : ei.set(O, {}).get(O)];
        if (A === Ho.PAGE) {
            let x = a(_);
            return x ? [x] : []
        }
        let L = (t?.action?.config?.affectedElements ?? {})[_ || m] || {}, H = !!(L.id || L.selector), X, z, Q, G = t && s(Xh(t.target));
        if (H ? (X = L.limitAffectedElements,
        z = G,
        Q = s(L)) : z = Q = s({
            id: _,
            selector: m,
            selectorGuids: C
        }),
        t && N) {
            let x = r && (Q || N === !0) ? [r] : u(G);
            if (Q) {
                if (N === wM)
                    return u(Q).filter(g=>x.some(R=>d(g, R)));
                if (N === Hh)
                    return u(Q).filter(g=>x.some(R=>d(R, g)));
                if (N === Wh)
                    return u(Q).filter(g=>x.some(R=>v(R, g)))
            }
            return x
        }
        return z == null || Q == null ? [] : $e && n ? u(Q).filter(x=>n.contains(x)) : X === Hh ? u(z, Q) : X === AM ? f(u(z)).filter(p(Q)) : X === Wh ? E(u(z)).filter(p(Q)) : u(Q)
    }
    function DM({element: e, actionItem: t}) {
        if (!$e)
            return {};
        let {actionTypeId: r} = t;
        switch (r) {
        case sr:
        case ur:
        case cr:
        case lr:
        case ai:
            return window.getComputedStyle(e);
        default:
            return {}
        }
    }
    function VM(e, t={}, r={}, n, i) {
        let {getStyle: o} = i
          , {actionTypeId: a} = n;
        if (qt(a))
            return Na(a)(t[a], n);
        switch (n.actionTypeId) {
        case ir:
        case or:
        case ar:
        case zr:
            return t[n.actionTypeId] || Xa[n.actionTypeId];
        case Kr:
            return GM(t[n.actionTypeId], n.config.filters);
        case Yr:
            return kM(t[n.actionTypeId], n.config.fontVariations);
        case Jh:
            return {
                value: (0,
                pt.default)(parseFloat(o(e, ri)), 1)
            };
        case sr:
            {
                let s = o(e, ot), u = o(e, at), f, E;
                return n.config.widthUnit === Ot ? f = jh.test(s) ? parseFloat(s) : parseFloat(r.width) : f = (0,
                pt.default)(parseFloat(s), parseFloat(r.width)),
                n.config.heightUnit === Ot ? E = jh.test(u) ? parseFloat(u) : parseFloat(r.height) : E = (0,
                pt.default)(parseFloat(u), parseFloat(r.height)),
                {
                    widthValue: f,
                    heightValue: E
                }
            }
        case ur:
        case cr:
        case lr:
            return oD({
                element: e,
                actionTypeId: n.actionTypeId,
                computedStyle: r,
                getStyle: o
            });
        case ai:
            return {
                value: (0,
                pt.default)(o(e, ni), r.display)
            };
        case xM:
            return t[n.actionTypeId] || {
                value: 0
            };
        default:
            return
        }
    }
    function WM({element: e, actionItem: t, elementApi: r}) {
        if (qt(t.actionTypeId))
            return Pa(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
        case ir:
        case or:
        case ar:
        case zr:
            {
                let {xValue: n, yValue: i, zValue: o} = t.config;
                return {
                    xValue: n,
                    yValue: i,
                    zValue: o
                }
            }
        case sr:
            {
                let {getStyle: n, setStyle: i, getProperty: o} = r
                  , {widthUnit: a, heightUnit: s} = t.config
                  , {widthValue: u, heightValue: f} = t.config;
                if (!$e)
                    return {
                        widthValue: u,
                        heightValue: f
                    };
                if (a === Ot) {
                    let E = n(e, ot);
                    i(e, ot, ""),
                    u = o(e, "offsetWidth"),
                    i(e, ot, E)
                }
                if (s === Ot) {
                    let E = n(e, at);
                    i(e, at, ""),
                    f = o(e, "offsetHeight"),
                    i(e, at, E)
                }
                return {
                    widthValue: u,
                    heightValue: f
                }
            }
        case ur:
        case cr:
        case lr:
            {
                let {rValue: n, gValue: i, bValue: o, aValue: a, globalSwatchId: s} = t.config;
                if (s && s.startsWith("--")) {
                    let {getStyle: u} = r
                      , f = u(e, s)
                      , E = (0,
                    Yh.normalizeColor)(f);
                    return {
                        rValue: E.red,
                        gValue: E.green,
                        bValue: E.blue,
                        aValue: E.alpha
                    }
                }
                return {
                    rValue: n,
                    gValue: i,
                    bValue: o,
                    aValue: a
                }
            }
        case Kr:
            return t.config.filters.reduce(UM, {});
        case Yr:
            return t.config.fontVariations.reduce(BM, {});
        default:
            {
                let {value: n} = t.config;
                return {
                    value: n
                }
            }
        }
    }
    function rE(e) {
        if (/^TRANSFORM_/.test(e))
            return Qh;
        if (/^STYLE_/.test(e))
            return Ba;
        if (/^GENERAL_/.test(e))
            return Ua;
        if (/^PLUGIN_/.test(e))
            return Zh
    }
    function XM(e, t) {
        return e === Ba ? t.replace("STYLE_", "").toLowerCase() : null
    }
    function jM(e, t, r, n, i, o, a, s, u) {
        switch (s) {
        case Qh:
            return QM(e, t, r, i, a);
        case Ba:
            return aD(e, t, r, i, o, a);
        case Ua:
            return sD(e, i, a);
        case Zh:
            {
                let {actionTypeId: f} = i;
                if (qt(f))
                    return qa(f)(u, t, i)
            }
        }
    }
    function QM(e, t, r, n, i) {
        let o = $M.map(s=>{
            let u = Xa[s]
              , {xValue: f=u.xValue, yValue: E=u.yValue, zValue: p=u.zValue, xUnit: d="", yUnit: v="", zUnit: b=""} = t[s] || {};
            switch (s) {
            case ir:
                return `${vM}(${f}${d}, ${E}${v}, ${p}${b})`;
            case or:
                return `${hM}(${f}${d}, ${E}${v}, ${p}${b})`;
            case ar:
                return `${EM}(${f}${d}) ${yM}(${E}${v}) ${mM}(${p}${b})`;
            case zr:
                return `${_M}(${f}${d}, ${E}${v})`;
            default:
                return ""
            }
        }
        ).join(" ")
          , {setStyle: a} = i;
        Mt(e, It, i),
        a(e, It, o),
        eD(n, r) && a(e, Yn, bM)
    }
    function ZM(e, t, r, n) {
        let i = (0,
        ii.default)(t, (a,s,u)=>`${a} ${u}(${s}${YM(u, r)})`, "")
          , {setStyle: o} = n;
        Mt(e, Wr, n),
        o(e, Wr, i)
    }
    function JM(e, t, r, n) {
        let i = (0,
        ii.default)(t, (a,s,u)=>(a.push(`"${u}" ${s}`),
        a), []).join(", ")
          , {setStyle: o} = n;
        Mt(e, Xr, n),
        o(e, Xr, i)
    }
    function eD({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
        return e === ir && n !== void 0 || e === or && n !== void 0 || e === ar && (t !== void 0 || r !== void 0)
    }
    function iD(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }
    function oD({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
        let i = Ha[t]
          , o = n(e, i)
          , a = rD.test(o) ? o : r[i]
          , s = iD(nD, a).split(jr);
        return {
            rValue: (0,
            pt.default)(parseInt(s[0], 10), 255),
            gValue: (0,
            pt.default)(parseInt(s[1], 10), 255),
            bValue: (0,
            pt.default)(parseInt(s[2], 10), 255),
            aValue: (0,
            pt.default)(parseFloat(s[3]), 1)
        }
    }
    function aD(e, t, r, n, i, o) {
        let {setStyle: a} = o;
        switch (n.actionTypeId) {
        case sr:
            {
                let {widthUnit: s="", heightUnit: u=""} = n.config
                  , {widthValue: f, heightValue: E} = r;
                f !== void 0 && (s === Ot && (s = "px"),
                Mt(e, ot, o),
                a(e, ot, f + s)),
                E !== void 0 && (u === Ot && (u = "px"),
                Mt(e, at, o),
                a(e, at, E + u));
                break
            }
        case Kr:
            {
                ZM(e, r, n.config, o);
                break
            }
        case Yr:
            {
                JM(e, r, n.config, o);
                break
            }
        case ur:
        case cr:
        case lr:
            {
                let s = Ha[n.actionTypeId]
                  , u = Math.round(r.rValue)
                  , f = Math.round(r.gValue)
                  , E = Math.round(r.bValue)
                  , p = r.aValue;
                Mt(e, s, o),
                a(e, s, p >= 1 ? `rgb(${u},${f},${E})` : `rgba(${u},${f},${E},${p})`);
                break
            }
        default:
            {
                let {unit: s=""} = n.config;
                Mt(e, i, o),
                a(e, i, r.value + s);
                break
            }
        }
    }
    function sD(e, t, r) {
        let {setStyle: n} = r;
        switch (t.actionTypeId) {
        case ai:
            {
                let {value: i} = t.config;
                i === TM && $e ? n(e, ni, ba) : n(e, ni, i);
                return
            }
        }
    }
    function Mt(e, t, r) {
        if (!$e)
            return;
        let n = tE[t];
        if (!n)
            return;
        let {getStyle: i, setStyle: o} = r
          , a = i(e, nr);
        if (!a) {
            o(e, nr, n);
            return
        }
        let s = a.split(jr).map(eE);
        s.indexOf(n) === -1 && o(e, nr, s.concat(n).join(jr))
    }
    function nE(e, t, r) {
        if (!$e)
            return;
        let n = tE[t];
        if (!n)
            return;
        let {getStyle: i, setStyle: o} = r
          , a = i(e, nr);
        !a || a.indexOf(n) === -1 || o(e, nr, a.split(jr).map(eE).filter(s=>s !== n).join(jr))
    }
    function uD({store: e, elementApi: t}) {
        let {ixData: r} = e.getState()
          , {events: n={}, actionLists: i={}} = r;
        Object.keys(n).forEach(o=>{
            let a = n[o]
              , {config: s} = a.action
              , {actionListId: u} = s
              , f = i[u];
            f && zh({
                actionList: f,
                event: a,
                elementApi: t
            })
        }
        ),
        Object.keys(i).forEach(o=>{
            zh({
                actionList: i[o],
                elementApi: t
            })
        }
        )
    }
    function zh({actionList: e={}, event: t, elementApi: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e;
        n && n.forEach(o=>{
            Kh({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }
        ),
        i && i.forEach(o=>{
            let {continuousActionGroups: a} = o;
            a.forEach(s=>{
                Kh({
                    actionGroup: s,
                    event: t,
                    elementApi: r
                })
            }
            )
        }
        )
    }
    function Kh({actionGroup: e, event: t, elementApi: r}) {
        let {actionItems: n} = e;
        n.forEach(i=>{
            let {actionTypeId: o, config: a} = i, s;
            qt(o) ? s = u=>Fa(o)(u, i) : s = iE({
                effect: lD,
                actionTypeId: o,
                elementApi: r
            }),
            Wa({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        }
        )
    }
    function cD(e, t, r) {
        let {setStyle: n, getStyle: i} = r
          , {actionTypeId: o} = t;
        if (o === sr) {
            let {config: a} = t;
            a.widthUnit === Ot && n(e, ot, ""),
            a.heightUnit === Ot && n(e, at, "")
        }
        i(e, nr) && iE({
            effect: nE,
            actionTypeId: o,
            elementApi: r
        })(e)
    }
    function lD(e, t, r) {
        let {setStyle: n} = r;
        nE(e, t, r),
        n(e, t, ""),
        t === It && n(e, Yn, "")
    }
    function oE(e) {
        let t = 0
          , r = 0;
        return e.forEach((n,i)=>{
            let {config: o} = n
              , a = o.delay + o.duration;
            a >= t && (t = a,
            r = i)
        }
        ),
        r
    }
    function fD(e, t) {
        let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
          , {actionItem: i, verboseTimeElapsed: o=0} = t
          , a = 0
          , s = 0;
        return r.forEach((u,f)=>{
            if (n && f === 0)
                return;
            let {actionItems: E} = u
              , p = E[oE(E)]
              , {config: d, actionTypeId: v} = p;
            i.id === p.id && (s = a + o);
            let b = rE(v) === Ua ? 0 : d.duration;
            a += d.delay + b
        }
        ),
        a > 0 ? Hr(s / a) : 0
    }
    function dD({actionList: e, actionItemId: t, rawData: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e
          , o = []
          , a = s=>(o.push((0,
        oi.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })),
        s.id === t);
        return n && n.some(({actionItems: s})=>s.some(a)),
        i && i.some(s=>{
            let {continuousActionGroups: u} = s;
            return u.some(({actionItems: f})=>f.some(a))
        }
        ),
        (0,
        oi.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }
    function pD(e, {basedOn: t}) {
        return e === Ye.SCROLLING_IN_VIEW && (t === nt.ELEMENT || t == null) || e === Ye.MOUSE_MOVE && t === nt.ELEMENT
    }
    function gD(e, t) {
        return e + SM + t
    }
    function vD(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }
    function hD(e, t) {
        return ka(e && e.sort(), t && t.sort())
    }
    function ED(e) {
        if (typeof e == "string")
            return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + Va + e.objectId;
        if (e.objectId)
            return e.objectId;
        let {id: t="", selector: r="", useEventTarget: n=""} = e;
        return t + Va + r + Va + n
    }
    var pt, ii, ti, oi, Yh, pM, gM, vM, hM, EM, yM, mM, _M, bM, TM, ri, Wr, Xr, ot, at, $h, IM, OM, Hh, AM, Wh, wM, ni, nr, Ot, jr, SM, Va, Qh, Ua, Ba, Zh, ir, or, ar, zr, Jh, Kr, Yr, sr, ur, cr, lr, ai, xM, eE, Ha, tE, ei, RM, NM, FM, jh, GM, kM, UM, BM, HM, Xa, zM, KM, YM, $M, tD, rD, nD, iE, sE = he(()=>{
        "use strict";
        pt = ue(Th()),
        ii = ue(Mh()),
        ti = ue(Vh()),
        oi = ue(zt());
        De();
        Bh();
        Oa();
        Yh = ue(Sa());
        Ma();
        $n();
        ({BACKGROUND: pM, TRANSFORM: gM, TRANSLATE_3D: vM, SCALE_3D: hM, ROTATE_X: EM, ROTATE_Y: yM, ROTATE_Z: mM, SKEW: _M, PRESERVE_3D: bM, FLEX: TM, OPACITY: ri, FILTER: Wr, FONT_VARIATION_SETTINGS: Xr, WIDTH: ot, HEIGHT: at, BACKGROUND_COLOR: $h, BORDER_COLOR: IM, COLOR: OM, CHILDREN: Hh, IMMEDIATE_CHILDREN: AM, SIBLINGS: Wh, PARENT: wM, DISPLAY: ni, WILL_CHANGE: nr, AUTO: Ot, COMMA_DELIMITER: jr, COLON_DELIMITER: SM, BAR_DELIMITER: Va, RENDER_TRANSFORM: Qh, RENDER_GENERAL: Ua, RENDER_STYLE: Ba, RENDER_PLUGIN: Zh} = xe),
        {TRANSFORM_MOVE: ir, TRANSFORM_SCALE: or, TRANSFORM_ROTATE: ar, TRANSFORM_SKEW: zr, STYLE_OPACITY: Jh, STYLE_FILTER: Kr, STYLE_FONT_VARIATION: Yr, STYLE_SIZE: sr, STYLE_BACKGROUND_COLOR: ur, STYLE_BORDER: cr, STYLE_TEXT_COLOR: lr, GENERAL_DISPLAY: ai, OBJECT_VALUE: xM} = Me,
        eE = e=>e.trim(),
        Ha = Object.freeze({
            [ur]: $h,
            [cr]: IM,
            [lr]: OM
        }),
        tE = Object.freeze({
            [It]: gM,
            [$h]: pM,
            [ri]: ri,
            [Wr]: Wr,
            [ot]: ot,
            [at]: at,
            [Xr]: Xr
        }),
        ei = new Map;
        RM = 1;
        NM = 1;
        FM = (e,t)=>e === t;
        jh = /px/,
        GM = (e,t)=>t.reduce((r,n)=>(r[n.type] == null && (r[n.type] = zM[n.type]),
        r), e || {}),
        kM = (e,t)=>t.reduce((r,n)=>(r[n.type] == null && (r[n.type] = KM[n.type] || n.defaultValue || 0),
        r), e || {});
        UM = (e,t)=>(t && (e[t.type] = t.value || 0),
        e),
        BM = (e,t)=>(t && (e[t.type] = t.value || 0),
        e),
        HM = (e,t,r)=>{
            if (qt(e))
                return La(e)(r, t);
            switch (e) {
            case Kr:
                {
                    let n = (0,
                    ti.default)(r.filters, ({type: i})=>i === t);
                    return n ? n.value : 0
                }
            case Yr:
                {
                    let n = (0,
                    ti.default)(r.fontVariations, ({type: i})=>i === t);
                    return n ? n.value : 0
                }
            default:
                return r[t]
            }
        }
        ;
        Xa = {
            [ir]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [or]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [ar]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [zr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        },
        zM = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        KM = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }),
        YM = (e,t)=>{
            let r = (0,
            ti.default)(t.filters, ({type: n})=>n === e);
            if (r && r.unit)
                return r.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        ,
        $M = Object.keys(Xa);
        tD = "\\(([^)]+)\\)",
        rD = /^rgb/,
        nD = RegExp(`rgba?${tD}`);
        iE = ({effect: e, actionTypeId: t, elementApi: r})=>n=>{
            switch (t) {
            case ir:
            case or:
            case ar:
            case zr:
                e(n, It, r);
                break;
            case Kr:
                e(n, Wr, r);
                break;
            case Yr:
                e(n, Xr, r);
                break;
            case Jh:
                e(n, ri, r);
                break;
            case sr:
                e(n, ot, r),
                e(n, at, r);
                break;
            case ur:
            case cr:
            case lr:
                e(n, Ha[t], r);
                break;
            case ai:
                e(n, ni, r);
                break
            }
        }
    }
    );
    var Dt = c(Ne=>{
        "use strict";
        var fr = ln().default;
        Object.defineProperty(Ne, "__esModule", {
            value: !0
        });
        Ne.IX2VanillaUtils = Ne.IX2VanillaPlugins = Ne.IX2ElementsReducer = Ne.IX2Easings = Ne.IX2EasingUtils = Ne.IX2BrowserSupport = void 0;
        var yD = fr(($n(),
        Je(rh)));
        Ne.IX2BrowserSupport = yD;
        var mD = fr((Ia(),
        Je(Br)));
        Ne.IX2Easings = mD;
        var _D = fr((Oa(),
        Je(ch)));
        Ne.IX2EasingUtils = _D;
        var bD = fr((ph(),
        Je(dh)));
        Ne.IX2ElementsReducer = bD;
        var TD = fr((Ma(),
        Je(_h)));
        Ne.IX2VanillaPlugins = TD;
        var ID = fr((sE(),
        Je(aE)));
        Ne.IX2VanillaUtils = ID
    }
    );
    var ui, gt, OD, AD, wD, SD, xD, CD, si, uE, RD, LD, ja, ND, PD, qD, FD, cE, lE = he(()=>{
        "use strict";
        De();
        ui = ue(Dt()),
        gt = ue(zt()),
        {IX2_RAW_DATA_IMPORTED: OD, IX2_SESSION_STOPPED: AD, IX2_INSTANCE_ADDED: wD, IX2_INSTANCE_STARTED: SD, IX2_INSTANCE_REMOVED: xD, IX2_ANIMATION_FRAME_CHANGED: CD} = Te,
        {optimizeFloat: si, applyEasing: uE, createBezierEasing: RD} = ui.IX2EasingUtils,
        {RENDER_GENERAL: LD} = xe,
        {getItemConfigByKey: ja, getRenderType: ND, getStyleProp: PD} = ui.IX2VanillaUtils,
        qD = (e,t)=>{
            let {position: r, parameterId: n, actionGroups: i, destinationKeys: o, smoothing: a, restingValue: s, actionTypeId: u, customEasingFn: f, skipMotion: E, skipToValue: p} = e
              , {parameters: d} = t.payload
              , v = Math.max(1 - a, .01)
              , b = d[n];
            b == null && (v = 1,
            b = s);
            let _ = Math.max(b, 0) || 0
              , O = si(_ - r)
              , m = E ? p : si(r + O * v)
              , C = m * 100;
            if (m === r && e.current)
                return e;
            let A, N, P, L;
            for (let X = 0, {length: z} = i; X < z; X++) {
                let {keyframe: Q, actionItems: G} = i[X];
                if (X === 0 && (A = G[0]),
                C >= Q) {
                    A = G[0];
                    let x = i[X + 1]
                      , g = x && C !== Q;
                    N = g ? x.actionItems[0] : null,
                    g && (P = Q / 100,
                    L = (x.keyframe - Q) / 100)
                }
            }
            let H = {};
            if (A && !N)
                for (let X = 0, {length: z} = o; X < z; X++) {
                    let Q = o[X];
                    H[Q] = ja(u, Q, A.config)
                }
            else if (A && N && P !== void 0 && L !== void 0) {
                let X = (m - P) / L
                  , z = A.config.easing
                  , Q = uE(z, X, f);
                for (let G = 0, {length: x} = o; G < x; G++) {
                    let g = o[G]
                      , R = ja(u, g, A.config)
                      , Z = (ja(u, g, N.config) - R) * Q + R;
                    H[g] = Z
                }
            }
            return (0,
            gt.merge)(e, {
                position: m,
                current: H
            })
        }
        ,
        FD = (e,t)=>{
            let {active: r, origin: n, start: i, immediate: o, renderType: a, verbose: s, actionItem: u, destination: f, destinationKeys: E, pluginDuration: p, instanceDelay: d, customEasingFn: v, skipMotion: b} = e
              , _ = u.config.easing
              , {duration: O, delay: m} = u.config;
            p != null && (O = p),
            m = d ?? m,
            a === LD ? O = 0 : (o || b) && (O = m = 0);
            let {now: C} = t.payload;
            if (r && n) {
                let A = C - (i + m);
                if (s) {
                    let X = C - i
                      , z = O + m
                      , Q = si(Math.min(Math.max(0, X / z), 1));
                    e = (0,
                    gt.set)(e, "verboseTimeElapsed", z * Q)
                }
                if (A < 0)
                    return e;
                let N = si(Math.min(Math.max(0, A / O), 1))
                  , P = uE(_, N, v)
                  , L = {}
                  , H = null;
                return E.length && (H = E.reduce((X,z)=>{
                    let Q = f[z]
                      , G = parseFloat(n[z]) || 0
                      , g = (parseFloat(Q) - G) * P + G;
                    return X[z] = g,
                    X
                }
                , {})),
                L.current = H,
                L.position = N,
                N === 1 && (L.active = !1,
                L.complete = !0),
                (0,
                gt.merge)(e, L)
            }
            return e
        }
        ,
        cE = (e=Object.freeze({}),t)=>{
            switch (t.type) {
            case OD:
                return t.payload.ixInstances || Object.freeze({});
            case AD:
                return Object.freeze({});
            case wD:
                {
                    let {instanceId: r, elementId: n, actionItem: i, eventId: o, eventTarget: a, eventStateKey: s, actionListId: u, groupIndex: f, isCarrier: E, origin: p, destination: d, immediate: v, verbose: b, continuous: _, parameterId: O, actionGroups: m, smoothing: C, restingValue: A, pluginInstance: N, pluginDuration: P, instanceDelay: L, skipMotion: H, skipToValue: X} = t.payload
                      , {actionTypeId: z} = i
                      , Q = ND(z)
                      , G = PD(Q, z)
                      , x = Object.keys(d).filter(R=>d[R] != null && typeof d[R] != "string")
                      , {easing: g} = i.config;
                    return (0,
                    gt.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: p,
                        destination: d,
                        destinationKeys: x,
                        immediate: v,
                        verbose: b,
                        current: null,
                        actionItem: i,
                        actionTypeId: z,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: u,
                        groupIndex: f,
                        renderType: Q,
                        isCarrier: E,
                        styleProp: G,
                        continuous: _,
                        parameterId: O,
                        actionGroups: m,
                        smoothing: C,
                        restingValue: A,
                        pluginInstance: N,
                        pluginDuration: P,
                        instanceDelay: L,
                        skipMotion: H,
                        skipToValue: X,
                        customEasingFn: Array.isArray(g) && g.length === 4 ? RD(g) : void 0
                    })
                }
            case SD:
                {
                    let {instanceId: r, time: n} = t.payload;
                    return (0,
                    gt.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case xD:
                {
                    let {instanceId: r} = t.payload;
                    if (!e[r])
                        return e;
                    let n = {}
                      , i = Object.keys(e)
                      , {length: o} = i;
                    for (let a = 0; a < o; a++) {
                        let s = i[a];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
            case CD:
                {
                    let r = e
                      , n = Object.keys(e)
                      , {length: i} = n;
                    for (let o = 0; o < i; o++) {
                        let a = n[o]
                          , s = e[a]
                          , u = s.continuous ? qD : FD;
                        r = (0,
                        gt.set)(r, a, u(s, t))
                    }
                    return r
                }
            default:
                return e
            }
        }
    }
    );
    var MD, DD, GD, fE, dE = he(()=>{
        "use strict";
        De();
        ({IX2_RAW_DATA_IMPORTED: MD, IX2_SESSION_STOPPED: DD, IX2_PARAMETER_CHANGED: GD} = Te),
        fE = (e={},t)=>{
            switch (t.type) {
            case MD:
                return t.payload.ixParameters || {};
            case DD:
                return {};
            case GD:
                {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n,
                    e
                }
            default:
                return e
            }
        }
    }
    );
    var vE = {};
    Fe(vE, {
        default: ()=>VD
    });
    var pE, gE, kD, VD, hE = he(()=>{
        "use strict";
        pE = ue(Bo());
        Sf();
        Kf();
        Qf();
        gE = ue(Dt());
        lE();
        dE();
        ({ixElements: kD} = gE.IX2ElementsReducer),
        VD = (0,
        pE.combineReducers)({
            ixData: wf,
            ixRequest: zf,
            ixSession: $f,
            ixElements: kD,
            ixInstances: cE,
            ixParameters: fE
        })
    }
    );
    var yE = c((GX,EE)=>{
        var UD = _t()
          , BD = Ie()
          , HD = ft()
          , WD = "[object String]";
        function XD(e) {
            return typeof e == "string" || !BD(e) && HD(e) && UD(e) == WD
        }
        EE.exports = XD
    }
    );
    var _E = c((kX,mE)=>{
        var jD = ha()
          , zD = jD("length");
        mE.exports = zD
    }
    );
    var TE = c((VX,bE)=>{
        var KD = "\\ud800-\\udfff"
          , YD = "\\u0300-\\u036f"
          , $D = "\\ufe20-\\ufe2f"
          , QD = "\\u20d0-\\u20ff"
          , ZD = YD + $D + QD
          , JD = "\\ufe0e\\ufe0f"
          , e1 = "\\u200d"
          , t1 = RegExp("[" + e1 + KD + ZD + JD + "]");
        function r1(e) {
            return t1.test(e)
        }
        bE.exports = r1
    }
    );
    var LE = c((UX,RE)=>{
        var OE = "\\ud800-\\udfff"
          , n1 = "\\u0300-\\u036f"
          , i1 = "\\ufe20-\\ufe2f"
          , o1 = "\\u20d0-\\u20ff"
          , a1 = n1 + i1 + o1
          , s1 = "\\ufe0e\\ufe0f"
          , u1 = "[" + OE + "]"
          , za = "[" + a1 + "]"
          , Ka = "\\ud83c[\\udffb-\\udfff]"
          , c1 = "(?:" + za + "|" + Ka + ")"
          , AE = "[^" + OE + "]"
          , wE = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , SE = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , l1 = "\\u200d"
          , xE = c1 + "?"
          , CE = "[" + s1 + "]?"
          , f1 = "(?:" + l1 + "(?:" + [AE, wE, SE].join("|") + ")" + CE + xE + ")*"
          , d1 = CE + xE + f1
          , p1 = "(?:" + [AE + za + "?", za, wE, SE, u1].join("|") + ")"
          , IE = RegExp(Ka + "(?=" + Ka + ")|" + p1 + d1, "g");
        function g1(e) {
            for (var t = IE.lastIndex = 0; IE.test(e); )
                ++t;
            return t
        }
        RE.exports = g1
    }
    );
    var PE = c((BX,NE)=>{
        var v1 = _E()
          , h1 = TE()
          , E1 = LE();
        function y1(e) {
            return h1(e) ? E1(e) : v1(e)
        }
        NE.exports = y1
    }
    );
    var FE = c((HX,qE)=>{
        var m1 = Vn()
          , _1 = Un()
          , b1 = Nt()
          , T1 = yE()
          , I1 = PE()
          , O1 = "[object Map]"
          , A1 = "[object Set]";
        function w1(e) {
            if (e == null)
                return 0;
            if (b1(e))
                return T1(e) ? I1(e) : e.length;
            var t = _1(e);
            return t == O1 || t == A1 ? e.size : m1(e).length
        }
        qE.exports = w1
    }
    );
    var DE = c((WX,ME)=>{
        var S1 = "Expected a function";
        function x1(e) {
            if (typeof e != "function")
                throw new TypeError(S1);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        ME.exports = x1
    }
    );
    var Ya = c((XX,GE)=>{
        var C1 = bt()
          , R1 = function() {
            try {
                var e = C1(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        GE.exports = R1
    }
    );
    var $a = c((jX,VE)=>{
        var kE = Ya();
        function L1(e, t, r) {
            t == "__proto__" && kE ? kE(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        VE.exports = L1
    }
    );
    var BE = c((zX,UE)=>{
        var N1 = $a()
          , P1 = Rn()
          , q1 = Object.prototype
          , F1 = q1.hasOwnProperty;
        function M1(e, t, r) {
            var n = e[t];
            (!(F1.call(e, t) && P1(n, r)) || r === void 0 && !(t in e)) && N1(e, t, r)
        }
        UE.exports = M1
    }
    );
    var XE = c((KX,WE)=>{
        var D1 = BE()
          , G1 = kr()
          , k1 = Mn()
          , HE = it()
          , V1 = tr();
        function U1(e, t, r, n) {
            if (!HE(e))
                return e;
            t = G1(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
                var u = V1(t[i])
                  , f = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype")
                    return e;
                if (i != a) {
                    var E = s[u];
                    f = n ? n(E, u, s) : void 0,
                    f === void 0 && (f = HE(E) ? E : k1(t[i + 1]) ? [] : {})
                }
                D1(s, u, f),
                s = s[u]
            }
            return e
        }
        WE.exports = U1
    }
    );
    var zE = c((YX,jE)=>{
        var B1 = Wn()
          , H1 = XE()
          , W1 = kr();
        function X1(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i; ) {
                var a = t[n]
                  , s = B1(e, a);
                r(s, a) && H1(o, W1(a, e), s)
            }
            return o
        }
        jE.exports = X1
    }
    );
    var YE = c(($X,KE)=>{
        var j1 = qn()
          , z1 = Co()
          , K1 = ta()
          , Y1 = ea()
          , $1 = Object.getOwnPropertySymbols
          , Q1 = $1 ? function(e) {
            for (var t = []; e; )
                j1(t, K1(e)),
                e = z1(e);
            return t
        }
        : Y1;
        KE.exports = Q1
    }
    );
    var QE = c((QX,$E)=>{
        function Z1(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e))
                    t.push(r);
            return t
        }
        $E.exports = Z1
    }
    );
    var JE = c((ZX,ZE)=>{
        var J1 = it()
          , e2 = kn()
          , t2 = QE()
          , r2 = Object.prototype
          , n2 = r2.hasOwnProperty;
        function i2(e) {
            if (!J1(e))
                return t2(e);
            var t = e2(e)
              , r = [];
            for (var n in e)
                n == "constructor" && (t || !n2.call(e, n)) || r.push(n);
            return r
        }
        ZE.exports = i2
    }
    );
    var ty = c((JX,ey)=>{
        var o2 = na()
          , a2 = JE()
          , s2 = Nt();
        function u2(e) {
            return s2(e) ? o2(e, !0) : a2(e)
        }
        ey.exports = u2
    }
    );
    var ny = c((ej,ry)=>{
        var c2 = Jo()
          , l2 = YE()
          , f2 = ty();
        function d2(e) {
            return c2(e, f2, l2)
        }
        ry.exports = d2
    }
    );
    var oy = c((tj,iy)=>{
        var p2 = va()
          , g2 = Tt()
          , v2 = zE()
          , h2 = ny();
        function E2(e, t) {
            if (e == null)
                return {};
            var r = p2(h2(e), function(n) {
                return [n]
            });
            return t = g2(t),
            v2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        iy.exports = E2
    }
    );
    var sy = c((rj,ay)=>{
        var y2 = Tt()
          , m2 = DE()
          , _2 = oy();
        function b2(e, t) {
            return _2(e, m2(y2(t)))
        }
        ay.exports = b2
    }
    );
    var cy = c((nj,uy)=>{
        var T2 = Vn()
          , I2 = Un()
          , O2 = Pr()
          , A2 = Ie()
          , w2 = Nt()
          , S2 = Fn()
          , x2 = kn()
          , C2 = Gn()
          , R2 = "[object Map]"
          , L2 = "[object Set]"
          , N2 = Object.prototype
          , P2 = N2.hasOwnProperty;
        function q2(e) {
            if (e == null)
                return !0;
            if (w2(e) && (A2(e) || typeof e == "string" || typeof e.splice == "function" || S2(e) || C2(e) || O2(e)))
                return !e.length;
            var t = I2(e);
            if (t == R2 || t == L2)
                return !e.size;
            if (x2(e))
                return !T2(e).length;
            for (var r in e)
                if (P2.call(e, r))
                    return !1;
            return !0
        }
        uy.exports = q2
    }
    );
    var fy = c((ij,ly)=>{
        var F2 = $a()
          , M2 = Da()
          , D2 = Tt();
        function G2(e, t) {
            var r = {};
            return t = D2(t, 3),
            M2(e, function(n, i, o) {
                F2(r, i, t(n, i, o))
            }),
            r
        }
        ly.exports = G2
    }
    );
    var py = c((oj,dy)=>{
        function k2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
                ;
            return e
        }
        dy.exports = k2
    }
    );
    var vy = c((aj,gy)=>{
        var V2 = jn();
        function U2(e) {
            return typeof e == "function" ? e : V2
        }
        gy.exports = U2
    }
    );
    var Ey = c((sj,hy)=>{
        var B2 = py()
          , H2 = Ga()
          , W2 = vy()
          , X2 = Ie();
        function j2(e, t) {
            var r = X2(e) ? B2 : H2;
            return r(e, W2(t))
        }
        hy.exports = j2
    }
    );
    var my = c((uj,yy)=>{
        var z2 = Ke()
          , K2 = function() {
            return z2.Date.now()
        };
        yy.exports = K2
    }
    );
    var Ty = c((cj,by)=>{
        var Y2 = it()
          , Qa = my()
          , _y = zn()
          , $2 = "Expected a function"
          , Q2 = Math.max
          , Z2 = Math.min;
        function J2(e, t, r) {
            var n, i, o, a, s, u, f = 0, E = !1, p = !1, d = !0;
            if (typeof e != "function")
                throw new TypeError($2);
            t = _y(t) || 0,
            Y2(r) && (E = !!r.leading,
            p = "maxWait"in r,
            o = p ? Q2(_y(r.maxWait) || 0, t) : o,
            d = "trailing"in r ? !!r.trailing : d);
            function v(L) {
                var H = n
                  , X = i;
                return n = i = void 0,
                f = L,
                a = e.apply(X, H),
                a
            }
            function b(L) {
                return f = L,
                s = setTimeout(m, t),
                E ? v(L) : a
            }
            function _(L) {
                var H = L - u
                  , X = L - f
                  , z = t - H;
                return p ? Z2(z, o - X) : z
            }
            function O(L) {
                var H = L - u
                  , X = L - f;
                return u === void 0 || H >= t || H < 0 || p && X >= o
            }
            function m() {
                var L = Qa();
                if (O(L))
                    return C(L);
                s = setTimeout(m, _(L))
            }
            function C(L) {
                return s = void 0,
                d && n ? v(L) : (n = i = void 0,
                a)
            }
            function A() {
                s !== void 0 && clearTimeout(s),
                f = 0,
                n = u = i = s = void 0
            }
            function N() {
                return s === void 0 ? a : C(Qa())
            }
            function P() {
                var L = Qa()
                  , H = O(L);
                if (n = arguments,
                i = this,
                u = L,
                H) {
                    if (s === void 0)
                        return b(u);
                    if (p)
                        return clearTimeout(s),
                        s = setTimeout(m, t),
                        v(u)
                }
                return s === void 0 && (s = setTimeout(m, t)),
                a
            }
            return P.cancel = A,
            P.flush = N,
            P
        }
        by.exports = J2
    }
    );
    var Oy = c((lj,Iy)=>{
        var eG = Ty()
          , tG = it()
          , rG = "Expected a function";
        function nG(e, t, r) {
            var n = !0
              , i = !0;
            if (typeof e != "function")
                throw new TypeError(rG);
            return tG(r) && (n = "leading"in r ? !!r.leading : n,
            i = "trailing"in r ? !!r.trailing : i),
            eG(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        Iy.exports = nG
    }
    );
    var wy = {};
    Fe(wy, {
        actionListPlaybackChanged: ()=>pr,
        animationFrameChanged: ()=>li,
        clearRequested: ()=>xG,
        elementStateChanged: ()=>os,
        eventListenerAdded: ()=>ci,
        eventStateChanged: ()=>rs,
        instanceAdded: ()=>ns,
        instanceRemoved: ()=>is,
        instanceStarted: ()=>fi,
        mediaQueriesDefined: ()=>ss,
        parameterChanged: ()=>dr,
        playbackRequested: ()=>wG,
        previewRequested: ()=>AG,
        rawDataImported: ()=>Za,
        sessionInitialized: ()=>Ja,
        sessionStarted: ()=>es,
        sessionStopped: ()=>ts,
        stopRequested: ()=>SG,
        testFrameRendered: ()=>CG,
        viewportWidthChanged: ()=>as
    });
    var Ay, iG, oG, aG, sG, uG, cG, lG, fG, dG, pG, gG, vG, hG, EG, yG, mG, _G, bG, TG, IG, OG, Za, Ja, es, ts, AG, wG, SG, xG, ci, CG, rs, li, dr, ns, fi, is, os, pr, as, ss, di = he(()=>{
        "use strict";
        De();
        Ay = ue(Dt()),
        {IX2_RAW_DATA_IMPORTED: iG, IX2_SESSION_INITIALIZED: oG, IX2_SESSION_STARTED: aG, IX2_SESSION_STOPPED: sG, IX2_PREVIEW_REQUESTED: uG, IX2_PLAYBACK_REQUESTED: cG, IX2_STOP_REQUESTED: lG, IX2_CLEAR_REQUESTED: fG, IX2_EVENT_LISTENER_ADDED: dG, IX2_TEST_FRAME_RENDERED: pG, IX2_EVENT_STATE_CHANGED: gG, IX2_ANIMATION_FRAME_CHANGED: vG, IX2_PARAMETER_CHANGED: hG, IX2_INSTANCE_ADDED: EG, IX2_INSTANCE_STARTED: yG, IX2_INSTANCE_REMOVED: mG, IX2_ELEMENT_STATE_CHANGED: _G, IX2_ACTION_LIST_PLAYBACK_CHANGED: bG, IX2_VIEWPORT_WIDTH_CHANGED: TG, IX2_MEDIA_QUERIES_DEFINED: IG} = Te,
        {reifyState: OG} = Ay.IX2VanillaUtils,
        Za = e=>({
            type: iG,
            payload: {
                ...OG(e)
            }
        }),
        Ja = ({hasBoundaryNodes: e, reducedMotion: t})=>({
            type: oG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }),
        es = ()=>({
            type: aG
        }),
        ts = ()=>({
            type: sG
        }),
        AG = ({rawData: e, defer: t})=>({
            type: uG,
            payload: {
                defer: t,
                rawData: e
            }
        }),
        wG = ({actionTypeId: e=Me.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: i, immediate: o, testManual: a, verbose: s, rawData: u})=>({
            type: cG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }),
        SG = e=>({
            type: lG,
            payload: {
                actionListId: e
            }
        }),
        xG = ()=>({
            type: fG
        }),
        ci = (e,t)=>({
            type: dG,
            payload: {
                target: e,
                listenerParams: t
            }
        }),
        CG = (e=1)=>({
            type: pG,
            payload: {
                step: e
            }
        }),
        rs = (e,t)=>({
            type: gG,
            payload: {
                stateKey: e,
                newState: t
            }
        }),
        li = (e,t)=>({
            type: vG,
            payload: {
                now: e,
                parameters: t
            }
        }),
        dr = (e,t)=>({
            type: hG,
            payload: {
                key: e,
                value: t
            }
        }),
        ns = e=>({
            type: EG,
            payload: {
                ...e
            }
        }),
        fi = (e,t)=>({
            type: yG,
            payload: {
                instanceId: e,
                time: t
            }
        }),
        is = e=>({
            type: mG,
            payload: {
                instanceId: e
            }
        }),
        os = (e,t,r,n)=>({
            type: _G,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }),
        pr = ({actionListId: e, isPlaying: t})=>({
            type: bG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }),
        as = ({width: e, mediaQueries: t})=>({
            type: TG,
            payload: {
                width: e,
                mediaQueries: t
            }
        }),
        ss = ()=>({
            type: IG
        })
    }
    );
    var Pe = {};
    Fe(Pe, {
        elementContains: ()=>ls,
        getChildElements: ()=>kG,
        getClosestElement: ()=>$r,
        getProperty: ()=>qG,
        getQuerySelector: ()=>cs,
        getRefType: ()=>fs,
        getSiblingElements: ()=>VG,
        getStyle: ()=>PG,
        getValidDocument: ()=>MG,
        isSiblingNode: ()=>GG,
        matchSelector: ()=>FG,
        queryDocument: ()=>DG,
        setStyle: ()=>NG
    });
    function NG(e, t, r) {
        e.style[t] = r
    }
    function PG(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }
    function qG(e, t) {
        return e[t]
    }
    function FG(e) {
        return t=>t[us](e)
    }
    function cs({id: e, selector: t}) {
        if (e) {
            let r = e;
            if (e.indexOf(Sy) !== -1) {
                let n = e.split(Sy)
                  , i = n[0];
                if (r = n[1],
                i !== document.documentElement.getAttribute(Cy))
                    return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }
    function MG(e) {
        return e == null || e === document.documentElement.getAttribute(Cy) ? document : null
    }
    function DG(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }
    function ls(e, t) {
        return e.contains(t)
    }
    function GG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }
    function kG(e) {
        let t = [];
        for (let r = 0, {length: n} = e || []; r < n; r++) {
            let {children: i} = e[r]
              , {length: o} = i;
            if (o)
                for (let a = 0; a < o; a++)
                    t.push(i[a])
        }
        return t
    }
    function VG(e=[]) {
        let t = []
          , r = [];
        for (let n = 0, {length: i} = e; n < i; n++) {
            let {parentNode: o} = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
                continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null; )
                e.indexOf(a) === -1 && t.push(a),
                a = a.nextElementSibling
        }
        return t
    }
    function fs(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? RG : LG : null
    }
    var xy, us, Sy, RG, LG, Cy, $r, Ry = he(()=>{
        "use strict";
        xy = ue(Dt());
        De();
        ({ELEMENT_MATCHES: us} = xy.IX2BrowserSupport),
        {IX2_ID_DELIMITER: Sy, HTML_ELEMENT: RG, PLAIN_OBJECT: LG, WF_PAGE: Cy} = xe;
        $r = Element.prototype.closest ? (e,t)=>document.documentElement.contains(e) ? e.closest(t) : null : (e,t)=>{
            if (!document.documentElement.contains(e))
                return null;
            let r = e;
            do {
                if (r[us] && r[us](t))
                    return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    }
    );
    var ds = c((pj,Ny)=>{
        var UG = it()
          , Ly = Object.create
          , BG = function() {
            function e() {}
            return function(t) {
                if (!UG(t))
                    return {};
                if (Ly)
                    return Ly(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0,
                r
            }
        }();
        Ny.exports = BG
    }
    );
    var pi = c((gj,Py)=>{
        function HG() {}
        Py.exports = HG
    }
    );
    var vi = c((vj,qy)=>{
        var WG = ds()
          , XG = pi();
        function gi(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        gi.prototype = WG(XG.prototype);
        gi.prototype.constructor = gi;
        qy.exports = gi
    }
    );
    var Gy = c((hj,Dy)=>{
        var Fy = Wt()
          , jG = Pr()
          , zG = Ie()
          , My = Fy ? Fy.isConcatSpreadable : void 0;
        function KG(e) {
            return zG(e) || jG(e) || !!(My && e && e[My])
        }
        Dy.exports = KG
    }
    );
    var Uy = c((Ej,Vy)=>{
        var YG = qn()
          , $G = Gy();
        function ky(e, t, r, n, i) {
            var o = -1
              , a = e.length;
            for (r || (r = $G),
            i || (i = []); ++o < a; ) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? ky(s, t - 1, r, n, i) : YG(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        Vy.exports = ky
    }
    );
    var Hy = c((yj,By)=>{
        var QG = Uy();
        function ZG(e) {
            var t = e == null ? 0 : e.length;
            return t ? QG(e, 1) : []
        }
        By.exports = ZG
    }
    );
    var Xy = c((mj,Wy)=>{
        function JG(e, t, r) {
            switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Wy.exports = JG
    }
    );
    var Ky = c((_j,zy)=>{
        var ek = Xy()
          , jy = Math.max;
        function tk(e, t, r) {
            return t = jy(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, i = -1, o = jy(n.length - t, 0), a = Array(o); ++i < o; )
                    a[i] = n[t + i];
                i = -1;
                for (var s = Array(t + 1); ++i < t; )
                    s[i] = n[i];
                return s[t] = r(a),
                ek(e, this, s)
            }
        }
        zy.exports = tk
    }
    );
    var $y = c((bj,Yy)=>{
        function rk(e) {
            return function() {
                return e
            }
        }
        Yy.exports = rk
    }
    );
    var Jy = c((Tj,Zy)=>{
        var nk = $y()
          , Qy = Ya()
          , ik = jn()
          , ok = Qy ? function(e, t) {
            return Qy(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: nk(t),
                writable: !0
            })
        }
        : ik;
        Zy.exports = ok
    }
    );
    var tm = c((Ij,em)=>{
        var ak = 800
          , sk = 16
          , uk = Date.now;
        function ck(e) {
            var t = 0
              , r = 0;
            return function() {
                var n = uk()
                  , i = sk - (n - r);
                if (r = n,
                i > 0) {
                    if (++t >= ak)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        em.exports = ck
    }
    );
    var nm = c((Oj,rm)=>{
        var lk = Jy()
          , fk = tm()
          , dk = fk(lk);
        rm.exports = dk
    }
    );
    var om = c((Aj,im)=>{
        var pk = Hy()
          , gk = Ky()
          , vk = nm();
        function hk(e) {
            return vk(gk(e, void 0, pk), e + "")
        }
        im.exports = hk
    }
    );
    var um = c((wj,sm)=>{
        var am = ia()
          , Ek = am && new am;
        sm.exports = Ek
    }
    );
    var lm = c((Sj,cm)=>{
        function yk() {}
        cm.exports = yk
    }
    );
    var ps = c((xj,dm)=>{
        var fm = um()
          , mk = lm()
          , _k = fm ? function(e) {
            return fm.get(e)
        }
        : mk;
        dm.exports = _k
    }
    );
    var gm = c((Cj,pm)=>{
        var bk = {};
        pm.exports = bk
    }
    );
    var gs = c((Rj,hm)=>{
        var vm = gm()
          , Tk = Object.prototype
          , Ik = Tk.hasOwnProperty;
        function Ok(e) {
            for (var t = e.name + "", r = vm[t], n = Ik.call(vm, t) ? r.length : 0; n--; ) {
                var i = r[n]
                  , o = i.func;
                if (o == null || o == e)
                    return i.name
            }
            return t
        }
        hm.exports = Ok
    }
    );
    var Ei = c((Lj,Em)=>{
        var Ak = ds()
          , wk = pi()
          , Sk = 4294967295;
        function hi(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = Sk,
            this.__views__ = []
        }
        hi.prototype = Ak(wk.prototype);
        hi.prototype.constructor = hi;
        Em.exports = hi
    }
    );
    var mm = c((Nj,ym)=>{
        function xk(e, t) {
            var r = -1
              , n = e.length;
            for (t || (t = Array(n)); ++r < n; )
                t[r] = e[r];
            return t
        }
        ym.exports = xk
    }
    );
    var bm = c((Pj,_m)=>{
        var Ck = Ei()
          , Rk = vi()
          , Lk = mm();
        function Nk(e) {
            if (e instanceof Ck)
                return e.clone();
            var t = new Rk(e.__wrapped__,e.__chain__);
            return t.__actions__ = Lk(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        _m.exports = Nk
    }
    );
    var Om = c((qj,Im)=>{
        var Pk = Ei()
          , Tm = vi()
          , qk = pi()
          , Fk = Ie()
          , Mk = ft()
          , Dk = bm()
          , Gk = Object.prototype
          , kk = Gk.hasOwnProperty;
        function yi(e) {
            if (Mk(e) && !Fk(e) && !(e instanceof Pk)) {
                if (e instanceof Tm)
                    return e;
                if (kk.call(e, "__wrapped__"))
                    return Dk(e)
            }
            return new Tm(e)
        }
        yi.prototype = qk.prototype;
        yi.prototype.constructor = yi;
        Im.exports = yi
    }
    );
    var wm = c((Fj,Am)=>{
        var Vk = Ei()
          , Uk = ps()
          , Bk = gs()
          , Hk = Om();
        function Wk(e) {
            var t = Bk(e)
              , r = Hk[t];
            if (typeof r != "function" || !(t in Vk.prototype))
                return !1;
            if (e === r)
                return !0;
            var n = Uk(r);
            return !!n && e === n[0]
        }
        Am.exports = Wk
    }
    );
    var Rm = c((Mj,Cm)=>{
        var Sm = vi()
          , Xk = om()
          , jk = ps()
          , vs = gs()
          , zk = Ie()
          , xm = wm()
          , Kk = "Expected a function"
          , Yk = 8
          , $k = 32
          , Qk = 128
          , Zk = 256;
        function Jk(e) {
            return Xk(function(t) {
                var r = t.length
                  , n = r
                  , i = Sm.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var o = t[n];
                    if (typeof o != "function")
                        throw new TypeError(Kk);
                    if (i && !a && vs(o) == "wrapper")
                        var a = new Sm([],!0)
                }
                for (n = a ? n : r; ++n < r; ) {
                    o = t[n];
                    var s = vs(o)
                      , u = s == "wrapper" ? jk(o) : void 0;
                    u && xm(u[0]) && u[1] == (Qk | Yk | $k | Zk) && !u[4].length && u[9] == 1 ? a = a[vs(u[0])].apply(a, u[3]) : a = o.length == 1 && xm(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var f = arguments
                      , E = f[0];
                    if (a && f.length == 1 && zk(E))
                        return a.plant(E).value();
                    for (var p = 0, d = r ? t[p].apply(this, f) : E; ++p < r; )
                        d = t[p].call(this, d);
                    return d
                }
            })
        }
        Cm.exports = Jk
    }
    );
    var Nm = c((Dj,Lm)=>{
        var eV = Rm()
          , tV = eV();
        Lm.exports = tV
    }
    );
    var qm = c((Gj,Pm)=>{
        function rV(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        Pm.exports = rV
    }
    );
    var Mm = c((kj,Fm)=>{
        var nV = qm()
          , hs = zn();
        function iV(e, t, r) {
            return r === void 0 && (r = t,
            t = void 0),
            r !== void 0 && (r = hs(r),
            r = r === r ? r : 0),
            t !== void 0 && (t = hs(t),
            t = t === t ? t : 0),
            nV(hs(e), t, r)
        }
        Fm.exports = iV
    }
    );
    var Xm, jm, zm, Km, oV, aV, sV, uV, cV, lV, fV, dV, pV, gV, vV, hV, EV, yV, mV, Ym, $m, _V, bV, TV, Qm, IV, OV, Zm, AV, Es, Jm, Dm, Gm, e_, Zr, wV, st, t_, SV, ke, Qe, Jr, r_, ys, km, ms, xV, Qr, CV, RV, LV, n_, Vm, NV, Um, PV, qV, FV, Bm, mi, _i, Hm, Wm, i_, o_ = he(()=>{
        "use strict";
        Xm = ue(Nm()),
        jm = ue(Xn()),
        zm = ue(Mm());
        De();
        _s();
        di();
        Km = ue(Dt()),
        {MOUSE_CLICK: oV, MOUSE_SECOND_CLICK: aV, MOUSE_DOWN: sV, MOUSE_UP: uV, MOUSE_OVER: cV, MOUSE_OUT: lV, DROPDOWN_CLOSE: fV, DROPDOWN_OPEN: dV, SLIDER_ACTIVE: pV, SLIDER_INACTIVE: gV, TAB_ACTIVE: vV, TAB_INACTIVE: hV, NAVBAR_CLOSE: EV, NAVBAR_OPEN: yV, MOUSE_MOVE: mV, PAGE_SCROLL_DOWN: Ym, SCROLL_INTO_VIEW: $m, SCROLL_OUT_OF_VIEW: _V, PAGE_SCROLL_UP: bV, SCROLLING_IN_VIEW: TV, PAGE_FINISH: Qm, ECOMMERCE_CART_CLOSE: IV, ECOMMERCE_CART_OPEN: OV, PAGE_START: Zm, PAGE_SCROLL: AV} = Ye,
        Es = "COMPONENT_ACTIVE",
        Jm = "COMPONENT_INACTIVE",
        {COLON_DELIMITER: Dm} = xe,
        {getNamespacedParameterId: Gm} = Km.IX2VanillaUtils,
        e_ = e=>t=>typeof t == "object" && e(t) ? !0 : t,
        Zr = e_(({element: e, nativeEvent: t})=>e === t.target),
        wV = e_(({element: e, nativeEvent: t})=>e.contains(t.target)),
        st = (0,
        Xm.default)([Zr, wV]),
        t_ = (e,t)=>{
            if (t) {
                let {ixData: r} = e.getState()
                  , {events: n} = r
                  , i = n[t];
                if (i && !xV[i.eventTypeId])
                    return i
            }
            return null
        }
        ,
        SV = ({store: e, event: t})=>{
            let {action: r} = t
              , {autoStopEventId: n} = r.config;
            return !!t_(e, n)
        }
        ,
        ke = ({store: e, event: t, element: r, eventStateKey: n},i)=>{
            let {action: o, id: a} = t
              , {actionListId: s, autoStopEventId: u} = o.config
              , f = t_(e, u);
            return f && gr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Dm + n.split(Dm)[1],
                actionListId: (0,
                jm.default)(f, "action.config.actionListId")
            }),
            gr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            en({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            i
        }
        ,
        Qe = (e,t)=>(r,n)=>e(r, n) === !0 ? t(r, n) : n,
        Jr = {
            handler: Qe(st, ke)
        },
        r_ = {
            ...Jr,
            types: [Es, Jm].join(" ")
        },
        ys = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        km = "mouseover mouseout",
        ms = {
            types: ys
        },
        xV = {
            PAGE_START: Zm,
            PAGE_FINISH: Qm
        },
        Qr = (()=>{
            let e = window.pageXOffset !== void 0
              , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return ()=>({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0,
                zm.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )(),
        CV = (e,t)=>!(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        RV = ({element: e, nativeEvent: t})=>{
            let {type: r, target: n, relatedTarget: i} = t
              , o = e.contains(n);
            if (r === "mouseover" && o)
                return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }
        ,
        LV = e=>{
            let {element: t, event: {config: r}} = e
              , {clientWidth: n, clientHeight: i} = Qr()
              , o = r.scrollOffsetValue
              , u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return CV(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }
        ,
        n_ = e=>(t,r)=>{
            let {type: n} = t.nativeEvent
              , i = [Es, Jm].indexOf(n) !== -1 ? n === Es : r.isActive
              , o = {
                ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }
        ,
        Vm = e=>(t,r)=>{
            let n = {
                elementHovered: RV(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }
        ,
        NV = e=>(t,r)=>{
            let n = {
                ...r,
                elementVisible: LV(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }
        ,
        Um = e=>(t,r={})=>{
            let {stiffScrollTop: n, scrollHeight: i, innerHeight: o} = Qr()
              , {event: {config: a, eventTypeId: s}} = t
              , {scrollOffsetValue: u, scrollOffsetUnit: f} = a
              , E = f === "PX"
              , p = i - o
              , d = Number((n / p).toFixed(2));
            if (r && r.percentTop === d)
                return r;
            let v = (E ? u : o * (u || 0) / 100) / p, b, _, O = 0;
            r && (b = d > r.percentTop,
            _ = r.scrollingDown !== b,
            O = _ ? d : r.anchorTop);
            let m = s === Ym ? d >= O + v : d <= O - v
              , C = {
                ...r,
                percentTop: d,
                inBounds: m,
                anchorTop: O,
                scrollingDown: b
            };
            return r && m && (_ || C.inBounds !== r.inBounds) && e(t, C) || C
        }
        ,
        PV = (e,t)=>e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        qV = e=>(t,r)=>{
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t),
            n
        }
        ,
        FV = e=>(t,r)=>{
            let n = {
                started: !0
            };
            return r || e(t),
            n
        }
        ,
        Bm = e=>(t,r={
            clickCount: 0
        })=>{
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }
        ,
        mi = (e=!0)=>({
            ...r_,
            handler: Qe(e ? st : Zr, n_((t,r)=>r.isActive ? Jr.handler(t, r) : r))
        }),
        _i = (e=!0)=>({
            ...r_,
            handler: Qe(e ? st : Zr, n_((t,r)=>r.isActive ? r : Jr.handler(t, r)))
        }),
        Hm = {
            ...ms,
            handler: NV((e,t)=>{
                let {elementVisible: r} = t
                  , {event: n, store: i} = e
                  , {ixData: o} = i.getState()
                  , {events: a} = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === $m === r ? (ke(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            )
        },
        Wm = .05,
        i_ = {
            [pV]: mi(),
            [gV]: _i(),
            [dV]: mi(),
            [fV]: _i(),
            [yV]: mi(!1),
            [EV]: _i(!1),
            [vV]: mi(),
            [hV]: _i(),
            [OV]: {
                types: "ecommerce-cart-open",
                handler: Qe(st, ke)
            },
            [IV]: {
                types: "ecommerce-cart-close",
                handler: Qe(st, ke)
            },
            [oV]: {
                types: "click",
                handler: Qe(st, Bm((e,{clickCount: t})=>{
                    SV(e) ? t === 1 && ke(e) : ke(e)
                }
                ))
            },
            [aV]: {
                types: "click",
                handler: Qe(st, Bm((e,{clickCount: t})=>{
                    t === 2 && ke(e)
                }
                ))
            },
            [sV]: {
                ...Jr,
                types: "mousedown"
            },
            [uV]: {
                ...Jr,
                types: "mouseup"
            },
            [cV]: {
                types: km,
                handler: Qe(st, Vm((e,t)=>{
                    t.elementHovered && ke(e)
                }
                ))
            },
            [lV]: {
                types: km,
                handler: Qe(st, Vm((e,t)=>{
                    t.elementHovered || ke(e)
                }
                ))
            },
            [mV]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i},o={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                })=>{
                    let {basedOn: a, selectedAxis: s, continuousParameterGroupId: u, reverse: f, restingState: E=0} = r
                      , {clientX: p=o.clientX, clientY: d=o.clientY, pageX: v=o.pageX, pageY: b=o.pageY} = n
                      , _ = s === "X_AXIS"
                      , O = n.type === "mouseout"
                      , m = E / 100
                      , C = u
                      , A = !1;
                    switch (a) {
                    case nt.VIEWPORT:
                        {
                            m = _ ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(d, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case nt.PAGE:
                        {
                            let {scrollLeft: N, scrollTop: P, scrollWidth: L, scrollHeight: H} = Qr();
                            m = _ ? Math.min(N + v, L) / L : Math.min(P + b, H) / H;
                            break
                        }
                    case nt.ELEMENT:
                    default:
                        {
                            C = Gm(i, u);
                            let N = n.type.indexOf("mouse") === 0;
                            if (N && st({
                                element: t,
                                nativeEvent: n
                            }) !== !0)
                                break;
                            let P = t.getBoundingClientRect()
                              , {left: L, top: H, width: X, height: z} = P;
                            if (!N && !PV({
                                left: p,
                                top: d
                            }, P))
                                break;
                            A = !0,
                            m = _ ? (p - L) / X : (d - H) / z;
                            break
                        }
                    }
                    return O && (m > 1 - Wm || m < Wm) && (m = Math.round(m)),
                    (a !== nt.ELEMENT || A || A !== o.elementHovered) && (m = f ? 1 - m : m,
                    e.dispatch(dr(C, m))),
                    {
                        elementHovered: A,
                        clientX: p,
                        clientY: d,
                        pageX: v,
                        pageY: b
                    }
                }
            },
            [AV]: {
                types: ys,
                handler: ({store: e, eventConfig: t})=>{
                    let {continuousParameterGroupId: r, reverse: n} = t
                      , {scrollTop: i, scrollHeight: o, clientHeight: a} = Qr()
                      , s = i / (o - a);
                    s = n ? 1 - s : s,
                    e.dispatch(dr(r, s))
                }
            },
            [TV]: {
                types: ys,
                handler: ({element: e, store: t, eventConfig: r, eventStateKey: n},i={
                    scrollPercent: 0
                })=>{
                    let {scrollLeft: o, scrollTop: a, scrollWidth: s, scrollHeight: u, clientHeight: f} = Qr()
                      , {basedOn: E, selectedAxis: p, continuousParameterGroupId: d, startsEntering: v, startsExiting: b, addEndOffset: _, addStartOffset: O, addOffsetValue: m=0, endOffsetValue: C=0} = r
                      , A = p === "X_AXIS";
                    if (E === nt.VIEWPORT) {
                        let N = A ? o / s : a / u;
                        return N !== i.scrollPercent && t.dispatch(dr(d, N)),
                        {
                            scrollPercent: N
                        }
                    } else {
                        let N = Gm(n, d)
                          , P = e.getBoundingClientRect()
                          , L = (O ? m : 0) / 100
                          , H = (_ ? C : 0) / 100;
                        L = v ? L : 1 - L,
                        H = b ? H : 1 - H;
                        let X = P.top + Math.min(P.height * L, f)
                          , Q = P.top + P.height * H - X
                          , G = Math.min(f + Q, u)
                          , g = Math.min(Math.max(0, f - X), G) / G;
                        return g !== i.scrollPercent && t.dispatch(dr(N, g)),
                        {
                            scrollPercent: g
                        }
                    }
                }
            },
            [$m]: Hm,
            [_V]: Hm,
            [Ym]: {
                ...ms,
                handler: Um((e,t)=>{
                    t.scrollingDown && ke(e)
                }
                )
            },
            [bV]: {
                ...ms,
                handler: Um((e,t)=>{
                    t.scrollingDown || ke(e)
                }
                )
            },
            [Qm]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Qe(Zr, qV(ke))
            },
            [Zm]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Qe(Zr, FV(ke))
            }
        }
    }
    );
    var T_ = {};
    Fe(T_, {
        observeRequests: ()=>tU,
        startActionGroup: ()=>en,
        startEngine: ()=>wi,
        stopActionGroup: ()=>gr,
        stopAllActionGroups: ()=>m_,
        stopEngine: ()=>Si
    });
    function tU(e) {
        Gt({
            store: e,
            select: ({ixRequest: t})=>t.preview,
            onChange: iU
        }),
        Gt({
            store: e,
            select: ({ixRequest: t})=>t.playback,
            onChange: oU
        }),
        Gt({
            store: e,
            select: ({ixRequest: t})=>t.stop,
            onChange: aU
        }),
        Gt({
            store: e,
            select: ({ixRequest: t})=>t.clear,
            onChange: sU
        })
    }
    function rU(e) {
        Gt({
            store: e,
            select: ({ixSession: t})=>t.mediaQueryKey,
            onChange: ()=>{
                Si(e),
                v_({
                    store: e,
                    elementApi: Pe
                }),
                wi({
                    store: e,
                    allowEvents: !0
                }),
                h_()
            }
        })
    }
    function nU(e, t) {
        let r = Gt({
            store: e,
            select: ({ixSession: n})=>n.tick,
            onChange: n=>{
                t(n),
                r()
            }
        })
    }
    function iU({rawData: e, defer: t}, r) {
        let n = ()=>{
            wi({
                store: r,
                rawData: e,
                allowEvents: !0
            }),
            h_()
        }
        ;
        t ? setTimeout(n, 0) : n()
    }
    function h_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }
    function oU(e, t) {
        let {actionTypeId: r, actionListId: n, actionItemId: i, eventId: o, allowEvents: a, immediate: s, testManual: u, verbose: f=!0} = e
          , {rawData: E} = e;
        if (n && i && E && s) {
            let p = E.actionLists[n];
            p && (E = WV({
                actionList: p,
                actionItemId: i,
                rawData: E
            }))
        }
        if (wi({
            store: t,
            rawData: E,
            allowEvents: a,
            testManual: u
        }),
        n && r === Me.GENERAL_START_ACTION || bs(r)) {
            gr({
                store: t,
                actionListId: n
            }),
            y_({
                store: t,
                actionListId: n,
                eventId: o
            });
            let p = en({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: s,
                verbose: f
            });
            f && p && t.dispatch(pr({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }
    function aU({actionListId: e}, t) {
        e ? gr({
            store: t,
            actionListId: e
        }) : m_({
            store: t
        }),
        Si(t)
    }
    function sU(e, t) {
        Si(t),
        v_({
            store: t,
            elementApi: Pe
        })
    }
    function wi({store: e, rawData: t, allowEvents: r, testManual: n}) {
        let {ixSession: i} = e.getState();
        t && e.dispatch(Za(t)),
        i.active || (e.dispatch(Ja({
            hasBoundaryNodes: !!document.querySelector(Ti),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })),
        r && (pU(e),
        uU(),
        e.getState().ixSession.hasDefinedMediaQueries && rU(e)),
        e.dispatch(es()),
        cU(e, n))
    }
    function uU() {
        let {documentElement: e} = document;
        e.className.indexOf(a_) === -1 && (e.className += ` ${a_}`)
    }
    function cU(e, t) {
        let r = n=>{
            let {ixSession: i, ixParameters: o} = e.getState();
            i.active && (e.dispatch(li(n, o)),
            t ? nU(e, r) : requestAnimationFrame(r))
        }
        ;
        r(window.performance.now())
    }
    function Si(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: r} = t;
            r.forEach(lU),
            KV(),
            e.dispatch(ts())
        }
    }
    function lU({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }
    function fU({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: i, actionListId: o, parameterGroup: a, smoothing: s, restingValue: u}) {
        let {ixData: f, ixSession: E} = e.getState()
          , {events: p} = f
          , d = p[n]
          , {eventTypeId: v} = d
          , b = {}
          , _ = {}
          , O = []
          , {continuousActionGroups: m} = a
          , {id: C} = a;
        XV(v, i) && (C = jV(t, C));
        let A = E.hasBoundaryNodes && r ? $r(r, Ti) : null;
        m.forEach(N=>{
            let {keyframe: P, actionItems: L} = N;
            L.forEach(H=>{
                let {actionTypeId: X} = H
                  , {target: z} = H.config;
                if (!z)
                    return;
                let Q = z.boundaryMode ? A : null
                  , G = YV(z) + Ts + X;
                if (_[G] = dU(_[G], P, H),
                !b[G]) {
                    b[G] = !0;
                    let {config: x} = H;
                    Ii({
                        config: x,
                        event: d,
                        eventTarget: r,
                        elementRoot: Q,
                        elementApi: Pe
                    }).forEach(g=>{
                        O.push({
                            element: g,
                            key: G
                        })
                    }
                    )
                }
            }
            )
        }
        ),
        O.forEach(({element: N, key: P})=>{
            let L = _[P]
              , H = (0,
            vt.default)(L, "[0].actionItems[0]", {})
              , {actionTypeId: X} = H
              , z = Ai(X) ? Os(X)(N, H) : null
              , Q = Is({
                element: N,
                actionItem: H,
                elementApi: Pe
            }, z);
            As({
                store: e,
                element: N,
                eventId: n,
                actionListId: o,
                actionItem: H,
                destination: Q,
                continuous: !0,
                parameterId: C,
                actionGroups: L,
                smoothing: s,
                restingValue: u,
                pluginInstance: z
            })
        }
        )
    }
    function dU(e=[], t, r) {
        let n = [...e], i;
        return n.some((o,a)=>o.keyframe === t ? (i = a,
        !0) : !1),
        i == null && (i = n.length,
        n.push({
            keyframe: t,
            actionItems: []
        })),
        n[i].actionItems.push(r),
        n
    }
    function pU(e) {
        let {ixData: t} = e.getState()
          , {eventTypeMap: r} = t;
        E_(e),
        (0,
        vr.default)(r, (i,o)=>{
            let a = i_[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            mU({
                logic: a,
                store: e,
                events: i
            })
        }
        );
        let {ixSession: n} = e.getState();
        n.eventListeners.length && vU(e)
    }
    function vU(e) {
        let t = ()=>{
            E_(e)
        }
        ;
        gU.forEach(r=>{
            window.addEventListener(r, t),
            e.dispatch(ci(window, [r, t]))
        }
        ),
        t()
    }
    function E_(e) {
        let {ixSession: t, ixData: r} = e.getState()
          , n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {mediaQueries: i} = r;
            e.dispatch(as({
                width: n,
                mediaQueries: i
            }))
        }
    }
    function mU({logic: e, store: t, events: r}) {
        _U(r);
        let {types: n, handler: i} = e
          , {ixData: o} = t.getState()
          , {actionLists: a} = o
          , s = hU(r, yU);
        if (!(0,
        c_.default)(s))
            return;
        (0,
        vr.default)(s, (p,d)=>{
            let v = r[d]
              , {action: b, id: _, mediaQueries: O=o.mediaQueryKeys} = v
              , {actionListId: m} = b.config;
            $V(O, o.mediaQueryKeys) || t.dispatch(ss()),
            b.actionTypeId === Me.GENERAL_CONTINUOUS_ACTION && (Array.isArray(v.config) ? v.config : [v.config]).forEach(A=>{
                let {continuousParameterGroupId: N} = A
                  , P = (0,
                vt.default)(a, `${m}.continuousParameterGroups`, [])
                  , L = (0,
                u_.default)(P, ({id: z})=>z === N)
                  , H = (A.smoothing || 0) / 100
                  , X = (A.restingState || 0) / 100;
                L && p.forEach((z,Q)=>{
                    let G = _ + Ts + Q;
                    fU({
                        store: t,
                        eventStateKey: G,
                        eventTarget: z,
                        eventId: _,
                        eventConfig: A,
                        actionListId: m,
                        parameterGroup: L,
                        smoothing: H,
                        restingValue: X
                    })
                }
                )
            }
            ),
            (b.actionTypeId === Me.GENERAL_START_ACTION || bs(b.actionTypeId)) && y_({
                store: t,
                actionListId: m,
                eventId: _
            })
        }
        );
        let u = p=>{
            let {ixSession: d} = t.getState();
            EU(s, (v,b,_)=>{
                let O = r[b]
                  , m = d.eventState[_]
                  , {action: C, mediaQueries: A=o.mediaQueryKeys} = O;
                if (!Oi(A, d.mediaQueryKey))
                    return;
                let N = (P={})=>{
                    let L = i({
                        store: t,
                        element: v,
                        event: O,
                        eventConfig: P,
                        nativeEvent: p,
                        eventStateKey: _
                    }, m);
                    QV(L, m) || t.dispatch(rs(_, L))
                }
                ;
                C.actionTypeId === Me.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(O.config) ? O.config : [O.config]).forEach(N) : N()
            }
            )
        }
          , f = (0,
        p_.default)(u, eU)
          , E = ({target: p=document, types: d, throttle: v})=>{
            d.split(" ").filter(Boolean).forEach(b=>{
                let _ = v ? f : u;
                p.addEventListener(b, _),
                t.dispatch(ci(p, [b, _]))
            }
            )
        }
        ;
        Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e)
    }
    function _U(e) {
        if (!JV)
            return;
        let t = {}
          , r = "";
        for (let n in e) {
            let {eventTypeId: i, target: o} = e[n]
              , a = cs(o);
            t[a] || (i === Ye.MOUSE_CLICK || i === Ye.MOUSE_SECOND_CLICK) && (t[a] = !0,
            r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r,
            document.body.appendChild(n)
        }
    }
    function y_({store: e, actionListId: t, eventId: r}) {
        let {ixData: n, ixSession: i} = e.getState()
          , {actionLists: o, events: a} = n
          , s = a[r]
          , u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let f = (0,
            vt.default)(u, "actionItemGroups[0].actionItems", [])
              , E = (0,
            vt.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!Oi(E, i.mediaQueryKey))
                return;
            f.forEach(p=>{
                let {config: d, actionTypeId: v} = p
                  , b = d?.target?.useEventTarget === !0 && d?.target?.objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : d
                  , _ = Ii({
                    config: b,
                    event: s,
                    elementApi: Pe
                })
                  , O = Ai(v);
                _.forEach(m=>{
                    let C = O ? Os(v)(m, p) : null;
                    As({
                        destination: Is({
                            element: m,
                            actionItem: p,
                            elementApi: Pe
                        }, C),
                        immediate: !0,
                        store: e,
                        element: m,
                        eventId: r,
                        actionItem: p,
                        actionListId: t,
                        pluginInstance: C
                    })
                }
                )
            }
            )
        }
    }
    function m_({store: e}) {
        let {ixInstances: t} = e.getState();
        (0,
        vr.default)(t, r=>{
            if (!r.continuous) {
                let {actionListId: n, verbose: i} = r;
                ws(r, e),
                i && e.dispatch(pr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function gr({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i}) {
        let {ixInstances: o, ixSession: a} = e.getState()
          , s = a.hasBoundaryNodes && r ? $r(r, Ti) : null;
        (0,
        vr.default)(o, u=>{
            let f = (0,
            vt.default)(u, "actionItem.config.target.boundaryMode")
              , E = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && E) {
                if (s && f && !ls(s, u.element))
                    return;
                ws(u, e),
                u.verbose && e.dispatch(pr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function en({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: o=0, immediate: a, verbose: s}) {
        let {ixData: u, ixSession: f} = e.getState()
          , {events: E} = u
          , p = E[t] || {}
          , {mediaQueries: d=u.mediaQueryKeys} = p
          , v = (0,
        vt.default)(u, `actionLists.${i}`, {})
          , {actionItemGroups: b, useFirstGroupAsInitialState: _} = v;
        if (!b || !b.length)
            return !1;
        o >= b.length && (0,
        vt.default)(p, "config.loop") && (o = 0),
        o === 0 && _ && o++;
        let m = (o === 0 || o === 1 && _) && bs(p.action?.actionTypeId) ? p.config.delay : void 0
          , C = (0,
        vt.default)(b, [o, "actionItems"], []);
        if (!C.length || !Oi(d, f.mediaQueryKey))
            return !1;
        let A = f.hasBoundaryNodes && r ? $r(r, Ti) : null
          , N = UV(C)
          , P = !1;
        return C.forEach((L,H)=>{
            let {config: X, actionTypeId: z} = L
              , Q = Ai(z)
              , {target: G} = X;
            if (!G)
                return;
            let x = G.boundaryMode ? A : null;
            Ii({
                config: X,
                event: p,
                eventTarget: r,
                elementRoot: x,
                elementApi: Pe
            }).forEach((R,F)=>{
                let D = Q ? Os(z)(R, L) : null
                  , Z = Q ? ZV(z)(R, L) : null;
                P = !0;
                let J = N === H && F === 0
                  , q = BV({
                    element: R,
                    actionItem: L
                })
                  , V = Is({
                    element: R,
                    actionItem: L,
                    elementApi: Pe
                }, D);
                As({
                    store: e,
                    element: R,
                    actionItem: L,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: J,
                    computedStyle: q,
                    destination: V,
                    immediate: a,
                    verbose: s,
                    pluginInstance: D,
                    pluginDuration: Z,
                    instanceDelay: m
                })
            }
            )
        }
        ),
        P
    }
    function As(e) {
        let {store: t, computedStyle: r, ...n} = e, {element: i, actionItem: o, immediate: a, pluginInstance: s, continuous: u, restingValue: f, eventId: E} = n, p = !u, d = kV(), {ixElements: v, ixSession: b, ixData: _} = t.getState(), O = GV(v, i), {refState: m} = v[O] || {}, C = fs(i), A = b.reducedMotion && Xo[o.actionTypeId], N;
        if (A && u)
            switch (_.events[E]?.eventTypeId) {
            case Ye.MOUSE_MOVE:
            case Ye.MOUSE_MOVE_IN_VIEWPORT:
                N = f;
                break;
            default:
                N = .5;
                break
            }
        let P = HV(i, m, r, o, Pe, s);
        if (t.dispatch(ns({
            instanceId: d,
            elementId: O,
            origin: P,
            refType: C,
            skipMotion: A,
            skipToValue: N,
            ...n
        })),
        __(document.body, "ix2-animation-started", d),
        a) {
            bU(t, d);
            return
        }
        Gt({
            store: t,
            select: ({ixInstances: L})=>L[d],
            onChange: b_
        }),
        p && t.dispatch(fi(d, b.tick))
    }
    function ws(e, t) {
        __(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {elementId: r, actionItem: n} = e
          , {ixElements: i} = t.getState()
          , {ref: o, refType: a} = i[r] || {};
        a === g_ && zV(o, n, Pe),
        t.dispatch(is(e.id))
    }
    function __(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r),
        e.dispatchEvent(n)
    }
    function bU(e, t) {
        let {ixParameters: r} = e.getState();
        e.dispatch(fi(t, 0)),
        e.dispatch(li(performance.now(), r));
        let {ixInstances: n} = e.getState();
        b_(n[t], e)
    }
    function b_(e, t) {
        let {active: r, continuous: n, complete: i, elementId: o, actionItem: a, actionTypeId: s, renderType: u, current: f, groupIndex: E, eventId: p, eventTarget: d, eventStateKey: v, actionListId: b, isCarrier: _, styleProp: O, verbose: m, pluginInstance: C} = e
          , {ixData: A, ixSession: N} = t.getState()
          , {events: P} = A
          , L = P[p] || {}
          , {mediaQueries: H=A.mediaQueryKeys} = L;
        if (Oi(H, N.mediaQueryKey) && (n || r || i)) {
            if (f || u === DV && i) {
                t.dispatch(os(o, s, f, a));
                let {ixElements: X} = t.getState()
                  , {ref: z, refType: Q, refState: G} = X[o] || {}
                  , x = G && G[s];
                (Q === g_ || Ai(s)) && VV(z, G, x, p, a, O, Pe, u, C)
            }
            if (i) {
                if (_) {
                    let X = en({
                        store: t,
                        eventId: p,
                        eventTarget: d,
                        eventStateKey: v,
                        actionListId: b,
                        groupIndex: E + 1,
                        verbose: m
                    });
                    m && !X && t.dispatch(pr({
                        actionListId: b,
                        isPlaying: !1
                    }))
                }
                ws(e, t)
            }
        }
    }
    var u_, vt, c_, l_, f_, d_, vr, p_, bi, MV, bs, Ts, Ti, g_, DV, a_, Ii, GV, Is, Gt, kV, VV, v_, UV, BV, HV, WV, XV, jV, Oi, zV, KV, YV, $V, QV, Ai, Os, ZV, s_, JV, eU, gU, hU, EU, yU, _s = he(()=>{
        "use strict";
        u_ = ue(_a()),
        vt = ue(Xn()),
        c_ = ue(FE()),
        l_ = ue(sy()),
        f_ = ue(cy()),
        d_ = ue(fy()),
        vr = ue(Ey()),
        p_ = ue(Oy());
        De();
        bi = ue(Dt());
        di();
        Ry();
        o_();
        MV = Object.keys(In),
        bs = e=>MV.includes(e),
        {COLON_DELIMITER: Ts, BOUNDARY_SELECTOR: Ti, HTML_ELEMENT: g_, RENDER_GENERAL: DV, W_MOD_IX: a_} = xe,
        {getAffectedElements: Ii, getElementId: GV, getDestinationValues: Is, observeStore: Gt, getInstanceId: kV, renderHTMLElement: VV, clearAllStyles: v_, getMaxDurationItemIndex: UV, getComputedStyle: BV, getInstanceOrigin: HV, reduceListToGroup: WV, shouldNamespaceEventParameter: XV, getNamespacedParameterId: jV, shouldAllowMediaQuery: Oi, cleanupHTMLElement: zV, clearObjectCache: KV, stringifyTarget: YV, mediaQueriesEqual: $V, shallowEqual: QV} = bi.IX2VanillaUtils,
        {isPluginType: Ai, createPluginInstance: Os, getPluginDuration: ZV} = bi.IX2VanillaPlugins,
        s_ = navigator.userAgent,
        JV = s_.match(/iPad/i) || s_.match(/iPhone/),
        eU = 12;
        gU = ["resize", "orientationchange"];
        hU = (e,t)=>(0,
        l_.default)((0,
        d_.default)(e, t), f_.default),
        EU = (e,t)=>{
            (0,
            vr.default)(e, (r,n)=>{
                r.forEach((i,o)=>{
                    let a = n + Ts + o;
                    t(i, n, a)
                }
                )
            }
            )
        }
        ,
        yU = e=>{
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Ii({
                config: t,
                elementApi: Pe
            })
        }
    }
    );
    var O_ = c(ht=>{
        "use strict";
        var TU = ln().default
          , IU = ou().default;
        Object.defineProperty(ht, "__esModule", {
            value: !0
        });
        ht.actions = void 0;
        ht.destroy = I_;
        ht.init = xU;
        ht.setEnv = SU;
        ht.store = void 0;
        Wl();
        var OU = Bo()
          , AU = IU((hE(),
        Je(vE)))
          , Ss = (_s(),
        Je(T_))
          , wU = TU((di(),
        Je(wy)));
        ht.actions = wU;
        var xs = ht.store = (0,
        OU.createStore)(AU.default);
        function SU(e) {
            e() && (0,
            Ss.observeRequests)(xs)
        }
        function xU(e) {
            I_(),
            (0,
            Ss.startEngine)({
                store: xs,
                rawData: e,
                allowEvents: !0
            })
        }
        function I_() {
            (0,
            Ss.stopEngine)(xs)
        }
    }
    );
    var x_ = c((Kj,S_)=>{
        "use strict";
        var A_ = Ve()
          , w_ = O_();
        w_.setEnv(A_.env);
        A_.define("ix2", S_.exports = function() {
            return w_
        }
        )
    }
    );
    var R_ = c((Yj,C_)=>{
        "use strict";
        var hr = Ve();
        hr.define("links", C_.exports = function(e, t) {
            var r = {}, n = e(window), i, o = hr.env(), a = window.location, s = document.createElement("a"), u = "w--current", f = /index\.(html|php)$/, E = /\/$/, p, d;
            r.ready = r.design = r.preview = v;
            function v() {
                i = o && hr.env("design"),
                d = hr.env("slug") || a.pathname || "",
                hr.scroll.off(_),
                p = [];
                for (var m = document.links, C = 0; C < m.length; ++C)
                    b(m[C]);
                p.length && (hr.scroll.on(_),
                _())
            }
            function b(m) {
                if (!m.getAttribute("hreflang")) {
                    var C = i && m.getAttribute("href-disabled") || m.getAttribute("href");
                    if (s.href = C,
                    !(C.indexOf(":") >= 0)) {
                        var A = e(m);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                                return;
                            var N = e(s.hash);
                            N.length && p.push({
                                link: A,
                                sec: N,
                                active: !1
                            });
                            return
                        }
                        if (!(C === "#" || C === "")) {
                            var P = s.href === a.href || C === d || f.test(C) && E.test(d);
                            O(A, u, P)
                        }
                    }
                }
            }
            function _() {
                var m = n.scrollTop()
                  , C = n.height();
                t.each(p, function(A) {
                    if (!A.link.attr("hreflang")) {
                        var N = A.link
                          , P = A.sec
                          , L = P.offset().top
                          , H = P.outerHeight()
                          , X = C * .5
                          , z = P.is(":visible") && L + H - X >= m && L + X <= m + C;
                        A.active !== z && (A.active = z,
                        O(N, u, z))
                    }
                })
            }
            function O(m, C, A) {
                var N = m.hasClass(C);
                A && N || !A && !N || (A ? m.addClass(C) : m.removeClass(C))
            }
            return r
        }
        )
    }
    );
    var N_ = c(($j,L_)=>{
        "use strict";
        var xi = Ve();
        xi.define("scroll", L_.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , r = window.location
              , n = b() ? null : window.history
              , i = e(window)
              , o = e(document)
              , a = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(x) {
                window.setTimeout(x, 15)
            }
              , u = xi.env("editor") ? ".w-editor-body" : "body"
              , f = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])"
              , E = 'a[href="#"]'
              , p = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")"
              , d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , v = document.createElement("style");
            v.appendChild(document.createTextNode(d));
            function b() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
            function O(x) {
                return _.test(x.hash) && x.host + x.pathname === r.host + r.pathname
            }
            let m = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function C() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || m.matches
            }
            function A(x, g) {
                var R;
                switch (g) {
                case "add":
                    R = x.attr("tabindex"),
                    R ? x.attr("data-wf-tabindex-swap", R) : x.attr("tabindex", "-1");
                    break;
                case "remove":
                    R = x.attr("data-wf-tabindex-swap"),
                    R ? (x.attr("tabindex", R),
                    x.removeAttr("data-wf-tabindex-swap")) : x.removeAttr("tabindex");
                    break
                }
                x.toggleClass("wf-force-outline-none", g === "add")
            }
            function N(x) {
                var g = x.currentTarget;
                if (!(xi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(g.className))) {
                    var R = O(g) ? g.hash : "";
                    if (R !== "") {
                        var F = e(R);
                        F.length && (x && (x.preventDefault(),
                        x.stopPropagation()),
                        P(R, x),
                        window.setTimeout(function() {
                            L(F, function() {
                                A(F, "add"),
                                F.get(0).focus({
                                    preventScroll: !0
                                }),
                                A(F, "remove")
                            })
                        }, x ? 0 : 300))
                    }
                }
            }
            function P(x) {
                if (r.hash !== x && n && n.pushState && !(xi.env.chrome && r.protocol === "file:")) {
                    var g = n.state && n.state.hash;
                    g !== x && n.pushState({
                        hash: x
                    }, "", x)
                }
            }
            function L(x, g) {
                var R = i.scrollTop()
                  , F = H(x);
                if (R !== F) {
                    var D = X(x, R, F)
                      , Z = Date.now()
                      , J = function() {
                        var q = Date.now() - Z;
                        window.scroll(0, z(R, F, q, D)),
                        q <= D ? s(J) : typeof g == "function" && g()
                    };
                    s(J)
                }
            }
            function H(x) {
                var g = e(f)
                  , R = g.css("position") === "fixed" ? g.outerHeight() : 0
                  , F = x.offset().top - R;
                if (x.data("scroll") === "mid") {
                    var D = i.height() - R
                      , Z = x.outerHeight();
                    Z < D && (F -= Math.round((D - Z) / 2))
                }
                return F
            }
            function X(x, g, R) {
                if (C())
                    return 0;
                var F = 1;
                return a.add(x).each(function(D, Z) {
                    var J = parseFloat(Z.getAttribute("data-scroll-time"));
                    !isNaN(J) && J >= 0 && (F = J)
                }),
                (472.143 * Math.log(Math.abs(g - R) + 125) - 2e3) * F
            }
            function z(x, g, R, F) {
                return R > F ? g : x + (g - x) * Q(R / F)
            }
            function Q(x) {
                return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1
            }
            function G() {
                var {WF_CLICK_EMPTY: x, WF_CLICK_SCROLL: g} = t;
                o.on(g, p, N),
                o.on(x, E, function(R) {
                    R.preventDefault()
                }),
                document.head.insertBefore(v, document.head.firstChild)
            }
            return {
                ready: G
            }
        }
        )
    }
    );
    var q_ = c((Qj,P_)=>{
        "use strict";
        var CU = Ve();
        CU.define("touch", P_.exports = function(e) {
            var t = {}
              , r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o,
                o ? new n(o) : null
            }
            ;
            function n(o) {
                var a = !1, s = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), f, E;
                o.addEventListener("touchstart", p, !1),
                o.addEventListener("touchmove", d, !1),
                o.addEventListener("touchend", v, !1),
                o.addEventListener("touchcancel", b, !1),
                o.addEventListener("mousedown", p, !1),
                o.addEventListener("mousemove", d, !1),
                o.addEventListener("mouseup", v, !1),
                o.addEventListener("mouseout", b, !1);
                function p(O) {
                    var m = O.touches;
                    m && m.length > 1 || (a = !0,
                    m ? (s = !0,
                    f = m[0].clientX) : f = O.clientX,
                    E = f)
                }
                function d(O) {
                    if (a) {
                        if (s && O.type === "mousemove") {
                            O.preventDefault(),
                            O.stopPropagation();
                            return
                        }
                        var m = O.touches
                          , C = m ? m[0].clientX : O.clientX
                          , A = C - E;
                        E = C,
                        Math.abs(A) > u && r && String(r()) === "" && (i("swipe", O, {
                            direction: A > 0 ? "right" : "left"
                        }),
                        b())
                    }
                }
                function v(O) {
                    if (a && (a = !1,
                    s && O.type === "mouseup")) {
                        O.preventDefault(),
                        O.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function b() {
                    a = !1
                }
                function _() {
                    o.removeEventListener("touchstart", p, !1),
                    o.removeEventListener("touchmove", d, !1),
                    o.removeEventListener("touchend", v, !1),
                    o.removeEventListener("touchcancel", b, !1),
                    o.removeEventListener("mousedown", p, !1),
                    o.removeEventListener("mousemove", d, !1),
                    o.removeEventListener("mouseup", v, !1),
                    o.removeEventListener("mouseout", b, !1),
                    o = null
                }
                this.destroy = _
            }
            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var F_ = c(Cs=>{
        "use strict";
        Object.defineProperty(Cs, "__esModule", {
            value: !0
        });
        Cs.default = RU;
        function RU(e, t, r, n, i, o, a, s, u, f, E, p, d) {
            return function(v) {
                e(v);
                var b = v.form
                  , _ = {
                    name: b.attr("data-name") || b.attr("name") || "Untitled Form",
                    pageId: b.attr("data-wf-page-id") || "",
                    elementId: b.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: r.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(b.html()),
                    trackingCookies: n()
                };
                let O = b.attr("data-wf-flow");
                O && (_.wfFlow = O),
                i(v);
                var m = o(b, _.fields);
                if (m)
                    return a(m);
                if (_.fileUploads = s(b),
                u(v),
                !f) {
                    E(v);
                    return
                }
                p.ajax({
                    url: d,
                    type: "POST",
                    data: _,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(C) {
                    C && C.code === 200 && (v.success = !0),
                    E(v)
                }).fail(function() {
                    E(v)
                })
            }
        }
    }
    );
    var D_ = c((Jj,M_)=>{
        "use strict";
        var Ci = Ve();
        Ci.define("forms", M_.exports = function(e, t) {
            var r = {}, n = e(document), i, o = window.location, a = window.XDomainRequest && !window.atob, s = ".w-form", u, f = /e(-)?mail/i, E = /^\S+@\S+$/, p = window.alert, d = Ci.env(), v, b, _, O = /list-manage[1-9]?.com/i, m = t.debounce(function() {
                p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function() {
                C(),
                !d && !v && N()
            }
            ;
            function C() {
                u = e("html").attr("data-wf-site"),
                b = "https://webflow.com/api/v1/form/" + u,
                a && b.indexOf("https://webflow.com") >= 0 && (b = b.replace("https://webflow.com", "https://formdata.webflow.com")),
                _ = `${b}/signFile`,
                i = e(s + " form"),
                i.length && i.each(A)
            }
            function A(q, V) {
                var K = e(V)
                  , k = e.data(V, s);
                k || (k = e.data(V, s, {
                    form: K
                })),
                P(k);
                var M = K.closest("div.w-form");
                k.done = M.find("> .w-form-done"),
                k.fail = M.find("> .w-form-fail"),
                k.fileUploads = M.find(".w-file-upload"),
                k.fileUploads.each(function(re) {
                    D(re, k)
                });
                var j = k.form.attr("aria-label") || k.form.attr("data-name") || "Form";
                k.done.attr("aria-label") || k.form.attr("aria-label", j),
                k.done.attr("tabindex", "-1"),
                k.done.attr("role", "region"),
                k.done.attr("aria-label") || k.done.attr("aria-label", j + " success"),
                k.fail.attr("tabindex", "-1"),
                k.fail.attr("role", "region"),
                k.fail.attr("aria-label") || k.fail.attr("aria-label", j + " failure");
                var ie = k.action = K.attr("action");
                if (k.handler = null,
                k.redirect = K.attr("data-redirect"),
                O.test(ie)) {
                    k.handler = g;
                    return
                }
                if (!ie) {
                    if (u) {
                        k.handler = (()=>{
                            let re = F_().default;
                            return re(P, o, Ci, Q, F, H, p, X, L, u, R, e, b)
                        }
                        )();
                        return
                    }
                    m()
                }
            }
            function N() {
                v = !0,
                n.on("submit", s + " form", function(re) {
                    var te = e.data(this, s);
                    te.handler && (te.evt = re,
                    te.handler(te))
                });
                let q = ".w-checkbox-input"
                  , V = ".w-radio-input"
                  , K = "w--redirected-checked"
                  , k = "w--redirected-focus"
                  , M = "w--redirected-focus-visible"
                  , j = ":focus-visible, [data-wf-focus-visible]"
                  , ie = [["checkbox", q], ["radio", V]];
                n.on("change", s + ' form input[type="checkbox"]:not(' + q + ")", re=>{
                    e(re.target).siblings(q).toggleClass(K)
                }
                ),
                n.on("change", s + ' form input[type="radio"]', re=>{
                    e(`input[name="${re.target.name}"]:not(${q})`).map((de,ut)=>e(ut).siblings(V).removeClass(K));
                    let te = e(re.target);
                    te.hasClass("w-radio-input") || te.siblings(V).addClass(K)
                }
                ),
                ie.forEach(([re,te])=>{
                    n.on("focus", s + ` form input[type="${re}"]:not(` + te + ")", de=>{
                        e(de.target).siblings(te).addClass(k),
                        e(de.target).filter(j).siblings(te).addClass(M)
                    }
                    ),
                    n.on("blur", s + ` form input[type="${re}"]:not(` + te + ")", de=>{
                        e(de.target).siblings(te).removeClass(`${k} ${M}`)
                    }
                    )
                }
                )
            }
            function P(q) {
                var V = q.btn = q.form.find(':input[type="submit"]');
                q.wait = q.btn.attr("data-wait") || null,
                q.success = !1,
                V.prop("disabled", !1),
                q.label && V.val(q.label)
            }
            function L(q) {
                var V = q.btn
                  , K = q.wait;
                V.prop("disabled", !0),
                K && (q.label = V.val(),
                V.val(K))
            }
            function H(q, V) {
                var K = null;
                return V = V || {},
                q.find(':input:not([type="submit"]):not([type="file"])').each(function(k, M) {
                    var j = e(M)
                      , ie = j.attr("type")
                      , re = j.attr("data-name") || j.attr("name") || "Field " + (k + 1);
                    re = encodeURIComponent(re);
                    var te = j.val();
                    if (ie === "checkbox")
                        te = j.is(":checked");
                    else if (ie === "radio") {
                        if (V[re] === null || typeof V[re] == "string")
                            return;
                        te = q.find('input[name="' + j.attr("name") + '"]:checked').val() || null
                    }
                    typeof te == "string" && (te = e.trim(te)),
                    V[re] = te,
                    K = K || G(j, ie, re, te)
                }),
                K
            }
            function X(q) {
                var V = {};
                return q.find(':input[type="file"]').each(function(K, k) {
                    var M = e(k)
                      , j = M.attr("data-name") || M.attr("name") || "File " + (K + 1)
                      , ie = M.attr("data-value");
                    typeof ie == "string" && (ie = e.trim(ie)),
                    V[j] = ie
                }),
                V
            }
            let z = {
                _mkto_trk: "marketo"
            };
            function Q() {
                return document.cookie.split("; ").reduce(function(V, K) {
                    let k = K.split("=")
                      , M = k[0];
                    if (M in z) {
                        let j = z[M]
                          , ie = k.slice(1).join("=");
                        V[j] = ie
                    }
                    return V
                }, {})
            }
            function G(q, V, K, k) {
                var M = null;
                return V === "password" ? M = "Passwords cannot be submitted." : q.attr("required") ? k ? f.test(q.attr("type")) && (E.test(k) || (M = "Please enter a valid email address for: " + K)) : M = "Please fill out the required field: " + K : K === "g-recaptcha-response" && !k && (M = "Please confirm you\u2019re not a robot."),
                M
            }
            function x(q) {
                F(q),
                R(q)
            }
            function g(q) {
                P(q);
                var V = q.form
                  , K = {};
                if (/^https/.test(o.href) && !/^https/.test(q.action)) {
                    V.attr("method", "post");
                    return
                }
                F(q);
                var k = H(V, K);
                if (k)
                    return p(k);
                L(q);
                var M;
                t.each(K, function(te, de) {
                    f.test(de) && (K.EMAIL = te),
                    /^((full[ _-]?)?name)$/i.test(de) && (M = te),
                    /^(first[ _-]?name)$/i.test(de) && (K.FNAME = te),
                    /^(last[ _-]?name)$/i.test(de) && (K.LNAME = te)
                }),
                M && !K.FNAME && (M = M.split(" "),
                K.FNAME = M[0],
                K.LNAME = K.LNAME || M[1]);
                var j = q.action.replace("/post?", "/post-json?") + "&c=?"
                  , ie = j.indexOf("u=") + 2;
                ie = j.substring(ie, j.indexOf("&", ie));
                var re = j.indexOf("id=") + 3;
                re = j.substring(re, j.indexOf("&", re)),
                K["b_" + ie + "_" + re] = "",
                e.ajax({
                    url: j,
                    data: K,
                    dataType: "jsonp"
                }).done(function(te) {
                    q.success = te.result === "success" || /already/.test(te.msg),
                    q.success || console.info("MailChimp error: " + te.msg),
                    R(q)
                }).fail(function() {
                    R(q)
                })
            }
            function R(q) {
                var V = q.form
                  , K = q.redirect
                  , k = q.success;
                if (k && K) {
                    Ci.location(K);
                    return
                }
                q.done.toggle(k),
                q.fail.toggle(!k),
                k ? q.done.focus() : q.fail.focus(),
                V.toggle(!k),
                P(q)
            }
            function F(q) {
                q.evt && q.evt.preventDefault(),
                q.evt = null
            }
            function D(q, V) {
                if (!V.fileUploads || !V.fileUploads[q])
                    return;
                var K, k = e(V.fileUploads[q]), M = k.find("> .w-file-upload-default"), j = k.find("> .w-file-upload-uploading"), ie = k.find("> .w-file-upload-success"), re = k.find("> .w-file-upload-error"), te = M.find(".w-file-upload-input"), de = M.find(".w-file-upload-label"), ut = de.children(), ce = re.find(".w-file-upload-error-msg"), h = ie.find(".w-file-upload-file"), U = ie.find(".w-file-remove-link"), Y = h.find(".w-file-upload-file-name"), W = ce.attr("data-w-size-error"), ge = ce.attr("data-w-type-error"), St = ce.attr("data-w-generic-error");
                if (d || de.on("click keydown", function(T) {
                    T.type === "keydown" && T.which !== 13 && T.which !== 32 || (T.preventDefault(),
                    te.click())
                }),
                de.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                U.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                d)
                    te.on("click", function(T) {
                        T.preventDefault()
                    }),
                    de.on("click", function(T) {
                        T.preventDefault()
                    }),
                    ut.on("click", function(T) {
                        T.preventDefault()
                    });
                else {
                    U.on("click keydown", function(T) {
                        if (T.type === "keydown") {
                            if (T.which !== 13 && T.which !== 32)
                                return;
                            T.preventDefault()
                        }
                        te.removeAttr("data-value"),
                        te.val(""),
                        Y.html(""),
                        M.toggle(!0),
                        ie.toggle(!1),
                        de.focus()
                    }),
                    te.on("change", function(T) {
                        K = T.target && T.target.files && T.target.files[0],
                        K && (M.toggle(!1),
                        re.toggle(!1),
                        j.toggle(!0),
                        j.focus(),
                        Y.text(K.name),
                        w() || L(V),
                        V.fileUploads[q].uploading = !0,
                        Z(K, y))
                    });
                    var ct = de.outerHeight();
                    te.height(ct),
                    te.width(1)
                }
                function l(T) {
                    var S = T.responseJSON && T.responseJSON.msg
                      , $ = St;
                    typeof S == "string" && S.indexOf("InvalidFileTypeError") === 0 ? $ = ge : typeof S == "string" && S.indexOf("MaxFileSizeError") === 0 && ($ = W),
                    ce.text($),
                    te.removeAttr("data-value"),
                    te.val(""),
                    j.toggle(!1),
                    M.toggle(!0),
                    re.toggle(!0),
                    re.focus(),
                    V.fileUploads[q].uploading = !1,
                    w() || P(V)
                }
                function y(T, S) {
                    if (T)
                        return l(T);
                    var $ = S.fileName
                      , ne = S.postData
                      , pe = S.fileId
                      , B = S.s3Url;
                    te.attr("data-value", pe),
                    J(B, ne, K, $, I)
                }
                function I(T) {
                    if (T)
                        return l(T);
                    j.toggle(!1),
                    ie.css("display", "inline-block"),
                    ie.focus(),
                    V.fileUploads[q].uploading = !1,
                    w() || P(V)
                }
                function w() {
                    var T = V.fileUploads && V.fileUploads.toArray() || [];
                    return T.some(function(S) {
                        return S.uploading
                    })
                }
            }
            function Z(q, V) {
                var K = new URLSearchParams({
                    name: q.name,
                    size: q.size
                });
                e.ajax({
                    type: "GET",
                    url: `${_}?${K}`,
                    crossDomain: !0
                }).done(function(k) {
                    V(null, k)
                }).fail(function(k) {
                    V(k)
                })
            }
            function J(q, V, K, k, M) {
                var j = new FormData;
                for (var ie in V)
                    j.append(ie, V[ie]);
                j.append("file", K, k),
                e.ajax({
                    type: "POST",
                    url: q,
                    data: j,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    M(null)
                }).fail(function(re) {
                    M(re)
                })
            }
            return r
        }
        )
    }
    );
    var k_ = c((ez,G_)=>{
        "use strict";
        var At = Ve()
          , LU = cn()
          , Se = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        At.define("navbar", G_.exports = function(e, t) {
            var r = {}, n = e.tram, i = e(window), o = e(document), a = t.debounce, s, u, f, E, p = At.env(), d = '<div class="w-nav-overlay" data-wf-ignore />', v = ".w-nav", b = "w--open", _ = "w--nav-dropdown-open", O = "w--nav-dropdown-toggle-open", m = "w--nav-dropdown-list-open", C = "w--nav-link-open", A = LU.triggers, N = e();
            r.ready = r.design = r.preview = P,
            r.destroy = function() {
                N = e(),
                L(),
                u && u.length && u.each(Q)
            }
            ;
            function P() {
                f = p && At.env("design"),
                E = At.env("editor"),
                s = e(document.body),
                u = o.find(v),
                u.length && (u.each(z),
                L(),
                H())
            }
            function L() {
                At.resize.off(X)
            }
            function H() {
                At.resize.on(X)
            }
            function X() {
                u.each(M)
            }
            function z(h, U) {
                var Y = e(U)
                  , W = e.data(U, v);
                W || (W = e.data(U, v, {
                    open: !1,
                    el: Y,
                    config: {},
                    selectedIdx: -1
                })),
                W.menu = Y.find(".w-nav-menu"),
                W.links = W.menu.find(".w-nav-link"),
                W.dropdowns = W.menu.find(".w-dropdown"),
                W.dropdownToggle = W.menu.find(".w-dropdown-toggle"),
                W.dropdownList = W.menu.find(".w-dropdown-list"),
                W.button = Y.find(".w-nav-button"),
                W.container = Y.find(".w-container"),
                W.overlayContainerId = "w-nav-overlay-" + h,
                W.outside = K(W);
                var ge = Y.find(".w-nav-brand");
                ge && ge.attr("href") === "/" && ge.attr("aria-label") == null && ge.attr("aria-label", "home"),
                W.button.attr("style", "-webkit-user-select: text;"),
                W.button.attr("aria-label") == null && W.button.attr("aria-label", "menu"),
                W.button.attr("role", "button"),
                W.button.attr("tabindex", "0"),
                W.button.attr("aria-controls", W.overlayContainerId),
                W.button.attr("aria-haspopup", "menu"),
                W.button.attr("aria-expanded", "false"),
                W.el.off(v),
                W.button.off(v),
                W.menu.off(v),
                g(W),
                f ? (G(W),
                W.el.on("setting" + v, R(W))) : (x(W),
                W.button.on("click" + v, q(W)),
                W.menu.on("click" + v, "a", V(W)),
                W.button.on("keydown" + v, F(W)),
                W.el.on("keydown" + v, D(W))),
                M(h, U)
            }
            function Q(h, U) {
                var Y = e.data(U, v);
                Y && (G(Y),
                e.removeData(U, v))
            }
            function G(h) {
                h.overlay && (ce(h, !0),
                h.overlay.remove(),
                h.overlay = null)
            }
            function x(h) {
                h.overlay || (h.overlay = e(d).appendTo(h.el),
                h.overlay.attr("id", h.overlayContainerId),
                h.parent = h.menu.parent(),
                ce(h, !0))
            }
            function g(h) {
                var U = {}
                  , Y = h.config || {}
                  , W = U.animation = h.el.attr("data-animation") || "default";
                U.animOver = /^over/.test(W),
                U.animDirect = /left$/.test(W) ? -1 : 1,
                Y.animation !== W && h.open && t.defer(J, h),
                U.easing = h.el.attr("data-easing") || "ease",
                U.easing2 = h.el.attr("data-easing2") || "ease";
                var ge = h.el.attr("data-duration");
                U.duration = ge != null ? Number(ge) : 400,
                U.docHeight = h.el.attr("data-doc-height"),
                h.config = U
            }
            function R(h) {
                return function(U, Y) {
                    Y = Y || {};
                    var W = i.width();
                    g(h),
                    Y.open === !0 && de(h, !0),
                    Y.open === !1 && ce(h, !0),
                    h.open && t.defer(function() {
                        W !== i.width() && J(h)
                    })
                }
            }
            function F(h) {
                return function(U) {
                    switch (U.keyCode) {
                    case Se.SPACE:
                    case Se.ENTER:
                        return q(h)(),
                        U.preventDefault(),
                        U.stopPropagation();
                    case Se.ESCAPE:
                        return ce(h),
                        U.preventDefault(),
                        U.stopPropagation();
                    case Se.ARROW_RIGHT:
                    case Se.ARROW_DOWN:
                    case Se.HOME:
                    case Se.END:
                        return h.open ? (U.keyCode === Se.END ? h.selectedIdx = h.links.length - 1 : h.selectedIdx = 0,
                        Z(h),
                        U.preventDefault(),
                        U.stopPropagation()) : (U.preventDefault(),
                        U.stopPropagation())
                    }
                }
            }
            function D(h) {
                return function(U) {
                    if (h.open)
                        switch (h.selectedIdx = h.links.index(document.activeElement),
                        U.keyCode) {
                        case Se.HOME:
                        case Se.END:
                            return U.keyCode === Se.END ? h.selectedIdx = h.links.length - 1 : h.selectedIdx = 0,
                            Z(h),
                            U.preventDefault(),
                            U.stopPropagation();
                        case Se.ESCAPE:
                            return ce(h),
                            h.button.focus(),
                            U.preventDefault(),
                            U.stopPropagation();
                        case Se.ARROW_LEFT:
                        case Se.ARROW_UP:
                            return h.selectedIdx = Math.max(-1, h.selectedIdx - 1),
                            Z(h),
                            U.preventDefault(),
                            U.stopPropagation();
                        case Se.ARROW_RIGHT:
                        case Se.ARROW_DOWN:
                            return h.selectedIdx = Math.min(h.links.length - 1, h.selectedIdx + 1),
                            Z(h),
                            U.preventDefault(),
                            U.stopPropagation()
                        }
                }
            }
            function Z(h) {
                if (h.links[h.selectedIdx]) {
                    var U = h.links[h.selectedIdx];
                    U.focus(),
                    V(U)
                }
            }
            function J(h) {
                h.open && (ce(h, !0),
                de(h, !0))
            }
            function q(h) {
                return a(function() {
                    h.open ? ce(h) : de(h)
                })
            }
            function V(h) {
                return function(U) {
                    var Y = e(this)
                      , W = Y.attr("href");
                    if (!At.validClick(U.currentTarget)) {
                        U.preventDefault();
                        return
                    }
                    W && W.indexOf("#") === 0 && h.open && ce(h)
                }
            }
            function K(h) {
                return h.outside && o.off("click" + v, h.outside),
                function(U) {
                    var Y = e(U.target);
                    E && Y.closest(".w-editor-bem-EditorOverlay").length || k(h, Y)
                }
            }
            var k = a(function(h, U) {
                if (h.open) {
                    var Y = U.closest(".w-nav-menu");
                    h.menu.is(Y) || ce(h)
                }
            });
            function M(h, U) {
                var Y = e.data(U, v)
                  , W = Y.collapsed = Y.button.css("display") !== "none";
                if (Y.open && !W && !f && ce(Y, !0),
                Y.container.length) {
                    var ge = ie(Y);
                    Y.links.each(ge),
                    Y.dropdowns.each(ge)
                }
                Y.open && ut(Y)
            }
            var j = "max-width";
            function ie(h) {
                var U = h.container.css(j);
                return U === "none" && (U = ""),
                function(Y, W) {
                    W = e(W),
                    W.css(j, ""),
                    W.css(j) === "none" && W.css(j, U)
                }
            }
            function re(h, U) {
                U.setAttribute("data-nav-menu-open", "")
            }
            function te(h, U) {
                U.removeAttribute("data-nav-menu-open")
            }
            function de(h, U) {
                if (h.open)
                    return;
                h.open = !0,
                h.menu.each(re),
                h.links.addClass(C),
                h.dropdowns.addClass(_),
                h.dropdownToggle.addClass(O),
                h.dropdownList.addClass(m),
                h.button.addClass(b);
                var Y = h.config
                  , W = Y.animation;
                (W === "none" || !n.support.transform || Y.duration <= 0) && (U = !0);
                var ge = ut(h)
                  , St = h.menu.outerHeight(!0)
                  , ct = h.menu.outerWidth(!0)
                  , l = h.el.height()
                  , y = h.el[0];
                if (M(0, y),
                A.intro(0, y),
                At.redraw.up(),
                f || o.on("click" + v, h.outside),
                U) {
                    T();
                    return
                }
                var I = "transform " + Y.duration + "ms " + Y.easing;
                if (h.overlay && (N = h.menu.prev(),
                h.overlay.show().append(h.menu)),
                Y.animOver) {
                    n(h.menu).add(I).set({
                        x: Y.animDirect * ct,
                        height: ge
                    }).start({
                        x: 0
                    }).then(T),
                    h.overlay && h.overlay.width(ct);
                    return
                }
                var w = l + St;
                n(h.menu).add(I).set({
                    y: -w
                }).start({
                    y: 0
                }).then(T);
                function T() {
                    h.button.attr("aria-expanded", "true")
                }
            }
            function ut(h) {
                var U = h.config
                  , Y = U.docHeight ? o.height() : s.height();
                return U.animOver ? h.menu.height(Y) : h.el.css("position") !== "fixed" && (Y -= h.el.outerHeight(!0)),
                h.overlay && h.overlay.height(Y),
                Y
            }
            function ce(h, U) {
                if (!h.open)
                    return;
                h.open = !1,
                h.button.removeClass(b);
                var Y = h.config;
                if ((Y.animation === "none" || !n.support.transform || Y.duration <= 0) && (U = !0),
                A.outro(0, h.el[0]),
                o.off("click" + v, h.outside),
                U) {
                    n(h.menu).stop(),
                    y();
                    return
                }
                var W = "transform " + Y.duration + "ms " + Y.easing2
                  , ge = h.menu.outerHeight(!0)
                  , St = h.menu.outerWidth(!0)
                  , ct = h.el.height();
                if (Y.animOver) {
                    n(h.menu).add(W).start({
                        x: St * Y.animDirect
                    }).then(y);
                    return
                }
                var l = ct + ge;
                n(h.menu).add(W).start({
                    y: -l
                }).then(y);
                function y() {
                    h.menu.height(""),
                    n(h.menu).set({
                        x: 0,
                        y: 0
                    }),
                    h.menu.each(te),
                    h.links.removeClass(C),
                    h.dropdowns.removeClass(_),
                    h.dropdownToggle.removeClass(O),
                    h.dropdownList.removeClass(m),
                    h.overlay && h.overlay.children().length && (N.length ? h.menu.insertAfter(N) : h.menu.prependTo(h.parent),
                    h.overlay.attr("style", "").hide()),
                    h.el.triggerHandler("w-close"),
                    h.button.attr("aria-expanded", "false")
                }
            }
            return r
        }
        )
    }
    );
    var U_ = c((tz,V_)=>{
        "use strict";
        var wt = Ve()
          , NU = cn();
        wt.define("tabs", V_.exports = function(e) {
            var t = {}, r = e.tram, n = e(document), i, o, a = wt.env, s = a.safari, u = a(), f = "data-w-tab", E = "data-w-pane", p = ".w-tabs", d = "w--current", v = "w--tab-active", b = NU.triggers, _ = !1;
            t.ready = t.design = t.preview = O,
            t.redraw = function() {
                _ = !0,
                O(),
                _ = !1
            }
            ,
            t.destroy = function() {
                i = n.find(p),
                i.length && (i.each(A),
                m())
            }
            ;
            function O() {
                o = u && wt.env("design"),
                i = n.find(p),
                i.length && (i.each(N),
                wt.env("preview") && !_ && i.each(A),
                m(),
                C())
            }
            function m() {
                wt.redraw.off(t.redraw)
            }
            function C() {
                wt.redraw.on(t.redraw)
            }
            function A(G, x) {
                var g = e.data(x, p);
                g && (g.links && g.links.each(b.reset),
                g.panes && g.panes.each(b.reset))
            }
            function N(G, x) {
                var g = p.substr(1) + "-" + G
                  , R = e(x)
                  , F = e.data(x, p);
                if (F || (F = e.data(x, p, {
                    el: R,
                    config: {}
                })),
                F.current = null,
                F.tabIdentifier = g + "-" + f,
                F.paneIdentifier = g + "-" + E,
                F.menu = R.children(".w-tab-menu"),
                F.links = F.menu.children(".w-tab-link"),
                F.content = R.children(".w-tab-content"),
                F.panes = F.content.children(".w-tab-pane"),
                F.el.off(p),
                F.links.off(p),
                F.menu.attr("role", "tablist"),
                F.links.attr("tabindex", "-1"),
                P(F),
                !o) {
                    F.links.on("click" + p, H(F)),
                    F.links.on("keydown" + p, X(F));
                    var D = F.links.filter("." + d)
                      , Z = D.attr(f);
                    Z && z(F, {
                        tab: Z,
                        immediate: !0
                    })
                }
            }
            function P(G) {
                var x = {};
                x.easing = G.el.attr("data-easing") || "ease";
                var g = parseInt(G.el.attr("data-duration-in"), 10);
                g = x.intro = g === g ? g : 0;
                var R = parseInt(G.el.attr("data-duration-out"), 10);
                R = x.outro = R === R ? R : 0,
                x.immediate = !g && !R,
                G.config = x
            }
            function L(G) {
                var x = G.current;
                return Array.prototype.findIndex.call(G.links, g=>g.getAttribute(f) === x, null)
            }
            function H(G) {
                return function(x) {
                    x.preventDefault();
                    var g = x.currentTarget.getAttribute(f);
                    g && z(G, {
                        tab: g
                    })
                }
            }
            function X(G) {
                return function(x) {
                    var g = L(G)
                      , R = x.key
                      , F = {
                        ArrowLeft: g - 1,
                        ArrowUp: g - 1,
                        ArrowRight: g + 1,
                        ArrowDown: g + 1,
                        End: G.links.length - 1,
                        Home: 0
                    };
                    if (R in F) {
                        x.preventDefault();
                        var D = F[R];
                        D === -1 && (D = G.links.length - 1),
                        D === G.links.length && (D = 0);
                        var Z = G.links[D]
                          , J = Z.getAttribute(f);
                        J && z(G, {
                            tab: J
                        })
                    }
                }
            }
            function z(G, x) {
                x = x || {};
                var g = G.config
                  , R = g.easing
                  , F = x.tab;
                if (F !== G.current) {
                    G.current = F;
                    var D;
                    G.links.each(function(M, j) {
                        var ie = e(j);
                        if (x.immediate || g.immediate) {
                            var re = G.panes[M];
                            j.id || (j.id = G.tabIdentifier + "-" + M),
                            re.id || (re.id = G.paneIdentifier + "-" + M),
                            j.href = "#" + re.id,
                            j.setAttribute("role", "tab"),
                            j.setAttribute("aria-controls", re.id),
                            j.setAttribute("aria-selected", "false"),
                            re.setAttribute("role", "tabpanel"),
                            re.setAttribute("aria-labelledby", j.id)
                        }
                        j.getAttribute(f) === F ? (D = j,
                        ie.addClass(d).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(b.intro)) : ie.hasClass(d) && ie.removeClass(d).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(b.outro)
                    });
                    var Z = []
                      , J = [];
                    G.panes.each(function(M, j) {
                        var ie = e(j);
                        j.getAttribute(f) === F ? Z.push(j) : ie.hasClass(v) && J.push(j)
                    });
                    var q = e(Z)
                      , V = e(J);
                    if (x.immediate || g.immediate) {
                        q.addClass(v).each(b.intro),
                        V.removeClass(v),
                        _ || wt.redraw.up();
                        return
                    } else {
                        var K = window.scrollX
                          , k = window.scrollY;
                        D.focus(),
                        window.scrollTo(K, k)
                    }
                    V.length && g.outro ? (V.each(b.outro),
                    r(V).add("opacity " + g.outro + "ms " + R, {
                        fallback: s
                    }).start({
                        opacity: 0
                    }).then(()=>Q(g, V, q))) : Q(g, V, q)
                }
            }
            function Q(G, x, g) {
                if (x.removeClass(v).css({
                    opacity: "",
                    transition: "",
                    transform: "",
                    width: "",
                    height: ""
                }),
                g.addClass(v).each(b.intro),
                wt.redraw.up(),
                !G.intro)
                    return r(g).set({
                        opacity: 1
                    });
                r(g).set({
                    opacity: 0
                }).redraw().add("opacity " + G.intro + "ms " + G.easing, {
                    fallback: s
                }).start({
                    opacity: 1
                })
            }
            return t
        }
        )
    }
    );
    Hs();
    Xs();
    zs();
    $s();
    cn();
    x_();
    R_();
    N_();
    q_();
    D_();
    k_();
    U_();
}
)();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-17"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651457275398
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651457993759
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".slider-main_component",
                "originalId": "64d3dd9edfb41666c35b15b2|b8fa81c6-4d14-4e48-3b43-84e374a67647",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".slider-main_component",
                "originalId": "64d3dd9edfb41666c35b15b2|b8fa81c6-4d14-4e48-3b43-84e374a67647",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683015537281
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-9"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".slider-main_component",
                "originalId": "64d3dd9edfb41666c35b15b2|b8fa81c6-4d14-4e48-3b43-84e374a67647",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".slider-main_component",
                "originalId": "64d3dd9edfb41666c35b15b2|b8fa81c6-4d14-4e48-3b43-84e374a67647",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683015537281
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-6-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-6-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1683016303511
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683022664298
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|092b5699-f94e-b35d-a2de-3284e4643ceb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|092b5699-f94e-b35d-a2de-3284e4643ceb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683197517455
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|74aef034-0e4a-9b9c-0164-4a4bb479fddb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|74aef034-0e4a-9b9c-0164-4a4bb479fddb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683207579686
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|5b59c855-1aa9-c633-57ad-1120b6949844",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|5b59c855-1aa9-c633-57ad-1120b6949844",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683212040117
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|10f4d6c5-36b2-ddf4-66ea-a72d8b611107",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|10f4d6c5-36b2-ddf4-66ea-a72d8b611107",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683233184104
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683235056302
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683619708152
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683619708152
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-6-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-6-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1683619708152
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683619708152
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|092b5699-f94e-b35d-a2de-3284e4643ceb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|092b5699-f94e-b35d-a2de-3284e4643ceb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683619708152
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|74aef034-0e4a-9b9c-0164-4a4bb479fddb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|74aef034-0e4a-9b9c-0164-4a4bb479fddb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683619708152
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "626ff2cb-0fc6-2b3c-7abf-541026a7f82f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "626ff2cb-0fc6-2b3c-7abf-541026a7f82f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683619708152
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|a79fd27e-ad28-0dd3-3673-de2c4071c458",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|a79fd27e-ad28-0dd3-3673-de2c4071c458",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683885449647
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|a79fd27e-ad28-0dd3-3673-de2c4071c458",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|a79fd27e-ad28-0dd3-3673-de2c4071c458",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683885449648
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-407"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "489064cb-9577-b618-a8e4-54da4629fd67",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "489064cb-9577-b618-a8e4-54da4629fd67",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626227992075
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-590"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "489064cb-9577-b618-a8e4-54da4629fd67",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "489064cb-9577-b618-a8e4-54da4629fd67",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626227992075
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|031aa6c4-b4a2-fbaf-0974-f720840d73fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|031aa6c4-b4a2-fbaf-0974-f720840d73fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684918330468
        },
        "e-108": {
            "id": "e-108",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-109"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|4ac4f81a-b45c-3fd0-f444-424b76426983",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|4ac4f81a-b45c-3fd0-f444-424b76426983",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684929901538
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|4ac4f81a-b45c-3fd0-f444-424b76426983",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|4ac4f81a-b45c-3fd0-f444-424b76426983",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684929901538
        },
        "e-114": {
            "id": "e-114",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-115"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|78b939b8-be22-eba2-5011-2000ae3d1959",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|78b939b8-be22-eba2-5011-2000ae3d1959",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684931632263
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|913c8ed9-fed6-8bf9-33d7-f9a1a87bfb15",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|913c8ed9-fed6-8bf9-33d7-f9a1a87bfb15",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684931841688
        },
        "e-118": {
            "id": "e-118",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-119"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|913c8ed9-fed6-8bf9-33d7-f9a1a87bfb15",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|913c8ed9-fed6-8bf9-33d7-f9a1a87bfb15",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684931841688
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-124"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|63a0afa2-368d-3979-17e6-14006407e665",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|63a0afa2-368d-3979-17e6-14006407e665",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684943796560
        },
        "e-126": {
            "id": "e-126",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".horizontal-trigger",
                "originalId": "64d3dd9edfb41666c35b15b0|b83a5a79-3b81-c97e-ffc2-553572233ad6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".horizontal-trigger",
                "originalId": "64d3dd9edfb41666c35b15b0|b83a5a79-3b81-c97e-ffc2-553572233ad6",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-32-p",
                "smoothing": 80,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1622340741076
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-6-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-6-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1685460440534
        },
        "e-134": {
            "id": "e-134",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-135"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|f31ef841-cb39-df5f-8702-97394fae26f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|f31ef841-cb39-df5f-8702-97394fae26f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685461766905
        },
        "e-138": {
            "id": "e-138",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-139"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|82934544-a6bb-643b-837c-ae74d9acad2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|82934544-a6bb-643b-837c-ae74d9acad2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685517953217
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-141"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|fbc72031-5a2f-6ebc-b87a-acaff1037eae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|fbc72031-5a2f-6ebc-b87a-acaff1037eae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685518015754
        },
        "e-142": {
            "id": "e-142",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-143"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|b8fa81c6-4d14-4e48-3b43-84e374a67647",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|b8fa81c6-4d14-4e48-3b43-84e374a67647",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685518033150
        },
        "e-144": {
            "id": "e-144",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-145"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|5974a0b1-45ad-8c58-76cb-435ab5b5e29a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|5974a0b1-45ad-8c58-76cb-435ab5b5e29a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685518178256
        },
        "e-146": {
            "id": "e-146",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|82934544-a6bb-643b-837c-ae74d9acad2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|82934544-a6bb-643b-837c-ae74d9acad2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1685520075631
        },
        "e-152": {
            "id": "e-152",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-151"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685521328876
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|647443d6-fc7a-6d84-c497-8e112eed3af5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|647443d6-fc7a-6d84-c497-8e112eed3af5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1685522090692
        },
        "e-154": {
            "id": "e-154",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-155"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|601a4f0e-bb5a-82e3-f273-88812c6983ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|601a4f0e-bb5a-82e3-f273-88812c6983ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685522527581
        },
        "e-156": {
            "id": "e-156",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-157"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|14d5255b-f6f7-0135-e75e-0aa49a888ee8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|14d5255b-f6f7-0135-e75e-0aa49a888ee8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685522640371
        },
        "e-158": {
            "id": "e-158",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-159"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|7a467aa9-8761-40f6-e0fc-e0e987cf1bf5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|7a467aa9-8761-40f6-e0fc-e0e987cf1bf5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685522662458
        },
        "e-160": {
            "id": "e-160",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-161"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".service_item",
                "originalId": "64d3dd9edfb41666c35b15b3|7f5f8bed-9945-7b52-ee2f-df227c5dc7eb",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".service_item",
                "originalId": "64d3dd9edfb41666c35b15b3|7f5f8bed-9945-7b52-ee2f-df227c5dc7eb",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685522982517
        },
        "e-163": {
            "id": "e-163",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-162"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685523727470
        },
        "e-164": {
            "id": "e-164",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-165"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|8a801147-6444-5431-5cf7-590bb79a4298",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|8a801147-6444-5431-5cf7-590bb79a4298",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685524092896
        },
        "e-166": {
            "id": "e-166",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-167"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|ea927001-76a6-24c2-4c1b-66fe6c8ba8b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|ea927001-76a6-24c2-4c1b-66fe6c8ba8b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685524118521
        },
        "e-170": {
            "id": "e-170",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-171"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ae|3f0509ab-4c14-a874-d63c-6f5e2aa34bff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ae|3f0509ab-4c14-a874-d63c-6f5e2aa34bff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685526993346
        },
        "e-178": {
            "id": "e-178",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-179"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|2c034968-5ffb-f62c-7af5-1141d9287ad8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|2c034968-5ffb-f62c-7af5-1141d9287ad8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685564201195
        },
        "e-180": {
            "id": "e-180",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-181"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|14d5255b-f6f7-0135-e75e-0aa49a888eec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|14d5255b-f6f7-0135-e75e-0aa49a888eec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685564285340
        },
        "e-182": {
            "id": "e-182",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-183"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|7a467aa9-8761-40f6-e0fc-e0e987cf1bf9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|7a467aa9-8761-40f6-e0fc-e0e987cf1bf9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685564297233
        },
        "e-186": {
            "id": "e-186",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-195"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80956b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80956b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653369412854
        },
        "e-187": {
            "id": "e-187",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-194"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80954f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80954f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1648714724964
        },
        "e-188": {
            "id": "e-188",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-190"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f809560",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f809560",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1648651697930
        },
        "e-191": {
            "id": "e-191",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-193"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80955e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80955e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1671583599021
        },
        "e-192": {
            "id": "e-192",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-189"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f809557",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f809557",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1671579471939
        },
        "e-194": {
            "id": "e-194",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-187"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80954f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80954f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1648714724963
        },
        "e-195": {
            "id": "e-195",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-186"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80956b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80956b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653369412807
        },
        "e-196": {
            "id": "e-196",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-197"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|5e3b4457-8433-cf0f-d49e-14c624f41f09",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|5e3b4457-8433-cf0f-d49e-14c624f41f09",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685624128733
        },
        "e-198": {
            "id": "e-198",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-58",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-199"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685627484080
        },
        "e-201": {
            "id": "e-201",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-200"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ae",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ae",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686568172130
        },
        "e-203": {
            "id": "e-203",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-202"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686573150230
        },
        "e-204": {
            "id": "e-204",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-205"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|235815de-32e7-e394-f77d-677a969ef2fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|235815de-32e7-e394-f77d-677a969ef2fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686936101336
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Home marquee [Loop] [Desktop]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 25000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".home-marquee_marquee",
                            "selectorGuids": ["ed8a13a9-78b8-e43d-eb72-3169945520cb"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".home-marquee_marquee",
                            "selectorGuids": ["ed8a13a9-78b8-e43d-eb72-3169945520cb"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651457286764
        },
        "a-2": {
            "id": "a-2",
            "title": "Home marquee [Loop] [Mobile]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 10000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".home-marquee_marquee",
                            "selectorGuids": ["ed8a13a9-78b8-e43d-eb72-3169945520cb"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".home-marquee_marquee",
                            "selectorGuids": ["ed8a13a9-78b8-e43d-eb72-3169945520cb"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651457286764
        },
        "a-4": {
            "id": "a-4",
            "title": "Clients Pointer [IN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["6012363d-a7e1-17be-7c82-90da8feb7982"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "swingTo",
                        "duration": 400,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["6012363d-a7e1-17be-7c82-90da8feb7982"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683015565373
        },
        "a-5": {
            "id": "a-5",
            "title": "Clients Pointer [OUT]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["6012363d-a7e1-17be-7c82-90da8feb7982"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1683015713462
        },
        "a-6": {
            "id": "a-6",
            "title": "Clients Pointer",
            "continuousParameterGroups": [{
                "id": "a-6-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-6-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".pointer---wrap",
                                "selectorGuids": ["27b3d686-1ce3-28d0-297c-266a33002a70"]
                            },
                            "xValue": -50,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-6-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".pointer---wrap",
                                "selectorGuids": ["27b3d686-1ce3-28d0-297c-266a33002a70"]
                            },
                            "xValue": 50,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-6-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-6-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".pointer---wrap",
                                "selectorGuids": ["27b3d686-1ce3-28d0-297c-266a33002a70"]
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-6-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".pointer---wrap",
                                "selectorGuids": ["27b3d686-1ce3-28d0-297c-266a33002a70"]
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1683016333358
        },
        "a-7": {
            "id": "a-7",
            "title": "Loader-1 [Hide]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader-1",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd2"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-7-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".loader-1-wrapper",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd3"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-7-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-first",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd7"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-7-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-second",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd8"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-7-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-third",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd9"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-7-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".loader_1_background",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd5"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-17",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-first",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd7"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-second",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd8"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-7-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-first",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd7"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-second",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd8"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-7-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-third",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd9"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".loader-1-wrapper",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd3"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "selector": ".loader_1_background",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd5"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-16",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 1000,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader-1",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd2"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1680078417278
        },
        "a-8": {
            "id": "a-8",
            "title": "Gradient Animation [RADIAL]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-13",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-8-n-9",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-8-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-2",
                            "selectorGuids": ["f6da58fa-fe7d-f51c-eee0-1691650e4f11"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-2",
                            "selectorGuids": ["f6da58fa-fe7d-f51c-eee0-1691650e4f11"]
                        },
                        "xValue": -6,
                        "yValue": 10,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": -9,
                        "yValue": 7,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-11",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": 10,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-8-n-15",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-2",
                            "selectorGuids": ["f6da58fa-fe7d-f51c-eee0-1691650e4f11"]
                        },
                        "xValue": 10,
                        "yValue": -14,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": 2,
                        "yValue": -9,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-12",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": 6,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-8-n-16",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-2",
                            "selectorGuids": ["f6da58fa-fe7d-f51c-eee0-1691650e4f11"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-10",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-8-n-14",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1665137535236
        },
        "a-9": {
            "id": "a-9",
            "title": "Gradient Animation [HOME]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "zValue": 72,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "zValue": -78,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "xValue": -4,
                        "yValue": 4,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "zValue": -42,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-10",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "zValue": 96,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "xValue": -10,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-13",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "zValue": 88,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "xValue": -7,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-15",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "zValue": -68,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "xValue": -1,
                        "yValue": -6,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "zValue": -78,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-9",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "zValue": 72,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683207653903
        },
        "a-10": {
            "id": "a-10",
            "title": "Gradient Animation [FOOTER]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-2",
                            "selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
                        },
                        "zValue": 47,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-9",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "zValue": 98,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "xValue": 1.3,
                        "yValue": 1.3,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-1",
                            "selectorGuids": ["a75cc6fb-a5f1-5de6-37ed-e0616cbc1736"]
                        },
                        "zValue": -13,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-1",
                            "selectorGuids": ["a75cc6fb-a5f1-5de6-37ed-e0616cbc1736"]
                        },
                        "zValue": -22,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-2",
                            "selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
                        },
                        "zValue": 27,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "zValue": 94,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "xValue": -100,
                        "yValue": 10,
                        "zValue": null,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "px"
                    }
                }, {
                    "id": "a-10-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "xValue": 1.3,
                        "yValue": 1.3,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-2",
                            "selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "zValue": null,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-15",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-1",
                            "selectorGuids": ["a75cc6fb-a5f1-5de6-37ed-e0616cbc1736"]
                        },
                        "zValue": -7,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-16",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-2",
                            "selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
                        },
                        "zValue": 33,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-17",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "xValue": -39,
                        "yValue": 2,
                        "zValue": null,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "px"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-2",
                            "selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
                        },
                        "zValue": 47,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-1",
                            "selectorGuids": ["a75cc6fb-a5f1-5de6-37ed-e0616cbc1736"]
                        },
                        "zValue": -13,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "zValue": 98,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-13",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "xValue": 1.3,
                        "yValue": 1.3,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683212057412
        },
        "a-11": {
            "id": "a-11",
            "title": "Fade Up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 700,
                        "target": {
                            "selector": ".fade-up",
                            "selectorGuids": ["4fb8c73b-04a3-3ad0-4aef-a60b5436970f"]
                        },
                        "xValue": 0,
                        "yValue": 5,
                        "xUnit": "em",
                        "yUnit": "em",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".fade-up",
                            "selectorGuids": ["4fb8c73b-04a3-3ad0-4aef-a60b5436970f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 700,
                        "target": {
                            "selector": ".fade-up",
                            "selectorGuids": ["4fb8c73b-04a3-3ad0-4aef-a60b5436970f"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "em",
                        "yUnit": "em",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 700,
                        "target": {
                            "selector": ".fade-up",
                            "selectorGuids": ["4fb8c73b-04a3-3ad0-4aef-a60b5436970f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683233199926
        },
        "a-12": {
            "id": "a-12",
            "title": "Fade Up [CLIENTS]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa"
                        },
                        "xValue": 0,
                        "yValue": 5,
                        "xUnit": "em",
                        "yUnit": "em",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 700,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "em",
                        "yUnit": "em",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 700,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683233199926
        },
        "a-14": {
            "id": "a-14",
            "title": "Header Menu [CLOSE]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "xValue": 0,
                        "yValue": -0.125,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-14-n-13",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "globalSwatchId": "7ef5d505",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 1
                    }
                }, {
                    "id": "a-14-n-12",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "globalSwatchId": "7ef5d505",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 1
                    }
                }, {
                    "id": "a-14-n-10",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu_link_text",
                            "selectorGuids": ["939b366e-1ebc-bf9e-5caf-13d4b37bf3d7"]
                        },
                        "globalSwatchId": "7ef5d505",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 1
                    }
                }, {
                    "id": "a-14-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "xValue": 0,
                        "yValue": 0.125,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-14-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-14-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-14-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_overlay",
                            "selectorGuids": ["481256b4-1de5-047f-cb75-010f177a989b"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "vh",
                        "locked": false
                    }
                }, {
                    "id": "a-14-n-8",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_container",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec62"]
                        },
                        "globalSwatchId": "d2fecc19",
                        "rValue": 239,
                        "bValue": 227,
                        "gValue": 234,
                        "aValue": 1
                    }
                }, {
                    "id": "a-14-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_logo",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec64"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-11",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu_link",
                            "selectorGuids": ["531ac0ab-8f7b-7382-3bc3-61ae106d0c7c"]
                        },
                        "globalSwatchId": "",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 0.2
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168378054
        },
        "a-15": {
            "id": "a-15",
            "title": "Header Menu [OPEN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-15-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_overlay",
                            "selectorGuids": ["481256b4-1de5-047f-cb75-010f177a989b"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "vh",
                        "locked": false
                    }
                }, {
                    "id": "a-15-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-15-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-15-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-15-n-6",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_container",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec62"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-15-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_logo",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec64"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168766736
        },
        "a-34": {
            "id": "a-34",
            "title": "Header Menu_White [CLOSE]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "xValue": 0,
                        "yValue": -0.125,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-34-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "globalSwatchId": "7ef5d505",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 1
                    }
                }, {
                    "id": "a-34-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "globalSwatchId": "7ef5d505",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 1
                    }
                }, {
                    "id": "a-34-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu_link_text",
                            "selectorGuids": ["939b366e-1ebc-bf9e-5caf-13d4b37bf3d7"]
                        },
                        "globalSwatchId": "7ef5d505",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 1
                    }
                }, {
                    "id": "a-34-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "xValue": 0,
                        "yValue": 0.125,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-34-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-34-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-34-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_overlay",
                            "selectorGuids": ["481256b4-1de5-047f-cb75-010f177a989b"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "vh",
                        "locked": false
                    }
                }, {
                    "id": "a-34-n-9",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_container",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec62"]
                        },
                        "globalSwatchId": "d2fecc19",
                        "rValue": 239,
                        "bValue": 227,
                        "gValue": 234,
                        "aValue": 1
                    }
                }, {
                    "id": "a-34-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_logo",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec64"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-34-n-11",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu_link",
                            "selectorGuids": ["531ac0ab-8f7b-7382-3bc3-61ae106d0c7c"]
                        },
                        "globalSwatchId": "",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 0.2
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168378054
        },
        "a-35": {
            "id": "a-35",
            "title": "Header Menu_White [OPEN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-35-n-11",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top.project",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70", "6a282478-1143-7602-c87d-082beca34746"]
                        },
                        "globalSwatchId": "d2fecc19",
                        "rValue": 239,
                        "bValue": 227,
                        "gValue": 234,
                        "aValue": 1
                    }
                }, {
                    "id": "a-35-n-8",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu_link_text.project",
                            "selectorGuids": ["939b366e-1ebc-bf9e-5caf-13d4b37bf3d7", "8a74cdb9-345a-682e-b576-639d88d77353"]
                        },
                        "globalSwatchId": "d2fecc19",
                        "rValue": 239,
                        "bValue": 227,
                        "gValue": 234,
                        "aValue": 1
                    }
                }, {
                    "id": "a-35-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_overlay",
                            "selectorGuids": ["481256b4-1de5-047f-cb75-010f177a989b"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "vh",
                        "locked": false
                    }
                }, {
                    "id": "a-35-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-35-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-35-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-35-n-9",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu_link.projects",
                            "selectorGuids": ["531ac0ab-8f7b-7382-3bc3-61ae106d0c7c", "7ed18b20-afa9-67b0-a0f6-fec9d3d59cbe"]
                        },
                        "globalSwatchId": "",
                        "rValue": 239,
                        "bValue": 227,
                        "gValue": 234,
                        "aValue": 0.2
                    }
                }, {
                    "id": "a-35-n-10",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom.project",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73", "d597a6d8-0a76-ca41-e0bb-cf6c092913f0"]
                        },
                        "globalSwatchId": "d2fecc19",
                        "rValue": 239,
                        "bValue": 227,
                        "gValue": 234,
                        "aValue": 1
                    }
                }, {
                    "id": "a-35-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_logo",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec64"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-35-n-6",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_container",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec62"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168766736
        },
        "a-33": {
            "id": "a-33",
            "title": "Gradient Animation [PROJECTS]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "zValue": -78,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "zValue": 72,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "xValue": -4,
                        "yValue": -6,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "zValue": -73,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "zValue": 76,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "xValue": -31,
                        "yValue": 4,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-9",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "zValue": 79,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "xValue": -7,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-11",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "zValue": -68,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "xValue": 1,
                        "yValue": -1,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-14",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "zValue": -78,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-15",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "zValue": 72,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683207653903
        },
        "a-28": {
            "id": "a-28",
            "title": "Project marquee [Loop] [Desktop]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 25000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-marquee_marquee",
                            "selectorGuids": ["1c42e287-92a0-76d9-892a-9b3b18044a5c"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-marquee_marquee",
                            "selectorGuids": ["1c42e287-92a0-76d9-892a-9b3b18044a5c"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651457286764
        },
        "a-29": {
            "id": "a-29",
            "title": "Project marquee [Loop] [Mobile]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 10000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-marquee_marquee",
                            "selectorGuids": ["1c42e287-92a0-76d9-892a-9b3b18044a5c"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-marquee_marquee",
                            "selectorGuids": ["1c42e287-92a0-76d9-892a-9b3b18044a5c"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651457286764
        },
        "a-30": {
            "id": "a-30",
            "title": "Gradient Animation [RADIAL] 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-30-n-3",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-30-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-2",
                            "selectorGuids": ["919768f0-c0b6-1bd7-1cb5-299a4b5281ae"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-2",
                            "selectorGuids": ["919768f0-c0b6-1bd7-1cb5-299a4b5281ae"]
                        },
                        "xValue": -6,
                        "yValue": 10,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": -9,
                        "yValue": 7,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-7",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": 10,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-30-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-2",
                            "selectorGuids": ["919768f0-c0b6-1bd7-1cb5-299a4b5281ae"]
                        },
                        "xValue": 10,
                        "yValue": -14,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": 2,
                        "yValue": -9,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-11",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": 6,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-30-n-12",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-2",
                            "selectorGuids": ["919768f0-c0b6-1bd7-1cb5-299a4b5281ae"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-15",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-30-n-16",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1665137535236
        },
        "a-32": {
            "id": "a-32",
            "title": "Scrolling",
            "continuousParameterGroups": [{
                "id": "a-32-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-32-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".list",
                                "selectorGuids": ["bbfbc0a1-be26-c9a2-538b-9dddb728a6df"]
                            },
                            "xValue": 0,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-32-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".list",
                                "selectorGuids": ["bbfbc0a1-be26-c9a2-538b-9dddb728a6df"]
                            },
                            "xValue": -1,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1622340751326
        },
        "a-36": {
            "id": "a-36",
            "title": "Ft Project [IN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".ft-line",
                            "selectorGuids": ["dfda3c59-2db7-bb65-4f41-2b7b45d633c9"]
                        },
                        "xValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-36-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured_category.text-size-small",
                            "selectorGuids": ["71821199-8825-240f-c8e6-c62168492d43", "0b8efd6c-896d-28fc-326b-97a29b219bbe"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-36-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured_client.heading-style-h6",
                            "selectorGuids": ["41ec7d51-8d2b-1e82-e631-4e360726aee7", "5fdd147c-90dd-c434-1925-5d347bc5afb2"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-36-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured_name.heading-style-h2",
                            "selectorGuids": ["ab2f1319-321b-85ca-5500-2ea298193add", "5bdfa2f7-c115-9c93-edf4-b385123eb85e"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 1400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".ft-line",
                            "selectorGuids": ["dfda3c59-2db7-bb65-4f41-2b7b45d633c9"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured_client.heading-style-h6",
                            "selectorGuids": ["41ec7d51-8d2b-1e82-e631-4e360726aee7", "5fdd147c-90dd-c434-1925-5d347bc5afb2"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-36-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured_name.heading-style-h2",
                            "selectorGuids": ["ab2f1319-321b-85ca-5500-2ea298193add", "5bdfa2f7-c115-9c93-edf4-b385123eb85e"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-36-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured_category.text-size-small",
                            "selectorGuids": ["71821199-8825-240f-c8e6-c62168492d43", "0b8efd6c-896d-28fc-326b-97a29b219bbe"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1685518185051
        },
        "a-37": {
            "id": "a-37",
            "title": "Services Parallax",
            "continuousParameterGroups": [{
                "id": "a-37-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-37-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-20",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "7cd369c4-ae28-837a-ee20-87e59a175d77"]
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }, {
                        "id": "a-37-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-20",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "7cd369c4-ae28-837a-ee20-87e59a175d77"]
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-37-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-20",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "7cd369c4-ae28-837a-ee20-87e59a175d77"]
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }, {
                        "id": "a-37-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-20",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "7cd369c4-ae28-837a-ee20-87e59a175d77"]
                            },
                            "yValue": 10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1685520108543
        },
        "a-38": {
            "id": "a-38",
            "title": "Studio Slide Up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".heading-style-display",
                            "selectorGuids": ["e234f6e0-20ab-df40-067a-922710bdc5eb"]
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b3|f31ef841-cb39-df5f-8702-97394fae26f8"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".studio_content",
                            "selectorGuids": ["30a49588-b1de-c11e-23ce-0f178c1ffae1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".studio_content",
                            "selectorGuids": ["30a49588-b1de-c11e-23ce-0f178c1ffae1"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 2000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b3|f31ef841-cb39-df5f-8702-97394fae26f8"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outQuart",
                        "duration": 1400,
                        "target": {
                            "selector": ".heading-style-display",
                            "selectorGuids": ["e234f6e0-20ab-df40-067a-922710bdc5eb"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "outCirc",
                        "duration": 1000,
                        "target": {
                            "selector": ".studio_content",
                            "selectorGuids": ["30a49588-b1de-c11e-23ce-0f178c1ffae1"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 2000,
                        "target": {
                            "selector": ".studio_content",
                            "selectorGuids": ["30a49588-b1de-c11e-23ce-0f178c1ffae1"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1685521087228
        },
        "a-39": {
            "id": "a-39",
            "title": "Studio Parallax",
            "continuousParameterGroups": [{
                "id": "a-39-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-39-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-16",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "f2d2ac4d-e6ac-4e46-03b1-def669b4f957"]
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }, {
                        "id": "a-39-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-16",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "f2d2ac4d-e6ac-4e46-03b1-def669b4f957"]
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-39-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-16",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "f2d2ac4d-e6ac-4e46-03b1-def669b4f957"]
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }, {
                        "id": "a-39-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-16",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "f2d2ac4d-e6ac-4e46-03b1-def669b4f957"]
                            },
                            "yValue": 10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1685522102857
        },
        "a-40": {
            "id": "a-40",
            "title": "Header Slide Up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-40-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b3|601a4f0e-bb5a-82e3-f273-88812c6983ec"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-40-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1400,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b3|601a4f0e-bb5a-82e3-f273-88812c6983ec"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1685522542435
        },
        "a-41": {
            "id": "a-41",
            "title": "Service Item",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".service_line",
                            "selectorGuids": ["39521ea0-e265-33a4-35f5-dcf613151d43"]
                        },
                        "xValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-41-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".si_wrapper",
                            "selectorGuids": ["2d932d05-bedc-d287-daf8-d0f98d177ed1"]
                        },
                        "yValue": 200,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-41-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 1400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".service_line",
                            "selectorGuids": ["39521ea0-e265-33a4-35f5-dcf613151d43"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": false
                    }
                }, {
                    "id": "a-41-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".si_wrapper",
                            "selectorGuids": ["2d932d05-bedc-d287-daf8-d0f98d177ed1"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1685523004283
        },
        "a-42": {
            "id": "a-42",
            "title": "Project Page Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b0|e85fcc1d-577f-c69f-c838-3955b102efa5"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b0|b961cd08-52b7-86f4-c1df-fa1ebfa1b250"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-42-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b0|732b6be9-2f0e-becd-855d-67eabe634b9a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-42-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b0|b961cd08-52b7-86f4-c1df-fa1ebfa1b250"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-42-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b0|e85fcc1d-577f-c69f-c838-3955b102efa5"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "outCirc",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b0|732b6be9-2f0e-becd-855d-67eabe634b9a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1685523750532
        },
        "a-50": {
            "id": "a-50",
            "title": "Filters 2 sort dropdown [Close]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-50-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-50-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-50-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {},
                        "yValue": 3,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626161607847
        },
        "a-46": {
            "id": "a-46",
            "title": "Filter 2 toggle button [Off]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-46-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-46-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 198,
                        "bValue": 198,
                        "gValue": 198,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1638537122270
        },
        "a-48": {
            "id": "a-48",
            "title": "Filters 2 modal [Open] [Tablet]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": 120,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-48-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 500,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1646959718287
        },
        "a-47": {
            "id": "a-47",
            "title": "Filters 2 modal [Close] [Tablet]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-47-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 500,
                        "target": {},
                        "yValue": 120,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1646959718287
        },
        "a-45": {
            "id": "a-45",
            "title": "Filter 2 toggle button [On]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-45-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "xValue": 1,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-45-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {},
                        "globalSwatchId": "dccb7db6",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1638537122270
        },
        "a-49": {
            "id": "a-49",
            "title": "Filters 2 sort dropdown [Open]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-49-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": 3,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-49-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-49-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-49-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-49-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1626161607847
        },
        "a-57": {
            "id": "a-57",
            "title": "Work Gradient",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-57-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-57-n-3",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-57-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-2",
                            "selectorGuids": ["23000641-d55d-8150-785a-926280cfe54b"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-2",
                            "selectorGuids": ["23000641-d55d-8150-785a-926280cfe54b"]
                        },
                        "xValue": -6,
                        "yValue": 10,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": -9,
                        "yValue": 7,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-7",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": 10,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-57-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-2",
                            "selectorGuids": ["23000641-d55d-8150-785a-926280cfe54b"]
                        },
                        "xValue": 10,
                        "yValue": -14,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": 2,
                        "yValue": -9,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-11",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": 6,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-57-n-12",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-2",
                            "selectorGuids": ["23000641-d55d-8150-785a-926280cfe54b"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-15",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-57-n-16",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1665137535236
        },
        "a-58": {
            "id": "a-58",
            "title": "Work Grid",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-58-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-58-n-5",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
                        },
                        "xValue": 0,
                        "yValue": 5,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-58-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-58-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-58-n-6",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-58-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1685627490451
        },
        "a-59": {
            "id": "a-59",
            "title": "Contact Page Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-59-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|ddba9ebc-9bd6-7f35-e142-2bb812d04d08"
                        },
                        "yValue": 50,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|cb2c5d14-49bb-25f5-def1-b8c539429dc9"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|182dfed7-cc10-fd19-6f8d-c103263c7725"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|780020fa-1ade-f99d-bc6c-25d020158dc1"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-15",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|5c5dd414-5310-069b-d87b-884fb76edf4d"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-59-n-13",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|a8296101-f5be-d9b4-b845-5a6a897e2b38"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-59-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|3f0509ab-4c14-a874-d63c-6f5e2aa34bff"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|2f45e20d-b739-a10f-342c-1d8394a74b5b"
                        },
                        "yValue": 150,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|075545f0-e48b-1949-8279-20169f4b8d40"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|2df42a85-0274-06a1-2caa-21263af942a5"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|ddba9ebc-9bd6-7f35-e142-2bb812d04d08"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-59-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|ddba9ebc-9bd6-7f35-e142-2bb812d04d08"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|ddba9ebc-9bd6-7f35-e142-2bb812d04d08"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outCirc",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|2df42a85-0274-06a1-2caa-21263af942a5"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "outCirc",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|075545f0-e48b-1949-8279-20169f4b8d40"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 800,
                        "easing": "outCirc",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|2f45e20d-b739-a10f-342c-1d8394a74b5b"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|3f0509ab-4c14-a874-d63c-6f5e2aa34bff"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-59-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|a8296101-f5be-d9b4-b845-5a6a897e2b38"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-59-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|cb2c5d14-49bb-25f5-def1-b8c539429dc9"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-18",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|780020fa-1ade-f99d-bc6c-25d020158dc1"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|5c5dd414-5310-069b-d87b-884fb76edf4d"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-59-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|182dfed7-cc10-fd19-6f8d-c103263c7725"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686568176329
        },
        "a-60": {
            "id": "a-60",
            "title": "Work Page Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-60-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|5079f2f0-8656-ce1c-3497-05ea9dc1e952"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-60-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14351"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-60-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14351"
                        },
                        "yValue": 200,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-60-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|13b13d25-91e1-dace-fbd8-10b8247f13b7"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-60-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|b8351c1d-e232-ce31-b5e2-c07b9c812f77"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-60-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|5079f2f0-8656-ce1c-3497-05ea9dc1e952"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-60-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuad",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14351"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-60-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14351"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-60-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|b8351c1d-e232-ce31-b5e2-c07b9c812f77"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-60-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 2000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|13b13d25-91e1-dace-fbd8-10b8247f13b7"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686573157642
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
