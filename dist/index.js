"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = exports.Header = exports.MyLabel = exports.Button = void 0;
var Button_1 = require("./stories/Button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.Button; } });
var MyLabel_1 = require("./components/MyLabel");
Object.defineProperty(exports, "MyLabel", { enumerable: true, get: function () { return __importDefault(MyLabel_1).default; } });
var Header_1 = require("./stories/Header");
Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return Header_1.Header; } });
var Page_1 = require("./stories/Page");
Object.defineProperty(exports, "Page", { enumerable: true, get: function () { return Page_1.Page; } });
