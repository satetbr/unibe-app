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
                style={styles.centralView}>
                    <View
                    style={styles.viewLogo}>
                        <Image
                        style={styles.logo}
                        source={logo}/>
                    </View>
                    <View>
                        <View 
                        style={styles.viewMatricula}>
                            <Text 
                            style={styles.textLabel}>
                                Matricula
                            </Text>
                            <TextInput
                            keyboardType="numeric"
                            style={styles.input}
                            placeholder="Digite a sua matricula"
                            onChangeText={()=> {}}/>
                        </View>
                        <View 
                        style={styles.viewSenha}>
                            <Text 
                            style={styles.textLabel}>
                                Senha
                            </Text>
                            <TextInput
                            keyboardType="password"
                            style={styles.input}
                            placeholder="Digite a sua senha"
                            onChangeText={()=> {}}/>
                            <Pressable 
                            style={styles.viewRecovery}>
                                <Text 
                                style={styles.textRecovery}>
                                    Esqueci a minha senha
                                </Text>
                            </Pressable> 
                        </View>
                    </View>
                    <View 
                    style={styles.viewButtons}>
                        <TouchableOpacity 
                        style={styles.buttonAluno}>
                            <Text 
                            style={styles.textButton}>Quero ser Aluno</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={styles.buttonEntrar}>
                            <Text 
                            style={styles.textButton}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
    );
}