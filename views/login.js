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

export function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                <TouchableOpacity>
                    <Text style={stylesLogin.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesLogin.loginBtn} onPress={() => navigation.navigate('Board')}>
                    <Text style={stylesLogin.loginText} >LOGIN</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
