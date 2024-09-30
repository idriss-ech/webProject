import { assets } from "../../assets/assets";
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={assets.logo} alt="" className={styles.logo} />
      <img src={assets.profile_image} alt="" className={styles.profile} />
    </div>
  );
};

export default Navbar;
