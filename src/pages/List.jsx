import React, {  useState ,useEffect} from 'react'
import { Link} from 'react-router-dom'

const List = () => {
    const [data,setdata]=useState([])
//    const [hidemo,sethide]=useState(false)
//    const [confirmdel,setconfirmdel]=useState(false)
    const loadlist=()=>{
        let product=JSON.parse(localStorage.getItem("products"))
        setdata(product)
       
    }
    useEffect(()=>{
        loadlist()
    },[])
 

   
    
    
    const handledelete=(name)=>{
        // sethide(true)
        
            
            const cartdata=JSON.parse(localStorage.getItem("cartdata"))
            if(cartdata?.length){
                    cartdata.filter((el,index)=>{
                        if(el.name===name){
                            cartdata.splice(index,1)
                            localStorage.setItem("cartdata",JSON.stringify(cartdata))
                            
                        }
                    })
                }
                const data=JSON.parse(localStorage.getItem("products"))
                data.filter((el,index)=>{
                    if(el.name===name){
                        data.splice(index,1)
                        localStorage.setItem("products",JSON.stringify(data))
                        
                        loadlist()
                    }
                })
        
        
        
    }
 

  return (
    
    <div className='w-full h-full flex flex-col px-10 py-8 relative'>
       {/* {hidemo && <div id='modal' className="modal absolute shadow-lg shadow-black  bg-red-900 text-white p-10 rounded-md left-[40%] top-[50%]">
                <h1 className='p-5'>Do you want to delete it ?</h1>
                <button className='bg-white text-red-900 rounded-md px-2 py-1 mx-3 'onClick={()=>setconfirmdel(true)}>Delete</button>
                <button className='bg-white text-red-900 rounded-md px-2 py-1' onClick={()=>sethide(false)}>Cancel</button>
        </div>} */}
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
                     <th scope="col" className="px-6 py-4">Action</th>
                     </tr>
                 </thead>
                 <tbody>
                     {data.map((data,index)=>(
                         
                     <tr key={data.name} className="border-b border-neutral-200 dark:border-white/10">
                     <td className="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td>
                     <td className="whitespace-nowrap px-6 py-4">{data.name}</td>
                     <td className="whitespace-nowrap px-6 py-4">{data.price}</td>
                     <td className="whitespace-nowrap px-6 py-4"><img src={data.img}  /></td>
                     <td className="whitespace-nowrap flexjjustify-center items-center space-x-4">
                         
                         <Link to={`/view/${data.name}`}>
                         <button className='bg-red-400 text-white px-3 py-1 rounded-md'>View</button>
                         </Link>
                         
                        
                         <Link to={`/edit/${data.name}`}>
                         <button className='bg-red-500 text-white px-3 py-1 rounded-md'>Edit</button>
                         </Link>
                         
                         
                         <button title='Double Click' onClick={()=>handledelete(data.name)} className='bg-red-600 text-white px-3 py-1 rounded-md'>Delete</button>
                     </td>
                     </tr>
                     ))}
                     
                 </tbody>
                 </table>
             </div>
             </div>
         </div>
     </div>
 </div>
  )
}

export default List