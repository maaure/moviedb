import axios from "axios";

const APIConfig = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM2YTg5ZDdmZGY0Mzc2MzFhNTdiM2NiYmZkNjRkMiIsInN1YiI6IjY1ZDc3NDNiZmZkNDRkMDE0OTJhZTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pvt2SGMQcfRPJM2naFoAbQzAIz1JtdicBlbq93Jvxm8",
	},
});

export default APIConfig;
