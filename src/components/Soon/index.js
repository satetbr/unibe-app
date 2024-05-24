import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style"
import { AlertTriangle } from "react-native-feather";

const bg = require("../../../assets/CAMO_BG.png")

export default function Soon( navigation ) {
    return (
            <ImageBackground
            style={styles.container}
            source={bg}>  
                <View style={styles.filtro}>
                    <View
                    style={styles.centralView}>
                        <View 
                        style={styles.viewAtencao}>
                            <Text 
                            style={styles.textAtencao}>
                                ATENÇÃO
                            </Text>
                        </View>
                        <View 
                        style={styles.view2}>
                            <Text 
                            style={styles.text2}>
                                FUNCIONALIDADE EM {"\n"}
                                DESENVOLVIMENTO
                            </Text>
                            <AlertTriangle 
                            stroke="#BD0202" 
                            width={90} 
                            height={90} 
                            strokeWidth={1}/>
                        </View>
                    </View>
                </View>       
            </ImageBackground>
    );
}