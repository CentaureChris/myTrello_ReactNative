import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    TextInput,
} from 'react-native';
import { useState } from 'react';
import { stylesLogin } from '../styles/login';

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

    return (
        <>
            <SafeAreaView>
                <Text>MyTrello</Text>
            </SafeAreaView>
            <View style={stylesLogin.container}>
                <StatusBar style="auto" />
                <View style={stylesLogin.inputView}>
                    <TextInput
                        style={stylesLogin.TextInput}
                        placeholder="Email."
                        placeholderTextColor="#fff"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={stylesLogin.inputView}>
                    <TextInput
                        style={stylesLogin.TextInput}
                        placeholder="Password."
                        placeholderTextColor="#fff"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <View style={stylesLogin.inputView}>
                    <TextInput
                        style={stylesLogin.TextInput}
                        placeholder="Confirm Password."
                        placeholderTextColor="#fff"
                        secureTextEntry={true}
                        onChangeText={(password) => setConfirmPassword(confirmPassword)}
                    />
                </View>
                <TouchableOpacity style={stylesLogin.loginBtn} onPress={() => navigation.navigate('Login')}>
                    <Text style={stylesLogin.loginText} >Register</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
