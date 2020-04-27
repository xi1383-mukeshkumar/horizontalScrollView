import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from '../login';
import DashboardTab from './Tab';
const Stack = createStackNavigator();

function routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logins">
        <Stack.Screen name="Logins" component={Login} />
        <Stack.Screen
          options={{headerShown: false}}
          name="DashboardTab"
          component={DashboardTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default routes;
