import React from "react";
import { View, KeyboardAvoidingView, Text, ImageBackground, Image, TouchableOpacity, TextInput, Pressable } from "react-native";
import styles from "./style"
import { AlertTriangle } from "react-native-feather";

const bg = require("../../../assets/CAMO_BG.png")
const logo = require("../../../assets/LOGO_BRANCA.png")

export default function Login() {
    return (
            <ImageBackground
            style={styles.container}
            source={bg}>  
                <View style={{width:"100%", height:"100%", backgroundColor: "rgba(134,137,93,0.35)", justifyContent:"center", alignItems: "center"}}>
                    <View
                    style={{ backgroundColor: "rgba(134,137,93,0.75)", width: 340, height: 200, borderRadius: 20, alignItems: "center"  }}>
                        <View style={{width: 280, height: 80, justifyContent: "center", alignItems: "center", marginTop: 12 }}>
                            <Text style={{fontSize: 48, color: "#FFFFFF", fontWeight: 900}}>
                                ATENÇÃO
                            </Text>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                            <Text style={{fontSize: 22, color: "#FFFFFF", fontWeight: 600}}>
                                FUNCIONALIDADE EM {"\n"}
                                DESENVOLVIMENTO
                            </Text>
                            <AlertTriangle stroke="#BD0202" width={90} height={90} strokeWidth={1}/>
                        </View>
                    </View>
                </View>       
            </ImageBackground>
    );
}