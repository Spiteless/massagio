import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


const Company = (props) => {
    const { company_url_slug, company_name } = props.company
    return (
        <Link to={`${company_url_slug}`}>
            <h2>{company_name}</h2>
        </Link>
    )
}

const Admin = (props) => {
    let mappedCompany = props.base.companies.map(el => {
        return (<Company company={el} />)
    })

    return (
        <div>
            <h1>ADMIN</h1>
            {/* <h2>{JSON.stringify(props)}</h2> */}
            { mappedCompany }
        </div>
    )
}

const mapStateToProps = reduxState => {
    return reduxState;
}

export default connect(mapStateToProps, {})(Admin);