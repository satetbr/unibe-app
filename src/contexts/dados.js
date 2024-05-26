import React, { createContext, useState } from "react";
import firebase from "../config/firebaseconfig";

const database = firebase.firestore();

export const DadosContext = createContext({});

function DadosProvider({ children }) {

    const [uid, setUid] = useState("");
    const [dados, setDados] = useState("");
    const [drop, setDrop] = useState(dados.goal);
    const [reload, setReload] = useState(true);
    
    function editado(name, email, phone) {
        database.collection("alunos").doc(uid).update({
            nome: name,
            email: email,
            tel: phone,
            goal: drop,
        })
    }

    return (
        <DadosContext.Provider value={{setUid, uid, dados, setDados, drop, setDrop, editado, reload, setReload}}>
            {children}
        </DadosContext.Provider>
    );
}

export default DadosProvider;