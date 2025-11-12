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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_svg_1 = __importStar(require("react-native-svg"));
const ClearIcon = ({ size, color }) => <react_native_svg_1.default width={size} height={size} viewBox="0 0 10 10" fill={color}>
    <react_native_svg_1.Path d="M1.68984 8.86566C1.30324 9.25226 0.676443 9.25226 0.289844 8.86566C-0.0967558 8.47906 -0.0967556 7.85226 0.289844 7.46566L2.30288 5.45263C2.79223 4.96327 2.79085 4.16944 2.29979 3.68179L0.293503 1.68943C-0.0947195 1.30391 -0.0958139 0.676318 0.291063 0.289441C0.676989 -0.0964853 1.3027 -0.0964852 1.68862 0.289441L3.70288 2.30369C4.19223 2.79305 4.98607 2.79167 5.47372 2.30061L7.46729 0.293096C7.85214 -0.0944518 8.47864 -0.0955442 8.86484 0.29066C9.25105 0.676864 9.24996 1.30336 8.86241 1.68822L6.8549 3.68179C6.36384 4.16944 6.36245 4.96327 6.85181 5.45263L8.86606 7.46688C9.25199 7.85281 9.25199 8.47851 8.86606 8.86444C8.47919 9.25132 7.8516 9.25022 7.46607 8.862L5.47372 6.85571C4.98607 6.36465 4.19223 6.36327 3.70288 6.85263L1.68984 8.86566Z"/>
  </react_native_svg_1.default>;
exports.default = ClearIcon;
