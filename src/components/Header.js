import logo from '../img/logo.svg';
import shopcard from '../img/shopping-cart.svg';
function Header(){
    return(
<header>
        <div class="container">
                <a href="index.html">
                   <img src={logo} alt="logo"/>
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
