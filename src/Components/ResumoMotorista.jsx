import styles from "./ResumoMotorista.module.css";

export default function ResumoMotorista() {

	return (

		<div className={styles.ResumoMotorista}>
			<div className={styles.CrdResumo}>
				<h3>Entregas Pendentes</h3>
				<p>5</p>
			</div>

			<div className={styles.CrdResumo}>
				<h3>Entregas Concluidas</h3>
				<p>24</p>
			</div>

			<div className={styles.CrdResumo}>
				<h3>Km percorridos(Mês)</h3>
				<p>1.250km</p>
			</div>

		</div>
	)
}