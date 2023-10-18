import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../components/button';
import Input from '../components/input'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/home.jpg')}/>
      <Text>.</Text>
      <Text style={styles.title}>Auxílio de compras</Text>
      
      <Input placeholder='E-mail'/>
      <Input placeholder='Senha' secureTextEntry/>

      <Button onPress={() => navigation.navigate('Comanda')}>Entrar</Button>
      <Button onPress={() => navigation.navigate('Cadastro')}>Cadastrar Funcionário</Button>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#121A2C',
    fontSize: 34,
    fontWeight: 'bold',
  },

image: {
    height: 200,
    width: '100%',
    position: 'absolute',
    top: 0,
  }
  
});