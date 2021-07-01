import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react'
import { signOut } from '../../store/actions/authActions';
import { clearEmployerData } from '../../store/actions/employerActions';
import './EmployerSummary.css'

export default function EmployerSummary({companyName}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogoutClick = () => {
        dispatch(signOut());
        dispatch(clearEmployerData());
        history.push("/loginemployer");
    }
    return (
             <Dropdown item text={`${companyName}`}>
              <Dropdown.Menu>
               <Dropdown.Item>İş İlanlarım</Dropdown.Item>
                <Dropdown.Item as={NavLink} to={`/employerprofile`}>Hesabım</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLogoutClick()}>Çıkış Yap</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
    )
}
