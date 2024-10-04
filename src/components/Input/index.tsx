import { ContainerInput, DivForm, Form } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

interface SerchBar {
  value: string;
  onChangeText: (text: string) => void;
  
}


export function Input({ value, onChangeText }: SerchBar) {
  return (
    <ContainerInput>
      <DivForm>
        <Feather name="check-square" size={24} color="black" />
        <Form placeholder="Pesquisar tarefa" placeholderTextColor={"#000"} value={value} onChangeText={onChangeText}/>
      </DivForm>
      <Feather name="search" size={24} color="black" />
    </ContainerInput>
  );
}
