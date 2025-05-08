import styles from "./StateCard.module.css"

function StateCard({ title, value, percentage, ispositive }) {
	return (

		<div className={styles.StateCard}>
			<div className={styles.statValue}>{value}</div>

			<div className={styles.stateInfo}>
				<span className={ispositive ? "positive" : "negative"}>

					{ispositive ? "+" : "-"} {percentage}%
				</span>
				<p>{title}</p>
			</div>

		</div>
	)
}

export default StateCard;