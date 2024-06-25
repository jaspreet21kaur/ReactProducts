import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  var arr=[]
  const [data,setdata]=useState([])
  const [count,setcount]=useState()
  const loadlist=()=>{

    let product=JSON.parse(localStorage.getItem("cartdata"))
    
    setdata(product)
   
}
useEffect(()=>{
    loadlist()
},[])

const handledelete=(name)=>{
        setcount()
  const data=JSON.parse(localStorage.getItem("cartdata"))
  data.filter((el,index)=>{
      if(el.name===name){
              data.splice(index,1)
              localStorage.setItem("cartdata",JSON.stringify(data))
              loadlist()
      }
  })
  
}

const handletotal=()=>{
    var total=arr.reduce((acc,cur)=>acc+cur)
    console.log(total)
    setcount(total)
}

  return (
    <div className='w-full h-full flex flex-col px-10 py-8 '>

    <div className="flex flex-col ml-[4rem]">
         <h1 className='text-3xl text-red-600 font-semibold mb-2'>List</h1>
         <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 border border-blue-100 rounded-lg p-2 ">
             <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
             <div className="overflow-hidden">
                 <table
                 className="min-w-full text-left text-lg font-light text-surface dark:text-white">
                 <thead
                     className="border-b border-neutral-200 font-medium dark:border-white/10">
                     <tr>
                     <th scope="col" className="px-6 py-4">#</th>
                     <th scope="col" className="px-6 py-4">Name</th>
                     <th scope="col" className="px-6 py-4">Price</th>
                     <th scope="col" className="px-6 py-4">Image</th>
                     <th scope="col" className="px-6 py-4">Quantity</th>
                     <th scope="col" className="px-6 py-4">Action</th>
                     
                     </tr>
                 </thead>
                 <tbody>
                     {data?.map((data,index)=>(
                         
                     <tr key={data.name} className="border-b border-neutral-200 dark:border-white/10">
                     <td className="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td>
                     <td className="whitespace-nowrap px-6 py-4">{data.name}</td>
                     <td className="whitespace-nowrap px-6 py-4">{data.price}</td>
                     <td className="whitespace-nowrap px-6 py-4"><img src={data.img}  /></td>
                     <td className="whitespace-nowrap px-6 py-4">{data.quantity}</td>
                     <td hidden> {arr.push(parseInt((data.price)*(data.quantity)))}</td>
                     <td className="whitespace-nowrap flexjjustify-center items-center space-x-4">
                      <button className='bg-red-900 text-white rounded-md px-3 py-1' onClick={()=>handledelete(data.name)}>Delete</button>
                     </td>
                     </tr>
                     ))}
                     
                 </tbody>
                 </table>
             </div>
             </div>
         </div>
         
         <button onClick={handletotal}  className='bg-red-900 my-4 w-fit text-white px-3 font-bold text-lg py-1 rounded-md'>Buy Now</button>
         {count ? (<div> 
          <h1 className='font-bold text-2xl text-red-700'>Description</h1>
          <p className='font-bold text-xl'>Your total : {count}</p>
          <button className='bg-red-900 text-white rounded-md px-3 py-1'>Add Address</button>
          </div> ): null}
     </div>
 </div>
  )
}

export default Cart