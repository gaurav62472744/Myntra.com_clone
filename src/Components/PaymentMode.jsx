import React from 'react'
import { Box, Button, Heading } from '@chakra-ui/react'
import { BsCashStack, BsCreditCard } from 'react-icons/bs'
import { VscDesktopDownload } from 'react-icons/vsc'
import { RiBankLine } from 'react-icons/ri'
import { GiWallet } from 'react-icons/gi'
import { FaCcAmazonPay } from 'react-icons/fa'

export const PaymentMode = () => {
    return (
        <Box display={'flex'} >
            <Box gap={0.5} display={'grid'} border='1px solid red' w='35%'>
                <Box>

                    <Box _hover={{ color: '#FF3F6C', bg: 'white' }} bg='green.100' p='20px 30px' display={'flex'}>
                        <Box mt='2px' mr='8px'>
                            <BsCashStack />
                        </Box>
                        <Heading size={'sm'}>Cash On Delivery</Heading>
                    </Box>

                </Box>
                <Box>

                    <Box _hover={{ color: '#FF3F6C', bg: 'white' }} bg='green.100' p='20px 30px' display={'flex'}>
                        <Box mt='2px' mr='8px'>
                            <BsCreditCard />
                        </Box>
                        <Heading size={'sm'}>Credit/Debit Card</Heading>
                    </Box>


                </Box>
                <Box>

                    <Box _hover={{ color: '#FF3F6C', bg: 'white' }} bg='green.100' p='20px 30px' display={'flex'}>
                        <Box mt='2px' mr='8px'>
                            <FaCcAmazonPay />
                        </Box>
                        <Heading size={'sm'}>PhonePe/GooglePay/UPI</Heading>
                    </Box>


                </Box>
                <Box>

                    <Box _hover={{ color: '#FF3F6C', bg: 'white' }} bg='green.100' p='20px 30px' display={'flex'}>
                        <Box mt='2px' mr='8px'>
                            <GiWallet />
                        </Box>
                        <Heading size={'sm'}>Paytm/Wallets</Heading>
                    </Box>


                </Box>
                <Box>

                    <Box _hover={{ color: '#FF3F6C', bg: 'white' }} bg='green.100' p='20px 30px' display={'flex'}>
                        <Box mt='2px' mr='8px'>
                            <RiBankLine />
                        </Box>
                        <Heading size={'sm'}>Net Banking</Heading>
                    </Box>

                </Box>
                <Box>

                    <Box _hover={{ color: '#FF3F6C', bg: 'white' }} bg='green.100' p='20px 30px' display={'flex'}>
                        <Box mt='2px' mr='8px'>
                            <VscDesktopDownload />
                        </Box>
                        <Heading size={'sm'}>EMI/Pay Later</Heading>
                    </Box>

                </Box>
            </Box>

            <Box border='1px solid green' w='65%'>

            </Box>
        </Box>
    )
}
