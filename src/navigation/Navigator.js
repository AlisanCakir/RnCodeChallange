import React, { useState, useEffect } from "react";
import {
  createDrawerNavigator,
  useIsDrawerOpen,
} from "@react-navigation/drawer";
import { routes } from "./routes";
import { Loading } from "../components";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerContent from "./drawer/DrawerContent";
import { useDispatch, useSelector } from "react-redux";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export function Navigator() {
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let isAuth = auth.isAuthenticated;

  useEffect(() => {
    if (auth.isAuthenticated) {
      isAuth = auth.isAuthenticated;
    }
  }, [auth]);

  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerContent={(props) => (
        <DrawerContent
          dispatch={dispatch}
          auth={auth}
          {...props}
        />
      )}
      drawerStyle={{
        backgroundColor: "#FAFAFA",
      }}
    >
      <Drawer.Screen name="Drawer" options={{ swipeEnabled: isAuth }}>
        {(props) => (
          <DrawerStack
            loading={loading}
            isAuth={isAuth}
            {...props}
          />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
const DrawerStack = ({ props, loading, isAuth }) => {
  const appRoutes = routes.filter(
    (route) => !route.authStack || route.authStack === undefined
  );

  const authRoutes = routes.filter(
    (route) => route.authStack || route.authStack === undefined
  );

  return (
    <Stack.Navigator headerMode="screen" initialRouteName={"SignInScreen"}>
      {loading && <Loading />}
      {!isAuth
        ? authRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={route.component.navigationOptions}
            >
              {(props) => (
                <route.component
                  {...{
                    ...props,
                  }}
                />
              )}
            </Stack.Screen>
          ))
        : appRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={route.component.navigationOptions}
            >
              {(props) => (
                <route.component
                  {...{
                    ...props,
                  }}
                />
              )}
            </Stack.Screen>
          ))}
    </Stack.Navigator>
  );
};
