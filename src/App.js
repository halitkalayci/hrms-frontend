import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';
import Homepage from './pages/Homepage';
function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
      <Homepage></Homepage>
      </Container>
    </div>
  );
}

export default App;
