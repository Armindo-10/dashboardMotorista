import GraficoStatus from "../Components/GraficoStatus";
import styled from "styled-components";


const StatusContainer = styled.section`
  padding: 20px;
`;

const Titulo = styled.h2`
	font-size: 2rem;
	color: white;
	text-transform: uppercase;
`

function Status() {

	return (
		<StatusContainer>
			<Titulo>Status</Titulo>
			<GraficoStatus />
		</StatusContainer>
	)
}

export default Status;