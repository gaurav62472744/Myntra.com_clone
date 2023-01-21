import { Box, Text, Button, Heading } from "@chakra-ui/react";
import React from "react";
import AdminSide from "./AdminSide";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUserData, getUserDataProduct } from "../Redux/Admin/action";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import Loading from "./Loader";

const AdminCutomer = () => {
  const { users, isLoading } = useSelector((store) => store.AdminReducer);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUserData(id)).then(() => {
      dispatch(getUserDataProduct);
    });
  };

  useEffect(() => {
    dispatch(getUserDataProduct);
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
        <Heading>User Login Data</Heading>
        <TableContainer
          style={{
            marginTop: "20px",
          }}
        >
          <Table variant="striped" colorScheme="teal">
            {/* <TableCaption>Total Available Products</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Sr No.</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Email</Th>
                {/* <Th>Category</Th> */}

                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {isLoading && <Loading />}
              {!isLoading &&
                users?.map((el, i) => {
                  return (
                    <Tr>
                      <Td>{i + 1}</Td>

                      <Td>{el.firstName}</Td>
                      <Td>{el.lastName}</Td>
                      {/* <Td>{el.category}</Td> */}
                      <Td>{el.Email}</Td>

                      <Td>
                        <Button onClick={() => handleDelete(el.id)}>
                          Delete
                        </Button>
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

export default AdminCutomer;
