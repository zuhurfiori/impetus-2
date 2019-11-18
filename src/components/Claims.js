import React from 'react';
import { Container, Button } from 'react-floating-action-button';
import { Link } from 'react-router-dom';
import "./claim.css";

const Claims = () => {
    
    return (
        <div>
            <table className='claims'>
                <tr>
                    <th>Claim Id</th>
                    <th>Status</th>
                    <th>Score</th>
                    <th>Value</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>City</th>
                    <th>Reported Date</th>
                </tr>
                <tr>
                    <td><Link to='/OpenClaim'>1001</Link></td>
                    <td>1001</td>
                    <td>1001</td>
                    <td>1001</td>
                    <td>1001</td>
                    <td>1001</td>
                    <td>1001</td>
                    <td>1001</td>
                </tr>
            </table>
            <Container>
                <Button tooltip="Calculate the score of claims"
                    onClick={() => alert('this is for calculate score')}>
                    Calculate
                </Button>
            </Container>
        </div>
    )
}

export default Claims;