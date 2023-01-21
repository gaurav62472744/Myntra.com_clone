import React, { useEffect } from "react";
import AdminSide from "./AdminSide";
import { Box, Text } from "@chakra-ui/react";
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
  TableContainer,
  Image,
} from "@chakra-ui/react";
import Loading from "./Loader";

import { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const AdminStore = () => {
  const { men, isLoading } = useSelector((store) => store.AdminReducer);
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  useEffect(() => {
    dispatch(getMenAdminProduct);
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteAdminProduct(id)).then(() => {
      dispatch(getMenAdminProduct);
    });
  };
  const handleUpdate = () => {
    let id = localStorage.getItem("key");

    dispatch(updateAdminProduct(id, price, discount)).then(() => {
      dispatch(getMenAdminProduct);
      onClose();
      setPrice("");
      setDiscount("");
    });
  };
  const handleModal = (id) => {
    localStorage.setItem("key", id);
    onOpen();
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
            <Thead>
              <Tr>
                <Th>Sr No.</Th>
                <Th>Image</Th>
                <Th>Title</Th>
                <Th>Brand</Th>
                <Th>Discount</Th>
                <Th>Price</Th>
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
                      <Td>{el.discount ? el.discount : "(65% OFF)"}</Td>
                      <Td>
                        {el.discounted_price ? el.discounted_price : "1600"}
                      </Td>
                      <Td>
                        <Button onClick={() => handleModal(el.id)}>Edit</Button>
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
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Product Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  ref={initialRef}
                  type={"number"}
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Dicscount </FormLabel>
                <Input
                  placeholder="Discount"
                  type={"text"}
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default AdminStore;
