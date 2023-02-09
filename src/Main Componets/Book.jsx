import React from 'react'

import { MenuItem, Select} from '@mui/material'
const Book = ({changeShelf,book,currentShelf}) => {
    let Thumbnail
    console.log(book)
    if (book.imageLinks)
    {
      Thumbnail = book.imageLinks.thumbnail
    }
    else {
      Thumbnail = ''
    }
  return (
    <div>
        <div className='BookTop'>
            <div className='cover' style={
                {backgroundImage:`url("${Thumbnail}")`,
                height:"200px",
                width:"150px" ,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover" 
                 }
                 }>
            <div>
                <Select style={{ backgroundColor:'white' }} onChange={(e) => {changeShelf(book, e.target.value)}} value={currentShelf}>
                    <MenuItem value="move" disabled>Move to..</MenuItem>
                    <MenuItem value="currentlyReading">Currently Reading</MenuItem>
                    <MenuItem value="wantToRead">Want to Read</MenuItem>
                    <MenuItem value="read">Read</MenuItem>
                    <MenuItem value="none">None</MenuItem>
                </Select>
            </div>
            </div>
          <div className="Booktitle">{book.title}</div>
          <div className="Bookauthor">{book.authors}</div>
        </div>
    </div>
  )
}

export default Book