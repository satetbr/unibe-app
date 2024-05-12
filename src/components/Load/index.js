import React from "react";
import { View, KeyboardAvoidingView, Text, ImageBackground, Image, TouchableOpacity, TextInput, Pressable } from "react-native";
import styles from "./style"

const bg = require("../../../assets/CAMO_BG.png")
const logo = require("../../../assets/LOGO_BRANCA.png")

export default function Load() {
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