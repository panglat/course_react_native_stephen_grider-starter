import React, { useReducer, useState } from 'react';
import { View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const CHANGE_RED = 'CHANGE_RED';
const CHANGE_GREEN = 'CHANGE_GREEN';
const CHANGE_BLUE = 'CHANGE_BLUE';

const reducer = (state, action) => {
  const { payload, type } = action;
    switch(type) {
      case CHANGE_RED: {
        const { red } = state;
        const newValue = red + payload;
        return newValue > 255 || newValue < 0
          ? state
          : { ...state, red: newValue }
      }
      case CHANGE_GREEN: {
        const { green } = state;
        const newValue = green + payload;
        return newValue > 255 || newValue < 0
          ? state
          : { ...state, green: newValue }
      }
      case CHANGE_BLUE: {
        const { blue } = state;
        const newValue = blue + payload;
        return newValue > 255 || newValue < 0
          ? state
          : { ...state, blue: newValue }
      }
      default:
        return state;
  }
}


const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const { red, green, blue } = state;
  const COLOR_INCREMENT = 15;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({type: CHANGE_RED, payload: COLOR_INCREMENT})}
        onDecrese={() => dispatch({type: CHANGE_RED, payload: -COLOR_INCREMENT})}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({type: CHANGE_GREEN, payload: COLOR_INCREMENT})}
        onDecrese={() => dispatch({type: CHANGE_GREEN, payload: -COLOR_INCREMENT})}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({type: CHANGE_BLUE, payload: COLOR_INCREMENT})}
        onDecrese={() => dispatch({type: CHANGE_BLUE, payload: -COLOR_INCREMENT})}
      />
      <View
        style={{ height: 150, width:150, backgroundColor: `rgb(${red},${green},${blue})`}}
        />
    </View>
  )
};

export default SquareScreen;