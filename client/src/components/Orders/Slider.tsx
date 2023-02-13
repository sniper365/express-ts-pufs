import * as React from 'react'
import { useState } from 'react'
import { Box, Slider, SliderMark, SliderTrack, SliderFilledTrack, SliderThumb, Tooltip, useSlider } from '@chakra-ui/react'

type SliderType = {
  colorScheme: string,
  onChangeSliderValue: (v: number) => void
}

export default function SliderTooltip({
  colorScheme,
  onChangeSliderValue
}: SliderType) {
  const [sliderValue, setSliderValue] = useState(5)
  const [showTooltip, setShowTooltip] = useState(false)

  const onClickMark = (v: number) => {
    setSliderValue(v)
  }

  return (
    <Slider
      id='slider'
      mt='2'
      defaultValue={5}
      min={1}
      max={100}
      colorScheme={colorScheme || 'green'}
      onChange={(v) => { setSliderValue(v); onChangeSliderValue(v) }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={2} mt='1' ml='-2.5' fontSize='sm' onClick={() => onClickMark(0)}>
        1x
      </SliderMark>
      <SliderMark value={26} mt='1' ml='-2.5' fontSize='sm' cursor='pointer' onClick={() => onClickMark(25)}>
        25x
      </SliderMark>
      <SliderMark value={51} mt='1' ml='-2.5' fontSize='sm'>
        50x
      </SliderMark>
      <SliderMark value={76} mt='1' ml='-2.5' fontSize='sm'>
        75x
      </SliderMark>
      <SliderMark value={95} mt='1' ml='-2.5' fontSize='sm'>
        100x
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='bitoro.600'
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`${sliderValue}x`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  )
}