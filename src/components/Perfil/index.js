import React, { useState, useRef, useContext, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from "./style";
import { Camera } from "react-native-feather";
import DropdownComponent from '../DropDown';
import { TextInputMask } from 'react-native-masked-text';
import { DadosContext } from "../../contexts/dados";
import * as ImagePicker from 'expo-image-picker';

const logoU = require("../../../assets/LOGO_U.png");

export default function Perfil( {navigation} ){

    const { imgPerfil, setImgPerfil } = useContext(DadosContext);

    const { setReload } = useContext(DadosContext);

    const { editado } = useContext(DadosContext);

    const { editfoto } = useContext(DadosContext);

    const { dados } = useContext(DadosContext);

    const [name, setName] = useState(dados.nome);
    const [email, setEmail] = useState(dados.email);
    const [phone, setPhone] = useState(dados.tel);

    const nomeInput = useRef(null);
    const emailInput = useRef(null);

    const handleEditado = async () => {
        await editado(name, email, phone);
        navigation.replace("Load");
        setReload(true);
    }

    const handleEditfoto = async () => {
        await editfoto(imgPerfil);
        navigation.replace("Load");
        setReload(true);
    }

    
    const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [2, 3],
        quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
        setImgPerfil(result.assets[0].uri);
        handleEditfoto();
    }
    };

    useEffect(() => {
        if(imgPerfil){
            console.log(imgPerfil.split("/")[(imgPerfil.split("/").length)-1]);
        }
    }, [imgPerfil])
    
    
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}>
                <View 
                style={styles.headView}>
                    <View 
                    style={styles.viewImage}>
                        <Image
                            style={{height: 90, width: 60}}
                            resizeMethod='scale'
                            resizeMode='contain'
                            source={dados.foto?
                            {uri: dados.foto}:
                            logoU
                            }/>
                    </View>
                    {/* <TouchableOpacity
                    onPress={pickImage} 
                    style={styles.viewChange}>
                    <Camera 
                    stroke="#000" 
                    width={25} 
                    height={25} 
                    strokeWidth={2}/>
                    </TouchableOpacity>
                    <Text 
                    style={styles.textChange}>
                        Alterar Foto
                    </Text> */}
                </View>
                <ScrollView
                showsVerticalScrollIndicator={false} 
                style={styles.view2}>
                    <View 
                    style={{marginBottom: 50}}>
                        <Text 
                        style={styles.label}>
                            Nome
                        </Text>
                        <TextInput 
                        ref={nomeInput}
                        onSubmitEditing={() => emailInput.current.focus()}
                        returnKeyType="next"
                        autoCapitalize='words'
                        keyboardType="default"
                        onChangeText={text => {
                            setName(text);
                        }} 
                        style={styles.input}
                        value={name}/>
                    </View>
                    <View 
                    style={{marginBottom: 50}}>
                        <Text 
                        style={styles.label}>
                            Email
                        </Text>
                        <TextInput
                        ref={emailInput}
                        returnKeyType="next"
                        autoCapitalize='none'
                        keyboardType="email-address"
                        onChangeText={text => {
                            setEmail(text);
                        }} style={styles.input}
                        value={email}/>
                    </View>
                    <View 
                    style={{marginBottom: 50}}>
                        <Text 
                        style={styles.label}>
                            Telefone
                        </Text>

                        <TextInputMask
                        placeholder='(99) 99999-9999'
                        style={styles.input}
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={phone}
                        onChangeText={text => {
                            setPhone(text);
                        }}
                        />
                    </View>
                    <View 
                    style={{marginBottom: 50, paddingBottom: 5}}>
                        <Text 
                        style={styles.label}>
                            Obejtivo
                        </Text>
                        <DropdownComponent/>
                    </View>
                    <View>
                        <TouchableOpacity
                        onPress={handleEditado} 
                        style={styles.buttonAluno}>
                            <Text 
                            style={styles.textButton}>SALVAR</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        </ScrollView>
    );
}
