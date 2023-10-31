import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import OnBoarding from './screen/OnBoarding';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import { ActivityIndicator, Text, View } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  const [isFirstLunch, setIsFirstLunch] = React.useState(false)
  const [isLoggedin, setIsLoggedin]       = React.useState(false)
  const [user, setUser]       = React.useState(null)
  const [isLoading, setIsLoading]       = React.useState(true)

  React.useEffect(() => { 
    AsyncStorage.getItem('isAppLunched')
    .then(value => {
      console.log(value)
      if(value == "YES") {
        setIsFirstLunch(false)
        setIsLoading(false)
      }
      else {
        console.log("Else Block")
        AsyncStorage.setItem('isAppLunched', "YES");
      }
    })
    .catch(e => AsyncStorage.setItem('isAppLunched', "YES"))
  }, [])

  const AuthContext = React.createContext("")

  if (!fontsLoaded || isLoading) {
    return (
      <View style={{flex: 1, justifyContent: "center"}}>
        <ActivityIndicator size={50} color={"black"} />
      </View>
    )
  }
  else {
    return (
      <AuthContext.Provider>
        <NavigationContainer>
          { isFirstLunch ? <OnBoarding /> : <Text>AuthScreen</Text> }
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
}

