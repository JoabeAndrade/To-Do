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
import { Platform, View, Text, TouchableOpacity } from "react-native";
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
      <BackgroundImage
        source={require("../../assets/img/backgorund/image.jpg")}
      >
        <Container style={{ marginHorizontal: 10 }}>
          <Input />
          <Expanded>
            <ButtonExpanded
              onPress={toggleTasksVisibility}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 18, marginRight: 5 }}
              >
                {isExpanded ? "^" : ">"}
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Pendentes {tasks.length}
              </Text>
            </ButtonExpanded>

            {isExpanded &&
              tasks.map((task, index) => (
                <Task
                  key={index}
                  title={task.title}
                  description={task.description}
                />
              ))}
          </Expanded>
        </Container>
        <Footer>
          <FooterButton onAddTask={handleAddTask} />
        </Footer>
      </BackgroundImage>
    </KeyBoard>
  );
}
