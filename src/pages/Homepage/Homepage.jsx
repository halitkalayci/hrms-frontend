import React from "react";
import { Menu, Grid, Header, Button, Icon, Container } from "semantic-ui-react";
import JobPositionList from "../../components/JobPositionList/JobPositionList";
import JobAdvertisementList from "../../components/JobAdvertisementList/JobAdvertisementList";
export default function Homepage({ mobile }) {

  return (
    <div className="mt-4">
      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width="4">
            <JobPositionList></JobPositionList>
          </Grid.Column>
          <Grid.Column width="12">
            <JobAdvertisementList></JobAdvertisementList>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
