import { View, Text } from "react-native"
import { useEffect } from "react"
import { stylesBoard,Button } from "../styles/board"
// import { Card } from 'react-native-shadow-cards';

export function TodoItem({ item, index }) {

    return (
        <View style={stylesBoard.container}>
            {/* <Card style={{ padding: 10, margin: 10,width: "90%",elevation: 1 }}> */}
                <Text>{item.name.length > 30 ? item.name.substring(0,25)+'...' : item.name}</Text>
            {/* </Card> */}
        </View>
    )
}