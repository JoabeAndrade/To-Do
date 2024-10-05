import { ImageBackground } from "react-native";
import styled from "styled-components/native";

export const Contaiener = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Background = styled(ImageBackground)`
  flex: 1;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const TitleDescricao = styled.Text`
  width: 100%;
  align-items: flex-start;
  font-size: 25px;
  color: #000;
  font-weight: bold;
  margin-left: 55px;
  margin-bottom: 10px;
`;

export const ContaienerTopo = styled.View`
  padding: 10px;
  margin: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerTitleTask = styled.View`
  margin-bottom: 30px;
  min-width: 330px;
  padding: 5px;
  width: 70%;
  min-height: 59px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #C4C8C5;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const TitleTask = styled.Text`
  text-align: center;
  color: #000;
  font-size: 32px;
  font-weight: bold;
`;

export const ContainerDescricao = styled.View`
  border-radius: 10px;
  background-color: #E2E8E4;
  width: 85%;
  min-height: 146px;
  align-items: center;
  justify-content: center;
  padding: 10px;

`;

export const Descricao = styled.Text`
  color: #000;
  font-size: 15px;
`;
