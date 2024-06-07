import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Barra de pesquisa */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar..."
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color="#007bff" />
        </TouchableOpacity>
      </View>

      {/* Título e Categorias */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Categorias</Text>
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

      {/* Texto sobre a poluição nos oceanos */}
      <Text style={styles.paragraph}>
        O oceano carrega consigo um fardo alarmante: cerca de 2.3 milhões de toneladas de plástico flutuam em suas águas, com o Brasil contribuindo com impressionantes 325 mil toneladas anualmente. Esta é uma carga que não só afeta a vida marinha, mas também causa impacto direto nas comunidades costeiras e no delicado equilíbrio dos ecossistemas marinhos.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007bff',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
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
  paragraph: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
});
