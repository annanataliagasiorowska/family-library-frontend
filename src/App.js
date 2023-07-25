import './App.css';
import { useState, useEffect } from 'react';
import Books from './components/Books';

const App = () => {
  const API_URL = 'http://localhost:8080/api/books';
  const[books, setBooks] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const fetchBooks = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error('Did not receive data');
      const listBooks = await response.json();
      setBooks(listBooks);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  return (
    <div>
      <h1>My books</h1>
      <Books books={books} />
    </div>
  )
}
export default App;
