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
    <>
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
      <div className="search-bar">
        <form class="search">
          <input type="text" class="search_input" placeholder="Search..." />
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="18" height="18"
            viewBox="0 0 24 24"
            className="search_icon"
          >
            <path 
              d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
            />
          </svg>
        </form>
      </div>
    </>
  )
}

export default Header
