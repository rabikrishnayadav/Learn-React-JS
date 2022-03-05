import React, { useState, useEffect } from 'react';
import './Covid.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Covid = () => {

    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try{
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        setData.apply(actualData.statewise[0]);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

  return (
    <>
        <section>
            <div className="main-div-api pt-4 text-center">
                <h1>🔴 Live</h1>
                <br />
                <h2 className='text-uppercase'>Covid-19 Tracker</h2>
                <ul>
                    <li className="card bg-primary">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name pt-3">
                                    <span> OUR </span>
                                    COUNTRY
                                </p>
                                <p className="card_total card_small">
                                    INDIA
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="card bg-secondary">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name pt-3">
                                    <span> TOTAL </span>
                                    RECOVERED
                                </p>
                                <p className="card_total card_small">
                                    {data.recovered}
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="card bg-warning">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name pt-3">
                                    <span> TOTAL </span>
                                    CONFIRMED
                                </p>
                                <p className="card_total card_small">
                                    {data.confirmed}
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="card bg-danger">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name pt-3">
                                    <span> TOTAL </span>
                                    DEATHS
                                </p>
                                <p className="card_total card_small">
                                    {data.deaths}
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="card bg-dark">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name pt-3">
                                    <span> TOTAL </span>
                                    ACTIVE
                                </p>
                                <p className="card_total card_small">
                                    {data.active}
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="card bg-info">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name pt-3">
                                    <span> LAST </span>
                                    UPDATED
                                </p>
                                <p className="card_total card_small">
                                    {data.lastupdatetime}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </>
  );
};

export default Covid;