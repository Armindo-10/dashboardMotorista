import styled from "styled-components";


const ResumoCardsContainer = styled.section`
   	display: flex;
	gap: 20px;
	margin: 20px;
	align-items: center;
	justify-content: space-around;
	text-align: center;
`;

const Card = styled.div`
  	flex: 1;
	justify-content: space-around;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
	text-align: center;
	margin-top: 40px;
	border: 1px dashed yellow;
	color: #fff;
`;

const Titulo = styled.h3`
   	margin-bottom: 10px;
	font-size: 20px;
	font-weight: bold;
	text-transform: uppercase;
`

export default function ResumoCards() {
	const Cards = [
		{ titulo: "Entregas concluidas", valor: 48, cor: "#2ecc71 " },
		{ titulo: "Entregas pendentes", valor: 5, cor: " #e74c3c" },
		{ titulo: "Entregas este mês", valor: 12, cor: "#3498db " },
	];

	return (

		<ResumoCardsContainer>

			{Cards.map((card, index) => (
				<Card key={index} >
					<Titulo>{card.titulo}</Titulo>
					<p>{card.valor}</p>
				</Card>
			))}

		</ResumoCardsContainer>
	)
}
