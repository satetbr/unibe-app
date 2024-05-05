import React from "react";
import { View, KeyboardAvoidingView, Text, ImageBackground, Image, TouchableOpacity, TextInput, Pressable } from "react-native";
import styles from "./style"

const bg = require("../../../assets/CAMO_BG.png")
const logo = require("../../../assets/LOGO_BRANCA.png")

export default function Login() {
    return (
        <View>
            <ImageBackground
            style={{width: "100%", height: "100%"}}
            source={bg}>         
                <KeyboardAvoidingView>
                    <View>
                        <Image source={logo}/>
                    </View>
                    <View>
                        <View>
                            <Text>
                                Matricula
                            </Text>
                            <TextInput
                            placeholder="Digite a sua matricula"
                            onChangeText={()=> {}}/>
                        </View>
                        <View>
                            <Text>
                                Senha
                            </Text>
                            <TextInput
                            placeholder="Digite a sua senha"
                            onChangeText={()=> {}}/>
                            <Pressable>
                                <Text>
                                    Esqueci a minha senha
                                </Text>
                            </Pressable> 
                        </View>
                        
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
}