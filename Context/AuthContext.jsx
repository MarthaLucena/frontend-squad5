import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();

function AuthProvider({ children }) {

    // ESTADOS
    const [logado, isLogado] = useState(() => {
        const storedIsLogged = localStorage.getItem('logado');
        return storedIsLogged ? JSON.parse(storedIsLogged) : false;
    });
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');

    const [infoUsuario, setInfoUsuario] = useState(() => {
        const storedInfoUsuario = localStorage.getItem('infoUsuario');
        return storedInfoUsuario ? JSON.parse(storedInfoUsuario) : {};
    })

    const [infoAdmin, setInfoAdmin] = useState(() => {
        const storedInfoAdmin = localStorage.getItem('infoAdmin');
        return storedInfoAdmin ? JSON.parse(storedInfoAdmin) : {};
    })

    // GUARDANDO NO LOCAL STORAGE
    useEffect(() => {
        // recupera o valor do local storage quando a página é carregada
        const storedIsLogged = localStorage.getItem('logado');
        if (storedIsLogged) {
            isLogado(JSON.parse(storedIsLogged));
        }

        const storedInfoUsuario = localStorage.getItem('infoUsuario');
        if (storedInfoUsuario) {
            setInfoUsuario(JSON.parse(storedInfoUsuario));
        }

        const storedInfoAdmin = localStorage.getItem('infoAdmin');
        if (storedInfoAdmin) {
            setInfoAdmin(JSON.parse(storedInfoAdmin));
        }
    }, []);
    
    // ATUALIZANDO O LOCAL STORAGE

    useEffect(() => {
        localStorage.setItem('logado', JSON.stringify(logado));
    }, [logado]);
    useEffect(() => {
        localStorage.setItem('infoUsuario', JSON.stringify(infoUsuario));
    }, [infoUsuario]);
    useEffect(() => {
        localStorage.setItem('infoAdmin', JSON.stringify(infoAdmin));
    }, [infoAdmin]);

    return (
        // PASSANDO OS ESTADOS PARA TODOS OS COMPONENTES
        <Context.Provider value={{ logado, isLogado, email, setEmail, password, setSenha, infoUsuario, setInfoUsuario, infoAdmin, setInfoAdmin }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider };