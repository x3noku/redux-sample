/* eslint-disable react-native/no-color-literals */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppSelector } from '../../../store/store';
import { TPostsStackParams } from '@navigation/stacks/PostsStack';
import { Screens } from '@navigation/constants';

const PostScreen: React.FC<NativeStackScreenProps<TPostsStackParams, typeof Screens.Posts.POST>> = props => {
    const { route } = props;
    const id = route.params.id;

    const { isLoading, data, error } = useAppSelector(store => store.posts);

    const post = useMemo(() => {
        return data?.find(item => item.id === id);
    }, [data]);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{post?.title}</Text>
            <Text>{post?.body}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'red',
    },
});

export default PostScreen;
