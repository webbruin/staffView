//~ Revision: 181, Copyright (C) 2016-2017: Willem Vree, contributions Stéphane David.
//~ This program is free software; you can redistribute it and/or modify it under the terms of the
//~ GNU General Public License as published by the Free Software Foundation; either version 2 of
//~ the License, or (at your option) any later version.
//~ This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
//~ without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
//~ See the GNU General Public License for more details. <http://www.gnu.org/licenses/gpl.html>.
$('#body').css('visibility', 'visible');
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (f, z, v) {
  if (v.get || v.set) throw new TypeError("ES3 does not support getters and setters.");
  f != Array.prototype && f != Object.prototype && (f[z] = v.value)
};
$jscomp.getGlobal = function (f) {
  return "undefined" != typeof window && window === f ? f : "undefined" != typeof global && null != global ? global : f
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () { };
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function (f) {
  return $jscomp.SYMBOL_PREFIX + (f || "") + $jscomp.symbolCounter_++
};
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var f = $jscomp.global.Symbol.iterator;
  f || (f = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
  "function" != typeof Array.prototype[f] && $jscomp.defineProperty(Array.prototype, f, {
    configurable: !0,
    writable: !0,
    value: function () {
      return $jscomp.arrayIterator(this)
    }
  });
  $jscomp.initSymbolIterator = function () { }
};
$jscomp.arrayIterator = function (f) {
  var z = 0;
  return $jscomp.iteratorPrototype(function () {
    return z < f.length ? {
      done: !1,
      value: f[z++]
    } : {
        done: !0
      }
  })
};
$jscomp.iteratorPrototype = function (f) {
  $jscomp.initSymbolIterator();
  f = {
    next: f
  };
  f[$jscomp.global.Symbol.iterator] = function () {
    return this
  };
  return f
};
$jscomp.iteratorFromArray = function (f, z) {
  $jscomp.initSymbolIterator();
  f instanceof String && (f += "");
  var v = 0,
    A = {
      next: function () {
        if (v < f.length) {
          var F = v++;
          return {
            value: z(F, f[F]),
            done: !1
          }
        }
        A.next = function () {
          return {
            done: !0,
            value: void 0
          }
        };
        return A.next()
      }
    };
  A[Symbol.iterator] = function () {
    return A
  };
  return A
};
$jscomp.polyfill = function (f, z, v, A) {
  if (z) {
    v = $jscomp.global;
    f = f.split(".");
    for (A = 0; A < f.length - 1; A++) {
      var F = f[A];
      F in v || (v[F] = {});
      v = v[F]
    }
    f = f[f.length - 1];
    A = v[f];
    z = z(A);
    z != A && null != z && $jscomp.defineProperty(v, f, {
      configurable: !0,
      writable: !0,
      value: z
    })
  }
};
$jscomp.polyfill("Array.prototype.keys", function (f) {
  return f ? f : function () {
    return $jscomp.iteratorFromArray(this, function (f) {
      return f
    })
  }
}, "es6-impl", "es3");
$jscomp.findInternal = function (f, z, v) {
  f instanceof String && (f = String(f));
  for (var A = f.length, F = 0; F < A; F++) {
    var ca = f[F];
    if (z.call(v, ca, F, f)) return {
      i: F,
      v: ca
    }
  }
  return {
    i: -1,
    v: void 0
  }
};
$jscomp.polyfill("Array.prototype.find", function (f) {
  return f ? f : function (f, v) {
    return $jscomp.findInternal(this, f, v).v
  }
}, "es6-impl", "es3");
$jscomp.polyfill("Math.log10", function (f) {
  return f ? f : function (f) {
    return Math.log(f) / Math.LN10
  }
}, "es6-impl", "es3");
var follow_VERSION = 181,
  pre_opt = {},
  abc_arr, demoDlg, media_file;
var staffData = [];
var _noRepeat = [];
function f(a, b, c) {
  var d = C.createBufferSource();
  d.buffer = fc[a];
  var g = C.createGain();
  g.gain.value = pb * b / 50;
  d.connect(g);
  g.connect(C.destination);
  d.start(c, .06);
  qb[a] = d;
  delete Qa[a]
}
function z(a, b) {
  var c = qb[a];
  c && (rb ? Qa[a] = 1 : (c.stop(b), qb[a] = void 0))
}
function v(a) {
  /* var b = "C Db D Eb E F Gb G Ab A Bb B".split(" "),
    c = a.shift();
  c ? (b = MIDI.Soundfont.acoustic_grand_piano[b[c % 12] + (Math.floor(c / 12) - 1)].split(",")[1], gc(b, function (b) {
    fc[c] = b;
    sb.push("" + c);
    hc[c] = 1;
    v(a)
  })) : (da = 1, q("midi nrs: " + sb.join(","))) */
}
function A(a) {
  function b() {
    C.resume().then(function () {
      q("audio unlocked");
      sb = [];
      v(d)
    }, function () {
      da = 0
    });
    va && w.play().then(function () {
      w.currentTime = ub + Ra;
      w.pause();
      va = 0;
      q("html player unlocked")
    }, function () {
      q("could not unlock html player")
    })
  }
  da = 0;
  var d = Object.keys(a).filter(function (a) {
    return !(a in hc)
  });
  d.length ? (0 == P && (d = []), console.log("audioCtx.state: ", C.state), $("#notation .box").remove(), "suspended" == C.state || va ? b() : b()) : da = 1
}
function F(a) {
  a = a[0].link;
  a = a.replace("www.dropbox", "dl.dropboxusercontent").split("?")[0];
  $("#wait").toggle(!0);
  q("link: " + a);
  $.get(a, "", null, "text").done(function (a, c) {
    q("preload: " + c);
    ca(a);
    wa();
    $("#wait").toggle(!1)
  }).fail(function (a, c, d) {
    $("#wait").append("\npreload failed: " + c)
  })
}
function ca(a) {
  var b = a.slice(0, 4E3);
  0 <= b.indexOf("pre_opt = {") && (eval(a), a = abc_arr.join("\n"), b = a.slice(0, 4E3));
  0 <= b.indexOf("X:") ? na(a) : -1 == b.indexOf("<?xml ") ? alert("not an xml file nor an abc file") : (a = $.parseXML(a), a = vertaal(a, {
    p: "f",
    t: 1,
    u: 0,
    v: 3,
    m: 2,
    mnum: 0
  }), a[1] && q(a[1]), na(a[0]))
}
function cd() {
  var a = new FileReader;
  a.onload = function (b) {
    ca(a.result);
    wa()
  };
  var b = $("#fknp").prop("files")[0];
  b && a.readAsText(b)
}

function na(a, b) {
  D = a;
  var c = a.split("\n");
  0 < e.hrz ? c.splice(0, 0, "%%singleline 1", "%%maxshrink " + e.shrnk) : c.splice(0, 0, "%%measurenb 0");
  if (e.pw || e.hrz) {
    var d = [],
      g, l;
    for (g = 0; g < c.length; ++g) l = c[g], 0 <= l.indexOf("$") && (l = l.replace(/\$/g, "")), 0 == l.indexOf("I:linebreak") && (l = c[g]), 0 == l.indexOf("V:") && (l = l.replace(/snm="[^"]*"/, "")), 0 != l.indexOf("%%page") && 0 != l.indexOf("%%left") && 0 != l.indexOf("%%right") && (0 == l.indexOf("%%scale") && e.hrz || d.push(l));
    c = d;
    e.hrz ? c.splice(1, 0, "%%scale " + e.scl) : (d = e.pw, g = (.03 * d).toFixed(1), l = (.01 * d).toFixed(1), c.splice(1, 0, "%%pagewidth " + d + "cm", "%%leftmargin " + g + "cm", "%%rightmargin " + l + "cm"))
  }
  a = c.join("\n");
  if (0 <= a.indexOf("percmap")) {
    var c = {
      diamond: 1,
      triangle: 1,
      square: 1,
      normal: 1
    },
      d = ['%%beginsvg\n<defs>\n<text id="x" x="-3" y="0">&#xe263;</text>\n<text id="x-" x="-3" y="0">&#xe263;</text>\n<text id="x+" x="-3" y="0">&#xe263;</text>\n<text id="normal" x="-3.7" y="0">&#xe0a3;</text>\n<text id="normal-" x="-3.7" y="0">&#xe0a3;</text>\n<text id="normal+" x="-3.7" y="0">&#xe0a4;</text>\n<g id="circle-x"><text x="-3" y="0">&#xe263;</text><circle r="4" class="stroke"/></g>\n<g id="circle-x-"><text x="-3" y="0">&#xe263;</text><circle r="4" class="stroke"/></g>\n<path id="triangle" d="m-4 -3.2l4 6.4 4 -6.4z" class="stroke" style="stroke-width:1.4"/>\n<path id="triangle-" d="m-4 -3.2l4 6.4 4 -6.4z" class="stroke" style="stroke-width:1.4"/>\n<path id="triangle+" d="m-4 -3.2l4 6.4 4 -6.4z" class="stroke" style="fill:#000"/>\n<path id="square" d="m-3.5 3l0 -6.2 7.2 0 0 6.2z" class="stroke" style="stroke-width:1.4"/>\n<path id="square-" d="m-3.5 3l0 -6.2 7.2 0 0 6.2z" class="stroke" style="stroke-width:1.4"/>\n<path id="square+" d="m-3.5 3l0 -6.2 7.2 0 0 6.2z" class="stroke" style="fill:#000"/>\n<path id="diamond" d="m0 -3l4.2 3.2 -4.2 3.2 -4.2 -3.2z" class="stroke" style="stroke-width:1.4"/>\n<path id="diamond-" d="m0 -3l4.2 3.2 -4.2 3.2 -4.2 -3.2z" class="stroke" style="stroke-width:1.4"/>\n<path id="diamond+" d="m0 -3l4.2 3.2 -4.2 3.2 -4.2 -3.2z" class="stroke" style="fill:#000"/>\n</defs>\n%%endsvg'],
      r, u, n = "default",
      f = {
        "default": []
      };
    g = a.split("\n");
    for (l = 0; l < g.length; ++l) if (r = g[l], 0 <= r.indexOf("I:percmap") && (r = r.split(" "), u = r[4], u in c && (u = u + "+," + u), r = "%%map perc" + n + " " + r[1] + " print=" + r[2] + " midi=" + r[3] + " heads=" + u, f[n].push(r)), 0 <= r.indexOf("V:") && (u = r.match(/V:\s*(\S+)/))) n = u[1], n in f || (f[n] = []);
    for (n in f) d = d.concat(f[n]);
    for (l = 0; l < g.length; ++l) r = g[l], 0 <= r.indexOf("I:percmap") || (0 <= r.indexOf("V:") || 0 <= r.indexOf("K:") ? ((u = r.match(/V:\s*(\S+)/)) && (n = u[1]), 0 == f[n].length && (n = "default"), d.push(r), 0 <= r.indexOf("perc") && -1 == r.indexOf("map=") && (r += " map=perc"), 0 <= r.indexOf("map=perc") && 0 < f[n].length && d.push("%%voicemap perc" + n), 0 <= r.indexOf("map=off") && d.push("%%voicemap")) : d.push(r));
    a = d.join("\n")
  }
  dd(a);
  vb(a, b)
}
function ed() {
  if ($("#twosys").prop("checked")) {
    ea = 1;
    var a = -1 == G ? 0 : G;
    x.toggle(!1);
    x.eq(a).toggle(!0);
    x.eq(a + 1).toggle(!0)
  } else ea = 0, x.toggle(!0);
  V()
}

var bassOrTreble = '';  //treble   bass
function dd(a) {
  bassOrTreble = '';
  if (!a.includes('V:2 ')) {
    if (a.includes('V:1 ')) {
      bassOrTreble = a.split('V:1 ')[1].split(' nm=')[0]
    }
  }
  function b(a) {
    var b = [];
    a.forEach(function (a, c) {
      b[a.st] ? b[a.st].push(c) : b[a.st] = [c];
      a.clef.clef_octave && (Sa[c] = a.clef.clef_octave);
      ic[a.st] = 6 * (a.stafflines || "|||||").length * (a.staffscale || 1)
    });
    return b
  }
  var c, d = "",
    g = [3, 0, 4, 1, 5, 2, 6],
    l = [0, 2, 4, 5, 7, 9, 11];
  xa = a;
  W = [];
  Sa = [];
  c = new Abc({
    img_out: null,
    errmsg: function (a, b, c) {
      d += a + "\n"
    },
    read_file: function (a) {
      return ""
    },
    anno_start: null,
    get_abcmodel: function (a, c, d) {
      function r(a, b) {
        e[a] = [0, 0, 0, 0, 0, 0, 0];
        u[a] = {};
        n[a] = b;
        var c = 0 <= b;
        (c ? g.slice(0, b) : g.slice(b)).forEach(function (b) {
          e[a][b] += c ? 1 : -1
        })
      }
      var e = {};
      d = {
        "-2": -2,
        "-1": -1,
        0: 0,
        1: 1,
        2: 2,
        3: 0
      };
      var u = {},
        n = {},
        f = {},
        y = c[0].meter.a_meter;
      jc = y.length ? parseInt(y[0].top) : 4;
      for (y = 0; y < c.length; ++y) r(y, c[y].key.k_sf), f[y] = {};
      for (Q = b(c); a; a = a.ts_next) {
        var h, H, p, t, q = [];
        switch (a.type) {
          case 14:
            y = a.tempo_notes.reduce(function (a, b) {
              return a + b
            });
            Ta = a.tempo * y / 384;
            break;
          case 10:
            p = {
              t: a.time,
              nt: -1,
              dur: a.dur
            };
            q.push(p);
            W.push({
              t: a.time,
              ix: a.istart,
              v: a.v,
              dur: a.dur,
              ns: q,
              tmp: Ta
            });
            break;
          case 8:
            for (c = 0; c < a.notes.length; ++c) h = a.notes[c], H = h.pit + 19, y = a.v, Sa[y] && (H += Sa[y]), p = Math.floor(H / 7), t = H % 7, void 0 != h.acc && (u[y][H] = d[h.acc]), p = 12 * p + l[t] + (H in u[y] ? u[y][H] : e[y][t]), wb[p] = 1, p = {
              t: a.time,
              nt: p,
              dur: a.dur
            }, H in f[y] ? (f[y][H].dur += a.dur, 0 == h.ti1 && delete f[y][H]) : (0 != h.ti1 && (f[y][H] = p), q.push(p));
            if (0 == q.length) break;
            W.push({
              t: a.time,
              ix: a.istart,
              v: a.v,
              dur: a.dur,
              ns: q,
              tmp: Ta
            });
            break;
          case 5:
            r(a.v, a.k_sf);
            break;
          case 0:
            r(a.v, n[a.v]), W.push({
              t: a.time,
              ix: a.istart,
              v: a.v,
              bt: a.bar_type,
              tx: a.text
            })
        }
      }
    }
  });
  c.tosvg("play", "%%play");
  c.tosvg("abc2svg", a);
  "" == d && (d = "no error");
  q(d)
}
function vb(a, b) {
  var c, d = "",
    g = "",
    l = 0;
  p = b || 0;
  G = -1;
  fa = b || 0;
  ya = {};
  Ua = [];
  var r = {},
    u, f, h = 1E3,
    k = 0;

  if (a) {
    (function () {
      for (var b = a.split("\n"), c = 0; c < b.length && !(0 <= b[c].search(/^%%score/)); ++c);
      X && c == b.length && (alert("Staff extraction only works with ABC files that have a %%score declaration"), X = 0);
      if (X) {
        Va = b[c];
        kc = c;
        var d = "(" + Q[B].map(function (a) {
          return a + 1
        }).join(" ") + ")";
        if (2 == X && B + 1 in Q) var g = Q[B + 1].map(function (a) {
          return a + 1
        }),
          d = "{" + d + "(" + g.join(" ") + ")}";
        b[c] = "%%score" + Array(b[c].length - d.length - 7 + 1).join(" ") + d
      } else Va && (b[kc] = Va);
      a = b.join("\n")
    })();

    var m = {
      img_out: function (a) {
        -1 != a.indexOf("<svg") && (Ua[l] = Object.keys(r), r = {}, l += 1, u < h && (h = u), f > k && (k = f));
        d += a
      },
      errmsg: function (a, b, c) {
        g += a + "\n"
      },
      read_file: function (a) {
        return ""
      },
      anno_start: function (a, b, d, g, e, n, k) {
        if ("note" == a || "rest" == a) g = c.ax(g).toFixed(2), e = c.ay(e).toFixed(2), k = c.ah(k), ya[b] = [l, g, e, n, k];
        "bar" == a && (e = c.ay(e), k = c.ah(k), e = Math.round(e + k), r[e] = 1, f = c.ax(g), u = c.ax(0))
      },
      get_abcmodel: null
    };
    0 == e.hrz && (m.imagesize = 'width="100%"');
    c = new Abc(m);
    c.tosvg("abc2svg", a);
    "" == g && (g = "no error");
    q(g);
    d && ($("#notation").html('<div id="leeg" style="height:0px">&nbsp;</div>'), $("#notation").append(d), $("#notation").append('<div id="leeg" style="height:100px">&nbsp;</div>'), $("#leeg").click(function () {
      I ? za() : R(p)
    }), $("#notation").css("overflow-y", e.hrz ? "hidden" : "auto"), x = $("#notation svg"), m = $(".g"), xb = m.length ? m : x, x.children("title").remove(), lc(), mc(), ea && x.toggle(!1), Ba(B))
  }
}
function fd(a) {
  var b = 0 < p ? t[p].t : 0;
  t = [];
  Wa = {};
  var c = $("#chkmod").val(),
    d = W.filter(function (b) {
      return !b.bt && b.v in a
    }).map(function (a) {
      return a.t
    });
  d.push(d[d.length - 1] + 1600);
  var g = d.shift(),
    l = [],
    e = [],
    f, n = [],
    h = [],
    k, q, m;
  for (f = 0; f < W.length; ++f) {
    k = W[f];
    if (k.t == g) {
      for (; k.t == g;) g = d.shift();
      n.push(h);
      h = []
    }
    k.t < g && h.push(k)
  }
  n.push(h);
  var g = 1,
    v = 0,
    y = 1,
    w = 0,
    x = 0,
    z = 0;
  for (f = 0; f < n.length; ++f) for (h = n[f], e = l, l = [], d = 0; d < h.length; ++d) {
    k = h[d];
    if (k.bt && 0 == k.v) {
      if (k.t in Wa && ":" == k.bt[0]) continue;
      if (1 == g && ":" == k.bt[0] && k.t > w) {
        f = y - 1;
        g = 2;
        v += k.t - w;
        l = e;
        break
      }
      2 == g && ":" == k.bt[0] && k.t > w && (g = 1);
      1 == g && ":" == k.bt[k.bt.length - 1] && (y = f, w = k.t);
      x && (k.tx || "|" != k.bt) && (x = 0, v -= k.t - z);
      2 == g && "1" == k.tx && (x = 1, z = k.t)
    }
    if (x) {
      l = e;
      break
    }
    k.bt ? Wa[k.t] = 1 : k.v in a || 4 == c ? (q = {}, k.ns.sort(function (a, b) {
      return b.nt - a.nt
    }), 1 == c ? (l = l.concat(k.ns.slice(1)), m = k.ns[0], q[m.nt] = 1, m = m.dur) : (k.ns.forEach(function (a) {
      q[a.nt] = 1
    }), m = Math.max.apply(Math, k.ns.map(function (a) {
      return a.dur
    }))), ya[k.ix] && (t.push({
      t: k.t + v,
      xy: ya[k.ix],
      ptc: q,
      dur: m,
      rst: e,
      tmp: k.tmp
    }), e = l)) : k.ns.forEach(function (a) {
      l.push({
        t: a.t + v,
        nt: a.nt,
        dur: a.dur
      })
    })
  }
  gd(l);
  Xa = [];
  for (f = e = c = 0; f < t.length; ++f) Xa.push(c), k = t[f], c += 60 / k.tmp * (k.t - e) / 384, e = k.t;
  for (p = 0; p < t.length && !(t[p].t >= b); ++p);
  p == t.length && --p;
  fa = p;
  J(0)

  staffData = t.map(function (a, b) {
    return {
      dur: a.dur,
      pbk: a.pbk,
      ptc: a.ptc,
      rst: a.rst,
      t: a.t,
      xy: a.xy,
      index: b,
      stf: a.pbk && a.pbk.map(function (i) {
        return i.mn > 0 ? Number(i.mn) - 20 : 0
      })
    }
  })

  _noRepeat = [];
  for (var i = 0; i < staffData.filter(function (i) {return i.pbk}).length; i++) {
    if (!_noRepeat.map(function (i) {return JSON.stringify(i.xy)}).includes(JSON.stringify(staffData[i].xy))) {
      _noRepeat.push(staffData[i]);
    }
  }
  _noRepeat = _noRepeat.filter(function (a) {
    return a.pbk.length <= 1 ? (a.pbk[0].mn > 0) : a.pbk.map(function (b) {return b.mn}).reduce(function (c, d) {return Number(c) + Number(d)}) > 0
  });

  $('#notation svg .stf').remove();
  for (var i = 0; i < _noRepeat.length; i++) {
    var xy = _noRepeat[i].xy;
    var index = _noRepeat[i].index;
    var stroke = [];
    if (!bassOrTreble) {
      stroke = [
        $('#notation svg').eq(xy[0]).find('g .stroke').eq(0).attr('d').split('v-')[0].split('m')[1].split(' ')[0],
        $('#notation svg').eq(xy[0]).find('g .stroke').eq(0).attr('d').split('v-')[0].split('m')[1].split(' ')[1],
        $('#notation svg').eq(xy[0]).find('g .stroke').eq(0).attr('d').split('v-')[1]
      ]
    } else {
      stroke = ["83.9", "182.2", "86.2"]
    }
    var note = $(document.createElementNS('http://www.w3.org/2000/svg', 'text')).attr({
      'x': xy[1],
      'y': stroke[1] - stroke[2],
      'width': xy[3],
      'height': stroke[2],
      'index': index,
      'fill': 'rgba(0, 0, 0, 0)',
      'class': 'stf'
    });
    $('#notation svg').eq(xy[0]).find('.g').append(note);
  }
}
function gd(a) {
  function b(a, b) {
    var c = parseFloat(a[2]),
      d = a[4],
      g = parseFloat(b[2]),
      l = b[4],
      e = b.slice();
    e[2] = Math.min(c, g);
    e[4] = Math.max(c + d, g + l) - e[2];
    return e
  }
  var c, d, g, l = [],
    e, f;
  zb = {};
  for (g = 0; g < t.length; ++g) d = t[g], e = Object.keys(d.ptc), f = e.map(function (a) {
    return {
      mn: a,
      dur: d.dur
    }
  }), c && c.t == d.t ? (e.forEach(function (a) {
    0 <= a ? (-1 in c.ptc && (delete c.ptc[-1], c.xy = d.xy), c.ptc[a] = 1) : -1 in c.ptc && (c.dur > d.dur ? (delete c.ptc[-1], c.xy = d.xy) : d.xy = c.xy)
  }), c.xy = b(d.xy, c.xy), c.pbk = c.pbk.concat(f)) : (d.pbk = f, c = d, l.push(d), zb[d.t] = l.length - 1);
  t = l;
  g = t[t.length - 1];
  t.push({
    t: g.t + g.dur,
    xy: g.xy,
    ptc: g.ptc,
    dur: g.dur,
    rst: a
  })
}
function lc() {
  if (0 != x.length) {
    // var a = $("#notation").position().top - $("#notation").scrollTop();
    var a = 0;
    yb = x.map(function (b, c) {
      return $(c).position().top - a
    }).get()
  }
}
function mc() {
  if (0 != x.length) {
    var a, b, c;
    c = x.get(0);
    a = c.getBoundingClientRect().width;
    try {
      b = c.viewBox.baseVal.width
    } catch (d) {
      b = a
    }
    0 == b && (b = a);
    c = xb.get(0).transform.baseVal;
    c = c.numberOfItems ? c.getItem(0).matrix.a : 1;
    Aa = b / c / a
  }
}
var isFollow = true;
function V(a) {
  if (!isFollow) return;
  if (!(0 > G)) {
    var b = $("#rollijn").offset().top - $("#notation").offset().top,
      c = X ? 0 : B
    for (var i = 0; i < G + 1; i++) b += (i > 0 ? $('#notation svg').eq(i).height() : -b)
    b != E.scrollTop && (0 < e.hrz ? (Da && (E.style["scroll-behavior"] = "auto"), E.scrollTop = b) : (Da && (E.style["scroll-behavior"] = a ? "smooth" : "auto"), Da || !a ? E.scrollTop = b : $(E).animate({
      scrollTop: b
    })))
  }
}
function nc(a) {
  a = ga.attr("x") / Aa - E.scrollLeft - E.clientWidth / 2;
  !Ab || 0 == E.scrollLeft && 0 > a || 0 > oa ? (E.scrollLeft += a, oa = 1, Ea = 0) : (0 < a ? oa += .005 : 0 > a && (oa -= .005), Bb += oa + a / 200, E.scrollLeft = Bb, Ea = requestAnimationFrame(nc))
}
function hd(a) {
  var b = a.split(",");
  a = parseInt(b[0]);
  a = zb[a];
  if (0 <= a) {
    b = b[1];
    L.value = b;
    var c = t[a];
    Ya(c);
    if (0 < P) {
      var d = Y(),
        g = 156.25 / b;
      Object.keys(c.ptc).forEach(function (a) {
        Fa(d, a, c.dur * g)
      });
      t[a + 1].rst.forEach(function (a) {
        Fa(d + (a.t - c.t) * g, a.nt, a.dur * g)
      })
    }
  }
}
function Ya(a) {
  var b, c, d, g, l;
  b = a.xy;
  c = b[0];
  d = b[1];
  g = b[2];
  l = b[3];
  b = b[4];
  c != G && ($("#wijzer").remove(), xb.eq(c).prepend(ga), ea && (-1 < G && x.eq(G).toggle(!1), G + 1 < x.length && x.eq(G + 1).toggle(!1), x.eq(c).toggle(!0), c < x.length - 1 && x.eq(c + 1).toggle(!0)), G = c, V(!ea));
  Cb = 1;
  ga.attr({
    x: d,
    y: g,
    width: l,
    height: b,
    fill: pa
  });
  0 < e.hrz && 0 == Ea && (oa = 1, Bb = E.scrollLeft, requestAnimationFrame(nc));
  oc && (Za.forEach(function (a) {
    a.setAttribute("class", "")
  }), Za = [], Object.keys(a.ptc).forEach(function (a) {
    -1 != a && (a = document.getElementById(pc[a]), a.setAttribute("class", "neer"), Za.push(a))
  }))
}
function Db(a, b) {
  a.t != Eb && M.send(a.t + "," + b);
  Eb = a.t
}
function Y() {
  return 1 == P ? 1E3 * C.currentTime : (new Date).getTime() - performance.timing.navigationStart
}
function Ga(a, b) {
  if (0 != P && 1 == P && da) {
    var c = a[0] & 240,
      d = a[2],
      g = a[1];
    b /= 1E3;
    128 == c && z(g, b);
    144 == c && (0 < d ? f(g, d, b) : z(g, b));
    176 == c && 64 == g && (64 <= d ? rb = 1 : (rb = 0, Object.keys(Qa).forEach(function (a) {
      z(a, b)
    }), Qa = {}));
    2 == P && $a && $a.send(a, b)
  }
}
function Fa(a, b, c) {
  -1 != b && (b = [144, b, 70], Ga(b, a), b[2] = 0, Ga(b, a + c - 1))
}
function qc() {
  if (0 > Z && (R(-1), !e.nocnt)) return;
  var a = t[p],
    b = 156.25 / L.value,
    c = Y();
  a.pbk && (Fb.checked || a.pbk.forEach(function (a) {
    if (-1 != a.mn) {
      var d = [144, a.mn, 110];
      Ga(d, c);
      d[2] = 0;
      Ga(d, c + a.dur * b - 1)
    }
  }), ga.attr("fill", "yellow"), rc() && J(1))
}
function Ca(a) {
  a && (aa = [], Gb = [], $("#error").html(0));
  Hb = K = 0;
  Ib = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  S = 100;
  N.style.width = (ab ? 100 : 0) + "%";
  N.style.background = "green";
  N.innerHTML = "0";
  Z = -1
}
function sc() {
  var a, b, c = 0,
    d, g, e, f = aa.length;
  for (g = 0; g < f; ++g) {
    d = aa[g];
    if (d = 35 > d) a ? (b += 1, b > c && (c = b)) : b = 1;
    a = d
  }
  e = aa.reduce(function (a, b) {
    return a + b
  }) / f;
  a = aa.reduce(function (a, b) {
    return a + (b - e) * (b - e)
  }, 0);
  a = Math.sqrt(a / f);
  return {
    bln: c,
    avg: e,
    sdv: a
  }
}
function tc(a) {
  if (0 == aa.length) { }
  else {
    var b = aa.map(function (a, b) {
      return [b, a]
    }),
      c = Gb.map(function (a, b) {
        return [b, a]
      }),
      d = $("body").height(),
      g = $("#perf");
    g.css("height", .8 * d).toggle(!0);
    $.plot("#flot", [{
      label: "average",
      color: "#a0522d",
      data: b,
      lines: {
        show: !0
      },
      points: {
        show: !0
      },
      yaxis: 1
    }, {
      label: "actual",
      color: "rgba(0,128,0,0.5)",
      data: c,
      bars: {
        show: !0,
        barWidth: .2,
        align: "center"
      },
      yaxis: 2
    }], {
      yaxes: [{
        position: "left",
        font: {
          color: "#602010"
        }
      }, {
        position: "right",
        font: {
          color: "rgba(0,128,0,1)"
        }
      }]
    });
    b = sc();
    $("#best").html("longest series notes < 35 msec: " + b.bln + ", average error: " + b.avg.toFixed(1) + " msec, std.dev.: " + b.sdv.toFixed(1));
    g.on("click", function () {
      g.off();
      g.toggle(!1);
      a && a.resolve("ok1")
    })
  }
}
function uc(a) {
  Jb();
  $("#aud")[0].pause();
  ba = !1;
  var b = $.Deferred();
  if (ha) {
    var c = $("#result");
    c.on("click", function () {
      c.off();
      c.toggle(!1);
      tc(b)
    });
    a ? c.html("<h3>bravo! you did it!</h3>") : c.html("<h3>... not good enough</h3>");
    a = sc();
    var d = "<ul><li>Your longest series below 35 msec is: " + a.bln + " notes</li>",
      d = d + ("<li>The average error was: " + a.avg.toFixed(1) + " msec. with a deviation of " + a.sdv.toFixed(1) + " msec.</li></ul>");
    c.append(d);
    c.toggle(!0)
  } else b.resolve("ok2");
  b.done(function (a) {
    Ca();
    setTimeout(function () {
      R(fa)
    }, 1E3)
  })
}

function J(a, b, c) {
  p += a;

  if (playState) {
    if (p > 0) {
      var playAudio = t[p - 1].pbk.map(function (i) {return i.mn > 0 ? i.mn - 20 : 0}).filter(function (i) {return i > 0});;
      playAudio.map(function (i) {return play(i)})
    }
  }
  
  if (p + 1 >= t.length) {
    R(0)
    p = 0;
  }

  0 > p && (p = 0);
  var d = Y(),
    g = L.value,
    f = (d - Kb) / Lb;
  a && !Mb && !ha && !Ha && f < bb && f > Nb && (g = Math.round(g / (1 <= f ? 1 + .5 * (f - 1) : 1 - .5 * (1 - f))), g = ia > g ? ia : g, L.value = g, Ia = g / qa, w.playbackRate = Ia);
  var r = 156.25 / g,
    u = 0 < p && !c ? t[p - 1].t : t[p].t,
    n = t[p],
    m = (n.t - u) * r,
    k = -1;

  (a || b) && n.rst.forEach(function (a) {
    var b = (a.t - u) * r;
    Fa(d + b, a.nt, a.dur * r);
    ra && b != k && (k = b, setTimeout(function () {
      Db(a, g)
    }, b))
  });
  if (p == t.length - 1) setTimeout(function () {
    uc(1)
  }, m);
  else {
    Mb = 1 == a && n.ptc[-1];
    Ha || Mb ? (Fb.checked || n.pbk.forEach(function (a) {
      Fa(d + m, a.mn, a.dur * r)
    }), clearTimeout(Ja), Ja = setTimeout(function () {
      J(1)
    }, m)) : cb && a && (b = (n.t - u) * vc, clearTimeout(Ja), Ja = setTimeout(function () {
      J(1)
    }, b));
    b = db ? m / 2 : 0;
    var q = 0,
      q = b;
    b = m / 2;
    0 == a ? (eb = {}, Ob = n, pa = "green", Ya(n), U && (w.currentTime = n.t / 384 * (60 / Ta) + ub + Ra), ra && (Db(n, g), Eb = -1)) : (wc = setTimeout(function () {
      eb = {};
      Ob = n;
      pa = "green";
      Cb = 0;
      Z = d + m;
      xc = setTimeout(function () {
        Ya(n)
      }, q)
    }, b), ra && setTimeout(function () {
      Db(n, g)
    }, m));
    if (a && U) {
      w.paused && w.play();
      a = w.currentTime - Xa[p];
      if (-.5 > a || .5 < a) w.currentTime = Xa[p] + Ra;
      h.lat && $("#deb").html((1E3 * -a).toFixed(0) + " msec");
      clearTimeout(yc);
      yc = setTimeout(function () {
        w.pause()
      }, m + 1E3)
    }
    Kb = d;
    Lb = m;
    ba && !ha && u in Wa && Pb();
    qa != n.tmp && (qa = n.tmp, e.sctmp && (L.value = qa * Ia))
  }
}
function Jb() {
  clearTimeout(Ja);
  clearTimeout(wc);
  clearTimeout(xc);
}

var countdown = 0;
function R(a, play) {
  if (t.length) {
    var b = $(".opt4");
    if (a >= 0) {
      if (p >= staffData.filter(function (i) {return i.pbk}).length) {
        fa = p = 0
      }
      b.find('input').val("播放"), zc(), Ha = 0, Jb(), Z = -1, cancelAnimationFrame(Ea), Ea = Ab = 0;
      $('#opt .opt4 img').attr('src', 'icon/5-1.png');
      if (mode == 0) {
        $('#play').show();
        $('#opt .opt3').hide();
        $('#opt .opt5').show();
        $('#opt .opt1 img').attr('src', 'icon/6.png');
      } else {
        $('#wijzer').hide();
        $('.textScrollBar').hide();
        $('.practiceTime').show();
        if (!play) {
          IOS.playClick(1);
        }
        $('#opt .opt2 img').attr('src', 'icon/7.png');
      }
      $('#opt .opt3 img').attr('src', 'icon/4-1.png');
    } else {
      b.find('input').val('暂停'), Ab = 1, ba || O ? zc() : (Ca(1), O = e.nocnt ? 1 : countdown + 1, fb = 6 == e.volgmod, $("#countin").html("<b>" + O + "</b>").toggle(!0), Pb());
      $('#opt .opt4 img').attr('src', 'icon/5.png');
      if (mode == 0) {
        $('#play').hide();
        $('#opt .opt3').show();
        $('#opt .opt5').hide();
        $('#opt .opt1 img').attr('src', 'icon/6-2.png');
      } else {
        $('.textScrollBar').show();
        $('.practiceTime').hide();
        $('#opt .opt2 img').attr('src', 'icon/7-2.png');
      }
      $('#opt .opt3 img').attr('src', 'icon/4.png');
    }
    playState = !playState;
  }
}
function id(a) {
  var b = a.key;
  if (!I || "m" == b) switch (b) {
    case "ArrowLeft":
    case "Left":
      J(-1);
      break;
    case "ArrowUp":
    case "Up":
      Ac(-1);
      break;
    case "ArrowRight":
    case "Right":
      qc();
      break;
    case " ":
      a.preventDefault();
      qc();
      break;
    case "ArrowDown":
    case "Down":
      Ac(1);
      break;
    case "c":
      R(-1);
      break;
    case "m":
      $("#mbar").click()
  }
}
function rc() {
  var a = Math.abs(Y() - Z);
  Ib.push(a);
  var b = Ib.shift();
  K += (a - b) / 10;
  var c;
  ab ? (100 < K ? S = 0 : 35 < K ? S -= 5 : 95 >= S && (S += 5), b = 35 > S ? "red" : 75 > S ? "orange" : "green", 0 == S && (c = 1), N.style.width = S + "%", N.style.background = b, N.innerHTML = K.toFixed(0)) : (N.style.width = (100 < K ? 100 : K) + "%", b = 35 > K ? "green" : 75 > K ? "orange" : "red", N.style.background = b, N.innerHTML = a.toFixed(0), 100 <= K && (c = 1));
  aa.push(K);
  Gb.push(a);
  if (c && ha) uc(0);
  else return !Ha
}
function Bc(a) {
  var b = Ob;
  if (b) {
    if (0 > Z && (R(-1), !e.nocnt)) return;
    var c = Object.keys(b.ptc);
    a in b.ptc ? eb[a] = 1 : (Hb += 1, $("#error").html(Hb), pa = "red");
    Object.keys(eb).length == c.length && (pa = "yellow", rc() && J(1));
    Cb && ga.attr("fill", pa)
  }
}
function Cc() {
  // for (var a = Y(), b = 0; 3 > b; ++b) Fa(a, 60 + 2 * b, 300), a += 310
}
function gb(a) {
  var b = a.data[0];
  254 != b && (144 == (b & 240) && 0 < a.data[2] && Bc(a.data[1]), Dc && Ga(a.data, Y()))
}
function jd(a) {
  q("MIDI ready! Listening to following input ports:");
  var b = 0;
  a.inputs.forEach(function (a) {
    a.onmidimessage = gb;
    q(b + ": " + a.name + ', "' + a.manufacturer + '"');
    b++
  });
  q("The following output ports are present:");
  var c = $("#portsel");
  a = a.outputs;
  b = 0;
  a.forEach(function (a) {
    q(b + ": " + a.name + ', "' + a.manufacturer + '"');
    c.append('<option value="' + b + '">' + a.name + "</option>");
    Ec.push(a);
    $a = a;
    b++
  })
}
function kd(a) {
  q("Failed to get MIDI access - " + a)
}
function ld(a) {
  var b = $("#portsel").val();
  "synth" == b ? (P = 1, a && A(wb)) : "nosound" == b ? P = 0 : (P = 2, a = parseInt(b), $a = Ec[a]);
  Cc()
}
function Ba(a) {
  a in Q || (a = 0);
  Jb();
  var b = {};
  Q[a].forEach(function (a) {
    b[a] = 1
  });
  3 == $("#chkmod").val() && a + 1 in Q && Q[a + 1].forEach(function (a) {
    b[a] = 1
  });
  xa && fd(b);
  B = a
}
function Ac(a) {
  B += a;
  0 > B && (B = 0);
  B >= Q.length && (B = 0);
  Ba(B)
}
function za() {
  I = 1 - I;
  $("#menu").toggle(I);
  $("#mbar").toggleClass("down", I);
  I && setTimeout(function () {
    $("#fknp").focus()
  }, 100)
}
function Fc() {
  Qb.style.fill = "none";
  Rb = 1;
  if (ba || O) hb = setTimeout(Pb, Sb)
}
function zc() {
  O = 0;
  fb = ba = !1;
  clearTimeout(hb);
  $("#countin").toggle(!1);
  Fc();
  U && w.pause()
}
function Pb() {
  Qb.style.fill = "red";
  if (Rb) {
    var a = C.createBufferSource();
    a.buffer = Gc;
    a.connect(C.destination);
    a.start(0, .06, .16)
  }
  Rb = 0;
  Sb = 3E4 / L.value;
  clearTimeout(hb);
  hb = setTimeout(Fc, Sb);
  0 < O && (--O, $("#countin").html(/* "<b>" + O + "</b>" */"<b><img src='icon/10-" + O + ".png' /></b>"), 1 == O && (Z = Y()), 0 == O && ($("#countin").toggle(!1), ba = e.metro, Kb = Z = Y(), fb ? (fb = 0, Ha = 1, U && w.play(), J(0, 0, 1)) : $("#eenvoor").prop("checked") ? J(0, 1) : (Lb = 0, U && w.play(), t[p].ptc[-1] && J(1))))
}
function gc(a, b) {
  for (var c = atob(a), d = new ArrayBuffer(c.length), g = new Uint8Array(d), e = 0; e < c.length; e++) g[e] = c.charCodeAt(e);
  C.decodeAudioData(d, function (a) {
    b(a)
  }, function (a) {
    da = 0
  })
}
function md(a) {
  a.stopPropagation();
  $("#spkron").toggle();
  $("#spkrof").toggle();
  w.muted = !w.muted
}
function Hc() {
  Ic();
  ca(abc_arr.join("\n"));
  wa();
  $("#wait").toggle(!1)
}

function nd(data) {
  var a, b = "",
    c = "",
    d, g, e, f = "",
    u, n;
  $("#err").text("");
  a = window.location.href.replace("?dl=0", "").split("?");
  if (d = a[0].match(/:\/\/([^/:]+)/)) u = d[1];
  if (1 < a.length) {
    g = a[1].split("&");
    for (e = 0; e < g.length; e++) a = g[e].replace(/d:(\w{15}\/[^.]+\.)/, "https://dl.dropboxusercontent.com/s/$1"), (d = a.match(/tmp=([\d.]*)/)) ? h.tempo = parseFloat(d[1]) : (d = a.match(/stf=(\d+)/)) ? h.staff = parseInt(d[1]) : (d = a.match(/mod=(\d+)/)) ? h.chkmod = parseInt(d[1]) : (d = a.match(/fmd=(\d+)/)) ? h.volgmod = parseInt(d[1]) : (d = a.match(/opa=(\d)/)) ? h.kbopa = parseInt(d[1]) : (d = a.match(/line=(\d+)/)) ? h.line = parseInt(d[1]) : (d = a.match(/pw=(\d+)/)) ? h.pw = parseInt(d[1]) : (d = a.match(/scl=([\d.]*)/)) ? h.scl = parseFloat(d[1]) : (d = a.match(/hrz=(\d+)/)) ? h.hrz = parseInt(d[1]) : (d = a.match(/tb=([\d.]*)/)) ? h.btime = parseFloat(d[1]) : (d = a.match(/te=([\d.]*)/)) ? h.etime = parseFloat(d[1]) : (d = a.match(/shrnk=([\d.]*)/)) ? h.shrnk = parseFloat(d[1]) : (d = a.match(/lat=([\d]*)/)) ? h.lat = parseInt(d[1]) : "ip" == a && u ? h.ipadr = u : "ipm" == a && u ? (h.ipadr = u, h.mstr = 1) : "metro" == a ? h.metro = 1 : "nocnt" == a ? h.nocnt = 1 : "nodel" == a ? h.delay = 0 : "keyb" == a ? h.keys = 1 : "ksh" == a ? h.mark = 1 : "nosnd" == a ? h.portsel = "nosound" : "nobar" == a ? h.nobar = 1 : "nomenu" == a ? h.nomenu = 1 : "extr" == a ? h.extract = 2 : "extrg" == a ? h.extract = 3 : "2ln" == a ? h.twosys = 1 : "nocur" == a ? h.nocur = 1 : "mute" == a ? h.mute = 1 : "sctmp" == a ? h.sctmp = 1 : "nosm" == a ? Da = !1 : "ctrls" == a ? h.ctrls = 1 : c = a, /(\.xml$)|(\.abc$)/.test(c) && (b = c, c = ""), /(\.mp3$)|(\.mp4$)|(\.ogg$)|(\.webm$)/.test(c) && (f = c, c = "");
    f && (media_file = decodeURIComponent(f).replace("www.dropbox", "dl.dropboxusercontent"));
    (c || b) && $("#wait").toggle(!0);

    data && ca(data)

    b ? $.get(b, "", null, "text").done(function (a, b) {
      q("preload: " + b);
      ca(a)

      wa();
      $("#wait").toggle(!1)
    }).fail(function (a, b, c) {
      $("#wait").append("\npreload failed: " + b)
    }) : c && (0 <= c.indexOf("dropbox.com") && (c += "?dl=1"), $.getScript(c).done(function (a, b) {
      q(", preload: " + b);
      Hc()
    }).fail(function (a, b, d) {
      $("#wait,#err").append("\npreload failed: " + b + "\ntrying script tag ...");
      n = document.createElement("script");
      n.src = c;
      n.onload = function () {
        Hc()
      };
      n.onerror = function () {
        $("#wait").append("\npreload failed")
      };
      document.head.appendChild(n);
      document.head.removeChild(n)
    }))
  }
  return c || b
}
function Jc() {
  for (var a in Tb) {
    var b = $("#" + a),
      c = b.attr("type") || b[0].type;
    "checkbox" == c && b.prop("checked", e[a]);
    "number" != c && "select-one" != c || b.val(e[a])
  }
}
function wa() {
  function a(b) {
    tb = 1;
    w.removeEventListener("canplay", a);
    q("sufficient audio data loaded");
    $("#spkron").toggle(!0);
  }
  for (var b in pre_opt) e[b] = pre_opt[b];
  for (b in h) e[b] = h[b];
  Jc();
  for (b in e) Ka(b, 0);
  U = 0;
  Ra = e.lat / 1E3;
  media_file ? (ub = 0 <= e.btime ? e.btime : 0, w.src = media_file, e.ctrls && (w.controls = !0), U = 1, tb = 0, w.addEventListener("canplay", a)) : va = 0;
  Kc = media_file || "";
  La.addEventListener("change", function () {
    La.blur();
    e.vol = La.value;
    pb = e.vol / 25
  });
  La.value = e.vol;
  pb = e.vol / 25;
  A(wb);
  D && (e.pw || e.hrz ? na(D, p) : vb(xa, p), Ka("begin", 1));
  h.ipadr && (od(h.ipadr), h.mstr || x.off());
  demoDlg && ($("#demoDlg span").html(demoDlg), $("#demoDlg").toggle(!0), $("#demoDlg button").on("mouseup touchend keydown blur", function (a) {
    a.stopPropagation();
    $("#demoDlg").toggle(!1);
    $("#demoDlg button").off("mouseup touchend keydown blur");
  }).focus())
}
function pd() {
  if (D) {
    var a = 'media_file = "' + (Kc || "") + '";\n',
      b = D.split("\n").map(function (a) {
        return JSON.stringify(a)
      }),
      b = "abc_arr = [" + b.join(",\n") + "];\n";
    e.staff = B + 1;
    e.line = Math.round(100 * $("#rollijn").position().top / $("body").height());
    e.begin = fa;
    var c = "pre_opt = " + JSON.stringify(e) + ";\n",
      a = a + c + b,
      b = "data:text/plain;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(a)));
    $("#saveDlg pre").text(a);
    $("#saveDlg").toggle(!0);
    $("#div3 a").attr("href", b);
    $("#saveok").focus()
  }
}
function qd() {
  ha = ab = cb = !1;
  ia = 0;
  $("#mtplab").toggle(!1);
  Ub();
  e.volgmod = $("#volgmod").val();
  switch (e.volgmod) {
    case "2":
      ha = !0;
      break;
    case "3":
      ab = ha = !0;
      break;
    case "4":
      cb = !0;
      $("#mtplab").toggle(!0);
      ia = e.mtpo;
      vc = 156.25 / ia;
      var a = document.getElementById("delay");
      e.delay = a.checked = db = !1;
      Ub();
      break;
    case "5":
      $("#mtplab").toggle(!0);
      ia = e.mtpo;
      break;
    case "7":
      bb = Nb = 1
  }
  Ca()
}
function Ub() {
  bb = cb ? 10 : 3;
  Nb = 1 / bb
}
function Vb() {
  e.tempo = L.value;
  Ia = e.tempo / qa || 1;
  w.playbackRate = Ia
}
function Lc() {
  e.mtpo = $("#mtpo").val();
  ia = e.mtpo
}
function rd(a) {
  a.stopPropagation();
  a.preventDefault();
  a.target.setAttribute("class", "neer");
  a = Wb[a.target.id];
  Xb[a] = 1;
  gb({
    data: [144, a, 110]
  })
}
function Mc(a) {
  a.stopPropagation();
  a.preventDefault();
  a.target.setAttribute("class", "");
  a = Wb[a.target.id];
  a in Xb && (delete Xb[a], gb({
    data: [144, a, 0]
  }))
}
function sd() {
  for (var a = [0, 2, 4, 5, 7, 9, 11, 1, 3, 6, 8, 10], b = [], c = 0; 8 > c; ++c) for (var d = 0; 12 > d; ++d) b.push(12 * c + a[d] + 12);
  a = $("#toetsen rect");
  for (d = 0; d < a.length; ++d) {
    c = $(a[d]);
    Wb[a[d].id] = b[d];
    pc[b[d]] = a[d].id;

    /* c.on("mousedown touchstart", rd);
    c.on("mouseup touchend", Mc);
    c.on("mouseleave", Mc); */
    // d == a.length / 2 && c.css("fill", "rgb(110, 190, 109)");
  }
}
function Nc() {
  var a = $("#toetsen")[0].scrollWidth - $("body").width();
  $("#keyb").scrollLeft(a / 2)
}
function ja() {
  var a = T && 0 == Yb ? $("#keyb").height() : $("#err").height(),
    b = $("body").height(),
    c = Math.round(100 * c / b),
    a = Math.round(100 * a / b);
  $("#notation").css("height", 100 - c - a + "%")
}
function Oc(a) {
  var b = $("#toetsen svg"),
    c = b.width(),
    c = 100 * c / $("body").width();
  b.css("width", c + a + "%");
  Nc()
}
function td() {
  for (var a = $("#octaaf"), b = 0; 8 > b; ++b) {
    var c = a.clone();
    c.find("rect").each(function (a, c) {
      c.id += "-" + b
    });
    $("#toetsen").append(c)
  }
  sd()
}
function ud(a) {
  if (T && "zoom" == a.target.id) {
    a.stopPropagation();
    a.preventDefault();
    var b = "touchstart" == a.type,
      c = $("#zoom"),
      d = b ? a.originalEvent.touches[0].clientX : a.pageX,
      e = b ? a.originalEvent.touches[0].clientY : a.pageY,
      f = $("#keyb").height(),
      h = $("#keyb").scrollLeft();
    c.css("cursor", "row-resize").toggleClass("spel", !0);
    c.on("mousemove touchmove", function (a) {
      a.stopPropagation();
      a.preventDefault();
      var c = b ? a.originalEvent.touches[0].clientX : a.clientX;
      a = b ? a.originalEvent.touches[0].clientY : a.clientY;
      Math.abs(a - e) > Math.abs(c - d) ? (c = f + e - a, a = $("body").height(), c = Math.floor(100 * c / a), $("#keyb").css("height", c + "%"), $("#zoom").css("bottom", c + "%"), $("#kblft").css("bottom", c + "%"), $("#kbrgt").css("bottom", c + "%")) : $("#keyb").scrollLeft(h + d - c)
    });
    c.on("mouseup touchend mouseleave", function (a) {
      a.stopPropagation();
      a.preventDefault();
      c.css("cursor", "initial").toggleClass("spel", !1);
      c.off("mousemove touchmove mouseup touchend mouseleave");
      ja()
    })
  }
}
function vd(a) {
  if ("info" == a.target.id || "error" == a.target.id || "mean" == a.target.id || "" == a.target.id) {
    a.stopPropagation();
    a.preventDefault();
    var b = "touchstart" == a.type,
      c = $("#info"),
      d = b ? a.originalEvent.touches[0].clientY : a.pageY,
      e = c.height();
    $("#notation").height();
    c.css("cursor", "row-resize").toggleClass("spel", !0);
    c.on("mousemove touchmove", function (a) {
      a.stopPropagation();
      a.preventDefault();
      var g = $("body").height();
      c.css("height", Math.floor(100 * (e + (b ? a.originalEvent.touches[0].clientY : a.clientY) - d) / g) + "%");
      ja()
    });
    c.on("mouseup touchend mouseleave", function (a) {
      a.stopPropagation();
      a.preventDefault();
      c.css("cursor", "initial").toggleClass("spel", !1);
      c.off("mousemove touchmove mouseup touchend mouseleave");
      ja();
      V()
    })
  }
}
function Pc(a) {
  function b() {
    d && (Oc(c ? -1 : 1), e = 1, setTimeout(b, 200))
  }
  var c = 0,
    d = 0,
    e = 0;
  a = $(a);
  a.on("mousedown touchstart", function (a) {
    a.stopPropagation();
    a.preventDefault();
    $(a.target).attr("class", "spel");
    c = "kblft" == a.currentTarget.id;
    d = 1;
    e = 0;
    setTimeout(b, 300)
  });
  a.on("mouseup touchend mouseleave", function (a) {
    a.stopPropagation();
    a.preventDefault();
    if (d && ($(a.target).attr("class", ""), d = 0, !e)) {
      a = c;
      var b = $("#octaaf").width(),
        f = $("#keyb"),
        g = f.scrollLeft();
      a ? f.scrollLeft(g - b) : f.scrollLeft(g + b)
    }
  })
}
function wd(a) {
  a.preventDefault();
  var b = "touchstart" == a.type,
    c = $("#rollijn");
  c.css("cursor", "row-resize").toggleClass("spel", !0);
  c.on("mousemove touchmove", function (a) {
    $("#notation").offset();
    a = b ? a.originalEvent.touches[0].clientY : a.clientY;
    $("#rollijn").css("top", a - 15 + "px");
    V()
  });
  c.on("mouseup touchend mouseleave", function (a) {
    c.off("mousemove touchmove mouseup touchend mouseleave");
    c.css("cursor", "initial").toggleClass("spel", !1)
  })
}
function q(a, b) {
  b || (a += "\n");
  $("#err").append(a)
}
function od(a) {
  M ? q("websocket already open") : (M = new WebSocket("ws://" + a + ":8091/"), M.onmessage = function (a) {
    a = a.data;
    "master" == a ? ($("#mbar").css("background", "rgba(255,0,0,0.2)"), ra = 1) : ra || hd(a)
  }, M.onerror = function (a) {
    q("socket error (server inaccessible?)");
    M = null
  }, M.onopen = function (a) {
    $("#mbar").css("background", "rgba(0,255,0,0.2)");
    h.mstr && M.send("master");
    q("connection opened")
  }, M.onclose = function (a) {
    $("#mbar").css("background", "");
    q("connection closed: " + a.code);
    M = null;
    ra = 0
  })
}
function Ic() {
  e = {};
  xa = "";
  for (var a in Tb) e[a] = Tb[a];
  for (a in Qc) e[a] = Qc[a];
  Jc();
  for (a in e) Ka(a, 0)
}
function Ka(a, b, c) {
  switch (a) {
    case "tempo":
      L.value = e.tempo;
      Vb();
      break;
    case "mtpo":
      Lc();
      break;
    case "chkmod":
      D && b && Ba(B);
      break;
    case "echo":
      Dc = e[a];
      break;
    case "delay":
      db = e[a];
      break;
    case "volgmod":
      qd();
      break;
    case "portsel":
      ld(c);
      break;
    case "keys":
      T = $("#keys").prop("checked");
      $("#keyb").toggle(T);
      // $("#zoom").toggle(T);
      $("#kblft").toggle(T);
      $("#kbrgt").toggle(T);
      $("#rek").toggle(T);
      T ? Oc(0) : Nc();
      ja();
      break;
    case "mark":
      oc = e[a];
      Za.forEach(function (a) {
        a.setAttribute("class", "")
      });
      t.length && Ya(t[p]);
      break;
    case "kbopa":
      Yb = e[a] / 10;
      $("#keyb").css("opacity", 1 - Yb);
      ja();
      break;
    case "pw":
      e.pw = parseFloat(e[a]);
      5 > e.pw && (delete e.pw, $("#pw").val(""));
      D && b && na(D);
      break;
    case "scl":
      e.scl = parseFloat(e[a]);
      if (.1 > e.scl || 2 < e.scl) delete e.scl, $("#scl").val("");
      D && b && na(D);
      break;
    case "metro":
      ba && (ba = !1);
      break;
    case "extract":
      X = $("#extract").val() - 1;
      0 == X && (Va = "");
      D && b && vb(xa);
      break;
    case "toggleHand":
      var val = $("#toggleHand").val()
      switch (val) {
        case '1':
          Tb.mute = 0;
          $('#chkmod').val(4);
          $('#mute').prop('checked', false);
          D && b && Ba(B);
          break;
        case '2':
        case '3':
          $('#chkmod').val(2);
          $('#mute').prop('checked', true);
          D && b && Ba(val - 1);
          break;
      }
      break;
    case "twosys":
      D && ed();
      break;
    case "micuse":
      e.micuse ? xd() : Zb();
      break;
    case "gain":
      Rc();
      break;
    case "drempel":
      yd();
      break;
    case "minlev":
      Sc();
    case "bass":
      ka = $("#bass").prop("checked") ? 1024 : 512;
      la && Tc();
      break;
    case "staff":
      B = e.staff - 1;
      D && b && Ba(B);
      break;
    case "line":
      $("#rollijn").css("top", e.line + "%");
      V();
      break;
    case "begin":
      p = fa = e.begin;
      D && b && J(0);
      break;
    case "nocur":
      e.nocur && ga.attr("fill-opacity", 0);
      break;
    case "drpuse":
      zd();
      break;
    case "nobar":
      $("#info").toggle(!1);
      $("#err").toggle(!1);
      $("#notation").css("height", "100%");
      V();
      break;
    case "nomenu":
      break;
    case "sctmp":
      L.value = qa;
      Vb();
      break;
    case "hrz":
      b && (e.hrz = e.hrz ? 50 : 0), $("#pwlbl").toggle(0 == e.hrz), $("#scllbl").toggle(0 < e.hrz), D && b && na(D)
  }
}
function $b(a) {
  a = $(this).attr("type") || this.type;
  var b = $(this).attr("id");
  "checkbox" == a && (e[b] = $(this).prop("checked"));
  if ("number" == a || "select-one" == a || "range" == a) e[b] = $(this).val();
  Ka(b, 1, 1)
}
function zd() {
  function a(a) {
    $("#drpuse").prop("checked", !a);
    $("#drpuse").attr("disabled", a);
    $("#drplbl").css("color", a ? "#aaa" : "#000")
  }
  function b() {
    var a = $("#drpuse").prop("checked");
    $(".dropbox-dropin-btn").css("display", a ? "inline-block" : "none");
    $("#fknp").css("display", a ? "none" : "inline-block")
  }
  if ("undefined" == typeof Dropbox) {
    a(!0);
    var c;
    $.ajax({
      url: "https://www.dropbox.com/static/api/2/dropins.js",
      dataType: "script",
      cache: !0
    }).done(function () {
      a(!1);
      Dropbox.init({
        appKey: "ckknarypgq10318"
      });
      c = Dropbox.createChooseButton({
        success: F,
        extensions: [".xml", ".abc", ".js"],
        cancel: function () { },
        linkType: "preview",
        multiselect: !1
      });
      $("#flbl").append(c);
      b()
    })
  } else b()
}
function Uc(a) {
  var b, c, d, e, f = 0,
    h = -1,
    m, n, p = Math.floor(a.length / 2),
    k = 0,
    q = Infinity;
  ma = Array(p);
  n = p / 2;
  for (c = 3; c < p; c++) {
    e = 0;
    m = Math.floor(n - c / 2);
    a[m] > k && (k = a[m]);
    for (b = m; b < m + p; b++) d = a[b] - a[b + c], e += d * d;
    f += e;
    e *= (c - 2) / f;
    ma[c] = e;
    if (e < q) q = e, h = c;
    else if (.1 > q) break
  }
  c = ma[h + 1];
  b = ma[h];
  a = ma[h - 1];
  return {
    period: h + ((a - c) / (c - 2 * b + a) / 2 || 0),
    diff: q,
    max: k
  }
}
function Vc(a) {
  la.getFloatTimeDomainData(sa);
  var b = Uc(sa),
    c = b.period / a,
    c = 1.06 > c && .94 < c;
  if (b.diff < Ma && 0 < b.diff && b.max > ac || .65 > b.diff && c) {
    var d = C.sampleRate / b.period;
    c || Bc(Math.round(69 + 12 * Math.log(d / 440) / Math.log(2)));
    a = b.period
  } else a = 1;
  ib = setTimeout(function () {
    Vc(a)
  }, 0)
}
function Sc() {
  var a = parseInt(e.minlev),
    b = 2.5 * (40 + a),
    c = $("#mxlvl").width();
  $("#levmrk").css("width", c * b / 100 + "px");
  ac = Math.pow(10, a / 20);
  $("#mval").html(a)
}
function yd() {
  var a = parseFloat(e.drempel);
  Ma = a / 10;
  $("#dval").html(a);
  Wc()
}
function Rc() {
  var a = parseFloat(e.gain);
  Na && (Na.gain.value = Math.pow(10, (a + 1) / 2 - 3));
  $("#gval").html(a)
}
function Tc() {
  la.fftSize = 4 * ka;
  sa = new Float32Array(la.frequencyBinCount)
}

function Zb() {
  Oa && (Oa.getAudioTracks().forEach(function (a) {
    a.stop()
  }), bc.disconnect(), Oa = null, cancelAnimationFrame(jb), clearTimeout(ib));
  $("#micuse").prop("checked", !1);
  $("#micKnop").css("background", "");
}
function xd() {
  function a(a) {
    Oa = a;
    bc = C.createMediaStreamSource(a);
    Na = C.createGain();
    la = C.createAnalyser();
    Tc();
    bc.connect(Na);
    Na.connect(la);
    Rc();
    Xc();
    $("#micKnop").css("background", "orange");
    a = document.getElementById("delay");
    e.delay = a.checked = db = !1
  }
  function b(a) {
    alert("Can not access the microphone!\n" + a.name + ": " + a.message);
    Zb()
  }
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) navigator.mediaDevices.getUserMedia({
    audio: !0
  }).then(a)["catch"](b);
  else {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    try {
      navigator.getUserMedia({
        audio: !0
      }, a, b)
    } catch (c) {
      alert("getUserMedia() not supported by your browser -> no microphone\n" + c.name + ": " + c.message), Zb()
    }
  }
}
function Ad() {
  var a = document.getElementById("micuse");
  e.micuse = a.checked = !a.checked;
  Ka("micuse", 0)
}
function Xc() {
  Oa && (cancelAnimationFrame(jb), clearTimeout(ib), Yc ? jb = requestAnimationFrame(function () {
    Zc(1)
  }) : ib = setTimeout(function () {
    Vc(1)
  }, 0))
}
function $c(a) {
  $("#tuner").toggle(a);
  a && ($("#micuse").focus(), Sc());
  I && za();
  Yc = a;
  Xc()
}
function Zc(a) {
  var b = performance.now();
  la.getFloatTimeDomainData(sa);
  var c = Uc(sa),
    d = c.period / a;
  a = 1.06 > d && .94 < d;
  d = 69 + 12 * Math.log(C.sampleRate / c.period / 440) / Math.log(2);
  b = (performance.now() - b).toFixed(2);
  if (c.diff < Ma && 0 < c.diff && c.max > ac || .65 > c.diff && a) {
    a = c.period;
    a = Math.round(d);
    var e = Bd[a % 12] + Math.floor(a / 12);
    kb.innerHTML = e;
    d = Math.round(100 * (d - a));
    cc.push(d);
    ta += (d - cc.shift()) / 30;
    Pa.innerHTML = Math.round(ta);
    0 <= ta ? (Pa.style.width = "50%", lb.style.width = ta + "%") : (Pa.style.width = 50 + ta + "%", lb.style.width = -ta + "%");
    ua.style.background = "#cc0";
    kb.style.background = "#cc0"
  } else e = "---", a = 1, ua.style.background = "orange", kb.style.background = "none";
  Wc();
  m.strokeStyle = "green";
  m.beginPath();
  m.moveTo(0, 256 - 128 * ma[0]);
  d = ka / 512;
  for (a = 1; a < ka; a += d) m.lineTo(a / d, 256 - 128 * ma[a]);
  m.stroke();
  m.beginPath();
  m.moveTo(c.period / d, 256);
  m.strokeStyle = "red";
  m.lineTo(c.period / d, 245);
  m.stroke();
  c = 20 * Math.log10(c.max);
  dc = 2.5 * (40 + c);
  dc > mb ? (mb = dc, ua.innerHTML = c.toFixed(0), nb = sa.slice()) : --mb;
  ua.style.width = mb + "%";
  b > ec && (ec = b);
  20 == ad++ && (ob.style.width = Math.min(10 * b, 100) + "%", ob.innerHTML = b, ad = ec = 0);
  if (nb) {
    m.strokeStyle = "grey";
    m.beginPath();
    m.moveTo(0, 128 - 32 * nb[0]);
    d = ka / 512;
    for (a = 1; a < ka; a += d) m.lineTo(a / d, 128 - 32 * nb[a]);
    m.stroke()
  }
  jb = requestAnimationFrame(function () {
    Zc(1)
  })
}

function Wc() {
  m.clearRect(0, 0, 512, 256);
  m.beginPath();
  m.moveTo(0, 256 - 128 * Ma);
  m.strokeStyle = "blue";
  m.setLineDash([5, 3]);
  m.lineTo(512, 256 - 128 * Ma);
  m.stroke();
  m.setLineDash([])
}
function Cd() {
  var a = document.body,
    b = a.requestFullscreen || a.mozRequestFullScreen || a.webkitRequestFullscreen,
    c = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
  b && c && ($("#fscr").prop("checked") ? b.call(a) : c.call(document))
}
function Dd() {
  var a;
  navigator.bluetooth.requestDevice({
    filters: [{
      services: ["03b80e5a-ede8-4b33-a751-6ce34ec4c700"]
    }]
  }).then(function (a) {
    var b = a.gatt.connect();
    q("BLE Connected: " + a.name + ", " + a.id.substring(0, 5) + "...");
    return b
  }).then(function (a) {
    return a.getPrimaryService("03b80e5a-ede8-4b33-a751-6ce34ec4c700")
  }).then(function (a) {
    return a.getCharacteristic("7772e5db-3868-4112-a1a9-f2669d106bf3")
  }).then(function (b) {
    a = b;
    return a.startNotifications()
  }).then(function (b) {
    q("Midi notifications started");
    a.addEventListener("characteristicvaluechanged", Ed)
  })["catch"](function (a) {
    q(a.toString())
  })
}
function Ed(a) {
  var b = a.target.value.getUint8(2),
    c = a.target.value.getUint8(3);
  a = a.target.value.getUint8(4);
  gb({
    data: [b, c, a]
  })
}
var ya = {},
  t = [],
  p = 0,
  G = -1,
  yb, Aa, $a, Ec = [],
  eb = {},
  Ta = 60,
  xa, P = 0,
  Ha = 0,
  Kb, Lb, W, I, Q, fa = 0,
  Dc = 1,
  aa, Gb, db = 1,
  T = 0,
  E, Da, Ja, wc, xc, yc, ga = $(document.createElementNS("http://www.w3.org/2000/svg", "rect"));
ga.attr({
  id: "wijzer",
  fill: "green",
  "fill-opacity": "0",
  width: "0",
  stroke: 'rgb(110, 190, 109)',
  rx: 3,
  xy: 3,
  'stroke-width': 3,
});
var C, fc = [],
  qb = [],
  rb = 0,
  Qa = {},
  sb, hc = {},
  wb = {},
  ya = {},
  t = [],
  Sa = [],
  Ua = [],
  ic = [];
W = [];
var ha = 0,
  ab = 0,
  S = 100,
  Hb, K, Ib, N, L, Qb, Fb, Gc, O = 0,
  jc = 4,
  Rb = 1,
  Ob, Z = 0,
  Cb, pa, cb = 0,
  ia = 0,
  vc, bb, Nb, Yb = 0,
  Wb = {},
  pc = {},
  Xb = {},
  x = [],
  xb = [],
  Za = [],
  oc = 0,
  X = 0,
  Va, kc = 0,
  B = 0,
  ea = 0,
  Mb, M, ra = 0,
  zb = {},
  Eb, fb = 0,
  D, Wa, e, Yc = 0,
  ac, Oa, bc, la, sa, Na, ka, ma, ob, ec = 0,
  ad = 0,
  Ma, m;
ka = 512;
for (var ua, dc = 0, mb = -100, kb, lb, Pa, ta = 0, nb, ib, jb, Bd = "C ;C#;D ;D#;E ;F ;F#;G ;G#;A ;A#;B ".split(";"), cc = [], bd = 0; 30 > bd; bd++) cc.push(0);
var h = {},
  Tb = {
    delay: 1,
    eenvoor: 0,
    metro: 0,
    keys: 0,
    mark: 1,
    twosys: 0,
    mute: 0,
    volgmod: 6,
    chkmod: 4,
    extract: 1,
    portsel: "synth",
    tempo: 60,
    kbopa: 0,
    pw: 0,
    scl: 1,
    gain: 5,
    drempel: 1,
    minlev: -18,
    bass: 0,
    mtpo: 20,
    hrz: 0,
    vol: 50
  },
  Qc = {
    staff: 1,
    line: 0,
    begin: 0,
    nocur: 0,
    sctmp: 0,
    btime: 0,
    etime: 0,
    nocnt: 0,
    ctrls: 0,
    shrnk: 0,
    lat: 0
  },
  pb = 2,
  da, va, tb, Ra, w, La, ub = .1,
  U, Ia, qa, Kc, Xa, Bb = 0,
  oa = 0,
  Ea = 0,
  Ab = 0,
  Sb, hb = 0,
  ba;

var body_height = $(window).height() || 0;

function getVirtualButtonHeight (data) {
  data = Number(data) || 0;
  body_height = $(window).height() - data;
  $('body, .xy_staff').css('width', body_height + 'px');
  $('#tabbar').css('width', body_height + 'px');
  $('#notation').css({
    width: (body_height - $('#opt').width()) + 'px',
    left: $('#opt').width() + 'px'
  });
}

$(document).ready(function () {
  $('body, .xy_staff').css('width', body_height + 'px');
  $('#tabbar').css('width', body_height + 'px');
  $('#notation').css({
    width: (body_height - $('#opt').width()) + 'px',
    left: $('#opt').width() + 'px'
  });
  w = document.getElementById("aud");
  La = document.getElementById("vol");
  E = document.getElementById("notation");
  Da = CSS.supports("scroll-behavior", "smooth");
  $("#verlab").html("Version: " + follow_VERSION);
  $("body").keydown(id).click(function () {
    I && za()
  });
  $("#kwart").click(function () {
    e.metro = 1;
    $("#metro").prop("checked", 1);
    R(-1)
  });
  $("#kwart").append($("#mtrsvg"));
  $("#tempo").change(Vb);
  $("#spkr").append($("#spkron").toggle(!1));
  $("#spkr").append($("#spkrof").toggle(!1)).click(md);
  $("#menu").toggle(!1);
  I = 0;
  $("#menu").click(function (a) {
    a.stopPropagation()
  });
  $("#mbar").click(function (a) {
    a.stopPropagation();
    za()
  });
  $("#menu select").change($b);
  $("#menu input").change($b);
  $("#tuner input").change($b);
  $("#zoom").on("mousedown touchstart", ud);
  $("#rollijn").on("mousedown touchstart", wd);
  $(window).resize(function () {
    var a = ea;
    a && $("#twosys").click();
    lc();
    mc();
    ja();
    V();
    a && $("#twosys").click()
  });
  $("#fknp").change(cd);
  $("#testport").on("mousedown", Cc);
  $("#stats").click(function () {
    tc(0)
  });
  $("#save").click(pd);
  $("#saveok").click(function () {
    $("#saveDlg").toggle()
  });
  $("#micKnop").click(function () {
    $c(!0)
  });
  $("#ble").click(Dd);
  $("#mtplab").change(Lc);
  $("#micOk").click(function () {
    $c(!1)
  });
  ua = document.querySelector("#mxlvl > div");
  ua.innerHTML = "0";
  lb = document.querySelector("#cents > div");
  lb.innerHTML = "&nbsp;";
  Pa = document.querySelector("#cents > span");
  Pa.style.width = "50%";
  kb = document.getElementById("noot");
  ob = document.querySelector("#anatijd > div");
  ob.innerHTML = "0";
  m = document.getElementById("graaf").getContext("2d");
  Pc("#kblft");
  Pc("#kbrgt");
  N = $("#mean > div")[0];
  $("#error");
  L = $("#tempo")[0];
  Fb = $("#mute")[0];
  Qb = $("#path9868")[0];
  Ca(1);
  var a = window.AudioContext || window.webkitAudioContext;
  (C = void 0 != a ? new a : null) || alert("Your browser does not support the Web Audio API");
  gc("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yE2S0tyZVivRopSXQGhTEhUhrKy7MrjXjaFIEjX//ppWN6hxW8rShnYym/ytlBCipejyoBI5S6sunmXcqS0CsGFKxqM5dAJ1IWRStJ30SS6VsMi1wsgexC7hVLmpVeu9iV0q2osru+oamEzp//PEZHUOIQ0hHz0iLhvZ7jl2YMsmXYCpYRlkySmBaQj0+Hk4LS3zlx2Werj37ZkxWrUwlPNdbe6sPUhxMpeTKURFUf63LMdjAKKm/apXob0KyG9TfmeVlDrWU+e//LNf//HNNCqQKKmRjTIsSNCyB7DAVImRZIxpoc00KpAoqZGVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUNrmJJJLQwNA8o//PEZAoFmAb2fwwjARIh1dGeMMSeWFU1inUzqFtbUf+sU/xfrb/9Yp/+tv/7P/xUW/+sUb/8VFgCV5cdsFABhJlxbOUVcJ48oIFUMmWUGEFkZNZ2UjWWzI+hgYME4g+wHY5DlMqIrfgjjOVP//ymVUXMFDKLB40FRRtQsK///8UVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV", function (a) {
    Gc = a;
  });
  Ub();
  va = 1;
  Ic();
  "requestMIDIAccess" in navigator ? navigator.requestMIDIAccess().then(jd, kd) : ($("#notation").append('<div class="box"><img src="./icon/loading1.gif" /><p>loading...</p></div>'), q('<div class="box"><img src="./icon/loading1.gif" /><p>loading...</p></div>'));
  $("#ble").prop("disabled", !("bluetooth" in navigator));
  // nd() || wa();
  td();
  36 > $("#info").height() && (a = $("body").height(), ja());
  $("#fscr").on("change", Cd);
  $("body").on("fullscreenchange webkitfullscreenchange mozfullscreenchange", function () {
    var a = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
    $("#fscr").prop("checked", null != a)
  })
})
/* ------------------------------------------------------------------------------------------------------------------- */
var token = '';
var songId = '';
var studentId = '';
var keyb = false;
var open = false;
var hands = 0;
var mode = 0; /* 0:片段 1:记录 */
var metronome = false;
var _max = 300;
var _min = 0;
var _speed = 60;
var stfs = [];
var stfInd = 0;
var measureLength = [];
var renderMeasureList = [];
var errKeys = [1, 1, 1];
var errNum = 3; // 判断错误三次，进入偏音流程
var enterTime = new Date().getTime();
var playState = false;
var _start = 0;
var alertNum = 0;
var range = [0, 7];
var errorIndexList = [];
var u = navigator.userAgent, app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
var isPlay = window.location.search.includes('isPlay') ? window.location.search.split('isPlay')[1].split('=')[1] : '0';
var _id = window.location.search.includes('id') ? window.location.search.split('id')[1].split('=')[1] : '0';
var _b, _height, b_height, _X;
var measureFirstNote = [];

console.log(window.location)

$(document).ready(function () {
  if (isAndroid || isPlay == '1') {
    $('#opt .opt1').remove();
  }

  mode = 1;
  $('#opt .opt1 img').attr('src', 'icon/6-1.png');
  $('#opt .opt2 img').attr('src', 'icon/7.png');
  $('#play .exercise').hide();
  $('#opt .opt3').show();
  $('#opt .opt5').hide();

  if ( mode == 0 && !playState) {
    $('#opt .opt3').hide();
    $('#opt .opt5').show();
  }

  if (mode == 0) {
    $('.textScrollBar').show();
    $('.practiceTime').hide();
    $('#tabbar .tab-right dl dt').text('片段练习');
  } else {
    $('.textScrollBar').hide();
    $('.practiceTime').show();
    $('#tabbar .tab-right dl dt').text('记录模式');
  }

  IOS.initPassXMLData();

  $('#tabbar .date').text(getHHMM());

  setInterval(function () {
    $('#tabbar .date').text(getHHMM());
  }, 1000 * 10)

  $('#tabbar .tab-left .back').on('click', function () {
    IOS.backIosApp();
  })

  $('#tabbar .tab-right .help').on('click', function () {
    $('.helpCenter').show();
  })

  $('.helpCenter,.helpCenter .back').on('click', function () {
    $('.helpCenter').hide();
  })

  $('.helpCenter aside').on('click', function (e) {
    e.stopPropagation();
  })

  if (bassOrTreble == 'treble') {
    hands = 2;
    $('#tabbar .tab-right .match-hand img').attr('src', 'icon/3-1.png');
    $('#tabbar .tab-right .match-hand span').text('右手');
  } else if (bassOrTreble == 'bass') {
    hands = 1;
    $('#tabbar .tab-right .match-hand img').attr('src', 'icon/3-2.png');
    $('#tabbar .tab-right .match-hand span').text('左手');
  } else {
    hands = 0;
    $('#tabbar .tab-right .match-hand img').attr('src', 'icon/3.png');
    $('#tabbar .tab-right .match-hand span').text('合手');
    $('#tabbar .tab-right .match-hand').on('click', function () {
      if (open && mode == 0) {
        suspend();
      }
      if (!open) {
        if (hands == 0) {
          hands = 1;
          $(this).find('img').attr('src', 'icon/3-2.png');
          $(this).find('span').text('左手');
        } else if (hands == 1) {
          hands = 2;
          $(this).find('img').attr('src', 'icon/3-1.png');
          $(this).find('span').text('右手');
        } else if (hands == 2) {
          hands = 0;
          $(this).find('img').attr('src', 'icon/3.png');
          $(this).find('span').text('合手');
        }
        switch (hands) {
          case 0:
            Tb.mute = 0;
            $('#chkmod').val(4);
            Ba(hands);
            break;
          case 1:
          case 2:
            $('#chkmod').val(2);
            Ba(hands);
            break;
        }
        mode == 0 && IOS.passHandPattern(hands);
      }
    })
  }
  mode == 0 && IOS.passHandPattern(hands);

  $('#opt .opt1').on('click', function () {
    if (mode == 1) {
      mui.confirm('是否切换为片段练习模式？', '提示', function (res) {
        if (res.index == 1) {
          IOS.playClick(0);
          mode = 0;
          range = [0, 7];
          R(1, 1);
          IOS.fragmentMode();
          playState = false;
          showCursor(0);
          $('#wijzer').show();
          hands = 0;
          $('#tabbar .tab-right .match-hand img').attr('src', 'icon/3.png');
          $('#tabbar .tab-right .match-hand span').text('合手');
          Tb.mute = 0;
          $('#chkmod').val(4);
          Ba(hands);
          $('#opt .opt1 img').attr('src', 'icon/6.png');
          $('#opt .opt2 img').attr('src', 'icon/7-1.png');
          $('#opt .opt3').hide();
          $('#opt .opt5').show();
          $('#play .exercise').show();
          $('#tabbar .tab-right dl dt').text('片段练习');
          $('.textScrollBar').show();
          $('.practiceTime').hide();
          dialog('请选择练习片段的开始或结束点');
          mui.toast('已切换至片段练习模式');
          defaultSelectMeasure();
        }
      })
    }
  })

  $('#opt .opt2').on('click', function () {
    if (mode == 0) {
      mui.confirm('是否切换为记录模式？', '提示', function (res) {
        if (res.index == 1) {
          IOS.playClick(0);
          mode = 1;
          R(1);
          IOS.recordingMode();
          IOS.playClick(1);
          _start = 0;
          playState = false;
          showCursor(0);
          $('#play').hide();
          $('#wijzer').hide();
          hands = 0;
          $('#tabbar .tab-right .match-hand img').attr('src', 'icon/3.png');
          $('#tabbar .tab-right .match-hand span').text('合手');
          Tb.mute = 0;
          $('#chkmod').val(4);
          Ba(hands);
          $('#notation svg .err').remove();
          $('#opt .opt1 img').attr('src', 'icon/6-1.png');
          $('#opt .opt2 img').attr('src', 'icon/7.png');
          $('#opt .opt3').show();
          $('#opt .opt5').hide();
          $('#play .exercise').hide();
          $('#tabbar .tab-right dl dt').text('记录模式');
          $('#notation svg .g .stf').each(function () {
            this.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0)");
          });
          $('#notation svg .g .measure').each(function () {
            this.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0)");
          });
          $('.textScrollBar').hide();
          $('.practiceTime').show();
          mui.toast('已切换至记录模式');
        }
      })
    }
  })

  $('#opt .opt3').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    if (playState) {
      metronome = !metronome;
      if (metronome) {
        $('#opt .progress').show();
      } else {
        $('#opt .progress').hide();
      }
    }
  })

  $('#opt .opt5').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    if (open) {
      IOS.playClick(0);
      range = [];
      $('#notation svg .g .measure').each(function () {
        this.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0)");
      });
      $('#wijzer').hide();
      mui.toast('请选择练习片段的开始或结束点');
    }
  })

  $(".opt4,#play .start").click(function () {
    $('#notation svg .err').remove();
    IOS.playClick(0);
    $('#opt #tempo').val($('#opt .progress .bpm').text());
    if (playState) {
      R(1);
    } else {
      R(-1);
      $('#wijzer').show();
    }
  })

  $('#body').on('click', function () {
    metronome = false;
    $('#opt .progress').hide();
  })

  _b = $('#opt .progress .dot');
  _height = $('#opt .progress').height();
  b_height = _b.height() / 2;
  _X = _b.offset().left;
  _b.on('touchstart', function (e) {
    e.stopPropagation();
    $(this).on('touchmove', function (e) {
      e.preventDefault();
      var startX = e.originalEvent.targetTouches[0].pageX;
      var distanceX = startX - _X;
      if (_height - distanceX + b_height > 0 && _height - distanceX + b_height < _height) {
        $(this).css('top', _height - distanceX + 'px');
        $('#opt .progress .bar').css('height', distanceX - b_height + 'px');
        $('#opt .progress .bpm').text(Math.ceil((_height - (_height - distanceX + b_height)) / _height * _max));
        $('#opt #tempo').val($('#opt .progress .bpm').text());
      }
    })
  })
  _b.on('touchend', function () {
    $(this).off('touchmove');
  })

  $('#opt .progress .max').text(_max);
  $('#opt .progress .min').text(_min);
  $('#opt .progress .bpm').text(_speed);
  _b.css({ top: _height - (_speed / _max * _height) + 'px' });
  $('#opt .progress .bar').css({ height: _speed / _max * _height - b_height + 'px' });
  // $('#opt .progress').hide();

  $('#play .exercise').on('click', function () {
    $('#play').hide();
    $('#wijzer').show();
    showCursor(_start);
    IOS.playClick(1);
    if (mode == 0 && alertNum < 1) {
      $('#opt .opt3').hide();
      $('#opt .opt5').show();
      $("#countin").html('<b><img src="icon/10.png" class="alert" /></b>').toggle(!0);
      alertNum++;
      var timer = setTimeout(function () {
        $("#countin").html('').toggle(0);
        clearTimeout(timer);
      }, 3000);
    }
  })

  $('#play .reset').on('click', function () {
    $('#notation svg .err').remove();
    $('#play').hide();
    $('#wijzer').hide();
    IOS.playClick(0);
    showCursor(_start);
    dialog('请选择练习片段的开始或结束点');
    range = [];
    $('#notation svg .g .measure').each(function () {
      this.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0)");
    })
  })

  setInterval(function () {
    $('.practiceTime span').eq(0).text(`练习时长：${formatZero(Math.floor(new Date().getTime() / 1000 - enterTime / 1000))}`);
  }, 1000);

  var timer;
  $('#notation').bind('touchmove', function(e) {
    isFollow = false;
    clearTimeout(timer);
    timer = setTimeout(function () {
      isFollow = true;
    }, 5000)
  });

  switch (_id) {
    case '1': _getOssXml('https://oss-qlq-file.oss-cn-hangzhou.aliyuncs.com/01.xml');
    break;
    case '2': _getOssXml('https://oss-qlq-file.oss-cn-hangzhou.aliyuncs.com/%E6%8B%9C%E5%8E%84-001.xml');
    break;
    case '3': _getOssXml('https://oss-qlq-file.oss-cn-hangzhou.aliyuncs.com/60.xml');
    break;
    default: _getOssXml('https://oss-qlq-file.oss-cn-hangzhou.aliyuncs.com/60.xml');
    break;
  }

  function _getOssXml (url) {
    $.ajax({
      type: 'GET',
      url: url,
      contentType: 'application/xml'
    })
      .then(res => {
        let XML = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
                  '<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">' +
                  $(res).find('score-partwise')[0].outerHTML
        passXMLData(XML)
      })
  }
})

