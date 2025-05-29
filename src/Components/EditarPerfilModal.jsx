import { useState } from "react";
import styled from "styled-components";

{/* estilizando */ }

const Modal = styled.div`
	background: white;
	padding: 2rem;
	border-radius: 12px;
	width: 400px;
	box-shadow: 0 4px 12px rgba(0,0,0,0.2);
	`;

const ModalInput = styled.input`
	width:100%;
	padding: 10px;
	margin: 8px 0;
	border: 1px solid #ccc;
	border-radius: 6px;
	`;

const BotoesAll = styled.div`
	 display:flex;
	 justify-content: space-between;
      margin-top: 1rem;
	`;

const Titulo = styled.h3`
	color: black;
	font-size: 1.rem;
	text-transform: uppercase;
	`

const BotaoFirst = styled.button`
  padding: 10px 16px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  background-color: yellow;
  color: black;
  transition: 0.4s ease-in-out;

  &:hover{
  background-color: black;
  color: white;
  }
`;
const BotaoSecond = styled.button`
  padding: 10px 16px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  background-color: blue;
  color: white;
  transition: 0.4s ease-in-out;

  &:hover{
  background-color: orange;
  color: black;
  }
`

export default function EditarPerfilModal({ dados, onclose, onsave }) {

	const [form, SetForm] = useState(dados);

	function handleChange(e) {
		const { name, value } = e.target;
		SetForm({ ...form, [name]: value });
	}

	function hansleSubmit(e) {
		e.preventDefault();
		onsave(form);
		onclose();
	}

	return (

		<div>

			<Modal>
				<Titulo>Editar perfil</Titulo>

				<form onSubmit={hansleSubmit}>
					<ModalInput type="text" name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" />
					<ModalInput type="text" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
					<ModalInput type="number" name="Telefone" value={form.telefone} onChange={handleChange} placeholder="+244 934-453-234" />
					<ModalInput type="text" name="veiculo" value={form.veiculo} onChange={handleChange} placeholder="veiculo" />
					<ModalInput type="text" name="entregasConcluidas" value={form.entregasConcluidas} onChange={handleChange} placeholder="entregasConcluidas" />

						<BotaoFirst onClick={() => onsave(form)}>Salvar</BotaoFirst>
						<BotaoSecond type="button" onClick={onclose}>Cancelar</BotaoSecond>
					</BotoesAll>
				</form>
			</Modal>

		</div>

	)
}