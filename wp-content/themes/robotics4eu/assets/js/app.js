"use strict";

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function(i) {
    var n = {};

    function o(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return i[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = i, o.c = n, o.d = function(e, t, i) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
        var i = Object.create(null);
        if (o.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) o.d(i, n, function(e) {
                return t[e]
            }.bind(null, n));
        return i
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 9)
}([function(e, t) {
    var i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" == ("undefined" == typeof window ? "undefined" : _typeof(window)) && (i = window)
    }
    e.exports = i
}, function(ti, ii, e) {
    var ni, t, i;
    t = "undefined" != typeof window ? window : this, i = function(E, e) {
        function m(e) {
            return null != e && e === e.window
        }
        var t = [],
            i = Object.getPrototypeOf,
            a = t.slice,
            g = t.flat ? function(e) {
                return t.flat.call(e)
            } : function(e) {
                return t.concat.apply([], e)
            },
            l = t.push,
            o = t.indexOf,
            n = {},
            r = n.toString,
            v = n.hasOwnProperty,
            s = v.toString,
            c = s.call(Object),
            y = {},
            b = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            T = E.document,
            u = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function w(e, t, i) {
            var n, o, r = (i = i || T).createElement("script");
            if (r.text = e, t)
                for (n in u)(o = t[n] || t.getAttribute && t.getAttribute(n)) && r.setAttribute(n, o);
            i.head.appendChild(r).parentNode.removeChild(r)
        }

        function f(e) {
            return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[r.call(e)] || "object" : _typeof(e)
        }
        var C = function e(t, i) {
            return new e.fn.init(t, i)
        };

        function d(e) {
            var t = !!e && "length" in e && e.length,
                i = f(e);
            return !b(e) && !m(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        C.fn = C.prototype = {
            jquery: "3.5.1",
            constructor: C,
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                e = C.merge(this.constructor(), e);
                return e.prevObject = this, e
            },
            each: function(e) {
                return C.each(this, e)
            },
            map: function(i) {
                return this.pushStack(C.map(this, function(e, t) {
                    return i.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(C.grep(this, function(e, t) {
                    return (t + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(C.grep(this, function(e, t) {
                    return t % 2
                }))
            },
            eq: function(e) {
                var t = this.length,
                    e = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= e && e < t ? [this[e]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: t.sort,
            splice: t.splice
        }, C.extend = C.fn.extend = function() {
            var e, t, i, n, o, r = arguments[0] || {},
                s = 1,
                a = arguments.length,
                l = !1;
            for ("boolean" == typeof r && (l = r, r = arguments[s] || {}, s++), "object" == _typeof(r) || b(r) || (r = {}), s === a && (r = this, s--); s < a; s++)
                if (null != (e = arguments[s]))
                    for (t in e) i = e[t], "__proto__" !== t && r !== i && (l && i && (C.isPlainObject(i) || (n = Array.isArray(i))) ? (o = r[t], o = n && !Array.isArray(o) ? [] : n || C.isPlainObject(o) ? o : {}, n = !1, r[t] = C.extend(l, o, i)) : void 0 !== i && (r[t] = i));
            return r
        }, C.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                return !(!e || "[object Object]" !== r.call(e) || (e = i(e)) && ("function" != typeof(e = v.call(e, "constructor") && e.constructor) || s.call(e) !== c))
            },
            isEmptyObject: function(e) {
                for (var t in e) return !1;
                return !0
            },
            globalEval: function(e, t, i) {
                w(e, {
                    nonce: t && t.nonce
                }, i)
            },
            each: function(e, t) {
                var i, n = 0;
                if (d(e))
                    for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
                else
                    for (n in e)
                        if (!1 === t.call(e[n], n, e[n])) break;
                return e
            },
            makeArray: function(e, t) {
                t = t || [];
                return null != e && (d(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)), t
            },
            inArray: function(e, t, i) {
                return null == t ? -1 : o.call(t, e, i)
            },
            merge: function(e, t) {
                for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
                return e.length = o, e
            },
            grep: function(e, t, i) {
                for (var n = [], o = 0, r = e.length, s = !i; o < r; o++) !t(e[o], o) != s && n.push(e[o]);
                return n
            },
            map: function(e, t, i) {
                var n, o, r = 0,
                    s = [];
                if (d(e))
                    for (n = e.length; r < n; r++) null != (o = t(e[r], r, i)) && s.push(o);
                else
                    for (r in e) null != (o = t(e[r], r, i)) && s.push(o);
                return g(s)
            },
            guid: 1,
            support: y
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
        var h = function(i) {
            function d(e, t) {
                return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
            }

            function n() {
                x()
            }
            var e, p, w, r, o, f, h, m, _, l, c, x, E, s, T, g, a, u, v, C = "sizzle" + +new Date,
                y = i.document,
                S = 0,
                b = 0,
                k = le(),
                A = le(),
                D = le(),
                L = le(),
                O = function(e, t) {
                    return e === t && (c = !0), 0
                },
                j = {}.hasOwnProperty,
                t = [],
                M = t.pop,
                N = t.push,
                I = t.push,
                q = t.slice,
                H = function(e, t) {
                    for (var i = 0, n = e.length; i < n; i++)
                        if (e[i] === t) return i;
                    return -1
                },
                P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                R = "[\\x20\\t\\r\\n\\f]",
                z = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                $ = "\\[" + R + "*(" + z + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + R + "*\\]",
                B = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
                F = new RegExp(R + "+", "g"),
                W = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                Y = new RegExp("^" + R + "*," + R + "*"),
                X = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                V = new RegExp(R + "|>"),
                U = new RegExp(B),
                Q = new RegExp("^" + z + "$"),
                K = {
                    ID: new RegExp("^#(" + z + ")"),
                    CLASS: new RegExp("^\\.(" + z + ")"),
                    TAG: new RegExp("^(" + z + "|[*])"),
                    ATTR: new RegExp("^" + $),
                    PSEUDO: new RegExp("^" + B),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + P + ")$", "i"),
                    needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                },
                G = /HTML$/i,
                J = /^(?:input|select|textarea|button)$/i,
                Z = /^h\d$/i,
                ee = /^[^{]+\{\s*\[native \w/,
                te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ie = /[+~]/,
                ne = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
                oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                re = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                se = ye(function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                I.apply(t = q.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
            } catch (i) {
                I = {
                    apply: t.length ? function(e, t) {
                        N.apply(e, q.call(t))
                    } : function(e, t) {
                        for (var i = e.length, n = 0; e[i++] = t[n++];);
                        e.length = i - 1
                    }
                }
            }

            function ae(e, t, i, n) {
                var o, r, s, a, l, c, u, d = t && t.ownerDocument,
                    h = t ? t.nodeType : 9;
                if (i = i || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return i;
                if (!n && (x(t), t = t || E, T)) {
                    if (11 !== h && (l = te.exec(e)))
                        if (o = l[1]) {
                            if (9 === h) {
                                if (!(s = t.getElementById(o))) return i;
                                if (s.id === o) return i.push(s), i
                            } else if (d && (s = d.getElementById(o)) && v(t, s) && s.id === o) return i.push(s), i
                        } else {
                            if (l[2]) return I.apply(i, t.getElementsByTagName(e)), i;
                            if ((o = l[3]) && p.getElementsByClassName && t.getElementsByClassName) return I.apply(i, t.getElementsByClassName(o)), i
                        }
                    if (p.qsa && !L[e + " "] && (!g || !g.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                        if (u = e, d = t, 1 === h && (V.test(e) || X.test(e))) {
                            for ((d = ie.test(e) && me(t.parentNode) || t) === t && p.scope || ((a = t.getAttribute("id")) ? a = a.replace(oe, re) : t.setAttribute("id", a = C)), r = (c = f(e)).length; r--;) c[r] = (a ? "#" + a : ":scope") + " " + ve(c[r]);
                            u = c.join(",")
                        }
                        try {
                            return I.apply(i, d.querySelectorAll(u)), i
                        } catch (t) {
                            L(e, !0)
                        } finally {
                            a === C && t.removeAttribute("id")
                        }
                    }
                }
                return m(e.replace(W, "$1"), t, i, n)
            }

            function le() {
                var n = [];
                return function e(t, i) {
                    return n.push(t + " ") > w.cacheLength && delete e[n.shift()], e[t + " "] = i
                }
            }

            function ce(e) {
                return e[C] = !0, e
            }

            function ue(e) {
                var t = E.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function de(e, t) {
                for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
            }

            function he(e, t) {
                var i = t && e,
                    n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === t) return -1;
                return e ? 1 : -1
            }

            function pe(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function fe(s) {
                return ce(function(r) {
                    return r = +r, ce(function(e, t) {
                        for (var i, n = s([], e.length, r), o = n.length; o--;) e[i = n[o]] && (e[i] = !(t[i] = e[i]))
                    })
                })
            }

            function me(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (e in p = ae.support = {}, o = ae.isXML = function(e) {
                    var t = e.namespaceURI,
                        e = (e.ownerDocument || e).documentElement;
                    return !G.test(t || e && e.nodeName || "HTML")
                }, x = ae.setDocument = function(e) {
                    var t, e = e ? e.ownerDocument || e : y;
                    return e != E && 9 === e.nodeType && e.documentElement && (s = (E = e).documentElement, T = !o(E), y != E && (t = E.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", n, !1) : t.attachEvent && t.attachEvent("onunload", n)), p.scope = ue(function(e) {
                        return s.appendChild(e).appendChild(E.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                    }), p.attributes = ue(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), p.getElementsByTagName = ue(function(e) {
                        return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
                    }), p.getElementsByClassName = ee.test(E.getElementsByClassName), p.getById = ue(function(e) {
                        return s.appendChild(e).id = C, !E.getElementsByName || !E.getElementsByName(C).length
                    }), p.getById ? (w.filter.ID = function(e) {
                        var t = e.replace(ne, d);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, w.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && T) {
                            e = t.getElementById(e);
                            return e ? [e] : []
                        }
                    }) : (w.filter.ID = function(e) {
                        var t = e.replace(ne, d);
                        return function(e) {
                            e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return e && e.value === t
                        }
                    }, w.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && T) {
                            var i, n, o, r = t.getElementById(e);
                            if (r) {
                                if ((i = r.getAttributeNode("id")) && i.value === e) return [r];
                                for (o = t.getElementsByName(e), n = 0; r = o[n++];)
                                    if ((i = r.getAttributeNode("id")) && i.value === e) return [r]
                            }
                            return []
                        }
                    }), w.find.TAG = p.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var i, n = [],
                            o = 0,
                            r = t.getElementsByTagName(e);
                        if ("*" !== e) return r;
                        for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }, w.find.CLASS = p.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e)
                    }, a = [], g = [], (p.qsa = ee.test(E.querySelectorAll)) && (ue(function(e) {
                        var t;
                        s.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + R + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + C + "-]").length || g.push("~="), (t = E.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                    }), ue(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = E.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                    })), (p.matchesSelector = ee.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ue(function(e) {
                        p.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), a.push("!=", B)
                    }), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), t = ee.test(s.compareDocumentPosition), v = t || ee.test(s.contains) ? function(e, t) {
                        var i = 9 === e.nodeType ? e.documentElement : e,
                            t = t && t.parentNode;
                        return e === t || !(!t || 1 !== t.nodeType || !(i.contains ? i.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, O = t ? function(e, t) {
                        if (e === t) return c = !0, 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === i ? e == E || e.ownerDocument == y && v(y, e) ? -1 : t == E || t.ownerDocument == y && v(y, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : 4 & i ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return c = !0, 0;
                        var i, n = 0,
                            o = e.parentNode,
                            r = t.parentNode,
                            s = [e],
                            a = [t];
                        if (!o || !r) return e == E ? -1 : t == E ? 1 : o ? -1 : r ? 1 : l ? H(l, e) - H(l, t) : 0;
                        if (o === r) return he(e, t);
                        for (i = e; i = i.parentNode;) s.unshift(i);
                        for (i = t; i = i.parentNode;) a.unshift(i);
                        for (; s[n] === a[n];) n++;
                        return n ? he(s[n], a[n]) : s[n] == y ? -1 : a[n] == y ? 1 : 0
                    }), E
                }, ae.matches = function(e, t) {
                    return ae(e, null, null, t)
                }, ae.matchesSelector = function(e, t) {
                    if (x(e), p.matchesSelector && T && !L[t + " "] && (!a || !a.test(t)) && (!g || !g.test(t))) try {
                        var i = u.call(e, t);
                        if (i || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (e) {
                        L(t, !0)
                    }
                    return 0 < ae(t, E, null, [e]).length
                }, ae.contains = function(e, t) {
                    return (e.ownerDocument || e) != E && x(e), v(e, t)
                }, ae.attr = function(e, t) {
                    (e.ownerDocument || e) != E && x(e);
                    var i = w.attrHandle[t.toLowerCase()],
                        i = i && j.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !T) : void 0;
                    return void 0 !== i ? i : p.attributes || !T ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, ae.escape = function(e) {
                    return (e + "").replace(oe, re)
                }, ae.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, ae.uniqueSort = function(e) {
                    var t, i = [],
                        n = 0,
                        o = 0;
                    if (c = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(O), c) {
                        for (; t = e[o++];) t === e[o] && (n = i.push(o));
                        for (; n--;) e.splice(i[n], 1)
                    }
                    return l = null, e
                }, r = ae.getText = function(e) {
                    var t, i = "",
                        n = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) i += r(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[n++];) i += r(t);
                    return i
                }, (w = ae.selectors = {
                    cacheLength: 50,
                    createPseudo: ce,
                    match: K,
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
                        ATTR: function(e) {
                            return e[1] = e[1].replace(ne, d), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, i = !e[6] && e[2];
                            return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && U.test(i) && (t = f(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(ne, d).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = k[e + " "];
                            return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && k(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, i, n) {
                            return function(e) {
                                e = ae.attr(e, t);
                                return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === n : "!=" === i ? e !== n : "^=" === i ? n && 0 === e.indexOf(n) : "*=" === i ? n && -1 < e.indexOf(n) : "$=" === i ? n && e.slice(-n.length) === n : "~=" === i ? -1 < (" " + e.replace(F, " ") + " ").indexOf(n) : "|=" === i && (e === n || e.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(f, e, t, m, g) {
                            var v = "nth" !== f.slice(0, 3),
                                y = "last" !== f.slice(-4),
                                b = "of-type" === e;
                            return 1 === m && 0 === g ? function(e) {
                                return !!e.parentNode
                            } : function(e, t, i) {
                                var n, o, r, s, a, l, c = v != y ? "nextSibling" : "previousSibling",
                                    u = e.parentNode,
                                    d = b && e.nodeName.toLowerCase(),
                                    h = !i && !b,
                                    p = !1;
                                if (u) {
                                    if (v) {
                                        for (; c;) {
                                            for (s = e; s = s[c];)
                                                if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                            l = c = "only" === f && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [y ? u.firstChild : u.lastChild], y && h) {
                                        for (p = (a = (n = (o = (r = (s = u)[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] || [])[0] === S && n[1]) && n[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (p = a = 0) || l.pop();)
                                            if (1 === s.nodeType && ++p && s === e) {
                                                o[f] = [S, a, p];
                                                break
                                            }
                                    } else if (!1 === (p = h ? a = (n = (o = (r = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] || [])[0] === S && n[1] : p))
                                        for (;
                                            (s = ++a && s && s[c] || (p = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++p || (h && ((o = (r = s[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] = [S, p]), s !== e)););
                                    return (p -= g) === m || p % m == 0 && 0 <= p / m
                                }
                            }
                        },
                        PSEUDO: function(e, r) {
                            var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                            return s[C] ? s(r) : 1 < s.length ? (t = [e, e, "", r], w.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, t) {
                                for (var i, n = s(e, r), o = n.length; o--;) e[i = H(e, n[o])] = !(t[i] = n[o])
                            }) : function(e) {
                                return s(e, 0, t)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: ce(function(e) {
                            var n = [],
                                o = [],
                                a = h(e.replace(W, "$1"));
                            return a[C] ? ce(function(e, t, i, n) {
                                for (var o, r = a(e, null, n, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, t, i) {
                                return n[0] = e, a(n, null, i, o), n[0] = null, !o.pop()
                            }
                        }),
                        has: ce(function(t) {
                            return function(e) {
                                return 0 < ae(t, e).length
                            }
                        }),
                        contains: ce(function(t) {
                            return t = t.replace(ne, d),
                                function(e) {
                                    return -1 < (e.textContent || r(e)).indexOf(t)
                                }
                        }),
                        lang: ce(function(i) {
                            return Q.test(i || "") || ae.error("unsupported lang: " + i), i = i.replace(ne, d).toLowerCase(),
                                function(e) {
                                    var t;
                                    do {
                                        if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var t = i.location && i.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === s
                        },
                        focus: function(e) {
                            return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: pe(!1),
                        disabled: pe(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !w.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Z.test(e.nodeName)
                        },
                        input: function(e) {
                            return J.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: fe(function() {
                            return [0]
                        }),
                        last: fe(function(e, t) {
                            return [t - 1]
                        }),
                        eq: fe(function(e, t, i) {
                            return [i < 0 ? i + t : i]
                        }),
                        even: fe(function(e, t) {
                            for (var i = 0; i < t; i += 2) e.push(i);
                            return e
                        }),
                        odd: fe(function(e, t) {
                            for (var i = 1; i < t; i += 2) e.push(i);
                            return e
                        }),
                        lt: fe(function(e, t, i) {
                            for (var n = i < 0 ? i + t : t < i ? t : i; 0 <= --n;) e.push(n);
                            return e
                        }),
                        gt: fe(function(e, t, i) {
                            for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                            return e
                        })
                    }
                }).pseudos.nth = w.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[e] = function(i) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === i
                }
            }(e);

            function ge() {}

            function ve(e) {
                for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
                return n
            }

            function ye(s, e, t) {
                var a = e.dir,
                    l = e.next,
                    c = l || a,
                    u = t && "parentNode" === c,
                    d = b++;
                return e.first ? function(e, t, i) {
                    for (; e = e[a];)
                        if (1 === e.nodeType || u) return s(e, t, i);
                    return !1
                } : function(e, t, i) {
                    var n, o, r = [S, d];
                    if (i) {
                        for (; e = e[a];)
                            if ((1 === e.nodeType || u) && s(e, t, i)) return !0
                    } else
                        for (; e = e[a];)
                            if (1 === e.nodeType || u)
                                if (n = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[a] || e;
                                else {
                                    if ((o = n[c]) && o[0] === S && o[1] === d) return r[2] = o[2];
                                    if ((n[c] = r)[2] = s(e, t, i)) return !0
                                } return !1
                }
            }

            function be(o) {
                return 1 < o.length ? function(e, t, i) {
                    for (var n = o.length; n--;)
                        if (!o[n](e, t, i)) return !1;
                    return !0
                } : o[0]
            }

            function we(e, t, i, n, o) {
                for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (i && !i(r, n, o) || (s.push(r), c && t.push(a)));
                return s
            }

            function _e(e) {
                for (var n, t, i, o = e.length, r = w.relative[e[0].type], s = r || w.relative[" "], a = r ? 1 : 0, l = ye(function(e) {
                        return e === n
                    }, s, !0), c = ye(function(e) {
                        return -1 < H(n, e)
                    }, s, !0), u = [function(e, t, i) {
                        i = !r && (i || t !== _) || ((n = t).nodeType ? l : c)(e, t, i);
                        return n = null, i
                    }]; a < o; a++)
                    if (t = w.relative[e[a].type]) u = [ye(be(u), t)];
                    else {
                        if ((t = w.filter[e[a].type].apply(null, e[a].matches))[C]) {
                            for (i = ++a; i < o && !w.relative[e[i].type]; i++);
                            return function e(p, f, m, g, v, t) {
                                return g && !g[C] && (g = e(g)), v && !v[C] && (v = e(v, t)), ce(function(e, t, i, n) {
                                    var o, r, s, a = [],
                                        l = [],
                                        c = t.length,
                                        u = e || function(e, t, i) {
                                            for (var n = 0, o = t.length; n < o; n++) ae(e, t[n], i);
                                            return i
                                        }(f || "*", i.nodeType ? [i] : i, []),
                                        d = !p || !e && f ? u : we(u, a, p, i, n),
                                        h = m ? v || (e ? p : c || g) ? [] : t : d;
                                    if (m && m(d, h, i, n), g)
                                        for (o = we(h, l), g(o, [], i, n), r = o.length; r--;)(s = o[r]) && (h[l[r]] = !(d[l[r]] = s));
                                    if (e) {
                                        if (v || p) {
                                            if (v) {
                                                for (o = [], r = h.length; r--;)(s = h[r]) && o.push(d[r] = s);
                                                v(null, h = [], o, n)
                                            }
                                            for (r = h.length; r--;)(s = h[r]) && -1 < (o = v ? H(e, s) : a[r]) && (e[o] = !(t[o] = s))
                                        }
                                    } else h = we(h === t ? h.splice(c, h.length) : h), v ? v(null, t, h, n) : I.apply(t, h)
                                })
                            }(1 < a && be(u), 1 < a && ve(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(W, "$1"), t, a < i && _e(e.slice(a, i)), i < o && _e(e = e.slice(i)), i < o && ve(e))
                        }
                        u.push(t)
                    }
                return be(u)
            }
            return ge.prototype = w.filters = w.pseudos, w.setFilters = new ge, f = ae.tokenize = function(e, t) {
                var i, n, o, r, s, a, l, c = A[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, a = [], l = w.preFilter; s;) {
                    for (r in i && !(n = Y.exec(s)) || (n && (s = s.slice(n[0].length) || s), a.push(o = [])), i = !1, (n = X.exec(s)) && (i = n.shift(), o.push({
                            value: i,
                            type: n[0].replace(W, " ")
                        }), s = s.slice(i.length)), w.filter) !(n = K[r].exec(s)) || l[r] && !(n = l[r](n)) || (i = n.shift(), o.push({
                        value: i,
                        type: r,
                        matches: n
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return t ? s.length : s ? ae.error(e) : A(e, a).slice(0)
            }, h = ae.compile = function(e, t) {
                var i, g, v, y, b, n = [],
                    o = [],
                    r = D[e + " "];
                if (!r) {
                    for (i = (t = t || f(e)).length; i--;)((r = _e(t[i]))[C] ? n : o).push(r);
                    (r = D(e, (g = o, y = 0 < (v = n).length, b = 0 < g.length, y ? ce(s) : s))).selector = e
                }

                function s(e, t, i, n, o) {
                    var r, s, a, l = 0,
                        c = "0",
                        u = e && [],
                        d = [],
                        h = _,
                        p = e || b && w.find.TAG("*", o),
                        f = S += null == h ? 1 : Math.random() || .1,
                        m = p.length;
                    for (o && (_ = t == E || t || o); c !== m && null != (r = p[c]); c++) {
                        if (b && r) {
                            for (s = 0, t || r.ownerDocument == E || (x(r), i = !T); a = g[s++];)
                                if (a(r, t || E, i)) {
                                    n.push(r);
                                    break
                                }
                            o && (S = f)
                        }
                        y && ((r = !a && r) && l--, e && u.push(r))
                    }
                    if (l += c, y && c !== l) {
                        for (s = 0; a = v[s++];) a(u, d, t, i);
                        if (e) {
                            if (0 < l)
                                for (; c--;) u[c] || d[c] || (d[c] = M.call(n));
                            d = we(d)
                        }
                        I.apply(n, d), o && !e && 0 < d.length && 1 < l + v.length && ae.uniqueSort(n)
                    }
                    return o && (S = f, _ = h), u
                }
                return r
            }, m = ae.select = function(e, t, i, n) {
                var o, r, s, a, l, c = "function" == typeof e && e,
                    u = !n && f(e = c.selector || e);
                if (i = i || [], 1 === u.length) {
                    if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && T && w.relative[r[1].type]) {
                        if (!(t = (w.find.ID(s.matches[0].replace(ne, d), t) || [])[0])) return i;
                        c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (o = K.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
                        if ((l = w.find[a]) && (n = l(s.matches[0].replace(ne, d), ie.test(r[0].type) && me(t.parentNode) || t))) {
                            if (r.splice(o, 1), !(e = n.length && ve(r))) return I.apply(i, n), i;
                            break
                        }
                }
                return (c || h(e, u))(n, t, !T, i, !t || ie.test(e) && me(t.parentNode) || t), i
            }, p.sortStable = C.split("").sort(O).join("") === C, p.detectDuplicates = !!c, x(), p.sortDetached = ue(function(e) {
                return 1 & e.compareDocumentPosition(E.createElement("fieldset"))
            }), ue(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || de("type|href|height|width", function(e, t, i) {
                if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), p.attributes && ue(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || de("value", function(e, t, i) {
                if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), ue(function(e) {
                return null == e.getAttribute("disabled")
            }) || de(P, function(e, t, i) {
                if (!i) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
            }), ae
        }(E);
        C.find = h, C.expr = h.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = h.uniqueSort, C.text = h.getText, C.isXMLDoc = h.isXML, C.contains = h.contains, C.escapeSelector = h.escape;

        function p(e, t, i) {
            for (var n = [], o = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && C(e).is(i)) break;
                    n.push(e)
                }
            return n
        }

        function _(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
        var x = C.expr.match.needsContext;

        function S(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function A(e, i, n) {
            return b(i) ? C.grep(e, function(e, t) {
                return !!i.call(e, t, e) !== n
            }) : i.nodeType ? C.grep(e, function(e) {
                return e === i !== n
            }) : "string" != typeof i ? C.grep(e, function(e) {
                return -1 < o.call(i, e) !== n
            }) : C.filter(i, e, n)
        }
        C.filter = function(e, t, i) {
            var n = t[0];
            return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? C.find.matchesSelector(n, e) ? [n] : [] : C.find.matches(e, C.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, C.fn.extend({
            find: function(e) {
                var t, i, n = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (C.contains(o[t], this)) return !0
                }));
                for (i = this.pushStack([]), t = 0; t < n; t++) C.find(e, o[t], i);
                return 1 < n ? C.uniqueSort(i) : i
            },
            filter: function(e) {
                return this.pushStack(A(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(A(this, e || [], !0))
            },
            is: function(e) {
                return !!A(this, "string" == typeof e && x.test(e) ? C(e) : e || [], !1).length
            }
        });
        var D, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function(e, t, i) {
            if (!e) return this;
            if (i = i || D, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== i.ready ? i.ready(e) : e(C) : C.makeArray(e, this);
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !n[1] && t) return (!t || t.jquery ? t || i : this.constructor(t)).find(e);
            if (n[1]) {
                if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), k.test(n[1]) && C.isPlainObject(t))
                    for (var n in t) b(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (e = T.getElementById(n[2])) && (this[0] = e, this.length = 1), this
        }).prototype = C.fn, D = C(T);
        var O = /^(?:parents|prev(?:Until|All))/,
            j = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function M(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        C.fn.extend({
            has: function(e) {
                var t = C(e, this),
                    i = t.length;
                return this.filter(function() {
                    for (var e = 0; e < i; e++)
                        if (C.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var i, n = 0,
                    o = this.length,
                    r = [],
                    s = "string" != typeof e && C(e);
                if (!x.test(e))
                    for (; n < o; n++)
                        for (i = this[n]; i && i !== t; i = i.parentNode)
                            if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && C.find.matchesSelector(i, e))) {
                                r.push(i);
                                break
                            }
                return this.pushStack(1 < r.length ? C.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? o.call(C(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), C.each({
            parent: function(e) {
                e = e.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(e) {
                return p(e, "parentNode")
            },
            parentsUntil: function(e, t, i) {
                return p(e, "parentNode", i)
            },
            next: function(e) {
                return M(e, "nextSibling")
            },
            prev: function(e) {
                return M(e, "previousSibling")
            },
            nextAll: function(e) {
                return p(e, "nextSibling")
            },
            prevAll: function(e) {
                return p(e, "previousSibling")
            },
            nextUntil: function(e, t, i) {
                return p(e, "nextSibling", i)
            },
            prevUntil: function(e, t, i) {
                return p(e, "previousSibling", i)
            },
            siblings: function(e) {
                return _((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return _(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (S(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
            }
        }, function(n, o) {
            C.fn[n] = function(e, t) {
                var i = C.map(this, o, e);
                return (t = "Until" !== n.slice(-5) ? e : t) && "string" == typeof t && (i = C.filter(t, i)), 1 < this.length && (j[n] || C.uniqueSort(i), O.test(n) && i.reverse()), this.pushStack(i)
            }
        });
        var N = /[^\x20\t\r\n\f]+/g;

        function I(e) {
            return e
        }

        function q(e) {
            throw e
        }

        function H(e, t, i, n) {
            var o;
            try {
                e && b(o = e.promise) ? o.call(e).done(t).fail(i) : e && b(o = e.then) ? o.call(e, t, i) : t.apply(void 0, [e].slice(n))
            } catch (e) {
                i.apply(void 0, [e])
            }
        }
        C.Callbacks = function(n) {
            var i;
            n = "string" == typeof n ? (i = {}, C.each(n.match(N) || [], function(e, t) {
                i[t] = !0
            }), i) : C.extend({}, n);

            function o() {
                for (s = s || n.once, t = r = !0; l.length; c = -1)
                    for (e = l.shift(); ++c < a.length;) !1 === a[c].apply(e[0], e[1]) && n.stopOnFalse && (c = a.length, e = !1);
                n.memory || (e = !1), r = !1, s && (a = e ? [] : "")
            }
            var r, e, t, s, a = [],
                l = [],
                c = -1,
                u = {
                    add: function() {
                        return a && (e && !r && (c = a.length - 1, l.push(e)), function i(e) {
                            C.each(e, function(e, t) {
                                b(t) ? n.unique && u.has(t) || a.push(t) : t && t.length && "string" !== f(t) && i(t)
                            })
                        }(arguments), e && !r && o()), this
                    },
                    remove: function() {
                        return C.each(arguments, function(e, t) {
                            for (var i; - 1 < (i = C.inArray(t, a, i));) a.splice(i, 1), i <= c && c--
                        }), this
                    },
                    has: function(e) {
                        return e ? -1 < C.inArray(e, a) : 0 < a.length
                    },
                    empty: function() {
                        return a = a && [], this
                    },
                    disable: function() {
                        return s = l = [], a = e = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return s = l = [], e || r || (a = e = ""), this
                    },
                    locked: function() {
                        return !!s
                    },
                    fireWith: function(e, t) {
                        return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || o()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!t
                    }
                };
            return u
        }, C.extend({
            Deferred: function(e) {
                var r = [
                        ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                        ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                    ],
                    o = "pending",
                    s = {
                        state: function() {
                            return o
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return s.then(null, e)
                        },
                        pipe: function() {
                            var o = arguments;
                            return C.Deferred(function(n) {
                                C.each(r, function(e, t) {
                                    var i = b(o[t[4]]) && o[t[4]];
                                    a[t[1]](function() {
                                        var e = i && i.apply(this, arguments);
                                        e && b(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this, i ? [e] : arguments)
                                    })
                                }), o = null
                            }).promise()
                        },
                        then: function(t, i, n) {
                            var l = 0;

                            function c(o, r, s, a) {
                                return function() {
                                    function e() {
                                        var e, t;
                                        if (!(o < l)) {
                                            if ((e = s.apply(i, n)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, b(t) ? a ? t.call(e, c(l, r, I, a), c(l, r, q, a)) : (l++, t.call(e, c(l, r, I, a), c(l, r, q, a), c(l, r, I, r.notifyWith))) : (s !== I && (i = void 0, n = [e]), (a || r.resolveWith)(i, n))
                                        }
                                    }
                                    var i = this,
                                        n = arguments,
                                        t = a ? e : function() {
                                            try {
                                                e()
                                            } catch (e) {
                                                C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (s !== q && (i = void 0, n = [e]), r.rejectWith(i, n))
                                            }
                                        };
                                    o ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), E.setTimeout(t))
                                }
                            }
                            return C.Deferred(function(e) {
                                r[0][3].add(c(0, e, b(n) ? n : I, e.notifyWith)), r[1][3].add(c(0, e, b(t) ? t : I)), r[2][3].add(c(0, e, b(i) ? i : q))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? C.extend(e, s) : s
                        }
                    },
                    a = {};
                return C.each(r, function(e, t) {
                    var i = t[2],
                        n = t[5];
                    s[t[1]] = i.add, n && i.add(function() {
                        o = n
                    }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), i.add(t[3].fire), a[t[0]] = function() {
                        return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                    }, a[t[0] + "With"] = i.fireWith
                }), s.promise(a), e && e.call(a, a), a
            },
            when: function(e) {
                function t(t) {
                    return function(e) {
                        o[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --i || s.resolveWith(o, r)
                    }
                }
                var i = arguments.length,
                    n = i,
                    o = Array(n),
                    r = a.call(arguments),
                    s = C.Deferred();
                if (i <= 1 && (H(e, s.done(t(n)).resolve, s.reject, !i), "pending" === s.state() || b(r[n] && r[n].then))) return s.then();
                for (; n--;) H(r[n], t(n), s.reject);
                return s.promise()
            }
        });
        var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(e, t) {
            E.console && E.console.warn && e && P.test(e.name) && E.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, C.readyException = function(e) {
            E.setTimeout(function() {
                throw e
            })
        };
        var R = C.Deferred();

        function z() {
            T.removeEventListener("DOMContentLoaded", z), E.removeEventListener("load", z), C.ready()
        }
        C.fn.ready = function(e) {
            return R.then(e).catch(function(e) {
                C.readyException(e)
            }), this
        }, C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || R.resolveWith(T, [C]))
            }
        }), C.ready.then = R.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? E.setTimeout(C.ready) : (T.addEventListener("DOMContentLoaded", z), E.addEventListener("load", z));

        function $(e, t, i, n, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == i;
            if ("object" === f(i))
                for (a in o = !0, i) $(e, t, a, i[a], !0, r, s);
            else if (void 0 !== n && (o = !0, b(n) || (s = !0), t = c ? s ? (t.call(e, n), null) : (c = t, function(e, t, i) {
                    return c.call(C(e), i)
                }) : t))
                for (; a < l; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
            return o ? e : c ? t.call(e) : l ? t(e[0], i) : r
        }
        var B = /^-ms-/,
            F = /-([a-z])/g;

        function W(e, t) {
            return t.toUpperCase()
        }

        function Y(e) {
            return e.replace(B, "ms-").replace(F, W)
        }

        function X(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }

        function V() {
            this.expando = C.expando + V.uid++
        }
        V.uid = 1, V.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, i) {
                var n, o = this.cache(e);
                if ("string" == typeof t) o[Y(t)] = i;
                else
                    for (n in t) o[Y(n)] = t[n];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
            },
            access: function(e, t, i) {
                return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
            },
            remove: function(e, t) {
                var i, n = e[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== t) {
                        i = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in n ? [t] : t.match(N) || []).length;
                        for (; i--;) delete n[t[i]]
                    }
                    void 0 !== t && !C.isEmptyObject(n) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                e = e[this.expando];
                return void 0 !== e && !C.isEmptyObject(e)
            }
        };
        var U = new V,
            Q = new V,
            K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            G = /[A-Z]/g;

        function J(e, t, i) {
            var n, o;
            if (void 0 === i && 1 === e.nodeType)
                if (n = "data-" + t.replace(G, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                    try {
                        i = "true" === (o = i) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : K.test(o) ? JSON.parse(o) : o)
                    } catch (e) {}
                    Q.set(e, t, i)
                } else i = void 0;
            return i
        }
        C.extend({
            hasData: function(e) {
                return Q.hasData(e) || U.hasData(e)
            },
            data: function(e, t, i) {
                return Q.access(e, t, i)
            },
            removeData: function(e, t) {
                Q.remove(e, t)
            },
            _data: function(e, t, i) {
                return U.access(e, t, i)
            },
            _removeData: function(e, t) {
                U.remove(e, t)
            }
        }), C.fn.extend({
            data: function(i, e) {
                var t, n, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 !== i) return "object" == _typeof(i) ? this.each(function() {
                    Q.set(this, i)
                }) : $(this, function(e) {
                    var t;
                    return r && void 0 === e ? void 0 !== (t = Q.get(r, i)) || void 0 !== (t = J(r, i)) ? t : void 0 : void this.each(function() {
                        Q.set(this, i, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
                if (this.length && (o = Q.get(r), 1 === r.nodeType && !U.get(r, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && 0 === (n = s[t].name).indexOf("data-") && (n = Y(n.slice(5)), J(r, n, o[n]));
                    U.set(r, "hasDataAttrs", !0)
                }
                return o
            },
            removeData: function(e) {
                return this.each(function() {
                    Q.remove(this, e)
                })
            }
        }), C.extend({
            queue: function(e, t, i) {
                var n;
                if (e) return t = (t || "fx") + "queue", n = U.get(e, t), i && (!n || Array.isArray(i) ? n = U.access(e, t, C.makeArray(i)) : n.push(i)), n || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var i = C.queue(e, t),
                    n = i.length,
                    o = i.shift(),
                    r = C._queueHooks(e, t);
                "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete r.stop, o.call(e, function() {
                    C.dequeue(e, t)
                }, r)), !n && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var i = t + "queueHooks";
                return U.get(e, i) || U.access(e, i, {
                    empty: C.Callbacks("once memory").add(function() {
                        U.remove(e, [t + "queue", i])
                    })
                })
            }
        }), C.fn.extend({
            queue: function(t, i) {
                var e = 2;
                return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === i ? this : this.each(function() {
                    var e = C.queue(this, t, i);
                    C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    C.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                function i() {
                    --o || r.resolveWith(s, [s])
                }
                var n, o = 1,
                    r = C.Deferred(),
                    s = this,
                    a = this.length;
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = U.get(s[a], e + "queueHooks")) && n.empty && (o++, n.empty.add(i));
                return i(), r.promise(t)
            }
        });
        var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
            te = ["Top", "Right", "Bottom", "Left"],
            ie = T.documentElement,
            ne = function(e) {
                return C.contains(e.ownerDocument, e)
            },
            oe = {
                composed: !0
            };
        ie.getRootNode && (ne = function(e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
        });

        function re(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ne(e) && "none" === C.css(e, "display")
        }

        function se(e, t, i, n) {
            var o, r, s = 20,
                a = n ? function() {
                    return n.cur()
                } : function() {
                    return C.css(e, t, "")
                },
                l = a(),
                c = i && i[3] || (C.cssNumber[t] ? "" : "px"),
                u = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && ee.exec(C.css(e, t));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; s--;) C.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
                u *= 2, C.style(e, t, u + c), i = i || []
            }
            return i && (u = +u || +l || 0, o = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = o)), o
        }
        var ae = {};

        function le(e, t) {
            for (var i, n, o, r, s, a = [], l = 0, c = e.length; l < c; l++)(n = e[l]).style && (i = n.style.display, t ? ("none" === i && (a[l] = U.get(n, "display") || null, a[l] || (n.style.display = "")), "" === n.style.display && re(n) && (a[l] = (s = r = void 0, r = (o = n).ownerDocument, s = o.nodeName, (o = ae[s]) || (r = r.body.appendChild(r.createElement(s)), o = C.css(r, "display"), r.parentNode.removeChild(r), "none" === o && (o = "block"), ae[s] = o)))) : "none" !== i && (a[l] = "none", U.set(n, "display", i)));
            for (l = 0; l < c; l++) null != a[l] && (e[l].style.display = a[l]);
            return e
        }
        C.fn.extend({
            show: function() {
                return le(this, !0)
            },
            hide: function() {
                return le(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    re(this) ? C(this).show() : C(this).hide()
                })
            }
        });
        var ce = /^(?:checkbox|radio)$/i,
            ue = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            de = /^$|^module$|\/(?:java|ecma)script/i,
            he = T.createDocumentFragment().appendChild(T.createElement("div"));
        (h = T.createElement("input")).setAttribute("type", "radio"), h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), he.appendChild(h), y.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue, he.innerHTML = "<option></option>", y.option = !!he.lastChild;
        var pe = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function fe(e, t) {
            var i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && S(e, t) ? C.merge([e], i) : i
        }

        function me(e, t) {
            for (var i = 0, n = e.length; i < n; i++) U.set(e[i], "globalEval", !t || U.get(t[i], "globalEval"))
        }
        pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead, pe.th = pe.td, y.option || (pe.optgroup = pe.option = [1, "<select multiple='multiple'>", "</select>"]);
        var ge = /<|&#?\w+;/;

        function ve(e, t, i, n, o) {
            for (var r, s, a, l, c, u = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
                if ((r = e[h]) || 0 === r)
                    if ("object" === f(r)) C.merge(d, r.nodeType ? [r] : r);
                    else if (ge.test(r)) {
                for (s = s || u.appendChild(t.createElement("div")), a = (ue.exec(r) || ["", ""])[1].toLowerCase(), a = pe[a] || pe._default, s.innerHTML = a[1] + C.htmlPrefilter(r) + a[2], c = a[0]; c--;) s = s.lastChild;
                C.merge(d, s.childNodes), (s = u.firstChild).textContent = ""
            } else d.push(t.createTextNode(r));
            for (u.textContent = "", h = 0; r = d[h++];)
                if (n && -1 < C.inArray(r, n)) o && o.push(r);
                else if (l = ne(r), s = fe(u.appendChild(r), "script"), l && me(s), i)
                for (c = 0; r = s[c++];) de.test(r.type || "") && i.push(r);
            return u
        }
        var ye = /^key/,
            be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            we = /^([^.]*)(?:\.(.+)|)/;

        function _e() {
            return !0
        }

        function xe() {
            return !1
        }

        function Ee(e, t) {
            return e === function() {
                try {
                    return T.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function Te(e, t, i, n, o, r) {
            var s, a;
            if ("object" == _typeof(t)) {
                for (a in "string" != typeof i && (n = n || i, i = void 0), t) Te(e, a, i, n, t[a], r);
                return e
            }
            if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = xe;
            else if (!o) return e;
            return 1 === r && (s = o, (o = function(e) {
                return C().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = C.guid++)), e.each(function() {
                C.event.add(this, t, o, n, i)
            })
        }

        function Ce(e, o, r) {
            r ? (U.set(e, o, !1), C.event.add(e, o, {
                namespace: !1,
                handler: function(e) {
                    var t, i, n = U.get(this, o);
                    if (1 & e.isTrigger && this[o]) {
                        if (n.length)(C.event.special[o] || {}).delegateType && e.stopPropagation();
                        else if (n = a.call(arguments), U.set(this, o, n), t = r(this, o), this[o](), n !== (i = U.get(this, o)) || t ? U.set(this, o, !1) : i = {}, n !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                    } else n.length && (U.set(this, o, {
                        value: C.event.trigger(C.extend(n[0], C.Event.prototype), n.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === U.get(e, o) && C.event.add(e, o, _e)
        }
        C.event = {
            global: {},
            add: function(t, e, i, n, o) {
                var r, s, a, l, c, u, d, h, p, f = U.get(t);
                if (X(t))
                    for (i.handler && (i = (r = i).handler, o = r.selector), o && C.find.matchesSelector(ie, o), i.guid || (i.guid = C.guid++), (a = f.events) || (a = f.events = Object.create(null)), (s = f.handle) || (s = f.handle = function(e) {
                            return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                        }), l = (e = (e || "").match(N) || [""]).length; l--;) d = p = (c = we.exec(e[l]) || [])[1], h = (c[2] || "").split(".").sort(), d && (u = C.event.special[d] || {}, d = (o ? u.delegateType : u.bindType) || d, u = C.event.special[d] || {}, c = C.extend({
                        type: d,
                        origType: p,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && C.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r), (p = a[d]) || ((p = a[d] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, h, s) || t.addEventListener && t.addEventListener(d, s)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), C.event.global[d] = !0)
            },
            remove: function(e, t, i, n, o) {
                var r, s, a, l, c, u, d, h, p, f, m, g = U.hasData(e) && U.get(e);
                if (g && (l = g.events)) {
                    for (c = (t = (t || "").match(N) || [""]).length; c--;)
                        if (p = m = (a = we.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                            for (d = C.event.special[p] || {}, h = l[p = (n ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                            s && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || C.removeEvent(e, p, g.handle), delete l[p])
                        } else
                            for (p in l) C.event.remove(e, p + t[c], i, n, !0);
                    C.isEmptyObject(l) && U.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, i, n, o, r, s = new Array(arguments.length),
                    a = C.event.fix(e),
                    l = (U.get(this, "events") || Object.create(null))[a.type] || [],
                    e = C.event.special[a.type] || {};
                for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                if (a.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, a)) {
                    for (r = C.event.handlers.call(this, a, l), t = 0;
                        (n = r[t++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = n.elem, i = 0;
                            (o = n.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (o = ((C.event.special[o.origType] || {}).handle || o.handler).apply(n.elem, s)) && !1 === (a.result = o) && (a.preventDefault(), a.stopPropagation()));
                    return e.postDispatch && e.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(e, t) {
                var i, n, o, r, s, a = [],
                    l = t.delegateCount,
                    c = e.target;
                if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (r = [], s = {}, i = 0; i < l; i++) void 0 === s[o = (n = t[i]).selector + " "] && (s[o] = n.needsContext ? -1 < C(o, this).index(c) : C.find(o, this, null, [c]).length), s[o] && r.push(n);
                            r.length && a.push({
                                elem: c,
                                handlers: r
                            })
                        }
                return c = this, l < t.length && a.push({
                    elem: c,
                    handlers: t.slice(l)
                }), a
            },
            addProp: function(t, e) {
                Object.defineProperty(C.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: b(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(e) {
                return e[C.expando] ? e : new C.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        e = this || e;
                        return ce.test(e.type) && e.click && S(e, "input") && Ce(e, "click", _e), !1
                    },
                    trigger: function(e) {
                        e = this || e;
                        return ce.test(e.type) && e.click && S(e, "input") && Ce(e, "click"), !0
                    },
                    _default: function(e) {
                        e = e.target;
                        return ce.test(e.type) && e.click && S(e, "input") && U.get(e, "click") || S(e, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, C.removeEvent = function(e, t, i) {
            e.removeEventListener && e.removeEventListener(t, i)
        }, C.Event = function(e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: xe,
            isPropagationStopped: xe,
            isImmediatePropagationStopped: xe,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = _e, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = _e, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = _e, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({
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
            char: !0,
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
            which: function(e) {
                var t = e.button;
                return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, C.event.addProp), C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            C.event.special[e] = {
                setup: function() {
                    return Ce(this, e, Ee), !1
                },
                trigger: function() {
                    return Ce(this, e), !0
                },
                delegateType: t
            }
        }), C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, o) {
            C.event.special[e] = {
                delegateType: o,
                bindType: o,
                handle: function(e) {
                    var t, i = e.relatedTarget,
                        n = e.handleObj;
                    return i && (i === this || C.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = o), t
                }
            }
        }), C.fn.extend({
            on: function(e, t, i, n) {
                return Te(this, e, t, i, n)
            },
            one: function(e, t, i, n) {
                return Te(this, e, t, i, n, 1)
            },
            off: function(e, t, i) {
                var n, o;
                if (e && e.preventDefault && e.handleObj) return n = e.handleObj, C(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" != _typeof(e)) return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = xe), this.each(function() {
                    C.event.remove(this, e, i, t)
                });
                for (o in e) this.off(o, t, e[o]);
                return this
            }
        });
        var Se = /<script|<style|<link/i,
            ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function De(e, t) {
            return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
        }

        function Le(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Oe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function je(e, t) {
            var i, n, o, r;
            if (1 === t.nodeType) {
                if (U.hasData(e) && (r = U.get(e).events))
                    for (o in U.remove(t, "handle events"), r)
                        for (i = 0, n = r[o].length; i < n; i++) C.event.add(t, o, r[o][i]);
                Q.hasData(e) && (e = Q.access(e), e = C.extend({}, e), Q.set(t, e))
            }
        }

        function Me(i, n, o, r) {
            n = g(n);
            var e, t, s, a, l, c, u = 0,
                d = i.length,
                h = d - 1,
                p = n[0],
                f = b(p);
            if (f || 1 < d && "string" == typeof p && !y.checkClone && ke.test(p)) return i.each(function(e) {
                var t = i.eq(e);
                f && (n[0] = p.call(this, e, t.html())), Me(t, n, o, r)
            });
            if (d && (t = (e = ve(n, i[0].ownerDocument, !1, i, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
                for (a = (s = C.map(fe(e, "script"), Le)).length; u < d; u++) l = e, u !== h && (l = C.clone(l, !0, !0), a && C.merge(s, fe(l, "script"))), o.call(i[u], l, u);
                if (a)
                    for (c = s[s.length - 1].ownerDocument, C.map(s, Oe), u = 0; u < a; u++) l = s[u], de.test(l.type || "") && !U.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : w(l.textContent.replace(Ae, ""), l, c))
            }
            return i
        }

        function Ne(e, t, i) {
            for (var n, o = t ? C.filter(t, e) : e, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || C.cleanData(fe(n)), n.parentNode && (i && ne(n) && me(fe(n, "script")), n.parentNode.removeChild(n));
            return e
        }
        C.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, i) {
                var n, o, r, s, a, l, c, u = e.cloneNode(!0),
                    d = ne(e);
                if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                    for (s = fe(u), n = 0, o = (r = fe(e)).length; n < o; n++) a = r[n], l = s[n], c = void 0, "input" === (c = l.nodeName.toLowerCase()) && ce.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
                if (t)
                    if (i)
                        for (r = r || fe(e), s = s || fe(u), n = 0, o = r.length; n < o; n++) je(r[n], s[n]);
                    else je(e, u);
                return 0 < (s = fe(u, "script")).length && me(s, !d && fe(e, "script")), u
            },
            cleanData: function(e) {
                for (var t, i, n, o = C.event.special, r = 0; void 0 !== (i = e[r]); r++)
                    if (X(i)) {
                        if (t = i[U.expando]) {
                            if (t.events)
                                for (n in t.events) o[n] ? C.event.remove(i, n) : C.removeEvent(i, n, t.handle);
                            i[U.expando] = void 0
                        }
                        i[Q.expando] && (i[Q.expando] = void 0)
                    }
            }
        }), C.fn.extend({
            detach: function(e) {
                return Ne(this, e, !0)
            },
            remove: function(e) {
                return Ne(this, e)
            },
            text: function(e) {
                return $(this, function(e) {
                    return void 0 === e ? C.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Me(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Me(this, arguments, function(e) {
                    var t;
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = De(this, e)).insertBefore(e, t.firstChild)
                })
            },
            before: function() {
                return Me(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Me(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(fe(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return C.clone(this, e, t)
                })
            },
            html: function(e) {
                return $(this, function(e) {
                    var t = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Se.test(e) && !pe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (C.cleanData(fe(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var i = [];
                return Me(this, arguments, function(e) {
                    var t = this.parentNode;
                    C.inArray(this, i) < 0 && (C.cleanData(fe(this)), t && t.replaceChild(e, this))
                }, i)
            }
        }), C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, s) {
            C.fn[e] = function(e) {
                for (var t, i = [], n = C(e), o = n.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), C(n[r])[s](t), l.apply(i, t.get());
                return this.pushStack(i)
            }
        });

        function Ie(e, t, i) {
            var n, o = {};
            for (n in t) o[n] = e.style[n], e.style[n] = t[n];
            for (n in i = i.call(e), t) e.style[n] = o[n];
            return i
        }
        var qe, He, Pe, Re, ze, $e, Be, Fe, We = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
            Ye = function(e) {
                var t = e.ownerDocument.defaultView;
                return (t = !t || !t.opener ? E : t).getComputedStyle(e)
            },
            Xe = new RegExp(te.join("|"), "i");

        function Ve(e, t, i) {
            var n, o, r = e.style;
            return (i = i || Ye(e)) && ("" !== (o = i.getPropertyValue(t) || i[t]) || ne(e) || (o = C.style(e, t)), !y.pixelBoxStyles() && We.test(o) && Xe.test(t) && (n = r.width, e = r.minWidth, t = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = i.width, r.width = n, r.minWidth = e, r.maxWidth = t)), void 0 !== o ? o + "" : o
        }

        function Ue(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        function Qe() {
            var e;
            Fe && (Be.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Fe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(Be).appendChild(Fe), e = E.getComputedStyle(Fe), qe = "1%" !== e.top, $e = 12 === Ke(e.marginLeft), Fe.style.right = "60%", Re = 36 === Ke(e.right), He = 36 === Ke(e.width), Fe.style.position = "absolute", Pe = 12 === Ke(Fe.offsetWidth / 3), ie.removeChild(Be), Fe = null)
        }

        function Ke(e) {
            return Math.round(parseFloat(e))
        }
        Be = T.createElement("div"), (Fe = T.createElement("div")).style && (Fe.style.backgroundClip = "content-box", Fe.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Fe.style.backgroundClip, C.extend(y, {
            boxSizingReliable: function() {
                return Qe(), He
            },
            pixelBoxStyles: function() {
                return Qe(), Re
            },
            pixelPosition: function() {
                return Qe(), qe
            },
            reliableMarginLeft: function() {
                return Qe(), $e
            },
            scrollboxSize: function() {
                return Qe(), Pe
            },
            reliableTrDimensions: function() {
                var e, t, i;
                return null == ze && (e = T.createElement("table"), i = T.createElement("tr"), t = T.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", i.style.height = "1px", t.style.height = "9px", ie.appendChild(e).appendChild(i).appendChild(t), i = E.getComputedStyle(i), ze = 3 < parseInt(i.height), ie.removeChild(e)), ze
            }
        }));
        var Ge = ["Webkit", "Moz", "ms"],
            Je = T.createElement("div").style,
            Ze = {};

        function et(e) {
            return C.cssProps[e] || Ze[e] || (e in Je ? e : Ze[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), i = Ge.length; i--;)
                    if ((e = Ge[i] + t) in Je) return e
            }(e) || e)
        }
        var tt = /^(none|table(?!-c[ea]).+)/,
            it = /^--/,
            nt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ot = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function rt(e, t, i) {
            var n = ee.exec(t);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
        }

        function st(e, t, i, n, o, r) {
            var s = "width" === t ? 1 : 0,
                a = 0,
                l = 0;
            if (i === (n ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === i && (l += C.css(e, i + te[s], !0, o)), n ? ("content" === i && (l -= C.css(e, "padding" + te[s], !0, o)), "margin" !== i && (l -= C.css(e, "border" + te[s] + "Width", !0, o))) : (l += C.css(e, "padding" + te[s], !0, o), "padding" !== i ? l += C.css(e, "border" + te[s] + "Width", !0, o) : a += C.css(e, "border" + te[s] + "Width", !0, o));
            return !n && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
        }

        function at(e, t, i) {
            var n = Ye(e),
                o = (!y.boxSizingReliable() || i) && "border-box" === C.css(e, "boxSizing", !1, n),
                r = o,
                s = Ve(e, t, n),
                a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (We.test(s)) {
                if (!i) return s;
                s = "auto"
            }
            return (!y.boxSizingReliable() && o || !y.reliableTrDimensions() && S(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, n)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, n), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + st(e, t, i || (o ? "border" : "content"), r, n, s) + "px"
        }

        function lt(e, t, i, n, o) {
            return new lt.prototype.init(e, t, i, n, o)
        }
        C.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            e = Ve(e, "opacity");
                            return "" === e ? "1" : e
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
            style: function(e, t, i, n) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, s, a = Y(t),
                        l = it.test(t),
                        c = e.style;
                    if (l || (t = et(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (o = s.get(e, !1, n)) ? o : c[t];
                    "string" === (r = _typeof(i)) && (o = ee.exec(i)) && o[1] && (i = se(e, t, o), r = "number"), null != i && i == i && ("number" !== r || l || (i += o && o[3] || (C.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))
                }
            },
            css: function(e, t, i, n) {
                var o, r = Y(t);
                return it.test(t) || (t = et(r)), "normal" === (o = void 0 === (o = (r = C.cssHooks[t] || C.cssHooks[r]) && "get" in r ? r.get(e, !0, i) : o) ? Ve(e, t, n) : o) && t in ot && (o = ot[t]), "" === i || i ? (t = parseFloat(o), !0 === i || isFinite(t) ? t || 0 : o) : o
            }
        }), C.each(["height", "width"], function(e, a) {
            C.cssHooks[a] = {
                get: function(e, t, i) {
                    if (t) return !tt.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? at(e, a, i) : Ie(e, nt, function() {
                        return at(e, a, i)
                    })
                },
                set: function(e, t, i) {
                    var n, o = Ye(e),
                        r = !y.scrollboxSize() && "absolute" === o.position,
                        s = (r || i) && "border-box" === C.css(e, "boxSizing", !1, o),
                        i = i ? st(e, a, i, s, o) : 0;
                    return s && r && (i -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(o[a]) - st(e, a, "border", !1, o) - .5)), i && (n = ee.exec(t)) && "px" !== (n[3] || "px") && (e.style[a] = t, t = C.css(e, a)), rt(0, t, i)
                }
            }
        }), C.cssHooks.marginLeft = Ue(y.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(o, r) {
            C.cssHooks[o + r] = {
                expand: function(e) {
                    for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[o + te[t] + r] = n[t] || n[t - 2] || n[0];
                    return i
                }
            }, "margin" !== o && (C.cssHooks[o + r].set = rt)
        }), C.fn.extend({
            css: function(e, t) {
                return $(this, function(e, t, i) {
                    var n, o, r = {},
                        s = 0;
                    if (Array.isArray(t)) {
                        for (n = Ye(e), o = t.length; s < o; s++) r[t[s]] = C.css(e, t[s], !1, n);
                        return r
                    }
                    return void 0 !== i ? C.style(e, t, i) : C.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }), (C.Tween = lt).prototype = {
            constructor: lt,
            init: function(e, t, i, n, o, r) {
                this.elem = e, this.prop = i, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (C.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var e = lt.propHooks[this.prop];
                return (e && e.get ? e : lt.propHooks._default).get(this)
            },
            run: function(e) {
                var t, i = lt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (i && i.set ? i : lt.propHooks._default).set(this), this
            }
        }, lt.prototype.init.prototype = lt.prototype, lt.propHooks = {
            _default: {
                get: function(e) {
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[et(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, lt.propHooks.scrollTop = lt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, C.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, C.fx = lt.prototype.init, C.fx.step = {};
        var ct, ut, dt = /^(?:toggle|show|hide)$/,
            ht = /queueHooks$/;

        function pt() {
            ut && (!1 === T.hidden && E.requestAnimationFrame ? E.requestAnimationFrame(pt) : E.setTimeout(pt, C.fx.interval), C.fx.tick())
        }

        function ft() {
            return E.setTimeout(function() {
                ct = void 0
            }), ct = Date.now()
        }

        function mt(e, t) {
            var i, n = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; n < 4; n += 2 - t) o["margin" + (i = te[n])] = o["padding" + i] = e;
            return t && (o.opacity = o.width = e), o
        }

        function gt(e, t, i) {
            for (var n, o = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (n = o[r].call(i, t, e)) return n
        }

        function vt(o, e, t) {
            var i, r, n = 0,
                s = vt.prefilters.length,
                a = C.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = ct || ft(), e = Math.max(0, c.startTime + c.duration - e), t = 1 - (e / c.duration || 0), i = 0, n = c.tweens.length; i < n; i++) c.tweens[i].run(t);
                    return a.notifyWith(o, [c, t, e]), t < 1 && n ? e : (n || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1)
                },
                c = a.promise({
                    elem: o,
                    props: C.extend({}, e),
                    opts: C.extend(!0, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: ct || ft(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        e = C.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(e), e
                    },
                    stop: function(e) {
                        var t = 0,
                            i = e ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; t < i; t++) c.tweens[t].run(1);
                        return e ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, e])) : a.rejectWith(o, [c, e]), this
                    }
                }),
                u = c.props;
            for (function(e, t) {
                    var i, n, o, r, s;
                    for (i in e)
                        if (o = t[n = Y(i)], r = e[i], Array.isArray(r) && (o = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (s = C.cssHooks[n]) && "expand" in s)
                            for (i in r = s.expand(r), delete e[n], r) i in e || (e[i] = r[i], t[i] = o);
                        else t[n] = o
                }(u, c.opts.specialEasing); n < s; n++)
                if (i = vt.prefilters[n].call(c, o, u, c.opts)) return b(i.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
            return C.map(u, gt, c), b(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
                elem: o,
                anim: c,
                queue: c.opts.queue
            })), c
        }
        C.Animation = C.extend(vt, {
            tweeners: {
                "*": [function(e, t) {
                    var i = this.createTween(e, t);
                    return se(i.elem, e, ee.exec(t), i), i
                }]
            },
            tweener: function(e, t) {
                for (var i, n = 0, o = (e = b(e) ? (t = e, ["*"]) : e.match(N)).length; n < o; n++) i = e[n], vt.tweeners[i] = vt.tweeners[i] || [], vt.tweeners[i].unshift(t)
            },
            prefilters: [function(e, t, i) {
                var n, o, r, s, a, l, c, u = "width" in t || "height" in t,
                    d = this,
                    h = {},
                    p = e.style,
                    f = e.nodeType && re(e),
                    m = U.get(e, "fxshow");
                for (n in i.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || a()
                    }), s.unqueued++, d.always(function() {
                        d.always(function() {
                            s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
                        })
                    })), t)
                    if (o = t[n], dt.test(o)) {
                        if (delete t[n], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                            if ("show" !== o || !m || void 0 === m[n]) continue;
                            f = !0
                        }
                        h[n] = m && m[n] || C.style(e, n)
                    }
                if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
                    for (n in u && 1 === e.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = U.get(e, "display")), "none" === (u = C.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = C.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (d.done(function() {
                            p.display = c
                        }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", d.always(function() {
                            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                        })), l = !1, h) l || (m ? "hidden" in m && (f = m.hidden) : m = U.access(e, "fxshow", {
                        display: c
                    }), r && (m.hidden = !f), f && le([e], !0), d.done(function() {
                        for (n in f || le([e]), U.remove(e, "fxshow"), h) C.style(e, n, h[n])
                    })), l = gt(f ? m[n] : 0, n, d), n in m || (m[n] = l.start, f && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(e, t) {
                t ? vt.prefilters.unshift(e) : vt.prefilters.push(e)
            }
        }), C.speed = function(e, t, i) {
            var n = e && "object" == _typeof(e) ? C.extend({}, e) : {
                complete: i || !i && t || b(e) && e,
                duration: e,
                easing: i && t || t && !b(t) && t
            };
            return C.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in C.fx.speeds ? n.duration = C.fx.speeds[n.duration] : n.duration = C.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                b(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue)
            }, n
        }, C.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(re).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(t, e, i, n) {
                var o = C.isEmptyObject(t),
                    r = C.speed(e, i, n),
                    n = function() {
                        var e = vt(this, C.extend({}, t), r);
                        (o || U.get(this, "finish")) && e.stop(!0)
                    };
                return n.finish = n, o || !1 === r.queue ? this.each(n) : this.queue(r.queue, n)
            },
            stop: function(o, e, r) {
                function s(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                }
                return "string" != typeof o && (r = e, e = o, o = void 0), e && this.queue(o || "fx", []), this.each(function() {
                    var e = !0,
                        t = null != o && o + "queueHooks",
                        i = C.timers,
                        n = U.get(this);
                    if (t) n[t] && n[t].stop && s(n[t]);
                    else
                        for (t in n) n[t] && n[t].stop && ht.test(t) && s(n[t]);
                    for (t = i.length; t--;) i[t].elem !== this || null != o && i[t].queue !== o || (i[t].anim.stop(r), e = !1, i.splice(t, 1));
                    !e && r || C.dequeue(this, o)
                })
            },
            finish: function(s) {
                return !1 !== s && (s = s || "fx"), this.each(function() {
                    var e, t = U.get(this),
                        i = t[s + "queue"],
                        n = t[s + "queueHooks"],
                        o = C.timers,
                        r = i ? i.length : 0;
                    for (t.finish = !0, C.queue(this, s, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < r; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete t.finish
                })
            }
        }), C.each(["toggle", "show", "hide"], function(e, n) {
            var o = C.fn[n];
            C.fn[n] = function(e, t, i) {
                return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(mt(n, !0), e, t, i)
            }
        }), C.each({
            slideDown: mt("show"),
            slideUp: mt("hide"),
            slideToggle: mt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, n) {
            C.fn[e] = function(e, t, i) {
                return this.animate(n, e, t, i)
            }
        }), C.timers = [], C.fx.tick = function() {
            var e, t = 0,
                i = C.timers;
            for (ct = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
            i.length || C.fx.stop(), ct = void 0
        }, C.fx.timer = function(e) {
            C.timers.push(e), C.fx.start()
        }, C.fx.interval = 13, C.fx.start = function() {
            ut || (ut = !0, pt())
        }, C.fx.stop = function() {
            ut = null
        }, C.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, C.fn.delay = function(n, e) {
            return n = C.fx && C.fx.speeds[n] || n, e = e || "fx", this.queue(e, function(e, t) {
                var i = E.setTimeout(e, n);
                t.stop = function() {
                    E.clearTimeout(i)
                }
            })
        }, he = T.createElement("input"), Z = T.createElement("select").appendChild(T.createElement("option")), he.type = "checkbox", y.checkOn = "" !== he.value, y.optSelected = Z.selected, (he = T.createElement("input")).value = "t", he.type = "radio", y.radioValue = "t" === he.value;
        var yt, bt = C.expr.attrHandle;
        C.fn.extend({
            attr: function(e, t) {
                return $(this, C.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    C.removeAttr(this, e)
                })
            }
        }), C.extend({
            attr: function(e, t, i) {
                var n, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? C.prop(e, t, i) : (1 === r && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? yt : void 0)), void 0 !== i ? null === i ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : !(o && "get" in o && null !== (n = o.get(e, t))) && null == (n = C.find.attr(e, t)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!y.radioValue && "radio" === t && S(e, "input")) {
                            var i = e.value;
                            return e.setAttribute("type", t), i && (e.value = i), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var i, n = 0,
                    o = t && t.match(N);
                if (o && 1 === e.nodeType)
                    for (; i = o[n++];) e.removeAttribute(i)
            }
        }), yt = {
            set: function(e, t, i) {
                return !1 === t ? C.removeAttr(e, i) : e.setAttribute(i, i), i
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var s = bt[t] || C.find.attr;
            bt[t] = function(e, t, i) {
                var n, o, r = t.toLowerCase();
                return i || (o = bt[r], bt[r] = n, n = null != s(e, t, i) ? r : null, bt[r] = o), n
            }
        });
        var wt = /^(?:input|select|textarea|button)$/i,
            _t = /^(?:a|area)$/i;

        function xt(e) {
            return (e.match(N) || []).join(" ")
        }

        function Et(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function Tt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || []
        }
        C.fn.extend({
            prop: function(e, t) {
                return $(this, C.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[C.propFix[e] || e]
                })
            }
        }), C.extend({
            prop: function(e, t, i) {
                var n, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : wt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), y.optSelected || (C.propHooks.selected = {
            get: function(e) {
                e = e.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(e) {
                e = e.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            C.propFix[this.toLowerCase()] = this
        }), C.fn.extend({
            addClass: function(t) {
                var e, i, n, o, r, s, a = 0;
                if (b(t)) return this.each(function(e) {
                    C(this).addClass(t.call(this, e, Et(this)))
                });
                if ((e = Tt(t)).length)
                    for (; i = this[a++];)
                        if (s = Et(i), n = 1 === i.nodeType && " " + xt(s) + " ") {
                            for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            s !== (s = xt(n)) && i.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, o, r, s, a = 0;
                if (b(t)) return this.each(function(e) {
                    C(this).removeClass(t.call(this, e, Et(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((e = Tt(t)).length)
                    for (; i = this[a++];)
                        if (s = Et(i), n = 1 === i.nodeType && " " + xt(s) + " ") {
                            for (r = 0; o = e[r++];)
                                for (; - 1 < n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                            s !== (s = xt(n)) && i.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(o, t) {
                var r = _typeof(o),
                    s = "string" === r || Array.isArray(o);
                return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function(e) {
                    C(this).toggleClass(o.call(this, e, Et(this), t), t)
                }) : this.each(function() {
                    var e, t, i, n;
                    if (s)
                        for (t = 0, i = C(this), n = Tt(o); e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                    else void 0 !== o && "boolean" !== r || ((e = Et(this)) && U.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== o && U.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                for (var t, i = 0, n = " " + e + " "; t = this[i++];)
                    if (1 === t.nodeType && -1 < (" " + xt(Et(t)) + " ").indexOf(n)) return !0;
                return !1
            }
        });
        var Ct = /\r/g;
        C.fn.extend({
            val: function(t) {
                var i, e, n, o = this[0];
                return arguments.length ? (n = b(t), this.each(function(e) {
                    1 === this.nodeType && (null == (e = n ? t.call(this, e, C(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = C.map(e, function(e) {
                        return null == e ? "" : e + ""
                    })), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value") || (this.value = e))
                })) : o ? (i = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(o, "value")) ? e : "string" == typeof(e = o.value) ? e.replace(Ct, "") : null == e ? "" : e : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : xt(C.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, i = e.options, n = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [], s = o ? n + 1 : i.length, a = n < 0 ? s : o ? n : 0; a < s; a++)
                            if (((t = i[a]).selected || a === n) && !t.disabled && (!t.parentNode.disabled || !S(t.parentNode, "optgroup"))) {
                                if (t = C(t).val(), o) return t;
                                r.push(t)
                            }
                        return r
                    },
                    set: function(e, t) {
                        for (var i, n, o = e.options, r = C.makeArray(t), s = o.length; s--;)((n = o[s]).selected = -1 < C.inArray(C.valHooks.option.get(n), r)) && (i = !0);
                        return i || (e.selectedIndex = -1), r
                    }
                }
            }
        }), C.each(["radio", "checkbox"], function() {
            C.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
                }
            }, y.checkOn || (C.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), y.focusin = "onfocusin" in E;

        function St(e) {
            e.stopPropagation()
        }
        var kt = /^(?:focusinfocus|focusoutblur)$/;
        C.extend(C.event, {
            trigger: function(e, t, i, n) {
                var o, r, s, a, l, c, u, d = [i || T],
                    h = v.call(e, "type") ? e.type : e,
                    p = v.call(e, "namespace") ? e.namespace.split(".") : [],
                    f = u = r = i = i || T;
                if (3 !== i.nodeType && 8 !== i.nodeType && !kt.test(h + C.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, (e = e[C.expando] ? e : new C.Event(h, "object" == _typeof(e) && e)).isTrigger = n ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[h] || {}, n || !c.trigger || !1 !== c.trigger.apply(i, t))) {
                    if (!n && !c.noBubble && !m(i)) {
                        for (s = c.delegateType || h, kt.test(s + h) || (f = f.parentNode); f; f = f.parentNode) d.push(f), r = f;
                        r === (i.ownerDocument || T) && d.push(r.defaultView || r.parentWindow || E)
                    }
                    for (o = 0;
                        (f = d[o++]) && !e.isPropagationStopped();) u = f, e.type = 1 < o ? s : c.bindType || h, (l = (U.get(f, "events") || Object.create(null))[e.type] && U.get(f, "handle")) && l.apply(f, t), (l = a && f[a]) && l.apply && X(f) && (e.result = l.apply(f, t), !1 === e.result && e.preventDefault());
                    return e.type = h, n || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !X(i) || a && b(i[h]) && !m(i) && ((r = i[a]) && (i[a] = null), C.event.triggered = h, e.isPropagationStopped() && u.addEventListener(h, St), i[h](), e.isPropagationStopped() && u.removeEventListener(h, St), C.event.triggered = void 0, r && (i[a] = r)), e.result
                }
            },
            simulate: function(e, t, i) {
                e = C.extend(new C.Event, i, {
                    type: e,
                    isSimulated: !0
                });
                C.event.trigger(e, null, t)
            }
        }), C.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    C.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var i = this[0];
                if (i) return C.event.trigger(e, t, i, !0)
            }
        }), y.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(i, n) {
            function o(e) {
                C.event.simulate(n, e.target, C.event.fix(e))
            }
            C.event.special[n] = {
                setup: function() {
                    var e = this.ownerDocument || this.document || this,
                        t = U.access(e, n);
                    t || e.addEventListener(i, o, !0), U.access(e, n, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this.document || this,
                        t = U.access(e, n) - 1;
                    t ? U.access(e, n, t) : (e.removeEventListener(i, o, !0), U.remove(e, n))
                }
            }
        });
        var At = E.location,
            Dt = {
                guid: Date.now()
            },
            Lt = /\?/;
        C.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new E.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
        };
        var Ot = /\[\]$/,
            jt = /\r?\n/g,
            Mt = /^(?:submit|button|image|reset|file)$/i,
            Nt = /^(?:input|select|textarea|keygen)/i;
        C.param = function(e, t) {
            function i(e, t) {
                t = b(t) ? t() : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
            }
            var n, o = [];
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
                i(this.name, this.value)
            });
            else
                for (n in e) ! function i(n, e, o, r) {
                    if (Array.isArray(e)) C.each(e, function(e, t) {
                        o || Ot.test(n) ? r(n, t) : i(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, o, r)
                    });
                    else if (o || "object" !== f(e)) r(n, e);
                    else
                        for (var t in e) i(n + "[" + t + "]", e[t], o, r)
                }(n, e[n], t, i);
            return o.join("&")
        }, C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && Nt.test(this.nodeName) && !Mt.test(e) && (this.checked || !ce.test(e))
                }).map(function(e, t) {
                    var i = C(this).val();
                    return null == i ? null : Array.isArray(i) ? C.map(i, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(jt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: i.replace(jt, "\r\n")
                    }
                }).get()
            }
        });
        var It = /%20/g,
            qt = /#.*$/,
            Ht = /([?&])_=[^&]*/,
            Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Rt = /^(?:GET|HEAD)$/,
            zt = /^\/\//,
            $t = {},
            Bt = {},
            Ft = "*/".concat("*"),
            Wt = T.createElement("a");

        function Yt(r) {
            return function(e, t) {
                "string" != typeof e && (t = e, e = "*");
                var i, n = 0,
                    o = e.toLowerCase().match(N) || [];
                if (b(t))
                    for (; i = o[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (r[i] = r[i] || []).unshift(t)) : (r[i] = r[i] || []).push(t)
            }
        }

        function Xt(t, n, o, r) {
            var s = {},
                a = t === Bt;

            function l(e) {
                var i;
                return s[e] = !0, C.each(t[e] || [], function(e, t) {
                    t = t(n, o, r);
                    return "string" != typeof t || a || s[t] ? a ? !(i = t) : void 0 : (n.dataTypes.unshift(t), l(t), !1)
                }), i
            }
            return l(n.dataTypes[0]) || !s["*"] && l("*")
        }

        function Vt(e, t) {
            var i, n, o = C.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((o[i] ? e : n = n || {})[i] = t[i]);
            return n && C.extend(!0, e, n), e
        }
        Wt.href = At.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: At.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ft,
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
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Vt(Vt(e, C.ajaxSettings), t) : Vt(C.ajaxSettings, e)
            },
            ajaxPrefilter: Yt($t),
            ajaxTransport: Yt(Bt),
            ajax: function(e, t) {
                "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
                var l, c, u, i, d, n, h, p, o, r, f = C.ajaxSetup({}, t),
                    m = f.context || f,
                    g = f.context && (m.nodeType || m.jquery) ? C(m) : C.event,
                    v = C.Deferred(),
                    y = C.Callbacks("once memory"),
                    b = f.statusCode || {},
                    s = {},
                    a = {},
                    w = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (h) {
                                if (!i)
                                    for (i = {}; t = Pt.exec(u);) i[t[1].toLowerCase() + " "] = (i[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = i[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return h ? u : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == h && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == h && (f.mimeType = e), this
                        },
                        statusCode: function(e) {
                            if (e)
                                if (h) _.always(e[_.status]);
                                else
                                    for (var t in e) b[t] = [b[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            e = e || w;
                            return l && l.abort(e), x(0, e), this
                        }
                    };
                if (v.promise(_), f.url = ((e || f.url || At.href) + "").replace(zt, At.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(N) || [""], null == f.crossDomain) {
                    n = T.createElement("a");
                    try {
                        n.href = f.url, n.href = n.href, f.crossDomain = Wt.protocol + "//" + Wt.host != n.protocol + "//" + n.host
                    } catch (e) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = C.param(f.data, f.traditional)), Xt($t, f, t, _), h) return _;
                for (o in (p = C.event && f.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Rt.test(f.type), c = f.url.replace(qt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(It, "+")) : (r = f.url.slice(c.length), f.data && (f.processData || "string" == typeof f.data) && (c += (Lt.test(c) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (c = c.replace(Ht, "$1"), r = (Lt.test(c) ? "&" : "?") + "_=" + Dt.guid++ + r), f.url = c + r), f.ifModified && (C.lastModified[c] && _.setRequestHeader("If-Modified-Since", C.lastModified[c]), C.etag[c] && _.setRequestHeader("If-None-Match", C.etag[c])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && _.setRequestHeader("Content-Type", f.contentType), _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : f.accepts["*"]), f.headers) _.setRequestHeader(o, f.headers[o]);
                if (f.beforeSend && (!1 === f.beforeSend.call(m, _, f) || h)) return _.abort();
                if (w = "abort", y.add(f.complete), _.done(f.success), _.fail(f.error), l = Xt(Bt, f, t, _)) {
                    if (_.readyState = 1, p && g.trigger("ajaxSend", [_, f]), h) return _;
                    f.async && 0 < f.timeout && (d = E.setTimeout(function() {
                        _.abort("timeout")
                    }, f.timeout));
                    try {
                        h = !1, l.send(s, x)
                    } catch (e) {
                        if (h) throw e;
                        x(-1, e)
                    }
                } else x(-1, "No Transport");

                function x(e, t, i, n) {
                    var o, r, s, a = t;
                    h || (h = !0, d && E.clearTimeout(d), l = void 0, u = n || "", _.readyState = 0 < e ? 4 : 0, n = 200 <= e && e < 300 || 304 === e, i && (s = function(e, t, i) {
                        for (var n, o, r, s, a = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (n)
                            for (o in a)
                                if (a[o] && a[o].test(n)) {
                                    l.unshift(o);
                                    break
                                }
                        if (l[0] in i) r = l[0];
                        else {
                            for (o in i) {
                                if (!l[0] || e.converters[o + " " + l[0]]) {
                                    r = o;
                                    break
                                }
                                s = s || o
                            }
                            r = r || s
                        }
                        if (r) return r !== l[0] && l.unshift(r), i[r]
                    }(f, _, i)), !n && -1 < C.inArray("script", f.dataTypes) && (f.converters["text script"] = function() {}), s = function(e, t, i, n) {
                        var o, r, s, a, l, c = {},
                            u = e.dataTypes.slice();
                        if (u[1])
                            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                        for (r = u.shift(); r;)
                            if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                                if ("*" === r) r = l;
                                else if ("*" !== l && l !== r) {
                            if (!(s = c[l + " " + r] || c["* " + r]))
                                for (o in c)
                                    if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                        !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                        break
                                    }
                            if (!0 !== s)
                                if (s && e.throws) t = s(t);
                                else try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + l + " to " + r
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(f, s, _, n), n ? (f.ifModified && ((i = _.getResponseHeader("Last-Modified")) && (C.lastModified[c] = i), (i = _.getResponseHeader("etag")) && (C.etag[c] = i)), 204 === e || "HEAD" === f.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, o = s.data, n = !(r = s.error))) : (r = a, !e && a || (a = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || a) + "", n ? v.resolveWith(m, [o, a, _]) : v.rejectWith(m, [_, a, r]), _.statusCode(b), b = void 0, p && g.trigger(n ? "ajaxSuccess" : "ajaxError", [_, f, n ? o : r]), y.fireWith(m, [_, a]), p && (g.trigger("ajaxComplete", [_, f]), --C.active || C.event.trigger("ajaxStop")))
                }
                return _
            },
            getJSON: function(e, t, i) {
                return C.get(e, t, i, "json")
            },
            getScript: function(e, t) {
                return C.get(e, void 0, t, "script")
            }
        }), C.each(["get", "post"], function(e, o) {
            C[o] = function(e, t, i, n) {
                return b(t) && (n = n || i, i = t, t = void 0), C.ajax(C.extend({
                    url: e,
                    type: o,
                    dataType: n,
                    data: t,
                    success: i
                }, C.isPlainObject(e) && e))
            }
        }), C.ajaxPrefilter(function(e) {
            for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        }), C._evalUrl = function(e, t, i) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    C.globalEval(e, t, i)
                }
            })
        }, C.fn.extend({
            wrapAll: function(e) {
                return this[0] && (b(e) && (e = e.call(this[0])), e = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(i) {
                return b(i) ? this.each(function(e) {
                    C(this).wrapInner(i.call(this, e))
                }) : this.each(function() {
                    var e = C(this),
                        t = e.contents();
                    t.length ? t.wrapAll(i) : e.append(i)
                })
            },
            wrap: function(t) {
                var i = b(t);
                return this.each(function(e) {
                    C(this).wrapAll(i ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    C(this).replaceWith(this.childNodes)
                }), this
            }
        }), C.expr.pseudos.hidden = function(e) {
            return !C.expr.pseudos.visible(e)
        }, C.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, C.ajaxSettings.xhr = function() {
            try {
                return new E.XMLHttpRequest
            } catch (e) {}
        };
        var Ut = {
                0: 200,
                1223: 204
            },
            Qt = C.ajaxSettings.xhr();
        y.cors = !!Qt && "withCredentials" in Qt, y.ajax = Qt = !!Qt, C.ajaxTransport(function(o) {
            var r, s;
            if (y.cors || Qt && !o.crossDomain) return {
                send: function(e, t) {
                    var i, n = o.xhr();
                    if (n.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                        for (i in o.xhrFields) n[i] = o.xhrFields[i];
                    for (i in o.mimeType && n.overrideMimeType && n.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(i, e[i]);
                    r = function(e) {
                        return function() {
                            r && (r = s = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null, "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(Ut[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                                binary: n.response
                            } : {
                                text: n.responseText
                            }, n.getAllResponseHeaders()))
                        }
                    }, n.onload = r(), s = n.onerror = n.ontimeout = r("error"), void 0 !== n.onabort ? n.onabort = s : n.onreadystatechange = function() {
                        4 === n.readyState && E.setTimeout(function() {
                            r && s()
                        })
                    }, r = r("abort");
                    try {
                        n.send(o.hasContent && o.data || null)
                    } catch (e) {
                        if (r) throw e
                    }
                },
                abort: function() {
                    r && r()
                }
            }
        }), C.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return C.globalEval(e), e
                }
            }
        }), C.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), C.ajaxTransport("script", function(i) {
            var n, o;
            if (i.crossDomain || i.scriptAttrs) return {
                send: function(e, t) {
                    n = C("<script>").attr(i.scriptAttrs || {}).prop({
                        charset: i.scriptCharset,
                        src: i.url
                    }).on("load error", o = function(e) {
                        n.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), T.head.appendChild(n[0])
                },
                abort: function() {
                    o && o()
                }
            }
        });
        var Kt = [],
            Gt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Kt.pop() || C.expando + "_" + Dt.guid++;
                return this[e] = !0, e
            }
        }), C.ajaxPrefilter("json jsonp", function(e, t, i) {
            var n, o, r, s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Gt, "$1" + n) : !1 !== e.jsonp && (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
                return r || C.error(n + " was not called"), r[0]
            }, e.dataTypes[0] = "json", o = E[n], E[n] = function() {
                r = arguments
            }, i.always(function() {
                void 0 === o ? C(E).removeProp(n) : E[n] = o, e[n] && (e.jsonpCallback = t.jsonpCallback, Kt.push(n)), r && b(o) && o(r[0]), r = o = void 0
            }), "script"
        }), y.createHTMLDocument = ((he = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === he.childNodes.length), C.parseHTML = function(e, t, i) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (y.createHTMLDocument ? ((n = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(n)) : t = T), n = !i && [], (i = k.exec(e)) ? [t.createElement(i[1])] : (i = ve([e], t, n), n && n.length && C(n).remove(), C.merge([], i.childNodes)));
            var n
        }, C.fn.load = function(e, t, i) {
            var n, o, r, s = this,
                a = e.indexOf(" ");
            return -1 < a && (n = xt(e.slice(a)), e = e.slice(0, a)), b(t) ? (i = t, t = void 0) : t && "object" == _typeof(t) && (o = "POST"), 0 < s.length && C.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, s.html(n ? C("<div>").append(C.parseHTML(e)).find(n) : e)
            }).always(i && function(e, t) {
                s.each(function() {
                    i.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, C.expr.pseudos.animated = function(t) {
            return C.grep(C.timers, function(e) {
                return t === e.elem
            }).length
        }, C.offset = {
            setOffset: function(e, t, i) {
                var n, o, r, s, a = C.css(e, "position"),
                    l = C(e),
                    c = {};
                "static" === a && (e.style.position = "relative"), r = l.offset(), n = C.css(e, "top"), s = C.css(e, "left"), s = ("absolute" === a || "fixed" === a) && -1 < (n + s).indexOf("auto") ? (o = (a = l.position()).top, a.left) : (o = parseFloat(n) || 0, parseFloat(s) || 0), null != (t = b(t) ? t.call(e, i, C.extend({}, r)) : t).top && (c.top = t.top - r.top + o), null != t.left && (c.left = t.left - r.left + s), "using" in t ? t.using.call(e, c) : ("number" == typeof c.top && (c.top += "px"), "number" == typeof c.left && (c.left += "px"), l.css(c))
            }
        }, C.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    C.offset.setOffset(this, t, e)
                });
                var e, i = this[0];
                return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), i = i.ownerDocument.defaultView, {
                    top: e.top + i.pageYOffset,
                    left: e.left + i.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, i, n = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === C.css(n, "position")) t = n.getBoundingClientRect();
                    else {
                        for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                        e && e !== n && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - C.css(n, "marginTop", !0),
                        left: t.left - o.left - C.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                    return e || ie
                })
            }
        }), C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, o) {
            var r = "pageYOffset" === o;
            C.fn[t] = function(e) {
                return $(this, function(e, t, i) {
                    var n;
                    return m(e) ? n = e : 9 === e.nodeType && (n = e.defaultView), void 0 === i ? n ? n[o] : e[t] : void(n ? n.scrollTo(r ? n.pageXOffset : i, r ? i : n.pageYOffset) : e[t] = i)
                }, t, e, arguments.length)
            }
        }), C.each(["top", "left"], function(e, i) {
            C.cssHooks[i] = Ue(y.pixelPosition, function(e, t) {
                if (t) return t = Ve(e, i), We.test(t) ? C(e).position()[i] + "px" : t
            })
        }), C.each({
            Height: "height",
            Width: "width"
        }, function(s, a) {
            C.each({
                padding: "inner" + s,
                content: a,
                "": "outer" + s
            }, function(n, r) {
                C.fn[r] = function(e, t) {
                    var i = arguments.length && (n || "boolean" != typeof e),
                        o = n || (!0 === e || !0 === t ? "margin" : "border");
                    return $(this, function(e, t, i) {
                        var n;
                        return m(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + s], n["scroll" + s], e.body["offset" + s], n["offset" + s], n["client" + s])) : void 0 === i ? C.css(e, t, o) : C.style(e, t, i, o)
                    }, a, i ? e : void 0, i)
                }
            })
        }), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            C.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), C.fn.extend({
            bind: function(e, t, i) {
                return this.on(e, null, t, i)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, i, n) {
                return this.on(t, e, i, n)
            },
            undelegate: function(e, t, i) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, i) {
            C.fn[i] = function(e, t) {
                return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
            }
        });
        var Jt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        C.proxy = function(e, t) {
            var i, n;
            if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return i = a.call(arguments, 2), (n = function() {
                return e.apply(t || this, i.concat(a.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, n
        }, C.holdReady = function(e) {
            e ? C.readyWait++ : C.ready(!0)
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = S, C.isFunction = b, C.isWindow = m, C.camelCase = Y, C.type = f, C.now = Date.now, C.isNumeric = function(e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, C.trim = function(e) {
            return null == e ? "" : (e + "").replace(Jt, "")
        }, void 0 === (ni = function() {
            return C
        }.apply(ii, [])) || (ti.exports = ni);
        var Zt = E.jQuery,
            ei = E.$;
        return C.noConflict = function(e) {
            return E.$ === C && (E.$ = ei), e && E.jQuery === C && (E.jQuery = Zt), C
        }, void 0 === e && (E.jQuery = E.$ = C), C
    }, "object" == _typeof(ti.exports) ? ti.exports = t.document ? i(t, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return i(e)
    } : i(t)
}, function(e, J, t) {
    (function(e) {
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function r(e, t, i) {
            return t && o(e.prototype, t), i && o(e, i), e
        }

        function t(t, e) {
            var i, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(t), e && (i = i.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, i)), n
        }

        function s(n) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? t(Object(o), !0).forEach(function(e) {
                    var t, i;
                    t = n, e = o[i = e], i in t ? Object.defineProperty(t, i, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[i] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return n
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && i(e, t)
        }

        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function i(e, t) {
            return (i = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function c(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function u(i) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t = l(i);
                return e = n ? (e = l(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), t = this, !(e = e) || "object" != _typeof(e) && "function" != typeof e ? c(t) : e
            }
        }

        function d(e, t, i) {
            return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
                e = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
                    return e
                }(e, t);
                if (e) {
                    t = Object.getOwnPropertyDescriptor(e, t);
                    return t.get ? t.get.call(i) : t.value
                }
            })(e, t, i || e)
        }

        function C(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var i = [],
                        n = !0,
                        o = !1,
                        r = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !t || i.length !== t); n = !0);
                    } catch (e) {
                        o = !0, r = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                    return i
                }
            }(e, t) || m(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function m(e, t) {
            if (e) {
                if ("string" == typeof e) return g(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                return "Map" === (i = "Object" === i && e.constructor ? e.constructor.name : i) || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? g(e, t) : void 0
            }
        }

        function g(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n
        }
        var h = {
                el: document,
                name: "scroll",
                offset: [0, 0],
                repeat: !1,
                smooth: !1,
                initPosition: {
                    x: 0,
                    y: 0
                },
                direction: "vertical",
                gestureDirection: "vertical",
                reloadOnContextChange: !1,
                lerp: .1,
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
                    breakpoint: 1024
                },
                smartphone: {
                    smooth: !1,
                    direction: "vertical",
                    gestureDirection: "vertical"
                }
            },
            p = (r(v, [{
                key: "init",
                value: function() {
                    this.initEvents()
                }
            }, {
                key: "checkScroll",
                value: function() {
                    this.dispatchScroll()
                }
            }, {
                key: "checkResize",
                value: function() {
                    var e = this;
                    this.resizeTick || (this.resizeTick = !0, requestAnimationFrame(function() {
                        e.resize(), e.resizeTick = !1
                    }))
                }
            }, {
                key: "resize",
                value: function() {}
            }, {
                key: "checkContext",
                value: function() {
                    var e;
                    this.reloadOnContextChange && (this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint, e = this.context, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", e == this.context || ("desktop" == e ? this : this[e]).smooth != ("desktop" == this.context ? this : this[this.context]).smooth && window.location.reload())
                }
            }, {
                key: "initEvents",
                value: function() {
                    var t = this;
                    this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach(function(e) {
                        e.addEventListener("click", t.setScrollTo, !1)
                    })
                }
            }, {
                key: "setScrollTo",
                value: function(e) {
                    e.preventDefault(), this.scrollTo(e.currentTarget.getAttribute("data-".concat(this.name, "-href")) || e.currentTarget.getAttribute("href"), {
                        offset: e.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                    })
                }
            }, {
                key: "addElements",
                value: function() {}
            }, {
                key: "detectElements",
                value: function(n) {
                    var o = this,
                        r = this.instance.scroll.y,
                        s = r + this.windowHeight,
                        a = this.instance.scroll.x,
                        l = a + this.windowWidth;
                    Object.entries(this.els).forEach(function(e) {
                        var t, i = C(e, 2),
                            e = i[0],
                            i = i[1];
                        !i || i.inView && !n || ("horizontal" === o.direction ? l >= i.left && a < i.right && o.setInView(i, e) : s >= i.top && r < i.bottom && o.setInView(i, e)), i && i.inView && ("horizontal" === o.direction ? (t = i.right - i.left, i.progress = (o.instance.scroll.x - (i.left - o.windowWidth)) / (t + o.windowWidth), (l < i.left || a > i.right) && o.setOutOfView(i, e)) : (t = i.bottom - i.top, i.progress = (o.instance.scroll.y - (i.top - o.windowHeight)) / (t + o.windowHeight), (s < i.top || r > i.bottom) && o.setOutOfView(i, e)))
                    }), this.hasScrollTicking = !1
                }
            }, {
                key: "setInView",
                value: function(e, t) {
                    this.els[t].inView = !0, e.el.classList.add(e.class), (this.currentElements[t] = e).call && this.hasCallEventSet && (this.dispatchCall(e, "enter"), e.repeat || (this.els[t].call = !1))
                }
            }, {
                key: "setOutOfView",
                value: function(e, t) {
                    var i = this;
                    this.els[t].inView = !1, Object.keys(this.currentElements).forEach(function(e) {
                        e === t && delete i.currentElements[e]
                    }), e.call && this.hasCallEventSet && this.dispatchCall(e, "exit"), e.repeat && e.el.classList.remove(e.class)
                }
            }, {
                key: "dispatchCall",
                value: function(e, t) {
                    this.callWay = t, this.callValue = e.call.split(",").map(function(e) {
                        return e.trim()
                    }), this.callObj = e, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
                    e = new Event(this.namespace + "call");
                    this.el.dispatchEvent(e)
                }
            }, {
                key: "dispatchScroll",
                value: function() {
                    var e = new Event(this.namespace + "scroll");
                    this.el.dispatchEvent(e)
                }
            }, {
                key: "setEvents",
                value: function(e, t) {
                    this.listeners[e] || (this.listeners[e] = []);
                    var i = this.listeners[e];
                    i.push(t), 1 === i.length && this.el.addEventListener(this.namespace + e, this.checkEvent, !1), "call" === e && (this.hasCallEventSet = !0, this.detectElements(!0))
                }
            }, {
                key: "unsetEvents",
                value: function(e, t) {
                    var i;
                    this.listeners[e] && ((t = (i = this.listeners[e]).indexOf(t)) < 0 || (i.splice(t, 1), 0 === i.index && this.el.removeEventListener(this.namespace + e, this.checkEvent, !1)))
                }
            }, {
                key: "checkEvent",
                value: function(e) {
                    var t = this,
                        i = e.type.replace(this.namespace, ""),
                        e = this.listeners[i];
                    e && 0 !== e.length && e.forEach(function(e) {
                        switch (i) {
                            case "scroll":
                                return e(t.instance);
                            case "call":
                                return e(t.callValue, t.callWay, t.callObj);
                            default:
                                return e()
                        }
                    })
                }
            }, {
                key: "startScroll",
                value: function() {}
            }, {
                key: "stopScroll",
                value: function() {}
            }, {
                key: "setScroll",
                value: function(e, t) {
                    this.instance.scroll = {
                        x: 0,
                        y: 0
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach(function(e) {
                        t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
                    }), this.listeners = {}, this.scrollToEls.forEach(function(e) {
                        e.removeEventListener("click", t.setScrollTo, !1)
                    }), this.html.classList.remove(this.initClass)
                }
            }]), v),
            f = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};

        function v() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            n(this, v), Object.assign(this, h, e), this.smartphone = h.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = h.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2
            }, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
                scroll: {
                    x: 0,
                    y: 0
                },
                limit: {
                    x: this.html.offsetWidth,
                    y: this.html.offsetHeight
                },
                currentElements: this.currentElements
            }, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
        }

        function y(e, t) {
            return e(t = {
                exports: {}
            }, t.exports), t.exports
        }
        var b = y(function(e, t) {
                e.exports = {
                    polyfill: function() {
                        var e, t, a, l, i, c = window,
                            u = document;

                        function d(e, t) {
                            this.scrollLeft = e, this.scrollTop = t
                        }

                        function n(e) {
                            if (null === e || "object" != _typeof(e) || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                            if ("object" == _typeof(e) && "smooth" === e.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function o(e, t) {
                            return "Y" === t ? e.clientHeight + i < e.scrollHeight : "X" === t ? e.clientWidth + i < e.scrollWidth : void 0
                        }

                        function r(e, t) {
                            t = c.getComputedStyle(e, null)["overflow" + t];
                            return "auto" === t || "scroll" === t
                        }

                        function h(e) {
                            var t = (l() - e.startTime) / 468,
                                i = t = 1 < t ? 1 : t,
                                t = .5 * (1 - Math.cos(Math.PI * i)),
                                i = e.startX + (e.x - e.startX) * t,
                                t = e.startY + (e.y - e.startY) * t;
                            e.method.call(e.scrollable, i, t), i === e.x && t === e.y || c.requestAnimationFrame(h.bind(c, e))
                        }

                        function s(e, t, i) {
                            var n, o, r, s = l(),
                                e = e === u.body ? (o = (n = c).scrollX || c.pageXOffset, r = c.scrollY || c.pageYOffset, a.scroll) : (o = (n = e).scrollLeft, r = e.scrollTop, d);
                            h({
                                scrollable: n,
                                method: e,
                                startTime: s,
                                startX: o,
                                startY: r,
                                x: t,
                                y: i
                            })
                        }
                        "scrollBehavior" in u.documentElement.style && !0 !== c.__forceSmoothScrollPolyfill__ || (t = c.HTMLElement || c.Element, a = {
                            scroll: c.scroll || c.scrollTo,
                            scrollBy: c.scrollBy,
                            elementScroll: t.prototype.scroll || d,
                            scrollIntoView: t.prototype.scrollIntoView
                        }, l = c.performance && c.performance.now ? c.performance.now.bind(c.performance) : Date.now, e = c.navigator.userAgent, i = new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(e) ? 1 : 0, c.scroll = c.scrollTo = function() {
                            void 0 !== arguments[0] && (!0 !== n(arguments[0]) ? s.call(c, u.body, void 0 !== arguments[0].left ? ~~arguments[0].left : c.scrollX || c.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : c.scrollY || c.pageYOffset) : a.scroll.call(c, void 0 !== arguments[0].left ? arguments[0].left : "object" != _typeof(arguments[0]) ? arguments[0] : c.scrollX || c.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : c.scrollY || c.pageYOffset))
                        }, c.scrollBy = function() {
                            void 0 !== arguments[0] && (n(arguments[0]) ? a.scrollBy.call(c, void 0 !== arguments[0].left ? arguments[0].left : "object" != _typeof(arguments[0]) ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : s.call(c, u.body, ~~arguments[0].left + (c.scrollX || c.pageXOffset), ~~arguments[0].top + (c.scrollY || c.pageYOffset)))
                        }, t.prototype.scroll = t.prototype.scrollTo = function() {
                            if (void 0 !== arguments[0])
                                if (!0 !== n(arguments[0])) {
                                    var e = arguments[0].left,
                                        t = arguments[0].top;
                                    s.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                } else {
                                    if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                    a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != _typeof(arguments[0]) ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                }
                        }, t.prototype.scrollBy = function() {
                            void 0 !== arguments[0] && (!0 !== n(arguments[0]) ? this.scroll({
                                left: ~~arguments[0].left + this.scrollLeft,
                                top: ~~arguments[0].top + this.scrollTop,
                                behavior: arguments[0].behavior
                            }) : a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                        }, t.prototype.scrollIntoView = function() {
                            var e, t, i;
                            !0 !== n(arguments[0]) ? (t = (e = function(e) {
                                for (; e !== u.body && !1 === function(e) {
                                        var t = o(e, "Y") && r(e, "Y"),
                                            e = o(e, "X") && r(e, "X");
                                        return t || e
                                    }(e);) e = e.parentNode || e.host;
                                return e
                            }(this)).getBoundingClientRect(), i = this.getBoundingClientRect(), e !== u.body ? (s.call(this, e, e.scrollLeft + i.left - t.left, e.scrollTop + i.top - t.top), "fixed" !== c.getComputedStyle(e).position && c.scrollBy({
                                left: t.left,
                                top: t.top,
                                behavior: "smooth"
                            })) : c.scrollBy({
                                left: i.left,
                                top: i.top,
                                behavior: "smooth"
                            })) : a.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                        })
                    }
                }
            }),
            w = (b.polyfill, function() {
                a(i, p);
                var t = u(i);

                function i() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return n(this, i), (e = t.call(this, e)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), window.addEventListener("scroll", e.checkScroll, !1), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = b, window.smoothscrollPolyfill.polyfill()), e
                }
                return r(i, [{
                    key: "init",
                    value: function() {
                        this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), d(l(i.prototype), "init", this).call(this)
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        var e = this;
                        d(l(i.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.instance.scroll.y = window.pageYOffset, Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame(function() {
                            e.detectElements()
                        }), this.hasScrollTicking = !0))
                    }
                }, {
                    key: "addDirection",
                    value: function() {
                        window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                    }
                }, {
                    key: "addSpeed",
                    value: function() {
                        window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                    }
                }, {
                    key: "resize",
                    value: function() {
                        Object.entries(this.els).length && (this.windowHeight = window.innerHeight, this.updateElements())
                    }
                }, {
                    key: "addElements",
                    value: function() {
                        var h = this;
                        this.els = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach(function(e, t) {
                            e.getBoundingClientRect();
                            var i, n = e.dataset[h.name + "Class"] || h.class,
                                o = "string" == typeof e.dataset[h.name + "Id"] ? e.dataset[h.name + "Id"] : t,
                                r = "string" == typeof e.dataset[h.name + "Offset"] ? e.dataset[h.name + "Offset"].split(",") : h.offset,
                                s = e.dataset[h.name + "Repeat"],
                                a = e.dataset[h.name + "Call"],
                                l = e.dataset[h.name + "Target"],
                                c = (i = void 0 !== l ? document.querySelector("".concat(l)) : e).getBoundingClientRect(),
                                u = c.top + h.instance.scroll.y,
                                d = c.left + h.instance.scroll.x,
                                t = u + i.offsetHeight,
                                l = d + i.offsetWidth,
                                s = "false" != s && (null != s || h.repeat),
                                c = h.getRelativeOffset(r),
                                a = {
                                    el: e,
                                    targetEl: i,
                                    id: o,
                                    class: n,
                                    top: u += c[0],
                                    bottom: t -= c[1],
                                    left: d,
                                    right: l,
                                    offset: r,
                                    progress: 0,
                                    repeat: s,
                                    inView: !1,
                                    call: a
                                };
                            h.els[o] = a, e.classList.contains(n) && h.setInView(h.els[o], o)
                        })
                    }
                }, {
                    key: "updateElements",
                    value: function() {
                        var o = this;
                        Object.entries(this.els).forEach(function(e) {
                            var t = C(e, 2),
                                i = t[0],
                                n = t[1],
                                e = n.targetEl.getBoundingClientRect().top + o.instance.scroll.y,
                                t = e + n.targetEl.offsetHeight,
                                n = o.getRelativeOffset(n.offset);
                            o.els[i].top = e + n[0], o.els[i].bottom = t - n[1]
                        }), this.hasScrollTicking = !1
                    }
                }, {
                    key: "getRelativeOffset",
                    value: function(e) {
                        var t = [0, 0];
                        if (e)
                            for (var i = 0; i < e.length; i++) "string" == typeof e[i] ? e[i].includes("%") ? t[i] = parseInt(e[i].replace("%", "") * this.windowHeight / 100) : t[i] = parseInt(e[i]) : t[i] = e[i];
                        return t
                    }
                }, {
                    key: "scrollTo",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            i = parseInt(t.offset) || 0,
                            n = !!t.callback && t.callback;
                        if ("string" == typeof e) {
                            if ("top" === e) e = this.html;
                            else if ("bottom" === e) e = this.html.offsetHeight - window.innerHeight;
                            else if (!(e = document.querySelector(e))) return
                        } else if ("number" == typeof e) e = parseInt(e);
                        else if (!e || !e.tagName) return void console.warn("`target` parameter is not valid");
                        i = "number" != typeof e ? e.getBoundingClientRect().top + i + this.instance.scroll.y : e + i;

                        function o() {
                            return parseInt(window.pageYOffset) === parseInt(i)
                        }
                        if (n) {
                            if (o()) return void n();
                            e = function e() {
                                o() && (window.removeEventListener("scroll", e), n())
                            };
                            window.addEventListener("scroll", e)
                        }
                        window.scrollTo({
                            top: i,
                            behavior: "smooth"
                        })
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.addElements(), this.detectElements()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        d(l(i.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1)
                    }
                }]), i
            }()),
            _ = Object.getOwnPropertySymbols,
            x = Object.prototype.hasOwnProperty,
            E = Object.prototype.propertyIsEnumerable;
        var T = function() {
            try {
                if (!Object.assign) return;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return;
                for (var t = {}, i = 0; i < 10; i++) t["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                        return t[e]
                    }).join("")) return;
                var n = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    n[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
            } catch (e) {
                return
            }
        }() ? Object.assign : function(e, t) {
            for (var i, n, o = function(e) {
                    if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }(e), r = 1; r < arguments.length; r++) {
                for (var s in i = Object(arguments[r])) x.call(i, s) && (o[s] = i[s]);
                if (_) {
                    n = _(i);
                    for (var a = 0; a < n.length; a++) E.call(i, n[a]) && (o[n[a]] = i[n[a]])
                }
            }
            return o
        };

        function S() {}
        S.prototype = {
            on: function(e, t, i) {
                var n = this.e || (this.e = {});
                return (n[e] || (n[e] = [])).push({
                    fn: t,
                    ctx: i
                }), this
            },
            once: function(e, t, i) {
                var n = this;

                function o() {
                    n.off(e, o), t.apply(i, arguments)
                }
                return o._ = t, this.on(e, o, i)
            },
            emit: function(e) {
                for (var t = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, o = i.length; n < o; n++) i[n].fn.apply(i[n].ctx, t);
                return this
            },
            off: function(e, t) {
                var i = this.e || (this.e = {}),
                    n = i[e],
                    o = [];
                if (n && t)
                    for (var r = 0, s = n.length; r < s; r++) n[r].fn !== t && n[r].fn._ !== t && o.push(n[r]);
                return o.length ? i[e] = o : delete i[e], this
            }
        };
        var k = S,
            e = y(function(e, t) {
                (function() {
                    function e(e, t, i, n) {
                        this.stability = null != e ? Math.abs(e) : 8, this.sensitivity = null != t ? 1 + Math.abs(t) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != n ? n : 150, this.lastUpDeltas = function() {
                            for (var e = [], t = 1, i = 2 * this.stability; 1 <= i ? t <= i : i <= t; 1 <= i ? t++ : t--) e.push(null);
                            return e
                        }.call(this), this.lastDownDeltas = function() {
                            for (var e = [], t = 1, i = 2 * this.stability; 1 <= i ? t <= i : i <= t; 1 <= i ? t++ : t--) e.push(null);
                            return e
                        }.call(this), this.deltasTimestamp = function() {
                            for (var e = [], t = 1, i = 2 * this.stability; 1 <= i ? t <= i : i <= t; 1 <= i ? t++ : t--) e.push(null);
                            return e
                        }.call(this)
                    }(null !== t ? t : this).Lethargy = (e.prototype.check = function(e) {
                        var t;
                        return null != (e = e.originalEvent || e).wheelDelta ? t = e.wheelDelta : null != e.deltaY ? t = -40 * e.deltaY : null == e.detail && 0 !== e.detail || (t = -40 * e.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), 0 < t ? (this.lastUpDeltas.push(t), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(t), this.lastDownDeltas.shift(), this.isInertia(-1))
                    }, e.prototype.isInertia = function(e) {
                        var t, i, n, o;
                        return null === (i = -1 === e ? this.lastDownDeltas : this.lastUpDeltas)[0] ? e : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && i[0] === i[2 * this.stability - 1]) && (n = i.slice(0, this.stability), t = i.slice(this.stability, 2 * this.stability), o = n.reduce(function(e, t) {
                            return e + t
                        }), i = t.reduce(function(e, t) {
                            return e + t
                        }), n = o / n.length, t = i / t.length, Math.abs(n) < Math.abs(t * this.tolerance) && this.sensitivity < Math.abs(t) && e)
                    }, e.prototype.showLastUpDeltas = function() {
                        return this.lastUpDeltas
                    }, e.prototype.showLastDownDeltas = function() {
                        return this.lastDownDeltas
                    }, e)
                }).call(f)
            }),
            A = "onwheel" in document,
            D = "onmousewheel" in document,
            L = "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
            O = navigator.msMaxTouchPoints && 1 < navigator.msMaxTouchPoints,
            j = !!window.navigator.msPointerEnabled,
            M = "onkeydown" in document,
            N = -1 < navigator.userAgent.indexOf("Firefox"),
            I = Object.prototype.toString,
            q = Object.prototype.hasOwnProperty;
        var H = e.Lethargy,
            P = "virtualscroll",
            R = z;

        function z(e) {
            ! function(e) {
                if (!e) return console.warn("bindAll requires at least one argument.");
                var t = Array.prototype.slice.call(arguments, 1);
                if (0 === t.length)
                    for (var i in e) q.call(e, i) && "function" == typeof e[i] && "[object Function]" == I.call(e[i]) && t.push(i);
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    e[o] = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    }(e[o], e)
                }
            }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, e && e.el && (this.el = e.el, delete e.el), this.options = T({
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                limitInertia: !1,
                useKeyboard: !0,
                useTouch: !0
            }, e), this.options.limitInertia && (this._lethargy = new H), this._emitter = new k, this._event = {
                y: 0,
                x: 0,
                deltaX: 0,
                deltaY: 0
            }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
                passive: this.options.passive
            })
        }

        function $(e, t, i) {
            return (1 - i) * e + i * t
        }

        function B(e) {
            var t = {};
            if (window.getComputedStyle) {
                var i = getComputedStyle(e),
                    e = i.transform || i.webkitTransform || i.mozTransform,
                    i = e.match(/^matrix3d\((.+)\)$/);
                return i ? (t.x = i ? parseFloat(i[1].split(", ")[12]) : 0, t.y = i ? parseFloat(i[1].split(", ")[13]) : 0) : (i = e.match(/^matrix\((.+)\)$/), t.x = i ? parseFloat(i[1].split(", ")[4]) : 0, t.y = i ? parseFloat(i[1].split(", ")[5]) : 0), t
            }
        }

        function F(e) {
            for (var t = []; e && e !== document; e = e.parentNode) t.push(e);
            return t
        }
        z.prototype._notify = function(e) {
            var t = this._event;
            t.x += t.deltaX, t.y += t.deltaY, this._emitter.emit(P, {
                x: t.x,
                y: t.y,
                deltaX: t.deltaX,
                deltaY: t.deltaY,
                originalEvent: e
            })
        }, z.prototype._onWheel = function(e) {
            var t, i = this.options;
            this._lethargy && !1 === this._lethargy.check(e) || ((t = this._event).deltaX = e.wheelDeltaX || -1 * e.deltaX, t.deltaY = e.wheelDeltaY || -1 * e.deltaY, N && 1 == e.deltaMode && (t.deltaX *= i.firefoxMultiplier, t.deltaY *= i.firefoxMultiplier), t.deltaX *= i.mouseMultiplier, t.deltaY *= i.mouseMultiplier, this._notify(e))
        }, z.prototype._onMouseWheel = function(e) {
            var t;
            this.options.limitInertia && !1 === this._lethargy.check(e) || ((t = this._event).deltaX = e.wheelDeltaX || 0, t.deltaY = e.wheelDeltaY || e.wheelDelta, this._notify(e))
        }, z.prototype._onTouchStart = function(e) {
            e = e.targetTouches ? e.targetTouches[0] : e;
            this.touchStartX = e.pageX, this.touchStartY = e.pageY
        }, z.prototype._onTouchMove = function(e) {
            var t = this.options;
            t.preventTouch && !e.target.classList.contains(t.unpreventTouchClass) && e.preventDefault();
            var i = this._event,
                n = e.targetTouches ? e.targetTouches[0] : e;
            i.deltaX = (n.pageX - this.touchStartX) * t.touchMultiplier, i.deltaY = (n.pageY - this.touchStartY) * t.touchMultiplier, this.touchStartX = n.pageX, this.touchStartY = n.pageY, this._notify(e)
        }, z.prototype._onKeyDown = function(e) {
            var t = this._event;
            t.deltaX = t.deltaY = 0;
            var i = window.innerHeight - 40;
            switch (e.keyCode) {
                case 37:
                case 38:
                    t.deltaY = this.options.keyStep;
                    break;
                case 39:
                case 40:
                    t.deltaY = -this.options.keyStep;
                    break;
                case e.shiftKey:
                    t.deltaY = i;
                    break;
                case 32:
                    t.deltaY = -i;
                    break;
                default:
                    return
            }
            this._notify(e)
        }, z.prototype._bind = function() {
            A && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), D && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), L && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), j && O && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), M && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
        }, z.prototype._unbind = function() {
            A && this.el.removeEventListener("wheel", this._onWheel), D && this.el.removeEventListener("mousewheel", this._onMouseWheel), L && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), j && O && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), M && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
        }, z.prototype.on = function(e, t) {
            this._emitter.on(P, e, t);
            t = this._emitter.e;
            t && t[P] && 1 === t[P].length && this._bind()
        }, z.prototype.off = function(e, t) {
            this._emitter.off(P, e, t);
            t = this._emitter.e;
            (!t[P] || t[P].length <= 0) && this._unbind()
        }, z.prototype.reset = function() {
            var e = this._event;
            e.x = 0, e.y = 0
        }, z.prototype.destroy = function() {
            this._emitter.off(), this._unbind()
        };
        var W = "function" == typeof Float32Array;

        function Y(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function X(e, t, i) {
            return ((Y(t, i) * e + (3 * i - 6 * t)) * e + 3 * t) * e
        }

        function V(e, t, i) {
            return 3 * Y(t, i) * e * e + 2 * (3 * i - 6 * t) * e + 3 * t
        }

        function U(e) {
            return e
        }

        function Q(r, t, s, i) {
            if (!(0 <= r && r <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            if (r === t && s === i) return U;
            for (var a = new(W ? Float32Array : Array)(11), e = 0; e < 11; ++e) a[e] = X(.1 * e, r, s);
            return function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : X(function(e) {
                    for (var t = 0, i = 1; 10 !== i && a[i] <= e; ++i) t += .1;
                    var n = t + (e - a[--i]) / (a[i + 1] - a[i]) * .1,
                        o = V(n, r, s);
                    return .001 <= o ? function(e, t, i, n) {
                        for (var o = 0; o < 4; ++o) {
                            var r = V(t, i, n);
                            if (0 === r) return t;
                            t -= (X(t, i, n) - e) / r
                        }
                        return t
                    }(e, n, r, s) : 0 === o ? n : function(e, t, i, n, o) {
                        for (var r, s, a = 0; 0 < (r = X(s = t + (i - t) / 2, n, o) - e) ? i = s : t = s, 1e-7 < Math.abs(r) && ++a < 10;);
                        return s
                    }(e, t, t + .1, r, s)
                }(e), t, i)
            }
        }
        var K = function() {
                a(o, p);
                var i = u(o);

                function o() {
                    var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return n(this, o), history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (e = i.call(this, t)).inertia && (e.lerp = .1 * e.inertia), e.isScrolling = !1, e.isDraggingScrollbar = !1, e.isTicking = !1, e.hasScrollTicking = !1, e.parallaxElements = {}, e.stop = !1, e.scrollbarContainer = t.scrollbarContainer, e.checkKey = e.checkKey.bind(c(e)), window.addEventListener("keydown", e.checkKey, !1), e
                }
                return r(o, [{
                    key: "init",
                    value: function() {
                        var t = this;
                        this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction), this.instance = s({
                            delta: {
                                x: this.initPosition.x,
                                y: this.initPosition.y
                            },
                            scroll: {
                                x: this.initPosition.x,
                                y: this.initPosition.y
                            }
                        }, this.instance), this.vs = new R({
                            el: this.scrollFromAnywhere ? document : this.el,
                            mouseMultiplier: -1 < navigator.platform.indexOf("Win") ? 1 : .4,
                            firefoxMultiplier: this.firefoxMultiplier,
                            touchMultiplier: this.touchMultiplier,
                            useKeyboard: !1,
                            passive: !0
                        }), this.vs.on(function(e) {
                            t.stop || t.isDraggingScrollbar || requestAnimationFrame(function() {
                                t.updateDelta(e), t.isScrolling || t.startScrolling()
                            })
                        }), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.checkScroll(!0), this.transformElements(!0, !0), d(l(o.prototype), "init", this).call(this)
                    }
                }, {
                    key: "setScrollLimit",
                    value: function() {
                        if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight, "horizontal" === this.direction) {
                            for (var e = 0, t = this.el.children, i = 0; i < t.length; i++) e += t[i].offsetWidth;
                            this.instance.limit.x = e - this.windowWidth
                        }
                    }
                }, {
                    key: "startScrolling",
                    value: function() {
                        this.startScrollTs = Date.now(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                    }
                }, {
                    key: "stopScrolling",
                    value: function() {
                        cancelAnimationFrame(this.checkScrollRaf), this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass)
                    }
                }, {
                    key: "checkKey",
                    value: function(e) {
                        var t = this;
                        if (this.stop) 9 == e.keyCode && requestAnimationFrame(function() {
                            t.html.scrollTop = 0, document.body.scrollTop = 0, t.html.scrollLeft = 0, document.body.scrollLeft = 0
                        });
                        else {
                            switch (e.keyCode) {
                                case 9:
                                    requestAnimationFrame(function() {
                                        t.html.scrollTop = 0, document.body.scrollTop = 0, t.html.scrollLeft = 0, document.body.scrollLeft = 0, t.scrollTo(document.activeElement, {
                                            offset: -window.innerHeight / 2
                                        })
                                    });
                                    break;
                                case 38:
                                    this.instance.delta[this.directionAxis] -= 240;
                                    break;
                                case 40:
                                    this.instance.delta[this.directionAxis] += 240;
                                    break;
                                case 33:
                                    this.instance.delta[this.directionAxis] -= window.innerHeight;
                                    break;
                                case 34:
                                    this.instance.delta[this.directionAxis] += window.innerHeight;
                                    break;
                                case 36:
                                    this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                                    break;
                                case 35:
                                    this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                                    break;
                                case 32:
                                    document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (e.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                                    break;
                                default:
                                    return
                            }
                            this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]), this.stopScrolling(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                        }
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        var e, t, i = this,
                            n = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                        (n || this.isScrolling || this.isDraggingScrollbar) && (this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame(function() {
                            return i.checkScroll()
                        }), this.hasScrollTicking = !0), this.updateScroll(), t = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]), e = Date.now() - this.startScrollTs, !this.animatingScroll && 100 < e && (t < .5 && 0 != this.instance.delta[this.directionAxis] || t < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(), Object.entries(this.sections).forEach(function(e) {
                            e = C(e, 2), e[0], e = e[1];
                            e.persistent || i.instance.scroll[i.directionAxis] > e.offset[i.directionAxis] && i.instance.scroll[i.directionAxis] < e.limit[i.directionAxis] ? ("horizontal" === i.direction ? i.transform(e.el, -i.instance.scroll[i.directionAxis], 0) : i.transform(e.el, 0, -i.instance.scroll[i.directionAxis]), e.inView || (e.inView = !0, e.el.style.opacity = 1, e.el.style.pointerEvents = "all", e.el.setAttribute("data-".concat(i.name, "-section-inview"), ""))) : ((e.inView || n) && (e.inView = !1, e.el.style.opacity = 0, e.el.style.pointerEvents = "none", e.el.removeAttribute("data-".concat(i.name, "-section-inview"))), i.transform(e.el, 0, 0))
                        }), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.detectElements(), this.transformElements(), this.hasScrollbar && (t = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis], "horizontal" === this.direction ? this.transform(this.scrollbarThumb, t, 0) : this.transform(this.scrollbarThumb, 0, t)), d(l(o.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1)
                    }
                }, {
                    key: "resize",
                    value: function() {
                        this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.checkContext(), this.windowMiddle = {
                            x: this.windowWidth / 2,
                            y: this.windowHeight / 2
                        }, this.update()
                    }
                }, {
                    key: "updateDelta",
                    value: function(e) {
                        var t = (this[this.context] && this[this.context].gestureDirection ? this[this.context] : this).gestureDirection,
                            e = "both" === t ? e.deltaX + e.deltaY : "vertical" !== t && "horizontal" === t ? e.deltaX : e.deltaY;
                        this.instance.delta[this.directionAxis] -= e * this.multiplier, this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
                    }
                }, {
                    key: "updateScroll",
                    value: function(e) {
                        this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = $(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
                    }
                }, {
                    key: "addDirection",
                    value: function() {
                        this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
                    }
                }, {
                    key: "addSpeed",
                    value: function() {
                        this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                    }
                }, {
                    key: "initScrollBar",
                    value: function() {
                        if (this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), (this.scrollbarContainer || document.body).append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.hasScrollbar = !1, "horizontal" == this.direction) {
                            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                        } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                        this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                        }
                    }
                }, {
                    key: "reinitScrollBar",
                    value: function() {
                        if (this.hasScrollbar = !1, "horizontal" == this.direction) {
                            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                        } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                        this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                        }
                    }
                }, {
                    key: "destroyScrollBar",
                    value: function() {
                        this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove()
                    }
                }, {
                    key: "getScrollBar",
                    value: function(e) {
                        this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass)
                    }
                }, {
                    key: "releaseScrollBar",
                    value: function(e) {
                        this.isDraggingScrollbar = !1, this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass)
                    }
                }, {
                    key: "moveScrollBar",
                    value: function(i) {
                        var n = this;
                        this.isDraggingScrollbar && requestAnimationFrame(function() {
                            var e = 100 * (i.clientX - n.scrollbarBCR.left) / n.scrollbarWidth * n.instance.limit.x / 100,
                                t = 100 * (i.clientY - n.scrollbarBCR.top) / n.scrollbarHeight * n.instance.limit.y / 100;
                            0 < t && t < n.instance.limit.y && (n.instance.delta.y = t), 0 < e && e < n.instance.limit.x && (n.instance.delta.x = e)
                        })
                    }
                }, {
                    key: "addElements",
                    value: function() {
                        var T = this;
                        this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach(function(e, t) {
                            var i, n, o = F(e),
                                r = Object.entries(T.sections).map(function(e) {
                                    e = C(e, 2);
                                    return e[0], e[1]
                                }).find(function(e) {
                                    return o.includes(e.el)
                                }),
                                s = e.dataset[T.name + "Class"] || T.class,
                                a = "string" == typeof e.dataset[T.name + "Id"] ? e.dataset[T.name + "Id"] : "el" + t,
                                l = e.dataset[T.name + "Repeat"],
                                c = e.dataset[T.name + "Call"],
                                u = e.dataset[T.name + "Position"],
                                d = e.dataset[T.name + "Delay"],
                                h = e.dataset[T.name + "Direction"],
                                p = "string" == typeof e.dataset[T.name + "Sticky"],
                                f = !!e.dataset[T.name + "Speed"] && parseFloat(e.dataset[T.name + "Speed"]) / 10,
                                m = "string" == typeof e.dataset[T.name + "Offset"] ? e.dataset[T.name + "Offset"].split(",") : T.offset,
                                g = e.dataset[T.name + "Target"],
                                v = (n = void 0 !== g ? document.querySelector("".concat(g)) : e).getBoundingClientRect(),
                                y = null === r || r.inView ? (i = v.top + T.instance.scroll.y - B(n).y, v.left + T.instance.scroll.x - B(n).x) : (i = v.top - B(r.el).y - B(n).y, v.left - B(r.el).x - B(n).x),
                                b = i + n.offsetHeight,
                                w = y + n.offsetWidth,
                                _ = {
                                    x: (w - y) / 2 + y,
                                    y: (b - i) / 2 + i
                                };
                            p && (g = (t = e.getBoundingClientRect()).top, t = {
                                x: (v = t.left) - y,
                                y: g - i
                            }, i += window.innerHeight, y += window.innerWidth, b = g + n.offsetHeight - e.offsetHeight - t[T.directionAxis], _ = {
                                x: ((w = v + n.offsetWidth - e.offsetWidth - t[T.directionAxis]) - y) / 2 + y,
                                y: (b - i) / 2 + i
                            }), l = "false" != l && (null != l || T.repeat);
                            var x = [0, 0];
                            if (m)
                                if ("horizontal" === T.direction) {
                                    for (var E = 0; E < m.length; E++) "string" == typeof m[E] ? m[E].includes("%") ? x[E] = parseInt(m[E].replace("%", "") * T.windowWidth / 100) : x[E] = parseInt(m[E]) : x[E] = m[E];
                                    y += x[0], w -= x[1]
                                } else {
                                    for (E = 0; E < m.length; E++) "string" == typeof m[E] ? m[E].includes("%") ? x[E] = parseInt(m[E].replace("%", "") * T.windowHeight / 100) : x[E] = parseInt(m[E]) : x[E] = m[E];
                                    i += x[0], b -= x[1]
                                }
                            h = {
                                el: e,
                                id: a,
                                class: s,
                                section: r,
                                top: i,
                                middle: _,
                                bottom: b,
                                left: y,
                                right: w,
                                offset: m,
                                progress: 0,
                                repeat: l,
                                inView: !1,
                                call: c,
                                speed: f,
                                delay: d,
                                position: u,
                                target: n,
                                direction: h,
                                sticky: p
                            };
                            T.els[a] = h, e.classList.contains(s) && T.setInView(T.els[a], a), !1 === f && !p || (T.parallaxElements[a] = h)
                        })
                    }
                }, {
                    key: "addSections",
                    value: function() {
                        var r = this;
                        this.sections = {};
                        var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                        (e = 0 === e.length ? [this.el] : e).forEach(function(e, t) {
                            var i = "string" == typeof e.dataset[r.name + "Id"] ? e.dataset[r.name + "Id"] : "section" + t,
                                n = e.getBoundingClientRect(),
                                o = {
                                    x: n.left - 1.5 * window.innerWidth - B(e).x,
                                    y: n.top - 1.5 * window.innerHeight - B(e).y
                                },
                                t = {
                                    x: o.x + n.width + 2 * window.innerWidth,
                                    y: o.y + n.height + 2 * window.innerHeight
                                },
                                n = "string" == typeof e.dataset[r.name + "Persistent"];
                            e.setAttribute("data-scroll-section-id", i);
                            n = {
                                el: e,
                                offset: o,
                                limit: t,
                                inView: !1,
                                persistent: n,
                                id: i
                            };
                            r.sections[i] = n
                        })
                    }
                }, {
                    key: "transform",
                    value: function(e, t, i, n) {
                        var o, r;
                        i = n ? (r = $((o = B(e)).x, t, n), n = $(o.y, i, n), "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(r, ",").concat(n, ",0,1)")) : "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(t, ",").concat(i, ",0,1)"), e.style.webkitTransform = i, e.style.msTransform = i, e.style.transform = i
                    }
                }, {
                    key: "transformElements",
                    value: function(n) {
                        var o = this,
                            r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            s = this.instance.scroll.x + this.windowWidth,
                            a = this.instance.scroll.y + this.windowHeight,
                            l = {
                                x: this.instance.scroll.x + this.windowMiddle.x,
                                y: this.instance.scroll.y + this.windowMiddle.y
                            };
                        Object.entries(this.parallaxElements).forEach(function(e) {
                            var e = C(e, 2),
                                t = (e[0], e[1]),
                                i = n ? 0 : !1;
                            if (t.inView || r) switch (t.position) {
                                case "top":
                                    i = o.instance.scroll[o.directionAxis] * -t.speed;
                                    break;
                                case "elementTop":
                                    i = (a - t.top) * -t.speed;
                                    break;
                                case "bottom":
                                    i = (o.instance.limit[o.directionAxis] - a + o.windowHeight) * t.speed;
                                    break;
                                case "left":
                                    i = o.instance.scroll[o.directionAxis] * -t.speed;
                                    break;
                                case "elementLeft":
                                    i = (s - t.left) * -t.speed;
                                    break;
                                case "right":
                                    i = (o.instance.limit[o.directionAxis] - s + o.windowHeight) * t.speed;
                                    break;
                                default:
                                    i = (l[o.directionAxis] - t.middle[o.directionAxis]) * -t.speed
                            }!1 !== (i = t.sticky ? t.inView ? "horizontal" === o.direction ? o.instance.scroll.x - t.left + window.innerWidth : o.instance.scroll.y - t.top + window.innerHeight : "horizontal" === o.direction ? o.instance.scroll.x < t.left - window.innerWidth && o.instance.scroll.x < t.left - window.innerWidth / 2 ? 0 : o.instance.scroll.x > t.right && o.instance.scroll.x > t.right + 100 && t.right - t.left + window.innerWidth : o.instance.scroll.y < t.top - window.innerHeight && o.instance.scroll.y < t.top - window.innerHeight / 2 ? 0 : o.instance.scroll.y > t.bottom && o.instance.scroll.y > t.bottom + 100 && t.bottom - t.top + window.innerHeight : i) && ("horizontal" === t.direction || "horizontal" === o.direction && "vertical" !== t.direction ? o.transform(t.el, i, 0, !n && t.delay) : o.transform(t.el, 0, i, !n && t.delay))
                        })
                    }
                }, {
                    key: "scrollTo",
                    value: function(e) {
                        var i = this,
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            n = parseInt(t.offset) || 0,
                            o = isNaN(parseInt(t.duration)) ? 1e3 : parseInt(t.duration),
                            r = t.easing || [.25, 0, .35, 1],
                            s = !!t.disableLerp,
                            a = !!t.callback && t.callback,
                            r = Q.apply(void 0, function(e) {
                                if (Array.isArray(e)) return g(e)
                            }(u = r) || function(e) {
                                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                            }(u) || m(u) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }());
                        if ("string" == typeof e) {
                            if ("top" === e) e = 0;
                            else if ("bottom" === e) e = this.instance.limit.y;
                            else if ("left" === e) e = 0;
                            else if ("right" === e) e = this.instance.limit.x;
                            else if (!(e = document.querySelector(e))) return
                        } else if ("number" == typeof e) e = parseInt(e);
                        else if (!e || !e.tagName) return void console.warn("`target` parameter is not valid");
                        if ("number" != typeof e) {
                            if (!F(e).includes(this.el)) return;
                            var l = e.getBoundingClientRect(),
                                c = l.top,
                                t = l.left,
                                u = F(e).find(function(t) {
                                    return Object.entries(i.sections).map(function(e) {
                                        e = C(e, 2);
                                        return e[0], e[1]
                                    }).find(function(e) {
                                        return e.el == t
                                    })
                                }),
                                l = u ? B(u)[this.directionAxis] : -this.instance.scroll[this.directionAxis],
                                n = "horizontal" === this.direction ? t + n - l : c + n - l
                        } else n = e + n;

                        function d(e) {
                            s ? "horizontal" === i.direction ? i.setScroll(h + p * e, i.instance.delta.y) : i.setScroll(i.instance.delta.x, h + p * e) : i.instance.delta[i.directionAxis] = h + p * e
                        }
                        var h = parseFloat(this.instance.delta[this.directionAxis]),
                            p = Math.max(0, Math.min(n, this.instance.limit[this.directionAxis])) - h;
                        this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
                        var f = Date.now();
                        (function e() {
                            var t = (Date.now() - f) / o;
                            1 < t ? (d(1), i.animatingScroll = !1, 0 == o && i.update(), a && a()) : (i.scrollToRaf = requestAnimationFrame(e), d(r(t)))
                        })()
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0)
                    }
                }, {
                    key: "startScroll",
                    value: function() {
                        this.stop = !1
                    }
                }, {
                    key: "stopScroll",
                    value: function() {
                        this.stop = !0
                    }
                }, {
                    key: "setScroll",
                    value: function(e, t) {
                        this.instance = s(s({}, this.instance), {}, {
                            scroll: {
                                x: e,
                                y: t
                            },
                            delta: {
                                x: e,
                                y: t
                            },
                            speed: 0
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        d(l(o.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1)
                    }
                }]), o
            }(),
            e = (r(G, [{
                key: "init",
                value: function() {
                    var e;
                    this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new K(this.options) : this.scroll = new w(this.options), this.scroll.init(), window.location.hash && (e = window.location.hash.slice(1, window.location.hash.length), (e = document.getElementById(e)) && this.scroll.scrollTo(e))
                }
            }, {
                key: "update",
                value: function() {
                    this.scroll.update()
                }
            }, {
                key: "start",
                value: function() {
                    this.scroll.startScroll()
                }
            }, {
                key: "stop",
                value: function() {
                    this.scroll.stopScroll()
                }
            }, {
                key: "scrollTo",
                value: function(e, t) {
                    this.scroll.scrollTo(e, t)
                }
            }, {
                key: "setScroll",
                value: function(e, t) {
                    this.scroll.setScroll(e, t)
                }
            }, {
                key: "on",
                value: function(e, t) {
                    this.scroll.setEvents(e, t)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.scroll.unsetEvents(e, t)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.scroll.destroy()
                }
            }]), G);

        function G() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            n(this, G), this.options = e, Object.assign(this, h, e), this.smartphone = h.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = h.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"), this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"), this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"), this.init()
        }
        J.a = e
    }).call(this, t(0))
}, function(i, n, e) {
    (function(e) {
        var t;
        void 0 === (t = "function" == typeof(t = function() {
            return function e(t, i) {
                var x = Object.create(e.prototype),
                    s = 0,
                    E = 0,
                    a = 0,
                    T = 0,
                    l = [],
                    n = !0,
                    o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(e) {
                        return setTimeout(e, 1e3 / 60)
                    },
                    r = null,
                    c = !1;
                try {
                    var u = Object.defineProperty({}, "passive", {
                        get: function() {
                            c = !0
                        }
                    });
                    window.addEventListener("testPassive", null, u), window.removeEventListener("testPassive", null, u)
                } catch (e) {}
                var d = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
                    h = window.transformProp || function() {
                        var e = document.createElement("div");
                        if (null === e.style.transform) {
                            var t, i = ["Webkit", "Moz", "ms"];
                            for (t in i)
                                if (void 0 !== e.style[i[t] + "Transform"]) return i[t] + "Transform"
                        }
                        return "transform"
                    }();
                x.options = {
                    speed: -2,
                    verticalSpeed: null,
                    horizontalSpeed: null,
                    breakpoints: [576, 768, 1201],
                    center: !1,
                    wrapper: null,
                    relativeToWrapper: !1,
                    round: !0,
                    vertical: !0,
                    horizontal: !1,
                    verticalScrollAxis: "y",
                    horizontalScrollAxis: "x",
                    callback: function() {}
                }, i && Object.keys(i).forEach(function(e) {
                    x.options[e] = i[e]
                }), i && i.breakpoints && function() {
                    if (3 === x.options.breakpoints.length && Array.isArray(x.options.breakpoints)) {
                        var t, i = !0,
                            n = !0;
                        if (x.options.breakpoints.forEach(function(e) {
                                "number" != typeof e && (n = !1), null !== t && e < t && (i = !1), t = e
                            }), i && n) return
                    }
                    x.options.breakpoints = [576, 768, 1201], console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")
                }();
                t = "string" == typeof(t = t || ".rellax") ? document.querySelectorAll(t) : [t];
                if (0 < t.length) {
                    if (x.elems = t, x.options.wrapper && !x.options.wrapper.nodeType) {
                        t = document.querySelector(x.options.wrapper);
                        if (!t) return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                        x.options.wrapper = t
                    }
                    var C, p = function e() {
                            for (var t, i = 0; i < l.length; i++) x.elems[i].style.cssText = l[i].style;
                            l = [], E = window.innerHeight, T = window.innerWidth, t = x.options.breakpoints, C = T < t[0] ? "xs" : T >= t[0] && T < t[1] ? "sm" : T >= t[1] && T < t[2] ? "md" : "lg", m(),
                                function() {
                                    for (var e = 0; e < x.elems.length; e++) {
                                        var t = f(x.elems[e]);
                                        l.push(t)
                                    }
                                }(), y(), n && (window.addEventListener("resize", e), n = !1, v())
                        },
                        f = function(e) {
                            var t = e.getAttribute("data-rellax-percentage"),
                                i = e.getAttribute("data-rellax-speed"),
                                n = e.getAttribute("data-rellax-xs-speed"),
                                o = e.getAttribute("data-rellax-mobile-speed"),
                                r = e.getAttribute("data-rellax-tablet-speed"),
                                s = e.getAttribute("data-rellax-desktop-speed"),
                                a = e.getAttribute("data-rellax-vertical-speed"),
                                l = e.getAttribute("data-rellax-horizontal-speed"),
                                c = e.getAttribute("data-rellax-vertical-scroll-axis"),
                                u = e.getAttribute("data-rellax-horizontal-scroll-axis"),
                                d = e.getAttribute("data-rellax-zindex") || 0,
                                h = e.getAttribute("data-rellax-min"),
                                p = e.getAttribute("data-rellax-max"),
                                f = e.getAttribute("data-rellax-min-x"),
                                m = e.getAttribute("data-rellax-max-x"),
                                g = e.getAttribute("data-rellax-min-y"),
                                v = e.getAttribute("data-rellax-max-y"),
                                y = !0;
                            n || o || r || s ? _ = {
                                xs: n,
                                sm: o,
                                md: r,
                                lg: s
                            } : y = !1;
                            var b = x.options.wrapper ? x.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                            x.options.relativeToWrapper && (b = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - x.options.wrapper.offsetTop);
                            var w = x.options.vertical && (t || x.options.center) ? b : 0,
                                n = x.options.horizontal && (t || x.options.center) ? x.options.wrapper ? x.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0,
                                o = w + e.getBoundingClientRect().top,
                                r = e.clientHeight || e.offsetHeight || e.scrollHeight,
                                s = n + e.getBoundingClientRect().left,
                                b = e.clientWidth || e.offsetWidth || e.scrollWidth,
                                w = t || (w - o + E) / (r + E),
                                n = t || (n - s + T) / (b + T);
                            x.options.center && (w = n = .5);
                            var y = y && null !== _[C] ? Number(_[C]) : i || x.options.speed,
                                _ = a || x.options.verticalSpeed,
                                i = l || x.options.horizontalSpeed,
                                a = c || x.options.verticalScrollAxis,
                                l = u || x.options.horizontalScrollAxis,
                                c = S(n, w, y, _, i),
                                u = e.style.cssText,
                                n = "",
                                w = /transform\s*:/i.exec(u);
                            return w && (e = w.index, n = (e = (w = u.slice(e)).indexOf(";")) ? " " + w.slice(11, e).replace(/\s/g, "") : " " + w.slice(11).replace(/\s/g, "")), {
                                baseX: c.x,
                                baseY: c.y,
                                top: o,
                                left: s,
                                height: r,
                                width: b,
                                speed: y,
                                verticalSpeed: _,
                                horizontalSpeed: i,
                                verticalScrollAxis: a,
                                horizontalScrollAxis: l,
                                style: u,
                                transform: n,
                                zindex: d,
                                min: h,
                                max: p,
                                minX: f,
                                maxX: m,
                                minY: g,
                                maxY: v
                            }
                        },
                        m = function() {
                            var e, t = s,
                                i = a;
                            return s = x.options.wrapper ? x.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset, a = x.options.wrapper ? x.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset, x.options.relativeToWrapper && (e = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset, s = e - x.options.wrapper.offsetTop), !(t == s || !x.options.vertical) || !(i == a || !x.options.horizontal)
                        },
                        S = function(e, t, i, n, o) {
                            var r = {},
                                e = (o || i) * (100 * (1 - e)),
                                t = (n || i) * (100 * (1 - t));
                            return r.x = x.options.round ? Math.round(e) : Math.round(100 * e) / 100, r.y = x.options.round ? Math.round(t) : Math.round(100 * t) / 100, r
                        },
                        g = function e() {
                            window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e), (x.options.wrapper || window).removeEventListener("scroll", e), (x.options.wrapper || document).removeEventListener("touchmove", e), r = o(v)
                        },
                        v = function e() {
                            m() && !1 === n ? (y(), r = o(e)) : (r = null, window.addEventListener("resize", g), window.addEventListener("orientationchange", g), (x.options.wrapper || window).addEventListener("scroll", g, !!c && {
                                passive: !0
                            }), (x.options.wrapper || document).addEventListener("touchmove", g, !!c && {
                                passive: !0
                            }))
                        },
                        y = function() {
                            for (var e, t = 0; t < x.elems.length; t++) {
                                var i = l[t].verticalScrollAxis.toLowerCase(),
                                    n = l[t].horizontalScrollAxis.toLowerCase(),
                                    o = -1 != i.indexOf("x") ? s : 0,
                                    r = -1 != i.indexOf("y") ? s : 0,
                                    i = -1 != n.indexOf("x") ? a : 0,
                                    n = (r + (-1 != n.indexOf("y") ? a : 0) - l[t].top + E) / (l[t].height + E),
                                    o = (o + i - l[t].left + T) / (l[t].width + T),
                                    i = (e = S(o, n, l[t].speed, l[t].verticalSpeed, l[t].horizontalSpeed)).y - l[t].baseY,
                                    o = e.x - l[t].baseX;
                                null !== l[t].min && (x.options.vertical && !x.options.horizontal && (i = i <= l[t].min ? l[t].min : i), x.options.horizontal && !x.options.vertical && (o = o <= l[t].min ? l[t].min : o)), null != l[t].minY && (i = i <= l[t].minY ? l[t].minY : i), null != l[t].minX && (o = o <= l[t].minX ? l[t].minX : o), null !== l[t].max && (x.options.vertical && !x.options.horizontal && (i = i >= l[t].max ? l[t].max : i), x.options.horizontal && !x.options.vertical && (o = o >= l[t].max ? l[t].max : o)), null != l[t].maxY && (i = i >= l[t].maxY ? l[t].maxY : i), null != l[t].maxX && (o = o >= l[t].maxX ? l[t].maxX : o);
                                n = l[t].zindex, n = "translate3d(" + (x.options.horizontal ? o : "0") + "px," + (x.options.vertical ? i : "0") + "px," + n + "px) " + l[t].transform;
                                x.elems[t].style[h] = n
                            }
                            x.options.callback(e)
                        };
                    return x.destroy = function() {
                        for (var e = 0; e < x.elems.length; e++) x.elems[e].style.cssText = l[e].style;
                        n || (window.removeEventListener("resize", p), n = !0), d(r), r = null
                    }, p(), x.refresh = p, x
                }
                console.warn("Rellax: The elements you're trying to select don't exist.")
            }
        }) ? t.apply(n, []) : t) || (i.exports = t)
    }).call(this, e(0))
}, function(e, t, i) {
    ! function(e, t, i) {
        function n(e) {
            return e && "object" == _typeof(e) && "default" in e ? e : {
                default: e
            }
        }
        var u = n(t),
            o = n(i);

        function r(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function s(e, t, i) {
            return t && r(e.prototype, t), i && r(e, i), e
        }

        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i, n = arguments[t];
                    for (i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }).apply(this, arguments)
        }
        var d = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
                for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
                return e
            },
            getSelectorFromElement: function(e) {
                var t, i = e.getAttribute("data-target");
                i && "#" !== i || (i = (t = e.getAttribute("href")) && "#" !== t ? t.trim() : "");
                try {
                    return document.querySelector(i) ? i : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(e) {
                if (!e) return 0;
                var t = u.default(e).css("transition-duration"),
                    i = u.default(e).css("transition-delay"),
                    n = parseFloat(t),
                    e = parseFloat(i);
                return n || e ? (t = t.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(i))) : 0
            },
            reflow: function(e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function(e) {
                u.default(e).trigger("transitionend")
            },
            supportsTransitionEnd: function() {
                return Boolean("transitionend")
            },
            isElement: function(e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function(e, t, i) {
                for (var n in i)
                    if (Object.prototype.hasOwnProperty.call(i, n)) {
                        var o = i[n],
                            r = t[n],
                            r = r && d.isElement(r) ? "element" : null == r ? "" + r : {}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();
                        if (!new RegExp(o).test(r)) throw new Error(e.toUpperCase() + ': Option "' + n + '" provided type "' + r + '" but expected type "' + o + '".')
                    }
            },
            findShadowRoot: function(e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? d.findShadowRoot(e.parentNode) : null;
                e = e.getRootNode();
                return e instanceof ShadowRoot ? e : null
            },
            jQueryDetection: function() {
                if (void 0 === u.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = u.default.fn.jquery.split(" ")[0].split(".");
                if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }
        };
        d.jQueryDetection(), u.default.fn.emulateTransitionEnd = function(e) {
            var t = this,
                i = !1;
            return u.default(this).one(d.TRANSITION_END, function() {
                i = !0
            }), setTimeout(function() {
                i || d.triggerTransitionEnd(t)
            }, e), this
        }, u.default.event.special[d.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function(e) {
                if (u.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        };
        var l = "alert",
            c = u.default.fn[l],
            h = ((i = p.prototype).close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, i.dispose = function() {
                u.default.removeData(this._element, "bs.alert"), this._element = null
            }, i._getRootElement = function(e) {
                var t = d.getSelectorFromElement(e),
                    i = !1;
                return i = (i = t ? document.querySelector(t) : i) || u.default(e).closest(".alert")[0]
            }, i._triggerCloseEvent = function(e) {
                var t = u.default.Event("close.bs.alert");
                return u.default(e).trigger(t), t
            }, i._removeElement = function(t) {
                var e, i = this;
                u.default(t).removeClass("show"), u.default(t).hasClass("fade") ? (e = d.getTransitionDurationFromElement(t), u.default(t).one(d.TRANSITION_END, function(e) {
                    return i._destroyElement(t, e)
                }).emulateTransitionEnd(e)) : this._destroyElement(t)
            }, i._destroyElement = function(e) {
                u.default(e).detach().trigger("closed.bs.alert").remove()
            }, p._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = u.default(this),
                        t = e.data("bs.alert");
                    t || (t = new p(this), e.data("bs.alert", t)), "close" === i && t[i](this)
                })
            }, p._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, s(p, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }]), p);

        function p(e) {
            this._element = e
        }
        u.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', h._handleDismiss(new h)), u.default.fn[l] = h._jQueryInterface, u.default.fn[l].Constructor = h, u.default.fn[l].noConflict = function() {
            return u.default.fn[l] = c, h._jQueryInterface
        };
        var f = u.default.fn.button,
            m = ((i = g.prototype).toggle = function() {
                var e, t = !0,
                    i = !0,
                    n = u.default(this._element).closest('[data-toggle="buttons"]')[0];
                !n || (e = this._element.querySelector('input:not([type="hidden"])')) && ("radio" === e.type && (e.checked && this._element.classList.contains("active") ? t = !1 : (n = n.querySelector(".active")) && u.default(n).removeClass("active")), t && ("checkbox" !== e.type && "radio" !== e.type || (e.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || u.default(e).trigger("change")), e.focus(), i = !1), this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (i && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && u.default(this._element).toggleClass("active"))
            }, i.dispose = function() {
                u.default.removeData(this._element, "bs.button"), this._element = null
            }, g._jQueryInterface = function(i, n) {
                return this.each(function() {
                    var e = u.default(this),
                        t = e.data("bs.button");
                    t || (t = new g(this), e.data("bs.button", t)), t.shouldAvoidTriggerChange = n, "toggle" === i && t[i]()
                })
            }, s(g, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }]), g);

        function g(e) {
            this._element = e, this.shouldAvoidTriggerChange = !1
        }
        u.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
            var t, i = e.target,
                n = i;
            !(i = !u.default(i).hasClass("btn") ? u.default(i).closest(".btn")[0] : i) || i.hasAttribute("disabled") || i.classList.contains("disabled") || (t = i.querySelector('input:not([type="hidden"])')) && (t.hasAttribute("disabled") || t.classList.contains("disabled")) ? e.preventDefault() : "INPUT" !== n.tagName && "LABEL" === i.tagName || m._jQueryInterface.call(u.default(i), "toggle", "INPUT" === n.tagName)
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
            var t = u.default(e.target).closest(".btn")[0];
            u.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
        }), u.default(window).on("load.bs.button.data-api", function() {
            for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, i = e.length; t < i; t++) {
                var n = e[t],
                    o = n.querySelector('input:not([type="hidden"])');
                o.checked || o.hasAttribute("checked") ? n.classList.add("active") : n.classList.remove("active")
            }
            for (var r = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < s; r++) {
                var a = e[r];
                "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
            }
        }), u.default.fn.button = m._jQueryInterface, u.default.fn.button.Constructor = m, u.default.fn.button.noConflict = function() {
            return u.default.fn.button = f, m._jQueryInterface
        };
        var v = "carousel",
            y = u.default.fn[v],
            b = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0
            },
            w = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            },
            _ = {
                TOUCH: "touch",
                PEN: "pen"
            },
            x = ((i = E.prototype).next = function() {
                this._isSliding || this._slide("next")
            }, i.nextWhenVisible = function() {
                var e = u.default(this._element);
                !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
            }, i.prev = function() {
                this._isSliding || this._slide("prev")
            }, i.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (d.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, i.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, i.to = function(e) {
                var t = this;
                this._activeElement = this._element.querySelector(".active.carousel-item");
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) u.default(this._element).one("slid.bs.carousel", function() {
                        return t.to(e)
                    });
                    else {
                        if (i === e) return this.pause(), void this.cycle();
                        i = i < e ? "next" : "prev";
                        this._slide(i, this._items[e])
                    }
            }, i.dispose = function() {
                u.default(this._element).off(".bs.carousel"), u.default.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, i._getConfig = function(e) {
                return e = a({}, b, e), d.typeCheckConfig(v, e, w), e
            }, i._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                e <= 40 || (e = e / this.touchDeltaX, (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next())
            }, i._addEventListeners = function() {
                var t = this;
                this._config.keyboard && u.default(this._element).on("keydown.bs.carousel", function(e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && u.default(this._element).on("mouseenter.bs.carousel", function(e) {
                    return t.pause(e)
                }).on("mouseleave.bs.carousel", function(e) {
                    return t.cycle(e)
                }), this._config.touch && this._addTouchEventListeners()
            }, i._addTouchEventListeners = function() {
                var e, t, i = this;
                this._touchSupported && (e = function(e) {
                    i._pointerEvent && _[e.originalEvent.pointerType.toUpperCase()] ? i.touchStartX = e.originalEvent.clientX : i._pointerEvent || (i.touchStartX = e.originalEvent.touches[0].clientX)
                }, t = function(e) {
                    i._pointerEvent && _[e.originalEvent.pointerType.toUpperCase()] && (i.touchDeltaX = e.originalEvent.clientX - i.touchStartX), i._handleSwipe(), "hover" === i._config.pause && (i.pause(), i.touchTimeout && clearTimeout(i.touchTimeout), i.touchTimeout = setTimeout(function(e) {
                        return i.cycle(e)
                    }, 500 + i._config.interval))
                }, u.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(e) {
                    return e.preventDefault()
                }), this._pointerEvent ? (u.default(this._element).on("pointerdown.bs.carousel", e), u.default(this._element).on("pointerup.bs.carousel", t), this._element.classList.add("pointer-event")) : (u.default(this._element).on("touchstart.bs.carousel", e), u.default(this._element).on("touchmove.bs.carousel", function(e) {
                    (e = e).originalEvent.touches && 1 < e.originalEvent.touches.length ? i.touchDeltaX = 0 : i.touchDeltaX = e.originalEvent.touches[0].clientX - i.touchStartX
                }), u.default(this._element).on("touchend.bs.carousel", t)))
            }, i._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, i._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, i._getItemByDirection = function(e, t) {
                var i = "next" === e,
                    n = "prev" === e,
                    o = this._getItemIndex(t),
                    r = this._items.length - 1;
                if ((n && 0 === o || i && o === r) && !this._config.wrap) return t;
                e = (o + ("prev" === e ? -1 : 1)) % this._items.length;
                return -1 == e ? this._items[this._items.length - 1] : this._items[e]
            }, i._triggerSlideEvent = function(e, t) {
                var i = this._getItemIndex(e),
                    n = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                    i = u.default.Event("slide.bs.carousel", {
                        relatedTarget: e,
                        direction: t,
                        from: n,
                        to: i
                    });
                return u.default(this._element).trigger(i), i
            }, i._setActiveIndicatorElement = function(e) {
                var t;
                this._indicatorsElement && (t = [].slice.call(this._indicatorsElement.querySelectorAll(".active")), u.default(t).removeClass("active"), (e = this._indicatorsElement.children[this._getItemIndex(e)]) && u.default(e).addClass("active"))
            }, i._updateInterval = function() {
                var e = this._activeElement || this._element.querySelector(".active.carousel-item");
                e && ((e = parseInt(e.getAttribute("data-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval)
            }, i._slide = function(e, t) {
                var i, n, o, r = this,
                    s = this._element.querySelector(".active.carousel-item"),
                    a = this._getItemIndex(s),
                    l = t || s && this._getItemByDirection(e, s),
                    c = this._getItemIndex(l),
                    t = Boolean(this._interval),
                    e = "next" === e ? (i = "carousel-item-left", n = "carousel-item-next", "left") : (i = "carousel-item-right", n = "carousel-item-prev", "right");
                l && u.default(l).hasClass("active") ? this._isSliding = !1 : !this._triggerSlideEvent(l, e).isDefaultPrevented() && s && l && (this._isSliding = !0, t && this.pause(), this._setActiveIndicatorElement(l), this._activeElement = l, o = u.default.Event("slid.bs.carousel", {
                    relatedTarget: l,
                    direction: e,
                    from: a,
                    to: c
                }), u.default(this._element).hasClass("slide") ? (u.default(l).addClass(n), d.reflow(l), u.default(s).addClass(i), u.default(l).addClass(i), c = d.getTransitionDurationFromElement(s), u.default(s).one(d.TRANSITION_END, function() {
                    u.default(l).removeClass(i + " " + n).addClass("active"), u.default(s).removeClass("active " + n + " " + i), r._isSliding = !1, setTimeout(function() {
                        return u.default(r._element).trigger(o)
                    }, 0)
                }).emulateTransitionEnd(c)) : (u.default(s).removeClass("active"), u.default(l).addClass("active"), this._isSliding = !1, u.default(this._element).trigger(o)), t && this.cycle())
            }, E._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = u.default(this).data("bs.carousel"),
                        t = a({}, b, u.default(this).data());
                    "object" == _typeof(n) && (t = a({}, t, n));
                    var i = "string" == typeof n ? n : t.slide;
                    if (e || (e = new E(this, t), u.default(this).data("bs.carousel", e)), "number" == typeof n) e.to(n);
                    else if ("string" == typeof i) {
                        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    } else t.interval && t.ride && (e.pause(), e.cycle())
                })
            }, E._dataApiClickHandler = function(e) {
                var t, i, n = d.getSelectorFromElement(this);
                !n || (t = u.default(n)[0]) && u.default(t).hasClass("carousel") && (i = a({}, u.default(t).data(), u.default(this).data()), (n = this.getAttribute("data-slide-to")) && (i.interval = !1), E._jQueryInterface.call(u.default(t), i), n && u.default(t).data("bs.carousel").to(n), e.preventDefault())
            }, s(E, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return b
                }
            }]), E);

        function E(e, t) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
        }
        u.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", x._dataApiClickHandler), u.default(window).on("load.bs.carousel.data-api", function() {
            for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, i = e.length; t < i; t++) {
                var n = u.default(e[t]);
                x._jQueryInterface.call(n, n.data())
            }
        }), u.default.fn[v] = x._jQueryInterface, u.default.fn[v].Constructor = x, u.default.fn[v].noConflict = function() {
            return u.default.fn[v] = y, x._jQueryInterface
        };
        var T = "collapse",
            C = u.default.fn[T],
            S = {
                toggle: !0,
                parent: ""
            },
            k = {
                toggle: "boolean",
                parent: "(string|element)"
            },
            A = ((i = D.prototype).toggle = function() {
                u.default(this._element).hasClass("show") ? this.hide() : this.show()
            }, i.show = function() {
                var e, t, i, n, o = this;
                this._isTransitioning || u.default(this._element).hasClass("show") || (n = this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                    return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains("collapse")
                })).length ? null : n) && (i = u.default(n).not(this._selector).data("bs.collapse")) && i._isTransitioning || (e = u.default.Event("show.bs.collapse"), u.default(this._element).trigger(e), e.isDefaultPrevented() || (n && (D._jQueryInterface.call(u.default(n).not(this._selector), "hide"), i || u.default(n).data("bs.collapse", null)), t = this._getDimension(), u.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[t] = 0, this._triggerArray.length && u.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0), i = "scroll" + (t[0].toUpperCase() + t.slice(1)), n = d.getTransitionDurationFromElement(this._element), u.default(this._element).one(d.TRANSITION_END, function() {
                    u.default(o._element).removeClass("collapsing").addClass("collapse show"), o._element.style[t] = "", o.setTransitioning(!1), u.default(o._element).trigger("shown.bs.collapse")
                }).emulateTransitionEnd(n), this._element.style[t] = this._element[i] + "px"))
            }, i.hide = function() {
                var e = this;
                if (!this._isTransitioning && u.default(this._element).hasClass("show")) {
                    var t = u.default.Event("hide.bs.collapse");
                    if (u.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                        t = this._getDimension();
                        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", d.reflow(this._element), u.default(this._element).addClass("collapsing").removeClass("collapse show");
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var n = 0; n < i; n++) {
                                var o = this._triggerArray[n],
                                    r = d.getSelectorFromElement(o);
                                null !== r && (u.default([].slice.call(document.querySelectorAll(r))).hasClass("show") || u.default(o).addClass("collapsed").attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[t] = "";
                        t = d.getTransitionDurationFromElement(this._element);
                        u.default(this._element).one(d.TRANSITION_END, function() {
                            e.setTransitioning(!1), u.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        }).emulateTransitionEnd(t)
                    }
                }
            }, i.setTransitioning = function(e) {
                this._isTransitioning = e
            }, i.dispose = function() {
                u.default.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, i._getConfig = function(e) {
                return (e = a({}, S, e)).toggle = Boolean(e.toggle), d.typeCheckConfig(T, e, k), e
            }, i._getDimension = function() {
                return u.default(this._element).hasClass("width") ? "width" : "height"
            }, i._getParent = function() {
                var e, i = this;
                d.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    t = [].slice.call(e.querySelectorAll(t));
                return u.default(t).each(function(e, t) {
                    i._addAriaAndCollapsedClass(D._getTargetFromElement(t), [t])
                }), e
            }, i._addAriaAndCollapsedClass = function(e, t) {
                e = u.default(e).hasClass("show");
                t.length && u.default(t).toggleClass("collapsed", !e).attr("aria-expanded", e)
            }, D._getTargetFromElement = function(e) {
                e = d.getSelectorFromElement(e);
                return e ? document.querySelector(e) : null
            }, D._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = u.default(this),
                        t = e.data("bs.collapse"),
                        i = a({}, S, e.data(), "object" == _typeof(n) && n ? n : {});
                    if (!t && i.toggle && "string" == typeof n && /show|hide/.test(n) && (i.toggle = !1), t || (t = new D(this, i), e.data("bs.collapse", t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(D, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return S
                }
            }]), D);

        function D(t, e) {
            this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var i = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), n = 0, o = i.length; n < o; n++) {
                var r = i[n],
                    s = d.getSelectorFromElement(r),
                    a = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                        return e === t
                    });
                null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }
        u.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = u.default(this),
                e = d.getSelectorFromElement(this),
                e = [].slice.call(document.querySelectorAll(e));
            u.default(e).each(function() {
                var e = u.default(this),
                    t = e.data("bs.collapse") ? "toggle" : i.data();
                A._jQueryInterface.call(e, t)
            })
        }), u.default.fn[T] = A._jQueryInterface, u.default.fn[T].Constructor = A, u.default.fn[T].noConflict = function() {
            return u.default.fn[T] = C, A._jQueryInterface
        };
        var L = "dropdown",
            O = u.default.fn[L],
            j = new RegExp("38|40|27"),
            M = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null
            },
            N = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string",
                popperConfig: "(null|object)"
            },
            I = ((i = q.prototype).toggle = function() {
                var e;
                this._element.disabled || u.default(this._element).hasClass("disabled") || (e = u.default(this._menu).hasClass("show"), q._clearMenus(), e || this.show(!0))
            }, i.show = function(e) {
                if (void 0 === e && (e = !1), !(this._element.disabled || u.default(this._element).hasClass("disabled") || u.default(this._menu).hasClass("show"))) {
                    var t = {
                            relatedTarget: this._element
                        },
                        i = u.default.Event("show.bs.dropdown", t),
                        n = q._getParentFromElement(this._element);
                    if (u.default(n).trigger(i), !i.isDefaultPrevented()) {
                        if (!this._inNavbar && e) {
                            if (void 0 === o.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            e = this._element;
                            "parent" === this._config.reference ? e = n : d.isElement(this._config.reference) && (e = this._config.reference, void 0 !== this._config.reference.jquery && (e = this._config.reference[0])), "scrollParent" !== this._config.boundary && u.default(n).addClass("position-static"), this._popper = new o.default(e, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === u.default(n).closest(".navbar-nav").length && u.default(document.body).children().on("mouseover", null, u.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), u.default(this._menu).toggleClass("show"), u.default(n).toggleClass("show").trigger(u.default.Event("shown.bs.dropdown", t))
                    }
                }
            }, i.hide = function() {
                var e, t, i;
                this._element.disabled || u.default(this._element).hasClass("disabled") || !u.default(this._menu).hasClass("show") || (e = {
                    relatedTarget: this._element
                }, t = u.default.Event("hide.bs.dropdown", e), i = q._getParentFromElement(this._element), u.default(i).trigger(t), t.isDefaultPrevented() || (this._popper && this._popper.destroy(), u.default(this._menu).toggleClass("show"), u.default(i).toggleClass("show").trigger(u.default.Event("hidden.bs.dropdown", e))))
            }, i.dispose = function() {
                u.default.removeData(this._element, "bs.dropdown"), u.default(this._element).off(".bs.dropdown"), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, i.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, i._addEventListeners = function() {
                var t = this;
                u.default(this._element).on("click.bs.dropdown", function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, i._getConfig = function(e) {
                return e = a({}, this.constructor.Default, u.default(this._element).data(), e), d.typeCheckConfig(L, e, this.constructor.DefaultType), e
            }, i._getMenuElement = function() {
                var e;
                return this._menu || (e = q._getParentFromElement(this._element)) && (this._menu = e.querySelector(".dropdown-menu")), this._menu
            }, i._getPlacement = function() {
                var e = u.default(this._element.parentNode),
                    t = "bottom-start";
                return e.hasClass("dropup") ? t = u.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : u.default(this._menu).hasClass("dropdown-menu-right") && (t = "bottom-end"), t
            }, i._detectNavbar = function() {
                return 0 < u.default(this._element).closest(".navbar").length
            }, i._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = a({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e
                } : e.offset = this._config.offset, e
            }, i._getPopperConfig = function() {
                var e = {
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
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), a({}, e, this._config.popperConfig)
            }, q._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = u.default(this).data("bs.dropdown");
                    if (e || (e = new q(this, "object" == _typeof(t) ? t : null), u.default(this).data("bs.dropdown", e)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, q._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var t = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), i = 0, n = t.length; i < n; i++) {
                        var o, r, s = q._getParentFromElement(t[i]),
                            a = u.default(t[i]).data("bs.dropdown"),
                            l = {
                                relatedTarget: t[i]
                            };
                        e && "click" === e.type && (l.clickEvent = e), a && (o = a._menu, !u.default(s).hasClass("show") || e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && u.default.contains(s, e.target) || (r = u.default.Event("hide.bs.dropdown", l), u.default(s).trigger(r), r.isDefaultPrevented() || ("ontouchstart" in document.documentElement && u.default(document.body).children().off("mouseover", null, u.default.noop), t[i].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), u.default(o).removeClass("show"), u.default(s).removeClass("show").trigger(u.default.Event("hidden.bs.dropdown", l)))))
                    }
            }, q._getParentFromElement = function(e) {
                var t, i = d.getSelectorFromElement(e);
                return (t = i ? document.querySelector(i) : t) || e.parentNode
            }, q._dataApiKeydownHandler = function(e) {
                if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || u.default(e.target).closest(".dropdown-menu").length) : !j.test(e.which)) && !this.disabled && !u.default(this).hasClass("disabled")) {
                    var t = q._getParentFromElement(this),
                        i = u.default(t).hasClass("show");
                    if (i || 27 !== e.which) {
                        if (e.preventDefault(), e.stopPropagation(), !i || 27 === e.which || 32 === e.which) return 27 === e.which && u.default(t.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void u.default(this).trigger("click");
                        i = [].slice.call(t.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e) {
                            return u.default(e).is(":visible")
                        });
                        0 !== i.length && (t = i.indexOf(e.target), 38 === e.which && 0 < t && t--, 40 === e.which && t < i.length - 1 && t++, i[t = t < 0 ? 0 : t].focus())
                    }
                }
            }, s(q, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return M
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return N
                }
            }]), q);

        function q(e, t) {
            this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
        }
        u.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', I._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", I._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", I._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function(e) {
            e.preventDefault(), e.stopPropagation(), I._jQueryInterface.call(u.default(this), "toggle")
        }).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation()
        }), u.default.fn[L] = I._jQueryInterface, u.default.fn[L].Constructor = I, u.default.fn[L].noConflict = function() {
            return u.default.fn[L] = O, I._jQueryInterface
        };
        var H = u.default.fn.modal,
            P = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            },
            R = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            },
            z = ((i = $.prototype).toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, i.show = function(e) {
                var t, i = this;
                this._isShown || this._isTransitioning || (u.default(this._element).hasClass("fade") && (this._isTransitioning = !0), t = u.default.Event("show.bs.modal", {
                    relatedTarget: e
                }), u.default(this._element).trigger(t), this._isShown || t.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), u.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function(e) {
                    return i.hide(e)
                }), u.default(this._dialog).on("mousedown.dismiss.bs.modal", function() {
                    u.default(i._element).one("mouseup.dismiss.bs.modal", function(e) {
                        u.default(e.target).is(i._element) && (i._ignoreBackdropClick = !0)
                    })
                }), this._showBackdrop(function() {
                    return i._showElement(e)
                })))
            }, i.hide = function(e) {
                var t = this;
                e && e.preventDefault(), this._isShown && !this._isTransitioning && (e = u.default.Event("hide.bs.modal"), u.default(this._element).trigger(e), this._isShown && !e.isDefaultPrevented() && (this._isShown = !1, (e = u.default(this._element).hasClass("fade")) && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), u.default(document).off("focusin.bs.modal"), u.default(this._element).removeClass("show"), u.default(this._element).off("click.dismiss.bs.modal"), u.default(this._dialog).off("mousedown.dismiss.bs.modal"), e ? (e = d.getTransitionDurationFromElement(this._element), u.default(this._element).one(d.TRANSITION_END, function(e) {
                    return t._hideModal(e)
                }).emulateTransitionEnd(e)) : this._hideModal()))
            }, i.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return u.default(e).off(".bs.modal")
                }), u.default(document).off("focusin.bs.modal"), u.default.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, i.handleUpdate = function() {
                this._adjustDialog()
            }, i._getConfig = function(e) {
                return e = a({}, P, e), d.typeCheckConfig("modal", e, R), e
            }, i._triggerBackdropTransition = function() {
                var e, t, i = this,
                    n = u.default.Event("hidePrevented.bs.modal");
                u.default(this._element).trigger(n), n.isDefaultPrevented() || ((e = this._element.scrollHeight > document.documentElement.clientHeight) || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static"), t = d.getTransitionDurationFromElement(this._dialog), u.default(this._element).off(d.TRANSITION_END), u.default(this._element).one(d.TRANSITION_END, function() {
                    i._element.classList.remove("modal-static"), e || u.default(i._element).one(d.TRANSITION_END, function() {
                        i._element.style.overflowY = ""
                    }).emulateTransitionEnd(i._element, t)
                }).emulateTransitionEnd(t), this._element.focus())
            }, i._showElement = function(e) {
                var t = this,
                    i = u.default(this._element).hasClass("fade"),
                    n = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), u.default(this._dialog).hasClass("modal-dialog-scrollable") && n ? n.scrollTop = 0 : this._element.scrollTop = 0, i && d.reflow(this._element), u.default(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                var o = u.default.Event("shown.bs.modal", {
                        relatedTarget: e
                    }),
                    e = function() {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, u.default(t._element).trigger(o)
                    };
                i ? (i = d.getTransitionDurationFromElement(this._dialog), u.default(this._dialog).one(d.TRANSITION_END, e).emulateTransitionEnd(i)) : e()
            }, i._enforceFocus = function() {
                var t = this;
                u.default(document).off("focusin.bs.modal").on("focusin.bs.modal", function(e) {
                    document !== e.target && t._element !== e.target && 0 === u.default(t._element).has(e.target).length && t._element.focus()
                })
            }, i._setEscapeEvent = function() {
                var t = this;
                this._isShown ? u.default(this._element).on("keydown.dismiss.bs.modal", function(e) {
                    t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition()
                }) : this._isShown || u.default(this._element).off("keydown.dismiss.bs.modal")
            }, i._setResizeEvent = function() {
                var t = this;
                this._isShown ? u.default(window).on("resize.bs.modal", function(e) {
                    return t.handleUpdate(e)
                }) : u.default(window).off("resize.bs.modal")
            }, i._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function() {
                    u.default(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), u.default(e._element).trigger("hidden.bs.modal")
                })
            }, i._removeBackdrop = function() {
                this._backdrop && (u.default(this._backdrop).remove(), this._backdrop = null)
            }, i._showBackdrop = function(e) {
                var t, i = this,
                    n = u.default(this._element).hasClass("fade") ? "fade" : "";
                this._isShown && this._config.backdrop ? (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), u.default(this._backdrop).appendTo(document.body), u.default(this._element).on("click.dismiss.bs.modal", function(e) {
                    i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === i._config.backdrop ? i._triggerBackdropTransition() : i.hide())
                }), n && d.reflow(this._backdrop), u.default(this._backdrop).addClass("show"), e && (n ? (t = d.getTransitionDurationFromElement(this._backdrop), u.default(this._backdrop).one(d.TRANSITION_END, e).emulateTransitionEnd(t)) : e())) : !this._isShown && this._backdrop ? (u.default(this._backdrop).removeClass("show"), n = function() {
                    i._removeBackdrop(), e && e()
                }, u.default(this._element).hasClass("fade") ? (t = d.getTransitionDurationFromElement(this._backdrop), u.default(this._backdrop).one(d.TRANSITION_END, n).emulateTransitionEnd(t)) : n()) : e && e()
            }, i._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, i._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, i._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, i._setScrollbar = function() {
                var e, t, o = this;
                this._isBodyOverflowing && (e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")), t = [].slice.call(document.querySelectorAll(".sticky-top")), u.default(e).each(function(e, t) {
                    var i = t.style.paddingRight,
                        n = u.default(t).css("padding-right");
                    u.default(t).data("padding-right", i).css("padding-right", parseFloat(n) + o._scrollbarWidth + "px")
                }), u.default(t).each(function(e, t) {
                    var i = t.style.marginRight,
                        n = u.default(t).css("margin-right");
                    u.default(t).data("margin-right", i).css("margin-right", parseFloat(n) - o._scrollbarWidth + "px")
                }), e = document.body.style.paddingRight, t = u.default(document.body).css("padding-right"), u.default(document.body).data("padding-right", e).css("padding-right", parseFloat(t) + this._scrollbarWidth + "px")), u.default(document.body).addClass("modal-open")
            }, i._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                u.default(e).each(function(e, t) {
                    var i = u.default(t).data("padding-right");
                    u.default(t).removeData("padding-right"), t.style.paddingRight = i || ""
                });
                e = [].slice.call(document.querySelectorAll(".sticky-top"));
                u.default(e).each(function(e, t) {
                    var i = u.default(t).data("margin-right");
                    void 0 !== i && u.default(t).css("margin-right", i).removeData("margin-right")
                });
                e = u.default(document.body).data("padding-right");
                u.default(document.body).removeData("padding-right"), document.body.style.paddingRight = e || ""
            }, i._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, $._jQueryInterface = function(i, n) {
                return this.each(function() {
                    var e = u.default(this).data("bs.modal"),
                        t = a({}, P, u.default(this).data(), "object" == _typeof(i) && i ? i : {});
                    if (e || (e = new $(this, t), u.default(this).data("bs.modal", e)), "string" == typeof i) {
                        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i](n)
                    } else t.show && e.show(n)
                })
            }, s($, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return P
                }
            }]), $);

        function $(e, t) {
            this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
        }
        u.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
            var t, i = this,
                n = d.getSelectorFromElement(this);
            n && (t = document.querySelector(n));
            n = u.default(t).data("bs.modal") ? "toggle" : a({}, u.default(t).data(), u.default(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var o = u.default(t).one("show.bs.modal", function(e) {
                e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                    u.default(i).is(":visible") && i.focus()
                })
            });
            z._jQueryInterface.call(u.default(t), n, this)
        }), u.default.fn.modal = z._jQueryInterface, u.default.fn.modal.Constructor = z, u.default.fn.modal.noConflict = function() {
            return u.default.fn.modal = H, z._jQueryInterface
        };
        var B = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            F = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
            W = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

        function Y(e, o, t) {
            if (0 === e.length) return e;
            if (t && "function" == typeof t) return t(e);
            for (var e = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(o), s = [].slice.call(e.body.querySelectorAll("*")), i = 0, n = s.length; i < n; i++) ! function(e) {
                var t = s[e],
                    i = t.nodeName.toLowerCase();
                if (-1 === r.indexOf(t.nodeName.toLowerCase())) return t.parentNode.removeChild(t);
                var e = [].slice.call(t.attributes),
                    n = [].concat(o["*"] || [], o[i] || []);
                e.forEach(function(e) {
                    ! function(e, t) {
                        var i = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(i)) return -1 === B.indexOf(i) || Boolean(e.nodeValue.match(F) || e.nodeValue.match(W));
                        for (var n = t.filter(function(e) {
                                return e instanceof RegExp
                            }), o = 0, r = n.length; o < r; o++)
                            if (i.match(n[o])) return 1
                    }(e, n) && t.removeAttribute(e.nodeName)
                })
            }(i);
            return e.body.innerHTML
        }
        var X = "tooltip",
            V = u.default.fn[X],
            U = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            Q = ["sanitize", "whiteList", "sanitizeFn"],
            K = {
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
                customClass: "(string|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)"
            },
            G = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            },
            J = {
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
                customClass: "",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: {
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
                    img: ["src", "srcset", "alt", "title", "width", "height"],
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
                popperConfig: null
            },
            Z = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip"
            },
            ee = ((i = te.prototype).enable = function() {
                this._isEnabled = !0
            }, i.disable = function() {
                this._isEnabled = !1
            }, i.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, i.toggle = function(e) {
                var t, i;
                this._isEnabled && (e ? (t = this.constructor.DATA_KEY, (i = u.default(e.currentTarget).data(t)) || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), u.default(e.currentTarget).data(t, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)) : u.default(this.getTipElement()).hasClass("show") ? this._leave(null, this) : this._enter(null, this))
            }, i.dispose = function() {
                clearTimeout(this._timeout), u.default.removeData(this.element, this.constructor.DATA_KEY), u.default(this.element).off(this.constructor.EVENT_KEY), u.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && u.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, i.show = function() {
                var t = this;
                if ("none" === u.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e, i, n = u.default.Event(this.constructor.Event.SHOW);
                this.isWithContent() && this._isEnabled && (u.default(this.element).trigger(n), i = d.findShadowRoot(this.element), e = u.default.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element), !n.isDefaultPrevented() && e && (i = this.getTipElement(), n = d.getUID(this.constructor.NAME), i.setAttribute("id", n), this.element.setAttribute("aria-describedby", n), this.setContent(), this.config.animation && u.default(i).addClass("fade"), e = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement, n = this._getAttachment(e), this.addAttachmentClass(n), e = this._getContainer(), u.default(i).data(this.constructor.DATA_KEY, this), u.default.contains(this.element.ownerDocument.documentElement, this.tip) || u.default(i).appendTo(e), u.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new o.default(this.element, i, this._getPopperConfig(n)), u.default(i).addClass("show"), u.default(i).addClass(this.config.customClass), "ontouchstart" in document.documentElement && u.default(document.body).children().on("mouseover", null, u.default.noop), n = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null, u.default(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                }, u.default(this.tip).hasClass("fade") ? (i = d.getTransitionDurationFromElement(this.tip), u.default(this.tip).one(d.TRANSITION_END, n).emulateTransitionEnd(i)) : n()))
            }, i.hide = function(e) {
                function t() {
                    "show" !== i._hoverState && n.parentNode && n.parentNode.removeChild(n), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), u.default(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), e && e()
                }
                var i = this,
                    n = this.getTipElement(),
                    o = u.default.Event(this.constructor.Event.HIDE);
                u.default(this.element).trigger(o), o.isDefaultPrevented() || (u.default(n).removeClass("show"), "ontouchstart" in document.documentElement && u.default(document.body).children().off("mouseover", null, u.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, u.default(this.tip).hasClass("fade") ? (o = d.getTransitionDurationFromElement(n), u.default(n).one(d.TRANSITION_END, t).emulateTransitionEnd(o)) : t(), this._hoverState = "")
            }, i.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, i.isWithContent = function() {
                return Boolean(this.getTitle())
            }, i.addAttachmentClass = function(e) {
                u.default(this.getTipElement()).addClass("bs-tooltip-" + e)
            }, i.getTipElement = function() {
                return this.tip = this.tip || u.default(this.config.template)[0], this.tip
            }, i.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(u.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), u.default(e).removeClass("fade show")
            }, i.setElementContent = function(e, t) {
                "object" != _typeof(t) || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = Y(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? u.default(t).parent().is(e) || e.empty().append(t) : e.text(u.default(t).text())
            }, i.getTitle = function() {
                return this.element.getAttribute("data-original-title") || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
            }, i._getPopperConfig = function(e) {
                var t = this;
                return a({}, {
                    placement: e,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        return t._handlePopperPlacementChange(e)
                    }
                }, this.config.popperConfig)
            }, i._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function(e) {
                    return e.offsets = a({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e
                } : e.offset = this.config.offset, e
            }, i._getContainer = function() {
                return !1 === this.config.container ? document.body : d.isElement(this.config.container) ? u.default(this.config.container) : u.default(document).find(this.config.container)
            }, i._getAttachment = function(e) {
                return G[e.toUpperCase()]
            }, i._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(e) {
                    var t;
                    "click" === e ? u.default(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                        return i.toggle(e)
                    }) : "manual" !== e && (t = "hover" === e ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, e = "hover" === e ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT, u.default(i.element).on(t, i.config.selector, function(e) {
                        return i._enter(e)
                    }).on(e, i.config.selector, function(e) {
                        return i._leave(e)
                    }))
                }), this._hideModalHandler = function() {
                    i.element && i.hide()
                }, u.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, i._fixTitle = function() {
                var e = _typeof(this.element.getAttribute("data-original-title"));
                !this.element.getAttribute("title") && "string" === e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, i._enter = function(e, t) {
                var i = this.constructor.DATA_KEY;
                (t = t || u.default(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), u.default(e.currentTarget).data(i, t)), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), u.default(t.getTipElement()).hasClass("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                    "show" === t._hoverState && t.show()
                }, t.config.delay.show) : t.show())
            }, i._leave = function(e, t) {
                var i = this.constructor.DATA_KEY;
                (t = t || u.default(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), u.default(e.currentTarget).data(i, t)), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                    "out" === t._hoverState && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, i._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, i._getConfig = function(e) {
                var t = u.default(this.element).data();
                return Object.keys(t).forEach(function(e) {
                    -1 !== Q.indexOf(e) && delete t[e]
                }), "number" == typeof(e = a({}, this.constructor.Default, t, "object" == _typeof(e) && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), d.typeCheckConfig(X, e, this.constructor.DefaultType), e.sanitize && (e.template = Y(e.template, e.whiteList, e.sanitizeFn)), e
            }, i._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, i._cleanTipClass = function() {
                var e = u.default(this.getTipElement()),
                    t = e.attr("class").match(U);
                null !== t && t.length && e.removeClass(t.join(""))
            }, i._handlePopperPlacementChange = function(e) {
                this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, i._fixTransition = function() {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (u.default(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, te._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = u.default(this),
                        t = e.data("bs.tooltip"),
                        i = "object" == _typeof(n) && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new te(this, i), e.data("bs.tooltip", t)), "string" == typeof n)) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(te, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return J
                }
            }, {
                key: "NAME",
                get: function() {
                    return X
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return Z
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return K
                }
            }]), te);

        function te(e, t) {
            if (void 0 === o.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
        }
        u.default.fn[X] = ee._jQueryInterface, u.default.fn[X].Constructor = ee, u.default.fn[X].noConflict = function() {
            return u.default.fn[X] = V, ee._jQueryInterface
        };
        var ie = "popover",
            ne = u.default.fn[ie],
            oe = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            re = a({}, ee.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            se = a({}, ee.DefaultType, {
                content: "(string|element|function)"
            }),
            ae = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover"
            },
            le = function(e) {
                var t;

                function n() {
                    return e.apply(this, arguments) || this
                }
                i = e, (t = n).prototype = Object.create(i.prototype), (t.prototype.constructor = t).__proto__ = i;
                var i = n.prototype;
                return i.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }, i.addAttachmentClass = function(e) {
                    u.default(this.getTipElement()).addClass("bs-popover-" + e)
                }, i.getTipElement = function() {
                    return this.tip = this.tip || u.default(this.config.template)[0], this.tip
                }, i.setContent = function() {
                    var e = u.default(this.getTipElement());
                    this.setElementContent(e.find(".popover-header"), this.getTitle());
                    var t = this._getContent();
                    "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
                }, i._getContent = function() {
                    return this.element.getAttribute("data-content") || this.config.content
                }, i._cleanTipClass = function() {
                    var e = u.default(this.getTipElement()),
                        t = e.attr("class").match(oe);
                    null !== t && 0 < t.length && e.removeClass(t.join(""))
                }, n._jQueryInterface = function(i) {
                    return this.each(function() {
                        var e = u.default(this).data("bs.popover"),
                            t = "object" == _typeof(i) ? i : null;
                        if ((e || !/dispose|hide/.test(i)) && (e || (e = new n(this, t), u.default(this).data("bs.popover", e)), "string" == typeof i)) {
                            if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                            e[i]()
                        }
                    })
                }, s(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.6.0"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return re
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return ie
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return "bs.popover"
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return ae
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return ".bs.popover"
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return se
                    }
                }]), n
            }(ee);
        u.default.fn[ie] = le._jQueryInterface, u.default.fn[ie].Constructor = le, u.default.fn[ie].noConflict = function() {
            return u.default.fn[ie] = ne, le._jQueryInterface
        };
        var ce = "scrollspy",
            ue = u.default.fn[ce],
            de = {
                offset: 10,
                method: "auto",
                target: ""
            },
            he = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            },
            pe = ((i = fe.prototype).refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    n = "auto" === this._config.method ? e : this._config.method,
                    o = "position" === n ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var t, i = d.getSelectorFromElement(e);
                    if (t = i ? document.querySelector(i) : t) {
                        e = t.getBoundingClientRect();
                        if (e.width || e.height) return [u.default(t)[n]().top + o, i]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, i.dispose = function() {
                u.default.removeData(this._element, "bs.scrollspy"), u.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, i._getConfig = function(e) {
                var t;
                return "string" != typeof(e = a({}, de, "object" == _typeof(e) && e ? e : {})).target && d.isElement(e.target) && ((t = u.default(e.target).attr("id")) || (t = d.getUID(ce), u.default(e.target).attr("id", t)), e.target = "#" + t), d.typeCheckConfig(ce, e, he), e
            }, i._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, i._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, i._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, i._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    i = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), i <= e) {
                    i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var n = this._offsets.length; n--;) this._activeTarget !== this._targets[n] && e >= this._offsets[n] && (void 0 === this._offsets[n + 1] || e < this._offsets[n + 1]) && this._activate(this._targets[n])
                }
            }, i._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map(function(e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    }),
                    e = u.default([].slice.call(document.querySelectorAll(e.join(","))));
                e.hasClass("dropdown-item") ? (e.closest(".dropdown").find(".dropdown-toggle").addClass("active"), e.addClass("active")) : (e.addClass("active"), e.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), e.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), u.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                    relatedTarget: t
                })
            }, i._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains("active")
                }).forEach(function(e) {
                    return e.classList.remove("active")
                })
            }, fe._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = u.default(this).data("bs.scrollspy");
                    if (e || (e = new fe(this, "object" == _typeof(t) && t), u.default(this).data("bs.scrollspy", e)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, s(fe, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return de
                }
            }]), fe);

        function fe(e, t) {
            var i = this;
            this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, u.default(this._scrollElement).on("scroll.bs.scrollspy", function(e) {
                return i._process(e)
            }), this.refresh(), this._process()
        }
        u.default(window).on("load.bs.scrollspy.data-api", function() {
            for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
                var i = u.default(e[t]);
                pe._jQueryInterface.call(i, i.data())
            }
        }), u.default.fn[ce] = pe._jQueryInterface, u.default.fn[ce].Constructor = pe, u.default.fn[ce].noConflict = function() {
            return u.default.fn[ce] = ue, pe._jQueryInterface
        };
        var me = u.default.fn.tab,
            ge = ((i = ve.prototype).show = function() {
                var e, t, i, n, o, r, s = this;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && u.default(this._element).hasClass("active") || u.default(this._element).hasClass("disabled") || (r = u.default(this._element).closest(".nav, .list-group")[0], t = d.getSelectorFromElement(this._element), r && (o = "UL" === r.nodeName || "OL" === r.nodeName ? "> li > .active" : ".active", i = (i = u.default.makeArray(u.default(r).find(o)))[i.length - 1]), n = u.default.Event("hide.bs.tab", {
                    relatedTarget: this._element
                }), o = u.default.Event("show.bs.tab", {
                    relatedTarget: i
                }), i && u.default(i).trigger(n), u.default(this._element).trigger(o), o.isDefaultPrevented() || n.isDefaultPrevented() || (t && (e = document.querySelector(t)), this._activate(this._element, r), r = function() {
                    var e = u.default.Event("hidden.bs.tab", {
                            relatedTarget: s._element
                        }),
                        t = u.default.Event("shown.bs.tab", {
                            relatedTarget: i
                        });
                    u.default(i).trigger(e), u.default(s._element).trigger(t)
                }, e ? this._activate(e, e.parentNode, r) : r()))
            }, i.dispose = function() {
                u.default.removeData(this._element, "bs.tab"), this._element = null
            }, i._activate = function(e, t, i) {
                var n = this,
                    o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? u.default(t).children(".active") : u.default(t).find("> li > .active"))[0],
                    r = i && o && u.default(o).hasClass("fade"),
                    t = function() {
                        return n._transitionComplete(e, o, i)
                    };
                o && r ? (r = d.getTransitionDurationFromElement(o), u.default(o).removeClass("show").one(d.TRANSITION_END, t).emulateTransitionEnd(r)) : t()
            }, i._transitionComplete = function(e, t, i) {
                var n;
                t && (u.default(t).removeClass("active"), (n = u.default(t.parentNode).find("> .dropdown-menu .active")[0]) && u.default(n).removeClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)), u.default(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), d.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && u.default(e.parentNode).hasClass("dropdown-menu") && ((t = u.default(e).closest(".dropdown")[0]) && (t = [].slice.call(t.querySelectorAll(".dropdown-toggle")), u.default(t).addClass("active")), e.setAttribute("aria-expanded", !0)), i && i()
            }, ve._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = u.default(this),
                        t = e.data("bs.tab");
                    if (t || (t = new ve(this), e.data("bs.tab", t)), "string" == typeof i) {
                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    }
                })
            }, s(ve, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }]), ve);

        function ve(e) {
            this._element = e
        }
        u.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
            e.preventDefault(), ge._jQueryInterface.call(u.default(this), "show")
        }), u.default.fn.tab = ge._jQueryInterface, u.default.fn.tab.Constructor = ge, u.default.fn.tab.noConflict = function() {
            return u.default.fn.tab = me, ge._jQueryInterface
        };
        var ye = u.default.fn.toast,
            be = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            we = {
                animation: !0,
                autohide: !0,
                delay: 500
            },
            _e = ((i = xe.prototype).show = function() {
                var e, t = this,
                    i = u.default.Event("show.bs.toast");
                u.default(this._element).trigger(i), i.isDefaultPrevented() || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), e = function() {
                    t._element.classList.remove("showing"), t._element.classList.add("show"), u.default(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout(function() {
                        t.hide()
                    }, t._config.delay))
                }, this._element.classList.remove("hide"), d.reflow(this._element), this._element.classList.add("showing"), this._config.animation ? (i = d.getTransitionDurationFromElement(this._element), u.default(this._element).one(d.TRANSITION_END, e).emulateTransitionEnd(i)) : e())
            }, i.hide = function() {
                var e;
                this._element.classList.contains("show") && (e = u.default.Event("hide.bs.toast"), u.default(this._element).trigger(e), e.isDefaultPrevented() || this._close())
            }, i.dispose = function() {
                this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), u.default(this._element).off("click.dismiss.bs.toast"), u.default.removeData(this._element, "bs.toast"), this._element = null, this._config = null
            }, i._getConfig = function(e) {
                return e = a({}, we, u.default(this._element).data(), "object" == _typeof(e) && e ? e : {}), d.typeCheckConfig("toast", e, this.constructor.DefaultType), e
            }, i._setListeners = function() {
                var e = this;
                u.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function() {
                    return e.hide()
                })
            }, i._close = function() {
                function e() {
                    i._element.classList.add("hide"), u.default(i._element).trigger("hidden.bs.toast")
                }
                var t, i = this;
                this._element.classList.remove("show"), this._config.animation ? (t = d.getTransitionDurationFromElement(this._element), u.default(this._element).one(d.TRANSITION_END, e).emulateTransitionEnd(t)) : e()
            }, i._clearTimeout = function() {
                clearTimeout(this._timeout), this._timeout = null
            }, xe._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = u.default(this),
                        t = e.data("bs.toast");
                    if (t || (t = new xe(this, "object" == _typeof(i) && i), e.data("bs.toast", t)), "string" == typeof i) {
                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i](this)
                    }
                })
            }, s(xe, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return be
                }
            }, {
                key: "Default",
                get: function() {
                    return we
                }
            }]), xe);

        function xe(e, t) {
            this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
        }
        u.default.fn.toast = _e._jQueryInterface, u.default.fn.toast.Constructor = _e, u.default.fn.toast.noConflict = function() {
            return u.default.fn.toast = ye, _e._jQueryInterface
        }, e.Alert = h, e.Button = m, e.Carousel = x, e.Collapse = A, e.Dropdown = I, e.Modal = z, e.Popover = le, e.Scrollspy = pe, e.Tab = ge, e.Toast = _e, e.Tooltip = ee, e.Util = d, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }(t, i(1), i(5))
}, function(e, Q, t) {
    t.r(Q),
        function(e) {
            var i = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                n = function() {
                    for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                        if (i && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
                    return 0
                }(),
                o = i && window.Promise ? function(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, window.Promise.resolve().then(function() {
                            t = !1, e()
                        }))
                    }
                } : function(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, setTimeout(function() {
                            t = !1, e()
                        }, n))
                    }
                };

            function r(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }

            function d(e, t) {
                if (1 !== e.nodeType) return [];
                e = e.ownerDocument.defaultView.getComputedStyle(e, null);
                return t ? e[t] : e
            }

            function c(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }

            function u(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                    case "HTML":
                    case "BODY":
                        return e.ownerDocument.body;
                    case "#document":
                        return e.body
                }
                var t = d(e),
                    i = t.overflow,
                    n = t.overflowX,
                    t = t.overflowY;
                return /(auto|scroll|overlay)/.test(i + t + n) ? e : u(c(e))
            }

            function h(e) {
                return e && e.referenceNode ? e.referenceNode : e
            }
            var t = i && !(!window.MSInputMethodContext || !document.documentMode),
                s = i && /MSIE 10/.test(navigator.userAgent);

            function p(e) {
                return 11 === e ? t : 10 !== e && t || s
            }

            function g(e) {
                if (!e) return document.documentElement;
                for (var t = p(10) ? document.body : null, i = e.offsetParent || null; i === t && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent;
                var n = i && i.nodeName;
                return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === d(i, "position") ? g(i) : i : (e ? e.ownerDocument : document).documentElement
            }

            function a(e) {
                return null !== e.parentNode ? a(e.parentNode) : e
            }

            function f(e, t) {
                if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                    n = i ? e : t,
                    o = i ? t : e,
                    i = document.createRange();
                i.setStart(n, 0), i.setEnd(o, 0);
                i = i.commonAncestorContainer;
                if (e !== i && t !== i || n.contains(o)) return "BODY" === (o = (n = i).nodeName) || "HTML" !== o && g(n.firstElementChild) !== n ? g(i) : i;
                i = a(e);
                return i.host ? f(i.host, t) : f(e, a(t).host)
            }

            function m(e, t) {
                var i = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
                    t = e.nodeName;
                if ("BODY" !== t && "HTML" !== t) return e[i];
                t = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || t)[i]
            }

            function l(e, t) {
                var i = "x" === t ? "Left" : "Top",
                    t = "Left" == i ? "Right" : "Bottom";
                return parseFloat(e["border" + i + "Width"]) + parseFloat(e["border" + t + "Width"])
            }

            function v(e, t, i, n) {
                return Math.max(t["offset" + e], t["scroll" + e], i["client" + e], i["offset" + e], i["scroll" + e], p(10) ? parseInt(i["offset" + e]) + parseInt(n["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(n["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
            }

            function y(e) {
                var t = e.body,
                    i = e.documentElement,
                    e = p(10) && getComputedStyle(i);
                return {
                    height: v("Height", t, i, e),
                    width: v("Width", t, i, e)
                }
            }

            function b(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }
            var w = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                _ = function(e, t, i) {
                    return t && E(e.prototype, t), i && E(e, i), e
                },
                x = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i, n = arguments[t];
                        for (i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                };

            function E(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function T(e) {
                return x({}, e, {
                    right: e.left + e.width,
                    bottom: e.top + e.height
                })
            }

            function C(e) {
                var t, i, n = {};
                try {
                    p(10) ? (n = e.getBoundingClientRect(), t = m(e, "top"), i = m(e, "left"), n.top += t, n.left += i, n.bottom += t, n.right += i) : n = e.getBoundingClientRect()
                } catch (e) {}
                var o = {
                        left: n.left,
                        top: n.top,
                        width: n.right - n.left,
                        height: n.bottom - n.top
                    },
                    r = "HTML" === e.nodeName ? y(e.ownerDocument) : {},
                    s = r.width || e.clientWidth || o.width,
                    a = r.height || e.clientHeight || o.height,
                    r = e.offsetWidth - s,
                    s = e.offsetHeight - a;
                return (r || s) && (r -= l(a = d(e), "x"), s -= l(a, "y"), o.width -= r, o.height -= s), T(o)
            }

            function S(e, t, i) {
                var n = 2 < arguments.length && void 0 !== i && i,
                    o = p(10),
                    r = "HTML" === t.nodeName,
                    s = C(e),
                    a = C(t),
                    l = u(e),
                    c = d(t),
                    i = parseFloat(c.borderTopWidth),
                    e = parseFloat(c.borderLeftWidth);
                n && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                s = T({
                    top: s.top - a.top - i,
                    left: s.left - a.left - e,
                    width: s.width,
                    height: s.height
                });
                return s.marginTop = 0, s.marginLeft = 0, !o && r && (r = parseFloat(c.marginTop), c = parseFloat(c.marginLeft), s.top -= i - r, s.bottom -= i - r, s.left -= e - c, s.right -= e - c, s.marginTop = r, s.marginLeft = c), s = (o && !n ? t.contains(l) : t === l && "BODY" !== l.nodeName) ? function(e, t, i) {
                    var n = 2 < arguments.length && void 0 !== i && i,
                        i = m(t, "top"),
                        t = m(t, "left"),
                        n = n ? -1 : 1;
                    return e.top += i * n, e.bottom += i * n, e.left += t * n, e.right += t * n, e
                }(s, t) : s
            }

            function k(e) {
                if (!e || !e.parentElement || p()) return document.documentElement;
                for (var t = e.parentElement; t && "none" === d(t, "transform");) t = t.parentElement;
                return t || document.documentElement
            }

            function A(e, t, i, n, o) {
                var r = 4 < arguments.length && void 0 !== o && o,
                    s = {
                        top: 0,
                        left: 0
                    },
                    a = r ? k(e) : f(e, h(t));
                "viewport" === n ? s = function(e, t) {
                    var i = 1 < arguments.length && void 0 !== t && t,
                        n = e.ownerDocument.documentElement,
                        o = S(e, n),
                        r = Math.max(n.clientWidth, window.innerWidth || 0),
                        t = Math.max(n.clientHeight, window.innerHeight || 0),
                        e = i ? 0 : m(n),
                        n = i ? 0 : m(n, "left");
                    return T({
                        top: e - o.top + o.marginTop,
                        left: n - o.left + o.marginLeft,
                        width: r,
                        height: t
                    })
                }(a, r) : (o = void 0, "scrollParent" === n ? "BODY" === (o = u(c(t))).nodeName && (o = e.ownerDocument.documentElement) : o = "window" === n ? e.ownerDocument.documentElement : n, l = S(o, a, r), "HTML" !== o.nodeName || function e(t) {
                    var i = t.nodeName;
                    if ("BODY" === i || "HTML" === i) return !1;
                    if ("fixed" === d(t, "position")) return !0;
                    t = c(t);
                    return !!t && e(t)
                }(a) ? s = l : (e = (a = y(e.ownerDocument)).height, a = a.width, s.top += l.top - l.marginTop, s.bottom = e + l.top, s.left += l.left - l.marginLeft, s.right = a + l.left));
                var l = "number" == typeof(i = i || 0);
                return s.left += l ? i : i.left || 0, s.top += l ? i : i.top || 0, s.right -= l ? i : i.right || 0, s.bottom -= l ? i : i.bottom || 0, s
            }

            function D(e, t, i, n, o, r) {
                r = 5 < arguments.length && void 0 !== r ? r : 0;
                if (-1 === e.indexOf("auto")) return e;
                var o = A(i, n, r, o),
                    s = {
                        top: {
                            width: o.width,
                            height: t.top - o.top
                        },
                        right: {
                            width: o.right - t.right,
                            height: o.height
                        },
                        bottom: {
                            width: o.width,
                            height: o.bottom - t.bottom
                        },
                        left: {
                            width: t.left - o.left,
                            height: o.height
                        }
                    },
                    t = Object.keys(s).map(function(e) {
                        return x({
                            key: e
                        }, s[e], {
                            area: (e = s[e]).width * e.height
                        })
                    }).sort(function(e, t) {
                        return t.area - e.area
                    }),
                    o = t.filter(function(e) {
                        var t = e.width,
                            e = e.height;
                        return t >= i.clientWidth && e >= i.clientHeight
                    }),
                    t = (0 < o.length ? o : t)[0].key,
                    e = e.split("-")[1];
                return t + (e ? "-" + e : "")
            }

            function L(e, t, i, n) {
                n = 3 < arguments.length && void 0 !== n ? n : null;
                return S(i, n ? k(t) : f(t, h(i)), n)
            }

            function O(e) {
                var t = e.ownerDocument.defaultView.getComputedStyle(e),
                    i = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                    t = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                return {
                    width: e.offsetWidth + t,
                    height: e.offsetHeight + i
                }
            }

            function j(e) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return t[e]
                })
            }

            function M(e, t, i) {
                i = i.split("-")[0];
                var n = O(e),
                    o = {
                        width: n.width,
                        height: n.height
                    },
                    r = -1 !== ["right", "left"].indexOf(i),
                    s = r ? "top" : "left",
                    a = r ? "left" : "top",
                    e = r ? "height" : "width",
                    r = r ? "width" : "height";
                return o[s] = t[s] + t[e] / 2 - n[e] / 2, o[a] = i === a ? t[a] - n[r] : t[j(a)], o
            }

            function N(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }

            function I(e, i, t) {
                return (void 0 === t ? e : e.slice(0, function(e, t) {
                    if (Array.prototype.findIndex) return e.findIndex(function(e) {
                        return e.name === t
                    });
                    var i = N(e, function(e) {
                        return e.name === t
                    });
                    return e.indexOf(i)
                }(e, t))).forEach(function(e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var t = e.function || e.fn;
                    e.enabled && r(t) && (i.offsets.popper = T(i.offsets.popper), i.offsets.reference = T(i.offsets.reference), i = t(i, e))
                }), i
            }

            function q(e, i) {
                return e.some(function(e) {
                    var t = e.name;
                    return e.enabled && t === i
                })
            }

            function H(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
                    var o = t[n],
                        o = o ? "" + o + i : e;
                    if (void 0 !== document.body.style[o]) return o
                }
                return null
            }

            function P(e) {
                e = e.ownerDocument;
                return e ? e.defaultView : window
            }

            function R() {
                var e, t, i;
                this.state.eventsEnabled || (this.state = (e = this.reference, this.options, t = this.state, i = this.scheduleUpdate, t.updateBound = i, P(e).addEventListener("resize", t.updateBound, {
                    passive: !0
                }), function e(t, i, n, o) {
                    var r = "BODY" === t.nodeName,
                        t = r ? t.ownerDocument.defaultView : t;
                    t.addEventListener(i, n, {
                        passive: !0
                    }), r || e(u(t.parentNode), i, n, o), o.push(t)
                }(e = u(e), "scroll", t.updateBound, t.scrollParents), t.scrollElement = e, t.eventsEnabled = !0, t))
            }

            function z(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }

            function $(i, n) {
                Object.keys(n).forEach(function(e) {
                    var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && z(n[e]) && (t = "px"), i.style[e] = n[e] + t
                })
            }
            var B = i && /Firefox/i.test(navigator.userAgent);

            function F(e, t, i) {
                var n, o = N(e, function(e) {
                        return e.name === t
                    }),
                    r = !!o && e.some(function(e) {
                        return e.name === i && e.enabled && e.order < o.order
                    });
                return r || (n = "`" + t + "`", e = "`" + i + "`", console.warn(e + " modifier is required by " + n + " modifier in order to work, be sure to include it before " + n + "!")), r
            }
            var W = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                Y = W.slice(3);

            function X(e, t) {
                t = 1 < arguments.length && void 0 !== t && t, e = Y.indexOf(e), e = Y.slice(e + 1).concat(Y.slice(0, e));
                return t ? e.reverse() : e
            }
            var V = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function() {},
                    onUpdate: function() {},
                    modifiers: {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function(e) {
                                var t, i, n = e.placement,
                                    o = n.split("-")[0],
                                    r = n.split("-")[1];
                                return r && (t = (i = e.offsets).reference, n = i.popper, o = (i = -1 !== ["bottom", "top"].indexOf(o)) ? "width" : "height", o = {
                                    start: b({}, i = i ? "left" : "top", t[i]),
                                    end: b({}, i, t[i] + t[o] - n[o])
                                }, e.offsets.popper = x({}, n, o[r])), e
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function(e, t) {
                                var o, r, s, a, i = t.offset,
                                    n = e.placement,
                                    l = e.offsets,
                                    c = l.popper,
                                    u = l.reference,
                                    t = n.split("-")[0],
                                    l = z(+i) ? [+i, 0] : (n = i, o = c, r = u, s = [0, 0], a = -1 !== ["right", "left"].indexOf(i = t), u = n.split(/(\+|\-)/).map(function(e) {
                                        return e.trim()
                                    }), i = u.indexOf(N(u, function(e) {
                                        return -1 !== e.search(/,|\s/)
                                    })), u[i] && -1 === u[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."), n = /\s*,\s*|\s+/, (-1 !== i ? [u.slice(0, i).concat([u[i].split(n)[0]]), [u[i].split(n)[1]].concat(u.slice(i + 1))] : [u]).map(function(e, t) {
                                        var i = (1 === t ? !a : a) ? "height" : "width",
                                            n = !1;
                                        return e.reduce(function(e, t) {
                                            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, n = !0, e) : n ? (e[e.length - 1] += t, n = !1, e) : e.concat(t)
                                        }, []).map(function(e) {
                                            return function(e, t, i, n) {
                                                var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                                    r = +o[1],
                                                    o = o[2];
                                                if (!r) return e;
                                                if (0 !== o.indexOf("%")) return "vh" === o || "vw" === o ? ("vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r;
                                                var s = void 0;
                                                switch (o) {
                                                    case "%p":
                                                        s = i;
                                                        break;
                                                    case "%":
                                                    case "%r":
                                                    default:
                                                        s = n
                                                }
                                                return T(s)[t] / 100 * r
                                            }(e, i, o, r)
                                        })
                                    }).forEach(function(i, n) {
                                        i.forEach(function(e, t) {
                                            z(e) && (s[n] += e * ("-" === i[t - 1] ? -1 : 1))
                                        })
                                    }), s);
                                return "left" === t ? (c.top += l[0], c.left -= l[1]) : "right" === t ? (c.top += l[0], c.left += l[1]) : "top" === t ? (c.left += l[0], c.top -= l[1]) : "bottom" === t && (c.left += l[0], c.top += l[1]), e.popper = c, e
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function(e, n) {
                                var t = n.boundariesElement || g(e.instance.popper);
                                e.instance.reference === t && (t = g(t));
                                var i = H("transform"),
                                    o = e.instance.popper.style,
                                    r = o.top,
                                    s = o.left,
                                    a = o[i];
                                o.top = "", o.left = "", o[i] = "";
                                var l = A(e.instance.popper, e.instance.reference, n.padding, t, e.positionFixed);
                                o.top = r, o.left = s, o[i] = a, n.boundaries = l;
                                var a = n.priority,
                                    c = e.offsets.popper,
                                    u = {
                                        primary: function(e) {
                                            var t = c[e];
                                            return c[e] < l[e] && !n.escapeWithReference && (t = Math.max(c[e], l[e])), b({}, e, t)
                                        },
                                        secondary: function(e) {
                                            var t = "right" === e ? "left" : "top",
                                                i = c[t];
                                            return c[e] > l[e] && !n.escapeWithReference && (i = Math.min(c[t], l[e] - ("right" === e ? c.width : c.height))), b({}, t, i)
                                        }
                                    };
                                return a.forEach(function(e) {
                                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                    c = x({}, c, u[t](e))
                                }), e.offsets.popper = c, e
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.offsets,
                                    i = t.popper,
                                    n = t.reference,
                                    o = e.placement.split("-")[0],
                                    r = Math.floor,
                                    s = -1 !== ["top", "bottom"].indexOf(o),
                                    t = s ? "right" : "bottom",
                                    o = s ? "left" : "top",
                                    s = s ? "width" : "height";
                                return i[t] < r(n[o]) && (e.offsets.popper[o] = r(n[o]) - i[s]), i[o] > r(n[t]) && (e.offsets.popper[o] = r(n[t])), e
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function(e, t) {
                                if (!F(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                var i = t.element;
                                if ("string" == typeof i) {
                                    if (!(i = e.instance.popper.querySelector(i))) return e
                                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                var n = e.placement.split("-")[0],
                                    o = e.offsets,
                                    r = o.popper,
                                    s = o.reference,
                                    a = -1 !== ["left", "right"].indexOf(n),
                                    l = a ? "height" : "width",
                                    c = a ? "Top" : "Left",
                                    u = c.toLowerCase(),
                                    t = a ? "left" : "top",
                                    o = a ? "bottom" : "right",
                                    n = O(i)[l];
                                s[o] - n < r[u] && (e.offsets.popper[u] -= r[u] - (s[o] - n)), s[u] + n > r[o] && (e.offsets.popper[u] += s[u] + n - r[o]), e.offsets.popper = T(e.offsets.popper);
                                a = s[u] + s[l] / 2 - n / 2, o = d(e.instance.popper), s = parseFloat(o["margin" + c]), c = parseFloat(o["border" + c + "Width"]), c = a - e.offsets.popper[u] - s - c, c = Math.max(Math.min(r[l] - n, c), 0);
                                return e.arrowElement = i, e.offsets.arrow = (b(i = {}, u, Math.round(c)), b(i, t, ""), i), e
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function(c, u) {
                                if (q(c.instance.modifiers, "inner")) return c;
                                if (c.flipped && c.placement === c.originalPlacement) return c;
                                var d = A(c.instance.popper, c.instance.reference, u.padding, u.boundariesElement, c.positionFixed),
                                    h = c.placement.split("-")[0],
                                    p = j(h),
                                    f = c.placement.split("-")[1] || "",
                                    m = [];
                                switch (u.behavior) {
                                    case "flip":
                                        m = [h, p];
                                        break;
                                    case "clockwise":
                                        m = X(h);
                                        break;
                                    case "counterclockwise":
                                        m = X(h, !0);
                                        break;
                                    default:
                                        m = u.behavior
                                }
                                return m.forEach(function(e, t) {
                                    if (h !== e || m.length === t + 1) return c;
                                    h = c.placement.split("-")[0], p = j(h);
                                    var i = c.offsets.popper,
                                        n = c.offsets.reference,
                                        o = Math.floor,
                                        r = "left" === h && o(i.right) > o(n.left) || "right" === h && o(i.left) < o(n.right) || "top" === h && o(i.bottom) > o(n.top) || "bottom" === h && o(i.top) < o(n.bottom),
                                        s = o(i.left) < o(d.left),
                                        a = o(i.right) > o(d.right),
                                        l = o(i.top) < o(d.top),
                                        e = o(i.bottom) > o(d.bottom),
                                        n = "left" === h && s || "right" === h && a || "top" === h && l || "bottom" === h && e,
                                        i = -1 !== ["top", "bottom"].indexOf(h),
                                        o = !!u.flipVariations && (i && "start" === f && s || i && "end" === f && a || !i && "start" === f && l || !i && "end" === f && e),
                                        l = !!u.flipVariationsByContent && (i && "start" === f && a || i && "end" === f && s || !i && "start" === f && e || !i && "end" === f && l),
                                        l = o || l;
                                    (r || n || l) && (c.flipped = !0, (r || n) && (h = m[t + 1]), l && (f = "end" === f ? "start" : "start" === f ? "end" : f), c.placement = h + (f ? "-" + f : ""), c.offsets.popper = x({}, c.offsets.popper, M(c.instance.popper, c.offsets.reference, c.placement)), c = I(c.instance.modifiers, c, "flip"))
                                }), c
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport",
                            flipVariations: !1,
                            flipVariationsByContent: !1
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function(e) {
                                var t = e.placement,
                                    i = t.split("-")[0],
                                    n = e.offsets,
                                    o = n.popper,
                                    r = n.reference,
                                    s = -1 !== ["left", "right"].indexOf(i),
                                    n = -1 === ["top", "left"].indexOf(i);
                                return o[s ? "left" : "top"] = r[i] - (n ? o[s ? "width" : "height"] : 0), e.placement = j(t), e.offsets.popper = T(o), e
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function(e) {
                                if (!F(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                var t = e.offsets.reference,
                                    i = N(e.instance.modifiers, function(e) {
                                        return "preventOverflow" === e.name
                                    }).boundaries;
                                if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                                    if (!0 === e.hide) return e;
                                    e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === e.hide) return e;
                                    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                }
                                return e
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function(e, t) {
                                var i = t.x,
                                    n = t.y,
                                    o = e.offsets.popper,
                                    r = N(e.instance.modifiers, function(e) {
                                        return "applyStyle" === e.name
                                    }).gpuAcceleration;
                                void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var s, a, l, c, u, d, h = void 0 !== r ? r : t.gpuAcceleration,
                                    p = g(e.instance.popper),
                                    f = C(p),
                                    m = {
                                        position: o.position
                                    },
                                    a = (s = e, a = window.devicePixelRatio < 2 || !B, l = s.offsets, d = l.popper, c = l.reference, u = Math.round, r = Math.floor, t = function(e) {
                                        return e
                                    }, o = u(c.width), l = u(d.width), c = -1 !== ["left", "right"].indexOf(s.placement), s = -1 !== s.placement.indexOf("-"), r = a ? c || s || o % 2 == l % 2 ? u : r : t, t = a ? u : t, {
                                        left: r(o % 2 == 1 && l % 2 == 1 && !s && a ? d.left - 1 : d.left),
                                        top: t(d.top),
                                        bottom: t(d.bottom),
                                        right: r(d.right)
                                    }),
                                    t = "bottom" === i ? "top" : "bottom",
                                    r = "right" === n ? "left" : "right",
                                    d = H("transform"),
                                    n = "bottom" == t ? "HTML" === p.nodeName ? -p.clientHeight + a.bottom : -f.height + a.bottom : a.top,
                                    i = "right" == r ? "HTML" === p.nodeName ? -p.clientWidth + a.right : -f.width + a.right : a.left;
                                h && d ? (m[d] = "translate3d(" + i + "px, " + n + "px, 0)", m[t] = 0, m[r] = 0, m.willChange = "transform") : (h = "bottom" == t ? -1 : 1, d = "right" == r ? -1 : 1, m[t] = n * h, m[r] = i * d, m.willChange = t + ", " + r);
                                r = {
                                    "x-placement": e.placement
                                };
                                return e.attributes = x({}, r, e.attributes), e.styles = x({}, m, e.styles), e.arrowStyles = x({}, e.offsets.arrow, e.arrowStyles), e
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function(e) {
                                var t, i;
                                return $(e.instance.popper, e.styles), t = e.instance.popper, i = e.attributes, Object.keys(i).forEach(function(e) {
                                    !1 !== i[e] ? t.setAttribute(e, i[e]) : t.removeAttribute(e)
                                }), e.arrowElement && Object.keys(e.arrowStyles).length && $(e.arrowElement, e.arrowStyles), e
                            },
                            onLoad: function(e, t, i, n, o) {
                                o = L(o, t, e, i.positionFixed), e = D(i.placement, o, t, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                                return t.setAttribute("x-placement", e), $(t, {
                                    position: i.positionFixed ? "fixed" : "absolute"
                                }), i
                            },
                            gpuAcceleration: void 0
                        }
                    }
                },
                _ = (_(U, [{
                    key: "update",
                    value: function() {
                        return function() {
                            var e;
                            this.state.isDestroyed || ((e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            }).offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = D(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = M(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = I(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)))
                        }.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        return function() {
                            return this.state.isDestroyed = !0, q(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[H("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                        }.call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function() {
                        return R.call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function() {
                        return function() {
                            var e, t;
                            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, P(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                                e.removeEventListener("scroll", t.updateBound)
                            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                        }.call(this)
                    }
                }]), U);

            function U(e, t) {
                var i = this,
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                w(this, U), this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }, this.update = o(this.update.bind(this)), this.options = x({}, U.Defaults, n), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(x({}, U.Defaults.modifiers, n.modifiers)).forEach(function(e) {
                    i.options.modifiers[e] = x({}, U.Defaults.modifiers[e] || {}, n.modifiers ? n.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return x({
                        name: e
                    }, i.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(e) {
                    e.enabled && r(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                }), this.update();
                t = this.options.eventsEnabled;
                t && this.enableEventListeners(), this.state.eventsEnabled = t
            }
            _.Utils = ("undefined" != typeof window ? window : e).PopperUtils, _.placements = W, _.Defaults = V, Q.default = _
        }.call(this, t(0))
}, function(e, t, i) {
    var n;
    n = [i(1)], void 0 === (i = "function" == typeof(i = function(D) {
        D.fn.marquee = function(A) {
            return this.each(function() {
                function n(e, t, i) {
                    for (var n = ["webkit", "moz", "MS", "o", ""], o = 0; o < n.length; o++) n[o] || (t = t.toLowerCase()), e.addEventListener(n[o] + t, i, !1)
                }

                function o() {
                    d.timer = setTimeout(k, u.delayBeforeStart)
                }
                var r, s, a, l, c, t, u = D.extend({}, D.fn.marquee.defaults, A),
                    d = D(this),
                    h = 3,
                    e = "animation-play-state",
                    p = !1,
                    i = {
                        pause: function() {
                            p && u.allowCss3Support ? r.css(e, "paused") : D.fn.pause && r.pause(), d.data("runningStatus", "paused"), d.trigger("paused")
                        },
                        resume: function() {
                            p && u.allowCss3Support ? r.css(e, "running") : D.fn.resume && r.resume(), d.data("runningStatus", "resumed"), d.trigger("resumed")
                        },
                        toggle: function() {
                            i["resumed" === d.data("runningStatus") ? "pause" : "resume"]()
                        },
                        destroy: function() {
                            clearTimeout(d.timer), d.find("*").addBack().off(), d.html(d.find(".js-marquee:first").html())
                        }
                    };
                if ("string" != typeof A) {
                    D.each(u, function(e) {
                        if (void 0 !== (t = d.attr("data-" + e))) {
                            switch (t) {
                                case "true":
                                    t = !0;
                                    break;
                                case "false":
                                    t = !1
                            }
                            u[e] = t
                        }
                    }), u.speed && (u.duration = parseInt(d.width(), 10) / u.speed * 1e3), l = "up" === u.direction || "down" === u.direction, u.gap = u.duplicated ? parseInt(u.gap) : 0, d.wrapInner('<div class="js-marquee"></div>');
                    var f, m, g = d.find(".js-marquee").css({
                        "margin-right": u.gap,
                        float: "left"
                    });
                    if (u.duplicated && g.clone(!0).appendTo(d), d.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'), r = d.find(".js-marquee-wrapper"), l ? (f = d.height(), r.removeAttr("style"), d.height(f), d.find(".js-marquee").css({
                            float: "none",
                            "margin-bottom": u.gap,
                            "margin-right": 0
                        }), u.duplicated && d.find(".js-marquee:last").css({
                            "margin-bottom": 0
                        }), m = d.find(".js-marquee:first").height() + u.gap, u.startVisible && !u.duplicated ? (u._completeDuration = (parseInt(m, 10) + parseInt(f, 10)) / parseInt(f, 10) * u.duration, u.duration = parseInt(m, 10) / parseInt(f, 10) * u.duration) : u.duration = (parseInt(m, 10) + parseInt(f, 10)) / parseInt(f, 10) * u.duration) : (c = d.find(".js-marquee:first").width() + u.gap, s = d.width(), u.startVisible && !u.duplicated ? (u._completeDuration = (parseInt(c, 10) + parseInt(s, 10)) / parseInt(s, 10) * u.duration, u.duration = parseInt(c, 10) / parseInt(s, 10) * u.duration) : u.duration = (parseInt(c, 10) + parseInt(s, 10)) / parseInt(s, 10) * u.duration), u.duplicated && (u.duration = u.duration / 2), u.allowCss3Support) {
                        var v = document.body || document.createElement("div"),
                            y = "marqueeAnimation-" + Math.floor(1e7 * Math.random()),
                            b = "Webkit Moz O ms Khtml".split(" "),
                            w = "animation",
                            _ = "",
                            x = "";
                        if (void 0 !== v.style.animation && (x = "@keyframes " + y + " ", p = !0), !1 === p)
                            for (var E = 0; E < b.length; E++)
                                if (void 0 !== v.style[b[E] + "AnimationName"]) {
                                    var T = "-" + b[E].toLowerCase() + "-",
                                        w = T + w,
                                        e = T + e,
                                        x = "@" + T + "keyframes " + y + " ",
                                        p = !0;
                                    break
                                }
                        p && (_ = y + " " + u.duration / 1e3 + "s " + u.delayBeforeStart / 1e3 + "s infinite " + u.css3easing, d.data("css3AnimationIsSupported", !0))
                    }
                    var C = function() {
                            r.css("transform", "translateY(" + ("up" === u.direction ? f + "px" : "-" + m + "px") + ")")
                        },
                        S = function() {
                            r.css("transform", "translateX(" + ("left" === u.direction ? s + "px" : "-" + c + "px") + ")")
                        };
                    u.duplicated ? (l ? u.startVisible ? r.css("transform", "translateY(0)") : r.css("transform", "translateY(" + ("up" === u.direction ? f + "px" : "-" + (2 * m - u.gap) + "px") + ")") : u.startVisible ? r.css("transform", "translateX(0)") : r.css("transform", "translateX(" + ("left" === u.direction ? s + "px" : "-" + (2 * c - u.gap) + "px") + ")"), u.startVisible || (h = 1)) : u.startVisible ? h = 2 : (l ? C : S)();
                    var k = function e() {
                        var t, i;
                        u.duplicated && (1 === h ? (u._originalDuration = u.duration, u.duration = l ? "up" === u.direction ? u.duration + f / (m / u.duration) : 2 * u.duration : "left" === u.direction ? u.duration + s / (c / u.duration) : 2 * u.duration, _ = _ && y + " " + u.duration / 1e3 + "s " + u.delayBeforeStart / 1e3 + "s " + u.css3easing, h++) : 2 === h && (u.duration = u._originalDuration, _ && (y += "0", x = D.trim(x) + "0 ", _ = y + " " + u.duration / 1e3 + "s 0s infinite " + u.css3easing), h++)), l ? u.duplicated ? (2 < h && r.css("transform", "translateY(" + ("up" === u.direction ? 0 : "-" + m + "px") + ")"), a = {
                            transform: "translateY(" + ("up" === u.direction ? "-" + m + "px" : 0) + ")"
                        }) : u.startVisible ? 2 === h ? (_ = _ && y + " " + u.duration / 1e3 + "s " + u.delayBeforeStart / 1e3 + "s " + u.css3easing, a = {
                            transform: "translateY(" + ("up" === u.direction ? "-" + m + "px" : f + "px") + ")"
                        }, h++) : 3 === h && (u.duration = u._completeDuration, _ && (y += "0", x = D.trim(x) + "0 ", _ = y + " " + u.duration / 1e3 + "s 0s infinite " + u.css3easing), C()) : (C(), a = {
                            transform: "translateY(" + ("up" === u.direction ? "-" + r.height() + "px" : f + "px") + ")"
                        }) : u.duplicated ? (2 < h && r.css("transform", "translateX(" + ("left" === u.direction ? 0 : "-" + c + "px") + ")"), a = {
                            transform: "translateX(" + ("left" === u.direction ? "-" + c + "px" : 0) + ")"
                        }) : u.startVisible ? 2 === h ? (_ = _ && y + " " + u.duration / 1e3 + "s " + u.delayBeforeStart / 1e3 + "s " + u.css3easing, a = {
                            transform: "translateX(" + ("left" === u.direction ? "-" + c + "px" : s + "px") + ")"
                        }, h++) : 3 === h && (u.duration = u._completeDuration, _ && (y += "0", x = D.trim(x) + "0 ", _ = y + " " + u.duration / 1e3 + "s 0s infinite " + u.css3easing), S()) : (S(), a = {
                            transform: "translateX(" + ("left" === u.direction ? "-" + c + "px" : s + "px") + ")"
                        }), d.trigger("beforeStarting"), p ? (r.css(w, _), t = x + " { 100%  " + function(e) {
                            var t, i = [];
                            for (t in e) e.hasOwnProperty(t) && i.push(t + ":" + e[t]);
                            return i.push(), "{" + i.join(",") + "}"
                        }(a) + "}", 0 !== (i = r.find("style")).length ? i.filter(":last").html(t) : D("head").append("<style>" + t + "</style>"), n(r[0], "AnimationIteration", function() {
                            d.trigger("finished")
                        }), n(r[0], "AnimationEnd", function() {
                            e(), d.trigger("finished")
                        })) : r.animate(a, u.duration, u.easing, function() {
                            d.trigger("finished"), (u.pauseOnCycle ? o : e)()
                        }), d.data("runningStatus", "resumed")
                    };
                    d.on("pause", i.pause), d.on("resume", i.resume), u.pauseOnHover && (d.on("mouseenter", i.pause), d.on("mouseleave", i.resume)), (p && u.allowCss3Support ? k : o)()
                } else D.isFunction(i[A]) && (r = r || d.find(".js-marquee-wrapper"), !0 === d.data("css3AnimationIsSupported") && (p = !0), i[A]())
            })
        }, D.fn.marquee.defaults = {
            allowCss3Support: !0,
            css3easing: "linear",
            easing: "linear",
            delayBeforeStart: 1e3,
            direction: "left",
            duplicated: !1,
            duration: 5e3,
            speed: 0,
            gap: 20,
            pauseOnCycle: !1,
            pauseOnHover: !1,
            startVisible: !1
        }
    }) ? i.apply(t, n) : i) || (e.exports = i)
}, function(e, t) {
    function i(e, i) {
        var n = !1,
            t = e.charAt(0).toUpperCase() + e.slice(1);
        return o.each((e + " " + s.join(t + " ") + t).split(" "), function(e, t) {
            if (void 0 !== r[t]) return n = !i || t, !1
        }), n
    }

    function n(e) {
        return i(e, !0)
    }
    var o, r, s, a, l, c, u, d, h, p, f, m, g, v, y, b, w, _, x, E, T, C;

    function S(e) {
        this._core = e, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": l.proxy(function(e) {
                e.namespace && "URLHash" === this._core.settings.startPosition && l(c).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": l.proxy(function(e) {
                var t;
                !e.namespace || (t = l(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash")) && (this._hashes[t] = e.content)
            }, this),
            "changed.owl.carousel": l.proxy(function(e) {
                var i;
                e.namespace && "position" === e.property.name && (i = this._core.items(this._core.relative(this._core.current())), (e = l.map(this._hashes, function(e, t) {
                    return e === i ? t : null
                }).join()) && c.location.hash.slice(1) !== e && (c.location.hash = e))
            }, this)
        }, this._core.options = l.extend({}, S.Defaults, this._core.options), this.$element.on(this._handlers), l(c).on("hashchange.owl.navigation", l.proxy(function(e) {
            var t = c.location.hash.substring(1),
                i = this._core.$stage.children(),
                t = this._hashes[t] && i.index(this._hashes[t]);
            void 0 !== t && t !== this._core.current() && this._core.to(this._core.relative(t), !1, !0)
        }, this))
    }

    function k(e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": u.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + u(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": u.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": u.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
            }, this),
            "changed.owl.carousel": u.proxy(function(e) {
                e.namespace && "position" == e.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": u.proxy(function(e) {
                e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": u.proxy(function(e) {
                e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = u.extend({}, k.Defaults, this._core.options), this.$element.on(this._handlers)
    }

    function A(e) {
        this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": d.proxy(function(e) {
                e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": d.proxy(function(e) {
                e.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": d.proxy(function(e, t, i) {
                e.namespace && this.play(t, i)
            }, this),
            "stop.owl.autoplay": d.proxy(function(e) {
                e.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": d.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": d.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": d.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": d.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = d.extend({}, A.Defaults, this._core.options)
    }

    function D(e) {
        this.core = e, this.core.options = f.extend({}, D.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": f.proxy(function(e) {
                e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": f.proxy(function(e) {
                e.namespace && (this.swapping = "translated" == e.type)
            }, this),
            "translate.owl.carousel": f.proxy(function(e) {
                e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    }

    function L(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": m.proxy(function(e) {
                e.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": m.proxy(function(e) {
                e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
            }, this),
            "refreshed.owl.carousel": m.proxy(function(e) {
                e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": m.proxy(function(e) {
                e.namespace && "position" === e.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": m.proxy(function(e) {
                var t;
                !e.namespace || (t = m(e.content).find(".owl-video")).length && (t.css("display", "none"), this.fetch(t, m(e.content)))
            }, this)
        }, this._core.options = m.extend({}, L.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", m.proxy(function(e) {
            this.play(e)
        }, this))
    }

    function O(e) {
        this._core = e, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": v.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": v.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && "position" === e.property.name && this.update()
            }, this),
            "loaded.owl.lazy": v.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = v.extend({}, O.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var t = this;
        v(y).on("load", function() {
            t._core.settings.autoHeight && t.update()
        }), v(y).resize(function() {
            t._core.settings.autoHeight && (null != t._intervalId && clearTimeout(t._intervalId), t._intervalId = setTimeout(function() {
                t.update()
            }, 250))
        })
    }

    function j(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": b.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                    var t = this._core.settings,
                        i = t.center && Math.ceil(t.items / 2) || t.items,
                        n = t.center && -1 * i || 0,
                        o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + n,
                        r = this._core.clones().length,
                        s = b.proxy(function(e, t) {
                            this.load(t)
                        }, this);
                    for (0 < t.lazyLoadEager && (i += t.lazyLoadEager, t.loop && (o -= t.lazyLoadEager, i++)); n++ < i;) this.load(r / 2 + this._core.relative(o)), r && b.each(this._core.clones(this._core.relative(o)), s), o++
                }
            }, this)
        }, this._core.options = b.extend({}, j.Defaults, this._core.options), this._core.$element.on(this._handlers)
    }

    function M(e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": _.proxy(function(e) {
                e.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = _.extend({}, M.Defaults, this._core.options), this._core.$element.on(this._handlers)
    }

    function N(e, t) {
        this.settings = null, this.options = E.extend({}, N.Defaults, t), this.$element = E(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, E.each(["onResize", "onThrottledResize"], E.proxy(function(e, t) {
            this._handlers[t] = E.proxy(this[t], this)
        }, this)), E.each(N.Plugins, E.proxy(function(e, t) {
            this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
        }, this)), E.each(N.Workers, E.proxy(function(e, t) {
            this._pipe.push({
                filter: t.filter,
                run: E.proxy(t.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    E = window.Zepto || window.jQuery, T = window, C = document, N.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: T,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, N.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, N.Type = {
        Event: "event",
        State: "state"
    }, N.Plugins = {}, N.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = this.settings.margin || "",
                i = !this.settings.autoWidth,
                n = this.settings.rtl,
                t = {
                    width: "auto",
                    "margin-left": n ? t : "",
                    "margin-right": n ? "" : t
                };
            i || this.$stage.children().css(t), e.css = t
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                n = this._items.length,
                o = !this.settings.autoWidth,
                r = [];
            for (e.items = {
                    merge: !1,
                    width: t
                }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, e.items.merge = 1 < i || e.items.merge, r[n] = o ? t * i : this._items[n].width();
            this._widths = r
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                t = this._items,
                i = this.settings,
                n = Math.max(2 * i.items, 4),
                o = 2 * Math.ceil(t.length / 2),
                r = i.loop && t.length ? i.rewind ? n : Math.max(n, o) : 0,
                s = "",
                a = "";
            for (r /= 2; 0 < r;) e.push(this.normalize(e.length / 2, !0)), s += t[e[e.length - 1]][0].outerHTML, e.push(this.normalize(t.length - 1 - (e.length - 1) / 2, !0)), a = t[e[e.length - 1]][0].outerHTML + a, --r;
            this._clones = e, E(s).addClass("cloned").appendTo(this.$stage), E(a).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var e, t, i = this.settings.rtl ? 1 : -1, n = this._clones.length + this._items.length, o = -1, r = []; ++o < n;) e = r[o - 1] || 0, t = this._widths[this.relative(o)] + this.settings.margin, r.push(e + t * i);
            this._coordinates = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e = this.settings.stagePadding,
                t = this._coordinates,
                e = {
                    width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                    "padding-left": e || "",
                    "padding-right": e || ""
                };
            this.$stage.css(e)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = this._coordinates.length,
                i = !this.settings.autoWidth,
                n = this.$stage.children();
            if (i && e.items.merge)
                for (; t--;) e.css.width = this._widths[this.relative(t)], n.eq(t).css(e.css);
            else i && (e.css.width = e.items.width, n.css(e.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            for (var e, t, i = this.settings.rtl ? 1 : -1, n = 2 * this.settings.stagePadding, o = this.coordinates(this.current()) + n, r = o + this.width() * i, s = [], a = 0, l = this._coordinates.length; a < l; a++) e = this._coordinates[a - 1] || 0, t = Math.abs(this._coordinates[a]) + n * i, (this.op(e, "<=", o) && this.op(e, ">", r) || this.op(t, "<", o) && this.op(t, ">", r)) && s.push(a);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], N.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = E("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(E("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    }, N.prototype.initializeItems = function() {
        var e = this.$element.find(".owl-item");
        if (e.length) return this._items = e.get().map(function(e) {
            return E(e)
        }), this._mergers = this._items.map(function() {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, N.prototype.initialize = function() {
        var e, t;
        this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (e = this.$element.find("img"), t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : void 0, t = this.$element.children(t).width(), e.length && t <= 0 && this.preloadAutoWidthImages(e)), this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, N.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, N.prototype.setup = function() {
        var t = this.viewport(),
            e = this.options.responsive,
            i = -1,
            n = null;
        e ? (E.each(e, function(e) {
            e <= t && i < e && (i = Number(e))
        }), "function" == typeof(n = E.extend({}, this.options, e[i])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : n = E.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: n
            }
        }), this._breakpoint = i, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, N.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, N.prototype.prepare = function(e) {
        var t = this.trigger("prepare", {
            content: e
        });
        return t.data || (t.data = E("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: t.data
        }), t.data
    }, N.prototype.update = function() {
        for (var e = 0, t = this._pipe.length, i = E.proxy(function(e) {
                return this[e]
            }, this._invalidated), n = {}; e < t;)(this._invalidated.all || 0 < E.grep(this._pipe[e].filter, i).length) && this._pipe[e].run(n), e++;
        this._invalidated = {}, this.is("valid") || this.enter("valid")
    }, N.prototype.width = function(e) {
        switch (e = e || N.Width.Default) {
            case N.Width.Inner:
            case N.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, N.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, N.prototype.onThrottledResize = function() {
        T.clearTimeout(this.resizeTimer), this.resizeTimer = T.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, N.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, N.prototype.registerEventHandlers = function() {
        E.support.transition && this.$stage.on(E.support.transition.end + ".owl.core", E.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(T, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", E.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", E.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", E.proxy(this.onDragEnd, this)))
    }, N.prototype.onDragStart = function(e) {
        var t = null;
        3 !== e.which && (t = E.support.transform ? {
            x: (t = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === t.length ? 12 : 4],
            y: t[16 === t.length ? 13 : 5]
        } : (t = this.$stage.position(), {
            x: this.settings.rtl ? t.left + this.$stage.width() - this.width() + this.settings.margin : t.left,
            y: t.top
        }), this.is("animating") && (E.support.transform ? this.animate(t.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = E(e.target), this._drag.stage.start = t, this._drag.stage.current = t, this._drag.pointer = this.pointer(e), E(C).on("mouseup.owl.core touchend.owl.core", E.proxy(this.onDragEnd, this)), E(C).one("mousemove.owl.core touchmove.owl.core", E.proxy(function(e) {
            var t = this.difference(this._drag.pointer, this.pointer(e));
            E(C).on("mousemove.owl.core touchmove.owl.core", E.proxy(this.onDragMove, this)), Math.abs(t.x) < Math.abs(t.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, N.prototype.onDragMove = function(e) {
        var t, i = null,
            n = null,
            o = this.difference(this._drag.pointer, this.pointer(e)),
            r = this.difference(this._drag.stage.start, o);
        this.is("dragging") && (e.preventDefault(), this.settings.loop ? (i = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - i, r.x = ((r.x - i) % n + n) % n + i) : (i = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), t = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, i + t), n + t)), this._drag.stage.current = r, this.animate(r.x))
    }, N.prototype.onDragEnd = function(e) {
        var t = this.difference(this._drag.pointer, this.pointer(e)),
            i = this._drag.stage.current,
            e = 0 < t.x ^ this.settings.rtl ? "left" : "right";
        E(C).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== t.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== t.x ? e : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = e, (3 < Math.abs(t.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, N.prototype.closest = function(i, n) {
        var o = -1,
            r = this.width(),
            s = this.coordinates();
        return this.settings.freeDrag || E.each(s, E.proxy(function(e, t) {
            return "left" === n && t - 30 < i && i < t + 30 ? o = e : "right" === n && t - r - 30 < i && i < t - r + 30 ? o = e + 1 : this.op(i, "<", t) && this.op(i, ">", void 0 !== s[e + 1] ? s[e + 1] : t - r) && (o = "left" === n ? e + 1 : e), -1 === o
        }, this)), this.settings.loop || (this.op(i, ">", s[this.minimum()]) ? o = i = this.minimum() : this.op(i, "<", s[this.maximum()]) && (o = i = this.maximum())), o
    }, N.prototype.animate = function(e) {
        var t = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), t && (this.enter("animating"), this.trigger("translate")), E.support.transform3d && E.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : t ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, E.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, N.prototype.is = function(e) {
        return this._states.current[e] && 0 < this._states.current[e]
    }, N.prototype.current = function(e) {
        return void 0 === e ? this._current : 0 !== this._items.length ? (e = this.normalize(e), this._current !== e && (void 0 !== (t = this.trigger("change", {
            property: {
                name: "position",
                value: e
            }
        })).data && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
            property: {
                name: "position",
                value: this._current
            }
        })), this._current) : void 0;
        var t
    }, N.prototype.invalidate = function(e) {
        return "string" === E.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), E.map(this._invalidated, function(e, t) {
            return t
        })
    }, N.prototype.reset = function(e) {
        void 0 !== (e = this.normalize(e)) && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
    }, N.prototype.normalize = function(e, t) {
        var i = this._items.length,
            t = t ? 0 : this._clones.length;
        return !this.isNumeric(e) || i < 1 ? e = void 0 : (e < 0 || i + t <= e) && (e = ((e - t / 2) % i + i) % i + t / 2), e
    }, N.prototype.relative = function(e) {
        return e -= this._clones.length / 2, this.normalize(e, !0)
    }, N.prototype.maximum = function(e) {
        var t, i, n, o = this.settings,
            r = this._coordinates.length;
        if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
        else if (o.autoWidth || o.merge) {
            if (t = this._items.length)
                for (i = this._items[--t].width(), n = this.$element.width(); t-- && !((i += this._items[t].width() + this.settings.margin) > n););
            r = t + 1
        } else r = o.center ? this._items.length - 1 : this._items.length - o.items;
        return e && (r -= this._clones.length / 2), Math.max(r, 0)
    }, N.prototype.minimum = function(e) {
        return e ? 0 : this._clones.length / 2
    }, N.prototype.items = function(e) {
        return void 0 === e ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
    }, N.prototype.mergers = function(e) {
        return void 0 === e ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
    }, N.prototype.clones = function(i) {
        function n(e) {
            return e % 2 == 0 ? o + e / 2 : t - (e + 1) / 2
        }
        var t = this._clones.length / 2,
            o = t + this._items.length;
        return void 0 === i ? E.map(this._clones, function(e, t) {
            return n(t)
        }) : E.map(this._clones, function(e, t) {
            return e === i ? n(t) : null
        })
    }, N.prototype.speed = function(e) {
        return void 0 !== e && (this._speed = e), this._speed
    }, N.prototype.coordinates = function(e) {
        var t, i = 1,
            n = e - 1;
        return void 0 === e ? E.map(this._coordinates, E.proxy(function(e, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, n = e + 1), t = this._coordinates[e], t += (this.width() - t + (this._coordinates[n] || 0)) / 2 * i) : t = this._coordinates[n] || 0, Math.ceil(t))
    }, N.prototype.duration = function(e, t, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, N.prototype.to = function(e, t) {
        var i, n = this.current(),
            o = e - this.relative(n),
            r = (0 < o) - (o < 0),
            s = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), (i = (((e = n + o) - a) % s + s) % s + a) !== e && i - o <= l && 0 < i - o && (n = i - o, e = i, this.reset(n))) : e = this.settings.rewind ? (e % (l += 1) + l) % l : Math.max(a, Math.min(l, e)), this.speed(this.duration(n, e, t)), this.current(e), this.isVisible() && this.update()
    }, N.prototype.next = function(e) {
        e = e || !1, this.to(this.relative(this.current()) + 1, e)
    }, N.prototype.prev = function(e) {
        e = e || !1, this.to(this.relative(this.current()) - 1, e)
    }, N.prototype.onTransitionEnd = function(e) {
        if (void 0 !== e && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, N.prototype.viewport = function() {
        var e;
        return this.options.responsiveBaseElement !== T ? e = E(this.options.responsiveBaseElement).width() : T.innerWidth ? e = T.innerWidth : C.documentElement && C.documentElement.clientWidth ? e = C.documentElement.clientWidth : console.warn("Can not detect viewport width."), e
    }, N.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e = e && (e instanceof jQuery ? e : E(e)), (e = this.settings.nestedItemSelector ? e.find("." + this.settings.nestedItemSelector) : e).filter(function() {
            return 1 === this.nodeType
        }).each(E.proxy(function(e, t) {
            t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, N.prototype.add = function(e, t) {
        var i = this.relative(this._current);
        t = void 0 === t ? this._items.length : this.normalize(t, !0), e = e instanceof jQuery ? e : E(e), this.trigger("add", {
            content: e,
            position: t
        }), e = this.prepare(e), 0 === this._items.length || t === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[t - 1].after(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[t].before(e), this._items.splice(t, 0, e), this._mergers.splice(t, 0, +e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: t
        })
    }, N.prototype.remove = function(e) {
        void 0 !== (e = this.normalize(e, !0)) && (this.trigger("remove", {
            content: this._items[e],
            position: e
        }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: e
        }))
    }, N.prototype.preloadAutoWidthImages = function(e) {
        e.each(E.proxy(function(e, t) {
            this.enter("pre-loading"), t = E(t), E(new Image).one("load", E.proxy(function(e) {
                t.attr("src", e.target.src), t.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh()
            }, this)).attr("src", t.attr("src") || t.attr("data-src") || t.attr("data-src-retina"))
        }, this))
    }, N.prototype.destroy = function() {
        for (var e in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), E(C).off(".owl.core"), !1 !== this.settings.responsive && (T.clearTimeout(this.resizeTimer), this.off(T, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[e].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, N.prototype.op = function(e, t, i) {
        var n = this.settings.rtl;
        switch (t) {
            case "<":
                return n ? i < e : e < i;
            case ">":
                return n ? e < i : i < e;
            case ">=":
                return n ? e <= i : i <= e;
            case "<=":
                return n ? i <= e : e <= i
        }
    }, N.prototype.on = function(e, t, i, n) {
        e.addEventListener ? e.addEventListener(t, i, n) : e.attachEvent && e.attachEvent("on" + t, i)
    }, N.prototype.off = function(e, t, i, n) {
        e.removeEventListener ? e.removeEventListener(t, i, n) : e.detachEvent && e.detachEvent("on" + t, i)
    }, N.prototype.trigger = function(e, t, i, n, o) {
        var r = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            s = E.camelCase(E.grep(["on", e, i], function(e) {
                return e
            }).join("-").toLowerCase()),
            a = E.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), E.extend({
                relatedTarget: this
            }, r, t));
        return this._supress[e] || (E.each(this._plugins, function(e, t) {
            t.onTrigger && t.onTrigger(a)
        }), this.register({
            type: N.Type.Event,
            name: e
        }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[s] && this.settings[s].call(this, a)), a
    }, N.prototype.enter = function(e) {
        E.each([e].concat(this._states.tags[e] || []), E.proxy(function(e, t) {
            void 0 === this._states.current[t] && (this._states.current[t] = 0), this._states.current[t]++
        }, this))
    }, N.prototype.leave = function(e) {
        E.each([e].concat(this._states.tags[e] || []), E.proxy(function(e, t) {
            this._states.current[t]--
        }, this))
    }, N.prototype.register = function(i) {
        var t;
        i.type === N.Type.Event ? (E.event.special[i.name] || (E.event.special[i.name] = {}), E.event.special[i.name].owl || (t = E.event.special[i.name]._default, E.event.special[i.name]._default = function(e) {
            return !t || !t.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && -1 < e.namespace.indexOf("owl") : t.apply(this, arguments)
        }, E.event.special[i.name].owl = !0)) : i.type === N.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = E.grep(this._states.tags[i.name], E.proxy(function(e, t) {
            return E.inArray(e, this._states.tags[i.name]) === t
        }, this)))
    }, N.prototype.suppress = function(e) {
        E.each(e, E.proxy(function(e, t) {
            this._supress[t] = !0
        }, this))
    }, N.prototype.release = function(e) {
        E.each(e, E.proxy(function(e, t) {
            delete this._supress[t]
        }, this))
    }, N.prototype.pointer = function(e) {
        var t = {
            x: null,
            y: null
        };
        return (e = (e = e.originalEvent || e || T.event).touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e).pageX ? (t.x = e.pageX, t.y = e.pageY) : (t.x = e.clientX, t.y = e.clientY), t
    }, N.prototype.isNumeric = function(e) {
        return !isNaN(parseFloat(e))
    }, N.prototype.difference = function(e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }, E.fn.owlCarousel = function(t) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var e = E(this),
                i = e.data("owl.carousel");
            i || (i = new N(this, "object" == _typeof(t) && t), e.data("owl.carousel", i), E.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, t) {
                i.register({
                    type: N.Type.Event,
                    name: t
                }), i.$element.on(t + ".owl.carousel.core", E.proxy(function(e) {
                    e.namespace && e.relatedTarget !== this && (this.suppress([t]), i[t].apply(this, [].slice.call(arguments, 1)), this.release([t]))
                }, i))
            })), "string" == typeof t && "_" !== t.charAt(0) && i[t].apply(i, n)
        })
    }, E.fn.owlCarousel.Constructor = N, _ = window.Zepto || window.jQuery, x = window, document, M.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, M.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(), this._interval = x.setInterval(_.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, M.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, M.prototype.destroy = function() {
        var e, t;
        for (e in x.clearInterval(this._interval), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, _.fn.owlCarousel.Constructor.Plugins.AutoRefresh = M, b = window.Zepto || window.jQuery, w = window, document, j.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, j.prototype.load = function(e) {
        var t = this._core.$stage.children().eq(e),
            e = t && t.find(".owl-lazy");
        !e || -1 < b.inArray(t.get(0), this._loaded) || (e.each(b.proxy(function(e, t) {
            var i = b(t),
                n = 1 < w.devicePixelRatio && i.attr("data-src-retina") || i.attr("data-src") || i.attr("data-srcset");
            this._core.trigger("load", {
                element: i,
                url: n
            }, "lazy"), i.is("img") ? i.one("load.owl.lazy", b.proxy(function() {
                i.css("opacity", 1), this._core.trigger("loaded", {
                    element: i,
                    url: n
                }, "lazy")
            }, this)).attr("src", n) : i.is("source") ? i.one("load.owl.lazy", b.proxy(function() {
                this._core.trigger("loaded", {
                    element: i,
                    url: n
                }, "lazy")
            }, this)).attr("srcset", n) : ((t = new Image).onload = b.proxy(function() {
                i.css({
                    "background-image": 'url("' + n + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: i,
                    url: n
                }, "lazy")
            }, this), t.src = n)
        }, this)), this._loaded.push(t.get(0)))
    }, j.prototype.destroy = function() {
        var e, t;
        for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, b.fn.owlCarousel.Constructor.Plugins.Lazy = j, v = window.Zepto || window.jQuery, y = window, document, O.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, O.prototype.update = function() {
        var e = this._core._current,
            t = e + this._core.settings.items,
            i = this._core.settings.lazyLoad,
            e = this._core.$stage.children().toArray().slice(e, t),
            n = [],
            t = 0;
        v.each(e, function(e, t) {
            n.push(v(t).height())
        }), (t = Math.max.apply(null, n)) <= 1 && i && this._previousHeight && (t = this._previousHeight), this._previousHeight = t, this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
    }, O.prototype.destroy = function() {
        var e, t;
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, v.fn.owlCarousel.Constructor.Plugins.AutoHeight = O, m = window.Zepto || window.jQuery, window, g = document, L.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, L.prototype.fetch = function(e, t) {
        var i = e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube",
            n = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
            o = e.attr("data-width") || this._core.settings.videoWidth,
            r = e.attr("data-height") || this._core.settings.videoHeight,
            s = e.attr("href");
        if (!s) throw new Error("Missing video URL.");
        if (-1 < (n = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
        else if (-1 < n[3].indexOf("vimeo")) i = "vimeo";
        else {
            if (!(-1 < n[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[s] = {
            type: i,
            id: n,
            width: o,
            height: r
        }, t.attr("data-video", s), this.thumbnail(e, this._videos[s])
    }, L.prototype.thumbnail = function(t, e) {
        function i(e) {
            n = c.lazyLoad ? m("<div/>", {
                class: "owl-video-tn " + l,
                srcType: e
            }) : m("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + e + ")"
            }), t.after(n), t.after('<div class="owl-video-play-icon"></div>')
        }
        var n, o, r = e.width && e.height ? "width:" + e.width + "px;height:" + e.height + "px;" : "",
            s = t.find("img"),
            a = "src",
            l = "",
            c = this._core.settings;
        if (t.wrap(m("<div/>", {
                class: "owl-video-wrapper",
                style: r
            })), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), s.length) return i(s.attr(a)), s.remove(), !1;
        "youtube" === e.type ? (o = "//img.youtube.com/vi/" + e.id + "/hqdefault.jpg", i(o)) : "vimeo" === e.type ? m.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + e.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(e) {
                o = e[0].thumbnail_large, i(o)
            }
        }) : "vzaar" === e.type && m.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + e.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(e) {
                o = e.framegrab_url, i(o)
            }
        })
    }, L.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, L.prototype.play = function(e) {
        var t = m(e.target).closest("." + this._core.settings.itemClass),
            i = this._videos[t.attr("data-video")],
            n = i.width || "100%",
            o = i.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), t = this._core.items(this._core.relative(t.index())), this._core.reset(t.index()), (e = m('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", o), e.attr("width", n), "youtube" === i.type ? e.attr("src", "//www.youtube.com/embed/" + i.id + "?autoplay=1&rel=0&v=" + i.id) : "vimeo" === i.type ? e.attr("src", "//player.vimeo.com/video/" + i.id + "?autoplay=1") : "vzaar" === i.type && e.attr("src", "//view.vzaar.com/" + i.id + "/player?autoplay=true"), m(e).wrap('<div class="owl-video-frame" />').insertAfter(t.find(".owl-video")), this._playing = t.addClass("owl-video-playing"))
    }, L.prototype.isInFullScreen = function() {
        var e = g.fullscreenElement || g.mozFullScreenElement || g.webkitFullscreenElement;
        return e && m(e).parent().hasClass("owl-video-frame")
    }, L.prototype.destroy = function() {
        var e, t;
        for (e in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, m.fn.owlCarousel.Constructor.Plugins.Video = L, f = window.Zepto || window.jQuery, window, document, D.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, D.prototype.swap = function() {
        var e, t, i, n, o, r;
        1 === this.core.settings.items && f.support.animation && f.support.transition && (this.core.speed(0), t = f.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous), n = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn, r = this.core.settings.animateOut, this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(f.support.animation.end, t).css({
            left: e + "px"
        }).addClass("animated owl-animated-out").addClass(r)), o && n.one(f.support.animation.end, t).addClass("animated owl-animated-in").addClass(o)))
    }, D.prototype.clear = function(e) {
        f(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, D.prototype.destroy = function() {
        var e, t;
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, f.fn.owlCarousel.Constructor.Plugins.Animate = D, d = window.Zepto || window.jQuery, h = window, p = document, A.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, A.prototype._next = function(e) {
        this._call = h.setTimeout(d.proxy(this._next, this, e), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || p.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
    }, A.prototype.read = function() {
        return (new Date).getTime() - this._time
    }, A.prototype.play = function(e, t) {
        var i;
        this._core.is("rotating") || this._core.enter("rotating"), e = e || this._core.settings.autoplayTimeout, i = Math.min(this._time % (this._timeout || e), e), this._paused ? (this._time = this.read(), this._paused = !1) : h.clearTimeout(this._call), this._time += this.read() % e - i, this._timeout = e, this._call = h.setTimeout(d.proxy(this._next, this, t), e - i)
    }, A.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, h.clearTimeout(this._call), this._core.leave("rotating"))
    }, A.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, h.clearTimeout(this._call))
    }, A.prototype.destroy = function() {
        var e, t;
        for (e in this.stop(), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, d.fn.owlCarousel.Constructor.Plugins.autoplay = A, u = window.Zepto || window.jQuery, window, document, k.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, k.prototype.initialize = function() {
        var e, i = this._core.settings;
        for (e in this._controls.$relative = (i.navContainer ? u(i.navContainer) : u("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = u("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", u.proxy(function(e) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = u("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", u.proxy(function(e) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [u('<button role="button">').addClass(i.dotClass).append(u("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? u(i.dotsContainer) : u("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", u.proxy(function(e) {
                var t = (u(e.target).parent().is(this._controls.$absolute) ? u(e.target) : u(e.target).parent()).index();
                e.preventDefault(), this.to(t, i.dotsSpeed)
            }, this)), this._overrides) this._core[e] = u.proxy(this[e], this)
    }, k.prototype.destroy = function() {
        var e, t, i, n, o = this._core.settings;
        for (e in this._handlers) this.$element.off(e, this._handlers[e]);
        for (t in this._controls) "$relative" === t && o.navContainer ? this._controls[t].html("") : this._controls[t].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, k.prototype.update = function() {
        var e, t, i = this._core.clones().length / 2,
            n = i + this._core.items().length,
            o = this._core.maximum(!0),
            r = this._core.settings,
            s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
            for (this._pages = [], e = i, t = 0; e < n; e++) {
                if (s <= t || 0 === t) {
                    if (this._pages.push({
                            start: Math.min(o, e - i),
                            end: e - i + s - 1
                        }), Math.min(o, e - i) === o) break;
                    t = 0
                }
                t += this._core.mergers(this._core.relative(e))
            }
    }, k.prototype.draw = function() {
        var e = this._core.settings,
            t = this._core.items().length <= e.items,
            i = this._core.relative(this._core.current()),
            n = e.loop || e.rewind;
        this._controls.$relative.toggleClass("disabled", !e.nav || t), e.nav && (this._controls.$previous.toggleClass("disabled", !n && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !n && i >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || t), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 != t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(1 + t).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(u.inArray(this.current(), this._pages)).addClass("active"))
    }, k.prototype.onTrigger = function(e) {
        var t = this._core.settings;
        e.page = {
            index: u.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: t && (t.center || t.autoWidth || t.dotsData ? 1 : t.dotsEach || t.items)
        }
    }, k.prototype.current = function() {
        var i = this._core.relative(this._core.current());
        return u.grep(this._pages, u.proxy(function(e, t) {
            return e.start <= i && e.end >= i
        }, this)).pop()
    }, k.prototype.getPosition = function(e) {
        var t, i, n = this._core.settings;
        return "page" == n.slideBy ? (t = u.inArray(this.current(), this._pages), i = this._pages.length, e ? ++t : --t, t = this._pages[(t % i + i) % i].start) : (t = this._core.relative(this._core.current()), i = this._core.items().length, e ? t += n.slideBy : t -= n.slideBy), t
    }, k.prototype.next = function(e) {
        u.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, k.prototype.prev = function(e) {
        u.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, k.prototype.to = function(e, t, i) {
        !i && this._pages.length ? (i = this._pages.length, u.proxy(this._overrides.to, this._core)(this._pages[(e % i + i) % i].start, t)) : u.proxy(this._overrides.to, this._core)(e, t)
    }, u.fn.owlCarousel.Constructor.Plugins.Navigation = k, l = window.Zepto || window.jQuery, c = window, document, S.Defaults = {
        URLhashListener: !1
    }, S.prototype.destroy = function() {
        var e, t;
        for (e in l(c).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, l.fn.owlCarousel.Constructor.Plugins.Hash = S, o = window.Zepto || window.jQuery, window, document, r = o("<support>").get(0).style, s = "Webkit Moz O ms".split(" "), a = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, i("transition") && (o.support.transition = new String(n("transition")), o.support.transition.end = a.transition.end[o.support.transition]), i("animation") && (o.support.animation = new String(n("animation")), o.support.animation.end = a.animation.end[o.support.animation]), i("transform") && (o.support.transform = new String(n("transform")), o.support.transform3d = !!i("perspective"))
}, function(e, t) {
    function r(e, t) {
        var i = document.querySelector("#" + e + " > .particles-js-canvas-el");
        this.pJS = {
            canvas: {
                el: i,
                w: i.offsetWidth,
                h: i.offsetHeight
            },
            particles: {
                number: {
                    value: 400,
                    density: {
                        enable: !0,
                        value_area: 800
                    }
                },
                color: {
                    value: "#fff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#ff0000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 1,
                    random: !1,
                    anim: {
                        enable: !1,
                        speed: 2,
                        opacity_min: 0,
                        sync: !1
                    }
                },
                size: {
                    value: 20,
                    random: !1,
                    anim: {
                        enable: !1,
                        speed: 20,
                        size_min: 0,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: !0,
                    distance: 100,
                    color: "#fff",
                    opacity: 1,
                    width: 1
                },
                move: {
                    enable: !0,
                    speed: 2,
                    direction: "none",
                    random: !1,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: {
                        enable: !1,
                        rotateX: 3e3,
                        rotateY: 3e3
                    }
                },
                array: []
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: !0,
                        mode: "grab"
                    },
                    onclick: {
                        enable: !0,
                        mode: "push"
                    },
                    resize: !0
                },
                modes: {
                    grab: {
                        distance: 100,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 200,
                        size: 80,
                        duration: .4
                    },
                    repulse: {
                        distance: 200,
                        duration: .4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                },
                mouse: {}
            },
            retina_detect: !1,
            fn: {
                interact: {},
                modes: {},
                vendors: {}
            },
            tmp: {}
        };
        var u = this.pJS;
        t && Object.deepExtend(u, t), u.tmp.obj = {
            size_value: u.particles.size.value,
            size_anim_speed: u.particles.size.anim.speed,
            move_speed: u.particles.move.speed,
            line_linked_distance: u.particles.line_linked.distance,
            line_linked_width: u.particles.line_linked.width,
            mode_grab_distance: u.interactivity.modes.grab.distance,
            mode_bubble_distance: u.interactivity.modes.bubble.distance,
            mode_bubble_size: u.interactivity.modes.bubble.size,
            mode_repulse_distance: u.interactivity.modes.repulse.distance
        }, u.fn.retinaInit = function() {
            u.retina_detect && 1 < window.devicePixelRatio ? (u.canvas.pxratio = window.devicePixelRatio, u.tmp.retina = !0) : (u.canvas.pxratio = 1, u.tmp.retina = !1), u.canvas.w = u.canvas.el.offsetWidth * u.canvas.pxratio, u.canvas.h = u.canvas.el.offsetHeight * u.canvas.pxratio, u.particles.size.value = u.tmp.obj.size_value * u.canvas.pxratio, u.particles.size.anim.speed = u.tmp.obj.size_anim_speed * u.canvas.pxratio, u.particles.move.speed = u.tmp.obj.move_speed * u.canvas.pxratio, u.particles.line_linked.distance = u.tmp.obj.line_linked_distance * u.canvas.pxratio, u.interactivity.modes.grab.distance = u.tmp.obj.mode_grab_distance * u.canvas.pxratio, u.interactivity.modes.bubble.distance = u.tmp.obj.mode_bubble_distance * u.canvas.pxratio, u.particles.line_linked.width = u.tmp.obj.line_linked_width * u.canvas.pxratio, u.interactivity.modes.bubble.size = u.tmp.obj.mode_bubble_size * u.canvas.pxratio, u.interactivity.modes.repulse.distance = u.tmp.obj.mode_repulse_distance * u.canvas.pxratio
        }, u.fn.canvasInit = function() {
            u.canvas.ctx = u.canvas.el.getContext("2d")
        }, u.fn.canvasSize = function() {
            u.canvas.el.width = u.canvas.w, u.canvas.el.height = u.canvas.h, u && u.interactivity.events.resize && window.addEventListener("resize", function() {
                u.canvas.w = u.canvas.el.offsetWidth, u.canvas.h = u.canvas.el.offsetHeight, u.tmp.retina && (u.canvas.w *= u.canvas.pxratio, u.canvas.h *= u.canvas.pxratio), u.canvas.el.width = u.canvas.w, u.canvas.el.height = u.canvas.h, u.particles.move.enable || (u.fn.particlesEmpty(), u.fn.particlesCreate(), u.fn.particlesDraw(), u.fn.vendors.densityAutoParticles()), u.fn.vendors.densityAutoParticles()
            })
        }, u.fn.canvasPaint = function() {
            u.canvas.ctx.fillRect(0, 0, u.canvas.w, u.canvas.h)
        }, u.fn.canvasClear = function() {
            u.canvas.ctx.clearRect(0, 0, u.canvas.w, u.canvas.h)
        }, u.fn.particle = function(e, t, i) {
            this.radius = (u.particles.size.random ? Math.random() : 1) * u.particles.size.value, u.particles.size.anim.enable && (this.size_status = !1, this.vs = u.particles.size.anim.speed / 100, u.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * u.canvas.w, this.y = i ? i.y : Math.random() * u.canvas.h, this.x > u.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > u.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), u.particles.move.bounce && u.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == _typeof(e.value) ? e.value instanceof Array ? (o = e.value[Math.floor(Math.random() * u.particles.color.value.length)], this.color.rgb = s(o)) : (null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = {
                r: e.value.r,
                g: e.value.g,
                b: e.value.b
            }), null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = {
                h: e.value.h,
                s: e.value.s,
                l: e.value.l
            })) : "random" == e.value ? this.color.rgb = {
                r: Math.floor(256 * Math.random()) + 0,
                g: Math.floor(256 * Math.random()) + 0,
                b: Math.floor(256 * Math.random()) + 0
            } : "string" == typeof e.value && (this.color = e, this.color.rgb = s(this.color.value)), this.opacity = (u.particles.opacity.random ? Math.random() : 1) * u.particles.opacity.value, u.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = u.particles.opacity.anim.speed / 100, u.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
            var n = {};
            switch (u.particles.move.direction) {
                case "top":
                    n = {
                        x: 0,
                        y: -1
                    };
                    break;
                case "top-right":
                    n = {
                        x: .5,
                        y: -.5
                    };
                    break;
                case "right":
                    n = {
                        x: 1,
                        y: -0
                    };
                    break;
                case "bottom-right":
                    n = {
                        x: .5,
                        y: .5
                    };
                    break;
                case "bottom":
                    n = {
                        x: 0,
                        y: 1
                    };
                    break;
                case "bottom-left":
                    n = {
                        x: -.5,
                        y: 1
                    };
                    break;
                case "left":
                    n = {
                        x: -1,
                        y: 0
                    };
                    break;
                case "top-left":
                    n = {
                        x: -.5,
                        y: -.5
                    };
                    break;
                default:
                    n = {
                        x: 0,
                        y: 0
                    }
            }
            u.particles.move.straight ? (this.vx = n.x, this.vy = n.y, u.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
            var o = u.particles.shape.type;
            "object" == _typeof(o) ? o instanceof Array && (e = o[Math.floor(Math.random() * o.length)], this.shape = e) : this.shape = o, "image" == this.shape && (o = u.particles.shape, this.img = {
                src: o.image.src,
                ratio: o.image.width / o.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == u.tmp.img_type && null != u.tmp.source_svg && (u.fn.vendors.createSvgImg(this), u.tmp.pushing && (this.img.loaded = !1)))
        }, u.fn.particle.prototype.draw = function() {
            var e = this,
                t = null != e.radius_bubble ? e.radius_bubble : e.radius,
                i = null != e.opacity_bubble ? e.opacity_bubble : e.opacity,
                i = e.color.rgb ? "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + i + ")" : "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + i + ")";
            switch (u.canvas.ctx.fillStyle = i, u.canvas.ctx.beginPath(), e.shape) {
                case "circle":
                    u.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
                    break;
                case "edge":
                    u.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
                    break;
                case "triangle":
                    u.fn.vendors.drawShape(u.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
                    break;
                case "polygon":
                    u.fn.vendors.drawShape(u.canvas.ctx, e.x - t / (u.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (u.particles.shape.polygon.nb_sides / 3), u.particles.shape.polygon.nb_sides, 1);
                    break;
                case "star":
                    u.fn.vendors.drawShape(u.canvas.ctx, e.x - 2 * t / (u.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (u.particles.shape.polygon.nb_sides / 3), u.particles.shape.polygon.nb_sides, 2);
                    break;
                case "image":
                    var n = "svg" == u.tmp.img_type ? e.img.obj : u.tmp.img_obj;
                    n && u.canvas.ctx.drawImage(n, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio)
            }
            u.canvas.ctx.closePath(), 0 < u.particles.shape.stroke.width && (u.canvas.ctx.strokeStyle = u.particles.shape.stroke.color, u.canvas.ctx.lineWidth = u.particles.shape.stroke.width, u.canvas.ctx.stroke()), u.canvas.ctx.fill()
        }, u.fn.particlesCreate = function() {
            for (var e = 0; e < u.particles.number.value; e++) u.particles.array.push(new u.fn.particle(u.particles.color, u.particles.opacity.value))
        }, u.fn.particlesUpdate = function() {
            for (var e = 0; e < u.particles.array.length; e++) {
                var t, i = u.particles.array[e];
                if (u.particles.move.enable && (t = u.particles.move.speed / 2, i.x += i.vx * t, i.y += i.vy * t), u.particles.opacity.anim.enable && (1 == i.opacity_status ? (i.opacity >= u.particles.opacity.value && (i.opacity_status = !1), i.opacity += i.vo) : (i.opacity <= u.particles.opacity.anim.opacity_min && (i.opacity_status = !0), i.opacity -= i.vo), i.opacity < 0 && (i.opacity = 0)), u.particles.size.anim.enable && (1 == i.size_status ? (i.radius >= u.particles.size.value && (i.size_status = !1), i.radius += i.vs) : (i.radius <= u.particles.size.anim.size_min && (i.size_status = !0), i.radius -= i.vs), i.radius < 0 && (i.radius = 0)), t = "bounce" == u.particles.move.out_mode ? {
                        x_left: i.radius,
                        x_right: u.canvas.w,
                        y_top: i.radius,
                        y_bottom: u.canvas.h
                    } : {
                        x_left: -i.radius,
                        x_right: u.canvas.w + i.radius,
                        y_top: -i.radius,
                        y_bottom: u.canvas.h + i.radius
                    }, "bounce" === (i.x - i.radius > u.canvas.w ? (i.x = t.x_left, i.y = Math.random() * u.canvas.h) : i.x + i.radius < 0 && (i.x = t.x_right, i.y = Math.random() * u.canvas.h), i.y - i.radius > u.canvas.h ? (i.y = t.y_top, i.x = Math.random() * u.canvas.w) : i.y + i.radius < 0 && (i.y = t.y_bottom, i.x = Math.random() * u.canvas.w), u.particles.move.out_mode) && ((i.x + i.radius > u.canvas.w || i.x - i.radius < 0) && (i.vx = -i.vx), (i.y + i.radius > u.canvas.h || i.y - i.radius < 0) && (i.vy = -i.vy)), d("grab", u.interactivity.events.onhover.mode) && u.fn.modes.grabParticle(i), (d("bubble", u.interactivity.events.onhover.mode) || d("bubble", u.interactivity.events.onclick.mode)) && u.fn.modes.bubbleParticle(i), (d("repulse", u.interactivity.events.onhover.mode) || d("repulse", u.interactivity.events.onclick.mode)) && u.fn.modes.repulseParticle(i), u.particles.line_linked.enable || u.particles.move.attract.enable)
                    for (var n = e + 1; n < u.particles.array.length; n++) {
                        var o = u.particles.array[n];
                        u.particles.line_linked.enable && u.fn.interact.linkParticles(i, o), u.particles.move.attract.enable && u.fn.interact.attractParticles(i, o), u.particles.move.bounce && u.fn.interact.bounceParticles(i, o)
                    }
            }
        }, u.fn.particlesDraw = function() {
            u.canvas.ctx.clearRect(0, 0, u.canvas.w, u.canvas.h), u.fn.particlesUpdate();
            for (var e = 0; e < u.particles.array.length; e++) u.particles.array[e].draw()
        }, u.fn.particlesEmpty = function() {
            u.particles.array = []
        }, u.fn.particlesRefresh = function() {
            cancelRequestAnimFrame(u.fn.checkAnimFrame), cancelRequestAnimFrame(u.fn.drawAnimFrame), u.tmp.source_svg = void 0, u.tmp.img_obj = void 0, u.tmp.count_svg = 0, u.fn.particlesEmpty(), u.fn.canvasClear(), u.fn.vendors.start()
        }, u.fn.interact.linkParticles = function(e, t) {
            var i = e.x - t.x,
                n = e.y - t.y,
                i = Math.sqrt(i * i + n * n);
            i <= u.particles.line_linked.distance && (0 < (n = u.particles.line_linked.opacity - i / (1 / u.particles.line_linked.opacity) / u.particles.line_linked.distance) && (i = u.particles.line_linked.color_rgb_line, u.canvas.ctx.strokeStyle = "rgba(" + i.r + "," + i.g + "," + i.b + "," + n + ")", u.canvas.ctx.lineWidth = u.particles.line_linked.width, u.canvas.ctx.beginPath(), u.canvas.ctx.moveTo(e.x, e.y), u.canvas.ctx.lineTo(t.x, t.y), u.canvas.ctx.stroke(), u.canvas.ctx.closePath()))
        }, u.fn.interact.attractParticles = function(e, t) {
            var i = e.x - t.x,
                n = e.y - t.y;
            Math.sqrt(i * i + n * n) <= u.particles.line_linked.distance && (i = i / (1e3 * u.particles.move.attract.rotateX), n = n / (1e3 * u.particles.move.attract.rotateY), e.vx -= i, e.vy -= n, t.vx += i, t.vy += n)
        }, u.fn.interact.bounceParticles = function(e, t) {
            var i = e.x - t.x,
                n = e.y - t.y;
            Math.sqrt(i * i + n * n) <= e.radius + t.radius && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
        }, u.fn.modes.pushParticles = function(e, t) {
            u.tmp.pushing = !0;
            for (var i = 0; i < e; i++) u.particles.array.push(new u.fn.particle(u.particles.color, u.particles.opacity.value, {
                x: t ? t.pos_x : Math.random() * u.canvas.w,
                y: t ? t.pos_y : Math.random() * u.canvas.h
            })), i == e - 1 && (u.particles.move.enable || u.fn.particlesDraw(), u.tmp.pushing = !1)
        }, u.fn.modes.removeParticles = function(e) {
            u.particles.array.splice(0, e), u.particles.move.enable || u.fn.particlesDraw()
        }, u.fn.modes.bubbleParticle = function(s) {
            var e, t, i, n, o, r, a, l, c;
            u.interactivity.events.onhover.enable && d("bubble", u.interactivity.events.onhover.mode) ? (a = function() {
                s.opacity_bubble = s.opacity, s.radius_bubble = s.radius
            }, e = s.x - u.interactivity.mouse.pos_x, t = s.y - u.interactivity.mouse.pos_y, i = 1 - (l = Math.sqrt(e * e + t * t)) / u.interactivity.modes.bubble.distance, l <= u.interactivity.modes.bubble.distance ? 0 <= i && "mousemove" == u.interactivity.status && (u.interactivity.modes.bubble.size != u.particles.size.value && (u.interactivity.modes.bubble.size > u.particles.size.value ? 0 <= (o = s.radius + u.interactivity.modes.bubble.size * i) && (s.radius_bubble = o) : (n = s.radius - u.interactivity.modes.bubble.size, o = s.radius - n * i, s.radius_bubble = 0 < o ? o : 0)), u.interactivity.modes.bubble.opacity != u.particles.opacity.value && (u.interactivity.modes.bubble.opacity > u.particles.opacity.value ? (r = u.interactivity.modes.bubble.opacity * i) > s.opacity && r <= u.interactivity.modes.bubble.opacity && (s.opacity_bubble = r) : (r = s.opacity - (u.particles.opacity.value - u.interactivity.modes.bubble.opacity) * i) < s.opacity && r >= u.interactivity.modes.bubble.opacity && (s.opacity_bubble = r))) : a(), "mouseleave" == u.interactivity.status && a()) : u.interactivity.events.onclick.enable && d("bubble", u.interactivity.events.onclick.mode) && (a = function(e, t, i, n, o) {
                var r;
                e != t && (u.tmp.bubble_duration_end ? null != i && (r = e + (e - (n - c * (n - e) / u.interactivity.modes.bubble.duration)), "size" == o && (s.radius_bubble = r), "opacity" == o && (s.opacity_bubble = r)) : l <= u.interactivity.modes.bubble.distance ? (null != i ? i : n) != e && (r = n - c * (n - e) / u.interactivity.modes.bubble.duration, "size" == o && (s.radius_bubble = r), "opacity" == o && (s.opacity_bubble = r)) : ("size" == o && (s.radius_bubble = void 0), "opacity" == o && (s.opacity_bubble = void 0)))
            }, u.tmp.bubble_clicking && (e = s.x - u.interactivity.mouse.click_pos_x, t = s.y - u.interactivity.mouse.click_pos_y, l = Math.sqrt(e * e + t * t), (c = ((new Date).getTime() - u.interactivity.mouse.click_time) / 1e3) > u.interactivity.modes.bubble.duration && (u.tmp.bubble_duration_end = !0), c > 2 * u.interactivity.modes.bubble.duration && (u.tmp.bubble_clicking = !1, u.tmp.bubble_duration_end = !1)), u.tmp.bubble_clicking && (a(u.interactivity.modes.bubble.size, u.particles.size.value, s.radius_bubble, s.radius, "size"), a(u.interactivity.modes.bubble.opacity, u.particles.opacity.value, s.opacity_bubble, s.opacity, "opacity")))
        }, u.fn.modes.repulseParticle = function(i) {
            var e, t, n, o, r, s, a;
            u.interactivity.events.onhover.enable && d("repulse", u.interactivity.events.onhover.mode) && "mousemove" == u.interactivity.status ? (t = i.x - u.interactivity.mouse.pos_x, n = i.y - u.interactivity.mouse.pos_y, e = t / (a = Math.sqrt(t * t + n * n)), t = n / a, a = 1 / (n = u.interactivity.modes.repulse.distance) * (-1 * Math.pow(a / n, 2) + 1) * n * 100, a = Math.min(Math.max(a, 0), 50), a = {
                x: i.x + e * a,
                y: i.y + t * a
            }, "bounce" == u.particles.move.out_mode ? (0 < a.x - i.radius && a.x + i.radius < u.canvas.w && (i.x = a.x), 0 < a.y - i.radius && a.y + i.radius < u.canvas.h && (i.y = a.y)) : (i.x = a.x, i.y = a.y)) : u.interactivity.events.onclick.enable && d("repulse", u.interactivity.events.onclick.mode) && (u.tmp.repulse_finish || (u.tmp.repulse_count++, u.tmp.repulse_count == u.particles.array.length && (u.tmp.repulse_finish = !0)), u.tmp.repulse_clicking ? (n = Math.pow(u.interactivity.modes.repulse.distance / 6, 3), o = u.interactivity.mouse.click_pos_x - i.x, r = u.interactivity.mouse.click_pos_y - i.y, s = -n / (a = o * o + r * r) * 1, a <= n && function() {
                var e, t = Math.atan2(r, o);
                i.vx = s * Math.cos(t), i.vy = s * Math.sin(t), "bounce" == u.particles.move.out_mode && (e = i.x + i.vx, t = i.y + i.vy, (e + i.radius > u.canvas.w || e - i.radius < 0) && (i.vx = -i.vx), (t + i.radius > u.canvas.h || t - i.radius < 0) && (i.vy = -i.vy))
            }()) : 0 == u.tmp.repulse_clicking && (i.vx = i.vx_i, i.vy = i.vy_i))
        }, u.fn.modes.grabParticle = function(e) {
            var t, i;
            u.interactivity.events.onhover.enable && "mousemove" == u.interactivity.status && (i = e.x - u.interactivity.mouse.pos_x, t = e.y - u.interactivity.mouse.pos_y, (i = Math.sqrt(i * i + t * t)) <= u.interactivity.modes.grab.distance && (0 < (t = u.interactivity.modes.grab.line_linked.opacity - i / (1 / u.interactivity.modes.grab.line_linked.opacity) / u.interactivity.modes.grab.distance) && (i = u.particles.line_linked.color_rgb_line, u.canvas.ctx.strokeStyle = "rgba(" + i.r + "," + i.g + "," + i.b + "," + t + ")", u.canvas.ctx.lineWidth = u.particles.line_linked.width, u.canvas.ctx.beginPath(), u.canvas.ctx.moveTo(e.x, e.y), u.canvas.ctx.lineTo(u.interactivity.mouse.pos_x, u.interactivity.mouse.pos_y), u.canvas.ctx.stroke(), u.canvas.ctx.closePath())))
        }, u.fn.vendors.eventsListeners = function() {
            "window" == u.interactivity.detect_on ? u.interactivity.el = window : u.interactivity.el = u.canvas.el, (u.interactivity.events.onhover.enable || u.interactivity.events.onclick.enable) && (u.interactivity.el.addEventListener("mousemove", function(e) {
                var t, e = u.interactivity.el == window ? (t = e.clientX, e.clientY) : (t = e.offsetX || e.clientX, e.offsetY || e.clientY);
                u.interactivity.mouse.pos_x = t, u.interactivity.mouse.pos_y = e, u.tmp.retina && (u.interactivity.mouse.pos_x *= u.canvas.pxratio, u.interactivity.mouse.pos_y *= u.canvas.pxratio), u.interactivity.status = "mousemove"
            }), u.interactivity.el.addEventListener("mouseleave", function(e) {
                u.interactivity.mouse.pos_x = null, u.interactivity.mouse.pos_y = null, u.interactivity.status = "mouseleave"
            })), u.interactivity.events.onclick.enable && u.interactivity.el.addEventListener("click", function() {
                if (u.interactivity.mouse.click_pos_x = u.interactivity.mouse.pos_x, u.interactivity.mouse.click_pos_y = u.interactivity.mouse.pos_y, u.interactivity.mouse.click_time = (new Date).getTime(), u.interactivity.events.onclick.enable) switch (u.interactivity.events.onclick.mode) {
                    case "push":
                        u.particles.move.enable || 1 == u.interactivity.modes.push.particles_nb ? u.fn.modes.pushParticles(u.interactivity.modes.push.particles_nb, u.interactivity.mouse) : 1 < u.interactivity.modes.push.particles_nb && u.fn.modes.pushParticles(u.interactivity.modes.push.particles_nb);
                        break;
                    case "remove":
                        u.fn.modes.removeParticles(u.interactivity.modes.remove.particles_nb);
                        break;
                    case "bubble":
                        u.tmp.bubble_clicking = !0;
                        break;
                    case "repulse":
                        u.tmp.repulse_clicking = !0, u.tmp.repulse_count = 0, u.tmp.repulse_finish = !1, setTimeout(function() {
                            u.tmp.repulse_clicking = !1
                        }, 1e3 * u.interactivity.modes.repulse.duration)
                }
            })
        }, u.fn.vendors.densityAutoParticles = function() {
            var e;
            u.particles.number.density.enable && (e = u.canvas.el.width * u.canvas.el.height / 1e3, u.tmp.retina && (e /= 2 * u.canvas.pxratio), e = e * u.particles.number.value / u.particles.number.density.value_area, (e = u.particles.array.length - e) < 0 ? u.fn.modes.pushParticles(Math.abs(e)) : u.fn.modes.removeParticles(e))
        }, u.fn.vendors.checkOverlap = function(e, t) {
            for (var i = 0; i < u.particles.array.length; i++) {
                var n = u.particles.array[i],
                    o = e.x - n.x,
                    r = e.y - n.y;
                Math.sqrt(o * o + r * r) <= e.radius + n.radius && (e.x = t ? t.x : Math.random() * u.canvas.w, e.y = t ? t.y : Math.random() * u.canvas.h, u.fn.vendors.checkOverlap(e))
            }
        }, u.fn.vendors.createSvgImg = function(r) {
            var e = u.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function(e, t, i, n) {
                    var o = r.color.rgb ? "rgba(" + r.color.rgb.r + "," + r.color.rgb.g + "," + r.color.rgb.b + "," + r.opacity + ")" : "hsla(" + r.color.hsl.h + "," + r.color.hsl.s + "%," + r.color.hsl.l + "%," + r.opacity + ")";
                    return o
                }),
                e = new Blob([e], {
                    type: "image/svg+xml;charset=utf-8"
                }),
                t = window.URL || window.webkitURL || window,
                i = t.createObjectURL(e),
                n = new Image;
            n.addEventListener("load", function() {
                r.img.obj = n, r.img.loaded = !0, t.revokeObjectURL(i), u.tmp.count_svg++
            }), n.src = i
        }, u.fn.vendors.destroypJS = function() {
            cancelAnimationFrame(u.fn.drawAnimFrame), i.remove(), pJSDom = null
        }, u.fn.vendors.drawShape = function(e, t, i, n, o, r) {
            var s = o * r,
                r = o / r,
                r = 180 * (r - 2) / r,
                a = Math.PI - Math.PI * r / 180;
            e.save(), e.beginPath(), e.translate(t, i), e.moveTo(0, 0);
            for (var l = 0; l < s; l++) e.lineTo(n, 0), e.translate(n, 0), e.rotate(a);
            e.fill(), e.restore()
        }, u.fn.vendors.exportImg = function() {
            window.open(u.canvas.el.toDataURL("image/png"), "_blank")
        }, u.fn.vendors.loadImg = function(e) {
            var t, i;
            u.tmp.img_error = void 0, "" != u.particles.shape.image.src ? "svg" == e ? ((t = new XMLHttpRequest).open("GET", u.particles.shape.image.src), t.onreadystatechange = function(e) {
                4 == t.readyState && (200 == t.status ? (u.tmp.source_svg = e.currentTarget.response, u.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), u.tmp.img_error = !0))
            }, t.send()) : ((i = new Image).addEventListener("load", function() {
                u.tmp.img_obj = i, u.fn.vendors.checkBeforeDraw()
            }), i.src = u.particles.shape.image.src) : (console.log("Error pJS - No image.src"), u.tmp.img_error = !0)
        }, u.fn.vendors.draw = function() {
            "image" == u.particles.shape.type ? "svg" == u.tmp.img_type ? u.tmp.count_svg >= u.particles.number.value ? (u.fn.particlesDraw(), u.particles.move.enable ? u.fn.drawAnimFrame = requestAnimFrame(u.fn.vendors.draw) : cancelRequestAnimFrame(u.fn.drawAnimFrame)) : u.tmp.img_error || (u.fn.drawAnimFrame = requestAnimFrame(u.fn.vendors.draw)) : null != u.tmp.img_obj ? (u.fn.particlesDraw(), u.particles.move.enable ? u.fn.drawAnimFrame = requestAnimFrame(u.fn.vendors.draw) : cancelRequestAnimFrame(u.fn.drawAnimFrame)) : u.tmp.img_error || (u.fn.drawAnimFrame = requestAnimFrame(u.fn.vendors.draw)) : (u.fn.particlesDraw(), u.particles.move.enable ? u.fn.drawAnimFrame = requestAnimFrame(u.fn.vendors.draw) : cancelRequestAnimFrame(u.fn.drawAnimFrame))
        }, u.fn.vendors.checkBeforeDraw = function() {
            "image" == u.particles.shape.type ? "svg" == u.tmp.img_type && null == u.tmp.source_svg ? u.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(u.tmp.checkAnimFrame), u.tmp.img_error || (u.fn.vendors.init(), u.fn.vendors.draw())) : (u.fn.vendors.init(), u.fn.vendors.draw())
        }, u.fn.vendors.init = function() {
            u.fn.retinaInit(), u.fn.canvasInit(), u.fn.canvasSize(), u.fn.canvasPaint(), u.fn.particlesCreate(), u.fn.vendors.densityAutoParticles(), u.particles.line_linked.color_rgb_line = s(u.particles.line_linked.color)
        }, u.fn.vendors.start = function() {
            d("image", u.particles.shape.type) ? (u.tmp.img_type = u.particles.shape.image.src.substr(u.particles.shape.image.src.length - 3), u.fn.vendors.loadImg(u.tmp.img_type)) : u.fn.vendors.checkBeforeDraw()
        }, u.fn.vendors.eventsListeners(), u.fn.vendors.start()
    }

    function s(e) {
        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, i, n) {
            return t + t + i + i + n + n
        });
        e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return e ? {
            r: parseInt(e[1], 16),
            g: parseInt(e[2], 16),
            b: parseInt(e[3], 16)
        } : null
    }

    function d(e, t) {
        return -1 < t.indexOf(e)
    }
    Object.deepExtend = function(e, t) {
        for (var i in t) t[i] && t[i].constructor && t[i].constructor === Object ? (e[i] = e[i] || {}, arguments.callee(e[i], t[i])) : e[i] = t[i];
        return e
    }, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function(e, t) {
        "string" != typeof e && (t = e, e = "particles-js"), e = e || "particles-js";
        var i = document.getElementById(e),
            n = i.getElementsByClassName("particles-js-canvas-el");
        if (n.length)
            for (; 0 < n.length;) i.removeChild(n[0]);
        var o = document.createElement("canvas");
        o.className = "particles-js-canvas-el", o.style.width = "100%", o.style.height = "100%", null != document.getElementById(e).appendChild(o) && pJSDom.push(new r(e, t))
    }, window.particlesJS.load = function(t, e, i) {
        var n = new XMLHttpRequest;
        n.open("GET", e), n.onreadystatechange = function(e) {
            4 == n.readyState && (200 == n.status ? (e = JSON.parse(e.currentTarget.response), window.particlesJS(t, e), i && i()) : (console.log("Error pJS - XMLHttpRequest status: " + n.status), console.log("Error pJS - File config not found")))
        }, n.send()
    }
}, function(e, t, i) {
    i.r(t);
    var S = i(2),
        k = $(window).width();
    window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
        var t, i = (this.document || this.ownerDocument).querySelectorAll(e),
            n = this;
        do {
            for (t = i.length; 0 <= --t && i.item(t) !== n;);
        } while (t < 0 && (n = n.parentElement));
        return n
    }), window.recaptchaData = function(e) {
        e && $(".g-recaptcha").each(function() {
            $(this).parents("form").submit()
        })
    };

    function A(e) {
        $(e).each(function(e) {
            $(this).attr("novalidate", "true"), $(this).submit(function(e) {
                var t, i = $(this).find(".open-rgpd") || $(this).find(".main-btn-submit");
                i.addClass("loading"), i.attr("disabled", !0), t = $(this), $(t).validate({
                    success: function(e, t) {
                        e.parent().removeClass("error"), e.remove()
                    }
                }), $(t).valid() ? (j(".reject-rgpd"), i.removeClass("loading"), e.preventDefault()) : (j(".reject-rgpd"), e.preventDefault(), i.removeClass("loading"), i.removeAttr("disabled"))
            })
        })
    }

    function D(e, t, i) {
        e.forEach(function(e) {
            e = "eucookie-" + e.value;
            M("eucookie-required") && "eucookie-required" != e && n("eucookie-required"), M("eucookie-functional") && "eucookie-functional" != e && n("eucookie-functional"), M("eucookie-analytical") && "eucookie-analytical" != e && n("eucookie-analytical")
        }), t.forEach(function(e) {
            var e = "eucookie-" + e.value,
                t = i ? ((t = new Date).setTime(t.getTime() + 24 * i * 60 * 60 * 1e3), "; expires=" + t.toGMTString()) : "";
            document.cookie = e + "=" + e + t + "; path=/"
        })
    }

    function L() {
        var e, t, i, n, o, r, s, a;
        M("eucookie-required") && (M("eucookie-required") || M("eucookie-functional")) && M("eucookie-analytical") && ("undefined" != typeof tagManagerCode && null !== tagManagerCode && (t = window, i = document, o = tagManagerCode, t[n = "dataLayer"] = t[n] || [], t[n].push({
            "gtm.start": (new Date).getTime(),
            event: "gtm.js"
        }), n = i.getElementsByTagName("script")[0], (i = i.createElement("script")).async = !0, i.src = "https://www.googletagmanager.com/gtm.js?id=" + o, n.parentNode.insertBefore(i, n)), "undefined" != typeof analyticsCode && null !== analyticsCode && (e = window, a = document, e.GoogleAnalyticsObject = "ga", e.ga || (e.ga = function() {
            (e.ga.q = e.ga.q || []).push(arguments)
        }), e.ga.l = +new Date, s = a.createElement("script"), a = a.getElementsByTagName("script")[0], s.src = "https://www.google-analytics.com/analytics.js", a.parentNode.insertBefore(s, a), ga("create", analyticsCode, "auto", {
            anonymizeIp: !0
        }), ga("send", "pageview")), "undefined" != typeof fbPixelCode && null !== fbPixelCode && (s = window, a = document, s.fbq || (r = s.fbq = function() {
            r.callMethod ? r.callMethod.apply(r, arguments) : r.queue.push(arguments)
        }, s._fbq || (s._fbq = r), (r.push = r).loaded = !0, r.version = "2.0", r.queue = [], (s = a.createElement("script")).async = !0, s.src = "https://connect.facebook.net/en_US/fbevents.js", (a = a.getElementsByTagName("script")[0]).parentNode.insertBefore(s, a)), fbq("init", fbPixelCode), fbq("track", "PageView")))
    }

    function O(e) {
        for (var t, i, n, o, r, a, l = document.querySelectorAll(e), c = 0; c < l.length; c++) ! function() {
            a = (i = l[c].getElementsByTagName("select")[0]).options[i.selectedIndex].value, 1 == d() && i.classList.add("custom-select__mobile"), (n = document.createElement("DIV")).setAttribute("class", "select-selected"), n.setAttribute("data-value", a), n.innerHTML = i.options[i.selectedIndex].innerHTML, l[c].insertBefore(n, i), (o = document.createElement("DIV")).setAttribute("class", "select-items select-hide");
            var e = window.location.search,
                s = new URLSearchParams(e);
            for (s.get("order") && (e = $("#filter-event .custom__sel").text(), document.querySelector(".select-selected").innerHTML = e), t = 0; t < i.length; t++)(r = document.createElement("DIV")).innerHTML = i.options[t].innerHTML, r.addEventListener("click", function(e) {
                for (var t = this.parentNode.parentNode.getElementsByTagName("select")[0], i = this.parentNode.previousSibling, n = 0; n < t.length; n++) {
                    var o, r = s.get("event");
                    if (r ? (o = "/?event=" + r, $.get(homeurl + o + "&order=" + t.options[n].value), window.location.href = homeurl + o + "&order=" + t.options[n].value) : ($.get(homeurl + "order=" + t.options[n].value), window.location.href = homeurl + "?order=" + t.options[n].value), i.setAttribute("data-value", t.options[n].value), t.options[n].innerHTML == this.innerHTML) {
                        t.selectedIndex = n, i.innerHTML = this.innerHTML;
                        break
                    }
                }
                i.click()
            }), o.appendChild(r);
            i.addEventListener("change", function() {
                this.parentNode.querySelector(".select-selected").innerHTML = this.options[this.selectedIndex].text
            }), l[c].insertBefore(o, i), n.addEventListener("click", function(e) {
                e.stopPropagation(), u(this), this.nextSibling.classList.toggle("select-hide"), this.classList.toggle("select-arrow-active")
            })
        }();

        function u(e) {
            for (var t = [], i = document.getElementsByClassName("select-items"), n = document.getElementsByClassName("select-selected"), o = 0; o < n.length; o++) e == n[o] ? t.push(o) : n[o].classList.remove("select-arrow-active");
            for (o = 0; o < i.length; o++) t.indexOf(o) && i[o].classList.add("select-hide")
        }
        document.addEventListener("click", u)
    }
    var j = function(e) {
            for (var t = document.querySelectorAll(e), i = 0; i < t.length; i++) t[i].closest(".rgpd").classList.remove("rgpd--open"), t[i].addEventListener("click", function(e) {
                return this.closest(".rgpd").classList.remove("rgpd--open"), e.preventDefault(), !1
            })
        },
        M = function(e) {
            for (var t = e + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
                for (var o = i[n];
                    " " == o.charAt(0);) o = o.substring(1, o.length);
                if (0 == o.indexOf(t)) return !0
            }
            return null
        },
        n = function(e) {
            D(e, "", -1)
        },
        d = function() {
            return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
        };
    i(4), i(6), i(7);
    window.addEventListener("mousemove", function(e) {
        return {
            x: e.clientX,
            y: e.clientY
        }
    }), i(8);
    var t = i(3),
        N = i.n(t),
        I = window.particlesJS,
        q = window.innerWidth;
    window.innerHeight;
    if (window.addEventListener("resize", function() {
            q = window.innerWidth, window.innerHeight
        }), document.addEventListener("DOMContentLoaded", function() {
            var i, e, t, n;
            e = document.getElementById("open-mobile-menu"), t = document.getElementById("main-menu-mobile"), n = document.getElementsByTagName("html")[0], e.addEventListener("click", function() {
                    t.classList.contains("mobile-opened") ? (e.classList.remove("open"), t.classList.remove("mobile-opened"), n.classList.remove("mobile-opened"), document.getElementById("footer").style.display = "block") : (e.classList.add("open"), t.classList.add("mobile-opened"), n.classList.add("mobile-opened"), document.getElementById("footer").style.display = "none")
                }), document.querySelectorAll(".with-submenu>.main-menu__item").forEach(function(t) {
                    t.addEventListener("click", function(e) {
                        return t.closest(".with-submenu").classList.contains("open") ? t.closest(".with-submenu").classList.remove("open") : (document.querySelector(".with-submenu.open") && document.querySelector(".with-submenu.open").classList.remove("open"), t.closest(".with-submenu").classList.add("open")), void e.preventDefault()
                    })
                }),
                function() {
                    for (var e = document.getElementsByClassName("indexed-splide"), t = 0; t < e.length; t++) {
                        var i = new Splide(e[t], {
                            type: "loop",
                            pagination: "true",
                            arrowPath: " "
                        });
                        i.on("pagination:mounted", function(e) {
                            e.list.classList.add("splide__pagination--custom", "col-md-9"), e.items.forEach(function(e) {
                                e.button.textContent = String(e.page + 1)
                            })
                        }), i.mount()
                    }
                }(), (l = document.querySelectorAll(".apostrophe-changing-colors-animation")) && l.forEach(function(o) {
                    for (var r = parseInt(o.getAttribute("data-quantity")), e = 0; e < r; e++) {
                        var t = H(0, 100),
                            i = document.createElement("span");
                        i.classList = "apostrophe", i.style.left = t + "%", i.innerHTML = "//", o.appendChild(i)
                    }
                    576 < q && setInterval(function() {
                        for (var e = o.querySelectorAll(".apostrophe"), t = H(1, r), i = 0; i < t; i++) {
                            var n = e[H(0, r)];
                            n.classList.contains("red") ? n.classList.remove("red") : n.classList.add("red")
                        }
                    }, 1500)
                }), (l = document.querySelectorAll(".dots-changing-colors-animation")) && l.forEach(function(i) {
                    for (var e = i.getAttribute("data-rows"), t = i.getAttribute("data-cols"), n = parseInt(e * t), o = "", r = parseInt(i.getAttribute("data-dotschangingcolors")), s = 0; s < t; s++) o += "auto ";
                    for (i.style = "grid-template-columns: " + o + ";", s = 0; s < n; s++) {
                        var a = document.createElement("span");
                        a.classList = "dots", i.appendChild(a)
                    }
                    576 < q && setInterval(function() {
                        var e = i.querySelectorAll(".dots");
                        e.forEach(function(e) {
                            return e.classList.contains("red") && e.classList.remove("red")
                        });
                        for (var t = 0; t < r; t++) e[H(0, n)].classList.add("red")
                    }, 2e3)
                }), i = document.querySelectorAll(".rgpd"), document.querySelector("body").addEventListener("click", function(e) {
                    for (var t = 0; t < i.length; t++) i[t].contains(e.target) || "rgpd rgpd--open" != i[t].className || i[t].classList.remove("rgpd--open")
                }),
                function(e) {
                    for (var t = document.querySelectorAll(e), i = 0; i < t.length; i++) t[i].addEventListener("click", function(e) {
                        return this.parentElement.querySelector(".rgpd").classList.add("rgpd--open"), e.preventDefault(), e.stopPropagation(), !1
                    })
                }(".open-rgpd"), j(".reject-rgpd"),
                function(e, t, i, n, o, r, s) {
                    var a = document.querySelector(e),
                        t = document.querySelector(t),
                        l = document.querySelector("body"),
                        c = document.querySelectorAll(i),
                        n = document.querySelector(n),
                        o = document.querySelector(o);
                    M("eucookie-functional") || M("eucookie-analytical") || M("eucookie-required") ? L() : (a.style.display = "block", l.classList.add("in-modal")), t && t.addEventListener("click", function(e) {
                        e.preventDefault(), a.style.display = "block"
                    });
                    for (var u = 0; u < c.length; u++) c[u].addEventListener("change", function() {
                        for (var e = this.id, t = document.querySelectorAll(".cookies-message p"), i = 0; i < t.length; i++) t[i].style.display = "none";
                        document.querySelector('.cookies-message p[data-id="' + e + '"]').style.display = "block"
                    });
                    n.addEventListener("click", function(e) {
                        e.preventDefault();
                        e = document.querySelectorAll('input[name="cookie-radio"]:checked');
                        D(e, e, 3650), L(), a.style.display = "none", l.classList.remove("in-modal")
                    }), o.addEventListener("click", function(e) {
                        e.preventDefault();
                        e = document.querySelectorAll('input[name="cookie-radio"]:checked');
                        D(e, e, 3650), L(), a.style.display = "none", l.classList.remove("in-modal")
                    }), $("".concat(r, ", ").concat(s)).on("click", function(e) {
                        $(".cookies-description, .cookies-settings").toggle()
                    })
                }(".cookies-wrapper", ".change-cookies", "input[name=cookie-radio]", "#accept-cookie", "#submit-preferences", ".cookies-settings-link button", ".cookies-settings-cancel button"), A(".validate-form"), document.addEventListener("keyup", function(e) {
                    e.preventDefault(), e.stopPropagation();
                    var t = document.activeElement.closest(".validate-form");
                    13 === e.keyCode && t && t.querySelector(".rgpd").classList.contains("rgpd--open") && t.querySelector(".open-rgpd").click()
                }), O(".custom-select-option"),
                function(e) {
                    for (var t = document.querySelectorAll(e), i = 0; i < t.length; i++) t[i].addEventListener("change", function() {
                        var e = 1 < this.files.length ? this.getAttribute("data-selected").replace("%s", this.files.length) : 1 == this.files.length ? this.files[0].name : this.getAttribute("data-label");
                        this.previousElementSibling.innerHTML = e
                    })
                }(".custom-file input");
            var o, r = $(window).width();

            function s(e) {
                classie.add(e.target.parentNode, "input--filled")
            }

            function a(e) {
                "" === e.target.value.trim() && classie.remove(e.target.parentNode, "input--filled")
            }
            String.prototype.trim || (o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, String.prototype.trim = function() {
                return this.replace(o, "")
            }), [].slice.call(document.querySelectorAll("input.input__field")).forEach(function(e) {
                "" !== e.value.trim() && classie.add(e.parentNode, "input--filled"), e.addEventListener("focus", s), e.addEventListener("blur", a)
            });
            var l = $(".slider-activities .owl-carousel");
            0 != l.length && l.owlCarousel({
                items: 3,
                autoplay: !1,
                autoplayTimeout: 6e3,
                loop: !0,
                animateOut: "fadeOut",
                smartSpeed: 550,
                margin: 60,
                dots: !1,
                nav: !0,
                navText: ['<i class="icon-gallery_arrow_left"></i>', '<i class="icon-gallery_arrow_right"></i>'],
                navSpeed: 850,
                dragEndSpeed: 850,
                responsiveClass: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1e3: {
                        items: 3
                    }
                }
            });
            var c = $(".slider-areas .owl-carousel");
            0 != c.length && (u = function(e) {
                var t = e.item.count,
                    e = $(".owl-item.active").find(".owl-dot.areas-link.active").find(".area-number")[0].innerHTML;
                $(".counterItens").html(e + " - 0" + t)
            }, c.owlCarousel({
                items: 1,
                autoplay: !1,
                autoplayTimeout: 6e3,
                loop: !0,
                animateOut: "fadeOut",
                smartSpeed: 550,
                margin: 60,
                autoHeight: !0,
                dots: !0,
                dotsData: !0,
                dotsContainer: "#custom-owl-dots",
                nav: !0,
                navText: ['<i class="icon-gallery_arrow_left"></i>', '<i class="icon-gallery_arrow_right"></i>'],
                navSpeed: 850,
                dragEndSpeed: 850,
                onInitialized: u,
                onTranslated: u
            }), $(".owl-dot").on("click", function() {
                c.trigger("to.owl.carousel", [$(this).index(), 300])
            }));
            l = $(".slider-article .owl-carousel");
            0 != l.length && l.owlCarousel({
                items: 1,
                autoplay: !0,
                autoplayTimeout: 6e3,
                loop: !0,
                animateOut: "fadeOut",
                smartSpeed: 550,
                margin: 60,
                dots: !0,
                nav: !0,
                navText: ['<i class="icon-gallery_arrow_left"></i>', '<i class="icon-gallery_arrow_right"></i>'],
                navSpeed: 850,
                dragEndSpeed: 850
            }), $(document).on("click", ".btn-top", function() {
                return $("body,html").animate({
                    scrollTop: 0
                }, 400), !1
            }), $(window).on("scroll", function() {
                $(document).height(), $(window).height(), $(window).scrollTop(), $(window).scrollTop() + $(window).height() > $(document).height() - 100 ? $(".eu-area-footer").addClass("show") : $(".eu-area-footer").removeClass("show")
            }), document.querySelector("body");
            var u = null,
                u = new ScrollMagic.Controller;
            document.getElementById("images-area") && (l = (new TimelineMax).to($(".image2"), 1, {
                height: "100%"
            }), new ScrollMagic.Scene({
                triggerHook: .3,
                duration: "100%",
                triggerElement: ".images-area"
            }).setTween(l).setPin(".images-area", {
                pushFollowers: !0
            }).addTo(u));
            var d, h, p, f, m, g, v, y = new ScrollMagic.Controller;

            function b() {
                $(".gallery").removeClass("container"), r < 990 ? $(".gallery").addClass("container") : $(".gallery").removeClass("container")
            }

            function w(e) {
                var t = document.querySelector(e + " .modalHeight"),
                    i = $(e + " .consortium-box").innerHeight(),
                    n = t.offsetHeight,
                    o = document.querySelector(e + " .consortium-box").scrollTop,
                    t = document.querySelector(e + " .scroll-indicator-popup").querySelector("span"),
                    e = 100 * (i - 100) / n;
                t.style.height = 100 < e ? "0%" : 100 * (i - 100) / n + "%", t.style.top = 100 * o / n + "%"
            }

            function _(e) {
                var t = document.querySelector(e + " .modalHeight"),
                    i = $(e + " .consortium-box").innerHeight(),
                    n = t.offsetHeight,
                    o = document.querySelector(e + " .consortium-box").scrollTop,
                    t = document.querySelector(e + " .scroll-indicator-popup").querySelector("span"),
                    e = 100 * (i - 100) / n;
                t.style.height = 100 < e ? "0%" : 100 * (i - 100) / n + "%", t.style.top = 100 * o / n + "%"
            }
            document.querySelector(".areas-wrapper") && (d = document.querySelector(".areas-wrapper"), h = d.querySelectorAll(".area"), new ScrollMagic.Scene({
                duration: 4 * d.offsetHeight,
                triggerElement: ".areas-wrapper",
                triggerHook: .1
            }).setPin(".areas-wrapper", {
                pushFollowers: !0
            }).addTo(y), h.forEach(function(e, t) {
                new ScrollMagic.Scene({
                    triggerElement: ".areas-wrapper",
                    triggerHook: .1,
                    duration: t + 1 === h.length ? void 0 : 4 * d.offsetHeight / h.length,
                    offset: t * (4 * d.offsetHeight / h.length)
                }).setClassToggle(e, "reveal").addTo(y)
            })), document.getElementById("scrollPage") && ((u = new S.a({
                el: document.querySelector("[data-scroll-container]"),
                smooth: !0,
                direction: "horizontal"
            })).on("scroll", function(e) {
                for (var t = 0, i = Object.keys(e.currentElements); t < i.length; t++) {
                    var n, o = i[t];
                    e.currentElements[o].el.classList.contains("gallery__item") && (n = e.currentElements[o].progress < .4 ? "0.4" : "1", e.currentElements[o].el.style.opacity = n)
                }
            }), u.update(), k < 990 ? u.stop() : u.update(), $(".gallery__item").slice(0, 3).show(), $("#loadMore").on("click", function(e) {
                e.preventDefault(), $(".gallery__item:hidden").slice(0, 3).slideDown(), 0 == $(".gallery__item:hidden").length && $("#loadMore").fadeOut("slow")
            }), b()), $(window).resize(function() {
                b()
            }), $(".tag-link").click(function(e) {
                e.preventDefault();
                e = $(this).attr("href");
                $("html,body").animate({
                    scrollTop: $(e).offset().top
                }, "slow")
            }), document.getElementById("theForm") && (p = document.getElementById("theForm"), new stepsForm(p, {
                onSubmit: function(e) {
                    classie.addClass(p.querySelector(".simform-inner"), "hide");
                    var t = p.querySelector(".final-message");
                    classie.addClass(t, "show");
                    t = document.querySelector(".contacts-text");
                    classie.addClass(t, "hide")
                }
            })), $("#newsletterModal, #infoModal, .modalConsortium, .modalProject").on("shown.bs.modal", function() {
                $(".wrapper").addClass("open-modal"), $(".header").addClass("open-modal")
            }), $("#newsletterModal, #infoModal, .modalConsortium, .modalProject").on("hide.bs.modal", function() {
                $(".wrapper").removeClass("open-modal"), $(".header").removeClass("open-modal")
            }), document.querySelector(".particles-light") ? I.load("particles-js", themeurl + "../assets/js/particles-light.json") : I.load("particles-js", themeurl + "/assets/js/particles.json"), document.querySelector(".scroll-indicator") && (f = function() {
                var e = document.querySelector("body"),
                    t = window.innerHeight,
                    i = e.offsetHeight;
                i <= t || ((e = document.querySelector(".scroll-indicator").querySelector("span")).style.height = 100 * t / i + "%", e.style.top = 100 * window.scrollY / i + "%")
            }, (document.querySelector("body").onscroll = f)()), document.querySelector(".home-robot") && (g = new ScrollMagic.Controller, f = TweenMax.to($(".home-animations"), 1, {
                transform: "scale(1)",
                opacity: "1",
                bottom: "30%"
            }), new ScrollMagic.Scene({
                triggerHook: .5,
                duration: "50%",
                triggerElement: ".home-robot"
            }).setTween(f).setPin(".home-robot").addTo(g)), document.getElementById("scrollPageHome") && (b(), m = new ScrollMagic.Controller, (g = new TimelineLite).to("#scrollHorizontal", 1, {
                x: "-75%"
            }), v = new ScrollMagic.Scene({
                triggerElement: "#scrollHorizontal",
                triggerHook: .2,
                duration: 3e3
            }).setPin("#scrollHorizontal").setTween(g).addTo(m), $(window).width() < 990 && m.enabled() ? (m.enabled(!1), v.destroy(!0), v = null, m.destroy(!0), m = null) : m.enabled() || m.enabled(!0)), $(window).on("resize", function(e) {
                $(window).width() < 990 && m.enabled() ? (m.enabled(!1), v.destroy(!0), v = null, m.destroy(!0), m = null) : m.enabled() || m.enabled(!0)
            }), document.getElementById("home-video") && (x = new ScrollMagic.Controller, new ScrollMagic.Scene({
                triggerElement: ".video-wrapper",
                triggerHook: .5,
                duration: "60%",
                offset: 50
            }).setClassToggle(".video-wrapper", "visible").addTo(x)), $(".contacts-container").removeClass("reveal"), $(".robot-contacts").removeClass("small"), $(".robot-contacts .tooltip-robot").removeClass("hide"), $("#contactsLink").on("click", function() {
                $(".contacts-container").addClass("reveal"), $(".robot-contacts").addClass("small"), $(".robot-contacts .tooltip-robot").addClass("hide")
            }), $(window).on("shown.bs.modal", function(e) {
                var t, i;
                document.querySelector(".modalConsortium .consortium-box") && (w(t = e.relatedTarget.dataset.target), $(t + " .consortium-box").on("scroll", function() {
                    w(t)
                })), document.querySelector(".modalProject .consortium-box") && (_(i = e.relatedTarget.dataset.target), $(i + " .consortium-box").on("scroll", function() {
                    _(i)
                }))
            }), $(".video-image-wrapper").on("click", function(e) {
                this.style.display = "none", document.getElementById("video").style.display = "block", $("#video")[0].src += "?autoplay=1", e.preventDefault()
            });
            var x, E, T, C = window.innerWidth;
            window.innerHeight, (x = document.querySelectorAll(".card-parallax")) && (E = [2.4, .89, 2.4, 1.2, 1.5], T = [.2, .5, 1, .3, .4], Array.prototype.forEach.call(x, function(e, t) {
                Math.floor(Math.random() * E.length), Math.floor(Math.random() * T.length);
                $(e).attr("data-rellax-speed") && $(e).attr("data-rellax-speed"), $(e).attr("data-rellax-percentage") && $(e).attr("data-rellax-percentage"), 1200 < C && new N.a(e)
            }))
        }), document.querySelector("#canvas") || document.querySelector("#canvasFooter")) {
        var o = function e(t) {
                requestAnimationFrame(e),
                    function(e) {
                        for (var t = 0; t < m.children.length; t++) {
                            var i = m.children[t];
                            i.geometry.y += .3, 120 < i.geometry.y && (i.geometry.y = 0);
                            for (var n = Math.sqrt(i.geometry.y * (120 - i.geometry.y)), o = 0; o <= 50; o++) {
                                var r = i.geometry.vertices[o],
                                    s = 10 * noise.simplex3(.009 * r.x, .009 * r.z + 6e-4 * e, .009 * i.geometry.y);
                                r.copy(r._o), r.multiplyScalar(n + s), r.y = i.geometry.y - 60
                            }
                            i.geometry.verticesNeedUpdate = !0
                        }
                    }(t), h.render(p, f)
            },
            r = function() {
                c = window.innerWidth, u = window.innerHeight, s.style.width = c, s.style.height = u, f.aspect = c / u, f.updateProjectionMatrix(), h.setSize(c, u)
            };
        document.querySelector("#canvas") && $("body").css("overflow", "hidden");
        var s, a = function() {
                function t(e) {
                    _classCallCheck(this, t), this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.animation = {
                        flyingHeight: 0,
                        flyingFreq: .015,
                        eyeAmplitude: 2,
                        eyelidAmplitude: 1,
                        modelsAmplitude: .3,
                        reactionTime: .1,
                        speed: .5,
                        eyelidsOpening: 0,
                        flying: !0,
                        onIntroComplete: e,
                        introComplete: !1
                    }, this.onWindowResize = this.onWindowResize.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.render = this.render.bind(this), window.addEventListener("resize", this.onWindowResize), window.addEventListener("mousemove", this.onMouseMove), this.init()
                }
                return _createClass(t, [{
                    key: "init",
                    value: function() {
                        this.scene = new THREE.Scene, this.mouse = new THREE.Vector2(window.innerWidth, window.innerWidth), this.newRenderer(), this.newCamera(), this.newLight(), document.querySelector("#canvas") && this.newGround(), this.newRobot(), this.render()
                    }
                }, {
                    key: "newRenderer",
                    value: function() {
                        this.renderer = new THREE.WebGLRenderer({
                            alpha: !0,
                            antialias: !0
                        }), this.renderer.setSize(this.windowWidth, this.windowHeight), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = THREE.PCFSoftShadowMap, (document.querySelector("#canvas") ? document.getElementById("canvas") : document.getElementById("canvasFooter")).appendChild(this.renderer.domElement)
                    }
                }, {
                    key: "newCamera",
                    value: function() {
                        var e = this.windowWidth / this.windowHeight;
                        this.camera = new THREE.PerspectiveCamera(30, e, .1, 1e3), this.camera.position.set(0, 1, 27)
                    }
                }, {
                    key: "newLight",
                    value: function() {
                        var e = new THREE.AmbientLight(15329769, 1);
                        e.position.set(0, 100, 0), this.scene.add(e);
                        e = new THREE.DirectionalLight(16777215, .1);
                        e.position.set(0, 100, 20), e.castShadow = !0, e.shadow.mapSize.width = 2048, e.shadow.mapSize.height = 2048, this.scene.add(e)
                    }
                }, {
                    key: "newGround",
                    value: function() {
                        var e = new THREE.PlaneGeometry(85, 85),
                            t = new THREE.MeshLambertMaterial({
                                color: 16777215,
                                opacity: 0,
                                transparent: !0
                            });
                        this.ground = new THREE.Mesh(e, t), this.ground.rotation.x = THREE.Math.degToRad(-90), this.ground.position.y = -7, this.ground.receiveShadow = !0, this.scene.add(this.ground)
                    }
                }, {
                    key: "textureLoader",
                    value: function(e) {
                        this.textureLoader = {
                            loader: new THREE.TextureLoader,
                            total: e,
                            loaded: 0,
                            loadedComplete: !1,
                            textureLoaded: function() {
                                this.loaded++, this.loaded == this.total && (this.loadedComplete = !0)
                            }
                        }
                    }
                }, {
                    key: "newRobot",
                    value: function() {
                        var i = this,
                            n = {
                                object: "https://cdn.rawgit.com/Verlangieri/robot-animation/master/app/obj/boule.DAE",
                                texture1: themeurl + "/assets/img/texure_eye.png",
                                texture2: themeurl + "/assets/img/texure_body.png"
                            };
                        (new THREE.ColladaLoader).load(n.object, function(e) {
                            i.dataTexture = [n.texture1, n.texture2], i.textureLoader(i.dataTexture.length), i.models = e.scene, i.models.rotation.y = THREE.Math.degToRad(-90), i.mesh = new THREE.Object3D, i.box = (new THREE.Box3).setFromObject(i.models), i.box.center(i.models.position), i.models.position.multiplyScalar(-1), i.mesh.add(i.models), i.scene.add(i.mesh), i.eye = i.models.getObjectByName("Eye", !0), i.eyelidTop = i.models.getObjectByName("Eyelid-top", !0), i.eyelidBottom = i.models.getObjectByName("Eyelid-bottom", !0), i.eyelidTop.rotation.x = THREE.Math.degToRad(-88), i.eyelidBottom.rotation.x = THREE.Math.degToRad(-85);
                            var t = i.models.getObjectByName("Lens", !0);
                            t.material.map = i.textureLoader.loader.load(i.dataTexture[0], i.textureLoader.textureLoaded()), t.material.map.minFilter = THREE.LinearFilter;
                            e = new THREE.PointLight(16777215, .5, 1);
                            e.position.z = 30, t.add(e), new TimelineMax({
                                repeat: -1,
                                yoyo: !0
                            }).from(e, 1, {
                                intensity: 5
                            }), i.body = i.models.getObjectByName("Body", !0), i.body.children[0].material.map = i.textureLoader.loader.load(i.dataTexture[1], i.textureLoader.textureLoaded()), i.body.children[0].material.map.minFilter = THREE.LinearFilter, i.body.children[3].castShadow = !0, i.camera.lookAt(i.models.position), i.parameters = {
                                lunchIntro: !0,
                                introComplete: !1,
                                coef: 0,
                                height: i.models.position.y - 1.5
                            }
                        })
                    }
                }, {
                    key: "introAnimation",
                    value: function() {
                        var e = this;
                        document.querySelector("#canvas") ? (TweenMax.set(this.mesh.position, {
                            y: 10
                        }), TweenMax.set(this.mesh.rotation, {
                            y: THREE.Math.degToRad(720),
                            z: THREE.Math.degToRad(720)
                        })) : (TweenMax.set(this.mesh.position, {
                            y: 0
                        }), TweenMax.set(this.mesh.rotation, {
                            y: 0,
                            z: 0
                        })), setTimeout(function() {
                            e.turnOffAnimation()
                        }, 1e3), document.querySelector("#canvas") ? setTimeout(function() {
                            e.turnOnAnimation()
                        }, 3e3) : this.turnOnAnimation()
                    }
                }, {
                    key: "turnOffAnimation",
                    value: function() {
                        document.querySelector("#canvas") && TweenMax.to(this.mesh.position, 1.5, {
                            y: this.ground.position.y + this.box.max.y / 2,
                            ease: Bounce.easeOut
                        }), TweenMax.to(this.mesh.rotation, 2, {
                            x: THREE.Math.degToRad(l(-20, 0)),
                            y: THREE.Math.degToRad(l(-30, 30)),
                            z: THREE.Math.degToRad(l(-20, 20)),
                            ease: Power2.easeOut
                        })
                    }
                }, {
                    key: "turnOnAnimation",
                    value: function() {
                        var e = this;
                        TweenMax.to(this.mesh.position, 1.5, {
                            y: this.animation.flyingHeight,
                            ease: Power2.easeOut
                        }), TweenMax.to(this.mesh.rotation, 1, {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: Power2.easeOut
                        }), TweenMax.to(this.eyelidTop.rotation, .5, {
                            x: THREE.Math.degToRad(-75),
                            ease: Power2.easeOut
                        }, 1.5), TweenMax.to(this.eyelidBottom.rotation, .5, {
                            x: THREE.Math.degToRad(-100),
                            ease: Power2.easeOut,
                            onStart: function() {
                                e.parameters.introComplete = !0, e.animation.onIntroComplete()
                            }
                        }, 1.5)
                    }
                }, {
                    key: "flyingAnimation",
                    value: function() {
                        this.parameters.coef += this.animation.flyingFreq;
                        var e = Math.sin(Math.PI * this.parameters.coef);
                        this.eye.position.y = this.animation.eyeAmplitude * e, this.models.position.y = e * this.animation.modelsAmplitude + this.parameters.height, this.eyelidTop.position.y = this.eyelidBottom.position.y = this.animation.eyelidAmplitude * e
                    }
                }, {
                    key: "standbyAnimation",
                    value: function(e) {
                        e ? e && this.turnOnAnimation() : (this.turnOffAnimation(), TweenMax.to(this.models.position, .5, {
                            y: this.parameters.height
                        }))
                    }
                }, {
                    key: "mouseAnimation",
                    value: function() {
                        TweenMax.to(this.eye.rotation, this.animation.speed, {
                            x: this.mouse.y / 5,
                            y: this.mouse.x / 3,
                            delay: this.animation.reactionTime
                        }), TweenMax.to(this.mesh.rotation, this.animation.speed, {
                            y: this.mouse.x / 2,
                            x: -this.mouse.y / 5,
                            delay: this.animation.reactionTime
                        }), TweenMax.to(this.eyelidTop.rotation, this.animation.speed, {
                            y: this.mouse.x / 4,
                            x: THREE.Math.degToRad(-75 + this.animation.eyelidsOpening) + (this.mouse.y - Math.abs(this.mouse.x)) / 10,
                            delay: this.animation.reactionTime
                        }), TweenMax.to(this.eyelidBottom.rotation, this.animation.speed, {
                            y: this.mouse.x / 4,
                            x: THREE.Math.degToRad(-100 - this.animation.eyelidsOpening) + (this.mouse.y + Math.abs(this.mouse.x)) / 10,
                            delay: this.animation.reactionTime
                        })
                    }
                }, {
                    key: "updateRobot",
                    value: function() {
                        void 0 !== this.models && !0 === this.textureLoader.loadedComplete && (this.parameters.lunchIntro && (this.introAnimation(), this.parameters.lunchIntro = !1), this.parameters.introComplete && this.animation.flying && this.flyingAnimation())
                    }
                }, {
                    key: "mouseUpdate",
                    value: function() {
                        this.parameters.introComplete && this.mouseAnimation()
                    }
                }, {
                    key: "onMouseMove",
                    value: function(e) {
                        this.mouse.x = e.clientX / window.innerWidth * 2 - 1, this.mouse.y = -e.clientY / window.innerHeight * 2 + 1, this.mouseUpdate()
                    }
                }, {
                    key: "onWindowResize",
                    value: function() {
                        this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.renderer.setSize(this.windowWidth, this.windowHeight), this.camera.aspect = this.windowWidth / this.windowHeight, this.camera.updateProjectionMatrix()
                    }
                }, {
                    key: "newGui",
                    value: function() {
                        var t = this,
                            e = new dat.GUI({
                                width: 270
                            }),
                            i = e.addFolder("Flying animation");
                        i.add(this.animation, "flyingFreq", .01, .05).name("frequency"), i.add(this.animation, "modelsAmplitude", 0, 1).name("robot amplitude"), i.add(this.animation, "eyelidAmplitude", 0, 5).name("eyelid amplitude"), i.add(this.animation, "eyeAmplitude", 0, 5).name("eye amplitude"), i.add(this.animation, "flying").onChange(function(e) {
                            t.standbyAnimation(e)
                        });
                        e = e.addFolder("Mouse interaction");
                        e.add(this.animation, "reactionTime", 0, .5).name("reaction time"), e.add(this.animation, "speed", .1, 1).name("slowness"), e.add(this.animation, "eyelidsOpening", 0, 10).name("eyelids opening")
                    }
                }, {
                    key: "render",
                    value: function() {
                        this.updateRobot(), this.renderer.render(this.scene, this.camera), requestAnimationFrame(this.render)
                    }
                }]), t
            }(),
            l = function(e, t) {
                return Math.random() * (t - e + 1) + e
            };
        window.onload = function() {
            new a(function() {
                document.querySelector(".canvas404") || (document.querySelector("#canvas") ? (function() {
                    setTimeout(function() {
                        $(".home-animations").css("opacity", "0.6"), $(".home-caption").addClass("show"), $("body").css("overflow", "auto"), $(".scroll-area").addClass("show")
                    }, 1e3);
                    var e = new ScrollMagic.Controller,
                        t = TweenMax.to($(".home-animations"), 1, {
                            transform: "scale(0.3)",
                            opacity: "1",
                            bottom: "-130px"
                        });
                    new ScrollMagic.Scene({
                        triggerHook: 0,
                        duration: "50%",
                        triggerElement: ".home-intro"
                    }).setTween(t).addTo(e), new ScrollMagic.Scene({
                        triggerHook: 0,
                        duration: document.querySelector("body").offsetHeight,
                        triggerElement: ".home-intro"
                    }).setPin(".home-animations", {
                        pushFollowers: !1
                    }).addTo(e)
                }(), setTimeout(function() {
                    o()
                }, 1500)) : o())
            })
        };
        var c = (s = document.querySelector("#sceneContacts") ? document.querySelector("#sceneContacts") : document.querySelector("#scene")).offsetWidth,
            u = s.offsetHeight,
            h = new THREE.WebGLRenderer({
                canvas: s,
                antialias: !0,
                alpha: !0
            });
        h.setPixelRatio(1 < window.devicePixelRatio ? 2 : 1), h.setSize(c, u), h.setClearColor(0, 0);
        var p = new THREE.Scene,
            f = new THREE.PerspectiveCamera(40, c / u, .1, 1e3);
        f.position.set(0, 0, 350);
        var m = new THREE.Group;
        p.add(m);
        for (var t = 620259, t = document.querySelector("#sceneContacts") ? 16777215 : 620259, g = new THREE.LineBasicMaterial({
                color: t
            }), v = 0; v < 18; v++) {
            var y = v,
                b = new THREE.Geometry;
            b.y = y / 18 * 60 * 2;
            for (var w = 0; w <= 50; w++) {
                var _ = new THREE.Vector3;
                _.x = Math.cos(w / 50 * Math.PI * 2), _.z = Math.sin(w / 50 * Math.PI * 2), _._o = _.clone(), b.vertices.push(_)
            }
            y = new THREE.Line(b, g);
            m.add(y)
        }
        var x, E = new THREE.Vector2(.8, .5);
        window.addEventListener("mousemove", function(e) {
            E.y = e.clientY / window.innerHeight, TweenMax.to(m.rotation, 2, {
                x: +E.y,
                ease: Power1.easeOut
            })
        }), window.addEventListener("resize", function() {
            x = clearTimeout(x), x = setTimeout(r, 200)
        }), $("#sliding-content").marquee({
            duration: 1e4,
            gap: 50,
            delayBeforeStart: 1,
            direction: "left",
            duplicated: !0
        }), $("#sliding-content2").marquee({
            duration: 1e4,
            gap: 200,
            delayBeforeStart: 1,
            direction: "left",
            duplicated: !0
        })
    }

    function H(e, t) {
        return Math.floor(Math.random() * (t - e)) + e
    }
}]);