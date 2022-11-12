import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../screens/Login";
import Heatmap from "../screens/Heatmap";
import NeigborhoodDetail from "../screens/NeighborhoodDetail";

const Stack = createNativeStackNavigator();

function MainStack() {
  const isLoggedIn = true//useAppSelector((state) => state.authentication.isLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                animationTypeForReplace: !isLoggedIn ? "pop" : "push",
              }}
            />
            <Stack.Screen name="Heatmap" component={Heatmap} options={{ headerShown: false }} />
            <Stack.Group
              screenOptions={{ presentation: "modal", gestureEnabled: true }}
              key="Detail"
            >
              <Stack.Screen name="Detail" component={NeigborhoodDetail} options={{ headerShown: false }} />
            </Stack.Group>
          </>
        ) : (
          <>
            {/* <Stack.Screen name="Heatmap" component={Heatmap} options={{ headerShown: false }} /> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainStack;