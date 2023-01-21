import React, { useEffect } from "react";
import AdminSide from "./AdminSide";
import { Box, Button, Text } from "@chakra-ui/react";
import {
  deleteAdminProduct,
  getMenAdminProduct,
  updateAdminProduct,
} from "../Redux/Admin/action";
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
import Loading from "./Loader";

const AdminStore = () => {
  const { men, isLoading } = useSelector((store) => store.AdminReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenAdminProduct);
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteAdminProduct(id)).then(() => {
      dispatch(getMenAdminProduct);
    });
  };
  const handleUpdate = () => {
    dispatch(updateAdminProduct()).then(() => {
      dispatch(getMenAdminProduct);
    });
  };

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
            {/* <TableCaption>Total Available Products</TableCaption> */}
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
              {isLoading && <Loading />}
              {!isLoading &&
                men?.map((el, i) => {
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
                        <Button onClick={() => handleUpdate(el.id)}>
                          Edit
                        </Button>
                      </Td>
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

export default AdminStore;
