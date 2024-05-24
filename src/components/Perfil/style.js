import { StyleSheet } from "react-native";

const style = StyleSheet.create ({
    container: {
        height:"100%",
        width: "100%",
        backgroundColor: "#5F4433"
    },

    headView: {
      justifyContent: "center", 
      alignItems: "center", 
      marginTop: 120
    },

    viewImage: {
      backgroundColor: "#D9D9D9", 
      width: 120, 
      height: 120, 
      borderRadius: 120,  
      justifyContent: "center", 
      alignItems: "center"
    },

    viewChange: {
      backgroundColor: "#D9D9D9", 
      width: 45, 
      height: 45, 
      borderRadius: 45, 
      justifyContent: "center", 
      alignItems: "center", 
      marginTop: 10
    },

    textChange: {
      fontSize: 14, 
      fontWeight: "semibold", 
      color: "#fff"
    },

    view2: {
      backgroundColor: "#A59F7D", 
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20, 
      marginTop: 36, 
      height: "100%", 
      paddingTop: 70, 
      paddingLeft: 40, 
      paddingRight: 40,
      paddingBottom: 20
    },

    label: {
      color: "rgba(35,25,25,1)", 
      fontWeight: "800",
      fontSize: 15, 
      marginLeft: 20
    },

    input: {
      backgroundColor: "rgba(255,255,255,1)", 
      paddingLeft: 20, 
      borderRadius: 15, 
      height: 43
    },

    buttonAluno: {
      borderRadius: 70, 
      backgroundColor: "rgba(52,82,54,1)", 
      justifyContent: "center", 
      alignItems: "center",
      marginBottom: 60,
      marginTop: 20,
      height: 60
  },

  textButton: {
      color: "rgba(255,255,255,1)", 
      fontSize: 24,  
      fontWeight: "600"
  }
});

export default style