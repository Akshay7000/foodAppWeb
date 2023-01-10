import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import call from "../img/call.png";
import email from "../img/email.png";
import { getAboutData } from "../redux/WebInfoReducer/action";
function ContectUs(props) {
  const dispatch = useDispatch();
  // const about = useSelector((store) => store.AboutReducer.about);
  const loading = useSelector((store) => store.AboutReducer.isLoading);
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    dispatch(getAboutData());
  }, [dispatch]);

  return (
    <div className="AllwomensD">
      <Navbar /> <br />
      <Flex display={"flex"} justifyContent="center" alignItems={"center"}>
        {loading ? (
          <Loading />
        ) : (
          <Box>
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
                width={isLargerThan ? "40%" : "80%"}
                // height={"200px"}
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
                  />
                </Box>
                <Text width={"80%"} my={"5"}>
                  Talk with us
                </Text>
                <Text width={"80%"} my={"5"}>
                  Interested in Food App's marketing software? Just pick up the
                  phone to chat with a member of our team.
                </Text>
                <Text width={"80%"} my={"5"}>
                  <a href="tel:8665562570">+91 8665562570</a>
                </Text>
              </Box>
              <Box
                border={"1px solid #b2b4b8"}
                borderRadius={"15px"}
                display={"flex"}
                width={isLargerThan ? "40%" : "80%"}
                // height={"150px"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                py={"12 "}
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
                <Text width={"80%"} my={"5"}>
                  Connect us on mail
                </Text>
                <Text width={"80%"} my={"5"}>
                  Sometimes you need a little help from your friends. Don't
                  worry.. we're here for you Contact Support
                </Text>
                <Text width={"80%"} my={"5"}>
                  <a href="mailto: testuser@email.com">testuser@email.com</a>
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
