import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const PortfolioCard = ({
	imageUrl,
	teamImageUrl,
	teamName,
	loveCount,
	viewCount,
}) => {
	return (
		<section className="w-96">
			<img
				className="w-full h-80 rounded-xl"
				src={imageUrl}
				alt="Portfolio Image"
			/>
			<div className="flex justify-between py-2">
				<div className="flex gap-2 items-center">
					<img
						className="w-10 h-10 rounded-full"
						src={teamImageUrl}
						alt="Team Image"
					/>
					<h3 className="font-bold">{teamName}</h3>
				</div>
				<div className="flex gap-5">
					<div className="flex items-center gap-2">
						<FaHeart className="text-gray-300" /> <p>{loveCount}</p>
					</div>
					<div className="flex items-center gap-2">
						<FaEye className="text-gray-300" /> <p>{viewCount}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioCard;
