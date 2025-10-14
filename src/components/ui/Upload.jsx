const Upload = ({ icon, text }) => {
	return (
		<button className="flex bg-violet-500 py-2 px-4 rounded-xl gap-2 text-white items-center">
			{icon} {text}
		</button>
	);
};

export default Upload;
