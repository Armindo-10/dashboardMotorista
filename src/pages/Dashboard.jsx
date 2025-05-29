import StateCard from "../Components/StateCard";
import { styled } from "styled-components"
import ResumoCards from "../Components/ResumoCards";
import Driver from "../imagens/carro-tecnologico.jpg";

const Titulo = styled.h2`
	color: white;
	margin-top: 10px;
	
	`

const CardContainer = styled.div`
	display: flex;
	gap: 20px;
	margin-top: 20px;
	flex-wrap: wrap;
	justify-content: space-around;
	`;

const DashboardContainer = styled.div`
	font-size: 1.4rem;
	text-transform: capitalize;
	letter-spacing: 1px;
	font-weight: 800;
	padding: 20px;
	`;
const Self = styled.img`
	width: 100%;
	height: 350px;
	margin-top: 60px;
	object-fit: cover;
	border-radius: 10px;
	`;

export default function Dashboard() {


	return (

		<DashboardContainer>
			<Titulo>Visão geral</Titulo>
			<ResumoCards />


			<CardContainer>
				<StateCard title="entregas pendentes" value="5" percentage="6" ispositive={true} />
				<StateCard title="entregas concluidas" value="12" percentage="3" ispositive={true} />
				<StateCard title="canceladas" value="2" percentage="4" ispositive={false} />
				<StateCard title="total de km rodados" value="327km" percentage="1" ispositive={true} />
			</CardContainer>

			<Self src={Driver} alt="imagemDriver" />

		</DashboardContainer>
	)
}