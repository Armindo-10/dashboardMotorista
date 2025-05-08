import styles from "./Perfil.module.css"
function Perfil() {

	const motorista = {
		nome: "Carlos Alberto",
		email: "albertosousa@gmail.com",
		telefone: "+244 912 245 678",
		matricua: "LD-45-23-GP",
		dataEntrada: "12/03/2020"

	}

	return (
		<div className={styles.Perfil}>
			<h2>Perfil do Motorista</h2>

			<div className={styles.info}>
				<p><strong>Nome:</strong>{motorista.nome}</p>
				<p><strong>Email:</strong>{motorista.email}</p>
				<p><strong>Telefone:</strong>{motorista.telefone}</p>
				<p><strong>Matrícula:</strong>{motorista.matricua}</p>
				<p><strong>Data de Entrada:</strong>{motorista.dataEntrada}</p>
			</div>

		</div>
	)
}
export default Perfil;