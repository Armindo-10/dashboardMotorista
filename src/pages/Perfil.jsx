import styled from "styled-components";
import FirsDrive from "../imagens/PrimeiroMotorista.jpg";
import EditarPerfilModal from "../Components/EditarPerfilModal";
import { useState } from "react";


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
	
	
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
	gap: 9px;
	align-items: center;
	justify-content: space-between;
	background-color:  rgb(2, 2, 123);
	padding: 25px;
	border-radius: 8px;
	box-shadow: 0 2px 7px solid black;
	width: 400px;
	height: 100%;

	&:hover{
		border: 1px solid white;
		transition: 0.5s ease-in-out;
	}
`;

const Botao = styled.button`
	background-color: black;
	color: white;
	padding: 10px 20px;
	border-radius: 7px;
	margin-top: 7px;
	text-align: center;
	font-size: 1.25em;
	letter-spacing: 1px;
	text-transform: capitalize;
     cursor: pointer;


	&:hover {
		color: yellow;
		transition: 0.4s ease-in-out;
		opacity: 0.6;

	}
`;

const Botoes = styled.div`
  display: inline-flex;
  
`

const Pragrafo = styled.p`
    color: white;
	font-weight: 700;
	
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

const Inside = styled.div`
    display: flex;
	align-items: center;
    justify-content: space-around;
    margin-top: 5%;
`


export default function Perfil() {
	const [dados, setDados] = useState({
		nome: "joão silva",
		email: "joao@gmail.com",
		telefone: "+244 945-474-345",
		veiculo: "ABC1D23",
		entregasConcluidas: "87"
	});


	const [modalAberto, setModalAberto] = useState(false);

	function salvarEdicao(dadosAtualizados) {
		setDados(dadosAtualizados)
	}


	return (
		<ChartCardContainer>
			<Titulo>Perfil do Motorista</Titulo>

			<Inside>

				<Cards>


					<Info>
						<Foto src={FirsDrive} alt="fotoPrimeiroDrive" />
						<Pragrafo><Strong>Nome:</Strong>{dados.nome}</Pragrafo>
						<Pragrafo><Strong>Email:</Strong>{dados.email}</Pragrafo>
						<Pragrafo><Strong>Telefone:</Strong>{dados.telefone}</Pragrafo>
						<Pragrafo><Strong>Matrícula:</Strong>{dados.veiculo}</Pragrafo>
						<Pragrafo><Strong>entregasConcluidas:</Strong>{dados.entregasConcluidas}</Pragrafo>

						<Botoes>
							<Botao onClick={() => setModalAberto(true)}>editar Perfil</Botao>
						</Botoes>

					</Info>

				</Cards>

				{
					modalAberto && (
						<EditarPerfilModal
							dados={dados}
							onclose={() => setModalAberto(false)}
							onsave={salvarEdicao}
						/>
					)
				}
			</Inside>

		</ChartCardContainer>
	)
}
