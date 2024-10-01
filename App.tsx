import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens/Home";
import { AddTask } from "./src/components/modal/addTask";
import { DeleteAllTasks } from "./src/components/modal/deleteAllTasks";
import DeleteTask from "./src/components/modal/deleteTask";

export default function App() {
  return (
    <View style={styles.container}>
      <Home></Home>
      {/* <AddTask></AddTask> */}
      {/* <DeleteAllTasks></DeleteAllTasks> */}
      {/* <DeleteTask></DeleteTask> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
