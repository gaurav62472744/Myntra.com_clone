import { Box, Text } from "@chakra-ui/react";
import React from "react";

import AdminSide from "./AdminSide";
// import Chart from "react-apexcharts";

const Dashboard = () => {
  return (
    <Box>
      <Box>
        <AdminSide />
      </Box>
      <Box style={{ marginTop: "80px" }}>
        <Text>Mynta work in Progress</Text>
        {/* <Chart
          mt={200}
          type="pie"
          width={1349}
          height={350}
          series={[50, 10, 65, 100]}
          fill={{ colors: ["#F44336", "#E91E63", "#9C27B0"] }}
          options={{
            noData: { text: "Empty Data" },
            labels: ["Child", "Customers", "Women", "Men"],
          }}
        ></Chart> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
