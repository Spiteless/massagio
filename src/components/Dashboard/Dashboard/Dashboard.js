import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { adminGetCompanies } from "../../../redux/baseReducer";
import styled from '@emotion/styled';
import axios from 'axios';
import Admin from '../Admin/Admin';

const Container = styled.div`
   background-color: #232323;
   min-height: 100vh;
   & > * {
       color: white;
   }
`  

const Company = (props) => {
    const { company_name } = props.company
    return (
    <h2>{company_name}</h2>
)}
  
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

    // const companies = axios.get('/admin/companylist').then(res => {
    //     console.log(res.data)
    //     return res.data
    // })

    let mappedCompany = props.base.companies.map( el => {
        return (<Company company={el}/>)
    })

    return (
        <Container>
            { (props.auth.user.isAdmin)
                ? <Admin/>
                : null }
        </Container>
    )
}

const mapStateToProps = reduxState => {
    console.log("Dashboard/mapStateToProps", reduxState)
    return reduxState;
}

export default connect(mapStateToProps, { adminGetCompanies })(Dashboard);

// export default Dashboard