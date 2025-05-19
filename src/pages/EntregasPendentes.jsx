import GraficosEntregas from "../Components/GraficosEntregas"
import ResumoMotorista from "../Components/ResumoMotorista"
import styled from "styled-components"


const Title = styled.h1`
    color: white;
	text-transform: uppercase;
	letter-spacing: 1px;
`;
const Entregas = styled.div`
  padding: 20px;
  color: #fff;
  background-color: #1e1e1e;
`;

export default function EntregasPendentes() {

	return (
		<Entregas>
			<Title>Entregas pendentes</Title>
			<ResumoMotorista />
			<GraficosEntregas />
		</Entregas>
	)
}