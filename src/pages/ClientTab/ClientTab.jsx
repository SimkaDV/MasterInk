import React, { useState } from "react"
import "./ClientTab.css"
import { useParams, useLocation } from 'react-router-dom'



function ClientTab() {
    const {id} = useParams()
    const {state} = useLocation()
    const client = state?.client
    
  return (
   

  <div className="clientTabContanier">
    
    <div className="clientInformationContanier">
        <h1>{client.fullName}</h1>
        <h2>{client.phone}</h2>
        <h5>Карточка клиента id: {id}</h5>
    </div>
    <div className="clientInteractionsContanier">


    </div>
    

  </div>
  
   
  )
}

export default ClientTab