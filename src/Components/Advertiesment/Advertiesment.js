import React from "react";
import adver from "../Assets/adver.jpg";
import './Advertiesment.scss';

const Adver = () => {
	return (
		<div className="ad">
			<div className="heading">
				<h1>Save with our cheap car rental!</h1>
				<p>
					Top Airports. Local suppliers.{" "}
					<p style={{ color: "red" }}>24/7</p> support.
				</p>
			</div>
			<div className="picture">
				<img src={adver} alt="" />
			</div>
			<div className="row why">
				<div style={{ width: "50%" }}>
					<p>
						<b style={{ color: "black", fontSize: "14pt" }}>
							Why Choose Us
						</b>
					</p>
					<h2 className="hm">Best valued deal you will ever find</h2>
					<p className="hm">
						Discover best deal you will ever find with our
						unbeatable offers. We're dedicated to provide you with
						the best value for your money. so you can enjoy
						top-quality services and products without breaking the
						bank. Our deals are designed to give you the ultimate
						renting experience. so don't miss out on your chance to
						save big.
					</p>
					<button className="hm">Find Details</button>
				</div>
				<div style={{ marginLeft: "150px" }}>
					<b>Cross Country Drive</b>
					<p>
						Take your driving experience to the next level with our
						top-notch vehicle for your cross-country adventures.
					</p><br />
					<b>All Inclusive Pricing</b>
					<p>
						Get everyting you need in one convenient. transparent
						price with all our all-inclusive pricing policy.
					</p><br />
					<b>No Hidden Charges</b>
					<p>
						Enjoy peace of mind our no hidden charges policy. We
						belive in transparent and honest pricing.
					</p>
				</div>
			</div>
		</div>
	);
};
export default Adver;
