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
const ArrowUp = ({ size = 16, color = "#1C1B1F" }) => (<react_native_svg_1.default width={size} height={size} viewBox="0 0 24 24" fill="none">
    <react_native_svg_1.Mask id="mask0_2375_2500" maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
      <react_native_svg_1.Rect x={24} y={24} width={24} height={24} rx={1} transform="rotate(-180 24 24)" fill={color}/>
    </react_native_svg_1.Mask>
    <react_native_svg_1.G mask="url(#mask0_2375_2500)">
      <react_native_svg_1.Path d="M11.2929 9.30711C11.6834 8.91658 12.3166 8.91658 12.7071 9.30711L17.3 13.9C17.6866 14.2866 17.6866 14.9134 17.3 15.3C16.9134 15.6866 16.2866 15.6866 15.9 15.3L12.7071 12.1071C12.3166 11.7166 11.6834 11.7166 11.2929 12.1071L8.1 15.3C7.7134 15.6866 7.0866 15.6866 6.7 15.3C6.3134 14.9134 6.3134 14.2866 6.7 13.9L11.2929 9.30711Z" fill={color}/>
    </react_native_svg_1.G>
  </react_native_svg_1.default>);
exports.default = ArrowUp;
