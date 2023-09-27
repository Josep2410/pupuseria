import Header from '../components/Header'
import Navbar from '../components/Navbar'

import '../stylesheets/App.css'
import Home from '../components/Home.jsx'
import ErrorPage from '../error-page.jsx';
import Breakfast from '../routes/Breakfast.jsx';
import Entree from '../routes/Entree.jsx'
import Drinks from '../routes/Drinks.jsx'
import Dessert from '../routes/Dessert.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="container-sm">
        <Header/>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='*' element={<ErrorPage/>}/>
            <Route path='/Breakfast' element={<Breakfast/>}/>
            <Route path='/Entree' element={<Entree/>}/>
            <Route path='/Drinks' element={<Drinks/>}/>
            <Route path='/Dessert' element={<Dessert/>}/>
          </Routes>
        <Navbar/>
      </div>
    </BrowserRouter>
    
  )
}

export default App
