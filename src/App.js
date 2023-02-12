import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemListContainerCategorie from './Components/ItemListContainerCategorie';
import ItemDetailContainer from './Components/ItemDetailContainer';
/* import Cover from './Components/Cover.jsx'
import Categories from './Components/Categories.jsx'; */


import './Components/Styles/NavBar.css';
import './Components/Styles/CartWidget.css';
import './Components/Styles/ItemListContainer.css';
import './Components/Styles/Categories.css';
import './Components/Styles/Cover.css';
import './Components/Styles/Counter.css';
import './Components/Styles/ItemDetailContainer.css';

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar/>}/>
          <Route path='/categories/' element={<ItemListContainer greeting="Nuestras Categorias"/>}/>
          <Route path='/category/:id' element={<ItemListContainerCategorie/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>

  );
}

export default App;
