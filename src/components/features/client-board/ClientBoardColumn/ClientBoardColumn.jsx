import React from "react"
import "./ClientBoardColumn.css"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import ClientCard from "../ClientCard/ClientCard.jsx"







function ClientBoardColumn(props) {
  const {titleColumn, statusColumn, clients, clientsStatus} = props
  
  
  
  function getClientsByStatus(clients, statusMap, status) {
    if(!clients||!statusMap|| !statusMap[status]) return []
    const clientsMap = new Map(clients.map(c => [c.id, c]));
    return statusMap[status]
      .map(id => clientsMap.get(id))
      .filter(Boolean);
  }
  

  const columnClients = getClientsByStatus(
    clients, 
    clientsStatus, 
    statusColumn
  );
  
 
    

  

  const [price, setPrice] = useState(0)
    function addPrice(){

      const total = columnClients.reduce((acc, client) => acc + Number(client.price), 0)
      setPrice(total)
      
    }

  useEffect(
  addPrice, [columnClients]
  )

  

  return (
    <>
    
    <div className="column">
      <h1 className="nameColumn">{titleColumn}</h1>
      <h2 className="priceColumn">
    <AnimatePresence mode="wait">
      <motion.span
      key={price} // Обязательно!
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      >
        {price}
      </motion.span>
    </AnimatePresence>
    р
      </h2>

      <div >
          {columnClients.map(client =>(
            <ClientCard key = {client.id} client ={client} statusColumn={statusColumn} ></ClientCard>            
          ))}

      </div>
    </div>
    </>
  )
}

export default ClientBoardColumn