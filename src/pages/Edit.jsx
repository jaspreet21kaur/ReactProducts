import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Edit = () => {
    const {name}=useParams()
    const navigate=useNavigate()
    const [newname,setnewname]=useState("")
    const [data,setdata]=useState("")
    const [error,seterror]=useState("")
    const [newprice,setprice]=useState("")
    const display=()=>{
        const pro=JSON.parse(localStorage.getItem("products"))
        const find=pro.filter((el)=>{
            if(el.name===name){
                return true
            }
        })
        setdata(find[0])
    }
    
      
    const loaddata=(e)=>{
        e.preventDefault()
        if(newname==="" || newprice===""){
            seterror("All fields are required")
        }else if(isNaN(newprice)){
            seterror("Invalid price")
        }
        else{
               seterror("")
            const product=JSON.parse(localStorage.getItem("products"))
            const cartdata=JSON.parse(localStorage.getItem("cartdata")) 
            if(cartdata?.length){
                cartdata.forEach((el)=>{
                    if(el.name===name){
                        el.name=newname
                        el.price=newprice
                        localStorage.setItem("cartdata",JSON.stringify(cartdata))
                    }
                })
            }
            product.forEach((el)=>{
                if(el.name===newname){
                    seterror("Name already exists")
                    return
                }
                if(el.name===name){
                    el.name=newname
                    el.price=newprice
                    seterror("")
                    localStorage.setItem("products",JSON.stringify(product)) 
                    navigate("/list")
                }
            })
        }
        
    }
   
    
   useEffect(()=>{
       display()
   },[])
   
   const reset=()=>{
     setnewname("")
     setprice("")
   }

    return (
    <div className='flex justify-center my-4'>
        <div className='flex flex-col gap-y-2'>
        <form >

        <p className='text-xl font-bold text-red-900'>Pervious name : {data.name}</p>
        <input type="text" className='border px-2 py-1 mb-3' placeholder='Enter new name' name='newname'   value={newname} onChange={(e)=>setnewname(e.target.value)} />
        <p className='text-xl font-bold text-red-900'>Pervious price:{data.price}</p>
        <input type="text"  value={newprice} className='border px-2 py-1 mb-3' placeholder='Enter new price' name='newprice' onChange={(e)=>setprice(e.target.value)} />
        <p>{error}</p>
        <button type='submit' className='bg-red-900 px-7 py-1 rounded-md text-white' onClick={loaddata}>Submit</button>
        </form>
        <button onClick={reset}  className='bg-red-900 px-2 py-1 w-[40%] rounded-md text-white'>Reset</button>

        </div>
    </div>

    )
}

export default Edit