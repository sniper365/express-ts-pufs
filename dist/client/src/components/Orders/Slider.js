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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const react_2 = require("@chakra-ui/react");
function SliderTooltip({ colorScheme, onChangeSliderValue }) {
    const [sliderValue, setSliderValue] = (0, react_1.useState)(5);
    const [showTooltip, setShowTooltip] = (0, react_1.useState)(false);
    const onClickMark = (v) => {
        setSliderValue(v);
    };
    return (<react_2.Slider id='slider' mt='2' defaultValue={5} min={1} max={100} colorScheme={colorScheme || 'green'} onChange={(v) => { setSliderValue(v); onChangeSliderValue(v); }} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <react_2.SliderMark value={2} mt='1' ml='-2.5' fontSize='sm' onClick={() => onClickMark(0)}>
        1x
      </react_2.SliderMark>
      <react_2.SliderMark value={26} mt='1' ml='-2.5' fontSize='sm' cursor='pointer' onClick={() => onClickMark(25)}>
        25x
      </react_2.SliderMark>
      <react_2.SliderMark value={51} mt='1' ml='-2.5' fontSize='sm'>
        50x
      </react_2.SliderMark>
      <react_2.SliderMark value={76} mt='1' ml='-2.5' fontSize='sm'>
        75x
      </react_2.SliderMark>
      <react_2.SliderMark value={95} mt='1' ml='-2.5' fontSize='sm'>
        100x
      </react_2.SliderMark>
      <react_2.SliderTrack>
        <react_2.SliderFilledTrack />
      </react_2.SliderTrack>
      <react_2.Tooltip hasArrow bg='bitoro.600' color='white' placement='top' isOpen={showTooltip} label={`${sliderValue}x`}>
        <react_2.SliderThumb />
      </react_2.Tooltip>
    </react_2.Slider>);
}
exports.default = SliderTooltip;
//# sourceMappingURL=Slider.js.map