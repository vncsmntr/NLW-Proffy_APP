import React from 'react';
import { View, Image, ImageBackground, Text, Linking } from 'react-native';
import styles from './styles'
import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {

  // FUNÇÂO PARA NAVEGAR A PAGINA ANTERIOR

  // const navigation = useNavigation();
  // function handleNavigateBack() {
  //  navigation.goBack();
  // }


  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='contain' source={giveClassesBgImage} style={styles.content}>
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa platarforma web.
        </Text>
      </ImageBackground>
      <RectButton onPress={() => Linking.openURL("https://proffynlw-omnistack.netlify.app/")} style={styles.okButton}>
          <Text style={styles.okButtonText}>
            Tudo bem, vamos a platarforma web!
          </Text>
        </RectButton>
    </View>
  );
}

export default GiveClasses;