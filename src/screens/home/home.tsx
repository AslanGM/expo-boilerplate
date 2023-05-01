import { View, Text } from 'react-native'
import styles from './home.styles'
import { ReactElement } from 'react'

export default function Home(): ReactElement {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}
