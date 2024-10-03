import { TextInput, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
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
  onAddTask: (task: {
    title: string;
    description: string;
    completed: boolean;
    favorite: boolean;
  }) => void;
}

export function AddTask({ closeModal, onAddTask }: AddTaskProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleAddTask = () => {
    if (title && description) {
      onAddTask({ title, description, completed: false, favorite: false });
      closeModal();
    }
  };
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
        <InputAdd
          placeholder="Digite um titulo"
          value={title}
          onChangeText={setTitle}
        ></InputAdd>
      </TitleCardAdd>
      <DetailsCardAdd>
        <Texts>Detalhes</Texts>
        <InputAdd
          style={{ height: 80 }}
          placeholder="Digite uma descrição"
          multiline={true}
          numberOfLines={5}
          value={description}
          onChangeText={setDescription}
        ></InputAdd>
      </DetailsCardAdd>
      <ButtonAdd onPress={handleAddTask}>
        <TextButton>Adicionar</TextButton>
      </ButtonAdd>
    </Containertask>
  );
}
