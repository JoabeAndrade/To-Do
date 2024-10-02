import Feather from "@expo/vector-icons/Feather";
import { Image, Text, TouchableOpacity } from "react-native";
import {
  Contaiener,
  Descricao,
  ContaienerTopo, 
  ContainerDescricao, 
  ContainerTitleTask, 
  TitleTask,
  TitleDescricao,
  Background} from "../DetailsTask/styles"
import {ContainerFooter,
        Buttons,
        AddConclude,
        AddConcludeTitle,
        BinOff,
        BinOffTitle
} from "../../components/FooterButton/styles"

const DetailsTask = ()=> {
  return(
  <Contaiener>
    <Background source={(require("../../assets/img/backgorund/image.jpg"))}>
      <ContaienerTopo>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/img/DetailsTask/Editar.png")}
            style={{width:62, height:62}}
          ></Image>
        </TouchableOpacity>  
      </ContaienerTopo>
      <ContainerTitleTask>
        <TitleTask>Titulo da Task</TitleTask>
      </ContainerTitleTask>
      <TitleDescricao>Descrição:</TitleDescricao>
      <ContainerDescricao>
        <Descricao>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Qui distinctio alias nemo cupiditate architecto quisquam sunt amet voluptates. 
          Ipsa voluptatibus accusamus corporis! 
          Cum perferendis voluptatem quo! Tempora magni quis sapiente?
        </Descricao>
      </ContainerDescricao>
        <ContainerFooter style={{position: "absolute", bottom: 10}}>
        <Buttons>
          <AddConclude>
            <AddConcludeTitle>Concluir</AddConcludeTitle>
            <Feather name="plus-square" size={24} color="white" />
          </AddConclude>
          <BinOff>
            <BinOffTitle>Apagar</BinOffTitle>
            <Feather name="trash-2" size={24} color="white" />
          </BinOff>
        </Buttons>
      </ContainerFooter>
    </Background>
  </Contaiener>
  );
}

export default DetailsTask;