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
import { useState,useContext } from 'react';
import { stylesLogin } from '../styles/login';
import { connectUser } from '../api/connect';
import { ProjectsContext } from '../context';

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(ProjectsContext);

    function handleClick() {

        try{
            connectUser(email,password)
                .then(data => {setUser(data)})
                .catch((error=> {
                    Alert.alert('Loggin failed')
                }))
        }catch{
            console.log(err)
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
                <TouchableOpacity>
                    <Text style={stylesLogin.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesLogin.loginBtn} onPress={() => handleClick()}>
                    <Text style={stylesLogin.loginText} >LOGIN</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        </>
    )
}
