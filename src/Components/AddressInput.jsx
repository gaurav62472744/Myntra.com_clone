import React,{useState} from 'react'
import { FormControl,FormErrorMessage,FormLabel,Input,Box ,Button, Checkbox} from '@chakra-ui/react'
// import { Button } from "@chakra-ui/core";
export const AddressInput = () => {

    const [pinCode, setpinCode] = useState('')
   
  return (
    
    <Box mt='40px'  w={{base:'95%',md:'95%',lg:'80%'}} p={{base:0,md:0,lg:6}} boxShadow='  rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'>
    <FormControl  isRequired>
    <FormLabel fontSize='13px' >CONTACT DETAILS</FormLabel>
    <Input mt='5px' placeholder='Name' />
    <Input mt='15px' placeholder='Mobile No' />
    <FormLabel mt='30px' fontSize='13px'>ADDRESS</FormLabel>
    <Input mt='5px' placeholder='Pin Code' value={pinCode}  />
    <FormErrorMessage>Email is required.</FormErrorMessage>
    <Input mt='15px' placeholder='Address (House No, Building, Street, Area)' />
    <Input mt='15px' placeholder='Locality / Town' />
    <Box mt='15px' display={'flex'} gap={5}>
    <Input placeholder='City/District' />
    <Input placeholder='State' />
    </Box>
    <FormLabel fontSize='13px'  mt='30px'>SAVE ADDRESS AS</FormLabel>
    <Box mt='15px' display='flex'gap='15px' >
    <Button   bg='white' border='1px solid grey' borderRadius='20px' size='sm' color='grey' >Home</Button>
    <Button  bg='white' border='1px solid grey' borderRadius='20px' size='sm' color='grey'>Work</Button>
    </Box>
    <Box mb='24px' mt='25px' display={'flex'} alignItems={'left'}>
    <Checkbox  mt='15px' >Make this my default address</Checkbox>
    </Box>
    <Box  p={2} boxShadow=' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;' mt='12px' >
        <Button p='24px' bg='#FF3F6C' colorScheme={'white'} w='100%' >ADD ADDRESS</Button>
    </Box>
  </FormControl>
  </Box>
  )
}
