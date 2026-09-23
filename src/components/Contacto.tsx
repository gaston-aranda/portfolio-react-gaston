import { SiGmail } from 'react-icons/si'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'

function Contacto() {
  return (
    <section className="contacto">
      <h2>Contacto</h2>

      <p>
        ¿Tenés un proyecto o una propuesta laboral? Me gustaría conocerla.
      </p>

      <div className="contacto-enlaces">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=gaston.aranda.dev@gmail.com"
          className="contacto-boton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail size={20} />
          Correo
        </a>

        <a
          href="https://www.linkedin.com/in/gaston-aranda-294934437/"
          className="contacto-boton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </a>

        <a
          href="https://wa.me/5492901488020?text=Hola%20Gast%C3%B3n%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20contactarte."
          className="contacto-boton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} />
          WhatsApp
        </a>
      </div>
    </section>
  )
}

export default Contacto