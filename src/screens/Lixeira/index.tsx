import Feather from "@expo/vector-icons/Feather";
import { useCallback, useEffect, useState } from "react";
import { TouchableOpacity, Text, Modal, View, FlatList } from "react-native";
import {
  Container,
  ContainerTask,
  ContainerTop,
  TaskTitle,
  DeleteAll,
  Background,
  InfoTask,
  QuantTask,
} from "./styles";
import { DeleteAllTasks } from "../../components/modal/deleteAllTasks";
import { Input } from "../../components/Input";
import { ContainerTitleTask, TitleTask } from "../DetailsTask/styles";
import DeleteTask from "../../components/modal/deleteTask";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { TaskProps } from "../Home";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Lixeira() {
  const [isInfoModalVisible, setInfoModalVisible] = useState(false);
  const [isDeleteAllModalVisible, setDeleteAllModalVisible] = useState(false);
  const [tasksTrash, setTasksTrash] = useState<TaskProps[]>([]);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [idDelete, setIdDelete] = useState<string>("");

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

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem("@tasks", JSON.stringify(tasks)); // Armazenar as tasks como string
    } catch (error) {
      console.log("Erro ao salvar tasks: ", error);
    }
  };

  const saveTasksParam = async (itens:TaskProps) => {
    try {
      await AsyncStorage.setItem("@tasks", JSON.stringify(itens)); // Armazenar as tasks como string
    } catch (error) {
      console.log("Erro ao salvar tasks: ", error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    OrganizarTask();
  }, [tasks]);

  useFocusEffect(
    useCallback(() => {
      loadTasks(); 
      OrganizarTask();
    }, [])
  );

  const abrirModalInfo = (i: string) => {
    setInfoModalVisible(true);
    setDeleteAllModalVisible(false);
  };

  const abrirModalDeleteAll = () => {
    setDeleteAllModalVisible(true);
    setInfoModalVisible(false);
  };

  const fecharModal = () => {
    setInfoModalVisible(false);
    setDeleteAllModalVisible(false);
  };

  const deletarTask = (itemTitle: string) => {
    const arrDeletar = tasks.filter((task) => task.title !== idDelete);
    setTasks(arrDeletar);
    saveTasksParam(arrDeletar); 
    OrganizarTask(); 
  };

  const reciclar = (item: string) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].title === item) {
        tasks[i].deleted = false;
      }

      saveTasks();
      OrganizarTask();
    }
  };

  const [searchText, setSearchText] = useState<string>(""); // Novo
  const FilteredTrashTask = tasksTrash.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const OrganizarTask = () => {
    const arrTrash = tasks.filter((task) => task.deleted == true);

    setTasksTrash(arrTrash);
  };

  const navigation = useNavigation();
  console.log(tasksTrash);
  return (
    <Container>
      <Background source={require("../../assets/img/backgorund/image.jpg")}>
        <ContainerTop>
          <Feather
            name="arrow-left"
            size={24}
            color="black"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <QuantTask>
            <Text style={{ textAlign: "center" }}>Quantidade</Text>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              {FilteredTrashTask.length}
            </Text>
          </QuantTask>
        </ContainerTop>

        <ContainerTitleTask>
          <TitleTask>LIXEIRA</TitleTask>
        </ContainerTitleTask>

        <Input value={searchText} onChangeText={setSearchText} />

        <FlatList
          data={FilteredTrashTask}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ContainerTask>
              <TaskTitle>{item.title}</TaskTitle>
              <TouchableOpacity
                onPress={() => {
                  setIdDelete(item.title);
                  abrirModalInfo(item.title);
                }}
              >
                <InfoTask
                  source={require("../../assets/img/lixeira/menu.png")}
                />
              </TouchableOpacity>
            </ContainerTask>
          )}
          style={{ maxHeight: 300 }}
        />

        <TouchableOpacity
          style={{ position: "absolute", bottom: 10, alignItems: "center" }}
          onPress={abrirModalDeleteAll}
        >
          <DeleteAll source={require("../../assets/img/lixeira/Lixeira.png")} />
        </TouchableOpacity>
      </Background>

      <Modal
        transparent={true}
        animationType="slide"
        visible={isInfoModalVisible || isDeleteAllModalVisible}
        onRequestClose={fecharModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          {isDeleteAllModalVisible ? (
            <DeleteAllTasks onClose={fecharModal} />
          ) : (
            <DeleteTask
              onClose={fecharModal}
              onDelete={() => deletarTask(idDelete)}
              onReciclar={() => reciclar(idDelete)}
            />
          )}
        </View>
      </Modal>
    </Container>
  );
}
