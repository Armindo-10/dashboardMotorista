import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const NotFoundContainer = styled.div`
    width: 100%;
	text-align: center;
	margin-top: 20px;
	color: white;
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

	const data = [

		{ name: "Armindo", skills: "developer Fullstack" },
		{ name: "Jeremias", skills: "pentester web" },
		{ name: "Rodolfo", skills: "enginner Software" },

	];

	return (

		<NotFoundContainer>
			<Subtitulo>404</Subtitulo>
			<Titulo>Page Not Found</Titulo>

			<div>

				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="name" fill="yellow" />
						<Bar dataKey="Fullstack" fill="white" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</NotFoundContainer>
	)
}