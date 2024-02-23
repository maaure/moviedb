import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieService from "../services/MovieService";

export default function Detail(): JSX.Element {
	const { id } = useParams();

	const [movie, setMovie] = useState<any>();

	useEffect(() => {
		if (id) {
			MovieService.get(Number(id), {
				language: "pt-BR",
			}).then((res) => {
				console.log(res.data);
				setMovie(res.data);
			});
		}
	}, [id]);

	function minToHour(min: number): string {
		var h = Math.floor(min / 60);
		var resMin = min % 60;

		return h + "h " + resMin + "min";
	}

	return (
		<div className="container mt-5">
			{movie !== undefined && (
				<div className="row">
					<div className="col-3">
						<img
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							className="w-100"
							alt=""
						/>
					</div>
					<div className="col-7">
						<h1>{movie.title}</h1>
						<p>
							{movie.release_date.split("-").reverse().join("/")}{" "}
							- {movie.genres.map((g: any) => g.name).join(", ")}{" "}
							- {minToHour(movie.runtime)}
						</p>
						<p>{`${Math.trunc(
							movie.vote_average * 10
						)}% dos usuários`}</p>
						<p className="text-muted">
							<em>{movie.tagline}</em>
						</p>
						<h3>Sinopse</h3>
						<p>{movie.overview}</p>
					</div>
				</div>
			)}
		</div>
	);
}
