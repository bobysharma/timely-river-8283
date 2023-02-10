import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Women from "../Component/Navbar/Women";
import Men from "../Component/Navbar/Men";

const Home=()=>{
    const[show ,setShow]=useState("women");
    return(
        <>
        <Flex style={{width:"80%",margin:"auto",gap:"10px",}}>

<NavLink style={({isActive})=>(isActive?{color:"black",borderBottom:"1px solid yellow",textDecoration:"None"}:{color:"#AF99A4"})} onClick={()=>setShow("men")}>Men</NavLink>
<NavLink style={({isActive})=>(isActive?{color:"black"}:{color:"#AF99A4"})} onClick={()=>setShow("women")}>Women</NavLink>
</Flex>

        {show=="men"?<Men />:<Women />}
       
        </>
    )
}
export default Home;