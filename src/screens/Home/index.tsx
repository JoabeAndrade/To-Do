import { useState } from "react";
import { FooterButton } from "../../components/FooterButton";
import { Input } from "../../components/Input";
import { Task } from "../../components/Task";
import {
  Container,
  BackgroundImage,
  KeyBoard,
  Footer,
  ButtonExpanded,
} from "./styles";
import { Platform, Text, Image, FlatList } from "react-native";

interface TaskProps {
  title: string;
  description: string;
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskProps[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isCompletedExpanded, setIsCompletedExpanded] =
    useState<boolean>(false);

  const handleAddTask = (newTask: TaskProps) => {
    setTasks([...tasks, newTask]);
  };

  const handleCompleteTask = (taskToToggle: TaskProps) => {
    // Verifica se a tarefa está na lista de pendentes
    const isTaskPending = tasks.some(
      (task) => task.title === taskToToggle.title
    );

    if (isTaskPending) {
      // Remove a tarefa da lista de pendentes
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.title !== taskToToggle.title)
      );
      // Adiciona a tarefa à lista de concluídas
      setCompletedTasks((prevCompletedTasks) => [
        ...prevCompletedTasks,
        taskToToggle,
      ]);
    } else {
      // Remove a tarefa da lista de concluídas
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks.filter((task) => task.title !== taskToToggle.title)
      );
      // Adiciona a tarefa de volta à lista de pendentes
      setTasks((prevTasks) => [...prevTasks, taskToToggle]);
    }
  };

  const toggleTasksVisibility = () => {
    setIsExpanded((prev) => !prev);
  };

  const toggleCompletedTasksVisibility = () => {
    setIsCompletedExpanded((prev) => !prev);
  };

  return (
    <KeyBoard behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <BackgroundImage
        source={require("../../assets/img/backgorund/image.jpg")}
      >
        <Container style={{ marginHorizontal: 10 }}>
          <Input />

          <ButtonExpanded
            onPress={toggleTasksVisibility}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
              height: 50,
            }}
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

          {isExpanded && (
            <FlatList
              data={tasks}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Task
                  title={item.title}
                  description={item.description}
                  onComplete={() => handleCompleteTask(item)}
                />
              )}
              style={{ maxHeight: 300 }}
            />
          )}

          <ButtonExpanded
            onPress={toggleCompletedTasksVisibility}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
              height: 50,
            }}
          >
            <Image
              source={
                isCompletedExpanded
                  ? require("../../assets/img/ListTask/SetaBaixo.png")
                  : require("../../assets/img/ListTask/SetaDireita.png")
              }
              style={{ width: 40, height: 40 }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>
              Concluídas {completedTasks.length}
            </Text>
          </ButtonExpanded>

          {isCompletedExpanded && (
            <FlatList
              data={completedTasks}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Task
                  title={item.title}
                  description={item.description}
                  isCompleted={true}
                />
              )}
              style={{ maxHeight: 300 }}
            />
          )}
        </Container>

        <Footer>
          <FooterButton onAddTask={handleAddTask} />
        </Footer>
      </BackgroundImage>
    </KeyBoard>
  );
}
