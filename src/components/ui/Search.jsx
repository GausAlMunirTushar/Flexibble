import { IoSearch } from "react-icons/io5";
const Search = () => {
	return (
		<div className="bg-gray-100 flex items-center py-2 px-4 gap-2 rounded-xl">
			<IoSearch />
			<input type="text" placeholder="Search" className="outline-none" />
		</div>
	);
};

export default Search;
