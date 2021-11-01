import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import HomeSubScreen from '../screens/HomeSubScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ActivityScreen from '../screens/ActivityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UploadScreen from '../screens/UploadScreen';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ActivityStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreens = () => (
  <HomeStack.Navigator
    screenOptions={{ headerShown: false }}
    detachInactiveScreens={false}>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    <HomeStack.Screen name="HomeSubScreen" component={HomeSubScreen} />
  </HomeStack.Navigator>
);

const ExploreStackScreens = () => (
  <ExploreStack.Navigator
    screenOptions={{ headerShown: false }}
    detachInactiveScreens={false}>
    <ExploreStack.Screen name="ExploreScreen" component={ExploreScreen} />
  </ExploreStack.Navigator>
);

const ActivityStackScreens = () => (
  <ActivityStack.Navigator
    screenOptions={{ headerShown: false }}
    detachInactiveScreens={false}>
    <ExploreStack.Screen name="ActivityScreen" component={ActivityScreen} />
    <ExploreStack.Screen name="ActivitySubScreen" component={ActivityScreen} />
  </ActivityStack.Navigator>
);

const ProfileStackScreens = () => (
  <ProfileStack.Navigator
    screenOptions={{ headerShown: false }}
    detachInactiveScreens={false}>
    <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

const CustomButton = ({ children, onPress }) => (
  <TouchableOpacity style={[styles.plus, styles.shadow]} onPress={onPress}>
    <View style={{ width: 70, height: 70 }}>{children}</View>
  </TouchableOpacity>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'green',
        tabBarStyle: [styles.container, styles.shadow, null],
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home-outline';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'magnify' : 'magnify';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'bell' : 'bell-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          }

          return <Icon name={iconName} size={20} color="red" />;
        },
      })}>
      <Tab.Screen name="Explore" component={ExploreStackScreens} />
      <Tab.Screen name="Home" component={HomeStackScreens} />
      <Tab.Screen
        name="Upload"
        component={UploadScreen}
        // screenOptions={{
        //   tabBarIcon: () => <Icon name="plus" size={30} color="blue" />,
        // }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="plus" size={30} color="violet" />
          ),
          tabBarButton: props => <CustomButton {...props} />,
        }}
      />
      <Tab.Screen name="Activity" component={ActivityStackScreens} />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreens}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
            // Do something with the `navigation` object
            navigation.navigate('Profile');
          },
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 90,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  plus: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabNavigator;
