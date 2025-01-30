import logo from '../img/logo.svg';
import shopcard from '../img/shopping-cart.svg';
import {useState} from 'react';

function Header(){

    const[txt, setTxt] = useState()

    

    function logoClick(){
        setTxt('Welcome to our website')
    }


    return(
<header>
        <div class="container">
                <a href="index.html">
                   <img src={logo} alt="logo" onClick={logoClick}/> 
                   <h1 className='txt'>{txt}</h1>
                 
                </a>

                <aside>
                    <menu>
                        <li><a href="#">Репродукции</a></li>
                        <li><a href="#">Новинки</a></li>
                        <li><a href="#">О нас</a></li>
                    </menu>
                    <div>
                        <img src={shopcard} alt="shopping-cart"/>
                    </div>
                </aside>
        </div>
</header>
)
}
export default Header;
