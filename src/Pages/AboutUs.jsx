import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import { getAboutData } from "../redux/WebInfoReducer/action";
import cowgrass from "../img/cowGrass.jpg";
import Vision from "../img/vision.jpg";
import Mission from "../img/mission2.jpg";
import Goals from "../img/goals.jpg";
function AboutUs() {
  const dispatch = useDispatch();
  const about = useSelector((store) => store.AboutReducer.about);
  const loading = useSelector((store) => store.AboutReducer.isLoading);
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAboutData());
  }, []);

  return (
    <div className="AllwomensD">
      <Navbar /> <br />
      <>
        {loading ? (
          <Loading />
        ) : (
          <Box mx={5} mt={"90"}>
            <Flex flexDirection={isLargerThan ? "row" : "column"}>
              <Box width={"100%"} height={"70%"}>
                <Image width={"100%"} src={cowgrass} borderRadius={"2xl"} />
              </Box>
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box width={"80%"}>
                  <Text fontSize="6xl" textAlign={"left"} fontWeight={"bold"}>
                    About Us
                  </Text>
                  <Text
                    fontSize="xl"
                    fontWeight={"medium"}
                    my={"5"}
                    textAlign={"left"}
                    textTransform={"capitalize"}
                  >
                    {about?.about}
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Flex flexDirection={isLargerThan ? "row" : "column"}>
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box width={"80%"}>
                  <Text fontSize="6xl" textAlign={"left"} fontWeight={"bold"}>
                    Our Vision
                  </Text>
                  <Text
                    fontSize="xl"
                    fontWeight={"medium"}
                    my={"5"}
                    textAlign={"left"}
                    textTransform={"capitalize"}
                  >
                    {about?.vision}
                  </Text>
                </Box>
              </Box>
              <Box width={"100%"} height={"70%"}>
                <Image width={"100%"} src={Vision} borderRadius={"2xl"} />
              </Box>
            </Flex>
            <br />
            <Flex flexDirection={isLargerThan ? "row" : "column"}>
              <Box width={"100%"} height={"50%"}>
                <Image width={"100%"} src={Mission} borderRadius={"2xl"} />
              </Box>
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box width={"80%"}>
                  <Text fontSize="6xl" textAlign={"left"} fontWeight={"bold"}>
                    Our Mission
                  </Text>
                  <Text
                    fontSize="xl"
                    fontWeight={"medium"}
                    my={"5"}
                    textAlign={"left"}
                    textTransform={"capitalize"}
                  >
                    {about?.mission}
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Flex flexDirection={isLargerThan ? "row" : "column"}>
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box width={"80%"}>
                  <Text fontSize="6xl" textAlign={"left"} fontWeight={"bold"}>
                    Our Goals
                  </Text>
                  <Text
                    fontSize="xl"
                    fontWeight={"medium"}
                    my={"5"}
                    textAlign={"left"}
                    textTransform={"capitalize"}
                  >
                    {about?.goals}
                  </Text>
                </Box>
              </Box>
              <Box width={"100%"} height={"70%"}>
                <Image width={"100%"} src={Goals} borderRadius={"2xl"} />
              </Box>
            </Flex>
          </Box>
        )}
      </>
      <br />
    </div>
  );
}

export default AboutUs;
