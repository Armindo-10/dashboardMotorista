import styled from "styled-components"
import { MdPendingActions, MdDoneAll } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const ResumoMotoristaContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;

const ResumoCards = styled.div`
  background-color: #f4f4f4;
  padding: 6px;
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
  font-weight: bold;
  color: black;
  margin: 0;
 `;

const Botao = styled.button`
  margin:0 10px;
  background-color: #4CAF50;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`;


export default function ResumoMotorista() {


	const [pendentes, setPendentes] = useState(5);
	const [concluidas, setConcluidas] = useState(12);
	const [canceladas, setCanceladas] = useState(2);

	function ConfirmarEntregas() {
		if (pendentes > 0) {
			setPendentes(pendentes - 1);
			setConcluidas(concluidas + 1);
			toast.success("✅ Entrega confirmada com sucesso!");
		} else {
			toast.warn("⚠️ Nenhuma entrega pendente para confirmar.");
		}
	}

	function CancelarEntregas() {
		if (pendentes > 0) {
			setPendentes(pendentes - 1);
			setCanceladas(canceladas + 1);
			toast.error("❌ Entrega cancelada!");
		} else {
			toast.warn("⚠️ Nenhuma entrega pendente para cancelar.");
		}
	}


	return (

		<ResumoMotoristaContainer>
			<ResumoCards>

				<Titulo>Entregas Pendentes</Titulo>
				<MdPendingActions size={45} color="black" className=" icones" />
				<Paragrafo>{pendentes}</Paragrafo>
				<Botao onClick={ConfirmarEntregas}>confirmar</Botao>
				<Botao onClick={CancelarEntregas}>cancelar</Botao>

			</ResumoCards>

			<ResumoCards>
				<Titulo>Entregas Concluidas</Titulo>
				<MdDoneAll size={45} color="orange" className=" icones" />
				<Paragrafo>{concluidas}</Paragrafo>
			</ResumoCards>

			<ResumoCards>
				<Titulo>Entregas Canceladas</Titulo>
				<MdDoneAll size={45} color="red" />
				<Paragrafo>{canceladas}</Paragrafo>
			</ResumoCards>

			<ResumoCards>
				<Titulo>Km percorridos(Mês)</Titulo>
				<FaRoad size={45} color="blue" className=" icones" />
				<Paragrafo>1.20km</Paragrafo>
			</ResumoCards>


			<ToastContainer

				position="bottom-left"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				pauseOnHover
				draggable
				theme="coloured"
			/>

		</ResumoMotoristaContainer>




	)
}