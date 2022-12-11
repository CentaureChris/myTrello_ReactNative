import { Input, Button } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View } from "react-native";
import { ProjectsContext } from "../context";
import { updateColumn,getColumns } from "../api/columns";
import { useEffect } from "react";



export function UpdateColumn({ navigation }) {
    
    const [columnName, setColumnName] = useState("");
    const { user,runningProject,runningColumn } = useContext(ProjectsContext);
    const [column,setColumn] = useState({})
    const [placeholder,setPlaceholder] = useState('')

    useEffect(() => {
        getColumns(user.uid,runningProject).then((data) => {
            setColumn(data[runningColumn])
            setPlaceholder(data[runningColumn].name)
        })
    }, [])

    function handleClick() {
        // console.log(column)
        updateColumn(user.uid,runningProject,runningColumn,column,columnName)
        navigation.goBack()
    }

    return (
        <View >
            <Input placeholder={placeholder} value={columnName} onChangeText={setColumnName} />
            <Button onPress={handleClick}>Update</Button>
            <StatusBar style="auto" />
        </View>
    )
}