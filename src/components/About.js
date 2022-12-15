import '../css/about.css';
import instagramIcon from '../icons/instagram.svg';
import linkedinIcon from '../icons/linkedin.svg';
import githubIcon from '../icons/github.svg';


export default function Sobre(){
    return (
        <section className="about">
            <article>
                <h2 className="about__title">Sobre mim</h2>
                <p>Meu nome é Pedro, tenho 17 anos, e meu objetivo é atingir o status de programador fullstack.</p>
            </article>
            <article className="social">
                <h3 className="social__title">Redes sociais</h3>
                <ul className="social__list">
                    <li><a href="https://www.instagram.com/pedrouthcs/" target="_blank"><img className="social__icon" src={instagramIcon} /> </a></li>
                    <li><a href="https://www.linkedin.com/in/pedro-costa-883356244/" target="_blank"><img className="social__icon" src={linkedinIcon} /></a></li>
                    <li><a href="https://github.com/Pedrh316" target="_blank"><img className="social__icon" src={githubIcon} /></a></li>
                </ul>
            </article>
        </section>
    )
}