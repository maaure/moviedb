import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid px-5">
					<a
						className="navbar-brand"
						href="#"
					>
						MyFlix
					</a>
					<div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup"
					>
						<div className="navbar-nav">
							<a
								className="nav-link active"
								aria-current="page"
								href="/"
							>
								Filmes
							</a>
						</div>
					</div>
				</div>
			</nav>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/detail/:id/"
						element={<Detail />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
