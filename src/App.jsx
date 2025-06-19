import './assets/styles/App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navigation from './components/Layout/Navigation/Navigation'
import Header from './components/Layout/Header/Header'

import ClientBoardTab from './pages/ClientBoardTab/ClientBoardTab.jsx'
import CalendarTab from './pages/CalendarTab/CalendarTab.jsx'
import ClientTab from './pages/ClientTab/ClientTab'


function App() {

  return (
    <>
    <BrowserRouter>

    <div className='App'>
      <Header/>

      <div className='layout'> 

        <div className='navigationPanel'>
          <Navigation/>
        </div>
        <div className="mainContent">
    <Routes>
      <Route path="/" element={<ClientBoardTab />} />
      <Route path="/calendar" element={<CalendarTab />} />
      <Route path="/client/:id" element={<ClientTab />} />
    </Routes>
  </div>



      </div>
    </div>  
    </BrowserRouter>
    </>
  )
}

export default App
