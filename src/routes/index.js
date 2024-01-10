import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import SingIn from '../pages/SingIn';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SingIn" component={SingIn} />
    </Stack.Navigator>
  );
}
