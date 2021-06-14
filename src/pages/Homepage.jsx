import React from "react";
import { Grid } from "semantic-ui-react";
import JobAdvertisementList from "../components/JobAdvertisementList/JobAdvertisementList";
import JobPositionList from "../components/JobPositionList/JobPositionList";
import UserResumeList from "../components/UserResumeList/UserResumeList";

export default function Homepage() {
  return (
    <div>
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
