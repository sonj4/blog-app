import './Post.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
const Post = ({url}) => {
    
    const {id} = useParams();
    //let url = url+`/${id}`;
    let singlePostUrl = url.concat('',`/${id}`);
    const [post,setPost] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getPost = async () => {
            try {
              await axios.get(singlePostUrl).then(data => setPost(data.data));
              setIsLoading(false);
            } catch (e) {
              console.log(e);
            }
          };
          getPost();
    },[])
    console.log(post)
    return (
        <>
            {isLoading ? <Loader /> :
                <>
                    <div className="post" style={{ backgroundImage: `url(${post.image_url})`, opacity: 0.7, backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
                        <h2>{post.title}</h2>
                    </div>
                    <div className="wrapper">
                        <p>{post.body}</p>
                        <h4>Author: {post.author}</h4>
                    </div>
                </>
            }
        </>

    );
}

export default Post;