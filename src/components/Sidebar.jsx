import { useState } from "react";
import { Menu } from "lucide-react";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={`flex flex-col h-screen p-6 bg-slate-900 text-white transition-transform duration-300 ${
				isOpen ? "w-64" : "w-20"
			} shadow-lg rounded-r-lg`}
		>
			<button
				onClick={toggleSidebar}
				className="self-end px-2 py-2 bg-slate-700 hover:bg-slate-600 transition-colors rounded-full mb-4"
			>
				<Menu color="white" size="1.5rem" />
			</button>
			{isOpen && (
				<div className="flex flex-col mt-6">
					<h1 className="text-2xl font-bold mb-4">Sidebar</h1>
					<ul>
						<li className="m-2 p-2 hover:bg-slate-700 hover:text-slate-300 rounded cursor-pointer transition-colors">
							Home
						</li>
						<li className="m-2 p-2 hover:bg-slate-700 hover:text-slate-300 rounded cursor-pointer transition-colors">
							About Me
						</li>
						<li className="m-2 p-2 hover:bg-slate-700 hover:text-slate-300 rounded cursor-pointer transition-colors">
							Experience
						</li>
						<li className="m-2 p-2 hover:bg-slate-700 hover:text-slate-300 rounded cursor-pointer transition-colors">
							Projects
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Sidebar;
