import React from 'react'

export default function Event(props) {
    return(
        <div>
            <h1> GUSTAVO LIMA </h1>
            <p> <b> Data: </b> {props.data} </p>
            <p> <b> Horário: </b> {props.horario} </p>
            <p> <b> Local: </b> {props.local} </p>
            <p> <b> Cidade: </b> {props.cidade} </p>
            <p> <b> Gênero: </b> {props.genero} </p>
        </div>
    )
}