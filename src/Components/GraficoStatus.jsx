import styled from "styled-components"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";


const GraficoStatusContainer = styled.section`
  	background-color: #ffffff;
	padding: 20px;
	border-radius: 12px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	margin-top: 40px;
	width: 100%;
	height: 300px;
`;

const Titulo = styled.h2`
	font-size: 20px;
	text-align: center;
	margin-bottom: 20px;
	text-align: center;
	color:#2C3E50 ;
`

const data = [

	{ name: "concluidas", value: 20 },
	{ name: "pendentes", value: 5 }
];

export default function GraficoStatus() {
	const title = "Status de Entregas";
	const COLORS = ["#2ecc71", "#e74c3c"]

	return (
		<GraficoStatusContainer>
			
			<Titulo>{title}</Titulo>
			<ResponsiveContainer>
				<PieChart>

					<Pie
						data={data}
						cx="50%"
						cy="50%"
						outerRadius={100}
						dataKey="value"
						label
					/>

					{data.map((entry, index) => (
						<Cell key={`Cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}


					<Tooltip />
					<Legend verticalAlign="bottom" />
				</PieChart>
			</ResponsiveContainer>

		</GraficoStatusContainer>
	)
}