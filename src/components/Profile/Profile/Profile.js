import React, { useEffect } from 'react'
import { updateUser } from "../../../redux/baseReducer";
import styled from '@emotion/styled'
import { useInput } from "../../../hooks/InputHook"
import axios from 'axios'
import { connect } from "react-redux";
import { changeUserObjOnProfileUpdate } from "../../../redux/authReducer";

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

const Span = styled.span`
        display:inline-block;
        width: 100px;
        border-radius: 4px;
        border-color: orange;
`

const Row = styled.div`
        align-self: center;
        padding: 10px;
        display: flex;
        justify-content: space-around;
        color: white;
        max-width: 400px;
        & > label > * {
         margin: 0px 8px 0px 8px;
        }

        & > label {
            font-weight: bold;
        }
    `

const Input = styled.input`
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

const DivContainerProfile = styled.div`
        height: 100vh;
        width: 100vw;
        background-color: #232323;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > h1 {
            color: white;
        }
        `



const Profile = (props) => {
    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
    const { value: profilePic, bind: bindProfilePic, reset: resetProfilePic } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile()
        // console.log("handleSubmit has props", props)
        changeUserObjOnProfileUpdate()
    }

    useEffect(() => {
    // props.getUser()
    //     .then(() => console.log('success'))
    //     .catch(() => {
    //         console.log('fail')
    //     })
    // console.log("props in useEffect", props)
    // // props.getUserBase()
    // console.log("useEffect has run")
}, [])

    const updateProfile = (req, res) => {
        const pic = profilePic  || props.user.profilePic
        const first = firstName || props.user.firstName
        const last = lastName   || props.user.lastName
        console.log("updateProfile:", props.user.userId, firstName, lastName, profilePic)
        const user = {...props.user, firstName: first, lastName: last, profilePic: pic }
        axios.put(`/user/${props.user.userId}`, { firstName: first, lastName: last, profilePic: pic }).then(res => {
            // loginUser(res.data); //do a redux thing
            // props.history.push("/profile");
            console.log('Profile update success:', res.data)
        }).catch(err => {
            console.log(err);
        })
        updateUser(user)
    }

    return (
        <DivContainerProfile className="profile-container">
            <form onSubmit={handleSubmit}>
                <Row>
                    <label>
                        <Span className='label'>First Name:</Span>
                        <input
                            type="text"
                            value={props.user.firstName}
                            placeholder={props.user.firstName}
                            {...bindFirstName} />
                    </label>
                </Row>

                <Row>
                    <label>
                        <Span className='label'>Last Name:</Span>
                        <input
                            type="text"
                            value={props.user.lastName}
                            placeholder={props.user.lastName}
                            {...bindLastName} />
                    </label>
                </Row>

                <Row>
                    <label>
                        <Span className='label'>Profile Pic Url:</Span>
                        <input
                            type="text"
                            value={props.user.profilePic}
                            placeholder={props.user.profilePic}
                            {...bindProfilePic} />
                    </label>
                </Row>

                <Row>
                    <Input type="submit" value="Update" />
                </Row>
            </form>
        </DivContainerProfile>
    )
}

const mapStateToProps = reduxState => {
    // const { email, StyledImg, userId } = reduxState.user;
    console.log("Profile/mapStateToProps:", reduxState);
    const { auth, base, event } = reduxState
    console.log(auth, base, event)
    const newState = {
        // email,
        // StyledImg,
        // userId
        // email: "ted",
        // StyledImg: "bunny.jpg",
        // userId: 4,
        ...base,
        ...auth,
        ...event
    };
    return newState
};


export default connect(mapStateToProps, { updateUser, changeUserObjOnProfileUpdate })(Profile);
