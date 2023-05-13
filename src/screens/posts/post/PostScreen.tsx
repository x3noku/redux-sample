import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostScreen: React.FC = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Post Screen</Text>
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

export default PostScreen;
