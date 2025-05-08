import GraficoStatus from "../Components/GraficoStatus";
import styles from "./Status.module.css"

function Status() {

	return (
		<div className={styles.status}>
			<h2>Status</h2>
			<GraficoStatus />
		</div>
	)
}

export default Status;