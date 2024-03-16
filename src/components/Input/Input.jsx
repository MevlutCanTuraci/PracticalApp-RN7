import React from 'react'
import { Text, TextInput, View } from 'react-native';
import styles from './Input.style'

const Input = ({label, placeHolder, onChangeText}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>

            <View style={styles.input_container}>
                <TextInput 
                    style={styles.input}
                    placeholder={placeHolder}
                    onChangeText={onChangeText}
                />
            </View>

        </View>
    )

}

export default Input;