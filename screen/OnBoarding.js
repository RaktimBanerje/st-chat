import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

const OnBoarding = () => {
  return (
    <>
      <Onboarding
        bottomBarColor={"white"}
        titleStyles={{
          marginTop: 180,
          fontSize: 28,
          fontWeight: 500,
          fontFamily: 'Poppins_500Medium',
        }}
        subTitleStyles={{
          fontSize: 18,
          fontFamily: 'Poppins_400Regular',
        }}
        pages={[
          {
            backgroundColor: '#fff',
            image: <View style={styles.animationContainer}>
              <LottieView
                  autoPlay
                  style={{
                    width: 350,
                    height: 350,
                  }}
                  source={require('../assets/1.json')}
                />
            </View>,
            title: 'Welcome to the app',
            subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            backgroundColor: '#fff',
            image: <View style={styles.animationContainer}>
              <LottieView
                  autoPlay
                  style={{
                    width: 350,
                    height: 350,
                  }}
                  source={require('../assets/2.json')}
                />
            </View>,
            title: 'Welcome to the app',
            subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            backgroundColor: '#fff',
            image: <View style={styles.animationContainer}>
              <LottieView
                  autoPlay
                  style={{
                    width: 350,
                    height: 350,
                  }}
                  source={require('../assets/3.json')}
                />
            </View>,
            title: 'Welcome to the app',
            subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
        ]}
      />
    </>
  )
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});

export default OnBoarding