import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { adminGetCompanies } from "../../../redux/baseReducer";
import styled from '@emotion/styled'
import axios from 'axios'

const Container = styled.div`
   background-color: #232323;
   min-height: 100vh;
   & > * {
       color: white;
   }
`  

const Dashboard = (props) => {
    useEffect(() => {
        axios.get('/admin/companylist').then(res => {
            console.log(res.data)
            props.adminGetCompanies(res.data)
            // return res.data
            }).catch(() => {
                console.log('company-list fail')
            })
            // .then(() => console.log('company-list: success'))
        console.log("props in useEffect", props)
    //     // props.getUserBase()
        console.log("useEffect has run in Dashboard")
    }, [props.companies])

    const companies = axios.get('/admin/companylist').then(res => {
        console.log(res.data)
        return res.data
    })
    console.log("AXIOS CALL FOR COMPANIES", companies)

    return (
        <Container>
            <h1>Dashboard</h1>
            {console.log("Dashboard:", props)}
            <h2>{ companies[0] }</h2>
        </Container>
    )
}

const mapStateToProps = reduxState => {
    console.log("Dashboard/mapStateToProps", reduxState)
    return reduxState;
}

export default connect(mapStateToProps, { adminGetCompanies })(Dashboard);

// export default Dashboard