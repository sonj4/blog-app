import axios from 'axios';
import { useState } from 'react';
import './AddPost.css'
import { Route, useNavigate, Routes } from "react-router-dom"
import Loader from '../components/Loader';

const AddPost = ({url, len}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [image_url, setImage] = useState('');
    const [id, setID] = useState(len);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {title,author,image_url,body};
        setIsLoading(true);
        axios.post(url, post)
        .then(function (response) {
            console.log(response);
            setIsLoading(false);
            navigate('/'); // go to home page
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    return ( 
        <div className="addPost">
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Input title..." 
                maxLength={20} 
                required
                onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="Input image url..." 
                required
                onChange={(e) => setImage(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="Author..." 
                maxLength={20} 
                required
                onChange={(e) => setAuthor(e.target.value)}
                />
                <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10" 
                maxLength={250} 
                required
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                 {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding blog...</button>}
            </form>
            
        </div>
     );
}
 
export default AddPost;