import React from 'react'
import { Box ,Image, Text,Button} from '@chakra-ui/react'
import {TbTruckReturn,TbTruckDelivery} from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { deleteCartData, getCartData } from '../Redux/Cart/action'

export const BagDetails = ({id,discount,brand,title,size,images,discounted_price,strike_price}) => {

    const dispatch=useDispatch()

    const handleDelete=()=>{
        dispatch(deleteCartData(id)).then((res)=>{
            dispatch(getCartData())
        })
    }

  return (
    <Box padding={'10px'} display={'flex'}>
         <Box w={'30%'}>
           <Image src={images}/>
         </Box>
         <Box lineHeight={'30px'} paddingLeft={'8px'}  textAlign={'left'} width={'70%'}>
             <Text fontSize={'15px'} fontWeight={'bold'}>{brand}</Text>
             <Text fontSize={'15px'}>{title}</Text>
             <Button size={'sm'}>Size:{size[0]}</Button>
             <Box display={'flex'}>
             <Text mr='4px' fontSize={'16px'} fontWeight={'bold'}>₹{discounted_price}</Text>
             <Text mr='4px' textDecoration={'line-through'} >{strike_price}</Text>
             <Text color='red'>{discount}</Text>
             </Box>

            
             <Box display={'flex'}>
                <Box mt='6px' mr='5px'>
                <TbTruckReturn/>
                </Box>

                <Text mr='5px' fontSize={'14px'} fontWeight={'bold'}>15 days </Text>
                <Text >return available</Text>
             </Box>
             <Box display={'flex'}>
                <Box mt='8px' mr='5px'  >
                 <TbTruckDelivery/>
                </Box>
               
                <Text mr='5px'>Delivered By</Text>
                <Text fontSize={'15px'} fontWeight={'bold'} >29 Jan 2023</Text>
             </Box>
             <Button mt="15px"
              p="20px"
              bg="#FF3F6C"
              colorScheme={"white"}
              w="30%"
              onClick={handleDelete}
              >REMOVE</Button>
         </Box>
    </Box>
  )
}
