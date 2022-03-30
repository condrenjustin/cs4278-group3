import React from 'react';
import NavBar from '../components/NavBar';

/**
 * The client survey page gathers information from potential clients to help find the best services suited for them
 */

class Survey extends React.Component {
    render() {
        /** Client survey component imported from airtable */
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