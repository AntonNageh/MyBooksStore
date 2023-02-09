import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState, React, useEffect } from 'react'
import * as BooksAPI from '../BookApi'

import SearchPage from './Pages/SearchPage/SearchPage'
import MainPage from './Pages/MainPage/MainPage'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  let [books, Setbooks] = useState([])
  
  const changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((books) => {
      Setbooks(books)
    })
  }

  useEffect(()=>
  {
    BooksAPI.getAll().then((books) => {
      Setbooks(books)
    })
  },[])
 
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<MainPage changeShelf={changeShelf} books={books} />}></Route>
      <Route path='/search' element={<SearchPage changeShelf={changeShelf} books={books}/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
