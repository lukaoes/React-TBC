const BurgerMenu = ({ openBurger, toggleBurgerMenu }) => {
  return (
    <div
      className={`burger ${openBurger ? "is-active" : ""}`}
      id="burger"
      // onClick={toggleBurgerMenu}
    >
      <span className="burger-line"></span>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </div>
  );
};

export default BurgerMenu;
