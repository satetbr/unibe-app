import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../../src/components/Login'
import Soon from '../../src/components/Soon'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Login'
            component={Login}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='Soon'
            component={Soon}
            />
        </Stack.Navigator>
    );
}