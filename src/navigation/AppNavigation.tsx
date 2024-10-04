import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Splash } from "../screens/SplashScreen";
import { Home } from "../screens/Home";
import DetailsTask from "../screens/DetailsTask";
import { TaskProps } from "../screens/Home";
import { Lixeira } from "../screens/Lixeira";

// Definindo o tipo para os parâmetros das rotas
type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Detalhes: { task: TaskProps };
  Lixeira: { task: TaskProps };
};

const Stack = createStackNavigator<RootStackParamList>(); // Aplicamos a tipagem aqui

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detalhes"
          component={DetailsTask}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Lixeira"
          component={Lixeira}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
