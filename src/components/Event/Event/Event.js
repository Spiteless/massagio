import React, { useEffect, useState } from 'react'
import { updateUser } from "../../../redux/baseReducer";
import styled from '@emotion/styled'
import { useInput } from "../../../hooks/InputHook"
import axios from 'axios'
import { connect } from "react-redux";

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

const DivContainerEvent = styled.div`
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


const Event = (props) => {
    console.log("@@", props)
    const [events, setEvents] = useState([])

    useEffect( ()=>{

    }, [])
    
    const getCompanyEvents = () => {
        axios.get(
            // `/${company_url_slug}`
            ).then(res => {
            console.log(res.data)
            setEvents(res.data)
            // return res.data
            }).catch(() => {
                console.log('company-list fail')
            })
    }
    return (
        <DivContainerEvent>

            <h1>Hello Event</h1>
            <h2>{events.map(e=> <p>e.start_time</p>)}</h2>
        </DivContainerEvent>
    )
}

export default Event