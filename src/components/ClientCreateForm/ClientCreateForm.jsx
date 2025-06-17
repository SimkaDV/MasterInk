import React, { useEffect, useState } from "react"
import "./ClientCreateForm.css"

function ClientCreateForm({addClient, addClientStatus}) {
   //Определяет значения формы 
   const [formData, setFormData ] = useState({
    fullName: "",
    phone: "",
    createdAt: "",
    source: "",
    price: "",
    comment: ""
  })
  
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData(prev =>({...prev, [name]: value }));

  }
  
  const createCard = (e) =>{
    e.preventDefault()
  
    const newClient ={
      ...formData,
      id: Date.now()
    }
    addClient(newClient)
    setFormData({
      fullName: "",
      phone: "",
      createdAt: "",
      source: "",
      price: "",
      comment: ""
    })

    addClientStatus(newClient.id, "application")

  }

  
  
  return (

        <div className="ClientCreateFormContanier">
            <h1 className="ClientCreateFormTitle"></h1>
            <form>
                <input 
                className="inputClientInput" 
                type="text" 
                placeholder="ФИО" 
                name = "fullName"
                value={formData.fullName} 
                onChange={handleChange}
                />

                <input 
                className="inputClientInput"
                type="text"
                placeholder="Телефон" 
                name = "phone"
                value={formData.phone}
                onChange={handleChange}
                />
                <input 
                className="inputClientInput"
                type="text"  
                placeholder="Откуда" 
                name = "createdAt"
                value={formData.createdAt}
                onChange={handleChange}
                />
                <input 
                className="inputClientInput" 
                type="text" 
                placeholder="Итог"
                name = "source"
                value={formData.source}
                onChange={handleChange}
                />
               <input 
                className="inputClientInput"
                type="text" 
                placeholder="Цена" 
                name = "price"
                value={formData.price}
                onChange={handleChange}>  
                </input>

                <input 
                className="inputClientInput"
                type="text" 
                placeholder="Коментарий" 
                name = "comment"
                value={formData.comment}
                onChange={handleChange}
                />
                <input className="inputClientInput" type="date" name="date" 
                
                />
                <button className="buttonClientForm" onClick={createCard}> Записать</button>

            </form>
        </div>
    
  )
}

export default ClientCreateForm