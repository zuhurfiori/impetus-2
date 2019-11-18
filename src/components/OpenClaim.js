import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import ClaimDetails from './ClaimDetails.js';
import Workshop from './Workshop.js';
import Location from './Location.js';
import Dropdown from './HamburgerB.js';
import { Link } from 'react-router-dom';
import "./openedClaim.css";






const OpenClaim = () => {


    return (

        <div className="row">
            <div className="OpenedClaim">

                <button className="claimId">
                    <button className="openedClaimId"> 1001</button>
                    <Link to='/Claims'>
                        <p class="x">X</p>
                    </Link></button>
            </div>
            <span className="tab">
                <Tabs>
                    <TabList>
                        <Dropdown />
                        <Tab><h4>Claim Details</h4></Tab>
                        <Tab><h4>Workshop</h4></Tab>
                        <Tab><h4>Location View</h4></Tab>
                    </TabList>

                    <TabPanel>
                        <ClaimDetails />
                    </TabPanel>
                    <TabPanel>
                        <Workshop />
                    </TabPanel>
                    <TabPanel>
                        <Location />
                    </TabPanel>
                </Tabs>
            </span>
        </div>
    )

}

export default OpenClaim;


