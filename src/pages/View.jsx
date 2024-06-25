import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const View = () => {
    const {name}=useParams()
    let navigate=useNavigate()
    const [data,setdata]=useState()
    const [count,setcount]=useState(1)
    const loaduserdata=()=>{
        let product=JSON.parse(localStorage.getItem("products"))
        const find=product.filter((el)=>{
            if(el.name===name){
                return true
            }
        })
        setdata(find[0])
        
    }
    
    useEffect(()=>{
      loaduserdata()
    },[])

    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
       {count===1 ? setcount(count) : setcount(count-1)}
    }

    const addtocart=()=>{
        const cartdata=JSON.parse(localStorage.getItem("cartdata")) || []
        let newcart={...data,quantity:`${count}`}
        const pro=[...cartdata,newcart]

        localStorage.setItem('cartdata',JSON.stringify(pro))
        navigate("/cart")
    }
  return (
    <div>
        {data && (
        <div className='flex justify-center items-center p-5'>
          <div className='flex flex-col   px-4 py-2 border w-[50%]'>
              <h1 className='text-red-700 font-bold text-2xl my-4 ml-10'>{data.name} ❤️</h1>
              <div className='flex justify-around'>
              <div className='flex gap-x-4 items-center '>
                  <p className='font-semibold text-lg text-red-400'>Price</p>
                  <h1 className='text-red-500 text-lg font-semibold'>{data.price} </h1>
              </div>
            
              <div className='flex gap-x-4 items-center'>
                  <p className='font-semibold text-lg text-red-400'>Image</p>
                  <h1 className='text-red-500 text-lg font-semibold'><img src={data.img}  /></h1>
              </div>
              </div>

              <hr className='h-[0.11rem] bg-red-300 m-3' />
             <div className='flex  m-4 p-2 justify-center items-center gap-x-4 w-fit'>
                <p className='text-lg font-bold text-red-900'>Quantity</p>
                <div className='flex gap-x-2 border px-4 py-1'>
                    <button onClick={increment} className='text-md font-bold'>+</button>
                    <p>{count}</p>
                    <button onClick={decrement} className='tex-md font-bold'>-</button>
                </div>
             </div>
            <button onClick={addtocart} className='text-white bg-red-900 text-md font-bold px-3 py-2 rounded-md'>Add to Cart</button>

          </div>
        </div>
     )}
     </div>
  )
}

export default View