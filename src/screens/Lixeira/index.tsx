import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity, Text } from "react-native";
import {Container, 
        ContainerTask,
        ContainerTop, 
        TaskTitle, 
        DeleteAll,
        Background,
        InfoTask,
        QuantTask
} from "./styles"

import { Input } from "../../components/Input"
import { ContainerTitleTask, TitleTask } from "../DetailsTask/styles"

export function Lixeira(){
  return(
    <Container>
      <Background source={require("../../assets/img/backgorund/image.jpg")}>
        <ContainerTop>
            <Feather name="arrow-left" size={24} color="black" />
            <QuantTask>
              <Text style={{textAlign: "center"}}>Quantidade</Text>
              <Text style={{textAlign: "center", fontWeight: "bold"}}>3</Text>
            </QuantTask>
        </ContainerTop>
          <ContainerTitleTask>
            <TitleTask>LIXEIRA</TitleTask>
          </ContainerTitleTask>
        <Input></Input>
        <ContainerTask>
          <TaskTitle>
            Titulo da task
          </TaskTitle>
          <TouchableOpacity>
            <InfoTask
              source={require("../../assets/img/lixeira/menu.png")}>
            </InfoTask>
          </TouchableOpacity>
        </ContainerTask>
        <ContainerTask>
          <TaskTitle>
            Titulo da task
          </TaskTitle>
          <TouchableOpacity>
            <InfoTask
              source={require("../../assets/img/lixeira/menu.png")}>
            </InfoTask>
          </TouchableOpacity>
        </ContainerTask>
        <ContainerTask>
          <TaskTitle>
            Titulo da task
          </TaskTitle>
          <TouchableOpacity>
            <InfoTask
              source={require("../../assets/img/lixeira/menu.png")}>
            </InfoTask>
          </TouchableOpacity>
        </ContainerTask>  
        <TouchableOpacity style={{position:"absolute", bottom: 10, alignItems: "center"}}> 
          <DeleteAll source={require("../../assets/img/lixeira/Lixeira.png")}></DeleteAll>
        </TouchableOpacity>
      </Background>
    </Container>
  );
}