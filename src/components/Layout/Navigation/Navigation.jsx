import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./Navigation.css"
import calendarIcon from '../../../assets/calendar.png';
import peopleIcon from '../../../assets/people-icon.png';

import { Link, useLocation } from "react-router-dom";

function Navigation() {

  const [isOpen, setIsOpen] = useState(false)
  function сhangeIsOpen() {
    setIsOpen(!isOpen)
  }


  
  return (
    <>
        <div className="NavigationContenier" onMouseEnter={()=>сhangeIsOpen()} onMouseLeave={()=>сhangeIsOpen()}>
          <button className="navigationOpenBtn" ></button>  
          
           
          <ul>
            <li>
              <Link to="/Calendar" className={`navBtn ${useLocation().pathname=="/Calendar"? "navBtnActiv": ""}`}>
              <img className="navigationIcon" src={calendarIcon} alt="" />
              <AnimatePresence>
              {isOpen && <motion.div
                  key="navigationContent"
                  initial={{ width: 0}}
                  animate={{width: "auto"}}
                  exit={{ width: 0}}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: "hidden" }}
                  className="titleNavBtn"
                  >Календарь</motion.div>}
                </AnimatePresence>
              </Link>
            </li>

            <li>
              <Link to="/"  className={`navBtn ${useLocation().pathname=="/"? "navBtnActiv": ""}`}>
                <img className="navigationIcon" src={peopleIcon} alt=""/>
                <AnimatePresence>
                  {isOpen && <motion.div
                    key="navigationContent"
                    initial={{ width: 0}}
                    animate={{width: "auto"}}
                    exit={{ width: 0}}
                    transition={{ duration: 0.4 }}
                    style={{ overflow: "hidden" }}
                    className="titleNavBtn">Клиенты</motion.div>}
                </AnimatePresence>
              </Link>
          </li>
          </ul>
          
           
        
        </div>
    </>
  )
}

export default Navigation