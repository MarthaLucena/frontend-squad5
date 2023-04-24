import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import React, { useContext, useState, useEffect } from 'react';
import PerfilAdmin from './pages/Admin';
import PerfilUser from './pages/User';


import { Context } from '../../../../../Context/AuthContext';

function Painel() {

    // estados do context
    const { logado, isLogado, email, setEmail, password, setSenha, infoUsuario, setInfoUsuario, infoAdmin, setInfoAdmin } = useContext(Context);
    const [usuario, setUsuario] = useState(true);
    const [errorMsg, setErroMsg] = useState('');

    useEffect(() => {
        // verificar se o usuário logado tem perfil de administrador
        if (logado && infoAdmin) {
            setUsuario(false);
        }
    }, [logado, infoAdmin])

    //Usuario
    const handleSubmitUsuario = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/Usuario/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => {
                if (response.ok) {
                    console.log('Login bem sucedido');
                    isLogado(true);
                    return response.json();
                } else {
                    setErroMsg('email ou senha incorretos. Tente novamente ou clique em "Recuperar Senha"');
                    setTimeout(() => {
                        setErroMsg('');
                    }, 5000);
                }
            })
            .then(data => {
                if (Object.keys(data).length > 0) {
                    setInfoUsuario(data);
                }
            })

            .catch(error => {
                console.log('Erro na requisição', error);
            });
    };

    //Administrador
    const handleSubmitAdmin = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/Admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => {
                if (response.ok) {
                    console.log('Login bem sucedido');
                    isLogado(true);
                    return response.json();
                } else {
                    setErroMsg('email ou senha incorretos. Tente novamente ou clique em "Recuperar Senha?"');
                    setTimeout(() => {
                        setErroMsg('');
                    }, 5000);
                }
            })
            .then(data => {
                if (Object.keys(data).length > 0) {
                    setInfoAdmin(data);
                }
            })
            .catch(error => {
                console.log('Erro na requisição', error);
            });
    };

    function handleDeslogar() {
        isLogado(false);
        setEmail('');
        setSenha('');
        setInfoUsuario({});
        setInfoAdmin({});
    }

    function handleAdmin() {
        setUsuario(false);
    }
    function handleUsuario() {
        setUsuario(true);
    }

    return (
        <>
            <div className={styles.container}>
                {usuario && infoUsuario ?
                    <>
                        {logado ?
                              <PerfilUser />

                            :

                            <div className={styles.containerLogin}>
                                <h1>Login</h1>
                                <div className={styles.btnCE}>
                                   <button variant="outline-secondary" onClick={handleAdmin} className={styles.btnUserAdmin}>Admin</button>
                                </div>
                                <form className={styles.form} onSubmit={handleSubmitUsuario}>
                                    <label>Email</label>
                                    <input type="email" placeholder="Digite seu email" value={email} onChange={(event) => setEmail(event.target.value)} />
                                    <div className={styles.label}>
                                        <label>Senha</label>
                                        <Link to="/" className={styles.link}><label style={{cursor: "pointer", color: "black"}}>Recuperar Senha</label></Link>
                                    </div>
                                    <input type="password" placeholder="Digite sua senha" value={password} onChange={(event) => setSenha(event.target.value)} />
                                    {errorMsg && <h5 className={styles.errorMsg}>{errorMsg}</h5>}
                                    <div className={styles.finalForm}>
                                    <button role='button'>Logar</button>
                                    <Link to="/Cadastro" className={styles.link}><button>Cadastre-se</button></Link>
                                    </div>
                                </form>
                            </div>
                        }
                    </>
                    :
                    <>
                        {logado && infoUsuario ?
                            <PerfilAdmin />
                            :

                            <div className={styles.containerLogin}>
                                <h1>Admin</h1>
                                <div className={styles.btnCE}>
                                    <button  onClick={handleUsuario} className={styles.btnUserAdmin}>Cliente</button>
                                </div>
                                <form className={styles.form} onSubmit={handleSubmitAdmin}>
                                    <label>Email</label>
                                    <input type="email" placeholder="Digite seu email" value={email} onChange={(event) => setEmail(event.target.value)} />
                                    <div className={styles.label}>
                                        <label>Senha</label>
                                        <Link to="/" className={styles.link}><label style={{cursor: "pointer", color: "black"}}>Recuperar Senha</label></Link>
                                    </div>
                                    <input type="password" placeholder="Digite sua senha" value={password} onChange={(event) => setSenha(event.target.value)} />
                                    {errorMsg && <h5 className={styles.errorMsg}>{errorMsg}</h5>}
                                    <div className={styles.btnAdmin}>
                                    <button role='button'>Logar</button>
                                    </div>
                                </form>
                            </div>
                        }
                    </>
                }

            </div>
        </>
    )
}

export default Painel;