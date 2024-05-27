import { StyleSheet } from "react-native";

const style = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: "#5F4433"
    },

    title1: {
        fontSize: 20, 
        fontWeight:"bold", 
        color:"#fff",
       
    },

    title2: {
        fontSize: 16, 
        fontWeight:"bold", 
        color:"#fff",
        marginTop: 5,
        
    },

    title3: {
        fontSize: 20, 
        fontWeight:"bold", 
        color:"#fff", 
        marginTop: 55,
        maxWidth: "1000%"
    },

    viewFotoPerfil: {
        backgroundColor: "#D9D9D9", 
        width: 100, 
        height: 100, 
        borderRadius: 100,  
        justifyContent: "center", 
        alignItems: "center",
    },

    bottomView: {
        backgroundColor: "#A59F7D", 
        marginTop: 50, 
        paddingTop: 70, 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 100,
    },

    viewList: {
        marginLeft: 40,
        marginRight: 40,
    },

    text1: {
        fontSize: 20,
        fontWeight: "900",
        color: "#fff"
    },
    
    text2: {
        fontSize: 20,
        fontWeight: "600",
        color: "#fff"
    },

    text3: {
        fontSize: 20,
        fontWeight: "700",
        color: "#fff"
    },

    separator: {
        height: 2,
        backgroundColor: "#fff",
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
        marginBottom: 10
    }
});
export default style;