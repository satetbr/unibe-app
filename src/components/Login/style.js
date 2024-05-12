import { StyleSheet } from "react-native";

const style = StyleSheet.create ({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },

    centralView: {
        backgroundColor: "rgba(134,137,93,0.75)", 
        width: 335, 
        height: 420, 
        borderRadius: 20, 
        alignItems: "center" 
    },

    viewLogo: {
        marginTop:37
    },

    logo:{
        width: 205, 
        height: 89
    },

    viewMatricula: {
        marginTop:18,
        width: 260, 
        height: 60
    },

    textLabel:{
        color: "rgba(35,25,25,1)", 
        fontWeight: "800",
        fontSize: 15, 
        marginLeft: 20
    },

    input: {
        backgroundColor: "rgba(255,255,255,1)", 
        borderRadius: 15, 
        height: 43
    },

    viewSenha: {
        marginTop: 25
    },

    viewRecovery: {
        alignItems: "flex-end"
    },

    textRecovery: {
        fontSize: 10, 
        marginRight: 15, 
        color: "rgba(255,255,255,0.8)", 
        marginTop: 5
    },

    viewButtons: {
        flexDirection: "row", 
        marginTop: 40, 
        justifyContent: "space-around",
        paddingHorizontal: 19, 
        width: 335
    },

    buttonAluno: {
        width: 120,  
        height: 36,  
        borderRadius: 70, 
        backgroundColor: "rgba(52,82,54,1)", 
        justifyContent: "center", 
        alignItems: "center"
    },

    textButton: {
        color: "rgba(255,255,255,1)", 
        fontSize: 14,  
        fontWeight: "800"
    },

    buttonEntrar: {
        width: 120,  
        height: 36,  
        borderRadius: 70, 
        backgroundColor: "rgba(35,25,25,1)", 
        justifyContent: "center", 
        alignItems: "center"
    }
});

export default style