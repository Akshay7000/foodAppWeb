import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
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
    borderBottom: "2px solid #fff",
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
    <div className={"Navbar"}>
      {!isLargerThan ? (
        <Flex
          h={"9vh"}
          display="flex"
          justifyContent={"space-between"}
          // gap="10px"
          alignItems={"center"}
          bg={colorMode === "dark" ? "none" : "#13acbc"}
        >
          <HStack cursor={"pointer"}>
            <SideMenu colorMode={"dark"} />
            <Image
              onClick={handleHome}
              width={["70px"]}
              height="100%"
              m={2}
              src={logo}
              alt="logo"
              fallbacksrc="https://via.placeholder.com/150"
            />
          </HStack>
          <HStack>
            {auth ? (
              <Box>
                <Flex
                  alignItems={"center"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
                  <Profile colorMode={colorMode} />
                  <>
                    <Icon
                      ml={"6"}
                      onClick={handleCart}
                      w={6}
                      h={6}
                      my="4"
                      mr="3"
                      as={BsBag}
                      color={"#fff"}
                      cursor={"pointer"}
                    />
                    <Text
                      position="relative"
                      top="-15px"
                      left="-25px"
                      borderRadius="50%"
                      p="0rem 0.3rem"
                      bg="#000"
                      color="#fff"
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
                  </>
                </Flex>
              </Box>
            ) : (
              <Button
                mr={"8"}
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
          </HStack>
        </Flex>
      ) : (
        <Flex
          fontWeight="bold"
          h={"12vh"}
          display="flex"
          justifyContent={"space-between"}
          // gap="10px"
          alignItems={"center"}
          bg={colorMode === "dark" ? "none" : "#13acbc"}
          px={isLargerThan ? 10 : 5}
        >
          <HStack></HStack>

          {isLargerThan ? (
            <HStack>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/"
              >
                <Text color={"white"} my="4" mx="2">
                  Home
                </Text>
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/products"
              >
                <Text color={"white"} my="4" mx="2">
                  Products
                </Text>
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/something-new"
              >
                <Text color={"white"} my="4" mx="2">
                  Something New
                </Text>
              </NavLink>

              <HStack onClick={handleHome} cursor={"pointer"}>
                <Image
                  width={["90px"]}
                  height="100%"
                  m={2}
                  src={logo}
                  alt="logo"
                  fallbacksrc="https://via.placeholder.com/150"
                />
              </HStack>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/about"
              >
                <Text color={"white"} my="4" mx="2">
                  About Us
                </Text>
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/team"
              >
                <Text color={"white"} my="4" mx="2">
                  Our Team
                </Text>
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/contact"
              >
                <Text color={"white"} my="4" mx="2">
                  Contact Us
                </Text>
              </NavLink>
            </HStack>
          ) : null}

          <HStack>
            {auth ? (
              <Box
                display={"flex"}
                alignItems={"center"}
                alignContent={"center"}
                justifyContent={"center"}
              >
                {isLargerThan && (
                  <Box>
                    <Flex
                      alignItems={"center"}
                      alignContent={"center"}
                      justifyContent={"center"}
                    >
                      <Profile colorMode={colorMode} />
                      <Icon
                        onClick={handleCart}
                        w={6}
                        h={6}
                        my="4"
                        mr="3"
                        ml={"6"}
                        as={BsBag}
                        color={"#fff"}
                        cursor={"pointer"}
                      />
                      <Text
                        position="relative"
                        top="-15px"
                        left="-25px"
                        borderRadius="50%"
                        p="0rem 0.3rem"
                        bg="#000"
                        color="#fff"
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
                )}
              </Box>
            ) : (
              <HStack>
                {isLargerThan && (
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
              </HStack>
            )}
          </HStack>
        </Flex>
      )}
    </div>
  );
};

export default Navbar;

//BsSearch Icon
