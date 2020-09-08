import React from 'react';
import { connect } from 'react-redux'

  

const Dashboard = (props) => {
    return (
        <div>
            <h1>Hello Dashboard</h1>
            {console.log("Dashboard:", props)}
        </div>
    )
}

const mapStateToProps = reduxState => {
    console.log("Dashboard/mapStateToProps", reduxState)
    return reduxState;
}

export default connect(mapStateToProps, {})(Dashboard);

// export default Dashboard