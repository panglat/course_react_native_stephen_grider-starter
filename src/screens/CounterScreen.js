
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

const CounterScreen = ({}) => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title="Increse" onPress={() => setCounter(counter + 1)}/>
      <Button title="Decrease" onPress={() => setCounter(counter - 1)}/>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;