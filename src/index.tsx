import { StyleSheet, View, Text } from 'react-native'
import { Home, Game } from '@screens'
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold
    })
    if (!fontsLoaded) return <AppLoading />
    return (
        <View style={styles.container}>
            <Home />
            <Text style={{ fontFamily: 'Inter_700Bold' }}>Hello World</Text>
            <Game />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
