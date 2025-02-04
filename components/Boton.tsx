import { Pressable, Text, StyleSheet, type TextProps } from "react-native";
import { GlobalStyles } from "@/theme/GlobalStyles";
import { RelativePathString , Link} from "expo-router";


interface Props {
    label: string,
    backgroundColor: 'azul' | 'gris',
    width?:  number,
    onPress?: () => void;
    link: RelativePathString; 
}


export const Boton = ({label, backgroundColor,width, onPress, link}:Props) => {
    const accion = (() => {
        if (onPress) onPress();
    })
    
    return (
        
        <Pressable>
            <Link 
                style={[GlobalStyles.boton,
                    backgroundColor === 'azul' ? GlobalStyles.botonAzul:null, backgroundColor ==='gris' 
                    ?GlobalStyles.botonGris:null,
                    {width},
                ]}
                onPress={accion}
                href={link}>{label}
            </Link>
        </Pressable>
    )
};
export default Boton