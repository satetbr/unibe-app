import React, { useState, useEffect, useContext } from 'react';
import { ImageBackground, Image } from "react-native";
import styles from "./style";
import firebase from "../../config/firebaseconfig"
import { DadosContext } from '../../contexts/dados';
import { set } from 'firebase/database';

const database = firebase.firestore();
const bg = require("../../../assets/CAMO_BG.png");
const logo = require("../../../assets/LOGO_BRANCA.png");

export default function Load({ navigation, route }) {

    const { reload, setReload } = useContext(DadosContext);

    const { uid } = useContext(DadosContext);
    const { dados, setDados } = useContext(DadosContext);

    const [dadosAluno, setDadosAluno] = useState([]);

    useEffect(() => {
        if (reload) {
            database.collection("alunos").doc(uid).get().then((doc) => {
                if (doc.exists) {
                    setDadosAluno(doc.data());
                    setDados(doc.data());
                } else {
                    console.log("Sem dados do aluno");
                }
            }).catch((error) => {
                console.log("Erro ao puxar dados do aluno:", error);
            });
            setReload(false);
        }
    }, [reload]);

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

