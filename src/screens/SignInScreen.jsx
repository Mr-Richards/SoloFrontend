// login
// sign up
// continue as guest

import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../assets/images/translate-app-180.png';
import { CustomInput } from '../components/CustomInuput';
import { CustomButton } from '../components/CustomButton';
import { SocialSignInButtons } from '../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

export const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn('SignIn ');
    // validate user

    navigation.navigate('CameraScreen');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    console.warn('Sign Up');
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        ></Image>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          text="Sign In"
          onPress={onSignInPressed}
          type={'PRIMARY'}
        />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an accout? Create one."
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 80,
    paddingLeft: 55,
    paddingRight: 55,
    backgroundColor: 'white',
  },
  logo: {
    width: '70%',
    maxWidth: 150,
    maxHeight: 150,
  },
});
