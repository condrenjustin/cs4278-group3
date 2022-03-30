import React from 'react';
import NavBar from '../components/NavBar';

/**
 * This is the calendar page with two calendars: a sales calendar and a event calendar
 * The calendars are next to each other so users can see both calendars in the same view
 * It includes a Google Calendar integration
 */

class CAL extends React.Component {
  render() {
    /** Calendar for existing events */
    return <iframe src="https://airtable.com/embed/shrUeUoHKI6Tbowma?backgroundColor=purple&viewControls=on" width={1000} height={533} />;
  }
}

class ACTCAL extends React.Component {
    render() {
      /** Sales calendar */
      return <iframe src="https://airtable.com/embed/shrFBCTmc1ADoYCEO?backgroundColor=purple&viewControls=on" width={1000} height={533} />;
    }
  }

class Calendar extends React.Component {
    render(){
        return(
            <div>
                <NavBar employee={true} />
                <h1 style={{color:"#ffffff"}}>Calendar</h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <CAL />;
                    <ACTCAL />;
                </div>
            </div>
            
        );
    }
}

export default Calendar;