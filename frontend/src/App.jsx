import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import UpdateBook from "./pages/UpdateBook.jsx";
import FindABook from "./pages/FindABook.jsx";
import DisplayAllBooks from "./pages/DisplayAllBooks.jsx";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/addbook" element={<AddBook />} />
      <Route path="/books/deletebook/:id" element={<DeleteBook />} />
      <Route path="/books/updatebook/:id" element={<UpdateBook />} />
      <Route path="/books/getbooks" element={<DisplayAllBooks />} />
      <Route path="/books/findabook/:id" element={<FindABook />} />
    </Routes>
  );
}