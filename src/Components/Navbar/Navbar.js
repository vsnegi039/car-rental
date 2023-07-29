import logo from '../Assets/logo.jpg';
import './Navbar.scss';
const nav = () => {
	return (
		<>
			<div className="nav">
				<div className="left">
					<ul>
						<li id="logo">
							<img src={logo} alt="Error: Image not found" />
						</li>
						<li style={{marginLeft:'-20px'}}>
							{" "}
							<b style={{fontSize:'15pt'}}>CAR</b><br /> <p style={{marginTop:'-5px'}}>Rental</p>
						</li>
					</ul>
				</div>

				<div className="mid">
					<ul>
						<li className="menu-item">Home</li>
						<li className="menu-item">About</li>
						<li className="menu-item">Vehicle Models</li>
						<li className="menu-item">Testimonials</li>
						<li className="menu-item">Our Team</li>
						<li className="menu-item">Contact</li>
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
	}
export default nav;