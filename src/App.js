import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';
import Homepage from './pages/Homepage';
import { Route } from 'react-router'
import UserResumeList from './components/UserResumeList/UserResumeList';
import Register from './pages/Register/Register';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right"/>
      <Navi />
      <Container className="main">
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/homepage" component={Homepage}/>
      <Route exact path="/userresumes" component={UserResumeList}/>
      <Route exact path="/register" component={Register} />
      </Container>
    </div>
  );
}

export default App;
