import React, { useState } from 'react'
import reactLogo from '../assets/icons/react.svg'
import viteLogo from '../assets/icons/vite.svg'
import img_test from '../assets/img/image.png'
// import './style/App.css'
import './style/style.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div class="container">
				<div class="row">

					<h1 class="titulo-trend col-12">Titulo 1</h1>

					<div class="section-hero">
						<div class="hero-left">
							<div class="hero-card">
								<div class="card-p_category">
									<span class="badge rounded-pill text-bg-secondary">Secondary</span>
									<span class="badge rounded-pill text-bg-secondary">Secondary</span>
								</div>
								<h2 class="card-p_title">Articulo 1</h2>
								<p class="card-p_autor-fecha">Francisco Salinas - 24 de Diciembre de 2052</p>
								<p class="card-p_description">Articulo descripcion bla bla bla</p>
								<button type="button" class="card-p_btn btn btn-sm btn-outline-light">Leer más</button>

							</div>
							<div class="hero_box-button">
								<div class="box-button btn btn-outline-secondary">&lt;</div>
								<div class="box-button btn btn-outline-secondary">&gt;</div>
							</div>

						</div>
						<img class="hero-img" src={img_test} alt="Hero image"></img>
					</div>
				</div>
				<div class="row">
					<h1 class="titulo-trend col-12">Titulo 2</h1>

					<p class="titulo-trend col-12">Descripcion</p>

					<div class="trend-principal col-sm-12 col-md-12 col-lg-7 col-xxl-7 ">
						<div class="trend-card">
							<img src={img_test} alt="" class="card-c_img"></img>
							<div class="card-c_info">
								<div class="card-c_category">
									<span class="badge rounded-pill text-bg-secondary">Secondary</span>
									<span class="badge rounded-pill text-bg-secondary">Secondary</span>
								</div>
								<h2 class="card-c_title">Articulo 2</h2>
								<p class="card-c_autor-fecha">Francisco Salinas - 24 de Diciembre de 2052</p>
								<p class="card-c_description">Articulo descripcion bla bla bla</p>
								<button type="button" class="card-c_btn btn btn-sm btn-outline-secondary">Leer más</button>
							</div>
						</div>

					</div>
					<div class="trend-right col-sm-12 col-md-12 col-lg-5 col-xxl-5 ">
						<div class="trend_card-r">
							<img src={img_test} alt="" class="card-r_img"></img>
							<div class="card-r_info">
								<div class="card-r_category">
									<span class="badge rounded-pill text-bg-secondary">Secondary</span>
									<span class="badge rounded-pill text-bg-secondary">Secondary</span>
								</div>
								<h2 class="card-r_title">Articulo 3</h2>
								<p class="card-r_autor-fecha">Francisco Salinas - 24 de Diciembre de 2052</p>
								<p class="card-r_description">Articulo descripcion bla bla bla</p>
								<button type="button" class="card-r_btn btn btn-sm btn-outline-secondary">Leer más</button>
							</div>
						</div>

						<div class="trend_card-r">
							<img src={img_test} alt="" class="card-r_img"></img>
							<div class="card-r_info">
								<div class="card-r_category">
									<span class="badge rounded-pill text-bg-secondary">Secondary</span>
									<span class="badge rounded-pill text-bg-secondary">Secondary</span>
								</div>
								<h2 class="card-r_title">Articulo 4</h2>
								<p class="card-r_autor-fecha">Francisco Salinas - 24 de Diciembre de 2052</p>
								<p class="card-r_description">Articulo descripcion bla bla bla</p>
								<button type="button" class="card-r_btn btn btn-sm btn-outline-secondary">Leer más</button>
							</div>
						</div>
						<div class="trend_card-r">
							<img src={img_test} alt="" class="card-r_img"></img>
							<div class="card-r_info">
								<div class="card-r_category">
									<span class="badge rounded-pill text-bg-secondary">Secondary</span>
									<span class="badge rounded-pill text-bg-secondary">Secondary</span>
								</div>
								<h2 class="card-r_title">Articulo 5</h2>
								<p class="card-r_autor-fecha">Francisco Salinas - 24 de Diciembre de 2052</p>
								<p class="card-r_description">Articulo descripcion bla bla bla</p>
								<button type="button" class="card-r_btn btn btn-sm btn-outline-secondary">Leer más</button>
							</div>
						</div>

					</div>
					<div class="trend-bottom col-12">
						<div class="trend_card-b">
							<img src={img_test} alt="" class="card-b_img"></img>

							<div class="card-b_info">
								<div class="card-r_category">
									<span class="badge rounded-pill text-bg-secondary">Secondary</span>
									<span class="badge rounded-pill text-bg-secondary">Secondary</span>
								</div>
								<h2 class="card-b_title">Articulo 6</h2>
								<p class="card-b_autor-fecha">Francisco Salinas - 24 de Diciembre de 2052</p>
								<p class="card-b_description">Articulo descripcion bla bla bla</p>
								<button type="button" class="card-b_btn btn btn-sm btn-outline-secondary">Leer más</button>
							</div>
						</div>
						<div class="trend_card-b">
							<img src={img_test} alt="" class="card-b_img"></img>
								<div class="card-b_info">
									<div class="card-b_category">
										<span class="badge rounded-pill text-bg-secondary">Secondary</span>
										<span class="badge rounded-pill text-bg-secondary">Secondary</span>
									</div>
									<h2 class="card-b_title">Articulo 7</h2>
									<p class="card-b_autor-fecha">Francisco Salinas - 24 de Diciembre de 2052</p>
									<p class="card-b_description">Articulo descripcion bla bla bla</p>
									<button type="button" class="card-b_btn btn btn-sm btn-outline-secondary">Leer más</button>
								</div>
						</div>
						<div class="trend_card-b">
							<img src={img_test} alt="" class="card-b_img"></img>
							<div class="card-b_info">
								<div class="card-r_category">
									<span class="badge rounded-pill text-bg-secondary">Secondary</span>
									<span class="badge rounded-pill text-bg-secondary">Secondary</span>
								</div>
								<h2 class="card-b_title">Articulo 8</h2>
								<p class="card-b_autor-fecha">Francisco Salinas - 24 de Diciembre de 2052</p>
								<p class="card-b_description">Articulo descripcion bla bla bla</p>
								<button type="button" class="card-b_btn btn btn-sm btn-outline-secondary">Leer más</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App

