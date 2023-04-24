import styles from './Cadastro.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';




function Cadastrar() {
    const [usuario, setUsuario] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword]  = useState('');

    const [nome, setNome] = useState('');

    // Função para enviar o formulario

    async function handleSubmitUsuario(event) {
        event.preventDefault();
        setTimeout(() => {
            window.location.reload();
        }, 500);
        const formData = { username, email, password};

        try {
            const response = await fetch('http://localhost:3000/Usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            alert("Cliente cadastrado com sucesso!")
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className={styles.container}>
                    <div className={styles.containerCadastro}>
                        <h1>Cadastre-se</h1>
                        <div className={styles.btnCE}>
                        <Link to="/Login" className={styles.link}><button className={styles.btnUserAdmin}>Login</button></Link>
                        </div>
                        <div className={styles.btnCE}>
                        </div>
                        <form className={styles.form} onSubmit={handleSubmitUsuario}>
                            <label>Digite seu nome</label>
                            <input type="text" placeholder="Digite seu nome" required value={username} onChange={(event) => setUsername(event.target.value)} />
                            <label>Digite seu email</label>
                            <input type="email" placeholder="Digite seu email" required value={email.toLowerCase()} onChange={(event) => setEmail(event.target.value)} />
                            <label>Digite sua senha</label>
                            <input type="password" placeholder="Digite sua senha" required value={password} onChange={(event) => setPassword(event.target.value)} />
                            <div className={styles.btnAdmin}>
                               <button role='button'>Cadastrar</button>
                            </div>
                        </form>
                    </div>
            </div>
        </>
    )
}

export default Cadastrar;