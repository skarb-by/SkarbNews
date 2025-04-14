import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { FullPost } from "./FullPost";
import { Home } from "./Home";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Новости",
            headerStyle: {
              backgroundColor: "#ddd",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="FullPost"
          component={FullPost}
          options={{
            title: "Статья",
            headerStyle: {
              backgroundColor: "#ddd",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 15,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