onChangeMusic = debounce(function() {
  IOS.changeMusic();
  R(1, 1);
  $('.practiceTime span').eq(1).text('');
  $('.practiceTime span').eq(1).attr('data-time', 0);
})

var assetPath = "mp3/";
var sounds = [{"src":"1.mp3","id":"mp3-1"},{"src":"2.mp3","id":"mp3-2"},{"src":"3.mp3","id":"mp3-3"},{"src":"4.mp3","id":"mp3-4"},{"src":"5.mp3","id":"mp3-5"},{"src":"6.mp3","id":"mp3-6"},{"src":"7.mp3","id":"mp3-7"},{"src":"8.mp3","id":"mp3-8"},{"src":"9.mp3","id":"mp3-9"},{"src":"10.mp3","id":"mp3-10"},{"src":"11.mp3","id":"mp3-11"},{"src":"12.mp3","id":"mp3-12"},{"src":"13.mp3","id":"mp3-13"},{"src":"14.mp3","id":"mp3-14"},{"src":"15.mp3","id":"mp3-15"},{"src":"16.mp3","id":"mp3-16"},{"src":"17.mp3","id":"mp3-17"},{"src":"18.mp3","id":"mp3-18"},{"src":"19.mp3","id":"mp3-19"},{"src":"20.mp3","id":"mp3-20"},{"src":"21.mp3","id":"mp3-21"},{"src":"22.mp3","id":"mp3-22"},{"src":"23.mp3","id":"mp3-23"},{"src":"24.mp3","id":"mp3-24"},{"src":"25.mp3","id":"mp3-25"},{"src":"26.mp3","id":"mp3-26"},{"src":"27.mp3","id":"mp3-27"},{"src":"28.mp3","id":"mp3-28"},{"src":"29.mp3","id":"mp3-29"},{"src":"30.mp3","id":"mp3-30"},{"src":"31.mp3","id":"mp3-31"},{"src":"32.mp3","id":"mp3-32"},{"src":"33.mp3","id":"mp3-33"},{"src":"34.mp3","id":"mp3-34"},{"src":"35.mp3","id":"mp3-35"},{"src":"36.mp3","id":"mp3-36"},{"src":"37.mp3","id":"mp3-37"},{"src":"38.mp3","id":"mp3-38"},{"src":"39.mp3","id":"mp3-39"},{"src":"40.mp3","id":"mp3-40"},{"src":"41.mp3","id":"mp3-41"},{"src":"42.mp3","id":"mp3-42"},{"src":"43.mp3","id":"mp3-43"},{"src":"44.mp3","id":"mp3-44"},{"src":"45.mp3","id":"mp3-45"},{"src":"46.mp3","id":"mp3-46"},{"src":"47.mp3","id":"mp3-47"},{"src":"48.mp3","id":"mp3-48"},{"src":"49.mp3","id":"mp3-49"},{"src":"50.mp3","id":"mp3-50"},{"src":"51.mp3","id":"mp3-51"},{"src":"52.mp3","id":"mp3-52"},{"src":"53.mp3","id":"mp3-53"},{"src":"54.mp3","id":"mp3-54"},{"src":"55.mp3","id":"mp3-55"},{"src":"56.mp3","id":"mp3-56"},{"src":"57.mp3","id":"mp3-57"},{"src":"58.mp3","id":"mp3-58"},{"src":"59.mp3","id":"mp3-59"},{"src":"60.mp3","id":"mp3-60"},{"src":"61.mp3","id":"mp3-61"},{"src":"62.mp3","id":"mp3-62"},{"src":"63.mp3","id":"mp3-63"},{"src":"64.mp3","id":"mp3-64"},{"src":"65.mp3","id":"mp3-65"},{"src":"66.mp3","id":"mp3-66"},{"src":"67.mp3","id":"mp3-67"},{"src":"68.mp3","id":"mp3-68"},{"src":"69.mp3","id":"mp3-69"},{"src":"70.mp3","id":"mp3-70"},{"src":"71.mp3","id":"mp3-71"},{"src":"72.mp3","id":"mp3-72"},{"src":"73.mp3","id":"mp3-73"},{"src":"74.mp3","id":"mp3-74"},{"src":"75.mp3","id":"mp3-75"},{"src":"76.mp3","id":"mp3-76"},{"src":"77.mp3","id":"mp3-77"},{"src":"78.mp3","id":"mp3-78"},{"src":"79.mp3","id":"mp3-79"},{"src":"80.mp3","id":"mp3-80"},{"src":"81.mp3","id":"mp3-81"},{"src":"82.mp3","id":"mp3-82"},{"src":"83.mp3","id":"mp3-83"},{"src":"84.mp3","id":"mp3-84"},{"src":"85.mp3","id":"mp3-85"},{"src":"86.mp3","id":"mp3-86"},{"src":"87.mp3","id":"mp3-87"},{"src":"88.mp3","id":"mp3-88"}];

