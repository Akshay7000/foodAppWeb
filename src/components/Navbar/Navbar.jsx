import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/icon.png";
//import { FiUser } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { useSelector } from "react-redux";
import { DarkModeBtn } from "../DarkMode/DarkModeBtn";
import Profile from "../Profile/Profile";
import SideMenu from "../Sidebar/Sidebar";

const Navbar = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();
  const auth = useSelector((state) => state.AuthReducer.isAuth);

  const cart = useSelector((store) => store.cart.cart);
  // const wishlist = useSelector((store) => store.wishReducer.wishlist);
  const { colorMode } = useColorMode();
  const baseStyle = {
    color: "black",
    textDecoration: "none",
  };

  const activeStyle = {
    color: "#13acbc",
    textDecoration: "none",
    transition: "0.5s",
    borderBottom: "2px solid #13acbc",
  };

  const handleHome = () => {
    navigate("/");
  };
  const handleCart = () => {
    navigate("/cart");
  };
  // const handleHeart = () => {
  //   navigate("/wishlist");
  // };
  const handleSignup = () => {
    navigate("/register");
  };
  return (
    <div className="Navbar">
      <Flex
        h={"9vh"}
        display="flex"
        justifyContent={"space-between"}
        // gap="10px"
        alignItems={"center"}
        bg={colorMode === "dark" ? "none" : "#13acbc"}
        px={isLargerThan ? 10 : 5}
      >
        <HStack onClick={handleHome} cursor={"pointer"}>
          <Image
            width={["70px"]}
            m={2}
            src={logo}
            alt="logo"
            fallbackSrc="https://via.placeholder.com/150"
          />
        </HStack>
        <HStack>
          {auth ? (
            <Box>
              <Profile colorMode={colorMode} />
            </Box>
          ) : (
            <Button
              bg={"black"}
              color={"whitesmoke"}
              border={"1px solid beige"}
              _hover={{
                bg: "none",
                color: "teal",
              }}
              onClick={handleSignup}
            >
              Sign up
            </Button>
          )}
          {/* <Box mr={["5", "6", "7", "9"]}>
            <DarkModeBtn />
          </Box> */}
        </HStack>
      </Flex>
      <Flex fontWeight="bold">
        <Spacer />
        {isLargerThan ? (
          <HStack>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/"
            >
              <Text
                color={colorMode === "dark" ? "white" : "black"}
                my="4"
                mx="2"
              >
                All Products
              </Text>
            </NavLink>

            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/about"
            >
              <Text
                color={colorMode === "dark" ? "white" : "black"}
                my="4"
                mx="2"
              >
                About Us
              </Text>
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/team"
            >
              <Text
                color={colorMode === "dark" ? "white" : "black"}
                my="4"
                mx="2"
              >
                Our Team
              </Text>
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/contact"
            >
              <Text
                color={colorMode === "dark" ? "white" : "black"}
                my="4"
                mx="2"
              >
                Contact Us
              </Text>
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/shoes1"
            >
              <Text
                color={colorMode === "dark" ? "white" : "black"}
                my="4"
                mx="2"
              >
                Support
              </Text>
            </NavLink>
          </HStack>
        ) : null}

        <Spacer />

        <HStack>
          {/* <Box>
            <Icon
              w={6}
              h={6}
              my="4"
              mx={isLargerThan ? "3" : "1"}
              as={BsSearch}
            />
          </Box> */}
          {/*
          <Box onClick={handleHeart}>
            <Flex
              onClick={handleCart}
              alignItems={"center"}
              alignContent={"center"}
              justifyContent={"center"}
            >
              <Icon
                w={6}
                h={6}
                my="4"
                mx="3"
                as={BsSuitHeart}
                cursor={"pointer"}
              />
              <Text
                position="relative"
                top="-15px"
                left="-25px"
                borderRadius="50%"
                p="0rem 0.3rem"
                bg="blue.500"
                color="white"
              >
                {wishlist ? wishlist.length : 0}
              </Text>
            </Flex>
          </Box> */}
          <Box>
            <Flex
              onClick={handleCart}
              alignItems={"center"}
              alignContent={"center"}
              justifyContent={"center"}
            >
              <Icon w={6} h={6} my="4" mx="3" as={BsBag} cursor={"pointer"} />
              <Text
                position="relative"
                top="-15px"
                left="-25px"
                borderRadius="50%"
                p="0rem 0.3rem"
                bg="blue.500"
                color="white"
                textAlign={"center"}
                justifyContent={"center"}
                alignItems={"center"}
                display={"flex"}
                fontSize={12}
                w={6}
                h={6}
              >
                {cart ? cart.length : 0}
              </Text>
            </Flex>
          </Box>
          <Box> {!isLargerThan && <SideMenu colorMode={colorMode} />}</Box>
        </HStack>
      </Flex>
    </div>
  );
};

export default Navbar;

//BsSearch Icon
