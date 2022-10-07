import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import ItemListContainer from './routes/ItemListContainer';
/* import ItemDetailContainer from './routes/ItemDetailContainer'; */

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<ItemListContainer/>} />
      <Route exact path="/category/:id" element={<ItemListContainer/>} />
      {/* <Route exact path="/item/:id" element={<ItemDetailContainer/>} /> */}
    </Routes>
      </BrowserRouter>
  );
}

