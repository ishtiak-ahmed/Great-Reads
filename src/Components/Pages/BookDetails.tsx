import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../interfaces";
// import ReactHtmlParser, {
//   processNodes,
//   convertNodeToElement,
//   htmlparser2,
// } from "react-html-parser";
import {
  addRating,
  addToCompletedList,
  addToReadingList,
  removeFromReadingList,
} from "../../Redux/Actions/bookActions";

type Params = {
  id: string;
};

export default function BookDetails() {
  const { id } = useParams<Params>();
  const dispatch = useDispatch();
  const bookState = useSelector((state: RootState) => state.books);

  const book = bookState.all.find((book) => book.id === +id)!;
  const rating = book.rating.reduce((s, r) => s + r, 0) / book.rating.length;
  const [listType, setListType] = useState(book.status);
  const handleAdd = () => {
    dispatch(addToReadingList(book.id));
    setListType("readList");
    localStorage.setItem("data", JSON.stringify(bookState));
  };
  const handleRemove = () => {
    dispatch(removeFromReadingList(book.id));
    setListType("allList");
  };
  const handleDone = () => {
    dispatch(addToCompletedList(book.id));
    setListType("done");
  };

  const handleRating = (e: Event | any) => {
    const newRating = +e.target.value;
    dispatch(addRating(book.id, newRating));
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(bookState));
  }, [dispatch, bookState]);
  return (
    <main className="book_details">
      <div className="cover">
        <img src={book.image} alt="" />
      </div>
      <div className="details">
        <h1>{book.name}</h1>
        <p>
          <strong>Genre: </strong> {book.genre}
        </p>
        <p>
          by <strong>{book?.author}</strong>
        </p>
        {parse(`<div>${book.description}</div>`)}
        <p>
          <strong>Rating:</strong> {rating}
        </p>
        <div className="btns">
          {listType === "allList" ? (
            <button className="add_btn" onClick={handleAdd}>
              Add To Reading List
            </button>
          ) : listType === "readList" ? (
            <>
              <button className="done_btn" onClick={handleDone}>
                Add To Done List
              </button>
              <button className="remove_btn" onClick={handleRemove}>
                Remove From Reading List
              </button>
            </>
          ) : (
            <span>
              Rate This Book:{" "}
              <select
                onChange={handleRating}
                name="rating"
                id=""
                defaultValue="1"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
              </select>
            </span>
          )}
        </div>
      </div>
    </main>
  );
}
