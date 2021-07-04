import React from "react";
import UserResumeList from '../../components/UserResumeList/UserResumeList'

import Navi from "../../layouts/Navi/Navi";
import { Container } from 'semantic-ui-react';
import { Route} from 'react-router-dom'
import Register from "../Register/Register";
import Homepage from "../Homepage/Homepage";
import Login from '../Login/Login';
import EmployerLogin from "../EmployerLogin/EmployerLogin";
import EmployerProfile from "../EmployerProfile/EmployerProfile";
import Favorites from "../Favorites/Favorites";
import JobAdvertisements from "../JobAdvertisements/JobAdvertisements";


export default function Dashboard() {
  return (
    <div>
      <Navi />
      <Container className="main">
        <Route exact path="/" component={Homepage}/>
      <Route exact path="/homepage" component={Homepage}/>
      <Route exact path="/userresumes" component={UserResumeList}/>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/loginemployer" component={EmployerLogin} />
      <Route exact path="/employerprofile" component={EmployerProfile} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/jobAdvertisements" component={JobAdvertisements} />

      </Container>  
    </div>
  );
}
