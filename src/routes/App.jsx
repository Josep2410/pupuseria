import Layout from '../components/Layout';
import '../stylesheets/App.css'
import Home from '../components/Home.jsx'
import ErrorPage from '../error-page.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemType from './ItemType';
import ItemDetails from './ItemDetails'
import MyCart from './MyCart'

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path='*' element={<ErrorPage/>}/>
              <Route path='cart' element={<MyCart/>}/>
              <Route path=':itemType' element={<ItemType/>}/>
              <Route path=':itemType/:itemID' element={<ItemDetails/>} />
            </Route >
          </Routes>
  
    </BrowserRouter>
    
  )
}

export default App
