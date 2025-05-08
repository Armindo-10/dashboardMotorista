import styles from "./ResumoCards.module.css";


export default function ResumoCards() {
	const Cards = [
		{ titulo: "Entregas concluidas", valor: 48, cor: "#2ecc71 " },
		{ titulo: "Entregas pendentes", valor: 5, cor: " #e74c3c" },
		{ titulo: "Entregas este mês", valor: 12, cor: "#3498db " },
	];

	return (

		<div className={styles.ResumoCards}>

			{Cards.map((card, index) => (
				<div className={styles.Card} key={index} >
					<h3>{card.titulo}</h3>
					<p>{card.valor}</p>
				</div>
			))}

		</div>
	)
}
