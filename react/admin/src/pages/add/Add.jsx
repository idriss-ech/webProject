import {useState } from 'react'
import { assets } from '../../assets/assets'
import styles from './Add.module.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { END_POINT_URL } from '../../assets/constant'
const Add = () => {
  const [image, setImage] = useState(false); 
  const [data, setData] = useState({
    name : '',
    description : '',
    price : '',
    category : 'Salad',
  })
  
  const onChangeHandler = (e)=>{
    const name = e.target.name; 
    const value = e.target.value; 
    setData((values)=>({...values, [name]:value}))
  }
  const addFoodHandler = async (e)=>{
     e.preventDefault();
     const foodData = new FormData()
     foodData.append('name',data.name);
     foodData.append('description',data.description);
     foodData.append('price',Number(data.price));
     foodData.append('image',image);
     foodData.append('category',data.category);
     const response = await axios.post(`${END_POINT_URL}/api/food/add`,foodData);
     if(response.data.success){
        toast.success(response.data.message)
        setData({
          name : '',
          description : '',
          price : '',
          image : '',
          category : 'Salad',
        })
        setImage(false)
      }else{
       toast.error(response.data.message)
     }
  }
  
  return (
    <div className={styles.add}>
      <form onSubmit={addFoodHandler}>
        <div className={styles.field}>
          <p>Upload image</p>
          <label htmlFor="image" className={styles.lb}>
            <img src={image ? URL.createObjectURL(image)  : assets.upload_area} alt="" />
            <br />
            {image && <span className={styles.imageName}>{image.name}</span>}
          </label>
          <input type="file" id="image" name="image" hidden  required
                  onChange={(e)=>setImage(e.target.files[0])}
                />
        </div>
        <div className={styles.field}>
          <p>Product name</p>
          <input type="text" id="name" onChange={onChangeHandler} value={data.name} name="name" placeholder='product name' required/>
        </div>
        <div className={styles.field}>
          <p>Product description</p>
          <textarea type="text" onChange={onChangeHandler} value={data.description} id="description" name="description" placeholder='product description' required/>
        </div>
        <div className={styles.field}>
          <p>Product category</p>
          <select name="category" onChange={onChangeHandler} value={data.category} id="category">
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>
        <div className={styles.field}>
          <p>Product price</p>
          <input type="number" onChange={onChangeHandler} value={data.price} id="price" name="price" />
        </div>
        <button type="submit">ADD</button>
      </form>
    </div>
  )
}

export default Add