import React, { useState } from 'react'
import reactLogo from '../assets/icons/react.svg'
import viteLogo from '../assets/icons/vite.svg'
import './style/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
		<div className="glossy-root">
			<div className="glossy-vignette" aria-hidden />

			{/* Hero: izquierda = tarjeta glass con info del artículo, derecha = imagen */}
			<section className="hero-section" aria-label="Hero">
				<div className="hero-inner">
					<div className="hero-left">
						<article className="hero-card">
							<div className="hero-tags">
								<span className="tag">Diseño</span>
								<span className="tag">Minimalismo</span>
							</div>

							<h2 className="hero-article-title">Rutina matutina para creatividad</h2>

							<div className="hero-meta">
								<span className="hero-author">Frank</span>
								<span className="hero-dot">·</span>
								<span className="hero-date">01 Ago 2025</span>
							</div>

							<p className="hero-excerpt">
								Pequeños hábitos para empezar el día con claridad y creatividad. Un enfoque práctico para incorporar rituales que fomentan la producción de ideas.
							</p>

							<div className="hero-actions">
								<button className="btn primary"> Leer artículo </button>
								<button className="btn ghost"> Guardar </button>
							</div>

							{/* botones flotantes dependientes del hero-card */}
							<div className="hero-floating" aria-hidden={false}>
								<button className="float-btn float-left" aria-label="Anterior">&lt;</button>
								<button className="float-btn float-right" aria-label="Siguiente">&gt;</button>
							</div>
						</article>
					</div>

					<div className="hero-right" aria-hidden>
						<div
							className="hero-image"
							style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop')" }}
						/>
					</div>
				</div>
			</section>
		</div>
	)
}

export default App

