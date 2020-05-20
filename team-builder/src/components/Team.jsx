import React from 'react'
import {StyledTeam} from './Styled'

export default function Team(props) {
    const {details} = props

    if (!details) {
        return <h3>Working on fetching your friend&apos;s details...</h3>
    }

    return (
        <StyledTeam>
            <h2>{details.name}</h2>
            <p>Email: {details.email} </p>
            <p>Role: {details.role} </p>
        </StyledTeam>
    )
}