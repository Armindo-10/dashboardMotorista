import styled from "styled-components";

const TopbarContainer = styled.section`
   	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #f4f6fa;
	padding: 10px 20px;
	height: 60px;
	border-bottom: 1px solid #ddd;
	border-radius: 5px;
`;

const Titulo = styled.h1`
    font-size: 20px;
	color: #2f3e9e;

`;

const Span = styled.span`
  font-weight: 800;
`
const TobarRight = styled.div`
   	display: flex;
	align-items: center;
	gap: 10px;
`;

const Foto = styled.img`
    border-radius: 50%;
	width: 40px;
	height: 40px;
`


export default function Topbar() {

	return (

		<TopbarContainer>

			<div className={styles.TopbarLeft}></div>
			<Titulo>Dashboard do Motorista</Titulo>

			<TobarRight>
				<Span>Armindo de sousa</Span>
				<Foto src="src/imagens/imagemAvatar.avif" alt="avatar" />
			</TobarRight>

		</TopbarContainer>
	)
}