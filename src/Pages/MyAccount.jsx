import { Box, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import man from "../img/men1.png";
const MyAccount = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const profileData = useSelector((state) => state.AuthReducer?.profileData);

  return (
    <div>
      <Navbar />
      <Box
        h={isLargerThan && "100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={!isLargerThan && 20}
      >
        {/* <Navbar /> <br /> */}

        <Box
          h={isLargerThan && "80%"}
          w={"80%"}
          display={"flex"}
          boxShadow="2xl"
          flexDirection={isLargerThan ? "row" : "column"}
        >
          <Box
            w={isLargerThan ? "50%" : "100%"}
            h={"100%"}
            backgroundColor={"#13acbc"}
          >
            <Image
              src={man}
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
              fallbackSrc="https://via.placeholder.com/150"
            />
          </Box>
          <Box
            w={isLargerThan ? "50%" : "100%"}
            h={"100%"}
            textAlign="start"
            px={isLargerThan ? "20" : "5  "}
            py={50}
            textTransform={"capitalize  "}
          >
            <Box my={2} fontSize={["xs", "sm", "md", "md"]}>
              <Text color={"GrayText"}>First Name</Text>
              <Text fontSize={isLargerThan ? 34 : 22} fontWeight={"bold"}>
                {profileData?.firstName}
              </Text>
            </Box>
            <Box my={2}>
              <Text color={"GrayText"}>Last Name</Text>
              <Text fontSize={isLargerThan ? 34 : 22} fontWeight={"bold"}>
                {profileData?.lastName}
              </Text>
            </Box>
            <Box my={2}>
              <Text color={"GrayText"}>Email Address</Text>
              <Text fontSize={isLargerThan ? 34 : 22} fontWeight={"bold"}>
                {profileData?.email}
              </Text>
            </Box>
            <Box my={2}>
              <Text color={"GrayText"}>Phone Number</Text>
              <Text fontSize={isLargerThan ? 34 : 22} fontWeight={"bold"}>
                +91 {profileData?.mobile}
              </Text>
            </Box>
            <Box my={2}>
              <Text color={"GrayText"}>Address</Text>
              <Text fontSize={isLargerThan ? 34 : 22} fontWeight={"bold"}>
                2349 Barfani Dham M.R.9, Indore M.P 452010
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MyAccount;
