import React from "react"
import "./ClientBoard.css"

import ClientBordColumn from "../ClientBoardColumn/ClientBoardColumn.jsx"

function ClientBoard({clients, clientsStatus}) {









  return (
    <>
    <div className="ClientBoardContanier">
    
      <ClientBordColumn 
      titleColumn = "Заявки" 
      statusColumn = "application" 
      clientsStatus={clientsStatus} 
      clients={clients}>
      </ClientBordColumn>
      
      <ClientBordColumn 
      titleColumn = "В обработке" 
      statusColumn = "processing" 
      clientsStatus={clientsStatus} 
      clients={clients}>
      </ClientBordColumn>
      
      <ClientBordColumn 
      titleColumn = "В работе" 
      statusColumn = "in_progress" 
      clientsStatus={clientsStatus} 
      clients={clients}>
      </ClientBordColumn>
      
      <ClientBordColumn 
      titleColumn = "Закрытые" 
      statusColumn = "completed" 
      clientsStatus={clientsStatus} 
      clients={clients}>
      </ClientBordColumn>
    </div>
    
    
    </>
  )
}

export default ClientBoard;