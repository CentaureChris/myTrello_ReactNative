import { useContext } from "react";
import { View,Text } from "react-native"
import { ProjectsContext } from "../context"
import { deleteProject } from "../api/projects"
import { Icon } from '@rneui/themed';

export function ProjectSettings( {navigation} ){

    const { user, runningProject } = useContext(ProjectsContext);

    function removeProject(){
        deleteProject(user.uid,runningProject)
        navigation.push('DashBoard')
    }

    return (
        <>
            <View>
                <Text>Edit View </Text>
                <Icon
                    name='trash'
                    type='evilicon'
                    color='#05243e'
                    onPress={()=> removeProject()}
                />
            </View>
        </>
    )
}