import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DashBoard } from "../views/dashboard";
import { Project } from '../views/projectBoard';
import { NewProject } from '../views/newProject';
import { NewColumn } from '../views/newColumn';
import { NewTodo } from '../views/newTodo';
const Stack = createStackNavigator();


export function ProjectsRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="DashBoard" component={DashBoard} />
                <Stack.Screen name="AddProject" component={NewProject} />
                <Stack.Screen name="AddColumn" component={NewColumn} />
                <Stack.Screen name="AddTodo" component={NewTodo} />
                <Stack.Screen name="Todo" component={Project} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
