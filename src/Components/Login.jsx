import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLoginData } from "../Redux/Auth/action";
import {store} from '../Redux/store'
const adminData = {
  id: "1",
  firstName: "Gaurav",
  lastName: "singh",
  email: "gaurav@admin.com",
  password: "gaurav@123"
}

export default function SimpleCard() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [admin, setAdmin] = useState(adminData)

  const dispatch = useDispatch()
  const userData = useSelector(store => store.AuthReducer.signupData)
  useEffect(() => {
    dispatch(getLoginData())
  }, [])
  console.log('login Data', userData)

  const navigate = useNavigate()

console.log("store",store.getState())

  const loginSuccess = () => {

    {
      userData.map((el) => {
        if (el.Email == email && el.Password == password) {
          navigate('/')
        } else if (admin.email == email && admin.password == password) {
          navigate('/dashboard')
        }
        // }else{
        //   alert('enter right credential')

        // }
      })
    }


  }



  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e) => setemail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e) => setpassword(e.target.value)} type="text" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={loginSuccess}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
