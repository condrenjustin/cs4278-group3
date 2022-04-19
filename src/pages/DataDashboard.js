/**
 * Group 3
 * Homework 3
 * Grant Bowlds (grant.f.bowlds@vanderbilt.edu) 
 * Donny Carr (donovan.e.carr@vanderbilt.edu) 
 * Justin Condren (justin.l.condren@vanderbilt.edu)
 * Skyler Grandel (skyler.h.grandel@vanderbilt.edu)
 */

import React from 'react';
import NavBar from '../components/NavBar';
import Airtable from 'airtable';
/** The data dashboard page. Displays statistics for KOACORE business relevant to the client */

class DataDashboard extends React.Component {

    state = {
        serviced: 0,
        provided: 0
    }

    componentDidMount = async() => {
        var x, y;
        // Airtable api call to get most recent entry

        var base = new Airtable({apiKey: 'keypmQe98NRiZBQcw'}).base('appECiA8jbyRdHrbu');
        base('CRM-Prospects').select({
            maxRecords: 1,
            view: 'Retrieve Most Recent'}).eachPage((records, fetchNextPage) => {
                records.forEach((record) => {
                    x = record.get('Venues').length;
                });

                fetchNextPage();
            }).then((err) => {
                if (err) { console.error(err); return; }
                this.setState({serviced:x})
                console.log(x);
            });
            
        base('CRM-Prospects').select({
            maxRecords: 1,
            view: 'Retrieve Most Recent'}).eachPage((records, fetchNextPage) => {
                records.forEach((record) => {
                    y = record.get('Test Count')[0];
                });

                fetchNextPage();
            }).then((err) => {
                if (err) { console.error(err); return; }
                this.setState({provided:y})
                console.log(y);
            });
    }

    render(){

        return(
            <div>
                <NavBar />
                <br></br>
                <h1 style={{color:"#ffffff"}}>Dashboard</h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width:'80%',
                    margin: 'auto',
                    marginTop: '80px'
                }}>
                    
                    <p style={{color:"#ffffff"}}> Thank you for considering KOACORE for your safety needs. We have worked with events ranging from Elton John to Coldplay, and we cannot wait to add you to the KOA family. In your region, we have serviced {this.state.serviced} clients and provided {this.state.provided} tests for fans, generating ${this.state.provided*40} in shared revenue. </p>
                </div>
            </div>
        );
    }
}

export default DataDashboard;

