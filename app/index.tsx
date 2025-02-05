import { Image, StyleSheet, Platform, View, TextInput, Text, Pressable, Alert } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { router } from 'expo-router';
import Boton from '@/components/Boton';
//pantalla de login
export default function HomeScreen() {
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
          placeholder="Email"/>

          <Text style={GlobalStyles.textoCorreoContra}>Introduce tu contraseña:</Text>

          <TextInput
          style={GlobalStyles.input}
          placeholder="Contraseña" secureTextEntry={true}/>

        </View>

        <View style={GlobalStyles.contenedorRegistroAcceder}>

          <Pressable onPress={()=>{router.push('./(tabs)/bbdd')}}>
            <Text style={GlobalStyles.registrar} onPress={() => Alert.alert("Registrado correctamente.")}>Regístrate aquí</Text>
          </Pressable>

          <Boton label='Acceder' backgroundColor='azul' link='./(tabs)/bbdd'></Boton>
          
        </View>
        
      </View>
      
    </ParallaxScrollView>
  );
}

