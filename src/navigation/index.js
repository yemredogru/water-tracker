import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/home-screen';
import HistoryScreen from '../screens/history-screen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Water Intake Tracker" component={HomeScreen} options={{tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={color} size={size} />
      )}} />
      <Tab.Screen name="Day Tracker" component={HistoryScreen} options={{tabBarIcon: ({ color, size }) => (
        <Ionicons name="calendar-outline" color={color} size={size} />
      )}} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}