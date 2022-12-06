import React from 'react';
import { SafeAreaView, View, FlatList,TouchableOpacity,Text } from "react-native"
import { useEffect, useState, useContext } from 'react';
import { ProjectsContext } from '../context';
import { Columns } from '../components/Column';
import { getColumns } from '../api/columns';
import { stylesBoard } from '../styles/board';


const keyExtractor = (item, index) => index.toString()

export function Project({navigation}) {

    const [columns, setColumns] = useState([])
    const { user, runningProject,setRunningColumn } = useContext(ProjectsContext);

    const renderItem = ({ item, index }) => (
        <Columns item={item} index={index} navigation={navigation} />
    );

    useEffect(() => {
        getColumns(user.uid, runningProject).then(data => {
            setColumns(data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <SafeAreaView >
            <View style={stylesBoard.top}>
                <TouchableOpacity >
                    <Text style={stylesBoard.addButton} onPress={()=> navigation.navigate('AddColumn')}>Add Column</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesBoard.addButton} onPress={() => navigation.navigate('AddTodo')}>
                    <Text >Add Todo</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    horizontal
                    data={columns}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            </View >
        </SafeAreaView>
    )
}