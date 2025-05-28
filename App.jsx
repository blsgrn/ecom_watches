import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'HOME'} component={HomeScreen} />
        {/* Add other screens here as needed */}
        <Stack.Screen name={'DETAILS'} component={DetailsScreen} />
        {/* <Stack.Screen name={'PROFILE'} component={ProfileScreen} /> */}
        {/* <Stack.Screen name={'SETTINGS'} component={SettingsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});