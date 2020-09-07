import React, { useEffect } from 'react'
import { getUser, logoutUser } from "../../../redux/authReducer";
import { getUserBase } from "../../../redux/baseReducer";
import { connect } from "react-redux";
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

const Nav = (props) => {
    console.log("Nav props:", props)
    const bgimage = (props.profilePic) ? props.profilePic : `https://robohash.org/` + props.username

    useEffect(() => {
        // props.getUser()
        props.getUserBase()
        console.log("useEffect has run")
        console.log("NavProps", props)
    }, [])

    const Nav = styled.nav`
    display:flex;

    width: 100vw;
    height: 50px;
    padding: 10px;
    background-color: black;
    color: hotpink;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > * {
        margin: 0;
        padding: 0;
        /* background-color: red; */
        height: 100%
    }
    `

    const Logo = styled.div`
    background: black url("https://img.icons8.com/plasticine/2x/image.png") no-repeat fixed center;
    width: 50px;
    height: 50px;
    color: transparent;
}
`


    return (
        <Nav>
            <Logo className="Logo">Logo</Logo>
            <h1>Hello {props.username} -- Nav {props.idea}</h1>


        </Nav>

    )
}

const mapStateToProps = reduxState => {
    // const { username, profilePic, userId } = reduxState.user;
    console.log("reduxState:", reduxState);
    const { base } = reduxState
    console.log('base:', base)
    const newState = {
        // username,
        // profilePic,
        // userId
        username: "ted",
        profilePic: "bunny.jpg",
        userId: 4,
        ...base
    };
    return newState
};

export default connect(mapStateToProps, { getUser, logoutUser, getUserBase })(Nav);