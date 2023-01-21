import { Box, Heading } from "@chakra-ui/react";
import React from "react";

import AdminSide from "./AdminSide";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getChildAdminProduct,
  getMenAdminProduct,
  getUserDataProduct,
  getWomenAdminProduct,
} from "../Redux/Admin/action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { women, men, child, users } = useSelector(
    (store) => store.AdminReducer
  );

  useEffect(() => {
    dispatch(getWomenAdminProduct);
    dispatch(getMenAdminProduct);
    dispatch(getChildAdminProduct);
    dispatch(getUserDataProduct);
  }, []);
  return (
    <Box>
      <Box>
        <AdminSide />
      </Box>
      <Box style={{ marginTop: "120px" }}>
        <Heading>Total Available Product </Heading>
        <Box style={{ marginTop: "30px" }}>
          <Chart
            mt={200}
            type="pie"
            width={1400}
            height={400}
            series={[child.length, users.length, women.length, men.length]}
            options={{
              labels: ["Child", "Customers", "Women", "Men"],
              noData: { text: "Empty Data" },
              dropShadow: {
                enabled: true,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5,
              },
            }}
          ></Chart>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
