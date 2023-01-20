import React from 'react'
import { Box, FormLabel, Button, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import { TbDiscount2 } from 'react-icons/tb'
import { PaymentMode } from './PaymentMode'


export const PaymentDetails = () => {

    const address = useSelector(store => store.CartAddress.address)
    console.log(address)
    return (
        <Box mt='20px' w={{ base: '95%', md: '95%', lg: '650px' }} mr='50px'>
            <Box p='10px' boxShadow='  rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;' justifyContent='space-between'>
                <Box gap='2' display={'flex'}>
                    <TbDiscount2 />
                    <FormLabel fontWeight='bold' fontSize='14px'>Bank Offer</FormLabel>
                </Box>

                <Accordion allowMultiple>
                    <AccordionItem>

                        <Box color={'grey'} textAlign={'left'} fontSize='13px' ml='30px'>
                            <ul>
                                <li><span >10% Instant Discount on Citi Credit and Debit Cards on a min spend of Rs 3,000. TCA</span></li>
                            </ul>
                        </Box>
                        <AccordionPanel pb={4}>
                            <Box color={'grey'} textAlign={'left'} fontSize='13px' ml='15px'>
                                <ul>
                                    <li>
                                        10% Instant Discount on ICICI Bank Credit Cards on a min spend of Rs 4,000. TCA
                                    </li>
                                    <li>
                                        10% Instant Discount on ICICI Bank Credit Cards on a min spend of Rs 4,000. TCA
                                    </li>
                                    <li>
                                        Get up to Rs 500 Cashback on CRED Pay UPI on a min spend of Rs 1,000. TCA
                                    </li>
                                    <li>
                                        5% Cashback on Paytm Wallet and Postpaid Transactions on a min spend of Rs 1,500. TCA
                                    </li>
                                    <li>
                                        5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
                                    </li>
                                    <li>
                                        10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA
                                    </li>
                                </ul>
                            </Box>
                        </AccordionPanel>
                        <Text>
                            <AccordionButton>
                                <Button bg='white' fontWeight={'bold'} color={'#FF3F6C'} fontSize={'12px'} size='sm' as="span" textAlign='left'>
                                    Show More <AccordionIcon />
                                </Button>


                            </AccordionButton>
                        </Text>
                    </AccordionItem>
                </Accordion>



            </Box>
            <Box >
                <FormLabel fontWeight='bold' mt='10px' fontSize='15px'>Choose Payment Mode</FormLabel>
            </Box>
            <Box boxShadow='  rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;' >
                <PaymentMode />
            </Box>


        </Box>
    )
}


{/* <Box  mt='40px'  w={{base:'95%',md:'95%',lg:'80%'}} p={{base:0,md:0,lg:6}} boxShadow='  rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'>
    
    </Box> */}