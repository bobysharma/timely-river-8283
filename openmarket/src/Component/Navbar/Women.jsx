import { Avatar, Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const womennav=[
    {img:"https://img1.junaroad.com//assets/images/mobileNotif/img-1628498908811.jpg",text:"my Feed"},
    {img:"https://img0.junaroad.com/images/icons/women/winter.png",text:"WINTER"},
    {img:"https://img0.junaroad.com/images/icons/women/kurtas.png",text:"KURTA"},
    {img:"https://img0.junaroad.com/images/icons/women/tops.png",text:"TOPS"},
    {img:"https://img0.junaroad.com/images/icons/women/dresses.png",text:"DRESSES"},
    {img:"https://img0.junaroad.com/images/icons/women/suits.png",text:"SUITS"},
    {img:"https://img0.junaroad.com/images/icons/women/sarees.png",text:"SAREES"},
    {img:"https://img0.junaroad.com/images/icons/women/ethnicsets.png",text:"ETHNICSETS"},
    {img:"https://img0.junaroad.com/images/icons/women/bottoms.png",text:"BOTTOMS"},
    {img:"https://img0.junaroad.com/images/icons/women/bags.png",text:"BAGS"},
    {img:"https://img0.junaroad.com/images/icons/women/footwear.png",text:"FOOTWEAR"},

]
const manitem=[
    {img:"https://img0.junaroad.com/stories/story_p_63bc250dfd1d3c015d43a2de-1673274637.jpeg",
    follower:"9k",
    username:"Priyanka",
    avtr:"https://img0.junaroad.com/user_profile/mid_profile_58f59da4f80c2476773e6855-1565500907.png",
},
{
    img:"https://img2.junaroad.com/stories/story_p_63bc5a07fd1d3c015d43eb88-1673288199.jpeg",
    follower:"5K",
    username:"Pooja",
    avtr:"https://img0.junaroad.com/user_profile/profile_5b55d97486934e71890be578-1597052991.png"
},
{
    img:"https://img2.junaroad.com/stories/story_p_63bc5972f38057082abc61ec-1673549730.jpeg",
    follower:"5K",
    username:"Pooja",
    avtr:"https://img0.junaroad.com/user_profile/profile_5b55d97486934e71890be578-1597052991.png"
},
{
    img:"https://img0.junaroad.com/stories/story_p_63bc5764fd1d3c015d43ea8d-1673588513.jpeg",
    follower:"5K",
    username:"Pooja",
    avtr:"https://img0.junaroad.com/user_profile/profile_5b55d97486934e71890be578-1597052991.png"
},
{
    img:"https://img2.junaroad.com/stories/story_p_63bc58f2b388b008135c2089-1673287922.jpeg",
    follower:"5K",
    username:"Pooja",
    avtr:"https://img0.junaroad.com/user_profile/profile_5b55d97486934e71890be578-1597052991.png"
},
{
    img:"https://img3.junaroad.com/stories/story_p_63bcd886f38057081a40c1cb-1673320582.jpeg",
    follower:"5K",
    username:"Pooja",
    avtr:"https://img0.junaroad.com/user_profile/profile_5b55d97486934e71890be578-1597052991.png"
},
{img:"https://img0.junaroad.com/stories/story_p_63c4000313cb3808214c25cd-1673789443.jpeg",
    follower:"14k",
    username:"Kriti",
    avtr:"https://img0.junaroad.com/user_profile/mid_profile_563a1525149b87358c13e65d-1499138575.png",
},
{
    img:"https://img2.junaroad.com/stories/story_p_63bc5b5cf47b70082136c4ad-1673551691.jpeg",
    follower:"5K",
    username:"Pooja",
    avtr:"https://img0.junaroad.com/user_profile/profile_5b55d97486934e71890be578-1597052991.png"
},
{img:"https://img3.junaroad.com/stories/story_p_63bcd62aadb8b86e86a2de0e-1674273014.jpeg",
    follower:"7k",
    username:"Krunal",
    avtr:"https://img1.junaroad.com/user_profile/profile_5795f141f80c246ada8dc53c-1630860785.png",
},
{
    img:"https://img2.junaroad.com/stories/story_p_63c57140f47b70082235bcea-1673883968.jpeg",
    follower:"7K",
    username:"Krunal",
    avtr:"https://img1.junaroad.com/user_profile/profile_5795f141f80c246ada8dc53c-1630860785.png"
},
{ 
    img:"https://img3.junaroad.com/stories/story_p_63c5707cf47b70082235bbf9-1673883772.jpeg",
    follower:"14k",
    username:"Kriti",
    avtr:"https://img0.junaroad.com/user_profile/mid_profile_563a1525149b87358c13e65d-1499138575.png",
},
{ 
    img:"https://img0.junaroad.com/stories/story_p_63c7e222cc8b5e0828f4fcdd-1674043938.jpeg",
    follower:"14k",
    username:"Kriti",
    avtr:"https://img0.junaroad.com/user_profile/mid_profile_563a1525149b87358c13e65d-1499138575.png",
},
{ 
    img:"https://img2.junaroad.com/stories/story_p_63c7e1a3adb8b8448be15c39-1674219169.jpeg",
    follower:"14k",
    username:"Kriti",
    avtr:"https://img0.junaroad.com/user_profile/mid_profile_563a1525149b87358c13e65d-1499138575.png",
},
]
const Women=()=>{
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

            womennav.map((el)=>(
                <Box><Link style={{textDecoration:"none", marginTop:"130px",position:"relative",top:"20px",color:"black" }}><Avatar style={{display:"flex"}} src={el.img} width="50px" alt={el.text}/><Text fontSize="12px" align="center">{el.text}</Text></Link>
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
                            <Link to="#"><Image src="https://img.icons8.com/ios-glyphs/512/hearts.png" width="110%" alt="heart"/>
                            </Link>
                            <Link to="#">
                            <Image src="https://img.icons8.com/color/512/whatsapp.png" width="110%" alt="heart"/>
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
export default Women;