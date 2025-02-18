import { createSlice } from "@reduxjs/toolkit"
import { act } from "react";
import uuidv4 from "uuid4";

let cartSlice=createSlice({ 
    name:"cart",
    initialState:{
        value:[],
        totalquantity:0,
        totalprice:0
    },
    reducers:{
        addtocart:(state,action)=>{
        const newItem={...action.payload,id:uuidv4(),quantity:1};
           state.value.push(newItem);
           state.totalquantity+=1;
           state.totalprice+=action.payload.price;
        
        },
      
        removefromcart:(state,action)=>{
                state.totalquantity-=action.payload.quantity
                state.totalprice-=action.payload.price*action.payload.quantity
                state.value=state.value.filter((item)=>{return item.id!=action.payload.id})
        },
        plusone:(state,action)=>{
            const item=state.value.find((item)=>item.id==action.payload.id)
            item.quantity+=1;
            state.totalquantity+=1;
            state.totalprice+=action.payload.price
        },
        minusone:(state,action)=>{
            let item=state.value.find((item)=>item.id==action.payload.id)
             item.quantity-=1;
             state.totalquantity-=1;
            if(item.quantity<1){
                state.value=state.value.filter((item)=>(item.id !=action.payload.id))
            }
            if(state.totalprice<0){
                state.totalprice=0
            }else{
                 state.totalprice-=action.payload.price
            }
            
              if(state.value.length==0){
                state.totalprice=0;
                state.totalquantity=0;
             } 
            
        }

    }}
)


export const {addtocart,removefromcart,plusone,minusone}= cartSlice.actions
export default cartSlice.reducer