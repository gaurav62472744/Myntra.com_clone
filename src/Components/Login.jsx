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
  VStack,
  Image,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getLoginData } from "../Redux/Auth/action";
import { store } from "../Redux/store";
import GoogleButton from "react-google-button";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
const adminData = {
  id: "1",
  firstName: "Gaurav",
  lastName: "singh",
  email: "gaurav@admin.com",
  password: "gaurav@123",
};

export default function SimpleCard() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [admin, setAdmin] = useState(adminData);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.AuthReducer.signupData);
  useEffect(() => {
    dispatch(getLoginData());
  }, []);
  console.log("login Data", userData);

  const navigate = useNavigate();

  console.log("store", store.getState());

  const handleSubmit = () => {
    {
      userData.map((el) => {
        if (el.Email == email && el.Password == password) {
          navigate(location.state, { replace: true });
        } else if (admin.email == email && admin.password == password) {
          navigate("/dashboard");
        }
      });
    }
  };

  const GoodleSignin = () => {};

  return (
    <Box>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        mt={55}
        bg={useColorModeValue("rgb(248, 230, 233)")}
      >
        <Stack spacing={0} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"2xl"} textAlign={"center"}>
              Login
            </Heading>

            <Image
              src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/21/8fca3ae9-d245-443b-a142-8d568247794c1663700243878-offer-banner-300-600x240-code-_-MYNTRA400.jpg"
              w="100%"
            />
          </Stack>
          <Box
            // rounded={'lg'}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <VStack>
                <Text fontWeight={"500"}>Easly using</Text>
                <GoogleButton onClick={GoodleSignin} />
                <Text fontWeight={"500"}>-Or using E-mail-</Text>
              </VStack>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Text color={"red"} align={"left"}></Text>
                <Button
                  // disabled={submitbutton}
                  onClick={handleSubmit}
                  loadingText="Submitting"
                  size="lg"
                  bg={"#ff3f6c"}
                  color={"white"}
                  _hover={{
                    bg: "#ff3f6a",
                    color: "black",
                  }}
                >
                  login
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text color={"gray.600"} align={"center"}>
                  Have trouble logging in?{" "}
                  <Link style={{ color: "red" }} href="/signup">
                    Register
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
