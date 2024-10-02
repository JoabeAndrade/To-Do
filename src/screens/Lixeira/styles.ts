import { ImageBackground } from "react-native";
import styled from "styled-components/native";  

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ContainerTop = styled.View`
  flex-direction: row;
  margin: 10px;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const QuantTask = styled.View`
  border: 2px solid #fff;
  width: 100px;
  height: 50px;
  background-color: #B78DC0;
  border-radius: 13px;
  border-top-right-radius: 0px;
  text-align: center;
`;


export const Background = styled(ImageBackground)`
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const DeleteAll = styled(ImageBackground)`
  position: absolute;
  bottom: 20px;
  width: 78px;
  height: 78px;
`;

export const ContainerTask = styled.View`
  margin: 10px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 60px;
  background-color: #C4C8C5;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const TaskTitle = styled.Text`
  font-size: 25px;
  color: #484450;
`;

export const InfoTask = styled(ImageBackground)`
  width: 40px;
  height: 40px;
`;

