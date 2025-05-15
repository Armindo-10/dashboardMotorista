import StateCard from "../Components/StateCard";
import styles from "./Dashboard.module.css";
import ResumoCards from "../Components/ResumoCards";

export default function Dashboard() {

	return (

		<div className={styles.Dashboard}>
			<h2>Visão geral</h2>
			<ResumoCards />


			<div className={styles.CardContainer}>
				<StateCard title="entregas pendentes" value="5" percentage="6" ispositive={true} />
				<StateCard title="entregas concluidas" value="12" percentage="3" ispositive={true} />
				<StateCard title="canceladas" value="2" percentage="4" ispositive={false} />
				<StateCard title="total de km rodados" value="327km" percentage="1" ispositive={true} />
			</div>

		</div>
	)
}