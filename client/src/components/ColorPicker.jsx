import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';
import { color } from 'framer-motion';

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div
      className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          '#000000',
          '#FFFFFF',
          '#f0f8ff',
          '#faebd7',
          '#00ffff',
          '#7fffd4',
          '#f0ffff',
          '#f5f5dc',
          '#ffe4c4',
          '#ffebcd',

        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker