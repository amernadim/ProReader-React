import React from "react";
import { useNavigate } from "react-router-dom";

const SingleBook = ({ book }) => {
  // console.log(book);
  const { title, price, image, url, isbn13 } = book;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/book/${isbn13}`)
  }
  return (
    <div onClick={handleNavigate} className="card w-full bg-base-100 shadow-xl flex justify-center items-center">
      <figure className="">
        <img
          src={image}
          alt="Books"
          className="rounded-xl"
        />
      </figure>
    </div>
  );
};

export default SingleBook;
