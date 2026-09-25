interface ProyectoProps {
  titulo: string
  descripcion: string
  tecnologias: string[]
  enlace: string
  imagen?: string
}

function Proyecto({
  titulo,
  descripcion,
  tecnologias,
  enlace,
  imagen,
}: ProyectoProps) {
  return (
    <article className="project-card">
      {imagen && (
        <a
          className="project-preview"
          href={enlace}
          target="_blank"
          rel="noreferrer"
          aria-label={`Ver proyecto ${titulo}`}
        >
          <img
            src={imagen}
            alt={`Captura del sitio ${titulo}`}
            loading="lazy"
          />
        </a>
      )}

      <h3>{titulo}</h3>
      <p>{descripcion}</p>

      <div className="technologies">
        {tecnologias.map((tecnologia) => (
          <span key={tecnologia}>{tecnologia}</span>
        ))}
      </div>

      <a
        className="project-link"
        href={enlace}
        target="_blank"
        rel="noreferrer"
      >
        Ver proyecto
      </a>
    </article>
  )
}

export default Proyecto