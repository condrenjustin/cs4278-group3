import React from 'react';
import NavBar from '../components/NavBar';

class Survey extends React.Component {
    render() {
    return <iframe class="airtable-embed" src="https://airtable.com/embed/shrVG86TmxXW4oF3M?backgroundColor=purple" width={1000} height={533} ></iframe>    }
  }

class ClientSurvey extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <br></br>
                <h1 style={{color:"#ffffff"}}>Client Survey</h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Survey />;
                </div>
            </div>
        );
    }
}

export default ClientSurvey;