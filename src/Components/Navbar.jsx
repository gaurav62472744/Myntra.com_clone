// import {
//   Image,
//   Input,
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Button,
//   Stack,
//   Collapse,
//   Icon,
//   Link,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   useColorModeValue,
//   useBreakpointValue,
//   useDisclosure,
// } from "@chakra-ui/react";
// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from "@chakra-ui/icons";

// import { AiOutlineHeart } from "react-icons/ai";
// import { BiUser } from "react-icons/bi";
// import { BsHandbag } from "react-icons/bs";

// export default function Navbar() {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box>
//       <Flex
//         bg={useColorModeValue("white", "gray.800")}
//         color={useColorModeValue("gray.600", "white")}
//         minH={"60px"}
//         py={{ base: 2 }}
//         px={{ base: 4 }}
//         borderBottom={1}
//         borderStyle={"solid"}
//         borderColor={useColorModeValue("gray.200", "gray.900")}
//         align={"center"}
//       >
//         <Flex
//           flex={{ base: 1, md: "auto" }}
//           ml={{ base: -2 }}
//           display={{ base: "flex", md: "none" }}
//         >
//           <IconButton
//             onClick={onToggle}
//             icon={
//               isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//             }
//             variant={"ghost"}
//             aria-label={"Toggle Navigation"}
//           />
//         </Flex>
//         <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
//           <Image
//             style={{ width: "53px", height: "36px" }}
//             src="https://images.indianexpress.com/2021/01/myntra.png"
//             alt="Myntra-Logo"
//           />

//           <Flex display={{ base: "none", md: "flex" }} ml={10}>
//             <DesktopNav />
//           </Flex>
//         </Flex>

//         <Stack
//           flex={{ base: 1, md: 0 }}
//           justify={"flex-end"}
//           direction={"row"}
//           align={"center"}
//           spacing={6}
//         >
//           <Input
//             w={[300, 400, 500]}
//             placeholder="Search for products,brands and more"
//           />

//           <Box>
//             <BiUser />
//             <Button
//               as={"a"}
//               fontSize={"sm"}
//               fontWeight={400}
//               variant={"link"}
//               href={"#"}
//             >
//               Profile
//             </Button>
//           </Box>

//           <Box alignContent="center">
//             <AiOutlineHeart />
//             <Button
//               as={"a"}
//               fontSize={"sm"}
//               fontWeight={400}
//               variant={"link"}
//               href={"#"}
//             >
//               Wishlist
//             </Button>
//           </Box>

//           <Box alignContent="center">
//             <BsHandbag />
//             <Button
//               as={"a"}
//               fontSize={"sm"}
//               fontWeight={400}
//               variant={"link"}
//               href={"#"}
//             >
//               Bag
//             </Button>
//           </Box>
//         </Stack>
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <MobileNav />
//       </Collapse>
//     </Box>
//   );
// }

// const DesktopNav = () => {
//   const linkColor = useColorModeValue("gray.600", "gray.200");
//   const linkHoverColor = useColorModeValue("gray.800", "white");
//   const popoverContentBgColor = useColorModeValue("white", "gray.800");

//   return (
//     <Stack direction={"row"} spacing={4}>
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger={"hover"} placement={"bottom-start"}>
//             <PopoverTrigger>
//               <Link
//                 p={2}
//                 href={navItem.href ?? "#"}
//                 fontSize={"sm"}
//                 fontWeight={500}
//                 color={linkColor}
//                 _hover={{
//                   textDecoration: "none",
//                   color: linkHoverColor,
//                 }}
//               >
//                 {navItem.label}
//               </Link>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
//                 border={0}
//                 boxShadow={"xl"}
//                 bg={popoverContentBgColor}
//                 p={4}
//                 rounded={"xl"}
//                 minW={"sm"}
//               >
//                 <Stack>
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}
//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = ({ label, href, subLabel }) => {
//   return (
//     <Link
//       href={href}
//       role={"group"}
//       display={"block"}
//       p={2}
//       rounded={"md"}
//       _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//     >
//       <Stack direction={"row"} align={"center"}>
//         <Box>
//           <Text
//             transition={"all .3s ease"}
//             _groupHover={{ color: "pink.400" }}
//             fontWeight={500}
//           >
//             {label}
//           </Text>
//           <Text fontSize={"sm"}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}
//         >
//           <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };

