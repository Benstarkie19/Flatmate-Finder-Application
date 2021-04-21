import React from "react";
import { View,Linking} from "react-native";
import {
  Button,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
    Card,
  Avatar,
  Divider,
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

  const onSignUpButtonPress = () => {;
    navigation && navigation.navigate("Basket");
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
        <Text category="h1" status="control">
           Recommendations
        </Text>
      </View>
      <Layout style={styles.formContainer} level="1">
    <View style={styles.details}>
      <Avatar size='giant' source={require('../assets/profile.png')}/>
      <Text style={styles.title} category='h4'>Benjamin Starkie</Text>
    </View>
    <Divider/>
        <View style={styles.details}>
      <Avatar size='giant' source={require('../assets/land1.png')}/>
      <Text style={styles.title} category='h4'>Donna G. Simpson</Text>
    </View>
    <Divider/>
        <Divider/>
        <View style={styles.details}>
      <Avatar size='giant' source={require('../assets/land2.png')}/>
      <Text style={styles.title} category='h4'>Samuel Buckman</Text>
    </View>
    <Divider/>
    
        
      </Layout>

      <Button style={styles.signInButton} size="medium" onPress={onSignUpButtonPress} >
        Search For App Approved Landlords
      </Button>




      <Button
        style={styles.signUpButton}
        appearance="ghost"
        status="basic"
        onPress={ ()=>{ Linking.openURL('https://zoopla.com')}} 
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
    backgroundColor: "color-primary-default",
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
