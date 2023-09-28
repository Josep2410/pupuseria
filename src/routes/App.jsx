import Header from '../components/Header'
import Navbar from '../components/Navbar'

import '../stylesheets/App.css'
import Home from '../components/Home.jsx'
import ErrorPage from '../error-page.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemType from './ItemType';
import ItemDetails from './ItemDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="container-sm">
        <Header/>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='*' element={<ErrorPage/>}/>
            <Route path='/:itemType' element={<ItemType/>}/>
            <Route path='/:itemType/:itemDetails' element={<ItemDetails/>}/>

          </Routes>
        <Navbar/>
      </div>
    </BrowserRouter>
    
  )
}

export default App
