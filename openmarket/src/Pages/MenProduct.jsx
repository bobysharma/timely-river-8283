import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useReducer } from "react";
import { useState } from "react";
import ProductCard from "../Component/ProductCard";
const initialState={
    menproducts:[],
    isLoading:true,
    isError:'',
}
const reducer=(state,action)=>{
    switch(action.type){
        case "sucess_fetch":
            return{
                ...state,
                menproducts:action.payload,
                isLoading:false,
                isError:"",
            };
            case "failed":
                return{
                    menproducts:[],
                isLoading:false,
                isError:"Something went wrong",

                };
                default:
                    throw new Error();
    }

}
const MenProduct=()=>{
  const[state,dispatch]=useReducer(reducer, initialState);
  const{menproducts,isError,isLoading}=state; 

const getdata=()=>{
    axios.get(` http://localhost:8080/male`)
    .then((res)=>{
        dispatch({type:"sucess_fetch",payload:res.data})
    }).catch((err)=>{
        dispatch({type:"failed",payload:err})

    })
}
console.log(menproducts)
 useEffect(()=>{
getdata();
 },[])
    return(
        <>
       <Grid templateColumns="repeat(4,1fr)" gap={6} width="100%">
        {
            menproducts.map((item)=>(
              <GridItem  key={item.id}  w="100%" h="100%" bg="blue.500">
                <ProductCard id={item.id} brand={item.brand} 
                description={item.description} 
                name={item.name}
                price={item.price}
                 images={item.images}
                 strikeOfPrice={item.strikeOfPrice}
                > 
                
                </ProductCard>
               
              </GridItem>
            )

             )
        }
        
        </Grid>
        </>
    )
}
export default MenProduct;