import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import goBackIcon from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) =>  {
  const navigation = useNavigation();
  function handleGoback() {
    navigation.navigate('Landing')
  }


  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoback}>
          <Image source={goBackIcon} resizeMode='contain' />
        </BorderlessButton>
        <Image source={logoImage} resizeMode='contain' />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default PageHeader;