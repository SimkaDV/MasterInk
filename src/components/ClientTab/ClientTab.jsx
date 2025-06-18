import React, { useState } from "react"
import "./ClientTab.css"
import { useParams } from 'react-router-dom'



function ClientTab() {
    const {id} = useParams()
   
  

  return (
   

  <div className="clientTabContanier">
    <h1>Карточка клиента id: {id}</h1>



  </div>
  
   
  )
}

export default ClientTab