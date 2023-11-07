import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Formulario from './Formulario'; // Asegúrate de importar tu componente de formulario
import TarjetaPresentacion from './TarjetaPresentacion'; // Asegúrate de importar el componente de tarjeta de presentación

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/formulario" component={Formulario} />
        <Route path="/tarjeta" component={TarjetaPresentacion} />
      </Switch>
    </Router>
  );
}

export default App;


