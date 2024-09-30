import { Input } from "../../components/Input";
import { Task } from "../../components/Task";
import { Container, BackGorundImage, KeyBoard } from "./styles";
import { Platform } from "react-native";

export function Home() {
  return (
    <KeyBoard behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <BackGorundImage
        source={require("../../assets/img/backgorund/image.jpg")}
      >
        <Container style={{ marginHorizontal: 10 }}>
          <Input />
          <Task />
        </Container>
      </BackGorundImage>
    </KeyBoard>
  );
}
