import React from "react";
import JobAdvertisementList from "../../components/JobAdvertisementList/JobAdvertisementList";
export default function Homepage({ mobile }) {
  return (
    <div className="mt-4">
            <JobAdvertisementList></JobAdvertisementList>
    </div>
  );
}
