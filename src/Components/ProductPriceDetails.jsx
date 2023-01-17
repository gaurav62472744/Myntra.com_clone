import { Box, Heading,FormLabel,Text } from '@chakra-ui/react'
import React from 'react'

export const ProductPriceDetails = ({mrp=5000,discount=2000,coupon=50,convience=0}) => {
  return (
    <Box mt='5px' width='280px' >
        {/* <Box border='1px solid green'>
             this only for Product
        </Box> */}
        <Box lineHeight={'25px'} gap={7} display={'flex'} >
        
             <Box textAlign={'left'}>
             <FormLabel fontSize='13px' >PRICE DETAILS(2 Items)</FormLabel>
             <Text fontSize={'14px'}>Total MRP</Text>
             <Text fontSize={'14px'}>Discount on MRP</Text>
             <Text fontSize={'14px'}>Coupon Discount</Text>
             <Text mb='10px' fontSize={'14px'}>Convience Fee <span style={{color:'#FF3F6C',fontWeight:'bold',fontSize:'15px'}}>Know More</span></Text>
             <hr/>
             <FormLabel fontSize='14px' >Total Amount</FormLabel>
             </Box>
             <Box lineHeight={'25px'} textAlign={'right'} >
                <Text color={'white'}>100</Text>
                <Text fontSize={'14px'} >₹{mrp}</Text>
                <Text fontSize={'14px'} color='green.400'>-₹{discount}</Text>
                <Text fontSize={'14px'} color='green.400'>-₹{coupon}</Text>
                <Text mb='18px' fontSize={'14px'} color='green.400'>{convience >0 ? convience:'FREE'}</Text>
                <hr/>
                <FormLabel fontSize='14px' >₹{mrp-discount-coupon+convience}</FormLabel>
             </Box>
        </Box>
       
    </Box>
  )
}
