import { Input, Button } from "@rneui/themed";
import { useState, useContext, useEffect } from "react";
import { StatusBar, View, Text } from "react-native";
import { addTodo, getColumns } from "../api/columns";
import { ProjectsContext } from "../context";
import RadioButtonRN from 'radio-buttons-react-native';


export function NewTodo({}) {
    const [todoName, setTodoName] = useState("");
    const { user, runningProject, runningColumn } = useContext(ProjectsContext);
    const [datas,setDatas] = useState([])
    const [checkBoxValues,setCheckboxValues] = useState([])

    function handleClick() {
        addTodo(user.uid, runningProject, todoName).then(data => {
            navigation.goBack()
        }).catch(err => {
            console.log(err);
        })
    }

    // function testest(e){
    //     let index = datas.map(object => object.id).indexOf(e.id)
    //     console.log(datas)
    // }
    
    useEffect(() => {
        getColumns(user.uid, runningProject).then(response => {
            setCheckboxValues(response.map((element,index) => ({label:element.name,value:index})))
        }).catch(err => {
            console.log(err)
        })
        console.log(checkBoxValues)
    }, [])
    

    return (
        <View >
            <Input placeholder="Todo name" value={todoName} onChangeText={setTodoName} />
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