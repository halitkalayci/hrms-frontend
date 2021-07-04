import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Pagination, Grid, Card, Dropdown, Header } from "semantic-ui-react";
import JobAdvertisementCard from "../../components/JobAdvertisementCard/JobAdvertisementCard";
import "./JobAdvertisement.css";
export default function JobAdvertisements() {
  const [jobAdsWithPaging, setjobAdsWithPaging] = useState({});
  const [page, setPage] = useState(1);
  const [listSize, setlistSize] = useState(10);
  useEffect(() => {
    getJobAds();
  }, [page, listSize]);

  const handlePageChange = (e, b) => {
    console.log(b);
    console.log(b.activePage);
    setPage(b.activePage);
  };

  const getJobAds = () => {
    let jobAdService = new JobAdvertisementService();
    jobAdService.getJobAdsWithPaging(page, listSize).then((response) => {
      setjobAdsWithPaging(response.data.data);
    });
  };

  const sizeOptions = [
    {
      key: "1",
      text: "1",
      value: 1,
    },
    {
      key: "10",
      text: "10",
      value: 10,
    },
    {
      key: "20",
      text: "20",
      value: 20,
    },
    {
      key: "50",
      text: "50",
      value: 50,
    },
    {
      key: "100",
      text: "100",
      value: 100,
    },
  ];
  const handleDropdownChange = (e, { value }) => {
    setlistSize(value);
    setPage(1);
  };
  return (
    <div className="mt-10">
      {jobAdsWithPaging.jobAdvertisements == undefined ? null : (
        <div>
          <Grid>
            <Grid.Column width={16}>
              <Card className="w-100">
                <Card.Content>
                  <Grid>
                    <Grid.Column width={8} className="text-left">
                      <Header as="h1"> İş İlanları </Header>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Header as="h5" className="d-inline text-right">
                        {" "}
                        Sayfa Başı İlan{" "}
                      </Header>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Dropdown
                        onChange={(e, d) => handleDropdownChange(e, d)}
                        className="d-inline"
                        placeholder="10"
                        fluid
                        selection
                        options={sizeOptions}
                        defaultValue="10"
                      />
                    </Grid.Column>
                  </Grid>
                </Card.Content>
              </Card>
            </Grid.Column>
            {jobAdsWithPaging.jobAdvertisements.map((jobAd) => (
              <Grid.Column width={8}>
                <JobAdvertisementCard jobAd={jobAd}></JobAdvertisementCard>
              </Grid.Column>
            ))}
            <Grid.Column width={16}>
              <Pagination
                firstItem={null}
                lastItem={null}
                onPageChange={(e, b) => handlePageChange(e, b)}
                defaultActivePage={page}
                totalPages={jobAdsWithPaging.totalPages}
              />
            </Grid.Column>
          </Grid>
        </div>
      )}
    </div>
  );
}
