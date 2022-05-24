import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Post from './pages/Post';
import AddPost from './pages/AddPost';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Post/>}/>
        <Route path='/add-post' element={<AddPost/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
