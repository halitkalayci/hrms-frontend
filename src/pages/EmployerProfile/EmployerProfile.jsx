import React, { useState } from "react";
import {
  Card,
  Grid,
  Header,
} from "semantic-ui-react";
import "./EmployerProfile.css";
import ProfileSettingsList from "../../components/ProfileSettingList/ProfileSettingsList";
import EmployerEditProfile from "../../components/EmployerEditProfile/EmployerEditProfile";
export default function EmployerProfile() {
  const [selectedIndex, setselectedIndex] = useState(0);

  const handleListItemClick = (i) => {
    setselectedIndex(i);
  };

  return (
    <div className="mt-10">
      <Grid>
        <Grid.Column width={16}>
          <Card className="custom-card profile-card">
            <Card.Content>
              <Grid>
                <Grid.Column width={4}>
                  <Header as="h3">Ayarlar</Header>
                  <ProfileSettingsList
                    handleListItemClick={handleListItemClick}
                    selectedIndex={selectedIndex}
                  ></ProfileSettingsList>
                </Grid.Column>
                <Grid.Column className="text-left" width={12}>
                  {selectedIndex === 0 ? (
                    <EmployerEditProfile></EmployerEditProfile>
                  ) : selectedIndex === 1 ? (
                    <div>Bildirim Ayarları Buraya Gelecek</div>
                  ) : (
                    <div>Tercih Ayarları Buraya Gelecek</div>
                  )}
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
}
