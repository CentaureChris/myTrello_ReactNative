import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Login } from "./views/login";
import { Register } from "./views/register";
import { Board } from "./views/board";
import { Project } from "./views/project";


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabNav(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>  
  );
}

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="TabNav" component={TabNav} />
          <Stack.Screen name="Board" component={Board} />
          <Stack.Screen name="Project" component={Project} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

