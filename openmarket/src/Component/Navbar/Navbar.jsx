import { Box, Image,Flex,HStack,Center, Divider, color } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
 
import { useState } from "react";
import Women from "./Women";
import Men from "./Men";
const HoverAreaData = {
  "Holiday Gifts": [
      ["Holiday Gifts: Get Inspired", "Holiday Decor", "Stocking Stuffers", "Beauty Gifts", "Cozy Gifts", "Toys & Games", "Holiday Pajamas & Slippers", "UGG Shop", "Make it Pop | Pop in @ForeignBazar"],

      ["All Gifts", "Gifts for Her", "Gifts for Him", "Gifts for Teens", "Gifts for Kids", "Gifts for Babies", "Gifts for Pets", "Gifts for Pets", "Gifts for the Home"],

      ["Gifts by Price", "Gifts on Sale", "Gifts Under $50", "Gifts Under $100", "Luxe Gifts"],

      ["Gifts by Recipient", 'For the Party', 'Host', 'For the Foodie', 'For the Jewelry Lover', 'For the Adventurer', 'For the Techie', 'For the Sports Fan', 'For the One Who Has Everything'],

      ["Holiday Help", 'Free Pickup & Delivery', 'Gift Cards', 'Style Help', 'Festive Events', 'Cozy Gift Ideas', 'Gifts for Coffee Lovers', 'Gifts for Dog Lovers'],

      ['https://n.nordstrommedia.com/id/159b6afc-e0c1-43bb-bd4d-06b954808d48.png']
  ],

  "Holiday Deals": [
      ['Holiday Deals: Get Inspired', 'Cozy Deals Under $100', 'Sweaters as Low as $29', 'Boots Up to 60% Off', 'Bestsellters', 'Limited-Time Sale', 'New Markdowns', 'ForeignBazar Made Sale', 'Gifts on Sale'],

      ['Women', 'New Markdowns', 'Clothing', 'Shoes', 'Handbags & Wallets', 'Jewelry', 'Accessories', 'Beauty', 'Contemporary', 'Designer', 'Plus', 'Petite', 'Maternity', 'Juniors'],

      ['Men', 'New Markdowns', 'Clothing', 'Shoes', 'Accessories', 'Groomming & Cologne', 'Advanced Modern', 'Designer'],

      ['Kids', 'New Markdowns', 'Girls', 'Boys', 'Baby', 'Baby Gear & Essentials', 'Shoes', 'Toys'],

      ['Home', 'Bath', 'Bedding', 'Home Decor', 'Luggage & Travel', 'Tabletop & Kitchen', 'Beauty', 'Cold Weather', 'All Sale'],

      ['https://n.nordstrommedia.com/id/695e017d-2aa7-434c-a7a8-e3fa6f8556c1.png']
  ],

  'Women': [
      ['Women: Get Inspired', 'New Arrivals', 'Holiday Deals', 'Black-Owned & Founded Brands', 'contemporary', 'ForeignBazar Made', 'Make it Pop | Pop-in@ForeignBazar', 'Shop by Trend', 'Sustainable Style'],

      ['Clothing', 'Activewear', 'Blazers, Suits & Separates', 'Coats & Jackets', 'Dresses', 'Jeans & Denim', 'Jumpsuits & Rompers', 'Lingerie, Hosiery & shapewear', 'Loungewear', 'Pants & Leggings', 'Skirts', 'Sleepwear & Robes', 'Sweaters', 'Sweaters & Hoddies'],

      ['Shoes', 'Booties', 'Boots', 'Clogs', 'Comfort', 'Dress Shoes', 'Flats', 'Heels', 'Mules & Slides', 'Oxfords & Loafers', 'Running Shoes', 'Sandals', 'Slippers', 'Sneakers & Athletic', 'Snow & Winter', 'Sneaker Release Calendar'],

      ['Handbags', 'Backpacks', 'Belt Bags', 'Clutches & Pouches', 'Crossobdy Bags', 'Designer Bags', 'Shoulder Bags', 'Tote Bags', 'Wallets & Card Cases', 'Language & Travel', 'Belts', 'Gloves & Mittens', 'Hats'],

      ['Jewelry', 'Bracelets', 'Earnings', 'Necklaces', 'Rings', 'Watches', 'Fine Jewelry', 'Engagement & Wedding', 'Experience Fine Jewelry'],

      ['https://n.nordstrommedia.com/id/98107c78-9f0c-45c9-ad92-23e61b8b935b.jpg']
  ],

  'Men': [
      ['Men: Get Inspired', 'New Arrivals', 'Holiday Deals', 'Advanced Modern', 'Black-Owned & - Founded Brands', 'Bestsellers', "Men's Looks", 'New Concepts: Burberry', 'Nordstrom Made', 'Sneaker Release Calendar', 'Sports Fan'],

      ['Clothing', 'Activewear', 'Blazers & Sport Coats', 'Coats & Jackets', 'Dress Shirts', 'Jeans', 'Lounge, Pajamas & Robes', 'Pants', 'Polo Shirts', 'Shirts', 'Suits & Separates', 'Sweaters', 'Sweatshirts & Hoodies', 'Swimwear & Board Shorts', 'T-Shirts'],

      ['Shoes', 'Boots', 'Comfort', 'Dress Shoes', 'Loafers & Slip-Ons', 'Oxfords & Derbys', 'Running Shoes', 'Sandals & Filp-Flops', 'Slippers', 'Sneakers & Athletic', 'Snow & Winter', 'Body Care & Deodorant', 'Cologne'],

      ['Accessories', 'Backpacks', 'Bags', 'Belts', 'Dopp Kits & Toiletry Bags', 'Gloves', 'Hats', 'Scarves', 'Sunglasses & Eyewear', 'Tech', 'accesssories', 'Ties & Accessories', 'Ties & Pocket Squares', 'Wallets & Card Cases'],

      ['Designer', 'Designer Clothing', 'Designer Shoes', 'Designer Accessories', 'AG', 'AllSaints', 'ASOS', 'BOSS', 'Canada Goose', 'Canali', 'Fear of God Essentials', 'PURPLE BRAND', 'TOPMAN'],

      ["https://n.nordstrommedia.com/id/a38273ae-4212-4441-937b-1ba71a7aea2e.jpg"]
  ]
}
const links=[
  {path:"/women",text:"Women"},
  {path:"/men",text:"Men"},
  {path:"/",text:"Home"},
  {path:"/offer",text:"Ofer"},
];
const links2=[
  {path:"/"}
]

