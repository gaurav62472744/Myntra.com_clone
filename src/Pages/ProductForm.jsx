import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addAdminProduct } from "../Redux/Admin/action";

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addAdminProduct());
  };

  const Form1 = () => {
    const [title, setTitle] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");

    // const [discription, setDiscription] = useState("");

    return (
      <>
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
          Product Details
        </Heading>
        <Flex>
          <FormControl mr="5%">
            <FormLabel htmlFor="title" fontWeight={"normal"}>
              Title
            </FormLabel>
            <Input
              id="title"
              placeholder="Product Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="Category" fontWeight={"normal"}>
              Category
            </FormLabel>
            <Input
              id="Category"
              placeholder="Add Category"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </FormControl>
        </Flex>
        <FormControl mt="2%">
          <FormLabel htmlFor="Brand" fontWeight={"normal"}>
            Brand
          </FormLabel>
          <Input
            id="brand"
            placeholder="Enter Product Brand"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </FormControl>
      </>
    );
  };

  const Form2 = () => {
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [strike, setStrike] = useState("");
    const [size, setSize] = useState("");
    return (
      <>
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
          Additional Details
        </Heading>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Image
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              color="gray.500"
              rounded="md"
            >
              http://
            </InputLeftAddon>
            <Input
              type="url"
              placeholder="Enter Image Url"
              focusBorderColor="brand.400"
              rounded="md"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </InputGroup>
        </FormControl>

        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor="price"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Price
          </FormLabel>
          <Input
            type="text"
            name="price"
            id="price"
            autoComplete="discount"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            placeholder="Enter Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel
            htmlFor="discount"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Discount Rate
          </FormLabel>
          <Input
            type="text"
            name="discount"
            id="discount"
            autoComplete="discount"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            placeholder="Enter Discount Rate"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="strike price"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Price After Discount
          </FormLabel>
          <Input
            type="text"
            name="strike price"
            id="strike price"
            autoComplete="strike price"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            placeholder="Enter Discounted Price"
            value={strike}
            onChange={(e) => setStrike(e.target.value)}
          />
        </FormControl>
        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="size"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Size
          </FormLabel>
          <Input
            type="text"
            name="size"
            id="size"
            autoComplete="size"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            placeholder="Enter Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </FormControl>
      </>
    );
  };

  const Form3 = () => {
    return (
      <>
        <Heading w="100%" textAlign={"center"} fontWeight="normal">
          Optional Details
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
          <FormControl as={GridItem} colSpan={[6, 3]}>
            <FormLabel
              htmlFor="country"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              Country / Region
            </FormLabel>
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="Select option"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            >
              <option>India</option>
              <option>Canada</option>
              <option>Mexico</option>
              <option>United States</option>
            </Select>
          </FormControl>

          <FormControl id="discription" mt={1}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              Product Discription
            </FormLabel>
            <Textarea
              placeholder="Product Discription"
              rows={3}
              shadow="sm"
              focusBorderColor="brand.400"
              fontSize={{
                sm: "sm",
              }}
            />
          </FormControl>
        </SimpleGrid>
      </>
    );
  };
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                onClick={handleClick}
                w="7rem"
                colorScheme="red"
                variant="solid"
                // onClick={() => {
                //   toast({
                //     title: "Product Added",
                //     description: "Product Successfully Added To The Website",
                //     status: "success",
                //     duration: 3000,
                //     isClosable: true,
                //   });
                // }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
