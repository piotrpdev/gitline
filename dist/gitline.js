var it = Object.defineProperty;
var rt = (v, e, t) => e in v ? it(v, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : v[e] = t;
var n = (v, e, t) => (rt(v, typeof e != "symbol" ? e + "" : e, t), t);
class U {
  constructor(e, t, i, r, f) {
    n(this, "label");
    n(this, "data");
    n(this, "callback");
    n(this, "index");
    n(this, "of");
    this.label = e, this.data = t, this.callback = i, this.index = r, this.of = f;
  }
}
class st {
  constructor(e) {
    n(this, "element");
    n(this, "queue", []);
    // Now storing a queue of functions returning promises.
    n(this, "suspended", !1);
    this.element = e;
  }
  then(e, t, i) {
    return this.queue.push(() => this.processBatch(e, t, i)), this;
  }
  thenSingle(e, t) {
    return this.queue.push(() => this.processSingle(e, t)), this;
  }
  processSingle(e, t) {
    const i = new U(e, null, t, 0, 1);
    return this.showStatus(i), new Promise((r, f) => {
      try {
        t(), r();
      } catch (y) {
        f(y);
      }
    });
  }
  processBatch(e, t, i) {
    const r = t(), f = r.map((y, C) => {
      const P = new U(e, y, i, C, r.length);
      return this.processItem(P, i);
    });
    return Promise.all(f).then(() => {
    });
  }
  processItem(e, t) {
    return this.showStatus(e), new Promise((i, r) => {
      try {
        t(e.data), i();
      } catch (f) {
        r(f);
      }
    });
  }
  async processQueue() {
    for (; this.queue.length > 0 && !this.suspended; ) {
      const e = this.queue.shift();
      if (e)
        try {
          await e();
        } catch (t) {
          this.error(t);
          break;
        }
    }
    this.queue.length === 0 && (this.element.hidden = !0);
  }
  start(e = !0) {
    return e && this.suspended === !1 && (this.element.hidden = !1), this.processQueue();
  }
  suspend() {
    this.suspended = !0;
  }
  resume() {
    this.suspended = !1, this.start(!1);
  }
  showStatus(e) {
    this.element.innerHTML = `${e.label} (${e.index + 1}/${e.of})`;
  }
  error(e) {
    console.error(e), this.element.innerHTML = "Error: " + e.toString(), this.suspend();
  }
}
class K {
  constructor(e, t, i) {
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
    this.ref = e, this.commit = t, this.specifity = i, this.shortname = e.split("@")[0], this.category = this.shortname.substring(0, this.shortname.lastIndexOf("/"));
  }
}
var I = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nt(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
function at(v) {
  if (v.__esModule)
    return v;
  var e = v.default;
  if (typeof e == "function") {
    var t = function i() {
      return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(v).forEach(function(i) {
    var r = Object.getOwnPropertyDescriptor(v, i);
    Object.defineProperty(t, i, r.get ? r : {
      enumerable: !0,
      get: function() {
        return v[i];
      }
    });
  }), t;
}
var Q = { exports: {} };
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
  return $ || ($ = 1, function(v, e) {
    (function(t, i) {
      v.exports = i();
    })(I, function() {
      var t = t || function(i, r) {
        var f;
        if (typeof window < "u" && window.crypto && (f = window.crypto), typeof self < "u" && self.crypto && (f = self.crypto), typeof globalThis < "u" && globalThis.crypto && (f = globalThis.crypto), !f && typeof window < "u" && window.msCrypto && (f = window.msCrypto), !f && typeof I < "u" && I.crypto && (f = I.crypto), !f && typeof ot == "function")
          try {
            f = lt;
          } catch {
          }
        var y = function() {
          if (f) {
            if (typeof f.getRandomValues == "function")
              try {
                return f.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof f.randomBytes == "function")
              try {
                return f.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, C = Object.create || function() {
          function s() {
          }
          return function(d) {
            var u;
            return s.prototype = d, u = new s(), s.prototype = null, u;
          };
        }(), P = {}, l = P.lib = {}, k = l.Base = function() {
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
            extend: function(s) {
              var d = C(this);
              return s && d.mixIn(s), (!d.hasOwnProperty("init") || this.init === d.init) && (d.init = function() {
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
              var s = this.extend();
              return s.init.apply(s, arguments), s;
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
            mixIn: function(s) {
              for (var d in s)
                s.hasOwnProperty(d) && (this[d] = s[d]);
              s.hasOwnProperty("toString") && (this.toString = s.toString);
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
        }(), S = l.WordArray = k.extend({
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
          init: function(s, d) {
            s = this.words = s || [], d != r ? this.sigBytes = d : this.sigBytes = s.length * 4;
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
          toString: function(s) {
            return (s || D).stringify(this);
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
          concat: function(s) {
            var d = this.words, u = s.words, g = this.sigBytes, w = s.sigBytes;
            if (this.clamp(), g % 4)
              for (var x = 0; x < w; x++) {
                var L = u[x >>> 2] >>> 24 - x % 4 * 8 & 255;
                d[g + x >>> 2] |= L << 24 - (g + x) % 4 * 8;
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
            var s = this.words, d = this.sigBytes;
            s[d >>> 2] &= 4294967295 << 32 - d % 4 * 8, s.length = i.ceil(d / 4);
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
            var s = k.clone.call(this);
            return s.words = this.words.slice(0), s;
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
          random: function(s) {
            for (var d = [], u = 0; u < s; u += 4)
              d.push(y());
            return new S.init(d, s);
          }
        }), b = P.enc = {}, D = b.Hex = {
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
          stringify: function(s) {
            for (var d = s.words, u = s.sigBytes, g = [], w = 0; w < u; w++) {
              var x = d[w >>> 2] >>> 24 - w % 4 * 8 & 255;
              g.push((x >>> 4).toString(16)), g.push((x & 15).toString(16));
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
          parse: function(s) {
            for (var d = s.length, u = [], g = 0; g < d; g += 2)
              u[g >>> 3] |= parseInt(s.substr(g, 2), 16) << 24 - g % 8 * 4;
            return new S.init(u, d / 2);
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
          stringify: function(s) {
            for (var d = s.words, u = s.sigBytes, g = [], w = 0; w < u; w++) {
              var x = d[w >>> 2] >>> 24 - w % 4 * 8 & 255;
              g.push(String.fromCharCode(x));
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
          parse: function(s) {
            for (var d = s.length, u = [], g = 0; g < d; g++)
              u[g >>> 2] |= (s.charCodeAt(g) & 255) << 24 - g % 4 * 8;
            return new S.init(u, d);
          }
        }, m = b.Utf8 = {
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
          stringify: function(s) {
            try {
              return decodeURIComponent(escape(_.stringify(s)));
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
          parse: function(s) {
            return _.parse(unescape(encodeURIComponent(s)));
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
            this._data = new S.init(), this._nDataBytes = 0;
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
          _append: function(s) {
            typeof s == "string" && (s = m.parse(s)), this._data.concat(s), this._nDataBytes += s.sigBytes;
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
          _process: function(s) {
            var d, u = this._data, g = u.words, w = u.sigBytes, x = this.blockSize, L = x * 4, E = w / L;
            s ? E = i.ceil(E) : E = i.max((E | 0) - this._minBufferSize, 0);
            var R = E * x, H = i.min(R * 4, w);
            if (R) {
              for (var O = 0; O < R; O += x)
                this._doProcessBlock(g, O);
              d = g.splice(0, R), u.sigBytes -= H;
            }
            return new S.init(d, H);
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
            var s = k.clone.call(this);
            return s._data = this._data.clone(), s;
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
          init: function(s) {
            this.cfg = this.cfg.extend(s), this.reset();
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
          update: function(s) {
            return this._append(s), this._process(), this;
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
          finalize: function(s) {
            s && this._append(s);
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
          _createHelper: function(s) {
            return function(d, u) {
              return new s.init(u).finalize(d);
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
          _createHmacHelper: function(s) {
            return function(d, u) {
              return new B.HMAC.init(s, u).finalize(d);
            };
          }
        });
        var B = P.algo = {};
        return P;
      }(Math);
      return t;
    });
  }(G)), G.exports;
}
(function(v, e) {
  (function(t, i) {
    v.exports = i(dt());
  })(I, function(t) {
    return function(i) {
      var r = t, f = r.lib, y = f.WordArray, C = f.Hasher, P = r.algo, l = [];
      (function() {
        for (var m = 0; m < 64; m++)
          l[m] = i.abs(i.sin(m + 1)) * 4294967296 | 0;
      })();
      var k = P.MD5 = C.extend({
        _doReset: function() {
          this._hash = new y.init([
            1732584193,
            4023233417,
            2562383102,
            271733878
          ]);
        },
        _doProcessBlock: function(m, p) {
          for (var B = 0; B < 16; B++) {
            var s = p + B, d = m[s];
            m[s] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360;
          }
          var u = this._hash.words, g = m[p + 0], w = m[p + 1], x = m[p + 2], L = m[p + 3], E = m[p + 4], R = m[p + 5], H = m[p + 6], O = m[p + 7], Y = m[p + 8], M = m[p + 9], j = m[p + 10], X = m[p + 11], A = m[p + 12], q = m[p + 13], z = m[p + 14], F = m[p + 15], a = u[0], o = u[1], h = u[2], c = u[3];
          a = S(a, o, h, c, g, 7, l[0]), c = S(c, a, o, h, w, 12, l[1]), h = S(h, c, a, o, x, 17, l[2]), o = S(o, h, c, a, L, 22, l[3]), a = S(a, o, h, c, E, 7, l[4]), c = S(c, a, o, h, R, 12, l[5]), h = S(h, c, a, o, H, 17, l[6]), o = S(o, h, c, a, O, 22, l[7]), a = S(a, o, h, c, Y, 7, l[8]), c = S(c, a, o, h, M, 12, l[9]), h = S(h, c, a, o, j, 17, l[10]), o = S(o, h, c, a, X, 22, l[11]), a = S(a, o, h, c, A, 7, l[12]), c = S(c, a, o, h, q, 12, l[13]), h = S(h, c, a, o, z, 17, l[14]), o = S(o, h, c, a, F, 22, l[15]), a = b(a, o, h, c, w, 5, l[16]), c = b(c, a, o, h, H, 9, l[17]), h = b(h, c, a, o, X, 14, l[18]), o = b(o, h, c, a, g, 20, l[19]), a = b(a, o, h, c, R, 5, l[20]), c = b(c, a, o, h, j, 9, l[21]), h = b(h, c, a, o, F, 14, l[22]), o = b(o, h, c, a, E, 20, l[23]), a = b(a, o, h, c, M, 5, l[24]), c = b(c, a, o, h, z, 9, l[25]), h = b(h, c, a, o, L, 14, l[26]), o = b(o, h, c, a, Y, 20, l[27]), a = b(a, o, h, c, q, 5, l[28]), c = b(c, a, o, h, x, 9, l[29]), h = b(h, c, a, o, O, 14, l[30]), o = b(o, h, c, a, A, 20, l[31]), a = D(a, o, h, c, R, 4, l[32]), c = D(c, a, o, h, Y, 11, l[33]), h = D(h, c, a, o, X, 16, l[34]), o = D(o, h, c, a, z, 23, l[35]), a = D(a, o, h, c, w, 4, l[36]), c = D(c, a, o, h, E, 11, l[37]), h = D(h, c, a, o, O, 16, l[38]), o = D(o, h, c, a, j, 23, l[39]), a = D(a, o, h, c, q, 4, l[40]), c = D(c, a, o, h, g, 11, l[41]), h = D(h, c, a, o, L, 16, l[42]), o = D(o, h, c, a, H, 23, l[43]), a = D(a, o, h, c, M, 4, l[44]), c = D(c, a, o, h, A, 11, l[45]), h = D(h, c, a, o, F, 16, l[46]), o = D(o, h, c, a, x, 23, l[47]), a = _(a, o, h, c, g, 6, l[48]), c = _(c, a, o, h, O, 10, l[49]), h = _(h, c, a, o, z, 15, l[50]), o = _(o, h, c, a, R, 21, l[51]), a = _(a, o, h, c, A, 6, l[52]), c = _(c, a, o, h, L, 10, l[53]), h = _(h, c, a, o, j, 15, l[54]), o = _(o, h, c, a, w, 21, l[55]), a = _(a, o, h, c, Y, 6, l[56]), c = _(c, a, o, h, F, 10, l[57]), h = _(h, c, a, o, H, 15, l[58]), o = _(o, h, c, a, q, 21, l[59]), a = _(a, o, h, c, E, 6, l[60]), c = _(c, a, o, h, X, 10, l[61]), h = _(h, c, a, o, x, 15, l[62]), o = _(o, h, c, a, M, 21, l[63]), u[0] = u[0] + a | 0, u[1] = u[1] + o | 0, u[2] = u[2] + h | 0, u[3] = u[3] + c | 0;
        },
        _doFinalize: function() {
          var m = this._data, p = m.words, B = this._nDataBytes * 8, s = m.sigBytes * 8;
          p[s >>> 5] |= 128 << 24 - s % 32;
          var d = i.floor(B / 4294967296), u = B;
          p[(s + 64 >>> 9 << 4) + 15] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, p[(s + 64 >>> 9 << 4) + 14] = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360, m.sigBytes = (p.length + 1) * 4, this._process();
          for (var g = this._hash, w = g.words, x = 0; x < 4; x++) {
            var L = w[x];
            w[x] = (L << 8 | L >>> 24) & 16711935 | (L << 24 | L >>> 8) & 4278255360;
          }
          return g;
        },
        clone: function() {
          var m = C.clone.call(this);
          return m._hash = this._hash.clone(), m;
        }
      });
      function S(m, p, B, s, d, u, g) {
        var w = m + (p & B | ~p & s) + d + g;
        return (w << u | w >>> 32 - u) + p;
      }
      function b(m, p, B, s, d, u, g) {
        var w = m + (p & s | B & ~s) + d + g;
        return (w << u | w >>> 32 - u) + p;
      }
      function D(m, p, B, s, d, u, g) {
        var w = m + (p ^ B ^ s) + d + g;
        return (w << u | w >>> 32 - u) + p;
      }
      function _(m, p, B, s, d, u, g) {
        var w = m + (B ^ (p | ~s)) + d + g;
        return (w << u | w >>> 32 - u) + p;
      }
      r.MD5 = C._createHelper(k), r.HmacMD5 = C._createHmacHelper(k);
    }(Math), t.MD5;
  });
})(Q);
var ut = Q.exports;
const ft = /* @__PURE__ */ nt(ut);
function W(v) {
  return v * 20 + 12;
}
class mt {
  constructor() {
    n(this, "dotHeight", 6);
    n(this, "dotWidth", 8);
    n(this, "remoteOnly", !1);
    n(this, "avatars", [this.avatar_gravatar]);
  }
  avatar_gravatar(e) {
    return "https://www.gravatar.com/avatar/" + ft(e.toLowerCase()) + "?s=20&d=mm";
  }
}
class V {
  // optional
  constructor(e, t, i) {
    n(this, "image");
    this.name = e, this.email = t, this.date = i;
  }
}
class J {
  constructor(e, t) {
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
    this.container = e, this.data = t, this.data.obj = this, t.inHeads == null && (t.inHeads = []), t.parenthashes == null && (t.parenthashes = []), t.refnames == null && (t.refnames = []), this.sha = t.sha, this.ssha = t.ssha, this.subject = t.subject, this.indexY = e.maxIndexY++, this.committer = new V(this.data.committername, this.data.committeremail, new Date(this.data.committerdate * 1e3)), this.author = new V(this.data.authorname, this.data.authoremail, new Date(this.data.authordate * 1e3));
  }
  getShortSha() {
    return this.ssha;
  }
  getFullSha() {
    return this.sha;
  }
  initRelations() {
    var e = this;
    this.data.parenthashes.forEach((t) => {
      var i = this.container.commits[t];
      if (i == null && (i = new J(this.container, { sha: t + Math.random() }), i.outOfScope = !0, e.container.addCommit(i)), this.parents.push(i), i.childs.push(this), this.siblings = i.childs, this.parents.length > 0) {
        var r = this.parents[0];
        this.directparent = r, r.directchild = this;
      }
    }), this.data.inHeads.forEach((t) => {
      var i = this.container.commits[t];
      this.inHeadsRef.indexOf(i) === void 0 && this.inHeadsRef.push(i);
    });
  }
  initDefaultBranch() {
    for (var e = this; e != null; )
      (e.branch == null || e.branch.specifity > this.branch.specifity) && (e.branch = this.branch), e.branch.start = e, e.branch.origin = e.directparent, e = e.directparent;
  }
  initHeadSpecifity() {
    for (var e = 0; e < this.data.refnames.length; e++) {
      var t = this.data.refnames[e];
      if (!this.container.config.remoteOnly || t.indexOf("origin/") == 0) {
        this.container.config.remoteOnly && (t = t.replace(/^origin./, ""));
        var i = t.replace(/[^\/-]/g, "").length * 1e3;
        i += t.replace(/[^a-zA-Z0-9-]/, "").length, this.container.addBranch(t, this, i), (this.maxSpecifity == null || i < this.maxSpecifity) && (console.debug("assigning branch", t, this.sha, this.maxSpecifity, i), this.maxSpecifity = i, this.branch = this.container.headsMap[t]), this.initDefaultBranch();
      }
    }
  }
  initMerges() {
    if (this.merges = { standard: [], anonymous: [] }, this.warnings = [], this.parents.length == 1) {
      var e = this.parents[0];
      this.directparent = e, e.directchild = this;
    }
    if (this.parents.length >= 2) {
      var e = this.parents[0];
      this.directparent = e, e.directchild = this;
      for (var t = 1; t < this.parents.length; t++) {
        var i = this.parents[t];
        i != null && (i.data.refnames.length > 0 || i.inHeadsRef.length != e.inHeadsRef.length ? this.merges.standard.push({ source: i }) : (this.merges.anonymous.push({ source: i }), this.initAnonymous()));
      }
    }
  }
  initAnonymous() {
    this.merges.anonymous.forEach((e) => {
      for (var t = e.source, i = this; i != null && i.branch == null; )
        i = i.directchild;
      i != null && t.branch == null && (t.branch = new K(i.branch.ref + "/anonymous" + t.sha + Math.random(), t, i.branch.specifity + 1), t.branch.anonymous = !0, t.branch.parent = i.branch, t.branch.start = i, t.branch.category = i.branch.category, this.container.headsMap[t.branch.ref] = t.branch);
    });
  }
  getColor(e) {
    if (this.branch == null)
      this.warn("No Branch set");
    else {
      var t = this.branch;
      this.branch.anonymous && (t = this.branch.parent);
      var i = t.lane * 300 / this.container.maxX;
      return "hsl(" + i + ", 100%, " + e + "%)";
    }
  }
  hasMerges() {
    return this.merges.standard.length > 0 || this.merges.anonymous.length > 0;
  }
  getX() {
    return W(this.getLane());
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
      var e = this.branch.commit.indexY;
      return this.branch.commit.childs.forEach((t) => {
        e = Math.min(e, t.indexY);
      }), e;
    }
    return 0;
  }
  /** does this branch intersect with another when drawn next to each other. 
      can this branch be displayed on the same X axis without overlapping? */
  intersects(e) {
    return this.outOfScope || e.outOfScope ? !0 : this.getOriginIndexY() > e.getTipPlusIndexY() && this.getTipPlusIndexY() < e.getOriginIndexY();
  }
  getIndexY() {
    return this.indexY;
  }
  warn(e) {
    this.warnings.push(e), this.debug(e);
  }
  debug(e) {
    console && console.debug(e, this);
  }
  getLane() {
    return this.branch != null ? this.branch.commit.branch.lane : null;
  }
}
class Z {
  constructor(e, t) {
    n(this, "element");
    // jsgl element
    n(this, "renderedTo");
    // jsgl canvas (any html)
    n(this, "canvas");
    n(this, "dependencies", []);
    this.canvas = e, this.element = t;
  }
  addIfMissing() {
    this.element !== void 0 && this.renderedTo == null && (this.addElements(), this.renderedTo = this.canvas);
  }
  addElements() {
    this.canvas.addElement(this.element);
  }
  update() {
    this.dependencies.forEach((e) => {
      e.update();
    });
  }
  dependsOn(e) {
    e.dependencies.push(this);
  }
}
class N extends Z {
  constructor(t, i) {
    super(t, i);
    n(this, "parentDot");
    n(this, "childDot");
    n(this, "lineColor");
  }
  from(t) {
    return this.dependsOn(t), this.parentDot = t, this;
  }
  to(t) {
    return this.childDot = t, this;
  }
  color(t) {
    return this.element.getStroke().setWeight(1), this.element.getStroke().setColor(t), this.lineColor = t, this.addIfMissing(), this;
  }
}
class pt extends N {
  constructor(t) {
    super(t, t.createLine());
    n(this, "secondLine");
    this.secondLine = t.createLine();
  }
  addElements() {
    super.addElements(), this.canvas.addElement(this.secondLine);
  }
  update() {
    super.update(), this.parentDot.x < this.childDot.x ? this.element.setStartPointXY(this.parentDot.x + this.parentDot.width / 2, this.parentDot.y) : this.element.setStartPointXY(this.parentDot.x - this.parentDot.width / 2, this.parentDot.y), this.element.setEndPointXY(this.childDot.x, this.parentDot.y), this.element.getStroke().setWeight(1), this.element.getStroke().setDashStyle(jsgl.DashStyles.DASH), this.element.getStroke().setColor(this.lineColor), this.secondLine.setStartPointXY(this.childDot.x, this.parentDot.y), this.secondLine.setEndPointXY(this.childDot.x, this.childDot.y + this.childDot.height / 2), this.secondLine.getStroke().setWeight(1), this.secondLine.getStroke().setColor(this.lineColor);
  }
}
class gt extends N {
  constructor(t) {
    super(t, t.createCurve());
    n(this, "arrow");
    this.arrow = this.canvas.createPolygon();
  }
  addElements() {
    super.addElements(), this.canvas.addElement(this.arrow);
  }
  update() {
    var t = this.childDot.x, i = this.childDot.y, r = this.parentDot.x, f = this.parentDot.y, y = this.lineColor, C = t < r ? 1 : -1;
    this.element.setStartPointXY(r, f - this.parentDot.height / 2), this.element.setEndPointXY(t + this.childDot.width / 2 * C, i), this.element.setControl2PointXY(r, i), this.element.setControl1PointXY(r, i), this.element.getStroke().setWeight(1), this.element.getStroke().setColor(y), this.arrow.getStroke().setWeight(0), this.arrow.getFill().setColor(y), this.arrow.clearPoints(), this.arrow.addPointXY(0, 0), this.arrow.addPointXY(6, -4), this.arrow.addPointXY(6, 4);
    for (var P = 0; P < this.arrow.getPointsCount(); P++) {
      var l = this.arrow.getPointAt(P).X, k = this.arrow.getPointAt(P).Y;
      this.arrow.setPointXYAt(l * C + t + this.childDot.width / 2 * C, k + i, P);
    }
  }
}
class vt extends Z {
  constructor(t) {
    super(t, t.createRectangle());
    n(this, "x");
    n(this, "y");
    n(this, "width");
    n(this, "height");
  }
  size(t, i) {
    return this.width = t, this.height = i, this.element.setWidth(t), this.element.setHeight(i), this.element.setXRadius(t / 4), this.element.setYRadius(t / 4), this.update(), this.addIfMissing(), this;
  }
  at(t, i) {
    return this.x = t, this.y = i, this.update(), this.addIfMissing(), this;
  }
  color(t, i) {
    return this.element.getStroke().setWeight(1), this.element.getStroke().setColor(t), this.element.getFill().setColor(i), this;
  }
  update() {
    this.element.setLocationXY(this.x - this.width / 2, this.y - this.height / 2), super.update();
  }
}
class wt extends N {
  constructor(e) {
    super(e, e.createLine());
  }
  update() {
    super.update(), this.element.setStartPointXY(this.parentDot.x, this.parentDot.y - this.parentDot.height / 2), this.element.setEndPointXY(this.childDot.x, this.childDot.y + this.childDot.height / 2);
  }
}
class yt {
  constructor(e, t, i) {
    n(this, "commit");
    n(this, "label");
    n(this, "canvas");
    // jsgl
    n(this, "config");
    n(this, "dot");
    n(this, "lines", []);
    this.canvas = e, this.config = t, this.commit = i, this.dot = new vt(this.canvas);
  }
  addRelations() {
    if (this.commit.directparent != null) {
      var e;
      this.commit.getLane() == this.commit.directparent.getLane() || this.commit.directparent.outOfScope ? e = new wt(this.canvas).from(this.commit.directparent.view.dot).to(this.dot).color(this.commit.getColor(20)) : e = new pt(this.canvas).from(this.commit.directparent.view.dot).to(this.dot).color(this.commit.getColor(30)), this.lines.push(e);
    }
    var t = this.commit.merges.standard.concat(this.commit.merges.anonymous);
    t.forEach((i) => {
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
  static extend(e) {
    var t = e;
    return e.classList.add("gitline-expandable"), t.whenFull = (i) => {
      t.onclick = () => {
        t.innerHTML = i, e.classList.add("gitline-expandable-expanded"), T.selectElementText(e);
      };
    }, t.whenShort = (i) => {
      t.innerHTML = i, t.onmouseout = () => {
        window.setTimeout(() => {
          t.innerHTML = i, e.classList.remove("gitline-expandable-expanded");
        }, 1e3);
      };
    }, t;
  }
  // x-browser text select
  // http://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse
  static selectElementText(e) {
    var t = window.document, i, r;
    window.getSelection && t.createRange ? (i = window.getSelection(), r = t.createRange(), r.selectNodeContents(e), i.removeAllRanges(), i.addRange(r)) : t.body.createTextRange && (r = t.body.createTextRange(), r.moveToElementText(e), r.select());
  }
}
class tt {
  constructor(e) {
    n(this, "url");
    n(this, "callback");
    n(this, "errorCallback");
    this.url = e;
  }
  whenDone(e) {
    this.callback(e);
  }
  withErrorCallback(e) {
    this.errorCallback = e;
  }
  withCallback(e) {
    this.callback = e;
  }
  /** this method should be overwritten. it must call whenDone(data) when all data was loaded. */
  onRequested(e) {
    throw new Error("onRequested not implemented on " + this);
  }
  request() {
    this.onRequested(this.url);
  }
  error(e) {
    this.errorCallback(e);
  }
}
class bt extends tt {
  constructor(t, i, r) {
    super(t);
    n(this, "forks", []);
    n(this, "baseBranches", []);
    n(this, "data", {});
    n(this, "limit");
    n(this, "accessToken");
    n(this, "fetchGithubJson", (t) => fetch(t, {
      headers: {
        ...this.accessToken && { Authorization: `token ${this.accessToken}` },
        Accept: "application/vnd.github.v3+json"
      }
    }).then((i) => {
      if (i.ok)
        return i.json();
      throw new Error("Response wasn't OK when fetching JSON");
    }));
    this.accessToken = r, this.limit = i;
  }
  gitURL(t, i, r = "") {
    return t.indexOf("api.github.com") == -1 && (t = t.replace(/.*github.com\//, "https://api.github.com/repos/")), t + "/" + i + "?per_page=" + this.limit + "&" + r;
  }
  onRequested(t) {
    this.loadForks(t);
  }
  loadForks(t) {
    this.fetchGithubJson(this.gitURL(t, "forks")).then((i) => {
      this.fetchGithubJson(this.gitURL(t, "branches")).then((r) => {
        this.processBranches(t, r), this.forks = i, this.loadBranches();
      });
    }).catch((i) => {
      this.error("Github API: " + i);
    });
  }
  processBranches(t, i) {
    i.forEach((r) => {
      r.repo = t.url !== void 0 ? t.url : t, t.full_name !== void 0 && (r.name = r.name + "@" + t.full_name), this.baseBranches.push(r);
    });
  }
  loadBranches() {
    var t = this.forks.map((i) => this.fetchGithubJson(this.gitURL(i.url, "branches")).then((r) => {
      console.debug("loaded branches for " + i.name), this.processBranches(i, r);
    }));
    Promise.all(t).then(() => {
      console.debug("all branches loaded"), this.loadCommits();
    });
  }
  loadCommits() {
    var t = [];
    this.baseBranches.forEach((i) => {
      var r = this.data[i.commit.sha];
      r == null && t.push(
        this.fetchGithubJson(this.gitURL(i.repo, "commits", "sha=" + i.commit.sha)).then((f) => {
          console.debug("loaded commits for " + i.name), this.processCommits(f);
        })
      );
    }), Promise.all(t).then(() => {
      this.process();
    });
  }
  processCommits(t) {
    t.map((i) => {
      var r = {};
      return r.sha = i.sha, r.ssha = i.sha.substring(0, 8), r.parenthashes = i.parents.map((f) => f.sha), r.authorname = i.commit.author.name, r.authoremail = i.commit.author.email, r.authordate = new Date(i.commit.author.date).valueOf() / 1e3, r.authortimestamp = new Date(i.commit.author.date).valueOf(), r.committername = i.commit.committer.name, r.committeremail = i.commit.committer.email, r.committerdate = new Date(i.commit.committer.date).valueOf() / 1e3, r.committertimestamp = new Date(i.commit.committer.date).valueOf(), r.subject = i.commit.message, r.body = "", r.refnames = [], r.inHeads = [], r;
    }).forEach((i) => {
      this.data[i.sha] = i;
    });
  }
  process() {
    this.baseBranches.forEach((i) => {
      var r = this.data[i.commit.sha];
      r == null || (i.assigned = !0, r.refnames.push(i.name), this.assignHeads(r));
    });
    var t = {};
    Object.keys(this.data).sort((i, r) => this.data[r].committertimestamp - this.data[i].committertimestamp).forEach((i) => {
      t[i] = this.data[i];
    }), this.whenDone(t);
  }
  assignHeads(t) {
    for (t.parents1 = t.parenthashes.map((r) => r); t.parents1.length > 0; ) {
      var i = [];
      t.parents1.forEach((r) => {
        var f = this.data[r];
        f != null && (f.inHeads.push(t.sha), f.parenthashes.forEach((y) => {
          i.indexOf(y) === -1 && i.push(y);
        }));
      }), t.parents1 = i;
    }
  }
}
class xt extends tt {
  constructor() {
    super(...arguments);
    n(this, "onRequested", (t) => fetch(t, {
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
      this.error("Error loading git data from " + t + " create it using git2json");
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
  addCommit(e) {
    this.commits[e.getFullSha()] = e, this.firstCommit === void 0 && (this.firstCommit = e);
  }
  addBranch(e, t, i) {
    this.headsMap[e] = new K(e, t, i);
  }
  render() {
    this.canvas = new jsgl.Panel(this.graphicalPanel), this.al.thenSingle("Loading Data", () => new Promise((e, t) => {
      this.al.suspend(), this.commitProvider.withCallback((i) => {
        this.data = i, this.al.resume(), e(null);
      }), this.commitProvider.withErrorCallback((i) => {
        this.al.error(i), t(i);
      }), this.commitProvider.request();
    })).then(
      "Loading Commits",
      () => Object.keys(this.data),
      (e) => {
        var t = new J(this, this.data[e]);
        this.addCommit(t);
      }
    ).thenSingle("Building Graph", () => {
      this.buildGraph();
    }).then(
      "Drawing Labels",
      () => Object.keys(this.commits),
      (e) => {
        var t = this.commits[e];
        this.drawCommit(t);
      }
    ).thenSingle("Creating Legend", () => {
      this.rootLabel = document.createElement("div"), this.rootLabel.className = "commit-legend", this.textPanel.appendChild(this.rootLabel);
    }).then(
      "Drawing Merges",
      () => Object.keys(this.commits),
      (e) => {
        var t = this.commits[e];
        this.drawReferences(t);
      }
    ).thenSingle("Resizing", () => {
      this.graphicalPanel.style.width = W(this.maxX + 1) + "px", this.graphicalPanel.style.height = this.getHeight() + "px";
    }).start(), window.onresize = () => {
      this.al.then(
        "Redrawing",
        () => Object.keys(this.commits),
        (e) => {
          var t = this.commits[e];
          t.view.redraw();
        }
      ).thenSingle("Resizing", () => {
        this.graphicalPanel.style.width = W(this.maxX + 1) + "px", this.graphicalPanel.style.height = this.getHeight() + "px";
      }).start(!1);
    };
  }
  getHeight() {
    return this.rootLabel.offsetTop - this.firstCommit.view.label.offsetTop;
  }
  buildGraph() {
    var e = Object.keys(this.commits);
    e.forEach((t) => {
      var i = this.commits[t];
      i.initRelations();
    }), e.forEach((t) => {
      var i = this.commits[t];
      i.initHeadSpecifity(), i.initMerges();
    }), this.initBranches();
  }
  drawCommit(e) {
    e.view = new yt(this.canvas, this.config, e), e.outOfScope === !1 && (e.view.label = this.drawLabel(e), e.view.label.onclick = function() {
      console && console.debug(e);
    }, this.textPanel.appendChild(e.view.label), e.view.label.style["padding-left"] = W(this.maxX + 1) + "px");
  }
  drawReferences(e) {
    e.view.addRelations(), e.view.redraw();
  }
  drawLabel(e) {
    var t = document.createElement("gitline-legend"), i = e.getShortSha().trim(), r = e.getFullSha().trim(), f = T.extend(
      document.createElement("gitline-sha")
    );
    if (f.setAttribute("title", r), f.whenShort(i), f.whenFull(r), t.appendChild(f), t.appendChild(this.drawIdentity("author", e.author)), e.author.email != e.committer.email && t.appendChild(this.drawIdentity("committer", e.committer)), e.branch && e.branch.commit === e && !e.branch.anonymous) {
      var y = T.extend(
        document.createElement("gitline-ref")
      );
      y.style.backgroundColor = e.getColor(40), y.whenShort(e.branch.ref), y.whenFull(e.branch.ref), t.appendChild(y);
    }
    var C = document.createElement("gitline-subject");
    return C.innerHTML = e.subject, e.hasMerges() && C.classList.add("has-merges"), t.appendChild(C), t;
  }
  drawIdentity(e, t) {
    var i = document.createElement(
      "gitline-identity-container"
    ), r = T.extend(
      document.createElement("gitline-identity")
    );
    r.classList.add(e);
    var f = t.name + " &lt;" + t.email.toLowerCase() + "&gt;";
    r.setAttribute(
      "title",
      t.name + " <" + t.email.toLowerCase() + ">"
    ), r.style.background = this.config.avatars.map((P) => "url(" + P(t.email) + ") no-repeat left center").join(", "), r.whenFull(f), r.whenShort("");
    var y = T.extend(
      document.createElement("gitline-identity-datetime")
    );
    y.classList.add(e + "-datetime");
    var C = t.date.toISOString().slice(0, 16).replace("T", " ");
    return y.setAttribute("title", C), y.whenFull(C), y.whenShort(t.date.toISOString().slice(11, 16)), i.appendChild(r), i.appendChild(y), i;
  }
  /*
   Based on the specifity assign the branches to the commits. if in doubt the commit will be on the most specific branch
   */
  initBranches() {
    for (var e = Object.keys(this.headsMap), t = 0; t < e.length; t++) {
      var i = e[t], r = this.headsMap[i];
      r.commit.initDefaultBranch();
    }
    var f = this;
    e.sort(function(D, _) {
      var m = f.headsMap[D].commit, p = f.headsMap[_].commit;
      return m === p ? 0 : m.branch.category === p.branch.category ? m.branch.specifity - p.branch.specifity : m.branch.category.length - p.branch.category.length;
    });
    for (var y = 0, t = 0; t < e.length; t++) {
      var i = e[t], r = this.headsMap[i], C = r.commit;
      if (C.branch === r) {
        r.lane = y, y++;
        for (var P = 0; P < e.length; P++) {
          for (var l = !0, k = 0; k < e.length; k++) {
            var S = e[k], b = this.headsMap[S].commit;
            (b === void 0 || b.branch != r && b.branch.lane === P && (C.intersects(b) || C.branch.category != b.branch.category)) && (l = !1);
          }
          if (l) {
            console.debug(
              "NO INTERSECTS: ",
              C.branch.ref,
              " - ",
              b.branch.ref
            ), r.lane = P;
            break;
          }
        }
        this.maxX = Math.max(this.maxX, r.lane);
      }
    }
  }
  // Launching
  fromJSON(e) {
    return this.fromProvider(new xt(e));
  }
  fromGitHub(e, t, i) {
    return this.fromProvider(new bt(e, t, i));
  }
  fromProvider(e) {
    return this.commitProvider = e, this;
  }
  renderTo(e) {
    return this.headerPanel !== void 0 && e.appendChild(this.headerPanel), e.appendChild(
      this.loadingPanel = document.createElement("gitline-loadingpanel")
    ), e.appendChild(
      this.contentPanel = document.createElement("gitline-contentpanel")
    ), this.contentPanel.appendChild(
      this.graphicalPanel = document.createElement("gitline-graphicalpanel")
    ), this.contentPanel.appendChild(
      this.textPanel = document.createElement("gitline-textpanel")
    ), this.al = new st(this.loadingPanel), this.render(), this;
  }
  withHeader(e) {
    return typeof e == "string" ? (this.headerPanel = document.createElement("gitline-headerpanel"), this.headerPanel.innerHTML = e) : this.headerPanel = e, this;
  }
}
export {
  et as default
};
