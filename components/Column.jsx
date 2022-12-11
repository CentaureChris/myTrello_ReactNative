import { useState,useEffect,useContext } from "react";
import { View, Text, FlatList,Alert } from "react-native"
import { getTodos } from "../api/todo";
import { stylesBoard } from '../styles/board';
import { TodoItem } from "./TodoItems";
import { ProjectsContext } from "../context";
import { Icon } from '@rneui/themed';
import { deleteColumn } from "../api/columns";


const keyExtractor = (item, index) => index.toString()

export const Columns = ({ item, indexCol, navigation }) => {

    const [tasks,setTasks] = useState([])
    const { user, runningProject,setRunningColumn,runningColumn } = useContext(ProjectsContext);

    const renderItem = ({ item, index }) => (
        <TodoItem item={item} index={index} navigation={navigation} indexCol={indexCol}/>
    );

    function handleClick(){
        setRunningColumn(indexCol)
        navigation.navigate('UpdateColumn')
    }

    function remove(){
        deleteColumn(user.uid, runningProject,indexCol)
        Alert.alert("Delete column ok")
    }

    useEffect(() => {
        getTodos(user.uid, runningProject,indexCol).then(data => {
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
                    <Icon
                        name='trash'
                        type='evilicon'
                        color='#05243e'
                        onPress={()=> remove()}
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