import styled from "styled-components";


const StateCardContainer = styled.section`
     display: flex;
     flex: 1;
	 flex-wrap: wrap;
	 flex-direction: column;
	 align-items: center;
	 justify-content: space-between;
	 background-color: white;
	 border-radius: 8px;
	 padding: 20px;
	 box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
	 width: 180px;
	 text-align: center;
     margin-top: 40px;
`;

const StatValue = styled.div`
    font-size: 24px;
	font-weight: bold;
	color: #2f39e2;
`;

const StateInfo = styled.div`
    display: flex;
	flex-direction: column;
	text-align: center;
  	margin: 0;
	font-size: 14px;
	color: #666;

`;

const Percentagem = styled.span`
   color: ${props => (props.ispositive ? "limegreen" : "red")};
   font-size : 1.1rem ;
   font-weight: bold ;
`

function StateCard({ title, value, percentage, ispositive }) {
	return (

		<StateCardContainer>

			<StatValue>{value}</StatValue>

			<StateInfo>
				<Percentagem className={ispositive ? "positive" : "negative"}>

					{ispositive ? "+" : "-"} {percentage}%
				</Percentagem>
				<p>{title}</p>
			</StateInfo>

		</StateCardContainer>
	)
}

export default StateCard;