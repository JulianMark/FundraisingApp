import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Campaign = () => {
    const[campaign, setCampaign] = useState([]);

    useEffect(() => {
        let request = {'idCampaign': 1};
        async function fetchData() {
        await axios
        .post('http://localhost:9094//employee/manager/obtainStatusCampaign'
        ,request).then(response => {
            setCampaign(response.data.employeeList);
        }).catch(e => {
            console.log(e);
        })
        }
        fetchData();
    }, []);

    return (
        <table className='table'>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Cant. Donaciones</th>
                  <th>Total Donaciones</th>
                  <th>Hs. Prod.</th>
                  <th>Hs. No Prod.</th>
                  <th>Prom. Media</th>
                  <th>Prom. Cant</th>
                  <th>Ingreso</th>
                  <th>Egreso</th>
                </tr>
              </thead>
              <tbody>
                {campaign.map(employee =>(
                    <tr key={ employee.id }>
                        <td>{ employee.name }</td>
                        <td>{ employee.lastName }</td>
                        <td>{ employee.totalDonations }</td>
                        <td>{ employee.totalAmountDonations }</td>
                        <td>{ employee.totalProductiveHours }</td>
                        <td>{ employee.totalNonProductiveHours }</td>
                        <td>{ employee.totalAverageCatchment }</td>
                        <td>{ employee.totalAverageAmount }</td>
                        <td>{ employee.initialDate }</td>
                        <td>{ employee.finalDate }</td>
                    </tr>  
                )) }
              </tbody>
        </table>
    );  
};

export default Campaign;