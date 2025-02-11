import { StyleSheet, Image, Platform, View, Text, TextInput, Pressable, FlatList } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { GlobalStyles } from '@/theme/GlobalStyles';
import Boton from '@/components/Boton';
import { addDoc, collection, deleteDoc, doc, getDocs, query } from '@firebase/firestore';
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

  const borrarTarea = async (id: string) =>{
    const referenciaTarea = doc(coleccionTareas,id);
    await (deleteDoc(referenciaTarea));
    console.log("Tarea eliminada:" + referenciaTarea);
    cargarDatos();
  }


  return (
    
      
      <View style={[GlobalStyles.contenedorDesconectar, {marginTop:'10%'}, {marginLeft:'10%'}, {marginRight:'10%'}]}>
        <Text style={GlobalStyles.textoBaseDatos}>Lista de tareas</Text>
        <TextInput
          style={GlobalStyles.input}
          placeholder="Introduzca una tarea" value={tarea} onChangeText={setTarea}/>
        <Pressable style={[GlobalStyles.botonGris, GlobalStyles.boton]} onPress={addTarea}>
          <Text>Add</Text>
        </Pressable>



       <FlatList data={tareas} keyExtractor={(item) => item.id} renderItem={({item}) => {
          return (
            <View>
              <Text>{item.tarea}</Text>
              <Pressable style={[GlobalStyles.botonGris, GlobalStyles.boton]}
              onPress={() => borrarTarea(item.id)}>
                <Text>Eliminar</Text>
              </Pressable>
            </View>
          )}} />


      </View>
    
  );
}
