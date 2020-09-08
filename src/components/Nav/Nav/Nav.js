import React, { useEffect } from 'react'
import { getUser, logoutUser } from "../../../redux/authReducer";
import { getUserBase } from "../../../redux/baseReducer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

const Navbar = styled.nav`
    display:flex;

    /* width: 100vw; */
    /* min-width: 800px; */
    height: 50px;
    padding: 10px;
    /* margin: 10px 0px 10px 0px; */
    background-color: black;
    color: hotpink;
    justify-content: space-between;
    align-items: center;
    & > * > h1 {
        /* border: solid blue 1px; */
        margin: 0px;
        padding: 0px;
        /* height: 100% */
    }
    `

const Logo = styled.div`
    width: 50px;
    height: 50px;
    & > img {
        margin: 0px;
        padding: 0px;
        height: 100%;
        }
    }`

const ProfileContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
    /* color: transparent; */
    justify-content: flex-start;
    /* align-items: center; */
    & > img {
        /* margin: 0px;
        padding: 0px;
        height: 100%; */
        }
    & > a {
        height: auto;
        width: 50px;
        }
    & > * {
        margin-left: 10px;
        }
    }`

const ProfilePic = styled.img`
    border: white solid 1px;
    border-radius: 50%;
    margin: 0px;
    padding: 0px;
    height: 50px;
    width: 50px;
    object-fit: cover;
}`


const Nav = (props) => {
    console.log("Nav props:", props)
    const bgimage = (props.profilePic) ? props.profilePic : `https://robohash.org/` + props.username

    useEffect(() => {
        // props.getUser()
        props.getUserBase()
        console.log("useEffect has run")
        console.log("NavProps", props)
    }, [])




    return (
        <Navbar>
            <div className="group">
                <Logo className="Logo">
                    <Link to="/dashboard">
                        <ProfilePic
                        className="nav-profile-pic"
                        src={"https://media.istockphoto.com/vectors/young-woman-having-relaxation-office-massage-in-mobile-chair-vector-id833156068?s=170x170"} />
                    </Link>
                </Logo>
            </div>

            <div className="group">
                <h1>{props.username}</h1>
            </div>

            <div className="group">
                <ProfileContainer>
                    <Link to="/profile">
                        <ProfilePic className="nav-profile-pic" src={"https://cataas.com/cat/says/hello%20tofu"} />
                    </Link>
                        <ProfilePic className="nav-profile-pic" src={"https://img.icons8.com/plasticine/2x/image.png"} />
                </ProfileContainer>
            </div>


        </Navbar>

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