import React from 'react';

const Navbar = () => {
	return (
		<div className="content-div">
			<nav class="navbar navbar-expand-sm   navbar-light bg-light">
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo03"
					aria-controls="navbarTogglerDemo03"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>

				<p id="navbar-welcome">Welcome to Kaza Inventory Management System!!</p>

				<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
						<li class="nav-item">
							<a class="nav-link" href="#">
								Home <span class="sr-only">(current)</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								About
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Contact Us
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Call
							</a>
						</li>
					</ul>
					<div class="social-part">
						<i class="fa fa-facebook" aria-hidden="true" />
						<i class="fa fa-twitter" aria-hidden="true" />
						<i class="fa fa-instagram" aria-hidden="true" />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
