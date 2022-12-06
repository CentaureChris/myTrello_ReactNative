
import { View, Text, TouchableOpacity } from "react-native"
import { stylesBoard } from '../styles/board';
import { ProjectsContext } from "../context";
import { useContext } from "react";

export const ProjectItem = ({ item, navigation, index }) => {

    const { user, runningProject, setRunningProject } = useContext(ProjectsContext);

    function handleClick() {
        navigation.navigate("Todo")
        setRunningProject(index)
    }

    return (
        <TouchableOpacity style={stylesBoard.item} onPress={() => handleClick()}>
            <View>
                <Text>name: {item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
