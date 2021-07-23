import { IBook } from "../interfaces";
import { useHistory } from "react-router-dom";

export type Props = {
  item: IBook;
};

export default function Book({ item }: Props) {
  const history = useHistory();
  const handleBookDetails = () => {
    history.push(`./details/${item.id}`);
  };
  return (
    <div className="book_item" onClick={handleBookDetails}>
      <div className="book_item_cover">
        <img src={item.image} alt="" />
      </div>
      <div className="book_item_details">
        <h2 className="book_item_title">{item.name}</h2>
        <p>
          By <strong>{item.author}</strong>
        </p>
        <p>
          {item.description.slice(0, 100)}...
          <span className="read_btn">Read More</span>
        </p>
      </div>
    </div>
  );
}
