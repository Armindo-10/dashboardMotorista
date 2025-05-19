import GraficoHistorico from "../Components/GraficoHistorico";
import styled from "styled-components";

const Historico = styled.div`
	 padding: 20px;
	`

const Titulo = styled.h2`
	color: white;
	font-size: 2rem;
	text-transform: uppercase;
	margin-bottom: 3%;
	margin-top: 20px;
	 
	`

export default function HistoricoEntregas() {

	return (
		<Historico>
			<Titulo>Histórico de entregas</Titulo>
			<GraficoHistorico />
		</Historico>
	)
}