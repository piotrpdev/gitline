var it = Object.defineProperty;
var rt = (v, t, e) => t in v ? it(v, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : v[t] = e;
var n = (v, t, e) => (rt(v, typeof t != "symbol" ? t + "" : t, e), e);
class U {
  constructor(t, e, i, s, m) {
    n(this, "label");
    n(this, "data");
    n(this, "callback");
    n(this, "index");
    n(this, "of");
    this.label = t, this.data = e, this.callback = i, this.index = s, this.of = m;
  }
}
class st {
  constructor(t) {
    n(this, "element");
    n(this, "items", []);
    n(this, "suspended", !1);
    this.element = t;
  }
  /** do this async, display the label and the data */
  then(t, e, i) {
    return this.thenSingle(t, () => {
      for (var s = e(), m = s.length - 1; m >= 0; m--)
        this.items.unshift(new U(t, s[m], i, m, s.length));
    }), this;
  }
  thenSingle(t, e) {
    return this.items.push(new U(t, null, e, 0, 1)), this;
  }
  start(t = !0) {
    t && (this.element.hidden = !1), this.next();
  }
  next() {
    var t = this.items.shift();
    t !== void 0 ? t.index % 50 === 0 ? (this.showStatus(t), window.setTimeout(() => {
      console.debug("executing " + t.label + " (" + t.index + "/" + t.of + ")"), this.execute(t);
    }, 0)) : this.execute(t) : this.element.hidden = !0;
  }
  suspend() {
    this.suspended = !0;
  }
  resume() {
    this.suspended = !1, this.next();
  }
  showStatus(t) {
    this.element.innerHTML = t.label;
  }
  execute(t) {
    try {
      t.callback(t.data), this.suspended || this.next();
    } catch (e) {
      this.error(e);
    }
  }
  error(t) {
    console.error(t), this.element.innerHTML = t, this.suspend();
  }
}
class K {
  constructor(t, e, i) {
    n(this, "specifity");
    n(this, "start");
    n(this, "origin");
    n(this, "category");
    n(this, "commit");
    // Head commit
    n(this, "ref");
    // Name of the branch
    n(this, "shortname");
    // name without repo
    n(this, "lane");
    n(this, "parent");
    n(this, "anonymous");
    this.ref = t, this.commit = e, this.specifity = i, this.shortname = t.split("@")[0], this.category = this.shortname.substring(0, this.shortname.lastIndexOf("/"));
  }
}
var Y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nt(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
function at(v) {
  if (v.__esModule)
    return v;
  var t = v.default;
  if (typeof t == "function") {
    var e = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(v).forEach(function(i) {
    var s = Object.getOwnPropertyDescriptor(v, i);
    Object.defineProperty(e, i, s.get ? s : {
      enumerable: !0,
      get: function() {
        return v[i];
      }
    });
  }), e;
}
var Z = { exports: {} };
function ot(v) {
  throw new Error('Could not dynamically require "' + v + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var G = { exports: {} };
const ht = {}, ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ht
}, Symbol.toStringTag, { value: "Module" })), lt = /* @__PURE__ */ at(ct);
var $;
function dt() {
  return $ || ($ = 1, function(v, t) {
    (function(e, i) {
      v.exports = i();
    })(Y, function() {
      var e = e || function(i, s) {
        var m;
        if (typeof window < "u" && window.crypto && (m = window.crypto), typeof self < "u" && self.crypto && (m = self.crypto), typeof globalThis < "u" && globalThis.crypto && (m = globalThis.crypto), !m && typeof window < "u" && window.msCrypto && (m = window.msCrypto), !m && typeof Y < "u" && Y.crypto && (m = Y.crypto), !m && typeof ot == "function")
          try {
            m = lt;
          } catch {
          }
        var C = function() {
          if (m) {
            if (typeof m.getRandomValues == "function")
              try {
                return m.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof m.randomBytes == "function")
              try {
                return m.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, S = Object.create || function() {
          function r() {
          }
          return function(d) {
            var u;
            return r.prototype = d, u = new r(), r.prototype = null, u;
          };
        }(), D = {}, l = D.lib = {}, k = l.Base = function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(r) {
              var d = S(this);
              return r && d.mixIn(r), (!d.hasOwnProperty("init") || this.init === d.init) && (d.init = function() {
                d.$super.init.apply(this, arguments);
              }), d.init.prototype = d, d.$super = this, d;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var r = this.extend();
              return r.init.apply(r, arguments), r;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(r) {
              for (var d in r)
                r.hasOwnProperty(d) && (this[d] = r[d]);
              r.hasOwnProperty("toString") && (this.toString = r.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), x = l.WordArray = k.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(r, d) {
            r = this.words = r || [], d != s ? this.sigBytes = d : this.sigBytes = r.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(r) {
            return (r || P).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(r) {
            var d = this.words, u = r.words, g = this.sigBytes, w = r.sigBytes;
            if (this.clamp(), g % 4)
              for (var y = 0; y < w; y++) {
                var L = u[y >>> 2] >>> 24 - y % 4 * 8 & 255;
                d[g + y >>> 2] |= L << 24 - (g + y) % 4 * 8;
              }
            else
              for (var E = 0; E < w; E += 4)
                d[g + E >>> 2] = u[E >>> 2];
            return this.sigBytes += w, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var r = this.words, d = this.sigBytes;
            r[d >>> 2] &= 4294967295 << 32 - d % 4 * 8, r.length = i.ceil(d / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var r = k.clone.call(this);
            return r.words = this.words.slice(0), r;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(r) {
            for (var d = [], u = 0; u < r; u += 4)
              d.push(C());
            return new x.init(d, r);
          }
        }), b = D.enc = {}, P = b.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(r) {
            for (var d = r.words, u = r.sigBytes, g = [], w = 0; w < u; w++) {
              var y = d[w >>> 2] >>> 24 - w % 4 * 8 & 255;
              g.push((y >>> 4).toString(16)), g.push((y & 15).toString(16));
            }
            return g.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(r) {
            for (var d = r.length, u = [], g = 0; g < d; g += 2)
              u[g >>> 3] |= parseInt(r.substr(g, 2), 16) << 24 - g % 8 * 4;
            return new x.init(u, d / 2);
          }
        }, _ = b.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(r) {
            for (var d = r.words, u = r.sigBytes, g = [], w = 0; w < u; w++) {
              var y = d[w >>> 2] >>> 24 - w % 4 * 8 & 255;
              g.push(String.fromCharCode(y));
            }
            return g.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(r) {
            for (var d = r.length, u = [], g = 0; g < d; g++)
              u[g >>> 2] |= (r.charCodeAt(g) & 255) << 24 - g % 4 * 8;
            return new x.init(u, d);
          }
        }, f = b.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(r) {
            try {
              return decodeURIComponent(escape(_.stringify(r)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(r) {
            return _.parse(unescape(encodeURIComponent(r)));
          }
        }, p = l.BufferedBlockAlgorithm = k.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new x.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(r) {
            typeof r == "string" && (r = f.parse(r)), this._data.concat(r), this._nDataBytes += r.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(r) {
            var d, u = this._data, g = u.words, w = u.sigBytes, y = this.blockSize, L = y * 4, E = w / L;
            r ? E = i.ceil(E) : E = i.max((E | 0) - this._minBufferSize, 0);
            var R = E * y, H = i.min(R * 4, w);
            if (R) {
              for (var O = 0; O < R; O += y)
                this._doProcessBlock(g, O);
              d = g.splice(0, R), u.sigBytes -= H;
            }
            return new x.init(d, H);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var r = k.clone.call(this);
            return r._data = this._data.clone(), r;
          },
          _minBufferSize: 0
        });
        l.Hasher = p.extend({
          /**
           * Configuration options.
           */
          cfg: k.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(r) {
            this.cfg = this.cfg.extend(r), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            p.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(r) {
            return this._append(r), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(r) {
            r && this._append(r);
            var d = this._doFinalize();
            return d;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(r) {
            return function(d, u) {
              return new r.init(u).finalize(d);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(r) {
            return function(d, u) {
              return new B.HMAC.init(r, u).finalize(d);
            };
          }
        });
        var B = D.algo = {};
        return D;
      }(Math);
      return e;
    });
  }(G)), G.exports;
}
(function(v, t) {
  (function(e, i) {
    v.exports = i(dt());
  })(Y, function(e) {
    return function(i) {
      var s = e, m = s.lib, C = m.WordArray, S = m.Hasher, D = s.algo, l = [];
      (function() {
        for (var f = 0; f < 64; f++)
          l[f] = i.abs(i.sin(f + 1)) * 4294967296 | 0;
      })();
      var k = D.MD5 = S.extend({
        _doReset: function() {
          this._hash = new C.init([
            1732584193,
            4023233417,
            2562383102,
            271733878
          ]);
        },
        _doProcessBlock: function(f, p) {
          for (var B = 0; B < 16; B++) {
            var r = p + B, d = f[r];
            f[r] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360;
          }
          var u = this._hash.words, g = f[p + 0], w = f[p + 1], y = f[p + 2], L = f[p + 3], E = f[p + 4], R = f[p + 5], H = f[p + 6], O = f[p + 7], I = f[p + 8], M = f[p + 9], j = f[p + 10], X = f[p + 11], A = f[p + 12], z = f[p + 13], F = f[p + 14], W = f[p + 15], a = u[0], o = u[1], h = u[2], c = u[3];
          a = x(a, o, h, c, g, 7, l[0]), c = x(c, a, o, h, w, 12, l[1]), h = x(h, c, a, o, y, 17, l[2]), o = x(o, h, c, a, L, 22, l[3]), a = x(a, o, h, c, E, 7, l[4]), c = x(c, a, o, h, R, 12, l[5]), h = x(h, c, a, o, H, 17, l[6]), o = x(o, h, c, a, O, 22, l[7]), a = x(a, o, h, c, I, 7, l[8]), c = x(c, a, o, h, M, 12, l[9]), h = x(h, c, a, o, j, 17, l[10]), o = x(o, h, c, a, X, 22, l[11]), a = x(a, o, h, c, A, 7, l[12]), c = x(c, a, o, h, z, 12, l[13]), h = x(h, c, a, o, F, 17, l[14]), o = x(o, h, c, a, W, 22, l[15]), a = b(a, o, h, c, w, 5, l[16]), c = b(c, a, o, h, H, 9, l[17]), h = b(h, c, a, o, X, 14, l[18]), o = b(o, h, c, a, g, 20, l[19]), a = b(a, o, h, c, R, 5, l[20]), c = b(c, a, o, h, j, 9, l[21]), h = b(h, c, a, o, W, 14, l[22]), o = b(o, h, c, a, E, 20, l[23]), a = b(a, o, h, c, M, 5, l[24]), c = b(c, a, o, h, F, 9, l[25]), h = b(h, c, a, o, L, 14, l[26]), o = b(o, h, c, a, I, 20, l[27]), a = b(a, o, h, c, z, 5, l[28]), c = b(c, a, o, h, y, 9, l[29]), h = b(h, c, a, o, O, 14, l[30]), o = b(o, h, c, a, A, 20, l[31]), a = P(a, o, h, c, R, 4, l[32]), c = P(c, a, o, h, I, 11, l[33]), h = P(h, c, a, o, X, 16, l[34]), o = P(o, h, c, a, F, 23, l[35]), a = P(a, o, h, c, w, 4, l[36]), c = P(c, a, o, h, E, 11, l[37]), h = P(h, c, a, o, O, 16, l[38]), o = P(o, h, c, a, j, 23, l[39]), a = P(a, o, h, c, z, 4, l[40]), c = P(c, a, o, h, g, 11, l[41]), h = P(h, c, a, o, L, 16, l[42]), o = P(o, h, c, a, H, 23, l[43]), a = P(a, o, h, c, M, 4, l[44]), c = P(c, a, o, h, A, 11, l[45]), h = P(h, c, a, o, W, 16, l[46]), o = P(o, h, c, a, y, 23, l[47]), a = _(a, o, h, c, g, 6, l[48]), c = _(c, a, o, h, O, 10, l[49]), h = _(h, c, a, o, F, 15, l[50]), o = _(o, h, c, a, R, 21, l[51]), a = _(a, o, h, c, A, 6, l[52]), c = _(c, a, o, h, L, 10, l[53]), h = _(h, c, a, o, j, 15, l[54]), o = _(o, h, c, a, w, 21, l[55]), a = _(a, o, h, c, I, 6, l[56]), c = _(c, a, o, h, W, 10, l[57]), h = _(h, c, a, o, H, 15, l[58]), o = _(o, h, c, a, z, 21, l[59]), a = _(a, o, h, c, E, 6, l[60]), c = _(c, a, o, h, X, 10, l[61]), h = _(h, c, a, o, y, 15, l[62]), o = _(o, h, c, a, M, 21, l[63]), u[0] = u[0] + a | 0, u[1] = u[1] + o | 0, u[2] = u[2] + h | 0, u[3] = u[3] + c | 0;
        },
        _doFinalize: function() {
          var f = this._data, p = f.words, B = this._nDataBytes * 8, r = f.sigBytes * 8;
          p[r >>> 5] |= 128 << 24 - r % 32;
          var d = i.floor(B / 4294967296), u = B;
          p[(r + 64 >>> 9 << 4) + 15] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, p[(r + 64 >>> 9 << 4) + 14] = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360, f.sigBytes = (p.length + 1) * 4, this._process();
          for (var g = this._hash, w = g.words, y = 0; y < 4; y++) {
            var L = w[y];
            w[y] = (L << 8 | L >>> 24) & 16711935 | (L << 24 | L >>> 8) & 4278255360;
          }
          return g;
        },
        clone: function() {
          var f = S.clone.call(this);
          return f._hash = this._hash.clone(), f;
        }
      });
      function x(f, p, B, r, d, u, g) {
        var w = f + (p & B | ~p & r) + d + g;
        return (w << u | w >>> 32 - u) + p;
      }
      function b(f, p, B, r, d, u, g) {
        var w = f + (p & r | B & ~r) + d + g;
        return (w << u | w >>> 32 - u) + p;
      }
      function P(f, p, B, r, d, u, g) {
        var w = f + (p ^ B ^ r) + d + g;
        return (w << u | w >>> 32 - u) + p;
      }
      function _(f, p, B, r, d, u, g) {
        var w = f + (B ^ (p | ~r)) + d + g;
        return (w << u | w >>> 32 - u) + p;
      }
      s.MD5 = S._createHelper(k), s.HmacMD5 = S._createHmacHelper(k);
    }(Math), e.MD5;
  });
})(Z);
var ut = Z.exports;
const ft = /* @__PURE__ */ nt(ut);
function q(v) {
  return v * 20 + 12;
}
class mt {
  constructor() {
    n(this, "dotHeight", 6);
    n(this, "dotWidth", 8);
    n(this, "remoteOnly", !1);
    n(this, "avatars", [this.avatar_gravatar]);
  }
  avatar_gravatar(t) {
    return "https://www.gravatar.com/avatar/" + ft(t.toLowerCase()) + "?s=20&d=mm";
  }
}
class V {
  // optional
  constructor(t, e, i) {
    n(this, "image");
    this.name = t, this.email = e, this.date = i;
  }
}
class J {
  constructor(t, e) {
    n(this, "container");
    n(this, "warnings", []);
    n(this, "inHeadsRef", []);
    n(this, "parents", []);
    n(this, "childs", []);
    n(this, "siblings", []);
    n(this, "outOfScope", !1);
    // This commit was not part of the logs scope, but is referenced by another commit.
    n(this, "merges", { standard: [], anonymous: [] });
    n(this, "sha");
    n(this, "ssha");
    // Abbreviated hash
    n(this, "subject");
    n(this, "data");
    n(this, "indexY");
    n(this, "maxSpecifity");
    n(this, "branch");
    n(this, "directparent");
    n(this, "directchild");
    n(this, "view");
    n(this, "committer");
    n(this, "author");
    this.container = t, this.data = e, this.data.obj = this, e.inHeads == null && (e.inHeads = []), e.parenthashes == null && (e.parenthashes = []), e.refnames == null && (e.refnames = []), this.sha = e.sha, this.ssha = e.ssha, this.subject = e.subject, this.indexY = t.maxIndexY++, this.committer = new V(this.data.committername, this.data.committeremail, new Date(this.data.committerdate * 1e3)), this.author = new V(this.data.authorname, this.data.authoremail, new Date(this.data.authordate * 1e3));
  }
  getShortSha() {
    return this.ssha;
  }
  getFullSha() {
    return this.sha;
  }
  initRelations() {
    var t = this;
    this.data.parenthashes.forEach((e) => {
      var i = this.container.commits[e];
      if (i == null && (i = new J(this.container, { sha: e + Math.random() }), i.outOfScope = !0, t.container.addCommit(i)), this.parents.push(i), i.childs.push(this), this.siblings = i.childs, this.parents.length > 0) {
        var s = this.parents[0];
        this.directparent = s, s.directchild = this;
      }
    }), this.data.inHeads.forEach((e) => {
      var i = this.container.commits[e];
      this.inHeadsRef.indexOf(i) === void 0 && this.inHeadsRef.push(i);
    });
  }
  initDefaultBranch() {
    for (var t = this; t != null; )
      (t.branch == null || t.branch.specifity > this.branch.specifity) && (t.branch = this.branch), t.branch.start = t, t.branch.origin = t.directparent, t = t.directparent;
  }
  initHeadSpecifity() {
    for (var t = 0; t < this.data.refnames.length; t++) {
      var e = this.data.refnames[t];
      if (!this.container.config.remoteOnly || e.indexOf("origin/") == 0) {
        this.container.config.remoteOnly && (e = e.replace(/^origin./, ""));
        var i = e.replace(/[^\/-]/g, "").length * 1e3;
        i += e.replace(/[^a-zA-Z0-9-]/, "").length, this.container.addBranch(e, this, i), (this.maxSpecifity == null || i < this.maxSpecifity) && (console.debug("assigning branch", e, this.sha, this.maxSpecifity, i), this.maxSpecifity = i, this.branch = this.container.headsMap[e]), this.initDefaultBranch();
      }
    }
  }
  initMerges() {
    if (this.merges = { standard: [], anonymous: [] }, this.warnings = [], this.parents.length == 1) {
      var t = this.parents[0];
      this.directparent = t, t.directchild = this;
    }
    if (this.parents.length >= 2) {
      var t = this.parents[0];
      this.directparent = t, t.directchild = this;
      for (var e = 1; e < this.parents.length; e++) {
        var i = this.parents[e];
        i != null && (i.data.refnames.length > 0 || i.inHeadsRef.length != t.inHeadsRef.length ? this.merges.standard.push({ source: i }) : (this.merges.anonymous.push({ source: i }), this.initAnonymous()));
      }
    }
  }
  initAnonymous() {
    this.merges.anonymous.forEach((t) => {
      for (var e = t.source, i = this; i != null && i.branch == null; )
        i = i.directchild;
      i != null && e.branch == null && (e.branch = new K(i.branch.ref + "/anonymous" + e.sha + Math.random(), e, i.branch.specifity + 1), e.branch.anonymous = !0, e.branch.parent = i.branch, e.branch.start = i, e.branch.category = i.branch.category, this.container.headsMap[e.branch.ref] = e.branch);
    });
  }
  getColor(t) {
    if (this.branch == null)
      this.warn("No Branch set");
    else {
      var e = this.branch;
      this.branch.anonymous && (e = this.branch.parent);
      var i = e.lane * 300 / this.container.maxX;
      return "hsl(" + i + ", 100%, " + t + "%)";
    }
  }
  hasMerges() {
    return this.merges.standard.length > 0 || this.merges.anonymous.length > 0;
  }
  getX() {
    return q(this.getLane());
  }
  getY() {
    return this.outOfScope ? this.container.rootLabel.offsetTop + 20 : this.view.label.offsetTop - this.container.firstCommit.view.label.offsetTop + this.view.label.offsetHeight / 2;
  }
  getOriginIndexY() {
    return this.branch.origin != null ? this.branch.origin.getIndexY() : this.branch.start.outOfScope ? this.container.maxIndexY : this.branch.start.indexY;
  }
  /** Tip plus the next direct child index (position of last merge) */
  getTipPlusIndexY() {
    if (this.branch != null && this.branch.commit != null) {
      var t = this.branch.commit.indexY;
      return this.branch.commit.childs.forEach((e) => {
        t = Math.min(t, e.indexY);
      }), t;
    }
    return 0;
  }
  /** does this branch intersect with another when drawn next to each other. 
      can this branch be displayed on the same X axis without overlapping? */
  intersects(t) {
    return this.outOfScope || t.outOfScope ? !0 : this.getOriginIndexY() > t.getTipPlusIndexY() && this.getTipPlusIndexY() < t.getOriginIndexY();
  }
  getIndexY() {
    return this.indexY;
  }
  warn(t) {
    this.warnings.push(t), this.debug(t);
  }
  debug(t) {
    console && console.debug(t, this);
  }
  getLane() {
    return this.branch != null ? this.branch.commit.branch.lane : null;
  }
}
class Q {
  constructor(t, e) {
    n(this, "element");
    // jsgl element
    n(this, "renderedTo");
    // jsgl canvas (any html)
    n(this, "canvas");
    n(this, "dependencies", []);
    this.canvas = t, this.element = e;
  }
  addIfMissing() {
    this.element !== void 0 && this.renderedTo == null && (this.addElements(), this.renderedTo = this.canvas);
  }
  addElements() {
    this.canvas.addElement(this.element);
  }
  update() {
    this.dependencies.forEach((t) => {
      t.update();
    });
  }
  dependsOn(t) {
    t.dependencies.push(this);
  }
}
class N extends Q {
  constructor(e, i) {
    super(e, i);
    n(this, "parentDot");
    n(this, "childDot");
    n(this, "lineColor");
  }
  from(e) {
    return this.dependsOn(e), this.parentDot = e, this;
  }
  to(e) {
    return this.childDot = e, this;
  }
  color(e) {
    return this.element.getStroke().setWeight(1), this.element.getStroke().setColor(e), this.lineColor = e, this.addIfMissing(), this;
  }
}
class pt extends N {
  constructor(e) {
    super(e, e.createLine());
    n(this, "secondLine");
    this.secondLine = e.createLine();
  }
  addElements() {
    super.addElements(), this.canvas.addElement(this.secondLine);
  }
  update() {
    super.update(), this.parentDot.x < this.childDot.x ? this.element.setStartPointXY(this.parentDot.x + this.parentDot.width / 2, this.parentDot.y) : this.element.setStartPointXY(this.parentDot.x - this.parentDot.width / 2, this.parentDot.y), this.element.setEndPointXY(this.childDot.x, this.parentDot.y), this.element.getStroke().setWeight(1), this.element.getStroke().setDashStyle(jsgl.DashStyles.DASH), this.element.getStroke().setColor(this.lineColor), this.secondLine.setStartPointXY(this.childDot.x, this.parentDot.y), this.secondLine.setEndPointXY(this.childDot.x, this.childDot.y + this.childDot.height / 2), this.secondLine.getStroke().setWeight(1), this.secondLine.getStroke().setColor(this.lineColor);
  }
}
class gt extends N {
  constructor(e) {
    super(e, e.createCurve());
    n(this, "arrow");
    this.arrow = this.canvas.createPolygon();
  }
  addElements() {
    super.addElements(), this.canvas.addElement(this.arrow);
  }
  update() {
    var e = this.childDot.x, i = this.childDot.y, s = this.parentDot.x, m = this.parentDot.y, C = this.lineColor, S = e < s ? 1 : -1;
    this.element.setStartPointXY(s, m - this.parentDot.height / 2), this.element.setEndPointXY(e + this.childDot.width / 2 * S, i), this.element.setControl2PointXY(s, i), this.element.setControl1PointXY(s, i), this.element.getStroke().setWeight(1), this.element.getStroke().setColor(C), this.arrow.getStroke().setWeight(0), this.arrow.getFill().setColor(C), this.arrow.clearPoints(), this.arrow.addPointXY(0, 0), this.arrow.addPointXY(6, -4), this.arrow.addPointXY(6, 4);
    for (var D = 0; D < this.arrow.getPointsCount(); D++) {
      var l = this.arrow.getPointAt(D).X, k = this.arrow.getPointAt(D).Y;
      this.arrow.setPointXYAt(l * S + e + this.childDot.width / 2 * S, k + i, D);
    }
  }
}
class vt extends Q {
  constructor(e) {
    super(e, e.createRectangle());
    n(this, "x");
    n(this, "y");
    n(this, "width");
    n(this, "height");
  }
  size(e, i) {
    return this.width = e, this.height = i, this.element.setWidth(e), this.element.setHeight(i), this.element.setXRadius(e / 4), this.element.setYRadius(e / 4), this.update(), this.addIfMissing(), this;
  }
  at(e, i) {
    return this.x = e, this.y = i, this.update(), this.addIfMissing(), this;
  }
  color(e, i) {
    return this.element.getStroke().setWeight(1), this.element.getStroke().setColor(e), this.element.getFill().setColor(i), this;
  }
  update() {
    this.element.setLocationXY(this.x - this.width / 2, this.y - this.height / 2), super.update();
  }
}
class wt extends N {
  constructor(t) {
    super(t, t.createLine());
  }
  update() {
    super.update(), this.element.setStartPointXY(this.parentDot.x, this.parentDot.y - this.parentDot.height / 2), this.element.setEndPointXY(this.childDot.x, this.childDot.y + this.childDot.height / 2);
  }
}
class bt {
  constructor(t, e, i) {
    n(this, "commit");
    n(this, "label");
    n(this, "canvas");
    // jsgl
    n(this, "config");
    n(this, "dot");
    n(this, "lines", []);
    this.canvas = t, this.config = e, this.commit = i, this.dot = new vt(this.canvas);
  }
  addRelations() {
    if (this.commit.directparent != null) {
      var t;
      this.commit.getLane() == this.commit.directparent.getLane() || this.commit.directparent.outOfScope ? t = new wt(this.canvas).from(this.commit.directparent.view.dot).to(this.dot).color(this.commit.getColor(20)) : t = new pt(this.canvas).from(this.commit.directparent.view.dot).to(this.dot).color(this.commit.getColor(30)), this.lines.push(t);
    }
    var e = this.commit.merges.standard.concat(this.commit.merges.anonymous);
    e.forEach((i) => {
      this.lines.push(
        new gt(this.canvas).from(i.source.view.dot).to(this.dot).color(i.source.getColor(35))
      );
    });
  }
  /** calculate the positions based on model and update the shapes */
  redraw() {
    this.dot.at(this.commit.getX(), this.commit.getY()).size(this.config.dotWidth, this.config.dotHeight).color(this.commit.getColor(20), this.commit.getColor(80));
  }
}
class T {
  static extend(t) {
    var e = t;
    return t.classList.add("gitline-expandable"), e.whenFull = (i) => {
      e.onclick = () => {
        e.innerHTML = i, t.classList.add("gitline-expandable-expanded"), T.selectElementText(t);
      };
    }, e.whenShort = (i) => {
      e.innerHTML = i, e.onmouseout = () => {
        window.setTimeout(() => {
          e.innerHTML = i, t.classList.remove("gitline-expandable-expanded");
        }, 1e3);
      };
    }, e;
  }
  // x-browser text select
  // http://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse
  static selectElementText(t) {
    var e = window.document, i, s;
    window.getSelection && e.createRange ? (i = window.getSelection(), s = e.createRange(), s.selectNodeContents(t), i.removeAllRanges(), i.addRange(s)) : e.body.createTextRange && (s = e.body.createTextRange(), s.moveToElementText(t), s.select());
  }
}
class tt {
  constructor(t) {
    n(this, "url");
    n(this, "callback");
    n(this, "errorCallback");
    this.url = t;
  }
  whenDone(t) {
    this.callback(t);
  }
  withErrorCallback(t) {
    this.errorCallback = t;
  }
  withCallback(t) {
    this.callback = t;
  }
  /** this method should be overwritten. it must call whenDone(data) when all data was loaded. */
  onRequested(t) {
    throw new Error("onRequested not implemented on " + this);
  }
  request() {
    this.onRequested(this.url);
  }
  error(t) {
    this.errorCallback(t);
  }
}
class yt extends tt {
  constructor(e, i, s) {
    super(e);
    n(this, "forks", []);
    n(this, "baseBranches", []);
    n(this, "data", {});
    n(this, "limit");
    n(this, "accessToken");
    n(this, "fetchGithubJson", (e) => fetch(e, {
      headers: {
        ...this.accessToken && { Authorization: `token ${this.accessToken}` },
        Accept: "application/vnd.github.v3+json"
      }
    }).then((i) => {
      if (i.ok)
        return i.json();
      throw new Error("Response wasn't OK when fetching JSON");
    }));
    this.accessToken = s, this.limit = i;
  }
  gitURL(e, i, s = "") {
    return e.indexOf("api.github.com") == -1 && (e = e.replace(/.*github.com/, "https://api.github.com/repos/").replace(/\/\//g, "/")), e + "/" + i + "?per_page=" + this.limit + "&" + s;
  }
  onRequested(e) {
    this.loadForks(e);
  }
  loadForks(e) {
    this.fetchGithubJson(this.gitURL(e, "forks")).then((i) => {
      this.fetchGithubJson(this.gitURL(e, "branches")).then((s) => {
        this.processBranches(e, s), this.forks = i, this.loadBranches();
      });
    }).catch((i) => {
      this.error("Github API: " + i);
    });
  }
  processBranches(e, i) {
    i.forEach((s) => {
      s.repo = e.url !== void 0 ? e.url : e, e.full_name !== void 0 && (s.name = s.name + "@" + e.full_name), this.baseBranches.push(s);
    });
  }
  loadBranches() {
    var e = this.forks.map((i) => this.fetchGithubJson(this.gitURL(i.url, "branches")).then((s) => {
      console.debug("loaded branches for " + i.name), this.processBranches(i, s);
    }));
    Promise.all(e).then(() => {
      console.debug("all branches loaded"), this.loadCommits();
    });
  }
  loadCommits() {
    var e = [];
    this.baseBranches.forEach((i) => {
      var s = this.data[i.commit.sha];
      s == null && e.push(
        this.fetchGithubJson(this.gitURL(i.repo, "commits", "sha=" + i.commit.sha)).then((m) => {
          console.debug("loaded commits for " + i.name), this.processCommits(m);
        })
      );
    }), Promise.all(e).then(() => {
      this.process();
    });
  }
  processCommits(e) {
    e.map((i) => {
      var s = {};
      return s.sha = i.sha, s.ssha = i.sha.substring(0, 8), s.parenthashes = i.parents.map((m) => m.sha), s.authorname = i.commit.author.name, s.authoremail = i.commit.author.email, s.authordate = new Date(i.commit.author.date).valueOf() / 1e3, s.authortimestamp = new Date(i.commit.author.date).valueOf(), s.committername = i.commit.committer.name, s.committeremail = i.commit.committer.email, s.committerdate = new Date(i.commit.committer.date).valueOf() / 1e3, s.committertimestamp = new Date(i.commit.committer.date).valueOf(), s.subject = i.commit.message, s.body = "", s.refnames = [], s.inHeads = [], s;
    }).forEach((i) => {
      this.data[i.sha] = i;
    });
  }
  process() {
    this.baseBranches.forEach((i) => {
      var s = this.data[i.commit.sha];
      s == null || (i.assigned = !0, s.refnames.push(i.name), this.assignHeads(s));
    });
    var e = {};
    Object.keys(this.data).sort((i, s) => this.data[s].committertimestamp - this.data[i].committertimestamp).forEach((i) => {
      e[i] = this.data[i];
    }), this.whenDone(e);
  }
  assignHeads(e) {
    for (e.parents1 = e.parenthashes.map((s) => s); e.parents1.length > 0; ) {
      var i = [];
      e.parents1.forEach((s) => {
        var m = this.data[s];
        m != null && (m.inHeads.push(e.sha), m.parenthashes.forEach((C) => {
          i.indexOf(C) === -1 && i.push(C);
        }));
      }), e.parents1 = i;
    }
  }
}
class xt extends tt {
  constructor() {
    super(...arguments);
    n(this, "onRequested", (e) => fetch(e, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then((i) => {
      if (i.ok)
        return i.json();
      throw new Error("Response wasn't OK when fetching JSON");
    }).then((i) => {
      this.whenDone(i);
    }).catch(() => {
      this.error("Error loading git data from " + e + " create it using git2json");
    }));
  }
}
class et {
  constructor() {
    n(this, "maxX", 0);
    n(this, "maxIndexY", 0);
    n(this, "commits", {});
    n(this, "firstCommit");
    n(this, "canvas");
    n(this, "data");
    n(this, "panel");
    n(this, "textPanel");
    n(this, "headsMap", {});
    n(this, "rootLabel");
    n(this, "al");
    n(this, "config", new mt());
    // HTML stuff
    n(this, "loadingPanel");
    n(this, "graphicalPanel");
    n(this, "headerPanel");
    n(this, "contentPanel");
    n(this, "commitProvider");
  }
  static create() {
    return new et();
  }
  addCommit(t) {
    this.commits[t.getFullSha()] = t, this.firstCommit === void 0 && (this.firstCommit = t);
  }
  addBranch(t, e, i) {
    this.headsMap[t] = new K(t, e, i);
  }
  render() {
    this.canvas = new jsgl.Panel(this.graphicalPanel), this.al.thenSingle("Loading Data", () => {
      this.al.suspend(), this.commitProvider.withCallback((t) => {
        this.data = t, this.al.resume();
      }), this.commitProvider.withErrorCallback((t) => {
        this.al.error(t);
      }), this.commitProvider.request();
    }).then(
      "Loading Commits",
      () => Object.keys(this.data),
      (t) => {
        var e = new J(this, this.data[t]);
        this.addCommit(e);
      }
    ).thenSingle("Building Graph", () => {
      this.buildGraph();
    }).then(
      "Drawing Labels",
      () => Object.keys(this.commits),
      (t) => {
        var e = this.commits[t];
        this.drawCommit(e);
      }
    ).thenSingle("Creating Legend", () => {
      this.rootLabel = document.createElement("div"), this.rootLabel.className = "commit-legend", this.textPanel.appendChild(this.rootLabel);
    }).then(
      "Drawing Merges",
      () => Object.keys(this.commits),
      (t) => {
        var e = this.commits[t];
        this.drawReferences(e);
      }
    ).thenSingle("Resizing", () => {
      this.graphicalPanel.style.width = q(this.maxX + 1) + "px", this.graphicalPanel.style.height = this.getHeight() + "px";
    }).start(), window.onresize = () => {
      this.al.then(
        "Redrawing",
        () => Object.keys(this.commits),
        (t) => {
          var e = this.commits[t];
          e.view.redraw();
        }
      ).thenSingle("Resizing", () => {
        this.graphicalPanel.style.width = q(this.maxX + 1) + "px", this.graphicalPanel.style.height = this.getHeight() + "px";
      }).start(!1);
    };
  }
  getHeight() {
    return this.rootLabel.offsetTop - this.firstCommit.view.label.offsetTop;
  }
  buildGraph() {
    var t = Object.keys(this.commits);
    t.forEach((e) => {
      var i = this.commits[e];
      i.initRelations();
    }), t.forEach((e) => {
      var i = this.commits[e];
      i.initHeadSpecifity(), i.initMerges();
    }), this.initBranches();
  }
  drawCommit(t) {
    t.view = new bt(this.canvas, this.config, t), t.outOfScope === !1 && (t.view.label = this.drawLabel(t), t.view.label.onclick = function() {
      console && console.debug(t);
    }, this.textPanel.appendChild(t.view.label), t.view.label.style["padding-left"] = q(this.maxX + 1) + "px");
  }
  drawReferences(t) {
    t.view.addRelations(), t.view.redraw();
  }
  drawLabel(t) {
    var e = document.createElement("gitline-legend"), i = t.getShortSha().trim(), s = t.getFullSha().trim(), m = T.extend(
      document.createElement("gitline-sha")
    );
    if (m.setAttribute("title", s), m.whenShort(i), m.whenFull(s), e.appendChild(m), e.appendChild(this.drawIdentity("author", t.author)), t.author.email != t.committer.email && e.appendChild(this.drawIdentity("committer", t.committer)), t.branch && t.branch.commit === t && !t.branch.anonymous) {
      var C = T.extend(
        document.createElement("gitline-ref")
      );
      C.style.backgroundColor = t.getColor(40), C.whenShort(t.branch.ref), C.whenFull(t.branch.ref), e.appendChild(C);
    }
    var S = document.createElement("gitline-subject");
    return S.innerHTML = t.subject, t.hasMerges() && S.classList.add("has-merges"), e.appendChild(S), e;
  }
  drawIdentity(t, e) {
    var i = document.createElement(
      "gitline-identity-container"
    ), s = T.extend(
      document.createElement("gitline-identity")
    );
    s.classList.add(t);
    var m = e.name + " &lt;" + e.email.toLowerCase() + "&gt;";
    s.setAttribute(
      "title",
      e.name + " <" + e.email.toLowerCase() + ">"
    ), s.style.background = this.config.avatars.map((D) => "url(" + D(e.email) + ") no-repeat left center").join(", "), s.whenFull(m), s.whenShort("");
    var C = T.extend(
      document.createElement("gitline-identity-datetime")
    );
    C.classList.add(t + "-datetime");
    var S = e.date.toISOString().slice(0, 16).replace("T", " ");
    return C.setAttribute("title", S), C.whenFull(S), C.whenShort(e.date.toISOString().slice(11, 16)), i.appendChild(s), i.appendChild(C), i;
  }
  /*
   Based on the specifity assign the branches to the commits. if in doubt the commit will be on the most specific branch
   */
  initBranches() {
    for (var t = Object.keys(this.headsMap), e = 0; e < t.length; e++) {
      var i = t[e], s = this.headsMap[i];
      s.commit.initDefaultBranch();
    }
    var m = this;
    t.sort(function(P, _) {
      var f = m.headsMap[P].commit, p = m.headsMap[_].commit;
      return f === p ? 0 : f.branch.category === p.branch.category ? f.branch.specifity - p.branch.specifity : f.branch.category.length - p.branch.category.length;
    });
    for (var C = 0, e = 0; e < t.length; e++) {
      var i = t[e], s = this.headsMap[i], S = s.commit;
      if (S.branch === s) {
        s.lane = C, C++;
        for (var D = 0; D < t.length; D++) {
          for (var l = !0, k = 0; k < t.length; k++) {
            var x = t[k], b = this.headsMap[x].commit;
            (b === void 0 || b.branch != s && b.branch.lane === D && (S.intersects(b) || S.branch.category != b.branch.category)) && (l = !1);
          }
          if (l) {
            console.debug(
              "NO INTERSECTS: ",
              S.branch.ref,
              " - ",
              b.branch.ref
            ), s.lane = D;
            break;
          }
        }
        this.maxX = Math.max(this.maxX, s.lane);
      }
    }
  }
  // Launching
  fromJSON(t) {
    return this.fromProvider(new xt(t));
  }
  fromGitHub(t, e, i) {
    return this.fromProvider(new yt(t, e, i));
  }
  fromProvider(t) {
    return this.commitProvider = t, this;
  }
  renderTo(t) {
    return this.headerPanel !== void 0 && t.appendChild(this.headerPanel), t.appendChild(
      this.loadingPanel = document.createElement("gitline-loadingpanel")
    ), t.appendChild(
      this.contentPanel = document.createElement("gitline-contentpanel")
    ), this.contentPanel.appendChild(
      this.graphicalPanel = document.createElement("gitline-graphicalpanel")
    ), this.contentPanel.appendChild(
      this.textPanel = document.createElement("gitline-textpanel")
    ), this.al = new st(this.loadingPanel), this.render(), this;
  }
  withHeader(t) {
    return typeof t == "string" ? (this.headerPanel = document.createElement("gitline-headerpanel"), this.headerPanel.innerHTML = t) : this.headerPanel = t, this;
  }
}
export {
  et as default
};
