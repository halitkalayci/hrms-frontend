import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import '../App.css';
import ProfileSummary from "./ProfileSummary";
export default function Navi() {
  return (
    <div>
      <Menu fixed="top" inverted size="large">
        <Container>
          <Menu.Item name="Ana Sayfa" />
          <Menu.Item name="Cvlerim" />

          <Menu.Menu position="right">
            <ProfileSummary></ProfileSummary>

            <Menu.Item>
              <Button primary className="mr-3">Giriş Yap</Button>
              <Button primary>Kayıt Ol</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
