import React from "react";
import Book from "../Book";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces";

export default function CompletedList() {
  const allBooks = useSelector((state: RootState) => state.books.all);
  const completedBook = allBooks.filter((book) => book.status === "done");
  return (
    <main>
      <h2 className="completed_list_title">
        Already Read List ({completedBook.length})
      </h2>
      <div className="completed_list">
        {completedBook.map((book) => (
          <Book key={book.id} item={book} />
        ))}
      </div>
    </main>
  );
}
