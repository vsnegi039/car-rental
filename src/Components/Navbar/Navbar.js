import logo from "../Assets/logo.jpg";
import "./Navbar.scss";
const nav = () => {
	const toHome = () => {
		window.scrollTo({
			top: 0 - window.pageYOffset,
			behavior: "smooth",
		});
	};
	const toContact = () => {
		window.scrollTo(0, 0);
		window.scrollTo({
			top: 4500 - window.pageYOffset,
			behavior: "smooth",
		});
	};
	const toclient = () => {
		window.scrollTo(0, 0);
		window.scrollTo({
			top: 3500 - window.pageYOffset,
			behavior: "smooth",
		});
	};
	const toModels = () => {
		window.scrollTo(0, 0);
		window.scrollTo({
			top: 1450 - window.pageYOffset,
			behavior: "smooth",
		});
	};
	const toabout = () => {
		window.scrollTo(0, 0);
		window.scrollTo({
			top: 850 - window.pageYOffset,
			behavior: "smooth",
		});
	};
	return (
		<>
			<div className="nav">
				<div className="left">
					<ul>
						<li id="logo">
							<img src={logo} alt="Error: Image not found" />
						</li>
						<li style={{ marginLeft: "-20px" }}>
							{" "}
							<b style={{ fontSize: "15pt" }}>CAR</b>
							<br /> <p style={{ marginTop: "-5px" }}>Rental</p>
						</li>
					</ul>
				</div>

				<div className="mid">
					<ul>
						<li className="menu-item" onClick={toHome}>Home</li>
						<li className="menu-item" onClick={toabout}>About</li>
						<li className="menu-item" onClick={toModels}>Vehicle Models</li>
						<li className="menu-item" onClick={toclient}>Testimonials</li>
						<li className="menu-item">Our Team</li>
						<li className="menu-item" onClick={toContact}>
							Contact
						</li>
					</ul>
				</div>

				<div className="right">
					<ul>
						<li className="menu-item">Sign In</li>
						<li className="menu-item">
							<button>Register</button>
						</li>
					</ul>
				</div>
			</div>
			;
		</>
	);
};
export default nav;
