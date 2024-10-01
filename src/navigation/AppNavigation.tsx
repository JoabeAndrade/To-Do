import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {Splash} from "../screens/SplashScreen";
import { Home } from "../screens/Home";

const Stack = createStackNavigator();

const AppNavigation = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;