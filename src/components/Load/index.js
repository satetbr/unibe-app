import React from "react";
import { ImageBackground, Image } from "react-native";
import styles from "./style";

const bg = require("../../../assets/CAMO_BG.png");
const logo = require("../../../assets/LOGO_BRANCA.png");

export default function Load({ navigation }) {

    setTimeout(() => {
        navigation.replace('Login')
      }, 4000);

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

