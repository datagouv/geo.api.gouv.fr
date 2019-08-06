import Link from 'next/link'

import HamburgerMenu from './hamburger-menu'

const links = [
  {text: 'Adresse', href: '/adresse'},
  {text: 'Cadastre', href: '/cadastre'}
]

const extendLinks = [
  ...links,
  {text: 'Découpage Administratif', href: '/decoupage-administratif'}
]

export default () => (
  <header className='navbar' role='navigation'>
    <div className='navbar__container'>

      <Link href='/'>
        <a className='navbar__home' href='index.html'>
          <img className='navbar__logo' src='/static/images/logos/logo-marianne.svg' alt='geo.api.data.gouv.fr' />
          <span className='navbar__domain'>geo.api</span><img src='/static/images/logos/pointgouvfr.svg' className='navbar__gouvfr' alt='data.gouv.fr' />
        </a>
      </Link>

      <nav>
        <ul className='nav__links'>
          {links.map(link => (
            <li key={link.text} className='nav__item'>
              <Link href={link.href}><a>{link.text}</a></Link>
            </li>
          ))}

          <li className='nav__item'>
            <div className='dropdown'>
              Découpage administratif
              <div className='dropdown-content'>
                <Link href='/decoupage-administratif/communes'><a>Communes</a></Link>
                <Link href='/decoupage-administratif/departements'><a>Départements</a></Link>
                <Link href='/decoupage-administratif/regions'><a>Régions</a></Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <div className='hamburger-menu'>
        <HamburgerMenu links={extendLinks} />
      </div>
    </div>

    <style jsx>{`
      .navbar__container {
        flex-flow: nowrap;
        align-items: center;
      }

      .navbar__home:hover {
        background: none;
      }

      .navbar__gouvfr {
        width: 72px;
      }

      .hamburger-menu {
        display: none;
      }

      @media (max-width: 800px) {
        nav {
          display: none;
        }

        .hamburger-menu {
          display: block;
          margin: 0 1em;
        }
      }

      @media (max-width: 380px) {
        .nav__logo {
          height: 60px;
        }
      }
    `}</style>
  </header>
)
