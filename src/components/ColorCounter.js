import React from 'react';
import { View, Text, Button } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrese}) => {
  return (
  <View>
    <Text>{color}</Text>
    <Button onPress={onIncrease} title={`Increase ${color}`}/>
    <Button onPress={onDecrese} title={`Decrease ${color}`} />
  </View>
  );
};

export default ColorCounter;