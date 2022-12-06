import { StyleSheet } from "react-native"
import { Columns } from "../components/Column"

export const stylesBoard = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
    },
    item: {
        backgroundColor: 'lightblue',
        padding: 40,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:15,
    },
    title: {
        fontSize: 25,
        textDecorationLine: true,
        justifyContent:"space-between"
    },
    logoutButton: {
        width: "20%",
        borderRadius: 5,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },
    addButton: {
        minWidth: "20%",
        paddingHorizontal:10,
        borderRadius: 5,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
    },
    top: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    column: {
        backgroundColor: 'lightblue',
        textAlign: "center",
        width: 270,
        height: '95%',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:15,

    },
})