import React from "react";
import './Contact.scss';

const Contact = () => {
    return (
		<div className="Contact">
			<div>
				<h3>CAR Rental</h3>
				<p style={{marginTop:'33px'}}>
					We offer a big range of vehicles for <br /> all your driving needs.
					We have the <br /> perfect car to meet your needs.
				</p>
				<div style={{ display: "flex",marginTop:'33px'}}>
					<b>I</b>
					<b className="vm">(123)-456-789</b>
				</div>
				<div style={{ display: "flex" }}>
					<b>I</b>
					<b className="vm">carrental@gmail.com</b>
				</div>
			</div>
            <div className="company">
                <h3>COMPANY</h3>
                <p className="hm">New York</p>
                <p className="hm">Careers</p>
                <p className="hm">Mobile</p>
                <p className="hm">Blog</p>
                <p className="hm">How we work</p>
            </div>
            <div>
                <h3>Working Hours</h3>
                <p className="hm">Mon - Fri: 9:00AM - 9:00PM</p>
                <p className="hm">Sat: 9:00AM - 19:00PM</p>
                <p className="hm">Sun: Closed</p>
            </div>
            <div className="subscription">
                <h3 className="hm">Subscription</h3>
                <p className="hm">Subscribe your Email address for <br /> latest news & updates.</p>
                <input type="text" placeholder="Enter Email Address" className="hm" /><br />
                <button>Submit</button>
            </div>
		</div>
	);
}
export default Contact;