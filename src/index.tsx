import { ReactElement } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { AppBootstrap } from '@components'
import { Home, Game } from '@screens'

export default function App(): ReactElement {
    return (
        <AppBootstrap>
            <View style={styles.container}>
                <Home />
                <Text style={{ fontFamily: 'Inter_700Bold' }}>Hello World</Text>
                <Game />
            </View>
        </AppBootstrap>
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
