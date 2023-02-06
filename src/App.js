import React, { useEffect, useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import SinglePost from './SinglePost';
import Missing from './Missing';
import About from './About';
import { Route, Routes } from 'react-router-dom';
import Posts from './Posts';

export default function App() {

  const ui = (


    <div className='row vh-100'>
      <div className="col">
        <Header />
      </div>


      <div className="row align-items-center p-0 m-0">
        <div className="col text-center">

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/new' element={<NewPost />} />
            <Route path='/post/:id' element={<SinglePost />} />
            <Route path='*' element={<Missing />} />

          </Routes>

        </div>
      </div>

      <div className="row align-items-end m-0 p-0">
        <div className="col text-center py-2">
          <Footer />
        </div>
      </div>


    </div>

  )
  return ui;
}
