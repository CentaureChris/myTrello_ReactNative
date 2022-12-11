import React, {Component} from 'react';
import { SafeAreaView, View, FlatList,TouchableOpacity,Text } from "react-native"
import { useEffect, useState, useContext } from 'react';
import { ProjectsContext } from '../context';
import { Columns } from '../components/Column';
import { getColumns } from '../api/columns';
import { stylesBoard } from '../styles/board';
import { useIsFocused } from '@react-navigation/native';
import { Icon } from '@rneui/themed';


const keyExtractor = (item, index) => index.toString()

export function Project({navigation}) {

    const [columns, setColumns] = useState([])
    const { user, runningProject,setRunningColumn } = useContext(ProjectsContext);
    const isFocused = useIsFocused();

    const renderItem = ({ item, index }) => (
        <Columns item={item} indexCol={index} navigation={navigation} />
    );

    function projectSettings(){
        navigation.navigate('ProjectSettings')
    }

    useEffect(() => {
        getColumns(user.uid, runningProject).then(data => {
            setColumns(data)
        }).catch(err => {
            console.log(err)
        })
    }, [isFocused])

    return (
        <SafeAreaView >
            <View style={stylesBoard.top}>
                <TouchableOpacity >
                    <Text style={stylesBoard.addButton} onPress={()=> navigation.navigate('AddColumn')}>Add Column</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesBoard.addButton} onPress={() => navigation.navigate('AddTodo')}>
                    <Text >Add Todo</Text>
                </TouchableOpacity>
                <Icon
                        name='gear'
                        type='evilicon'
                        color='#05243e'
                        onPress={()=> projectSettings()}
                    />
            </View>
            {columns.length == 0
            ?<View>
                <Text>
                    No todos in this project... please start by adding one column!
                </Text>
            </View>
            :
                <View>
                    <FlatList
                        horizontal
                        data={columns}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                    />
                </View >
            }
        </SafeAreaView>
    )
}