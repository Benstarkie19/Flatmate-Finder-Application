import React from "react";
import { View } from "react-native";
import {
  Button,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
  Card,
  Avatar,
} from "@ui-kitten/components";
import { Icon } from "@ui-kitten/components";

export const EyeIcon = (style) => <Icon {...style} name="eye" />;

export const EyeOffIcon = (style) => <Icon {...style} name="eye-off" />;

export const PersonIcon = (style) => <Icon {...style} name="person" />;

export const searchIcon = style => (
  <Icon {...style} name="search-outline" />
);

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

  return (
    <>
      <View style={styles.headerContainer}>
        <Input
          placeholder="Edge Hill University"
          icon={searchIcon}
          value={email}
          onChangeText={setEmail}
          icon={searchIcon}
        />
      </View>
      <Layout style={styles.formContainer} level="1">

        

 <Card>
   <Avatar size='giant' shape='square' source={require('../assets/home1.png')}/>
    <Text>
    Ormskirk, 0.5 miles from Campus
    </Text>
    <Text>Standard double room</Text>
    <Text>No prepayment</Text> 
    <Text>PW: 100</Text>
  </Card>

  



  <Card>
   <Avatar size='giant' shape='square' source={require('../assets/home2.png')}/>
    <Text>
    Ormskirk, 2.0 miles from Campus
    </Text>
    <Text>Standard single room</Text>
    <Text>No prepayment</Text> 
    <Text>PW: 99</Text>
  </Card>


      </Layout>


            <Button style={styles.signInButton} size="giant" onPress={onSignIn}>
        Search a Property
      </Button>


      <Button
        style={styles.signUpButton}
        appearance="ghost"
        status="basic"
        onPress={onSignUpButtonPress}

      >
        Recommened Properties Here
        
      </Button>
    </>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-1",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 216,
    backgroundColor: "#fff",
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  formContainer1: {
    flex: 1,
    paddingTop: 40,
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
