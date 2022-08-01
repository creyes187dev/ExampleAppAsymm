import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from 'navigation/Routes';
import {Screen1} from 'screens/Screen1';
import {Screen2} from 'screens/Screen2';

const Stack = createNativeStackNavigator();
export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Screen1} component={Screen1} />
      <Stack.Screen name={Routes.Screen2} component={Screen2} />
    </Stack.Navigator>
  );
};
