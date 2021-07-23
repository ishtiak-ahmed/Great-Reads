import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces";
import Book from "../Book";

export default function AllBooks() {
  const allBooks = useSelector((state: RootState) => state.books.all);
  return (
    <main className="all_books">
      {allBooks.map((book) => (
        <Book key={book.id} item={book} />
      ))}
      {allBooks.map((book) => (
        <Book key={book.id} item={book} />
      ))}
    </main>
  );
}
