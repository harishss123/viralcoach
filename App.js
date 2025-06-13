import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePlanScreen from './screens/CreatePlanScreen';
import ConfirmInfoScreen from './screens/ConfirmInfoScreen';
import PreviewPlanScreen from './screens/PreviewPlanScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CreatePlan">
                <Stack.Screen
                    name="CreatePlan"
                    component={CreatePlanScreen}
                    options={{ title: 'Create Your Plan' }}
                />
                <Stack.Screen
                    name="ConfirmInfo"
                    component={ConfirmInfoScreen}
                    options={{ title: 'Confirm Your Info' }}
                />
                <Stack.Screen
                    name="PreviewPlan"
                    component={PreviewPlanScreen}
                    options={{ title: 'Your AI Video Plan' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
