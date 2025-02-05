import { StyleSheet, Image, Platform, View, Text } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { GlobalStyles } from '@/theme/GlobalStyles';
import Boton from '@/components/Boton';

export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1D3D47', dark: '#1D3D47' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={GlobalStyles.headerImageBBDD}
        />
      }>
      
      <View style={GlobalStyles.contenedorDesconectar}>
        <Text style={GlobalStyles.textoBaseDatos}>Datos de la base de datos</Text>
      </View>
      
    </ParallaxScrollView>
  );
}
