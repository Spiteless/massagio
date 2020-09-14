import React, { useState } from "react";
import { useInput } from "../../../hooks/InputHook"
import axios from 'axios'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { getUser, loginUser } from "../../../redux/authReducer";
import { css, jsx } from '@emotion/core'

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

const DivContainerAuth = styled.div`
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

const Auth = (props) => {
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
    const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login()
        resetEmail();
        resetPassword();
    }

    const login = (req, res) => {
        console.log("login with:", email, password)
        axios.post('/auth/login', { email, password }).then(res => {
            loginUser(res.data);
            props.history.push("/dashboard");
            console.log('Login success with:', res.data)
        }).catch(err => {
            console.log(err);
            alert('Login Failed')
        })
    }

    const register = (e) => {
        e.preventDefault();
        console.log(`Registering Name ${email} ${password}`);

        // const { email, password } = this.
        console.log("register with:", email, password)
        axios.post('/auth/register', { email, password }).then(res => {
            props.loginUser(res.data);
            props.history.push("/profile");
            console.log("Register success with", res.data)

        }).catch(err => {
            console.log(err);
            alert('Register Failed')
        })

        resetEmail();
        resetPassword();
    }





    return (
        <DivContainerAuth className="auth-container">
            <h1>Massagio</h1>
            <form onSubmit={handleSubmit}>
                <Row>
                    <label>
                        <Span className='label'>Email:</Span>
                        <input type="text" {...bindEmail} />
                    </label>
                </Row>

                <Row>
                    <label>
                        <Span className='label'>Password:</Span>
                        <input type="password" {...bindPassword} />
                    </label>
                </Row>

                <Row>
                    <Input type="submit" value="Login" />
                    <Button onClick={register}>Register</Button>
                </Row>
            </form>
        </DivContainerAuth>
    )
}

const mapStateToProps = reduxState => {
    console.log("Auth\mapStateToProps", reduxState)
    return reduxState;
}

export default connect(mapStateToProps, { loginUser })(Auth);