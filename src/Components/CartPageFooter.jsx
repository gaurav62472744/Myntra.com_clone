import { Box ,FormLabel,Image} from '@chakra-ui/react'
import React from 'react'

const logos=
    [
 {
    url:'https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png'
 },
 {
    url:'https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png'
 },
 {
    url:'https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png'
 },
 {
    url:'https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png'
 },
 {
    url:'https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png'
 },
 {
    url:'https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png'
 },
 {
    url:'https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png'
 },
 {
    url:'https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png'
 },
 {
    url:'https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png'
 },
 {
    url:'https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png'
 }
    ]


export const CartPageFooter = () => {
  return (
    <Box  width='80%' m='auto' justifyContent={'space-evenly'} display={'flex'} >
        <Box gap={1} display={'flex'} >
        {
            logos.map((el,index)=>{
                return <Box key={index}  height='37px' width='70px' >
                    <Image  src={el.url} />
                </Box>
            })
        }
</Box>

        <Box textAlign={'left'}>
        <FormLabel>Need Help ? Contact Us</FormLabel> 
        </Box>
    </Box>
  )
}
