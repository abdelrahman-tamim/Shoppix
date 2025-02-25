import { useRef, useState } from "react";
import styles from "./loginpage.module.css"
import axios from "axios";
import { useForm } from "react-hook-form"
import axiosInstance from "../../axiosInstance";



export default function signinPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  


 const onSubmit= async (data)=>{
   try{
    const response=await axiosInstance.post("http://localhost:3000/users",{
     Email:data.Email,
     Password:data.Password
    })
    alert("You Have Succsufully Signed in");
    reset();
  }catch(err){
    setError(err)
  } 

    
 }

  return (
    <div className={styles.logindiv}>
      <form onSubmit={handleSubmit(onSubmit)} className={`bg-white p-6 rounded-lg shadow-md w-96 ${styles.logform}` }>
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
    
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
           {...register("Email",{
            required:"You must right A valid E-Mail",
            minLength:{value:5,message:"Email should be more than 5 charchters"}

          }
          )}
          
          />
          {errors.Email&&(
            <p>{errors.Email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          {...register("Password",{
            required:"Password is requierd",
            minLength:{value:5,message:"Password Must be Atleast 5 charachters"}
          }
         
          )}
          />
           {errors.Password && (
            <p>{errors.Password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={`w-fulltext-white py-2 rounded-lg ${styles.logbtn}`}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
