import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';


const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator 
            screenOptions={
                {
                    headerShown: false,
                    headerBackTitle: "Back"
                }
            }
        >

            <Stack.Screen name="WelcomeScreen" component={Welcome} />
            <Stack.Screen name="MemberSignScreen" component={MemberSign} />
            <Stack.Screen name="MemberResult" component={MemberResult} />


        </Stack.Navigator>
    </NavigationContainer>
)

export default App; 