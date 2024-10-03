import { Text, TouchableOpacity } from "react-native";
import { ActionButton, Container, Content, Footer, Header, TextTop, TextOption } from "./styles"
import { Feather } from '@expo/vector-icons';

interface DeleteAllTasksProps {
  onClose: () => void; 
}

export function DeleteAllTasks({onClose}: DeleteAllTasksProps){
  return(
    <Container>
      <Header>
        <TextTop style={{textAlign: 'center' , flex: 1}} >Tem certeza?</TextTop>
        <TouchableOpacity onPress={onClose}><Feather style={{marginLeft: 'auto'}} name="x" size={24} color="black" ></Feather></TouchableOpacity>
      </Header>
      <Content>
        <Text>Tem certeza que deseja apagar tudo?</Text>
      </Content>
      <Footer>
         <ActionButton><TextOption>Sim</TextOption></ActionButton>
          <Text style={{padding: 5, fontSize: 24, fontWeight: 'bold', color:'#fff'}}>|</Text>
          <ActionButton onPress={onClose}><TextOption>Não</TextOption></ActionButton>          
      </Footer>
    </Container>
  );
}