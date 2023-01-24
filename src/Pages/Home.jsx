import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import SubscribeModal from "../components/SubscribeModal/SubscribeModal";
import cow from "../img/cow.png";
import FD from "../img/fd1.png";
import Hyg from "../img/hyg.png";
import milkBottels from "../img/milkBottels.jpg";
import milkSplash from "../img/milksplash.png";
import milkSplash1 from "../img/milksplash1.png";
import bg from "../img/bg.png";

import NA from "../img/nA.png";
import { getSubscribepProducts } from "../redux/PagesReducer/action";
const Home = () => {
  const loading = useSelector((store) => store.pagesReducer.isLoading);
  const dispatch = useDispatch();
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    dispatch(getSubscribepProducts());
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Box
            bg={"#13acbc"}
            pos={"relative"}
            backgroundImage={milkSplash}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            h={"90Vh"}
          >
            <Box
              w={isLargerThan ? "20%" : "50%"}
              pos={"absolute"}
              top={"30%"}
              left={0}
              right={0}
              marginLeft={"auto"}
              marginRight={"auto"}
            >
              <Image src={cow} w={"100%"} />
            </Box>
          </Box>
          <Box
            // h={"100vh"}
            backgroundImage={milkSplash1}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            p={"5"}
          >
            <Flex
              flexDirection={isLargerThan ? "row" : "column"}
              // h={"100vh"}
              py={"14"}
              alignItems={"center"}
              mx={"5"}
            >
              <Box width={"30%"} m="auto">
                <Image src={milkBottels} borderRadius={"2xl"} />
              </Box>
              <Box
                width={isLargerThan ? "70%" : "100%"}
                // height={"70%"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Box width={isLargerThan ? "70%" : "100%"}>
                  <Heading
                    fontSize="3xl"
                    textAlign={"left"}
                    fontWeight={"bold"}
                  >
                    PURE MILK FROM AVYAYA PURE MILK FROM AVYAYA
                  </Heading>
                  <Text
                    fontSize="xl"
                    fontWeight={"medium"}
                    my={"5"}
                    textAlign={"left"}
                    textTransform={"capitalize"}
                    color={"#13acbc"}
                  >
                    #TasteThePurityOfNature
                  </Text>
                  <Text
                    fontSize="xl"
                    fontWeight={"medium"}
                    my={"5"}
                    textAlign={"left"}
                    textTransform={"capitalize"}
                  >
                    Complete your morning with the freshness of nature. we will
                    deliver the goodness of "AVYAYA" at your home,It’s
                    fresh,rich in nutritiants, and as pure as nature intended.
                  </Text>
                  <Flex
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    m={"auto"}
                  >
                    <Box w={"30%"}>
                      <Box width={"80%"} m="auto">
                        <Image src={NA} borderRadius={"2xl"} />
                      </Box>
                      <Text>NO ADDED PRESERVATIVE</Text>
                    </Box>
                    <Box w={"30%"}>
                      <Box width={"80%"} m="auto">
                        <Image src={FD} borderRadius={"2xl"} />
                      </Box>
                      <Text>DELIVERY WITHIN 24 HOURS OF MILKING</Text>
                    </Box>
                    <Box w={"30%"}>
                      <Box width={"80%"} m="auto">
                        <Image src={Hyg} borderRadius={"2xl"} />
                      </Box>
                      <Text>HYGIENIC PROCESS</Text>
                    </Box>
                  </Flex>
                  <SubscribeModal />
                </Box>
              </Box>
            </Flex>
          </Box>
        </>
      )}
    </div>
  );
};

export default Home;
