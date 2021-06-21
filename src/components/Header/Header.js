import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import { color } from "../../theme";
import { SafeAreaView } from "react-native-safe-area-context";

export function Header({ title = "", mainRoute, backgroundColor }) {
  const routeName = mainRoute.name;
  const navigation = useNavigation();
  const { titleStyle, container } = styles;
  const isAuthStack = ["SignInScreen", "SignUpScreen"];
  
  return (
    <>
      <View style={{ backgroundColor: color.header }}>
        <SafeAreaView>
          <View style={[container]}>
            <View style={styles.centerContainer}>
              <Text style={titleStyle}>{title}</Text>
            </View>
            {!isAuthStack.includes(routeName) && (
              <Entypo
                name="menu"
                size={28}
                style={styles.backIcon}
                onPress={() => {
                  navigation.dispatch(DrawerActions.toggleDrawer());
                }}
                color={color.white}
              />
            )}
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.header,
    height: Platform.OS == "android" ? 80 : 65,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  titleStyle: {
    fontSize: 18,
   alignSelf: 'center',
    color: color.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  backIcon: {
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  appLogo: {
    width: 200,
    height: 80,
    resizeMode: "contain",
  },
});
