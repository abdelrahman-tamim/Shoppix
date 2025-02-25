import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import db from "../../db.json"


const AddProductPage = () => {



    const {register,handleSubmit,formState:{errors},reset}=useForm()
    console.log(db.prouducts.length)

    let prd=useSelector((state)=>state.prouducts)
  
    const onsubmit=async(data)=>{
        let response=await axios.post("http://localhost:3000/prouducts", {
            id:db?.products?.length,
            title:data.title,
            price:data.price,
            image:data.image,
            rating: {
            rate: data.rate,
            count:data.stock
      }
      
        })
        alert("your prouduct Has been Added")

    }

  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
        <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("title",{
                required:"you should put a title for the product"
            })}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("price",{
                required:"you should add the price"
            })}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("image",{
                required:"we need an image for the product"
            })}
          />
          <input
            type="number"
            name="rate"
            placeholder="Rate"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("rate",{
                required:"rate the product please"
            })}
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("stock")}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
