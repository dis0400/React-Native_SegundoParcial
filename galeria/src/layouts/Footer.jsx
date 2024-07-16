import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import LibraryScreen from '../screens/LibraryScreen';
import ForYouScreen from '../screens/ForYouScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: 'gray',
        },
      })}
    >
      <Tab.Screen name="Library" component={LibraryScreen} options={{ headerShown: false }} />
      <Tab.Screen name="For You" component={ForYouScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Albums" component={AlbumsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};
function setIcon(route, routeStatus) {
    let iconName = "home";
    let color = routeStatus.focused ? 'blue' : 'gray';
    if (route.name === 'Library') {
      iconName = 'image';
    } else if (route.name === 'For You') {
      iconName = 'heart';
    } else if (route.name === 'Albums') {
      iconName = 'book';
    } else if (route.name === 'Search') {
      iconName = 'search';
    }
    return <AwesomeIcon name={iconName} size={20} color={color} />;
  }
export default Footer;
