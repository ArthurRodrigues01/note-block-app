import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import CreateNoteScreen from './src/screens/create';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();
const marginTop = StatusBar.currentHeight;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Notes" 
        component={HomeScreen}
        options = {{
          title: "Notas",
          headerStyle: {
            backgroundColor: "#Daa424", 
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
            color:  "#FFFFFF",
          },
        }}/>
        <Stack.Screen 
        name="CreateNote" 
        component={CreateNoteScreen}
        options= {{
          title: "Criar",
          headerStyle: {
            backgroundColor: "#Daa424",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSizze: 30,
            color: "#FFFFFF",
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}