import styled from "styled-components/native";
import { ImageBackground, Platform, KeyboardAvoidingView } from "react-native";

export const KeyBoard = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? 56 : 0}px;
`;

export const BackGorundImage = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
`;
