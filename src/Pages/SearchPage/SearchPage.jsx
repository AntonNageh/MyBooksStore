import React from 'react'
import Book from '../../Main Componets/Book'
import { useState } from 'react'
import * as BooksAPI from '../../../BookApi'
import { Link } from 'react-router-dom'

import { TextField } from '@mui/material'

const SearchPage = ({books,changeShelf}) => {
   let [matchedBooks, setMatchedBooks] = useState([])

   const UpdateBooks = (query) => {
        if (query.length !==0) {
            BooksAPI.search(query).then((matchedBooks) => {
                if (matchedBooks.error) {
                    setMatchedBooks(matchedBooks = [])
                } else {
                    setMatchedBooks(matchedBooks = matchedBooks)
                }
            }
            )
        } else {
            setMatchedBooks(matchedBooks = [])
        }
    }
  return (
    <div>
        <div className='d-flex p-1 border-bottom border-2 border-success'>
        <Link
           to="/"
            >
                <svg style={{ width:"40px", marginRight:"10px", marginTop:"10px" }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left-circle-fill text-success" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
        </Link>
            {/* <input placeholder='Type book name or author' className='ms-2' style={{ width:"100%" }} onChange={(e)=>UpdateBooks(e.target.value)}>
            </input> */}

        <TextField label="Type book name or author" type="search" className='input'
            onChange={(e)=>UpdateBooks(e.target.value)}
            fullWidth />
   
        </div>
        <div>
        <ul className="books my-5">
                    {
                      matchedBooks.map(matchedBook => {
                        let shelf = "none"
                        books.forEach(book => {
                            if(book.id !== matchedBook.id)
                            {
                            matchedBook.shelf= "none"
                            } else {
                                shelf = book.shelf
                            }
                        })
                   
                    return (
                        <li key={matchedBook.id}>
                        <Book 
                            book={matchedBook}
                            changeShelf={changeShelf}
                            currentShelf={shelf}
                        />
                    </li>
                    )
                })
                    }
        </ul>
        </div>
    </div>
  )
}

export default SearchPage