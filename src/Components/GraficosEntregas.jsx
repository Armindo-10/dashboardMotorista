import styles from "./GraficosEntregas.module.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [

	{ mes: "Jan", Entregas: 12 },
	{ mes: "fev", Entregas: 18 },
	{ mes: "Marc", Entregas:10 },
	{ mes: "Apr", Entregas: 24 },
	{ mes: "May", Entregas: 16 },
	{ mes: "Jun", Entregas: 30 }

];

const Title = "Entregas por mês";

export default function GraficosEntregas() {

	return (
		<div className={styles.GraficosEntregas}>
			<h2>{Title}</h2>
			<ResponsiveContainer>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="mes" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="Entregas" fill="#88884d" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}