import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosInstance from "../../axiosInstance"


let ProductDetails=()=>{
    const {id}=useParams()
    const [product, setProduct] = useState(null);
    const [error,setError]=useState(null) 
    const [loading,setLoading]=useState(true)
  

    useEffect(()=>{
        try {
            let getproduct=async()=>{
                let response= await axiosInstance.get(`/prouducts/${id}`)
               setProduct(response.data) 
            }
            getproduct()
          
           console.log(product)
            
        } catch (err) {
            setError(err.message)
        }finally{
                setLoading(false)
        }
        
    
    },[id])

    return(
        <>
        {loading && (<div>Loading....</div>)}
        {error && (<div>{error}</div>)}
        {!product && (<div>this product does not Exist</div>)}
          <div className="p-5">
      <h1 className="text-2xl font-bold">{product?.title}</h1>
      <img src={product?.image} alt={product?.title} className="w-64 h-64 object-cover" />
      <p className="text-gray-700">{product?.description}</p>
      <p className="text-xl font-semibold">${product?.price}</p>
    </div> 
        
        </>
    )
}

export default ProductDetails