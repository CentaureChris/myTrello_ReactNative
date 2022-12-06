import { useState,useEffect,useContext } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native"
import { getTodos } from "../api/todo";
import { stylesBoard } from '../styles/board';
import { TodoItem } from "./TodoItems";
import { ProjectsContext } from "../context";
import { Icon } from '@rneui/themed';

const keyExtractor = (item, index) => index.toString()

export const Columns = ({ item, index, navigation }) => {

    const [tasks,setTasks] = useState([])
    const { user, runningProject,setRunningColumn } = useContext(ProjectsContext);

    const renderItem = ({ item, index }) => (
        <TodoItem item={item} index={index}/>
    );

    function handleClick(){
        setRunningColumn(index)
        navigation.navigate('UpdateColumn')
    }

    useEffect(() => {
        getTodos(user.uid, runningProject,index).then(data => {
            setTasks(data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    

    return(
        <View style={stylesBoard.container}>
            <View style={stylesBoard.column}>
                <Text style={stylesBoard.title}> 
                    {item.name.toUpperCase()}  
                    <Icon
                        name='pencil'
                        type='evilicon'
                        color='#05243e'
                        onPress={()=> handleClick()}
                    />
                </Text>
                <FlatList
                    horizontal
                    data={tasks}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            </View>
        </View>
    )
};