function soundFun () {
  createjs.Sound.alternateExtensions = ["mp3"]; 
  createjs.Sound.on("fileload", loadHandler); 
  createjs.Sound.registerSounds(sounds, assetPath);
  function loadHandler(event) { }
}
soundFun()

var instance;
function play (soudId) {
  instance = createjs.Sound.createInstance('mp3-' + soudId)
  instance.on('complete', function () {})
  instance.play()
}

function _getStudentSongError() {
  $.ajax({
    type: 'POST',
    url: 'http://47.100.254.205:10001/xmuqin-teacher/api/student/qin/getStudentSongError',
    // url: 'https://app.xmuqin.com/xmuqin-teacher/api/student/qin/getStudentSongError',
    data: {
      token: token,
      songId: songId,
      studentId: studentId
    },
    success: function (res) {
      if (res.success) {
        errorIndexList = res.t.map(function (i) {return i.index});
      }
    },
  })
}

function _addOrUpdateSongError(data) {
  $.ajax({
    type: 'POST',
    url: 'http://47.100.254.205:10001/xmuqin-teacher/api/student/qin/addOrUpdateSongError',
    // url: 'https://app.xmuqin.com/xmuqin-teacher/api/student/qin/addOrUpdateSongError',
    data: {
      token: token,
      songId: songId,
      studentId: studentId,
      index: data.index,
      staff: data.staff,
      section: data.section
    },
    success: function (res) {
      if (res.success) {

      }
    }
  })
}

