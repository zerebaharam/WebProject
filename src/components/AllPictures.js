import '../css/Pictures.css';
import data from '../data.json'


function AllPictures(){
    return (
        <div>
                {data.map(picture=>(
                    <nav> 
                        <img src={process.env.PUBLIC_URL + "/" + picture.img} alt={picture.name}/>
                        <h3>{picture.author}</h3>
                        <h4>{picture.name}</h4>
                        <h5>{picture.desc}</h5>
                        <h6>{picture.price}</h6>
                        <button>В корзину</button>
                    </nav>
                ))}
        </div>
    )
}
    

export default AllPictures;
