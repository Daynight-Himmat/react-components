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
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_svg_1 = __importStar(require("react-native-svg"));
const CheckIcon = ({ size, color }) => (<react_native_svg_1.default width={size} height={size} viewBox="0 0 17 12" fill={color}>
    <react_native_svg_1.Path d="M7.27431 11.4818C6.88907 11.8992 6.23401 11.9123 5.8324 11.5106L0.292433 5.97067C-0.104655 5.57358 -0.0969935 4.92745 0.309397 4.53989L0.9927 3.88825C1.38569 3.51347 2.00596 3.52082 2.38995 3.90481L5.3544 6.86927C5.70921 7.22407 6.27201 7.261 6.67014 6.95561L15.5294 0.160008C15.8378 -0.0765669 16.2738 -0.0479552 16.5487 0.226898C16.84 0.518236 16.8523 0.986646 16.5767 1.29289L12.5684 5.7466L7.27431 11.4818Z"/>
  </react_native_svg_1.default>);
exports.default = CheckIcon;