function passXMLData(data) {
  $('#play').hide();
  $("#notation").append('<div class="box"><img src="./icon/loading1.gif" /><p>loading...</p></div>');
  nd(data) || wa();
  _speed = $(data).find('measure').eq(0).find('sound').attr('tempo') || 60;
  $('#notation svg .g .measure').remove();
  initData();
  selectMeasure();
  if (mode == 0) {
    IOS.playClick(0);
    $('#play').show();
    $('#wijzer').show();
    $('#opt .opt1 img').attr('src', 'icon/6.png');
    $('#opt .opt2 img').attr('src', 'icon/7-1.png');
  } else if (mode == 1) {
    IOS.playClick(1);
    $('#play').hide();
    $('#wijzer').hide();
    $('#opt .opt1 img').attr('src', 'icon/6-1.png');
    $('#opt .opt2 img').attr('src', 'icon/7.png');
    $('#notation svg .err').remove();
  }
}

function clickPause () {
  $('#opt .opt4 img').attr('src', 'icon/5-1.png');
  if (mode == 0) {
    $('#play').show();
    $('#opt .opt3').hide();
    $('#opt .opt5').show();
    $('#opt .opt1 img').attr('src', 'icon/6.png');
  } else {
    $('#wijzer').hide();
    $('.textScrollBar').hide();
    $('.practiceTime').show();
    IOS.playClick(1);
    $('#opt .opt2 img').attr('src', 'icon/7.png');
  }
  $('#opt .opt3 img').attr('src', 'icon/4-1.png');
  playState = false;
}

