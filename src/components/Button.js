import React from 'react'
import { View, Button } from 'react-native'

function Input({title}) {
    return (
        <View style={styles.container}>
            <Button title={title} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#60b0f4',
        padding: 10,
        margin : 10,
        borderRadius: 5
    }
})

export default Button
