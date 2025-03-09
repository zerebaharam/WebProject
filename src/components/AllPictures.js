import '../css/Pictures.css';
import data from '../data.json'
import image1 from '../public/image1.jpeg' 
import image2 from '../public/image2.jpeg' 
import image3 from '../public/image3.jpeg' 





function AllPictures(){
    return (
        <div>
           {data.map(data=>(
                    <nav> 
                        
                       <img key={data.id} src={data.img} alt="../public/image1" width={200} />
                       <h3>{data.author}</h3>
                       <h4>{data.name}</h4>
                       <h5>{data.desc}</h5>
                       <h6>{data.price}</h6>
                       <button>В корзину</button>
                  </nav>
               ))}
        </div>
  )
}
    

export default AllPictures;
