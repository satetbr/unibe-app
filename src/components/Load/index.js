import React, { useState, useEffect } from 'react';
import { ImageBackground, Image } from "react-native";
import styles from "./style";
import firebase from "../../config/firebaseconfig"

const database = firebase.firestore();
const bg = require("../../../assets/CAMO_BG.png");
const logo = require("../../../assets/LOGO_BRANCA.png");

export default function Load({ navigation, route }) {

    const { uid } = route.params;

    const [dadosAluno, setDadosAluno] = useState([]);

    useEffect(() => {
        database.collection("alunos").doc(uid).get().then((doc) => {
            if (doc.exists) {
                setDadosAluno(doc.data());
            } else {
                console.log("Sem dados do aluno");
            }
        }).catch((error) => {
            console.log("Erro ao puxar dados do aluno:", error);
        });
    }, []);

    setTimeout(() => {
        navigation.replace("Menu", { screen: "Inicio", params: { uid: uid, email: dadosAluno.email, foto: dadosAluno.foto, goal: dadosAluno.goal, nome: dadosAluno.nome, tel: dadosAluno.tel}});
    }, 2000);

    return (
            <ImageBackground
            style={styles.container}
            source={bg}>   
                <Image
                style={styles.logo}
                source={logo}/>
            </ImageBackground>
            
    );
}

