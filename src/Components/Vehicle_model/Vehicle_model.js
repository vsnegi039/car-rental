import React, { useState } from "react";
import aud from "../Assets/audi_a1.jpg";
import gol from "../Assets/golf.webp";
import toy from "../Assets/toyota.jpg";
import bm from "../Assets/bmw.jpg";
import merced from "../Assets/mercedes.png";
import pas from "../Assets/passat.webp";

import "./Vehicle_model.scss";

function Vehicle_model() {
	const [price, setPrice] = useState("45");
	const [model, setModel] = useState("Audi");
	const [mark, setMark] = useState("A1");
	const [year, setYear] = useState("2012");
	const [doors, setDoors] = useState("4/5");
	const [ac, setAc] = useState("Yes");
	const [transmission, setTransmission] = useState("Manual");
	const [fuel, setFuel] = useState("Gasoline");
	const [img, setImg] = useState(aud);

	const audi = () => {
		setPrice("45");
		setModel("Audi");
		setMark("A1");
		setYear("2012");
		setDoors("4/5");
		setAc("Yes");
		setTransmission("Manual");
		setFuel("Gasoline");
		setImg(aud);
	};

	const golf = () => {
		setPrice("37");
		setModel("Golf 6");
		setMark("Volkswagen");
		setYear("2008");
		setDoors("4/5");
		setAc("Yes");
		setTransmission("Manual");
		setFuel("Diesel");
		setImg(gol);
	};

	const toyota = () => {
		setPrice("30");
		setModel("Camry");
		setMark("Toyota");
		setYear("2006");
		setDoors("4/5");
		setAc("Yes");
		setTransmission("Automatic");
		setFuel("Hybrid");
		setImg(toy);
	};

	const bmw = () => {
		setPrice("35");
		setModel("320");
		setMark("BMW");
		setYear("2012");
		setDoors("4/5");
		setAc("Yes");
		setTransmission("Manual");
		setFuel("Diesel");
		setImg(bm);
	};

	const mercedes = () => {
		setPrice("50");
		setModel("Benz GLK");
		setMark("Mercedes");
		setYear("2006");
		setDoors("4/5");
		setAc("Yes");
		setTransmission("Manual");
		setFuel("Diesel");
		setImg(merced);
	};

	const passat = () => {
		setPrice("25");
		setModel("Passat CC");
		setMark("Volkswagan");
		setYear("2008");
		setDoors("4/5");
		setAc("Yes");
		setTransmission("Automatic");
		setFuel("Gasoline");
		setImg(pas);
	};

	return (
		<div className="vehicle-model">
			<h2>Vehicle Models</h2>
			<h1>Our rental fleet</h1>
			<div className="f">
				<p>
					choose from a variety of our amazing vehicles to rent for
					your next adventure or business trip
				</p>
			</div>
			<div className="models">
				<div className="car-names">
					<ul className="left">
						<li onClick={audi}>&nbsp;&nbsp;Audi A1 s-Line</li>
						<li onClick={golf}>&nbsp;&nbsp;VW Golf 6</li>
						<li onClick={toyota}>&nbsp;&nbsp;Toyota Camry</li>
						<li className="bg" onClick={bmw}>
							&nbsp;&nbsp;BMW 320 ModernLine
						</li>
						<li className="bg" onClick={mercedes}>
							&nbsp;&nbsp;Mercedes-Benz GLK
						</li>
						<li className="bg" onClick={passat}>
							&nbsp;&nbsp;VW Passat CC
						</li>
					</ul>
				</div>
				<div className="image">
					<img src={img} alt="" />
				</div>
				<div>
					<ul className="right">
						<li id="price">
							<b>${price}</b>&nbsp; /rent per day{" "}
						</li>
						<li>
							<div>Model</div>
							<div className="bar"></div>
							<div className="ri">{model}</div>
						</li>
						<li>
							<div>Mark</div>
							<div className="bar"></div>
							<div className="ri">{mark}</div>
						</li>
						<li>
							<div>BMW Year</div>
							<div className="bar"></div>
							<div className="ri">{year}</div>
						</li>
						<li>
							<div>Doors</div>
							<div className="bar"></div>
							<div className="ri">{doors}</div>
						</li>
						<li>
							<div>AC</div>
							<div className="bar"></div>
							<div className="ri">{ac}</div>
						</li>
						<li>
							<div>Transmission</div>
							<div className="bar"></div>
							<div className="ri">{transmission}</div>
						</li>
						<li>
							<div>Fuel</div>
							<div className="bar"></div>
							<div className="ri">{fuel}</div>
						</li>
					</ul>
					<button>RESERVE NOW</button>
				</div>
			</div>
		</div>
	);
}

export default Vehicle_model;
