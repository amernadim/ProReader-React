import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBook from './SingleBook';

const Book = () => {
  const booksApi = useLoaderData();
  const books = booksApi.books
  // console.log(books);
  return (
    <div className='mt-[80px] mb-8 w-9/12 mx-auto'>
      <h1 className='text-3xl font-bold text-center my-4'>Books Collection</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {
          books.map(book => <SingleBook
          key={book.isbn13}
          book={book}
          ></SingleBook>)
        }
      </div>
    </div>
  );
};

export default Book;