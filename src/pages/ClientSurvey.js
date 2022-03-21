import React from 'react';
import NavBar from '../components/NavBar';

class VIZ extends React.Component {
    render() {
      return <iframe src="https://public.domo.com/embed/pages/M8lBB" width="1248" height="1620" marginheight="0" marginwidth="0" frameborder="0"></iframe>
    }
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
                    <VIZ />;
                </div>
            </div>
        );
    }
}

export default ClientSurvey;