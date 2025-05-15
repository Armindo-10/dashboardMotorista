import styles from "./NotFound.module.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";


export default function NotFound() {

	const data = [

		{ name: "Armindo", skills: "developer Fullstack" },
		{ name: "Jeremias", skills: "pentester web" },
		{ name: "Rodolfo", skills: "enginner Software" },

	];

	return (

		<section className={styles.NotFound}>
			<h3>404</h3>
			<h2>Page Not Found</h2>

			<div className={styles.GraficoExemple}>

				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="name" fill="ye" />
						<Bar dataKey="skills" fill="white" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</section>
	)
}