import { useState } from "react";
import { assets } from "../../assets/assets";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [item, setItem] = useState("");
  return (
    <div className={styles.sidebar}>
      <ul>
        <Link to="/add">
          <li
            className={item === "add-items" ? styles.active : ""}
            onClick={() => setItem("add-items")}
          >
            <img src={assets.add_icon} alt="" />
            <span className={styles.itemName}>Add items</span>
          </li>
        </Link>
        <Link to="/list">
          <li
            className={item === "list-items" ? styles.active : ""}
            onClick={() => setItem("list-items")}
          >
            <img src={assets.order_icon} alt="" />
            <span className={styles.itemName}>List items</span>
          </li>
        </Link>
        <Link to="/orders">
          <li
            className={item === "orders" ? styles.active : ""}
            onClick={() => setItem("orders")}
          >
            <img src={assets.order_icon} alt="" />
            <span className={styles.itemName}>Orders</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
