"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIN_DEVICE_WIDTH = exports.SCREEN_HEIGHT = exports.SCREEN_WIDTH = exports.addAlphaToHex = void 0;
__exportStar(require("./colors"), exports);
__exportStar(require("./spacing"), exports);
__exportStar(require("./shadow"), exports);
const react_native_1 = require("react-native");
const addAlphaToHex = (color, opacity) => {
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
};
exports.addAlphaToHex = addAlphaToHex;
exports.SCREEN_WIDTH = react_native_1.Dimensions.get('window').width;
exports.SCREEN_HEIGHT = react_native_1.Dimensions.get('window').height;
exports.MIN_DEVICE_WIDTH = react_native_1.Platform.OS === 'ios' ? 390 : 360;
