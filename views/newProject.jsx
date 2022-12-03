import { Input, Button } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View, Text } from "react-native";
import { addProjects } from "../api/projects";
import { ProjectsContext } from "../context";


export function NewProject({ navigation }) {
    const [projectName, setProjectName] = useState("");
    const { user } = useContext(ProjectsContext);
    function handleClick() {
        addProjects(user.uid, projectName).then(data => {
            navigation.push("DashBoard")
        }).catch(err => {
            console.log(err);
        })
    }

    return (

        <View >
            <Input placeholder="Project name" value={projectName} onChangeText={setProjectName} />
            <Button onPress={handleClick}>Ajout</Button>
            <StatusBar style="auto" />
        </View>
    )
}