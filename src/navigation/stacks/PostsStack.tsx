import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../constants';
import MainScreen from '@screens/posts/main/MainScreen';
import PostScreen from '@screens/posts/post/PostScreen';

export type TPostsStackParams = {
    [Screens.Posts.MAIN]: undefined;
    [Screens.Posts.POST]: { id: number };
};

const Stack = createNativeStackNavigator<TPostsStackParams>();

const PostsStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName={Screens.Posts.MAIN} screenOptions={{ headerShown: false }}>
            <Stack.Screen key={Screens.Posts.MAIN} name={Screens.Posts.MAIN} component={MainScreen} />
            <Stack.Screen key={Screens.Posts.POST} name={Screens.Posts.POST} component={PostScreen} />
        </Stack.Navigator>
    );
};

export default PostsStack;
