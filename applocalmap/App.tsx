
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={()=> null}/>
      <Stack.Screen name='Details' component={()=> null}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}


/**
 * Install:
 * 
 * npx create-expo-app --template
 * 
 * yarn add @react-navigation/native
 * 
 * npx expo install react-native-screens react-native-safe-area-context
 * 
 * yarn add @react-navigation/native-stack
 * 
 * npx expo install react-native-maps
 */
