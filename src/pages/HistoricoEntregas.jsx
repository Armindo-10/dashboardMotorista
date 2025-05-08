import GraficoHistorico from "../Components/GraficoHistorico"
import styles from "./historicoEntregas.module.css"

export default function HistoricoEntregas() {

	return (
		<div className={styles.historico}>
			<h2>Historico de entregas</h2>
			<GraficoHistorico />
		</div>
	)
}