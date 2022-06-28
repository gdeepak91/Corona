import React, { useEffect, useState } from "react";
import "./Covid.css";
const Covid = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const data = await res.json();
      // console.log(res);
      // console.log(data.statewise[0]);
      setData(data.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section>
        <div className='p-4 text-center'>
          <h1 style={{ transition: "2s,ease-in-out" }}>
            <p className='circle'></p>&nbsp;Live
          </h1>
          <h2>COVID19 CORONAVIRUS TRACKER</h2>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-10 col-md-4 shd'>
              <div className='card shadow-lg'>
                <div className='card-body bg-primary text-light'>
                  <p className='text-center h5'>
                    <span style={{ fontSize: "10px" }}>OUR</span>&nbsp;COUNTRY
                  </p>
                  <p className='text-center h2 pb-4 pt-2'>INDIA</p>
                </div>
              </div>
            </div>
            <div className='col-10 col-md-4'>
              <div className='card shadow-lg'>
                <div className='card-body bg-danger text-light'>
                  <p className='text-center h5'>
                    <span style={{ fontSize: "10px" }}>TOTAL</span>
                    &nbsp;RECOVERED
                  </p>
                  <p className='text-center h2 pb-4 pt-2'>{data.recovered}</p>
                </div>
              </div>
            </div>
            <div className='col-10 col-md-4'>
              <div className='card shadow-lg'>
                <div className='card-body bg-secondary text-light'>
                  <p className='text-center h5'>
                    <span style={{ fontSize: "10px" }}>TOTAL</span>
                    &nbsp;CONFIRMED
                  </p>
                  <p className='text-center h2 pb-4 pt-2'>{data.confirmed}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-10 col-md-4'>
              <div className='card shadow-lg'>
                <div className='card-body bg-warning text-light'>
                  <p className='text-center h5'>
                    <span style={{ fontSize: "10px" }}>TOTAL</span>&nbsp;DEATH
                  </p>
                  <p className='text-center h2 pb-4 pt-2'>{data.deaths}</p>
                </div>
              </div>
            </div>
            <div className='col-10 col-md-4'>
              <div className='card shadow-lg'>
                <div className='card-body bg-primary text-light'>
                  <p className='text-center h5'>
                    <span style={{ fontSize: "10px" }}>TOTAL</span>
                    &nbsp;ACTIVE
                  </p>
                  <p className='text-center h2 pb-4 pt-2'>{data.active}</p>
                </div>
              </div>
            </div>
            <div className='col-10 col-md-4'>
              <div className='card shadow-lg'>
                <div className='card-body bg-danger text-light'>
                  <p className='text-center h5'>
                    <span style={{ fontSize: "10px" }}>LAST</span>
                    &nbsp;UPDATED
                  </p>
                  <p className='text-center h2 pb-4 pt-2'>
                    {data.lastupdatedtime}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-10 col-md-4'>
              <div className='card shadow-lg'>
                <div className='card-body bg-dark text-light'>
                  <p className='text-center h5'>
                    <span style={{ fontSize: "10px" }}>TOTAL</span>&nbsp;DEATH
                    DELTA
                  </p>
                  <p className='text-center h2 pb-4 pt-2'>{data.deltadeaths}</p>
                </div>
              </div>
            </div>
            <div className='col-10 col-md-4'>
              <div className='card shadow-lg'>
                <div className='card-body bg-warning text-light'>
                  <p className='text-center h5'>
                    <span style={{ fontSize: "10px" }}>TOTAL</span>
                    &nbsp;RECOVERED DELTA
                  </p>
                  <p className='text-center h2 pb-4 pt-2'>
                    {data.deltarecovered}
                  </p>
                </div>
              </div>
            </div>
            <div className='col-10 col-md-4'>
              <div className='card shadow-lg'>
                <div className='card-body bg-secondary text-light'>
                  <p className='text-center h5'>
                    <span style={{ fontSize: "10px" }}>TOTAL</span>
                    &nbsp;CONFIRMED DELTA
                  </p>
                  <p className='text-center h2 pb-4 pt-2'>
                    {data.deltaconfirmed}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Covid;
