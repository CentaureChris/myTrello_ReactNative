import { SafeAreaView,View, Text, Alert } from "react-native"
import { useState,useEffect,useContext } from "react"
import { getTodo, deleteTodo } from "../api/todo";
import { ProjectsContext } from '../context';
import { Icon } from '@rneui/themed';
import { stylesBoard } from '../styles/board';



export function TodoDetail({navigation}){
    
    const { user, runningProject,runningColumn,runningTodo } = useContext(ProjectsContext);
    const [task,setTask] = useState([])
    
    useEffect(() => {
        console.log(user.uid+" proj"+runningProject+" col"+runningColumn+" todo"+runningTodo)
        getTodo(user.uid,runningProject,runningColumn,runningTodo).then(data => {
            setTask(data)
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    
    const removeTodo = ()=>{
        deleteTodo(user.uid, runningProject,runningColumn,runningTodo)
        Alert.alert("Delete todo ok")
        navigation.goBack()
    }

    const editTodo = ()=>{
        navigation.navigate('EditTodo')
    }

    return (
        <SafeAreaView>
            <View>
                <Text>
                    TODO name:{task.name}
                </Text>
            </View>
            <View>
                <Text>
                    Todo description: {task.description}
                </Text>
            </View>
            <View>
                <Text>
                    Todo files:
                </Text>
            </View>
            <View style={stylesBoard.top}>
                <Icon
                   name='pencil'
                   type='evilicon'
                   color='blue'
                   onPress={()=> editTodo()}
               />
                <Icon
                    name='trash'
                    type='evilicon'
                    color='red'
                    onPress={()=> removeTodo()}
                />
            </View>
        </SafeAreaView>
    
    )
}