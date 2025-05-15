import styles from "./ChartCard.module.css";
import { Link } from "react-router-dom";
import FirsDrive from "../imagens/PrimeiroMotorista.jpg";
import SecondDrive from "../imagens/SegundoMotorista.jpg";
import tirdDrive from "../imagens/motorista-atendimento.webp";


export default function ChartCard() {


	return (
		<div className={styles.ChartCard}>
			<h2>Perfil do Motorista</h2>

			<div className={styles.Cards}>


				<div className={styles.info}>
					<img src={FirsDrive} alt="fotoPrimeiroDrive" />
					<p><strong>Nome:</strong>Alfredo Domingos</p>
					<p><strong>Email:</strong>alfredodomingos@gmail.com</p>
					<p><strong>Telefone:</strong>+244 982 345 654</p>
					<p><strong>Matrícula:</strong>Ld 45 - 24</p>
					<p><strong>Data de Entrada:</strong>19/02/2022</p>
					<Link to="" className={styles.Botao}>Editar perfil</Link>
				</div>

				<div className={styles.info}>
					<img src={SecondDrive} alt="fotoSegundoDriver" />
					<p><strong>Nome:</strong>Álvaro Santiego</p>
					<p><strong>Email:</strong>alvaroalfredo@gmail.com</p>
					<p><strong>Telefone:</strong>+244 982 345 654</p>
					<p><strong>Matrícula:</strong>Ld 45 - 24</p>
					<p><strong>Data de Entrada:</strong>19/02/2022</p>
					<Link to="" className={styles.Botao}>Editar perfil</Link>
				</div>

				<div className={styles.info}>
					<img src={tirdDrive} alt="fotoTerceiroDrive" />
					<p><strong>Nome:</strong>Alfredo Domingos</p>
					<p><strong>Email:</strong>alfredodomingos@gmail.com</p>
					<p><strong>Telefone:</strong>+244 982 345 654</p>
					<p><strong>Matrícula:</strong>Ld 45 - 24</p>
					<p><strong>Data de Entrada:</strong>19/02/2022</p>
					<Link to="" className={styles.Botao}>Editar perfil</Link>
				</div>

			</div>

		</div>
	)
}
