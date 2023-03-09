import {
  Box,
  Flex,
  Image,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import call from "../img/call.png";
import email from "../img/email.png";
import address from "../img/address.png";
import { getAboutData } from "../redux/WebInfoReducer/action";
function ContectUs(props) {
  const dispatch = useDispatch();
  // const about = useSelector((store) => store.AboutReducer.about);
  const loading = useSelector((store) => store.AboutReducer.isLoading);
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const { colorMode } = useColorMode();
  useEffect(() => {
    dispatch(getAboutData());
  }, [dispatch]);

  return (
    <div className="AllwomensD">
      <Navbar />
      <Flex display={"flex"} justifyContent="center" alignItems={"center"}>
        {loading ? (
          <Loading />
        ) : (
          <Box mt={"70"}>
            <Box width={"100%"}>
              <Image
                width={"100%"}
                height={"100%"}
                src={
                  "https://weddingsathilton.com/wp-content/uploads/2021/04/getintouch.jpg"
                }
              />
            </Box>
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={isLargerThan ? "row" : "column"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                width={isLargerThan ? "30%" : "80%"}
                height={"100%"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                py={"12 "}
                border={"1px solid #b2b4b8"}
                borderRadius={"15px"}
                backgroundColor={"#fff"}
                my={"5"}
              >
                <Box width={"15%"} height={"15%"}>
                  <Image
                    src={call}
                    width={"100%"}
                    height={"100%"}
                    alt={"call"}
                    fallbacksrc="https://via.placeholder.com/150"
                  />
                </Box>
                <Text
                  width={"80%"}
                  my={"5"}
                  color={!colorMode === "dark" ? "white" : "black"}
                >
                  Talk with us
                </Text>
                <Text
                  width={"80%"}
                  my={"5"}
                  color={!colorMode === "dark" ? "white" : "black"}
                >
                  Interested in Food App's marketing software? Just pick up the
                  phone to chat with a member of our team.
                </Text>
                <Text
                  width={"80%"}
                  my={"5"}
                  color={!colorMode === "dark" ? "white" : "black"}
                >
                  <a href="tel:9479394010">+91 9479394010</a>
                </Text>
              </Box>
              <Box
                border={"1px solid #b2b4b8"}
                borderRadius={"15px"}
                display={"flex"}
                width={isLargerThan ? "30%" : "80%"}
                height={"100%"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                py={"14"}
                backgroundColor={"#fff"}
                my={"5"}
              >
                <Box width={"15%"} height={"15%"}>
                  <Image
                    src={email}
                    width={"100%"}
                    height={"100%"}
                    alt={"call"}
                  />
                </Box>
                <Text
                  width={"80%"}
                  my={"5"}
                  color={!colorMode === "dark" ? "white" : "black"}
                >
                  Connect us on mail
                </Text>
                <Text
                  width={"80%"}
                  my={"5"}
                  color={!colorMode === "dark" ? "white" : "black"}
                >
                  Sometimes you need a little help from your friends. Don't
                  worry.. we're here for you Contact Support
                </Text>
                <Text
                  width={"80%"}
                  my={"5"}
                  color={!colorMode === "dark" ? "white" : "black"}
                >
                  <a href="mailto: AVYAYAHEALTH@GMAIL.COM">
                    avyayahealth@gmail.com
                  </a>
                </Text>
              </Box>
              <Box
                border={"1px solid #b2b4b8"}
                borderRadius={"15px"}
                display={"flex"}
                width={isLargerThan ? "30%" : "80%"}
                height={"100%"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                py={"12 "}
                backgroundColor={"#fff"}
                my={"5"}
              >
                <Box width={"15%"} height={"15%"}>
                  <Image
                    src={address}
                    width={"100%"}
                    height={"100%"}
                    alt={"call"}
                  />
                </Box>
                <Text
                  width={"80%"}
                  my={"5"}
                  color={!colorMode === "dark" ? "white" : "black"}
                >
                  Registered Address
                </Text>
                <Text
                  width={"80%"}
                  my={"5"}
                  color={!colorMode === "dark" ? "white" : "black"}
                >
                  Sometimes you need a little help from your friends. Don't
                  worry.. we're here for you Contact Support
                </Text>
                <Text
                  width={"80%"}
                  my={"5"}
                  color={!colorMode === "dark" ? "white" : "black"}
                >
                  <a href="/contact">
                    67 SANWARIYA KUNJ COLONY RAU RANGWASA MHOW INDORE (M.P.)
                    453331
                  </a>
                </Text>
              </Box>
            </Box>
          </Box>
        )}
      </Flex>
    </div>
  );
}

export default ContectUs;
