import React from 'react';
import NavBar from '../components/NavBar';

/**
 * Landing page for clients interested in trade services 
 */
 class SurveyTrade extends React.Component {
    render() {
        /** Client survey component imported from airtable */
    return <iframe class="airtable-embed" src="https://airtable.com/embed/shrpyuUQUkvmagP8j?backgroundColor=purple" width={1000} height={533} ></iframe>    }
  }

class TradeLanding extends React.Component {

    render(){
        return(
            <div>
                <NavBar />
                <br></br>
                <h1 style={{color:"#ffffff"}}>Trade Form</h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <SurveyTrade />;
                </div>
            </div>
        );
    }
}

export default TradeLanding;