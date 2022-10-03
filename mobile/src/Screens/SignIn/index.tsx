import { useEffect, useState } from 'react';

import {
  Image,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png';

import * as AuthSession from 'expo-auth-session';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';
import { Background } from '../../components/Background';
import { GameController } from 'phosphor-react-native';
import { THEME } from '../../theme';

export function SignIn(){

  const navigation = useNavigation();


  async function handleDiscordSignIn() {

    const response = await AuthSession.startAsync({
      authUrl: "https://discord.com/api/oauth2/authorize?client_id=1022889805975126066&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40pedro-tavolaro%2Fmobile&response_type=token&scope=identify"
    });

    fetch('https://discord.com/api/users/@me', {
      headers: {
        'authorization': `Bearer ${response.params.access_token}`
      }
    })
    .then(response => response.json())
    .then(data => console.log(data));
    console.log(response)
  }

  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />

      <Heading 
        title='Encontre seu duo !'
        subtitle='Selecione o game que deseja jogar...'
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleDiscordSignIn}
      >
        <GameController 
            color={THEME.COLORS.TEXT}
            size={20}
        />
        <Text style={styles.buttonTitle}>
            Entrar com Discord
        </Text>


      </TouchableOpacity>

        <Image 
        style={styles.photoUser}
          source={{
            uri: 'https://cdn.discordapp.com/avatars/690595234459025408/a486264bff466d40d48748720c15995a'
          }}
        />

    </SafeAreaView>
    </Background>
  );
}