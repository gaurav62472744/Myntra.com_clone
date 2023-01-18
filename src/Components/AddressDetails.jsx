import React from 'react'
import {Box, FormLabel,Button, Input, Radio, Spacer,Text} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
export const AddressDetails = () => {
 // const [check,setCheck]=useState(0)
    const address=useSelector(store=>store.CartAddress.address)
console.log(address)
  return (
    <Box mt='20px'  w={{base:'95%',md:'95%',lg:'650px'}} mr='50px'>
         <Box display={'flex'} justifyContent='space-between'>
            <Box >
                 <FormLabel fontWeight='bold'  fontSize='16px'>Select Delivery Address</FormLabel>
            </Box>
            <Box>
                  <Button fontSize='13px' size='sm' bg='white' border='1px solid black'>ADD NEW ADDRESS</Button>
            </Box>
         </Box>
         <FormLabel mt='15px' color='grey' fontWeight='bold' fontSize='12px'>DEFAULT ADDRESS</FormLabel>


         {
            address.map((el,index)=>{
                return  <Box   mt='10px'  w={'100%'} p={{base:0,md:0,lg:6}} boxShadow='  rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;'>
                     <Box display={'flex'} textAlign={'left'}>
                        <Radio/>  <FormLabel ml='15px'>{el.name}</FormLabel><Button border='2px solid green' color={'green.400'} fontWeight='bold' fontSize='10px' bg='white' size='xs'>{el.default}</Button>
                       
                        </Box>
                        <Box ml='30px'  textAlign={'left'}>
                          <Text >{el.address},{el.locality}</Text>
                          <Text>{el.city},{el.state}--{el.pinCode}</Text>
                          <Box display={'flex'}>
                          <Text>Mobile : </Text>
                          <FormLabel>{el.mobile}</FormLabel>
                          </Box>
                        </Box>
                </Box>
            })
         }
         <Box   mt='40px'  w={'100%'}  p={{base:0,md:0,lg:2}} boxShadow='   rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;'>
             <FormLabel fontWeight={'bold'} color='#FF3F6C'>+ Add New Address</FormLabel>
    </Box>
    </Box>
  )
}


{/* <Box  mt='40px'  w={{base:'95%',md:'95%',lg:'80%'}} p={{base:0,md:0,lg:6}} boxShadow='  rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'>
    
    </Box> */}