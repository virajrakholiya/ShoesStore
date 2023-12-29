import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import WelcomeScreen from './src/Login-Screen/WelcomeScreen';
import LoginScreen from './src/Login-Screen/LoginScreen';
import MainScreen from './src/mainScreen/MainScreen';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}></Stack.Screen>
        <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="MainScreen" component={MainScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
