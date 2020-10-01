import React, { useEffect } from 'react'
import { getUser, logoutUser } from "../../../redux/authReducer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from '@emotion/styled'
import { IsActiveSession } from "../../../hooks/IsActiveSession"
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios'

const NavDropdown = () => (
    <Dropdown className="nav-menu" icon='content' direction="left">
        <Dropdown.Menu>
            <Dropdown.Item text='My Profile' as={Link} to='/profile' />
            <Dropdown.Item text='Cart' icon='cart' as={Link} to='/cart' />
            <Dropdown.Item text='Log Out' onClick={logout} as={Link} to='/' />
        </Dropdown.Menu>
    </Dropdown>
)

const NavDropdownAdmin = () => (
    <Dropdown icon='content' direction="left">
        <Dropdown.Menu>
            <Dropdown.Item text='My Profile' as={Link} to='/profile' />
            <Dropdown.Item text='Cart' icon='cart' as={Link} to='/cart' />
            <Dropdown.Item text='Log Out' onClick={logout} as={Link} to='/' />
            <Dropdown.Item text='Create Event' onClick={() => { }} as={Link} to='/event/new' />
        </Dropdown.Menu>
    </Dropdown>
)

const Navbar = styled.nav`
    display:flex;
    height: 70px;
    padding: 10px;
    padding-right: 20px;
    background-color: black;
    color: #ff7034;
    /* max-width: 700px; */
    justify-content: space-between;
    align-items: center;
    & > * > h1 {
        margin: 0px;
        padding: 0px;
    }
    `

const Logo = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    /* align-items: center; */
    & > h1 {
        margin: 0px;
        padding: 0px;
        padding-top: 6px;
        padding-left: 10px;
        /* color: hotpink; */
        height: 36px;
        display: inline-block;
    }
    & > h1 > a:link {
        color: #ff7034;
        text-decoration: none;
    }
    & > h1 > a:hover {
        color: white;
        text-decoration: none;
    }
    & > h1 > a:visited {
        color: #ff7034;
        text-decoration: none;
    }
    & > h1 > a:active {
        color: #ff7034;
        text-decoration: none;
    }
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

const StyledImg = styled.img`
    border: white solid 1px;
    border-radius: 50%;
    margin: 0px;
    padding: 0px;
    height: 50px;
    width: 50px;
    object-fit: cover;
}`

const Button = styled.button`
        padding: 5px 13px 5px 13px;
        background-color: #ff7034;
        font-size: 16px;
        border-radius: 4px;
        border-color: orange;
        color: black;
        font-weight: bold;
        &:hover {
            color: white;
        }`

const Menu = styled.div`
        font-size: 2.5em;
        display: flex;
        align-items: flex-end;
        `

const logout = () => {
    axios.get("/auth/logout").then(() => {
        logoutUser();
    });
};


const Nav = (props) => {
    console.log("Nav props:", props)
    const bgimage = (props.StyledImg) ? props.StyledImg : `https://robohash.org/` + props.email

    console.log("does this line clear")
    useEffect(
        () => {
            console.log("RAN USE EFFECT NAV")
            const user_info_in = axios.get("/auth/user").then(res => {
                console.log("getUser reducer")
                props.getUser(res.data)
                console.log("res Data-------------", res.data)
            }).catch((err) => {
                console.log(err)
            })
            console.log("useEffect has run")
        }, [])

    // attempting to extract useEffect out 
    // console.log(IsActiveSession())

    return (
        <div className="nav-container">
            <Navbar>
                <div className="group">
                    <Logo className="Logo group">
                        <Link to="/dashboard">
                            <StyledImg
                                className="nav-profile-pic"
                                src={"https://media.istockphoto.com/vectors/young-woman-having-relaxation-office-massage-in-mobile-chair-vector-id833156068?s=170x170"} />
                        </Link>
                        <h1>
                            <Link to="/dashboard">
                                Massagio
                            </Link>
                        </h1>
                    </Logo>
                </div>

                <div className="group">
                    <h1>{
                        (props.user.email)
                            ? "Hello " + props.user.firstName
                            : <Link to="/"><Button className='to-login'>Please Login</Button></Link>
                    }</h1>
                </div>

                <div className="group">
                    <ProfileContainer>
                        <Menu>
                            {(props.user.isAdmin)
                                ? <NavDropdownAdmin />
                                : <NavDropdown />
                            }
                        </Menu>
                        <Link to="/profile">
                            <StyledImg className="nav-profile-pic" src={props.user.profilePic} />
                        </Link>
                    </ProfileContainer>
                </div>


            </Navbar>
        </div>


    )
}

const mapStateToProps = reduxState => {
    // const { email, StyledImg, userId } = reduxState.user;
    console.log("Nav/mapStateToProps:", reduxState);
    const { auth, base } = reduxState
    console.log('base:', base)
    const newState = {
        // email,
        // StyledImg,
        // userId
        // email: "ted",
        // StyledImg: "bunny.jpg",
        // userId: 4,
        ...base,
        ...auth
    };
    return newState
};

export default connect(mapStateToProps, {
    getUser,
    logoutUser,
})(Nav);