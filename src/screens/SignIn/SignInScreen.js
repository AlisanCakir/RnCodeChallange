import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Loading, Screen } from "../../components";
import { useForm } from "react-hook-form";
import { login } from "../../redux/auth/api";
import { useDispatch, useSelector } from "react-redux";

export const SignInScreen = () => {
  const navigation = useNavigation();
  const { register, handleSubmit, setValue, errors } = useForm();
  const auth = useSelector((state) => state.auth);
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    register("username", {
      required: "Enter your Username",
    });
    register("password", {
      required: "Enter your password",
    });
  }, [register]);

  const onSubmit = ({ username, password }) => {
    dispatch(login(username, password));
  };

  const signUpPress = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <Screen style={styles.container}>
      {auth.isLoading && <Loading />}
      <Text style={styles.logo}>Innovance</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Username"
          placeholderTextColor='rgba(255,255,255,0.70)'
          style={styles.inputText}
          onChangeText={(text) => setValue("username", text)}
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          onSubmitEditing={() => passwordInputRef.current.focus()}
          returnKeyType={"next"}
        />
      </View>
      {errors.username && (
        <Text style={[styles.inputError, {marginBottom: 5}]}>{errors.username?.message}</Text>
      )}
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.70)"
          secureTextEntry
          onChangeText={(text) => setValue("password", text)}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
          ref={passwordInputRef}
        />
      </View>
      {errors.password && (
        <Text style={styles.inputError}>{errors.password?.message}</Text>
      )}
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.loginText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={signUpPress}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
    </Screen>
  );
};

SignInScreen.navigationOptions = ({ navigation, route }) => ({
  header: (props) => {
    return null;
  },
});

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
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
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
