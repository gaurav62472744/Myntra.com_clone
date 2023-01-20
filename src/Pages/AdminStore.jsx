import React, { useEffect } from "react";
import AdminSide from "./AdminSide";
import { Box, Button, Text } from "@chakra-ui/react";
import { getAdminProduct } from "../Redux/Admin/action";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
} from "@chakra-ui/react";

const AdminStore = () => {
  const data = useSelector((store) => store.AdminReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdminProduct);
  }, []);

  return (
    <Box>
      <AdminSide />

      <Box
        style={{
          width: "80vw",
          margin: "auto",
          marginRight: "35px",
          marginTop: "80px",
        }}
      >
        {" "}
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Total Available Products</TableCaption>
            <Thead>
              <Tr>
                <Th>Sr No.</Th>
                <Th>Image</Th>
                <Th>Title</Th>
                <Th>Brand</Th>
                {/* <Th>Category</Th> */}
                <Th>Discount</Th>
                <Th>Price</Th>
                {/* <Th>Strike Price</Th> */}
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((el, i) => {
                return (
                  <Tr>
                    <Td>{i + 1}</Td>
                    <Td>
                      <Image src={el.images} alt={el.id} />
                    </Td>
                    <Td>{el.title}</Td>
                    <Td>{el.brand}</Td>
                    {/* <Td>{el.category}</Td> */}
                    <Td>{el.discount ? el.discount : "(65% OFF)"}</Td>
                    <Td>
                      {el.discounted_price ? el.discounted_price : "1600"}
                    </Td>
                    {/* <Td>{el.strike_price}</Td> */}
                    <Td>
                      <Button>Edit</Button>
                    </Td>
                    <Td>
                      <Button>Delete</Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default AdminStore;
