import Body from "./components/Body";
import Sidebar from "./components/Sidebar";

const App = () => {
	return (
		<div className="bg-[#000000] h-screen overflow-hidden flex">
			<Sidebar />
			<div className="flex-grow">
				<Body />
			</div>
		</div>
	);
};

export default App;
