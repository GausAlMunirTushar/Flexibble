const Link = ({ text, link }) => {
	return (
		<a className="text-violet-500 cursor-pointer" href={link}>
			{text}
		</a>
	);
};

export default Link;
