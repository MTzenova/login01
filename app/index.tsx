import { Image, View, TextInput, Text, Pressable, Alert } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { router } from 'expo-router';
import Boton from '@/components/Boton';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '@/Firebaseconfig';
//pantalla de login
export default function HomeScreen() {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const logIn = async () =>{
    try{
      const user = await(signInWithEmailAndPassword(auth,email,password));
      if(user) router.replace('./(tabs)/bbdd')
    }catch(error:any){
      console.log(error);
      Alert.alert("Inicio de sesión incorrecto",error.message);
    }
  }
  const register = async () => {
    try{
      const user = await(createUserWithEmailAndPassword(auth,email,password))
      if(user) router.replace('./(tabs)/bbdd')
    }catch(error:any){
      console.log(error);
      Alert.alert("Error al registrar el usuario",error.message);
    }
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#A1CEDC' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={GlobalStyles.reactLogo}
        />
      }>
      
      <View style={GlobalStyles.contenedor}>

        <Text style={GlobalStyles.textoIniciarsesion}>INICIAR SESIÓN</Text>

        <View style={GlobalStyles.contenedorInput}>

          <Text style={GlobalStyles.textoCorreoContra}>Introduce tu correo electrónico:</Text>

          <TextInput
          style={GlobalStyles.input}
          placeholder="Email" value={email} onChangeText={setEmail}/>

          <Text style={GlobalStyles.textoCorreoContra}>Introduce tu contraseña:</Text>

          <TextInput
          style={GlobalStyles.input}
          placeholder="Contraseña" secureTextEntry={true} value={password} onChangeText={setPassword}/>

        </View>

        <View style={GlobalStyles.contenedorRegistroAcceder}>

          <Pressable>
            <Text style={GlobalStyles.registrar} onPress={register}>Regístrate aquí</Text>
          </Pressable>

          <Pressable onPress={logIn}>
            <Text>Login</Text>
          </Pressable>
          
        </View>
        
      </View>
      
    </ParallaxScrollView>
  );
}

