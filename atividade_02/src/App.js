import React from 'react'
import Event from './components/Event'
import Ticket from './components/Ticket'
import Data from './components/Data'

export default function App() {
  return (
   <>
    <div className='Evento'>  
      <Event 
        data='2 de agosto de 2019 (Sexta-Feira)' 
        horario='18h30 - 00h00' 
        local='Parque do Povo' 
        cidade='Campina Grande/PR' 
        genero='Arte em forma de SERTANEJO'
      />
    </div>
    
    <div className='Ingressos'>
      <h2>Ingressos</h2>
      {Data.map(dado => (
        <Ticket
        tipo={dado.tipo}
        preco={dado.preco}
        />
      ))}
    </div>
   </> 
  )
}
