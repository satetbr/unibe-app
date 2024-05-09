import React from "react";
import { View, KeyboardAvoidingView, Text, ImageBackground, Image, TouchableOpacity, TextInput, Pressable } from "react-native";
import styles from "./style"

const bg = require("../../../assets/CAMO_BG.png")
const logo = require("../../../assets/LOGO_BRANCA.png")

export default function Login() {
    return (
            <ImageBackground
            style={styles.container}
            source={bg}>         
                <KeyboardAvoidingView
                style={{ backgroundColor: "rgba(134,137,93,0.75)", width: 335, height: 420, borderRadius: 20, alignItems: "center"  }}>
                    <View
                    style={{marginTop:37}}>
                        <Image
                        style={{width: 205, height: 89}}
                        source={logo}/>
                    </View>
                    <View>
                        <View style={{marginTop:18, width: 260, height: 60}}>
                            <Text style={{color: "rgba(35,25,25,1)", fontWeight: "800", fontSize: 15, marginLeft: 20}}>
                                Matricula
                            </Text>
                            <TextInput
                            keyboardType="numeric"
                            style={{backgroundColor: "rgba(255,255,255,1)", borderRadius: 15, height: 43,}}
                            placeholder="Digite a sua matricula"
                            onChangeText={()=> {}}/>
                        </View>
                        <View style={{marginTop: 25}}>
                            <Text style={{color: "rgba(35,25,25,1)", fontWeight: "800", fontSize: 15, marginLeft: 20}}>
                                Senha
                            </Text>
                            <TextInput
                            style={{backgroundColor: "rgba(255,255,255,1)", borderRadius: 15, height: 43,}}
                            placeholder="Digite a sua senha"
                            onChangeText={()=> {}}/>
                            <Pressable style={{alignItems: "flex-end"}}>
                                <Text style={{fontSize: 10, marginRight: 15, color: "rgba(255,255,255,0.8)", marginTop: 5}}>
                                    Esqueci a minha senha
                                </Text>
                            </Pressable> 
                        </View>
                    </View>
                    <View style={{flexDirection: "row", marginTop: 40, justifyContent: "space-around", paddingHorizontal: 19, width: 335}}>
                        <TouchableOpacity style={{width: 120,  height: 36,  borderRadius: 70, backgroundColor: "rgba(52,82,54,1)", justifyContent: "center", alignItems: "center"}}>
                            <Text style={{ color: "rgba(255,255,255,1)", FontSize: 14,  fontWeight: "800",}}>Quero ser Aluno</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 120,  height: 36,  borderRadius: 70, backgroundColor: "rgba(35,25,25,1)", justifyContent: "center", alignItems: "center"}}>
                            <Text style={{color: "rgba(255,255,255,1)", fontSize: 14, fontWeight: "800"}}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
    );
}