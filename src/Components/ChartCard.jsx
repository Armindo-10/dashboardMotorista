import styled from "styled-components";
import { Link } from "react-router-dom";
import FirsDrive from "../imagens/PrimeiroMotorista.jpg";
import SecondDrive from "../imagens/SegundoMotorista.jpg";
import tirdDrive from "../imagens/motorista-atendimento.webp";


const ChartCardContainer = styled.section`
    width: 100%;
`;

const Titulo = styled.h2`
	color: white;
	font-size: 2rem;
	text-transform: uppercase;
	margin-top: 10px;
`;

const Cards = styled.div`
    display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	margin-top: 5%;
	gap: 1em;
`;

const Info = styled.div`
   display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
	justify-content: space-between;
	background-color:  rgb(2, 2, 123);
	padding: 25px;
	border-radius: 8px;
	box-shadow: 0 2px 7px solid black;
	width: 32%;
	height: 100%;

	&:hover{
		border: 1px solid white;
		transition: 0.5s ease-in-out;
	}
`;

const BotaoLink = styled(Link)`
	background-color: black;
	color: rgb(0, 0, 255);
	padding: 10px 20px;
	border-radius: 7px;
	margin-top: 7px;
	text-align: center;
	font-size: 1.25em;
	letter-spacing: 1px;
	text-transform: capitalize;



	&:hover {
		color: yellow;
		transition: 0.4s ease-in-out;
		opacity: 0.6;

	}
`;

const Pragrafo = styled.p`
    color: white;
	font-weight: 700;
	margin-left: 10px;
`;

const Strong = styled.strong`
     font-weight: 800;
	color: yellow;
`

const Foto = styled.img`
    width: 160px;
	height: 160px;
	border-radius: 50%;
	object-fit: cover;
`


export default function ChartCard() {


	return (
		<ChartCardContainer>
			<Titulo>Perfil do Motorista</Titulo>

			<Cards>


				<Info>
					<Foto src={FirsDrive} alt="fotoPrimeiroDrive" />
					<Pragrafo><Strong>Nome:</Strong>Alfredo Domingos</Pragrafo>
					<Pragrafo><Strong>Email:</Strong>alfredodomingos@gmail.com</Pragrafo>
					<Pragrafo><Strong>Telefone:</Strong>+244 982 345 654</Pragrafo>
					<Pragrafo><Strong>Matrícula:</Strong>Ld 45 - 24</Pragrafo>
					<Pragrafo><Strong>Data de Entrada:</Strong>19/02/2022</Pragrafo>
					<BotaoLink to="" >Editar perfil</BotaoLink>
				</Info>

				<Info>
					<Foto src={SecondDrive} alt="fotoSegundoDriver" />
					<Pragrafo><Strong>Nome:</Strong>Alfredo Domingos</Pragrafo>
					<Pragrafo><Strong>Email:</Strong>alfredodomingos@gmail.com</Pragrafo>
					<Pragrafo><Strong>Telefone:</Strong>+244 982 345 654</Pragrafo>
					<Pragrafo><Strong>Matrícula:</Strong>Ld 45 - 24</Pragrafo>
					<Pragrafo><Strong>Data de Entrada:</Strong>19/02/2022</Pragrafo>
					<BotaoLink to="" >Editar perfil</BotaoLink>
				</Info>

				<Info>
					<Foto src={tirdDrive} alt="fotoTerceiroDrive" />
					<Pragrafo><Strong>Nome:</Strong>Alfredo Domingos</Pragrafo>
					<Pragrafo><Strong>Email:</Strong>alfredodomingos@gmail.com</Pragrafo>
					<Pragrafo><Strong>Telefone:</Strong>+244 982 345 654</Pragrafo>
					<Pragrafo><Strong>Matrícula:</Strong>Ld 45 - 24</Pragrafo>
					<Pragrafo><Strong>Data de Entrada:</Strong>19/02/2022</Pragrafo>
					<BotaoLink to="" >Editar perfil</BotaoLink>
				</Info>

			</Cards>

		</ChartCardContainer>
	)
}
