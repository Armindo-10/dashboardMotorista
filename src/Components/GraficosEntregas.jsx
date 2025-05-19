import styled from "styled-components"
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const GraficosEntregasContainer = styled.section`
    width: 100%;
	height: 300px;
	padding: 20px;
	margin-top: 40px;
`;

const Titulo = styled.h2`
    color: white;
	margin-bottom: 9px;
	text-transform: uppercase;
	font-weight: 700;
`

const data = [

	{ mes: "Jan", Entregas: 12 },
	{ mes: "fev", Entregas: 18 },
	{ mes: "Marc", Entregas: 10 },
	{ mes: "Apr", Entregas: 24 },
	{ mes: "May", Entregas: 16 },
	{ mes: "Jun", Entregas: 30 }

];

const Title = "Entregas por mês";

export default function GraficosEntregas() {

	return (
		<GraficosEntregasContainer>
			<Titulo>{Title}</Titulo>
			<ResponsiveContainer width="100%" height={300} >
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="mes" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="Entregas" fill="#88884d" />
				</BarChart>
			</ResponsiveContainer>
		</GraficosEntregasContainer>
	)
}