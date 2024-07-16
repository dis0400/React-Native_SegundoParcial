import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const PeopleCard = ({ person }) => (
  <View style={styles.card}>
    <Image source={{ uri: person.url }} style={styles.image} />
    <Text style={styles.caption}>{person.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  caption: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PeopleCard;
