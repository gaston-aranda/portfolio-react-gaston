import { useEffect, useRef, useState } from 'react'
import Habilidades from './components/Habilidades'
import Proyecto from './components/Proyecto'
import SobreMi from './components/SobreMi'
import Contacto from './components/Contacto'
import './App.css'

const habilidades = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'UX/UI',
]

const proyectos = [
  {
    id: 1,
    titulo: 'Portfolio inicial',
    descripcion:
      'Mi primer portfolio publicado. Lo desarrollé con HTML, CSS y JavaScript para presentar mis proyectos y practicar el diseño adaptable.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    enlace: 'https://gaston-aranda.github.io/portfolio-gaston-aranda/',
  },
  {
    id: 2,
    titulo: 'Pinamar Turismo',
    descripcion:
      'Proyecto turístico de práctica. Organicé lugares y actividades de Pinamar e incorporé un formulario para planificar una visita.',
    tecnologias: ['UX/UI', 'HTML', 'CSS', 'JavaScript'],
    enlace:
      'https://gaston-aranda.github.io/portfolio-gaston-aranda/proyectos/pinamar-turismo/index.html',
  },
  {
    id: 3,
    titulo: 'Madera Sur',
    descripcion:
      'Proyecto de práctica: diseñé una landing page adaptable para presentar servicios de carpintería y facilitar el contacto.',
    tecnologias: ['HTML', 'CSS', 'Diseño adaptable'],
    enlace:
      'https://gaston-aranda.github.io/portfolio-gaston-aranda/proyectos/Carpinteria-muebles/',
  },
  {
    id: 4,
    titulo: 'Mar Austral',
    descripcion:
      'Sitio web para presentar servicios marítimos de Ushuaia de forma clara y accesible.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'React'],
    enlace:
      'https://gaston-aranda.github.io/portfolio-gaston-aranda/proyectos/proyecto-maritimo-ushuaia/',
  },
  {
    id: 5,
    titulo: 'Servicios profesionales',
    descripcion:
      'Sitio web para presentar servicios profesionales y facilitar el contacto con posibles clientes.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'React'],
    enlace:
      'https://gaston-aranda.github.io/portfolio-gaston-aranda/proyectos/servicios-profesionales/',
  },
]

function App() {
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false)
  const aguaRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let animationFrame: number | null = null

    const actualizarMovimientoDelAgua = () => {
      const desplazamiento = Math.min(22, window.scrollY * 0.045)

      if (aguaRef.current) {
        aguaRef.current.style.setProperty(
          '--scroll-water',
          `${desplazamiento}px`,
        )
        aguaRef.current.style.setProperty(
          '--scroll-water-soft',
          `${desplazamiento * 0.45}px`,
        )
      }

      animationFrame = null
    }

    const controlarScroll = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(
          actualizarMovimientoDelAgua,
        )
      }
    }

    actualizarMovimientoDelAgua()
    window.addEventListener('scroll', controlarScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', controlarScroll)

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  const archivoCV = '/portfolio-react-gaston/cv-gaston-aranda.pdf'

  return (
    <>
      <header className="site-header">
        <div className="topbar">
          <div className="topbar-inner">
            <p className="availability">
              <span aria-hidden="true" />
              Disponible para oportunidades trainee / junior
            </p>

            <a className="topbar-contact" href="#contacto">
              Hablemos
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="navbar">
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            GA<span>.</span>
          </a>

          <nav className="main-nav" aria-label="Navegación principal">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#curriculum">Currículum</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="app">
        <section id="inicio" className="hero hero-video-layout">
          <div className="hero-content">
            <div className="hero-title-block">
             <p className="hero-kicker">GASTÓN ARANDA · DESARROLLADOR FRONTEND</p>

    <h1>
  Creo sitios web
  <span> que conectan.</span>
</h1>
            </div>

            <div className="hero-details">
              <p className="hero-description">
  Diseño y desarrollo sitios rápidos, adaptables y fáciles de usar.
  Conocé lo que puedo crear para tu proyecto.
</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#proyectos">
                  Ver proyectos
                  <span aria-hidden="true">↘</span>
                </a>

              </div>

              <button
                className="skills-toggle"
                type="button"
                aria-expanded={mostrarHabilidades}
                onClick={() => setMostrarHabilidades(!mostrarHabilidades)}
              >
                {mostrarHabilidades
                  ? 'Ocultar habilidades'
                  : 'Explorar mis habilidades'}
                <span aria-hidden="true">
                  {mostrarHabilidades ? '−' : '+'}
                </span>
              </button>
            </div>
          </div>

          <div ref={aguaRef} className="hero-water">
            <video
              className="hero-water-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Olas de mar en movimiento"
            >
              <source
                src={`${import.meta.env.BASE_URL}agua-mar.mp4`}
                type="video/mp4"
              />
            </video>

            <div className="water-curve" aria-hidden="true" />

            <a className="scroll-hint" href="#sobre-mi">
              Desplazate hacia abajo
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="proof-bar" aria-label="Resumen profesional">
          <div>
            <strong>5</strong>
            <span>proyectos publicados</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>diseño adaptable</span>
          </div>
          <div>
            <strong>React</strong>
            <span>en aprendizaje continuo</span>
          </div>
        </section>

        {mostrarHabilidades && (
          <Habilidades habilidades={habilidades} />
        )}

        <div id="sobre-mi">
          <SobreMi />
        </div>

        <section id="proyectos" className="projects-section">
          <div className="section-heading">
            <div>
              <p className="section-eyebrow">TRABAJO SELECCIONADO</p>
              <h2>Proyectos que convierten ideas en experiencias.</h2>
            </div>

            <p className="section-intro">
              Cada proyecto representa una etapa de mi aprendizaje y una
              solución creada con diseño, código y atención a los detalles.
            </p>
          </div>

          <div className="projects-grid">
            {proyectos.map((proyecto) => (
              <Proyecto
                key={proyecto.id}
                titulo={proyecto.titulo}
                descripcion={proyecto.descripcion}
                tecnologias={proyecto.tecnologias}
                enlace={proyecto.enlace}
                imagen={
                  proyecto.id === 2
                    ? `${import.meta.env.BASE_URL}pinamar.png`
                    : undefined
                }
              />
            ))}
          </div>
        </section>

        <section id="curriculum" className="cv-section">
          <div className="cv-content">
            <p className="cv-eyebrow">CURRÍCULUM</p>

            <h2>Mi recorrido, habilidades y próximos desafíos.</h2>

            <p className="cv-description">
              Conocé mi formación, mis herramientas y los proyectos con los
              que estoy construyendo mi camino como desarrollador frontend.
            </p>

            <div className="cv-actions">
              <a
                className="cv-button"
                href={archivoCV}
                target="_blank"
                rel="noreferrer"
              >
                Ver CV
              </a>

              <a
                className="cv-button cv-button-secondary"
                href={archivoCV}
                download="CV-Gaston-Aranda-Frontend.pdf"
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="cv-seal" aria-hidden="true">
            <span>GA</span>
            <p>Frontend · UX/UI</p>
          </div>
        </section>

        <div id="contacto">
          <Contacto />
        </div>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">
          GA<span>.</span>
        </a>
        <p>Diseñado y desarrollado por Gastón Aranda.</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </>
  )
}

export default App