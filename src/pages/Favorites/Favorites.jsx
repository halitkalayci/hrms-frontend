import React from "react";
import { useSelector } from "react-redux";
import { Grid, Header } from "semantic-ui-react";
import JobAdvertisementCard from "../../components/JobAdvertisementCard/JobAdvertisementCard";
import Loader from "../../components/Loader/Loader";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  return (
    <div className="mt-10">
      <Grid>
        <Grid.Column width={16}>
          <Header as="h1" className="text-left">
            Favori İş İlanları
          </Header>
        </Grid.Column>
      </Grid>
      {favorites.favoriteJobAds.loading ?  <Loader></Loader> :  (
        <Grid columns={2}>
          {favorites.favoriteJobAds.data.map((jobAd) => (
            <Grid.Column key={jobAd.id}>
              <JobAdvertisementCard jobAd={jobAd}></JobAdvertisementCard>
            </Grid.Column>
          ))}
        </Grid>
      )}
    </div>
  );
}
