import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Salvem os oceanos</Text>
      </View>

      <View style={styles.categoriesContainer}>
        {/* Ícones e texto das categorias */}
        <TouchableOpacity onPress={() => alert('Aviso')} style={styles.categoryItem}>
          <Ionicons name="alert" size={48} color="#007bff" />
          <Text style={styles.categoryText}>Aviso</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Telefones')} style={styles.categoryItem}>
          <Ionicons name="call" size={48} color="#007bff" />
          <Text style={styles.categoryText}>Telefones</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Câmeras')} style={styles.categoryItem}>
          <Ionicons name="camera" size={48} color="#007bff" />
          <Text style={styles.categoryText}>Câmeras</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.conscientizationContainer}>
        <Text style={styles.conscientizationText}>
          A poluição nos oceanos é um problema crescente que afeta diretamente a vida marinha e o equilíbrio dos ecossistemas. Junte-se a nós na luta pela conscientização e preservação dos nossos preciosos recursos marinhos.
        </Text>
      </View>

      <Text style={styles.paragraph}>
        O oceano carrega consigo um fardo alarmante: cerca de 2.3 milhões de toneladas de plástico flutuam em suas águas, com o Brasil contribuindo com impressionantes 325 mil toneladas anualmente. Esta é uma carga que não só afeta a vida marinha, mas também causa impacto direto nas comunidades costeiras e no delicado equilíbrio dos ecossistemas marinhos.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0F2F1', // Azul claro
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    flex: 1,
  },
  categoryText: {
    fontSize: 16,
    color: '#007bff',
    marginTop: 8,
  },
  conscientizationContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  conscientizationText: {
    fontSize: 16,
    textAlign: 'justify',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
});
