import styled from "styled-components"
import { MdPendingActions, MdDoneAll } from "react-icons/md";
import { FaRoad } from "react-icons/fa";



const ResumoMotoristaContainer = styled.section`
 display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const ResumoCards = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  flex: 1;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  text-align: center;
`;

const Titulo = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const Paragrafo = styled.p`
  font-size: 24px;
  color: #2C3E50;
  margin: 0;
 `;

export default function ResumoMotorista() {

	return (

		<ResumoMotoristaContainer>
			<ResumoCards>
				<Titulo>Entregas Pendentes</Titulo>
				<MdPendingActions size={45} color="black" className=" icones" />
				<p>5</p>

			</ResumoCards>

			<ResumoCards>
				<Titulo>Entregas Concluidas</Titulo>
				<MdDoneAll size={45} color="orange" className=" icones" />
				<p>24</p>
			</ResumoCards>

			<ResumoCards>
				<Titulo>Km percorridos(Mês)</Titulo>
				<FaRoad size={45} color="blue" className=" icones" />
				<p>1.250km</p>
			</ResumoCards>

		</ResumoMotoristaContainer>
	)
}