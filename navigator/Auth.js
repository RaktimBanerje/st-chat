import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/Splash';

const Auth = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="SplashScreen" component={Splash} />
    </Stack.Navigator>
  )
}

export default Auth