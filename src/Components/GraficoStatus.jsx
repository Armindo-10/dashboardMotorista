import styles from "./GraficoStatus.module.css";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [

	{ name: "concluidas", value: 20 },
	{ name: "pendentes", value: 5 }
];

export default function GraficoStatus() {
	const title = "Status de Entregas";
	const COLORS = ["#2ecc71", "#e74c3c"]

	return (
		<div className={styles.GraficoStatus}>
			<h2>{title}</h2>
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

		</div>
	)
}