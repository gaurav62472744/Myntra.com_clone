import React, { useState } from "react";
import {
  Box,
  FormLabel,
  Button,
  Input,
  Radio,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Checkbox,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  deleteAddress,
  getAddres,
} from "../Redux/CartAddress/action";

import { useDisclosure } from "@chakra-ui/react";
export const AddressDetails = () => {
  // const [check,setCheck]=useState(0)

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [pinCode, setpinCode] = useState("");
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const [locality, setlocality] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState();

  const addresses = useSelector((store) => store.CartAddress.address);
  console.log(addresses);

  const dispatch = useDispatch();

  const handleForm = () => {
    dispatch(
      addAddress(name, mobile, pinCode, address, locality, city, state)
    ).then((res) => {
      setcity("");
      setaddress("");
      setlocality("");
      setmobile("");
      setstate("");
      setname("");
      setpinCode("");
    });
  };

  return (
    <Box mt="20px" w={{ base: "95%", md: "95%", lg: "650px" }} mr="50px">
      <Box display={"flex"} justifyContent="space-between">
        <Box>
          <FormLabel fontWeight="bold" fontSize="16px">
            Select Delivery Address
          </FormLabel>
        </Box>
        <Box>
          <Button
            fontSize="13px"
            size="sm"
            bg="white"
            border="1px solid black"
            onClick={onOpen}
          >
            ADD NEW ADDRESS
          </Button>

          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            scrollBehavior={scrollBehavior}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create your account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl isRequired>
                  <FormLabel fontSize="13px">CONTACT DETAILS</FormLabel>
                  <Input
                    mt="5px"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder="Name"
                  />
                  <Input
                    mt="15px"
                    value={mobile}
                    onChange={(e) => setmobile(e.target.value)}
                    placeholder="Mobile No"
                  />
                  <FormLabel mt="30px" fontSize="13px">
                    ADDRESS
                  </FormLabel>
                  <Input
                    onChange={(e) => setpinCode(e.target.value)}
                    mt="5px"
                    placeholder="Pin Code"
                    type="number"
                    value={pinCode}
                  />
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                  <Input
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                    mt="15px"
                    placeholder="Address (House No, Building, Street, Area)"
                  />
                  <Input
                    value={locality}
                    onChange={(e) => setlocality(e.target.value)}
                    mt="15px"
                    placeholder="Locality / Town"
                  />
                  <Box mt="15px" display={"flex"} gap={5}>
                    <Input
                      value={city}
                      onChange={(e) => setcity(e.target.value)}
                      placeholder="City/District"
                    />
                    <Input
                      value={state}
                      onChange={(e) => setstate(e.target.value)}
                      placeholder="State"
                    />
                  </Box>
                  <FormLabel fontSize="13px" mt="30px">
                    SAVE ADDRESS AS
                  </FormLabel>
                  <Box mt="15px" display="flex" gap="15px">
                    <Button
                      bg="white"
                      border="1px solid grey"
                      borderRadius="20px"
                      size="sm"
                      color="grey"
                    >
                      Home
                    </Button>
                    <Button
                      bg="white"
                      border="1px solid grey"
                      borderRadius="20px"
                      size="sm"
                      color="grey"
                    >
                      Work
                    </Button>
                  </Box>
                  <Box mb="24px" mt="25px" display={"flex"} alignItems={"left"}>
                    <Checkbox mt="15px">Make this my default address</Checkbox>
                  </Box>
                  <Box
                    p={2}
                    boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
                    mt="12px"
                  >
                    <Button
                      onClick={handleForm}
                      p="24px"
                      bg="#FF3F6C"
                      colorScheme={"white"}
                      w="100%"
                    >
                      ADD ADDRESS
                    </Button>
                  </Box>
                </FormControl>
              </ModalBody>

              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
      <FormLabel mt="15px" color="grey" fontWeight="bold" fontSize="12px">
        DEFAULT ADDRESS
      </FormLabel>

      {addresses.map((el, index) => {
        return (
          <Box
            key={index}
            mt="10px"
            w={"100%"}
            p={{ base: 0, md: 0, lg: 3 }}
            boxShadow="  rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
          >
            <Box display={"flex"} textAlign={"left"}>
              <Radio /> <FormLabel ml="15px">{el.name}</FormLabel>
              <Button
                border="2px solid green"
                color={"green.400"}
                fontWeight="bold"
                fontSize="10px"
                bg="white"
                size="xs"
              >
                {el.default}
              </Button>
            </Box>
            <Box ml="30px" textAlign={"left"}>
              <Text fontSize={"14px"}>
                {el.address},{el.locality} {el.city}
              </Text>
              <Text fontSize={"14px"}>
                {el.city},{el.state}--{el.pinCode}
              </Text>
              <Box display={"flex"}>
                <Text fontSize={"14px"}>Mobile : </Text>
                <FormLabel fontSize={"14px"}>{el.mobile}</FormLabel>
              </Box>
              <Text fontSize={"14px"}>. Pay on delivery not available</Text>
              <Box mt="10px" display={"flex"} gap={4}>
                <Button
                  fontSize="13px"
                  size="sm"
                  bg="white"
                  border="1px solid black"
                  onClick={() =>
                    dispatch(deleteAddress(el.id)).then((res) =>
                      dispatch(getAddres())
                    )
                  }
                >
                  Remove
                </Button>
                <Button
                  fontSize="13px"
                  size="sm"
                  bg="white"
                  border="1px solid black"
                >
                  Edit
                </Button>
              </Box>
            </Box>
          </Box>
        );
      })}
      <Box
        mt="40px"
        w={"100%"}
        p={{ base: 0, md: 0, lg: 2 }}
        boxShadow="   rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
      >
        <FormLabel onClick={onOpen} fontWeight={"bold"} color="#FF3F6C">
          + Add New Address
        </FormLabel>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel fontSize="13px">CONTACT DETAILS</FormLabel>
                <Input
                  mt="5px"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Name"
                />
                <Input
                  mt="15px"
                  value={mobile}
                  onChange={(e) => setmobile(e.target.value)}
                  placeholder="Mobile No"
                />
                <FormLabel mt="30px" fontSize="13px">
                  ADDRESS
                </FormLabel>
                <Input
                  onChange={(e) => setpinCode(e.target.value)}
                  mt="5px"
                  placeholder="Pin Code"
                  type="number"
                  value={pinCode}
                />
                <FormErrorMessage>Email is required.</FormErrorMessage>
                <Input
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  mt="15px"
                  placeholder="Address (House No, Building, Street, Area)"
                />
                <Input
                  value={locality}
                  onChange={(e) => setlocality(e.target.value)}
                  mt="15px"
                  placeholder="Locality / Town"
                />
                <Box mt="15px" display={"flex"} gap={5}>
                  <Input
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                    placeholder="City/District"
                  />
                  <Input
                    value={state}
                    onChange={(e) => setstate(e.target.value)}
                    placeholder="State"
                  />
                </Box>
                <FormLabel fontSize="13px" mt="30px">
                  SAVE ADDRESS AS
                </FormLabel>
                <Box mt="15px" display="flex" gap="15px">
                  <Button
                    bg="white"
                    border="1px solid grey"
                    borderRadius="20px"
                    size="sm"
                    color="grey"
                  >
                    Home
                  </Button>
                  <Button
                    bg="white"
                    border="1px solid grey"
                    borderRadius="20px"
                    size="sm"
                    color="grey"
                  >
                    Work
                  </Button>
                </Box>
                <Box mb="24px" mt="25px" display={"flex"} alignItems={"left"}>
                  <Checkbox mt="15px">Make this my default address</Checkbox>
                </Box>
                <Box
                  p={2}
                  boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
                  mt="12px"
                >
                  <Button
                    onClick={handleForm}
                    p="24px"
                    bg="#FF3F6C"
                    colorScheme={"white"}
                    w="100%"
                  >
                    ADD ADDRESS
                  </Button>
                </Box>
              </FormControl>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};