const Navbar=()=>{
  const[show ,setShow]=useState(true)
  return (<>  <Box className="main-div"  >
    <Box className="imgsection">
      <Image src="https://i.ibb.co/X8LJVX1/openlogo.png" alt="Logo" />
    </Box>
    <Flex className="mid-sectionnavbar">
      {
        links.map((el)=>(
          <Box><Link style={{textDecoration:"none", marginTop:"130px",position:"relative",top:"20px",color:"black"}}   to={el.path}>{el.text}</Link>
          </Box>    
        ))
      }
    </Flex>
    <Flex className="right-sectionnavbar">
      <Box><Link to={"/"} style={{textDecoration:"none", marginTop:"130px",position:"relative",top:"20px",color:"black"}}>ScrapBook</Link></Box>
      <Box><Link to={"/"} style={{textDecoration:"none", marginTop:"130px",position:"relative",top:"20px",color:"black"}}>Search</Link></Box>
      <Box><Link to={"/"} style={{textDecoration:"none", marginTop:"130px",position:"relative",top:"20px",color:"black"}}>Cart</Link></Box>
      <Box><Link to={"/"} style={{textDecoration:"none", marginTop:"130px",position:"relative",top:"20px",color:"black"}}>Login</Link></Box>
    </Flex>
  </Box>

  <Flex style={{width:"80%",margin:"auto",gap:"10px"}}>

  <NavLink style={({isActive})=>(isActive?{color:"black",borderBottom:"1px solid yellow",textDecoration:"None"}:{color:"#AF99A4"})} onClick={()=>alert("hello")}>Men</NavLink>
  <NavLink style={({isActive})=>(isActive?{color:"black"}:{color:"#AF99A4"})} onClick={()=>alert("hello")}>WomenMen</NavLink>
  </Flex>
  {show?<Women />:<Men />}
    <Divider />  
    </>

              
  )                
}
export default Navbar;
