import { Box, Text } from "@chakra-ui/react";
import React from "react";

import AdminSide from "./AdminSide";

const Dashboard = () => {
  return (
    <Box>
      <Box>
        <AdminSide />
      </Box>
      <Box style={{ marginTop: "80px" }}>
        <Text>Mynta work in Progress</Text>
      </Box>
    </Box>
  );
};

export default Dashboard;
