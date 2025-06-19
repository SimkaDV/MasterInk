import React, { useState } from "react"
import "./ClientCard.css"

import { motion, AnimatePresence } from "framer-motion"

import BtnOptionCard from "../../../UI/BtnOptionCard/BtnOptionCard"
import  Dropdown from "../../../UI/Dropdown/Dropdown.jsx"

import { useNavigate } from "react-router-dom"

function ClientCard(props) {
  const {client} = props
  const {statusColumn} = props

  const navigate = useNavigate()
  
  const goToClientTab = (clientId) => {
    navigate(`/client/${clientId}`,{state: {client}})
  }


  return (
    <>
    <AnimatePresence>
    <motion.div
    key={client.id}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0 }}
    className="clientCardContanier"
  >
    <div className="clientCardTop">
      <div className="clientCardInfo">
        <h1 className="clientCardName">
          {client.fullName.split(" ").slice(0, 2).join(" ")}
        </h1>
        <h2 className="clientCardComment">{client.comment}</h2>
        <h2 className="clientCardPhone">Tel: {client.phone}</h2>
        <h2 className="clientCardPrice">Price: {client.price}</h2>
      </div>

      <Dropdown>
        <BtnOptionCard clientId={client.id} statusColumn={statusColumn} />
      </Dropdown>
    </div>

    <button className="btnCard" onClick={()=>goToClientTab(client.id)}>Подробнее</button>
  </motion.div>
          

      </AnimatePresence>
    </>
  )
}

export default ClientCard