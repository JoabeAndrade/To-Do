import Feather from "@expo/vector-icons/Feather";
import { Image, Text, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";



const DetailsTask = () => {
  const [editable, setIsEditable] = useState(false);
  const [descricao, setDescricao] = useState("Lorem ipsum dolor sit amet...");
  const [imageSource, setImageSource] = useState(
    require("../../assets/img/DetailsTask/Editar.png")
  );

const [tasks, setTasks] = useState<TaskProps[]>([]);

//carregar tasks do armazenamento local
  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem("@tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks)); // Converter para array novamente
      }
    } catch (error) {
      console.log("Erro ao carregar tasks: ", error);
    }
  };

  //salvar mudaças no armazenamento local
  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem("@tasks", JSON.stringify(tasks)); // Armazenar as tasks como string
    } catch (error) {
      console.log("Erro ao salvar tasks: ", error);
    }
  };

  //carregar tasks ao montar tela
  useEffect(() => {
    loadTasks();
  }, []);

const navigation = useNavigation();
  
//trocar .deleted da tasks para verdadeiro
  const OnDelete = (titulo:string) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title === titulo) {
      tasks[i].deleted = true;
    }
    saveTasks();
    navigation.navigate("Home");
  }
  
  };
  //pegando a task que foi enviada por props
  const route = useRoute();
  const { task } = route.params as { task: TaskProps }; 
    console.log(task);

//trocar o modo de edição
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
            <BinOff onPress={()=>{OnDelete(task.title)}}>
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
