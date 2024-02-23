import { useEffect, useState } from "react";
import TopRatedMovieService from "../services/TopRatedMovieService";
import CardMovie from "../components/CardMovie";

export default function Home(): JSX.Element {
	const [movies, setMovies] = useState<any[]>([]);

	useEffect(() => {
		TopRatedMovieService.getAll()
			.then((res) => {
				setMovies(res.data.results);
				console.log(res.data.results);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<>
			<div className="container mt-5">
				<div className="row g-3">
					{movies.length > 0 &&
						movies.map((m) => {
							return (
								<div
									className="col-4"
									key={m.home}
								>
									<CardMovie
										id={m.id}
										imgLink={m.poster_path}
										realeaseDate={m.release_date}
										key={m.id}
										score={m.vote_average}
										title={m.title}
									/>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
}
