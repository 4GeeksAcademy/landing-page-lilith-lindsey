import React from "react";
import Card from "./cards";
import Nav from "./nav";
import Pagetitle from "./pagetitle"
const cardTitle = ["card1", "card2", "card3", "card4"]
import Foot from "./footer"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Nav/>
			<div className="title-card-parent container">
				<Pagetitle/>
				<div className="d-flex m-2">
				{cardTitle.map(
					(title) => {
						return(
							<div>
								<Card titleProp = {title}/>
							</div>
						)
					}
				)}
				</div>
				<Foot/>
			</div>
		</div>)
		
};

export default Home;