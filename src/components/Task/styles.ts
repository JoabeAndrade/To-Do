import styled from "styled-components/native";

export const ContainerTask = styled.View`
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
  margin-top: 10px;
  width: 100%;
  height: 65px;
  background-color: #cbc1d3;
  elevation: 5;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const Check = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const TaskTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const TaskButtonStatus = styled.TouchableOpacity`
  flex: 1;
`;

export const Favorite = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
