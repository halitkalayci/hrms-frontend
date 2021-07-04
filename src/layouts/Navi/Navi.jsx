import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Dropdown, DropdownDivider, Menu } from "semantic-ui-react";
import EmployerSummary from "../EmployerSummary/EmployerSummary";
import ProfileSummary from "../ProfileSummary";
import "./Navi.css";
import logo from '../../assets/images/logo.png';

export default function Navi() {
  const { authState } = useSelector((state) => state.auth);
  return (
    <div>
      <Menu fixed="top" size="large">
        <Menu.Item>
          <img
            alt="logo"
            src={logo}
          />
        </Menu.Item>
        <Menu.Item as={NavLink} to={`/homepage`} name="Ana Sayfa" />
        <Menu.Item as={NavLink} to={`/favorites`} name="Favoriler" />
        <Menu.Item as={NavLink} to={`/jobAdvertisements`} name="İş İlanları" />
        <Menu.Item as={NavLink} to={`/blablabla`} name="Akış" />

        {authState.authenticated? 
          (authState.type == 1 ? (
            <Menu.Menu position="right">
            <ProfileSummary
              firstName={authState.user.firstName}
              lastName={authState.user.lastName}
            ></ProfileSummary>
          </Menu.Menu>
          ): (authState.type==2 ? 
            <Menu.Menu position="right">
             <EmployerSummary companyName={authState.user.companyName}></EmployerSummary>
          </Menu.Menu> : <div></div>))
         : (
          <Menu.Menu position="right">
            <Menu.Item>
              <Button basic primary className="mr-3" as={NavLink} to={`/login`}>
                Giriş Yap
              </Button>
              <Button basic primary as={NavLink} to={`/register`}>
                Kayıt Ol
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Dropdown className="dropdown-custom" button color="red"  text="İş Veren">
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to={`/loginemployer`}>Giriş Yap</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to={`/loginemployer`}>Kayıt Başvurusu</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    </div>
  );
}
