import React, { useEffect, useState, useRef } from "react";
import { View, KeyboardAvoidingView, Text, ImageBackground, Image, TouchableOpacity, TextInput, Linking, Keyboard } from "react-native";
import styles from "./style"
import { sha256 } from "js-sha256";
import firebase from "../../config/firebaseconfig" 
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const bg = require("../../../assets/CAMO_BG.png");
const logo = require("../../../assets/LOGO_BRANCA.png");
const database = firebase.firestore();


export default function Login( {navigation} ) {
    
    const primeiroInput = useRef(null);
    const segundoInput = useRef(null);

    const linkRegistrar = () => {
        Linking.openURL('https://api.whatsapp.com/send?phone=552124124104&text=Ol%C3%A1%2C%20eu%20vim%20do%20app%20UNIBE%20e%20gostaria%20de%20ser%20aluno%F0%9F%98%80');
    };

    const linkSenha = () => {
        Linking.openURL('https://api.whatsapp.com/send?phone=552124124104&text=Oi%2C%20eu%20esqueci%20minha%20senha');
    };

    const [email, setEmail] = useState('');
    const [matricula, setMatricula] = useState('');

    const [inputSenha, setInputSenha] = useState('');
    const [senhaHash, setSenhaHash] = useState('');

    const [errorLogin, setErrorLogin] = useState('');

    function loginFirebase() {
        Keyboard.dismiss();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senhaHash)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigation.replace("Menu");
            // ...
        })
        .catch((error) => {
        setErrorLogin(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        });
    };

    function convertSHA() {
        setSenhaHash(sha256(inputSenha));
    };

    function convertEMAIL(){
        setEmail(matricula.concat('@unibe.com.br'));
    };

    useEffect(() => {
        convertSHA();
    }, [inputSenha]);

    useEffect(() => {
        convertEMAIL();
    }, [matricula]);

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
                                Matricua
                            </Text>
                            <TextInput
                            ref={primeiroInput}
                            onSubmitEditing={() => segundoInput.current.focus()}
                            autoCapitalize="none"
                            returnKeyType="next"
                            keyboardType="decimal-pad"
                            style={styles.input}
                            placeholder="Digite sua matricula"
                            onChangeText={(text) => setMatricula (text)}
                            value={matricula}/>
                        </View>
                        <View 
                        style={styles.viewSenha}>
                            <Text 
                            style={styles.textLabel}>
                                Senha
                            </Text>
                            <TextInput
                            onSubmitEditing={() => Keyboard.dismiss()}
                            ref={segundoInput}
                            returnKeyType="send"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder="Digite a sua senha"
                            value={inputSenha}
                            onChangeText={(senha)=> {setInputSenha(senha)}}
                            />
                            <TouchableOpacity 
                            onPress={linkSenha}
                            style={styles.viewRecovery}>
                                <Text 
                                style={styles.textRecovery}>
                                    Esqueci a minha senha
                                </Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    {errorLogin === true
                    ?
                    <View style={styles.contentAlert}>
                        <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#fff"/>
                        <Text style={styles.warningAlert}>
                            Matricula ou senha incorreta
                        </Text>
                    </View>
                    :
                    <View></View>
                    }
                    <View 
                    style={styles.viewButtons}>

                        <TouchableOpacity
                        onPress={linkRegistrar}
                        // onPress={() => navigation.navigate("Menu")}
                        style={styles.buttonAluno}>
                            <Text 
                            style={styles.textButton}>Quero ser Aluno
                            </Text>
                        </TouchableOpacity>

                        { email === "" || inputSenha === "" 
                        ?
                            <TouchableOpacity
                            disabled={true} 
                            style={styles.buttonEntrarDisable}>
                                <Text 
                                style={styles.textButtonDisable}>Entrar
                                </Text>
                            </TouchableOpacity>
                        :
                            <TouchableOpacity
                            onPress={loginFirebase} 
                            style={styles.buttonEntrar}>
                                <Text 
                                style={styles.textButton}>Entrar
                                </Text>
                            </TouchableOpacity>
                        }
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
    );
}