import React,{Fragment} from 'react';
import {Button, Platform,Alert} from 'react-native';
const getTime = _ =>{
    const time = new Date();
    console.warn(`${time.getHours()}:${time.getMinutes()}`);
} 

const Botao = props =>{
    return(
        <Fragment>
            <Button title="Pegar hora" onPress={getTime}/>
            <Button title="Meu sistema" onPress={
                _ =>{
                    console.warn(`Seu sistema é ${Platform.OS}`)
                }
            }/>
        </Fragment>
    );
}

export default Botao;