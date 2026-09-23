interface HabilidadesProps {
  habilidades: string[]
}

function Habilidades({ habilidades }: HabilidadesProps) {
  return (
    <ul className="skills">
      {habilidades.map((habilidad) => (
        <li key={habilidad}>{habilidad}</li>
      ))}
    </ul>
  )
}

export default Habilidades