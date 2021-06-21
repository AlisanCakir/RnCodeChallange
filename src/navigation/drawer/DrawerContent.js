import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { color } from "../../theme";
import routes from "../routes";
import { logout } from "../../redux/auth/actions";
import { DrawerActions } from "@react-navigation/native";
import { Divider } from "react-native-paper";

const DrawerContent = ({ navigation, dispatch }) => {
  
  const logoutPress = async() => {
    navigation.dispatch(DrawerActions.closeDrawer());
    dispatch(logout());
  };

  return (
    <View style={styles.drawerContainer}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DashboardScreen");
          }}
          style={styles.drawerElementCnt}
        >
          <Text style={styles.drawerText}>Home</Text>
        </TouchableOpacity>
        <Divider style={styles.topDivider} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FormPageScreen");
          }}
          style={styles.drawerElementCnt}
        >
          <Text style={styles.drawerText}>Form Page</Text>
        </TouchableOpacity>
        <Divider style={styles.topDivider} />

        <TouchableOpacity
          onPress={logoutPress}
          style={[styles.drawerElementCnt, { marginTop: 50 }]}
        >
          <Text style={styles.logoutTxt}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContainer: {
    paddingTop: 50,
    backgroundColor: color.white,
    flex: 1,
    justifyContent: "space-between",
  },
  drawerElementCnt: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 5,
    flexWrap: "wrap",
    marginLeft: 20,
  },
  drawerText: {
    flexWrap: "wrap",
    color: "black",
    fontWeight: "bold",
    marginLeft: 15,
    fontSize: 18,
  },
  topDivider: {
    width: "100%",
    backgroundColor: color.dim,
    height: 1,
    marginTop: 10,
  },
  logoutTxt: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});
