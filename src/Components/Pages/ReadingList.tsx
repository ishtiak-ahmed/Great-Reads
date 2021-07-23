import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces";
import Book from "../Book";

export default function ReadingList() {
  const readingList = useSelector((state: RootState) =>
    state.books.all.filter((book) => book.status === "readList")
  );

  return (
    <main>
      <h2 className="reading_list_title">
        My Reading List ({readingList.length})
      </h2>
      <div className="reading_list">
        {readingList.map((book) => (
          <Book key={book.id} item={book} />
        ))}
      </div>
    </main>
  );
}
