import React, { useState } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Text,
  Input,
  HStack,
  PinInput,
  PinInputField,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { BsCashStack, BsCreditCard } from "react-icons/bs";
import { VscDesktopDownload } from "react-icons/vsc";
import { RiBankLine } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { FaCcAmazonPay } from "react-icons/fa";
import { MdWarning, MdCelebration } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";

export const PaymentMode = () => {
  const [payment, setpayment] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleCash = () => {
    setpayment(false);
  };

  const handleCard = () => {
    setpayment(true);
  };

  const navigate = useNavigate();
  return (
    <Box mt="20px" display={"flex"}>
      <Box gap={0.5} display={"grid"} w="39%">
        <Box>
          <Box
            onClick={handleCash}
            _hover={{ color: "#FF3F6C", bg: "white" }}
            bg="green.100"
            p="20px 30px"
            display={"flex"}
          >
            <Box mt="2px" mr="8px">
              <BsCashStack />
            </Box>
            <Heading size={"sm"}>Cash On Delivery</Heading>
          </Box>
        </Box>
        <Box>
          <Box
            onClick={handleCard}
            _hover={{ color: "#FF3F6C", bg: "white" }}
            bg="green.100"
            p="20px 30px"
            display={"flex"}
          >
            <Box mt="2px" mr="8px">
              <BsCreditCard />
            </Box>
            <Heading size={"sm"}>Credit/Debit Card</Heading>
          </Box>
        </Box>
        <Box>
          <Box
            _hover={{ color: "#FF3F6C", bg: "white" }}
            bg="green.100"
            p="20px "
            display={"flex"}
          >
            <Box mt="2px" mr="8px">
              <FaCcAmazonPay />
            </Box>
            <Heading size={"sm"}>PhonePe/GooglePay/UPI</Heading>
          </Box>
        </Box>
        <Box>
          <Box
            _hover={{ color: "#FF3F6C", bg: "white" }}
            bg="green.100"
            p="20px 30px"
            display={"flex"}
          >
            <Box mt="2px" mr="8px">
              <GiWallet />
            </Box>
            <Heading size={"sm"}>Paytm/Wallets</Heading>
          </Box>
        </Box>
        <Box>
          <Box
            _hover={{ color: "#FF3F6C", bg: "white" }}
            bg="green.100"
            p="20px 30px"
            display={"flex"}
          >
            <Box mt="2px" mr="8px">
              <RiBankLine />
            </Box>
            <Heading size={"sm"}>Net Banking</Heading>
          </Box>
        </Box>
        <Box>
          <Box
            _hover={{ color: "#FF3F6C", bg: "white" }}
            bg="green.100"
            p="20px 30px"
            display={"flex"}
          >
            <Box mt="2px" mr="8px">
              <VscDesktopDownload />
            </Box>
            <Heading size={"sm"}>EMI/Pay Later</Heading>
          </Box>
        </Box>
      </Box>

      <Box w="65%">
        {payment ? (
          <Box m="20px" width="80%">
            <Text textAlign={"left"} fontSize={"14px"} fontWeight={"bold"}>
              CREDIT/DEBIT CARD
            </Text>

            <Text mt="7px" textAlign={"left"} fontSize={"14px"}>
              Please ensure your card can be used for online transactions.
            </Text>

            <Box>
              <Text ml="7px" mt="10px" textAlign="left">
                {" "}
                Card Number
              </Text>
              <Box
                boxShadow="  rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
                ml="2px"
                mr="2px"
                p="5px"
              >
                <HStack>
                  <PinInput size="sm" type="alphanumeric">
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </Box>
              <Input ml="2px" mr="2px" mt="7px" placeholder="Name on Card" />
              <Box ml="2px" mr="2px" gap={4} mt="7px" display={"flex"}>
                <Input placeholder="DD/MM" />
                <Input placeholder="CVV" />
              </Box>
              <Box>
                <Button
                  p="20px"
                  bg="#FF3F6C"
                  colorScheme={"white"}
                  w="100%"
                  mt="10px"
                  onClick={onOpen}
                >
                  PAY NOW
                </Button>
                <AlertDialog
                  motionPreset="slideInBottom"
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                  isOpen={isOpen}
                  isCentered
                >
                  <AlertDialogOverlay />

                  <AlertDialogContent>
                    <AlertDialogHeader textAlign={"center"}>
                      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
                    </AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                      <Heading
                        textAlign={"center"}
                        as="h2"
                        size="xl"
                        mt={6}
                        mb={2}
                      >
                        Payment Successfull
                      </Heading>
                      <Box ml="70px" display={"flex"}>
                        <Text>Thank You For Choosing Wardrobe </Text>
                      </Box>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Button
                        onClick={() => navigate("/")}
                        mr="170px"
                        bg="#FF3F6C"
                        colorScheme={"white"}
                      >
                        Done
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box
            width="90%"
            margin={"auto"}
            bg="green.100"
            mt="20px"
            p="10px 20px"
          >
            <Box textAlign={"left"} display={"flex"}>
              <Box mt="2px">
                <MdWarning color="red" />
              </Box>

              <Text color="red" fontSize={"13px"} fontWeight={"bold"} ml="7px">
                Pay on Delivery is not Available
              </Text>
            </Box>
            <Text
              mt="7px"
              color="grey"
              textAlign={"left"}
              fontSize={"14px"}
              ml="22px"
            >
              Pay on Delivery Payment option is not available for your shipping
              address
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};
