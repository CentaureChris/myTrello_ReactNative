import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, FlatList,TouchableOpacity } from 'react-native';
import { stylesBoard } from '../styles/board';
import { getAllProjects } from '../api/projects';
import { ProjectsContext } from '../context';
import { ProjectItem } from '../components/Project';


export function DashBoard({navigation}) { 
    
    const [datas,setDatas] = useState([])
    const { user,setUser } = useContext(ProjectsContext);
    
    const renderItem = ({ item,index }) => (
        <ProjectItem item={item} navigation={navigation} index={index}/>
    );

    useEffect(() => {
        getAllProjects(user.uid).then(data => {
            setDatas([...data])
        }).catch(err => console.log(err))
    }, [])
    
    return (
        <SafeAreaView style={stylesBoard.container}>
            <View style={stylesBoard.top}>
                <TouchableOpacity style={stylesBoard.addButton} onPress={() =>  navigation.navigate('AddProject')}>
                    <Text >Add Project</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesBoard.logoutButton} onPress={() => setUser('')}>
                    <Text style={{color:"white"}} >Logout</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={datas}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View >
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}
