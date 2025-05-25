import React from "react"
import "./ClientCard.css"

function ClientCard(props) {
  const {client} = props
  return (
    <>
        <div className="clientCardContanier">
          <h1 className="clientCardName">{client.fullName.split(" ").slice(0,2).join(" ")}</h1>
          <h2 className="clientComment">{client.comment}</h2>
          <h2 className="clientPhone">3000</h2>
          <h2 className="clientCardPhone">{client.phone}</h2>
          

        </div>
    </>
  )
}

export default ClientCard