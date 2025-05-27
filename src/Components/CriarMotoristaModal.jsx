import { useState } from "react";

export default function CriarMotoristaModal({ onClose, onSave }) {

	const [motorista, setMotorista] = useState({
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
		onClose();
		onSave(motorista);
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
					<button onClick={() => onSave(motorista)}>salvar</button>
					<button onClick={onClose}>cancelar</button>
				</div>
			</form>
		</section>
	)
}