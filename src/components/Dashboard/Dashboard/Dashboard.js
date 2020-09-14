import React from 'react';
import { connect } from 'react-redux'
import styled from '@emotion/styled'

const Container = styled.div`
   background-color: #232323;
   min-height: 100vh;
   & > * {
       color: white;
   }
`  

const Dashboard = (props) => {
    return (
        <Container>
            <h1>Hello Dashboard</h1>
            {console.log("Dashboard:", props)}
        </Container>
    )
}

const mapStateToProps = reduxState => {
    console.log("Dashboard/mapStateToProps", reduxState)
    return reduxState;
}

export default connect(mapStateToProps, {})(Dashboard);

// export default Dashboard