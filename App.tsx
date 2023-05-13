import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Colors } from '@styles/colors';
import CounterScreen from '@screens/counter/CounterScreen';
import AppNavigator from '@navigation/AppNavigator';

SplashScreen.preventAutoHideAsync().catch();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        const prepare = async () => {
            try {
                // Preload fonts, make any API calls you need to do here
                await Font.loadAsync({});
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        };

        prepare().catch();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <View style={styles.wrapper} onLayout={onLayoutRootView}>
            <AppNavigator />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
