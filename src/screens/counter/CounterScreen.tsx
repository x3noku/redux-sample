import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { Screens, Stacks } from '@navigation/constants';
import { TAppStackParams } from '@navigation/AppNavigator';
import { TCounterStackParams } from '@navigation/stacks/CounterStack';

const CounterScreen: React.FC<
    CompositeScreenProps<
        NativeStackScreenProps<TCounterStackParams, typeof Screens.Counter.MAIN>,
        NativeStackScreenProps<TAppStackParams>
    >
> = props => {
    const { navigation } = props;

    return (
        <View style={styles.wrapper}>
            <Text>Counter Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate(Stacks.POSTS, { screen: Screens.Posts.MAIN })}>
                <Text>Go to Posts</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    // eslint-disable-next-line react-native/no-color-literals
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CounterScreen;
