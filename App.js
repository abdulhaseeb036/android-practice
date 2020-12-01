import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setname] = useState("haseeb alam radffiq");
  const [email, setemail] = useState("alamhaseeb036@gmail.com")
  return (
    <View style={styles.container}>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>my nam e is haseeb</Text>
      <Button>Update</Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#ffff',
    flex: 1,
    backgroundColor: '#e6e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