// const MobileNav = () => {
//   return (
//     <Stack
//       bg={useColorModeValue("white", "gray.800")}
//       p={4}
//       display={{ md: "none" }}
//     >
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   );
// };

// const MobileNavItem = ({ label, children, href }) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Flex
//         py={2}
//         as={Link}
//         href={href ?? "#"}
//         justify={"space-between"}
//         align={"center"}
//         _hover={{
//           textDecoration: "none",
//         }}
//       >
//         <Text
//           fontWeight={600}
//           color={useColorModeValue("gray.600", "gray.200")}
//         >
//           {label}
//         </Text>
//         {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transition={"all .25s ease-in-out"}
//             transform={isOpen ? "rotate(180deg)" : ""}
//             w={6}
//             h={6}
//           />
//         )}
//       </Flex>

//       <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={"solid"}
//           borderColor={useColorModeValue("gray.200", "gray.700")}
//           align={"start"}
//         >
//           {children &&
//             children.map((child) => (
//               <Link key={child.label} py={2} href={child.href}>
//                 {child.label}
//               </Link>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>
//   );
// };

// const NAV_ITEMS = [
//   {
//     label: "MEN",
//     children: [
//       {
//         label: "TopWear",
//         subLabel: "Casual Shirts",
//         href: "#",
//       },
//       {
//         label: "",
//         subLabel: "T-Shirts",
//         href: "#",
//       },
//       {
//         label: "",
//         subLabel: "Formal-Shirts",
//         href: "#",
//       },
//       {
//         label: "",
//         subLabel: "SweatShirts",
//         href: "#",
//       },
//       {
//         label: "",
//         subLabel: "Jackets",
//         href: "#",
//       },
//       {
//         label: "",
//         subLabel: "Blazers and Coats",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "WOMEN",
//     children: [
//       {
//         label: "Job Board",
//         subLabel: "Find your dream design job",
//         href: "#",
//       },
//       {
//         label: "Freelance Projects",
//         subLabel: "An exclusive list for contract work",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "KIDS",
//     children: [
//       {
//         label: "Job Board",
//         subLabel: "Find your dream design job",
//         href: "#",
//       },
//       {
//         label: "Freelance Projects",
//         subLabel: "An exclusive list for contract work",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "HOME & LIVING",
//     children: [
//       {
//         label: "Job Board",
//         subLabel: "Find your dream design job",
//         href: "#",
//       },
//       {
//         label: "Freelance Projects",
//         subLabel: "An exclusive list for contract work",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "BEAUTY",
//     children: [
//       {
//         label: "Job Board",
//         subLabel: "Find your dream design job",
//         href: "#",
//       },
//       {
//         label: "Freelance Projects",
//         subLabel: "An exclusive list for contract work",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "STUDIO",
//     children: [
//       {
//         label: "Job Board",
//         subLabel: "Find your dream design job",
//         href: "#",
//       },
//       {
//         label: "Freelance Projects",
//         subLabel: "An exclusive list for contract work",
//         href: "#",
//       },
//     ],
//   },
// ];

import { AiFillHeart } from "react-icons/ai";

import { CgProfile } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";