function initData () {
  keyb = false;
  open = false;
  hands = 0;
  metronome = false;
  stfs = [];
  stfInd = 0;
  measureLength = [];
  errKeys = [];
  range = [0, 7];
  playState = false;
  _start = 0;
  alertNum = 0;
  e.metro = 0;
  errorIndexList = [];
  renderMeasureList = [];
  isFollow = true;
  showCursor(0);
  $('#opt .progress .max').text(_max);
  $('#opt .progress .min').text(_min);
  $('#opt .progress .bpm').text(_speed);
  _b.css({ top: _height - (_speed / _max * _height) + 'px' });
  $('#opt .progress .bar').css({ height: _speed / _max * _height - b_height + 'px' });
  $('#opt .progress').hide();
  $('#opt .opt3 img').attr('src', 'icon/4-1.png');
  $('#tabbar .tab-right .match-hand img').attr('src', 'icon/3.png');
  $('#tabbar .tab-right .match-hand span').text('合手');
}

function passSongData(data) {
  data = JSON.parse(data);
  token = data.token;
  songId = data.songId;
  studentId = data.studentId;
  $('#tabbar .tab-left p .staff-name').text(data.songName);
  $('#tabbar .tab-left p .textbook-name').text(data.bookName);

  if (isAndroid) {
    measureLength = data.measureLength ? JSON.parse(data.measureLength)[1] : [];
  } else {
    measureLength = data.measureLength ? JSON.parse(data.measureLength) : [];
  }

  if (measureLength.length < range[1] + 1) {
    range[1] = measureLength.length - 1;
  }
  _getStudentSongError();
}

