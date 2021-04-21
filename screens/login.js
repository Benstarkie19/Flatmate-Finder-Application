import React from "react";
import { View } from "react-native";
import {
  Button,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import { Icon } from "@ui-kitten/components";

// More icons 



export const EyeIcon = (style) => <Icon {...style} name="eye" />;

export const EyeOffIcon = (style) => <Icon {...style} name="eye-off" />;

export const PersonIcon = (style) => <Icon {...style} name="person" />;  

export default ({ navigation, onSignIn }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = () => {
    navigation && navigation.navigate("SignUp2");
  };

  const onForgotPasswordButtonPress = () => {
    navigation && navigation.navigate("ForgotPassword");
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };


// Input forms for the auth which is only a test and doesn't authentic anything ;)

  return (
    <>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
           Login
        </Text>
      </View>
      <Layout style={styles.formContainer} level="1">
        <Input
          placeholder="Test123@gmail.com"
          icon={PersonIcon}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.passwordInput}
          placeholder="Password"
          icon={passwordVisible ? EyeIcon : EyeOffIcon}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
          onIconPress={onPasswordIconPress}
        />
        <View style={styles.forgotPasswordContainer}>
          <Button
            style={styles.forgotPasswordButton}
            appearance="ghost"
            status="basic"
            onPress={onForgotPasswordButtonPress}
          >
            Forgot your password?
          </Button>
        </View>
      </Layout>
      <Button style={styles.signInButton} size="giant" onPress={onSignIn}>
        SIGN IN
      </Button>
      <Button
        style={styles.signUpButton}
        appearance="ghost"
        status="basic"
        onPress={onSignUpButtonPress}
        onPress={onSignIn}
      >
        Guest Sign In
        
      </Button>
    </>
  );
};

// This is treated like a css stylesheet allowing for flex box and other styles to be added for components 

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-1",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 216,
    backgroundColor: "color-primary-default",
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});
