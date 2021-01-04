import React from 'react'
import { StyleSheet, View, Button as Btn } from 'react-native'

function Button({title}) {
    return (
        <View style={styles.container}>
            <Btn title={title} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#60b0f4',
        padding: 5,
        margin : 10,
        borderRadius: 5
    }
})

export default Button
