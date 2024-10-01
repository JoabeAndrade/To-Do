import styled from "styled-components/native";
import { ImageBackground, Platform, KeyboardAvoidingView } from "react-native";

export const KeyBoard = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? 56 : 0}px;
`;

export const Expanded = styled.View`
  margin-top: 20px;
`;

export const ButtonExpanded = styled.TouchableOpacity`
  background-color: #b78dc0;
  width: 50%;
  height: 30%;
  padding: 10px;
  border-radius: 28px;
  justify-content: space-around;
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
