import { Link } from "react-router-dom";
import styled from "styled-components";
import { CiLogout } from "react-icons/ci";
import "../App.css"


const SlidbarContainer = styled.header`
	width: 220px;
	height: 100vh;
	background-color: #000;
	color: white;
	padding: 20px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 3;

	@media (max-width: 768px) {
	    width: 120px;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		display: none;
	}
`;

const LinkLogo = styled(Link)`
    font-size: 1.7em;
	color: white;
	font-weight: 800;

	&:hover{
	color: limegreen;
	}
`;

const Titulo = styled.h2`
   	margin-bottom: 20px;
	font-size: 20px;
	font-weight: 800;
`;

const Lista = styled.li`
  margin: 45px 0;
`;

const Links = styled(Link)`
   color: blue;
	text-decoration: none;
	list-style: none;
	text-transform: uppercase;
	font-weight: 800;
	display: block;

	&:hover{
	text-decoration: underline;
	opacity: 0.7;
	}
`;


function Slidbar() {


	return (
		<SlidbarContainer>
			<CiLogout size={25} className="icon-button"  />
			<LinkLogo to="/Dashboard" >AGroway Motorista</LinkLogo>
			<nav>
				<ul>

					<Lista><Links to="/EntregasPendentes">Entregas Pendentes</Links></Lista>
					<Lista><Links to="/Status">Status</Links></Lista>
					<Lista><Links to="/perfil">Perfil</Links></Lista>
					<Lista><Links to="/Historico">Histórico de Entregas</Links></Lista>

				</ul>

			</nav>

		</SlidbarContainer>
	)
}

export default Slidbar;