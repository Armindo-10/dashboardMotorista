import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import NoFound from "../imagens/notfound.webp"

const NotFoundContainer = styled.div`
    width: 100%;
	text-align: center;
	margin-top: 20px;
	color: white;
	background-image: url(${NoFound});
	 height: 100vh;
	  background-size: cover;
     background-position: center;
	 width: 100%;
	 border-radius: 20px;
	object-fit: cover;
`;

const Titulo = styled.h2`
    	font-size: 2rem;
      	text-transform: uppercase;
	    margin-top: 5px;
`

const Subtitulo = styled.h3`
     font-size: 1.7em;
	letter-spacing: 2px;
`

export default function NotFound() {

	return (

		<NotFoundContainer>
			<Subtitulo>404</Subtitulo>
			<Titulo>Page Not Found</Titulo>

		</NotFoundContainer>
	)
}