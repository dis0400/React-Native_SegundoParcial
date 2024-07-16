import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, Dimensions } from 'react-native';
import {Header} from '../layouts/Header';
import { searchResults, people, places, categories } from '../data/sampleData';


const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 3;

const SearchScreen = () => {
  const renderPeople = ({ item }) => (
    <View style={styles.circleContainer}>
      <Image source={{ uri: item.url }} style={styles.circleImage} />
      <Text style={styles.circleText}>{item.name}</Text>
    </View>
  );

  const renderPlaces = ({ item }) => (
    <View style={styles.rectangleContainer}>
      <Image source={{ uri: item.url }} style={styles.rectangleImage} />
      <Text style={styles.rectangleText}>{item.name}</Text>
    </View>
  );

  const renderCategories = ({ item }) => (
    <View style={styles.rectangleContainer}>
      <Image source={{ uri: item.url }} style={styles.rectangleImage} />
      <Text style={styles.rectangleText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style = {styles.header}>
      <Header title="Search" />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
      />
      <Text style={styles.sectionTitle}>People</Text>
      <FlatList
        data={people}
        renderItem={renderPeople}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.horizontalList}
      />
      <Text style={styles.sectionTitle}>Places</Text>
      <FlatList
        data={places}
        renderItem={renderPlaces}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.horizontalList}
      />
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategories}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.horizontalList}
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
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  horizontalList: {
    paddingLeft: 10,
    paddingVertical: 10,
  },
  circleContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  circleImage: {
    width: itemWidth,
    height: itemWidth,
    borderRadius: itemWidth / 2,
  },
  circleText: {
    marginTop: 5,
    textAlign: 'center',
  },
  rectangleContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  rectangleImage: {
    width: itemWidth,
    height: itemWidth,
    borderRadius: 8,
  },
  rectangleText: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default SearchScreen;

