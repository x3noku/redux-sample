import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// eslint-disable-next-line import/named
import { CompositeScreenProps } from '@react-navigation/native';
import { createAsyncChangeAction } from '../../store/slices/counter';
import { useAppDispatch, useAppSelector } from '../../store/store';
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

    const { isLoading, count, error } = useAppSelector(store => store.counter);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     if (error) alert(error?.message);
    // }, [error]);

    return (
        <View style={styles.wrapper}>
            {isLoading && <Text>Loading...</Text>}
            {!isLoading && <Text>{count}</Text>}
            <TouchableOpacity onPress={() => dispatch(createAsyncChangeAction(-3))}>
                <Text>Decrement</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(createAsyncChangeAction(3))}>
                <Text>Increment</Text>
            </TouchableOpacity>

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
