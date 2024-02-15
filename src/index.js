import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Login from './auth/login/login';
import Register from './auth/register/register';
import Profile from './profile/Profile';
import Admin from './Admin/Admin';
import Categories from './organic/organic';
import DefaultArticles from './organic/plantsArticles/articles';
import ShowArticle from './organic/showArticles/ShowArticles';
import UserArticles from './organic/plantsArticles/userArticle/userArticle';
import ShowUserAtricles from './organic/showArticles/showuserArticle';
import AlluserArticle from './organic/alluserArticles/AlluserArticle';
import ShowParticularArt from './organic/showArticles/ShowParticularArticle';
import Cattel from './cattele_farming/cattle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/admin' element={<Admin/>}/>
  </Routes>

    <Routes>
      <Route path='/' element={<App />}>
        
      </Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/defaultArticles/:id/:name'  Component={DefaultArticles} />
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/showArticle/:id' element={<ShowArticle/>} />
      <Route path='/userArticle' element={<UserArticles/>} />
      <Route path='/showUserArticles' element={<ShowUserAtricles/>} />
      <Route path='/alluserArticles' element={<AlluserArticle/>} />
      <Route path='/showParticularArt/:id' element={<ShowParticularArt/>} />
      <Route path='/cattel' element={<Cattel/>} />
      
    </Routes>
  </BrowserRouter></>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
