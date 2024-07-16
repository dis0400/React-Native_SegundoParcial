import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import PhotoCard from '../components/PhotoCard';
import { featuredPhotos } from '../data/sampleData';
import { Header } from '../layouts/Header';

const numColumns = 1;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / numColumns;

const ForYouScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <PhotoCard photo={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="For You"/>
      </View>
      <FlatList
        data={featuredPhotos}
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

export default ForYouScreen;
