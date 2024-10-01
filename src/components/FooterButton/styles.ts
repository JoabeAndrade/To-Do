import styled from "styled-components/native";

export const ContainerFooter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 70px;
`;

export const Buttons = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AddConclude = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 55%;
  height: 45px;
  background-color: #3d9e1b;
  border-radius: 10px;
`;

export const AddConcludeTitle = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const BinOff = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 35%;
  height: 45px;
  background-color: #cf0000;
  border-radius: 10px;
`;

export const BinOffTitle = styled.Text`
  font-size: 18px;
  color: #fff;
`;
