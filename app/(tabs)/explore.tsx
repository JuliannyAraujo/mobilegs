import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sobre</ThemedText>
      </ThemedView>
      <ThemedText> Nosso aplicativo visa fornecer uma abordagem inovadora para enfrentar o problema da poluição nos oceanos, oferecendo uma ferramenta poderosa para comunidades, ONGs e outras entidades comprometidas com a proteção dos nossos preciosos recursos marinhos.</ThemedText>
      <Collapsible title="Missão">
        <ThemedText>
          Nossa missão é desenvolver uma aplicação inovadora para monitorar e combater a poluição nos oceanos, auxiliando organizações não governamentais (ONGs) e outras entidades dedicadas à proteção dos oceanos.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Visão">
        <ThemedText>
          Nossa visão é criar uma plataforma abrangente que melhore significativamente a monitoração e a ação contra a poluição por plásticos nos oceanos, identificando pontos críticos de poluição e facilitando a intervenção das equipes de limpeza.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Valor">
        <ThemedText>
          Nossos valores incluem o compromisso com a proteção do meio ambiente, a promoção de práticas sustentáveis e a conscientização pública sobre os impactos ambientais do plástico nos oceanos.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
