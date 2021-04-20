import React, { useState } from "react";
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry,
} from "@ui-kitten/components";
import { default as theme } from './theme.json'; // <-- Import app theme
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import SignInScreen from "./screens/login";
import { AppNavigator } from "./containers/appNavigator";
import tailwind from 'tailwind-rn'; 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'



function App() {
  return <SafeAreaProvider>...</SafeAreaProvider>;
}


export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
    <NavigationContainer>{}</NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>  
        {isSignedIn ? (
          <AppNavigator />
        ) : (
          <SignInScreen onSignIn={() => setIsSignedIn(true)} />
        )}
      </ApplicationProvider>
    </>
  );
};


// <-- Import the desgin app theme for the light version of the applcation