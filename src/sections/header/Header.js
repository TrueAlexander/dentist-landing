import {GrFormClose} from 'react-icons/gr'
import {FaTooth} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
  return (
    <div>
      <div className="nav__toggle" id="nav-toggle">
        <GiHamburgerMenu />
      </div>
      <header className="header" id="header">
          <nav className="nav container">
              <div className="nav__logo">
                  <a href="index.html" className="nav__logo-text">
                    <FaTooth/>
                  </a>
              </div>

              <div className="nav__menu">
                  <div className="menu">
                      <ul className="nav__list">
                          <li className="nav__item">
                              <a href="#home" className="nav__link active-link">Home</a>
                          </li>
                          <li className="nav__item">
                              <a href="#about" className="nav__link">Sobre Mim</a>
                          </li>
                          <li className="nav__item">
                              <a href="#skills" className="nav__link">Qualificações</a>
                          </li>
                          <li className="nav__item">
                              <a href="#work" className="nav__link">Meu Consultório</a>
                          </li>
                          <li className="nav__item">
                              <a href="#services" className="nav__link">Serviços</a>
                          </li>
                          <li className="nav__item">
                              <a href="#contact" className="nav__link">Contatos</a>
                          </li>
                      </ul>
                  </div>
              </div>

              <div className="nav__close" id="nav-close">
                  <GrFormClose/>
              </div>
          </nav>
      </header>
    </div>
  )
}

export default Header
