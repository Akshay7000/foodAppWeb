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
import { getAboutData } from "../redux/WebInfoReducer/action";
function Support(props) {
  const dispatch = useDispatch();
  // // const about = useSelector((store) => store.AboutReducer.about);
  // const loading = useSelector((store) => store.AboutReducer.isLoading);
  // const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  // const { colorMode } = useColorMode();
  // useEffect(() => {
  //   dispatch(getAboutData());
  // }, [dispatch]);

  return (
    <div className="AllwomensD">
      <Navbar /> <br />
      <Flex display={"flex"} justifyContent="center" alignItems={"center"}>
        {/* {loading ? <Loading /> : <></>} */}
      </Flex>
    </div>
  );
}

export default Support;
