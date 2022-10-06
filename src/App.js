import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import Root from './Root';
import About from './component/About';
import Book from './component/Book';
import ErrorPage from './component/ErrorPage';
import BookDetails from './component/BookDetails';


const router = createBrowserRouter([
 {path : '/' ,
  element : <Root/> , 
  errorElement : <ErrorPage/>,
  children : [
    {path : '/' , element : <Home/>},
    {path : '/home' , element : <Home/>},
    {path : '/about' , element : <About/>},
    {path : '/book' , element : <Book/>,
      loader : async() => {
        return fetch('https://api.itbook.store/1.0/new')
      }
    },
    {path :'/book/:isbn13' , element : <BookDetails/>,
      loader : async({params}) => {
        return fetch(`https://api.itbook.store/1.0/books/${params.isbn13}`)
      }
    }
 ]}
]);

function App() {
  return (
    <div className="App">

     <RouterProvider router={router} />
    </div>
  );
}

export default App;
