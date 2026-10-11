interface ProyectoProps {
  titulo: string
  tipo?: string
  descripcion?: string
  desafio?: string
  hice?: string
  aprendi?: string
  tecnologias: string[]
  enlace: string
  imagen?: string
}

function Proyecto({
  titulo,
  tipo,
  descripcion,
  desafio,
  hice,
  aprendi,
  tecnologias,
  enlace,
  imagen,
}: ProyectoProps) {
  const tieneRelato = Boolean(desafio || hice || aprendi)

  return (
    <article className="project-card" data-tipo={tipo}>
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

      {tieneRelato ? (
        <dl className="project-story">
          {desafio && (
            <>
              <dt>El desafío</dt>
              <dd>{desafio}</dd>
            </>
          )}

          {hice && (
            <>
              <dt>Lo que hice</dt>
              <dd>{hice}</dd>
            </>
          )}

          {aprendi && (
            <>
              <dt>Lo que aprendí</dt>
              <dd>{aprendi}</dd>
            </>
          )}
        </dl>
      ) : (
        <p>{descripcion}</p>
      )}

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