import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import CheckOutPage from "../components/checkout/CheckOutPage";
import Empty from "../components/Empty/EmptyFunction";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import { getJsonData } from "../components/rozarpay/RozarPay";
import {
  decQty,
  getCart,
  incQty,
  removeItem,
} from "../redux/CartReducer/action";
import { getLocalData } from "../utils/localStorage";

const Cart = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const location = useLocation().search.substring(1);

  const cart = useSelector((store) => store?.cart?.cart);
  const loading = useSelector((store) => store?.cart?.isLoading);
  const uid = useSelector((store) => store?.AuthReducer?.profileData?.uid);

  const dispatch = useDispatch();
  useEffect(() => {
    const init = async () => {
      var userData = await getLocalData("token");
      if (userData?.uid) {
        dispatch(getCart(userData.uid));
      }
    };
    init();
  }, [dispatch]);

  const handleIncrement = (id, qty) => {
    dispatch(incQty({ id, qty, uid }));
  };
  const handleDecrement = (id, qty) => {
    if (qty > 1) {
      dispatch(decQty({ id, qty, uid }));
    } else {
      dispatch(removeItem({ id, qty, uid }));
    }
  };

  //   ---------------Up have a decreament and increament quantity logic----------------Total Price Logic--------------------------------------------
  const convertStringIntoNumber = (str) => {
    if (Number(str)) {
      return Number(str);
    }
    let arr = str?.includes(",") ? str?.split(",") : [];
    let converting_string = arr?.reduce((a, c) => a + c, "");
    let result = Number(converting_string);
    return result;
  };
  let price = 0;
  let discount_price = 0;
  let quantity = 0;
  cart?.forEach((item) => {
    price += convertStringIntoNumber(item.price) * item.qty;
    discount_price = 0;
    quantity += item.qty;
  });

  // =================================Upper have logic of discount=======================================================================

  return (
    <>
      <Navbar /> <br />
      {loading ? (
        <Loading />
      ) : (
        <>
          {cart?.length === 0 || cart === undefined ? (
            <Empty />
          ) : (
            <div style={{ margin: "10% 0px " }}>
              <Box align="left" width={["90%", "87%", "85%", "87%"]} m="auto">
                <Heading my={"2"}>YOUR BAG</Heading>
                {/*   <Text my={"2"}>TOTAL [{cart?.length} items]</Text> */}
                <Text my={"2"}>
                  Items in your bag are not reserved — check out now to make
                  them yours.
                </Text>
              </Box>
              {/* -------------------------------UP HeadLines-------------------------------------------------------- */}
              <Flex
                width={["100%", "100%", "90%", "90%"]}
                m="auto"
                justifyContent={"space-between"}
                flexDirection={isLargerThan ? "row" : "column"}
              >
                <Box width={["95%", "90%", "50%", "60%"]} m="auto">
                  {cart?.length > 0 &&
                    cart?.map((item) => (
                      <Flex
                        border="3px solid beige"
                        m="auto"
                        my={!isLargerThan && "4"}
                        flexDirection={isLargerThan ? "row" : "column"}
                      >
                        <Box
                          height={"50%"}
                          width={["100%", "100%", "40%", "30%"]}
                        >
                          <Image
                            w="100%"
                            h="280"
                            objectFit={"cover"}
                            src={item.image}
                            alt="try"
                            fallbacksrc="https://via.placeholder.com/150"
                          />
                        </Box>
                        {/* -----------------------------------UP Image---------- Down description--------------------------------------------------------------------- */}
                        <Box
                          width={["95%", "90%", "60%", "60%"]}
                          align={"left"}
                          mx={"4"}
                          my={"6"}
                        >
                          <Flex justifyContent={"space-between"}>
                            <Text>{item.productName} </Text>
                            <Box>
                              {/* <Text as="s" color="red" fontWeight={"bold"}>
                                ₹{item.price}
                              </Text> */}
                              <Text>₹{item.price}</Text>
                            </Box>
                          </Flex>
                          <Text my={"2"}>{item.color} </Text>
                          <Text> WEIGHT : {item.weight} </Text>
                          <Flex my={"4"} alignItems={"center"} gap="1rem">
                            <Button
                              bg="black"
                              colorScheme={"teal"}
                              p="0"
                              borderRadius={"50%"}
                              border={"1px solid black"}
                              disabled={item.qty === 0}
                              onClick={() => handleDecrement(item.id, item.qty)}
                            >
                              <MinusIcon fontSize={"10"} />
                            </Button>
                            <Text>{item.qty}</Text>
                            <Button
                              colorScheme={"teal"}
                              p="0"
                              bg="black"
                              borderRadius={"50%"}
                              border={"1px solid black"}
                              onClick={() =>
                                handleIncrement(item.id, item?.qty)
                              }
                            >
                              <AddIcon fontSize={"10"} />
                            </Button>
                          </Flex>
                        </Box>
                      </Flex>
                    ))}
                </Box>
                {/* ------------------------------up fetching cart and down checkout---------------------------------------- */}
                <Box width={["95%", "90%", "40%", "35%"]} mx="auto">
                  <CheckOutPage
                    title={"CHECKOUT"}
                    cart={cart}
                    show_price={price}
                    discount_price={price}
                    link={"/checkout"}
                    quantity={quantity}
                    discount={discount_price}
                    coupon={"coupon"}
                  />
                </Box>
              </Flex>
            </div>
          )}
        </>
      )}
      {/* <Box my={"5rem"}>
        <Box display={"none"}>
          <Carousel />
        </Box>
        <Box>
          <Trending />
        </Box>
      </Box> */}
    </>
  );
};

export default Cart;
