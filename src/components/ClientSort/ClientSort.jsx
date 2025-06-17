import React, { useEffect, useState } from "react"
import "./ClientSort.css"

function ClientSort({setClientsSort}) {

  const [parSort, setParSort] = useState({
    name: "",
    priceFrom: "",
    priceTo: "",
    dateFrom: "",
    dateTo: "",
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setParSort(prev =>({...prev, [name]: value }));
    setClientsSort(parSort);
    console.log(parSort)

  }
  const handleApply = () => {
    setClientsSort(parSort);
  };
  


  return (

    <div className="ClientSortContanier">

    <div className="ClientSortBlock">
      <label className="ClientSortLabel">Наименование:</label>
      <input 
        type="text" 
        name ="name"
        className="ClientSortInput" 
        value={parSort.name}
        onChange={handleChange}
      />
    </div>
  
    <div className="ClientSortBlock">
      <label className="ClientSortLabel">Цена:</label>
      <div className="ClientSortRange">
        <input 
          type="number"
          name ="priceFrom"
          className="ClientSortInput" 
          placeholder="От"
          value={parSort.priceFrom}
          onChange={(e) => handleChange(e)}
        />
        <input 
          type="number"
          name="priceTo" 
          className="ClientSortInput" 
          placeholder="До"
          value={parSort.priceTo}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  
    <div className="ClientSortBlock">
      <label className="ClientSortLabel">Дата:</label>
      <div className="ClientSortRange">
        <input 
          type="date" 
          name="dateFrom"
          className="ClientSortInput" 
          value={parSort.dateFrom}
          onChange={(e) => handleChange(e)}
        />
        <input 
          type="date" 
          name="dateTo"
          className="ClientSortInput" 
          value={parSort.dateTo}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  
    <button className="buttonClientSort" onClick={handleApply} >Применить</button>
  </div>
    
  )
}

export default ClientSort