import Feather from "@expo/vector-icons/Feather";
import { Image, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import {
  Contaiener,
  Descricao,
  ContaienerTopo,
  ContainerDescricao,
  ContainerTitleTask,
  TitleTask,
  TitleDescricao,
  Background,
} from "../DetailsTask/styles";
import {
  ContainerFooter,
  Buttons,
  AddConclude,
  AddConcludeTitle,
  BinOff,
  BinOffTitle,
} from "../../components/FooterButton/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TaskProps } from "../../screens/Home";

const DetailsTask = () => {
  const [editable, setIsEditable] = useState(false);
  const [descricao, setDescricao] = useState("Lorem ipsum dolor sit amet...");
  const [imageSource, setImageSource] = useState(
    require("../../assets/img/DetailsTask/Editar.png")
  );


  const navigation = useNavigation();
  
  const route = useRoute();
  const { task } = route.params as { task: TaskProps }; 
    console.log(task);


  const handlePressEdit = () => {
    setIsEditable(!editable);
    if (editable) {
      setImageSource(require("../../assets/img/DetailsTask/Editar.png"));
    } else {
      setImageSource(require("../../assets/img/DetailsTask/Concluir.png"));
    }
  };

  return (
    <Contaiener>
      <Background source={require("../../assets/img/backgorund/image.jpg")}>
        <ContaienerTopo>
          <TouchableOpacity>
            <Feather name="arrow-left" size={24} color="black" onPress={()=>navigation.goBack()}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressEdit}>
            <Image
              source={imageSource}
              style={{ width: 62, height: 62 }}
            />
          </TouchableOpacity>
        </ContaienerTopo>

        <ContainerTitleTask>
          <TitleTask>{task.title}</TitleTask>
        </ContainerTitleTask>

        <TitleDescricao>Descrição</TitleDescricao>

        <ContainerDescricao>
          {editable ? (
            <TextInput
              style={{ fontSize: 15, color: "#000", width: "100%" }}
              value={task.description}
              // onChangeText={setDescricao}
              multiline={true}
            />
          ) : (
            <Descricao>{task.description}</Descricao>
          )}
        </ContainerDescricao>

        <ContainerFooter style={{ position: "absolute", bottom: 10 }}>
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
};

export default DetailsTask;
