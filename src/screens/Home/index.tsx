import { useState } from "react";
import { FooterButton } from "../../components/FooterButton";
import { Input } from "../../components/Input";
import { Task } from "../../components/Task";
import {
  Container,
  BackgroundImage,
  KeyBoard,
  Footer,
  Expanded,
  ButtonExpanded,
} from "./styles";
import { Platform, Text, Image, View } from "react-native";
import { AddTask } from "../../components/modal/addTask";

interface TaskProps {
  title: string;
  description: string;
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleAddTask = (newTask: TaskProps) => {
    setTasks([...tasks, newTask]);
    setModalVisible(false);
  };

  const toggleTasksVisibility = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <KeyBoard behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <BackgroundImage source={require("../../assets/img/backgorund/image.jpg")}>
        <Container style={{ marginHorizontal: 10 }}>
          <Input />
          
          {/* Botão de expansão fixo, fora do contêiner expansível */}
          <ButtonExpanded
            onPress={toggleTasksVisibility}
            style={{ flexDirection: "row", alignItems: "center", marginVertical: 10, height: 50 }}
          >
            <Image
              source={
                isExpanded
                  ? require("../../assets/img/ListTask/SetaBaixo.png")
                  : require("../../assets/img/ListTask/SetaDireita.png")
              }
              style={{ width: 40, height: 40 }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>
              Pendentes {tasks.length}
            </Text>
          </ButtonExpanded>
          
          {/* Area expansível das tasks */}
          {isExpanded && (
            <View style={{ maxHeight: 300, overflow: 'scroll' }}>
              {tasks.map((task, index) => (
                <Task
                  key={index}
                  title={task.title}
                  description={task.description}
                />
              ))}
            </View>
          )}
          
        </Container>

        <Footer>
          <FooterButton onAddTask={handleAddTask} />
        </Footer>
      </BackgroundImage>
    </KeyBoard>
  );
}
