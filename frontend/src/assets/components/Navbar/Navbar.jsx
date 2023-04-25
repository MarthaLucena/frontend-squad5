import { useRef, useState, useContext } from "react";
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import "../Navbar/Navbar.css"
import { Context } from "../../../../../Context/AuthContext";

function Navbar() {

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const {logado, isLogado, infoUsuario, infoAdmin} = useContext(Context);

    function handleDeslogar() {
		isLogado(false);
		setEmail('');
		setSenha('');
		setInfoUsuario({});
		setInfoAdmin({});
		history.push('/login'); // Redirecionar para a página de login
	  }

	return (

		<header>
			<Link to="/" className="linkSemSublinhado"><h3 className="fonteLogo">ALÔ COMUNIDADES</h3></Link>
			<nav ref={navRef} className="navPrincipal">
				<ul className="navUl">
				<li>
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/sobre">QUEM SOMOS</Link>
					</li>
					<li>
						<Link to="/noticias">NOTÍCIAS</Link>
					</li>
					<li>
						<Link to="/contato">CONTATO</Link>
					</li>
					<li>
						<Link to ="/doe"><button className="doarBtn">DOAR AGORA</button></Link>
					</li>
				      {logado ? <Link to="/login"><li className="logado">{Object.keys(infoUsuario).length === 0 ? infoAdmin.username : infoUsuario.username} </li></Link> : <Link to="/login"><li className="logado">Login</li></Link> }
					
				      {logado ? <Link to="/login"><li className="logado" onClick={handleDeslogar}>Sair </li></Link> : <Link to="/Cadastro"><li className="logado">Cadastre-se </li></Link> }
					
				</ul>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
