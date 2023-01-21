import { Box, Heading, FormLabel, Text,Image } from "@chakra-ui/react";
import React from "react";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../Redux/Cart/action";

export const ProductPriceDetails = ({
  
  coupon = 0,
  convience = 0,
}) => {

  const [price, setprice] = useState(0)
  const [afterdeduction,setafterdeduction]=useState(0)
const cartData=useSelector(store=>store.CartReducer.cart)
const dispatch=useDispatch()
useEffect(()=>{
 dispatch(getCartData())
 let sum=0;
 let finalprice=0
 let newPrice=cartData?.map((el)=>{
  
  let y=+el.strike_price
  let x=+el.discounted_price

  sum=sum+y
  finalprice+=x
  console.log("cart amoyun",sum,finalprice)
  

 })
 setprice(sum)
 setafterdeduction(finalprice)
},[])

console.log('cart Data',price)





  return (
    <Box mt="5px" width="280px">
      <Box >
        <Text mb='10px' textAlign={'left'} fontWeight={'bold'} fontSize={'12px'} color={'grey'} >DELIVERY ESTIMATES</Text>

        {
          cartData?.map((el)=>{
          return    <Box boxShadow=" rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;" display={'flex'}>
                              <Box mb='5px' w='20%' >
                                
                                 <Image  src={el.images} />
                              </Box>
                              <Box padding='5px' justifyContent={'center'} alignItems={'center'} display={'flex'}>
                                   <Text fontSize={'14px'}>Estimate delivery by </Text>
                                   <Text fontWeight={'bold'} fontSize={'15px'}>29 Jan 2023</Text>
                              </Box>
          
                  </Box>
          })
        }
            
        </Box>
      <Box lineHeight={"25px"} gap={7} display={"flex"}>
        <Box textAlign={"left"}>
          <FormLabel fontSize="13px">PRICE DETAILS({cartData.length} Items)</FormLabel>
          <Text fontSize={"14px"}>Total MRP</Text>
          <Text fontSize={"14px"}>Discount on MRP</Text>
          <Text fontSize={"14px"}>Coupon Discount</Text>
          <Text mb="10px" fontSize={"14px"}>
            Convience Fee{" "}
            <span
              style={{ color: "#FF3F6C", fontWeight: "bold", fontSize: "15px" }}
            >
              Know More
            </span>
          </Text>
          <hr />
          <FormLabel fontSize="14px">Total Amount</FormLabel>
        </Box>
        <Box mt="30px" lineHeight={"25px"} textAlign={"right"}>
          <Text fontSize={"14px"}>₹{price}</Text>
          <Text fontSize={"14px"} color="green.400">
            -₹{price-afterdeduction}
          </Text>
          <Text fontSize={"14px"} color="green.400">
            -₹{coupon}
          </Text>
          <Text mb="14px" fontSize={"14px"} color="green.400">
            {convience > 0 ? convience : "FREE"}
          </Text>
          <hr />
          <FormLabel fontSize="14px">
            ₹{afterdeduction - coupon + convience}
          </FormLabel>
        </Box>
      </Box>
    </Box>
  );
};
