import react from "react";

const Contacto = () => {
  return (
    <section className="formPubliare">
      <h2>Contacto</h2>

      <form onClick={(e) => e.preventDefault()}>
        <label>
          <span>Nombre</span>
          <input
            // placeholder="Nombre"
            name="nombre"
            type="text"
            autocomplete="name"
            required=""
          />
        </label>
        <label>
          <span>Email</span>
          <input
            // placeholder="Email"
            name="email"
            type="text"
            autocomplete="email"
            required=""
          />
        </label>
        <label>
          <span>Mensaje</span>
          <textarea
            className="mensaje"
            name="mensaje"
            // placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </label>

        <input value="Enviar" className="submit" type="submit" />
      </form>
    </section>
  );
};

export default Contacto;
