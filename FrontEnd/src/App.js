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
          <p><h3>Los negocios pequeños de la ciudad de Medellín desconocen las oportunidades para dar a conocer su negocio de manera virtual.</h3></p><img src="https://i.imgur.com/gIOTbGZ.png" alt="" height="300px" />
          <img src="https://i.imgur.com/gIOTbGZ.png" alt="" height="300px" /><p><h3>Permitenos brindarle a tu negocio más alcance y visibilidad a través de nuestro aplicativo mediante recursos virtuales</h3></p>
        </div>
      </div>
    </div>
  );
}

export default App;
