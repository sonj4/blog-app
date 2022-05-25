
import Card from '../components/Card';
import './Home.css'
const Home = ({posts}) => {
 console.log(posts)
    
    return ( 
        <div className="home">
           {posts.map(post => {
               return <Card title={post.title} author={post.author} body={post.body} img_url={post.image_url} id={post.id} key={post.id}/>
           })}
        </div>
     );
}
 
export default Home;