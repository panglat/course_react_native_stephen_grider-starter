import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';

const ImageDetail = ({imageSource, score, title}) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score: {score}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageDetail;