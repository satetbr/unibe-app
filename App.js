import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Menu from './src/components/Menu';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Menu/>
    </NavigationContainer>
  );
}

