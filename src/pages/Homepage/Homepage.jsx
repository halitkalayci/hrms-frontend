import React from "react";
import JobAdvertisementList from "../../components/JobAdvertisementList/JobAdvertisementList";
import { Header,Button,Grid,Icon } from "semantic-ui-react";

export default function Homepage({ mobile }) {
  return (
    <div className="mt-10">
      <Grid>
        <Grid.Column width={12}>
        <Header as="h1" className="text-left">Gündemdeki İş İlanları</Header>
        </Grid.Column>
        <Grid.Column width={4}>
      <Button className="float-right text-left allJobs-btn">Tüm İş İlanlarına Git <Icon name="arrow right"></Icon></Button>
        </Grid.Column>
      </Grid>
      <JobAdvertisementList></JobAdvertisementList>
    </div>
  );
}
