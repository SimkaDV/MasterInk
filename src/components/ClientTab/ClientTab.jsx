import React, { useState } from "react"
import "./ClientTab.css"
import { useParams } from 'react-router-dom'


function ClientTab() {
    const {id} = useParams()

  

  return (
   <>
    <div className="WORK">Скоро здесь будет карточка клиента {id}</div>

   </>
   
  )
}

export default ClientTab