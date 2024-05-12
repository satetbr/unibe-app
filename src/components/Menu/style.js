import { StyleSheet } from "react-native";

const style = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: "#5F4433"
    },

    title1: {
        fontSize: 20, 
        fontWeight:"bold", 
        color:"#fff"
    },

    title2: {
        fontSize: 16, 
        fontWeight:"bold", 
        color:"#fff",
        marginTop: 5
    },

    viewFotoPerfil: {
        backgroundColor: "#D9D9D9", 
        width: 120, 
        height: 120, 
        borderRadius: 120, 
        marginLeft: "5%", 
        marginRight: 10, 
        justifyContent: "center", 
        alignItems: "center"
    },

    title3: {
        fontSize: 20, 
        fontWeight:"bold", 
        color:"#fff", 
        marginTop: 55
    },

    bottomView: {
        backgroundColor: "#A59F7D", 
        marginTop: 50, 
        paddingTop: 70, 
        borderTopLeftRadius: 20
    },

    viewButtons: {
        flexDirection: "row", 
        justifyContent: 'space-evenly', 
        marginBottom: 50
    },

    buttons: {
        alignItems: "center", 
        justifyContent: "center", 
        width: 150, 
        height: 150, 
        backgroundColor: "#D9D9D9", 
        borderRadius: 30
    },

    textButtons: {
        fontSize: 12, 
        fontWeight: "bold"
    }
});
export default style