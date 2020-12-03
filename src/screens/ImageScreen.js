import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return <View>
    <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score={9} />
    <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score={7} />
    <ImageDetail title="Mountrain" imageSource={require('../../assets/mountain.jpg')} score={10} />
  </View>
};

const style = StyleSheet.create({});

export default ImageScreen;