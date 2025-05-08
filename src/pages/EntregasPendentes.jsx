import GraficosEntregas from "../Components/GraficosEntregas"
import ResumoMotorista from "../Components/ResumoMotorista"
import styles from "./EntregasPendentes.module.css"

export default function EntregasPendentes() {

	return (
		<div className={styles.Entregas}>
			<h1>Entregas pendentes</h1>
			<ResumoMotorista />
			<GraficosEntregas />
		</div>
	)
}