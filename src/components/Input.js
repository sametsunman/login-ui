import React from 'react'
import { StyleSheet,View, TextInput } from 'react-native'

function Input({placeholder}) {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        margin : 10,
        borderRadius: 5,
        borderWidth: 1
    }
})

export default Input
