import React from 'react';
import NavBar from '../components/NavBar';

/**
 * The trade landing page ... 
 */

class TradeLanding extends React.Component {

    render(){
        return(
            <div>
                <NavBar />
                <br></br>
                <h1 style={{color:"#ffffff"}}>Trade Landing</h1>
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

export default TradeLanding;