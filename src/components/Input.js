import React from 'react'
import { View, TextInput } from 'react-native'

function Input({placeholder}) {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin : 10,
        borderRadius: 5
    }
})

export default Input
