import React, { useRef, useEffect } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { Button, Text } from "native-base";
import { Screen, Header, Loading } from "../../components";
import { signUp } from "../../redux/auth/api";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { color } from "../../theme";

export function SignUpScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue, errors } = useForm();
  const auth = useSelector((state) => state.auth);
  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    register("username", {
      required: "Enter your Username",
    });
    register("name", {
      required: "Enter your Name",
    });
    register("password", {
      required: "Enter your Password",
    });
  }, [register]);

  const onSubmit = ({ username, name, password }) => {
    dispatch(signUp(username, name, password));
  };

  return (
    <Screen keyboardPersistTaps="handled" style={styles.container} unsafe>
      {auth.isLoading && <Loading />}
      <Text style={styles.logo}>Innovance</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="rgba(255,255,255,0.70)"
          onChangeText={(text) => setValue("username", text)}
          onSubmitEditing={() => nameInputRef.current.focus()}
        />
      </View>
      {errors.username && (
        <Text style={styles.inputError}>{errors.username?.message}</Text>
      )}
      <View style={styles.inputView}>
        <TextInput
          ref={nameInputRef}
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor="rgba(255,255,255,0.70)"
          onChangeText={(text) => setValue("name", text)}
          onSubmitEditing={() => passwordInputRef.current.focus()}
        />
      </View>
      {errors.name && (
        <Text style={styles.inputError}>{errors.name?.message}</Text>
      )}
      <View style={styles.inputView}>
        <TextInput
          ref={passwordInputRef}
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.70)"
          onChangeText={(text) => setValue("password", text)}
          secureTextEntry
        />
      </View>
      {errors.password && (
        <Text style={styles.inputError}>{errors.password?.message}</Text>
      )}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 10,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  registerButton: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  inputError: {
    color: "red",
    alignSelf: "center",
  },
  loginText: {
    color: "white",
  },
});

SignUpScreen.navigationOptions = ({ navigation, route }) => ({
  header: (props) => {
    return (
      <Header title={"Sign Up"} mainRoute={route} />
    );
  },
});
