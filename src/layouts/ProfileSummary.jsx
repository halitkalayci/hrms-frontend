import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import JobPositionList from '../components/JobPositionList/JobPositionList'

export default function ProfileSummary() {
    return (
            <Dropdown item text="Profil">
              <Dropdown.Menu>
                <Dropdown.Item>Hesabım</Dropdown.Item>
                <Dropdown.Item>Çıkış Yap</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
    )
}
