import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({title, author, body, img_url, id}) => {
    return (
        <div className="card">
            
            <div className="card__header">
               <Link to={`/${id}`}><img src={img_url} alt="card__image" className="card__image" width="600" /></Link> 
            </div>
            <div className="card__body">
                <span className="tag tag-blue">Tag</span>
               <h4>{title}</h4>
                <p>{body.slice(0,30)+'...'}</p>
            </div>
            <div className="card__footer">
                <div className="user">
                    <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image" />
                    <div className="user__info">
                        <h5>{author}</h5>
                        <small>2h ago</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;