function chooseMeasureEnd(data) {
  mui.toast('当前选择小节已弹奏完毕');
  var timer = setTimeout(function () {
    suspend();
    showCursor(_start);
    $('#notation svg .err').remove();
    clearTimeout(timer);
  }, 50)
}

function suspend() {
  open = false;
  IOS.playClick(0);
  $('#opt .opt3 img').attr('src', 'icon/4-1.png');
  $('#play').show();
}

selectMeasure = debounce(function() {
  var measureList = [];
  var noteList = [];
  var measureSortList = [];
  var measureSizeList = [];
  var measureFilterList = [];
  var allRow = $('#notation>svg').length;
  for (var a = 0; a < allRow; a++) {
    var r = a;
    var _measure = $('#notation svg').eq(r).find('g .bW').attr('d').split('M').filter(function (i) {return i});
    var _bthW = $('#notation svg').eq(r).find('g .bthW').length > 0 ? $('#notation svg').eq(r).find('g .bthW').attr('d').split('M').filter(function (i) {return i}) : [];
    
    var arr = [];
    for (var i = 0; i < _measure.length; i++) {
      arr.push(_measure[i])
    }
    for (var i = 0; i < _bthW.length; i++) {
      arr.push(_bthW[i])
    }
    _measure = arr.sort(function (a, b) {return a.split(' ')[0] - b.split(' ')[0]});

    var _staff1 = [];
    var _stroke = [];
    if (!bassOrTreble) {
      _staff1 = _measure.filter(function (a, b) {return b % 2 == 0}).map(function (i) {
        var arr = [];
        for (var a = 0; a < i.split('v-')[0].split(' ').length; a++) {
          arr.push(i.split('v-')[0].split(' ')[a]);
        }
        arr.push(i.split('v-')[1]);
        return arr
      });
      var arr1 = [];
      for (var i = 0; i < $('#notation svg').eq(r).find('g .stroke').eq(0).attr('d').split('v-')[0].split('m')[1].split(' ').length; i++) {
        arr1.push($('#notation svg').eq(r).find('g .stroke').eq(0).attr('d').split('v-')[0].split('m')[1].split(' ')[i])
      }
      arr1.push($('#notation svg').eq(r).find('g .stroke').eq(0).attr('d').split('v-')[1]);
      _stroke = arr1;
    } else {
      _staff1 = _measure.map(function (i) {
        var arr2 = [];
        for (var a = 0; a < i.split('v-')[0].split(' ').length; a++) {
          arr2.push(i.split('v-')[0].split(' ')[a])
        }
        arr2.push(i.split('v-')[1])
        return arr2
      });
      _stroke = [_staff1[0][0] - 150, _staff1[0][1], _staff1[0][2]];
    }

    var ccc = [];
    ccc.push(_stroke)
    for (var i = 0; i < _staff1.length; i++) {
      ccc.push(_staff1[i])
    }
    var ddd = $('#notation svg').eq(r).find('g .stf').eq(0).attr('x');
    var eee = ccc.filter(function (i) {return Number(i[0]) < Number(ddd)})[ccc.filter(function (i) {return i[0] <= ddd}).length - 1];

    var _measureLen = _staff1.length;
    _bthW = _bthW.length > 0 ? _bthW.filter(function (a, b) {return b % 2 == 0}).map(function (i) {
      var arr = [];
      for (var a = 0; a < i.split('v-')[0].split(' ').length; a++) {
        arr.push(i.split('v-')[0].split(' ')[a])
      }
      arr.push(i.split('v-')[1])
      return arr
    }) : [];
    _bthW = _bthW.length > 0 ? _bthW[0][0] - _stroke[0] : 100;

    if (_staff1.length >= 2) {
      if (_staff1[0][0] - _stroke[0] >= 10) {
        var note = $(document.createElementNS('http://www.w3.org/2000/svg', 'rect')).attr({
          'x': eee ? eee[0] : _stroke[0],
          'y': _stroke[1] - _stroke[2],
          'width': _staff1[0][0] - _stroke[0],
          'height': _stroke[2],
          'fill': 'rgba(0, 0, 0, 0)',
          'class': 'measure',
          'r': r
        });
        $('#notation svg').eq(r).find('.g').append(note);
      }
    } else {
      if (_staff1[0][0] - _stroke[0] >= 10) {
        var note = $(document.createElementNS('http://www.w3.org/2000/svg', 'rect')).attr({
          'x': eee ? eee[0] : _stroke[0],
          'y': _stroke[1] - _stroke[2],
          'width': _staff1[0][0] - _stroke[0],
          'height': _stroke[2],
          'fill': 'rgba(0, 0, 0, 0)',
          'class': 'measure',
          'r': r
        });
        $('#notation svg').eq(r).find('.g').append(note);
      }
    }

    for (var i = 0; i < _measureLen - 1; i++) {
      if (_staff1[i + 1][0] - _staff1[i][0] >= 10) {
        var note = $(document.createElementNS('http://www.w3.org/2000/svg', 'rect')).attr({
          'x': _staff1[i][0],
          'y': _stroke[1] - _stroke[2],
          'width': _staff1[i + 1][0] - _staff1[i][0],
          'height': _stroke[2],
          'fill': 'rgba(0, 0, 0, 0)',
          'class': 'measure',
          'r': r
        });
        $('#notation svg').eq(r).find('.g').append(note);
      }
    }

    if ($('#notation svg').eq(r).find('.g .measure').eq(0).attr('x') == $('#notation svg').eq(r).find('.g .measure').eq(1).attr('x')) {
      $('#notation svg').eq(r).find('.g .measure').eq(0).remove();
    }
  }

  noteList = _noRepeat.map(function (i) {
    return {
      r: i.xy[0],
      x: i.xy[1],
      y: i.xy[2],
      w: i.xy[3],
      h: i.xy[4],
      pbk: i.pbk.map(function (i) {return i.mn ? i.mn - 20 : 0}),
      index: i.index
    }
  })

  $('#notation svg .g .measure').each(function (i) {
    measureList.push({
      x: $(this).attr('x'),
      y: $(this).attr('y'),
      r: $(this).attr('r')
    })
    this.addEventListener("click", function (e) {
      e.stopPropagation();
      
      if (playState) {
        if (i == 0) {
          fa = p = 0;
        } else {
          fa = p = measureFirstNote[i] - 1;
        }
        J(1, 0, 0);
        return;
      }

      if (mode == 0) {
        if (open) {
          mui.toast('收音期间不能重新选取小节,如需更改请点击左侧“选择片段”按钮');
          return;
        }
        if (range.length == 2) {
          range = [];
          $('#notation svg .g .measure').each(function () {
            this.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0)");
          })
        }
        range.push(i);
        range = quickSort(range);
        if (range.length == 2) {
          if (range[1] - range[0] >= 8) {
            range = [];
            $('#notation svg .g .measure').each(function () {
              this.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0)");
            })
            dialog('请选择另一个开始/结束小节');
            mui.toast('请选择片段长度在8小节之内');
            return;
          }
          for (var a = range[0]; a <= range[1]; a++) {
            $('#notation svg .g .measure').eq(a)[0].setAttributeNS(null, "fill", "rgba(255,194,0,0.15)");
          }
          _start = measureFirstNote[range[0]];

          IOS.submitMeasureRange(range);
          $('#play').show();
          $('#wijzer').show();
          dialog('请点击 “练习” 按钮');
        } else {
          IOS.playClick(0);
          this.setAttributeNS(null, "fill", "rgba(255,194,0,0.15)");
        }
      }
    });
  })

  $('#notation>svg').each(function (i) {
    measureSizeList.push($(this).find('.measure').length)
  })

  var measureSizeList1 = []
  for (var i = 0; i < measureSizeList.length; i++) {
    measureSizeList1.push(measureSizeList.slice(0, i + 1).reduce(function (a, b) {return a + b}))
  }
  measureSizeList = measureSizeList1

  for (var i = 0; i < measureSizeList.length; i++) {
    var prev = measureSizeList[i - 1] || 0;
    var arr = [];
    for (var c = 0; c < measureList.slice(prev, measureSizeList[i]).length; c++) {
      arr.push(measureList.slice(prev, measureSizeList[i])[c]);
    }
    arr.push({
      x: '9999',
      y: measureList.slice(prev, measureSizeList[i])[measureList.slice(prev, measureSizeList[i]).length - 1].y,
      r: measureList.slice(prev, measureSizeList[i])[measureList.slice(prev, measureSizeList[i]).length - 1].r
    })
    measureFilterList.push(arr)
  }
  measureList = measureFilterList.flat(1);

  for (var i = 0; i < measureList.length - 1; i++) {
    measureSortList[i] = [];
    for (var j = 0; j < noteList.length; j++) {
      if (
        Number(measureList[i].r) == Number(noteList[j].r) &&
        (Number(noteList[j].x) >= Number(measureList[i].x) && Number(noteList[j].x) < Number(measureList[i + 1].x))
      ) {
        measureSortList[i].push(noteList[j])
      }
    }
  }
  measureSortList = measureSortList.filter(function (i) {return i.length > 0});
  measureFirstNote = measureSortList.map(function (i) {return i[0].index});

  if (mode == 0) {
    defaultSelectMeasure();
  } else if (mode == 1) {
    range = [];
    $('#notation svg .g .measure').each(function () {
      this.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0)");
    })
  }
}, 50)

