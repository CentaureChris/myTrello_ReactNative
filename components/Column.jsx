import { useState,useEffect,useContext } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native"
import { getTodos } from "../api/columns";
import { stylesBoard } from '../styles/board';
import { TodoItem } from "./TodoItems";
import { ProjectsContext } from "../context";

const keyExtractor = (item, index) => index.toString()

export const Columns = ({ item, index }) => {

    const [tasks,setTasks] = useState([])
    const { user, runningProject } = useContext(ProjectsContext);

    const renderItem = ({ item, index }) => (
        <TodoItem item={item} index={index}/>
    );

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
                <Text style={stylesBoard.title}> {item.name.toUpperCase()}</Text>
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