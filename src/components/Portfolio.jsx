import portfolios from "../data/porfolio";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
	return (
		<section className="w-7xl mx-auto px-8 py-10 ">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{portfolios.map((portfolio) => (
					<PortfolioCard
						imageUrl={portfolio.imageUrl}
						teamImageUrl={portfolio.teamImageUrl}
						teamName={portfolio.teamName}
						loveCount={portfolio.loveCount}
						viewCount={portfolio.viewCount}
					/>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
