import React from "react"
import "./ClientBordColumn.css"
import ClientCard from "../ClientCard/ClientCard.jsx"
import data from "./clientsData.js"
const {clients, clientsStatus} = data
function ClientBordColumn(props) {
  const {titleColumn, statusColumn} = props


  function getClientsByStatus(clients, statusMap, status) {
    const clientsMap = new Map(clients.map(c => [c.id, c]));
    return statusMap[status].map(id => clientsMap.get(id)).filter(Boolean);
  }
  
  // Использование
  const columnClients = getClientsByStatus(
    clients, 
    clientsStatus, 
    statusColumn
  );
  


  return (
    <>
    <div className="column">
      <h1 className="nameColumn">{titleColumn}</h1>
      <h2 className="priceColumn">1000p</h2>
      <div>
          {columnClients.map(client =>(
            <ClientCard key = {client.id} client ={client} ></ClientCard>            
          ))}

      </div>
    </div>
    </>
  )
}

export default ClientBordColumn