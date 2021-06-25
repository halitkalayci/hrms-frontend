import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { format } from "date-fns";

export default function JobAdvertisementList() {
  const [jobAds, setJobAds] = useState([]);

  useEffect(() => {
    let jobAdsService = new JobAdvertisementService();
    jobAdsService.getJobAds().then((success) => setJobAds(success.data.data));
  }, []);

  return (
    <div>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Açıklaması</Table.HeaderCell>
            <Table.HeaderCell>Min. Maaş</Table.HeaderCell>
            <Table.HeaderCell>Max. Maaş</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAds.map((jobAd) => (
            <Table.Row key={jobAd.id}>
              <Table.Cell>{jobAd.jobDescription}</Table.Cell>
              <Table.Cell>{jobAd.minSalary}</Table.Cell>
              <Table.Cell>{jobAd.maxSalary}</Table.Cell>
              <Table.Cell>{jobAd.openPositionCount}</Table.Cell>
              <Table.Cell>{format(new Date(jobAd.lastApplyDate.replace("T", " ")),"dd.MM.yyyy HH:mm")}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
