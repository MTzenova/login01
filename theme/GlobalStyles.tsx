import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const GlobalStyles =  StyleSheet.create({
    /*Contenedor login*/
    contenedor:{
        //backgroundColor: Colors.blueDark,
        alignItems:  'center',
        flex: 1,
        justifyContent: 'center', 
        width:'100%',
    },
    box:{
        width: '100%',
        height: 100,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
      },
    /*Contenedor header explore*/
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
      },
    headerImageBBDD: {
        color: '#A1CEDC',
        bottom: -90,
        left: -35,
        position: 'absolute',
      },
    /*Texto iniciar sesion*/
    textoIniciarsesion:{
        fontSize:28,
        fontWeight:'bold',
        color:Colors.blueText,
        marginBottom:20,
    },
    textoCorreoContra:{
        fontSize:18,
        marginBottom:5,
        color:Colors.black,
    },
    /*Iniciar sesion*/
    input: {
        borderRadius: 30,
        padding: 15,
        fontSize: 16,
        marginBottom: 15,
        width:'100%',
        height: 50,
        backgroundColor: Colors.lightBlueInput,
        borderWidth:1,
        borderColor: Colors.blueText
    },
    contenedorInput:{
        width:'100%',
        marginBottom:20,
    },
    contenedorRegistroAcceder:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center'
    },
    /*Boton*/
    registrar:{
        textDecorationLine:'underline',
        color:Colors.blueText,
        fontSize: 18,
    },
    boton:{
        width: 'auto',
        height: 50,
        textAlign: 'center',
        padding: 10,
        fontSize: 18,
        borderRadius: 30,
        backgroundColor: Colors.blueLight,
        fontFamily:'Poppins',
        fontWeight:'bold',
    },
    botonAzul:
    {
        backgroundColor: Colors.blueButton,
        color:Colors.white,
        textAlign:'center',
        borderWidth:1,
        borderColor:Colors.blueDark
    },
    botonGris:
    {
        backgroundColor: Colors.grey,
        color: Colors.white,
        borderColor: Colors.veryDarkGrey,
        width:'auto',
        borderWidth: 1,
        height: 50,
        textAlign:'center',
    },
    /*desconectar*/
    textoDesconectar:{
        fontSize:30,
        alignSelf:'center',
        marginBottom:50,
    },
    contenedorDesconectar:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
    },
    /*bbdd*/
    textoBaseDatos:{
        fontSize:30,
        alignSelf:'center',
    }
})