import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { adminGetCompanies } from "../../../redux/baseReducer";
import styled from '@emotion/styled'

const Container = styled.div`
   background-color: #232323;
   min-height: 100vh;
   & > * {
       color: white;
   }
`  

const Dashboard = (props) => {
    // useEffect(() => {
        // props.adminGetCompanies()
    //         .then(() => console.log('company-list: success'))
    //         .catch(() => {
    //             console.log('company-list fail')
    //         })
    //     console.log("props in useEffect", props)
    //     // props.getUserBase()
    //     console.log("useEffect has run")
    // }, [])

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

export default connect(mapStateToProps, { adminGetCompanies })(Dashboard);

// export default Dashboard