import React from 'react'
import './App.css';
import{
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div className="imagen-header">
          <Link to="/" exact>
            <img src="https://i.imgur.com/LMSTbbQ.png" alt="" href="/" height="80px"></img>
          </Link>
        </div>
        <img src="https://i.imgur.com/431dd1j.png" alt="" height="80px"></img>
        <div className="header">
          <Link to="/login" exact><button className="botonheader">Iniciar Sesión</button></Link>|
          <Link to="/signup" exact><button className="botonheader">Registrarse</button></Link>
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
        <h5>Proyecto creado por:<br />
          Enmanuel Jesus Dominguez Lamazares<br />
          Jose Alejandro Lopez Rojas</h5><br />
        <a className="conocenos" href="https://denmanuel795.wixsite.com/my-site-2">Conócenos</a>
      </div>
    </div>
    </Router>
  );
}

export default App;
