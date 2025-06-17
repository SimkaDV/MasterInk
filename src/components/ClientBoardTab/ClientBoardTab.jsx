import React from "react"
import { useState, useEffect, useContext } from "react"
import ClientBoard from "../ClientBoard/ClientBoard"
import ClientCreateForm from "../ClientCreateForm/ClientCreateForm"
import "./ClientBoardTab.css"
import { createContext } from "react"
import { BtnToggleContent } from "../UI/BtnToggleContent/BtnToggleContent"
import ClientSort from "../ClientSort/ClientSort"


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

   const [clientsSort, setClientsSort] = useState(clients||null)
   
   function filteredClients(){
      clients.filter(client=>{ 

      })


   }
 

  
  return (
    
    <>
    <MyContext.Provider value={{clientsSort, setClients, clientsStatus, setClientsStatus}}>
      <div className="clientBoardTab">
        
        <div className="optionContanier">
          <div className="elOptionContanier">
          <BtnToggleContent titleContent ={"Добавить клиента"} icon="+"
            content={<ClientCreateForm addClient = {addClient} addClientStatus={addClientStatus}></ClientCreateForm>}>
          </BtnToggleContent>
          </div>
          <BtnToggleContent titleContent ={"Сортировать"}  icon="S" setClientsSort={setClientsSort}
            content={<ClientSort></ClientSort>}>
          </BtnToggleContent>
        </div>

        <ClientBoard clients={clients} clientsStatus = {clientsStatus}></ClientBoard>
      </div>  
    </MyContext.Provider>
    </>
  )
}

export default ClientBoardTab