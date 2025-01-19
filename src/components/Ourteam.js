import paint from '../img/paint.png'
import team1 from '../img/team1.svg'
import team2 from '../img/team2.svg'
import team3 from '../img/team3.svg'
import '../css/Ourteam.css'
function Ourteam(){
    return(
        <section class="our_team">
        <div class="container">
            <img src={paint} alt="paint"/>

            <article>
                <h2>Наша команда</h2>
                <p>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
                <div>
                    <img src={team1} alt="team1"/>
                    <img src={team2} alt="team2"/>
                    <img src={team3} alt="team3"/>
                </div>
            </article>
        </div>
    </section>
    )
}
 export default Ourteam;
 