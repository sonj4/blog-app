import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Post from './pages/Post';
import AddPost from './pages/AddPost';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from './components/Loader';
import axios from 'axios';
function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  
  useEffect(() => {
    const getPosts = async () => {
      try {
        await axios.get('http://localhost:8000/posts').then(data => setPosts(data.data));
        setIsLoading(false);
        console.log(posts)
      } catch (e) {
        console.log(e);
      }
    };
    getPosts();
  },[])

  const len = posts.length;
  const url = 'http://localhost:8000/posts';
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={isLoading? <Loader/> : <Home posts={posts} />} />
          <Route path='/:id' element={<Post url={url}/>} />
          <Route path='/add-post' element={<AddPost url={url} len={len}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
