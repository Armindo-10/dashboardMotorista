import styles from "./ResumoMotorista.module.css";
import { MdPendingActions, MdDoneAll } from "react-icons/md";
import { FaRoad } from "react-icons/fa";


export default function ResumoMotorista() {

	return (

		<div className={styles.ResumoMotorista}>
			<div className={styles.CrdResumo}>
				<h3>Entregas Pendentes</h3>
				<MdPendingActions size={45} color="black" className={styles.icones} />
				<p>5</p>

			</div>

			<div className={styles.CrdResumo}>
				<h3>Entregas Concluidas</h3>
				<MdDoneAll size={45} color="orange" className={styles.icones} />
				<p>24</p>
			</div>

			<div className={styles.CrdResumo}>
				<h3>Km percorridos(Mês)</h3>
				<FaRoad size={45} color="blue" className={styles.icones} />
				<p>1.250km</p>
			</div>

		</div>
	)
}