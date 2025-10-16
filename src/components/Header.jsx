import { Link } from "react-router";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./ui/Search";
import Avatar from "./ui/Avatar";
import Upload from "./ui/Upload";
import { MdOutlineFileUpload } from "react-icons/md";

const Header = () => {
	const isLogin = false;
	return (
		<main className="border-b border-gray-200">
			<header className="w-7xl mx-auto px-8 py-4 flex items-center justify-between">
				<section className="flex items-center gap-8">
					<Logo />
					<Menu />
				</section>
				<section className="flex gap-4 items-center">
					<Link to="/apply" text="Apply Now" Link="#" />
					<Search />
					{isLogin ? (
						<div className="flex items-center gap-4">
							<Avatar />
							<Upload
								text="Upload"
								icon={<MdOutlineFileUpload />}
							/>
						</div>
					) : (
						<Link
							to="/login"
							className="px-4 py-2 text-sm font-medium bg-violet-500 text-white cursor-pointer rounded-md hover:bg-violet-700 transition"
						>
							Login
						</Link>
					)}
				</section>
			</header>
		</main>
	);
};

export default Header;
