import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import AttendanceHistory from "../screens/AttendanceHistory";
import ClassAttendance from "../screens/ClassAttendance";
import AddAttendance from "../screens/AddAttendance";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AttendanceHistory"
        component={AttendanceHistory}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='ClassAttendance' component={ClassAttendance} options={{headerShown:false}}/>
      <Stack.Screen name='AddAttendance' component={AddAttendance} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}
