import { Text, TouchableOpacity } from "react-native";
import {Container, Header, Recicle, TitleHeader, TitleContent, Delete, Content} from "./styles"
import { Feather } from '@expo/vector-icons';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

interface DeleteTaskProps {
  onClose: () => void;
  onDelete: () => void;
  onReciclar: () => void;


}

export default function DeleteTask({onClose, onDelete, onReciclar}:DeleteTaskProps){
  return(
    <Container>
      <Header>
        <TitleHeader>Titulo da task</TitleHeader>
        <TouchableOpacity onPress={onClose}><Feather style={{marginLeft: 'auto'}} name="x" size={24} color="black" ></Feather></TouchableOpacity>
      </Header>
      <Content>
        <Recicle onPress={onReciclar}>
          <TitleContent >Reciclar</TitleContent>
          <FontAwesome name="recycle" size={24} color="white" />
        </Recicle>
        <Delete onPress={onDelete}>
          <TitleContent>Deletar</TitleContent>
          <MaterialIcons name="delete" size={24} color="white"  />
        </Delete>
      </Content>
    </Container>
  );
}