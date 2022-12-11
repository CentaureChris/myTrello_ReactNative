import { View, Text } from "react-native"
import { useContext } from "react"
import { stylesBoard } from "../styles/board"
import { Card } from 'react-native-shadow-cards';
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProjectsContext } from '../context';

export function TodoItem({ item, index,navigation,indexCol }) {

    const { setRunningTodo,setRunningColumn } = useContext(ProjectsContext);

    function handleClick(){
        navigation.navigate('TodoDet')
        setRunningTodo(index)
        setRunningColumn(indexCol)
    }

    return (
            <View style={stylesBoard.container}>
                <TouchableOpacity onPress={()=>handleClick()}>
                    <Card style={{ padding: 10, margin: 10,width: "90%",elevation: 1 }}>
                        <Text>{item.name.length > 30 ? item.name.substring(0,25)+'...' : item.name}</Text>
                    </Card>
                </TouchableOpacity>
            </View>
    )
}