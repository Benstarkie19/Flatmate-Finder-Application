import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Divider, Text,Layout,List, ListItem } from '@ui-kitten/components';
import { Icon } from '@ui-kitten/components';

export const setIcon = style => (
  <Icon {...style } name="settings-outline" />   // Icons added from https://akveo.github.io/eva-icons/#/?searchKey=no&type=outline
);


export const favIcon = style => (
  <Icon {...style}  name="heart-outline" />   // Icons added from https://akveo.github.io/eva-icons/#/?searchKey=no&type=outline
);

export const GithubIcon = () => (
  <Icon name='credit-card-outline' />  // All Icons are from the framwork eve
);

const data = new Array(8).fill({
  title: 'Item',
});


const ProfileScreen = () => (
<Layout style={styles.container}>


    <Layout style={styles.back} level='1'>
      <Layout style={{}}>
    <View style={styles.details}>
      <Avatar size='giant' source={require('../assets/profile.png')}/>
      <Text style={styles.title} category='h4'>Benjamin Starkie</Text>
    </View>
    <Divider/>
    <Button icon={setIcon} style={styles.installButton}>Edit Profile </Button >
    </Layout>
<Divider/>
<Text style={styles.profile}  icon={setIcon} status='basic' category='h6'>Your Favourites</Text>
<Divider/>
<Text style={styles.profile} icon={GithubIcon} status='basic' category='h6'>Payments</Text>
<Divider/>
<Divider/>
<Text style={styles.profile} status='basic' category='h6'>Help</Text>
<Divider/>
<Divider/>
<Text style={styles.profile} status='basic' category='h6'>Money Tips</Text>
<Divider/>
<Divider/>
<Text style={styles.profile} status='basic' category='h6'>Settings</Text>
<Divider/>
    </Layout>
  </Layout>
);


const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
  },
  title: {
    marginHorizontal: 8,
  },
  profile: {
    marginVertical: 20,
  },
  installButton: {
    marginVertical: 4,
  },
});

export default ProfileScreen;
