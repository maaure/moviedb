import { useParams } from "react-router-dom";

export default function Detail(): JSX.Element {
	const { id } = useParams();
	return (
		<div className="container">
			<div className="row">
				<div className="col-5">
					<img
						src="..."
						alt=""
					/>
				</div>

				<div className="col-7">
					<h1>Titulo</h1>
					<p>classificacao, lançamento, genero, duração</p>
					<p>avaliação</p>
					<h3>Sinopse</h3>
					<p>Sinopse</p>
				</div>
			</div>
		</div>
	);
}
