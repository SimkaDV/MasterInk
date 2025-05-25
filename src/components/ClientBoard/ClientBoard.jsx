import React from "react"
import "./ClientBoard.css"
import ClientBordColumn from "../ClientBordColumn/ClientBordColumn.jsx"
import ClientCreateForm from "../ClientCreateForm/ClientCreateForm.jsx"
function ClientBoard() {

  return (
    <>
    <ClientCreateForm></ClientCreateForm>

    <div className="ClientBoardContanier">
    
      <ClientBordColumn titleColumn = "Заявки" statusColumn = "application"></ClientBordColumn>
      <ClientBordColumn titleColumn = "В обработке" statusColumn = "processing"></ClientBordColumn>
      <ClientBordColumn titleColumn = "В работе" statusColumn = "in_progress"></ClientBordColumn>
      <ClientBordColumn titleColumn = "Закрытые" statusColumn = "completed"></ClientBordColumn>
    </div>
    
    
    </>
  )
}

export default ClientBoard;