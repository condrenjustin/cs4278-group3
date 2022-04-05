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
import {Form, Button, Alert, Spinner} from 'react-bootstrap';
import Airtable from 'airtable';

/**
 * This is the calendar page with two calendars: a sales calendar and a event calendar
 * The calendars are next to each other so users can see both calendars in the same view
 * It includes a Google Calendar integration
 */

class CAL extends React.Component {
  render() {
    /** Calendar for existing events */
    return (
      <>
      <iframe src="https://airtable.com/embed/shrUeUoHKI6Tbowma?backgroundColor=purple&viewControls=on" 
      width={1000} height={533} title="events calendar"/>
      </>
    );
  }
}

class ACTCAL extends React.Component {
    render() {
      /** Sales calendar */
      return (
        <>
        <iframe src="https://airtable.com/embed/shrFBCTmc1ADoYCEO?backgroundColor=purple&viewControls=on"
        width={1000} height={533} title="sales calendar"/>
        </>
      );
    }
  }

class Calendar extends React.Component {

  state = {
    //google info
    clientId: "",
    apiKey: "",
    discoveryDocs: [],
    scope: "",

    // state for Gcal form
    options: [], // list of clients that a user could be reminded about
    selectedOptions: [], // clients currently selected by user
    date: '', // date the user should be reminded
    openForm: false, // state to see if the form should be visible
    error: ''
  }

  /**
   * Functoin called on initial load it initialize state
   */
  componentDidMount = async() => {

    // get the data from airtable then assign it to this.state.options
    this.getData().then((arr) =>{
      this.setState({
        options: arr,

        // google api information
        clientId: "1075606334020-sdhvje80qvau18224tlqfb0g1gb5dqeb.apps.googleusercontent.com",
        apiKey: "AIzaSyDi6f8GTovPHez69kp77CvTSAEzSYBM__Q",
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: "https://www.googleapis.com/auth/calendar.events",
      });
    }).then(()=>{

      // debugging
      console.log("options: ", this.state.options);
      console.log(this.state.options[0]); 
    })
  }

  /**
   * Gets the required data from the database
   * @returns An array of strings with name, org, and email of all clients in the db
   */
  getData = async() => {
    var retArr = []; // array to hold values from db
    var base = new Airtable({apiKey: 'keypmQe98NRiZBQcw'}).base('appECiA8jbyRdHrbu'); // access db

    // from the CRM-Prospects table, access all entries
    base('CRM-Prospects').select({
      view: "All Contacts"
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
  
      // get the name, org, and email of each contact in the table and concat them into a string 
      // then append it to the array
      records.forEach((record) => {
        var name = record.get('Name & organization');
        var email = record.get('Email');

        if(name && email){ // if either field is undefined, don't add it
          retArr.push(name + ' (' + email + ')');
        }
      });
  
      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
  
    }).then((err) => {
      if (err) { console.error(err); return; }
      this.setState({openForm:true});
    });

    return retArr;
  }

  /**
   * Update the selectedOptions variable when user selects new clients
   * or when they want to remove a client from their selection
   * @param {event} e : state change event
   */
  onSelectedOptionsChange = (e) => {
    // this gets the item that was clicked in the multiselect form
    var selection = [].slice.call(e.target.selectedOptions).map(item => item.value)[0];

    // if it was already selected, remove it, otherwise, add it to the list of selected options
    if(this.state.selectedOptions.includes(selection)){
      this.setState({selectedOptions: this.state.selectedOptions.filter(e => e !== selection)});
    } else {
      this.state.selectedOptions.push(selection);
    }
  }

  /**
   * Gets the selectedOptions array as a formatted string for use in the Gcal event
   * @returns A formatted string
   */
  formatSelections = () => {
    var str = ''
    this.state.selectedOptions.forEach((e)=>{
      str = str.concat('\n', e);
    });

    str = str.concat('\n\nSend emails from templates at koacore.co')

    return str;
  }

  /**
   * On form submit, adds the info given to the user's Google Calendar
   * @param {event} e : form submit event
   * @returns void on invalid submit
   */
  handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if(this.state.selectedOptions.length <= 0 || this.state.date === ''){
      this.setState({error: 'Please indicate one or more clients and pick a date'});
      return;
    }

    var gapi = window.gapi; // access Google API

    // load client
    gapi.load('client:auth2', () => {
      gapi.client.load('calendar', 'v3', () => console.log('Client Loaded')) // load calendar api

      gapi.auth2.getAuthInstance().signIn() // access user profile
      .then(() => {
        
        //define the event we will post to their calendar
        var event = {
          'summary': 'Reach out to prospective clients',
          'description': 'This is a reminder to reach out to the following clients: ' + this.formatSelections(),
          'start': {
            'dateTime': this.state.date + 'T09:00:00-05:00', // set the event for 9 to 9:15 central time
          },
          'end': {
            'dateTime': this.state.date + 'T09:15:00-05:00',
          }
        }

        // add the event to the user's primary calendar
        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event,
        })

        // execute request and log the result
        request.execute(event => {
          console.log(event)
          window.open(event.htmlLink)
        })
      })
    })
  }

  /**
   * Renders the page
   * @returns the page info to render
   */
  render(){
      return(
          <div>
              <NavBar employee={true} />

              {this.state.error !== '' && <Alert variant="danger">{this.state.error}</Alert>}

              <h1 style={{color:"#ffffff"}}>Calendar</h1>
              <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
              }}>
                  <h2 style={{margin:"auto", color:"#ffffff"}}>Events</h2>
                  <h2 style={{margin:"auto", color:"#ffffff"}}>Sales</h2>
              </div>
              <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
              }}>
                  <CAL />
                  <p>&nbsp;</p>
                  <ACTCAL />
              </div>
              
              <h2 style={{margin:"auto", marginTop:"20px", marginBottom:"20px", color:"#ffffff"}}>Set a Google Calendar reminder to contact a client</h2>
              {this.state.openForm ? (
                <Form onSubmit={this.handleSubmit}>
    
                    <div style={{width:"80%", margin:'auto', display:'flex'}}>
    
                    <Form.Group className='mb-3' style={{width:"50%", margin:'auto'}}>
                      <Form.Label style={{color:"#ffffff"}}>Which clients do you want to contact?</Form.Label>
                      <Form.Control 
                      as="select" 
                      size='lg' 
                      multiple 
                      value={this.state.selectedOptions} 
                      onChange={this.onSelectedOptionsChange}
                      style={{height:'200px'}}>
                        {this.state.options.map(option => (
                          <option key={option} value={option} style={{marginBottom:'10px'}}>
                            {option.split('(')[0]}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
    
                    <Form.Group className='mb-3' style={{width:"50%", margin:'auto', marginTop:'0px', marginLeft:'5%'}}>
                      <Form.Label style={{color:"#ffffff"}}>When should you be reminded?</Form.Label>
                      <Form.Control
                      type="date"
                      size='lg'
                      value={this.state.date}
                      onChange={(e)=>this.setState({date:e.target.value})}
                      />
                    </Form.Group>
    
                    </div>
    
                    <Button variant="primary" type="submit" style={{marginBottom :'80px'}}>
                            Add to Google Calendar
                    </Button>
                  </Form>
              ) : <Spinner style={{marginBottom:'80px'}} animation="border" variant="light" size='lg' />}

          </div>
          
      );
  }
}

export default Calendar;