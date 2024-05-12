import React from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import styles from "./style"
import { Calendar, DollarSign, Briefcase, Database, BookOpen, HelpCircle } from "react-native-feather"

const logoU = require("../../../assets/LOGO_U.png")

export default function Menu(){
    return (
        <View
        style={styles.container}>
            <ScrollView>
                <View style={{paddingLeft: 40, marginTop: 100}}>
                    <View style={{flexDirection: "row"}}>
                        <View style={{marginTop: 20}}>
                            <Text style={styles.title1}>
                                Boa noite, Matheus Filipe
                            </Text>
                            <Text style={styles.title2}>
                                Hoje é dia 11 de maio de 2024
                            </Text>
                        </View>
                        <View style={styles.viewFotoPerfil}>
                            <Image
                            style={{height: 90, width: 60}}
                            resizeMethod='scale'
                            source={logoU}/>
                        </View>
                    </View>
                    <Text style={styles.title3}>
                        O seu objetivo é a EPCAR
                    </Text>
                </View>
                <View style={styles.bottomView}>
                        <View style={styles.viewButtons}>
                            <TouchableOpacity style={styles.buttons}>
                                <Calendar 
                                stroke="#000" 
                                width={100} 
                                height={100} 
                                strokeWidth={1}/>
                                <Text style={styles.textButtons}>
                                    QUADRO DE HORARIOS
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttons}>
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
                            <TouchableOpacity style={styles.buttons}>
                                <Briefcase 
                                stroke="#000" 
                                width={100} 
                                height={100} 
                                strokeWidth={1}/>
                                <Text style={styles.textButtons}>
                                    CONCURSOS ABERTOS
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttons}>
                            <Database 
                                stroke="#000" 
                                width={100} 
                                height={100} 
                                strokeWidth={1}/>
                                <Text style={styles.textButtons}>
                                    BANCO DE DADOS
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewButtons}>
                            <TouchableOpacity style={styles.buttons}>
                                <BookOpen 
                                stroke="#000" 
                                width={100} 
                                height={100} 
                                strokeWidth={1}/>
                                <Text style={styles.textButtons}>
                                    AULAS DE REFORÇO
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttons}>
                            <HelpCircle 
                                stroke="#000" 
                                width={100} 
                                height={100} 
                                strokeWidth={1}/>
                                <Text style={styles.textButtons}>
                                    SUPORTE
                                </Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </ScrollView>
        </View>
    );
}
