import React, { useEffect, useState } from 'react'
import { updateUser } from "../../../redux/baseReducer";
import styled from '@emotion/styled'
import { useInput } from "../../../hooks/InputHook"
import axios from 'axios'
import { connect } from "react-redux";

const Button = styled.button`
        padding: 5px 13px 5px 13px;
        background-color: ${props => {
           return (props.user_id) ? "#fc3a2f"
                : (props.selected)
                    ? "#ff7034"
                    : "#89ff34"}};
        font-size: 16px;
        border-radius: 4px;
        border-color: orange;
        color: black;
        font-weight: bold;
        &:hover {
            color: white;
        }`

const ReserveButton = styled.button`
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

const DivContainerCompany = styled.div`
        height: 95vh;
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

const DivEventBox = styled.div`
        height: 150px;
        width: 300px;
        background-color: #232323;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        border: 2px solid hotpink;
        & > h1 {
            color: white;
        }
        `


const Event = (props) => {
    console.log("@@", props)
    const [events, setEvents] = useState([])
    const [slots, setSlots] = useState([])
    const [selectedSlots, setSelectedSlots] = useState([])
    const { company_url_slug } = props.match.params

    useEffect(() => {
        console.log("useEffect slots/events")
        getSlots()

        axios.get(`/${company_url_slug}`).then(res => {
            console.log("!! events", res.data)
            setEvents(res.data)
        }).catch((err) => {
            console.log(err, events)
        })
    }, [])

    const getSlots = () => {
        axios.get(`/${company_url_slug}/slots`).then(res => {
            console.log("!! slots", res.data)
            setSlots(res.data)
        }).catch((err) => {
            console.log(err, slots)
        })
    }

    // useEffect(() => {
    // }, [])

    const toggleSelected = (slot_id) => {
        // const status = [...selectedSlots]

        (selectedSlots.includes(slot_id))
            ? setSelectedSlots(selectedSlots.filter( s => s !== slot_id)) 
            : (selectedSlots.length < 4) ? setSelectedSlots(selectedSlots.concat([slot_id]))
                 : console.log("nope")
        // setSelectedSlots(status)
    }
    
    const removeFromSelected = (slot_id) => {
        let newSelected = [...selectedSlots, slot_id]
        setSelectedSlots(newSelected)
    }

    const reserveSlots = () => {
        let body = {
            user_id: 1,
            selectedSlots: [...selectedSlots]
        }
        axios.put(`/update-slots`, body).then(res => {
            console.log("!! reserveSlots", res.data)
            console.log(res.data)
            getSlots()
        }).catch((err) => {
            console.log(err, events)
        })
    }

    return (
        <DivContainerCompany>
        <ReserveButton
            onClick = {(e)=> reserveSlots()}
        >Reserve</ReserveButton>
         {console.log("#### Events", events)}
         {console.log("#### Slots", slots)}
            { events.map(e => (
                <DivEventBox>
                    <h1>{new Date(e.start_time).toDateString()}</h1>
                    <Row>
                    {slots.filter(s => s.event_id === e.event_id)
                        .map((s, index) => (
                        <Button
                            user_id = {s.user_id}
                            selected = {!selectedSlots.includes(s.slot_id)}
                            onClick = { () => {
                                if (s.user_id) {return}
                                toggleSelected(s.slot_id)
                                console.log(`selected ${props.selected}`, s.slot_id)
                            }}
                        >
                            {new Date(e.start_time).getHours()}:{(index) ? index * 15 : "00"}
                        </Button>
                        ))}
                    </Row>
                </DivEventBox>
            ))}

        </DivContainerCompany >
    )
}

export default Event