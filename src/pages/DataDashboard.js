/**
 * Group 3
 * 
 * Grant Bowlds (grant.f.bowlds@vanderbilt.edu) 
 * Donny Carr (donovan.e.carr@vanderbilt.edu) 
 * Justin Condren (justin.l.condren@vanderbilt.edu)
 * Skyler Grandel (skyler.h.grandel@vanderbilt.edu)
 */

import React from 'react';
import NavBar from '../components/NavBar';
import Airtable from 'airtable';
import CountUp from 'react-countup';
/** The data dashboard page. Displays statistics for KOACORE business relevant to the client */

class DataDashboard extends React.Component {

    state = {
        serviced: 0,
        provided: 0
    }

    /**
     * Function called on initial load it initialize state
     */
    componentDidMount = async() => {
        var x, y;
        // Airtable api call to get most recent entry

        var base = new Airtable({apiKey: process.env.REACT_APP_ATKEY}).base('appECiA8jbyRdHrbu');
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

    /**
     * Renders the page
     * @returns the page info to render
     */
    render(){

        return(
            <div>
                <NavBar />
                <h1 style={{color:"#ffffff"}}>KOA in your Region</h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width:'100%',
                    margin: 'auto',
                    marginTop: '40px',
                    marginBottom: '40px',
                    fontSize: "80%"
                }}>
                    <p style={{color:"#ffffff"}}> Thank you for considering KOA for your safety needs. We have worked with events ranging from Elton John to Coldplay, and we cannot wait to add you to the family. In your region, we have:</p>
                </div>
                <br></br>
                <div style={{display:"flex", width:"80%", margin:"auto"}}>
                    <div style={{margin:"auto"}}>
                        <p style={{fontSize:"500%", color:"#ffffff"}}> <CountUp delay={0.5} end={(this.state.serviced)} /></p> <p style={{fontSize:"100%", fontStyle: 'italic', color:"#ffffff"}}> venues serviced </p>
                    </div>

                    <div style={{margin:"auto"}}>
                        <p style={{fontSize:"500%", color:"#ffffff"}}> <CountUp delay={1} end={(this.state.provided)} /></p> <p style={{fontSize:"100%", fontStyle: 'italic', color:"#ffffff"}}> fans tested </p>
                    </div>
                    
                    <div style={{margin:"auto"}}>
                        <p style={{fontSize:"500%", color:"#ffffff"}}> <CountUp delay={1.5} end={100} />%</p> <p style={{fontSize:"100%", fontStyle: 'italic', color:"#ffffff"}}> client satisfaction </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataDashboard;

