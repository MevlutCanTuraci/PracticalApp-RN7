import { React } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

const Welcome = ({navigation}) => {
    
    const handlerGoToMemberSign = () => {
        navigation.navigate("MemberSignScreen");
    }


    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                Kebap Fitness Salonu
            </Text>

            <Button title="Üye kaydı oluştur" onPress={handlerGoToMemberSign} />

        </SafeAreaView>
    )

}

export default Welcome;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center', 
        margin: 10,
    }

});
