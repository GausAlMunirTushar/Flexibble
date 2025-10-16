import { Routes, Route } from "react-router";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
function App() {
	return (
		<>
			<Header />
			<main className="">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
