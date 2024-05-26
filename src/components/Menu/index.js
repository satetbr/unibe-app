import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from "./style";
import { Calendar, DollarSign, Briefcase, Database, BookOpen, HelpCircle } from "react-native-feather";

const logoU = require("../../../assets/LOGO_U.png");

export default function Menu({ navigation }){

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
                                {srn()}, kethllyssdfsdfsdfdfsdfs
                            </Text>
                            <Text style={styles.title2}>
                                Hoje é dia {currentDate}
                            </Text>
                            <Text style={styles.title3}>
                                O seu objetivo é a ESPCEX
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
                        <View style={styles.viewButtons}>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate("Table")}
                            style={styles.buttons}>
                                
                                <Calendar 
                                stroke="#000" 
                                width={100} 
                                height={100} 
                                strokeWidth={1}/>
                                <Text style={styles.textButtons}>
                                    QUADRO DE HORARIOS
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            onPress={() => navigation.navigate("Soon")}
                            style={styles.buttons}>
                            <DollarSign 
                                stroke="#000" 
                                width={100} 
                                height={100} 
                                strokeWidth={1}/>
                                <Text style={styles.textButtons}>
                                    FINANCEIRO
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewButtons}>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate("Soon")}
                            style={styles.buttons}>
                                <Briefcase 
                                stroke="#000" 
                                width={100} 
                                height={100} 
                                strokeWidth={1}/>
                                <Text style={styles.textButtons}>
                                    CONCURSOS ABERTOS
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity  
                            onPress={() => navigation.navigate("Soon")}
                            style={styles.buttons}>
                            <Database 
                                stroke="#000" 
                                width={100} 
                                height={100} 
                                strokeWidth={1}/>
                                <Text style={styles.textButtons}>
                                    BANCO DE QUESTÕES
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewButtons}>
                            <TouchableOpacity  
                            onPress={() => navigation.navigate("Soon")}
                            style={styles.buttons}>
                                <BookOpen 
                                stroke="#000" 
                                width={100} 
                                height={100} 
                                strokeWidth={1}/>
                                <Text style={styles.textButtons}>
                                    AULAS DE REFORÇO
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity  
                            onPress={() => navigation.navigate("Soon")}
                            style={styles.buttons}>
                            <HelpCircle 
                                stroke="#000" 
                                width={100} 
                                height={100} 
                                strokeWidth={1}/>
                                <Text style={styles.textButtons}>
                                    AJUDA
                                </Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </ScrollView>
        </View>
    );
};
