import React from 'react';
import NavBar from '../components/NavBar';

class CAL extends React.Component {
  render() {
    return <iframe src="https://airtable.com/embed/shrUeUoHKI6Tbowma?backgroundColor=purple&viewControls=on" width={1000} height={533} />;
  }
}

class ACTCAL extends React.Component {
    render() {
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