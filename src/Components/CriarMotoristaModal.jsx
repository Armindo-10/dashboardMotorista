import { useState } from "react";

export default function CriarMotoristaModal({ onclose, onsave }) {

	const [motorista, setMotorista] = useState({
		foto: null,
		nome: "",
		emal: "",
		telefone: "",
		veiculo: "",
		entregasConcluidas: "",
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setMotorista({ ...motorista, [name]: value })
	}

	function handleSubmit(e) {
		e.preventDefault();
		onclose();
		onsave(motorista);
	}

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<h2>Novo Motorista</h2>

				<input type="text" name="nome" value={motorista.name} onChange={handleChange} />
				<input type="email" name="email" value={motorista.email} onChange={handleChange} />
				<input type="number" name="telefone" value={motorista.telefone} onChange={handleChange} />
				<input type="text" name="nome" value={motorista.veiculo} onChange={handleChange} />
				<input type="text" name="nome" value={motorista.entregasConcluidas} onChange={handleChange} />

				<div className="botoes">
					<button onClick={() => onsave(motorista)}>salvar</button>
					<button onClick={onclose}>cancelar</button>
				</div>
			</form>
		</section>
	)
}