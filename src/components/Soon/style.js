import { StyleSheet } from "react-native";
import React from "react";

const style = StyleSheet.create ({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },

    filtro: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(134,137,93,0.35)",
        justifyContent: "center",
        alignItems: "center"
    },

    centralView: {
        backgroundColor: "rgba(134,137,93,0.75)", 
        width: 340, 
        height: 200, 
        borderRadius: 20, 
        alignItems: "center"  
    },

    viewAtencao: {
        width: 280, 
        height: 80, 
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: 12
    },

    textAtencao: {
        fontSize: 48, 
        color: "#FFFFFF", 
        fontWeight: "900"
    },

    view2: {
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"center"
    },

    text2: {
        fontSize: 22, 
        color: "#FFFFFF", 
        fontWeight: "600"
    }
});

export default style