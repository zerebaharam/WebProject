import Header from './Header'
import '../css/MainBlock.css'
import bird from '../img/bird.png';
import { useState } from 'react';

function MainBlock(){

    const[text, setText] = useState('Реплики картин  от')

    function hello(){
        setText('Добро пожаловать на')
    }



    return(
<section class="main_block">
<Header />
<div class="container">
    <img src={bird} alt="bird"/>
    <article>
        <h1 className='title'>{text} <span onClick={hello}>Ink. House</span></h1>
        <p className='text'>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
        <a href="#">
            <button className='btn'>Продукция</button>
        </a>
    </article>
</div>
</section>
)
}

export default MainBlock