import '../css/Pictures.css';
function SellPictures(){
    
        const pictures = document.querySelector('.pictures')


fetch('pictures.json')
.then(response => response.json())
.then(data => {
    data.forEach((picture)=>{
        const nav = document.createElement('nav')
        nav.innerHTML = `<img src="${picture.img}" alt="picture1">
                        <h3>${picture.author}</h3>
                        <h4>${picture.name}</h4>
                        <h5>${picture.desc}</h5>
                        <h6>${picture.price}</h6>
                        <button>В корзину</button>`
        pictures.appendChild(nav)
    })
})
    
}

export default SellPictures;