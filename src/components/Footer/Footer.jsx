import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  // Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import portfolio from "../../img/icon.png";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
} from "react-icons/bs";
// import { GiCondorEmblem } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [isSmallerThan] = useMediaQuery("(min-width: 468px)");

  return (
    <div className="Footer">
      <Box
        bg="#000  "
        color="whitesmoke"
        height={isSmallerThan ? "50vh" : "50vh"}
        pt="3rem"
        lineHeight="2rem"
      >
        <Flex
          justify={"space-evenly"}
          width={["100%", "100%", "100%", "100%"]}
          textAlign={isSmallerThan ? "left" : "center"}
          fontSize={["sm", "md", "md", "md"]}
          flexDirection={isSmallerThan ? "row" : "column"}
          background={"black"}
        >
          <Box
            as={Flex}
            flexDirection="column"
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/*
            <Text as={Link} to="/allproducts?gender=MEN">
              Mens Collection
            </Text>
            <Text as={Link} to="/allproducts?gender=WOMEN">
              Womens Collection
            </Text>
            <Text as={Link} to="/allproducts?category=shoes">
              Shoes Collection
            </Text>
            <Text as={Link} to="/allproducts?category=clothes">
              Clothes Collection
            </Text> */}

            <Avatar
              name={"testimage"}
              size={isSmallerThan ? "2xl" : "lg"}
              my="1rem"
              bg="white"
              src={portfolio}
            />
            <Text w="52" textAlign={"center"}>
              AVYAYA HEALTH REWINE INDIA LLP
            </Text>
          </Box>

          {isSmallerThan ? (
            <Flex flexDirection={"column"}>
              <Heading>Support</Heading>

              <NavLink to={"/orders"}>Order Tracker</NavLink>
              <NavLink to={"/privacy"}>Privacy Policy</NavLink>
              <NavLink to={"/terms"}>Terms & Conditions</NavLink>
              <NavLink to={"/return"}>Refund Policy</NavLink>
            </Flex>
          ) : null}

          {isLargerThan ? (
            <Flex flexDirection={"column"}>
              <Heading>Company Info</Heading>
              <NavLink to={"/about"}>About Us</NavLink>
              <NavLink to={"/team"}>Our Team</NavLink>
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </Flex>
          ) : null}
          <Box mt="1rem" display={"flex"} gap="1rem" justifyContent={"center"}>
            <a
              href="https://wa.me/919479394010"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={9} h={9} my="1rem" as={BsWhatsapp} />
            </a>
            <a
              href="https://www.facebook.com/AVYAYAHEALTH?mibextid=ZbWKwL"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={9} h={9} my="1rem" as={BsFacebook} />
            </a>
            <a
              href="https://www.instagram.com/avyaya_health/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={9} h={9} my="1rem" as={BsInstagram} />
              {/* <Avatar w={10} h={10} my="1rem" bg="white" src={portfolio} /> */}
            </a>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Footer;
