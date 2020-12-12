import React from 'react';
import {SafeAreaView, View,Image, Dimensions} from 'react-native';
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
    backgroundColour: 'white'
  },
  image: {
    marginVertical: 20,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.3
  }

})

export default Login;
