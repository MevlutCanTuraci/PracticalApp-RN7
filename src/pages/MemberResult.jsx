import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const MemberResult = ({route}) => {

    const {user} = route.params;

    return (
        <SafeAreaView>
            
            <View style={styles.header_container}>
                <Text style={styles.header_text}>Kayıt Tamamlandı!</Text>
            </View>

            <View style={styles.result_container}>
                <Text style={styles.text}>Üye Adı:      {user.userName} </Text>
                <Text style={styles.text}>Üye Soyadı:   {user.userSurname}</Text>
                <Text style={styles.text}>Üye Yaşı:     {user.userAge}</Text>
                <Text style={styles.text}>Üye E-posta:  {user.userEmail}</Text>
            </View>

        </SafeAreaView>
    )
}

export default MemberResult;


const styles = StyleSheet.create({

    header_container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    header_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
    },

    result_container: {
        margin: 10,
    },

    text: {
        fontSize: 16,
        margin: 10,
        fontSize: 16,
        fontWeight: 'bold',
    }
});