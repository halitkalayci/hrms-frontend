import React from 'react'
import { useDispatch } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { signOut } from '../store/actions/authActions';

export default function ProfileSummary({firstName,lastName}) {
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
      dispatch(signOut());
  }
    return (
            <Dropdown item text={`${firstName} ${lastName}`}>
              <Dropdown.Menu>
                <Dropdown.Item>Hesabım</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLogoutClick()}>Çıkış Yap</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
    )
}
