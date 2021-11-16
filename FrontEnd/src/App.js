import './App.css';
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"></link>

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <div className="imagen-header">
          <a href="/">
            <img src="https://i.imgur.com/LMSTbbQ.png" alt="" href="/" height="80px"></img>
          </a>
        </div>
        <img src="https://i.imgur.com/431dd1j.png" alt="" height="80px"></img>
        <div className="header">
          <button className="botonheader"><a href="/">Iniciar Sesión</a></button>|<button className="botonheader"><a href="/">Registrarse</a></button>
        </div>
      </header>
      <div className="separacion">
      </div>
      <div className="texto">
        <h2 className="texto">Permitenos ayudarte a expandir el alcance de tu negocio!</h2>
        <div className="nosotros">
          <div className="misionalcance"><img classname="misionalcance" src="https://i.imgur.com/ArZ0p87.png" alt="" height="250px" /><h3>Misión:<br />Brindarle a nuestros usuarios un medio virtual para que logren tener más alcance y visibilidad mediante nuestro aplicativo</h3></div>
          <div className="misionalcance"><img classname="misionalcance" src="https://i.imgur.com/gIOTbGZ.png" alt="" height="250px" /><h3>Alcance:<br />Permitenos brindarle a tu negocio más alcance y visibilidad a través de nuestro aplicativo mediante recursos virtuales</h3></div>
        </div>
      </div>
      <div className="separacion">
      </div>
      <div className="footer">
      <img src="https://www.politecnicojic.edu.co/images/logo/logo-institucion-v.png" alt="" href="/" height="95px"></img>
      <h5>Proyecto creado por:<br/>
      Enmanuel Jesus Dominguez Lamazares<br/>
      Jose Alejandro Lopez Rojas</h5><br/>
      <a className="conocenos" href="https://denmanuel795.wixsite.com/my-site-2">Conócenos</a>
      </div>
    </div>
  );
}

export default App;
