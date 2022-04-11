const Navbar = (props) => (
  <nav>
    <p onClick={() => props.action("home")}>Home</p>
    <p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/marcllopis/react-recap-page"
      >
        Github
      </a>
    </p>
  </nav>
);

export default Navbar;
