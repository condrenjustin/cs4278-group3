import React from 'react';
import NavBar from '../components/NavBar';
import Airtable from 'airtable';
/** The data dashboard page ... */
let venues, count;

// Airtable api call to get most recent entry
function getLocation(){
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keypmQe98NRiZBQcw'}).base('appECiA8jbyRdHrbu');
    base('CRM-Prospects').select({
        // Selecting the first records in Contacts:
        maxRecords: 1,
        view: "Retrieve Most Recent"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
            venues = record.get("Venues");
            count = record.get("Test Count");
        });

    }, function done(err) {
        if (err) { console.error(err); return; }
    });
}



class DataDashboard extends React.Component {
    getLocation();
    render(){
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
                    <p style={{color:"#ffffff"}}>{"Thank you for considering KOACORE for your safety needs. We have worked with events ranging from Elton John to Coldplay, and we cannot wait to add you to the KOA family. In your region, we have serviced " + venues + " and provided " + count + " tests for fans, generating $" + count * 40 + " in shared revenue."} </p>
                </div>
            </div>
        );
    }
}

export default DataDashboard;