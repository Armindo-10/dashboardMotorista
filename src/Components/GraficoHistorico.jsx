import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const GraficoHistoricoContainer = styled.section`
     	background-color: #ffffff;
	     padding: 20px;
`

const data = [

	{ mes: "Jan", entregas: 8 },
	{ mes: "Fev", entregas: 12 },
	{ mes: "Marc", entregas: 15 },
	{ mes: "Abr", entregas: 10 },
	{ mes: "Mai", entregas: 18 },
	{ mes: "Jun", entregas: 20 }

];

export default function GraficoHistorico() {
	const title = "Histórico de entregas(Últimos Meses)"
	return (
		<GraficoHistoricoContainer>
			<h2>{title}</h2>
			<ResponsiveContainer width="100%" height={300}>

				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="mes" />
					<YAxis />
					<Tooltip />
					<Line type="monotone" dataKey="entregas" stroke="#82ca9d" strokeWidth={3} />

				</LineChart>

			</ResponsiveContainer>


		</GraficoHistoricoContainer>
	)
}