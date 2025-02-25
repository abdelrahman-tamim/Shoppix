import { useEffect, useRef, useState } from "react";
import styles from "./loginpage.module.css"
import axios from "axios";
import * as jose from 'jose'
import { useForm } from "react-hook-form";
import axiosInstance from "../../axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Slices/UserSlice";


export default function LoginPage() {

  const dispatch=useDispatch()
  const jwtKey = jose.base64url.decode("secret");
   const {register,handleSubmit,formState:{errors},reset}=useForm()
   
   const onSubmit= async(user)=>{
      let response=await axiosInstance.get(`http://localhost:3000/users?Email=${user.Email}`)
      console.log(response)
      if(response.data.length==0){
        console.log("invalid user")
        return
      }
      if(response.data[0].Password != user.Password){
        console.log("invalid user")
        return
      }

      const token=await new jose.SignJWT({
        Email:response.data[0].Email,
        Password:response.data[0].Password
      })
      .setProtectedHeader({ alg: 'HS256' }) // algorithm
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(jwtKey);

      localStorage.setItem("token",token)

     alert("user logged in Succsuflly")

     console.log(user)

     dispatch(addUser(user))
     console.log(dispatch(addUser(user)))
   }
 
 
  return (
    <div className={styles.logindiv}>
      <form onSubmit={handleSubmit(onSubmit)}  className={`bg-white p-6 rounded-lg shadow-md w-96 ${styles.logform}` }>
        <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
   
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
           {...register("Email",{required:"you should Enter Your Email"})}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            {...register("Password",{required:"you enter your Password"})}
           
          />
        </div>
        <button
          type="submit"
          className={`w-fulltext-white py-2 rounded-lg ${styles.logbtn}`}
        >
          Login
        </button>
      </form>
    </div>
  );
}
