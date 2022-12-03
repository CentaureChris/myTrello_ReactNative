import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    Alert,
} from 'react-native';
import { Input } from 'react-native-elements';
import { useState } from 'react';
import { stylesLogin } from '../styles/login';
import { createUser } from '../api/connect';

// Data I will need are only for connexions 
// const datas= [
//      {
//          email: "bkabka@de.de",
//          password: "ededed" 
//      }
// ]

export function Register({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function registerAction() {
        if(password == confirmPassword){
            try{
                 createUser(email,password)
                 .then(() => navigation.navigate('Login'))
                 .catch((error=> {
                    console.log(error)
                    Alert.alert('Registration failed')
                }))
            }catch(error){
                console.log(error)
            }
        }else{
            Alert.alert('Two passwords are different')
        }
    }
    
    return (
        <>
            <SafeAreaView>
                <Text>MyTrello</Text>
            </SafeAreaView>
            <View style={stylesLogin.container}>
                <StatusBar style="auto" />
                <View style={stylesLogin.inputView}>
                    <Input
                        style={stylesLogin.TextInput}
                        inputContainerStyle={{borderBottomWidth:0}}
                        placeholder="Email."
                        placeholderTextColor="#fff"
                        autoCapitalize='none'
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={stylesLogin.inputView}>
                    <Input
                        style={stylesLogin.TextInput}
                        inputContainerStyle={{borderBottomWidth:0}}
                        placeholder="Password."
                        placeholderTextColor="#fff"
                        autoCapitalize='none'
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <View style={stylesLogin.inputView}>
                    <Input
                        style={stylesLogin.TextInput}
                         inputContainerStyle={{borderBottomWidth:0}}
                        placeholder="Confirm Password."
                        placeholderTextColor="#fff"
                        secureTextEntry={true}
                        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                    />
                </View>
                <TouchableOpacity style={stylesLogin.loginBtn} onPress={() => registerAction()}>
                {/* <TouchableOpacity style={stylesLogin.loginBtn} onPress={() => navigation.navigate('Login')}> */}
                    <Text style={stylesLogin.loginText} >Register</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
