import { FooterButton } from "../../components/FooterButton";
import { Input } from "../../components/Input";
import { Task } from "../../components/Task";
import { Container, BackgroundImage, KeyBoard, Footer } from "./styles";
import { Platform } from "react-native";

export function Home() {
  return (
    <KeyBoard behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <BackgroundImage
        source={require("../../assets/img/backgorund/image.jpg")}
      >
        <Container style={{ marginHorizontal: 10 }}>
          <Input />
          <Task />
        </Container>
        <Footer>
          <FooterButton />
        </Footer>
      </BackgroundImage>
    </KeyBoard>
  );
}
