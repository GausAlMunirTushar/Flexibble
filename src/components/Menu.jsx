import { NavLink } from "react-router";

const Menu = () => {
	const menuItems = [
		{ name: "Inspiration", path: "/inspiration" },
		{ name: "Find Work", path: "/find-work" },
		{ name: "Learn Design", path: "/learn-design" },
		{ name: "Go Pro", path: "/go-pro" },
		{ name: "Hire Designers", path: "/hire-designers" },
	];

	return (
		<ul className="flex gap-5 text-lg">
			{menuItems.map((item) => (
				<li key={item.path}>
					<NavLink
						to={item.path}
						className={({ isActive }) =>
							isActive
								? "text-blue-600 font-semibold border-b-2 border-blue-500"
								: "text-gray-700 hover:text-blue-500"
						}
					>
						{item.name}
					</NavLink>
				</li>
			))}
		</ul>
	);
};

export default Menu;
