import React from "react"
import "./ClientCreateForm.css"

function ClientCreateForm() {

  return (
    <>
        <div className="ClientCreateFormContanier">
            <h1 className="ClientCreateFormTitle">Добавить клиента</h1>
            <form action="">
                <input className="inputClientForm" type="text" placeholder="ФИО"/>
                <input className="inputClientForm" type="text" placeholder="Телефон"/>
                <input className="inputClientForm" type="text" placeholder="Откуда"/>
                <input className="inputClientForm" type="text" placeholder="Итог"/>
                <input className="inputClientForm" type="text" placeholder="Коментарий"/>
                <input className="inputClientForm" type="date" name="" id=""/>
                <button className="buttonClientForm"> Записать</button>

            </form>
        </div>
    </>
  )
}

export default ClientCreateForm