import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, LayoutAnimation } from "react-native";
import { InformacoesUsuario } from "../../componentes/InformacoesUsuario";
import { CardConsulta } from "../../componentes/CardConsulta";
import { TelaDeFundo } from "../../componentes/TelaDeFundo";
import soniaFoto from "../../assets/sonia.png";
import pacientes from "./pacientes";
import styles from "./styles";
import { CardSkeletonLoading } from "../../skeletonLoading/CardConsulta";
import { InformacaoUsuarioSkeleton } from "../../skeletonLoading/InformacoesUsuario";
import { Paciente } from "../../../types/pacientes";
import { layoutAnimationLisagem } from "../../../animations";

export default function Principal({ navigation }) {
  const [loadingCads, setLoading] = useState<Boolean>(true);
  const [loadingPerfil, setLoadingPerfil] = useState<Boolean>(true);

  LayoutAnimation.configureNext(layoutAnimationLisagem, () => console.log('Animação listagem terminada!'));

  const renderItens = (pacientes: Paciente[]) => {
    if (loadingCads) {
      return (
        <FlatList
          data={pacientes}
          keyExtractor={item => String(item.id)}
          renderItem={() =>
            <CardSkeletonLoading />
          }
          showsVerticalScrollIndicator={false}
          style={styles.containerFlat}
        />

      );
    }
    return (<FlatList
      data={pacientes}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) =>
        <TouchableOpacity onPress={() => navigation.navigate("Detalhes", item)}>
          <CardConsulta {...item} />
        </TouchableOpacity>
      }
      showsVerticalScrollIndicator={false}
      style={styles.containerFlat}
    />)

  }

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 5000);

    setInterval(() => {
      setLoadingPerfil(false);
    }, 1000);

  }, []);

  return (
    <TelaDeFundo>
      <View style={styles.container}>       
        {(loadingPerfil)
          ? <InformacaoUsuarioSkeleton />
          :
          <InformacoesUsuario
            nome="Olá Sônia"
            detalhes="Mais 4 consultas hoje"
            foto={soniaFoto}
          />}

        <Text style={styles.texto}>Hoje</Text>
        {renderItens(pacientes)}
      </View>
    </TelaDeFundo>
  );
}