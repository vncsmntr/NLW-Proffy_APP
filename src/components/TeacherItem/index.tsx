import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import HeartIconOutline from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import WhatsAppIcon from '../../assets/images/icons/whatsapp.png';
function TeacherItem() {
  return (
    <View style={styles.container} >
      <View style={styles.profile} >
        <Image 
        style={styles.avatar} 
        source={{ uri: 'https://github.com/vncsmntr.png' }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Vinicius Monteiro</Text>
          <Text style={styles.subject}>Português</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        {'\n'}{'\n'}
        Maecenas ultricies eros augue. 
        Nam porttitor risus a ex scelerisque, non posuere magna consequat. 
        Aliquam eleifend dolor porta leo mattis, quis dapibus neque ultrices. 
        Aliquam venenatis leo augue, quis fermentum purus maximus nec. 
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>
            Preço/Hora {'   '}
            <Text style={styles.priceValue}>R$ 20,00</Text>
          </Text>
          <View style={styles.buttonsContainer}>
            <RectButton style={[styles.favoriteButton, styles.favorited]}>
              {/* <Image source={HeartIconOutline}/> */}
              <Image source={unfavoriteIcon}/>
            </RectButton>

            <RectButton style={styles.contactButton}>
              <Image source={WhatsAppIcon}/>
              <Text style={styles.contactButtonText}>Entrar em contato</Text>
            </RectButton>
          </View>
        </View>
    </View>
  );
}

export default TeacherItem;