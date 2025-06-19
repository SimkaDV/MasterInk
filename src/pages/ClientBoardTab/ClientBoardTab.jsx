import React from "react"
import "./ClientBoardTab.css"
import { useState, useEffect, useContext, createContext  } from "react"

import ClientCreateForm from "../../components/features/client-board/ClientCreateForm/ClientCreateForm"
import ClientSort from "../../components/features/client-board/ClientSort/ClientSort"
import ClientBoard from "../../components/features/client-board/ClientBoard/ClientBoard"

import BtnToggleContent from "../../components/UI/BtnToggleContent/BtnToggleContent"



export const MyContext = createContext();


function ClientBoardTab() {
   //Создаёт карточки клиентов 
   const [clients, setClients] = useState(JSON.parse(localStorage.getItem("clients")) || [])

   useEffect(()=>{
     localStorage.setItem('clients', JSON.stringify(clients))
 
   }, [clients])
 
 
   const addClient = (newClient) =>{
     setClients(clients =>([ newClient, ...clients]))
   }
 
   //Определяет статус карточки 
   const [clientsStatus, setClientsStatus] = useState(JSON.parse(localStorage.getItem("clientsStatus"))||{
   application: [], 
   processing: [],
   in_progress: [],
   completed: []})
 
   useEffect(()=>{
     localStorage.setItem('clientsStatus', JSON.stringify(clientsStatus))
   }, [clientsStatus])
 
   const addClientStatus = (id, status) =>{
     setClientsStatus(prev => ({...prev, [status]: [id, ...prev[status]]}))
 
   }

   //Сортируем клиентов по параметрам

   const [filteredClients, setFilteredClients] = useState(clients||null)
   
   const [parSort, setParSort] = useState(
    {name: "",
    priceFrom: "",
    priceTo: "",
    dateFrom: "",
    dateTo: "", })
   

   const addSetParSort = (par) => {
    setParSort(par)
   }

  
   
   useEffect(() => {
    let result = [...clients]
    
    if (parSort.name) {
      result = result.filter(client => 
        client.fullName.toLowerCase().includes(parSort.name.toLowerCase())
      )
    }
    
    if (parSort.priceFrom) {
      result = result.filter(client => 
        client.price >= Number(parSort.priceFrom)
      )
    }
    
    if (parSort.priceTo) {
      result = result.filter(client => 
        client.price <= Number(parSort.priceTo)
      )
    }
    
    if (parSort.dateFrom) {
      result = result.filter(client => 
        new Date(client.createdAt) >= new Date(parSort.dateFrom)
      )
    }
    
    if (parSort.dateTo) {
      result = result.filter(client => 
        new Date(client.createdAt) <= new Date(parSort.dateTo)
      )
    }
    
    setFilteredClients(result)
  }, [parSort, clients])

  
 

  
  return (
    
    <>
    <MyContext.Provider value={{ setClients, clientsStatus, setClientsStatus}}>
      <div className="clientBoardTab">
        
        <div className="optionContanier">
          <div className="elOptionContanier">
          <BtnToggleContent titleContent ={"Добавить клиента"} icon="+"
            content={<ClientCreateForm addClient = {addClient} addClientStatus={addClientStatus}></ClientCreateForm>}>
          </BtnToggleContent>
          </div>
          <BtnToggleContent titleContent ={"Сортировать"}  icon="S" 
            content={<ClientSort addSetParSort={addSetParSort}></ClientSort>}>
          </BtnToggleContent>
        </div>

        <ClientBoard clients={filteredClients} clientsStatus = {clientsStatus}></ClientBoard>
      </div>  
    </MyContext.Provider>
    </>
  )
}

export default ClientBoardTab