import {
  Box,
  Flex,
  Grid,
  Image,
  Spacer,
  useMediaQuery,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import ProductDis from "../components/ProductsDisplay/ProductDis";
import FilterData from "../Filter/Filters/FilterData";
import userImage from "../img/2650147.png";
import { getAboutData } from "../redux/WebInfoReducer/action";
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
      <Flex
        flexDirection={isLargerThan ? "row" : "column"}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
      >
        {loading ? (
          <Loading />
        ) : (
          <Box height={"70%"}>
            <Box width={"100%"} position={"relative"}>
              <Text
                fontSize="6xl"
                position={"absolute"}
                alignSelf={"center"}
                left={0}
                right={0}
                top={"50%"}
                bottom={"50%"}
                fontWeight={"bold"}
                color={"#fff"}
                //   transform={"translate(-50%, -50%)"}
              >
                About Us
              </Text>
              <Image
                width={"100%"}
                height={"100%"}
                src={
                  "https://static-cse.canva.com/blob/570710/uniqueinspiringaboutpage.c618c80b.jpg"
                }
              />
            </Box>
            <Box
              width={"100%"}
              position={"relative"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box width={"80%"}>
                <Text fontSize="6xl" fontWeight={"bold"}>
                  About Us
                </Text>
                <Text
                  fontSize="xl"
                  fontWeight={"medium"}
                  my={"5"}
                  // textAlign={"center"}
                >
                  {about?.about}
                </Text>
              </Box>
            </Box>
          </Box>
        )}
      </Flex>
    </div>
  );
}

export default AboutUs;
