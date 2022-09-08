import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Recipes from './Recipes';
import Recipe from './Recipe';

function App() {

  return (
    <div className='container'>

      <header>
        <h1>Сайт с рецептами на любой вкус!</h1>
        <h2>Приятного аппетита!</h2>
        <Link to="/" className="menulink">Главная</Link>
        <Link to="soup" className="menulink">Супы</Link>
        <Link to="main" className="menulink">Основные блюда</Link>
        <Link to="dessert" className="menulink">Десерты</Link>
      </header>

      <main>
      <h3 className='greeting'>Рады Вас видеть на нашем сайте!</h3>
      <Routes>
          <Route path="/"></Route>
          <Route path=":category" element={<Recipes/>}> </Route>
          <Route path=":category/:index" element={<Recipe/>}></Route>
          <Route path=":category/:index/:picture" element={<Recipe/>}></Route>
      </Routes>
      </main >
    </div>
  );
}

export default App;