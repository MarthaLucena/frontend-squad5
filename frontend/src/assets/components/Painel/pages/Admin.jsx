import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Admin.module.css";
import { Context } from "../../../../../../Context/AuthContext";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./AdminPainel/Home";
import Usuario from "./AdminPainel/Usuario";
import Administrador from "./AdminPainel/Administrador";
import Sobre from "./AdminPainel/Sobre";

function PerfilAdmin() {
  return (
    <>
      <div className={styles.painel}>
        <Router>
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <Link to="/Admin" className={styles.menuLink}>
                  Home
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link to="/Administrador" className={styles.menuLink}>
                  Administrador
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link to="/Usuario" className={styles.menuLink}>
                  Usuario
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link to="/Sobre" className={styles.menuLink}>
                  Sobre
                </Link>
              </li>
            </ul>

          <Switch>
          <Route path="/Login">
              <Home />
            </Route>
            <Route path="/Admin">
              <Home />
            </Route>

            <Route path="/Administrador">
              <Administrador />
            </Route>

            <Route path="/Usuario">
              <Usuario />
            </Route>

            <Route path="/Sobre">
              <Sobre />
            </Route>

          </Switch>
        </Router>
      </div>
    </>
  );
}

export default PerfilAdmin;
