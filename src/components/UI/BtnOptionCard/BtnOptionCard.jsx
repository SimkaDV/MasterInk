import React from "react"
import { useState, useContext } from "react"
import "./BtnOptionCard.css"
import { MyContext } from "../../ClientBoardTab/ClientBoardTab"


function BtnOptionCard({clientId, statusColumn}){
const context = useContext(MyContext)

const [isOpen, setOpen] = useState(false) 
  function changeOpen(){
    setOpen(!isOpen)
  }
  
function removeClient(clientId){
  context.setClients((prev)=>prev.filter((c)=>c.id!=clientId)) 
  context.setClientsStatus(prev => ({
    ...prev,
    [statusColumn]: prev[statusColumn].filter(c => c !== clientId)
  }))
  
}

function changeStatus(clientId){
  context.setClientsStatus(prev => {
    let nextStatus 
    if (statusColumn =="application"){
      nextStatus = "processing"
    } else if (statusColumn =="processing"){
      nextStatus = "in_progress"
    } else if (statusColumn =="in_progress"){
      nextStatus = "completed"
    } else if (statusColumn =="completed"){
      nextStatus = "application"
    } 

   return( 
    {...prev,
    [nextStatus]: [clientId, ...prev[nextStatus]],
    [statusColumn]: prev[statusColumn].filter(c => c !== clientId)}
   )
  })
  

}

  
 return(
    <>
    <ul className="ulOption">
        <li className = "btnOption"onClick={()=>removeClient(clientId)}>Удалить</li>
        <li className = "btnOption"onClick={()=>changeStatus(clientId)}>Изменить статус</li>
  
    </ul>
    
    </>
 )   


}


export default BtnOptionCard