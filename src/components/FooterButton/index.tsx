import Feather from "@expo/vector-icons/Feather";
import { useState, useRef } from "react";
import {
  AddConclude,
  AddConcludeTitle,
  BinOff,
  BinOffTitle,
  Buttons,
  ContainerFooter,
} from "./styles";
import { Modal, View, Animated, Easing } from "react-native";
import { AddTask } from "../modal/addTask";

interface FooterButtonProps {
  onAddTask: (task: { title: string; description: string }) => void;
}

export function FooterButton({ onAddTask }: FooterButtonProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const oppenModal = () => {
    setModalVisible(true);
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };
  const closeModal = () => {
    setModalVisible(false);
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const modalTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  return (
    <ContainerFooter>
      <Buttons>
        <AddConclude onPress={oppenModal}>
          <AddConcludeTitle>Adicionar novo</AddConcludeTitle>
          <Feather name="plus-square" size={24} color="white" />
        </AddConclude>
        <BinOff>
          <BinOffTitle>Lixeira</BinOffTitle>
          <Feather name="trash-2" size={24} color="white" />
        </BinOff>
      </Buttons>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddTask closeModal={closeModal} onAddTask={onAddTask} />
        </View>
      </Modal>
    </ContainerFooter>
  );
}
