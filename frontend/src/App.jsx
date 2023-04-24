import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Banner from "./assets/components/Banner/Banner";
import Navbar from "./assets/components/Navbar/Navbar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Noticias from "./pages/Noticias";
import Doacao from "./assets/components/Doacao/Doacao";

/* ===== Imports estão comentados para não dar erro. Ao inserir os componentes nas pages, tira o comentário do import!

import Comunidades from './pages/Comunidades.jsx'
import ImpactoSocial from './pages/ImpactoSocial.jsx'
import Noticias from './pages/Noticias.jsx'
import Projetos from './pages/Projetos.jsx'
 
import Login from './pages/Login.jsx'
*/
function app() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/sobre">
            <Sobre />
          </Route>

          <Route path="/contato">
            <Contato />
          </Route>

          <Route path="/noticias">
            <Noticias />
          </Route>

     <Route path="/doe">
            <Doacao />
          </Route>
   
          {/* ===== As rotas relacionadas as imports de cima também estão comentadas para evitar erro.
          Conforme as Pages forem configuradas, tirar o comentário

 
        <Route path="/login">
          <Login />
        </Route>
        */}
        </Switch>
      </Router>
    </div>
  );
}

export default app;
