import { StyleSheet, Image, Platform, View, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { GlobalStyles } from '@/theme/GlobalStyles';
import Boton from '@/components/Boton';

export default function TabTwoScreen() {
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
      
      <View style={GlobalStyles.contenedorDesconectar}>
        <Text style={GlobalStyles.textoDesconectar}>Desconectar</Text>
        <Boton label='Sign out' backgroundColor='gris' link='../../../'></Boton>
      </View>
      
    </ParallaxScrollView>
  );
}
