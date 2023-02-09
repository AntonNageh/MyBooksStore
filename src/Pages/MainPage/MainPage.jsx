import React from 'react'
import { Link } from 'react-router-dom'
import Book from '../../Main Componets/Book'
import add from '../../Images/add.png'
import Navbar from '../../Main Componets/Navbar'

const MainPage = ({books,changeShelf}) => {
  return (
    <div>
        <Navbar/>
        <div className='container py-5'> 
        <div>
        <h3 className='shelf-title'>Currently Reading : </h3>
        <hr></hr>
        </div>
        
        <div className='ListOfBooks'>
        <ul className="books">
                    {
                      books.filter(book => book.shelf === 'currentlyReading')
                      .map(book => (
                        <li key={book.id} >
                          <Book 
                            book={book}
                            changeShelf={changeShelf}
                            currentShelf="currentlyReading"
                            />
                        </li>
                      ))
                    }
                  </ul>
        </div>
        </div>
        
        <div className='container'> 
        <div>
        <h3 className='shelf-title'>Want to Read : </h3>
        <hr></hr>
        </div>
        
        <div className='ListOfBooks'>
        <ol className="books">
                    {
                      books.filter(book => book.shelf === 'wantToRead')
                      .map(book => (
                        <li key={book.id} >
                          <Book 
                            book={book}
                            changeShelf={changeShelf}
                            currentShelf="wantToRead"
                            />
                        </li>
                      ))
                    }
                  </ol>
        </div>
        </div>
        
        <div className='container py-5'> 
        <div>
        <h3 className='shelf-title'>Read : </h3>
        <hr></hr>
        </div>
        
        <div className='ListOfBooks'>
        <ol className="books">
                    {
                      books.filter(book => book.shelf === 'read')
                      .map(book => (
                        <li key={book.id} >
                          <Book 
                            book={book}
                            changeShelf={changeShelf}
                            currentShelf="read"
                            />
                        </li>
                      ))
                    }
                  </ol>
        </div>
        </div>
        <Link to="/search" className='add'>
            <img src={add} className="rounded-circle" style={{ width:"45px",padding:"10px",backgroundColor:"green" }}></img>
        </Link>
    </div>
  )
}

export default MainPage