import React from 'react'
import { Icon, List } from 'semantic-ui-react'

export default function ProfileSettingsList({handleListItemClick,selectedIndex}) {
    return (
        <List>
        <List.Item
          onClick={() => handleListItemClick(0)}
          className={
            selectedIndex === 0
              ? "custom-list-item-profile active"
              : "custom-list-item-profile"
          }
        >
          <Icon name="user"></Icon> Profil
        </List.Item>
        <List.Item
          onClick={() => handleListItemClick(1)}
          className={
            selectedIndex === 1
              ? "custom-list-item-profile active"
              : "custom-list-item-profile"
          }
        >
          <Icon name="bell"></Icon> Bildirimler
        </List.Item>
        <List.Item
          onClick={() => handleListItemClick(2)}
          className={
            selectedIndex === 2
              ? "custom-list-item-profile active"
              : "custom-list-item-profile"
          }
        >
          <Icon name="clipboard"></Icon> Tercihler
        </List.Item>
      </List>
    )
}
