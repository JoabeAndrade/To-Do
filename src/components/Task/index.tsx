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
  onComplete?: () => void;
  isCompleted?: boolean;
}

export function Task({
  title,
  description,
  onComplete,
  isCompleted = false,
}: TaskProps) {
  return (
    <ContainerTask
      style={{
        backgroundColor: isCompleted ? "#3D9E1B" : "#fff", // Muda o background se concluído
      }}
    >
      <Check>
        <TouchableOpacity onPress={onComplete}>
          <Feather
            name={isCompleted ? "check-square" : "square"} // Muda o ícone ao concluir
            size={35}
            color={isCompleted ? "white" : "black"}
          />
        </TouchableOpacity>
        <TaskButtonStatus>
          <TaskTitle style={{ color: isCompleted ? "white" : "black" }}>
            {title}
          </TaskTitle>
          <Text style={{ color: isCompleted ? "white" : "black" }}>
            {description}
          </Text>
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
