import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const PhotoCard = ({ photo }) => (
  <View style={styles.card}>
    <Image source={{ uri: photo.url }} style={styles.image} />
    <Text style={styles.caption}>{photo.caption}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  caption: {
    padding: 10,
    fontSize: 16,
  },
});

export default PhotoCard;
