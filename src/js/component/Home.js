import React from "react";

//include images into your bundle
import cat from "../../img/cat.jpg";
import yakuza from "../../img/yakuza.jpg";
import kaguya from "../../img/kaguya.jpg";
import spy from "../../img/spy.jpg";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row justify-content-between">
					<Card title="Card title 1" description="description Card 1" imgSrc={yakuza} cardBtnName="Find Out More!" />
					<Card title="Card title 2" description="description Card 2" imgSrc={kaguya} cardBtnName="Find More!" />
					<Card title="Card title 3" description="description Card 3" imgSrc={spy} cardBtnName="Find!" />
					<Card title="Card title 4" description="description Card 4" imgSrc={cat} cardBtnName="Find In More!" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
