"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./my-label.css");
var MyLabel = function (_a) {
    var _b = _a.allCaps, allCaps = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, _d = _a.fontColor, fontColor = _d === void 0 ? '#5517ac' : _d, _e = _a.label, label = _e === void 0 ? 'No Label' : _e, _f = _a.size, size = _f === void 0 ? 'normal' : _f;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "label ".concat(size, " text-").concat(color, " ").concat(allCaps && 'uppercase'), style: { color: fontColor } }, { children: label })));
};
exports.default = MyLabel;