function defaultSelectMeasure() {
  if (range.length == 2) {
    $('#notation svg .g .stf').each(function () {
      this.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0)");
    });
    for (var a = range[0]; a <= range[1]; a++) {
      $('#notation svg .g .measure').eq(a)[0].setAttributeNS(null, "fill", "rgba(255,194,0,0.15)");
    }
    _start = measureFirstNote[range[0]];

    IOS.submitMeasureRange(range);
    if (mode == 0) {
      $('#play').show();
      dialog('请点击 “练习” 按钮');
    } else if (mode == 1) {
      $('#play').hide();
    }
  }
}

function partialFlow(data) {
  IOS.playClick(0);
  mui.alert('您已在该位置连续错误3次，该键可能偏音，请配合帮助我们确认', '提示', function () {
    dialog('请进行偏音校正流程');
    mui.alert('请在点击确认后弹奏绿色键', '提示', function () {
      stfs = data.stf;
      range = [];
      $('#notation svg .g .measure').each(function () {
        this.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0)");
      })
      partialNext();
      $("#keys").prop("checked", true);
      T = $("#keys").prop("checked");
      $("#keyb").toggle(T);
    })
  })
}

function partialNext() {
  if (stfInd < stfs.length) {
    IOS.passCurrentIndex(stfs[stfInd]);
    setKeyBoard(stfs[stfInd]);
  }
}

