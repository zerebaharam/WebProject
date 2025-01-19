import star from '../img/star.png';
import '../css/Collection.css';
function Collection(){
    return(
        <section class="new_collection">
        <div class="container">
            <article>
                <div>
                    <img src={star} alt="star"/>
                    <h2>Новая коллекция французских авторов</h2>
                </div>
                <p class="first">Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.</p>
                <p class="last">Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.</p>
                <a href="#">
                    <button>Ознакомиться</button>
                </a>
            </article>
        </div>
    </section>
    )
}

export default Collection;