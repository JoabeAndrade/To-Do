import styled from "styled-components/native";
import { ImageBackground, Platform, KeyboardAvoidingView } from "react-native";

export const KeyBoard = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? 56 : 0}px;
`;

export const Footer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: #cbc1d3;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
`;
