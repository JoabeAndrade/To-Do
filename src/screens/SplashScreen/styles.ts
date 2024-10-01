import { ImageBackground, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const LogoSplash = styled(ImageBackground)`
  width: 167px;
  height: 167px;
`;

export const BackgroundSplash = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;