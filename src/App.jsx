import "./App.css";
import Props from './components/props'



function App() {
  return (
    <div className="App row container m-auto p-5">
      <Props 
      img="https://www.themoviedb.org/t/p/w220_and_h330_face/oCK6fykCZUQjTJG4IDhfWCxcXqG.jpg"
      title="Titanes"
      text="Titanes sigue a Robin mientras surge de las sombras de Gotham para liderar a un grupo de héroes: Raven, Starfire y Chico Bestia. La pandilla recién formada de jóvenes superhéroes une fuerzas para luchar contra sus propios demonios y salvar el planeta. Solos son vulnerables, pero juntos son Titanes."
      />
       <Props 
      img="https://www.themoviedb.org/t/p/w220_and_h330_face/fPJWlhXA2VXf4MlQ3JenVsz1iba.jpg"
      title="El Escuadrón Suicida"
      text="Un grupo de super villanos se encuentran encerrados en Belle Reve, una prisión de alta seguridad con la tasa de mortalidad más alta de Estados Unidos. Para salir de allí harán cualquier cosa, incluso unirse al grupo Task Force X, dedicado a llevar a cabo misiones suicidas bajo las órdenes de Amanda Waller. Fuertemente armados son enviados a la isla Corto Maltese, una jungla repleta de enemigos."
      />
       <Props 
      img="https://www.themoviedb.org/t/p/w220_and_h330_face/17siH6wJRQ2jZiqz9BWUhy1UtZ.jpg"
      title="Reminiscencia"
      text="Nicolas Bannister se dedica al negocio de revivir los recuerdos de las personas, un día llega una mujer que quiere recordar donde dejo sus llaves, pronto iniciara un romance apasionado entre ellos dos, pero luego esta mujer desaparece y Nicolas hará todo lo posible para encontrarla."
      />
    </div>
  );
}

export default App;
