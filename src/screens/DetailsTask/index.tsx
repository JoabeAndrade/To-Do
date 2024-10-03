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

const DetailsTask = () => {
  const [editable, setIsEditable] = useState(false);
  const [descricao, setDescricao] = useState("Lorem ipsum dolor sit amet...");
  const [imageSource, setImageSource] = useState(
    require("../../assets/img/DetailsTask/Editar.png")
  );

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
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressEdit}>
            <Image
              source={imageSource}
              style={{ width: 62, height: 62 }}
            />
          </TouchableOpacity>
        </ContaienerTopo>

        <ContainerTitleTask>
          <TitleTask>Título da Task</TitleTask>
        </ContainerTitleTask>

        <TitleDescricao>Descrição:</TitleDescricao>

        <ContainerDescricao>
          {editable ? (
            <TextInput
              style={{ fontSize: 15, color: "#000", width: "100%" }}
              value={descricao}
              onChangeText={setDescricao}
              multiline={true}
            />
          ) : (
            <Descricao>{descricao}</Descricao>
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
