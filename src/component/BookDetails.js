import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
  const { title, authors, language, year, price, image, url,publisher,rating ,desc} = book;
  // console.log(title);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mt-[100px] border rounded-none m-10">
      <figure className="">
        <img className=" lg:h-[500px]" src={image} alt="Album" />
      </figure>

      <div className="card-body">
        <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-400">
        BRAND NEW
        </p>
        </div>
        <h2 className="card-title text-3xl font-bold">{title}</h2>
        <p>Authors: {authors}</p>
        <p>Publisher: {publisher}</p>
        <p>Year: {year}</p>
        <p>Rating: {rating}</p>
        <p>{desc}</p>
        <div className="card-actions flex gap-5 justify-end">
          <button className="btn btn-sm bg-teal-400 border-none"> <a href={url}>Download PDF</a> </button>
          <p className="font-bold text-teal-500">Price : {price}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
