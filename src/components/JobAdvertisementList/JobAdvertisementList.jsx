import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Grid } from "semantic-ui-react";
import JobAdvertisementCard from "../JobAdvertisementCard/JobAdvertisementCard";
import './JobAdvertisementList.css'
export default function JobAdvertisementList() {
  const [jobAds, setJobAds] = useState([]);

  useEffect(() => {
    let jobAdsService = new JobAdvertisementService();
    jobAdsService.getJobAds().then((success) => setJobAds(success.data.data));
  }, []);

  return (
      <Grid columns={2}>
        {jobAds.map(jobAd=>(
          <Grid.Column key={jobAd.id}>
            <JobAdvertisementCard jobAd={jobAd}></JobAdvertisementCard>
          </Grid.Column>
        ))}
      </Grid>
  );
}
