import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useFormik} from "formik"
import { addschema } from '../schema/addschema'



const addvalue={
    name:"",
    price:"",
    img:"",
    
}

const AddProducts = () => {
    const [error,setError]=useState("")
      
    const {values,touched,errors,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:addvalue,
        validationSchema:addschema,
        onSubmit:(values,action)=>{
            const product=JSON.parse(localStorage.getItem('products')) || []
            const find=product.filter((el)=>{
                if(el.name===values.name){
                    return true
                }
            })
            if(find?.length){
                setError("Product already there")
            }else{
                setError("")
                let newproduct=values
                const pro=[...product,newproduct]
                localStorage.setItem('products',JSON.stringify(pro))
                action.resetForm()
            }
        }
    })
    
     
  return (
    <div className='flex justify-center'>
        <div className='flex flex-col gap-y-5'>
        <h1 className='text-xl font-bold text-red-900'>Welcome add you products here !</h1>
        <form onSubmit={handleSubmit}>
            <div className='flex gap-x-2 p-2'>
            <label htmlFor="name" className='text-red-600 font-bold text-lg'>Product name</label>
            <input type="text" className='px-2 py-1  outline-none' placeholder='Enter product name' name='name' value={values.name} onChange={handleChange}  onBlur={handleBlur} required />
            </div>
            {errors.name && touched.name ? <p>{errors.name}</p> : null}
            <div className='flex gap-x-2 p-2'>
                <label htmlFor="price" className='text-red-600 font-bold text-lg'>Product price</label>
                <input type="text" className='px-2 py-1  outline-none' step="0.1" min="1"  name='price' placeholder='Enter product price' value={values.price} onChange={handleChange} onBlur={handleBlur} required/>
            </div>
            {errors.price && touched.price ? <p>{errors.price}</p> : null}
           <div className='flex gap-x-2 p-2'>
            <label htmlFor="image" className='text-red-600 font-bold text-lg'>Product image</label>
            <input type="img" className='px-2 py-1  outline-none' placeholder='Product link' name='img' required value={values.img} onChange={handleChange} onBlur={handleBlur}/>
           </div>
           {errors.img && touched.img ? <p>{errors.img}</p> : null}
           {error  ? <p>{error}</p> : null}

           <button type="submit" className=' gap-x-2 px-3 py-1 mt-2 bg-red-900 text-white rounded-md '>Add product</button>
        </form>
           <Link to={"/list"}><button className=' gap-x-2 px-3 py-1 mt-2 bg-red-900 text-white rounded-md '>See product list</button></Link>

        </div>
    </div>
  )
}

export default AddProducts