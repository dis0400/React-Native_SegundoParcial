import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import AlbumCard from '../components/AlbumCard';
import { albums } from '../data/sampleData';
import {Header} from '../layouts/Header';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / numColumns;

const AlbumsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <AlbumCard album={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Header title="Albums"/>
      </View>
      <FlatList
        data={albums}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 60,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingHorizontal: 1,
  },
  itemContainer: {
    width: itemWidth,
    padding: 1,
  },
});

export default AlbumsScreen;
