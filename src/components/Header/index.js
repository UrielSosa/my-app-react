import { Link } from 'react-router-dom';
import Button from "./Button";
import logo from './assets/images/logo.png';

function Header({ links }) {

  const handleSubmit = (e) =>{
    e.preventDefault();

    let input = e.target.search.value;
    console.log(input);
    if (input.length >= 3) {
        // enviar data
    }
  }


  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img
                  src={logo}
                  alt="logo"
                  style={{ "maxWidth": "112px" }}
                />
              </Link>

              <ul className="nav">
                {
                  links.map((link, i) => <Button text={link} key={link + i} />)
                }
              </ul>

              <a href="/" className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
          <div className='col-4 d-flex flex-column justify-content-center'>
              <form onSubmit={e => handleSubmit(e)}>
                <input type="text" name='search' className='form-control' />
              </form>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
