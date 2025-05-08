import { Link } from "react-router-dom";
import styles from "./Slidbar.module.css";


function Slidbar() {

	return (
		<header className={styles.slidbar}>
			<Link to="/Dashboard" className={styles.logo}>AGroway Motorista</Link>
			<nav>
				<ul>
					<li><Link to="/EntregasPendentes">Entregas Pendentes</Link></li>
					<li><Link to="/Status">Status</Link></li>
					<li><Link to="/perfil">Perfil</Link></li>
					<li><Link to="/Historico">Histórico de Entregas</Link></li>
				</ul>
			</nav>

		</header>
	)
}

export default Slidbar;