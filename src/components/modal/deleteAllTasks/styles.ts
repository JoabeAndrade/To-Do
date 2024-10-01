import styled from "styled-components/native";

export const Container = styled.View`
  width: 85%;
  height: 188px;
  background-color: #D9D9D9;
  border-radius: 10px;
  margin-bottom: 100px;
`;

export const Header = styled.View`
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: #C4C8C5;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
flex-direction: row;
  width: 100%;
  height: 52px;
  background-color: #484450;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 50%;
  height: 52px;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;

export const TextTop = styled.Text`
  font-size: 24px;
  text-align: center;
`;

export const TextOption = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 5px;
`;