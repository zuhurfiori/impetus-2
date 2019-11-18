import React from 'react';
import { Link } from 'react-router-dom';
import "./mainBase.css";


const MainBase = () => {
    return (

        <nav className='MainBase'>


            <ul className='navBar'>

                <h3 className='impetus'>IMPETUS</h3>
                <div className='tagline'>
                    <h5>Automobile Insurance Fraud </h5>
                    <h5>Detection and Analysis System</h5>
                </div>
                <div className='navLinks'>
                    <Link to='/search'>
                        <li className='link'><p>SEARCH</p></li>
                    </Link>
                    <Link to='/Cases'>
                        <li className='link'><p>CASES</p></li>
                    </Link>
                    <Link to='/Alerts'>
                        <li className='link'><p>ALERTS</p></li>
                    </Link>
                    <Link to='/Claims'>
                        <li className='link'><p>CLAIMS</p></li>
                    </Link>
                    <Link to='/'>
                        <li className='link'><p>HOME</p></li>
                    </Link>


                </div>



            </ul>



        </nav>
    )
}

export default MainBase;