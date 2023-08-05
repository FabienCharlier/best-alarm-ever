import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function App() {

  const [dateTime, setDateTime] = useState(new Date(Date.now()))
  
// (newDateTime) => {setDateTime(newDateTime)}
  return (
    <>
      <View style={styles.container}>
        <Text> {dateTime.toString()} </Text>
        <RNDateTimePicker value={dateTime} mode="datetime" onChange={(event, newDateTime) => {setDateTime(newDateTime)}}/>
        <StatusBar style="auto" />
      </View>
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

