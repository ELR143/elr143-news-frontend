import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link to='/'>
      <img
        className='header-logo'
        src={"./ELRnews.png"}
        alt='website logo'
      />
    </Link>
  );
}
