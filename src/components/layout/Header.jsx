const Header = () => {
  let openBurger = false

  const toggleBurgerMenu = () => {
    openBurger = !openBurger

    const burgerMenu = document.getElementById("burger")
    const menu = document.getElementById("menu")

    if (burgerMenu && menu) {
      burgerMenu.classList.toggle("is-active", openBurger)
      menu.classList.toggle("is-active", openBurger)
    }
  }

  return (
    <header className="header">
      <nav className="navbar container">
          <a href="/" className="brand">LUKMART</a>
          <div 
            className={`burger ${openBurger ? 'is-active' : ''}`} 
            id="burger" 
            onClick={() => toggleBurgerMenu()}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
          <div className={`menu ${openBurger ? 'is-active' : ''}`} id="menu">
            <ul className="menu-inner">
                <li className="menu-item"><a href="/" className="menu-link">Home</a></li>
                <li className="menu-item"><a href="/" className="menu-link">Products</a></li>
                <li className="menu-item"><a href="/" className="menu-link">About</a></li>
                <li className="menu-item"><a href="/" className="menu-link">Contact</a></li>
            </ul>
          </div>
          <a href="/" className="menu-block">REGISTER</a>
      </nav>
    </header>
  )
}

export default Header
