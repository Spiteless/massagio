import React, { useState } from "react";
import { useInput } from "../../../hooks/input_hook"
import axios from 'axios'
import styled from '@emotion/styled'
import { getUser, loginUser } from "../../../redux/baseReducer";
import { css, jsx } from '@emotion/core'

const Button = styled.button`
        padding: 5px 13px 5px 13px;
        background-color: hotpink;
        font-size: 16px;
        border-radius: 4px;
        border-color: pink;
        color: black;
        font-weight: bold;
        &:hover {
            color: white;
        }`

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
        background-color: hotpink;
        font-size: 16px;
        border-radius: 4px;
        border-color: pink;
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

    const color = "white"

const Auth = (props) => {
    const { value: username, bind: bindUsername, reset: resetUsername } = useInput('');
    const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login()
        resetUsername();
        resetPassword();
    }

    const login = (req, res) => {
        console.log("login with:", username, password)
        axios.post('/auth/login', { username, password }).then(res => {
            loginUser(res.data);
            props.history.push("/dashboard");
            console.log('Login success with:', res.data)
        }).catch(err => {
            console.log(err);
            console.log('Login Failed')
        })
    }

    const register = (e) => {
        e.preventDefault();
        console.log(`Registering Name ${username} ${password}`);

        // const { username, password } = this.state
        console.log("register with:", username, password)
        axios.post('/auth/register', { username, password }).then(res => {
            // this.props.loginUser(res.data);
            // this.props.history.push("/dashboard");
            console.log("Register success with", res.data)

        }).catch(err => {
            console.log(err);
            alert('Register Failed')
        })

        resetUsername();
        resetPassword();
    }



    

    return (
        <DivContainerAuth>
            <h1>AppTitle</h1>
            <form onSubmit={handleSubmit}>
                <Row>
                    <label>
                        Username:
                        <input type="text" {...bindUsername} />
                    </label>
                </Row>

                <Row>
                    <label>
                        Password:
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

export default Auth