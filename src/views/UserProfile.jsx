import Avatar from "../components/ui/Avatar";

const UserProfile = () => {
	return (
		<section className="w-7xl mx-auto py-20 px-4 flex">
			<div className="w-5/12">
				<Avatar />
				<h1 className="text-4xl font-semibold my-2">Rebeca Chenford</h1>
				<h2 className="text-5xl font-bold">
					I’m UX/UI Designer <br /> at Microtech 👋
				</h2>
			</div>
			<div className="w-7/12">
				<img
					className="rounded-xl"
					src="../../public/images/recent-portfolio.png"
				/>
			</div>
		</section>
	);
};

export default UserProfile;
