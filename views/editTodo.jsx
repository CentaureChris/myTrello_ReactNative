import { useState,useEffect,useContext } from "react"
import { View,StatusBar } from "react-native"
import { ProjectsContext } from "../context";
import { Input, Button } from "@rneui/themed";
import { updateTodo,getTodo } from "../api/todo";
import { getColumns } from "../api/columns"; 
import RadioButtonRN from 'radio-buttons-react-native';


export function EditTodo({navigation}){
   
    const { user, runningProject,runningColumn,runningTodo,setRunningColumn } = useContext(ProjectsContext);
    const [task,setTask] = useState([])
    const [taskName,setTaskName] = useState('')
    const [taskDesc,setTaskDesc] = useState('')
    const [datas,setDatas] = useState([])
    const [checkBoxValues,setCheckboxValues] = useState([])


    function handleClick(){
        let taskUpdated = {}
        taskUpdated.description = "description"
        taskUpdated.id = task.id
        taskUpdated.name = taskName
        taskUpdated.status = "In dev"
        updateTodo(user.uid,runningProject,runningColumn,runningTodo,taskUpdated)
        navigation.navigate('DashBoard')
        // useIsFocused();
    }

    function test(e){
        let index = checkBoxValues.map(object => object.value).indexOf(e.value)
        setRunningColumn(index)
    }

    useEffect(() => {
        console.log(user.uid+" proj"+runningProject+" col"+runningColumn+" todo"+runningTodo)
        getTodo(user.uid,runningProject,runningColumn,runningTodo).then((data) => {
            setTask(data)
        })
        getColumns(user.uid, runningProject).then(response => {
            setDatas(response)
            setCheckboxValues(response.map((element,index) => ({label:element.name,value:index})))
        }).catch(err => {
            console.log(err)
        })
        console.log(checkBoxValues)
    }, [])

    return(
        <>
            <View >
                <Input placeholder={task.name} value={taskName} onChangeText={setTaskName} />
                <Input placeholder={task.description} value={taskDesc} onChangeText={setTaskDesc} />
                <RadioButtonRN
                    data={checkBoxValues}
                    box={false}
                    selectedBtn={(e) => test(e)}
                />
                <Button onPress={handleClick}>Update</Button>
                <StatusBar style="auto" />
            </View>
        </>
    )
}