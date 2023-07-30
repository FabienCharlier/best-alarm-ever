import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function App() {

  const [text, setText] = useState('Grayou')
  const [date, setDate] = useState(new Date(Date.now()))

  return (
    <>
      <View style={styles.container}>
        <Text> Hello </Text>
        <TextInput value={text} onChangeText={setText}/>
        <RNDateTimePicker value={date} />
        <StatusBar style="auto" />
      </View>
      <Text> {text} </Text>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

