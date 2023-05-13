import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TPostsStackParams } from '@navigation/stacks/PostsStack';
import { Screens } from '@navigation/constants';

const MainScreen: React.FC<NativeStackScreenProps<TPostsStackParams, typeof Screens.Posts.MAIN>> = props => {
    const { navigation } = props;

    return (
        <View style={styles.wrapper}>
            <Text>Main Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate({ name: Screens.Posts.POST, params: { id: '' } })}>
                <Text>Go Post</Text>
            </TouchableOpacity>
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
});

export default MainScreen;
