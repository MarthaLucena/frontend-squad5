import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './User.module.css'
import Button from 'react-bootstrap/Button';
import { Context } from '../../../../../../Context/AuthContext';


function PerfilUser() {
    const {
      email,
      setEmail,
      password,
      setSenha,
      infoUsuario,
      setInfoUsuario,
      infoAdmin,
      setInfoAdmin,
      isLogado,
    } = useContext(Context);
    const imageUrl = 'https://img.icons8.com/color/512/user.png';
    const history = useHistory(); // Obter objeto history
  
    function handleDeslogar() {
      isLogado(false);
      setEmail('');
      setSenha('');
      setInfoUsuario({});
      setInfoAdmin({});
      history.push('/login'); // Redirecionar para a página de login
    }
  
    return (
      <>
        <div className={styles.perfil}>
          <h2>Informações Pessoais</h2>
          <div className={styles.containerInfo}>
            <div>
              <img src={imageUrl} alt="Imagem do perfil" />
            </div>
            <div className={styles.containerInfo1}>
              <p>
                <b>Nome:</b>{' '}
                {Object.keys(infoUsuario).length === 0
                  ? infoAdmin.username
                  : infoUsuario.username}
              </p>
              <p>
                <b>Email:</b>{' '}
                {Object.keys(infoUsuario).length === 0
                  ? infoAdmin.email
                  : infoUsuario.email}
              </p>
            </div>
            <Button
              className={styles.logoutButton}
              variant="danger"
              onClick={handleDeslogar}
            >
              Deslogar
            </Button>
          </div>
        </div>
      </>
    );
  }
  
  export default PerfilUser;