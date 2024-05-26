import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, FlatList } from 'react-native';
import styles from "./style";
import firebase from "../../config/firebaseconfig";

const logoU = require("../../../assets/LOGO_U.png");
const database = firebase.firestore();

export default function Table({ navigation, route }){

    const { goal, nomeAluno } = route.params;
    
    const [aulas, setAulas] = useState([]);

    useEffect(() => {
        database.collection("aulas").onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({...doc.data()});
            });
            setAulas(list);
        });
    }, []);

    function srn() {
        const time = new Date().getHours();
        if (time >= 5 && time < 12) {
            return "Bom dia";
        } else if (time >= 12 && time < 18) {
            return "Boa tarde";
        } else {
            return "Boa noite";
        }
    };
    function dataHoje() {
        const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        const data = new Date();
        const dia = data.getDate();
        const mes = meses[data.getMonth()];
        const ano = data.getFullYear();
        return `${dia} de ${mes} de ${ano}`; 
    };



    const [currentDate, setCurrentDate] = useState(dataHoje());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(dataHoje());
        }, 60000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <View
        style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginLeft: 40, marginRight: 40, marginTop: 100, maxWidth: "100%"}}>
                    <View style={{flexDirection: "row", justifyContent:"space-around"}}>
                        <View style={{marginTop: 20, maxWidth: "75%"}}>
                            <Text style={styles.title1}>
                            {nomeAluno ?
                                srn() + ", " + nomeAluno
                                :
                                srn()}
                            </Text>
                            <Text style={styles.title2}>
                                Hoje é dia {currentDate}
                            </Text>
                            <Text style={styles.title3}>
                            {goal ?
                                "O seu objetivo é: " + goal
                                :
                                ""
                                }
                            </Text>
                        </View>
                        <View style={styles.viewFotoPerfil}>
                            <Image
                            style={{height: 90, width: 60}}
                            resizeMethod='scale'
                            source={logoU}/>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data={aulas}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.viewList}>
                                <Text style={styles.text1}>{item.disciplina}</Text>
                                <Text style={styles.text3}>Sala: {item.sala}</Text>
                                <Text style={styles.text2}>{item.hi} até {item.hf}</Text>
                            </View>
                        );
                    }}
                    ItemSeparatorComponent={() => {
                        return (
                            <View 
                            style={styles.separator}
                            />
                        );
                    }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

