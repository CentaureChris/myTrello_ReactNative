import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DashBoard } from "../views/dashboard";
import { Project } from '../views/projectBoard';
import { NewProject } from '../views/newProject';
import { NewColumn } from '../views/newColumn';
import { UpdateColumn } from '../views/updateColumn';
import { NewTodo } from '../views/newTodo';
import { EditTodo } from '../views/editTodo';
import { TodoDetail } from '../views/todoDetail';
import { ProjectSettings } from '../views/editProject';

const Stack = createStackNavigator();

export function ProjectsRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="DashBoard" component={DashBoard} />
               <Stack.Screen name="ProjectSettings" component={ProjectSettings} />
                <Stack.Screen name="TodoDet" component={TodoDetail} />
                <Stack.Screen name="AddProject" component={NewProject} />
                <Stack.Screen name="AddColumn" component={NewColumn} />
                <Stack.Screen name="UpdateColumn" component={UpdateColumn} />
                <Stack.Screen name="Todo" component={Project} />
                <Stack.Screen name="AddTodo" component={NewTodo} />
                <Stack.Screen name="EditTodo" component={EditTodo} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
