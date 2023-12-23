import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../componentes/InformacoesUsuario/styles";
import skeletonPerLoading from "../../assets/shimmer.gif";

export function InformacaoUsuarioSkeleton() {
  return (
    <View style={[styles.container, { backgroundColor: '#FFFF', borderRadius: 8 }]}>
      <Image source={skeletonPerLoading} style={[styles.foto, { overlayColor: '#FFFF', margin: 5 }]} />
      <View style={styles.informacoes}>
        <Image source={skeletonPerLoading} style={[styles.foto, { width: '90%', height: 30, marginTop: 5, overlayColor: '#FFFF', borderRadius: 5 }]} />
        <Image source={skeletonPerLoading} style={[styles.foto, { width: '40%', height: 15, marginTop: 5, marginBottom: 5, overlayColor: '#FFFF', borderRadius: 5 }]} />
      </View>
    </View>
  );
}