import React, { useEffect, useState } from "react";
import { StatusBar, Platform } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { setNavigator } from "./src/navigation/helpers";
import { Navigator } from "./src/navigation/Navigator";
import { store, persistor } from "./src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Root } from "native-base";

export default function App() {
  let navigator;

  useEffect(() => {
    if (navigator) {
      setNavigator(navigator);
    }
  }, [navigator]);

  return (
    <Provider store={store}>
      {Platform.OS === "ios" && <StatusBar barStyle="light-content" />}
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer
            ref={(nav) => {
              navigator = nav;
            }}
          >
            <Root>
              <Navigator />
            </Root>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
