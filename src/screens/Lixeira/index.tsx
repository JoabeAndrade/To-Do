import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { TouchableOpacity, Text, Modal, View } from "react-native";
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

export function Lixeira() {
  const [isInfoModalVisible, setInfoModalVisible] = useState(false);
  const [isDeleteAllModalVisible, setDeleteAllModalVisible] = useState(false); 

  const abrirModalInfo = () => {
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

  return (
    <Container>
      <Background source={require("../../assets/img/backgorund/image.jpg")}>
        <ContainerTop>
          <Feather name="arrow-left" size={24} color="black" />
          <QuantTask>
            <Text style={{ textAlign: "center" }}>Quantidade</Text>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>3</Text>
          </QuantTask>
        </ContainerTop>

        <ContainerTitleTask>
          <TitleTask>LIXEIRA</TitleTask>
        </ContainerTitleTask>

        <Input />

        <ContainerTask>
          <TaskTitle>Titulo da task</TaskTitle>
          <TouchableOpacity onPress={abrirModalInfo}>
            <InfoTask source={require("../../assets/img/lixeira/menu.png")} />
          </TouchableOpacity>
        </ContainerTask>

        <ContainerTask>
          <TaskTitle>Titulo da task</TaskTitle>
          <TouchableOpacity onPress={abrirModalInfo}>
            <InfoTask source={require("../../assets/img/lixeira/menu.png")} />
          </TouchableOpacity>
        </ContainerTask>

        <TouchableOpacity
          style={{ position: "absolute", bottom: 10, alignItems: "center" }}
          onPress={abrirModalDeleteAll} 
        >
          <DeleteAll
            source={require("../../assets/img/lixeira/Lixeira.png")}
          />
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
            <DeleteTask onClose={fecharModal} />
          )}
        </View>
      </Modal>
    </Container>
  );
}
