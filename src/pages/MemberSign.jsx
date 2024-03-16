import React, { useState } from 'react'
import { Alert, SafeAreaView, Text } from 'react-native'
import Input from '../components/Input';
import Button from '../components/Button';

const Member = ({navigation}) => {

    const [userName, setUserName]           = useState(null)
    const [userSurname, setUserSurName]     = useState(null)
    const [userAge, setUserAge]             = useState(null)
    const [userEmail, setUserEmail]         = useState(null)

    const handleSubmit = () => { 

        if (!userName || !userSurname || !userEmail || !userAge) {
            Alert.alert('Kebap Fitness Salonu', 'Lütfen tüm alanları doldurunuz!');
            return;
        }
        
        const user = { 
            userName,
            userSurname,
            userAge,
            userEmail
        }

        navigation.navigate("MemberResult", {user});
    } 
    return (
        <SafeAreaView>
            
            <Input label={"Üye Adı"} placeHolder={"Üyenin ismini giriniz..."} onChangeText={setUserName} />
            <Input label={"Üye Soyadı"} placeHolder={"Üyenin soyismini giriniz..."} onChangeText={setUserSurName} />
            <Input label={"Üye Yaşı"} placeHolder={"Üyenin yaşını giriniz..."} onChangeText={setUserAge} />
            <Input label={"Üye E-posta "} placeHolder={"Üyenin E-posta adresini giriniz..."} onChangeText={setUserEmail} />

            <Button title={"Kaydı Tamamla"} onPress={handleSubmit} />

        </SafeAreaView>
    )
}

export default Member; 