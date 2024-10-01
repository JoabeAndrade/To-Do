import { useEffect } from "react";
import React from "react";
import {Container, LogoSplash, BackgroundSplash} from "./styles"
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/Navigationtypes";


type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

export function Splash(){
  const navigation = useNavigation<SplashScreenNavigationProp>();
  useEffect(() =>{
    const timer = setTimeout(() =>{
      navigation.navigate('Home');
    },2000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return( 
    <Container>
      <BackgroundSplash source={require("../../assets/img/backgorund/image.jpg")}>
        <LogoSplash source={require("../../assets/img/LogoSplashScreen/Logo.png")} >
        </LogoSplash>      
      </BackgroundSplash>
    </Container>
  );
}

