import React from 'react';
import NavBar from '../components/NavBar';

class DB extends React.Component {
  render() {
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