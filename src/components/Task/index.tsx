import { TouchableOpacity, Text } from "react-native";
import {
  Check,
  ContainerTask,
  Favorite,
  TaskButtonStatus,
  TaskTitle,
} from "./styles";
import Feather from "@expo/vector-icons/Feather";

export function Task() {
  return (
    <ContainerTask>
      <Check>
        <TouchableOpacity>
          <Feather name="square" size={35} color="black" />
        </TouchableOpacity>
        <TaskButtonStatus>
          <TaskTitle>Título Task</TaskTitle>
          <Text>Descrição da task...</Text>
        </TaskButtonStatus>
      </Check>
      <Favorite>
        <TouchableOpacity>
          <Feather name="star" size={35} color="black" />
        </TouchableOpacity>
      </Favorite>
    </ContainerTask>
  );
}
