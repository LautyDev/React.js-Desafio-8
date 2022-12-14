import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado'/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
