import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Tasks from "./components/Tasks";
import Details from "./components/Details";

import { Task } from "./components/Tasks";

export type RootStackParamList = {
    Tasks: undefined;
    Details: {task: Task};
};
    
const Stack = createNativeStackNavigator<RootStackParamList>();


function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tasks" component={Tasks} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
