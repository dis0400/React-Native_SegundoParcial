import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SearchResultCard = ({ result }) => (
  <View style={styles.card}>
    <Image source={{ uri: result.url }} style={styles.image} />
    <Text style={styles.caption}>{result.caption}</Text>
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
    height: 100,
  },
  caption: {
    padding: 10,
    fontSize: 16,
  },
});

export default SearchResultCard;
