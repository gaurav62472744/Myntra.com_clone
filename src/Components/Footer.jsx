import { ReactNode } from 'react';
import {Image,HStack,VStack,
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';




const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'sm'} mb={1}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
          <Stack align={'flex-start'}>
            <ListHeader>ONLINE SHOPPING</ListHeader>
            <Link href={'#'}>Men</Link>
            <Link href={'#'}>Women</Link>
            <Link href={'#'}>Kids</Link>
            <Link href={'#'}>Home & Living</Link>
            <Link href={'#'}>Beauty</Link>
            <Link href={'#'}>Gift cards</Link>
            <Link href={'#'}>Myntra Insider</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>CUSTOMER POLICIES</ListHeader>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>FAQ</Link>
            <Link href={'#'}>T&C</Link>
            <Link href={'#'}>Terms Of Use</Link>
            <Link href={'#'}>Track Orders</Link>
            <Link href={'#'}>Shipping</Link>
            <Link href={'#'}>Cancellation</Link>
            <Link href={'#'}>Returns</Link>
            <Link href={'#'}>Privacy policy</Link>
            <Link href={'#'}>Grievance Officer</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>USEFUL LINKS</ListHeader>
            <Link href={'#'}>Blogs</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Site Map</Link>
            <Link href={'#'}>Corporate Information</Link>
            <Link href={'#'}>Whitehat</Link>
          </Stack>

          <Stack align={'flex-start'}>

            <HStack>
              <Image style={{width:"15%"}} src='https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png' alt='money-gurantee' />
              <Box><strong>100% ORIGINAL</strong><p>guarantee for all products at myntra.com</p></Box>
            </HStack>
          <HStack>
            <Image style={{width:"15%"}} src='https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png' alt='30days' />
            <Box><strong>Return within 30 Days</strong><p>of receiving your order</p></Box>
          </HStack>

          <br/>
          <br />

          <Stack align={'flex-start'}>
            <ListHeader>EXPERIENCE MYNTRA APP ON MOBILE</ListHeader>
            <HStack>
            <Link href='https://play.google.com/store/apps/details?id=com.myntra.android'><Image  src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png' alt='Playstore-Logo' /></Link>
            <Link href='https://apps.apple.com/in/app/myntra-indias-fashion-store/id907394059'><Image  src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png' alt='AppStore-Badge' /></Link>
            </HStack>
          </Stack>

          </Stack>

          


          


        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2023 www.myntra.com. All rights reserved.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
