import { useState } from 'react'
import Habilidades from './components/Habilidades'
import Proyecto from './components/Proyecto'
import SobreMi from './components/SobreMi'
import Contacto from './components/Contacto'
import './App.css'

const habilidades = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'UX/UI',
]

const proyectos = [
  {
    id: 1,
    titulo: 'Portfolio profesional',
    descripcion:
      'Mi sitio personal para presentar mis conocimientos y proyectos.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    enlace: 'https://gaston-aranda.github.io/portfolio-gaston-aranda/',
  },
  {
    id: 2,
    titulo: 'Pinamar Turismo',
    descripcion:
      'Proyecto turístico con información, actividades y lugares de Pinamar.',
    tecnologias: ['UX/UI', 'HTML', 'CSS', 'JavaScript'],
    enlace:
      'https://gaston-aranda.github.io/portfolio-gaston-aranda/proyectos/pinamar-turismo/',
  },
  {
    id: 3,
    titulo: 'Madera Sur',
    descripcion:
      'Landing page comercial para una empresa de muebles y carpintería.',
    tecnologias: ['HTML', 'CSS', 'Diseños adaptable'],
    enlace:
      'https://gaston-aranda.github.io/portfolio-gaston-aranda/proyectos/Carpinteria-muebles/',
  },
  {
    id: 4,
    titulo: 'Mar Austral',
    descripcion:
      'Sitio web para una empresa de servicios marítimos de Ushuaia.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    enlace:
      'https://gaston-aranda.github.io/portfolio-gaston-aranda/proyectos/proyecto-maritimo-ushuaia/',
  },
  {
    id: 5,
    titulo: 'Servicios profesionales',
    descripcion:
      'Sitio web para presentar servicios profesionales de manera clara.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    enlace:
      'https://gaston-aranda.github.io/portfolio-gaston-aranda/proyectos/servicios-profesionales/',
  },
]

function App() {
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false)

  return (
    <main className="app">
      <section className="hero">
        <h1>Hola, soy Gastón</h1>

        <p>Este es mi primer proyecto creado con React.</p>

        <button
          type="button"
          onClick={() => setMostrarHabilidades(!mostrarHabilidades)}
        >
          {mostrarHabilidades
            ? 'Ocultar habilidades'
            : 'Ver mis habilidades'}
        </button>
      </section>

      {mostrarHabilidades && (
        <Habilidades habilidades={habilidades} />
      )}

      <SobreMi />

      <section className="projects-section">
        <h2>Mis proyectos</h2>

        <div className="projects-grid">
          {proyectos.map((proyecto) => (
            <Proyecto
              key={proyecto.id}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              tecnologias={proyecto.tecnologias}
              enlace={proyecto.enlace}
            />
          ))}
        </div>
      </section>

      <Contacto />
    </main>
  )
}

export default App