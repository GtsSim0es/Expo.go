import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Word!</Text>
      <TextInput style={styles.inputStyle}/>
      <StatusBar style="auto" />
      <Button title="add to it"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle:{
      height: 30,
      width:250,
      borderColor:"green",
      borderWidth: 1
    }
  
});
