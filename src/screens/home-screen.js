import { StatusBar } from 'expo-status-bar';
import {View,Text} from 'react-native'
import Portion from '../components/portion';
import { useState } from 'react';

export default function HomeScreen() {
  const [progress,setProgress] = useState(0)
    return (
      <View>
        <Text>Today</Text>
        <Text>Water Target : 2000ml</Text>
        <Text>Completed : {progress}ml % {progress/2000}</Text>
        <Text>Add a portion of water</Text>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <Portion title={'Cup (0.2ml)'} />
        <Portion title={'Bottle (0.5ml)'} />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }