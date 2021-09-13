import {
  Link
} from "react-router-dom";

const Header = () => {


  return (
      <nav className="grid grid-cols-3 gap-8 font-extrabold">
        <h1 className="justify-self-start">
          <Link to="/">FEILIN DESIGN</Link>
        </h1>
        <Link to="/" className="justify-self-start">WORK</Link>
        <Link to="/about" className="justify-self-start">ABOUT</Link>
      </nav>
  )
}

export default Header;