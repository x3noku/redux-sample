import React from 'react';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stacks } from './constants';
import CounterStack, { TCounterStackParams } from './stacks/CounterStack';
import PostsStack, { TPostsStackParams } from './stacks/PostsStack';

export type TAppStackParams = {
    [Stacks.COUNTER]: NavigatorScreenParams<TCounterStackParams>;
    [Stacks.POSTS]: NavigatorScreenParams<TPostsStackParams>;
};

const Stack = createNativeStackNavigator<TAppStackParams>();

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Stacks.COUNTER} screenOptions={{ headerShown: false }}>
                <Stack.Screen key={Stacks.COUNTER} name={Stacks.COUNTER} component={CounterStack} />
                <Stack.Screen key={Stacks.POSTS} name={Stacks.POSTS} component={PostsStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
