import React from 'react'

export default function Ticket(props) {
    return(
        <div>
            <ul>
                <li> {props.tipo}: R${props.preco}</li>
            </ul>
        </div>
    )
}