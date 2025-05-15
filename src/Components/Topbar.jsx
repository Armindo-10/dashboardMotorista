import styles from "./Topbar.module.css";

export default function Topbar() {

	return (

		<div className={styles.Topbar}>

			<div className={styles.TopbarLeft}></div>
			<h1>Dashboard do Motorista</h1>

			<div className={styles.tobarRight}>
				<span>Armindo de sousa</span>
				<img src="src/imagens/imagemAvatar.avif" alt="avatar" className={styles.avatar} />
			</div>

		</div>
	)
}