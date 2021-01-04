import React from 'react';
import {SafeAreaView, View,Image, StyleSheet, Dimensions} from 'react-native';
import {Input, Button} from './components'

// You can test your code with "npm test" (or "yarn test" if you using yarn)

function Login() {
  return <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={require('./assets/logo.png')}
        resizeMode="contain"
        />
        <Input 
          placeholder="E-Posta"
        />
        <Input 
          placeholder="Şifre"
        />
        <Button 
          title="Giriş Yap"
        />
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 25,
    width: Dimensions.get('window').width*0.5,
    height: Dimensions.get('window').width*0.25
  }

})

export default Login;
