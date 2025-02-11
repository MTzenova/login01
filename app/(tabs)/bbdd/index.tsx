import { StyleSheet, Image, Platform, View, Text, TextInput, Pressable } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { GlobalStyles } from '@/theme/GlobalStyles';
import Boton from '@/components/Boton';
import { addDoc, collection, getDocs, query } from '@firebase/firestore';
import { auth, db } from '@/Firebaseconfig';
import { useEffect, useState } from 'react';

export default function TabThreeScreen() {

  const user = auth.currentUser;
  const coleccionTareas = collection(db,'tareas');
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState<any>([]);

  useEffect(() =>{
    cargarDatos();
  },[user]);

  const cargarDatos = async () => {
    if(user){
      const q = query(coleccionTareas);
      const datos = await getDocs(q);
      setTareas(datos.docs.map((doc) => ({...doc.data(), d: doc.id})));
      console.log(tareas);
    }
  }

  const addTarea = async () =>{
    if(user){
      await addDoc(coleccionTareas,{tarea,finalizada:false});
      setTarea('');
      cargarDatos();
    }else{
      console.log("Para añadir una tarea es preciso loguearse primero.");
    }
  }

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
        <Text style={GlobalStyles.textoBaseDatos}>Lista de tareas</Text>
        <TextInput
          style={GlobalStyles.input}
          placeholder="Introduzca una tarea"/>
        <Pressable style={[GlobalStyles.botonGris, GlobalStyles.boton]} onPress={addTarea}>
          <Text>Add</Text>
        </Pressable>

        <Boton label='Eliminar' backgroundColor='gris' link='../../../'></Boton>

      </View>
      
    </ParallaxScrollView>
  );
}
