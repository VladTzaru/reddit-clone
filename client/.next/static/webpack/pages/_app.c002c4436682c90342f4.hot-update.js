webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@urql/core/dist/195f0a58.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@urql/core/dist/195f0a58.mjs ***!
  \***************************************************/
/*! exports provided: C, _, a, b, c, d, e, f, g, h, k, m, s */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return makeFetchBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return makeFetchURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return makeFetchOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return makeFetchSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return v; });
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");
/* harmony import */ var graphql_error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql/error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql/language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var graphql_language_parser_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql/language/parser.mjs */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql/language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
function k(a) {
  return "string" == typeof a ? new graphql_error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](a) : "object" == typeof a && a.message ? new graphql_error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](a.message, a.nodes, a.source, a.positions, a.path, a, a.extensions || {}) : a;
}

function l() {
  return this.message;
}

function n(a, b) {
  a |= 0;
  for (var c = 0, d = 0 | b.length; c < d; c++) {
    a = (a << 5) + a + b.charCodeAt(c);
  }
  return a;
}

function t(a) {
  var b, c, d, e, f, g;
  if (null === a || q.has(a)) {
    return "null";
  }
  if ("object" != typeof a) {
    return JSON.stringify(a) || "";
  }
  if (a.toJSON) {
    return t(a.toJSON());
  }
  if (Array.isArray(a)) {
    for (b = "[", c = 0, d = a.length; c < d; c++) {
      0 < c && (b += ",");
      b += 0 < (e = t(a[c])).length ? e : "null";
    }
    return b + "]";
  }
  if (!(b = Object.keys(a).sort()).length && a.constructor && a.constructor !== Object) {
    return b = r.get(a) || Math.random().toString(36).slice(2), r.set(a, b), '{"__key":"' + b + '"}';
  }
  q.add(a);
  c = "{";
  d = 0;
  for (e = b.length; d < e; d++) {
    (g = t(a[f = b[d]])) && (1 < c.length && (c += ","), c += t(f) + ":" + g);
  }
  q.delete(a);
  return c + "}";
}

function u(a) {
  q.clear();
  return t(a);
}

function v(a) {
  var b = ("string" != typeof a ? a.loc && a.loc.source.body || Object(graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__["print"])(a) : a).replace(/([\s,]|#[^\n\r]+)+/g, " ").trim();
  "string" == typeof a || a.loc || (a.loc = {
    start: 0,
    end: b.length,
    source: {
      body: b,
      name: "gql",
      locationOffset: {
        line: 1,
        column: 1
      }
    }
  });
  return b;
}

function x(a) {
  if ("string" == typeof a) {
    var b = n(5381, v(a)) >>> 0;
    a = w.get(b) || Object(graphql_language_parser_mjs__WEBPACK_IMPORTED_MODULE_3__["parse"])(a, {
      noLocation: !0
    });
  } else {
    b = a.__key || n(5381, v(a)) >>> 0, a = w.get(b) || a;
  }
  a.loc || v(a);
  a.__key = b;
  w.set(b, a);
  return a;
}

function y(a) {
  var b, c, d;
  for (b = 0, c = a.definitions.length; b < c; b++) {
    if ((d = a.definitions[b]).kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_2__["Kind"].OPERATION_DEFINITION && d.name) {
      return d.name.value;
    }
  }
}

function z(a, b, c) {
  return {
    operation: a,
    data: b.data,
    error: Array.isArray(b.errors) ? new m({
      graphQLErrors: b.errors,
      response: c
    }) : void 0,
    extensions: "object" == typeof b.extensions && b.extensions || void 0
  };
}

function A(a, b, c) {
  return {
    operation: a,
    data: void 0,
    error: new m({
      networkError: b,
      response: c
    }),
    extensions: void 0
  };
}

function B() {
  return (B = Object.assign || function(a) {
    var b, c, d;
    for (b = 1; b < arguments.length; b++) {
      c = arguments[b];
      for (d in c) {
        Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
      }
    }
    return a;
  }).apply(this, arguments);
}

function makeFetchBody(a) {
  return {
    query: Object(graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__["print"])(a.query),
    operationName: y(a.query),
    variables: a.variables || void 0,
    extensions: void 0
  };
}

function makeFetchURL(a, b) {
  var c = a.context.url;
  if ("query" !== a.kind || !a.context.preferGetMethod || !b) {
    return c;
  }
  a = [];
  b.operationName && a.push("operationName=" + encodeURIComponent(b.operationName));
  b.query && a.push("query=" + encodeURIComponent(b.query.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim()));
  b.variables && a.push("variables=" + encodeURIComponent(u(b.variables)));
  b.extensions && a.push("extensions=" + encodeURIComponent(u(b.extensions)));
  return c + "?" + a.join("&");
}

function makeFetchOptions(a, b) {
  var c = "query" === a.kind && !!a.context.preferGetMethod;
  return B({}, a = "function" == typeof a.context.fetchOptions ? a.context.fetchOptions() : a.context.fetchOptions || {}, {
    body: !c && b ? JSON.stringify(b) : void 0,
    method: c ? "GET" : "POST",
    headers: c ? a.headers : B({}, {
      "content-type": "application/json"
    }, a.headers)
  });
}

function makeFetchSource(a, b, c) {
  return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["make"])((function(d) {
    var e = d.next, f = d.complete, g = "undefined" != typeof AbortController ? new AbortController : null, p = !1;
    Promise.resolve().then((function() {
      if (!p) {
        return g && (c.signal = g.signal), function C(a, b, c) {
          var e, d = !1;
          return (a.context.fetch || fetch)(b, c).then((function(a) {
            e = a;
            d = 200 > a.status || a.status >= ("manual" === c.redirect ? 400 : 300);
            return a.json();
          })).then((function(b) {
            if (!("data" in b) && !("errors" in b)) {
              throw Error("No Content");
            }
            return z(a, b, e);
          })).catch((function(b) {
            if ("AbortError" !== b.name) {
              return A(a, d ? Error(e.statusText) : b, e);
            }
          }));
        }(a, b, c);
      }
    })).then((function(a) {
      p || (p = !0, a && e(a), f());
    }));
    return function() {
      p = !0;
      g && g.abort();
    };
  }));
}

function createRequest(a, b) {
  a = x(a);
  return {
    key: b ? n(a.__key, u(b)) >>> 0 : a.__key,
    query: a,
    variables: b || {}
  };
}

var m, q, r, w;











m = function(a) {
  function b(b) {
    var f, c = b.networkError, e = b.response;
    f = function h(a, b) {
      var d = "";
      if (void 0 !== a) {
        return d = "[Network] " + a.message;
      }
      void 0 !== b && b.forEach((function c(a) {
        d += "[GraphQL] " + a.message + "\n";
      }));
      return d.trim();
    }(c, b = (b.graphQLErrors || []).map(k));
    a.call(this, f);
    this.name = "CombinedError";
    this.message = f;
    this.graphQLErrors = b;
    this.networkError = c;
    this.response = e;
  }
  a && (b.__proto__ = a);
  (b.prototype = Object.create(a && a.prototype)).constructor = b;
  b.prototype.toString = l;
  return b;
}(Error);

q = new Set, r = new WeakMap;

w = new Map;


//# sourceMappingURL=195f0a58.mjs.map


/***/ }),

/***/ "./node_modules/@urql/core/dist/urql-core.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@urql/core/dist/urql-core.mjs ***!
  \****************************************************/
/*! exports provided: CombinedError, createRequest, getOperationName, makeErrorResult, makeResult, stringifyVariables, Client, cacheExchange, composeExchanges, createClient, debugExchange, dedupExchange, defaultExchanges, errorExchange, fallbackExchangeIO, fetchExchange, formatDocument, gql, makeOperation, maskTypename, ssrExchange, subscriptionExchange */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheExchange", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeExchanges", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClient", function() { return createClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debugExchange", function() { return debugExchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dedupExchange", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultExchanges", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorExchange", function() { return errorExchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackExchangeIO", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchExchange", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDocument", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return gql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeOperation", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskTypename", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrExchange", function() { return ssrExchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriptionExchange", function() { return subscriptionExchange; });
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");
/* harmony import */ var _195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./195f0a58.mjs */ "./node_modules/@urql/core/dist/195f0a58.mjs");
/* harmony import */ var graphql_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql/language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql/language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql/language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CombinedError", function() { return _195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRequest", function() { return _195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return _195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeErrorResult", function() { return _195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeResult", function() { return _195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringifyVariables", function() { return _195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["g"]; });

function n(a, b) {
  if (Array.isArray(a)) {
    for (var c = 0; c < a.length; c++) {
      n(a[c], b);
    }
  } else if ("object" == typeof a && null !== a) {
    for (c in a) {
      "__typename" === c && "string" == typeof a[c] ? b[a[c]] = 0 : n(a[c], b);
    }
  }
  return b;
}

function p(a) {
  return a.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FIELD && "__typename" === a.name.value && !a.alias;
}

function r(a) {
  if (a.selectionSet && !a.selectionSet.selections.some(p)) {
    return Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, a, {
      selectionSet: Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, a.selectionSet, {
        selections: a.selectionSet.selections.concat([ {
          kind: graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FIELD,
          name: {
            kind: graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].NAME,
            value: "__typename"
          }
        } ])
      })
    });
  }
}

function u(a) {
  a = Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["k"])(a);
  var b = t.get(a.__key);
  b || ((b = Object(graphql_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__["visit"])(a, {
    Field: r,
    InlineFragment: r
  })).__key = a.__key, t.set(a.__key, b));
  return b;
}

function v(a) {
  return a && "object" == typeof a ? Object.keys(a).reduce((function(b, c) {
    var d = a[c];
    "__typename" === c ? Object.defineProperty(b, "__typename", {
      enumerable: !1,
      value: d
    }) : Array.isArray(d) ? b[c] = d.map(v) : b[c] = d && "object" == typeof d && "__typename" in d ? v(d) : d;
    return b;
  }), {}) : a;
}

function w(a) {
  a.toPromise = function() {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["toPromise"])(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["take"])(1)(a));
  };
  return a;
}

function z(a, b, c) {
  c || (c = b.context);
  return {
    key: b.key,
    query: b.query,
    variables: b.variables,
    kind: a,
    context: c,
    get operationName() {
      if (true) {
        var a = y_operationName, c = a.key;
        a = a.message;
        x[c] || (console.warn("[WARNING: Deprecated] " + a), x[c] = !0);
      }
      return this.kind;
    }
  };
}

function A(a, b) {
  return z(a.kind, a, Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, a.context, {
    meta: Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, a.context.meta, b)
  }));
}

function B() {}

function C(a, b, c) {
  var d, e, f;
  for (d = 0; d < c.length; d++) {
    if (c[d].kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FRAGMENT_DEFINITION) {
      e = c[d].name.value, f = Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["s"])(c[d]);
      a.has(e) ?  true && a.get(e) !== f && console.warn("[WARNING: Duplicate Fragment] A fragment with name `" + e + "` already exists in this document.\nWhile fragment names may not be unique across your source, each name must be unique per document.") : (a.set(e, f), 
      b.push(c[d]));
    } else {
      b.push(c[d]);
    }
  }
}

function D(a) {
  return "subscription" !== (a = a.kind) && "query" !== a;
}

function E(a) {
  return a.path || a.extensions ? {
    message: a.message,
    path: a.path,
    extensions: a.extensions
  } : a.message;
}

function F(a) {
  return "mutation" !== (a = a.kind) && "query" !== a;
}

function G(a) {
  var b = z(a.kind, a);
  b.query = u(a.query);
  return b;
}

function H(a) {
  return "query" !== a.kind || "cache-only" !== a.context.requestPolicy;
}

function I(a) {
  return A(a, {
    cacheOutcome: "miss"
  });
}

function J(a) {
  return F(a);
}

function K(a) {
  function b(a) {
    var b = a.context.requestPolicy;
    return "query" === a.kind && "network-only" !== b && ("cache-only" === b || k.has(a.key));
  }
  function c(a) {
    var c = k.get(a.key);
     true && q(Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, {
      operation: a
    }, c ? {
      type: "cacheHit",
      message: "The result was successfully retried from the cache"
    } : {
      type: "cacheMiss",
      message: "The result could not be retrieved from the cache"
    }));
    c = Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, c, {
      operation: A(a, {
        cacheOutcome: c ? "hit" : "miss"
      })
    });
    "cache-and-network" === a.context.requestPolicy && (c.stale = !0, L(m, a));
    return c;
  }
  function d(a) {
    return !F(a) && b(a);
  }
  function e(a) {
    function c(a) {
      l.add(a);
    }
    var e, l, g, d = a.operation;
    if (d) {
      e = Object.keys(n(a.data, {})).concat(d.context.additionalTypenames || []);
      if ("mutation" === a.operation.kind) {
        l = new Set;
         true && q({
          type: "cacheInvalidation",
          message: "The following typenames have been invalidated: " + e,
          operation: d,
          data: {
            typenames: e,
            response: a
          },
          source: "cacheExchange"
        });
        for (a = 0; a < e.length; a++) {
          (g = h[g = e[a]] || (h[g] = new Set)).forEach(c);
          g.clear();
        }
        l.forEach((function b(a) {
          k.has(a) && (d = k.get(a).operation, k.delete(a), L(m, d));
        }));
      } else if ("query" === d.kind && a.data) {
        for (k.set(d.key, a), a = 0; a < e.length; a++) {
          (h[g = e[a]] || (h[g] = new Set)).add(d.key);
        }
      }
    }
  }
  function f(a) {
    return !F(a) && !b(a);
  }
  var g = a.forward, m = a.client, q = a.dispatchDebug, k = new Map, h = Object.create(null);
  return function(a) {
    var b = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["share"])(a);
    a = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["map"])(c)(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(d)(b));
    b = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(e)(g(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(H)(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["map"])(I)(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["merge"])([ Object(wonka__WEBPACK_IMPORTED_MODULE_0__["map"])(G)(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(f)(b)), Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(J)(b) ])))));
    return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["merge"])([ a, b ]);
  };
}

function L(a, b) {
  return a.reexecuteOperation(z(b.kind, b, Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, b.context, {
    requestPolicy: "network-only"
  })));
}

function M(a) {
  return console.log("[Exchange debug]: Completed operation: ", a);
}

function N(a) {
  return console.log("[Exchange debug]: Incoming operation: ", a);
}

function O(a) {
  function b(a) {
    f.delete(a.operation.key);
  }
  function c(a) {
    var c = a.key, b = a.kind;
    if ("teardown" === b) {
      return f.delete(c), !0;
    }
    if ("query" !== b && "subscription" !== b) {
      return !0;
    }
    b = f.has(c);
    f.add(c);
    b && "production" !== "development" && e({
      type: "dedup",
      message: "An operation has been deduped.",
      operation: a,
      source: "dedupExchange"
    });
    return !b;
  }
  var d = a.forward, e = a.dispatchDebug, f = new Set;
  return function(a) {
    a = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(c)(a);
    return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(b)(d(a));
  };
}

function P(a) {
  return "query" === a.kind || "mutation" === a.kind;
}

function Q(a) {
  return "query" !== a.kind && "mutation" !== a.kind;
}

function R(a) {
  var b = a.forward, c = a.dispatchDebug;
  return function(a) {
    var f, d = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["share"])(a);
    a = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((function(a) {
      var b = a.key, e = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])((function(a) {
        return "teardown" === a.kind && a.key === b;
      }))(d), f = Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["b"])(a), h = Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["c"])(a, f), l = Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["d"])(a, f);
       true && c({
        type: "fetchRequest",
        message: "A fetch request is being executed.",
        operation: a,
        data: {
          url: h,
          fetchOptions: l
        },
        source: "fetchExchange"
      });
      return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["onPush"])((function(b) {
        var d = b.data ? void 0 : b.error;
         true && c({
          type: d ? "fetchError" : "fetchSuccess",
          message: "A " + (d ? "failed" : "successful") + " fetch response has been returned.",
          operation: a,
          data: {
            url: h,
            fetchOptions: l,
            value: d || b
          },
          source: "fetchExchange"
        });
      }))(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(e)(Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["e"])(a, h, l)));
    }))(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(P)(d));
    f = b(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(Q)(d));
    return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["merge"])([ a, f ]);
  };
}

function S() {
  return !1;
}

function T(a) {
  function b(a) {
    if ("teardown" !== a.kind && "production" !== "development") {
      var b = 'No exchange has handled operations of kind "' + a.kind + "\". Check whether you've added an exchange responsible for these operations.";
       true && c({
        type: "fallbackCatch",
        message: b,
        operation: a,
        source: "fallbackExchange"
      });
      console.warn(b);
    }
  }
  var c = a.dispatchDebug;
  return function(a) {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(S)(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(b)(a));
  };
}

function V(a) {
  return function(b) {
    var c = b.client, d = b.dispatchDebug;
    return a.reduceRight((function(a, b) {
      return b({
        client: c,
        forward: a,
        dispatchDebug: function(a) {
           true && d(Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, {
            timestamp: Date.now(),
            source: b.name
          }, a));
        }
      });
    }), b.forward);
  };
}

function X(a) {
  var d, e, f, g, m, c = this;
  this.activeOperations = Object.create(null);
  this.queue = [];
  this.createOperationContext = function(a) {
    a || (a = {});
    return Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, {
      url: c.url,
      fetchOptions: c.fetchOptions,
      fetch: c.fetch,
      preferGetMethod: c.preferGetMethod
    }, a, {
      suspense: a.suspense || !1 !== a.suspense && c.suspense,
      requestPolicy: a.requestPolicy || c.requestPolicy
    });
  };
  this.createRequestOperation = function(a, b, d) {
    return z(a, b, c.createOperationContext(d));
  };
  this.executeQuery = function(a, b) {
    a = c.createRequestOperation("query", a, b);
    return c.executeRequestOperation(a);
  };
  this.executeSubscription = function(a, b) {
    a = c.createRequestOperation("subscription", a, b);
    return c.executeRequestOperation(a);
  };
  this.executeMutation = function(a, b) {
    a = c.createRequestOperation("mutation", a, b);
    return c.executeRequestOperation(a);
  };
  if ( true && !a.url) {
    throw Error("You are creating an urql-client without a url.");
  }
  d = B;
  if (true) {
    e = (d = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["makeSubject"])()).next, f = d.source;
    this.subscribeToDebugTarget = function b(a) {
      return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["subscribe"])(a)(f);
    };
    d = e;
  }
  this.url = a.url;
  this.fetchOptions = a.fetchOptions;
  this.fetch = a.fetch;
  this.suspense = !!a.suspense;
  this.requestPolicy = a.requestPolicy || "cache-first";
  this.preferGetMethod = !!a.preferGetMethod;
  this.maskTypename = !!a.maskTypename;
  e = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["makeSubject"])();
  g = e.next;
  this.operations$ = e.source;
  m = !1;
  this.dispatchOperation = function(a) {
    m = !0;
    for (a && g(a); a = c.queue.shift(); ) {
      g(a);
    }
    m = !1;
  };
  this.reexecuteOperation = function(a) {
    if ("mutation" === a.kind || 0 < (c.activeOperations[a.key] || 0)) {
      c.queue.push(a), m || Promise.resolve().then(c.dispatchOperation);
    }
  };
  a = V(void 0 !== a.exchanges ? a.exchanges : W);
  this.results$ = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["share"])(a({
    client: this,
    dispatchDebug: d,
    forward: T({
      dispatchDebug: d
    })
  })(this.operations$));
  Object(wonka__WEBPACK_IMPORTED_MODULE_0__["publish"])(this.results$);
}

function Y(a) {
  a.data = v(a.data);
  return a;
}

function createClient(a) {
  return new X(a);
}

function debugExchange(a) {
  var d = a.forward;
  return  false ? undefined : function c(a) {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(M)(d(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(N)(a)));
  };
}

function errorExchange(a) {
  function b(a) {
    var b = a.error;
    a = a.operation;
    b && c(b, a);
  }
  var c = a.onError;
  return function(a) {
    var c = a.forward;
    return function(a) {
      return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(b)(c(a));
    };
  };
}

function gql() {
  var a, b, c, d, e, f, g;
  for (a = arguments, b = new Map, c = [], d = [], e = Array.isArray(arguments[0]) ? arguments[0][0] : arguments[0] || "", 
  f = 1; f < arguments.length; f++) {
    (g = a[f]) && g.definitions ? d.push.apply(d, g.definitions) : e += g;
    e += a[0][f];
  }
  C(b, c, Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["k"])(e).definitions);
  C(b, c, d);
  return Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["k"])({
    kind: graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].DOCUMENT,
    definitions: c
  });
}

function ssrExchange(a) {
  function b(b) {
    var c = b.client, e = b.forward;
    return function(b) {
      var l = a && "boolean" == typeof a.isClient ? !!a.isClient : !c.suspense, h = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["share"])(b);
      b = e(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(f)(h));
      h = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["map"])(g)(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(m)(h));
      l ? h = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(d)(h) : b = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(q)(b);
      return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["merge"])([ b, h ]);
    };
  }
  function c(a) {
    return !D(a) && void 0 !== k[a.key];
  }
  function d(a) {
    h.push(a.operation.key);
    1 === h.length && Promise.resolve().then(e);
  }
  function e() {
    for (var a; a = h.shift(); ) {
      delete k[a];
    }
  }
  function f(a) {
    return !c(a);
  }
  function g(a) {
    var b = k[a.key], c = b.error;
    return {
      operation: a,
      data: (b = b.data) ? JSON.parse(b) : void 0,
      extensions: void 0,
      error: c ? new _195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["C"]({
        networkError: c.networkError ? Error(c.networkError) : void 0,
        graphQLErrors: c.graphQLErrors && c.graphQLErrors.length ? c.graphQLErrors : void 0
      }) : void 0
    };
  }
  function m(a) {
    return c(a);
  }
  function q(a) {
    var c, d, b = a.operation;
    if (!D(b)) {
      c = a.data;
      a = a.error;
      d = {};
      void 0 !== c && (d.data = JSON.stringify(c));
      a && (d.error = {
        graphQLErrors: a.graphQLErrors.map(E)
      }, a.networkError && (d.error.networkError = "" + a.networkError));
      k[b.key] = d;
    }
  }
  var k = {}, h = [];
  b.restoreData = function(a) {
    return Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])(k, a);
  };
  b.extractData = function() {
    return Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, k);
  };
  a && a.initialState && b.restoreData(a.initialState);
  return b;
}

function subscriptionExchange(a) {
  function b(a) {
    return "subscription" === (a = a.kind) || !!d && ("query" === a || "mutation" === a);
  }
  var c = a.forwardSubscription, d = a.enableAllOperations;
  return function(a) {
    function d(a) {
      var b = c({
        key: a.key.toString(36),
        query: Object(graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__["print"])(a.query),
        variables: a.variables,
        context: Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, a.context)
      });
      return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["make"])((function(c) {
        function d(b) {
          return h(Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["m"])(a, b));
        }
        function e(b) {
          return h(Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["a"])(a, b));
        }
        function f() {
          k || (k = !0, "subscription" === a.kind && m.reexecuteOperation(z("teardown", a, a.context)), 
          g());
        }
        var l, h = c.next, g = c.complete, k = !1;
        Promise.resolve().then((function() {
          k || (l = b.subscribe({
            next: d,
            error: e,
            complete: f
          }));
        }));
        return function() {
          k = !0;
          l && l.unsubscribe();
        };
      }));
    }
    function e(a) {
      return !k(a);
    }
    var m = a.client, q = a.forward, k = b;
    return function(a) {
      var c, b = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["share"])(a);
      a = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((function(a) {
        var c = a.key, e = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])((function(a) {
          return "teardown" === a.kind && a.key === c;
        }))(b);
        return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(e)(d(a));
      }))(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(k)(b));
      c = q(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(e)(b));
      return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["merge"])([ a, c ]);
    };
  };
}

var t, x, y_operationName, U, W;













t = new Map;

x = {}, y_operationName = {
  key: "Operation.operationName",
  message: 'The "Operation.operationName" property has been deprecated and will be removed in a future release of urql. Use "Operation.kind" instead.'
};

U = T({
  dispatchDebug: B
});

W = [ O, K, R ];

X.prototype.onOperationStart = function(a) {
  var b = a.key;
  this.activeOperations[b] = (this.activeOperations[b] || 0) + 1;
  this.dispatchOperation(a);
};

X.prototype.onOperationEnd = function(a) {
  var b = a.key, c = this.activeOperations[b] || 0;
  if (0 >= (this.activeOperations[b] = 0 >= c ? 0 : c - 1)) {
    for (b = this.queue.length - 1; 0 <= b; b--) {
      this.queue[b].key === a.key && this.queue.splice(b, 1);
    }
    this.dispatchOperation(z("teardown", a, a.context));
  }
};

X.prototype.executeRequestOperation = function(a) {
  var f, g, d = this, e = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])((function(b) {
    return b.operation.key === a.key;
  }))(this.results$);
  this.maskTypename && (e = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["map"])(Y)(e));
  if ("mutation" === a.kind) {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["take"])(1)(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["onStart"])((function b() {
      return d.dispatchOperation(a);
    }))(e));
  }
  f = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])((function(b) {
    return "teardown" === b.kind && b.key === a.key;
  }))(this.operations$), g = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["onEnd"])((function() {
    d.onOperationEnd(a);
  }))(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["onStart"])((function() {
    d.onOperationStart(a);
  }))(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(f)(e)));
  return "query" === a.kind && a.context.pollInterval ? Object(wonka__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((function c() {
    return g;
  }))(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["merge"])([ Object(wonka__WEBPACK_IMPORTED_MODULE_0__["fromValue"])(0), Object(wonka__WEBPACK_IMPORTED_MODULE_0__["interval"])(a.context.pollInterval) ])) : g;
};

X.prototype.query = function(a, b, c) {
  c && "boolean" == typeof c.suspense || (c = Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, c, {
    suspense: !1
  }));
  return w(this.executeQuery(Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["f"])(a, b), c));
};

X.prototype.readQuery = function(a, b, c) {
  var d = null;
  Object(wonka__WEBPACK_IMPORTED_MODULE_0__["subscribe"])((function(a) {
    d = a;
  }))(this.executeQuery(Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["f"])(a, b), c)).unsubscribe();
  return d;
};

X.prototype.subscription = function(a, b, c) {
  return this.executeSubscription(Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["f"])(a, b), c);
};

X.prototype.mutation = function(a, b, c) {
  return w(this.executeMutation(Object(_195f0a58_mjs__WEBPACK_IMPORTED_MODULE_1__["f"])(a, b), c));
};


//# sourceMappingURL=urql-core.mjs.map


/***/ }),

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/GraphQLError.mjs ***!
  \*****************************************************/
/*! exports provided: GraphQLError, printError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return GraphQLError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return printError; });
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _language_location_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/location.mjs */ "./node_modules/graphql/language/location.mjs");
/* harmony import */ var _language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/printLocation.mjs */ "./node_modules/graphql/language/printLocation.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// FIXME:
// flowlint uninitialized-instance-property:off




/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

var GraphQLError = /*#__PURE__*/function (_Error) {
  _inherits(GraphQLError, _Error);

  var _super = _createSuper(GraphQLError);

  /**
   * A message describing the Error for debugging purposes.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   *
   * Note: should be treated as readonly, despite invariant usage.
   */

  /**
   * An array of { line, column } locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */
  function GraphQLError(message, nodes, source, positions, path, originalError, extensions) {
    var _locations2, _source2, _positions2, _extensions2;

    var _this;

    _classCallCheck(this, GraphQLError);

    _this = _super.call(this, message); // Compute list of blame nodes.

    var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


    var _source = source;

    if (!_source && _nodes) {
      var _nodes$0$loc;

      _source = (_nodes$0$loc = _nodes[0].loc) === null || _nodes$0$loc === void 0 ? void 0 : _nodes$0$loc.source;
    }

    var _positions = positions;

    if (!_positions && _nodes) {
      _positions = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(node.loc.start);
        }

        return list;
      }, []);
    }

    if (_positions && _positions.length === 0) {
      _positions = undefined;
    }

    var _locations;

    if (positions && source) {
      _locations = positions.map(function (pos) {
        return Object(_language_location_mjs__WEBPACK_IMPORTED_MODULE_2__["getLocation"])(source, pos);
      });
    } else if (_nodes) {
      _locations = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(Object(_language_location_mjs__WEBPACK_IMPORTED_MODULE_2__["getLocation"])(node.loc.source, node.loc.start));
        }

        return list;
      }, []);
    }

    var _extensions = extensions;

    if (_extensions == null && originalError != null) {
      var originalExtensions = originalError.extensions;

      if (Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(originalExtensions)) {
        _extensions = originalExtensions;
      }
    }

    Object.defineProperties(_assertThisInitialized(_this), {
      name: {
        value: 'GraphQLError'
      },
      message: {
        value: message,
        // By being enumerable, JSON.stringify will include `message` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: true,
        writable: true
      },
      locations: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_locations2 = _locations) !== null && _locations2 !== void 0 ? _locations2 : undefined,
        // By being enumerable, JSON.stringify will include `locations` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _locations != null
      },
      path: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: path !== null && path !== void 0 ? path : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: path != null
      },
      nodes: {
        value: _nodes !== null && _nodes !== void 0 ? _nodes : undefined
      },
      source: {
        value: (_source2 = _source) !== null && _source2 !== void 0 ? _source2 : undefined
      },
      positions: {
        value: (_positions2 = _positions) !== null && _positions2 !== void 0 ? _positions2 : undefined
      },
      originalError: {
        value: originalError
      },
      extensions: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_extensions2 = _extensions) !== null && _extensions2 !== void 0 ? _extensions2 : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _extensions != null
      }
    }); // Include (non-enumerable) stack trace.

    if (originalError === null || originalError === void 0 ? void 0 : originalError.stack) {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
      return _possibleConstructorReturn(_this);
    } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')


    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError);
    } else {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }

    return _this;
  }

  _createClass(GraphQLError, [{
    key: "toString",
    value: function toString() {
      return printError(this);
    } // FIXME: workaround to not break chai comparisons, should be remove in v16
    // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet

  }, {
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__["SYMBOL_TO_STRING_TAG"],
    get: function get() {
      return 'Object';
    }
  }]);

  return GraphQLError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + Object(_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__["printLocation"])(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + Object(_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__["printSourceLocation"])(error.source, location);
    }
  }

  return output;
}


/***/ }),

/***/ "./node_modules/graphql/error/syntaxError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/syntaxError.mjs ***!
  \****************************************************/
/*! exports provided: syntaxError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return syntaxError; });
/* harmony import */ var _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Syntax Error: ".concat(description), undefined, source, [position]);
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/defineInspect.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/jsutils/defineInspect.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defineInspect; });
/* harmony import */ var _invariant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol.mjs */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");


/**
 * The `defineInspect()` function defines `inspect()` prototype method as alias of `toJSON`
 */

function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === 'function' || Object(_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(0);
  classObject.prototype.inspect = fn; // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2317')

  if (_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    classObject.prototype[_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]] = fn;
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/devAssert.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/devAssert.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return devAssert; });
function devAssert(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message);
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/jsutils/inspect.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inspect; });
/* harmony import */ var _nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol.mjs */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable flowtype/no-weak-types */

var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/jsutils/instanceOf.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
/* harmony default export */ __webpack_exports__["default"] = ( false ? // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
// eslint-disable-next-line no-shadow
undefined : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (value) {
    var valueClass = value.constructor;
    var className = constructor.name;

    if (className && valueClass && valueClass.name === className) {
      throw new Error("Cannot use ".concat(className, " \"").concat(value, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
});


/***/ }),

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/invariant.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invariant; });
function invariant(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message != null ? message : 'Unexpected invariant triggered.');
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isObjectLike.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/isObjectLike.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObjectLike; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
/* harmony default export */ __webpack_exports__["default"] = (nodejsCustomInspectSymbol);


/***/ }),

/***/ "./node_modules/graphql/language/ast.mjs":
/*!***********************************************!*\
  !*** ./node_modules/graphql/language/ast.mjs ***!
  \***********************************************/
/*! exports provided: Location, Token, isNode */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony import */ var _jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/defineInspect.mjs */ "./node_modules/graphql/jsutils/defineInspect.mjs");


/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
var Location = /*#__PURE__*/function () {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  function Location(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  var _proto = Location.prototype;

  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };

  return Location;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

Object(_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(Location);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

var Token = /*#__PURE__*/function () {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  function Token(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }

  var _proto2 = Token.prototype;

  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };

  return Token;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

Object(_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(Token);
/**
 * @internal
 */

function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === 'string';
}
/**
 * The list of all possible AST node types.
 */


/***/ }),

/***/ "./node_modules/graphql/language/blockString.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/language/blockString.mjs ***!
  \*******************************************************/
/*! exports provided: dedentBlockStringValue, getBlockStringIndentation, printBlockString */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dedentBlockStringValue", function() { return dedentBlockStringValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockStringIndentation", function() { return getBlockStringIndentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printBlockString", function() { return printBlockString; });
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(rawString);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  var startLine = 0;

  while (startLine < lines.length && isBlank(lines[startLine])) {
    ++startLine;
  }

  var endLine = lines.length;

  while (endLine > startLine && isBlank(lines[endLine - 1])) {
    --endLine;
  } // Return a string of the lines joined with U+000A.


  return lines.slice(startLine, endLine).join('\n');
}

function isBlank(str) {
  for (var i = 0; i < str.length; ++i) {
    if (str[i] !== ' ' && str[i] !== '\t') {
      return false;
    }
  }

  return true;
}
/**
 * @internal
 */


function getBlockStringIndentation(value) {
  var _commonIndent;

  var isFirstLine = true;
  var isEmptyLine = true;
  var indent = 0;
  var commonIndent = null;

  for (var i = 0; i < value.length; ++i) {
    switch (value.charCodeAt(i)) {
      case 13:
        //  \r
        if (value.charCodeAt(i + 1) === 10) {
          ++i; // skip \r\n as one symbol
        }

      // falls through

      case 10:
        //  \n
        isFirstLine = false;
        isEmptyLine = true;
        indent = 0;
        break;

      case 9: //   \t

      case 32:
        //  <space>
        ++indent;
        break;

      default:
        if (isEmptyLine && !isFirstLine && (commonIndent === null || indent < commonIndent)) {
          commonIndent = indent;
        }

        isEmptyLine = false;
    }
  }

  return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === '\\';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}


/***/ }),

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql/language/directiveLocation.mjs ***!
  \*************************************************************/
/*! exports provided: DirectiveLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return DirectiveLocation; });
/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */


/***/ }),

/***/ "./node_modules/graphql/language/kinds.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/kinds.mjs ***!
  \*************************************************/
/*! exports provided: Kind */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */


/***/ }),

/***/ "./node_modules/graphql/language/lexer.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/lexer.mjs ***!
  \*************************************************/
/*! exports provided: Lexer, isPunctuatorTokenKind */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return Lexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPunctuatorTokenKind", function() { return isPunctuatorTokenKind; });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");




/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

var Lexer = /*#__PURE__*/function () {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  function Lexer(source) {
    var startOfFileToken = new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].SOF, 0, 0, 0, 0, null);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */


  var _proto = Lexer.prototype;

  _proto.advance = function advance() {
    this.lastToken = this.token;
    var token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  ;

  _proto.lookahead = function lookahead() {
    var token = this.token;

    if (token.kind !== _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EOF) {
      do {
        var _token$next;

        // Note: next is only mutable during parsing, so we cast to allow this.
        token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
      } while (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].COMMENT);
    }

    return token;
  };

  return Lexer;
}();
/**
 * @internal
 */

function isPunctuatorTokenKind(kind) {
  return kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BANG || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].DOLLAR || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].AMP || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PAREN_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PAREN_R || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].SPREAD || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].COLON || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EQUALS || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].AT || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACKET_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACKET_R || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACE_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PIPE || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACE_R;
}

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = prev.end;

  while (pos < bodyLength) {
    var code = body.charCodeAt(pos);
    var _line = lexer.line;

    var _col = 1 + pos - lexer.lineStart; // SourceCharacter


    switch (code) {
      case 0xfeff: // <BOM>

      case 9: //   \t

      case 32: //  <space>

      case 44:
        //  ,
        ++pos;
        continue;

      case 10:
        //  \n
        ++pos;
        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 13:
        //  \r
        if (body.charCodeAt(pos + 1) === 10) {
          pos += 2;
        } else {
          ++pos;
        }

        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 33:
        //  !
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BANG, pos, pos + 1, _line, _col, prev);

      case 35:
        //  #
        return readComment(source, pos, _line, _col, prev);

      case 36:
        //  $
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].DOLLAR, pos, pos + 1, _line, _col, prev);

      case 38:
        //  &
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].AMP, pos, pos + 1, _line, _col, prev);

      case 40:
        //  (
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PAREN_L, pos, pos + 1, _line, _col, prev);

      case 41:
        //  )
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PAREN_R, pos, pos + 1, _line, _col, prev);

      case 46:
        //  .
        if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
          return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].SPREAD, pos, pos + 3, _line, _col, prev);
        }

        break;

      case 58:
        //  :
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].COLON, pos, pos + 1, _line, _col, prev);

      case 61:
        //  =
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EQUALS, pos, pos + 1, _line, _col, prev);

      case 64:
        //  @
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].AT, pos, pos + 1, _line, _col, prev);

      case 91:
        //  [
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACKET_L, pos, pos + 1, _line, _col, prev);

      case 93:
        //  ]
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACKET_R, pos, pos + 1, _line, _col, prev);

      case 123:
        // {
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACE_L, pos, pos + 1, _line, _col, prev);

      case 124:
        // |
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PIPE, pos, pos + 1, _line, _col, prev);

      case 125:
        // }
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACE_R, pos, pos + 1, _line, _col, prev);

      case 34:
        //  "
        if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
          return readBlockString(source, pos, _line, _col, prev, lexer);
        }

        return readString(source, pos, _line, _col, prev);

      case 45: //  -

      case 48: //  0

      case 49: //  1

      case 50: //  2

      case 51: //  3

      case 52: //  4

      case 53: //  5

      case 54: //  6

      case 55: //  7

      case 56: //  8

      case 57:
        //  9
        return readNumber(source, pos, code, _line, _col, prev);

      case 65: //  A

      case 66: //  B

      case 67: //  C

      case 68: //  D

      case 69: //  E

      case 70: //  F

      case 71: //  G

      case 72: //  H

      case 73: //  I

      case 74: //  J

      case 75: //  K

      case 76: //  L

      case 77: //  M

      case 78: //  N

      case 79: //  O

      case 80: //  P

      case 81: //  Q

      case 82: //  R

      case 83: //  S

      case 84: //  T

      case 85: //  U

      case 86: //  V

      case 87: //  W

      case 88: //  X

      case 89: //  Y

      case 90: //  Z

      case 95: //  _

      case 97: //  a

      case 98: //  b

      case 99: //  c

      case 100: // d

      case 101: // e

      case 102: // f

      case 103: // g

      case 104: // h

      case 105: // i

      case 106: // j

      case 107: // k

      case 108: // l

      case 109: // m

      case 110: // n

      case 111: // o

      case 112: // p

      case 113: // q

      case 114: // r

      case 115: // s

      case 116: // t

      case 117: // u

      case 118: // v

      case 119: // w

      case 120: // x

      case 121: // y

      case 122:
        // z
        return readName(source, pos, _line, _col, prev);
    }

    throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, pos, unexpectedCharacterMessage(code));
  }

  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;
  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EOF, bodyLength, bodyLength, line, col, prev);
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart


  if (code === 46 || isNameStart(code)) {
    throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](isFloat ? _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].FLOAT : _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BLOCK_STRING, start, position + 3, line, col, prev, Object(_blockString_mjs__WEBPACK_IMPORTED_MODULE_3__["dedentBlockStringValue"])(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].NAME, start, position, line, col, prev, body.slice(start, position));
} // _ A-Z a-z


function isNameStart(code) {
  return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
}


/***/ }),

/***/ "./node_modules/graphql/language/location.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/language/location.mjs ***!
  \****************************************************/
/*! exports provided: getLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}


/***/ }),

/***/ "./node_modules/graphql/language/parser.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/parser.mjs ***!
  \**************************************************/
/*! exports provided: parse, parseValue, parseType, Parser */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return parseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _source_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./source.mjs */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _lexer_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lexer.mjs */ "./node_modules/graphql/language/lexer.mjs");







/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SOF);
  var value = parser.parseValueLiteral(false);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SOF);
  var type = parser.parseTypeReference();
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF);
  return type;
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */

var Parser = /*#__PURE__*/function () {
  function Parser(source, options) {
    var sourceObj = Object(_source_mjs__WEBPACK_IMPORTED_MODULE_4__["isSource"])(source) ? source : new _source_mjs__WEBPACK_IMPORTED_MODULE_4__["Source"](source);
    this._lexer = new _lexer_mjs__WEBPACK_IMPORTED_MODULE_6__["Lexer"](sourceObj);
    this._options = options;
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].DOCUMENT,
      definitions: this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SOF, this.parseDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME)) {
      name = this.parseName();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L, this.parseVariableDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].DOLLAR);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SELECTION_SET,
      selections: this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, this.parseSelection, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var _this$_options;

    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_L:
        return this.parseList(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L:
        return this.parseObject(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].INT:
        this._lexer.advance();

        return {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].FLOAT:
        this._lexer.advance();

        return {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].STRING:
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BLOCK_STRING:
        return this.parseStringLiteral();

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME:
        this._lexer.advance();

        switch (token.value) {
          case 'true':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].BOOLEAN,
              value: true,
              loc: this.loc(token)
            };

          case 'false':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].BOOLEAN,
              value: false,
              loc: this.loc(token)
            };

          case 'null':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].NULL,
              loc: this.loc(token)
            };

          default:
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM,
              value: token.value,
              loc: this.loc(token)
            };
        }

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].STRING,
      value: token.value,
      block: token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].LIST,
      values: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT,
      fields: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AT);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_R);
      type = {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BANG)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].STRING) || this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, this.parseOperationTypeDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_DEFINITION,
      description: description,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON);
    var type = this.parseNamedType();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var _this$_options2;

    if (!this.expectOptionalKeyword('implements')) {
      return [];
    }

    if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true) {
      var types = []; // Optional leading ampersand

      this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AMP) || this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME));

      return types;
    }

    return this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AMP, this.parseNamedType);
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    var _this$_options3;

    // Legacy support for the SDL?
    if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L) && this._lexer.lookahead().kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, this.parseFieldDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L, this.parseInputValueDef, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    return this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EQUALS) ? this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, this.parseEnumValueDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, this.parseInputValueDef, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, this.parseOperationTypeDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INTERFACE_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    return this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_5__["DirectiveLocation"][name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    var _this$_options4;

    if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_2__["Location"](startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token), "."));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  ;

  _proto.delimitedMany = function delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));

    return nodes;
  };

  return Parser;
}();
/**
 * A helper function to describe a token as a string for debugging.
 */

function getTokenDesc(token) {
  var value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? " \"".concat(value, "\"") : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */


function getTokenKindDesc(kind) {
  return Object(_lexer_mjs__WEBPACK_IMPORTED_MODULE_6__["isPunctuatorTokenKind"])(kind) ? "\"".concat(kind, "\"") : kind;
}


/***/ }),

/***/ "./node_modules/graphql/language/printLocation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/language/printLocation.mjs ***!
  \*********************************************************/
/*! exports provided: printLocation, printSourceLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLocation", function() { return printLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printSourceLocation", function() { return printSourceLocation; });
/* harmony import */ var _location_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.mjs */ "./node_modules/graphql/language/location.mjs");

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, Object(_location_mjs__WEBPACK_IMPORTED_MODULE_0__["getLocation"])(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var subLineIndex = Math.floor(columnNum / 80);
    var subLineColumnNum = columnNum % 80;
    var subLines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function (subLine) {
      return ['', subLine];
    }), [[' ', whitespace(subLineColumnNum - 1) + '^'], ['', subLines[subLineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return leftPad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function leftPad(len, str) {
  return whitespace(len - str.length) + str;
}


/***/ }),

/***/ "./node_modules/graphql/language/printer.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/printer.mjs ***!
  \***************************************************/
/*! exports provided: print */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony import */ var _visitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");


/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return Object(_visitor_mjs__WEBPACK_IMPORTED_MODULE_0__["visit"])(ast, {
    leave: printDocASTReducer
  });
}
var MAX_LINE_LENGTH = 80; // TODO: provide better type coverage in future

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    var prefix = wrap('', alias, ': ') + name;
    var argsLine = prefix + wrap('(', join(args, ', '), ')');

    if (argsLine.length > MAX_LINE_LENGTH) {
      argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
    }

    return join([argsLine, join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? Object(_blockString_mjs__WEBPACK_IMPORTED_MODULE_1__["printBlockString"])(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: addDescription(function (_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  }),
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        interfaces = _ref26.interfaces,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        interfaces = _ref35.interfaces,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray) {
  var _maybeArray$filter$jo;

  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function (x) {
    return x;
  }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */


function wrap(start, maybeString) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}

function indent(str) {
  return wrap('  ', str.replace(/\n/g, '\n  '));
}

function isMultiline(str) {
  return str.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray != null && maybeArray.some(isMultiline);
}


/***/ }),

/***/ "./node_modules/graphql/language/source.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/source.mjs ***!
  \**************************************************/
/*! exports provided: Source, isSource */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSource", function() { return isSource; });
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/instanceOf.mjs */ "./node_modules/graphql/jsutils/instanceOf.mjs");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
var Source = /*#__PURE__*/function () {
  function Source(body) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphQL request';
    var locationOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      line: 1,
      column: 1
    };
    typeof body === 'string' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(0, "Body must be a string. Received: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(body), "."));
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 'line in locationOffset is 1-indexed and must be positive.');
    this.locationOffset.column > 0 || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 'column in locationOffset is 1-indexed and must be positive.');
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet


  _createClass(Source, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__["SYMBOL_TO_STRING_TAG"],
    get: function get() {
      return 'Source';
    }
  }]);

  return Source;
}();
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */

// eslint-disable-next-line no-redeclare
function isSource(source) {
  return Object(_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(source, Source);
}


/***/ }),

/***/ "./node_modules/graphql/language/tokenKind.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/language/tokenKind.mjs ***!
  \*****************************************************/
/*! exports provided: TokenKind */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return TokenKind; });
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */


/***/ }),

/***/ "./node_modules/graphql/language/visitor.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/visitor.mjs ***!
  \***************************************************/
/*! exports provided: QueryDocumentKeys, BREAK, visit, visitInParallel, getVisitFn */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryDocumentKeys", function() { return QueryDocumentKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return BREAK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return visitInParallel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return getVisitFn; });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");


/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!Object(_ast_mjs__WEBPACK_IMPORTED_MODULE_1__["isNode"])(node)) {
        throw new Error("Invalid AST Node: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(node), "."));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if (Object(_ast_mjs__WEBPACK_IMPORTED_MODULE_1__["isNode"])(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      var _visitorKeys$node$kin;

      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */

function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);
  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (skipping[i] == null) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          false);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (skipping[i] == null) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          true);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/polyfills/symbols.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/polyfills/symbols.mjs ***!
  \****************************************************/
/*! exports provided: SYMBOL_ITERATOR, SYMBOL_ASYNC_ITERATOR, SYMBOL_TO_STRING_TAG */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYMBOL_ITERATOR", function() { return SYMBOL_ITERATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYMBOL_ASYNC_ITERATOR", function() { return SYMBOL_ASYNC_ITERATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYMBOL_TO_STRING_TAG", function() { return SYMBOL_TO_STRING_TAG; });
// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var SYMBOL_ITERATOR = typeof Symbol === 'function' && Symbol.iterator != null ? Symbol.iterator : '@@iterator'; // In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_ASYNC_ITERATOR = typeof Symbol === 'function' && Symbol.asyncIterator != null ? Symbol.asyncIterator : '@@asyncIterator'; // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_TO_STRING_TAG = typeof Symbol === 'function' && Symbol.toStringTag != null ? Symbol.toStringTag : '@@toStringTag';


/***/ }),

/***/ "./node_modules/urql/dist/urql.es.js":
/*!*******************************************!*\
  !*** ./node_modules/urql/dist/urql.es.js ***!
  \*******************************************/
/*! exports provided: CombinedError, createRequest, getOperationName, makeErrorResult, makeResult, stringifyVariables, Client, cacheExchange, composeExchanges, createClient, debugExchange, dedupExchange, defaultExchanges, errorExchange, fallbackExchangeIO, fetchExchange, formatDocument, gql, makeOperation, maskTypename, ssrExchange, subscriptionExchange, Consumer, Context, Mutation, Provider, Query, Subscription, useClient, useMutation, useQuery, useSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return Mutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useClient", function() { return useClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return useMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return useSubscription; });
/* harmony import */ var _urql_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @urql/core */ "./node_modules/@urql/core/dist/urql-core.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CombinedError", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["CombinedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRequest", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["createRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["getOperationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeErrorResult", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["makeErrorResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeResult", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["makeResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringifyVariables", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["stringifyVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["Client"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheExchange", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["cacheExchange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "composeExchanges", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["composeExchanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createClient", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["createClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debugExchange", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["debugExchange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dedupExchange", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["dedupExchange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultExchanges", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["defaultExchanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorExchange", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["errorExchange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fallbackExchangeIO", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["fallbackExchangeIO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchExchange", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["fetchExchange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDocument", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["formatDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["gql"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeOperation", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["makeOperation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maskTypename", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["maskTypename"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ssrExchange", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["ssrExchange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscriptionExchange", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["subscriptionExchange"]; });

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");
function _extends() {
  return (_extends = Object.assign || function(target) {
    var i, source, key;
    for (i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }).apply(this, arguments);
}

function useMutation(query) {
  function _ref(result) {
    if (isMounted.current) {
      setState({
        fetching: !1,
        stale: !!result.stale,
        data: result.data,
        error: result.error,
        extensions: result.extensions,
        operation: result.operation
      });
    }
    return result;
  }
  function _ref2() {
    isMounted.current = !1;
  }
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(!0), client = useClient(), ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState), state = ref[0], setState = ref[1], executeMutation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((function(variables, context) {
    setState(_extends({}, initialState, {
      fetching: !0
    }));
    return Object(wonka__WEBPACK_IMPORTED_MODULE_2__["toPromise"])(client.executeMutation(Object(_urql_core__WEBPACK_IMPORTED_MODULE_0__["createRequest"])(query, variables), context || {})).then(_ref);
  }), [ client, query, setState ]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function() {
    return _ref2;
  }), []);
  return [ state, executeMutation ];
}

function useSource(input, transform) {
  function _ref() {
    return input;
  }
  function _ref3(value) {
    if (!currentInit) {
      setState((function _ref2(prevValue) {
        return isShallowDifferent(prevValue, value) ? value : prevValue;
      }));
    }
  }
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function() {
    var subject = Object(wonka__WEBPACK_IMPORTED_MODULE_2__["makeSubject"])(), source = Object(wonka__WEBPACK_IMPORTED_MODULE_2__["concat"])([ Object(wonka__WEBPACK_IMPORTED_MODULE_2__["map"])(_ref)(Object(wonka__WEBPACK_IMPORTED_MODULE_2__["fromValue"])(input)), subject.source ]), updateInput = function(nextInput) {
      var prevInput = input;
      try {
        if (nextInput !== prevInput) {
          subject.next(input = nextInput);
        }
      } catch (error) {
        input = prevInput;
        throw error;
      }
    };
    return [ source, updateInput ];
  }), []), input$ = ref[0], updateInput = ref[1], ref$1 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((function() {
    currentInit = !0;
    var state;
    Object(wonka__WEBPACK_IMPORTED_MODULE_2__["subscribe"])((function(value) {
      state = value;
    }))(transform(input$)).unsubscribe();
    currentInit = !1;
    return state;
  })), state = ref$1[0], setState = ref$1[1];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function() {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_2__["subscribe"])(_ref3)(transform(input$, state)).unsubscribe;
  }), [ input$ ]);
  return [ state, updateInput ];
}

function useRequest(query, variables) {
  var prev = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(void 0);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function() {
    var request = Object(_urql_core__WEBPACK_IMPORTED_MODULE_0__["createRequest"])(query, variables);
    if (void 0 !== prev.current && prev.current.key === request.key) {
      return prev.current;
    } else {
      prev.current = request;
      return request;
    }
  }), [ query, variables ]);
}

function _ref2(result, partial) {
  return _extends({}, result, partial);
}

function _ref3(ref) {
  var stale = ref.stale, data = ref.data, error = ref.error, extensions = ref.extensions, operation = ref.operation;
  return {
    fetching: !1,
    stale: !!stale,
    data: data,
    error: error,
    operation: operation,
    extensions: extensions
  };
}

function _ref4(query$) {
  if (!query$) {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_2__["fromValue"])({
      fetching: !1,
      stale: !1
    });
  }
  return Object(wonka__WEBPACK_IMPORTED_MODULE_2__["concat"])([ Object(wonka__WEBPACK_IMPORTED_MODULE_2__["fromValue"])({
    fetching: !0,
    stale: !1
  }), Object(wonka__WEBPACK_IMPORTED_MODULE_2__["map"])(_ref3)(query$), Object(wonka__WEBPACK_IMPORTED_MODULE_2__["fromValue"])({
    fetching: !1,
    stale: !1
  }) ]);
}

function _ref5(query$$, prevState) {
  return Object(wonka__WEBPACK_IMPORTED_MODULE_2__["scan"])(_ref2, prevState || initialState)(Object(wonka__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(_ref4)(query$$));
}

function useQuery(args) {
  var client = useClient(), request = useRequest(args.query, args.variables), makeQuery$ = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((function(opts) {
    var suspense = isSuspense(client, args.context), source = suspense ? sources.get(request.key) : void 0;
    if (!source) {
      source = client.executeQuery(request, _extends({}, {
        requestPolicy: args.requestPolicy,
        pollInterval: args.pollInterval
      }, args.context, opts));
      if (suspense) {
        source = function toSuspenseSource(source) {
          function _ref(_resolve) {
            resolve = _resolve;
          }
          var cache, resolve, shared = Object(wonka__WEBPACK_IMPORTED_MODULE_2__["share"])(source);
          return function(sink) {
            var signal, hasSuspended = !1;
            Object(wonka__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])((function(result) {
              if (void 0 === cache) {
                Promise.resolve(result).then(resolve);
              }
              cache = result;
              return !hasSuspended;
            }))(shared)(sink);
            if (void 0 !== cache) {
              (signal = [ cache ]).tag = 1;
              sink(signal);
            } else {
              hasSuspended = !0;
              sink(0);
              throw new Promise(_ref);
            }
          };
        }(source);
        if ("undefined" != typeof window) {
          sources.set(request.key, source);
        }
      }
    }
    return source;
  }), [ client, request, args.requestPolicy, args.pollInterval, args.context ]), query$ = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function() {
    return args.pause ? null : makeQuery$();
  }), [ args.pause, makeQuery$ ]), ref = useSource(query$, Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(_ref5, [])), state = ref[0], update = ref[1], executeQuery = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((function(opts) {
    update(makeQuery$(_extends({}, {
      suspense: !1
    }, opts)));
  }), [ update, makeQuery$ ]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function() {
    sources.delete(request.key);
    if (!isSuspense(client, args.context)) {
      update(query$);
    }
  }), [ update, client, query$, request, args.context ]);
  if (isSuspense(client, args.context)) {
    update(query$);
  }
  return [ state, executeQuery ];
}

function _ref2$1(ref) {
  var stale = ref.stale, data = ref.data, error = ref.error, extensions = ref.extensions, operation = ref.operation;
  return {
    fetching: !0,
    stale: !!stale,
    data: data,
    error: error,
    extensions: extensions,
    operation: operation
  };
}

function _ref3$1(subscription$) {
  if (!subscription$) {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_2__["fromValue"])({
      fetching: !1
    });
  }
  return Object(wonka__WEBPACK_IMPORTED_MODULE_2__["concat"])([ Object(wonka__WEBPACK_IMPORTED_MODULE_2__["fromValue"])({
    fetching: !0,
    stale: !1
  }), Object(wonka__WEBPACK_IMPORTED_MODULE_2__["map"])(_ref2$1)(subscription$), Object(wonka__WEBPACK_IMPORTED_MODULE_2__["fromValue"])({
    fetching: !1,
    stale: !1
  }) ]);
}

function useSubscription(args, handler) {
  function _ref(result, partial) {
    var handler = handlerRef.current, data = void 0 !== partial.data ? "function" == typeof handler ? handler(result.data, partial.data) : partial.data : result.data;
    return _extends({}, result, partial, {
      data: data
    });
  }
  var request, makeSubscription$, subscription$, ref, state, update, executeSubscription, client = useClient(), handlerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(handler);
  handlerRef.current = handler;
  request = useRequest(args.query, args.variables);
  makeSubscription$ = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((function(opts) {
    return client.executeSubscription(request, _extends({}, args.context, opts));
  }), [ client, request, args.context ]);
  state = (ref = useSource(subscription$ = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function() {
    return args.pause ? null : makeSubscription$();
  }), [ args.pause, makeSubscription$ ]), Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((function(subscription$$, prevState) {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_2__["scan"])(_ref, prevState || initialState)(Object(wonka__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(_ref3$1)(subscription$$));
  }), [])))[0];
  executeSubscription = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((function(opts) {
    return update(makeSubscription$(opts));
  }), [ update = ref[1], makeSubscription$ ]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function() {
    update(subscription$);
  }), [ update, subscription$ ]);
  return [ state, executeSubscription ];
}

function Mutation(props) {
  var mutation = useMutation(props.query);
  return props.children(_extends({}, mutation[0], {
    executeMutation: mutation[1]
  }));
}

function Query(props) {
  var query = useQuery(props);
  return props.children(_extends({}, query[0], {
    executeQuery: query[1]
  }));
}

function Subscription(props) {
  var subscription = useSubscription(props, props.handler);
  return props.children(_extends({}, subscription[0], {
    executeSubscription: subscription[1]
  }));
}

var defaultClient, Context, Provider, Consumer, hasWarnedAboutDefault, useClient, initialState, currentInit, isShallowDifferent, isSuspense, sources;









defaultClient = Object(_urql_core__WEBPACK_IMPORTED_MODULE_0__["createClient"])({
  url: "/graphql"
});

Provider = (Context = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(defaultClient)).Provider;

Consumer = Context.Consumer;

hasWarnedAboutDefault = !1;

useClient = function() {
  var client = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Context);
  if ( true && client === defaultClient && !hasWarnedAboutDefault) {
    hasWarnedAboutDefault = !0;
    console.warn("Default Client: No client has been specified using urql's Provider.This means that urql will be falling back to defaults including making requests to `/graphql`.\nIf that's not what you want, please create a client and add a Provider.");
  }
  return client;
};

initialState = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
};

currentInit = !1;

isShallowDifferent = function(a, b) {
  var x, x$1;
  if ("object" != typeof a || "object" != typeof b) {
    return a !== b;
  }
  for (x in a) {
    if (!(x in b)) {
      return !0;
    }
  }
  for (x$1 in b) {
    if (a[x$1] !== b[x$1]) {
      return !0;
    }
  }
  return !1;
};

isSuspense = function(client, context) {
  return client.suspense && (!context || !1 !== context.suspense);
};

sources = new Map;


//# sourceMappingURL=urql.es.js.map


/***/ }),

/***/ "./node_modules/wonka/dist/wonka.mjs":
/*!*******************************************!*\
  !*** ./node_modules/wonka/dist/wonka.mjs ***!
  \*******************************************/
/*! exports provided: buffer, combine, concat, concatAll, concatMap, debounce, delay, empty, filter, flatten, forEach, fromArray, fromCallbag, fromDomEvent, fromList, fromObservable, fromPromise, fromValue, interval, make, makeSubject, map, merge, mergeAll, mergeMap, never, onEnd, onPush, onStart, pipe, publish, sample, scan, share, skip, skipUntil, skipWhile, subscribe, switchAll, switchMap, take, takeLast, takeUntil, takeWhile, tap, throttle, toArray, toCallbag, toObservable, toPromise */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return buffer$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return combine$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAll", function() { return concatAll$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatMap", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCallbag", function() { return fromCallbag$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDomEvent", function() { return fromDomEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromList", function() { return fromList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromObservable", function() { return fromObservable$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValue", function() { return fromValue$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return interval$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSubject", function() { return makeSubject$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "never", function() { return never$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onEnd", function() { return onEnd$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPush", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publish", function() { return publish$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return sample$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return scan$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "share", function() { return share$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipUntil", function() { return skipUntil$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipWhile", function() { return skipWhile$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchAll", function() { return switchAll$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLast", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeUntil", function() { return takeUntil$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return takeWhile$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCallbag", function() { return toCallbag$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toObservable", function() { return toObservable$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return toPromise$1; });
function l(a, b) {
  b.tag = a;
  return b;
}

function m() {}

function p(a) {
  return function (b) {
    var c = a.length;
    let d = !1,
      e = !1,
      f = !1,
      g = 0;
    b(
      l(0, [
        function (h) {
          if (h) {
            d = !0;
          } else if (e) {
            f = !0;
          } else {
            for (e = f = !0; f && !d; ) {
              g < c ? ((h = a[g]), (g = (g + 1) | 0), (f = !1), b(l(1, [h]))) : ((d = !0), b(0));
            }
            e = !1;
          }
        },
      ])
    );
  };
}

function r() {}

function t(a) {
  a(0);
}

function u(a) {
  let b = !1;
  a(
    l(0, [
      function (c) {
        c ? (b = !0) : b || a(0);
      },
    ])
  );
}

function w(a) {
  if (void 0 === a) {
    return ((a = [v, 0]).tag = 256), a;
  }
  if (null === a || a[0] !== v) {
    return a;
  }
  (a = [v, (a[1] + 1) | 0]).tag = 256;
  return a;
}

function x(a) {
  if (null === a || a[0] !== v) {
    return a;
  }
  if (0 !== (a = a[1])) {
    return [v, (a - 1) | 0];
  }
}

function z(a) {
  return function (b) {
    return function (c) {
      function d(b) {
        'number' == typeof b
          ? k &&
            ((k = !1),
            void 0 !== (b = e.shift())
              ? ((b = a(x(b))), (k = !0), b(d))
              : q
              ? c(0)
              : g || ((g = !0), f(0)))
          : b.tag
          ? k && (c(b), n ? (n = !1) : h(0))
          : ((h = b = b[0]), (n = !1), b(0));
      }
      let e = [],
        f = m,
        g = !1,
        h = m,
        k = !1,
        n = !1,
        q = !1;
      b(function (b) {
        'number' == typeof b
          ? q || ((q = !0), k || 0 !== e.length || c(0))
          : b.tag
          ? q || ((b = b[0]), (g = !1), k ? e.push(b) : ((b = a(b)), (k = !0), b(d)))
          : (f = b[0]);
      });
      c(
        l(0, [
          function (c) {
            if (c) {
              if ((q || ((q = !0), f(1)), k)) {
                return (k = !1), h(1);
              }
            } else {
              q || g || ((g = !0), f(0)), k && !n && ((n = !0), h(0));
            }
          },
        ])
      );
    };
  };
}

function A(a) {
  return a;
}

function B(a) {
  return a;
}

function C(a) {
  return a(0);
}

function D(a) {
  return function (b) {
    return function (c) {
      let e = m,
        f = !1,
        g = [],
        h = !1;
      b(function (b) {
        'number' == typeof b
          ? h || ((h = !0), 0 === g.length && c(0))
          : b.tag
          ? h ||
            ((f = !1),
            (function (a) {
              function b(a) {
                'number' == typeof a
                  ? 0 !== g.length &&
                    ((g = g.filter(d)),
                    (a = 0 === g.length),
                    h && a ? c(0) : !f && a && ((f = !0), e(0)))
                  : a.tag
                  ? 0 !== g.length && (c(l(1, [a[0]])), k(0))
                  : ((k = a = a[0]), (g = g.concat(a)), a(0));
              }
              function d(a) {
                return a !== k;
              }
              let k = m;
              1 === a.length ? a(b) : a.bind(null, b);
            })(a(b[0])),
            f || ((f = !0), e(0)))
          : (e = b[0]);
      });
      c(
        l(0, [
          function (a) {
            a
              ? (h || ((h = !0), e(a)),
                g.forEach(function (c) {
                  return c(a);
                }),
                (g = []))
              : (f || h ? (f = !1) : ((f = !0), e(0)), g.forEach(C));
          },
        ])
      );
    };
  };
}

function E(a) {
  return a;
}

function F(a) {
  return a;
}

function G(a) {
  return D(F)(a);
}

function H(a) {
  return function (b) {
    return function (c) {
      let d = !1;
      return b(function (e) {
        if ('number' == typeof e) {
          d || ((d = !0), c(e));
        } else if (e.tag) {
          d || (a(e[0]), c(e));
        } else {
          var g = e[0];
          c(
            l(0, [
              function (a) {
                if (!d) {
                  return a && (d = !0), g(a);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function J(a) {
  a(0);
}

function K(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        h &&
          ('number' == typeof a
            ? ((h = !1), n ? c(a) : f || ((f = !0), e(0)))
            : a.tag
            ? (c(a), k ? (k = !1) : g(0))
            : ((g = a = a[0]), (k = !1), a(0)));
      }
      let e = m,
        f = !1,
        g = m,
        h = !1,
        k = !1,
        n = !1;
      b(function (b) {
        'number' == typeof b
          ? n || ((n = !0), h || c(0))
          : b.tag
          ? n ||
            (h && (g(1), (g = m)), f ? (f = !1) : ((f = !0), e(0)), (b = a(b[0])), (h = !0), b(d))
          : (e = b[0]);
      });
      c(
        l(0, [
          function (a) {
            if (a) {
              if ((n || ((n = !0), e(1)), h)) {
                return (h = !1), g(1);
              }
            } else {
              n || f || ((f = !0), e(0)), h && !k && ((k = !0), g(0));
            }
          },
        ])
      );
    };
  };
}

function L(a) {
  return a;
}

function M(a) {
  return function (b) {
    return function (c) {
      let d = [],
        e = m;
      return b(function (b) {
        'number' == typeof b
          ? p(d)(c)
          : b.tag
          ? (d.length >= a && 0 < a && d.shift(), d.push(b[0]), e(0))
          : ((b = b[0]), 0 >= a ? (b(1), u(c)) : ((e = b), b(0)));
      });
    };
  };
}

function N(a) {
  return function (b) {
    let c = m,
      d = !1;
    b(function (e) {
      'number' == typeof e ? (d = !0) : e.tag ? d || (a(e[0]), c(0)) : ((c = e = e[0]), e(0));
    });
    return {
      unsubscribe: function () {
        if (!d) {
          return (d = !0), c(1);
        }
      },
    };
  };
}

function O() {}

function Q() {}

function R() {}

function S() {}

function buffer$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' == typeof a
          ? k || ((k = !0), f(1), 0 < e.length && c(l(1, [e])), c(0))
          : a.tag
          ? !k && 0 < e.length && ((a = e), (e = []), c(l(1, [a])))
          : (g = a[0]);
      }
      let e = [],
        f = m,
        g = m,
        h = !1,
        k = !1;
      b(function (b) {
        'number' == typeof b
          ? k || ((k = !0), g(1), 0 < e.length && c(l(1, [e])), c(0))
          : b.tag
          ? k || (e.push(b[0]), h ? (h = !1) : ((h = !0), f(0), g(0)))
          : ((f = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!k) {
              if (a) {
                return (k = !0), f(1), g(1);
              }
              if (!h) {
                return (h = !0), f(0), g(0);
              }
            }
          },
        ])
      );
    };
  };
}

function combine$1(a, b) {
  return (function (a, b) {
    return function (c) {
      let d = m,
        e = m,
        f = void 0,
        g = void 0,
        h = !1,
        k = 0,
        n = !1;
      a(function (a) {
        var b = g;
        'number' == typeof a
          ? 1 > k
            ? (k = (k + 1) | 0)
            : n || ((n = !0), c(0))
          : a.tag
          ? ((a = a[0]),
            void 0 !== b
              ? n || ((f = w(a)), (h = !1), c(l(1, [[a, x(b)]])))
              : ((f = w(a)), h ? (h = !1) : e(0)))
          : (d = a[0]);
      });
      b(function (a) {
        var b = f;
        'number' == typeof a
          ? 1 > k
            ? (k = (k + 1) | 0)
            : n || ((n = !0), c(0))
          : a.tag
          ? ((a = a[0]),
            void 0 !== b
              ? n || ((g = w(a)), (h = !1), c(l(1, [[x(b), a]])))
              : ((g = w(a)), h ? (h = !1) : d(0)))
          : (e = a[0]);
      });
      c(
        l(0, [
          function (c) {
            if (!n) {
              if (c) {
                return (n = !0), d(1), e(1);
              }
              if (!h) {
                return (h = !0), d(c), e(c);
              }
            }
          },
        ])
      );
    };
  })(a, b);
}

function concat$1(a) {
  return z(B)(p(a));
}

function concatAll$1(a) {
  return z(A)(a);
}

function debounce$1(a) {
  return function (b) {
    return function (c) {
      function d() {
        var a = e;
        void 0 !== a && ((e = void 0), clearTimeout(x(a)));
      }
      let e = void 0,
        f = !1,
        g = !1;
      return b(function (b) {
        if ('number' == typeof b) {
          g || ((g = !0), void 0 !== e ? (f = !0) : c(0));
        } else if (b.tag) {
          g ||
            (d(),
            (e = w(
              setTimeout(function () {
                e = void 0;
                c(b);
                f && c(0);
              }, a(b[0]))
            )));
        } else {
          var n = b[0];
          c(
            l(0, [
              function (a) {
                if (!g) {
                  return a ? ((g = !0), (f = !1), d(), n(1)) : n(0);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function delay$1(a) {
  return function (b) {
    return function (c) {
      let d = 0;
      return b(function (b) {
        'number' == typeof b || b.tag
          ? ((d = (d + 1) | 0),
            setTimeout(function () {
              0 !== d && ((d = (d - 1) | 0), c(b));
            }, a))
          : c(b);
      });
    };
  };
}

function filter$1(a) {
  return function (b) {
    return function (c) {
      let d = m;
      return b(function (b) {
        'number' == typeof b ? c(b) : b.tag ? (a(b[0]) ? c(b) : d(0)) : ((d = b[0]), c(b));
      });
    };
  };
}

function forEach$1(a) {
  return function (b) {
    N(a)(b);
  };
}

function fromCallbag$2(a) {
  return function (b) {
    function c(a, c) {
      switch (a) {
        case 0:
          b(
            l(0, [
              function (a) {
                return a ? c(2) : c(1);
              },
            ])
          );
          break;

        case 1:
          b(l(1, [c]));
          break;

        case 2:
          b(0);
      }
    }
    return 2 === a.length ? a(0, c) : a.bind(null, 0, c);
  };
}

function fromDomEvent$1(a, b) {
  return (function (a, b) {
    return function (c) {
      function d(a) {
        c(l(1, [a]));
      }
      c(
        l(0, [
          function (c) {
            c && a.removeEventListener(b, d);
          },
        ])
      );
      a.addEventListener(b, d);
    };
  })(a, b);
}

function fromList$1(a) {
  return function (b) {
    let c = !1,
      d = !1,
      e = !1,
      f = a;
    b(
      l(0, [
        function (a) {
          if (a) {
            c = !0;
          } else if (d) {
            e = !0;
          } else {
            for (d = e = !0; e && !c; ) {
              (a = f) ? ((f = a[1]), (e = !1), b(l(1, [a[0]]))) : ((c = !0), b(0));
            }
            d = !1;
          }
        },
      ])
    );
  };
}

function fromObservable$2(a) {
  var b = void 0 !== a[P] ? a[P]() : a;
  return function (a) {
    var c = b.subscribe({
      next: function (c) {
        a(l(1, [c]));
      },
      complete: function () {
        a(0);
      },
      error: Q,
    });
    a(
      l(0, [
        function (a) {
          if (a) {
            return c.unsubscribe();
          }
        },
      ])
    );
  };
}

function fromPromise$1(a) {
  return function (b) {
    let c = !1;
    a.then(function (a) {
      c || (b(l(1, [a])), b(0));
      return Promise.resolve(void 0);
    });
    b(
      l(0, [
        function (a) {
          a && (c = !0);
        },
      ])
    );
  };
}

function fromValue$1(a) {
  return function (b) {
    let c = !1;
    b(
      l(0, [
        function (d) {
          d ? (c = !0) : c || ((c = !0), b(l(1, [a])), b(0));
        },
      ])
    );
  };
}

function interval$1(a) {
  return function (b) {
    let c = 0;
    var d = setInterval(function () {
      var a = c;
      c = (c + 1) | 0;
      b(l(1, [a]));
    }, a);
    b(
      l(0, [
        function (a) {
          a && clearInterval(d);
        },
      ])
    );
  };
}

function make$1(a) {
  return function (b) {
    let c = r,
      d = !1;
    c = a({
      next: function (a) {
        d || b(l(1, [a]));
      },
      complete: function () {
        d || ((d = !0), b(0));
      },
    });
    b(
      l(0, [
        function (a) {
          if (a && !d) {
            return (d = !0), c();
          }
        },
      ])
    );
  };
}

function makeSubject$1() {
  let a = [],
    b = !1;
  return {
    source: function (c) {
      function b(a) {
        return a !== c;
      }
      a = a.concat(c);
      c(
        l(0, [
          function (c) {
            c && (a = a.filter(b));
          },
        ])
      );
    },
    next: function (c) {
      b ||
        a.forEach(function (a) {
          a(l(1, [c]));
        });
    },
    complete: function () {
      b || ((b = !0), a.forEach(t));
    },
  };
}

function map$1(a) {
  return function (b) {
    return function (c) {
      return b(function (b) {
        b = 'number' == typeof b ? 0 : b.tag ? l(1, [a(b[0])]) : l(0, [b[0]]);
        c(b);
      });
    };
  };
}

function merge$1(a) {
  return D(E)(p(a));
}

function never$1(a) {
  a(l(0, [m]));
}

function onEnd$1(a) {
  return function (b) {
    return function (c) {
      let d = !1;
      return b(function (b) {
        if ('number' == typeof b) {
          if (d) {
            return;
          }
          d = !0;
          c(b);
          return a();
        }
        if (b.tag) {
          d || c(b);
        } else {
          var e = b[0];
          c(
            l(0, [
              function (c) {
                if (!d) {
                  return c ? ((d = !0), e(c), a()) : e(c);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function onStart$1(a) {
  return function (b) {
    return function (c) {
      return b(function (b) {
        'number' == typeof b ? c(b) : b.tag ? c(b) : (c(b), a());
      });
    };
  };
}

function pipe() {
  for (var a = arguments, b = arguments[0], c = 1, d = arguments.length; c < d; c++) {
    b = a[c](b);
  }
  return b;
}

function publish$1(a) {
  return N(O)(a);
}

function sample$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = m,
        f = void 0,
        g = !1,
        h = !1;
      b(function (a) {
        'number' == typeof a
          ? h || ((h = !0), e(1), c(0))
          : a.tag
          ? ((f = w(a[0])), g ? (g = !1) : ((g = !0), e(0), d(0)))
          : (d = a[0]);
      });
      a(function (a) {
        var b = f;
        'number' == typeof a
          ? h || ((h = !0), d(1), c(0))
          : a.tag
          ? void 0 === b || h || ((f = void 0), c(l(1, [x(b)])))
          : (e = a[0]);
      });
      c(
        l(0, [
          function (a) {
            if (!h) {
              if (a) {
                return (h = !0), d(1), e(1);
              }
              if (!g) {
                return (g = !0), d(0), e(0);
              }
            }
          },
        ])
      );
    };
  };
}

function scan$1(a, b) {
  return (function (a, b) {
    return function (c) {
      return function (d) {
        let e = b;
        return c(function (c) {
          'number' == typeof c
            ? (c = 0)
            : c.tag
            ? ((e = a(e, c[0])), (c = l(1, [e])))
            : (c = l(0, [c[0]]));
          d(c);
        });
      };
    };
  })(a, b);
}

function share$1(a) {
  function b(a) {
    'number' == typeof a
      ? (c.forEach(J), (c = []))
      : a.tag
      ? ((e = !1),
        c.forEach(function (b) {
          b(a);
        }))
      : (d = a[0]);
  }
  let c = [],
    d = m,
    e = !1;
  return function (f) {
    function g(a) {
      return a !== f;
    }
    c = c.concat(f);
    1 === c.length && a(b);
    f(
      l(0, [
        function (a) {
          if (a) {
            if (((c = c.filter(g)), 0 === c.length)) {
              return d(1);
            }
          } else {
            e || ((e = !0), d(a));
          }
        },
      ])
    );
  };
}

function skip$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = a;
      return b(function (a) {
        'number' == typeof a
          ? c(a)
          : a.tag
          ? 0 < e
            ? ((e = (e - 1) | 0), d(0))
            : c(a)
          : ((d = a[0]), c(a));
      });
    };
  };
}

function skipUntil$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' == typeof a
          ? g && ((k = !0), e(1))
          : a.tag
          ? ((g = !1), f(1))
          : ((f = a = a[0]), a(0));
      }
      let e = m,
        f = m,
        g = !0,
        h = !1,
        k = !1;
      b(function (b) {
        'number' == typeof b
          ? (g && f(1), (k = !0), c(0))
          : b.tag
          ? g || k
            ? h
              ? (h = !1)
              : ((h = !0), e(0), f(0))
            : ((h = !1), c(b))
          : ((e = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!k) {
              if (a) {
                if (((k = !0), e(1), g)) {
                  return f(1);
                }
              } else {
                h || ((h = !0), g && f(0), e(0));
              }
            }
          },
        ])
      );
    };
  };
}

function skipWhile$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = !0;
      return b(function (b) {
        'number' == typeof b
          ? c(b)
          : b.tag
          ? e
            ? a(b[0])
              ? d(0)
              : ((e = !1), c(b))
            : c(b)
          : ((d = b[0]), c(b));
      });
    };
  };
}

function switchAll$1(a) {
  return K(L)(a);
}

function take$1(a) {
  return function (b) {
    return function (c) {
      let d = !1,
        e = 0,
        f = m;
      b(function (b) {
        'number' == typeof b
          ? d || ((d = !0), c(0))
          : b.tag
          ? e < a && !d && ((e = (e + 1) | 0), c(b), !d && e >= a && ((d = !0), c(0), f(1)))
          : ((b = b[0]), 0 >= a ? ((d = !0), c(0), b(1)) : (f = b));
      });
      c(
        l(0, [
          function (b) {
            if (!d) {
              if (b) {
                return (d = !0), f(1);
              }
              if (e < a) {
                return f(0);
              }
            }
          },
        ])
      );
    };
  };
}

function takeUntil$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' != typeof a && (a.tag ? ((e = !0), f(1), c(0)) : ((g = a = a[0]), a(0)));
      }
      let e = !1,
        f = m,
        g = m;
      b(function (b) {
        'number' == typeof b ? e || ((e = !0), g(1), c(0)) : b.tag ? e || c(b) : ((f = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!e) {
              return a ? ((e = !0), f(1), g(1)) : f(0);
            }
          },
        ])
      );
    };
  };
}

function takeWhile$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = !1;
      return b(function (b) {
        'number' == typeof b
          ? e || ((e = !0), c(0))
          : b.tag
          ? e || (a(b[0]) ? c(b) : ((e = !0), c(0), d(1)))
          : ((d = b[0]), c(b));
      });
    };
  };
}

function throttle$1(a) {
  return function (b) {
    return function (c) {
      function d() {
        void 0 !== g && clearTimeout(x(g));
      }
      function e() {
        g = void 0;
        f = !1;
      }
      let f = !1,
        g = void 0;
      return b(function (b) {
        if ('number' == typeof b) {
          d(), c(0);
        } else if (b.tag) {
          f || ((f = !0), d(), (g = w(setTimeout(e, a(b[0])))), c(b));
        } else {
          var h = b[0];
          c(
            l(0, [
              function (a) {
                return a ? (d(), h(1)) : h(a);
              },
            ])
          );
        }
      });
    };
  };
}

function toArray$1(a) {
  let b = [],
    c = m,
    d = !1;
  a(function (a) {
    'number' == typeof a ? (d = !0) : a.tag ? (b.push(a[0]), c(0)) : ((c = a = a[0]), a(0));
  });
  d || c(1);
  return b;
}

function toCallbag$2(a) {
  return function (b, c) {
    if (0 === b) {
      return a(function (a) {
        function b(a) {
          switch (a) {
            case 1:
              d(0);
              break;

            case 2:
              d(1);
          }
        }
        if ('number' == typeof a) {
          return 2 === c.length ? c(2, void 0) : c.bind(null, 2, void 0);
        }
        if (a.tag) {
          return (a = a[0]), 2 === c.length ? c(1, a) : c.bind(null, 1, a);
        }
        var d = a[0];
        return 2 === c.length ? c(0, b) : c.bind(null, 0, b);
      });
    }
  };
}

function toObservable$2(a) {
  var b = {
    subscribe: function (b, d, e) {
      var c = ('object' == typeof b ? b.next.bind(b) : b) || R,
        g = ('object' == typeof b ? b.complete.bind(b) : e) || S;
      let h = m,
        k = !1;
      a(function (a) {
        if ('number' == typeof a) {
          return (k = !0), g();
        }
        if (a.tag) {
          if (k) {
            return;
          }
          c(a[0]);
          return h(0);
        }
        h = a = a[0];
        a(0);
      });
      return {
        unsubscribe: function () {
          if (!k) {
            return (this.closed = !1), (k = !0), h(1);
          }
        },
        closed: !1,
      };
    },
  };
  b[P] = function () {
    return b;
  };
  return b;
}

function toPromise$1(a) {
  return new Promise(function (b) {
    M(1)(a)(function (a) {
      if ('number' != typeof a) {
        if (a.tag) {
          b(a[0]);
        } else {
          a[0](0);
        }
      }
    });
  });
}

var v = [],
  P =
    'function' == typeof Symbol
      ? Symbol.observable || (Symbol.observable = Symbol('observable'))
      : '@@observable';




/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./src/theme.tsx");


var _jsxFileName = "C:\\Users\\tzaru\\OneDrive\\Radna povr\u0161ina\\Projects\\LIREDDIT-SERVER\\client\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(urql__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["ChakraProvider"], {
      resetCSS: true,
      theme: _theme__WEBPACK_IMPORTED_MODULE_4__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["ColorModeProvider"], {
        options: {
          useSystemColorMode: true
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B1cnFsL2NvcmUvZGlzdC8xOTVmMGE1OC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AdXJxbC9jb3JlL2Rpc3QvdXJxbC1jb3JlLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvZXJyb3IvR3JhcGhRTEVycm9yLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvZXJyb3Ivc3ludGF4RXJyb3IubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2RlZmluZUluc3BlY3QubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2RldkFzc2VydC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2pzdXRpbHMvaW5zcGVjdC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2pzdXRpbHMvaW5zdGFuY2VPZi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2pzdXRpbHMvaW52YXJpYW50Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9pc09iamVjdExpa2UubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL25vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9hc3QubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9ibG9ja1N0cmluZy5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL2RpcmVjdGl2ZUxvY2F0aW9uLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2Uva2luZHMubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9sZXhlci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL2xvY2F0aW9uLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvcGFyc2VyLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvcHJpbnRMb2NhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL3ByaW50ZXIubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9zb3VyY2UubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS90b2tlbktpbmQubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS92aXNpdG9yLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvcG9seWZpbGxzL3N5bWJvbHMubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXJxbC9kaXN0L3VycWwuZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b25rYS9kaXN0L3dvbmthLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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LDhDQUFLLENBQUMsd0RBQVM7O0FBRWxDO0FBQ0E7QUFDQSxtQkFBbUIsOENBQUssQ0FBQyx3REFBUzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSwwRUFBVztBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsYUFBYSw4Q0FBSyxDQUFDLHdEQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxhQUFhLDhDQUFLLENBQUMsd0RBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDBFQUFXO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFF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QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsRUFBRTtBQUNoQjs7O0FBR0E7QUFDQSxnQkFBZ0Isb0NBQW9DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJKO0FBQ25CO0FBQ0k7QUFDRTs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsc0JBQXNCO0FBQ3pGO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzRUFBUywrQ0FBK0Msb0VBQU87QUFDL0Y7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNFQUFTO0FBQzdDLHNDQUFzQyxzRUFBUztBQUMvQyxHQUFHOzs7QUFHSDtBQUNBLFNBQVMsMkVBQW9CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1AsU0FBUyx1RUFBVTtBQUNuQjs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QztBQUNWO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyw0QkFBNEI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsOERBQThELDRCQUE0QjtBQUMxRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FB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QUNBLENBQUM7O0FBRUQsc0JBQXNCLDJEQUFhOztBQUVuQzs7QUFFQTs7QUFFQTtBQUNBLGVBQWUsd0RBQVU7QUFDekIsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRXlIO0FBQ3pIOzs7Ozs7Ozs7Ozs7O0FDMVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWCw0QkFBNEIsU0FBUztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3RUFBd0UsT0FBTztBQUMvRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXFERTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdwQ0Y7QUFDQTtBQUVBOztBQUVBLFNBQVNBLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3ZDLHNCQUNFLHFFQUFDLDZDQUFEO0FBQUEsMkJBQ0UscUVBQUMsK0RBQUQ7QUFBZ0IsY0FBUSxNQUF4QjtBQUF5QixXQUFLLEVBQUVDLDhDQUFoQztBQUFBLDZCQUNFLHFFQUFDLGtFQUFEO0FBQ0UsZUFBTyxFQUFFO0FBQ1BDLDRCQUFrQixFQUFFO0FBRGIsU0FEWDtBQUFBLCtCQUtFLHFFQUFDLFNBQUQsb0JBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0tBZFFGLEs7QUFnQk1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzAwMmM0NDM2NjgyYzkwMzQyZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGsoYSkge1xuICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgYSA/IG5ldyBHcmFwaFFMRXJyb3IoYSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBhICYmIGEubWVzc2FnZSA/IG5ldyBHcmFwaFFMRXJyb3IoYS5tZXNzYWdlLCBhLm5vZGVzLCBhLnNvdXJjZSwgYS5wb3NpdGlvbnMsIGEucGF0aCwgYSwgYS5leHRlbnNpb25zIHx8IHt9KSA6IGE7XG59XG5cbmZ1bmN0aW9uIGwoKSB7XG4gIHJldHVybiB0aGlzLm1lc3NhZ2U7XG59XG5cbmZ1bmN0aW9uIG4oYSwgYikge1xuICBhIHw9IDA7XG4gIGZvciAodmFyIGMgPSAwLCBkID0gMCB8IGIubGVuZ3RoOyBjIDwgZDsgYysrKSB7XG4gICAgYSA9IChhIDw8IDUpICsgYSArIGIuY2hhckNvZGVBdChjKTtcbiAgfVxuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gdChhKSB7XG4gIHZhciBiLCBjLCBkLCBlLCBmLCBnO1xuICBpZiAobnVsbCA9PT0gYSB8fCBxLmhhcyhhKSkge1xuICAgIHJldHVybiBcIm51bGxcIjtcbiAgfVxuICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgYSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSB8fCBcIlwiO1xuICB9XG4gIGlmIChhLnRvSlNPTikge1xuICAgIHJldHVybiB0KGEudG9KU09OKCkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgZm9yIChiID0gXCJbXCIsIGMgPSAwLCBkID0gYS5sZW5ndGg7IGMgPCBkOyBjKyspIHtcbiAgICAgIDAgPCBjICYmIChiICs9IFwiLFwiKTtcbiAgICAgIGIgKz0gMCA8IChlID0gdChhW2NdKSkubGVuZ3RoID8gZSA6IFwibnVsbFwiO1xuICAgIH1cbiAgICByZXR1cm4gYiArIFwiXVwiO1xuICB9XG4gIGlmICghKGIgPSBPYmplY3Qua2V5cyhhKS5zb3J0KCkpLmxlbmd0aCAmJiBhLmNvbnN0cnVjdG9yICYmIGEuY29uc3RydWN0b3IgIT09IE9iamVjdCkge1xuICAgIHJldHVybiBiID0gci5nZXQoYSkgfHwgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiksIHIuc2V0KGEsIGIpLCAne1wiX19rZXlcIjpcIicgKyBiICsgJ1wifSc7XG4gIH1cbiAgcS5hZGQoYSk7XG4gIGMgPSBcIntcIjtcbiAgZCA9IDA7XG4gIGZvciAoZSA9IGIubGVuZ3RoOyBkIDwgZTsgZCsrKSB7XG4gICAgKGcgPSB0KGFbZiA9IGJbZF1dKSkgJiYgKDEgPCBjLmxlbmd0aCAmJiAoYyArPSBcIixcIiksIGMgKz0gdChmKSArIFwiOlwiICsgZyk7XG4gIH1cbiAgcS5kZWxldGUoYSk7XG4gIHJldHVybiBjICsgXCJ9XCI7XG59XG5cbmZ1bmN0aW9uIHUoYSkge1xuICBxLmNsZWFyKCk7XG4gIHJldHVybiB0KGEpO1xufVxuXG5mdW5jdGlvbiB2KGEpIHtcbiAgdmFyIGIgPSAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSA/IGEubG9jICYmIGEubG9jLnNvdXJjZS5ib2R5IHx8IHByaW50KGEpIDogYSkucmVwbGFjZSgvKFtcXHMsXXwjW15cXG5cXHJdKykrL2csIFwiIFwiKS50cmltKCk7XG4gIFwic3RyaW5nXCIgPT0gdHlwZW9mIGEgfHwgYS5sb2MgfHwgKGEubG9jID0ge1xuICAgIHN0YXJ0OiAwLFxuICAgIGVuZDogYi5sZW5ndGgsXG4gICAgc291cmNlOiB7XG4gICAgICBib2R5OiBiLFxuICAgICAgbmFtZTogXCJncWxcIixcbiAgICAgIGxvY2F0aW9uT2Zmc2V0OiB7XG4gICAgICAgIGxpbmU6IDEsXG4gICAgICAgIGNvbHVtbjogMVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiB4KGEpIHtcbiAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGEpIHtcbiAgICB2YXIgYiA9IG4oNTM4MSwgdihhKSkgPj4+IDA7XG4gICAgYSA9IHcuZ2V0KGIpIHx8IHBhcnNlKGEsIHtcbiAgICAgIG5vTG9jYXRpb246ICEwXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgYiA9IGEuX19rZXkgfHwgbig1MzgxLCB2KGEpKSA+Pj4gMCwgYSA9IHcuZ2V0KGIpIHx8IGE7XG4gIH1cbiAgYS5sb2MgfHwgdihhKTtcbiAgYS5fX2tleSA9IGI7XG4gIHcuc2V0KGIsIGEpO1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24geShhKSB7XG4gIHZhciBiLCBjLCBkO1xuICBmb3IgKGIgPSAwLCBjID0gYS5kZWZpbml0aW9ucy5sZW5ndGg7IGIgPCBjOyBiKyspIHtcbiAgICBpZiAoKGQgPSBhLmRlZmluaXRpb25zW2JdKS5raW5kID09PSBLaW5kLk9QRVJBVElPTl9ERUZJTklUSU9OICYmIGQubmFtZSkge1xuICAgICAgcmV0dXJuIGQubmFtZS52YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24geihhLCBiLCBjKSB7XG4gIHJldHVybiB7XG4gICAgb3BlcmF0aW9uOiBhLFxuICAgIGRhdGE6IGIuZGF0YSxcbiAgICBlcnJvcjogQXJyYXkuaXNBcnJheShiLmVycm9ycykgPyBuZXcgbSh7XG4gICAgICBncmFwaFFMRXJyb3JzOiBiLmVycm9ycyxcbiAgICAgIHJlc3BvbnNlOiBjXG4gICAgfSkgOiB2b2lkIDAsXG4gICAgZXh0ZW5zaW9uczogXCJvYmplY3RcIiA9PSB0eXBlb2YgYi5leHRlbnNpb25zICYmIGIuZXh0ZW5zaW9ucyB8fCB2b2lkIDBcbiAgfTtcbn1cblxuZnVuY3Rpb24gQShhLCBiLCBjKSB7XG4gIHJldHVybiB7XG4gICAgb3BlcmF0aW9uOiBhLFxuICAgIGRhdGE6IHZvaWQgMCxcbiAgICBlcnJvcjogbmV3IG0oe1xuICAgICAgbmV0d29ya0Vycm9yOiBiLFxuICAgICAgcmVzcG9uc2U6IGNcbiAgICB9KSxcbiAgICBleHRlbnNpb25zOiB2b2lkIDBcbiAgfTtcbn1cblxuZnVuY3Rpb24gQigpIHtcbiAgcmV0dXJuIChCID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbihhKSB7XG4gICAgdmFyIGIsIGMsIGQ7XG4gICAgZm9yIChiID0gMTsgYiA8IGFyZ3VtZW50cy5sZW5ndGg7IGIrKykge1xuICAgICAgYyA9IGFyZ3VtZW50c1tiXTtcbiAgICAgIGZvciAoZCBpbiBjKSB7XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjLCBkKSAmJiAoYVtkXSA9IGNbZF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfSkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gbWFrZUZldGNoQm9keShhKSB7XG4gIHJldHVybiB7XG4gICAgcXVlcnk6IHByaW50KGEucXVlcnkpLFxuICAgIG9wZXJhdGlvbk5hbWU6IHkoYS5xdWVyeSksXG4gICAgdmFyaWFibGVzOiBhLnZhcmlhYmxlcyB8fCB2b2lkIDAsXG4gICAgZXh0ZW5zaW9uczogdm9pZCAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VGZXRjaFVSTChhLCBiKSB7XG4gIHZhciBjID0gYS5jb250ZXh0LnVybDtcbiAgaWYgKFwicXVlcnlcIiAhPT0gYS5raW5kIHx8ICFhLmNvbnRleHQucHJlZmVyR2V0TWV0aG9kIHx8ICFiKSB7XG4gICAgcmV0dXJuIGM7XG4gIH1cbiAgYSA9IFtdO1xuICBiLm9wZXJhdGlvbk5hbWUgJiYgYS5wdXNoKFwib3BlcmF0aW9uTmFtZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChiLm9wZXJhdGlvbk5hbWUpKTtcbiAgYi5xdWVyeSAmJiBhLnB1c2goXCJxdWVyeT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChiLnF1ZXJ5LnJlcGxhY2UoLyhbXFxzLF18I1teXFxuXFxyXSspKy9nLCBcIiBcIikudHJpbSgpKSk7XG4gIGIudmFyaWFibGVzICYmIGEucHVzaChcInZhcmlhYmxlcz1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh1KGIudmFyaWFibGVzKSkpO1xuICBiLmV4dGVuc2lvbnMgJiYgYS5wdXNoKFwiZXh0ZW5zaW9ucz1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh1KGIuZXh0ZW5zaW9ucykpKTtcbiAgcmV0dXJuIGMgKyBcIj9cIiArIGEuam9pbihcIiZcIik7XG59XG5cbmZ1bmN0aW9uIG1ha2VGZXRjaE9wdGlvbnMoYSwgYikge1xuICB2YXIgYyA9IFwicXVlcnlcIiA9PT0gYS5raW5kICYmICEhYS5jb250ZXh0LnByZWZlckdldE1ldGhvZDtcbiAgcmV0dXJuIEIoe30sIGEgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGEuY29udGV4dC5mZXRjaE9wdGlvbnMgPyBhLmNvbnRleHQuZmV0Y2hPcHRpb25zKCkgOiBhLmNvbnRleHQuZmV0Y2hPcHRpb25zIHx8IHt9LCB7XG4gICAgYm9keTogIWMgJiYgYiA/IEpTT04uc3RyaW5naWZ5KGIpIDogdm9pZCAwLFxuICAgIG1ldGhvZDogYyA/IFwiR0VUXCIgOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiBjID8gYS5oZWFkZXJzIDogQih7fSwge1xuICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9LCBhLmhlYWRlcnMpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlRmV0Y2hTb3VyY2UoYSwgYiwgYykge1xuICByZXR1cm4gbWFrZSgoZnVuY3Rpb24oZCkge1xuICAgIHZhciBlID0gZC5uZXh0LCBmID0gZC5jb21wbGV0ZSwgZyA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIEFib3J0Q29udHJvbGxlciA/IG5ldyBBYm9ydENvbnRyb2xsZXIgOiBudWxsLCBwID0gITE7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXApIHtcbiAgICAgICAgcmV0dXJuIGcgJiYgKGMuc2lnbmFsID0gZy5zaWduYWwpLCBmdW5jdGlvbiBDKGEsIGIsIGMpIHtcbiAgICAgICAgICB2YXIgZSwgZCA9ICExO1xuICAgICAgICAgIHJldHVybiAoYS5jb250ZXh0LmZldGNoIHx8IGZldGNoKShiLCBjKS50aGVuKChmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICBlID0gYTtcbiAgICAgICAgICAgIGQgPSAyMDAgPiBhLnN0YXR1cyB8fCBhLnN0YXR1cyA+PSAoXCJtYW51YWxcIiA9PT0gYy5yZWRpcmVjdCA/IDQwMCA6IDMwMCk7XG4gICAgICAgICAgICByZXR1cm4gYS5qc29uKCk7XG4gICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgICAgIGlmICghKFwiZGF0YVwiIGluIGIpICYmICEoXCJlcnJvcnNcIiBpbiBiKSkge1xuICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIk5vIENvbnRlbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geihhLCBiLCBlKTtcbiAgICAgICAgICB9KSkuY2F0Y2goKGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgICAgIGlmIChcIkFib3J0RXJyb3JcIiAhPT0gYi5uYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiBBKGEsIGQgPyBFcnJvcihlLnN0YXR1c1RleHQpIDogYiwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KGEsIGIsIGMpO1xuICAgICAgfVxuICAgIH0pKS50aGVuKChmdW5jdGlvbihhKSB7XG4gICAgICBwIHx8IChwID0gITAsIGEgJiYgZShhKSwgZigpKTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcCA9ICEwO1xuICAgICAgZyAmJiBnLmFib3J0KCk7XG4gICAgfTtcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KGEsIGIpIHtcbiAgYSA9IHgoYSk7XG4gIHJldHVybiB7XG4gICAga2V5OiBiID8gbihhLl9fa2V5LCB1KGIpKSA+Pj4gMCA6IGEuX19rZXksXG4gICAgcXVlcnk6IGEsXG4gICAgdmFyaWFibGVzOiBiIHx8IHt9XG4gIH07XG59XG5cbnZhciBtLCBxLCByLCB3O1xuXG5pbXBvcnQgeyBtYWtlIH0gZnJvbSBcIndvbmthXCI7XG5cbmltcG9ydCB7IEdyYXBoUUxFcnJvciB9IGZyb20gXCJncmFwaHFsL2Vycm9yL0dyYXBoUUxFcnJvci5tanNcIjtcblxuaW1wb3J0IHsgS2luZCB9IGZyb20gXCJncmFwaHFsL2xhbmd1YWdlL2tpbmRzLm1qc1wiO1xuXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gXCJncmFwaHFsL2xhbmd1YWdlL3BhcnNlci5tanNcIjtcblxuaW1wb3J0IHsgcHJpbnQgfSBmcm9tIFwiZ3JhcGhxbC9sYW5ndWFnZS9wcmludGVyLm1qc1wiO1xuXG5tID0gZnVuY3Rpb24oYSkge1xuICBmdW5jdGlvbiBiKGIpIHtcbiAgICB2YXIgZiwgYyA9IGIubmV0d29ya0Vycm9yLCBlID0gYi5yZXNwb25zZTtcbiAgICBmID0gZnVuY3Rpb24gaChhLCBiKSB7XG4gICAgICB2YXIgZCA9IFwiXCI7XG4gICAgICBpZiAodm9pZCAwICE9PSBhKSB7XG4gICAgICAgIHJldHVybiBkID0gXCJbTmV0d29ya10gXCIgKyBhLm1lc3NhZ2U7XG4gICAgICB9XG4gICAgICB2b2lkIDAgIT09IGIgJiYgYi5mb3JFYWNoKChmdW5jdGlvbiBjKGEpIHtcbiAgICAgICAgZCArPSBcIltHcmFwaFFMXSBcIiArIGEubWVzc2FnZSArIFwiXFxuXCI7XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gZC50cmltKCk7XG4gICAgfShjLCBiID0gKGIuZ3JhcGhRTEVycm9ycyB8fCBbXSkubWFwKGspKTtcbiAgICBhLmNhbGwodGhpcywgZik7XG4gICAgdGhpcy5uYW1lID0gXCJDb21iaW5lZEVycm9yXCI7XG4gICAgdGhpcy5tZXNzYWdlID0gZjtcbiAgICB0aGlzLmdyYXBoUUxFcnJvcnMgPSBiO1xuICAgIHRoaXMubmV0d29ya0Vycm9yID0gYztcbiAgICB0aGlzLnJlc3BvbnNlID0gZTtcbiAgfVxuICBhICYmIChiLl9fcHJvdG9fXyA9IGEpO1xuICAoYi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGEgJiYgYS5wcm90b3R5cGUpKS5jb25zdHJ1Y3RvciA9IGI7XG4gIGIucHJvdG90eXBlLnRvU3RyaW5nID0gbDtcbiAgcmV0dXJuIGI7XG59KEVycm9yKTtcblxucSA9IG5ldyBTZXQsIHIgPSBuZXcgV2Vha01hcDtcblxudyA9IG5ldyBNYXA7XG5cbmV4cG9ydCB7IG0gYXMgQywgQiBhcyBfLCBBIGFzIGEsIG1ha2VGZXRjaEJvZHkgYXMgYiwgbWFrZUZldGNoVVJMIGFzIGMsIG1ha2VGZXRjaE9wdGlvbnMgYXMgZCwgbWFrZUZldGNoU291cmNlIGFzIGUsIGNyZWF0ZVJlcXVlc3QgYXMgZiwgdSBhcyBnLCB5IGFzIGgsIHggYXMgaywgeiBhcyBtLCB2IGFzIHMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPTE5NWYwYTU4Lm1qcy5tYXBcbiIsImZ1bmN0aW9uIG4oYSwgYikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgIGZvciAodmFyIGMgPSAwOyBjIDwgYS5sZW5ndGg7IGMrKykge1xuICAgICAgbihhW2NdLCBiKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2YgYSAmJiBudWxsICE9PSBhKSB7XG4gICAgZm9yIChjIGluIGEpIHtcbiAgICAgIFwiX190eXBlbmFtZVwiID09PSBjICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIGFbY10gPyBiW2FbY11dID0gMCA6IG4oYVtjXSwgYik7XG4gICAgfVxuICB9XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBwKGEpIHtcbiAgcmV0dXJuIGEua2luZCA9PT0gS2luZC5GSUVMRCAmJiBcIl9fdHlwZW5hbWVcIiA9PT0gYS5uYW1lLnZhbHVlICYmICFhLmFsaWFzO1xufVxuXG5mdW5jdGlvbiByKGEpIHtcbiAgaWYgKGEuc2VsZWN0aW9uU2V0ICYmICFhLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLnNvbWUocCkpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGEsIHtcbiAgICAgIHNlbGVjdGlvblNldDogX2V4dGVuZHMoe30sIGEuc2VsZWN0aW9uU2V0LCB7XG4gICAgICAgIHNlbGVjdGlvbnM6IGEuc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuY29uY2F0KFsge1xuICAgICAgICAgIGtpbmQ6IEtpbmQuRklFTEQsXG4gICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAga2luZDogS2luZC5OQU1FLFxuICAgICAgICAgICAgdmFsdWU6IFwiX190eXBlbmFtZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9IF0pXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHUoYSkge1xuICBhID0ga2V5RG9jdW1lbnQoYSk7XG4gIHZhciBiID0gdC5nZXQoYS5fX2tleSk7XG4gIGIgfHwgKChiID0gdmlzaXQoYSwge1xuICAgIEZpZWxkOiByLFxuICAgIElubGluZUZyYWdtZW50OiByXG4gIH0pKS5fX2tleSA9IGEuX19rZXksIHQuc2V0KGEuX19rZXksIGIpKTtcbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIHYoYSkge1xuICByZXR1cm4gYSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBhID8gT2JqZWN0LmtleXMoYSkucmVkdWNlKChmdW5jdGlvbihiLCBjKSB7XG4gICAgdmFyIGQgPSBhW2NdO1xuICAgIFwiX190eXBlbmFtZVwiID09PSBjID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGIsIFwiX190eXBlbmFtZVwiLCB7XG4gICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgIHZhbHVlOiBkXG4gICAgfSkgOiBBcnJheS5pc0FycmF5KGQpID8gYltjXSA9IGQubWFwKHYpIDogYltjXSA9IGQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZCAmJiBcIl9fdHlwZW5hbWVcIiBpbiBkID8gdihkKSA6IGQ7XG4gICAgcmV0dXJuIGI7XG4gIH0pLCB7fSkgOiBhO1xufVxuXG5mdW5jdGlvbiB3KGEpIHtcbiAgYS50b1Byb21pc2UgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdG9Qcm9taXNlKHRha2UoMSkoYSkpO1xuICB9O1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24geihhLCBiLCBjKSB7XG4gIGMgfHwgKGMgPSBiLmNvbnRleHQpO1xuICByZXR1cm4ge1xuICAgIGtleTogYi5rZXksXG4gICAgcXVlcnk6IGIucXVlcnksXG4gICAgdmFyaWFibGVzOiBiLnZhcmlhYmxlcyxcbiAgICBraW5kOiBhLFxuICAgIGNvbnRleHQ6IGMsXG4gICAgZ2V0IG9wZXJhdGlvbk5hbWUoKSB7XG4gICAgICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICAgIHZhciBhID0geV9vcGVyYXRpb25OYW1lLCBjID0gYS5rZXk7XG4gICAgICAgIGEgPSBhLm1lc3NhZ2U7XG4gICAgICAgIHhbY10gfHwgKGNvbnNvbGUud2FybihcIltXQVJOSU5HOiBEZXByZWNhdGVkXSBcIiArIGEpLCB4W2NdID0gITApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMua2luZDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIEEoYSwgYikge1xuICByZXR1cm4geihhLmtpbmQsIGEsIF9leHRlbmRzKHt9LCBhLmNvbnRleHQsIHtcbiAgICBtZXRhOiBfZXh0ZW5kcyh7fSwgYS5jb250ZXh0Lm1ldGEsIGIpXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gQigpIHt9XG5cbmZ1bmN0aW9uIEMoYSwgYiwgYykge1xuICB2YXIgZCwgZSwgZjtcbiAgZm9yIChkID0gMDsgZCA8IGMubGVuZ3RoOyBkKyspIHtcbiAgICBpZiAoY1tkXS5raW5kID09PSBLaW5kLkZSQUdNRU5UX0RFRklOSVRJT04pIHtcbiAgICAgIGUgPSBjW2RdLm5hbWUudmFsdWUsIGYgPSBzdHJpbmdpZnlEb2N1bWVudChjW2RdKTtcbiAgICAgIGEuaGFzKGUpID8gXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIGEuZ2V0KGUpICE9PSBmICYmIGNvbnNvbGUud2FybihcIltXQVJOSU5HOiBEdXBsaWNhdGUgRnJhZ21lbnRdIEEgZnJhZ21lbnQgd2l0aCBuYW1lIGBcIiArIGUgKyBcImAgYWxyZWFkeSBleGlzdHMgaW4gdGhpcyBkb2N1bWVudC5cXG5XaGlsZSBmcmFnbWVudCBuYW1lcyBtYXkgbm90IGJlIHVuaXF1ZSBhY3Jvc3MgeW91ciBzb3VyY2UsIGVhY2ggbmFtZSBtdXN0IGJlIHVuaXF1ZSBwZXIgZG9jdW1lbnQuXCIpIDogKGEuc2V0KGUsIGYpLCBcbiAgICAgIGIucHVzaChjW2RdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGIucHVzaChjW2RdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gRChhKSB7XG4gIHJldHVybiBcInN1YnNjcmlwdGlvblwiICE9PSAoYSA9IGEua2luZCkgJiYgXCJxdWVyeVwiICE9PSBhO1xufVxuXG5mdW5jdGlvbiBFKGEpIHtcbiAgcmV0dXJuIGEucGF0aCB8fCBhLmV4dGVuc2lvbnMgPyB7XG4gICAgbWVzc2FnZTogYS5tZXNzYWdlLFxuICAgIHBhdGg6IGEucGF0aCxcbiAgICBleHRlbnNpb25zOiBhLmV4dGVuc2lvbnNcbiAgfSA6IGEubWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gRihhKSB7XG4gIHJldHVybiBcIm11dGF0aW9uXCIgIT09IChhID0gYS5raW5kKSAmJiBcInF1ZXJ5XCIgIT09IGE7XG59XG5cbmZ1bmN0aW9uIEcoYSkge1xuICB2YXIgYiA9IHooYS5raW5kLCBhKTtcbiAgYi5xdWVyeSA9IHUoYS5xdWVyeSk7XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBIKGEpIHtcbiAgcmV0dXJuIFwicXVlcnlcIiAhPT0gYS5raW5kIHx8IFwiY2FjaGUtb25seVwiICE9PSBhLmNvbnRleHQucmVxdWVzdFBvbGljeTtcbn1cblxuZnVuY3Rpb24gSShhKSB7XG4gIHJldHVybiBBKGEsIHtcbiAgICBjYWNoZU91dGNvbWU6IFwibWlzc1wiXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBKKGEpIHtcbiAgcmV0dXJuIEYoYSk7XG59XG5cbmZ1bmN0aW9uIEsoYSkge1xuICBmdW5jdGlvbiBiKGEpIHtcbiAgICB2YXIgYiA9IGEuY29udGV4dC5yZXF1ZXN0UG9saWN5O1xuICAgIHJldHVybiBcInF1ZXJ5XCIgPT09IGEua2luZCAmJiBcIm5ldHdvcmstb25seVwiICE9PSBiICYmIChcImNhY2hlLW9ubHlcIiA9PT0gYiB8fCBrLmhhcyhhLmtleSkpO1xuICB9XG4gIGZ1bmN0aW9uIGMoYSkge1xuICAgIHZhciBjID0gay5nZXQoYS5rZXkpO1xuICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBxKF9leHRlbmRzKHt9LCB7XG4gICAgICBvcGVyYXRpb246IGFcbiAgICB9LCBjID8ge1xuICAgICAgdHlwZTogXCJjYWNoZUhpdFwiLFxuICAgICAgbWVzc2FnZTogXCJUaGUgcmVzdWx0IHdhcyBzdWNjZXNzZnVsbHkgcmV0cmllZCBmcm9tIHRoZSBjYWNoZVwiXG4gICAgfSA6IHtcbiAgICAgIHR5cGU6IFwiY2FjaGVNaXNzXCIsXG4gICAgICBtZXNzYWdlOiBcIlRoZSByZXN1bHQgY291bGQgbm90IGJlIHJldHJpZXZlZCBmcm9tIHRoZSBjYWNoZVwiXG4gICAgfSkpO1xuICAgIGMgPSBfZXh0ZW5kcyh7fSwgYywge1xuICAgICAgb3BlcmF0aW9uOiBBKGEsIHtcbiAgICAgICAgY2FjaGVPdXRjb21lOiBjID8gXCJoaXRcIiA6IFwibWlzc1wiXG4gICAgICB9KVxuICAgIH0pO1xuICAgIFwiY2FjaGUtYW5kLW5ldHdvcmtcIiA9PT0gYS5jb250ZXh0LnJlcXVlc3RQb2xpY3kgJiYgKGMuc3RhbGUgPSAhMCwgTChtLCBhKSk7XG4gICAgcmV0dXJuIGM7XG4gIH1cbiAgZnVuY3Rpb24gZChhKSB7XG4gICAgcmV0dXJuICFGKGEpICYmIGIoYSk7XG4gIH1cbiAgZnVuY3Rpb24gZShhKSB7XG4gICAgZnVuY3Rpb24gYyhhKSB7XG4gICAgICBsLmFkZChhKTtcbiAgICB9XG4gICAgdmFyIGUsIGwsIGcsIGQgPSBhLm9wZXJhdGlvbjtcbiAgICBpZiAoZCkge1xuICAgICAgZSA9IE9iamVjdC5rZXlzKG4oYS5kYXRhLCB7fSkpLmNvbmNhdChkLmNvbnRleHQuYWRkaXRpb25hbFR5cGVuYW1lcyB8fCBbXSk7XG4gICAgICBpZiAoXCJtdXRhdGlvblwiID09PSBhLm9wZXJhdGlvbi5raW5kKSB7XG4gICAgICAgIGwgPSBuZXcgU2V0O1xuICAgICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgcSh7XG4gICAgICAgICAgdHlwZTogXCJjYWNoZUludmFsaWRhdGlvblwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIGZvbGxvd2luZyB0eXBlbmFtZXMgaGF2ZSBiZWVuIGludmFsaWRhdGVkOiBcIiArIGUsXG4gICAgICAgICAgb3BlcmF0aW9uOiBkLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHR5cGVuYW1lczogZSxcbiAgICAgICAgICAgIHJlc3BvbnNlOiBhXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzb3VyY2U6IFwiY2FjaGVFeGNoYW5nZVwiXG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGEgPSAwOyBhIDwgZS5sZW5ndGg7IGErKykge1xuICAgICAgICAgIChnID0gaFtnID0gZVthXV0gfHwgKGhbZ10gPSBuZXcgU2V0KSkuZm9yRWFjaChjKTtcbiAgICAgICAgICBnLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgbC5mb3JFYWNoKChmdW5jdGlvbiBiKGEpIHtcbiAgICAgICAgICBrLmhhcyhhKSAmJiAoZCA9IGsuZ2V0KGEpLm9wZXJhdGlvbiwgay5kZWxldGUoYSksIEwobSwgZCkpO1xuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2UgaWYgKFwicXVlcnlcIiA9PT0gZC5raW5kICYmIGEuZGF0YSkge1xuICAgICAgICBmb3IgKGsuc2V0KGQua2V5LCBhKSwgYSA9IDA7IGEgPCBlLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgKGhbZyA9IGVbYV1dIHx8IChoW2ddID0gbmV3IFNldCkpLmFkZChkLmtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZihhKSB7XG4gICAgcmV0dXJuICFGKGEpICYmICFiKGEpO1xuICB9XG4gIHZhciBnID0gYS5mb3J3YXJkLCBtID0gYS5jbGllbnQsIHEgPSBhLmRpc3BhdGNoRGVidWcsIGsgPSBuZXcgTWFwLCBoID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGEpIHtcbiAgICB2YXIgYiA9IHNoYXJlKGEpO1xuICAgIGEgPSBtYXAoYykoZmlsdGVyKGQpKGIpKTtcbiAgICBiID0gdGFwKGUpKGcoZmlsdGVyKEgpKG1hcChJKShtZXJnZShbIG1hcChHKShmaWx0ZXIoZikoYikpLCBmaWx0ZXIoSikoYikgXSkpKSkpO1xuICAgIHJldHVybiBtZXJnZShbIGEsIGIgXSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIEwoYSwgYikge1xuICByZXR1cm4gYS5yZWV4ZWN1dGVPcGVyYXRpb24oeihiLmtpbmQsIGIsIF9leHRlbmRzKHt9LCBiLmNvbnRleHQsIHtcbiAgICByZXF1ZXN0UG9saWN5OiBcIm5ldHdvcmstb25seVwiXG4gIH0pKSk7XG59XG5cbmZ1bmN0aW9uIE0oYSkge1xuICByZXR1cm4gY29uc29sZS5sb2coXCJbRXhjaGFuZ2UgZGVidWddOiBDb21wbGV0ZWQgb3BlcmF0aW9uOiBcIiwgYSk7XG59XG5cbmZ1bmN0aW9uIE4oYSkge1xuICByZXR1cm4gY29uc29sZS5sb2coXCJbRXhjaGFuZ2UgZGVidWddOiBJbmNvbWluZyBvcGVyYXRpb246IFwiLCBhKTtcbn1cblxuZnVuY3Rpb24gTyhhKSB7XG4gIGZ1bmN0aW9uIGIoYSkge1xuICAgIGYuZGVsZXRlKGEub3BlcmF0aW9uLmtleSk7XG4gIH1cbiAgZnVuY3Rpb24gYyhhKSB7XG4gICAgdmFyIGMgPSBhLmtleSwgYiA9IGEua2luZDtcbiAgICBpZiAoXCJ0ZWFyZG93blwiID09PSBiKSB7XG4gICAgICByZXR1cm4gZi5kZWxldGUoYyksICEwO1xuICAgIH1cbiAgICBpZiAoXCJxdWVyeVwiICE9PSBiICYmIFwic3Vic2NyaXB0aW9uXCIgIT09IGIpIHtcbiAgICAgIHJldHVybiAhMDtcbiAgICB9XG4gICAgYiA9IGYuaGFzKGMpO1xuICAgIGYuYWRkKGMpO1xuICAgIGIgJiYgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIGUoe1xuICAgICAgdHlwZTogXCJkZWR1cFwiLFxuICAgICAgbWVzc2FnZTogXCJBbiBvcGVyYXRpb24gaGFzIGJlZW4gZGVkdXBlZC5cIixcbiAgICAgIG9wZXJhdGlvbjogYSxcbiAgICAgIHNvdXJjZTogXCJkZWR1cEV4Y2hhbmdlXCJcbiAgICB9KTtcbiAgICByZXR1cm4gIWI7XG4gIH1cbiAgdmFyIGQgPSBhLmZvcndhcmQsIGUgPSBhLmRpc3BhdGNoRGVidWcsIGYgPSBuZXcgU2V0O1xuICByZXR1cm4gZnVuY3Rpb24oYSkge1xuICAgIGEgPSBmaWx0ZXIoYykoYSk7XG4gICAgcmV0dXJuIHRhcChiKShkKGEpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUChhKSB7XG4gIHJldHVybiBcInF1ZXJ5XCIgPT09IGEua2luZCB8fCBcIm11dGF0aW9uXCIgPT09IGEua2luZDtcbn1cblxuZnVuY3Rpb24gUShhKSB7XG4gIHJldHVybiBcInF1ZXJ5XCIgIT09IGEua2luZCAmJiBcIm11dGF0aW9uXCIgIT09IGEua2luZDtcbn1cblxuZnVuY3Rpb24gUihhKSB7XG4gIHZhciBiID0gYS5mb3J3YXJkLCBjID0gYS5kaXNwYXRjaERlYnVnO1xuICByZXR1cm4gZnVuY3Rpb24oYSkge1xuICAgIHZhciBmLCBkID0gc2hhcmUoYSk7XG4gICAgYSA9IG1lcmdlTWFwKChmdW5jdGlvbihhKSB7XG4gICAgICB2YXIgYiA9IGEua2V5LCBlID0gZmlsdGVyKChmdW5jdGlvbihhKSB7XG4gICAgICAgIHJldHVybiBcInRlYXJkb3duXCIgPT09IGEua2luZCAmJiBhLmtleSA9PT0gYjtcbiAgICAgIH0pKShkKSwgZiA9IG1ha2VGZXRjaEJvZHkoYSksIGggPSBtYWtlRmV0Y2hVUkwoYSwgZiksIGwgPSBtYWtlRmV0Y2hPcHRpb25zKGEsIGYpO1xuICAgICAgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIGMoe1xuICAgICAgICB0eXBlOiBcImZldGNoUmVxdWVzdFwiLFxuICAgICAgICBtZXNzYWdlOiBcIkEgZmV0Y2ggcmVxdWVzdCBpcyBiZWluZyBleGVjdXRlZC5cIixcbiAgICAgICAgb3BlcmF0aW9uOiBhLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXJsOiBoLFxuICAgICAgICAgIGZldGNoT3B0aW9uczogbFxuICAgICAgICB9LFxuICAgICAgICBzb3VyY2U6IFwiZmV0Y2hFeGNoYW5nZVwiXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvblB1c2goKGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgdmFyIGQgPSBiLmRhdGEgPyB2b2lkIDAgOiBiLmVycm9yO1xuICAgICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgYyh7XG4gICAgICAgICAgdHlwZTogZCA/IFwiZmV0Y2hFcnJvclwiIDogXCJmZXRjaFN1Y2Nlc3NcIixcbiAgICAgICAgICBtZXNzYWdlOiBcIkEgXCIgKyAoZCA/IFwiZmFpbGVkXCIgOiBcInN1Y2Nlc3NmdWxcIikgKyBcIiBmZXRjaCByZXNwb25zZSBoYXMgYmVlbiByZXR1cm5lZC5cIixcbiAgICAgICAgICBvcGVyYXRpb246IGEsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdXJsOiBoLFxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zOiBsLFxuICAgICAgICAgICAgdmFsdWU6IGQgfHwgYlxuICAgICAgICAgIH0sXG4gICAgICAgICAgc291cmNlOiBcImZldGNoRXhjaGFuZ2VcIlxuICAgICAgICB9KTtcbiAgICAgIH0pKSh0YWtlVW50aWwoZSkobWFrZUZldGNoU291cmNlKGEsIGgsIGwpKSk7XG4gICAgfSkpKGZpbHRlcihQKShkKSk7XG4gICAgZiA9IGIoZmlsdGVyKFEpKGQpKTtcbiAgICByZXR1cm4gbWVyZ2UoWyBhLCBmIF0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBTKCkge1xuICByZXR1cm4gITE7XG59XG5cbmZ1bmN0aW9uIFQoYSkge1xuICBmdW5jdGlvbiBiKGEpIHtcbiAgICBpZiAoXCJ0ZWFyZG93blwiICE9PSBhLmtpbmQgJiYgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICB2YXIgYiA9ICdObyBleGNoYW5nZSBoYXMgaGFuZGxlZCBvcGVyYXRpb25zIG9mIGtpbmQgXCInICsgYS5raW5kICsgXCJcXFwiLiBDaGVjayB3aGV0aGVyIHlvdSd2ZSBhZGRlZCBhbiBleGNoYW5nZSByZXNwb25zaWJsZSBmb3IgdGhlc2Ugb3BlcmF0aW9ucy5cIjtcbiAgICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBjKHtcbiAgICAgICAgdHlwZTogXCJmYWxsYmFja0NhdGNoXCIsXG4gICAgICAgIG1lc3NhZ2U6IGIsXG4gICAgICAgIG9wZXJhdGlvbjogYSxcbiAgICAgICAgc291cmNlOiBcImZhbGxiYWNrRXhjaGFuZ2VcIlxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLndhcm4oYik7XG4gICAgfVxuICB9XG4gIHZhciBjID0gYS5kaXNwYXRjaERlYnVnO1xuICByZXR1cm4gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBmaWx0ZXIoUykodGFwKGIpKGEpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gVihhKSB7XG4gIHJldHVybiBmdW5jdGlvbihiKSB7XG4gICAgdmFyIGMgPSBiLmNsaWVudCwgZCA9IGIuZGlzcGF0Y2hEZWJ1ZztcbiAgICByZXR1cm4gYS5yZWR1Y2VSaWdodCgoZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGIoe1xuICAgICAgICBjbGllbnQ6IGMsXG4gICAgICAgIGZvcndhcmQ6IGEsXG4gICAgICAgIGRpc3BhdGNoRGVidWc6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgZChfZXh0ZW5kcyh7fSwge1xuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgc291cmNlOiBiLm5hbWVcbiAgICAgICAgICB9LCBhKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pLCBiLmZvcndhcmQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBYKGEpIHtcbiAgdmFyIGQsIGUsIGYsIGcsIG0sIGMgPSB0aGlzO1xuICB0aGlzLmFjdGl2ZU9wZXJhdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLnF1ZXVlID0gW107XG4gIHRoaXMuY3JlYXRlT3BlcmF0aW9uQ29udGV4dCA9IGZ1bmN0aW9uKGEpIHtcbiAgICBhIHx8IChhID0ge30pO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwge1xuICAgICAgdXJsOiBjLnVybCxcbiAgICAgIGZldGNoT3B0aW9uczogYy5mZXRjaE9wdGlvbnMsXG4gICAgICBmZXRjaDogYy5mZXRjaCxcbiAgICAgIHByZWZlckdldE1ldGhvZDogYy5wcmVmZXJHZXRNZXRob2RcbiAgICB9LCBhLCB7XG4gICAgICBzdXNwZW5zZTogYS5zdXNwZW5zZSB8fCAhMSAhPT0gYS5zdXNwZW5zZSAmJiBjLnN1c3BlbnNlLFxuICAgICAgcmVxdWVzdFBvbGljeTogYS5yZXF1ZXN0UG9saWN5IHx8IGMucmVxdWVzdFBvbGljeVxuICAgIH0pO1xuICB9O1xuICB0aGlzLmNyZWF0ZVJlcXVlc3RPcGVyYXRpb24gPSBmdW5jdGlvbihhLCBiLCBkKSB7XG4gICAgcmV0dXJuIHooYSwgYiwgYy5jcmVhdGVPcGVyYXRpb25Db250ZXh0KGQpKTtcbiAgfTtcbiAgdGhpcy5leGVjdXRlUXVlcnkgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgYSA9IGMuY3JlYXRlUmVxdWVzdE9wZXJhdGlvbihcInF1ZXJ5XCIsIGEsIGIpO1xuICAgIHJldHVybiBjLmV4ZWN1dGVSZXF1ZXN0T3BlcmF0aW9uKGEpO1xuICB9O1xuICB0aGlzLmV4ZWN1dGVTdWJzY3JpcHRpb24gPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgYSA9IGMuY3JlYXRlUmVxdWVzdE9wZXJhdGlvbihcInN1YnNjcmlwdGlvblwiLCBhLCBiKTtcbiAgICByZXR1cm4gYy5leGVjdXRlUmVxdWVzdE9wZXJhdGlvbihhKTtcbiAgfTtcbiAgdGhpcy5leGVjdXRlTXV0YXRpb24gPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgYSA9IGMuY3JlYXRlUmVxdWVzdE9wZXJhdGlvbihcIm11dGF0aW9uXCIsIGEsIGIpO1xuICAgIHJldHVybiBjLmV4ZWN1dGVSZXF1ZXN0T3BlcmF0aW9uKGEpO1xuICB9O1xuICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmICFhLnVybCkge1xuICAgIHRocm93IEVycm9yKFwiWW91IGFyZSBjcmVhdGluZyBhbiB1cnFsLWNsaWVudCB3aXRob3V0IGEgdXJsLlwiKTtcbiAgfVxuICBkID0gQjtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIGUgPSAoZCA9IG1ha2VTdWJqZWN0KCkpLm5leHQsIGYgPSBkLnNvdXJjZTtcbiAgICB0aGlzLnN1YnNjcmliZVRvRGVidWdUYXJnZXQgPSBmdW5jdGlvbiBiKGEpIHtcbiAgICAgIHJldHVybiBzdWJzY3JpYmUoYSkoZik7XG4gICAgfTtcbiAgICBkID0gZTtcbiAgfVxuICB0aGlzLnVybCA9IGEudXJsO1xuICB0aGlzLmZldGNoT3B0aW9ucyA9IGEuZmV0Y2hPcHRpb25zO1xuICB0aGlzLmZldGNoID0gYS5mZXRjaDtcbiAgdGhpcy5zdXNwZW5zZSA9ICEhYS5zdXNwZW5zZTtcbiAgdGhpcy5yZXF1ZXN0UG9saWN5ID0gYS5yZXF1ZXN0UG9saWN5IHx8IFwiY2FjaGUtZmlyc3RcIjtcbiAgdGhpcy5wcmVmZXJHZXRNZXRob2QgPSAhIWEucHJlZmVyR2V0TWV0aG9kO1xuICB0aGlzLm1hc2tUeXBlbmFtZSA9ICEhYS5tYXNrVHlwZW5hbWU7XG4gIGUgPSBtYWtlU3ViamVjdCgpO1xuICBnID0gZS5uZXh0O1xuICB0aGlzLm9wZXJhdGlvbnMkID0gZS5zb3VyY2U7XG4gIG0gPSAhMTtcbiAgdGhpcy5kaXNwYXRjaE9wZXJhdGlvbiA9IGZ1bmN0aW9uKGEpIHtcbiAgICBtID0gITA7XG4gICAgZm9yIChhICYmIGcoYSk7IGEgPSBjLnF1ZXVlLnNoaWZ0KCk7ICkge1xuICAgICAgZyhhKTtcbiAgICB9XG4gICAgbSA9ICExO1xuICB9O1xuICB0aGlzLnJlZXhlY3V0ZU9wZXJhdGlvbiA9IGZ1bmN0aW9uKGEpIHtcbiAgICBpZiAoXCJtdXRhdGlvblwiID09PSBhLmtpbmQgfHwgMCA8IChjLmFjdGl2ZU9wZXJhdGlvbnNbYS5rZXldIHx8IDApKSB7XG4gICAgICBjLnF1ZXVlLnB1c2goYSksIG0gfHwgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihjLmRpc3BhdGNoT3BlcmF0aW9uKTtcbiAgICB9XG4gIH07XG4gIGEgPSBWKHZvaWQgMCAhPT0gYS5leGNoYW5nZXMgPyBhLmV4Y2hhbmdlcyA6IFcpO1xuICB0aGlzLnJlc3VsdHMkID0gc2hhcmUoYSh7XG4gICAgY2xpZW50OiB0aGlzLFxuICAgIGRpc3BhdGNoRGVidWc6IGQsXG4gICAgZm9yd2FyZDogVCh7XG4gICAgICBkaXNwYXRjaERlYnVnOiBkXG4gICAgfSlcbiAgfSkodGhpcy5vcGVyYXRpb25zJCkpO1xuICBwdWJsaXNoKHRoaXMucmVzdWx0cyQpO1xufVxuXG5mdW5jdGlvbiBZKGEpIHtcbiAgYS5kYXRhID0gdihhLmRhdGEpO1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KGEpIHtcbiAgcmV0dXJuIG5ldyBYKGEpO1xufVxuXG5mdW5jdGlvbiBkZWJ1Z0V4Y2hhbmdlKGEpIHtcbiAgdmFyIGQgPSBhLmZvcndhcmQ7XG4gIHJldHVybiBcInByb2R1Y3Rpb25cIiA9PT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPyBmdW5jdGlvbiBiKGEpIHtcbiAgICByZXR1cm4gZChhKTtcbiAgfSA6IGZ1bmN0aW9uIGMoYSkge1xuICAgIHJldHVybiB0YXAoTSkoZCh0YXAoTikoYSkpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXJyb3JFeGNoYW5nZShhKSB7XG4gIGZ1bmN0aW9uIGIoYSkge1xuICAgIHZhciBiID0gYS5lcnJvcjtcbiAgICBhID0gYS5vcGVyYXRpb247XG4gICAgYiAmJiBjKGIsIGEpO1xuICB9XG4gIHZhciBjID0gYS5vbkVycm9yO1xuICByZXR1cm4gZnVuY3Rpb24oYSkge1xuICAgIHZhciBjID0gYS5mb3J3YXJkO1xuICAgIHJldHVybiBmdW5jdGlvbihhKSB7XG4gICAgICByZXR1cm4gdGFwKGIpKGMoYSkpO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdxbCgpIHtcbiAgdmFyIGEsIGIsIGMsIGQsIGUsIGYsIGc7XG4gIGZvciAoYSA9IGFyZ3VtZW50cywgYiA9IG5ldyBNYXAsIGMgPSBbXSwgZCA9IFtdLCBlID0gQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pID8gYXJndW1lbnRzWzBdWzBdIDogYXJndW1lbnRzWzBdIHx8IFwiXCIsIFxuICBmID0gMTsgZiA8IGFyZ3VtZW50cy5sZW5ndGg7IGYrKykge1xuICAgIChnID0gYVtmXSkgJiYgZy5kZWZpbml0aW9ucyA/IGQucHVzaC5hcHBseShkLCBnLmRlZmluaXRpb25zKSA6IGUgKz0gZztcbiAgICBlICs9IGFbMF1bZl07XG4gIH1cbiAgQyhiLCBjLCBrZXlEb2N1bWVudChlKS5kZWZpbml0aW9ucyk7XG4gIEMoYiwgYywgZCk7XG4gIHJldHVybiBrZXlEb2N1bWVudCh7XG4gICAga2luZDogS2luZC5ET0NVTUVOVCxcbiAgICBkZWZpbml0aW9uczogY1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3NyRXhjaGFuZ2UoYSkge1xuICBmdW5jdGlvbiBiKGIpIHtcbiAgICB2YXIgYyA9IGIuY2xpZW50LCBlID0gYi5mb3J3YXJkO1xuICAgIHJldHVybiBmdW5jdGlvbihiKSB7XG4gICAgICB2YXIgbCA9IGEgJiYgXCJib29sZWFuXCIgPT0gdHlwZW9mIGEuaXNDbGllbnQgPyAhIWEuaXNDbGllbnQgOiAhYy5zdXNwZW5zZSwgaCA9IHNoYXJlKGIpO1xuICAgICAgYiA9IGUoZmlsdGVyKGYpKGgpKTtcbiAgICAgIGggPSBtYXAoZykoZmlsdGVyKG0pKGgpKTtcbiAgICAgIGwgPyBoID0gdGFwKGQpKGgpIDogYiA9IHRhcChxKShiKTtcbiAgICAgIHJldHVybiBtZXJnZShbIGIsIGggXSk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBjKGEpIHtcbiAgICByZXR1cm4gIUQoYSkgJiYgdm9pZCAwICE9PSBrW2Eua2V5XTtcbiAgfVxuICBmdW5jdGlvbiBkKGEpIHtcbiAgICBoLnB1c2goYS5vcGVyYXRpb24ua2V5KTtcbiAgICAxID09PSBoLmxlbmd0aCAmJiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGUpO1xuICB9XG4gIGZ1bmN0aW9uIGUoKSB7XG4gICAgZm9yICh2YXIgYTsgYSA9IGguc2hpZnQoKTsgKSB7XG4gICAgICBkZWxldGUga1thXTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZihhKSB7XG4gICAgcmV0dXJuICFjKGEpO1xuICB9XG4gIGZ1bmN0aW9uIGcoYSkge1xuICAgIHZhciBiID0ga1thLmtleV0sIGMgPSBiLmVycm9yO1xuICAgIHJldHVybiB7XG4gICAgICBvcGVyYXRpb246IGEsXG4gICAgICBkYXRhOiAoYiA9IGIuZGF0YSkgPyBKU09OLnBhcnNlKGIpIDogdm9pZCAwLFxuICAgICAgZXh0ZW5zaW9uczogdm9pZCAwLFxuICAgICAgZXJyb3I6IGMgPyBuZXcgQ29tYmluZWRFcnJvcih7XG4gICAgICAgIG5ldHdvcmtFcnJvcjogYy5uZXR3b3JrRXJyb3IgPyBFcnJvcihjLm5ldHdvcmtFcnJvcikgOiB2b2lkIDAsXG4gICAgICAgIGdyYXBoUUxFcnJvcnM6IGMuZ3JhcGhRTEVycm9ycyAmJiBjLmdyYXBoUUxFcnJvcnMubGVuZ3RoID8gYy5ncmFwaFFMRXJyb3JzIDogdm9pZCAwXG4gICAgICB9KSA6IHZvaWQgMFxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbShhKSB7XG4gICAgcmV0dXJuIGMoYSk7XG4gIH1cbiAgZnVuY3Rpb24gcShhKSB7XG4gICAgdmFyIGMsIGQsIGIgPSBhLm9wZXJhdGlvbjtcbiAgICBpZiAoIUQoYikpIHtcbiAgICAgIGMgPSBhLmRhdGE7XG4gICAgICBhID0gYS5lcnJvcjtcbiAgICAgIGQgPSB7fTtcbiAgICAgIHZvaWQgMCAhPT0gYyAmJiAoZC5kYXRhID0gSlNPTi5zdHJpbmdpZnkoYykpO1xuICAgICAgYSAmJiAoZC5lcnJvciA9IHtcbiAgICAgICAgZ3JhcGhRTEVycm9yczogYS5ncmFwaFFMRXJyb3JzLm1hcChFKVxuICAgICAgfSwgYS5uZXR3b3JrRXJyb3IgJiYgKGQuZXJyb3IubmV0d29ya0Vycm9yID0gXCJcIiArIGEubmV0d29ya0Vycm9yKSk7XG4gICAgICBrW2Iua2V5XSA9IGQ7XG4gICAgfVxuICB9XG4gIHZhciBrID0ge30sIGggPSBbXTtcbiAgYi5yZXN0b3JlRGF0YSA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoaywgYSk7XG4gIH07XG4gIGIuZXh0cmFjdERhdGEgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGspO1xuICB9O1xuICBhICYmIGEuaW5pdGlhbFN0YXRlICYmIGIucmVzdG9yZURhdGEoYS5pbml0aWFsU3RhdGUpO1xuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gc3Vic2NyaXB0aW9uRXhjaGFuZ2UoYSkge1xuICBmdW5jdGlvbiBiKGEpIHtcbiAgICByZXR1cm4gXCJzdWJzY3JpcHRpb25cIiA9PT0gKGEgPSBhLmtpbmQpIHx8ICEhZCAmJiAoXCJxdWVyeVwiID09PSBhIHx8IFwibXV0YXRpb25cIiA9PT0gYSk7XG4gIH1cbiAgdmFyIGMgPSBhLmZvcndhcmRTdWJzY3JpcHRpb24sIGQgPSBhLmVuYWJsZUFsbE9wZXJhdGlvbnM7XG4gIHJldHVybiBmdW5jdGlvbihhKSB7XG4gICAgZnVuY3Rpb24gZChhKSB7XG4gICAgICB2YXIgYiA9IGMoe1xuICAgICAgICBrZXk6IGEua2V5LnRvU3RyaW5nKDM2KSxcbiAgICAgICAgcXVlcnk6IHByaW50KGEucXVlcnkpLFxuICAgICAgICB2YXJpYWJsZXM6IGEudmFyaWFibGVzLFxuICAgICAgICBjb250ZXh0OiBfZXh0ZW5kcyh7fSwgYS5jb250ZXh0KVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWFrZSgoZnVuY3Rpb24oYykge1xuICAgICAgICBmdW5jdGlvbiBkKGIpIHtcbiAgICAgICAgICByZXR1cm4gaChtYWtlUmVzdWx0KGEsIGIpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBlKGIpIHtcbiAgICAgICAgICByZXR1cm4gaChtYWtlRXJyb3JSZXN1bHQoYSwgYikpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGYoKSB7XG4gICAgICAgICAgayB8fCAoayA9ICEwLCBcInN1YnNjcmlwdGlvblwiID09PSBhLmtpbmQgJiYgbS5yZWV4ZWN1dGVPcGVyYXRpb24oeihcInRlYXJkb3duXCIsIGEsIGEuY29udGV4dCkpLCBcbiAgICAgICAgICBnKCkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsLCBoID0gYy5uZXh0LCBnID0gYy5jb21wbGV0ZSwgayA9ICExO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICBrIHx8IChsID0gYi5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZCxcbiAgICAgICAgICAgIGVycm9yOiBlLFxuICAgICAgICAgICAgY29tcGxldGU6IGZcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGsgPSAhMDtcbiAgICAgICAgICBsICYmIGwudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZShhKSB7XG4gICAgICByZXR1cm4gIWsoYSk7XG4gICAgfVxuICAgIHZhciBtID0gYS5jbGllbnQsIHEgPSBhLmZvcndhcmQsIGsgPSBiO1xuICAgIHJldHVybiBmdW5jdGlvbihhKSB7XG4gICAgICB2YXIgYywgYiA9IHNoYXJlKGEpO1xuICAgICAgYSA9IG1lcmdlTWFwKChmdW5jdGlvbihhKSB7XG4gICAgICAgIHZhciBjID0gYS5rZXksIGUgPSBmaWx0ZXIoKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICByZXR1cm4gXCJ0ZWFyZG93blwiID09PSBhLmtpbmQgJiYgYS5rZXkgPT09IGM7XG4gICAgICAgIH0pKShiKTtcbiAgICAgICAgcmV0dXJuIHRha2VVbnRpbChlKShkKGEpKTtcbiAgICAgIH0pKShmaWx0ZXIoaykoYikpO1xuICAgICAgYyA9IHEoZmlsdGVyKGUpKGIpKTtcbiAgICAgIHJldHVybiBtZXJnZShbIGEsIGMgXSk7XG4gICAgfTtcbiAgfTtcbn1cblxudmFyIHQsIHgsIHlfb3BlcmF0aW9uTmFtZSwgVSwgVztcblxuaW1wb3J0IHsgdG9Qcm9taXNlLCB0YWtlLCBzaGFyZSwgZmlsdGVyLCBtYXAsIHRhcCwgbWVyZ2UsIG1lcmdlTWFwLCB0YWtlVW50aWwsIG1ha2UsIG9uUHVzaCwgbWFrZVN1YmplY3QsIHB1Ymxpc2gsIG9uU3RhcnQsIG9uRW5kLCBzd2l0Y2hNYXAsIGZyb21WYWx1ZSwgaW50ZXJ2YWwsIHN1YnNjcmliZSB9IGZyb20gXCJ3b25rYVwiO1xuXG5pbXBvcnQgeyBrIGFzIGtleURvY3VtZW50LCBfIGFzIF9leHRlbmRzLCBzIGFzIHN0cmluZ2lmeURvY3VtZW50LCBDIGFzIENvbWJpbmVkRXJyb3IsIG0gYXMgbWFrZVJlc3VsdCwgYSBhcyBtYWtlRXJyb3JSZXN1bHQsIGIgYXMgbWFrZUZldGNoQm9keSwgYyBhcyBtYWtlRmV0Y2hVUkwsIGQgYXMgbWFrZUZldGNoT3B0aW9ucywgZSBhcyBtYWtlRmV0Y2hTb3VyY2UsIGYgYXMgY3JlYXRlUmVxdWVzdCB9IGZyb20gXCIuLzE5NWYwYTU4Lm1qc1wiO1xuXG5pbXBvcnQgeyB2aXNpdCB9IGZyb20gXCJncmFwaHFsL2xhbmd1YWdlL3Zpc2l0b3IubWpzXCI7XG5cbmltcG9ydCB7IEtpbmQgfSBmcm9tIFwiZ3JhcGhxbC9sYW5ndWFnZS9raW5kcy5tanNcIjtcblxuaW1wb3J0IHsgcHJpbnQgfSBmcm9tIFwiZ3JhcGhxbC9sYW5ndWFnZS9wcmludGVyLm1qc1wiO1xuXG5leHBvcnQgeyBDIGFzIENvbWJpbmVkRXJyb3IsIGYgYXMgY3JlYXRlUmVxdWVzdCwgaCBhcyBnZXRPcGVyYXRpb25OYW1lLCBhIGFzIG1ha2VFcnJvclJlc3VsdCwgbSBhcyBtYWtlUmVzdWx0LCBnIGFzIHN0cmluZ2lmeVZhcmlhYmxlcyB9IGZyb20gXCIuLzE5NWYwYTU4Lm1qc1wiO1xuXG50ID0gbmV3IE1hcDtcblxueCA9IHt9LCB5X29wZXJhdGlvbk5hbWUgPSB7XG4gIGtleTogXCJPcGVyYXRpb24ub3BlcmF0aW9uTmFtZVwiLFxuICBtZXNzYWdlOiAnVGhlIFwiT3BlcmF0aW9uLm9wZXJhdGlvbk5hbWVcIiBwcm9wZXJ0eSBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgcmVsZWFzZSBvZiB1cnFsLiBVc2UgXCJPcGVyYXRpb24ua2luZFwiIGluc3RlYWQuJ1xufTtcblxuVSA9IFQoe1xuICBkaXNwYXRjaERlYnVnOiBCXG59KTtcblxuVyA9IFsgTywgSywgUiBdO1xuXG5YLnByb3RvdHlwZS5vbk9wZXJhdGlvblN0YXJ0ID0gZnVuY3Rpb24oYSkge1xuICB2YXIgYiA9IGEua2V5O1xuICB0aGlzLmFjdGl2ZU9wZXJhdGlvbnNbYl0gPSAodGhpcy5hY3RpdmVPcGVyYXRpb25zW2JdIHx8IDApICsgMTtcbiAgdGhpcy5kaXNwYXRjaE9wZXJhdGlvbihhKTtcbn07XG5cblgucHJvdG90eXBlLm9uT3BlcmF0aW9uRW5kID0gZnVuY3Rpb24oYSkge1xuICB2YXIgYiA9IGEua2V5LCBjID0gdGhpcy5hY3RpdmVPcGVyYXRpb25zW2JdIHx8IDA7XG4gIGlmICgwID49ICh0aGlzLmFjdGl2ZU9wZXJhdGlvbnNbYl0gPSAwID49IGMgPyAwIDogYyAtIDEpKSB7XG4gICAgZm9yIChiID0gdGhpcy5xdWV1ZS5sZW5ndGggLSAxOyAwIDw9IGI7IGItLSkge1xuICAgICAgdGhpcy5xdWV1ZVtiXS5rZXkgPT09IGEua2V5ICYmIHRoaXMucXVldWUuc3BsaWNlKGIsIDEpO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoT3BlcmF0aW9uKHooXCJ0ZWFyZG93blwiLCBhLCBhLmNvbnRleHQpKTtcbiAgfVxufTtcblxuWC5wcm90b3R5cGUuZXhlY3V0ZVJlcXVlc3RPcGVyYXRpb24gPSBmdW5jdGlvbihhKSB7XG4gIHZhciBmLCBnLCBkID0gdGhpcywgZSA9IGZpbHRlcigoZnVuY3Rpb24oYikge1xuICAgIHJldHVybiBiLm9wZXJhdGlvbi5rZXkgPT09IGEua2V5O1xuICB9KSkodGhpcy5yZXN1bHRzJCk7XG4gIHRoaXMubWFza1R5cGVuYW1lICYmIChlID0gbWFwKFkpKGUpKTtcbiAgaWYgKFwibXV0YXRpb25cIiA9PT0gYS5raW5kKSB7XG4gICAgcmV0dXJuIHRha2UoMSkob25TdGFydCgoZnVuY3Rpb24gYigpIHtcbiAgICAgIHJldHVybiBkLmRpc3BhdGNoT3BlcmF0aW9uKGEpO1xuICAgIH0pKShlKSk7XG4gIH1cbiAgZiA9IGZpbHRlcigoZnVuY3Rpb24oYikge1xuICAgIHJldHVybiBcInRlYXJkb3duXCIgPT09IGIua2luZCAmJiBiLmtleSA9PT0gYS5rZXk7XG4gIH0pKSh0aGlzLm9wZXJhdGlvbnMkKSwgZyA9IG9uRW5kKChmdW5jdGlvbigpIHtcbiAgICBkLm9uT3BlcmF0aW9uRW5kKGEpO1xuICB9KSkob25TdGFydCgoZnVuY3Rpb24oKSB7XG4gICAgZC5vbk9wZXJhdGlvblN0YXJ0KGEpO1xuICB9KSkodGFrZVVudGlsKGYpKGUpKSk7XG4gIHJldHVybiBcInF1ZXJ5XCIgPT09IGEua2luZCAmJiBhLmNvbnRleHQucG9sbEludGVydmFsID8gc3dpdGNoTWFwKChmdW5jdGlvbiBjKCkge1xuICAgIHJldHVybiBnO1xuICB9KSkobWVyZ2UoWyBmcm9tVmFsdWUoMCksIGludGVydmFsKGEuY29udGV4dC5wb2xsSW50ZXJ2YWwpIF0pKSA6IGc7XG59O1xuXG5YLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKGEsIGIsIGMpIHtcbiAgYyAmJiBcImJvb2xlYW5cIiA9PSB0eXBlb2YgYy5zdXNwZW5zZSB8fCAoYyA9IF9leHRlbmRzKHt9LCBjLCB7XG4gICAgc3VzcGVuc2U6ICExXG4gIH0pKTtcbiAgcmV0dXJuIHcodGhpcy5leGVjdXRlUXVlcnkoY3JlYXRlUmVxdWVzdChhLCBiKSwgYykpO1xufTtcblxuWC5wcm90b3R5cGUucmVhZFF1ZXJ5ID0gZnVuY3Rpb24oYSwgYiwgYykge1xuICB2YXIgZCA9IG51bGw7XG4gIHN1YnNjcmliZSgoZnVuY3Rpb24oYSkge1xuICAgIGQgPSBhO1xuICB9KSkodGhpcy5leGVjdXRlUXVlcnkoY3JlYXRlUmVxdWVzdChhLCBiKSwgYykpLnVuc3Vic2NyaWJlKCk7XG4gIHJldHVybiBkO1xufTtcblxuWC5wcm90b3R5cGUuc3Vic2NyaXB0aW9uID0gZnVuY3Rpb24oYSwgYiwgYykge1xuICByZXR1cm4gdGhpcy5leGVjdXRlU3Vic2NyaXB0aW9uKGNyZWF0ZVJlcXVlc3QoYSwgYiksIGMpO1xufTtcblxuWC5wcm90b3R5cGUubXV0YXRpb24gPSBmdW5jdGlvbihhLCBiLCBjKSB7XG4gIHJldHVybiB3KHRoaXMuZXhlY3V0ZU11dGF0aW9uKGNyZWF0ZVJlcXVlc3QoYSwgYiksIGMpKTtcbn07XG5cbmV4cG9ydCB7IFggYXMgQ2xpZW50LCBLIGFzIGNhY2hlRXhjaGFuZ2UsIFYgYXMgY29tcG9zZUV4Y2hhbmdlcywgY3JlYXRlQ2xpZW50LCBkZWJ1Z0V4Y2hhbmdlLCBPIGFzIGRlZHVwRXhjaGFuZ2UsIFcgYXMgZGVmYXVsdEV4Y2hhbmdlcywgZXJyb3JFeGNoYW5nZSwgVSBhcyBmYWxsYmFja0V4Y2hhbmdlSU8sIFIgYXMgZmV0Y2hFeGNoYW5nZSwgdSBhcyBmb3JtYXREb2N1bWVudCwgZ3FsLCB6IGFzIG1ha2VPcGVyYXRpb24sIHYgYXMgbWFza1R5cGVuYW1lLCBzc3JFeGNoYW5nZSwgc3Vic2NyaXB0aW9uRXhjaGFuZ2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVycWwtY29yZS5tanMubWFwXG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkOyBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzOyBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7IGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpOyBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTsgfSBmdW5jdGlvbiBXcmFwcGVyKCkgeyByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpOyB9IFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IFdyYXBwZXIsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpOyB9OyByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7IH1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0OyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7IHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG4vLyBGSVhNRTpcbi8vIGZsb3dsaW50IHVuaW5pdGlhbGl6ZWQtaW5zdGFuY2UtcHJvcGVydHk6b2ZmXG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gXCIuLi9qc3V0aWxzL2lzT2JqZWN0TGlrZS5tanNcIjtcbmltcG9ydCB7IFNZTUJPTF9UT19TVFJJTkdfVEFHIH0gZnJvbSBcIi4uL3BvbHlmaWxscy9zeW1ib2xzLm1qc1wiO1xuaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tIFwiLi4vbGFuZ3VhZ2UvbG9jYXRpb24ubWpzXCI7XG5pbXBvcnQgeyBwcmludExvY2F0aW9uLCBwcmludFNvdXJjZUxvY2F0aW9uIH0gZnJvbSBcIi4uL2xhbmd1YWdlL3ByaW50TG9jYXRpb24ubWpzXCI7XG4vKipcbiAqIEEgR3JhcGhRTEVycm9yIGRlc2NyaWJlcyBhbiBFcnJvciBmb3VuZCBkdXJpbmcgdGhlIHBhcnNlLCB2YWxpZGF0ZSwgb3JcbiAqIGV4ZWN1dGUgcGhhc2VzIG9mIHBlcmZvcm1pbmcgYSBHcmFwaFFMIG9wZXJhdGlvbi4gSW4gYWRkaXRpb24gdG8gYSBtZXNzYWdlXG4gKiBhbmQgc3RhY2sgdHJhY2UsIGl0IGFsc28gaW5jbHVkZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGxvY2F0aW9ucyBpbiBhXG4gKiBHcmFwaFFMIGRvY3VtZW50IGFuZC9vciBleGVjdXRpb24gcmVzdWx0IHRoYXQgY29ycmVzcG9uZCB0byB0aGUgRXJyb3IuXG4gKi9cblxuZXhwb3J0IHZhciBHcmFwaFFMRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHMoR3JhcGhRTEVycm9yLCBfRXJyb3IpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoR3JhcGhRTEVycm9yKTtcblxuICAvKipcbiAgICogQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIEVycm9yIGZvciBkZWJ1Z2dpbmcgcHVycG9zZXMuXG4gICAqXG4gICAqIEVudW1lcmFibGUsIGFuZCBhcHBlYXJzIGluIHRoZSByZXN1bHQgb2YgSlNPTi5zdHJpbmdpZnkoKS5cbiAgICpcbiAgICogTm90ZTogc2hvdWxkIGJlIHRyZWF0ZWQgYXMgcmVhZG9ubHksIGRlc3BpdGUgaW52YXJpYW50IHVzYWdlLlxuICAgKi9cblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgeyBsaW5lLCBjb2x1bW4gfSBsb2NhdGlvbnMgd2l0aGluIHRoZSBzb3VyY2UgR3JhcGhRTCBkb2N1bWVudFxuICAgKiB3aGljaCBjb3JyZXNwb25kIHRvIHRoaXMgZXJyb3IuXG4gICAqXG4gICAqIEVycm9ycyBkdXJpbmcgdmFsaWRhdGlvbiBvZnRlbiBjb250YWluIG11bHRpcGxlIGxvY2F0aW9ucywgZm9yIGV4YW1wbGUgdG9cbiAgICogcG9pbnQgb3V0IHR3byB0aGluZ3Mgd2l0aCB0aGUgc2FtZSBuYW1lLiBFcnJvcnMgZHVyaW5nIGV4ZWN1dGlvbiBpbmNsdWRlIGFcbiAgICogc2luZ2xlIGxvY2F0aW9uLCB0aGUgZmllbGQgd2hpY2ggcHJvZHVjZWQgdGhlIGVycm9yLlxuICAgKlxuICAgKiBFbnVtZXJhYmxlLCBhbmQgYXBwZWFycyBpbiB0aGUgcmVzdWx0IG9mIEpTT04uc3RyaW5naWZ5KCkuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBkZXNjcmliaW5nIHRoZSBKU09OLXBhdGggaW50byB0aGUgZXhlY3V0aW9uIHJlc3BvbnNlIHdoaWNoXG4gICAqIGNvcnJlc3BvbmRzIHRvIHRoaXMgZXJyb3IuIE9ubHkgaW5jbHVkZWQgZm9yIGVycm9ycyBkdXJpbmcgZXhlY3V0aW9uLlxuICAgKlxuICAgKiBFbnVtZXJhYmxlLCBhbmQgYXBwZWFycyBpbiB0aGUgcmVzdWx0IG9mIEpTT04uc3RyaW5naWZ5KCkuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBHcmFwaFFMIEFTVCBOb2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgZXJyb3IuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgc291cmNlIEdyYXBoUUwgZG9jdW1lbnQgZm9yIHRoZSBmaXJzdCBsb2NhdGlvbiBvZiB0aGlzIGVycm9yLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaWYgdGhpcyBFcnJvciByZXByZXNlbnRzIG1vcmUgdGhhbiBvbmUgbm9kZSwgdGhlIHNvdXJjZSBtYXkgbm90XG4gICAqIHJlcHJlc2VudCBub2RlcyBhZnRlciB0aGUgZmlyc3Qgbm9kZS5cbiAgICovXG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGNoYXJhY3RlciBvZmZzZXRzIHdpdGhpbiB0aGUgc291cmNlIEdyYXBoUUwgZG9jdW1lbnRcbiAgICogd2hpY2ggY29ycmVzcG9uZCB0byB0aGlzIGVycm9yLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIG9yaWdpbmFsIGVycm9yIHRocm93biBmcm9tIGEgZmllbGQgcmVzb2x2ZXIgZHVyaW5nIGV4ZWN1dGlvbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIEV4dGVuc2lvbiBmaWVsZHMgdG8gYWRkIHRvIHRoZSBmb3JtYXR0ZWQgZXJyb3IuXG4gICAqL1xuICBmdW5jdGlvbiBHcmFwaFFMRXJyb3IobWVzc2FnZSwgbm9kZXMsIHNvdXJjZSwgcG9zaXRpb25zLCBwYXRoLCBvcmlnaW5hbEVycm9yLCBleHRlbnNpb25zKSB7XG4gICAgdmFyIF9sb2NhdGlvbnMyLCBfc291cmNlMiwgX3Bvc2l0aW9uczIsIF9leHRlbnNpb25zMjtcblxuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmFwaFFMRXJyb3IpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKTsgLy8gQ29tcHV0ZSBsaXN0IG9mIGJsYW1lIG5vZGVzLlxuXG4gICAgdmFyIF9ub2RlcyA9IEFycmF5LmlzQXJyYXkobm9kZXMpID8gbm9kZXMubGVuZ3RoICE9PSAwID8gbm9kZXMgOiB1bmRlZmluZWQgOiBub2RlcyA/IFtub2Rlc10gOiB1bmRlZmluZWQ7IC8vIENvbXB1dGUgbG9jYXRpb25zIGluIHRoZSBzb3VyY2UgZm9yIHRoZSBnaXZlbiBub2Rlcy9wb3NpdGlvbnMuXG5cblxuICAgIHZhciBfc291cmNlID0gc291cmNlO1xuXG4gICAgaWYgKCFfc291cmNlICYmIF9ub2Rlcykge1xuICAgICAgdmFyIF9ub2RlcyQwJGxvYztcblxuICAgICAgX3NvdXJjZSA9IChfbm9kZXMkMCRsb2MgPSBfbm9kZXNbMF0ubG9jKSA9PT0gbnVsbCB8fCBfbm9kZXMkMCRsb2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub2RlcyQwJGxvYy5zb3VyY2U7XG4gICAgfVxuXG4gICAgdmFyIF9wb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG5cbiAgICBpZiAoIV9wb3NpdGlvbnMgJiYgX25vZGVzKSB7XG4gICAgICBfcG9zaXRpb25zID0gX25vZGVzLnJlZHVjZShmdW5jdGlvbiAobGlzdCwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZS5sb2MpIHtcbiAgICAgICAgICBsaXN0LnB1c2gobm9kZS5sb2Muc3RhcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgaWYgKF9wb3NpdGlvbnMgJiYgX3Bvc2l0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIF9wb3NpdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIF9sb2NhdGlvbnM7XG5cbiAgICBpZiAocG9zaXRpb25zICYmIHNvdXJjZSkge1xuICAgICAgX2xvY2F0aW9ucyA9IHBvc2l0aW9ucy5tYXAoZnVuY3Rpb24gKHBvcykge1xuICAgICAgICByZXR1cm4gZ2V0TG9jYXRpb24oc291cmNlLCBwb3MpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChfbm9kZXMpIHtcbiAgICAgIF9sb2NhdGlvbnMgPSBfbm9kZXMucmVkdWNlKGZ1bmN0aW9uIChsaXN0LCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmxvYykge1xuICAgICAgICAgIGxpc3QucHVzaChnZXRMb2NhdGlvbihub2RlLmxvYy5zb3VyY2UsIG5vZGUubG9jLnN0YXJ0KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICB2YXIgX2V4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xuXG4gICAgaWYgKF9leHRlbnNpb25zID09IG51bGwgJiYgb3JpZ2luYWxFcnJvciAhPSBudWxsKSB7XG4gICAgICB2YXIgb3JpZ2luYWxFeHRlbnNpb25zID0gb3JpZ2luYWxFcnJvci5leHRlbnNpb25zO1xuXG4gICAgICBpZiAoaXNPYmplY3RMaWtlKG9yaWdpbmFsRXh0ZW5zaW9ucykpIHtcbiAgICAgICAgX2V4dGVuc2lvbnMgPSBvcmlnaW5hbEV4dGVuc2lvbnM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsdWU6ICdHcmFwaFFMRXJyb3InXG4gICAgICB9LFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB2YWx1ZTogbWVzc2FnZSxcbiAgICAgICAgLy8gQnkgYmVpbmcgZW51bWVyYWJsZSwgSlNPTi5zdHJpbmdpZnkgd2lsbCBpbmNsdWRlIGBtZXNzYWdlYCBpbiB0aGVcbiAgICAgICAgLy8gcmVzdWx0aW5nIG91dHB1dC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNpbXBsZXN0IHBvc3NpYmxlIEdyYXBoUUxcbiAgICAgICAgLy8gc2VydmljZSBhZGhlcmVzIHRvIHRoZSBzcGVjLlxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGxvY2F0aW9uczoge1xuICAgICAgICAvLyBDb2VyY2luZyBmYWxzeSB2YWx1ZXMgdG8gdW5kZWZpbmVkIGVuc3VyZXMgdGhleSB3aWxsIG5vdCBiZSBpbmNsdWRlZFxuICAgICAgICAvLyBpbiBKU09OLnN0cmluZ2lmeSgpIHdoZW4gbm90IHByb3ZpZGVkLlxuICAgICAgICB2YWx1ZTogKF9sb2NhdGlvbnMyID0gX2xvY2F0aW9ucykgIT09IG51bGwgJiYgX2xvY2F0aW9uczIgIT09IHZvaWQgMCA/IF9sb2NhdGlvbnMyIDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBCeSBiZWluZyBlbnVtZXJhYmxlLCBKU09OLnN0cmluZ2lmeSB3aWxsIGluY2x1ZGUgYGxvY2F0aW9uc2AgaW4gdGhlXG4gICAgICAgIC8vIHJlc3VsdGluZyBvdXRwdXQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBzaW1wbGVzdCBwb3NzaWJsZSBHcmFwaFFMXG4gICAgICAgIC8vIHNlcnZpY2UgYWRoZXJlcyB0byB0aGUgc3BlYy5cbiAgICAgICAgZW51bWVyYWJsZTogX2xvY2F0aW9ucyAhPSBudWxsXG4gICAgICB9LFxuICAgICAgcGF0aDoge1xuICAgICAgICAvLyBDb2VyY2luZyBmYWxzeSB2YWx1ZXMgdG8gdW5kZWZpbmVkIGVuc3VyZXMgdGhleSB3aWxsIG5vdCBiZSBpbmNsdWRlZFxuICAgICAgICAvLyBpbiBKU09OLnN0cmluZ2lmeSgpIHdoZW4gbm90IHByb3ZpZGVkLlxuICAgICAgICB2YWx1ZTogcGF0aCAhPT0gbnVsbCAmJiBwYXRoICE9PSB2b2lkIDAgPyBwYXRoIDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBCeSBiZWluZyBlbnVtZXJhYmxlLCBKU09OLnN0cmluZ2lmeSB3aWxsIGluY2x1ZGUgYHBhdGhgIGluIHRoZVxuICAgICAgICAvLyByZXN1bHRpbmcgb3V0cHV0LiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2ltcGxlc3QgcG9zc2libGUgR3JhcGhRTFxuICAgICAgICAvLyBzZXJ2aWNlIGFkaGVyZXMgdG8gdGhlIHNwZWMuXG4gICAgICAgIGVudW1lcmFibGU6IHBhdGggIT0gbnVsbFxuICAgICAgfSxcbiAgICAgIG5vZGVzOiB7XG4gICAgICAgIHZhbHVlOiBfbm9kZXMgIT09IG51bGwgJiYgX25vZGVzICE9PSB2b2lkIDAgPyBfbm9kZXMgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgdmFsdWU6IChfc291cmNlMiA9IF9zb3VyY2UpICE9PSBudWxsICYmIF9zb3VyY2UyICE9PSB2b2lkIDAgPyBfc291cmNlMiA6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIHBvc2l0aW9uczoge1xuICAgICAgICB2YWx1ZTogKF9wb3NpdGlvbnMyID0gX3Bvc2l0aW9ucykgIT09IG51bGwgJiYgX3Bvc2l0aW9uczIgIT09IHZvaWQgMCA/IF9wb3NpdGlvbnMyIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgb3JpZ2luYWxFcnJvcjoge1xuICAgICAgICB2YWx1ZTogb3JpZ2luYWxFcnJvclxuICAgICAgfSxcbiAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgLy8gQ29lcmNpbmcgZmFsc3kgdmFsdWVzIHRvIHVuZGVmaW5lZCBlbnN1cmVzIHRoZXkgd2lsbCBub3QgYmUgaW5jbHVkZWRcbiAgICAgICAgLy8gaW4gSlNPTi5zdHJpbmdpZnkoKSB3aGVuIG5vdCBwcm92aWRlZC5cbiAgICAgICAgdmFsdWU6IChfZXh0ZW5zaW9uczIgPSBfZXh0ZW5zaW9ucykgIT09IG51bGwgJiYgX2V4dGVuc2lvbnMyICE9PSB2b2lkIDAgPyBfZXh0ZW5zaW9uczIgOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIEJ5IGJlaW5nIGVudW1lcmFibGUsIEpTT04uc3RyaW5naWZ5IHdpbGwgaW5jbHVkZSBgcGF0aGAgaW4gdGhlXG4gICAgICAgIC8vIHJlc3VsdGluZyBvdXRwdXQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBzaW1wbGVzdCBwb3NzaWJsZSBHcmFwaFFMXG4gICAgICAgIC8vIHNlcnZpY2UgYWRoZXJlcyB0byB0aGUgc3BlYy5cbiAgICAgICAgZW51bWVyYWJsZTogX2V4dGVuc2lvbnMgIT0gbnVsbFxuICAgICAgfVxuICAgIH0pOyAvLyBJbmNsdWRlIChub24tZW51bWVyYWJsZSkgc3RhY2sgdHJhY2UuXG5cbiAgICBpZiAob3JpZ2luYWxFcnJvciA9PT0gbnVsbCB8fCBvcmlnaW5hbEVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbEVycm9yLnN0YWNrKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICdzdGFjaycsIHtcbiAgICAgICAgdmFsdWU6IG9yaWdpbmFsRXJyb3Iuc3RhY2ssXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzKTtcbiAgICB9IC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcblxuXG4gICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgR3JhcGhRTEVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAnc3RhY2snLCB7XG4gICAgICAgIHZhbHVlOiBFcnJvcigpLnN0YWNrLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR3JhcGhRTEVycm9yLCBbe1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBwcmludEVycm9yKHRoaXMpO1xuICAgIH0gLy8gRklYTUU6IHdvcmthcm91bmQgdG8gbm90IGJyZWFrIGNoYWkgY29tcGFyaXNvbnMsIHNob3VsZCBiZSByZW1vdmUgaW4gdjE2XG4gICAgLy8gJEZsb3dGaXhNZVt1bnN1cHBvcnRlZC1zeW50YXhdIEZsb3cgZG9lc24ndCBzdXBwb3J0IGNvbXB1dGVkIHByb3BlcnRpZXMgeWV0XG5cbiAgfSwge1xuICAgIGtleTogU1lNQk9MX1RPX1NUUklOR19UQUcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gJ09iamVjdCc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdyYXBoUUxFcnJvcjtcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG4vKipcbiAqIFByaW50cyBhIEdyYXBoUUxFcnJvciB0byBhIHN0cmluZywgcmVwcmVzZW50aW5nIHVzZWZ1bCBsb2NhdGlvbiBpbmZvcm1hdGlvblxuICogYWJvdXQgdGhlIGVycm9yJ3MgcG9zaXRpb24gaW4gdGhlIHNvdXJjZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRFcnJvcihlcnJvcikge1xuICB2YXIgb3V0cHV0ID0gZXJyb3IubWVzc2FnZTtcblxuICBpZiAoZXJyb3Iubm9kZXMpIHtcbiAgICBmb3IgKHZhciBfaTIgPSAwLCBfZXJyb3Ikbm9kZXMyID0gZXJyb3Iubm9kZXM7IF9pMiA8IF9lcnJvciRub2RlczIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIG5vZGUgPSBfZXJyb3Ikbm9kZXMyW19pMl07XG5cbiAgICAgIGlmIChub2RlLmxvYykge1xuICAgICAgICBvdXRwdXQgKz0gJ1xcblxcbicgKyBwcmludExvY2F0aW9uKG5vZGUubG9jKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoZXJyb3Iuc291cmNlICYmIGVycm9yLmxvY2F0aW9ucykge1xuICAgIGZvciAodmFyIF9pNCA9IDAsIF9lcnJvciRsb2NhdGlvbnMyID0gZXJyb3IubG9jYXRpb25zOyBfaTQgPCBfZXJyb3IkbG9jYXRpb25zMi5sZW5ndGg7IF9pNCsrKSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBfZXJyb3IkbG9jYXRpb25zMltfaTRdO1xuICAgICAgb3V0cHV0ICs9ICdcXG5cXG4nICsgcHJpbnRTb3VyY2VMb2NhdGlvbihlcnJvci5zb3VyY2UsIGxvY2F0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuIiwiaW1wb3J0IHsgR3JhcGhRTEVycm9yIH0gZnJvbSBcIi4vR3JhcGhRTEVycm9yLm1qc1wiO1xuLyoqXG4gKiBQcm9kdWNlcyBhIEdyYXBoUUxFcnJvciByZXByZXNlbnRpbmcgYSBzeW50YXggZXJyb3IsIGNvbnRhaW5pbmcgdXNlZnVsXG4gKiBkZXNjcmlwdGl2ZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3ludGF4IGVycm9yJ3MgcG9zaXRpb24gaW4gdGhlIHNvdXJjZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3ludGF4RXJyb3Ioc291cmNlLCBwb3NpdGlvbiwgZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIG5ldyBHcmFwaFFMRXJyb3IoXCJTeW50YXggRXJyb3I6IFwiLmNvbmNhdChkZXNjcmlwdGlvbiksIHVuZGVmaW5lZCwgc291cmNlLCBbcG9zaXRpb25dKTtcbn1cbiIsImltcG9ydCBpbnZhcmlhbnQgZnJvbSBcIi4vaW52YXJpYW50Lm1qc1wiO1xuaW1wb3J0IG5vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wgZnJvbSBcIi4vbm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbC5tanNcIjtcbi8qKlxuICogVGhlIGBkZWZpbmVJbnNwZWN0KClgIGZ1bmN0aW9uIGRlZmluZXMgYGluc3BlY3QoKWAgcHJvdG90eXBlIG1ldGhvZCBhcyBhbGlhcyBvZiBgdG9KU09OYFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZUluc3BlY3QoY2xhc3NPYmplY3QpIHtcbiAgdmFyIGZuID0gY2xhc3NPYmplY3QucHJvdG90eXBlLnRvSlNPTjtcbiAgdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nIHx8IGludmFyaWFudCgwKTtcbiAgY2xhc3NPYmplY3QucHJvdG90eXBlLmluc3BlY3QgPSBmbjsgLy8gaXN0YW5idWwgaWdub3JlIGVsc2UgKFNlZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaHFsL2dyYXBocWwtanMvaXNzdWVzLzIzMTcnKVxuXG4gIGlmIChub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sKSB7XG4gICAgY2xhc3NPYmplY3QucHJvdG90eXBlW25vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2xdID0gZm47XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldkFzc2VydChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgdmFyIGJvb2xlYW5Db25kaXRpb24gPSBCb29sZWFuKGNvbmRpdGlvbik7IC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlIChTZWUgdHJhbnNmb3JtYXRpb24gZG9uZSBpbiAnLi9yZXNvdXJjZXMvaW5saW5lSW52YXJpYW50LmpzJylcblxuICBpZiAoIWJvb2xlYW5Db25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyogZXNsaW50LWRpc2FibGUgZmxvd3R5cGUvbm8td2Vhay10eXBlcyAqL1xuaW1wb3J0IG5vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wgZnJvbSBcIi4vbm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbC5tanNcIjtcbnZhciBNQVhfQVJSQVlfTEVOR1RIID0gMTA7XG52YXIgTUFYX1JFQ1VSU0lWRV9ERVBUSCA9IDI7XG4vKipcbiAqIFVzZWQgdG8gcHJpbnQgdmFsdWVzIGluIGVycm9yIG1lc3NhZ2VzLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc3BlY3QodmFsdWUpIHtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKHZhbHVlLCBbXSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKHZhbHVlLCBzZWVuVmFsdWVzKSB7XG4gIHN3aXRjaCAoX3R5cGVvZih2YWx1ZSkpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHJldHVybiB2YWx1ZS5uYW1lID8gXCJbZnVuY3Rpb24gXCIuY29uY2F0KHZhbHVlLm5hbWUsIFwiXVwiKSA6ICdbZnVuY3Rpb25dJztcblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdE9iamVjdFZhbHVlKHZhbHVlLCBzZWVuVmFsdWVzKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRPYmplY3RWYWx1ZSh2YWx1ZSwgcHJldmlvdXNseVNlZW5WYWx1ZXMpIHtcbiAgaWYgKHByZXZpb3VzbHlTZWVuVmFsdWVzLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gIH1cblxuICB2YXIgc2VlblZhbHVlcyA9IFtdLmNvbmNhdChwcmV2aW91c2x5U2VlblZhbHVlcywgW3ZhbHVlXSk7XG4gIHZhciBjdXN0b21JbnNwZWN0Rm4gPSBnZXRDdXN0b21Gbih2YWx1ZSk7XG5cbiAgaWYgKGN1c3RvbUluc3BlY3RGbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGN1c3RvbVZhbHVlID0gY3VzdG9tSW5zcGVjdEZuLmNhbGwodmFsdWUpOyAvLyBjaGVjayBmb3IgaW5maW5pdGUgcmVjdXJzaW9uXG5cbiAgICBpZiAoY3VzdG9tVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGN1c3RvbVZhbHVlID09PSAnc3RyaW5nJyA/IGN1c3RvbVZhbHVlIDogZm9ybWF0VmFsdWUoY3VzdG9tVmFsdWUsIHNlZW5WYWx1ZXMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmb3JtYXRBcnJheSh2YWx1ZSwgc2VlblZhbHVlcyk7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0T2JqZWN0KHZhbHVlLCBzZWVuVmFsdWVzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0T2JqZWN0KG9iamVjdCwgc2VlblZhbHVlcykge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICd7fSc7XG4gIH1cblxuICBpZiAoc2VlblZhbHVlcy5sZW5ndGggPiBNQVhfUkVDVVJTSVZFX0RFUFRIKSB7XG4gICAgcmV0dXJuICdbJyArIGdldE9iamVjdFRhZyhvYmplY3QpICsgJ10nO1xuICB9XG5cbiAgdmFyIHByb3BlcnRpZXMgPSBrZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbHVlID0gZm9ybWF0VmFsdWUob2JqZWN0W2tleV0sIHNlZW5WYWx1ZXMpO1xuICAgIHJldHVybiBrZXkgKyAnOiAnICsgdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gJ3sgJyArIHByb3BlcnRpZXMuam9pbignLCAnKSArICcgfSc7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGFycmF5LCBzZWVuVmFsdWVzKSB7XG4gIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1tdJztcbiAgfVxuXG4gIGlmIChzZWVuVmFsdWVzLmxlbmd0aCA+IE1BWF9SRUNVUlNJVkVfREVQVEgpIHtcbiAgICByZXR1cm4gJ1tBcnJheV0nO1xuICB9XG5cbiAgdmFyIGxlbiA9IE1hdGgubWluKE1BWF9BUlJBWV9MRU5HVEgsIGFycmF5Lmxlbmd0aCk7XG4gIHZhciByZW1haW5pbmcgPSBhcnJheS5sZW5ndGggLSBsZW47XG4gIHZhciBpdGVtcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpdGVtcy5wdXNoKGZvcm1hdFZhbHVlKGFycmF5W2ldLCBzZWVuVmFsdWVzKSk7XG4gIH1cblxuICBpZiAocmVtYWluaW5nID09PSAxKSB7XG4gICAgaXRlbXMucHVzaCgnLi4uIDEgbW9yZSBpdGVtJyk7XG4gIH0gZWxzZSBpZiAocmVtYWluaW5nID4gMSkge1xuICAgIGl0ZW1zLnB1c2goXCIuLi4gXCIuY29uY2F0KHJlbWFpbmluZywgXCIgbW9yZSBpdGVtc1wiKSk7XG4gIH1cblxuICByZXR1cm4gJ1snICsgaXRlbXMuam9pbignLCAnKSArICddJztcbn1cblxuZnVuY3Rpb24gZ2V0Q3VzdG9tRm4ob2JqZWN0KSB7XG4gIHZhciBjdXN0b21JbnNwZWN0Rm4gPSBvYmplY3RbU3RyaW5nKG5vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wpXTtcblxuICBpZiAodHlwZW9mIGN1c3RvbUluc3BlY3RGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBjdXN0b21JbnNwZWN0Rm47XG4gIH1cblxuICBpZiAodHlwZW9mIG9iamVjdC5pbnNwZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG9iamVjdC5pbnNwZWN0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdFRhZyhvYmplY3QpIHtcbiAgdmFyIHRhZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpLnJlcGxhY2UoL15cXFtvYmplY3QgLywgJycpLnJlcGxhY2UoL10kLywgJycpO1xuXG4gIGlmICh0YWcgPT09ICdPYmplY3QnICYmIHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbmFtZSA9IG9iamVjdC5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyAmJiBuYW1lICE9PSAnJykge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhZztcbn1cbiIsIi8qKlxuICogQSByZXBsYWNlbWVudCBmb3IgaW5zdGFuY2VvZiB3aGljaCBpbmNsdWRlcyBhbiBlcnJvciB3YXJuaW5nIHdoZW4gbXVsdGktcmVhbG1cbiAqIGNvbnN0cnVjdG9ycyBhcmUgZGV0ZWN0ZWQuXG4gKi9cbi8vIFNlZTogaHR0cHM6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2UtcGVyZm9ybWFuY2UuaHRtbCNzZXQtbm9kZV9lbnYtdG8tcHJvZHVjdGlvblxuLy8gU2VlOiBodHRwczovL3dlYnBhY2suanMub3JnL2d1aWRlcy9wcm9kdWN0aW9uL1xuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3Jylcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbmZ1bmN0aW9uIGluc3RhbmNlT2YodmFsdWUsIGNvbnN0cnVjdG9yKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yO1xufSA6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbmZ1bmN0aW9uIGluc3RhbmNlT2YodmFsdWUsIGNvbnN0cnVjdG9yKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodmFsdWUpIHtcbiAgICB2YXIgdmFsdWVDbGFzcyA9IHZhbHVlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjbGFzc05hbWUgPSBjb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgaWYgKGNsYXNzTmFtZSAmJiB2YWx1ZUNsYXNzICYmIHZhbHVlQ2xhc3MubmFtZSA9PT0gY2xhc3NOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXNlIFwiLmNvbmNhdChjbGFzc05hbWUsIFwiIFxcXCJcIikuY29uY2F0KHZhbHVlLCBcIlxcXCIgZnJvbSBhbm90aGVyIG1vZHVsZSBvciByZWFsbS5cXG5cXG5FbnN1cmUgdGhhdCB0aGVyZSBpcyBvbmx5IG9uZSBpbnN0YW5jZSBvZiBcXFwiZ3JhcGhxbFxcXCIgaW4gdGhlIG5vZGVfbW9kdWxlc1xcbmRpcmVjdG9yeS4gSWYgZGlmZmVyZW50IHZlcnNpb25zIG9mIFxcXCJncmFwaHFsXFxcIiBhcmUgdGhlIGRlcGVuZGVuY2llcyBvZiBvdGhlclxcbnJlbGllZCBvbiBtb2R1bGVzLCB1c2UgXFxcInJlc29sdXRpb25zXFxcIiB0byBlbnN1cmUgb25seSBvbmUgdmVyc2lvbiBpcyBpbnN0YWxsZWQuXFxuXFxuaHR0cHM6Ly95YXJucGtnLmNvbS9lbi9kb2NzL3NlbGVjdGl2ZS12ZXJzaW9uLXJlc29sdXRpb25zXFxuXFxuRHVwbGljYXRlIFxcXCJncmFwaHFsXFxcIiBtb2R1bGVzIGNhbm5vdCBiZSB1c2VkIGF0IHRoZSBzYW1lIHRpbWUgc2luY2UgZGlmZmVyZW50XFxudmVyc2lvbnMgbWF5IGhhdmUgZGlmZmVyZW50IGNhcGFiaWxpdGllcyBhbmQgYmVoYXZpb3IuIFRoZSBkYXRhIGZyb20gb25lXFxudmVyc2lvbiB1c2VkIGluIHRoZSBmdW5jdGlvbiBmcm9tIGFub3RoZXIgY291bGQgcHJvZHVjZSBjb25mdXNpbmcgYW5kXFxuc3B1cmlvdXMgcmVzdWx0cy5cIikpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIHZhciBib29sZWFuQ29uZGl0aW9uID0gQm9vbGVhbihjb25kaXRpb24pOyAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAoU2VlIHRyYW5zZm9ybWF0aW9uIGRvbmUgaW4gJy4vcmVzb3VyY2VzL2lubGluZUludmFyaWFudC5qcycpXG5cbiAgaWYgKCFib29sZWFuQ29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgIT0gbnVsbCA/IG1lc3NhZ2UgOiAnVW5leHBlY3RlZCBpbnZhcmlhbnQgdHJpZ2dlcmVkLicpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdFxuICogYG51bGxgIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiBfdHlwZW9mKHZhbHVlKSA9PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cbiIsIi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcbnZhciBub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLmZvciA9PT0gJ2Z1bmN0aW9uJyA/IFN5bWJvbC5mb3IoJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJykgOiB1bmRlZmluZWQ7XG5leHBvcnQgZGVmYXVsdCBub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sO1xuIiwiaW1wb3J0IGRlZmluZUluc3BlY3QgZnJvbSBcIi4uL2pzdXRpbHMvZGVmaW5lSW5zcGVjdC5tanNcIjtcblxuLyoqXG4gKiBDb250YWlucyBhIHJhbmdlIG9mIFVURi04IGNoYXJhY3RlciBvZmZzZXRzIGFuZCB0b2tlbiByZWZlcmVuY2VzIHRoYXRcbiAqIGlkZW50aWZ5IHRoZSByZWdpb24gb2YgdGhlIHNvdXJjZSBmcm9tIHdoaWNoIHRoZSBBU1QgZGVyaXZlZC5cbiAqL1xuZXhwb3J0IHZhciBMb2NhdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBUaGUgY2hhcmFjdGVyIG9mZnNldCBhdCB3aGljaCB0aGlzIE5vZGUgYmVnaW5zLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIGNoYXJhY3RlciBvZmZzZXQgYXQgd2hpY2ggdGhpcyBOb2RlIGVuZHMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgVG9rZW4gYXQgd2hpY2ggdGhpcyBOb2RlIGJlZ2lucy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBUb2tlbiBhdCB3aGljaCB0aGlzIE5vZGUgZW5kcy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBTb3VyY2UgZG9jdW1lbnQgdGhlIEFTVCByZXByZXNlbnRzLlxuICAgKi9cbiAgZnVuY3Rpb24gTG9jYXRpb24oc3RhcnRUb2tlbiwgZW5kVG9rZW4sIHNvdXJjZSkge1xuICAgIHRoaXMuc3RhcnQgPSBzdGFydFRva2VuLnN0YXJ0O1xuICAgIHRoaXMuZW5kID0gZW5kVG9rZW4uZW5kO1xuICAgIHRoaXMuc3RhcnRUb2tlbiA9IHN0YXJ0VG9rZW47XG4gICAgdGhpcy5lbmRUb2tlbiA9IGVuZFRva2VuO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExvY2F0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogdGhpcy5zdGFydCxcbiAgICAgIGVuZDogdGhpcy5lbmRcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBMb2NhdGlvbjtcbn0oKTsgLy8gUHJpbnQgYSBzaW1wbGlmaWVkIGZvcm0gd2hlbiBhcHBlYXJpbmcgaW4gYGluc3BlY3RgIGFuZCBgdXRpbC5pbnNwZWN0YC5cblxuZGVmaW5lSW5zcGVjdChMb2NhdGlvbik7XG4vKipcbiAqIFJlcHJlc2VudHMgYSByYW5nZSBvZiBjaGFyYWN0ZXJzIHJlcHJlc2VudGVkIGJ5IGEgbGV4aWNhbCB0b2tlblxuICogd2l0aGluIGEgU291cmNlLlxuICovXG5cbmV4cG9ydCB2YXIgVG9rZW4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogVGhlIGtpbmQgb2YgVG9rZW4uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgY2hhcmFjdGVyIG9mZnNldCBhdCB3aGljaCB0aGlzIE5vZGUgYmVnaW5zLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIGNoYXJhY3RlciBvZmZzZXQgYXQgd2hpY2ggdGhpcyBOb2RlIGVuZHMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgMS1pbmRleGVkIGxpbmUgbnVtYmVyIG9uIHdoaWNoIHRoaXMgVG9rZW4gYXBwZWFycy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSAxLWluZGV4ZWQgY29sdW1uIG51bWJlciBhdCB3aGljaCB0aGlzIFRva2VuIGJlZ2lucy5cbiAgICovXG5cbiAgLyoqXG4gICAqIEZvciBub24tcHVuY3R1YXRpb24gdG9rZW5zLCByZXByZXNlbnRzIHRoZSBpbnRlcnByZXRlZCB2YWx1ZSBvZiB0aGUgdG9rZW4uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUb2tlbnMgZXhpc3QgYXMgbm9kZXMgaW4gYSBkb3VibGUtbGlua2VkLWxpc3QgYW1vbmdzdCBhbGwgdG9rZW5zXG4gICAqIGluY2x1ZGluZyBpZ25vcmVkIHRva2Vucy4gPFNPRj4gaXMgYWx3YXlzIHRoZSBmaXJzdCBub2RlIGFuZCA8RU9GPlxuICAgKiB0aGUgbGFzdC5cbiAgICovXG4gIGZ1bmN0aW9uIFRva2VuKGtpbmQsIHN0YXJ0LCBlbmQsIGxpbmUsIGNvbHVtbiwgcHJldiwgdmFsdWUpIHtcbiAgICB0aGlzLmtpbmQgPSBraW5kO1xuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnByZXYgPSBwcmV2O1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IFRva2VuLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogdGhpcy5raW5kLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBsaW5lOiB0aGlzLmxpbmUsXG4gICAgICBjb2x1bW46IHRoaXMuY29sdW1uXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gVG9rZW47XG59KCk7IC8vIFByaW50IGEgc2ltcGxpZmllZCBmb3JtIHdoZW4gYXBwZWFyaW5nIGluIGBpbnNwZWN0YCBhbmQgYHV0aWwuaW5zcGVjdGAuXG5cbmRlZmluZUluc3BlY3QoVG9rZW4pO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlKG1heWJlTm9kZSkge1xuICByZXR1cm4gbWF5YmVOb2RlICE9IG51bGwgJiYgdHlwZW9mIG1heWJlTm9kZS5raW5kID09PSAnc3RyaW5nJztcbn1cbi8qKlxuICogVGhlIGxpc3Qgb2YgYWxsIHBvc3NpYmxlIEFTVCBub2RlIHR5cGVzLlxuICovXG4iLCIvKipcbiAqIFByb2R1Y2VzIHRoZSB2YWx1ZSBvZiBhIGJsb2NrIHN0cmluZyBmcm9tIGl0cyBwYXJzZWQgcmF3IHZhbHVlLCBzaW1pbGFyIHRvXG4gKiBDb2ZmZWVTY3JpcHQncyBibG9jayBzdHJpbmcsIFB5dGhvbidzIGRvY3N0cmluZyB0cmltIG9yIFJ1YnkncyBzdHJpcF9oZXJlZG9jLlxuICpcbiAqIFRoaXMgaW1wbGVtZW50cyB0aGUgR3JhcGhRTCBzcGVjJ3MgQmxvY2tTdHJpbmdWYWx1ZSgpIHN0YXRpYyBhbGdvcml0aG0uXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWRlbnRCbG9ja1N0cmluZ1ZhbHVlKHJhd1N0cmluZykge1xuICAvLyBFeHBhbmQgYSBibG9jayBzdHJpbmcncyByYXcgdmFsdWUgaW50byBpbmRlcGVuZGVudCBsaW5lcy5cbiAgdmFyIGxpbmVzID0gcmF3U3RyaW5nLnNwbGl0KC9cXHJcXG58W1xcblxccl0vZyk7IC8vIFJlbW92ZSBjb21tb24gaW5kZW50YXRpb24gZnJvbSBhbGwgbGluZXMgYnV0IGZpcnN0LlxuXG4gIHZhciBjb21tb25JbmRlbnQgPSBnZXRCbG9ja1N0cmluZ0luZGVudGF0aW9uKHJhd1N0cmluZyk7XG5cbiAgaWYgKGNvbW1vbkluZGVudCAhPT0gMCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmVzW2ldID0gbGluZXNbaV0uc2xpY2UoY29tbW9uSW5kZW50KTtcbiAgICB9XG4gIH0gLy8gUmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIGJsYW5rIGxpbmVzLlxuXG5cbiAgdmFyIHN0YXJ0TGluZSA9IDA7XG5cbiAgd2hpbGUgKHN0YXJ0TGluZSA8IGxpbmVzLmxlbmd0aCAmJiBpc0JsYW5rKGxpbmVzW3N0YXJ0TGluZV0pKSB7XG4gICAgKytzdGFydExpbmU7XG4gIH1cblxuICB2YXIgZW5kTGluZSA9IGxpbmVzLmxlbmd0aDtcblxuICB3aGlsZSAoZW5kTGluZSA+IHN0YXJ0TGluZSAmJiBpc0JsYW5rKGxpbmVzW2VuZExpbmUgLSAxXSkpIHtcbiAgICAtLWVuZExpbmU7XG4gIH0gLy8gUmV0dXJuIGEgc3RyaW5nIG9mIHRoZSBsaW5lcyBqb2luZWQgd2l0aCBVKzAwMEEuXG5cblxuICByZXR1cm4gbGluZXMuc2xpY2Uoc3RhcnRMaW5lLCBlbmRMaW5lKS5qb2luKCdcXG4nKTtcbn1cblxuZnVuY3Rpb24gaXNCbGFuayhzdHIpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoc3RyW2ldICE9PSAnICcgJiYgc3RyW2ldICE9PSAnXFx0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCbG9ja1N0cmluZ0luZGVudGF0aW9uKHZhbHVlKSB7XG4gIHZhciBfY29tbW9uSW5kZW50O1xuXG4gIHZhciBpc0ZpcnN0TGluZSA9IHRydWU7XG4gIHZhciBpc0VtcHR5TGluZSA9IHRydWU7XG4gIHZhciBpbmRlbnQgPSAwO1xuICB2YXIgY29tbW9uSW5kZW50ID0gbnVsbDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgKytpKSB7XG4gICAgc3dpdGNoICh2YWx1ZS5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICBjYXNlIDEzOlxuICAgICAgICAvLyAgXFxyXG4gICAgICAgIGlmICh2YWx1ZS5jaGFyQ29kZUF0KGkgKyAxKSA9PT0gMTApIHtcbiAgICAgICAgICArK2k7IC8vIHNraXAgXFxyXFxuIGFzIG9uZSBzeW1ib2xcbiAgICAgICAgfVxuXG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG5cbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIC8vICBcXG5cbiAgICAgICAgaXNGaXJzdExpbmUgPSBmYWxzZTtcbiAgICAgICAgaXNFbXB0eUxpbmUgPSB0cnVlO1xuICAgICAgICBpbmRlbnQgPSAwO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5OiAvLyAgIFxcdFxuXG4gICAgICBjYXNlIDMyOlxuICAgICAgICAvLyAgPHNwYWNlPlxuICAgICAgICArK2luZGVudDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChpc0VtcHR5TGluZSAmJiAhaXNGaXJzdExpbmUgJiYgKGNvbW1vbkluZGVudCA9PT0gbnVsbCB8fCBpbmRlbnQgPCBjb21tb25JbmRlbnQpKSB7XG4gICAgICAgICAgY29tbW9uSW5kZW50ID0gaW5kZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaXNFbXB0eUxpbmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKF9jb21tb25JbmRlbnQgPSBjb21tb25JbmRlbnQpICE9PSBudWxsICYmIF9jb21tb25JbmRlbnQgIT09IHZvaWQgMCA/IF9jb21tb25JbmRlbnQgOiAwO1xufVxuLyoqXG4gKiBQcmludCBhIGJsb2NrIHN0cmluZyBpbiB0aGUgaW5kZW50ZWQgYmxvY2sgZm9ybSBieSBhZGRpbmcgYSBsZWFkaW5nIGFuZFxuICogdHJhaWxpbmcgYmxhbmsgbGluZS4gSG93ZXZlciwgaWYgYSBibG9jayBzdHJpbmcgc3RhcnRzIHdpdGggd2hpdGVzcGFjZSBhbmQgaXNcbiAqIGEgc2luZ2xlLWxpbmUsIGFkZGluZyBhIGxlYWRpbmcgYmxhbmsgbGluZSB3b3VsZCBzdHJpcCB0aGF0IHdoaXRlc3BhY2UuXG4gKlxuICogQGludGVybmFsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50QmxvY2tTdHJpbmcodmFsdWUpIHtcbiAgdmFyIGluZGVudGF0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgdmFyIHByZWZlck11bHRpcGxlTGluZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICB2YXIgaXNTaW5nbGVMaW5lID0gdmFsdWUuaW5kZXhPZignXFxuJykgPT09IC0xO1xuICB2YXIgaGFzTGVhZGluZ1NwYWNlID0gdmFsdWVbMF0gPT09ICcgJyB8fCB2YWx1ZVswXSA9PT0gJ1xcdCc7XG4gIHZhciBoYXNUcmFpbGluZ1F1b3RlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICdcIic7XG4gIHZhciBoYXNUcmFpbGluZ1NsYXNoID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICdcXFxcJztcbiAgdmFyIHByaW50QXNNdWx0aXBsZUxpbmVzID0gIWlzU2luZ2xlTGluZSB8fCBoYXNUcmFpbGluZ1F1b3RlIHx8IGhhc1RyYWlsaW5nU2xhc2ggfHwgcHJlZmVyTXVsdGlwbGVMaW5lcztcbiAgdmFyIHJlc3VsdCA9ICcnOyAvLyBGb3JtYXQgYSBtdWx0aS1saW5lIGJsb2NrIHF1b3RlIHRvIGFjY291bnQgZm9yIGxlYWRpbmcgc3BhY2UuXG5cbiAgaWYgKHByaW50QXNNdWx0aXBsZUxpbmVzICYmICEoaXNTaW5nbGVMaW5lICYmIGhhc0xlYWRpbmdTcGFjZSkpIHtcbiAgICByZXN1bHQgKz0gJ1xcbicgKyBpbmRlbnRhdGlvbjtcbiAgfVxuXG4gIHJlc3VsdCArPSBpbmRlbnRhdGlvbiA/IHZhbHVlLnJlcGxhY2UoL1xcbi9nLCAnXFxuJyArIGluZGVudGF0aW9uKSA6IHZhbHVlO1xuXG4gIGlmIChwcmludEFzTXVsdGlwbGVMaW5lcykge1xuICAgIHJlc3VsdCArPSAnXFxuJztcbiAgfVxuXG4gIHJldHVybiAnXCJcIlwiJyArIHJlc3VsdC5yZXBsYWNlKC9cIlwiXCIvZywgJ1xcXFxcIlwiXCInKSArICdcIlwiXCInO1xufVxuIiwiLyoqXG4gKiBUaGUgc2V0IG9mIGFsbG93ZWQgZGlyZWN0aXZlIGxvY2F0aW9uIHZhbHVlcy5cbiAqL1xuZXhwb3J0IHZhciBEaXJlY3RpdmVMb2NhdGlvbiA9IE9iamVjdC5mcmVlemUoe1xuICAvLyBSZXF1ZXN0IERlZmluaXRpb25zXG4gIFFVRVJZOiAnUVVFUlknLFxuICBNVVRBVElPTjogJ01VVEFUSU9OJyxcbiAgU1VCU0NSSVBUSU9OOiAnU1VCU0NSSVBUSU9OJyxcbiAgRklFTEQ6ICdGSUVMRCcsXG4gIEZSQUdNRU5UX0RFRklOSVRJT046ICdGUkFHTUVOVF9ERUZJTklUSU9OJyxcbiAgRlJBR01FTlRfU1BSRUFEOiAnRlJBR01FTlRfU1BSRUFEJyxcbiAgSU5MSU5FX0ZSQUdNRU5UOiAnSU5MSU5FX0ZSQUdNRU5UJyxcbiAgVkFSSUFCTEVfREVGSU5JVElPTjogJ1ZBUklBQkxFX0RFRklOSVRJT04nLFxuICAvLyBUeXBlIFN5c3RlbSBEZWZpbml0aW9uc1xuICBTQ0hFTUE6ICdTQ0hFTUEnLFxuICBTQ0FMQVI6ICdTQ0FMQVInLFxuICBPQkpFQ1Q6ICdPQkpFQ1QnLFxuICBGSUVMRF9ERUZJTklUSU9OOiAnRklFTERfREVGSU5JVElPTicsXG4gIEFSR1VNRU5UX0RFRklOSVRJT046ICdBUkdVTUVOVF9ERUZJTklUSU9OJyxcbiAgSU5URVJGQUNFOiAnSU5URVJGQUNFJyxcbiAgVU5JT046ICdVTklPTicsXG4gIEVOVU06ICdFTlVNJyxcbiAgRU5VTV9WQUxVRTogJ0VOVU1fVkFMVUUnLFxuICBJTlBVVF9PQkpFQ1Q6ICdJTlBVVF9PQkpFQ1QnLFxuICBJTlBVVF9GSUVMRF9ERUZJTklUSU9OOiAnSU5QVVRfRklFTERfREVGSU5JVElPTidcbn0pO1xuLyoqXG4gKiBUaGUgZW51bSB0eXBlIHJlcHJlc2VudGluZyB0aGUgZGlyZWN0aXZlIGxvY2F0aW9uIHZhbHVlcy5cbiAqL1xuIiwiLyoqXG4gKiBUaGUgc2V0IG9mIGFsbG93ZWQga2luZCB2YWx1ZXMgZm9yIEFTVCBub2Rlcy5cbiAqL1xuZXhwb3J0IHZhciBLaW5kID0gT2JqZWN0LmZyZWV6ZSh7XG4gIC8vIE5hbWVcbiAgTkFNRTogJ05hbWUnLFxuICAvLyBEb2N1bWVudFxuICBET0NVTUVOVDogJ0RvY3VtZW50JyxcbiAgT1BFUkFUSU9OX0RFRklOSVRJT046ICdPcGVyYXRpb25EZWZpbml0aW9uJyxcbiAgVkFSSUFCTEVfREVGSU5JVElPTjogJ1ZhcmlhYmxlRGVmaW5pdGlvbicsXG4gIFNFTEVDVElPTl9TRVQ6ICdTZWxlY3Rpb25TZXQnLFxuICBGSUVMRDogJ0ZpZWxkJyxcbiAgQVJHVU1FTlQ6ICdBcmd1bWVudCcsXG4gIC8vIEZyYWdtZW50c1xuICBGUkFHTUVOVF9TUFJFQUQ6ICdGcmFnbWVudFNwcmVhZCcsXG4gIElOTElORV9GUkFHTUVOVDogJ0lubGluZUZyYWdtZW50JyxcbiAgRlJBR01FTlRfREVGSU5JVElPTjogJ0ZyYWdtZW50RGVmaW5pdGlvbicsXG4gIC8vIFZhbHVlc1xuICBWQVJJQUJMRTogJ1ZhcmlhYmxlJyxcbiAgSU5UOiAnSW50VmFsdWUnLFxuICBGTE9BVDogJ0Zsb2F0VmFsdWUnLFxuICBTVFJJTkc6ICdTdHJpbmdWYWx1ZScsXG4gIEJPT0xFQU46ICdCb29sZWFuVmFsdWUnLFxuICBOVUxMOiAnTnVsbFZhbHVlJyxcbiAgRU5VTTogJ0VudW1WYWx1ZScsXG4gIExJU1Q6ICdMaXN0VmFsdWUnLFxuICBPQkpFQ1Q6ICdPYmplY3RWYWx1ZScsXG4gIE9CSkVDVF9GSUVMRDogJ09iamVjdEZpZWxkJyxcbiAgLy8gRGlyZWN0aXZlc1xuICBESVJFQ1RJVkU6ICdEaXJlY3RpdmUnLFxuICAvLyBUeXBlc1xuICBOQU1FRF9UWVBFOiAnTmFtZWRUeXBlJyxcbiAgTElTVF9UWVBFOiAnTGlzdFR5cGUnLFxuICBOT05fTlVMTF9UWVBFOiAnTm9uTnVsbFR5cGUnLFxuICAvLyBUeXBlIFN5c3RlbSBEZWZpbml0aW9uc1xuICBTQ0hFTUFfREVGSU5JVElPTjogJ1NjaGVtYURlZmluaXRpb24nLFxuICBPUEVSQVRJT05fVFlQRV9ERUZJTklUSU9OOiAnT3BlcmF0aW9uVHlwZURlZmluaXRpb24nLFxuICAvLyBUeXBlIERlZmluaXRpb25zXG4gIFNDQUxBUl9UWVBFX0RFRklOSVRJT046ICdTY2FsYXJUeXBlRGVmaW5pdGlvbicsXG4gIE9CSkVDVF9UWVBFX0RFRklOSVRJT046ICdPYmplY3RUeXBlRGVmaW5pdGlvbicsXG4gIEZJRUxEX0RFRklOSVRJT046ICdGaWVsZERlZmluaXRpb24nLFxuICBJTlBVVF9WQUxVRV9ERUZJTklUSU9OOiAnSW5wdXRWYWx1ZURlZmluaXRpb24nLFxuICBJTlRFUkZBQ0VfVFlQRV9ERUZJTklUSU9OOiAnSW50ZXJmYWNlVHlwZURlZmluaXRpb24nLFxuICBVTklPTl9UWVBFX0RFRklOSVRJT046ICdVbmlvblR5cGVEZWZpbml0aW9uJyxcbiAgRU5VTV9UWVBFX0RFRklOSVRJT046ICdFbnVtVHlwZURlZmluaXRpb24nLFxuICBFTlVNX1ZBTFVFX0RFRklOSVRJT046ICdFbnVtVmFsdWVEZWZpbml0aW9uJyxcbiAgSU5QVVRfT0JKRUNUX1RZUEVfREVGSU5JVElPTjogJ0lucHV0T2JqZWN0VHlwZURlZmluaXRpb24nLFxuICAvLyBEaXJlY3RpdmUgRGVmaW5pdGlvbnNcbiAgRElSRUNUSVZFX0RFRklOSVRJT046ICdEaXJlY3RpdmVEZWZpbml0aW9uJyxcbiAgLy8gVHlwZSBTeXN0ZW0gRXh0ZW5zaW9uc1xuICBTQ0hFTUFfRVhURU5TSU9OOiAnU2NoZW1hRXh0ZW5zaW9uJyxcbiAgLy8gVHlwZSBFeHRlbnNpb25zXG4gIFNDQUxBUl9UWVBFX0VYVEVOU0lPTjogJ1NjYWxhclR5cGVFeHRlbnNpb24nLFxuICBPQkpFQ1RfVFlQRV9FWFRFTlNJT046ICdPYmplY3RUeXBlRXh0ZW5zaW9uJyxcbiAgSU5URVJGQUNFX1RZUEVfRVhURU5TSU9OOiAnSW50ZXJmYWNlVHlwZUV4dGVuc2lvbicsXG4gIFVOSU9OX1RZUEVfRVhURU5TSU9OOiAnVW5pb25UeXBlRXh0ZW5zaW9uJyxcbiAgRU5VTV9UWVBFX0VYVEVOU0lPTjogJ0VudW1UeXBlRXh0ZW5zaW9uJyxcbiAgSU5QVVRfT0JKRUNUX1RZUEVfRVhURU5TSU9OOiAnSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uJ1xufSk7XG4vKipcbiAqIFRoZSBlbnVtIHR5cGUgcmVwcmVzZW50aW5nIHRoZSBwb3NzaWJsZSBraW5kIHZhbHVlcyBvZiBBU1Qgbm9kZXMuXG4gKi9cbiIsImltcG9ydCB7IHN5bnRheEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL3N5bnRheEVycm9yLm1qc1wiO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi9hc3QubWpzXCI7XG5pbXBvcnQgeyBUb2tlbktpbmQgfSBmcm9tIFwiLi90b2tlbktpbmQubWpzXCI7XG5pbXBvcnQgeyBkZWRlbnRCbG9ja1N0cmluZ1ZhbHVlIH0gZnJvbSBcIi4vYmxvY2tTdHJpbmcubWpzXCI7XG4vKipcbiAqIEdpdmVuIGEgU291cmNlIG9iamVjdCwgY3JlYXRlcyBhIExleGVyIGZvciB0aGF0IHNvdXJjZS5cbiAqIEEgTGV4ZXIgaXMgYSBzdGF0ZWZ1bCBzdHJlYW0gZ2VuZXJhdG9yIGluIHRoYXQgZXZlcnkgdGltZVxuICogaXQgaXMgYWR2YW5jZWQsIGl0IHJldHVybnMgdGhlIG5leHQgdG9rZW4gaW4gdGhlIFNvdXJjZS4gQXNzdW1pbmcgdGhlXG4gKiBzb3VyY2UgbGV4ZXMsIHRoZSBmaW5hbCBUb2tlbiBlbWl0dGVkIGJ5IHRoZSBsZXhlciB3aWxsIGJlIG9mIGtpbmRcbiAqIEVPRiwgYWZ0ZXIgd2hpY2ggdGhlIGxleGVyIHdpbGwgcmVwZWF0ZWRseSByZXR1cm4gdGhlIHNhbWUgRU9GIHRva2VuXG4gKiB3aGVuZXZlciBjYWxsZWQuXG4gKi9cblxuZXhwb3J0IHZhciBMZXhlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBUaGUgcHJldmlvdXNseSBmb2N1c2VkIG5vbi1pZ25vcmVkIHRva2VuLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBmb2N1c2VkIG5vbi1pZ25vcmVkIHRva2VuLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlICgxLWluZGV4ZWQpIGxpbmUgY29udGFpbmluZyB0aGUgY3VycmVudCB0b2tlbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBjaGFyYWN0ZXIgb2Zmc2V0IGF0IHdoaWNoIHRoZSBjdXJyZW50IGxpbmUgYmVnaW5zLlxuICAgKi9cbiAgZnVuY3Rpb24gTGV4ZXIoc291cmNlKSB7XG4gICAgdmFyIHN0YXJ0T2ZGaWxlVG9rZW4gPSBuZXcgVG9rZW4oVG9rZW5LaW5kLlNPRiwgMCwgMCwgMCwgMCwgbnVsbCk7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5sYXN0VG9rZW4gPSBzdGFydE9mRmlsZVRva2VuO1xuICAgIHRoaXMudG9rZW4gPSBzdGFydE9mRmlsZVRva2VuO1xuICAgIHRoaXMubGluZSA9IDE7XG4gICAgdGhpcy5saW5lU3RhcnQgPSAwO1xuICB9XG4gIC8qKlxuICAgKiBBZHZhbmNlcyB0aGUgdG9rZW4gc3RyZWFtIHRvIHRoZSBuZXh0IG5vbi1pZ25vcmVkIHRva2VuLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBMZXhlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkdmFuY2UgPSBmdW5jdGlvbiBhZHZhbmNlKCkge1xuICAgIHRoaXMubGFzdFRva2VuID0gdGhpcy50b2tlbjtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2VuID0gdGhpcy5sb29rYWhlYWQoKTtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbiAgLyoqXG4gICAqIExvb2tzIGFoZWFkIGFuZCByZXR1cm5zIHRoZSBuZXh0IG5vbi1pZ25vcmVkIHRva2VuLCBidXQgZG9lcyBub3QgY2hhbmdlXG4gICAqIHRoZSBzdGF0ZSBvZiBMZXhlci5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ubG9va2FoZWFkID0gZnVuY3Rpb24gbG9va2FoZWFkKCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW47XG5cbiAgICBpZiAodG9rZW4ua2luZCAhPT0gVG9rZW5LaW5kLkVPRikge1xuICAgICAgZG8ge1xuICAgICAgICB2YXIgX3Rva2VuJG5leHQ7XG5cbiAgICAgICAgLy8gTm90ZTogbmV4dCBpcyBvbmx5IG11dGFibGUgZHVyaW5nIHBhcnNpbmcsIHNvIHdlIGNhc3QgdG8gYWxsb3cgdGhpcy5cbiAgICAgICAgdG9rZW4gPSAoX3Rva2VuJG5leHQgPSB0b2tlbi5uZXh0KSAhPT0gbnVsbCAmJiBfdG9rZW4kbmV4dCAhPT0gdm9pZCAwID8gX3Rva2VuJG5leHQgOiB0b2tlbi5uZXh0ID0gcmVhZFRva2VuKHRoaXMsIHRva2VuKTtcbiAgICAgIH0gd2hpbGUgKHRva2VuLmtpbmQgPT09IFRva2VuS2luZC5DT01NRU5UKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH07XG5cbiAgcmV0dXJuIExleGVyO1xufSgpO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQdW5jdHVhdG9yVG9rZW5LaW5kKGtpbmQpIHtcbiAgcmV0dXJuIGtpbmQgPT09IFRva2VuS2luZC5CQU5HIHx8IGtpbmQgPT09IFRva2VuS2luZC5ET0xMQVIgfHwga2luZCA9PT0gVG9rZW5LaW5kLkFNUCB8fCBraW5kID09PSBUb2tlbktpbmQuUEFSRU5fTCB8fCBraW5kID09PSBUb2tlbktpbmQuUEFSRU5fUiB8fCBraW5kID09PSBUb2tlbktpbmQuU1BSRUFEIHx8IGtpbmQgPT09IFRva2VuS2luZC5DT0xPTiB8fCBraW5kID09PSBUb2tlbktpbmQuRVFVQUxTIHx8IGtpbmQgPT09IFRva2VuS2luZC5BVCB8fCBraW5kID09PSBUb2tlbktpbmQuQlJBQ0tFVF9MIHx8IGtpbmQgPT09IFRva2VuS2luZC5CUkFDS0VUX1IgfHwga2luZCA9PT0gVG9rZW5LaW5kLkJSQUNFX0wgfHwga2luZCA9PT0gVG9rZW5LaW5kLlBJUEUgfHwga2luZCA9PT0gVG9rZW5LaW5kLkJSQUNFX1I7XG59XG5cbmZ1bmN0aW9uIHByaW50Q2hhckNvZGUoY29kZSkge1xuICByZXR1cm4gKC8vIE5hTi91bmRlZmluZWQgcmVwcmVzZW50cyBhY2Nlc3MgYmV5b25kIHRoZSBlbmQgb2YgdGhlIGZpbGUuXG4gICAgaXNOYU4oY29kZSkgPyBUb2tlbktpbmQuRU9GIDogLy8gVHJ1c3QgSlNPTiBmb3IgQVNDSUkuXG4gICAgY29kZSA8IDB4MDA3ZiA/IEpTT04uc3RyaW5naWZ5KFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSkpIDogLy8gT3RoZXJ3aXNlIHByaW50IHRoZSBlc2NhcGVkIGZvcm0uXG4gICAgXCJcXFwiXFxcXHVcIi5jb25jYXQoKCcwMCcgKyBjb2RlLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKS5zbGljZSgtNCksIFwiXFxcIlwiKVxuICApO1xufVxuLyoqXG4gKiBHZXRzIHRoZSBuZXh0IHRva2VuIGZyb20gdGhlIHNvdXJjZSBzdGFydGluZyBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24uXG4gKlxuICogVGhpcyBza2lwcyBvdmVyIHdoaXRlc3BhY2UgdW50aWwgaXQgZmluZHMgdGhlIG5leHQgbGV4YWJsZSB0b2tlbiwgdGhlbiBsZXhlc1xuICogcHVuY3R1YXRvcnMgaW1tZWRpYXRlbHkgb3IgY2FsbHMgdGhlIGFwcHJvcHJpYXRlIGhlbHBlciBmdW5jdGlvbiBmb3IgbW9yZVxuICogY29tcGxpY2F0ZWQgdG9rZW5zLlxuICovXG5cblxuZnVuY3Rpb24gcmVhZFRva2VuKGxleGVyLCBwcmV2KSB7XG4gIHZhciBzb3VyY2UgPSBsZXhlci5zb3VyY2U7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBib2R5TGVuZ3RoID0gYm9keS5sZW5ndGg7XG4gIHZhciBwb3MgPSBwcmV2LmVuZDtcblxuICB3aGlsZSAocG9zIDwgYm9keUxlbmd0aCkge1xuICAgIHZhciBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvcyk7XG4gICAgdmFyIF9saW5lID0gbGV4ZXIubGluZTtcblxuICAgIHZhciBfY29sID0gMSArIHBvcyAtIGxleGVyLmxpbmVTdGFydDsgLy8gU291cmNlQ2hhcmFjdGVyXG5cblxuICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgY2FzZSAweGZlZmY6IC8vIDxCT00+XG5cbiAgICAgIGNhc2UgOTogLy8gICBcXHRcblxuICAgICAgY2FzZSAzMjogLy8gIDxzcGFjZT5cblxuICAgICAgY2FzZSA0NDpcbiAgICAgICAgLy8gICxcbiAgICAgICAgKytwb3M7XG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBjYXNlIDEwOlxuICAgICAgICAvLyAgXFxuXG4gICAgICAgICsrcG9zO1xuICAgICAgICArK2xleGVyLmxpbmU7XG4gICAgICAgIGxleGVyLmxpbmVTdGFydCA9IHBvcztcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIC8vICBcXHJcbiAgICAgICAgaWYgKGJvZHkuY2hhckNvZGVBdChwb3MgKyAxKSA9PT0gMTApIHtcbiAgICAgICAgICBwb3MgKz0gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICArK3BvcztcbiAgICAgICAgfVxuXG4gICAgICAgICsrbGV4ZXIubGluZTtcbiAgICAgICAgbGV4ZXIubGluZVN0YXJ0ID0gcG9zO1xuICAgICAgICBjb250aW51ZTtcblxuICAgICAgY2FzZSAzMzpcbiAgICAgICAgLy8gICFcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQkFORywgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgMzU6XG4gICAgICAgIC8vICAjXG4gICAgICAgIHJldHVybiByZWFkQ29tbWVudChzb3VyY2UsIHBvcywgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDM2OlxuICAgICAgICAvLyAgJFxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5ET0xMQVIsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDM4OlxuICAgICAgICAvLyAgJlxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5BTVAsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDQwOlxuICAgICAgICAvLyAgKFxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5QQVJFTl9MLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA0MTpcbiAgICAgICAgLy8gIClcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuUEFSRU5fUiwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgNDY6XG4gICAgICAgIC8vICAuXG4gICAgICAgIGlmIChib2R5LmNoYXJDb2RlQXQocG9zICsgMSkgPT09IDQ2ICYmIGJvZHkuY2hhckNvZGVBdChwb3MgKyAyKSA9PT0gNDYpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5TUFJFQUQsIHBvcywgcG9zICsgMywgX2xpbmUsIF9jb2wsIHByZXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIC8vICA6XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkNPTE9OLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA2MTpcbiAgICAgICAgLy8gID1cbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuRVFVQUxTLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA2NDpcbiAgICAgICAgLy8gIEBcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQVQsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDkxOlxuICAgICAgICAvLyAgW1xuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CUkFDS0VUX0wsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDkzOlxuICAgICAgICAvLyAgXVxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CUkFDS0VUX1IsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDEyMzpcbiAgICAgICAgLy8ge1xuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CUkFDRV9MLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAxMjQ6XG4gICAgICAgIC8vIHxcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuUElQRSwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgMTI1OlxuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkJSQUNFX1IsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDM0OlxuICAgICAgICAvLyAgXCJcbiAgICAgICAgaWYgKGJvZHkuY2hhckNvZGVBdChwb3MgKyAxKSA9PT0gMzQgJiYgYm9keS5jaGFyQ29kZUF0KHBvcyArIDIpID09PSAzNCkge1xuICAgICAgICAgIHJldHVybiByZWFkQmxvY2tTdHJpbmcoc291cmNlLCBwb3MsIF9saW5lLCBfY29sLCBwcmV2LCBsZXhlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVhZFN0cmluZyhzb3VyY2UsIHBvcywgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDQ1OiAvLyAgLVxuXG4gICAgICBjYXNlIDQ4OiAvLyAgMFxuXG4gICAgICBjYXNlIDQ5OiAvLyAgMVxuXG4gICAgICBjYXNlIDUwOiAvLyAgMlxuXG4gICAgICBjYXNlIDUxOiAvLyAgM1xuXG4gICAgICBjYXNlIDUyOiAvLyAgNFxuXG4gICAgICBjYXNlIDUzOiAvLyAgNVxuXG4gICAgICBjYXNlIDU0OiAvLyAgNlxuXG4gICAgICBjYXNlIDU1OiAvLyAgN1xuXG4gICAgICBjYXNlIDU2OiAvLyAgOFxuXG4gICAgICBjYXNlIDU3OlxuICAgICAgICAvLyAgOVxuICAgICAgICByZXR1cm4gcmVhZE51bWJlcihzb3VyY2UsIHBvcywgY29kZSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDY1OiAvLyAgQVxuXG4gICAgICBjYXNlIDY2OiAvLyAgQlxuXG4gICAgICBjYXNlIDY3OiAvLyAgQ1xuXG4gICAgICBjYXNlIDY4OiAvLyAgRFxuXG4gICAgICBjYXNlIDY5OiAvLyAgRVxuXG4gICAgICBjYXNlIDcwOiAvLyAgRlxuXG4gICAgICBjYXNlIDcxOiAvLyAgR1xuXG4gICAgICBjYXNlIDcyOiAvLyAgSFxuXG4gICAgICBjYXNlIDczOiAvLyAgSVxuXG4gICAgICBjYXNlIDc0OiAvLyAgSlxuXG4gICAgICBjYXNlIDc1OiAvLyAgS1xuXG4gICAgICBjYXNlIDc2OiAvLyAgTFxuXG4gICAgICBjYXNlIDc3OiAvLyAgTVxuXG4gICAgICBjYXNlIDc4OiAvLyAgTlxuXG4gICAgICBjYXNlIDc5OiAvLyAgT1xuXG4gICAgICBjYXNlIDgwOiAvLyAgUFxuXG4gICAgICBjYXNlIDgxOiAvLyAgUVxuXG4gICAgICBjYXNlIDgyOiAvLyAgUlxuXG4gICAgICBjYXNlIDgzOiAvLyAgU1xuXG4gICAgICBjYXNlIDg0OiAvLyAgVFxuXG4gICAgICBjYXNlIDg1OiAvLyAgVVxuXG4gICAgICBjYXNlIDg2OiAvLyAgVlxuXG4gICAgICBjYXNlIDg3OiAvLyAgV1xuXG4gICAgICBjYXNlIDg4OiAvLyAgWFxuXG4gICAgICBjYXNlIDg5OiAvLyAgWVxuXG4gICAgICBjYXNlIDkwOiAvLyAgWlxuXG4gICAgICBjYXNlIDk1OiAvLyAgX1xuXG4gICAgICBjYXNlIDk3OiAvLyAgYVxuXG4gICAgICBjYXNlIDk4OiAvLyAgYlxuXG4gICAgICBjYXNlIDk5OiAvLyAgY1xuXG4gICAgICBjYXNlIDEwMDogLy8gZFxuXG4gICAgICBjYXNlIDEwMTogLy8gZVxuXG4gICAgICBjYXNlIDEwMjogLy8gZlxuXG4gICAgICBjYXNlIDEwMzogLy8gZ1xuXG4gICAgICBjYXNlIDEwNDogLy8gaFxuXG4gICAgICBjYXNlIDEwNTogLy8gaVxuXG4gICAgICBjYXNlIDEwNjogLy8galxuXG4gICAgICBjYXNlIDEwNzogLy8ga1xuXG4gICAgICBjYXNlIDEwODogLy8gbFxuXG4gICAgICBjYXNlIDEwOTogLy8gbVxuXG4gICAgICBjYXNlIDExMDogLy8gblxuXG4gICAgICBjYXNlIDExMTogLy8gb1xuXG4gICAgICBjYXNlIDExMjogLy8gcFxuXG4gICAgICBjYXNlIDExMzogLy8gcVxuXG4gICAgICBjYXNlIDExNDogLy8gclxuXG4gICAgICBjYXNlIDExNTogLy8gc1xuXG4gICAgICBjYXNlIDExNjogLy8gdFxuXG4gICAgICBjYXNlIDExNzogLy8gdVxuXG4gICAgICBjYXNlIDExODogLy8gdlxuXG4gICAgICBjYXNlIDExOTogLy8gd1xuXG4gICAgICBjYXNlIDEyMDogLy8geFxuXG4gICAgICBjYXNlIDEyMTogLy8geVxuXG4gICAgICBjYXNlIDEyMjpcbiAgICAgICAgLy8gelxuICAgICAgICByZXR1cm4gcmVhZE5hbWUoc291cmNlLCBwb3MsIF9saW5lLCBfY29sLCBwcmV2KTtcbiAgICB9XG5cbiAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvcywgdW5leHBlY3RlZENoYXJhY3Rlck1lc3NhZ2UoY29kZSkpO1xuICB9XG5cbiAgdmFyIGxpbmUgPSBsZXhlci5saW5lO1xuICB2YXIgY29sID0gMSArIHBvcyAtIGxleGVyLmxpbmVTdGFydDtcbiAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuRU9GLCBib2R5TGVuZ3RoLCBib2R5TGVuZ3RoLCBsaW5lLCBjb2wsIHByZXYpO1xufVxuLyoqXG4gKiBSZXBvcnQgYSBtZXNzYWdlIHRoYXQgYW4gdW5leHBlY3RlZCBjaGFyYWN0ZXIgd2FzIGVuY291bnRlcmVkLlxuICovXG5cblxuZnVuY3Rpb24gdW5leHBlY3RlZENoYXJhY3Rlck1lc3NhZ2UoY29kZSkge1xuICBpZiAoY29kZSA8IDB4MDAyMCAmJiBjb2RlICE9PSAweDAwMDkgJiYgY29kZSAhPT0gMHgwMDBhICYmIGNvZGUgIT09IDB4MDAwZCkge1xuICAgIHJldHVybiBcIkNhbm5vdCBjb250YWluIHRoZSBpbnZhbGlkIGNoYXJhY3RlciBcIi5jb25jYXQocHJpbnRDaGFyQ29kZShjb2RlKSwgXCIuXCIpO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09IDM5KSB7XG4gICAgLy8gJ1xuICAgIHJldHVybiAnVW5leHBlY3RlZCBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyIChcXCcpLCBkaWQgeW91IG1lYW4gdG8gdXNlIGEgZG91YmxlIHF1b3RlIChcIik/JztcbiAgfVxuXG4gIHJldHVybiBcIkNhbm5vdCBwYXJzZSB0aGUgdW5leHBlY3RlZCBjaGFyYWN0ZXIgXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKTtcbn1cbi8qKlxuICogUmVhZHMgYSBjb21tZW50IHRva2VuIGZyb20gdGhlIHNvdXJjZSBmaWxlLlxuICpcbiAqICNbXFx1MDAwOVxcdTAwMjAtXFx1RkZGRl0qXG4gKi9cblxuXG5mdW5jdGlvbiByZWFkQ29tbWVudChzb3VyY2UsIHN0YXJ0LCBsaW5lLCBjb2wsIHByZXYpIHtcbiAgdmFyIGJvZHkgPSBzb3VyY2UuYm9keTtcbiAgdmFyIGNvZGU7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0O1xuXG4gIGRvIHtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICB9IHdoaWxlICghaXNOYU4oY29kZSkgJiYgKCAvLyBTb3VyY2VDaGFyYWN0ZXIgYnV0IG5vdCBMaW5lVGVybWluYXRvclxuICBjb2RlID4gMHgwMDFmIHx8IGNvZGUgPT09IDB4MDAwOSkpO1xuXG4gIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkNPTU1FTlQsIHN0YXJ0LCBwb3NpdGlvbiwgbGluZSwgY29sLCBwcmV2LCBib2R5LnNsaWNlKHN0YXJ0ICsgMSwgcG9zaXRpb24pKTtcbn1cbi8qKlxuICogUmVhZHMgYSBudW1iZXIgdG9rZW4gZnJvbSB0aGUgc291cmNlIGZpbGUsIGVpdGhlciBhIGZsb2F0XG4gKiBvciBhbiBpbnQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgYSBkZWNpbWFsIHBvaW50IGFwcGVhcnMuXG4gKlxuICogSW50OiAgIC0/KDB8WzEtOV1bMC05XSopXG4gKiBGbG9hdDogLT8oMHxbMS05XVswLTldKikoXFwuWzAtOV0rKT8oKEV8ZSkoK3wtKT9bMC05XSspP1xuICovXG5cblxuZnVuY3Rpb24gcmVhZE51bWJlcihzb3VyY2UsIHN0YXJ0LCBmaXJzdENvZGUsIGxpbmUsIGNvbCwgcHJldikge1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgY29kZSA9IGZpcnN0Q29kZTtcbiAgdmFyIHBvc2l0aW9uID0gc3RhcnQ7XG4gIHZhciBpc0Zsb2F0ID0gZmFsc2U7XG5cbiAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgLy8gLVxuICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gNDgpIHtcbiAgICAvLyAwXG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcblxuICAgIGlmIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHtcbiAgICAgIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIFwiSW52YWxpZCBudW1iZXIsIHVuZXhwZWN0ZWQgZGlnaXQgYWZ0ZXIgMDogXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBvc2l0aW9uID0gcmVhZERpZ2l0cyhzb3VyY2UsIHBvc2l0aW9uLCBjb2RlKTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChjb2RlID09PSA0Nikge1xuICAgIC8vIC5cbiAgICBpc0Zsb2F0ID0gdHJ1ZTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICAgIHBvc2l0aW9uID0gcmVhZERpZ2l0cyhzb3VyY2UsIHBvc2l0aW9uLCBjb2RlKTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChjb2RlID09PSA2OSB8fCBjb2RlID09PSAxMDEpIHtcbiAgICAvLyBFIGVcbiAgICBpc0Zsb2F0ID0gdHJ1ZTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuXG4gICAgaWYgKGNvZGUgPT09IDQzIHx8IGNvZGUgPT09IDQ1KSB7XG4gICAgICAvLyArIC1cbiAgICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgcG9zaXRpb24gPSByZWFkRGlnaXRzKHNvdXJjZSwgcG9zaXRpb24sIGNvZGUpO1xuICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICB9IC8vIE51bWJlcnMgY2Fubm90IGJlIGZvbGxvd2VkIGJ5IC4gb3IgTmFtZVN0YXJ0XG5cblxuICBpZiAoY29kZSA9PT0gNDYgfHwgaXNOYW1lU3RhcnQoY29kZSkpIHtcbiAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgbnVtYmVyLCBleHBlY3RlZCBkaWdpdCBidXQgZ290OiBcIi5jb25jYXQocHJpbnRDaGFyQ29kZShjb2RlKSwgXCIuXCIpKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVG9rZW4oaXNGbG9hdCA/IFRva2VuS2luZC5GTE9BVCA6IFRva2VuS2luZC5JTlQsIHN0YXJ0LCBwb3NpdGlvbiwgbGluZSwgY29sLCBwcmV2LCBib2R5LnNsaWNlKHN0YXJ0LCBwb3NpdGlvbikpO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXcgcG9zaXRpb24gaW4gdGhlIHNvdXJjZSBhZnRlciByZWFkaW5nIGRpZ2l0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWREaWdpdHMoc291cmNlLCBzdGFydCwgZmlyc3RDb2RlKSB7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0O1xuICB2YXIgY29kZSA9IGZpcnN0Q29kZTtcblxuICBpZiAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB7XG4gICAgLy8gMCAtIDlcbiAgICBkbyB7XG4gICAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICAgIH0gd2hpbGUgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1Nyk7IC8vIDAgLSA5XG5cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIFwiSW52YWxpZCBudW1iZXIsIGV4cGVjdGVkIGRpZ2l0IGJ1dCBnb3Q6IFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xufVxuLyoqXG4gKiBSZWFkcyBhIHN0cmluZyB0b2tlbiBmcm9tIHRoZSBzb3VyY2UgZmlsZS5cbiAqXG4gKiBcIihbXlwiXFxcXFxcdTAwMEFcXHUwMDBEXXwoXFxcXCh1WzAtOWEtZkEtRl17NH18W1wiXFxcXC9iZm5ydF0pKSkqXCJcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWRTdHJpbmcoc291cmNlLCBzdGFydCwgbGluZSwgY29sLCBwcmV2KSB7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0ICsgMTtcbiAgdmFyIGNodW5rU3RhcnQgPSBwb3NpdGlvbjtcbiAgdmFyIGNvZGUgPSAwO1xuICB2YXIgdmFsdWUgPSAnJztcblxuICB3aGlsZSAocG9zaXRpb24gPCBib2R5Lmxlbmd0aCAmJiAhaXNOYU4oY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbikpICYmIC8vIG5vdCBMaW5lVGVybWluYXRvclxuICBjb2RlICE9PSAweDAwMGEgJiYgY29kZSAhPT0gMHgwMDBkKSB7XG4gICAgLy8gQ2xvc2luZyBRdW90ZSAoXCIpXG4gICAgaWYgKGNvZGUgPT09IDM0KSB7XG4gICAgICB2YWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLlNUUklORywgc3RhcnQsIHBvc2l0aW9uICsgMSwgbGluZSwgY29sLCBwcmV2LCB2YWx1ZSk7XG4gICAgfSAvLyBTb3VyY2VDaGFyYWN0ZXJcblxuXG4gICAgaWYgKGNvZGUgPCAweDAwMjAgJiYgY29kZSAhPT0gMHgwMDA5KSB7XG4gICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIHdpdGhpbiBTdHJpbmc6IFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xuICAgIH1cblxuICAgICsrcG9zaXRpb247XG5cbiAgICBpZiAoY29kZSA9PT0gOTIpIHtcbiAgICAgIC8vIFxcXG4gICAgICB2YWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uIC0gMSk7XG4gICAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcblxuICAgICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgdmFsdWUgKz0gJ1wiJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgIHZhbHVlICs9ICcvJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDkyOlxuICAgICAgICAgIHZhbHVlICs9ICdcXFxcJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgIHZhbHVlICs9ICdcXGInO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgIHZhbHVlICs9ICdcXGYnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTEwOlxuICAgICAgICAgIHZhbHVlICs9ICdcXG4nO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTE0OlxuICAgICAgICAgIHZhbHVlICs9ICdcXHInO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTE2OlxuICAgICAgICAgIHZhbHVlICs9ICdcXHQnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTE3OlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIHVYWFhYXG4gICAgICAgICAgICB2YXIgY2hhckNvZGUgPSB1bmlDaGFyQ29kZShib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSwgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMiksIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDMpLCBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyA0KSk7XG5cbiAgICAgICAgICAgIGlmIChjaGFyQ29kZSA8IDApIHtcbiAgICAgICAgICAgICAgdmFyIGludmFsaWRTZXF1ZW5jZSA9IGJvZHkuc2xpY2UocG9zaXRpb24gKyAxLCBwb3NpdGlvbiArIDUpO1xuICAgICAgICAgICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIGVzY2FwZSBzZXF1ZW5jZTogXFxcXHVcIi5jb25jYXQoaW52YWxpZFNlcXVlbmNlLCBcIi5cIikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKTtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9IDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIGVzY2FwZSBzZXF1ZW5jZTogXFxcXFwiLmNvbmNhdChTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xuICAgICAgfVxuXG4gICAgICArK3Bvc2l0aW9uO1xuICAgICAgY2h1bmtTdGFydCA9IHBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sICdVbnRlcm1pbmF0ZWQgc3RyaW5nLicpO1xufVxuLyoqXG4gKiBSZWFkcyBhIGJsb2NrIHN0cmluZyB0b2tlbiBmcm9tIHRoZSBzb3VyY2UgZmlsZS5cbiAqXG4gKiBcIlwiXCIoXCI/XCI/KFxcXFxcIlwiXCJ8XFxcXCg/IT1cIlwiXCIpfFteXCJcXFxcXSkpKlwiXCJcIlxuICovXG5cblxuZnVuY3Rpb24gcmVhZEJsb2NrU3RyaW5nKHNvdXJjZSwgc3RhcnQsIGxpbmUsIGNvbCwgcHJldiwgbGV4ZXIpIHtcbiAgdmFyIGJvZHkgPSBzb3VyY2UuYm9keTtcbiAgdmFyIHBvc2l0aW9uID0gc3RhcnQgKyAzO1xuICB2YXIgY2h1bmtTdGFydCA9IHBvc2l0aW9uO1xuICB2YXIgY29kZSA9IDA7XG4gIHZhciByYXdWYWx1ZSA9ICcnO1xuXG4gIHdoaWxlIChwb3NpdGlvbiA8IGJvZHkubGVuZ3RoICYmICFpc05hTihjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKSkpIHtcbiAgICAvLyBDbG9zaW5nIFRyaXBsZS1RdW90ZSAoXCJcIlwiKVxuICAgIGlmIChjb2RlID09PSAzNCAmJiBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSA9PT0gMzQgJiYgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMikgPT09IDM0KSB7XG4gICAgICByYXdWYWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkJMT0NLX1NUUklORywgc3RhcnQsIHBvc2l0aW9uICsgMywgbGluZSwgY29sLCBwcmV2LCBkZWRlbnRCbG9ja1N0cmluZ1ZhbHVlKHJhd1ZhbHVlKSk7XG4gICAgfSAvLyBTb3VyY2VDaGFyYWN0ZXJcblxuXG4gICAgaWYgKGNvZGUgPCAweDAwMjAgJiYgY29kZSAhPT0gMHgwMDA5ICYmIGNvZGUgIT09IDB4MDAwYSAmJiBjb2RlICE9PSAweDAwMGQpIHtcbiAgICAgIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIFwiSW52YWxpZCBjaGFyYWN0ZXIgd2l0aGluIFN0cmluZzogXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDEwKSB7XG4gICAgICAvLyBuZXcgbGluZVxuICAgICAgKytwb3NpdGlvbjtcbiAgICAgICsrbGV4ZXIubGluZTtcbiAgICAgIGxleGVyLmxpbmVTdGFydCA9IHBvc2l0aW9uO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMTMpIHtcbiAgICAgIC8vIGNhcnJpYWdlIHJldHVyblxuICAgICAgaWYgKGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpID09PSAxMCkge1xuICAgICAgICBwb3NpdGlvbiArPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKytwb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgKytsZXhlci5saW5lO1xuICAgICAgbGV4ZXIubGluZVN0YXJ0ID0gcG9zaXRpb247XG4gICAgfSBlbHNlIGlmICggLy8gRXNjYXBlIFRyaXBsZS1RdW90ZSAoXFxcIlwiXCIpXG4gICAgY29kZSA9PT0gOTIgJiYgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkgPT09IDM0ICYmIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDIpID09PSAzNCAmJiBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAzKSA9PT0gMzQpIHtcbiAgICAgIHJhd1ZhbHVlICs9IGJvZHkuc2xpY2UoY2h1bmtTdGFydCwgcG9zaXRpb24pICsgJ1wiXCJcIic7XG4gICAgICBwb3NpdGlvbiArPSA0O1xuICAgICAgY2h1bmtTdGFydCA9IHBvc2l0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICArK3Bvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sICdVbnRlcm1pbmF0ZWQgc3RyaW5nLicpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBmb3VyIGhleGFkZWNpbWFsIGNoYXJzIHRvIHRoZSBpbnRlZ2VyIHRoYXQgdGhlXG4gKiBzdHJpbmcgcmVwcmVzZW50cy4gRm9yIGV4YW1wbGUsIHVuaUNoYXJDb2RlKCcwJywnMCcsJzAnLCdmJylcbiAqIHdpbGwgcmV0dXJuIDE1LCBhbmQgdW5pQ2hhckNvZGUoJzAnLCcwJywnZicsJ2YnKSByZXR1cm5zIDI1NS5cbiAqXG4gKiBSZXR1cm5zIGEgbmVnYXRpdmUgbnVtYmVyIG9uIGVycm9yLCBpZiBhIGNoYXIgd2FzIGludmFsaWQuXG4gKlxuICogVGhpcyBpcyBpbXBsZW1lbnRlZCBieSBub3RpbmcgdGhhdCBjaGFyMmhleCgpIHJldHVybnMgLTEgb24gZXJyb3IsXG4gKiB3aGljaCBtZWFucyB0aGUgcmVzdWx0IG9mIE9SaW5nIHRoZSBjaGFyMmhleCgpIHdpbGwgYWxzbyBiZSBuZWdhdGl2ZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHVuaUNoYXJDb2RlKGEsIGIsIGMsIGQpIHtcbiAgcmV0dXJuIGNoYXIyaGV4KGEpIDw8IDEyIHwgY2hhcjJoZXgoYikgPDwgOCB8IGNoYXIyaGV4KGMpIDw8IDQgfCBjaGFyMmhleChkKTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBoZXggY2hhcmFjdGVyIHRvIGl0cyBpbnRlZ2VyIHZhbHVlLlxuICogJzAnIGJlY29tZXMgMCwgJzknIGJlY29tZXMgOVxuICogJ0EnIGJlY29tZXMgMTAsICdGJyBiZWNvbWVzIDE1XG4gKiAnYScgYmVjb21lcyAxMCwgJ2YnIGJlY29tZXMgMTVcbiAqXG4gKiBSZXR1cm5zIC0xIG9uIGVycm9yLlxuICovXG5cblxuZnVuY3Rpb24gY2hhcjJoZXgoYSkge1xuICByZXR1cm4gYSA+PSA0OCAmJiBhIDw9IDU3ID8gYSAtIDQ4IC8vIDAtOVxuICA6IGEgPj0gNjUgJiYgYSA8PSA3MCA/IGEgLSA1NSAvLyBBLUZcbiAgOiBhID49IDk3ICYmIGEgPD0gMTAyID8gYSAtIDg3IC8vIGEtZlxuICA6IC0xO1xufVxuLyoqXG4gKiBSZWFkcyBhbiBhbHBoYW51bWVyaWMgKyB1bmRlcnNjb3JlIG5hbWUgZnJvbSB0aGUgc291cmNlLlxuICpcbiAqIFtfQS1aYS16XVtfMC05QS1aYS16XSpcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWROYW1lKHNvdXJjZSwgc3RhcnQsIGxpbmUsIGNvbCwgcHJldikge1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgYm9keUxlbmd0aCA9IGJvZHkubGVuZ3RoO1xuICB2YXIgcG9zaXRpb24gPSBzdGFydCArIDE7XG4gIHZhciBjb2RlID0gMDtcblxuICB3aGlsZSAocG9zaXRpb24gIT09IGJvZHlMZW5ndGggJiYgIWlzTmFOKGNvZGUgPSBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24pKSAmJiAoY29kZSA9PT0gOTUgfHwgLy8gX1xuICBjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcgfHwgLy8gMC05XG4gIGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCB8fCAvLyBBLVpcbiAgY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgLy8gYS16XG4gICkge1xuICAgICsrcG9zaXRpb247XG4gIH1cblxuICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5OQU1FLCBzdGFydCwgcG9zaXRpb24sIGxpbmUsIGNvbCwgcHJldiwgYm9keS5zbGljZShzdGFydCwgcG9zaXRpb24pKTtcbn0gLy8gXyBBLVogYS16XG5cblxuZnVuY3Rpb24gaXNOYW1lU3RhcnQoY29kZSkge1xuICByZXR1cm4gY29kZSA9PT0gOTUgfHwgY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwIHx8IGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjI7XG59XG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBsb2NhdGlvbiBpbiBhIFNvdXJjZS5cbiAqL1xuXG4vKipcbiAqIFRha2VzIGEgU291cmNlIGFuZCBhIFVURi04IGNoYXJhY3RlciBvZmZzZXQsIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nXG4gKiBsaW5lIGFuZCBjb2x1bW4gYXMgYSBTb3VyY2VMb2NhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uKHNvdXJjZSwgcG9zaXRpb24pIHtcbiAgdmFyIGxpbmVSZWdleHAgPSAvXFxyXFxufFtcXG5cXHJdL2c7XG4gIHZhciBsaW5lID0gMTtcbiAgdmFyIGNvbHVtbiA9IHBvc2l0aW9uICsgMTtcbiAgdmFyIG1hdGNoO1xuXG4gIHdoaWxlICgobWF0Y2ggPSBsaW5lUmVnZXhwLmV4ZWMoc291cmNlLmJvZHkpKSAmJiBtYXRjaC5pbmRleCA8IHBvc2l0aW9uKSB7XG4gICAgbGluZSArPSAxO1xuICAgIGNvbHVtbiA9IHBvc2l0aW9uICsgMSAtIChtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpbmU6IGxpbmUsXG4gICAgY29sdW1uOiBjb2x1bW5cbiAgfTtcbn1cbiIsImltcG9ydCB7IHN5bnRheEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL3N5bnRheEVycm9yLm1qc1wiO1xuaW1wb3J0IHsgS2luZCB9IGZyb20gXCIuL2tpbmRzLm1qc1wiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiLi9hc3QubWpzXCI7XG5pbXBvcnQgeyBUb2tlbktpbmQgfSBmcm9tIFwiLi90b2tlbktpbmQubWpzXCI7XG5pbXBvcnQgeyBTb3VyY2UsIGlzU291cmNlIH0gZnJvbSBcIi4vc291cmNlLm1qc1wiO1xuaW1wb3J0IHsgRGlyZWN0aXZlTG9jYXRpb24gfSBmcm9tIFwiLi9kaXJlY3RpdmVMb2NhdGlvbi5tanNcIjtcbmltcG9ydCB7IExleGVyLCBpc1B1bmN0dWF0b3JUb2tlbktpbmQgfSBmcm9tIFwiLi9sZXhlci5tanNcIjtcbi8qKlxuICogQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIGNvbnRyb2wgcGFyc2VyIGJlaGF2aW9yXG4gKi9cblxuLyoqXG4gKiBHaXZlbiBhIEdyYXBoUUwgc291cmNlLCBwYXJzZXMgaXQgaW50byBhIERvY3VtZW50LlxuICogVGhyb3dzIEdyYXBoUUxFcnJvciBpZiBhIHN5bnRheCBlcnJvciBpcyBlbmNvdW50ZXJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihzb3VyY2UsIG9wdGlvbnMpO1xuICByZXR1cm4gcGFyc2VyLnBhcnNlRG9jdW1lbnQoKTtcbn1cbi8qKlxuICogR2l2ZW4gYSBzdHJpbmcgY29udGFpbmluZyBhIEdyYXBoUUwgdmFsdWUgKGV4LiBgWzQyXWApLCBwYXJzZSB0aGUgQVNUIGZvclxuICogdGhhdCB2YWx1ZS5cbiAqIFRocm93cyBHcmFwaFFMRXJyb3IgaWYgYSBzeW50YXggZXJyb3IgaXMgZW5jb3VudGVyZWQuXG4gKlxuICogVGhpcyBpcyB1c2VmdWwgd2l0aGluIHRvb2xzIHRoYXQgb3BlcmF0ZSB1cG9uIEdyYXBoUUwgVmFsdWVzIGRpcmVjdGx5IGFuZFxuICogaW4gaXNvbGF0aW9uIG9mIGNvbXBsZXRlIEdyYXBoUUwgZG9jdW1lbnRzLlxuICpcbiAqIENvbnNpZGVyIHByb3ZpZGluZyB0aGUgcmVzdWx0cyB0byB0aGUgdXRpbGl0eSBmdW5jdGlvbjogdmFsdWVGcm9tQVNUKCkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVmFsdWUoc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKHNvdXJjZSwgb3B0aW9ucyk7XG4gIHBhcnNlci5leHBlY3RUb2tlbihUb2tlbktpbmQuU09GKTtcbiAgdmFyIHZhbHVlID0gcGFyc2VyLnBhcnNlVmFsdWVMaXRlcmFsKGZhbHNlKTtcbiAgcGFyc2VyLmV4cGVjdFRva2VuKFRva2VuS2luZC5FT0YpO1xuICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIEdpdmVuIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBHcmFwaFFMIFR5cGUgKGV4LiBgW0ludCFdYCksIHBhcnNlIHRoZSBBU1QgZm9yXG4gKiB0aGF0IHR5cGUuXG4gKiBUaHJvd3MgR3JhcGhRTEVycm9yIGlmIGEgc3ludGF4IGVycm9yIGlzIGVuY291bnRlcmVkLlxuICpcbiAqIFRoaXMgaXMgdXNlZnVsIHdpdGhpbiB0b29scyB0aGF0IG9wZXJhdGUgdXBvbiBHcmFwaFFMIFR5cGVzIGRpcmVjdGx5IGFuZFxuICogaW4gaXNvbGF0aW9uIG9mIGNvbXBsZXRlIEdyYXBoUUwgZG9jdW1lbnRzLlxuICpcbiAqIENvbnNpZGVyIHByb3ZpZGluZyB0aGUgcmVzdWx0cyB0byB0aGUgdXRpbGl0eSBmdW5jdGlvbjogdHlwZUZyb21BU1QoKS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUeXBlKHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihzb3VyY2UsIG9wdGlvbnMpO1xuICBwYXJzZXIuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLlNPRik7XG4gIHZhciB0eXBlID0gcGFyc2VyLnBhcnNlVHlwZVJlZmVyZW5jZSgpO1xuICBwYXJzZXIuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkVPRik7XG4gIHJldHVybiB0eXBlO1xufVxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGV4cG9ydGVkIG9ubHkgdG8gYXNzaXN0IHBlb3BsZSBpbiBpbXBsZW1lbnRpbmcgdGhlaXIgb3duIHBhcnNlcnNcbiAqIHdpdGhvdXQgZHVwbGljYXRpbmcgdG9vIG11Y2ggY29kZSBhbmQgc2hvdWxkIGJlIHVzZWQgb25seSBhcyBsYXN0IHJlc29ydCBmb3IgY2FzZXNcbiAqIHN1Y2ggYXMgZXhwZXJpbWVudGFsIHN5bnRheCBvciBpZiBjZXJ0YWluIGZlYXR1cmVzIGNvdWxkIG5vdCBiZSBjb250cmlidXRlZCB1cHN0cmVhbS5cbiAqXG4gKiBJdCBpcyBzdGlsbCBwYXJ0IG9mIHRoZSBpbnRlcm5hbCBBUEkgYW5kIGlzIHZlcnNpb25lZCwgc28gYW55IGNoYW5nZXMgdG8gaXQgYXJlIG5ldmVyXG4gKiBjb25zaWRlcmVkIGJyZWFraW5nIGNoYW5nZXMuIElmIHlvdSBzdGlsbCBuZWVkIHRvIHN1cHBvcnQgbXVsdGlwbGUgdmVyc2lvbnMgb2YgdGhlXG4gKiBsaWJyYXJ5LCBwbGVhc2UgdXNlIHRoZSBgdmVyc2lvbkluZm9gIHZhcmlhYmxlIGZvciB2ZXJzaW9uIGRldGVjdGlvbi5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5leHBvcnQgdmFyIFBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBhcnNlcihzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgc291cmNlT2JqID0gaXNTb3VyY2Uoc291cmNlKSA/IHNvdXJjZSA6IG5ldyBTb3VyY2Uoc291cmNlKTtcbiAgICB0aGlzLl9sZXhlciA9IG5ldyBMZXhlcihzb3VyY2VPYmopO1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIG5hbWUgbGV4IHRva2VuIGludG8gYSBuYW1lIHBhcnNlIG5vZGUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFBhcnNlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnBhcnNlTmFtZSA9IGZ1bmN0aW9uIHBhcnNlTmFtZSgpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5OQU1FKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5OQU1FLFxuICAgICAgdmFsdWU6IHRva2VuLnZhbHVlLFxuICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIERvY3VtZW50IHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIERvY3VtZW50IDogRGVmaW5pdGlvbitcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEb2N1bWVudCA9IGZ1bmN0aW9uIHBhcnNlRG9jdW1lbnQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRE9DVU1FTlQsXG4gICAgICBkZWZpbml0aW9uczogdGhpcy5tYW55KFRva2VuS2luZC5TT0YsIHRoaXMucGFyc2VEZWZpbml0aW9uLCBUb2tlbktpbmQuRU9GKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGVmaW5pdGlvbiA6XG4gICAqICAgLSBFeGVjdXRhYmxlRGVmaW5pdGlvblxuICAgKiAgIC0gVHlwZVN5c3RlbURlZmluaXRpb25cbiAgICogICAtIFR5cGVTeXN0ZW1FeHRlbnNpb25cbiAgICpcbiAgICogRXhlY3V0YWJsZURlZmluaXRpb24gOlxuICAgKiAgIC0gT3BlcmF0aW9uRGVmaW5pdGlvblxuICAgKiAgIC0gRnJhZ21lbnREZWZpbml0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRGVmaW5pdGlvbigpIHtcbiAgICBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5OQU1FKSkge1xuICAgICAgc3dpdGNoICh0aGlzLl9sZXhlci50b2tlbi52YWx1ZSkge1xuICAgICAgICBjYXNlICdxdWVyeSc6XG4gICAgICAgIGNhc2UgJ211dGF0aW9uJzpcbiAgICAgICAgY2FzZSAnc3Vic2NyaXB0aW9uJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU9wZXJhdGlvbkRlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdmcmFnbWVudCc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VGcmFnbWVudERlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdzY2hlbWEnOlxuICAgICAgICBjYXNlICdzY2FsYXInOlxuICAgICAgICBjYXNlICd0eXBlJzpcbiAgICAgICAgY2FzZSAnaW50ZXJmYWNlJzpcbiAgICAgICAgY2FzZSAndW5pb24nOlxuICAgICAgICBjYXNlICdlbnVtJzpcbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICBjYXNlICdkaXJlY3RpdmUnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVHlwZVN5c3RlbURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdleHRlbmQnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVHlwZVN5c3RlbUV4dGVuc2lvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYXRpb25EZWZpbml0aW9uKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBlZWtEZXNjcmlwdGlvbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVR5cGVTeXN0ZW1EZWZpbml0aW9uKCk7XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgT3BlcmF0aW9ucyBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBPcGVyYXRpb25EZWZpbml0aW9uIDpcbiAgICogIC0gU2VsZWN0aW9uU2V0XG4gICAqICAtIE9wZXJhdGlvblR5cGUgTmFtZT8gVmFyaWFibGVEZWZpbml0aW9ucz8gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT3BlcmF0aW9uRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlT3BlcmF0aW9uRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0aGlzLnBlZWsoVG9rZW5LaW5kLkJSQUNFX0wpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLk9QRVJBVElPTl9ERUZJTklUSU9OLFxuICAgICAgICBvcGVyYXRpb246ICdxdWVyeScsXG4gICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFyaWFibGVEZWZpbml0aW9uczogW10sXG4gICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSxcbiAgICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIG9wZXJhdGlvbiA9IHRoaXMucGFyc2VPcGVyYXRpb25UeXBlKCk7XG4gICAgdmFyIG5hbWU7XG5cbiAgICBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5OQU1FKSkge1xuICAgICAgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT1BFUkFUSU9OX0RFRklOSVRJT04sXG4gICAgICBvcGVyYXRpb246IG9wZXJhdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YXJpYWJsZURlZmluaXRpb25zOiB0aGlzLnBhcnNlVmFyaWFibGVEZWZpbml0aW9ucygpLFxuICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXMoZmFsc2UpLFxuICAgICAgc2VsZWN0aW9uU2V0OiB0aGlzLnBhcnNlU2VsZWN0aW9uU2V0KCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9wZXJhdGlvblR5cGUgOiBvbmUgb2YgcXVlcnkgbXV0YXRpb24gc3Vic2NyaXB0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT3BlcmF0aW9uVHlwZSA9IGZ1bmN0aW9uIHBhcnNlT3BlcmF0aW9uVHlwZSgpIHtcbiAgICB2YXIgb3BlcmF0aW9uVG9rZW4gPSB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5OQU1FKTtcblxuICAgIHN3aXRjaCAob3BlcmF0aW9uVG9rZW4udmFsdWUpIHtcbiAgICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgICAgcmV0dXJuICdxdWVyeSc7XG5cbiAgICAgIGNhc2UgJ211dGF0aW9uJzpcbiAgICAgICAgcmV0dXJuICdtdXRhdGlvbic7XG5cbiAgICAgIGNhc2UgJ3N1YnNjcmlwdGlvbic6XG4gICAgICAgIHJldHVybiAnc3Vic2NyaXB0aW9uJztcbiAgICB9XG5cbiAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQob3BlcmF0aW9uVG9rZW4pO1xuICB9XG4gIC8qKlxuICAgKiBWYXJpYWJsZURlZmluaXRpb25zIDogKCBWYXJpYWJsZURlZmluaXRpb24rIClcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VWYXJpYWJsZURlZmluaXRpb25zID0gZnVuY3Rpb24gcGFyc2VWYXJpYWJsZURlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsTWFueShUb2tlbktpbmQuUEFSRU5fTCwgdGhpcy5wYXJzZVZhcmlhYmxlRGVmaW5pdGlvbiwgVG9rZW5LaW5kLlBBUkVOX1IpO1xuICB9XG4gIC8qKlxuICAgKiBWYXJpYWJsZURlZmluaXRpb24gOiBWYXJpYWJsZSA6IFR5cGUgRGVmYXVsdFZhbHVlPyBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VWYXJpYWJsZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZVZhcmlhYmxlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5WQVJJQUJMRV9ERUZJTklUSU9OLFxuICAgICAgdmFyaWFibGU6IHRoaXMucGFyc2VWYXJpYWJsZSgpLFxuICAgICAgdHlwZTogKHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKSwgdGhpcy5wYXJzZVR5cGVSZWZlcmVuY2UoKSksXG4gICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihUb2tlbktpbmQuRVFVQUxTKSA/IHRoaXMucGFyc2VWYWx1ZUxpdGVyYWwodHJ1ZSkgOiB1bmRlZmluZWQsXG4gICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVmFyaWFibGUgOiAkIE5hbWVcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VWYXJpYWJsZSA9IGZ1bmN0aW9uIHBhcnNlVmFyaWFibGUoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuRE9MTEFSKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5WQVJJQUJMRSxcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VOYW1lKCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFNlbGVjdGlvblNldCA6IHsgU2VsZWN0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlU2VsZWN0aW9uU2V0ID0gZnVuY3Rpb24gcGFyc2VTZWxlY3Rpb25TZXQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuU0VMRUNUSU9OX1NFVCxcbiAgICAgIHNlbGVjdGlvbnM6IHRoaXMubWFueShUb2tlbktpbmQuQlJBQ0VfTCwgdGhpcy5wYXJzZVNlbGVjdGlvbiwgVG9rZW5LaW5kLkJSQUNFX1IpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBTZWxlY3Rpb24gOlxuICAgKiAgIC0gRmllbGRcbiAgICogICAtIEZyYWdtZW50U3ByZWFkXG4gICAqICAgLSBJbmxpbmVGcmFnbWVudFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIHBhcnNlU2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBlZWsoVG9rZW5LaW5kLlNQUkVBRCkgPyB0aGlzLnBhcnNlRnJhZ21lbnQoKSA6IHRoaXMucGFyc2VGaWVsZCgpO1xuICB9XG4gIC8qKlxuICAgKiBGaWVsZCA6IEFsaWFzPyBOYW1lIEFyZ3VtZW50cz8gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0P1xuICAgKlxuICAgKiBBbGlhcyA6IE5hbWUgOlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZpZWxkID0gZnVuY3Rpb24gcGFyc2VGaWVsZCgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgbmFtZU9yQWxpYXMgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBhbGlhcztcbiAgICB2YXIgbmFtZTtcblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkNPTE9OKSkge1xuICAgICAgYWxpYXMgPSBuYW1lT3JBbGlhcztcbiAgICAgIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZU9yQWxpYXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRklFTEQsXG4gICAgICBhbGlhczogYWxpYXMsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgYXJndW1lbnRzOiB0aGlzLnBhcnNlQXJndW1lbnRzKGZhbHNlKSxcbiAgICAgIGRpcmVjdGl2ZXM6IHRoaXMucGFyc2VEaXJlY3RpdmVzKGZhbHNlKSxcbiAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSA/IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogQXJndW1lbnRzW0NvbnN0XSA6ICggQXJndW1lbnRbP0NvbnN0XSsgKVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUFyZ3VtZW50cyA9IGZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKGlzQ29uc3QpIHtcbiAgICB2YXIgaXRlbSA9IGlzQ29uc3QgPyB0aGlzLnBhcnNlQ29uc3RBcmd1bWVudCA6IHRoaXMucGFyc2VBcmd1bWVudDtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLlBBUkVOX0wsIGl0ZW0sIFRva2VuS2luZC5QQVJFTl9SKTtcbiAgfVxuICAvKipcbiAgICogQXJndW1lbnRbQ29uc3RdIDogTmFtZSA6IFZhbHVlWz9Db25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VBcmd1bWVudCA9IGZ1bmN0aW9uIHBhcnNlQXJndW1lbnQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5BUkdVTUVOVCxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YWx1ZTogdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbChmYWxzZSksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnBhcnNlQ29uc3RBcmd1bWVudCA9IGZ1bmN0aW9uIHBhcnNlQ29uc3RBcmd1bWVudCgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5BUkdVTUVOVCxcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VOYW1lKCksXG4gICAgICB2YWx1ZTogKHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKSwgdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbCh0cnVlKSksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgRnJhZ21lbnRzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIENvcnJlc3BvbmRzIHRvIGJvdGggRnJhZ21lbnRTcHJlYWQgYW5kIElubGluZUZyYWdtZW50IGluIHRoZSBzcGVjLlxuICAgKlxuICAgKiBGcmFnbWVudFNwcmVhZCA6IC4uLiBGcmFnbWVudE5hbWUgRGlyZWN0aXZlcz9cbiAgICpcbiAgICogSW5saW5lRnJhZ21lbnQgOiAuLi4gVHlwZUNvbmRpdGlvbj8gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRnJhZ21lbnQgPSBmdW5jdGlvbiBwYXJzZUZyYWdtZW50KCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLlNQUkVBRCk7XG4gICAgdmFyIGhhc1R5cGVDb25kaXRpb24gPSB0aGlzLmV4cGVjdE9wdGlvbmFsS2V5d29yZCgnb24nKTtcblxuICAgIGlmICghaGFzVHlwZUNvbmRpdGlvbiAmJiB0aGlzLnBlZWsoVG9rZW5LaW5kLk5BTUUpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLkZSQUdNRU5UX1NQUkVBRCxcbiAgICAgICAgbmFtZTogdGhpcy5wYXJzZUZyYWdtZW50TmFtZSgpLFxuICAgICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOTElORV9GUkFHTUVOVCxcbiAgICAgIHR5cGVDb25kaXRpb246IGhhc1R5cGVDb25kaXRpb24gPyB0aGlzLnBhcnNlTmFtZWRUeXBlKCkgOiB1bmRlZmluZWQsXG4gICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRnJhZ21lbnREZWZpbml0aW9uIDpcbiAgICogICAtIGZyYWdtZW50IEZyYWdtZW50TmFtZSBvbiBUeXBlQ29uZGl0aW9uIERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldFxuICAgKlxuICAgKiBUeXBlQ29uZGl0aW9uIDogTmFtZWRUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRnJhZ21lbnREZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VGcmFnbWVudERlZmluaXRpb24oKSB7XG4gICAgdmFyIF90aGlzJF9vcHRpb25zO1xuXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdmcmFnbWVudCcpOyAvLyBFeHBlcmltZW50YWwgc3VwcG9ydCBmb3IgZGVmaW5pbmcgdmFyaWFibGVzIHdpdGhpbiBmcmFnbWVudHMgY2hhbmdlc1xuICAgIC8vIHRoZSBncmFtbWFyIG9mIEZyYWdtZW50RGVmaW5pdGlvbjpcbiAgICAvLyAgIC0gZnJhZ21lbnQgRnJhZ21lbnROYW1lIFZhcmlhYmxlRGVmaW5pdGlvbnM/IG9uIFR5cGVDb25kaXRpb24gRGlyZWN0aXZlcz8gU2VsZWN0aW9uU2V0XG5cbiAgICBpZiAoKChfdGhpcyRfb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMpID09PSBudWxsIHx8IF90aGlzJF9vcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfb3B0aW9ucy5leHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQ6IEtpbmQuRlJBR01FTlRfREVGSU5JVElPTixcbiAgICAgICAgbmFtZTogdGhpcy5wYXJzZUZyYWdtZW50TmFtZSgpLFxuICAgICAgICB2YXJpYWJsZURlZmluaXRpb25zOiB0aGlzLnBhcnNlVmFyaWFibGVEZWZpbml0aW9ucygpLFxuICAgICAgICB0eXBlQ29uZGl0aW9uOiAodGhpcy5leHBlY3RLZXl3b3JkKCdvbicpLCB0aGlzLnBhcnNlTmFtZWRUeXBlKCkpLFxuICAgICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wYXJzZVNlbGVjdGlvblNldCgpLFxuICAgICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5GUkFHTUVOVF9ERUZJTklUSU9OLFxuICAgICAgbmFtZTogdGhpcy5wYXJzZUZyYWdtZW50TmFtZSgpLFxuICAgICAgdHlwZUNvbmRpdGlvbjogKHRoaXMuZXhwZWN0S2V5d29yZCgnb24nKSwgdGhpcy5wYXJzZU5hbWVkVHlwZSgpKSxcbiAgICAgIGRpcmVjdGl2ZXM6IHRoaXMucGFyc2VEaXJlY3RpdmVzKGZhbHNlKSxcbiAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wYXJzZVNlbGVjdGlvblNldCgpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBGcmFnbWVudE5hbWUgOiBOYW1lIGJ1dCBub3QgYG9uYFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZyYWdtZW50TmFtZSA9IGZ1bmN0aW9uIHBhcnNlRnJhZ21lbnROYW1lKCkge1xuICAgIGlmICh0aGlzLl9sZXhlci50b2tlbi52YWx1ZSA9PT0gJ29uJykge1xuICAgICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucGFyc2VOYW1lKCk7XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgVmFsdWVzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIFZhbHVlW0NvbnN0XSA6XG4gICAqICAgLSBbfkNvbnN0XSBWYXJpYWJsZVxuICAgKiAgIC0gSW50VmFsdWVcbiAgICogICAtIEZsb2F0VmFsdWVcbiAgICogICAtIFN0cmluZ1ZhbHVlXG4gICAqICAgLSBCb29sZWFuVmFsdWVcbiAgICogICAtIE51bGxWYWx1ZVxuICAgKiAgIC0gRW51bVZhbHVlXG4gICAqICAgLSBMaXN0VmFsdWVbP0NvbnN0XVxuICAgKiAgIC0gT2JqZWN0VmFsdWVbP0NvbnN0XVxuICAgKlxuICAgKiBCb29sZWFuVmFsdWUgOiBvbmUgb2YgYHRydWVgIGBmYWxzZWBcbiAgICpcbiAgICogTnVsbFZhbHVlIDogYG51bGxgXG4gICAqXG4gICAqIEVudW1WYWx1ZSA6IE5hbWUgYnV0IG5vdCBgdHJ1ZWAsIGBmYWxzZWAgb3IgYG51bGxgXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVmFsdWVMaXRlcmFsID0gZnVuY3Rpb24gcGFyc2VWYWx1ZUxpdGVyYWwoaXNDb25zdCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgc3dpdGNoICh0b2tlbi5raW5kKSB7XG4gICAgICBjYXNlIFRva2VuS2luZC5CUkFDS0VUX0w6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlTGlzdChpc0NvbnN0KTtcblxuICAgICAgY2FzZSBUb2tlbktpbmQuQlJBQ0VfTDpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPYmplY3QoaXNDb25zdCk7XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLklOVDpcbiAgICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogS2luZC5JTlQsXG4gICAgICAgICAgdmFsdWU6IHRva2VuLnZhbHVlLFxuICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLkZMT0FUOlxuICAgICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBraW5kOiBLaW5kLkZMT0FULFxuICAgICAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgICAgICBsb2M6IHRoaXMubG9jKHRva2VuKVxuICAgICAgICB9O1xuXG4gICAgICBjYXNlIFRva2VuS2luZC5TVFJJTkc6XG4gICAgICBjYXNlIFRva2VuS2luZC5CTE9DS19TVFJJTkc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlU3RyaW5nTGl0ZXJhbCgpO1xuXG4gICAgICBjYXNlIFRva2VuS2luZC5OQU1FOlxuICAgICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgICAgc3dpdGNoICh0b2tlbi52YWx1ZSkge1xuICAgICAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2luZDogS2luZC5CT09MRUFOLFxuICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBjYXNlICdmYWxzZSc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBraW5kOiBLaW5kLkJPT0xFQU4sXG4gICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBjYXNlICdudWxsJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtpbmQ6IEtpbmQuTlVMTCxcbiAgICAgICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2luZDogS2luZC5FTlVNLFxuICAgICAgICAgICAgICB2YWx1ZTogdG9rZW4udmFsdWUsXG4gICAgICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLkRPTExBUjpcbiAgICAgICAgaWYgKCFpc0NvbnN0KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VWYXJpYWJsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gIH07XG5cbiAgX3Byb3RvLnBhcnNlU3RyaW5nTGl0ZXJhbCA9IGZ1bmN0aW9uIHBhcnNlU3RyaW5nTGl0ZXJhbCgpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlNUUklORyxcbiAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgIGJsb2NrOiB0b2tlbi5raW5kID09PSBUb2tlbktpbmQuQkxPQ0tfU1RSSU5HLFxuICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBMaXN0VmFsdWVbQ29uc3RdIDpcbiAgICogICAtIFsgXVxuICAgKiAgIC0gWyBWYWx1ZVs/Q29uc3RdKyBdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlTGlzdCA9IGZ1bmN0aW9uIHBhcnNlTGlzdChpc0NvbnN0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgdmFyIGl0ZW0gPSBmdW5jdGlvbiBpdGVtKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnBhcnNlVmFsdWVMaXRlcmFsKGlzQ29uc3QpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5MSVNULFxuICAgICAgdmFsdWVzOiB0aGlzLmFueShUb2tlbktpbmQuQlJBQ0tFVF9MLCBpdGVtLCBUb2tlbktpbmQuQlJBQ0tFVF9SKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0VmFsdWVbQ29uc3RdIDpcbiAgICogICAtIHsgfVxuICAgKiAgIC0geyBPYmplY3RGaWVsZFs/Q29uc3RdKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gcGFyc2VPYmplY3QoaXNDb25zdCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICB2YXIgaXRlbSA9IGZ1bmN0aW9uIGl0ZW0oKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLnBhcnNlT2JqZWN0RmllbGQoaXNDb25zdCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk9CSkVDVCxcbiAgICAgIGZpZWxkczogdGhpcy5hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIGl0ZW0sIFRva2VuS2luZC5CUkFDRV9SKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0RmllbGRbQ29uc3RdIDogTmFtZSA6IFZhbHVlWz9Db25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPYmplY3RGaWVsZCA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0RmllbGQoaXNDb25zdCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT0JKRUNUX0ZJRUxELFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHZhbHVlOiB0aGlzLnBhcnNlVmFsdWVMaXRlcmFsKGlzQ29uc3QpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIERpcmVjdGl2ZXMgc2VjdGlvbi5cblxuICAvKipcbiAgICogRGlyZWN0aXZlc1tDb25zdF0gOiBEaXJlY3RpdmVbP0NvbnN0XStcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVzID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVzKGlzQ29uc3QpIHtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IFtdO1xuXG4gICAgd2hpbGUgKHRoaXMucGVlayhUb2tlbktpbmQuQVQpKSB7XG4gICAgICBkaXJlY3RpdmVzLnB1c2godGhpcy5wYXJzZURpcmVjdGl2ZShpc0NvbnN0KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG4gIH1cbiAgLyoqXG4gICAqIERpcmVjdGl2ZVtDb25zdF0gOiBAIE5hbWUgQXJndW1lbnRzWz9Db25zdF0/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGlyZWN0aXZlID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmUoaXNDb25zdCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkFUKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5ESVJFQ1RJVkUsXG4gICAgICBuYW1lOiB0aGlzLnBhcnNlTmFtZSgpLFxuICAgICAgYXJndW1lbnRzOiB0aGlzLnBhcnNlQXJndW1lbnRzKGlzQ29uc3QpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIFR5cGVzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIFR5cGUgOlxuICAgKiAgIC0gTmFtZWRUeXBlXG4gICAqICAgLSBMaXN0VHlwZVxuICAgKiAgIC0gTm9uTnVsbFR5cGVcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VUeXBlUmVmZXJlbmNlID0gZnVuY3Rpb24gcGFyc2VUeXBlUmVmZXJlbmNlKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciB0eXBlO1xuXG4gICAgaWYgKHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihUb2tlbktpbmQuQlJBQ0tFVF9MKSkge1xuICAgICAgdHlwZSA9IHRoaXMucGFyc2VUeXBlUmVmZXJlbmNlKCk7XG4gICAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5CUkFDS0VUX1IpO1xuICAgICAgdHlwZSA9IHtcbiAgICAgICAga2luZDogS2luZC5MSVNUX1RZUEUsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gdGhpcy5wYXJzZU5hbWVkVHlwZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkJBTkcpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLk5PTl9OVUxMX1RZUEUsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG4gIC8qKlxuICAgKiBOYW1lZFR5cGUgOiBOYW1lXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlTmFtZWRUeXBlID0gZnVuY3Rpb24gcGFyc2VOYW1lZFR5cGUoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuTkFNRURfVFlQRSxcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VOYW1lKCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH0gLy8gSW1wbGVtZW50cyB0aGUgcGFyc2luZyBydWxlcyBpbiB0aGUgVHlwZSBEZWZpbml0aW9uIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIFR5cGVTeXN0ZW1EZWZpbml0aW9uIDpcbiAgICogICAtIFNjaGVtYURlZmluaXRpb25cbiAgICogICAtIFR5cGVEZWZpbml0aW9uXG4gICAqICAgLSBEaXJlY3RpdmVEZWZpbml0aW9uXG4gICAqXG4gICAqIFR5cGVEZWZpbml0aW9uIDpcbiAgICogICAtIFNjYWxhclR5cGVEZWZpbml0aW9uXG4gICAqICAgLSBPYmplY3RUeXBlRGVmaW5pdGlvblxuICAgKiAgIC0gSW50ZXJmYWNlVHlwZURlZmluaXRpb25cbiAgICogICAtIFVuaW9uVHlwZURlZmluaXRpb25cbiAgICogICAtIEVudW1UeXBlRGVmaW5pdGlvblxuICAgKiAgIC0gSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVR5cGVTeXN0ZW1EZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VUeXBlU3lzdGVtRGVmaW5pdGlvbigpIHtcbiAgICAvLyBNYW55IGRlZmluaXRpb25zIGJlZ2luIHdpdGggYSBkZXNjcmlwdGlvbiBhbmQgcmVxdWlyZSBhIGxvb2thaGVhZC5cbiAgICB2YXIga2V5d29yZFRva2VuID0gdGhpcy5wZWVrRGVzY3JpcHRpb24oKSA/IHRoaXMuX2xleGVyLmxvb2thaGVhZCgpIDogdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAoa2V5d29yZFRva2VuLmtpbmQgPT09IFRva2VuS2luZC5OQU1FKSB7XG4gICAgICBzd2l0Y2ggKGtleXdvcmRUb2tlbi52YWx1ZSkge1xuICAgICAgICBjYXNlICdzY2hlbWEnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2NoZW1hRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGNhc2UgJ3NjYWxhcic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTY2FsYXJUeXBlRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGNhc2UgJ3R5cGUnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqZWN0VHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdpbnRlcmZhY2UnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSW50ZXJmYWNlVHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICd1bmlvbic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VVbmlvblR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZW51bSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFbnVtVHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZGlyZWN0aXZlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURpcmVjdGl2ZURlZmluaXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoa2V5d29yZFRva2VuKTtcbiAgfTtcblxuICBfcHJvdG8ucGVla0Rlc2NyaXB0aW9uID0gZnVuY3Rpb24gcGVla0Rlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBlZWsoVG9rZW5LaW5kLlNUUklORykgfHwgdGhpcy5wZWVrKFRva2VuS2luZC5CTE9DS19TVFJJTkcpO1xuICB9XG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiA6IFN0cmluZ1ZhbHVlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiBwYXJzZURlc2NyaXB0aW9uKCkge1xuICAgIGlmICh0aGlzLnBlZWtEZXNjcmlwdGlvbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVN0cmluZ0xpdGVyYWwoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNjaGVtYURlZmluaXRpb24gOiBEZXNjcmlwdGlvbj8gc2NoZW1hIERpcmVjdGl2ZXNbQ29uc3RdPyB7IE9wZXJhdGlvblR5cGVEZWZpbml0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlU2NoZW1hRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlU2NoZW1hRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3NjaGVtYScpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIG9wZXJhdGlvblR5cGVzID0gdGhpcy5tYW55KFRva2VuS2luZC5CUkFDRV9MLCB0aGlzLnBhcnNlT3BlcmF0aW9uVHlwZURlZmluaXRpb24sIFRva2VuS2luZC5CUkFDRV9SKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5TQ0hFTUFfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBvcGVyYXRpb25UeXBlczogb3BlcmF0aW9uVHlwZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9wZXJhdGlvblR5cGVEZWZpbml0aW9uIDogT3BlcmF0aW9uVHlwZSA6IE5hbWVkVHlwZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU9wZXJhdGlvblR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VPcGVyYXRpb25UeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgb3BlcmF0aW9uID0gdGhpcy5wYXJzZU9wZXJhdGlvblR5cGUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgdmFyIHR5cGUgPSB0aGlzLnBhcnNlTmFtZWRUeXBlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT1BFUkFUSU9OX1RZUEVfREVGSU5JVElPTixcbiAgICAgIG9wZXJhdGlvbjogb3BlcmF0aW9uLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogU2NhbGFyVHlwZURlZmluaXRpb24gOiBEZXNjcmlwdGlvbj8gc2NhbGFyIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlU2NhbGFyVHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZVNjYWxhclR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnc2NhbGFyJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuU0NBTEFSX1RZUEVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBPYmplY3RUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgRGVzY3JpcHRpb24/XG4gICAqICAgdHlwZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzPyBEaXJlY3RpdmVzW0NvbnN0XT8gRmllbGRzRGVmaW5pdGlvbj9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPYmplY3RUeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0VHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCd0eXBlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5PQkpFQ1RfVFlQRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGludGVyZmFjZXM6IGludGVyZmFjZXMsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEltcGxlbWVudHNJbnRlcmZhY2VzIDpcbiAgICogICAtIGltcGxlbWVudHMgYCZgPyBOYW1lZFR5cGVcbiAgICogICAtIEltcGxlbWVudHNJbnRlcmZhY2VzICYgTmFtZWRUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW1wbGVtZW50c0ludGVyZmFjZXMgPSBmdW5jdGlvbiBwYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCkge1xuICAgIHZhciBfdGhpcyRfb3B0aW9uczI7XG5cbiAgICBpZiAoIXRoaXMuZXhwZWN0T3B0aW9uYWxLZXl3b3JkKCdpbXBsZW1lbnRzJykpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBpZiAoKChfdGhpcyRfb3B0aW9uczIgPSB0aGlzLl9vcHRpb25zKSA9PT0gbnVsbCB8fCBfdGhpcyRfb3B0aW9uczIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJF9vcHRpb25zMi5hbGxvd0xlZ2FjeVNETEltcGxlbWVudHNJbnRlcmZhY2VzKSA9PT0gdHJ1ZSkge1xuICAgICAgdmFyIHR5cGVzID0gW107IC8vIE9wdGlvbmFsIGxlYWRpbmcgYW1wZXJzYW5kXG5cbiAgICAgIHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihUb2tlbktpbmQuQU1QKTtcblxuICAgICAgZG8ge1xuICAgICAgICB0eXBlcy5wdXNoKHRoaXMucGFyc2VOYW1lZFR5cGUoKSk7XG4gICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkFNUCkgfHwgdGhpcy5wZWVrKFRva2VuS2luZC5OQU1FKSk7XG5cbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kZWxpbWl0ZWRNYW55KFRva2VuS2luZC5BTVAsIHRoaXMucGFyc2VOYW1lZFR5cGUpO1xuICB9XG4gIC8qKlxuICAgKiBGaWVsZHNEZWZpbml0aW9uIDogeyBGaWVsZERlZmluaXRpb24rIH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VGaWVsZHNEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VGaWVsZHNEZWZpbml0aW9uKCkge1xuICAgIHZhciBfdGhpcyRfb3B0aW9uczM7XG5cbiAgICAvLyBMZWdhY3kgc3VwcG9ydCBmb3IgdGhlIFNETD9cbiAgICBpZiAoKChfdGhpcyRfb3B0aW9uczMgPSB0aGlzLl9vcHRpb25zKSA9PT0gbnVsbCB8fCBfdGhpcyRfb3B0aW9uczMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJF9vcHRpb25zMy5hbGxvd0xlZ2FjeVNETEVtcHR5RmllbGRzKSA9PT0gdHJ1ZSAmJiB0aGlzLnBlZWsoVG9rZW5LaW5kLkJSQUNFX0wpICYmIHRoaXMuX2xleGVyLmxvb2thaGVhZCgpLmtpbmQgPT09IFRva2VuS2luZC5CUkFDRV9SKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsTWFueShUb2tlbktpbmQuQlJBQ0VfTCwgdGhpcy5wYXJzZUZpZWxkRGVmaW5pdGlvbiwgVG9rZW5LaW5kLkJSQUNFX1IpO1xuICB9XG4gIC8qKlxuICAgKiBGaWVsZERlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IE5hbWUgQXJndW1lbnRzRGVmaW5pdGlvbj8gOiBUeXBlIERpcmVjdGl2ZXNbQ29uc3RdP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZpZWxkRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRmllbGREZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgYXJncyA9IHRoaXMucGFyc2VBcmd1bWVudERlZnMoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgdmFyIHR5cGUgPSB0aGlzLnBhcnNlVHlwZVJlZmVyZW5jZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRklFTERfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBhcmd1bWVudHM6IGFyZ3MsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogQXJndW1lbnRzRGVmaW5pdGlvbiA6ICggSW5wdXRWYWx1ZURlZmluaXRpb24rIClcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VBcmd1bWVudERlZnMgPSBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50RGVmcygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLlBBUkVOX0wsIHRoaXMucGFyc2VJbnB1dFZhbHVlRGVmLCBUb2tlbktpbmQuUEFSRU5fUik7XG4gIH1cbiAgLyoqXG4gICAqIElucHV0VmFsdWVEZWZpbml0aW9uIDpcbiAgICogICAtIERlc2NyaXB0aW9uPyBOYW1lIDogVHlwZSBEZWZhdWx0VmFsdWU/IERpcmVjdGl2ZXNbQ29uc3RdP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUlucHV0VmFsdWVEZWYgPSBmdW5jdGlvbiBwYXJzZUlucHV0VmFsdWVEZWYoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkNPTE9OKTtcbiAgICB2YXIgdHlwZSA9IHRoaXMucGFyc2VUeXBlUmVmZXJlbmNlKCk7XG4gICAgdmFyIGRlZmF1bHRWYWx1ZTtcblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkVRVUFMUykpIHtcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZUxpdGVyYWwodHJ1ZSk7XG4gICAgfVxuXG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTlBVVF9WQUxVRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEludGVyZmFjZVR5cGVEZWZpbml0aW9uIDpcbiAgICogICAtIERlc2NyaXB0aW9uPyBpbnRlcmZhY2UgTmFtZSBEaXJlY3RpdmVzW0NvbnN0XT8gRmllbGRzRGVmaW5pdGlvbj9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnRlcmZhY2VUeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlSW50ZXJmYWNlVHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdpbnRlcmZhY2UnKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGludGVyZmFjZXMgPSB0aGlzLnBhcnNlSW1wbGVtZW50c0ludGVyZmFjZXMoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBmaWVsZHMgPSB0aGlzLnBhcnNlRmllbGRzRGVmaW5pdGlvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOVEVSRkFDRV9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgaW50ZXJmYWNlczogaW50ZXJmYWNlcyxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVW5pb25UeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gdW5pb24gTmFtZSBEaXJlY3RpdmVzW0NvbnN0XT8gVW5pb25NZW1iZXJUeXBlcz9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VVbmlvblR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VVbmlvblR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgndW5pb24nKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgdHlwZXMgPSB0aGlzLnBhcnNlVW5pb25NZW1iZXJUeXBlcygpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlVOSU9OX1RZUEVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgdHlwZXM6IHR5cGVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBVbmlvbk1lbWJlclR5cGVzIDpcbiAgICogICAtID0gYHxgPyBOYW1lZFR5cGVcbiAgICogICAtIFVuaW9uTWVtYmVyVHlwZXMgfCBOYW1lZFR5cGVcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VVbmlvbk1lbWJlclR5cGVzID0gZnVuY3Rpb24gcGFyc2VVbmlvbk1lbWJlclR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkVRVUFMUykgPyB0aGlzLmRlbGltaXRlZE1hbnkoVG9rZW5LaW5kLlBJUEUsIHRoaXMucGFyc2VOYW1lZFR5cGUpIDogW107XG4gIH1cbiAgLyoqXG4gICAqIEVudW1UeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gZW51bSBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdPyBFbnVtVmFsdWVzRGVmaW5pdGlvbj9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VFbnVtVHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUVudW1UeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2VudW0nKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5wYXJzZUVudW1WYWx1ZXNEZWZpbml0aW9uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRU5VTV9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBFbnVtVmFsdWVzRGVmaW5pdGlvbiA6IHsgRW51bVZhbHVlRGVmaW5pdGlvbisgfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUVudW1WYWx1ZXNEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VFbnVtVmFsdWVEZWZpbml0aW9uLCBUb2tlbktpbmQuQlJBQ0VfUik7XG4gIH1cbiAgLyoqXG4gICAqIEVudW1WYWx1ZURlZmluaXRpb24gOiBEZXNjcmlwdGlvbj8gRW51bVZhbHVlIERpcmVjdGl2ZXNbQ29uc3RdP1xuICAgKlxuICAgKiBFbnVtVmFsdWUgOiBOYW1lXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRW51bVZhbHVlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRW51bVZhbHVlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5FTlVNX1ZBTFVFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gaW5wdXQgTmFtZSBEaXJlY3RpdmVzW0NvbnN0XT8gSW5wdXRGaWVsZHNEZWZpbml0aW9uP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUlucHV0T2JqZWN0VHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUlucHV0T2JqZWN0VHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdpbnB1dCcpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBmaWVsZHMgPSB0aGlzLnBhcnNlSW5wdXRGaWVsZHNEZWZpbml0aW9uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuSU5QVVRfT0JKRUNUX1RZUEVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIElucHV0RmllbGRzRGVmaW5pdGlvbiA6IHsgSW5wdXRWYWx1ZURlZmluaXRpb24rIH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dEZpZWxkc0RlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUlucHV0RmllbGRzRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VJbnB1dFZhbHVlRGVmLCBUb2tlbktpbmQuQlJBQ0VfUik7XG4gIH1cbiAgLyoqXG4gICAqIFR5cGVTeXN0ZW1FeHRlbnNpb24gOlxuICAgKiAgIC0gU2NoZW1hRXh0ZW5zaW9uXG4gICAqICAgLSBUeXBlRXh0ZW5zaW9uXG4gICAqXG4gICAqIFR5cGVFeHRlbnNpb24gOlxuICAgKiAgIC0gU2NhbGFyVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gT2JqZWN0VHlwZUV4dGVuc2lvblxuICAgKiAgIC0gSW50ZXJmYWNlVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gVW5pb25UeXBlRXh0ZW5zaW9uXG4gICAqICAgLSBFbnVtVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVR5cGVTeXN0ZW1FeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZVR5cGVTeXN0ZW1FeHRlbnNpb24oKSB7XG4gICAgdmFyIGtleXdvcmRUb2tlbiA9IHRoaXMuX2xleGVyLmxvb2thaGVhZCgpO1xuXG4gICAgaWYgKGtleXdvcmRUb2tlbi5raW5kID09PSBUb2tlbktpbmQuTkFNRSkge1xuICAgICAgc3dpdGNoIChrZXl3b3JkVG9rZW4udmFsdWUpIHtcbiAgICAgICAgY2FzZSAnc2NoZW1hJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVNjaGVtYUV4dGVuc2lvbigpO1xuXG4gICAgICAgIGNhc2UgJ3NjYWxhcic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTY2FsYXJUeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAndHlwZSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPYmplY3RUeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAnaW50ZXJmYWNlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUludGVyZmFjZVR5cGVFeHRlbnNpb24oKTtcblxuICAgICAgICBjYXNlICd1bmlvbic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VVbmlvblR5cGVFeHRlbnNpb24oKTtcblxuICAgICAgICBjYXNlICdlbnVtJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVudW1UeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKGtleXdvcmRUb2tlbik7XG4gIH1cbiAgLyoqXG4gICAqIFNjaGVtYUV4dGVuc2lvbiA6XG4gICAqICAtIGV4dGVuZCBzY2hlbWEgRGlyZWN0aXZlc1tDb25zdF0/IHsgT3BlcmF0aW9uVHlwZURlZmluaXRpb24rIH1cbiAgICogIC0gZXh0ZW5kIHNjaGVtYSBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNjaGVtYUV4dGVuc2lvbiA9IGZ1bmN0aW9uIHBhcnNlU2NoZW1hRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdzY2hlbWEnKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBvcGVyYXRpb25UeXBlcyA9IHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5CUkFDRV9MLCB0aGlzLnBhcnNlT3BlcmF0aW9uVHlwZURlZmluaXRpb24sIFRva2VuS2luZC5CUkFDRV9SKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiBvcGVyYXRpb25UeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlNDSEVNQV9FWFRFTlNJT04sXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgb3BlcmF0aW9uVHlwZXM6IG9wZXJhdGlvblR5cGVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBTY2FsYXJUeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIGV4dGVuZCBzY2FsYXIgTmFtZSBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNjYWxhclR5cGVFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZVNjYWxhclR5cGVFeHRlbnNpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdleHRlbmQnKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3NjYWxhcicpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuXG4gICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5TQ0FMQVJfVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0VHlwZUV4dGVuc2lvbiA6XG4gICAqICAtIGV4dGVuZCB0eXBlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXM/IERpcmVjdGl2ZXNbQ29uc3RdPyBGaWVsZHNEZWZpbml0aW9uXG4gICAqICAtIGV4dGVuZCB0eXBlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXM/IERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqICAtIGV4dGVuZCB0eXBlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXNcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPYmplY3RUeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VPYmplY3RUeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCd0eXBlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcblxuICAgIGlmIChpbnRlcmZhY2VzLmxlbmd0aCA9PT0gMCAmJiBkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiBmaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5PQkpFQ1RfVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgaW50ZXJmYWNlczogaW50ZXJmYWNlcyxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogSW50ZXJmYWNlVHlwZUV4dGVuc2lvbiA6XG4gICAqICAtIGV4dGVuZCBpbnRlcmZhY2UgTmFtZSBJbXBsZW1lbnRzSW50ZXJmYWNlcz8gRGlyZWN0aXZlc1tDb25zdF0/IEZpZWxkc0RlZmluaXRpb25cbiAgICogIC0gZXh0ZW5kIGludGVyZmFjZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzPyBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKiAgLSBleHRlbmQgaW50ZXJmYWNlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXNcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdpbnRlcmZhY2UnKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGludGVyZmFjZXMgPSB0aGlzLnBhcnNlSW1wbGVtZW50c0ludGVyZmFjZXMoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBmaWVsZHMgPSB0aGlzLnBhcnNlRmllbGRzRGVmaW5pdGlvbigpO1xuXG4gICAgaWYgKGludGVyZmFjZXMubGVuZ3RoID09PSAwICYmIGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwICYmIGZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOVEVSRkFDRV9UWVBFX0VYVEVOU0lPTixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBpbnRlcmZhY2VzOiBpbnRlcmZhY2VzLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBVbmlvblR5cGVFeHRlbnNpb24gOlxuICAgKiAgIC0gZXh0ZW5kIHVuaW9uIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IFVuaW9uTWVtYmVyVHlwZXNcbiAgICogICAtIGV4dGVuZCB1bmlvbiBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVW5pb25UeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VVbmlvblR5cGVFeHRlbnNpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdleHRlbmQnKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3VuaW9uJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHR5cGVzID0gdGhpcy5wYXJzZVVuaW9uTWVtYmVyVHlwZXMoKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiB0eXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlVOSU9OX1RZUEVfRVhURU5TSU9OLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICB0eXBlczogdHlwZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEVudW1UeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIGV4dGVuZCBlbnVtIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IEVudW1WYWx1ZXNEZWZpbml0aW9uXG4gICAqICAgLSBleHRlbmQgZW51bSBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRW51bVR5cGVFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZUVudW1UeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdlbnVtJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMucGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbigpO1xuXG4gICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwICYmIHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkVOVU1fVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbnB1dE9iamVjdFR5cGVFeHRlbnNpb24gOlxuICAgKiAgIC0gZXh0ZW5kIGlucHV0IE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IElucHV0RmllbGRzRGVmaW5pdGlvblxuICAgKiAgIC0gZXh0ZW5kIGlucHV0IE5hbWUgRGlyZWN0aXZlc1tDb25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dE9iamVjdFR5cGVFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZUlucHV0T2JqZWN0VHlwZUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnaW5wdXQnKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUlucHV0RmllbGRzRGVmaW5pdGlvbigpO1xuXG4gICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwICYmIGZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOUFVUX09CSkVDVF9UWVBFX0VYVEVOU0lPTixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERpcmVjdGl2ZURlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IGRpcmVjdGl2ZSBAIE5hbWUgQXJndW1lbnRzRGVmaW5pdGlvbj8gYHJlcGVhdGFibGVgPyBvbiBEaXJlY3RpdmVMb2NhdGlvbnNcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZGlyZWN0aXZlJyk7XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQVQpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgYXJncyA9IHRoaXMucGFyc2VBcmd1bWVudERlZnMoKTtcbiAgICB2YXIgcmVwZWF0YWJsZSA9IHRoaXMuZXhwZWN0T3B0aW9uYWxLZXl3b3JkKCdyZXBlYXRhYmxlJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdvbicpO1xuICAgIHZhciBsb2NhdGlvbnMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlTG9jYXRpb25zKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRElSRUNUSVZFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgYXJndW1lbnRzOiBhcmdzLFxuICAgICAgcmVwZWF0YWJsZTogcmVwZWF0YWJsZSxcbiAgICAgIGxvY2F0aW9uczogbG9jYXRpb25zLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXJlY3RpdmVMb2NhdGlvbnMgOlxuICAgKiAgIC0gYHxgPyBEaXJlY3RpdmVMb2NhdGlvblxuICAgKiAgIC0gRGlyZWN0aXZlTG9jYXRpb25zIHwgRGlyZWN0aXZlTG9jYXRpb25cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVMb2NhdGlvbnMgPSBmdW5jdGlvbiBwYXJzZURpcmVjdGl2ZUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWxpbWl0ZWRNYW55KFRva2VuS2luZC5QSVBFLCB0aGlzLnBhcnNlRGlyZWN0aXZlTG9jYXRpb24pO1xuICB9XG4gIC8qXG4gICAqIERpcmVjdGl2ZUxvY2F0aW9uIDpcbiAgICogICAtIEV4ZWN1dGFibGVEaXJlY3RpdmVMb2NhdGlvblxuICAgKiAgIC0gVHlwZVN5c3RlbURpcmVjdGl2ZUxvY2F0aW9uXG4gICAqXG4gICAqIEV4ZWN1dGFibGVEaXJlY3RpdmVMb2NhdGlvbiA6IG9uZSBvZlxuICAgKiAgIGBRVUVSWWBcbiAgICogICBgTVVUQVRJT05gXG4gICAqICAgYFNVQlNDUklQVElPTmBcbiAgICogICBgRklFTERgXG4gICAqICAgYEZSQUdNRU5UX0RFRklOSVRJT05gXG4gICAqICAgYEZSQUdNRU5UX1NQUkVBRGBcbiAgICogICBgSU5MSU5FX0ZSQUdNRU5UYFxuICAgKlxuICAgKiBUeXBlU3lzdGVtRGlyZWN0aXZlTG9jYXRpb24gOiBvbmUgb2ZcbiAgICogICBgU0NIRU1BYFxuICAgKiAgIGBTQ0FMQVJgXG4gICAqICAgYE9CSkVDVGBcbiAgICogICBgRklFTERfREVGSU5JVElPTmBcbiAgICogICBgQVJHVU1FTlRfREVGSU5JVElPTmBcbiAgICogICBgSU5URVJGQUNFYFxuICAgKiAgIGBVTklPTmBcbiAgICogICBgRU5VTWBcbiAgICogICBgRU5VTV9WQUxVRWBcbiAgICogICBgSU5QVVRfT0JKRUNUYFxuICAgKiAgIGBJTlBVVF9GSUVMRF9ERUZJTklUSU9OYFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZURpcmVjdGl2ZUxvY2F0aW9uID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVMb2NhdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG5cbiAgICBpZiAoRGlyZWN0aXZlTG9jYXRpb25bbmFtZS52YWx1ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKHN0YXJ0KTtcbiAgfSAvLyBDb3JlIHBhcnNpbmcgdXRpbGl0eSBmdW5jdGlvbnNcblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvY2F0aW9uIG9iamVjdCwgdXNlZCB0byBpZGVudGlmeSB0aGUgcGxhY2UgaW4gdGhlIHNvdXJjZSB0aGF0IGNyZWF0ZWQgYSBnaXZlbiBwYXJzZWQgb2JqZWN0LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5sb2MgPSBmdW5jdGlvbiBsb2Moc3RhcnRUb2tlbikge1xuICAgIHZhciBfdGhpcyRfb3B0aW9uczQ7XG5cbiAgICBpZiAoKChfdGhpcyRfb3B0aW9uczQgPSB0aGlzLl9vcHRpb25zKSA9PT0gbnVsbCB8fCBfdGhpcyRfb3B0aW9uczQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJF9vcHRpb25zNC5ub0xvY2F0aW9uKSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvbihzdGFydFRva2VuLCB0aGlzLl9sZXhlci5sYXN0VG9rZW4sIHRoaXMuX2xleGVyLnNvdXJjZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBuZXh0IHRva2VuIGlzIG9mIGEgZ2l2ZW4ga2luZFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wZWVrID0gZnVuY3Rpb24gcGVlayhraW5kKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xleGVyLnRva2VuLmtpbmQgPT09IGtpbmQ7XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBuZXh0IHRva2VuIGlzIG9mIHRoZSBnaXZlbiBraW5kLCByZXR1cm4gdGhhdCB0b2tlbiBhZnRlciBhZHZhbmNpbmcgdGhlIGxleGVyLlxuICAgKiBPdGhlcndpc2UsIGRvIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBzdGF0ZSBhbmQgdGhyb3cgYW4gZXJyb3IuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmV4cGVjdFRva2VuID0gZnVuY3Rpb24gZXhwZWN0VG9rZW4oa2luZCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgaWYgKHRva2VuLmtpbmQgPT09IGtpbmQpIHtcbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIHRocm93IHN5bnRheEVycm9yKHRoaXMuX2xleGVyLnNvdXJjZSwgdG9rZW4uc3RhcnQsIFwiRXhwZWN0ZWQgXCIuY29uY2F0KGdldFRva2VuS2luZERlc2Moa2luZCksIFwiLCBmb3VuZCBcIikuY29uY2F0KGdldFRva2VuRGVzYyh0b2tlbiksIFwiLlwiKSk7XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBuZXh0IHRva2VuIGlzIG9mIHRoZSBnaXZlbiBraW5kLCByZXR1cm4gdGhhdCB0b2tlbiBhZnRlciBhZHZhbmNpbmcgdGhlIGxleGVyLlxuICAgKiBPdGhlcndpc2UsIGRvIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBzdGF0ZSBhbmQgcmV0dXJuIHVuZGVmaW5lZC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXhwZWN0T3B0aW9uYWxUb2tlbiA9IGZ1bmN0aW9uIGV4cGVjdE9wdGlvbmFsVG9rZW4oa2luZCkge1xuICAgIHZhciB0b2tlbiA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgaWYgKHRva2VuLmtpbmQgPT09IGtpbmQpIHtcbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBuZXh0IHRva2VuIGlzIGEgZ2l2ZW4ga2V5d29yZCwgYWR2YW5jZSB0aGUgbGV4ZXIuXG4gICAqIE90aGVyd2lzZSwgZG8gbm90IGNoYW5nZSB0aGUgcGFyc2VyIHN0YXRlIGFuZCB0aHJvdyBhbiBlcnJvci5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXhwZWN0S2V5d29yZCA9IGZ1bmN0aW9uIGV4cGVjdEtleXdvcmQodmFsdWUpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0b2tlbi5raW5kID09PSBUb2tlbktpbmQuTkFNRSAmJiB0b2tlbi52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgc3ludGF4RXJyb3IodGhpcy5fbGV4ZXIuc291cmNlLCB0b2tlbi5zdGFydCwgXCJFeHBlY3RlZCBcXFwiXCIuY29uY2F0KHZhbHVlLCBcIlxcXCIsIGZvdW5kIFwiKS5jb25jYXQoZ2V0VG9rZW5EZXNjKHRva2VuKSwgXCIuXCIpKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIElmIHRoZSBuZXh0IHRva2VuIGlzIGEgZ2l2ZW4ga2V5d29yZCwgcmV0dXJuIFwidHJ1ZVwiIGFmdGVyIGFkdmFuY2luZyB0aGUgbGV4ZXIuXG4gICAqIE90aGVyd2lzZSwgZG8gbm90IGNoYW5nZSB0aGUgcGFyc2VyIHN0YXRlIGFuZCByZXR1cm4gXCJmYWxzZVwiLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5leHBlY3RPcHRpb25hbEtleXdvcmQgPSBmdW5jdGlvbiBleHBlY3RPcHRpb25hbEtleXdvcmQodmFsdWUpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0b2tlbi5raW5kID09PSBUb2tlbktpbmQuTkFNRSAmJiB0b2tlbi52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGFuIGVycm9yIHdoZW4gYW4gdW5leHBlY3RlZCBsZXhlZCB0b2tlbiBpcyBlbmNvdW50ZXJlZC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udW5leHBlY3RlZCA9IGZ1bmN0aW9uIHVuZXhwZWN0ZWQoYXRUb2tlbikge1xuICAgIHZhciB0b2tlbiA9IGF0VG9rZW4gIT09IG51bGwgJiYgYXRUb2tlbiAhPT0gdm9pZCAwID8gYXRUb2tlbiA6IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHJldHVybiBzeW50YXhFcnJvcih0aGlzLl9sZXhlci5zb3VyY2UsIHRva2VuLnN0YXJ0LCBcIlVuZXhwZWN0ZWQgXCIuY29uY2F0KGdldFRva2VuRGVzYyh0b2tlbiksIFwiLlwiKSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwb3NzaWJseSBlbXB0eSBsaXN0IG9mIHBhcnNlIG5vZGVzLCBkZXRlcm1pbmVkIGJ5IHRoZSBwYXJzZUZuLlxuICAgKiBUaGlzIGxpc3QgYmVnaW5zIHdpdGggYSBsZXggdG9rZW4gb2Ygb3BlbktpbmQgYW5kIGVuZHMgd2l0aCBhIGxleCB0b2tlbiBvZiBjbG9zZUtpbmQuXG4gICAqIEFkdmFuY2VzIHRoZSBwYXJzZXIgdG8gdGhlIG5leHQgbGV4IHRva2VuIGFmdGVyIHRoZSBjbG9zaW5nIHRva2VuLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hbnkgPSBmdW5jdGlvbiBhbnkob3BlbktpbmQsIHBhcnNlRm4sIGNsb3NlS2luZCkge1xuICAgIHRoaXMuZXhwZWN0VG9rZW4ob3BlbktpbmQpO1xuICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgd2hpbGUgKCF0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oY2xvc2VLaW5kKSkge1xuICAgICAgbm9kZXMucHVzaChwYXJzZUZuLmNhbGwodGhpcykpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgcGFyc2Ugbm9kZXMsIGRldGVybWluZWQgYnkgdGhlIHBhcnNlRm4uXG4gICAqIEl0IGNhbiBiZSBlbXB0eSBvbmx5IGlmIG9wZW4gdG9rZW4gaXMgbWlzc2luZyBvdGhlcndpc2UgaXQgd2lsbCBhbHdheXMgcmV0dXJuIG5vbi1lbXB0eSBsaXN0XG4gICAqIHRoYXQgYmVnaW5zIHdpdGggYSBsZXggdG9rZW4gb2Ygb3BlbktpbmQgYW5kIGVuZHMgd2l0aCBhIGxleCB0b2tlbiBvZiBjbG9zZUtpbmQuXG4gICAqIEFkdmFuY2VzIHRoZSBwYXJzZXIgdG8gdGhlIG5leHQgbGV4IHRva2VuIGFmdGVyIHRoZSBjbG9zaW5nIHRva2VuLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vcHRpb25hbE1hbnkgPSBmdW5jdGlvbiBvcHRpb25hbE1hbnkob3BlbktpbmQsIHBhcnNlRm4sIGNsb3NlS2luZCkge1xuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4ob3BlbktpbmQpKSB7XG4gICAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgICAgZG8ge1xuICAgICAgICBub2Rlcy5wdXNoKHBhcnNlRm4uY2FsbCh0aGlzKSk7XG4gICAgICB9IHdoaWxlICghdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKGNsb3NlS2luZCkpO1xuXG4gICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbm9uLWVtcHR5IGxpc3Qgb2YgcGFyc2Ugbm9kZXMsIGRldGVybWluZWQgYnkgdGhlIHBhcnNlRm4uXG4gICAqIFRoaXMgbGlzdCBiZWdpbnMgd2l0aCBhIGxleCB0b2tlbiBvZiBvcGVuS2luZCBhbmQgZW5kcyB3aXRoIGEgbGV4IHRva2VuIG9mIGNsb3NlS2luZC5cbiAgICogQWR2YW5jZXMgdGhlIHBhcnNlciB0byB0aGUgbmV4dCBsZXggdG9rZW4gYWZ0ZXIgdGhlIGNsb3NpbmcgdG9rZW4uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm1hbnkgPSBmdW5jdGlvbiBtYW55KG9wZW5LaW5kLCBwYXJzZUZuLCBjbG9zZUtpbmQpIHtcbiAgICB0aGlzLmV4cGVjdFRva2VuKG9wZW5LaW5kKTtcbiAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgIGRvIHtcbiAgICAgIG5vZGVzLnB1c2gocGFyc2VGbi5jYWxsKHRoaXMpKTtcbiAgICB9IHdoaWxlICghdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKGNsb3NlS2luZCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbm9uLWVtcHR5IGxpc3Qgb2YgcGFyc2Ugbm9kZXMsIGRldGVybWluZWQgYnkgdGhlIHBhcnNlRm4uXG4gICAqIFRoaXMgbGlzdCBtYXkgYmVnaW4gd2l0aCBhIGxleCB0b2tlbiBvZiBkZWxpbWl0ZXJLaW5kIGZvbGxvd2VkIGJ5IGl0ZW1zIHNlcGFyYXRlZCBieSBsZXggdG9rZW5zIG9mIHRva2VuS2luZC5cbiAgICogQWR2YW5jZXMgdGhlIHBhcnNlciB0byB0aGUgbmV4dCBsZXggdG9rZW4gYWZ0ZXIgbGFzdCBpdGVtIGluIHRoZSBsaXN0LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZWxpbWl0ZWRNYW55ID0gZnVuY3Rpb24gZGVsaW1pdGVkTWFueShkZWxpbWl0ZXJLaW5kLCBwYXJzZUZuKSB7XG4gICAgdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKGRlbGltaXRlcktpbmQpO1xuICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgZG8ge1xuICAgICAgbm9kZXMucHVzaChwYXJzZUZuLmNhbGwodGhpcykpO1xuICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihkZWxpbWl0ZXJLaW5kKSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH07XG5cbiAgcmV0dXJuIFBhcnNlcjtcbn0oKTtcbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdG8gZGVzY3JpYmUgYSB0b2tlbiBhcyBhIHN0cmluZyBmb3IgZGVidWdnaW5nLlxuICovXG5cbmZ1bmN0aW9uIGdldFRva2VuRGVzYyh0b2tlbikge1xuICB2YXIgdmFsdWUgPSB0b2tlbi52YWx1ZTtcbiAgcmV0dXJuIGdldFRva2VuS2luZERlc2ModG9rZW4ua2luZCkgKyAodmFsdWUgIT0gbnVsbCA/IFwiIFxcXCJcIi5jb25jYXQodmFsdWUsIFwiXFxcIlwiKSA6ICcnKTtcbn1cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdG8gZGVzY3JpYmUgYSB0b2tlbiBraW5kIGFzIGEgc3RyaW5nIGZvciBkZWJ1Z2dpbmcuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRUb2tlbktpbmREZXNjKGtpbmQpIHtcbiAgcmV0dXJuIGlzUHVuY3R1YXRvclRva2VuS2luZChraW5kKSA/IFwiXFxcIlwiLmNvbmNhdChraW5kLCBcIlxcXCJcIikgOiBraW5kO1xufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tIFwiLi9sb2NhdGlvbi5tanNcIjtcbi8qKlxuICogUmVuZGVyIGEgaGVscGZ1bCBkZXNjcmlwdGlvbiBvZiB0aGUgbG9jYXRpb24gaW4gdGhlIEdyYXBoUUwgU291cmNlIGRvY3VtZW50LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIHJldHVybiBwcmludFNvdXJjZUxvY2F0aW9uKGxvY2F0aW9uLnNvdXJjZSwgZ2V0TG9jYXRpb24obG9jYXRpb24uc291cmNlLCBsb2NhdGlvbi5zdGFydCkpO1xufVxuLyoqXG4gKiBSZW5kZXIgYSBoZWxwZnVsIGRlc2NyaXB0aW9uIG9mIHRoZSBsb2NhdGlvbiBpbiB0aGUgR3JhcGhRTCBTb3VyY2UgZG9jdW1lbnQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50U291cmNlTG9jYXRpb24oc291cmNlLCBzb3VyY2VMb2NhdGlvbikge1xuICB2YXIgZmlyc3RMaW5lQ29sdW1uT2Zmc2V0ID0gc291cmNlLmxvY2F0aW9uT2Zmc2V0LmNvbHVtbiAtIDE7XG4gIHZhciBib2R5ID0gd2hpdGVzcGFjZShmaXJzdExpbmVDb2x1bW5PZmZzZXQpICsgc291cmNlLmJvZHk7XG4gIHZhciBsaW5lSW5kZXggPSBzb3VyY2VMb2NhdGlvbi5saW5lIC0gMTtcbiAgdmFyIGxpbmVPZmZzZXQgPSBzb3VyY2UubG9jYXRpb25PZmZzZXQubGluZSAtIDE7XG4gIHZhciBsaW5lTnVtID0gc291cmNlTG9jYXRpb24ubGluZSArIGxpbmVPZmZzZXQ7XG4gIHZhciBjb2x1bW5PZmZzZXQgPSBzb3VyY2VMb2NhdGlvbi5saW5lID09PSAxID8gZmlyc3RMaW5lQ29sdW1uT2Zmc2V0IDogMDtcbiAgdmFyIGNvbHVtbk51bSA9IHNvdXJjZUxvY2F0aW9uLmNvbHVtbiArIGNvbHVtbk9mZnNldDtcbiAgdmFyIGxvY2F0aW9uU3RyID0gXCJcIi5jb25jYXQoc291cmNlLm5hbWUsIFwiOlwiKS5jb25jYXQobGluZU51bSwgXCI6XCIpLmNvbmNhdChjb2x1bW5OdW0sIFwiXFxuXCIpO1xuICB2YXIgbGluZXMgPSBib2R5LnNwbGl0KC9cXHJcXG58W1xcblxccl0vZyk7XG4gIHZhciBsb2NhdGlvbkxpbmUgPSBsaW5lc1tsaW5lSW5kZXhdOyAvLyBTcGVjaWFsIGNhc2UgZm9yIG1pbmlmaWVkIGRvY3VtZW50c1xuXG4gIGlmIChsb2NhdGlvbkxpbmUubGVuZ3RoID4gMTIwKSB7XG4gICAgdmFyIHN1YkxpbmVJbmRleCA9IE1hdGguZmxvb3IoY29sdW1uTnVtIC8gODApO1xuICAgIHZhciBzdWJMaW5lQ29sdW1uTnVtID0gY29sdW1uTnVtICUgODA7XG4gICAgdmFyIHN1YkxpbmVzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2F0aW9uTGluZS5sZW5ndGg7IGkgKz0gODApIHtcbiAgICAgIHN1YkxpbmVzLnB1c2gobG9jYXRpb25MaW5lLnNsaWNlKGksIGkgKyA4MCkpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhdGlvblN0ciArIHByaW50UHJlZml4ZWRMaW5lcyhbW1wiXCIuY29uY2F0KGxpbmVOdW0pLCBzdWJMaW5lc1swXV1dLmNvbmNhdChzdWJMaW5lcy5zbGljZSgxLCBzdWJMaW5lSW5kZXggKyAxKS5tYXAoZnVuY3Rpb24gKHN1YkxpbmUpIHtcbiAgICAgIHJldHVybiBbJycsIHN1YkxpbmVdO1xuICAgIH0pLCBbWycgJywgd2hpdGVzcGFjZShzdWJMaW5lQ29sdW1uTnVtIC0gMSkgKyAnXiddLCBbJycsIHN1YkxpbmVzW3N1YkxpbmVJbmRleCArIDFdXV0pKTtcbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvblN0ciArIHByaW50UHJlZml4ZWRMaW5lcyhbLy8gTGluZXMgc3BlY2lmaWVkIGxpa2UgdGhpczogW1wicHJlZml4XCIsIFwic3RyaW5nXCJdLFxuICBbXCJcIi5jb25jYXQobGluZU51bSAtIDEpLCBsaW5lc1tsaW5lSW5kZXggLSAxXV0sIFtcIlwiLmNvbmNhdChsaW5lTnVtKSwgbG9jYXRpb25MaW5lXSwgWycnLCB3aGl0ZXNwYWNlKGNvbHVtbk51bSAtIDEpICsgJ14nXSwgW1wiXCIuY29uY2F0KGxpbmVOdW0gKyAxKSwgbGluZXNbbGluZUluZGV4ICsgMV1dXSk7XG59XG5cbmZ1bmN0aW9uIHByaW50UHJlZml4ZWRMaW5lcyhsaW5lcykge1xuICB2YXIgZXhpc3RpbmdMaW5lcyA9IGxpbmVzLmZpbHRlcihmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfID0gX3JlZlswXSxcbiAgICAgICAgbGluZSA9IF9yZWZbMV07XG4gICAgcmV0dXJuIGxpbmUgIT09IHVuZGVmaW5lZDtcbiAgfSk7XG4gIHZhciBwYWRMZW4gPSBNYXRoLm1heC5hcHBseShNYXRoLCBleGlzdGluZ0xpbmVzLm1hcChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgcHJlZml4ID0gX3JlZjJbMF07XG4gICAgcmV0dXJuIHByZWZpeC5sZW5ndGg7XG4gIH0pKTtcbiAgcmV0dXJuIGV4aXN0aW5nTGluZXMubWFwKGZ1bmN0aW9uIChfcmVmMykge1xuICAgIHZhciBwcmVmaXggPSBfcmVmM1swXSxcbiAgICAgICAgbGluZSA9IF9yZWYzWzFdO1xuICAgIHJldHVybiBsZWZ0UGFkKHBhZExlbiwgcHJlZml4KSArIChsaW5lID8gJyB8ICcgKyBsaW5lIDogJyB8Jyk7XG4gIH0pLmpvaW4oJ1xcbicpO1xufVxuXG5mdW5jdGlvbiB3aGl0ZXNwYWNlKGxlbikge1xuICByZXR1cm4gQXJyYXkobGVuICsgMSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBsZWZ0UGFkKGxlbiwgc3RyKSB7XG4gIHJldHVybiB3aGl0ZXNwYWNlKGxlbiAtIHN0ci5sZW5ndGgpICsgc3RyO1xufVxuIiwiaW1wb3J0IHsgdmlzaXQgfSBmcm9tIFwiLi92aXNpdG9yLm1qc1wiO1xuaW1wb3J0IHsgcHJpbnRCbG9ja1N0cmluZyB9IGZyb20gXCIuL2Jsb2NrU3RyaW5nLm1qc1wiO1xuLyoqXG4gKiBDb252ZXJ0cyBhbiBBU1QgaW50byBhIHN0cmluZywgdXNpbmcgb25lIHNldCBvZiByZWFzb25hYmxlXG4gKiBmb3JtYXR0aW5nIHJ1bGVzLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludChhc3QpIHtcbiAgcmV0dXJuIHZpc2l0KGFzdCwge1xuICAgIGxlYXZlOiBwcmludERvY0FTVFJlZHVjZXJcbiAgfSk7XG59XG52YXIgTUFYX0xJTkVfTEVOR1RIID0gODA7IC8vIFRPRE86IHByb3ZpZGUgYmV0dGVyIHR5cGUgY292ZXJhZ2UgaW4gZnV0dXJlXG5cbnZhciBwcmludERvY0FTVFJlZHVjZXIgPSB7XG4gIE5hbWU6IGZ1bmN0aW9uIE5hbWUobm9kZSkge1xuICAgIHJldHVybiBub2RlLnZhbHVlO1xuICB9LFxuICBWYXJpYWJsZTogZnVuY3Rpb24gVmFyaWFibGUobm9kZSkge1xuICAgIHJldHVybiAnJCcgKyBub2RlLm5hbWU7XG4gIH0sXG4gIC8vIERvY3VtZW50XG4gIERvY3VtZW50OiBmdW5jdGlvbiBEb2N1bWVudChub2RlKSB7XG4gICAgcmV0dXJuIGpvaW4obm9kZS5kZWZpbml0aW9ucywgJ1xcblxcbicpICsgJ1xcbic7XG4gIH0sXG4gIE9wZXJhdGlvbkRlZmluaXRpb246IGZ1bmN0aW9uIE9wZXJhdGlvbkRlZmluaXRpb24obm9kZSkge1xuICAgIHZhciBvcCA9IG5vZGUub3BlcmF0aW9uO1xuICAgIHZhciBuYW1lID0gbm9kZS5uYW1lO1xuICAgIHZhciB2YXJEZWZzID0gd3JhcCgnKCcsIGpvaW4obm9kZS52YXJpYWJsZURlZmluaXRpb25zLCAnLCAnKSwgJyknKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IGpvaW4obm9kZS5kaXJlY3RpdmVzLCAnICcpO1xuICAgIHZhciBzZWxlY3Rpb25TZXQgPSBub2RlLnNlbGVjdGlvblNldDsgLy8gQW5vbnltb3VzIHF1ZXJpZXMgd2l0aCBubyBkaXJlY3RpdmVzIG9yIHZhcmlhYmxlIGRlZmluaXRpb25zIGNhbiB1c2VcbiAgICAvLyB0aGUgcXVlcnkgc2hvcnQgZm9ybS5cblxuICAgIHJldHVybiAhbmFtZSAmJiAhZGlyZWN0aXZlcyAmJiAhdmFyRGVmcyAmJiBvcCA9PT0gJ3F1ZXJ5JyA/IHNlbGVjdGlvblNldCA6IGpvaW4oW29wLCBqb2luKFtuYW1lLCB2YXJEZWZzXSksIGRpcmVjdGl2ZXMsIHNlbGVjdGlvblNldF0sICcgJyk7XG4gIH0sXG4gIFZhcmlhYmxlRGVmaW5pdGlvbjogZnVuY3Rpb24gVmFyaWFibGVEZWZpbml0aW9uKF9yZWYpIHtcbiAgICB2YXIgdmFyaWFibGUgPSBfcmVmLnZhcmlhYmxlLFxuICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBfcmVmLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gdmFyaWFibGUgKyAnOiAnICsgdHlwZSArIHdyYXAoJyA9ICcsIGRlZmF1bHRWYWx1ZSkgKyB3cmFwKCcgJywgam9pbihkaXJlY3RpdmVzLCAnICcpKTtcbiAgfSxcbiAgU2VsZWN0aW9uU2V0OiBmdW5jdGlvbiBTZWxlY3Rpb25TZXQoX3JlZjIpIHtcbiAgICB2YXIgc2VsZWN0aW9ucyA9IF9yZWYyLnNlbGVjdGlvbnM7XG4gICAgcmV0dXJuIGJsb2NrKHNlbGVjdGlvbnMpO1xuICB9LFxuICBGaWVsZDogZnVuY3Rpb24gRmllbGQoX3JlZjMpIHtcbiAgICB2YXIgYWxpYXMgPSBfcmVmMy5hbGlhcyxcbiAgICAgICAgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgIGFyZ3MgPSBfcmVmMy5hcmd1bWVudHMsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMy5kaXJlY3RpdmVzLFxuICAgICAgICBzZWxlY3Rpb25TZXQgPSBfcmVmMy5zZWxlY3Rpb25TZXQ7XG4gICAgdmFyIHByZWZpeCA9IHdyYXAoJycsIGFsaWFzLCAnOiAnKSArIG5hbWU7XG4gICAgdmFyIGFyZ3NMaW5lID0gcHJlZml4ICsgd3JhcCgnKCcsIGpvaW4oYXJncywgJywgJyksICcpJyk7XG5cbiAgICBpZiAoYXJnc0xpbmUubGVuZ3RoID4gTUFYX0xJTkVfTEVOR1RIKSB7XG4gICAgICBhcmdzTGluZSA9IHByZWZpeCArIHdyYXAoJyhcXG4nLCBpbmRlbnQoam9pbihhcmdzLCAnXFxuJykpLCAnXFxuKScpO1xuICAgIH1cblxuICAgIHJldHVybiBqb2luKFthcmdzTGluZSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCBzZWxlY3Rpb25TZXRdLCAnICcpO1xuICB9LFxuICBBcmd1bWVudDogZnVuY3Rpb24gQXJndW1lbnQoX3JlZjQpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWY0Lm5hbWUsXG4gICAgICAgIHZhbHVlID0gX3JlZjQudmFsdWU7XG4gICAgcmV0dXJuIG5hbWUgKyAnOiAnICsgdmFsdWU7XG4gIH0sXG4gIC8vIEZyYWdtZW50c1xuICBGcmFnbWVudFNwcmVhZDogZnVuY3Rpb24gRnJhZ21lbnRTcHJlYWQoX3JlZjUpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWY1Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmNS5kaXJlY3RpdmVzO1xuICAgIHJldHVybiAnLi4uJyArIG5hbWUgKyB3cmFwKCcgJywgam9pbihkaXJlY3RpdmVzLCAnICcpKTtcbiAgfSxcbiAgSW5saW5lRnJhZ21lbnQ6IGZ1bmN0aW9uIElubGluZUZyYWdtZW50KF9yZWY2KSB7XG4gICAgdmFyIHR5cGVDb25kaXRpb24gPSBfcmVmNi50eXBlQ29uZGl0aW9uLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjYuZGlyZWN0aXZlcyxcbiAgICAgICAgc2VsZWN0aW9uU2V0ID0gX3JlZjYuc2VsZWN0aW9uU2V0O1xuICAgIHJldHVybiBqb2luKFsnLi4uJywgd3JhcCgnb24gJywgdHlwZUNvbmRpdGlvbiksIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgc2VsZWN0aW9uU2V0XSwgJyAnKTtcbiAgfSxcbiAgRnJhZ21lbnREZWZpbml0aW9uOiBmdW5jdGlvbiBGcmFnbWVudERlZmluaXRpb24oX3JlZjcpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWY3Lm5hbWUsXG4gICAgICAgIHR5cGVDb25kaXRpb24gPSBfcmVmNy50eXBlQ29uZGl0aW9uLFxuICAgICAgICB2YXJpYWJsZURlZmluaXRpb25zID0gX3JlZjcudmFyaWFibGVEZWZpbml0aW9ucyxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWY3LmRpcmVjdGl2ZXMsXG4gICAgICAgIHNlbGVjdGlvblNldCA9IF9yZWY3LnNlbGVjdGlvblNldDtcbiAgICByZXR1cm4gKC8vIE5vdGU6IGZyYWdtZW50IHZhcmlhYmxlIGRlZmluaXRpb25zIGFyZSBleHBlcmltZW50YWwgYW5kIG1heSBiZSBjaGFuZ2VkXG4gICAgICAvLyBvciByZW1vdmVkIGluIHRoZSBmdXR1cmUuXG4gICAgICBcImZyYWdtZW50IFwiLmNvbmNhdChuYW1lKS5jb25jYXQod3JhcCgnKCcsIGpvaW4odmFyaWFibGVEZWZpbml0aW9ucywgJywgJyksICcpJyksIFwiIFwiKSArIFwib24gXCIuY29uY2F0KHR5cGVDb25kaXRpb24sIFwiIFwiKS5jb25jYXQod3JhcCgnJywgam9pbihkaXJlY3RpdmVzLCAnICcpLCAnICcpKSArIHNlbGVjdGlvblNldFxuICAgICk7XG4gIH0sXG4gIC8vIFZhbHVlXG4gIEludFZhbHVlOiBmdW5jdGlvbiBJbnRWYWx1ZShfcmVmOCkge1xuICAgIHZhciB2YWx1ZSA9IF9yZWY4LnZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgRmxvYXRWYWx1ZTogZnVuY3Rpb24gRmxvYXRWYWx1ZShfcmVmOSkge1xuICAgIHZhciB2YWx1ZSA9IF9yZWY5LnZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgU3RyaW5nVmFsdWU6IGZ1bmN0aW9uIFN0cmluZ1ZhbHVlKF9yZWYxMCwga2V5KSB7XG4gICAgdmFyIHZhbHVlID0gX3JlZjEwLnZhbHVlLFxuICAgICAgICBpc0Jsb2NrU3RyaW5nID0gX3JlZjEwLmJsb2NrO1xuICAgIHJldHVybiBpc0Jsb2NrU3RyaW5nID8gcHJpbnRCbG9ja1N0cmluZyh2YWx1ZSwga2V5ID09PSAnZGVzY3JpcHRpb24nID8gJycgOiAnICAnKSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgfSxcbiAgQm9vbGVhblZhbHVlOiBmdW5jdGlvbiBCb29sZWFuVmFsdWUoX3JlZjExKSB7XG4gICAgdmFyIHZhbHVlID0gX3JlZjExLnZhbHVlO1xuICAgIHJldHVybiB2YWx1ZSA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gIH0sXG4gIE51bGxWYWx1ZTogZnVuY3Rpb24gTnVsbFZhbHVlKCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH0sXG4gIEVudW1WYWx1ZTogZnVuY3Rpb24gRW51bVZhbHVlKF9yZWYxMikge1xuICAgIHZhciB2YWx1ZSA9IF9yZWYxMi52YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIExpc3RWYWx1ZTogZnVuY3Rpb24gTGlzdFZhbHVlKF9yZWYxMykge1xuICAgIHZhciB2YWx1ZXMgPSBfcmVmMTMudmFsdWVzO1xuICAgIHJldHVybiAnWycgKyBqb2luKHZhbHVlcywgJywgJykgKyAnXSc7XG4gIH0sXG4gIE9iamVjdFZhbHVlOiBmdW5jdGlvbiBPYmplY3RWYWx1ZShfcmVmMTQpIHtcbiAgICB2YXIgZmllbGRzID0gX3JlZjE0LmZpZWxkcztcbiAgICByZXR1cm4gJ3snICsgam9pbihmaWVsZHMsICcsICcpICsgJ30nO1xuICB9LFxuICBPYmplY3RGaWVsZDogZnVuY3Rpb24gT2JqZWN0RmllbGQoX3JlZjE1KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMTUubmFtZSxcbiAgICAgICAgdmFsdWUgPSBfcmVmMTUudmFsdWU7XG4gICAgcmV0dXJuIG5hbWUgKyAnOiAnICsgdmFsdWU7XG4gIH0sXG4gIC8vIERpcmVjdGl2ZVxuICBEaXJlY3RpdmU6IGZ1bmN0aW9uIERpcmVjdGl2ZShfcmVmMTYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYxNi5uYW1lLFxuICAgICAgICBhcmdzID0gX3JlZjE2LmFyZ3VtZW50cztcbiAgICByZXR1cm4gJ0AnICsgbmFtZSArIHdyYXAoJygnLCBqb2luKGFyZ3MsICcsICcpLCAnKScpO1xuICB9LFxuICAvLyBUeXBlXG4gIE5hbWVkVHlwZTogZnVuY3Rpb24gTmFtZWRUeXBlKF9yZWYxNykge1xuICAgIHZhciBuYW1lID0gX3JlZjE3Lm5hbWU7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH0sXG4gIExpc3RUeXBlOiBmdW5jdGlvbiBMaXN0VHlwZShfcmVmMTgpIHtcbiAgICB2YXIgdHlwZSA9IF9yZWYxOC50eXBlO1xuICAgIHJldHVybiAnWycgKyB0eXBlICsgJ10nO1xuICB9LFxuICBOb25OdWxsVHlwZTogZnVuY3Rpb24gTm9uTnVsbFR5cGUoX3JlZjE5KSB7XG4gICAgdmFyIHR5cGUgPSBfcmVmMTkudHlwZTtcbiAgICByZXR1cm4gdHlwZSArICchJztcbiAgfSxcbiAgLy8gVHlwZSBTeXN0ZW0gRGVmaW5pdGlvbnNcbiAgU2NoZW1hRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyMCkge1xuICAgIHZhciBkaXJlY3RpdmVzID0gX3JlZjIwLmRpcmVjdGl2ZXMsXG4gICAgICAgIG9wZXJhdGlvblR5cGVzID0gX3JlZjIwLm9wZXJhdGlvblR5cGVzO1xuICAgIHJldHVybiBqb2luKFsnc2NoZW1hJywgam9pbihkaXJlY3RpdmVzLCAnICcpLCBibG9jayhvcGVyYXRpb25UeXBlcyldLCAnICcpO1xuICB9KSxcbiAgT3BlcmF0aW9uVHlwZURlZmluaXRpb246IGZ1bmN0aW9uIE9wZXJhdGlvblR5cGVEZWZpbml0aW9uKF9yZWYyMSkge1xuICAgIHZhciBvcGVyYXRpb24gPSBfcmVmMjEub3BlcmF0aW9uLFxuICAgICAgICB0eXBlID0gX3JlZjIxLnR5cGU7XG4gICAgcmV0dXJuIG9wZXJhdGlvbiArICc6ICcgKyB0eXBlO1xuICB9LFxuICBTY2FsYXJUeXBlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyMikge1xuICAgIHZhciBuYW1lID0gX3JlZjIyLm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjIuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gam9pbihbJ3NjYWxhcicsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKV0sICcgJyk7XG4gIH0pLFxuICBPYmplY3RUeXBlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyMykge1xuICAgIHZhciBuYW1lID0gX3JlZjIzLm5hbWUsXG4gICAgICAgIGludGVyZmFjZXMgPSBfcmVmMjMuaW50ZXJmYWNlcyxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYyMy5kaXJlY3RpdmVzLFxuICAgICAgICBmaWVsZHMgPSBfcmVmMjMuZmllbGRzO1xuICAgIHJldHVybiBqb2luKFsndHlwZScsIG5hbWUsIHdyYXAoJ2ltcGxlbWVudHMgJywgam9pbihpbnRlcmZhY2VzLCAnICYgJykpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9KSxcbiAgRmllbGREZWZpbml0aW9uOiBhZGREZXNjcmlwdGlvbihmdW5jdGlvbiAoX3JlZjI0KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMjQubmFtZSxcbiAgICAgICAgYXJncyA9IF9yZWYyNC5hcmd1bWVudHMsXG4gICAgICAgIHR5cGUgPSBfcmVmMjQudHlwZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYyNC5kaXJlY3RpdmVzO1xuICAgIHJldHVybiBuYW1lICsgKGhhc011bHRpbGluZUl0ZW1zKGFyZ3MpID8gd3JhcCgnKFxcbicsIGluZGVudChqb2luKGFyZ3MsICdcXG4nKSksICdcXG4pJykgOiB3cmFwKCcoJywgam9pbihhcmdzLCAnLCAnKSwgJyknKSkgKyAnOiAnICsgdHlwZSArIHdyYXAoJyAnLCBqb2luKGRpcmVjdGl2ZXMsICcgJykpO1xuICB9KSxcbiAgSW5wdXRWYWx1ZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMjUpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyNS5uYW1lLFxuICAgICAgICB0eXBlID0gX3JlZjI1LnR5cGUsXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IF9yZWYyNS5kZWZhdWx0VmFsdWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjUuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gam9pbihbbmFtZSArICc6ICcgKyB0eXBlLCB3cmFwKCc9ICcsIGRlZmF1bHRWYWx1ZSksIGpvaW4oZGlyZWN0aXZlcywgJyAnKV0sICcgJyk7XG4gIH0pLFxuICBJbnRlcmZhY2VUeXBlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyNikge1xuICAgIHZhciBuYW1lID0gX3JlZjI2Lm5hbWUsXG4gICAgICAgIGludGVyZmFjZXMgPSBfcmVmMjYuaW50ZXJmYWNlcyxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYyNi5kaXJlY3RpdmVzLFxuICAgICAgICBmaWVsZHMgPSBfcmVmMjYuZmllbGRzO1xuICAgIHJldHVybiBqb2luKFsnaW50ZXJmYWNlJywgbmFtZSwgd3JhcCgnaW1wbGVtZW50cyAnLCBqb2luKGludGVyZmFjZXMsICcgJiAnKSksIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2soZmllbGRzKV0sICcgJyk7XG4gIH0pLFxuICBVbmlvblR5cGVEZWZpbml0aW9uOiBhZGREZXNjcmlwdGlvbihmdW5jdGlvbiAoX3JlZjI3KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMjcubmFtZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYyNy5kaXJlY3RpdmVzLFxuICAgICAgICB0eXBlcyA9IF9yZWYyNy50eXBlcztcbiAgICByZXR1cm4gam9pbihbJ3VuaW9uJywgbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCB0eXBlcyAmJiB0eXBlcy5sZW5ndGggIT09IDAgPyAnPSAnICsgam9pbih0eXBlcywgJyB8ICcpIDogJyddLCAnICcpO1xuICB9KSxcbiAgRW51bVR5cGVEZWZpbml0aW9uOiBhZGREZXNjcmlwdGlvbihmdW5jdGlvbiAoX3JlZjI4KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMjgubmFtZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYyOC5kaXJlY3RpdmVzLFxuICAgICAgICB2YWx1ZXMgPSBfcmVmMjgudmFsdWVzO1xuICAgIHJldHVybiBqb2luKFsnZW51bScsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2sodmFsdWVzKV0sICcgJyk7XG4gIH0pLFxuICBFbnVtVmFsdWVEZWZpbml0aW9uOiBhZGREZXNjcmlwdGlvbihmdW5jdGlvbiAoX3JlZjI5KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMjkubmFtZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYyOS5kaXJlY3RpdmVzO1xuICAgIHJldHVybiBqb2luKFtuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyldLCAnICcpO1xuICB9KSxcbiAgSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYzMCkge1xuICAgIHZhciBuYW1lID0gX3JlZjMwLm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMzAuZGlyZWN0aXZlcyxcbiAgICAgICAgZmllbGRzID0gX3JlZjMwLmZpZWxkcztcbiAgICByZXR1cm4gam9pbihbJ2lucHV0JywgbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCBibG9jayhmaWVsZHMpXSwgJyAnKTtcbiAgfSksXG4gIERpcmVjdGl2ZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMzEpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzMS5uYW1lLFxuICAgICAgICBhcmdzID0gX3JlZjMxLmFyZ3VtZW50cyxcbiAgICAgICAgcmVwZWF0YWJsZSA9IF9yZWYzMS5yZXBlYXRhYmxlLFxuICAgICAgICBsb2NhdGlvbnMgPSBfcmVmMzEubG9jYXRpb25zO1xuICAgIHJldHVybiAnZGlyZWN0aXZlIEAnICsgbmFtZSArIChoYXNNdWx0aWxpbmVJdGVtcyhhcmdzKSA/IHdyYXAoJyhcXG4nLCBpbmRlbnQoam9pbihhcmdzLCAnXFxuJykpLCAnXFxuKScpIDogd3JhcCgnKCcsIGpvaW4oYXJncywgJywgJyksICcpJykpICsgKHJlcGVhdGFibGUgPyAnIHJlcGVhdGFibGUnIDogJycpICsgJyBvbiAnICsgam9pbihsb2NhdGlvbnMsICcgfCAnKTtcbiAgfSksXG4gIFNjaGVtYUV4dGVuc2lvbjogZnVuY3Rpb24gU2NoZW1hRXh0ZW5zaW9uKF9yZWYzMikge1xuICAgIHZhciBkaXJlY3RpdmVzID0gX3JlZjMyLmRpcmVjdGl2ZXMsXG4gICAgICAgIG9wZXJhdGlvblR5cGVzID0gX3JlZjMyLm9wZXJhdGlvblR5cGVzO1xuICAgIHJldHVybiBqb2luKFsnZXh0ZW5kIHNjaGVtYScsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2sob3BlcmF0aW9uVHlwZXMpXSwgJyAnKTtcbiAgfSxcbiAgU2NhbGFyVHlwZUV4dGVuc2lvbjogZnVuY3Rpb24gU2NhbGFyVHlwZUV4dGVuc2lvbihfcmVmMzMpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzMy5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjMzLmRpcmVjdGl2ZXM7XG4gICAgcmV0dXJuIGpvaW4oWydleHRlbmQgc2NhbGFyJywgbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpXSwgJyAnKTtcbiAgfSxcbiAgT2JqZWN0VHlwZUV4dGVuc2lvbjogZnVuY3Rpb24gT2JqZWN0VHlwZUV4dGVuc2lvbihfcmVmMzQpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzNC5uYW1lLFxuICAgICAgICBpbnRlcmZhY2VzID0gX3JlZjM0LmludGVyZmFjZXMsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMzQuZGlyZWN0aXZlcyxcbiAgICAgICAgZmllbGRzID0gX3JlZjM0LmZpZWxkcztcbiAgICByZXR1cm4gam9pbihbJ2V4dGVuZCB0eXBlJywgbmFtZSwgd3JhcCgnaW1wbGVtZW50cyAnLCBqb2luKGludGVyZmFjZXMsICcgJiAnKSksIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2soZmllbGRzKV0sICcgJyk7XG4gIH0sXG4gIEludGVyZmFjZVR5cGVFeHRlbnNpb246IGZ1bmN0aW9uIEludGVyZmFjZVR5cGVFeHRlbnNpb24oX3JlZjM1KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMzUubmFtZSxcbiAgICAgICAgaW50ZXJmYWNlcyA9IF9yZWYzNS5pbnRlcmZhY2VzLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjM1LmRpcmVjdGl2ZXMsXG4gICAgICAgIGZpZWxkcyA9IF9yZWYzNS5maWVsZHM7XG4gICAgcmV0dXJuIGpvaW4oWydleHRlbmQgaW50ZXJmYWNlJywgbmFtZSwgd3JhcCgnaW1wbGVtZW50cyAnLCBqb2luKGludGVyZmFjZXMsICcgJiAnKSksIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2soZmllbGRzKV0sICcgJyk7XG4gIH0sXG4gIFVuaW9uVHlwZUV4dGVuc2lvbjogZnVuY3Rpb24gVW5pb25UeXBlRXh0ZW5zaW9uKF9yZWYzNikge1xuICAgIHZhciBuYW1lID0gX3JlZjM2Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMzYuZGlyZWN0aXZlcyxcbiAgICAgICAgdHlwZXMgPSBfcmVmMzYudHlwZXM7XG4gICAgcmV0dXJuIGpvaW4oWydleHRlbmQgdW5pb24nLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIHR5cGVzICYmIHR5cGVzLmxlbmd0aCAhPT0gMCA/ICc9ICcgKyBqb2luKHR5cGVzLCAnIHwgJykgOiAnJ10sICcgJyk7XG4gIH0sXG4gIEVudW1UeXBlRXh0ZW5zaW9uOiBmdW5jdGlvbiBFbnVtVHlwZUV4dGVuc2lvbihfcmVmMzcpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzNy5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjM3LmRpcmVjdGl2ZXMsXG4gICAgICAgIHZhbHVlcyA9IF9yZWYzNy52YWx1ZXM7XG4gICAgcmV0dXJuIGpvaW4oWydleHRlbmQgZW51bScsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2sodmFsdWVzKV0sICcgJyk7XG4gIH0sXG4gIElucHV0T2JqZWN0VHlwZUV4dGVuc2lvbjogZnVuY3Rpb24gSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uKF9yZWYzOCkge1xuICAgIHZhciBuYW1lID0gX3JlZjM4Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMzguZGlyZWN0aXZlcyxcbiAgICAgICAgZmllbGRzID0gX3JlZjM4LmZpZWxkcztcbiAgICByZXR1cm4gam9pbihbJ2V4dGVuZCBpbnB1dCcsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2soZmllbGRzKV0sICcgJyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGFkZERlc2NyaXB0aW9uKGNiKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobm9kZSkge1xuICAgIHJldHVybiBqb2luKFtub2RlLmRlc2NyaXB0aW9uLCBjYihub2RlKV0sICdcXG4nKTtcbiAgfTtcbn1cbi8qKlxuICogR2l2ZW4gbWF5YmVBcnJheSwgcHJpbnQgYW4gZW1wdHkgc3RyaW5nIGlmIGl0IGlzIG51bGwgb3IgZW1wdHksIG90aGVyd2lzZVxuICogcHJpbnQgYWxsIGl0ZW1zIHRvZ2V0aGVyIHNlcGFyYXRlZCBieSBzZXBhcmF0b3IgaWYgcHJvdmlkZWRcbiAqL1xuXG5cbmZ1bmN0aW9uIGpvaW4obWF5YmVBcnJheSkge1xuICB2YXIgX21heWJlQXJyYXkkZmlsdGVyJGpvO1xuXG4gIHZhciBzZXBhcmF0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuICByZXR1cm4gKF9tYXliZUFycmF5JGZpbHRlciRqbyA9IG1heWJlQXJyYXkgPT09IG51bGwgfHwgbWF5YmVBcnJheSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF5YmVBcnJheS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfSkuam9pbihzZXBhcmF0b3IpKSAhPT0gbnVsbCAmJiBfbWF5YmVBcnJheSRmaWx0ZXIkam8gIT09IHZvaWQgMCA/IF9tYXliZUFycmF5JGZpbHRlciRqbyA6ICcnO1xufVxuLyoqXG4gKiBHaXZlbiBhcnJheSwgcHJpbnQgZWFjaCBpdGVtIG9uIGl0cyBvd24gbGluZSwgd3JhcHBlZCBpbiBhblxuICogaW5kZW50ZWQgXCJ7IH1cIiBibG9jay5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJsb2NrKGFycmF5KSB7XG4gIHJldHVybiB3cmFwKCd7XFxuJywgaW5kZW50KGpvaW4oYXJyYXksICdcXG4nKSksICdcXG59Jyk7XG59XG4vKipcbiAqIElmIG1heWJlU3RyaW5nIGlzIG5vdCBudWxsIG9yIGVtcHR5LCB0aGVuIHdyYXAgd2l0aCBzdGFydCBhbmQgZW5kLCBvdGhlcndpc2UgcHJpbnQgYW4gZW1wdHkgc3RyaW5nLlxuICovXG5cblxuZnVuY3Rpb24gd3JhcChzdGFydCwgbWF5YmVTdHJpbmcpIHtcbiAgdmFyIGVuZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJyc7XG4gIHJldHVybiBtYXliZVN0cmluZyAhPSBudWxsICYmIG1heWJlU3RyaW5nICE9PSAnJyA/IHN0YXJ0ICsgbWF5YmVTdHJpbmcgKyBlbmQgOiAnJztcbn1cblxuZnVuY3Rpb24gaW5kZW50KHN0cikge1xuICByZXR1cm4gd3JhcCgnICAnLCBzdHIucmVwbGFjZSgvXFxuL2csICdcXG4gICcpKTtcbn1cblxuZnVuY3Rpb24gaXNNdWx0aWxpbmUoc3RyKSB7XG4gIHJldHVybiBzdHIuaW5kZXhPZignXFxuJykgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBoYXNNdWx0aWxpbmVJdGVtcyhtYXliZUFycmF5KSB7XG4gIHJldHVybiBtYXliZUFycmF5ICE9IG51bGwgJiYgbWF5YmVBcnJheS5zb21lKGlzTXVsdGlsaW5lKTtcbn1cbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuaW1wb3J0IHsgU1lNQk9MX1RPX1NUUklOR19UQUcgfSBmcm9tIFwiLi4vcG9seWZpbGxzL3N5bWJvbHMubWpzXCI7XG5pbXBvcnQgaW5zcGVjdCBmcm9tIFwiLi4vanN1dGlscy9pbnNwZWN0Lm1qc1wiO1xuaW1wb3J0IGRldkFzc2VydCBmcm9tIFwiLi4vanN1dGlscy9kZXZBc3NlcnQubWpzXCI7XG5pbXBvcnQgaW5zdGFuY2VPZiBmcm9tIFwiLi4vanN1dGlscy9pbnN0YW5jZU9mLm1qc1wiO1xuXG4vKipcbiAqIEEgcmVwcmVzZW50YXRpb24gb2Ygc291cmNlIGlucHV0IHRvIEdyYXBoUUwuIFRoZSBgbmFtZWAgYW5kIGBsb2NhdGlvbk9mZnNldGAgcGFyYW1ldGVycyBhcmVcbiAqIG9wdGlvbmFsLCBidXQgdGhleSBhcmUgdXNlZnVsIGZvciBjbGllbnRzIHdobyBzdG9yZSBHcmFwaFFMIGRvY3VtZW50cyBpbiBzb3VyY2UgZmlsZXMuXG4gKiBGb3IgZXhhbXBsZSwgaWYgdGhlIEdyYXBoUUwgaW5wdXQgc3RhcnRzIGF0IGxpbmUgNDAgaW4gYSBmaWxlIG5hbWVkIGBGb28uZ3JhcGhxbGAsIGl0IG1pZ2h0XG4gKiBiZSB1c2VmdWwgZm9yIGBuYW1lYCB0byBiZSBgXCJGb28uZ3JhcGhxbFwiYCBhbmQgbG9jYXRpb24gdG8gYmUgYHsgbGluZTogNDAsIGNvbHVtbjogMSB9YC5cbiAqIFRoZSBgbGluZWAgYW5kIGBjb2x1bW5gIHByb3BlcnRpZXMgaW4gYGxvY2F0aW9uT2Zmc2V0YCBhcmUgMS1pbmRleGVkLlxuICovXG5leHBvcnQgdmFyIFNvdXJjZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNvdXJjZShib2R5KSB7XG4gICAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdHcmFwaFFMIHJlcXVlc3QnO1xuICAgIHZhciBsb2NhdGlvbk9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge1xuICAgICAgbGluZTogMSxcbiAgICAgIGNvbHVtbjogMVxuICAgIH07XG4gICAgdHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnIHx8IGRldkFzc2VydCgwLCBcIkJvZHkgbXVzdCBiZSBhIHN0cmluZy4gUmVjZWl2ZWQ6IFwiLmNvbmNhdChpbnNwZWN0KGJvZHkpLCBcIi5cIikpO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxvY2F0aW9uT2Zmc2V0ID0gbG9jYXRpb25PZmZzZXQ7XG4gICAgdGhpcy5sb2NhdGlvbk9mZnNldC5saW5lID4gMCB8fCBkZXZBc3NlcnQoMCwgJ2xpbmUgaW4gbG9jYXRpb25PZmZzZXQgaXMgMS1pbmRleGVkIGFuZCBtdXN0IGJlIHBvc2l0aXZlLicpO1xuICAgIHRoaXMubG9jYXRpb25PZmZzZXQuY29sdW1uID4gMCB8fCBkZXZBc3NlcnQoMCwgJ2NvbHVtbiBpbiBsb2NhdGlvbk9mZnNldCBpcyAxLWluZGV4ZWQgYW5kIG11c3QgYmUgcG9zaXRpdmUuJyk7XG4gIH0gLy8gJEZsb3dGaXhNZVt1bnN1cHBvcnRlZC1zeW50YXhdIEZsb3cgZG9lc24ndCBzdXBwb3J0IGNvbXB1dGVkIHByb3BlcnRpZXMgeWV0XG5cblxuICBfY3JlYXRlQ2xhc3MoU291cmNlLCBbe1xuICAgIGtleTogU1lNQk9MX1RPX1NUUklOR19UQUcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gJ1NvdXJjZSc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNvdXJjZTtcbn0oKTtcbi8qKlxuICogVGVzdCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBTb3VyY2Ugb2JqZWN0LlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbmV4cG9ydCBmdW5jdGlvbiBpc1NvdXJjZShzb3VyY2UpIHtcbiAgcmV0dXJuIGluc3RhbmNlT2Yoc291cmNlLCBTb3VyY2UpO1xufVxuIiwiLyoqXG4gKiBBbiBleHBvcnRlZCBlbnVtIGRlc2NyaWJpbmcgdGhlIGRpZmZlcmVudCBraW5kcyBvZiB0b2tlbnMgdGhhdCB0aGVcbiAqIGxleGVyIGVtaXRzLlxuICovXG5leHBvcnQgdmFyIFRva2VuS2luZCA9IE9iamVjdC5mcmVlemUoe1xuICBTT0Y6ICc8U09GPicsXG4gIEVPRjogJzxFT0Y+JyxcbiAgQkFORzogJyEnLFxuICBET0xMQVI6ICckJyxcbiAgQU1QOiAnJicsXG4gIFBBUkVOX0w6ICcoJyxcbiAgUEFSRU5fUjogJyknLFxuICBTUFJFQUQ6ICcuLi4nLFxuICBDT0xPTjogJzonLFxuICBFUVVBTFM6ICc9JyxcbiAgQVQ6ICdAJyxcbiAgQlJBQ0tFVF9MOiAnWycsXG4gIEJSQUNLRVRfUjogJ10nLFxuICBCUkFDRV9MOiAneycsXG4gIFBJUEU6ICd8JyxcbiAgQlJBQ0VfUjogJ30nLFxuICBOQU1FOiAnTmFtZScsXG4gIElOVDogJ0ludCcsXG4gIEZMT0FUOiAnRmxvYXQnLFxuICBTVFJJTkc6ICdTdHJpbmcnLFxuICBCTE9DS19TVFJJTkc6ICdCbG9ja1N0cmluZycsXG4gIENPTU1FTlQ6ICdDb21tZW50J1xufSk7XG4vKipcbiAqIFRoZSBlbnVtIHR5cGUgcmVwcmVzZW50aW5nIHRoZSB0b2tlbiBraW5kcyB2YWx1ZXMuXG4gKi9cbiIsImltcG9ydCBpbnNwZWN0IGZyb20gXCIuLi9qc3V0aWxzL2luc3BlY3QubWpzXCI7XG5pbXBvcnQgeyBpc05vZGUgfSBmcm9tIFwiLi9hc3QubWpzXCI7XG4vKipcbiAqIEEgdmlzaXRvciBpcyBwcm92aWRlZCB0byB2aXNpdCwgaXQgY29udGFpbnMgdGhlIGNvbGxlY3Rpb24gb2ZcbiAqIHJlbGV2YW50IGZ1bmN0aW9ucyB0byBiZSBjYWxsZWQgZHVyaW5nIHRoZSB2aXNpdG9yJ3MgdHJhdmVyc2FsLlxuICovXG5cbmV4cG9ydCB2YXIgUXVlcnlEb2N1bWVudEtleXMgPSB7XG4gIE5hbWU6IFtdLFxuICBEb2N1bWVudDogWydkZWZpbml0aW9ucyddLFxuICBPcGVyYXRpb25EZWZpbml0aW9uOiBbJ25hbWUnLCAndmFyaWFibGVEZWZpbml0aW9ucycsICdkaXJlY3RpdmVzJywgJ3NlbGVjdGlvblNldCddLFxuICBWYXJpYWJsZURlZmluaXRpb246IFsndmFyaWFibGUnLCAndHlwZScsICdkZWZhdWx0VmFsdWUnLCAnZGlyZWN0aXZlcyddLFxuICBWYXJpYWJsZTogWyduYW1lJ10sXG4gIFNlbGVjdGlvblNldDogWydzZWxlY3Rpb25zJ10sXG4gIEZpZWxkOiBbJ2FsaWFzJywgJ25hbWUnLCAnYXJndW1lbnRzJywgJ2RpcmVjdGl2ZXMnLCAnc2VsZWN0aW9uU2V0J10sXG4gIEFyZ3VtZW50OiBbJ25hbWUnLCAndmFsdWUnXSxcbiAgRnJhZ21lbnRTcHJlYWQ6IFsnbmFtZScsICdkaXJlY3RpdmVzJ10sXG4gIElubGluZUZyYWdtZW50OiBbJ3R5cGVDb25kaXRpb24nLCAnZGlyZWN0aXZlcycsICdzZWxlY3Rpb25TZXQnXSxcbiAgRnJhZ21lbnREZWZpbml0aW9uOiBbJ25hbWUnLCAvLyBOb3RlOiBmcmFnbWVudCB2YXJpYWJsZSBkZWZpbml0aW9ucyBhcmUgZXhwZXJpbWVudGFsIGFuZCBtYXkgYmUgY2hhbmdlZFxuICAvLyBvciByZW1vdmVkIGluIHRoZSBmdXR1cmUuXG4gICd2YXJpYWJsZURlZmluaXRpb25zJywgJ3R5cGVDb25kaXRpb24nLCAnZGlyZWN0aXZlcycsICdzZWxlY3Rpb25TZXQnXSxcbiAgSW50VmFsdWU6IFtdLFxuICBGbG9hdFZhbHVlOiBbXSxcbiAgU3RyaW5nVmFsdWU6IFtdLFxuICBCb29sZWFuVmFsdWU6IFtdLFxuICBOdWxsVmFsdWU6IFtdLFxuICBFbnVtVmFsdWU6IFtdLFxuICBMaXN0VmFsdWU6IFsndmFsdWVzJ10sXG4gIE9iamVjdFZhbHVlOiBbJ2ZpZWxkcyddLFxuICBPYmplY3RGaWVsZDogWyduYW1lJywgJ3ZhbHVlJ10sXG4gIERpcmVjdGl2ZTogWyduYW1lJywgJ2FyZ3VtZW50cyddLFxuICBOYW1lZFR5cGU6IFsnbmFtZSddLFxuICBMaXN0VHlwZTogWyd0eXBlJ10sXG4gIE5vbk51bGxUeXBlOiBbJ3R5cGUnXSxcbiAgU2NoZW1hRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICdkaXJlY3RpdmVzJywgJ29wZXJhdGlvblR5cGVzJ10sXG4gIE9wZXJhdGlvblR5cGVEZWZpbml0aW9uOiBbJ3R5cGUnXSxcbiAgU2NhbGFyVHlwZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdkaXJlY3RpdmVzJ10sXG4gIE9iamVjdFR5cGVEZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnaW50ZXJmYWNlcycsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBGaWVsZERlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdhcmd1bWVudHMnLCAndHlwZScsICdkaXJlY3RpdmVzJ10sXG4gIElucHV0VmFsdWVEZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAndHlwZScsICdkZWZhdWx0VmFsdWUnLCAnZGlyZWN0aXZlcyddLFxuICBJbnRlcmZhY2VUeXBlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2ludGVyZmFjZXMnLCAnZGlyZWN0aXZlcycsICdmaWVsZHMnXSxcbiAgVW5pb25UeXBlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2RpcmVjdGl2ZXMnLCAndHlwZXMnXSxcbiAgRW51bVR5cGVEZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnZGlyZWN0aXZlcycsICd2YWx1ZXMnXSxcbiAgRW51bVZhbHVlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2RpcmVjdGl2ZXMnXSxcbiAgSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2RpcmVjdGl2ZXMnLCAnZmllbGRzJ10sXG4gIERpcmVjdGl2ZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdhcmd1bWVudHMnLCAnbG9jYXRpb25zJ10sXG4gIFNjaGVtYUV4dGVuc2lvbjogWydkaXJlY3RpdmVzJywgJ29wZXJhdGlvblR5cGVzJ10sXG4gIFNjYWxhclR5cGVFeHRlbnNpb246IFsnbmFtZScsICdkaXJlY3RpdmVzJ10sXG4gIE9iamVjdFR5cGVFeHRlbnNpb246IFsnbmFtZScsICdpbnRlcmZhY2VzJywgJ2RpcmVjdGl2ZXMnLCAnZmllbGRzJ10sXG4gIEludGVyZmFjZVR5cGVFeHRlbnNpb246IFsnbmFtZScsICdpbnRlcmZhY2VzJywgJ2RpcmVjdGl2ZXMnLCAnZmllbGRzJ10sXG4gIFVuaW9uVHlwZUV4dGVuc2lvbjogWyduYW1lJywgJ2RpcmVjdGl2ZXMnLCAndHlwZXMnXSxcbiAgRW51bVR5cGVFeHRlbnNpb246IFsnbmFtZScsICdkaXJlY3RpdmVzJywgJ3ZhbHVlcyddLFxuICBJbnB1dE9iamVjdFR5cGVFeHRlbnNpb246IFsnbmFtZScsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddXG59O1xuZXhwb3J0IHZhciBCUkVBSyA9IE9iamVjdC5mcmVlemUoe30pO1xuLyoqXG4gKiB2aXNpdCgpIHdpbGwgd2FsayB0aHJvdWdoIGFuIEFTVCB1c2luZyBhIGRlcHRoLWZpcnN0IHRyYXZlcnNhbCwgY2FsbGluZ1xuICogdGhlIHZpc2l0b3IncyBlbnRlciBmdW5jdGlvbiBhdCBlYWNoIG5vZGUgaW4gdGhlIHRyYXZlcnNhbCwgYW5kIGNhbGxpbmcgdGhlXG4gKiBsZWF2ZSBmdW5jdGlvbiBhZnRlciB2aXNpdGluZyB0aGF0IG5vZGUgYW5kIGFsbCBvZiBpdHMgY2hpbGQgbm9kZXMuXG4gKlxuICogQnkgcmV0dXJuaW5nIGRpZmZlcmVudCB2YWx1ZXMgZnJvbSB0aGUgZW50ZXIgYW5kIGxlYXZlIGZ1bmN0aW9ucywgdGhlXG4gKiBiZWhhdmlvciBvZiB0aGUgdmlzaXRvciBjYW4gYmUgYWx0ZXJlZCwgaW5jbHVkaW5nIHNraXBwaW5nIG92ZXIgYSBzdWItdHJlZSBvZlxuICogdGhlIEFTVCAoYnkgcmV0dXJuaW5nIGZhbHNlKSwgZWRpdGluZyB0aGUgQVNUIGJ5IHJldHVybmluZyBhIHZhbHVlIG9yIG51bGxcbiAqIHRvIHJlbW92ZSB0aGUgdmFsdWUsIG9yIHRvIHN0b3AgdGhlIHdob2xlIHRyYXZlcnNhbCBieSByZXR1cm5pbmcgQlJFQUsuXG4gKlxuICogV2hlbiB1c2luZyB2aXNpdCgpIHRvIGVkaXQgYW4gQVNULCB0aGUgb3JpZ2luYWwgQVNUIHdpbGwgbm90IGJlIG1vZGlmaWVkLCBhbmRcbiAqIGEgbmV3IHZlcnNpb24gb2YgdGhlIEFTVCB3aXRoIHRoZSBjaGFuZ2VzIGFwcGxpZWQgd2lsbCBiZSByZXR1cm5lZCBmcm9tIHRoZVxuICogdmlzaXQgZnVuY3Rpb24uXG4gKlxuICogICAgIGNvbnN0IGVkaXRlZEFTVCA9IHZpc2l0KGFzdCwge1xuICogICAgICAgZW50ZXIobm9kZSwga2V5LCBwYXJlbnQsIHBhdGgsIGFuY2VzdG9ycykge1xuICogICAgICAgICAvLyBAcmV0dXJuXG4gKiAgICAgICAgIC8vICAgdW5kZWZpbmVkOiBubyBhY3Rpb25cbiAqICAgICAgICAgLy8gICBmYWxzZTogc2tpcCB2aXNpdGluZyB0aGlzIG5vZGVcbiAqICAgICAgICAgLy8gICB2aXNpdG9yLkJSRUFLOiBzdG9wIHZpc2l0aW5nIGFsdG9nZXRoZXJcbiAqICAgICAgICAgLy8gICBudWxsOiBkZWxldGUgdGhpcyBub2RlXG4gKiAgICAgICAgIC8vICAgYW55IHZhbHVlOiByZXBsYWNlIHRoaXMgbm9kZSB3aXRoIHRoZSByZXR1cm5lZCB2YWx1ZVxuICogICAgICAgfSxcbiAqICAgICAgIGxlYXZlKG5vZGUsIGtleSwgcGFyZW50LCBwYXRoLCBhbmNlc3RvcnMpIHtcbiAqICAgICAgICAgLy8gQHJldHVyblxuICogICAgICAgICAvLyAgIHVuZGVmaW5lZDogbm8gYWN0aW9uXG4gKiAgICAgICAgIC8vICAgZmFsc2U6IG5vIGFjdGlvblxuICogICAgICAgICAvLyAgIHZpc2l0b3IuQlJFQUs6IHN0b3AgdmlzaXRpbmcgYWx0b2dldGhlclxuICogICAgICAgICAvLyAgIG51bGw6IGRlbGV0ZSB0aGlzIG5vZGVcbiAqICAgICAgICAgLy8gICBhbnkgdmFsdWU6IHJlcGxhY2UgdGhpcyBub2RlIHdpdGggdGhlIHJldHVybmVkIHZhbHVlXG4gKiAgICAgICB9XG4gKiAgICAgfSk7XG4gKlxuICogQWx0ZXJuYXRpdmVseSB0byBwcm92aWRpbmcgZW50ZXIoKSBhbmQgbGVhdmUoKSBmdW5jdGlvbnMsIGEgdmlzaXRvciBjYW5cbiAqIGluc3RlYWQgcHJvdmlkZSBmdW5jdGlvbnMgbmFtZWQgdGhlIHNhbWUgYXMgdGhlIGtpbmRzIG9mIEFTVCBub2Rlcywgb3JcbiAqIGVudGVyL2xlYXZlIHZpc2l0b3JzIGF0IGEgbmFtZWQga2V5LCBsZWFkaW5nIHRvIGZvdXIgcGVybXV0YXRpb25zIG9mIHRoZVxuICogdmlzaXRvciBBUEk6XG4gKlxuICogMSkgTmFtZWQgdmlzaXRvcnMgdHJpZ2dlcmVkIHdoZW4gZW50ZXJpbmcgYSBub2RlIG9mIGEgc3BlY2lmaWMga2luZC5cbiAqXG4gKiAgICAgdmlzaXQoYXN0LCB7XG4gKiAgICAgICBLaW5kKG5vZGUpIHtcbiAqICAgICAgICAgLy8gZW50ZXIgdGhlIFwiS2luZFwiIG5vZGVcbiAqICAgICAgIH1cbiAqICAgICB9KVxuICpcbiAqIDIpIE5hbWVkIHZpc2l0b3JzIHRoYXQgdHJpZ2dlciB1cG9uIGVudGVyaW5nIGFuZCBsZWF2aW5nIGEgbm9kZSBvZlxuICogICAgYSBzcGVjaWZpYyBraW5kLlxuICpcbiAqICAgICB2aXNpdChhc3QsIHtcbiAqICAgICAgIEtpbmQ6IHtcbiAqICAgICAgICAgZW50ZXIobm9kZSkge1xuICogICAgICAgICAgIC8vIGVudGVyIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICAgIH1cbiAqICAgICAgICAgbGVhdmUobm9kZSkge1xuICogICAgICAgICAgIC8vIGxlYXZlIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICAgIH1cbiAqICAgICAgIH1cbiAqICAgICB9KVxuICpcbiAqIDMpIEdlbmVyaWMgdmlzaXRvcnMgdGhhdCB0cmlnZ2VyIHVwb24gZW50ZXJpbmcgYW5kIGxlYXZpbmcgYW55IG5vZGUuXG4gKlxuICogICAgIHZpc2l0KGFzdCwge1xuICogICAgICAgZW50ZXIobm9kZSkge1xuICogICAgICAgICAvLyBlbnRlciBhbnkgbm9kZVxuICogICAgICAgfSxcbiAqICAgICAgIGxlYXZlKG5vZGUpIHtcbiAqICAgICAgICAgLy8gbGVhdmUgYW55IG5vZGVcbiAqICAgICAgIH1cbiAqICAgICB9KVxuICpcbiAqIDQpIFBhcmFsbGVsIHZpc2l0b3JzIGZvciBlbnRlcmluZyBhbmQgbGVhdmluZyBub2RlcyBvZiBhIHNwZWNpZmljIGtpbmQuXG4gKlxuICogICAgIHZpc2l0KGFzdCwge1xuICogICAgICAgZW50ZXI6IHtcbiAqICAgICAgICAgS2luZChub2RlKSB7XG4gKiAgICAgICAgICAgLy8gZW50ZXIgdGhlIFwiS2luZFwiIG5vZGVcbiAqICAgICAgICAgfVxuICogICAgICAgfSxcbiAqICAgICAgIGxlYXZlOiB7XG4gKiAgICAgICAgIEtpbmQobm9kZSkge1xuICogICAgICAgICAgIC8vIGxlYXZlIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICAgIH1cbiAqICAgICAgIH1cbiAqICAgICB9KVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdChyb290LCB2aXNpdG9yKSB7XG4gIHZhciB2aXNpdG9yS2V5cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogUXVlcnlEb2N1bWVudEtleXM7XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYtaW5pdCAqL1xuICB2YXIgc3RhY2sgPSB1bmRlZmluZWQ7XG4gIHZhciBpbkFycmF5ID0gQXJyYXkuaXNBcnJheShyb290KTtcbiAgdmFyIGtleXMgPSBbcm9vdF07XG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgZWRpdHMgPSBbXTtcbiAgdmFyIG5vZGUgPSB1bmRlZmluZWQ7XG4gIHZhciBrZXkgPSB1bmRlZmluZWQ7XG4gIHZhciBwYXJlbnQgPSB1bmRlZmluZWQ7XG4gIHZhciBwYXRoID0gW107XG4gIHZhciBhbmNlc3RvcnMgPSBbXTtcbiAgdmFyIG5ld1Jvb3QgPSByb290O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmLWluaXQgKi9cblxuICBkbyB7XG4gICAgaW5kZXgrKztcbiAgICB2YXIgaXNMZWF2aW5nID0gaW5kZXggPT09IGtleXMubGVuZ3RoO1xuICAgIHZhciBpc0VkaXRlZCA9IGlzTGVhdmluZyAmJiBlZGl0cy5sZW5ndGggIT09IDA7XG5cbiAgICBpZiAoaXNMZWF2aW5nKSB7XG4gICAgICBrZXkgPSBhbmNlc3RvcnMubGVuZ3RoID09PSAwID8gdW5kZWZpbmVkIDogcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGFuY2VzdG9ycy5wb3AoKTtcblxuICAgICAgaWYgKGlzRWRpdGVkKSB7XG4gICAgICAgIGlmIChpbkFycmF5KSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGUuc2xpY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgY2xvbmUgPSB7fTtcblxuICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9PYmplY3Qka2V5czIgPSBPYmplY3Qua2V5cyhub2RlKTsgX2kyIDwgX09iamVjdCRrZXlzMi5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgICB2YXIgayA9IF9PYmplY3Qka2V5czJbX2kyXTtcbiAgICAgICAgICAgIGNsb25lW2tdID0gbm9kZVtrXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBub2RlID0gY2xvbmU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWRpdE9mZnNldCA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGVkaXRzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICAgIHZhciBlZGl0S2V5ID0gZWRpdHNbaWldWzBdO1xuICAgICAgICAgIHZhciBlZGl0VmFsdWUgPSBlZGl0c1tpaV1bMV07XG5cbiAgICAgICAgICBpZiAoaW5BcnJheSkge1xuICAgICAgICAgICAgZWRpdEtleSAtPSBlZGl0T2Zmc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbkFycmF5ICYmIGVkaXRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5zcGxpY2UoZWRpdEtleSwgMSk7XG4gICAgICAgICAgICBlZGl0T2Zmc2V0Kys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVbZWRpdEtleV0gPSBlZGl0VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGluZGV4ID0gc3RhY2suaW5kZXg7XG4gICAgICBrZXlzID0gc3RhY2sua2V5cztcbiAgICAgIGVkaXRzID0gc3RhY2suZWRpdHM7XG4gICAgICBpbkFycmF5ID0gc3RhY2suaW5BcnJheTtcbiAgICAgIHN0YWNrID0gc3RhY2sucHJldjtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gcGFyZW50ID8gaW5BcnJheSA/IGluZGV4IDoga2V5c1tpbmRleF0gOiB1bmRlZmluZWQ7XG4gICAgICBub2RlID0gcGFyZW50ID8gcGFyZW50W2tleV0gOiBuZXdSb290O1xuXG4gICAgICBpZiAobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgcGF0aC5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHZvaWQgMDtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgaWYgKCFpc05vZGUobm9kZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBBU1QgTm9kZTogXCIuY29uY2F0KGluc3BlY3Qobm9kZSksIFwiLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciB2aXNpdEZuID0gZ2V0VmlzaXRGbih2aXNpdG9yLCBub2RlLmtpbmQsIGlzTGVhdmluZyk7XG5cbiAgICAgIGlmICh2aXNpdEZuKSB7XG4gICAgICAgIHJlc3VsdCA9IHZpc2l0Rm4uY2FsbCh2aXNpdG9yLCBub2RlLCBrZXksIHBhcmVudCwgcGF0aCwgYW5jZXN0b3JzKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBCUkVBSykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpZiAoIWlzTGVhdmluZykge1xuICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVkaXRzLnB1c2goW2tleSwgcmVzdWx0XSk7XG5cbiAgICAgICAgICBpZiAoIWlzTGVhdmluZykge1xuICAgICAgICAgICAgaWYgKGlzTm9kZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgIG5vZGUgPSByZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXRoLnBvcCgpO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQgJiYgaXNFZGl0ZWQpIHtcbiAgICAgIGVkaXRzLnB1c2goW2tleSwgbm9kZV0pO1xuICAgIH1cblxuICAgIGlmIChpc0xlYXZpbmcpIHtcbiAgICAgIHBhdGgucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfdmlzaXRvcktleXMkbm9kZSRraW47XG5cbiAgICAgIHN0YWNrID0ge1xuICAgICAgICBpbkFycmF5OiBpbkFycmF5LFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGtleXM6IGtleXMsXG4gICAgICAgIGVkaXRzOiBlZGl0cyxcbiAgICAgICAgcHJldjogc3RhY2tcbiAgICAgIH07XG4gICAgICBpbkFycmF5ID0gQXJyYXkuaXNBcnJheShub2RlKTtcbiAgICAgIGtleXMgPSBpbkFycmF5ID8gbm9kZSA6IChfdmlzaXRvcktleXMkbm9kZSRraW4gPSB2aXNpdG9yS2V5c1tub2RlLmtpbmRdKSAhPT0gbnVsbCAmJiBfdmlzaXRvcktleXMkbm9kZSRraW4gIT09IHZvaWQgMCA/IF92aXNpdG9yS2V5cyRub2RlJGtpbiA6IFtdO1xuICAgICAgaW5kZXggPSAtMTtcbiAgICAgIGVkaXRzID0gW107XG5cbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgYW5jZXN0b3JzLnB1c2gocGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50ID0gbm9kZTtcbiAgICB9XG4gIH0gd2hpbGUgKHN0YWNrICE9PSB1bmRlZmluZWQpO1xuXG4gIGlmIChlZGl0cy5sZW5ndGggIT09IDApIHtcbiAgICBuZXdSb290ID0gZWRpdHNbZWRpdHMubGVuZ3RoIC0gMV1bMV07XG4gIH1cblxuICByZXR1cm4gbmV3Um9vdDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2aXNpdG9yIGluc3RhbmNlIHdoaWNoIGRlbGVnYXRlcyB0byBtYW55IHZpc2l0b3JzIHRvIHJ1biBpblxuICogcGFyYWxsZWwuIEVhY2ggdmlzaXRvciB3aWxsIGJlIHZpc2l0ZWQgZm9yIGVhY2ggbm9kZSBiZWZvcmUgbW92aW5nIG9uLlxuICpcbiAqIElmIGEgcHJpb3IgdmlzaXRvciBlZGl0cyBhIG5vZGUsIG5vIGZvbGxvd2luZyB2aXNpdG9ycyB3aWxsIHNlZSB0aGF0IG5vZGUuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHZpc2l0SW5QYXJhbGxlbCh2aXNpdG9ycykge1xuICB2YXIgc2tpcHBpbmcgPSBuZXcgQXJyYXkodmlzaXRvcnMubGVuZ3RoKTtcbiAgcmV0dXJuIHtcbiAgICBlbnRlcjogZnVuY3Rpb24gZW50ZXIobm9kZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aXNpdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2tpcHBpbmdbaV0gPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBmbiA9IGdldFZpc2l0Rm4odmlzaXRvcnNbaV0sIG5vZGUua2luZCxcbiAgICAgICAgICAvKiBpc0xlYXZpbmcgKi9cbiAgICAgICAgICBmYWxzZSk7XG5cbiAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmbi5hcHBseSh2aXNpdG9yc1tpXSwgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgc2tpcHBpbmdbaV0gPSBub2RlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IEJSRUFLKSB7XG4gICAgICAgICAgICAgIHNraXBwaW5nW2ldID0gQlJFQUs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsZWF2ZTogZnVuY3Rpb24gbGVhdmUobm9kZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aXNpdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2tpcHBpbmdbaV0gPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBmbiA9IGdldFZpc2l0Rm4odmlzaXRvcnNbaV0sIG5vZGUua2luZCxcbiAgICAgICAgICAvKiBpc0xlYXZpbmcgKi9cbiAgICAgICAgICB0cnVlKTtcblxuICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZuLmFwcGx5KHZpc2l0b3JzW2ldLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBCUkVBSykge1xuICAgICAgICAgICAgICBza2lwcGluZ1tpXSA9IEJSRUFLO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNraXBwaW5nW2ldID09PSBub2RlKSB7XG4gICAgICAgICAgc2tpcHBpbmdbaV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuLyoqXG4gKiBHaXZlbiBhIHZpc2l0b3IgaW5zdGFuY2UsIGlmIGl0IGlzIGxlYXZpbmcgb3Igbm90LCBhbmQgYSBub2RlIGtpbmQsIHJldHVyblxuICogdGhlIGZ1bmN0aW9uIHRoZSB2aXNpdG9yIHJ1bnRpbWUgc2hvdWxkIGNhbGwuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpc2l0Rm4odmlzaXRvciwga2luZCwgaXNMZWF2aW5nKSB7XG4gIHZhciBraW5kVmlzaXRvciA9IHZpc2l0b3Jba2luZF07XG5cbiAgaWYgKGtpbmRWaXNpdG9yKSB7XG4gICAgaWYgKCFpc0xlYXZpbmcgJiYgdHlwZW9mIGtpbmRWaXNpdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyB7IEtpbmQoKSB7fSB9XG4gICAgICByZXR1cm4ga2luZFZpc2l0b3I7XG4gICAgfVxuXG4gICAgdmFyIGtpbmRTcGVjaWZpY1Zpc2l0b3IgPSBpc0xlYXZpbmcgPyBraW5kVmlzaXRvci5sZWF2ZSA6IGtpbmRWaXNpdG9yLmVudGVyO1xuXG4gICAgaWYgKHR5cGVvZiBraW5kU3BlY2lmaWNWaXNpdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyB7IEtpbmQ6IHsgZW50ZXIoKSB7fSwgbGVhdmUoKSB7fSB9IH1cbiAgICAgIHJldHVybiBraW5kU3BlY2lmaWNWaXNpdG9yO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgc3BlY2lmaWNWaXNpdG9yID0gaXNMZWF2aW5nID8gdmlzaXRvci5sZWF2ZSA6IHZpc2l0b3IuZW50ZXI7XG5cbiAgICBpZiAoc3BlY2lmaWNWaXNpdG9yKSB7XG4gICAgICBpZiAodHlwZW9mIHNwZWNpZmljVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyB7IGVudGVyKCkge30sIGxlYXZlKCkge30gfVxuICAgICAgICByZXR1cm4gc3BlY2lmaWNWaXNpdG9yO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3BlY2lmaWNLaW5kVmlzaXRvciA9IHNwZWNpZmljVmlzaXRvcltraW5kXTtcblxuICAgICAgaWYgKHR5cGVvZiBzcGVjaWZpY0tpbmRWaXNpdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIHsgZW50ZXI6IHsgS2luZCgpIHt9IH0sIGxlYXZlOiB7IEtpbmQoKSB7fSB9IH1cbiAgICAgICAgcmV0dXJuIHNwZWNpZmljS2luZFZpc2l0b3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBJbiBFUzIwMTUgKG9yIGEgcG9seWZpbGxlZCkgZW52aXJvbm1lbnQsIHRoaXMgd2lsbCBiZSBTeW1ib2wuaXRlcmF0b3Jcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcbmV4cG9ydCB2YXIgU1lNQk9MX0lURVJBVE9SID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3IgIT0gbnVsbCA/IFN5bWJvbC5pdGVyYXRvciA6ICdAQGl0ZXJhdG9yJzsgLy8gSW4gRVMyMDE3IChvciBhIHBvbHlmaWxsZWQpIGVudmlyb25tZW50LCB0aGlzIHdpbGwgYmUgU3ltYm9sLmFzeW5jSXRlcmF0b3Jcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcblxuZXhwb3J0IHZhciBTWU1CT0xfQVNZTkNfSVRFUkFUT1IgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yICE9IG51bGwgPyBTeW1ib2wuYXN5bmNJdGVyYXRvciA6ICdAQGFzeW5jSXRlcmF0b3InOyAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5cbmV4cG9ydCB2YXIgU1lNQk9MX1RPX1NUUklOR19UQUcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZyAhPSBudWxsID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogJ0BAdG9TdHJpbmdUYWcnO1xuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIHJldHVybiAoX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHZhciBpLCBzb3VyY2UsIGtleTtcbiAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uKHF1ZXJ5KSB7XG4gIGZ1bmN0aW9uIF9yZWYocmVzdWx0KSB7XG4gICAgaWYgKGlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGZldGNoaW5nOiAhMSxcbiAgICAgICAgc3RhbGU6ICEhcmVzdWx0LnN0YWxlLFxuICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgZXJyb3I6IHJlc3VsdC5lcnJvcixcbiAgICAgICAgZXh0ZW5zaW9uczogcmVzdWx0LmV4dGVuc2lvbnMsXG4gICAgICAgIG9wZXJhdGlvbjogcmVzdWx0Lm9wZXJhdGlvblxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gX3JlZjIoKSB7XG4gICAgaXNNb3VudGVkLmN1cnJlbnQgPSAhMTtcbiAgfVxuICB2YXIgaXNNb3VudGVkID0gdXNlUmVmKCEwKSwgY2xpZW50ID0gdXNlQ2xpZW50KCksIHJlZiA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSksIHN0YXRlID0gcmVmWzBdLCBzZXRTdGF0ZSA9IHJlZlsxXSwgZXhlY3V0ZU11dGF0aW9uID0gdXNlQ2FsbGJhY2soKGZ1bmN0aW9uKHZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIHNldFN0YXRlKF9leHRlbmRzKHt9LCBpbml0aWFsU3RhdGUsIHtcbiAgICAgIGZldGNoaW5nOiAhMFxuICAgIH0pKTtcbiAgICByZXR1cm4gdG9Qcm9taXNlKGNsaWVudC5leGVjdXRlTXV0YXRpb24oY3JlYXRlUmVxdWVzdChxdWVyeSwgdmFyaWFibGVzKSwgY29udGV4dCB8fCB7fSkpLnRoZW4oX3JlZik7XG4gIH0pLCBbIGNsaWVudCwgcXVlcnksIHNldFN0YXRlIF0pO1xuICB1c2VFZmZlY3QoKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcmVmMjtcbiAgfSksIFtdKTtcbiAgcmV0dXJuIFsgc3RhdGUsIGV4ZWN1dGVNdXRhdGlvbiBdO1xufVxuXG5mdW5jdGlvbiB1c2VTb3VyY2UoaW5wdXQsIHRyYW5zZm9ybSkge1xuICBmdW5jdGlvbiBfcmVmKCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICBmdW5jdGlvbiBfcmVmMyh2YWx1ZSkge1xuICAgIGlmICghY3VycmVudEluaXQpIHtcbiAgICAgIHNldFN0YXRlKChmdW5jdGlvbiBfcmVmMihwcmV2VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlzU2hhbGxvd0RpZmZlcmVudChwcmV2VmFsdWUsIHZhbHVlKSA/IHZhbHVlIDogcHJldlZhbHVlO1xuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuICB2YXIgcmVmID0gdXNlTWVtbygoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN1YmplY3QgPSBtYWtlU3ViamVjdCgpLCBzb3VyY2UgPSBjb25jYXQoWyBtYXAoX3JlZikoZnJvbVZhbHVlKGlucHV0KSksIHN1YmplY3Quc291cmNlIF0pLCB1cGRhdGVJbnB1dCA9IGZ1bmN0aW9uKG5leHRJbnB1dCkge1xuICAgICAgdmFyIHByZXZJbnB1dCA9IGlucHV0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKG5leHRJbnB1dCAhPT0gcHJldklucHV0KSB7XG4gICAgICAgICAgc3ViamVjdC5uZXh0KGlucHV0ID0gbmV4dElucHV0KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaW5wdXQgPSBwcmV2SW5wdXQ7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFsgc291cmNlLCB1cGRhdGVJbnB1dCBdO1xuICB9KSwgW10pLCBpbnB1dCQgPSByZWZbMF0sIHVwZGF0ZUlucHV0ID0gcmVmWzFdLCByZWYkMSA9IHVzZVN0YXRlKChmdW5jdGlvbigpIHtcbiAgICBjdXJyZW50SW5pdCA9ICEwO1xuICAgIHZhciBzdGF0ZTtcbiAgICBzdWJzY3JpYmUoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBzdGF0ZSA9IHZhbHVlO1xuICAgIH0pKSh0cmFuc2Zvcm0oaW5wdXQkKSkudW5zdWJzY3JpYmUoKTtcbiAgICBjdXJyZW50SW5pdCA9ICExO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfSkpLCBzdGF0ZSA9IHJlZiQxWzBdLCBzZXRTdGF0ZSA9IHJlZiQxWzFdO1xuICB1c2VFZmZlY3QoKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzdWJzY3JpYmUoX3JlZjMpKHRyYW5zZm9ybShpbnB1dCQsIHN0YXRlKSkudW5zdWJzY3JpYmU7XG4gIH0pLCBbIGlucHV0JCBdKTtcbiAgcmV0dXJuIFsgc3RhdGUsIHVwZGF0ZUlucHV0IF07XG59XG5cbmZ1bmN0aW9uIHVzZVJlcXVlc3QocXVlcnksIHZhcmlhYmxlcykge1xuICB2YXIgcHJldiA9IHVzZVJlZih2b2lkIDApO1xuICByZXR1cm4gdXNlTWVtbygoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBjcmVhdGVSZXF1ZXN0KHF1ZXJ5LCB2YXJpYWJsZXMpO1xuICAgIGlmICh2b2lkIDAgIT09IHByZXYuY3VycmVudCAmJiBwcmV2LmN1cnJlbnQua2V5ID09PSByZXF1ZXN0LmtleSkge1xuICAgICAgcmV0dXJuIHByZXYuY3VycmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJldi5jdXJyZW50ID0gcmVxdWVzdDtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH1cbiAgfSksIFsgcXVlcnksIHZhcmlhYmxlcyBdKTtcbn1cblxuZnVuY3Rpb24gX3JlZjIocmVzdWx0LCBwYXJ0aWFsKSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVzdWx0LCBwYXJ0aWFsKTtcbn1cblxuZnVuY3Rpb24gX3JlZjMocmVmKSB7XG4gIHZhciBzdGFsZSA9IHJlZi5zdGFsZSwgZGF0YSA9IHJlZi5kYXRhLCBlcnJvciA9IHJlZi5lcnJvciwgZXh0ZW5zaW9ucyA9IHJlZi5leHRlbnNpb25zLCBvcGVyYXRpb24gPSByZWYub3BlcmF0aW9uO1xuICByZXR1cm4ge1xuICAgIGZldGNoaW5nOiAhMSxcbiAgICBzdGFsZTogISFzdGFsZSxcbiAgICBkYXRhOiBkYXRhLFxuICAgIGVycm9yOiBlcnJvcixcbiAgICBvcGVyYXRpb246IG9wZXJhdGlvbixcbiAgICBleHRlbnNpb25zOiBleHRlbnNpb25zXG4gIH07XG59XG5cbmZ1bmN0aW9uIF9yZWY0KHF1ZXJ5JCkge1xuICBpZiAoIXF1ZXJ5JCkge1xuICAgIHJldHVybiBmcm9tVmFsdWUoe1xuICAgICAgZmV0Y2hpbmc6ICExLFxuICAgICAgc3RhbGU6ICExXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNvbmNhdChbIGZyb21WYWx1ZSh7XG4gICAgZmV0Y2hpbmc6ICEwLFxuICAgIHN0YWxlOiAhMVxuICB9KSwgbWFwKF9yZWYzKShxdWVyeSQpLCBmcm9tVmFsdWUoe1xuICAgIGZldGNoaW5nOiAhMSxcbiAgICBzdGFsZTogITFcbiAgfSkgXSk7XG59XG5cbmZ1bmN0aW9uIF9yZWY1KHF1ZXJ5JCQsIHByZXZTdGF0ZSkge1xuICByZXR1cm4gc2NhbihfcmVmMiwgcHJldlN0YXRlIHx8IGluaXRpYWxTdGF0ZSkoc3dpdGNoTWFwKF9yZWY0KShxdWVyeSQkKSk7XG59XG5cbmZ1bmN0aW9uIHVzZVF1ZXJ5KGFyZ3MpIHtcbiAgdmFyIGNsaWVudCA9IHVzZUNsaWVudCgpLCByZXF1ZXN0ID0gdXNlUmVxdWVzdChhcmdzLnF1ZXJ5LCBhcmdzLnZhcmlhYmxlcyksIG1ha2VRdWVyeSQgPSB1c2VDYWxsYmFjaygoZnVuY3Rpb24ob3B0cykge1xuICAgIHZhciBzdXNwZW5zZSA9IGlzU3VzcGVuc2UoY2xpZW50LCBhcmdzLmNvbnRleHQpLCBzb3VyY2UgPSBzdXNwZW5zZSA/IHNvdXJjZXMuZ2V0KHJlcXVlc3Qua2V5KSA6IHZvaWQgMDtcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgc291cmNlID0gY2xpZW50LmV4ZWN1dGVRdWVyeShyZXF1ZXN0LCBfZXh0ZW5kcyh7fSwge1xuICAgICAgICByZXF1ZXN0UG9saWN5OiBhcmdzLnJlcXVlc3RQb2xpY3ksXG4gICAgICAgIHBvbGxJbnRlcnZhbDogYXJncy5wb2xsSW50ZXJ2YWxcbiAgICAgIH0sIGFyZ3MuY29udGV4dCwgb3B0cykpO1xuICAgICAgaWYgKHN1c3BlbnNlKSB7XG4gICAgICAgIHNvdXJjZSA9IGZ1bmN0aW9uIHRvU3VzcGVuc2VTb3VyY2Uoc291cmNlKSB7XG4gICAgICAgICAgZnVuY3Rpb24gX3JlZihfcmVzb2x2ZSkge1xuICAgICAgICAgICAgcmVzb2x2ZSA9IF9yZXNvbHZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgY2FjaGUsIHJlc29sdmUsIHNoYXJlZCA9IHNoYXJlKHNvdXJjZSk7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNpbmspIHtcbiAgICAgICAgICAgIHZhciBzaWduYWwsIGhhc1N1c3BlbmRlZCA9ICExO1xuICAgICAgICAgICAgdGFrZVdoaWxlKChmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gY2FjaGUpIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKHJlc29sdmUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhY2hlID0gcmVzdWx0O1xuICAgICAgICAgICAgICByZXR1cm4gIWhhc1N1c3BlbmRlZDtcbiAgICAgICAgICAgIH0pKShzaGFyZWQpKHNpbmspO1xuICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gY2FjaGUpIHtcbiAgICAgICAgICAgICAgKHNpZ25hbCA9IFsgY2FjaGUgXSkudGFnID0gMTtcbiAgICAgICAgICAgICAgc2luayhzaWduYWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGFzU3VzcGVuZGVkID0gITA7XG4gICAgICAgICAgICAgIHNpbmsoMCk7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBQcm9taXNlKF9yZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0oc291cmNlKTtcbiAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdykge1xuICAgICAgICAgIHNvdXJjZXMuc2V0KHJlcXVlc3Qua2V5LCBzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH0pLCBbIGNsaWVudCwgcmVxdWVzdCwgYXJncy5yZXF1ZXN0UG9saWN5LCBhcmdzLnBvbGxJbnRlcnZhbCwgYXJncy5jb250ZXh0IF0pLCBxdWVyeSQgPSB1c2VNZW1vKChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJncy5wYXVzZSA/IG51bGwgOiBtYWtlUXVlcnkkKCk7XG4gIH0pLCBbIGFyZ3MucGF1c2UsIG1ha2VRdWVyeSQgXSksIHJlZiA9IHVzZVNvdXJjZShxdWVyeSQsIHVzZUNhbGxiYWNrKF9yZWY1LCBbXSkpLCBzdGF0ZSA9IHJlZlswXSwgdXBkYXRlID0gcmVmWzFdLCBleGVjdXRlUXVlcnkgPSB1c2VDYWxsYmFjaygoZnVuY3Rpb24ob3B0cykge1xuICAgIHVwZGF0ZShtYWtlUXVlcnkkKF9leHRlbmRzKHt9LCB7XG4gICAgICBzdXNwZW5zZTogITFcbiAgICB9LCBvcHRzKSkpO1xuICB9KSwgWyB1cGRhdGUsIG1ha2VRdWVyeSQgXSk7XG4gIHVzZUVmZmVjdCgoZnVuY3Rpb24oKSB7XG4gICAgc291cmNlcy5kZWxldGUocmVxdWVzdC5rZXkpO1xuICAgIGlmICghaXNTdXNwZW5zZShjbGllbnQsIGFyZ3MuY29udGV4dCkpIHtcbiAgICAgIHVwZGF0ZShxdWVyeSQpO1xuICAgIH1cbiAgfSksIFsgdXBkYXRlLCBjbGllbnQsIHF1ZXJ5JCwgcmVxdWVzdCwgYXJncy5jb250ZXh0IF0pO1xuICBpZiAoaXNTdXNwZW5zZShjbGllbnQsIGFyZ3MuY29udGV4dCkpIHtcbiAgICB1cGRhdGUocXVlcnkkKTtcbiAgfVxuICByZXR1cm4gWyBzdGF0ZSwgZXhlY3V0ZVF1ZXJ5IF07XG59XG5cbmZ1bmN0aW9uIF9yZWYyJDEocmVmKSB7XG4gIHZhciBzdGFsZSA9IHJlZi5zdGFsZSwgZGF0YSA9IHJlZi5kYXRhLCBlcnJvciA9IHJlZi5lcnJvciwgZXh0ZW5zaW9ucyA9IHJlZi5leHRlbnNpb25zLCBvcGVyYXRpb24gPSByZWYub3BlcmF0aW9uO1xuICByZXR1cm4ge1xuICAgIGZldGNoaW5nOiAhMCxcbiAgICBzdGFsZTogISFzdGFsZSxcbiAgICBkYXRhOiBkYXRhLFxuICAgIGVycm9yOiBlcnJvcixcbiAgICBleHRlbnNpb25zOiBleHRlbnNpb25zLFxuICAgIG9wZXJhdGlvbjogb3BlcmF0aW9uXG4gIH07XG59XG5cbmZ1bmN0aW9uIF9yZWYzJDEoc3Vic2NyaXB0aW9uJCkge1xuICBpZiAoIXN1YnNjcmlwdGlvbiQpIHtcbiAgICByZXR1cm4gZnJvbVZhbHVlKHtcbiAgICAgIGZldGNoaW5nOiAhMVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBjb25jYXQoWyBmcm9tVmFsdWUoe1xuICAgIGZldGNoaW5nOiAhMCxcbiAgICBzdGFsZTogITFcbiAgfSksIG1hcChfcmVmMiQxKShzdWJzY3JpcHRpb24kKSwgZnJvbVZhbHVlKHtcbiAgICBmZXRjaGluZzogITEsXG4gICAgc3RhbGU6ICExXG4gIH0pIF0pO1xufVxuXG5mdW5jdGlvbiB1c2VTdWJzY3JpcHRpb24oYXJncywgaGFuZGxlcikge1xuICBmdW5jdGlvbiBfcmVmKHJlc3VsdCwgcGFydGlhbCkge1xuICAgIHZhciBoYW5kbGVyID0gaGFuZGxlclJlZi5jdXJyZW50LCBkYXRhID0gdm9pZCAwICE9PSBwYXJ0aWFsLmRhdGEgPyBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGhhbmRsZXIgPyBoYW5kbGVyKHJlc3VsdC5kYXRhLCBwYXJ0aWFsLmRhdGEpIDogcGFydGlhbC5kYXRhIDogcmVzdWx0LmRhdGE7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN1bHQsIHBhcnRpYWwsIHtcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfVxuICB2YXIgcmVxdWVzdCwgbWFrZVN1YnNjcmlwdGlvbiQsIHN1YnNjcmlwdGlvbiQsIHJlZiwgc3RhdGUsIHVwZGF0ZSwgZXhlY3V0ZVN1YnNjcmlwdGlvbiwgY2xpZW50ID0gdXNlQ2xpZW50KCksIGhhbmRsZXJSZWYgPSB1c2VSZWYoaGFuZGxlcik7XG4gIGhhbmRsZXJSZWYuY3VycmVudCA9IGhhbmRsZXI7XG4gIHJlcXVlc3QgPSB1c2VSZXF1ZXN0KGFyZ3MucXVlcnksIGFyZ3MudmFyaWFibGVzKTtcbiAgbWFrZVN1YnNjcmlwdGlvbiQgPSB1c2VDYWxsYmFjaygoZnVuY3Rpb24ob3B0cykge1xuICAgIHJldHVybiBjbGllbnQuZXhlY3V0ZVN1YnNjcmlwdGlvbihyZXF1ZXN0LCBfZXh0ZW5kcyh7fSwgYXJncy5jb250ZXh0LCBvcHRzKSk7XG4gIH0pLCBbIGNsaWVudCwgcmVxdWVzdCwgYXJncy5jb250ZXh0IF0pO1xuICBzdGF0ZSA9IChyZWYgPSB1c2VTb3VyY2Uoc3Vic2NyaXB0aW9uJCA9IHVzZU1lbW8oKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhcmdzLnBhdXNlID8gbnVsbCA6IG1ha2VTdWJzY3JpcHRpb24kKCk7XG4gIH0pLCBbIGFyZ3MucGF1c2UsIG1ha2VTdWJzY3JpcHRpb24kIF0pLCB1c2VDYWxsYmFjaygoZnVuY3Rpb24oc3Vic2NyaXB0aW9uJCQsIHByZXZTdGF0ZSkge1xuICAgIHJldHVybiBzY2FuKF9yZWYsIHByZXZTdGF0ZSB8fCBpbml0aWFsU3RhdGUpKHN3aXRjaE1hcChfcmVmMyQxKShzdWJzY3JpcHRpb24kJCkpO1xuICB9KSwgW10pKSlbMF07XG4gIGV4ZWN1dGVTdWJzY3JpcHRpb24gPSB1c2VDYWxsYmFjaygoZnVuY3Rpb24ob3B0cykge1xuICAgIHJldHVybiB1cGRhdGUobWFrZVN1YnNjcmlwdGlvbiQob3B0cykpO1xuICB9KSwgWyB1cGRhdGUgPSByZWZbMV0sIG1ha2VTdWJzY3JpcHRpb24kIF0pO1xuICB1c2VFZmZlY3QoKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZShzdWJzY3JpcHRpb24kKTtcbiAgfSksIFsgdXBkYXRlLCBzdWJzY3JpcHRpb24kIF0pO1xuICByZXR1cm4gWyBzdGF0ZSwgZXhlY3V0ZVN1YnNjcmlwdGlvbiBdO1xufVxuXG5mdW5jdGlvbiBNdXRhdGlvbihwcm9wcykge1xuICB2YXIgbXV0YXRpb24gPSB1c2VNdXRhdGlvbihwcm9wcy5xdWVyeSk7XG4gIHJldHVybiBwcm9wcy5jaGlsZHJlbihfZXh0ZW5kcyh7fSwgbXV0YXRpb25bMF0sIHtcbiAgICBleGVjdXRlTXV0YXRpb246IG11dGF0aW9uWzFdXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gUXVlcnkocHJvcHMpIHtcbiAgdmFyIHF1ZXJ5ID0gdXNlUXVlcnkocHJvcHMpO1xuICByZXR1cm4gcHJvcHMuY2hpbGRyZW4oX2V4dGVuZHMoe30sIHF1ZXJ5WzBdLCB7XG4gICAgZXhlY3V0ZVF1ZXJ5OiBxdWVyeVsxXVxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIFN1YnNjcmlwdGlvbihwcm9wcykge1xuICB2YXIgc3Vic2NyaXB0aW9uID0gdXNlU3Vic2NyaXB0aW9uKHByb3BzLCBwcm9wcy5oYW5kbGVyKTtcbiAgcmV0dXJuIHByb3BzLmNoaWxkcmVuKF9leHRlbmRzKHt9LCBzdWJzY3JpcHRpb25bMF0sIHtcbiAgICBleGVjdXRlU3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb25bMV1cbiAgfSkpO1xufVxuXG52YXIgZGVmYXVsdENsaWVudCwgQ29udGV4dCwgUHJvdmlkZXIsIENvbnN1bWVyLCBoYXNXYXJuZWRBYm91dERlZmF1bHQsIHVzZUNsaWVudCwgaW5pdGlhbFN0YXRlLCBjdXJyZW50SW5pdCwgaXNTaGFsbG93RGlmZmVyZW50LCBpc1N1c3BlbnNlLCBzb3VyY2VzO1xuXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQsIGNyZWF0ZVJlcXVlc3QgfSBmcm9tIFwiQHVycWwvY29yZVwiO1xuXG5leHBvcnQgKiBmcm9tIFwiQHVycWwvY29yZVwiO1xuXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHRvUHJvbWlzZSwgbWFrZVN1YmplY3QsIGNvbmNhdCwgbWFwLCBmcm9tVmFsdWUsIHN1YnNjcmliZSwgdGFrZVdoaWxlLCBzaGFyZSwgc2Nhbiwgc3dpdGNoTWFwIH0gZnJvbSBcIndvbmthXCI7XG5cbmRlZmF1bHRDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICB1cmw6IFwiL2dyYXBocWxcIlxufSk7XG5cblByb3ZpZGVyID0gKENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGRlZmF1bHRDbGllbnQpKS5Qcm92aWRlcjtcblxuQ29uc3VtZXIgPSBDb250ZXh0LkNvbnN1bWVyO1xuXG5oYXNXYXJuZWRBYm91dERlZmF1bHQgPSAhMTtcblxudXNlQ2xpZW50ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjbGllbnQgPSB1c2VDb250ZXh0KENvbnRleHQpO1xuICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIGNsaWVudCA9PT0gZGVmYXVsdENsaWVudCAmJiAhaGFzV2FybmVkQWJvdXREZWZhdWx0KSB7XG4gICAgaGFzV2FybmVkQWJvdXREZWZhdWx0ID0gITA7XG4gICAgY29uc29sZS53YXJuKFwiRGVmYXVsdCBDbGllbnQ6IE5vIGNsaWVudCBoYXMgYmVlbiBzcGVjaWZpZWQgdXNpbmcgdXJxbCdzIFByb3ZpZGVyLlRoaXMgbWVhbnMgdGhhdCB1cnFsIHdpbGwgYmUgZmFsbGluZyBiYWNrIHRvIGRlZmF1bHRzIGluY2x1ZGluZyBtYWtpbmcgcmVxdWVzdHMgdG8gYC9ncmFwaHFsYC5cXG5JZiB0aGF0J3Mgbm90IHdoYXQgeW91IHdhbnQsIHBsZWFzZSBjcmVhdGUgYSBjbGllbnQgYW5kIGFkZCBhIFByb3ZpZGVyLlwiKTtcbiAgfVxuICByZXR1cm4gY2xpZW50O1xufTtcblxuaW5pdGlhbFN0YXRlID0ge1xuICBmZXRjaGluZzogITEsXG4gIHN0YWxlOiAhMSxcbiAgZXJyb3I6IHZvaWQgMCxcbiAgZGF0YTogdm9pZCAwLFxuICBleHRlbnNpb25zOiB2b2lkIDAsXG4gIG9wZXJhdGlvbjogdm9pZCAwXG59O1xuXG5jdXJyZW50SW5pdCA9ICExO1xuXG5pc1NoYWxsb3dEaWZmZXJlbnQgPSBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciB4LCB4JDE7XG4gIGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiBhIHx8IFwib2JqZWN0XCIgIT0gdHlwZW9mIGIpIHtcbiAgICByZXR1cm4gYSAhPT0gYjtcbiAgfVxuICBmb3IgKHggaW4gYSkge1xuICAgIGlmICghKHggaW4gYikpIHtcbiAgICAgIHJldHVybiAhMDtcbiAgICB9XG4gIH1cbiAgZm9yICh4JDEgaW4gYikge1xuICAgIGlmIChhW3gkMV0gIT09IGJbeCQxXSkge1xuICAgICAgcmV0dXJuICEwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gITE7XG59O1xuXG5pc1N1c3BlbnNlID0gZnVuY3Rpb24oY2xpZW50LCBjb250ZXh0KSB7XG4gIHJldHVybiBjbGllbnQuc3VzcGVuc2UgJiYgKCFjb250ZXh0IHx8ICExICE9PSBjb250ZXh0LnN1c3BlbnNlKTtcbn07XG5cbnNvdXJjZXMgPSBuZXcgTWFwO1xuXG5leHBvcnQgeyBDb25zdW1lciwgQ29udGV4dCwgTXV0YXRpb24sIFByb3ZpZGVyLCBRdWVyeSwgU3Vic2NyaXB0aW9uLCB1c2VDbGllbnQsIHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlU3Vic2NyaXB0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cnFsLmVzLmpzLm1hcFxuIiwiZnVuY3Rpb24gbChhLCBiKSB7XG4gIGIudGFnID0gYTtcbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIG0oKSB7fVxuXG5mdW5jdGlvbiBwKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgdmFyIGMgPSBhLmxlbmd0aDtcbiAgICBsZXQgZCA9ICExLFxuICAgICAgZSA9ICExLFxuICAgICAgZiA9ICExLFxuICAgICAgZyA9IDA7XG4gICAgYihcbiAgICAgIGwoMCwgW1xuICAgICAgICBmdW5jdGlvbiAoaCkge1xuICAgICAgICAgIGlmIChoKSB7XG4gICAgICAgICAgICBkID0gITA7XG4gICAgICAgICAgfSBlbHNlIGlmIChlKSB7XG4gICAgICAgICAgICBmID0gITA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZSA9IGYgPSAhMDsgZiAmJiAhZDsgKSB7XG4gICAgICAgICAgICAgIGcgPCBjID8gKChoID0gYVtnXSksIChnID0gKGcgKyAxKSB8IDApLCAoZiA9ICExKSwgYihsKDEsIFtoXSkpKSA6ICgoZCA9ICEwKSwgYigwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlID0gITE7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiByKCkge31cblxuZnVuY3Rpb24gdChhKSB7XG4gIGEoMCk7XG59XG5cbmZ1bmN0aW9uIHUoYSkge1xuICBsZXQgYiA9ICExO1xuICBhKFxuICAgIGwoMCwgW1xuICAgICAgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgYyA/IChiID0gITApIDogYiB8fCBhKDApO1xuICAgICAgfSxcbiAgICBdKVxuICApO1xufVxuXG5mdW5jdGlvbiB3KGEpIHtcbiAgaWYgKHZvaWQgMCA9PT0gYSkge1xuICAgIHJldHVybiAoKGEgPSBbdiwgMF0pLnRhZyA9IDI1NiksIGE7XG4gIH1cbiAgaWYgKG51bGwgPT09IGEgfHwgYVswXSAhPT0gdikge1xuICAgIHJldHVybiBhO1xuICB9XG4gIChhID0gW3YsIChhWzFdICsgMSkgfCAwXSkudGFnID0gMjU2O1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24geChhKSB7XG4gIGlmIChudWxsID09PSBhIHx8IGFbMF0gIT09IHYpIHtcbiAgICByZXR1cm4gYTtcbiAgfVxuICBpZiAoMCAhPT0gKGEgPSBhWzFdKSkge1xuICAgIHJldHVybiBbdiwgKGEgLSAxKSB8IDBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHooYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGZ1bmN0aW9uIGQoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gayAmJlxuICAgICAgICAgICAgKChrID0gITEpLFxuICAgICAgICAgICAgdm9pZCAwICE9PSAoYiA9IGUuc2hpZnQoKSlcbiAgICAgICAgICAgICAgPyAoKGIgPSBhKHgoYikpKSwgKGsgPSAhMCksIGIoZCkpXG4gICAgICAgICAgICAgIDogcVxuICAgICAgICAgICAgICA/IGMoMClcbiAgICAgICAgICAgICAgOiBnIHx8ICgoZyA9ICEwKSwgZigwKSkpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gayAmJiAoYyhiKSwgbiA/IChuID0gITEpIDogaCgwKSlcbiAgICAgICAgICA6ICgoaCA9IGIgPSBiWzBdKSwgKG4gPSAhMSksIGIoMCkpO1xuICAgICAgfVxuICAgICAgbGV0IGUgPSBbXSxcbiAgICAgICAgZiA9IG0sXG4gICAgICAgIGcgPSAhMSxcbiAgICAgICAgaCA9IG0sXG4gICAgICAgIGsgPSAhMSxcbiAgICAgICAgbiA9ICExLFxuICAgICAgICBxID0gITE7XG4gICAgICBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBxIHx8ICgocSA9ICEwKSwgayB8fCAwICE9PSBlLmxlbmd0aCB8fCBjKDApKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IHEgfHwgKChiID0gYlswXSksIChnID0gITEpLCBrID8gZS5wdXNoKGIpIDogKChiID0gYShiKSksIChrID0gITApLCBiKGQpKSlcbiAgICAgICAgICA6IChmID0gYlswXSk7XG4gICAgICB9KTtcbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICBpZiAoKHEgfHwgKChxID0gITApLCBmKDEpKSwgaykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGsgPSAhMSksIGgoMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHEgfHwgZyB8fCAoKGcgPSAhMCksIGYoMCkpLCBrICYmICFuICYmICgobiA9ICEwKSwgaCgwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gQShhKSB7XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBCKGEpIHtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIEMoYSkge1xuICByZXR1cm4gYSgwKTtcbn1cblxuZnVuY3Rpb24gRChhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGUgPSBtLFxuICAgICAgICBmID0gITEsXG4gICAgICAgIGcgPSBbXSxcbiAgICAgICAgaCA9ICExO1xuICAgICAgYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gaCB8fCAoKGggPSAhMCksIDAgPT09IGcubGVuZ3RoICYmIGMoMCkpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gaCB8fFxuICAgICAgICAgICAgKChmID0gITEpLFxuICAgICAgICAgICAgKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGIoYSkge1xuICAgICAgICAgICAgICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgICAgICAgICA/IDAgIT09IGcubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICgoZyA9IGcuZmlsdGVyKGQpKSxcbiAgICAgICAgICAgICAgICAgICAgKGEgPSAwID09PSBnLmxlbmd0aCksXG4gICAgICAgICAgICAgICAgICAgIGggJiYgYSA/IGMoMCkgOiAhZiAmJiBhICYmICgoZiA9ICEwKSwgZSgwKSkpXG4gICAgICAgICAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgICAgICAgICA/IDAgIT09IGcubGVuZ3RoICYmIChjKGwoMSwgW2FbMF1dKSksIGsoMCkpXG4gICAgICAgICAgICAgICAgICA6ICgoayA9IGEgPSBhWzBdKSwgKGcgPSBnLmNvbmNhdChhKSksIGEoMCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGQoYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICE9PSBrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBrID0gbTtcbiAgICAgICAgICAgICAgMSA9PT0gYS5sZW5ndGggPyBhKGIpIDogYS5iaW5kKG51bGwsIGIpO1xuICAgICAgICAgICAgfSkoYShiWzBdKSksXG4gICAgICAgICAgICBmIHx8ICgoZiA9ICEwKSwgZSgwKSkpXG4gICAgICAgICAgOiAoZSA9IGJbMF0pO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgYVxuICAgICAgICAgICAgICA/IChoIHx8ICgoaCA9ICEwKSwgZShhKSksXG4gICAgICAgICAgICAgICAgZy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYyhhKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAoZyA9IFtdKSlcbiAgICAgICAgICAgICAgOiAoZiB8fCBoID8gKGYgPSAhMSkgOiAoKGYgPSAhMCksIGUoMCkpLCBnLmZvckVhY2goQykpO1xuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIEUoYSkge1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gRihhKSB7XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBHKGEpIHtcbiAgcmV0dXJuIEQoRikoYSk7XG59XG5cbmZ1bmN0aW9uIEgoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gITE7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJ251bWJlcicgPT0gdHlwZW9mIGUpIHtcbiAgICAgICAgICBkIHx8ICgoZCA9ICEwKSwgYyhlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YWcpIHtcbiAgICAgICAgICBkIHx8IChhKGVbMF0pLCBjKGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZyA9IGVbMF07XG4gICAgICAgICAgYyhcbiAgICAgICAgICAgIGwoMCwgW1xuICAgICAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgJiYgKGQgPSAhMCksIGcoYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBKKGEpIHtcbiAgYSgwKTtcbn1cblxuZnVuY3Rpb24gSyhhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gZChhKSB7XG4gICAgICAgIGggJiZcbiAgICAgICAgICAoJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICAgID8gKChoID0gITEpLCBuID8gYyhhKSA6IGYgfHwgKChmID0gITApLCBlKDApKSlcbiAgICAgICAgICAgIDogYS50YWdcbiAgICAgICAgICAgID8gKGMoYSksIGsgPyAoayA9ICExKSA6IGcoMCkpXG4gICAgICAgICAgICA6ICgoZyA9IGEgPSBhWzBdKSwgKGsgPSAhMSksIGEoMCkpKTtcbiAgICAgIH1cbiAgICAgIGxldCBlID0gbSxcbiAgICAgICAgZiA9ICExLFxuICAgICAgICBnID0gbSxcbiAgICAgICAgaCA9ICExLFxuICAgICAgICBrID0gITEsXG4gICAgICAgIG4gPSAhMTtcbiAgICAgIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IG4gfHwgKChuID0gITApLCBoIHx8IGMoMCkpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gbiB8fFxuICAgICAgICAgICAgKGggJiYgKGcoMSksIChnID0gbSkpLCBmID8gKGYgPSAhMSkgOiAoKGYgPSAhMCksIGUoMCkpLCAoYiA9IGEoYlswXSkpLCAoaCA9ICEwKSwgYihkKSlcbiAgICAgICAgICA6IChlID0gYlswXSk7XG4gICAgICB9KTtcbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICBpZiAoKG4gfHwgKChuID0gITApLCBlKDEpKSwgaCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGggPSAhMSksIGcoMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG4gfHwgZiB8fCAoKGYgPSAhMCksIGUoMCkpLCBoICYmICFrICYmICgoayA9ICEwKSwgZygwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gTChhKSB7XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBNKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9IFtdLFxuICAgICAgICBlID0gbTtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBwKGQpKGMpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gKGQubGVuZ3RoID49IGEgJiYgMCA8IGEgJiYgZC5zaGlmdCgpLCBkLnB1c2goYlswXSksIGUoMCkpXG4gICAgICAgICAgOiAoKGIgPSBiWzBdKSwgMCA+PSBhID8gKGIoMSksIHUoYykpIDogKChlID0gYiksIGIoMCkpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIE4oYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBsZXQgYyA9IG0sXG4gICAgICBkID0gITE7XG4gICAgYihmdW5jdGlvbiAoZSkge1xuICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGUgPyAoZCA9ICEwKSA6IGUudGFnID8gZCB8fCAoYShlWzBdKSwgYygwKSkgOiAoKGMgPSBlID0gZVswXSksIGUoMCkpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWQpIHtcbiAgICAgICAgICByZXR1cm4gKGQgPSAhMCksIGMoMSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gTygpIHt9XG5cbmZ1bmN0aW9uIFEoKSB7fVxuXG5mdW5jdGlvbiBSKCkge31cblxuZnVuY3Rpb24gUygpIHt9XG5cbmZ1bmN0aW9uIGJ1ZmZlciQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKGEpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICA/IGsgfHwgKChrID0gITApLCBmKDEpLCAwIDwgZS5sZW5ndGggJiYgYyhsKDEsIFtlXSkpLCBjKDApKVxuICAgICAgICAgIDogYS50YWdcbiAgICAgICAgICA/ICFrICYmIDAgPCBlLmxlbmd0aCAmJiAoKGEgPSBlKSwgKGUgPSBbXSksIGMobCgxLCBbYV0pKSlcbiAgICAgICAgICA6IChnID0gYVswXSk7XG4gICAgICB9XG4gICAgICBsZXQgZSA9IFtdLFxuICAgICAgICBmID0gbSxcbiAgICAgICAgZyA9IG0sXG4gICAgICAgIGggPSAhMSxcbiAgICAgICAgayA9ICExO1xuICAgICAgYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gayB8fCAoKGsgPSAhMCksIGcoMSksIDAgPCBlLmxlbmd0aCAmJiBjKGwoMSwgW2VdKSksIGMoMCkpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gayB8fCAoZS5wdXNoKGJbMF0pLCBoID8gKGggPSAhMSkgOiAoKGggPSAhMCksIGYoMCksIGcoMCkpKVxuICAgICAgICAgIDogKChmID0gYlswXSksIGEoZCkpO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgaWYgKCFrKSB7XG4gICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChrID0gITApLCBmKDEpLCBnKDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoaCA9ICEwKSwgZigwKSwgZygwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmUkMShhLCBiKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gbSxcbiAgICAgICAgZSA9IG0sXG4gICAgICAgIGYgPSB2b2lkIDAsXG4gICAgICAgIGcgPSB2b2lkIDAsXG4gICAgICAgIGggPSAhMSxcbiAgICAgICAgayA9IDAsXG4gICAgICAgIG4gPSAhMTtcbiAgICAgIGEoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIGIgPSBnO1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgICAgID8gMSA+IGtcbiAgICAgICAgICAgID8gKGsgPSAoayArIDEpIHwgMClcbiAgICAgICAgICAgIDogbiB8fCAoKG4gPSAhMCksIGMoMCkpXG4gICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgID8gKChhID0gYVswXSksXG4gICAgICAgICAgICB2b2lkIDAgIT09IGJcbiAgICAgICAgICAgICAgPyBuIHx8ICgoZiA9IHcoYSkpLCAoaCA9ICExKSwgYyhsKDEsIFtbYSwgeChiKV1dKSkpXG4gICAgICAgICAgICAgIDogKChmID0gdyhhKSksIGggPyAoaCA9ICExKSA6IGUoMCkpKVxuICAgICAgICAgIDogKGQgPSBhWzBdKTtcbiAgICAgIH0pO1xuICAgICAgYihmdW5jdGlvbiAoYSkge1xuICAgICAgICB2YXIgYiA9IGY7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgPyAxID4ga1xuICAgICAgICAgICAgPyAoayA9IChrICsgMSkgfCAwKVxuICAgICAgICAgICAgOiBuIHx8ICgobiA9ICEwKSwgYygwKSlcbiAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgPyAoKGEgPSBhWzBdKSxcbiAgICAgICAgICAgIHZvaWQgMCAhPT0gYlxuICAgICAgICAgICAgICA/IG4gfHwgKChnID0gdyhhKSksIChoID0gITEpLCBjKGwoMSwgW1t4KGIpLCBhXV0pKSlcbiAgICAgICAgICAgICAgOiAoKGcgPSB3KGEpKSwgaCA/IChoID0gITEpIDogZCgwKSkpXG4gICAgICAgICAgOiAoZSA9IGFbMF0pO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgaWYgKCFuKSB7XG4gICAgICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChuID0gITApLCBkKDEpLCBlKDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoaCA9ICEwKSwgZChjKSwgZShjKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH0pKGEsIGIpO1xufVxuXG5mdW5jdGlvbiBjb25jYXQkMShhKSB7XG4gIHJldHVybiB6KEIpKHAoYSkpO1xufVxuXG5mdW5jdGlvbiBjb25jYXRBbGwkMShhKSB7XG4gIHJldHVybiB6KEEpKGEpO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKCkge1xuICAgICAgICB2YXIgYSA9IGU7XG4gICAgICAgIHZvaWQgMCAhPT0gYSAmJiAoKGUgPSB2b2lkIDApLCBjbGVhclRpbWVvdXQoeChhKSkpO1xuICAgICAgfVxuICAgICAgbGV0IGUgPSB2b2lkIDAsXG4gICAgICAgIGYgPSAhMSxcbiAgICAgICAgZyA9ICExO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgaWYgKCdudW1iZXInID09IHR5cGVvZiBiKSB7XG4gICAgICAgICAgZyB8fCAoKGcgPSAhMCksIHZvaWQgMCAhPT0gZSA/IChmID0gITApIDogYygwKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYi50YWcpIHtcbiAgICAgICAgICBnIHx8XG4gICAgICAgICAgICAoZCgpLFxuICAgICAgICAgICAgKGUgPSB3KFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGMoYik7XG4gICAgICAgICAgICAgICAgZiAmJiBjKDApO1xuICAgICAgICAgICAgICB9LCBhKGJbMF0pKVxuICAgICAgICAgICAgKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBuID0gYlswXTtcbiAgICAgICAgICBjKFxuICAgICAgICAgICAgbCgwLCBbXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYSA/ICgoZyA9ICEwKSwgKGYgPSAhMSksIGQoKSwgbigxKSkgOiBuKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVsYXkkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSAwO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGIgfHwgYi50YWdcbiAgICAgICAgICA/ICgoZCA9IChkICsgMSkgfCAwKSxcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAwICE9PSBkICYmICgoZCA9IChkIC0gMSkgfCAwKSwgYyhiKSk7XG4gICAgICAgICAgICB9LCBhKSlcbiAgICAgICAgICA6IGMoYik7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSBtO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGIgPyBjKGIpIDogYi50YWcgPyAoYShiWzBdKSA/IGMoYikgOiBkKDApKSA6ICgoZCA9IGJbMF0pLCBjKGIpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvckVhY2gkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIE4oYSkoYik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZyb21DYWxsYmFnJDIoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBmdW5jdGlvbiBjKGEsIGMpIHtcbiAgICAgIHN3aXRjaCAoYSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgYihcbiAgICAgICAgICAgIGwoMCwgW1xuICAgICAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhID8gYygyKSA6IGMoMSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGIobCgxLCBbY10pKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgYigwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDIgPT09IGEubGVuZ3RoID8gYSgwLCBjKSA6IGEuYmluZChudWxsLCAwLCBjKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZnJvbURvbUV2ZW50JDEoYSwgYikge1xuICByZXR1cm4gKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKGEpIHtcbiAgICAgICAgYyhsKDEsIFthXSkpO1xuICAgICAgfVxuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIGMgJiYgYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsIGQpO1xuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgICAgYS5hZGRFdmVudExpc3RlbmVyKGIsIGQpO1xuICAgIH07XG4gIH0pKGEsIGIpO1xufVxuXG5mdW5jdGlvbiBmcm9tTGlzdCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgbGV0IGMgPSAhMSxcbiAgICAgIGQgPSAhMSxcbiAgICAgIGUgPSAhMSxcbiAgICAgIGYgPSBhO1xuICAgIGIoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgYyA9ICEwO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZCkge1xuICAgICAgICAgICAgZSA9ICEwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGQgPSBlID0gITA7IGUgJiYgIWM7ICkge1xuICAgICAgICAgICAgICAoYSA9IGYpID8gKChmID0gYVsxXSksIChlID0gITEpLCBiKGwoMSwgW2FbMF1dKSkpIDogKChjID0gITApLCBiKDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQgPSAhMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZyb21PYnNlcnZhYmxlJDIoYSkge1xuICB2YXIgYiA9IHZvaWQgMCAhPT0gYVtQXSA/IGFbUF0oKSA6IGE7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBjID0gYi5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgYShsKDEsIFtjXSkpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGEoMCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IFEsXG4gICAgfSk7XG4gICAgYShcbiAgICAgIGwoMCwgW1xuICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gYy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZnJvbVByb21pc2UkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGxldCBjID0gITE7XG4gICAgYS50aGVuKGZ1bmN0aW9uIChhKSB7XG4gICAgICBjIHx8IChiKGwoMSwgW2FdKSksIGIoMCkpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2b2lkIDApO1xuICAgIH0pO1xuICAgIGIoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBhICYmIChjID0gITApO1xuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tVmFsdWUkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGxldCBjID0gITE7XG4gICAgYihcbiAgICAgIGwoMCwgW1xuICAgICAgICBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIGQgPyAoYyA9ICEwKSA6IGMgfHwgKChjID0gITApLCBiKGwoMSwgW2FdKSksIGIoMCkpO1xuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRlcnZhbCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgbGV0IGMgPSAwO1xuICAgIHZhciBkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGEgPSBjO1xuICAgICAgYyA9IChjICsgMSkgfCAwO1xuICAgICAgYihsKDEsIFthXSkpO1xuICAgIH0sIGEpO1xuICAgIGIoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBhICYmIGNsZWFySW50ZXJ2YWwoZCk7XG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2UkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGxldCBjID0gcixcbiAgICAgIGQgPSAhMTtcbiAgICBjID0gYSh7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoYSkge1xuICAgICAgICBkIHx8IGIobCgxLCBbYV0pKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBkIHx8ICgoZCA9ICEwKSwgYigwKSk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGIoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBpZiAoYSAmJiAhZCkge1xuICAgICAgICAgICAgcmV0dXJuIChkID0gITApLCBjKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlU3ViamVjdCQxKCkge1xuICBsZXQgYSA9IFtdLFxuICAgIGIgPSAhMTtcbiAgcmV0dXJuIHtcbiAgICBzb3VyY2U6IGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBiKGEpIHtcbiAgICAgICAgcmV0dXJuIGEgIT09IGM7XG4gICAgICB9XG4gICAgICBhID0gYS5jb25jYXQoYyk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgYyAmJiAoYSA9IGEuZmlsdGVyKGIpKTtcbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uIChjKSB7XG4gICAgICBiIHx8XG4gICAgICAgIGEuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGEobCgxLCBbY10pKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgYiB8fCAoKGIgPSAhMCksIGEuZm9yRWFjaCh0KSk7XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGIgPSAnbnVtYmVyJyA9PSB0eXBlb2YgYiA/IDAgOiBiLnRhZyA/IGwoMSwgW2EoYlswXSldKSA6IGwoMCwgW2JbMF1dKTtcbiAgICAgICAgYyhiKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlJDEoYSkge1xuICByZXR1cm4gRChFKShwKGEpKTtcbn1cblxuZnVuY3Rpb24gbmV2ZXIkMShhKSB7XG4gIGEobCgwLCBbbV0pKTtcbn1cblxuZnVuY3Rpb24gb25FbmQkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSAhMTtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgYikge1xuICAgICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGQgPSAhMDtcbiAgICAgICAgICBjKGIpO1xuICAgICAgICAgIHJldHVybiBhKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGIudGFnKSB7XG4gICAgICAgICAgZCB8fCBjKGIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBlID0gYlswXTtcbiAgICAgICAgICBjKFxuICAgICAgICAgICAgbCgwLCBbXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYyA/ICgoZCA9ICEwKSwgZShjKSwgYSgpKSA6IGUoYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBvblN0YXJ0JDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiID8gYyhiKSA6IGIudGFnID8gYyhiKSA6IChjKGIpLCBhKCkpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGlwZSgpIHtcbiAgZm9yICh2YXIgYSA9IGFyZ3VtZW50cywgYiA9IGFyZ3VtZW50c1swXSwgYyA9IDEsIGQgPSBhcmd1bWVudHMubGVuZ3RoOyBjIDwgZDsgYysrKSB7XG4gICAgYiA9IGFbY10oYik7XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2gkMShhKSB7XG4gIHJldHVybiBOKE8pKGEpO1xufVxuXG5mdW5jdGlvbiBzYW1wbGUkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSBtLFxuICAgICAgICBlID0gbSxcbiAgICAgICAgZiA9IHZvaWQgMCxcbiAgICAgICAgZyA9ICExLFxuICAgICAgICBoID0gITE7XG4gICAgICBiKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgPyBoIHx8ICgoaCA9ICEwKSwgZSgxKSwgYygwKSlcbiAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgPyAoKGYgPSB3KGFbMF0pKSwgZyA/IChnID0gITEpIDogKChnID0gITApLCBlKDApLCBkKDApKSlcbiAgICAgICAgICA6IChkID0gYVswXSk7XG4gICAgICB9KTtcbiAgICAgIGEoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIGIgPSBmO1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgICAgID8gaCB8fCAoKGggPSAhMCksIGQoMSksIGMoMCkpXG4gICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgID8gdm9pZCAwID09PSBiIHx8IGggfHwgKChmID0gdm9pZCAwKSwgYyhsKDEsIFt4KGIpXSkpKVxuICAgICAgICAgIDogKGUgPSBhWzBdKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGlmICghaCkge1xuICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoaCA9ICEwKSwgZCgxKSwgZSgxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGcgPSAhMCksIGQoMCksIGUoMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBzY2FuJDEoYSwgYikge1xuICByZXR1cm4gKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgbGV0IGUgPSBiO1xuICAgICAgICByZXR1cm4gYyhmdW5jdGlvbiAoYykge1xuICAgICAgICAgICdudW1iZXInID09IHR5cGVvZiBjXG4gICAgICAgICAgICA/IChjID0gMClcbiAgICAgICAgICAgIDogYy50YWdcbiAgICAgICAgICAgID8gKChlID0gYShlLCBjWzBdKSksIChjID0gbCgxLCBbZV0pKSlcbiAgICAgICAgICAgIDogKGMgPSBsKDAsIFtjWzBdXSkpO1xuICAgICAgICAgIGQoYyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9O1xuICB9KShhLCBiKTtcbn1cblxuZnVuY3Rpb24gc2hhcmUkMShhKSB7XG4gIGZ1bmN0aW9uIGIoYSkge1xuICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICA/IChjLmZvckVhY2goSiksIChjID0gW10pKVxuICAgICAgOiBhLnRhZ1xuICAgICAgPyAoKGUgPSAhMSksXG4gICAgICAgIGMuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICAgIGIoYSk7XG4gICAgICAgIH0pKVxuICAgICAgOiAoZCA9IGFbMF0pO1xuICB9XG4gIGxldCBjID0gW10sXG4gICAgZCA9IG0sXG4gICAgZSA9ICExO1xuICByZXR1cm4gZnVuY3Rpb24gKGYpIHtcbiAgICBmdW5jdGlvbiBnKGEpIHtcbiAgICAgIHJldHVybiBhICE9PSBmO1xuICAgIH1cbiAgICBjID0gYy5jb25jYXQoZik7XG4gICAgMSA9PT0gYy5sZW5ndGggJiYgYShiKTtcbiAgICBmKFxuICAgICAgbCgwLCBbXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIGlmICgoKGMgPSBjLmZpbHRlcihnKSksIDAgPT09IGMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZSB8fCAoKGUgPSAhMCksIGQoYSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2tpcCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9IG0sXG4gICAgICAgIGUgPSBhO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICA/IGMoYSlcbiAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgPyAwIDwgZVxuICAgICAgICAgICAgPyAoKGUgPSAoZSAtIDEpIHwgMCksIGQoMCkpXG4gICAgICAgICAgICA6IGMoYSlcbiAgICAgICAgICA6ICgoZCA9IGFbMF0pLCBjKGEpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNraXBVbnRpbCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKGEpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICA/IGcgJiYgKChrID0gITApLCBlKDEpKVxuICAgICAgICAgIDogYS50YWdcbiAgICAgICAgICA/ICgoZyA9ICExKSwgZigxKSlcbiAgICAgICAgICA6ICgoZiA9IGEgPSBhWzBdKSwgYSgwKSk7XG4gICAgICB9XG4gICAgICBsZXQgZSA9IG0sXG4gICAgICAgIGYgPSBtLFxuICAgICAgICBnID0gITAsXG4gICAgICAgIGggPSAhMSxcbiAgICAgICAgayA9ICExO1xuICAgICAgYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gKGcgJiYgZigxKSwgKGsgPSAhMCksIGMoMCkpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gZyB8fCBrXG4gICAgICAgICAgICA/IGhcbiAgICAgICAgICAgICAgPyAoaCA9ICExKVxuICAgICAgICAgICAgICA6ICgoaCA9ICEwKSwgZSgwKSwgZigwKSlcbiAgICAgICAgICAgIDogKChoID0gITEpLCBjKGIpKVxuICAgICAgICAgIDogKChlID0gYlswXSksIGEoZCkpO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgaWYgKCFrKSB7XG4gICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCgoayA9ICEwKSwgZSgxKSwgZykpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoIHx8ICgoaCA9ICEwKSwgZyAmJiBmKDApLCBlKDApKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNraXBXaGlsZSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9IG0sXG4gICAgICAgIGUgPSAhMDtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBjKGIpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gZVxuICAgICAgICAgICAgPyBhKGJbMF0pXG4gICAgICAgICAgICAgID8gZCgwKVxuICAgICAgICAgICAgICA6ICgoZSA9ICExKSwgYyhiKSlcbiAgICAgICAgICAgIDogYyhiKVxuICAgICAgICAgIDogKChkID0gYlswXSksIGMoYikpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoQWxsJDEoYSkge1xuICByZXR1cm4gSyhMKShhKTtcbn1cblxuZnVuY3Rpb24gdGFrZSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9ICExLFxuICAgICAgICBlID0gMCxcbiAgICAgICAgZiA9IG07XG4gICAgICBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBkIHx8ICgoZCA9ICEwKSwgYygwKSlcbiAgICAgICAgICA6IGIudGFnXG4gICAgICAgICAgPyBlIDwgYSAmJiAhZCAmJiAoKGUgPSAoZSArIDEpIHwgMCksIGMoYiksICFkICYmIGUgPj0gYSAmJiAoKGQgPSAhMCksIGMoMCksIGYoMSkpKVxuICAgICAgICAgIDogKChiID0gYlswXSksIDAgPj0gYSA/ICgoZCA9ICEwKSwgYygwKSwgYigxKSkgOiAoZiA9IGIpKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgICBpZiAoYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZCA9ICEwKSwgZigxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZSA8IGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZigwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRha2VVbnRpbCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKGEpIHtcbiAgICAgICAgJ251bWJlcicgIT0gdHlwZW9mIGEgJiYgKGEudGFnID8gKChlID0gITApLCBmKDEpLCBjKDApKSA6ICgoZyA9IGEgPSBhWzBdKSwgYSgwKSkpO1xuICAgICAgfVxuICAgICAgbGV0IGUgPSAhMSxcbiAgICAgICAgZiA9IG0sXG4gICAgICAgIGcgPSBtO1xuICAgICAgYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYiA/IGUgfHwgKChlID0gITApLCBnKDEpLCBjKDApKSA6IGIudGFnID8gZSB8fCBjKGIpIDogKChmID0gYlswXSksIGEoZCkpO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgaWYgKCFlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhID8gKChlID0gITApLCBmKDEpLCBnKDEpKSA6IGYoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFrZVdoaWxlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gbSxcbiAgICAgICAgZSA9ICExO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IGUgfHwgKChlID0gITApLCBjKDApKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IGUgfHwgKGEoYlswXSkgPyBjKGIpIDogKChlID0gITApLCBjKDApLCBkKDEpKSlcbiAgICAgICAgICA6ICgoZCA9IGJbMF0pLCBjKGIpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRocm90dGxlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGZ1bmN0aW9uIGQoKSB7XG4gICAgICAgIHZvaWQgMCAhPT0gZyAmJiBjbGVhclRpbWVvdXQoeChnKSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICBnID0gdm9pZCAwO1xuICAgICAgICBmID0gITE7XG4gICAgICB9XG4gICAgICBsZXQgZiA9ICExLFxuICAgICAgICBnID0gdm9pZCAwO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgaWYgKCdudW1iZXInID09IHR5cGVvZiBiKSB7XG4gICAgICAgICAgZCgpLCBjKDApO1xuICAgICAgICB9IGVsc2UgaWYgKGIudGFnKSB7XG4gICAgICAgICAgZiB8fCAoKGYgPSAhMCksIGQoKSwgKGcgPSB3KHNldFRpbWVvdXQoZSwgYShiWzBdKSkpKSwgYyhiKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGggPSBiWzBdO1xuICAgICAgICAgIGMoXG4gICAgICAgICAgICBsKDAsIFtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSA/IChkKCksIGgoMSkpIDogaChhKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheSQxKGEpIHtcbiAgbGV0IGIgPSBbXSxcbiAgICBjID0gbSxcbiAgICBkID0gITE7XG4gIGEoZnVuY3Rpb24gKGEpIHtcbiAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYSA/IChkID0gITApIDogYS50YWcgPyAoYi5wdXNoKGFbMF0pLCBjKDApKSA6ICgoYyA9IGEgPSBhWzBdKSwgYSgwKSk7XG4gIH0pO1xuICBkIHx8IGMoMSk7XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiB0b0NhbGxiYWckMihhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYiwgYykge1xuICAgIGlmICgwID09PSBiKSB7XG4gICAgICByZXR1cm4gYShmdW5jdGlvbiAoYSkge1xuICAgICAgICBmdW5jdGlvbiBiKGEpIHtcbiAgICAgICAgICBzd2l0Y2ggKGEpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgZCgwKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgZCgxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdudW1iZXInID09IHR5cGVvZiBhKSB7XG4gICAgICAgICAgcmV0dXJuIDIgPT09IGMubGVuZ3RoID8gYygyLCB2b2lkIDApIDogYy5iaW5kKG51bGwsIDIsIHZvaWQgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEudGFnKSB7XG4gICAgICAgICAgcmV0dXJuIChhID0gYVswXSksIDIgPT09IGMubGVuZ3RoID8gYygxLCBhKSA6IGMuYmluZChudWxsLCAxLCBhKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZCA9IGFbMF07XG4gICAgICAgIHJldHVybiAyID09PSBjLmxlbmd0aCA/IGMoMCwgYikgOiBjLmJpbmQobnVsbCwgMCwgYik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvT2JzZXJ2YWJsZSQyKGEpIHtcbiAgdmFyIGIgPSB7XG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoYiwgZCwgZSkge1xuICAgICAgdmFyIGMgPSAoJ29iamVjdCcgPT0gdHlwZW9mIGIgPyBiLm5leHQuYmluZChiKSA6IGIpIHx8IFIsXG4gICAgICAgIGcgPSAoJ29iamVjdCcgPT0gdHlwZW9mIGIgPyBiLmNvbXBsZXRlLmJpbmQoYikgOiBlKSB8fCBTO1xuICAgICAgbGV0IGggPSBtLFxuICAgICAgICBrID0gITE7XG4gICAgICBhKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgYSkge1xuICAgICAgICAgIHJldHVybiAoayA9ICEwKSwgZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLnRhZykge1xuICAgICAgICAgIGlmIChrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGMoYVswXSk7XG4gICAgICAgICAgcmV0dXJuIGgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgaCA9IGEgPSBhWzBdO1xuICAgICAgICBhKDApO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaykge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmNsb3NlZCA9ICExKSwgKGsgPSAhMCksIGgoMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZWQ6ICExLFxuICAgICAgfTtcbiAgICB9LFxuICB9O1xuICBiW1BdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBiO1xuICB9O1xuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gdG9Qcm9taXNlJDEoYSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGIpIHtcbiAgICBNKDEpKGEpKGZ1bmN0aW9uIChhKSB7XG4gICAgICBpZiAoJ251bWJlcicgIT0gdHlwZW9mIGEpIHtcbiAgICAgICAgaWYgKGEudGFnKSB7XG4gICAgICAgICAgYihhWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhWzBdKDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG52YXIgdiA9IFtdLFxuICBQID1cbiAgICAnZnVuY3Rpb24nID09IHR5cGVvZiBTeW1ib2xcbiAgICAgID8gU3ltYm9sLm9ic2VydmFibGUgfHwgKFN5bWJvbC5vYnNlcnZhYmxlID0gU3ltYm9sKCdvYnNlcnZhYmxlJykpXG4gICAgICA6ICdAQG9ic2VydmFibGUnO1xuXG5leHBvcnQge1xuICBidWZmZXIkMSBhcyBidWZmZXIsXG4gIGNvbWJpbmUkMSBhcyBjb21iaW5lLFxuICBjb25jYXQkMSBhcyBjb25jYXQsXG4gIGNvbmNhdEFsbCQxIGFzIGNvbmNhdEFsbCxcbiAgeiBhcyBjb25jYXRNYXAsXG4gIGRlYm91bmNlJDEgYXMgZGVib3VuY2UsXG4gIGRlbGF5JDEgYXMgZGVsYXksXG4gIHUgYXMgZW1wdHksXG4gIGZpbHRlciQxIGFzIGZpbHRlcixcbiAgRyBhcyBmbGF0dGVuLFxuICBmb3JFYWNoJDEgYXMgZm9yRWFjaCxcbiAgcCBhcyBmcm9tQXJyYXksXG4gIGZyb21DYWxsYmFnJDIgYXMgZnJvbUNhbGxiYWcsXG4gIGZyb21Eb21FdmVudCQxIGFzIGZyb21Eb21FdmVudCxcbiAgZnJvbUxpc3QkMSBhcyBmcm9tTGlzdCxcbiAgZnJvbU9ic2VydmFibGUkMiBhcyBmcm9tT2JzZXJ2YWJsZSxcbiAgZnJvbVByb21pc2UkMSBhcyBmcm9tUHJvbWlzZSxcbiAgZnJvbVZhbHVlJDEgYXMgZnJvbVZhbHVlLFxuICBpbnRlcnZhbCQxIGFzIGludGVydmFsLFxuICBtYWtlJDEgYXMgbWFrZSxcbiAgbWFrZVN1YmplY3QkMSBhcyBtYWtlU3ViamVjdCxcbiAgbWFwJDEgYXMgbWFwLFxuICBtZXJnZSQxIGFzIG1lcmdlLFxuICBHIGFzIG1lcmdlQWxsLFxuICBEIGFzIG1lcmdlTWFwLFxuICBuZXZlciQxIGFzIG5ldmVyLFxuICBvbkVuZCQxIGFzIG9uRW5kLFxuICBIIGFzIG9uUHVzaCxcbiAgb25TdGFydCQxIGFzIG9uU3RhcnQsXG4gIHBpcGUsXG4gIHB1Ymxpc2gkMSBhcyBwdWJsaXNoLFxuICBzYW1wbGUkMSBhcyBzYW1wbGUsXG4gIHNjYW4kMSBhcyBzY2FuLFxuICBzaGFyZSQxIGFzIHNoYXJlLFxuICBza2lwJDEgYXMgc2tpcCxcbiAgc2tpcFVudGlsJDEgYXMgc2tpcFVudGlsLFxuICBza2lwV2hpbGUkMSBhcyBza2lwV2hpbGUsXG4gIE4gYXMgc3Vic2NyaWJlLFxuICBzd2l0Y2hBbGwkMSBhcyBzd2l0Y2hBbGwsXG4gIEsgYXMgc3dpdGNoTWFwLFxuICB0YWtlJDEgYXMgdGFrZSxcbiAgTSBhcyB0YWtlTGFzdCxcbiAgdGFrZVVudGlsJDEgYXMgdGFrZVVudGlsLFxuICB0YWtlV2hpbGUkMSBhcyB0YWtlV2hpbGUsXG4gIEggYXMgdGFwLFxuICB0aHJvdHRsZSQxIGFzIHRocm90dGxlLFxuICB0b0FycmF5JDEgYXMgdG9BcnJheSxcbiAgdG9DYWxsYmFnJDIgYXMgdG9DYWxsYmFnLFxuICB0b09ic2VydmFibGUkMiBhcyB0b09ic2VydmFibGUsXG4gIHRvUHJvbWlzZSQxIGFzIHRvUHJvbWlzZSxcbn07XG4iLCJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgQ29sb3JNb2RlUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAndXJxbCc7XG5cbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlcj5cbiAgICAgIDxDaGFrcmFQcm92aWRlciByZXNldENTUyB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q29sb3JNb2RlUHJvdmlkZXJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Db2xvck1vZGVQcm92aWRlcj5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9