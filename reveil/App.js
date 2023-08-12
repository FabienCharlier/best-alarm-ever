import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import ReactNativeAN from 'react-native-alarm-notification';

export default function App() {

  const [dateTime, setDateTime] = useState(new Date(Date.now()))
  const alarmNotifData = {
    title: "My Notification Title",
    message: "My Notification Message",
    channel: "my_channel_id",
    small_icon: "ic_launcher",
  
    // You can add any additional data that is important for the notification
    // It will be added to the PendingIntent along with the rest of the bundle.
    // e.g.
      data: { foo: "bar" },
  };
  
// (newDateTime) => {setDateTime(newDateTime)}
  return (
    <>
      <View style={styles.container}>
        <Text> {dateTime.toString()} </Text>
        <RNDateTimePicker value={dateTime} mode="datetime" onChange={(event, newDateTime) => {setDateTime(newDateTime)}}/>
        <StatusBar style="auto" />
        <Button title="start" onPress={async () => {await ReactNativeAN.scheduleAlarm({ ...alarmNotifData, fire_date: ReactNativeAN.parseDate(dateTime) })}}/>
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

