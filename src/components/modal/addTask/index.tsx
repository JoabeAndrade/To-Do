import { TextInput, Text, TouchableOpacity } from "react-native";
import {
  TitleCardAdd,
  TopCardAdd,
  Containertask,
  DetailsCardAdd,
  Texts,
  InputAdd,
  ButtonAdd,
  TextButton,
} from "../addTask/styles";
import { Feather } from "@expo/vector-icons";

interface AddTaskProps {
  closeModal: () => void;
}

export function AddTask({ closeModal }: AddTaskProps) {
  return (
    <Containertask>
      <TopCardAdd>
        <Texts style={{ textAlign: "center", flex: 1 }}>Adicionar Novo</Texts>
        <TouchableOpacity onPress={closeModal}>
          <Feather
            style={{ marginLeft: "auto" }}
            name="x"
            size={24}
            color="black"
          ></Feather>
        </TouchableOpacity>
      </TopCardAdd>
      <TitleCardAdd>
        <Texts>Titulo da Task</Texts>
        <InputAdd placeholder="Digite um titulo"></InputAdd>
      </TitleCardAdd>
      <DetailsCardAdd>
        <Texts>Detalhes</Texts>
        <InputAdd
          style={{ height: 80 }}
          placeholder="Digite uma descrição"
          multiline={true}
          numberOfLines={5}
        ></InputAdd>
      </DetailsCardAdd>
      <ButtonAdd>
        <TextButton>Adicionar</TextButton>
      </ButtonAdd>
    </Containertask>
  );
}
