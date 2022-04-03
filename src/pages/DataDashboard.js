import React from 'react';
import NavBar from '../components/NavBar';
import Airtable from 'airtable';
/** The data dashboard page. Displays statistics for KOACORE business relevant to the client */





class DataDashboard extends React.Component {
    render(){
        var x, y;
        // Airtable api call to get most recent entry

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keypmQe98NRiZBQcw'}).base('appECiA8jbyRdHrbu');
        base('CRM-Prospects').select({
            maxRecords: 1,
            view: 'Retrieve Most Recent'}).firstPage(function(err, records) {
                if (err) { console.error(err); return; }
                records.forEach(function(record) {
                    x = record.get('Venues');
                });
            });
            
        base('CRM-Prospects').select({
            maxRecords: 1,
            view: 'Retrieve Most Recent'}).firstPage(function(err, records) {
                if (err) { console.error(err); return; }
                records.forEach(function(record) {
                    y = record.get('Test Count');
                });
            });
        

        return(
            <div>
                <NavBar />
                <br></br>
                <h1 style={{color:"#ffffff"}}></h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    
                    <p style={{color:"#ffffff"}}> Thank you for considering KOACORE for your safety needs. We have worked with events ranging from Elton John to Coldplay, and we cannot wait to add you to the KOA family. In your region, we have serviced {x} and provided {y} tests for fans, generating ${y*40} in shared revenue. </p>
                </div>
            </div>
        );
    }
}

export default DataDashboard;

