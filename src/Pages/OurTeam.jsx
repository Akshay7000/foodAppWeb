import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import { getTeamData } from "../redux/WebInfoReducer/action";
function OurTeam() {
  const dispatch = useDispatch();
  const team = useSelector((store) => store.AboutReducer.team);

  const loading = useSelector((store) => store.AboutReducer.isLoading);
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    dispatch(getTeamData());
  }, [dispatch]);

  return (
    <div className="AllwomensD">
      <Navbar /> <br />
      <Flex
        flexDirection={isLargerThan ? "row" : "column"}
        display={"flex"}
        justifyContent="center"
        width={"100%"}
        alignItems={"center"}
        mt={"90"}
      >
        {loading ? (
          <Loading />
        ) : (
          <Box width={"70%"}>
            <Text
              textAlign={"start"}
              fontSize={isLargerThan ? "6xl" : "4xl"}
              fontWeight={"bold"}
            >
              Who we are?
            </Text>
            <Text
              textAlign={"start"}
              fontSize="sl"
              fontWeight={"hairline"}
              width={isLargerThan ? "40%" : "100%"}
            >
              {team.title}
            </Text>

            <Box
              my={"9"}
              display={"flex"}
              flexDirection={isLargerThan ? "row" : "column"}
              flexWrap="wrap"
              justifyContent={"center"}
            >
              {team?.members?.map((item) => (
                <Box width={isLargerThan && "20%"} mx={"5"} my={"4"}>
                  <Box height={"280px"}>
                    <Image
                      borderRadius={"15px"}
                      src={item?.image}
                      width={"100%"}
                      height={"100%"}
                      objectFit="cover"
                      fallbackSrc="https://via.placeholder.com/150"
                    />
                  </Box>

                  <Text textTransform={"capitalize"} fontWeight={"bold"}>
                    {item?.name}
                  </Text>
                  <Text textTransform={"capitalize"}>{item?.position}</Text>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Flex>
    </div>
  );
}

export default OurTeam;
