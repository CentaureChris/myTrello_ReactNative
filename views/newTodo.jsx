import { Input, Button } from "@rneui/themed";
import { useState, useContext, useEffect } from "react";
import { StatusBar, View } from "react-native";
import { addTodo } from "../api/todo";
import { getColumns } from "../api/columns"; 
import { ProjectsContext } from "../context";
import RadioButtonRN from 'radio-buttons-react-native';
import { useIsFocused } from '@react-navigation/native';


export function NewTodo({navigation}) {
    const [todoName, setTodoName] = useState("");
    const [todoDescription, setTodoDescription] = useState("");
    const { user, runningProject, runningColumn, setRunningColumn } = useContext(ProjectsContext);
    const [datas,setDatas] = useState([])
    const [checkBoxValues,setCheckboxValues] = useState([])

    function handleClick() {
        addTodo(user.uid, runningProject, runningColumn,todoName,todoDescription).then(data => {
            navigation.goBack()
            useIsFocused();
        }).catch(err => {
            console.log(err);
        })
    }

    function test(e){
        let index = checkBoxValues.map(object => object.value).indexOf(e.value)
        setRunningColumn(index)
    }
    
    useEffect(() => {
        getColumns(user.uid, runningProject).then(response => {
            setDatas(response)
            setCheckboxValues(response.map((element,index) => ({label:element.name,value:index})))
        }).catch(err => {
            console.log(err)
        })
        console.log(checkBoxValues)
    }, [])
    

    return (
        <View >
            <Input placeholder="Todo name" value={todoName} onChangeText={setTodoName} />
            <Input placeholder="Todo description" value={todoDescription} onChangeText={setTodoDescription} />
            <RadioButtonRN
                data={checkBoxValues}
                box={false}
                selectedBtn={(e) => test(e)}
            />
            <Button onPress={handleClick}>Ajout</Button>
            <StatusBar style="auto" />
        </View>
    )
}