import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../constants';
import CounterScreen from '@screens/counter/CounterScreen';

export type TCounterStackParams = {
    [Screens.Counter.MAIN]: undefined;
};

const Stack = createNativeStackNavigator<TCounterStackParams>();

const CounterStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName={Screens.Counter.MAIN} screenOptions={{ headerShown: false }}>
            <Stack.Screen key={Screens.Counter.MAIN} name={Screens.Counter.MAIN} component={CounterScreen} />
        </Stack.Navigator>
    );
};

export default CounterStack;
