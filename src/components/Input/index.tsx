import { ContainerInput, DivForm, Form } from "./styles";
import Feather from "@expo/vector-icons/Feather";

export function Input() {
  return (
    <ContainerInput>
      <DivForm>
        <Feather name="check-square" size={24} color="black" />
        <Form placeholder="Pesquisar tarefa" placeholderTextColor={"#000"} />
      </DivForm>
      <Feather name="search" size={24} color="black" />
    </ContainerInput>
  );
}
