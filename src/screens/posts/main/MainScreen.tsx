/* eslint-disable react-native/no-color-literals */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { createGetAllPostsAction } from '../../../store/slices/posts';
import { TPostsStackParams } from '@navigation/stacks/PostsStack';
import { Screens } from '@navigation/constants';

const MainScreen: React.FC<NativeStackScreenProps<TPostsStackParams, typeof Screens.Posts.MAIN>> = props => {
    const { navigation } = props;

    const { isLoading, data, error } = useAppSelector(store => store.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(createGetAllPostsAction());
    }, []);

    return (
        <View style={styles.wrapper}>
            {isLoading && <Text>Loading...</Text>}
            {!isLoading &&
                data &&
                data.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate({ name: Screens.Posts.POST, params: { id: item.id } })}
                        >
                            <Text style={styles.post}>{item.title}</Text>
                        </TouchableOpacity>
                    );
                })}
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
    post: {
        backgroundColor: 'pink',
        margin: '12px',
    },
});

export default MainScreen;
