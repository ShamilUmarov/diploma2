import classes from "./NavIcon.module.css";
import CartLink from "../../CartLink/CartLink";
function NavIcon() {
  return (
    <ul className={classes.fox}>
      <li>
        <a className={classes.tool} href="/">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a className={classes.tool} href="/">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a className={classes.tool} href="/">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a className={classes.tool} href="/">
          <i className="fab fa-google-plus-g"></i>
        </a>
      </li>
      <li className={classes.tool}>
      <CartLink/>
      </li>

      <li>
      <a className={classes.number} href="/">
          00000000
        </a>
      </li>
    </ul>
  );
}

export default NavIcon;