import { SearchIcon } from "@chakra-ui/icons";
import ward from "../Utils/Wardrobe.png";
// import Login from "./Login";
// import Homepage from "../Pages/Homepage";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  InputGroup,
  Input,
  InputLeftElement,
  Image,
  VStack,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Tag,
  Menu,
  MenuList,
  MenuGroup,
  MenuDivider,
  MenuButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DummyNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [LoginUser, setLoginUser] = useState([]);
  const [verify, setVerify] = useState(false);
  const [verifya, setVerifya] = useState(false);

  const fetchData = async () => {
    let res = await fetch("https://classic-world.onrender.com/UsersList");
    let data = await res.json();
    setVerify(true);
    setLoginUser(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        zIndex={999}
        pos={"fixed"}
        top={0}
        py={{ base: 2, md: 0 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        alignItems={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Box border={"0px solid black"}>
            <NavLink to="/">
              <Image src={ward} width="100%" padding={"10px"} />
            </NavLink>
          </Box>

          <Flex display={{ base: "none", md: "flex" }} ml={0}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack w={"35%"} mr={"5%"}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search for produts,brands and more"
            />
          </InputGroup>
        </Stack>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          mr={"2%"}
        >
          <VStack spacing={1}>
            <CgProfile />

            <Menu>
              <MenuButton>
                <Button
                  as={"a"}
                  fontSize={"xs"}
                  fontWeight={"700"}
                  variant={"link"}
                >
                  Profile
                </Button>
              </MenuButton>
              <MenuList>
                <MenuGroup>
                  <Flex
                    direction={"column"}
                    align={"flex-start"}
                    padding={"10px"}
                  >
                    {verify && !verifya ? (
                      <Text fontWeight={"bold"} fontSize={"15px"}>
                        Hello {LoginUser[LoginUser.length - 1].fname}
                      </Text>
                    ) : (
                      <Text fontWeight={"bold"} fontSize={"15px"}>
                        Welcome
                      </Text>
                    )}
                    {verify && !verifya ? (
                      <Text fontWeight={"500"} fontSize={"13px"}>
                        {" "}
                        {LoginUser[LoginUser.length - 1].email}
                      </Text>
                    ) : (
                      <Text fontSize={"12px"} fontWeight={"500"}>
                        To access account and manage orders
                      </Text>
                    )}
                    {verifya ? (
                      <NavLink to="/Login">
                        <Button
                          mt={"10px"}
                          variant="outline"
                          fontSize={"13px"}
                          fontWeight={"bold"}
                          color="#FF3F6C"
                        >
                          LOGIN / SIGNUP
                        </Button>
                      </NavLink>
                    ) : (
                      <Button
                        isDisabled={true}
                        mt={"10px"}
                        variant="outline"
                        fontSize={"13px"}
                        fontWeight={"bold"}
                        color="#FF3F6C"
                      >
                        LOGIN / SIGNUP
                      </Button>
                    )}
                  </Flex>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                  <Flex
                    direction={"column"}
                    gap={"5px"}
                    align={"flex-start"}
                    padding={"10px"}
                    fontWeight={"500"}
                    fontSize={"13px"}
                  >
                    <Link>Orders</Link>
                    <Link>Wishlist</Link>
                    <Link>Gift Cards</Link>
                    <Link>Contact Us</Link>
                    <Stack direction={"row"} align={"center"} spacing={1}>
                      <Link>Myntra Insider</Link>
                      <Tag
                        size={"sm"}
                        bg={useColorModeValue("pink.400", "green.800")}
                        ml={2}
                        color={"white"}
                      >
                        New
                      </Tag>
                    </Stack>
                  </Flex>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                  <Flex
                    direction={"column"}
                    gap={"5px"}
                    align={"flex-start"}
                    padding={"10px"}
                    fontWeight={"500"}
                    fontSize={"13px"}
                  >
                    <Link>Myntra Credit</Link>
                    <Link>Coupons</Link>
                    <Link>Saved Cards</Link>
                    <Link>Saved VPA</Link>
                    <Link>Saved Addresses</Link>
                  </Flex>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                  <Flex
                    direction={"column"}
                    gap={"5px"}
                    align={"flex-start"}
                    padding={"10px"}
                    fontWeight={"500"}
                    fontSize={"13px"}
                  >
                    <Button variant="outline" onClick={() => setVerifya(true)}>
                      Logout
                    </Button>
                  </Flex>
                </MenuGroup>
              </MenuList>
            </Menu>
          </VStack>

          <VStack>
            <BsSuitHeart />
            <Button
              as={"a"}
              fontSize={"xs"}
              fontWeight={700}
              variant={"link"}
              href={"#"}
            >
              Wishlist
            </Button>
          </VStack>

          <VStack>
            <BsHandbag />
            <Button
              as={"a"}
              fontSize={"xs"}
              fontWeight={700}
              variant={"link"}
              href={"#"}
            >
              Bag
            </Button>
          </VStack>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("grey.600", "gray.200");
  const linkHoverColor = useColorModeValue("pink.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack
      direction={"row"}
      spacing={4}
      w={"600px"}
      alignItems={"center"}
      border={"0px solid red"}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} border={"0px solid blue"}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  borderBottom: "3px solid red",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"lg"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"4xl"}
              >
                <Flex
                  direction={"row"}
                  width={"full"}
                  gap={"20px"}
                  justifyContent={"space-between"}
                >
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Flex>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack
        direction={"column"}
        align={"flex-start"}
        spacing={0}
        border={"0px solid pink"}
      >
        <Flex direction={"column"} align={"flex-start"}>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={700}
            fontSize={"xs"}
            color={"#D53F8C"}
          >
            {label}
          </Text>
        </Flex>
        <Flex direction={"column"} align={"flex-start"} gap={"5px"}>
          {subLabel.map((el, i) => (
            <Text fontSize={"sm"} key={i}>
              {el}
            </Text>
          ))}
        </Flex>

        <Flex
          transition={"all .3s ease"}
          direction={"column"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <VStack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </VStack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "MENS",
    children: [
      {
        label: "Topwear",
        subLabel: [
          "T-Shirts",
          "Casual Shirts",
          "Formal Shirts",
          "Sweatshirts",
          "Sweaters",
          "Jackets",
          "Blazzers and Coats",
          "Suits",
          "Rain Jackets",
        ],
        href: "#",
      },
      {
        label: "Indian and Festive Wear",
        subLabel: [
          "Kurtas and Kurtas Sets",
          "Sherwanies",
          "Nehru Jacket",
          "Dhoties",
        ],
        href: "#",
      },
      {
        label: "Bottomwear",
        subLabel: [
          "Jeans",
          "Casual Trousers",
          "Shorts",
          "TrackPants and Joggers",
        ],
        href: "#",
      },
      {
        label: "Innerwear ans Sleepwear",
        subLabel: [
          "Brief and Trunks",
          "Vests",
          "Sleepwear and Loungewear",
          "Thermals",
        ],
        href: "#",
      },

      {
        label: "Footwear",
        subLabel: [
          "Casual Shoes",
          "Sports Shoes",
          "Formal Shoes",
          "Sneakers",
          "Sandals and Floaters",
          "Flip Flops",
          "Socks",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "WOMEN",
    children: [
      {
        label: "Indian and Fusion Wear",
        subLabel: [
          "Crop tops Lehenga",
          "Palazzo Lehenga",
          "jacket over Sari",
          "Pants under Saree",
          "Slit Dhoti under Blouse",
          "Ethnic saree",
          "Ethnic skirt",
        ],
        href: "#",
      },
      {
        label: "Western Wear",
        subLabel: [
          "Dresses",
          "Tops",
          "TShirts",
          "Jeans",
          "Trousers & Capris",
          "Shorts and Skirts",
          "Co-ords",
          "Playsuits",
          "Jumpsuits",
          "Shrungs",
          "Sweaters & SweatShirts",
          "Blazzers and Waistcoats",
        ],
        href: "#",
      },
      {
        label: "Footwear",
        subLabel: [
          "Flats",
          "Casual Shoes",
          "Heels",
          "Boots",
          "Sports Shoes & Floaters",
          "Sports and Active Wear",
        ],
        href: "#",
      },
      {
        label: "Lingerie & Sleepwear",
        subLabel: [
          "Acne & Blemishes",
          "Fine Lines & Wrinkles",
          "Dark Circles",
          "Dry Skin",
          "Dullness",
          "Lack of Fairness",
          "Pigmentaion",
        ],
        href: "#",
      },
      {
        label: "Beauty & Personal Care",
        subLabel: [
          "Take The SPF Quiz",
          "SPF 30 and over",
          "SPF 50 and over",
          "After Sun",
          "Tinted",
          "Mineral",
          "Eye Protection",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "KIDS",
    children: [
      {
        label: "Boys Clothing",
        subLabel: [
          "T-Shirts",
          "Casual Shirts",
          "Formal Shirts",
          "Sweatshirts",
          "Sweaters",
          "Jackets",
          "Blazzers and Coats",
          "Suits",
          "Rain Jackets",
        ],
        href: "#",
      },
      {
        label: "Girls Clothing",
        subLabel: [
          "Shampoo",
          "Conditioners",
          "Hair Treatments",
          "Hair Masks",
          "Hair Oils",
          "Hair Sprays",
          "Hair Styling",
          "Hair Thinning & Loss",
        ],
        href: "#",
      },
      {
        label: "Footwear",
        subLabel: [
          "Flats",
          "Casual Shoes",
          "Heels",
          "Boots",
          "Sports Shoes & Floaters",
          "Sports and Active Wear",
        ],
        href: "#",
      },
      {
        label: "Toys",
        subLabel: ["Flat Irons", "Hair Dryers", "Rollers & Curling Tongs"],
        href: "#",
      },
      {
        label: "Infants",
        subLabel: [" Removal Devices", " Removal Products", " Beauty Products"],
        href: "#",
      },
    ],
  },
  {
    label: "HOME & LIVING",
    children: [
      {
        label: "Ben Linen & Furnishing",
        subLabel: [
          "New In",
          "Clean Makeup",
          "5 Rated Products",
          "Gifts & Sets",
          "Brushes & Applicators",
          "Makeup Palettes",
          "Nails",
        ],
        href: "#",
      },
      {
        label: "Flooring",
        subLabel: [
          "Eye Liners",
          "Lash & Brow Enhancers",
          "Eye Shadows",
          "Mascaras",
          "Brow Pencils",
        ],
        href: "#",
      },
      {
        label: "Bath",
        subLabel: [
          "BB && CC Cream",
          "Blushers",
          "Bronzers",
          "Color Correctors",
          "Concealers",
          "Contour",
          "Face Powders",
          "Foundations",
          "Highlighters",
        ],
        href: "#",
      },
      {
        label: "Lamps and Lighting",
        subLabel: [
          "stastics",
          "Lamps Balms",
          "Lamp Glosses",
          " Liners",
          " Plumpers",
          "Liquid Lamps",
        ],
        href: "#",
      },
      {
        label: "Home Decor",
        subLabel: [
          "Accessories",
          "Pre-Tan Preparation",
          "Body Tanners",
          "Post Tanning",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "BEAUTY",
    children: [
      {
        label: "Makeup",
        subLabel: [
          "View All Bath & Body",
          "New In",
          "Clean Bath & Body",
          "5 Rated Products",
          "Gifts & Sets",
          "Travel Sizes",
          "At Home Spa",
          "Decorants",
          "Oral Care",
        ],
        href: "#",
      },
      {
        label: "Skincare,Bath & Body",
        subLabel: [
          "Baths Oils/Soak",
          "Bath Salts",
          "Body Washes",
          "Cleansing bars",
          "Exfoliators",
        ],
        href: "#",
      },
      {
        label: "Baby Care",
        subLabel: [
          "Accessories",
          "Pre-Tan Preparation",
          "Body Tanners",
          "Post Tanning",
        ],
        href: "#",
      },
      {
        label: "Moisturizers",
        subLabel: ["Balms", "Butters", "Creams", "Lotions", "Oils"],
        href: "#",
      },
      {
        label: "Haircare",
        subLabel: [
          "Bust",
          "Cellulite",
          "Dry Skin",
          "Hair Removal",
          "Hands & Foot Care",
          "Hans Soap Senitizers & Creams",
          "Legs",
          "Simming & Sculpting",
          "Strecth Marks",
          "Sunscreen",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "STUDIO",
    children: [
      {
        label: "Galary",
        subLabel: ["View All Fragrance", "New In", "5 Rated Products"],
        href: "#",
      },
      {
        label: "Top Brands",
        subLabel: [
          "NEOM Organics",
          "Glasshouse Fragrances",
          "KORRES",
          "NEST Fragrance",
          "Molton Brown",
        ],
        href: "#",
      },
      {
        label: "Deoderants",
        subLabel: [
          "Perfume",
          "EAU de Toilette",
          "Body Spray",
          "For Her",
          "For Him",
        ],
        href: "#",
      },
      {
        label: "Ethnic",
        subLabel: [
          "Scented Candles",
          "Diffusers",
          "Aromatherapy",
          "Pillow Mists",
          "Room Sprays",
        ],
        href: "#",
      },

      {
        label: "Upcoming Fashion",
        subLabel: ["In Shirts", "In Pants", "Casual", "Watches", "Footwear"],
        href: "#",
      },
    ],
  },
];