function passOnceResult(data) {
  data = JSON.parse(data);
  if (data.count == 0) {
    mui.toast('第一次采音结束');
    if (data.result == 1) {
      passCheckResult(1);
    }
  } else if (data.count == 1) {
    mui.toast('第二次采音结束');
    if (data.result == 0) {
      passCheckResult(0);
    }
  } else if (data.count == 2) {
    mui.toast('第三次采音结束');
    if (data.result == 1) {
      passCheckResult(1);
    } else if (data.result == 0) {
      passCheckResult(0);
    }
  }
}

function passCheckResult(data) {
  IOS.playClick(0);
  if (stfInd < stfs.length) {
    IOS.submitCheckResult(data);
    dialog(`第 ${stfInd + 1}/${stfs.length} 个音符偏音流程${data == 1 ? '通过' : '未通过'}`);
    mui.alert(
      `第 ${stfInd + 1}/${stfs.length} 个音符偏音流程${data == 1 ? '通过' : '未通过'}${stfInd + 1 < stfs.length ? '，下一个' : '请继续弹奏'}`,
      '提示',
      function () {
        if (stfInd + 1 >= stfs.length) {
          // $('#notation svg .g .measure').show();
          $("#keys").prop("checked", false);
          T = $("#keys").prop("checked");
          $("#keyb").toggle(T);
          mui.toast('开始收音');
          IOS.playClick(1);
          stfInd = 0;
          stfs = [];
        } else {
          stfInd++;
          partialNext();
        }
      }
    )
  }
}

function setKeyBoard(num) {
  $('#toetsen rect').each(function () { this.setAttribute("class", "") });
  $('#toetsen rect').eq(num)[0].setAttribute('class', 'neer');
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};

function GET_STAFF_DATA(data) {
  data = JSON.parse(data);
  if (open) {
    if (!renderMeasureList.includes(data.notePosition[1])) {
      IOS.renderMeasure(data.notePosition[1]);
      renderMeasureList.push(data.notePosition[1]);
    }
    $('#notation svg .err').remove();
    if (data.isNoteRight == '0') {
      if (!errorIndexList.includes(_noRepeat[data.notePosition[0]].index)) {
        $('#wijzer').hide();
        create_err(measureFirstNote[data.notePosition[1] - 1]);
        errKeys.push(_noRepeat[data.notePosition[0]].index);
        if (
          errKeys.filter(function (i) {return i == _noRepeat[data.notePosition[0]].index}).length >= errNum &&
          minFn(errKeys) == _noRepeat[data.notePosition[0]].index
        ) {
          _addOrUpdateSongError({
            index: _noRepeat[data.notePosition[0]].index,
            staff: JSON.stringify(_noRepeat[data.notePosition[0]].stf),
            section: data.notePosition[1]
          })
          errKeys = errKeys.filter(function (i) {return i != _noRepeat[data.notePosition[0]].index});
        }
      }
    } else {
      $('#wijzer').show();
      fa = p = _noRepeat[data.notePosition[0]].index;
      J(0);
    }
  }
}

function minFn (arr) {
  return arr.sort(function (a, b) {
    return a - b;
  })[0]
}

function create_err(ind) {
  var rects = $('#notation svg').eq(staffData[ind].xy[0]).find('.g .measure').eq(0);
  var w = 10;
  var r = staffData[ind].xy[0];
  var x = Number(staffData[ind].xy[1]) + (Number(staffData[ind].xy[3]) - w) / 2;
  var y = Number(staffData[ind].xy[2]) - 10 > rects.attr('y') - 12 ? rects.attr('y') - 12 : Number(staffData[ind].xy[2]) - 10;
  if ($(`#notation svg .err[x='${x}'][y='${y}'][width='${w}'][r='${r}']`).length > 0) return;

  if ($('#notation svg').eq(staffData[ind].xy[0]).find('.err').length > 0) {
    var img = $('#notation svg .err').eq(0)[0];
    img.setAttribute('x', x);
    img.setAttribute('y', y);

    var text = $('#notation svg .err').eq(1)[0];
    text.setAttribute('x', x- 14);
    text.setAttribute('y', y - 4);
  } else {
    $('#notation svg .err').remove();
    var img = document.createElementNS("http://www.w3.org/2000/svg", 'image');
    img.href.baseVal = "icon/focus.png";
    img.setAttribute('width', w);
    img.setAttribute('height', w);
    img.setAttribute('x', x);
    img.setAttribute('y', y);
    img.setAttribute('class', 'err');
  
    var text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    text.innerHTML = '从这开始';
    text.style.fill = '#FD6678';
    text.style.fontSize = '10px';
    text.setAttribute('x', x - 14);
    text.setAttribute('y', y - 4);
    text.setAttribute('class', 'err');
  
    $('#notation svg').eq(staffData[ind].xy[0]).find('.g').append(img);
    $('#notation svg').eq(staffData[ind].xy[0]).find('.g').append(text);
  }
}

function showCursor(ind) {
  if (staffData[ind]) {
    fa = p = Number(staffData[ind].index);
  } else {
    fa = p = 0;
  }
  J(0);
}

function dialog(text) {
  $('.textScrollBar span').text('');
  $('.textScrollBar span').eq(0).text(text);
}

function getHHMM() {
  var newDate = new Date();
  var h = newDate.getHours();
  var m = newDate.getMinutes();
  return formatDate(h) + ':' + formatDate(m);
}

function formatDate(n) {
  return n > 0 ? (n < 10 ? '0' + n : n) : '00';
}

function validTime (data) {
  data = Math.floor(data);
  $('.practiceTime span').eq(1).text(`有效练习时长：${formatZero(Number($('.practiceTime span').eq(1).attr('data-time')) + data)}`);
  $('.practiceTime span').eq(1).attr('data-time', Number($('.practiceTime span').eq(1).attr('data-time')) + data);
}

function backIosApp() {
  IOS.playClick(0);
  R(1, 1);
}

function formatZero(n) {
  if (n > 60) {
    n = Math.floor(n / 60) + '分' + n % 60 + '秒';
  } else {
    n = n + '秒';
  }
  return n;
}

function debounce (func, wait) {
  wait = wait || 200;
  var timeout;
  return function (event) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.call(this, event);
    }, wait)
  }
}

var IOS = {
  playClick: debounce(function (type) {
    if (type == 1) {
      open = true;
      playState = false;
      if (mode == 0) {
        dialog('识别中');
      }
    } else {
      open = false;
      if (mode == 0) {
        dialog('识别已暂停, 请选择练习片段的开始或结束点');
      } else {
        dialog('识别已暂停');
      }
    }
    try {
      webkit.messageHandlers.playClick.postMessage(type);
    } catch (err) { }
  }),
  submitMeasureRange: debounce(function (range) {
    showCursor(_start);
    try {
      webkit.messageHandlers.submitMeasureRange.postMessage(range)
    } catch (err) { }
  }, 100),
  fragmentMode: function () {
    try {
      webkit.messageHandlers.fragmentMode.postMessage(null)
    } catch (err) { }
  },
  recordingMode: function () {
    try {
      webkit.messageHandlers.recordingMode.postMessage(null)
    } catch (err) { }
  },
  backIosApp: function () {
    IOS.playClick(0);
    R(1, 1);
    try {
      webkit.messageHandlers.backIosApp.postMessage(null)
    } catch (err) { }
    try {
      window.AJSInterface.backIosApp()
    } catch (err) { }
  },
  changeMusic: function () {
    IOS.playClick(0);
    try {
      webkit.messageHandlers.changeMusic.postMessage(null)
    } catch (err) { }
    try {
      window.AJSInterface.changeMusic()
    } catch (err) { }
  },
  initPassXMLData: function () {
    try {
      webkit.messageHandlers.initPassXMLData.postMessage(null)
    } catch (err) { }
    try {
      window.AJSInterface.initPassXMLData()
    } catch (err) { }
  },
  passCurrentIndex: function (num) {
    try {
      webkit.messageHandlers.passCurrentIndex.postMessage(num)
    } catch (err) { }
  },
  passHandPattern: function (state) {
    try {
      webkit.messageHandlers.passHandPattern.postMessage(state)
    } catch (err) { }
  },
  renderMeasure: function (num) {
    try {
      webkit.messageHandlers.renderMeasure.postMessage(num)
    } catch (err) { }
  },
  submitCheckResult: function (state) {
    try {
      webkit.messageHandlers.submitCheckResult.postMessage(state)
    } catch (err) { }
  },
  playMusic: function () {
    try {
      webkit.messageHandlers.playMusic.postMessage(null)
    } catch (err) { }
  },
  againChooseFragment: function () {
    try {
      webkit.messageHandlers.againChooseFragment.postMessage(null)
    } catch (err) { }
  }
}