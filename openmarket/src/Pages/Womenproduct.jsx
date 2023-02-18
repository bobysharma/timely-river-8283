import { Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useReducer } from "react";
import ProductCard from "../Component/ProductCard";
const initialstate={
    womenproduct:[],
    isloading:true,
    isErr:"",
}
const reducer=(state,action)=>{
switch(action.type){
case "success":
    return{
        ...state,
        womenproduct:action.payload,
        isloading:false,
        isErr:'',
    }
    case "failed":
        return{
            womenproduct:[],
            isloading:false,
            isErr:"something went wrong",
        }
        default:
            throw new Error();

}
}
const Womenproduct=()=>{
    const[state,dispatch]=useReducer(reducer,initialstate)
    const{womenproduct,isError,isLoading}=state; 
    const getData=async()=>{
        axios.get('http://localhost:8080/female').then((res)=>{
            dispatch({type:"success",payload:res.data})
        }).catch((err)=>{
            dispatch({type:"failed",payload:err})

        }) 

    }
    useEffect(()=>{
        getData();

    },[])
    return(
        <>
       <Grid templateColumns="repeat(4,1fr)" gap={6} width="100%">
        {
            womenproduct.map((item)=>(
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
export default Womenproduct;