import React from 'react';
import NavBar from '../components/NavBar';

/** The data dashboard page ... */

class VIZ extends React.Component {
    render() {
    return }
  }

class DataDashboard extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <br></br>
                <h1 style={{color:"#ffffff"}}>Data Dashboard</h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                </div>
            </div>
        );
    }
}

export default DataDashboard;