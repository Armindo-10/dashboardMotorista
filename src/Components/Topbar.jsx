import styled from "styled-components";

const TopbarContainer = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #f4f6fa;
	padding: 10px 20px;
	height: auto;
	border-bottom: 1px solid #ddd;
	border-radius: 5px;
	flex-wrap: wrap;

	@media (max-width: 620px) {
		flex-direction: column-reverse;
		gap: 10px;
		align-items: center;
		justify-content: center;
	
	}
`;

const Titulo = styled.h1`
    font-size: 20px;
	color: #2f3e9e;

`;

const Span = styled.span`
  font-weight: 800;
  color: black;
`
const TobarRight = styled.div`
   	display: flex;
	align-items: center;
	gap: 10px;

		@media (max-width: 620px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

const Foto = styled.img`
    border-radius: 50%;
	width: 40px;
	height: 40px;
`


export default function Topbar() {

	return (

		<TopbarContainer>

			<div className="TopbarLeft"></div>
			<Titulo>Dashboard do Motorista</Titulo>

			<TobarRight>
				<Span>Armindo de sousa</Span>
				<Foto src="src/imagens/imagemAvatar.avif" alt="avatar" />
			</TobarRight>

		</TopbarContainer>
	)
}