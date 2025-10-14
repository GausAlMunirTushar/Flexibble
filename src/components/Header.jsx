import Logo from "./Logo";
import Menu from "./Menu";
import Link from "./Link";
import Search from "./ui/Search";
import Avatar from "./ui/Avatar";
import Upload from "./ui/Upload";
import { MdOutlineFileUpload } from "react-icons/md";

const Header = () => {
	return (
		<main className="border-b border-gray-200">
			<header className="w-7xl mx-auto px-8 py-4 flex items-center justify-between">
				<section className="flex items-center gap-8">
					<Logo />
					<Menu />
				</section>
				<section className="flex gap-4 items-center">
					<Link text="Apply Now" Link="#" />
					<Search />
					<Avatar />
					<Upload text="Upload" icon={<MdOutlineFileUpload />} />
				</section>
			</header>
		</main>
	);
};

export default Header;
