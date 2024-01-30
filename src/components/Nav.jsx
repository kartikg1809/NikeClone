const Nav=()=>{
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="images/Nike-Logo.png" alt="logo" className="logo"></img>
        </div>
        <div>
          <ul>
            <li href="#" >Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
        </div>
        <div>
          <button>Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;