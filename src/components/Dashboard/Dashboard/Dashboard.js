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

const Company = (props) => {
    const { company_name } = props.company
    return (
    <h2>{company_name}</h2>
)}

function Item(props) {
    return <li>{props.message}</li>;
  }
  
  function TodoList() {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    return (
      <ul>
        {todos.map((message) => <Item key={message} message={message} />)}
      </ul>
    );
  }

const Thing = (props) => {

    return <h1>THIS IS THING</h1>
}

  
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

    let mappedCompany = props.base.companies.map( el => {
        return (<Company company={el}/>)
    })

    return (
        <Container>
            <h1>Dashboard</h1>
            <h2>{ JSON.stringify(props.base) }</h2>
            { mappedCompany }
            <Thing/>
        </Container>
    )
}

const mapStateToProps = reduxState => {
    console.log("Dashboard/mapStateToProps", reduxState)
    return reduxState;
}

export default connect(mapStateToProps, { adminGetCompanies })(Dashboard);

// export default Dashboard