import { TouchableOpacity, Text } from "react-native";
import {
  Check,
  ContainerTask,
  Favorite,
  TaskButtonStatus,
  TaskTitle,
} from "./styles";
import Feather from "@expo/vector-icons/Feather";

interface TaskProps {
  title: string;
  description: string;
}

export function Task({ title, description }: TaskProps) {
  return (
    <ContainerTask>
      <Check>
        <TouchableOpacity>
          <Feather name="square" size={35} color="black" />
        </TouchableOpacity>
        <TaskButtonStatus>
          <TaskTitle>{title}</TaskTitle>
          <Text>{description}</Text>
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
