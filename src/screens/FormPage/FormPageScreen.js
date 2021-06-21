import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Screen, Header } from "../../components";
import { Toast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { color } from "../../theme";
import { useForm } from "react-hook-form";
import { sendForm } from "../../services";

export const FormPageScreen = () => {
  const navigation = useNavigation();
  const { register, handleSubmit, setValue, errors } = useForm();
  const surnameInputRef = useRef();
  const adressInputRef = useRef();

  useEffect(() => {
    register("name", {
      required: "Enter your Name",
      minLength: {
        value: 3,
        message: "Name must be at least eight characters",
      },
    });
    register("surname", {
      required: "Enter your Surname",
      minLength: {
        value: 3,
        message: "Surname must be at least eight characters",
      },
    });
    register("adress", {
      required: "Enter your Adress",
      minLength: {
        value: 3,
        message: "Adress must be at least eight characters",
      },
    });
  }, [register]);

  const onSubmit = ({ name, surname, adress }) => {
    sendForm(name, surname, adress);
    Toast.show({
      text: "Form Created Succesfully.",
      duration: 5000,
      type: "success",
    });
    navigation.navigate("DashboardScreen");
  };

  return (
    <Screen preset="scroll" unsafe style={styles.container}>
      <Text style={styles.headerTxt}>Form Page</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Name"
          style={styles.inputText}
          onChangeText={(text) => setValue("name", text)}
          underlineColorAndroid="transparent"
          onSubmitEditing={() => surnameInputRef.current.focus()}
          returnKeyType={"next"}
        />
      </View>
      {errors.name && (
        <Text style={[styles.inputError, { marginBottom: 5 }]}>
          {errors.name?.message}
        </Text>
      )}
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Surname"
          onChangeText={(text) => setValue("surname", text)}
          underlineColorAndroid="transparent"
          onSubmitEditing={() => adressInputRef.current.focus()}
          ref={surnameInputRef}
        />
      </View>
      {errors.surname && (
        <Text style={styles.inputError}>{errors.surname?.message}</Text>
      )}
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Adress"
          onChangeText={(text) => setValue("adress", text)}
          underlineColorAndroid="transparent"
          ref={adressInputRef}
        />
      </View>
      {errors.adress && (
        <Text style={styles.inputError}>{errors.adress?.message}</Text>
      )}
      <TouchableOpacity style={styles.sendBtn} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.sendText}>Send</Text>
      </TouchableOpacity>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  headerTxt: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputView: {
    height: 50,
    marginTop: 10,
    justifyContent: "center",
    padding: 20,
    borderWidth: 0.5,
  },
  inputText: {
    height: 50,
  },
  sendBtn: {
    backgroundColor: "#003f5c",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  sendText: {
    color: "white",
    fontWeight: "bold",
  },
  inputError: {
    marginTop: 5,
    color: "red",
    alignSelf: "center",
  },
});

FormPageScreen.navigationOptions = ({ navigation, route }) => ({
  header: (props) => {
    return (
      <Header
        title={"Form Page"}
        mainRoute={route}
        backgroundColor={color.primary}
      />
    );
  },
});
