import { View, Text } from 'react-native'
import styles from './game.styles'
import { ReactElement } from 'react'

export default function Game(): ReactElement {
    return (
        <View style={styles.container}>
            <Text>Game</Text>
        </View>
    )
}
