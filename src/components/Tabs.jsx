import tabs from "../data/tabs";

const Tabs = () => {
	return (
		<div className="w-full mx-auto text-center my-4">
			{tabs.map((tab) => (
				<button
					className="px-4 py-2 bg-gray-100 hover:bg-violet-400 hover:text-white cursor-pointer mx-2 rounded-xl"
					key={tab.id}
				>
					{tab.name}
				</button>
			))}
		</div>
	);
};

export default Tabs;
