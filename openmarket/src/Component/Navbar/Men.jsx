import { Avatar, Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Link } from "react-router-dom";

const mennav=[
    {img:"https://img1.junaroad.com//assets/images/mobileNotif/img-1628498908811.jpg",text:"my Feed"},
    {img:"https://img0.junaroad.com/images/icons/men/winter.png",text:"WINTER"},
    {img:"https://img0.junaroad.com/images/icons/men/tshirts.png",text:"T-SHIRTS"},
    {img:"https://img0.junaroad.com/images/icons/men/shirts.png",text:"SHIRTS"},
    {img:"https://img0.junaroad.com/images/icons/men/jeans.png",text:"JEANS"},
    {img:"https://img0.junaroad.com/images/icons/men/trousers.png",text:"TROUSERS"},
    {img:"https://img0.junaroad.com/images/icons/men/kids.png",text:"KIDS"},
    {img:"https://img0.junaroad.com/images/icons/men/ethnicsets.png",text:"ETHNICSETS"},
    
    {img:"https://img0.junaroad.com/images/icons/men/accessory.png",text:"ACCESSORY"},
    {img:"https://img0.junaroad.com/images/icons/men/footwear.png",text:"FOOTWEAR"},

]

const manitem=[
    {img:"https://img0.junaroad.com/stories/story_p_63ccba3efd1d3c5bbc580e88-1674361406.jpeg",
    follower:"4k",
    username:"Poonam",
    avtr:"https://img1.junaroad.com/user_profile/profile_5bc2c83aae31d51e168def3b-1642498931.png",
},
{
    img:"https://img2.junaroad.com/stories/story_p_63bbe343f47b70082135e46a-1673669227.jpeg",
    follower:"2K",
    username:"kiran",
    avtr:"https://img0.junaroad.com/user_profile/34.jpg"
},
{
    img:"https://img2.junaroad.com/stories/story_p_63bc46fab388b008135c0f64-1673538535.jpeg",
    follower:"2K",
    username:"kiran",
    avtr:"https://img0.junaroad.com/user_profile/34.jpg"
},
{img:"https://img0.junaroad.com/stories/story_p_63ccb62913cb38081ecbada8-1674360361.jpeg",
    follower:"4k",
    username:"Poonam",
    avtr:"https://img1.junaroad.com/user_profile/profile_5bc2c83aae31d51e168def3b-1642498931.png",
},
{img:"https://img2.junaroad.com/stories/story_p_63cbedb3f47b70081fbe1421-1674309043.jpeg",
    follower:"4k",
    username:"Poonam",
    avtr:"https://img1.junaroad.com/user_profile/profile_5bc2c83aae31d51e168def3b-1642498931.png",
},
{img:"https://img3.junaroad.com/stories/story_p_63c7e9deadb8b8448be169ff-1674045918.jpeg",
    follower:"4k",
    username:"Poonam",
    avtr:"https://img1.junaroad.com/user_profile/profile_5bc2c83aae31d51e168def3b-1642498931.png",
},
{img:"https://img2.junaroad.com/stories/story_p_63ccb93c13cb38081ecbb4d6-1674361148.jpeg",
    follower:"4k",
    username:"Poonam",
    avtr:"https://img1.junaroad.com/user_profile/profile_5bc2c83aae31d51e168def3b-1642498931.png",
},
{img:"https://img3.junaroad.com/stories/story_p_63ccb857fd1d3c5bbc580c80-1674390981.jpeg",
    follower:"4k",
    username:"Poonam",
    avtr:"https://img1.junaroad.com/user_profile/profile_5bc2c83aae31d51e168def3b-1642498931.png",
},
{img:"https://img0.junaroad.com/stories/story_p_63c61ffef38057082544f6ac-1673928702.jpeg",
    follower:"10k",
    username:"Lavika",
    avtr:"https://img1.junaroad.com/user_profile/mid_profile_57b1dae6a7dae811315a1874-1482341113.png",
},
{
    img:"https://img2.junaroad.com/stories/story_p_63c6cdd4cc8b5e0825e1c788-1673973204.jpeg",
    follower:"2K",
    username:"kiran",
    avtr:"https://img0.junaroad.com/user_profile/34.jpg"
},
{
    img:"https://img3.junaroad.com/stories/story_p_63cd5993fd1d3c5bbc594457-1674402195.jpeg",
    follower:"2K",
    username:"kiran",
    avtr:"https://img0.junaroad.com/user_profile/34.jpg"
},
]
const Men=()=>{
    return(
        <>
        <Flex 
        style={{
            width:"70%",
            margin:"auto",
            gap:"40px"
        }}
        >
        {

            mennav.map((el)=>(
                <Box><Link style={{textDecoration:"none", marginTop:"130px",position:"relative",top:"20px",color:"black" }}>
                    <Avatar style={{display:"flex"}} src={el.img} width="50px" alt={el.text}/>
                    <Text align="center" fontSize="12px" >{el.text}</Text></Link>
                </Box>    
                
            ))
        }
        </Flex>
        <hr width="70%"  height="50%" style={{
  border: "3px solid #5DAEF2",
  borderRadius: "5px",
  marginTop:"45px",
  marginBottom:"45px"
 }}/>
        <SimpleGrid columns={3} spacing={5} width="70%" margin="auto">
    

            {
                manitem.map((el)=>(
                    <Box  backgroundColor="#fff"    marginBottom="8%">
                        <Text>PArty Wear</Text>
                        <Image src={el.img} width="100%" alt={el.img} />
                        <Flex  >
                         <Avatar style={{
                            flex:"1"
                         }} src={el.avtr} width="10%" borderRadius="50%" />
                       <span  style={{fontWeight:"bold",color:"#A78888" ,textAlign:"center",flex:"1" }}>by:</span>
                         <span style={{
                            flex:"3"
                         }}>{el.username}<span style={{
                            display:"block",position:"relative",left:"-32px"
                         }}>{el.follower} Followers</span></span>
                         <span style={{
                            flex:"1"

                         }}><Flex  style={{position:"relative",left:"-2px",borderRadius:"50%",top:"-20px"}}>
                            <Link to="#"><Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3E%3Cpath fill='none' stroke-width='1.5' stroke='%23D3145A' d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'%3E%3C/path%3E%3C/svg%3E" width="110%" alt="heart"/>
                            </Link>
                            <Link to="#">
                            <Image src="https://img.icons8.com/color/512/whatsapp.png" width="110%" alt="heart"/>
                            {/* <FloatingWhatsApp
        phoneNumber="+918077832696"
        accountName="Open market "
        avatar="https://i.ibb.co/X8LJVX1/openlogo.png"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />   */}
                            </Link>
                            </Flex>
                         </span>
                         </Flex>

                                                  
                    </Box>
                ))
            }
        </SimpleGrid>
        
        </>
    )
}
export default Men;