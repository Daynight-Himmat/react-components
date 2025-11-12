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
const ArrowDown = ({ size = 16, color = "black" }) => (<react_native_svg_1.default width={size} height={size} viewBox="0 0 24 24" fill="none">
    <react_native_svg_1.Mask id="mask0_2371_2505" maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
      <react_native_svg_1.Rect width={24} height={24} rx={1} fill="#fff"/>
    </react_native_svg_1.Mask>
    <react_native_svg_1.G mask="url(#mask0_2371_2505)">
      <react_native_svg_1.Path d="M12.7071 14.6929C12.3166 15.0834 11.6834 15.0834 11.2929 14.6929L6.7 10.1C6.3134 9.7134 6.3134 9.0866 6.7 8.7C7.0866 8.3134 7.7134 8.3134 8.1 8.7L11.2929 11.8929C11.6834 12.2834 12.3166 12.2834 12.7071 11.8929L15.9 8.7C16.2866 8.3134 16.9134 8.3134 17.3 8.7C17.6866 9.0866 17.6866 9.7134 17.3 10.1L12.7071 14.6929Z" fill={color}/>
    </react_native_svg_1.G>
  </react_native_svg_1.default>);
exports.default = ArrowDown;
