import React from 'react';
import {Text} from 'react-native';
const Comp = props=>{
    console.warn('Opa!');
    return(
        <Text>
            Componente Oficial
        </Text>
    )
}

const Comp1 = props=>{
    return(
        <Text>
            Compoente 1
        </Text>
    )

}
const Comp2 = props=>{
    return(
        <Text>
            Componente 2
        </Text>
    )

}
export {Comp1};
export default Comp;