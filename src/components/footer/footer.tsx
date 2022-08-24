import { Link } from "react-router-dom";
import { AppRoute, teamMembers } from "../../const/const";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">


        <nav className="footer__nav nav nav--footer">
          <ul className="nav__list nav__list--footer">
            <li className="nav__item">
              <Link to={AppRoute.TEXTBOOK} className="nav__link">
                Учебник
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to={AppRoute.AUDIO_CHALLENGE}
                className="nav__link"
                href="#"
              >
                Аудиовызов
              </Link>
            </li>

            <li className="nav__item">
              <Link to={AppRoute.SPRINT} className="nav__link" href="#">
                Спринт
              </Link>
            </li>

            <li className="nav__item">
              <Link to={AppRoute.STATS} className="nav__link" href="#">
                Статистика
              </Link>
            </li>
          </ul>
        </nav>

       <span className="footer__year">2022</span>
      </div>
    </footer>
  );
};

export default Footer;
