const Navbar = ({ theme, onToggleTheme }) => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand">MK PORTFOLIO</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="theme-toggle" onClick={onToggleTheme} type="button">
          {theme === "dark" ? "light mode" : "dark mode"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
