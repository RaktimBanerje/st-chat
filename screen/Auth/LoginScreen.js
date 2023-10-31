import React from 'react'
import { ImageBackground } from 'react-native';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import { Button } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const LoginScreen = () => {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
           <Image source={require("../../assets/bg1.png")} style={styles.backgroundImage} />
        
            <View style={{ flexDirection: "column", padding: 40 }}>
                <View style={{marginBottom: 20}}>
                    <Text style={styles.label}>User ID</Text>
                    <TextInput style={styles.input} />
                </View>
              
                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} />
                </View>
              
                <View style={{marginTop: 45}}>
                  <Button buttonStyle={{ backgroundColor: "#0021D0", borderRadius: 30, height: 55 }} title="Login" />
                </View>
            </View>
        </ScrollView>
      </SafeAreaView>
      
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    backgroundImage: {
        height: 450,
        marginTop: -50,
        width: "100%",
    },
    label: {
        fontSize: 20, fontFamily: 'Poppins_500Medium'
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 100,
        paddingHorizontal: 20,
        borderBottomColor: "black"
    }
})

export default LoginScreen