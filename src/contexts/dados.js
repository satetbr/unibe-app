import React, { createContext, useState } from "react";
import firebase from "../config/firebaseconfig.js";

const database = firebase.firestore();

export const DadosContext = createContext({});

function DadosProvider({ children }) {

    const [imgPerfil, setImgPerfil] = useState(null);
    const [uid, setUid] = useState("");
    const [dados, setDados] = useState("");
    const [drop, setDrop] = useState(dados.goal);
    const [reload, setReload] = useState(true);
    const [goal, setGoal] = useState(dados.goal);
    
    function editado(name, email, phone) {
        database.collection("alunos").doc(uid).update({
            nome: name,
            email: email,
            tel: phone,
            goal: drop,
        })
    }

    function editfoto(imgPerfil) {
        dados.foto = imgPerfil;
    }


    return (
        <DadosContext.Provider value={{setUid, uid, dados, setDados, drop, setDrop, editado, reload, setReload, imgPerfil, setImgPerfil, editfoto}}>
            {children}
        </DadosContext.Provider>
    );
}

export default DadosProvider;