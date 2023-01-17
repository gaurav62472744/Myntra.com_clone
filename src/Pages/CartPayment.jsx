import React from "react";
import { Box, Image, Progress, Spacer, Text } from "@chakra-ui/react";

export const CartPayment = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        boxShadow=" rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;"
        padding="20px 60px"
        justifyContent={"space-between"}
      >
        <Box>
          <Image
            w="50%"
            src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"
          />
        </Box>

        <Box
          mt="10px"
          letterSpacing={"2px"}
          fontSize={"12px"}
          display={"flex"}
          textAlign={"center"}
          color="grey"
          fontWeight="bold"
        >
          BAG ------------ ADDRESS ------------{" "}
          <span style={{ color: "#48BB78" }}>PAYMENT</span>
        </Box>

        <Box>
          <Box display={"flex"}>
            <Image
              w="15%"
              src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            />
            <Text
              fontSize={"12px"}
              mt="3px"
              ml="2px"
              color="#535766"
              letterSpacing={"2px"}
            >
              100% SECURE
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
