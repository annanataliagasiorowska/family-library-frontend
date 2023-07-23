import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Books from './components/Books';

const App = () => {
  const[books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <div>
      <h1>My books</h1>
      <Books books={books} />
    </div>
  )
}
export default App;
