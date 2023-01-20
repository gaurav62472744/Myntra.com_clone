import { Box, Text } from "@chakra-ui/react";
import React from "react";
import AdminSide from "./AdminSide";
import Multistep from "./ProductForm";

const TrendingPro = () => {
  return (
    <Box>
      <AdminSide />
      <Box>
        <Multistep />
      </Box>
    </Box>
  );
};

export default TrendingPro;
