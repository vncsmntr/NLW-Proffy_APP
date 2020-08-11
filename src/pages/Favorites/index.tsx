import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';

function Favorites() {
  return (
    <View style={styles.container}>
    <PageHeader title="Meus proffys Favoritos" />
    
  </View>
  );
}

export default Favorites;