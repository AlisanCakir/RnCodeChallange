import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "native-base";
import { Screen, Header } from "../../components";
import { color } from "../../theme";
import { useNavigation } from "@react-navigation/native";

export function DashboardScreen() {

  return (
    <Screen preset="scroll" unsafe style={styles.container}>
      <Text style={styles.headerTxt}>What is Lorem Ipsum?</Text>
      <Text style={styles.bodyTxt}>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  headerTxt: {
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 10
  },
  bodyTxt: {
    fontStyle: 'italic',
    fontSize: 18,
  }
});

DashboardScreen.navigationOptions = ({ navigation, route }) => ({
  header: (props) => {
    return (
      <Header title={"Home"} mainRoute={route} backgroundColor={color.header} />
    );
  },
});
