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
  CheckBox ,
} from "@ui-kitten/components";
import { Icon } from "@ui-kitten/components";

export const EyeIcon = (style) => <Icon {...style} name="eye" />;

export const EyeOffIcon = (style) => <Icon {...style} name="eye-off" />;

export const PersonIcon = (style) => <Icon {...style} name="person" />;

export const ArrowIcon = (style) => <Icon {...style} name="arrow-ios-forward-outline" />;

export const searchIcon = style => (
  <Icon {...style} name="search-outline" />
);

export default ({ navigation, onSignIn }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const styles = useStyleSheet(themedStyles);

  const onSigninButtonPress = () => {;
  };

  const onForgotPasswordButtonPress = () => {
    navigation && navigation.navigate("ForgotPassword");
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [checked, setChecked] = React.useState(false);



  return (
    <>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
           Find A Property
        </Text>
      </View>
      
      <Layout style={styles.formContainer} level="1">
        <Input
          placeholder="Search Here"
          icon={ArrowIcon}
          value={email}
          onChangeText={setEmail}
          checked={checked}
          onChange={nextChecked => setChecked(nextChecked)}
        />
        <Input
          placeholder="City"
          icon={ArrowIcon}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Rent"
          icon={ArrowIcon}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Price"
          icon={ArrowIcon}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Date"
          icon={ArrowIcon}
          value={email}
          onChangeText={setEmail}
        />
      </Layout>

      <Button style={styles.signInButton} size="giant" onPress={ ()=>{ Linking.openURL('https://zoopla.com')}} >
        Search For Properties
      </Button>




 <Card>
   <Avatar size='large' shape='square' source={require('../assets/home1.png')}/>
    <Text>
    Ormskirk, 0.5 miles from Campus
    </Text>
    <Text>Standard double room</Text>
    <Text>No prepayment</Text> 
    <Text>PW: 100</Text>
  </Card>



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
