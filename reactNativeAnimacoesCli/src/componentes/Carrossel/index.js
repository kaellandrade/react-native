import { useEffect, useRef, useState } from "react";
import { View, FlatList, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";

export default function Carrossel({ data,tempoAnimacao }) {
    const carroselRef = useRef();
    const [index, setIndex] = useState(0);
    const [intervalo, setIntervalo] = useState(null);

    useEffect(() => {
        carroselRef.current.scrollToIndex({ index })
        setIntervalo(setInterval(() => {
            alterarPosicaoObjeto();
        }, tempoAnimacao));


        return () => clearInterval(intervalo);
    }, [index]);

    /**
     *Altera a posição do objeto no carrossel
     * @returns 
     */
    const alterarPosicaoObjeto = () => {
        if (index < data.length - 1) {
            setIndex(index + 1);
            return;
        }
        setIndex(0);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                    const bIsUltimoCard = data.length - 1 === index;
                    const estiloUltimo = bIsUltimoCard ? { marginRight: 200 } : {};
                    return (
                        <TouchableWithoutFeedback
                            onPressIn={_ => {
                                clearInterval(intervalo);
                            }
                            }
                        >
                            <Image
                                source={item.imagem}
                                style={[styles.image, estiloUltimo]}
                                resizeMode="contain"
                            />
                        </TouchableWithoutFeedback>
                    );
                }
                }
                ref={carroselRef}
            />
        </View>
    )
}