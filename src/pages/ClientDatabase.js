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

/**
 * The client database page is meant to serve as a starting point for sales reps to send emails to existing and perspective clients
 */

class DB extends React.Component {
  render() {
      /** Client database imported from airtable */
    return <iframe src="https://airtable.com/embed/shrdx2nlN1yXf8LAW?backgroundColor=purple&viewControls=on" width={1000} height={533} />;
  }
}

class ClientDatabase extends React.Component {
    render(){
        return(
            <div>
                <NavBar employee={true} />
                <h1 style={{color:"#ffffff"}}>Client Database</h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <DB />;
                </div>
            </div>
            
        );
    }
}

export default ClientDatabase;