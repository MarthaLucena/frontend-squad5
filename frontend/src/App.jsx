import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Banner from "./assets/components/Banner/Banner";
import Navbar from "./assets/components/Navbar/Navbar";
import Home from "./pages/Home/Home";

/* ===== Imports estão comentados para não dar erro. Ao inserir os componentes nas pages, tira o comentário do import!

import Comunidades from './pages/Comunidades.jsx'
import ImpactoSocial from './pages/ImpactoSocial.jsx'
import Noticias from './pages/Noticias.jsx'
import Projetos from './pages/Projetos.jsx'
import Sobre from './pages/Sobre.jsx' 
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

          {/* ===== As rotas relacionadas as imports de cima também estão comentadas para evitar erro.
          Conforme as Pages forem configuradas, tirar o comentário

        <Route path="/comunidades">
          <Comunidades />
        </Route>

        <Route path="/contato">
          <Contato />
        </Route>

        <Route path="/impactosocial">
          <ImpactoSocial />
        </Route>
        
        <Route path="/noticias">
          <Noticias />
        </Route>

        <Route path="/projetos">
          <Projetos />
        </Route>

         <Route path="/sobre">
          <Sobre />
        </Route>
        
        <Route path="/login">
          <Login />
        </Route>
        */}

          {/* <Navbar />
          <Banner /> */}
          
        </Switch>
      </Router>
    </div>
  );
}

export default app;
