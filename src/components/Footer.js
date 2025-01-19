import '../css/Footer.css';
import logo from '../img/logo.svg';
import fb from '../img/facebook_logo.svg'
import inst from '../img/instagram_logo.svg'
import yt from '../img/youtube_logo.svg'

function Footer(){
    return(
        <footer>
        <div class="container">
            <aside>
                <div class="footer_logo">
                    <a href="index.html">
                        <img src={logo} alt="logo"/>
                    </a>
                    <a href="tel:+79995435454">+7 (999) 543-54-54 <br/> <span>Мастерская</span></a>
                </div>
                <div class="footer_menu">
                    <ul>
                        <li>Репродукции</li>
                        <li><a href="#">Франция</a></li>
                        <li><a href="#">Германия</a></li>
                        <li><a href="#">Англия</a></li>
                    </ul>

                    <ul>
                        <li>Новинки</li>
                        <li><a href="#">2021</a></li>
                        <li><a href="#">2022</a></li>
                    </ul>

                    <ul>
                        <li>О нас</li>
                        <li><a href="#">Художники</a></li>
                        <li><a href="#">Менеджеры</a></li>
                    </ul>
                </div>
            </aside>
            <aside>
                <div class="socials">
                    <a href="#">
                        <img src={fb} alt="facebook_logo"/>
                    </a>
                    <a href="#">
                        <img src={inst} alt="instagram_logo"/>
                    </a>
                    <a href="#">
                        <img src={yt} alt="youtube_logo"/>
                    </a>
                </div>
                <p>Ink. House ® <br/>
                All rights reserved</p>
            </aside>
        </div>
    </footer>
    )
}

export default Footer;