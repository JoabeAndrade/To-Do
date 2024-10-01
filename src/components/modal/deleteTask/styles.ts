import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 100px;
  width: 85%;
  height: 235px;
  background-color: #D9D9D9;
  border-radius: 10px;
`;

export const Header = styled.View`
  padding: 10px;
  width: 100%;
  height: 60px;
  background-color: #C4C8C5;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TitleHeader = styled.Text`
  align-items: center;
  text-align: center;
  flex: 1;
  font-size: 24px;
  font-weight: bold;
  color: #484450;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center; 
  align-items: center; 
`;

export const Recicle = styled.TouchableOpacity`
  padding: 10px;
  width: 70%;
  height: 45px;
  background-color: #3D9E1B;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Delete = styled.TouchableOpacity`
  padding: 10px;
  width: 70%;
  height: 45px;
  background-color: #CF0000;
  border-radius: 10px;
  margin-top: 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
`;

export const TitleContent = styled.Text`
  margin-left: 25px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  flex: 1;
`;
