import { Input, Button } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View, Text } from "react-native";
import { addColumn } from "../api/columns";
import { ProjectsContext } from "../context";
import { useIsFocused } from '@react-navigation/native';


export function NewColumn({ navigation }) {
    const [columnName, setColumnName] = useState("");
    const { user,runningProject } = useContext(ProjectsContext);
    
    function handleClick() {
        addColumn(user.uid,runningProject, columnName).then(data => {
            navigation.goBack()
            useIsFocused();
        }).catch(err => {
            console.log(err);
        })
    }

    return (

        <View >
            <Input placeholder="Column name" value={columnName} onChangeText={setColumnName} />
            <Button onPress={handleClick}>Ajout</Button>
            <StatusBar style="auto" />
        </View>
    )
}