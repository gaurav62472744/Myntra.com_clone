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
import {
  addChildAdminProduct,
  addMenAdminProduct,
  addWomenAdminProduct,
} from "../Redux/Admin/action";

const Form1 = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

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
            name="title"
            placeholder="Product Title"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="Brand" fontWeight={"normal"}>
            Brand
          </FormLabel>
          <Input
            name="brand"
            placeholder="Enter Product Brand"
            onChange={handleChange}
          />
        </FormControl>
      </Flex>
      <FormControl>
        <FormLabel htmlFor="Category" fontWeight={"normal"}>
          Category
        </FormLabel>

        <Select
          name="category"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleChange}
        >
          <option value={"Men"}>Men</option>
          <option value={"Women"}>Women</option>
          <option value={"Child"}>Child</option>
        </Select>
      </FormControl>
    </>
  );
};

const Form2 = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

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
            name="image"
            type="url"
            placeholder="Enter Image Url"
            focusBorderColor="brand.400"
            rounded="md"
            onChange={handleChange}
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
          name="discounted_price"
          autoComplete="discount"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Enter Product Price"
          onChange={handleChange}
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
          autoComplete="discount"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Enter Discount Rate"
          onChange={handleChange}
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
          name="strike_price"
          id="strike price"
          autoComplete="strike price"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Enter Discounted Price"
          onChange={handleChange}
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
          onChange={handleChange}
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

const initialData = {
  title: "",
  brand: "",
  category: "",
  image: "",
  discounted_price: "",
  discount: "",
  strike_price: "",
  size: "",
  country: "india",
};

export default function UserForm() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  const [data, setData] = useState(initialData);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (data.category === "Men") {
      dispatch(addMenAdminProduct(data));
    } else if (data.category === "Women") {
      dispatch(addWomenAdminProduct(data));
    } else if (data.category === "Child") {
      dispatch(addChildAdminProduct(data));
    }

    toast({
      title: "Product Added",
      description: "Product Added Successfully Added in website",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    console.log(data);
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
        {step === 1 ? (
          <Form1 data={data} setData={setData} />
        ) : step === 2 ? (
          <Form2 data={data} setData={setData} />
        ) : (
          <Form3 data={data} setData={setData} initialData={initialData} />
        )}
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
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleClick}
                // onClick={() => {
                //
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
