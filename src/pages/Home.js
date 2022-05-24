
const Home = () => {
    const axios = require('axios');
    axios.get('https://jsonblob.com/api/jsonBlob/978779242053779456').then(res => console.log("axios ",res.data))
    return ( 
        <div className="home">
            Home Page
        </div>
     );
}
 
export default Home;