import { useEffect, useState } from "react";
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
import { Platform, Text, Image, FlatList, Button } from "react-native";

interface TaskProps {
  title: string;
  description: string;
  completed: boolean;
  favorite: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [tasksConclued, setTasksConclued] = useState<TaskProps[]>([]);
  const [tasksPending, setTasksPendding] = useState<TaskProps[]>([]);

  const [completedTasks, setCompletedTasks] = useState<TaskProps[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isCompletedExpanded, setIsCompletedExpanded] =
    useState<boolean>(false);

  const handleAddTask = (newTask: TaskProps) => {
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    OrganizarTask();
  }, [tasks]);


  const OrganizarTask = () => {
    var arrConclued: TaskProps[] = [];
    var arrPending: TaskProps[] = [];

    for (let index = 0; index < tasks.length; index++) {
      if (tasks[index].completed == true) {
        arrConclued.push(tasks[index]);
      } else {
        arrPending.push(tasks[index]);
      }
    }
    setTasksConclued(arrConclued);
    setTasksPendding(arrPending);
  };

  const Concluir = (i: number) => {
    for (let index = 0; index < tasks.length; index++) {
      if(tasksPending[i].title == tasks[index].title){
        tasks[index].completed=true;
      }
    }    OrganizarTask();
  };

  const DesConcluir = (i: number) => {
    for (let index = 0; index < tasks.length; index++) {
      if(tasksConclued[i].title == tasks[index].title){
        tasks[index].completed=false;
      }
    }
    OrganizarTask();
  };

  const toggleTasksVisibility = () => {
    setIsExpanded((prev) => !prev);
  };

  const toggleCompletedTasksVisibility = () => {
    setIsCompletedExpanded((prev) => !prev);
  };

  const Favorito = (i: number) => {
    var arrConclued: TaskProps[] = [];
    var arrPending: TaskProps[] = [];
    var arrtask: TaskProps[] = [];

    
    tasks[i].favorite = !tasks[i].favorite;

    arrPending = tasksPending;
    arrConclued = tasksConclued;
    arrPending = arrPending.sort((a, b) => (a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1));
    setTasksPendding(tasksPending);
    arrtask = arrPending.concat(arrConclued);
    setTasks(arrtask);




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
              Pendentes {tasksPending.length}
            </Text>
          </ButtonExpanded>

          {isExpanded && (
            <FlatList
              data={tasksPending}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <Task
                  title={item.title}
                  description={item.description}
                  onComplete={() => Concluir(index)}
                  favorite={item.favorite}
                  Handlefavorite={() => {
                    Favorito(index);
                  }}
                  // onComplete={() => handleCompleteTask(item)}
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
              Concluídas {tasksConclued.length}
            </Text>
          </ButtonExpanded>

          {isCompletedExpanded && (
            <FlatList
              data={tasksConclued}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <Task
                  title={item.title}
                  description={item.description}
                  isCompleted={true}
                  onComplete={() => {DesConcluir(index); console.log(item)}}
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
