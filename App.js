import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import ChatScreen from './ChatScreen';
import StatusScreen from './StatusScreen';
import CallsScreen from './CallsScreen';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Chats') {
              iconName = 'chatbubble-outline';
            } else if (route.name === 'Status') {
              iconName = 'aperture-outline';
            } else if (route.name === 'Calls') {
              iconName = 'call-outline';
            }
            return <Ionicons name={iconName} size={size} color={color}  />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'black',
          headerShown: false, 
        })}
      >
        <Tab.Screen name="Chats" component={ChatScreen} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Calls" component={CallsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
