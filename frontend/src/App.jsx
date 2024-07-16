import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddBook from './pages/AddBook'
import DeleteBook from './pages/DeleteBook'
import UpdateBook from './pages/UpdateBook'
import FindABook from './pages/FindABook'
import DisplayAllBooks from './pages/DisplayAllBooks'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/addbook" element={<AddBook />} />
      <Route path="/books/deletebook" element={<DeleteBook />} />
      <Route path="/books/updatebook" element={<UpdateBook />} />
      <Route path="/books/getbooks" element={<DisplayAllBooks />} />
      <Route path="/books/findabook" element={<FindABook />} />
    </Routes>
  )
}

export default App