import { StyleSheet, Image, Platform, View, Text, Pressable } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { GlobalStyles } from '@/theme/GlobalStyles';
import Boton from '@/components/Boton';
import { getAuth } from '@firebase/auth';
import { router } from 'expo-router';
import { auth } from '@/Firebaseconfig';

export default function TabTwoScreen() {

  getAuth().onAuthStateChanged((user) =>{
      if (!user) router.replace('/');
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#D0D0D0' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={GlobalStyles.headerImage}
        />
      }>
      
      
      <Pressable style={GlobalStyles.contenedorDesconectar} onPress={() => auth.signOut()}>
        <Text style={GlobalStyles.textoDesconectar}>Desconectar</Text>
            <Text style={[GlobalStyles.botonGris, GlobalStyles.boton]}>Cerrar sesión</Text>
        </Pressable>

    </ParallaxScrollView>
  );
}
