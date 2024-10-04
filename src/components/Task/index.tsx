import { TouchableOpacity, Text } from "react-native";
import {
  Check,
  ContainerTask,
  Favorite,
  TaskButtonStatus,
  TaskTitle,
} from "./styles";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

 interface TaskProps {
  title: string;
  description: string;
  Handlefavorite?: () => void;
  favorite?: boolean;
  onComplete?: () => void;
  isCompleted?: boolean;
  details: ()=>void;
}

export function Task({
  title,
  description,
  favorite,
  onComplete,
  Handlefavorite,
  details,
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
        <TaskButtonStatus onPress={details}>
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
          {favorite ? (
            <FontAwesome
              name="star"
              size={35}
              color="yellow"
              onPress={Handlefavorite}
            />
          ) : (
            !isCompleted &&
            <Feather
              name="star"
              size={35}
              color="black"
              onPress={Handlefavorite}
            />
          )}
        </TouchableOpacity>
      </Favorite>
    </ContainerTask>
  );
}
