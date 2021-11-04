import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
	return (
		<div className="App">
			<nav className="navbar justify-between">
				<div className="container">
					<h1 className="site-title">Life Maintenance</h1>
					<ul className="display-f">
						<li
							style={{ cursor: 'pointer' }}
							className="ml-1 text-hover-purple"
						>
							Our Work
						</li>
						<li
							style={{ cursor: 'pointer' }}
							className="ml-1 text-hover-purple"
						>
							About Us
						</li>
					</ul>
				</div>
			</nav>

			<div className="container">
				<div className="mt-5 row justify-center">
					<div className="col-12-xs col-5-md">
						<h2>
							<div className="font-xxl">Placeholder</div>
							<div className="font-xxl text-purple">Text</div>
						</h2>
						<p className="text-gray mt-2 mb-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
						<a
							href="#work"
							className="btn-outlined-secondary text-secondary text-hover-purple"
						>
							View Our Work
						</a>
					</div>
					<div className="col-12-xs col-5-md">
						<img src="placeholder.jpg" alt="" />
					</div>
				</div>
			</div>

			<section className="bg-purple-light-6 mt-5 pt-4 pb-4">
				<div className="container">
					<h2 className="mb-2">About Shinobi Designs</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
						in adipisci cupiditate minima veritatis unde recusandae quae, earum
						necessitatibus reprehenderit natus vel fugiat, quidem aut beatae.
						Sapiente non alias repellendus.
					</p>
					<p className="mt-1">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
						earum quis similique debitis dolores iste ipsam voluptates illo
						molestiae? Atque voluptates voluptatum eius maxime suscipit placeat
						facilis dicta aut quis.
					</p>
				</div>
			</section>

			<section id="work">
				<div className="container">
					<h2 className="mt-3 mb-2">Some of Our Work</h2>
					<div className="row gap-2">
						<div className="col-12-xs col-6-md col-3-lg">
							<h2>Placeholder</h2>
							<img src="placeholder.jpg" alt="" />
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
								asperiores laboriosam illum nulla blanditiis corrupti nemo,
								consectetur non, esse officiis iusto sit dolores incidunt, quam
								minima consequuntur fugit accusantium quisquam!
							</p>
						</div>
						<div className="col-12-xs col-6-md col-3-lg">
							<h2>Placeholder</h2>
							<img src="placeholder.jpg" alt="" />
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
								asperiores laboriosam illum nulla blanditiis corrupti nemo,
								consectetur non, esse officiis iusto sit dolores incidunt, quam
								minima consequuntur fugit accusantium quisquam!
							</p>
						</div>
						<div className="col-12-xs col-6-md col-3-lg">
							<h2>Placeholder</h2>
							<img src="placeholder.jpg" alt="" />
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
								asperiores laboriosam illum nulla blanditiis corrupti nemo,
								consectetur non, esse officiis iusto sit dolores incidunt, quam
								minima consequuntur fugit accusantium quisquam!
							</p>
						</div>
						<div className="col-12-xs col-6-md col-3-lg">
							<h2>Placeholder</h2>
							<img src="placeholder.jpg" alt="" />
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
								asperiores laboriosam illum nulla blanditiis corrupti nemo,
								consectetur non, esse officiis iusto sit dolores incidunt, quam
								minima consequuntur fugit accusantium quisquam!
							</p>
						</div>
					</div>
				</div>
			</section>

			<footer className="bg-purple-light-6 pt-2 pb-2 mt-5">
				<div className="container">
					<p>copyright 2021 Life Maintenance</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
