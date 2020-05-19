import React from 'react'

export default function Team(props) {
    const {details} = props

    if (!details) {
        return <h3>Working on fetching your friend&apos;s details...</h3>
    }

    return (
        <div>
            <h2>{details.name}</h2>
            <p>Email: {details.email} </p>
            <p>Role: {details.role} </p>
        </div>
    )
}