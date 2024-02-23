import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BaseService from "../../services/BaseService";
import ImageService from "../../services/ImageService";

interface CardMovieProps {
	imgLink: string;
	score: number;
	realeaseDate: string;
	title: string;
	id: number;
}

export default function CardMovie(props: CardMovieProps): JSX.Element {
	const { imgLink, score, realeaseDate, title, id } = props;

	const navigate = useNavigate();

	function navegar() {
		navigate(`/detail/${id}/`);
	}

	return (
		<div
			className="card"
			style={{ width: "18rem", cursor: "pointer" }}
			onClick={() => {
				navegar();
			}}
		>
			<img
				src={`https://image.tmdb.org/t/p/w500/${imgLink}`}
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">
					{realeaseDate.split("-").reverse().join("/")}
				</p>
				<p className="card-text text-disabled">{`Nota dos usuários: ${Math.trunc(
					score * 10
				)}%`}</p>
			</div>
		</div>
	);
}
