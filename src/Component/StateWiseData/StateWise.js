import React, { useEffect, useState } from "react";
import "./StateWise.css";

const StateWise = () => {
  const [getData, setGetData] = useState([]);

  const getStateData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const data = await res.json();
    // console.log(data.statewise);
    setGetData(data.statewise);
  };

  useEffect(() => {
    getStateData();
  }, []);

  var count = 1;
  return (
    <>
      <div className='text-center p-4'>
        <h2>INDIA COVID-19 CORONAVIRUS STATEWISE TRACKER</h2>
      </div>
      <div className='table-responsive'>
        <table className='table table-hover table-striped table-bordered text-center '>
          <thead className='bg-success text-light'>
            <tr>
              <th>Sr No.</th>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Death</th>
              <th>Active</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((data, ind) => {
              return (
                <tr key={ind}>
                  <th>{count++}</th>
                  <th>{data.state}</th>
                  <td>{data.confirmed}</td>
                  <td>{data.recovered}</td>
                  <td>{data.deaths}</td>
                  <td>{data.active}</td>
                  <td>{data.lastupdatedtime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
    </>
  );
};

export default StateWise;
