import { useEffect, useState } from "react";
import styles from "./List.module.css";
import axios from "axios";
import { END_POINT_URL } from "../../assets/constant";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
const List = () => {
  const [foodList, setFoodList] = useState(false)
  const getFoodList = async () => {
      const response = await axios.get(`${END_POINT_URL}/api/food/all`)
      if(response.data.success){
        setFoodList(response.data.data)
      }
      else{
        toast.error(response.data.message)
      }
  }
  const deleteItem = async(_id)=>{
    const response = await axios.delete(`${END_POINT_URL}/api/food/delete/${_id}`)
    if(response.data.success){
        await getFoodList()
        toast.success(response.data.message)
      
    }
    else toast.error(response.data.message)
  }
  useEffect(()=>{
    getFoodList();
  },[])
  return (
    <div className={styles.list}>
        <div className={`${styles.row} ${styles.head}`}>
          <p>Image</p>
          <p>Name</p>
          <p>Price</p>
          <p>Category</p>
          <p>Action</p>
        </div>
        {foodList && foodList.map((item) => {
          return (
          <div key={item._id} className={styles.row}>
            <img className={styles.food} src={`${END_POINT_URL}/images/${item.image}`} alt="" />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <img className={styles.icon} src={assets.cross_icon} alt=""
                  onClick={()=>deleteItem(item._id)}
                  />
          </div>
        )})}
    </div>
  );
};

export default List;
