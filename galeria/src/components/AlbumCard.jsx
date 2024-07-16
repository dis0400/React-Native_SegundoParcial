import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 2;

const AlbumCard = ({ album }) => (
  <View style={styles.card}>
    <Image source={{ uri: album.coverUrl }} style={styles.image} />
    <Text style={styles.title}>{album.title}</Text>
    <Text style={styles.count}>{album.count} photos</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: itemWidth - 10, // Ajustar para margen y padding
    height: itemWidth - 1, // Mantener relación de aspecto cuadrada
  },
  title: {
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  count: {
    padding: 5,
    fontSize: 14,
    color: 'gray',
  },
});

export default AlbumCard;

