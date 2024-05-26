import React, { createContext, useState } from "react";

export const DadosContext = createContext({});

function DadosProvider({ children }) {

    return (
        <DadosContext.Provider>
            {children}
        </DadosContext.Provider>
    );
}