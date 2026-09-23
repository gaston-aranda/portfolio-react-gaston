interface ProyectoProps {
  titulo: string
  descripcion: string
  tecnologias: string[]
  enlace: string
}

function Proyecto({
  titulo,
  descripcion,
  tecnologias,
  enlace,
}: ProyectoProps) {
  return (
    <article className="project-card">
      <h2>{titulo}</h2>
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