import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChevronLeft,  User, Home } from "react-native-feather";
import { TouchableOpacity } from 'react-native';



import Login from './src/components/Login';
import Menu from './src/components/Menu';
import Perfil from './src/components/Perfil';
import Soon from './src/components/Soon';
import Load from './src/components/Load';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarHideOnKeyboard: true,
      tabBarVisibilityAnimationConfig: {
        hide: {config: {duration: 0}},
        show: {config: {duration: 0}}
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#345236",
      tabBarInactiveTintColor: "#D9D9D9",
      borderTopColor: "transparent",
      tabBarStyle: {
        backgroundColor: "#fff",
        height: 75,
      },
    }}

    >
      <Tab.Screen
      name='Inicio'
      component={Menu}
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Home
          color={color}
          width={55}
          height={55}/>
        )
      }}/>

      <Tab.Screen 
      name='Perfil'
      component={Perfil}
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <User
          color={color}
          width={55}
          height={55}/>
        )
      }}/>
    </Tab.Navigator>
  )
}


export default function App( navigation ) {
  return (
    <NavigationContainer initialRouteName='Load'>
      <Stack.Navigator>
        <Stack.Screen
        name='Load'
        component={Load}
        options={{
          headerShown: false
        }}/>

      
        <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false
        }}/>

        <Stack.Screen
        name='Menu'
        component={Tabs}
        options={{
          headerShown: false
        }}/>

        <Stack.Screen
        name='Perfil'
        component={Perfil}
        options={{
          headerTintColor:"#f98"
        }}/>

        <Stack.Screen
        name='Soon'
        component={Soon}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: '',
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ChevronLeft
                color="#fff"
                width={40}
                height={40}/>
            </TouchableOpacity>
          ),
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

