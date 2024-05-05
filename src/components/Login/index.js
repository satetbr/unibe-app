import React from "react";
import { View, KeyboardAvoidingView, Text, ImageBackground, Image, TouchableOpacity, TextInput, Pressable } from "react-native";
import styles from "./style"

const bg = require("../../../assets/CAMO_BG.png")
const logo = require("../../../assets/LOGO_BRANCA.png")

export default function Login() {
    return (
        <View>
            <ImageBackground
            style={styles.frame}
            source={bg}>         
                <KeyboardAvoidingView>
                    <View>
                        <Image
                        style={styles.imgLogo}
                        source={logo}/>
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
                    <View>
                        <TouchableOpacity>
                            <Text>Quero ser Aluno</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Acessar</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
}