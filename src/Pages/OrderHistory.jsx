import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../components/Empty/EmptyFunction";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import ProductDis from "../components/ProductsDisplay/ProductDis";
import { getOrders } from "../redux/OrderReducer/acton";
import { getLocalData } from "../utils/localStorage";

function OrderHistory() {
  const orders = useSelector((state) => state.orderReducer);
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const dispatch = useDispatch();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const token = getLocalData("token");
    dispatch(getOrders(token.uid));
  };

  return (
    <div className="AllProducts">
      <Navbar /> <br />
      {orders.isLoading ? (
        <Loading />
      ) : (
        <>
          {orders?.orders?.length == 0 ? (
            <Empty
              heading="No orders placed yet!"
              body="Once you order something - it will appear here. Ready to get started?"
            />
          ) : (
            <Flex my={"10"}>
              <Box w={isLargerThan ? "15%" : "10%"}></Box>
              <Spacer />
              <Box>
                <Heading my={"20"}>YOUR ORDERS</Heading>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    margin: "0 20px 0 20px",
                    justifyContent: "space-around",
                  }}
                >
                  {orders?.orders?.length > 0 &&
                    orders?.orders?.map((OrderItem) => {
                      const {
                        order_id,
                        trans_date,
                        order_status = order_status?.replaceAll("%20", " "),
                        payment_mode = payment_mode?.replaceAll("%20", " "),
                        card_name = card_name?.replaceAll("%20", " "),
                        image,
                        delivery_address,
                        amount,
                        item,
                        merchant_param1,
                        unit = "kg",
                      } = OrderItem;

                      return (
                        <Box
                          key={item.trans_date + item.bank_ref_no}
                          flex={isLargerThan ? "0 0 600px " : "0 0 100%"}
                        >
                          <Box
                            m="auto"
                            my={"3"}
                            border={"1px solid #d2d2d2b0"}
                            p={"4"}
                            borderRadius={"15px"}
                            boxShadow={"xl"}
                            h={"100%"}
                            minW={"250px"}
                          >
                            <Box
                              color={"HighlightText"}
                              fontSize={["xs", "sm", "md", "md"]}
                              textTransform={"capitalize"}
                              display={"flex"}
                              flexDir={"row"}
                              alignItems={"flex-start"}
                              mx={"4"}
                              my={"2"}
                              justifyContent={"space-between"}
                            >
                              <Box textAlign={"left"}>
                                <Text fontSize={"2xl"}>
                                  Order ID: {order_id}
                                </Text>
                                <Text fontSize={"md"} color={"gray.500"}>
                                  Order Date:{" "}
                                  {moment(
                                    trans_date?.split("%20")[0],
                                    "DD/MM/YYYY"
                                  ).format("DD MMM YYYY")}
                                </Text>
                              </Box>
                              <Box textAlign={"right"}>
                                <Text fontSize={"xl"}>Status</Text>
                                <Text
                                  fontSize={"xs"}
                                  backgroundColor={
                                    order_status === "Failure"
                                      ? "red.200"
                                      : "green.200"
                                  }
                                  px={"20px"}
                                  py={"4px"}
                                  borderRadius={"12px"}
                                >
                                  {order_status}
                                </Text>
                              </Box>
                            </Box>
                            <Divider />

                            {item.map((prod) => {
                              return (
                                <HStack
                                  key={prod?.image + order_id}
                                  textAlign={"left"}
                                  my={"5"}
                                  mx={"3"}
                                  color={"gray.800"}
                                >
                                  <Flex flexDir={"row"} w={"100%"}>
                                    <Box width={"100px"} h={"100px"}>
                                      <Image
                                        w={"100%"}
                                        h={"100%"}
                                        src={prod?.image}
                                        objectFit={"cover"}
                                        borderRadius={"15px"}
                                      />
                                    </Box>
                                    <Flex
                                      w={"80%"}
                                      justifyContent={"space-between"}
                                      alignItems={"center"}
                                      px={"5"}
                                    >
                                      <Flex
                                        flexDir={"column"}
                                        // alignItems={"center"}
                                        h={"60%"}
                                        justifyContent={"space-around"}
                                      >
                                        <Text
                                          fontSize={"xl"}
                                          fontWeight={"bold"}
                                        >
                                          {prod?.productName}
                                        </Text>
                                        <Text fontSize={"sm"}>
                                          {prod?.weight}{" "}
                                          {prod?.unit ? prod?.unit : "gm"}
                                        </Text>
                                      </Flex>
                                      <Flex
                                        flexDir={"column"}
                                        alignItems={"end"}
                                        h={"60%"}
                                        justifyContent={"space-around"}
                                      >
                                        <Text
                                          fontSize={"xl"}
                                          fontWeight={"bold"}
                                        >
                                          ₹ {prod.price}
                                        </Text>
                                        <Text fontSize={"sm"}>
                                          QTY: {prod.qty}
                                        </Text>
                                      </Flex>
                                    </Flex>
                                  </Flex>
                                </HStack>
                              );
                            })}
                            <Divider />

                            <HStack>
                              <Box
                                w={"45%"}
                                h={"200px"}
                                alignItems={"flex-start"}
                                textAlign={"left"}
                              >
                                <Box marginBottom={"2"}>
                                  <Text fontSize={"xl"} fontWeight={"black"}>
                                    Paymnet
                                  </Text>
                                  <Text fontSize={"6xs"}>
                                    {payment_mode?.replaceAll("%20", " ") +
                                      " - " +
                                      card_name?.replaceAll("%20", " ")}
                                  </Text>
                                </Box>

                                <Box>
                                  <Text fontSize={"xl"} fontWeight={"black"}>
                                    Delivery
                                  </Text>
                                  <Text fontSize={"14px"} color={"gray.500"}>
                                    Address
                                  </Text>
                                  <Text fontSize={"6xs"}>
                                    {delivery_address
                                      ?.replaceAll("%20", " ")
                                      ?.toUpperCase()}
                                  </Text>
                                </Box>
                              </Box>
                              <Divider orientation="vertical" />
                              <Box
                                w={"45%"}
                                h={"200px"}
                                alignItems={"flex-start"}
                                textAlign={"left"}
                              >
                                <Box>
                                  <Text fontSize={"xl"} fontWeight={"black"}>
                                    Order Summery
                                  </Text>
                                  <HStack justifyContent={"space-between"}>
                                    <Box>
                                      <Text
                                        fontSize={"17px"}
                                        color={"gray.500"}
                                      >
                                        Subtotal
                                      </Text>
                                      <Text
                                        fontSize={"16px"}
                                        color={"gray.500"}
                                      >
                                        Quantity
                                      </Text>
                                    </Box>
                                    <Box textAlign={"right"}>
                                      <Text fontSize={"6xs"}>₹ {amount}</Text>
                                      <Text fontSize={"6xs"}>
                                        {merchant_param1}
                                      </Text>
                                    </Box>
                                  </HStack>
                                </Box>
                              </Box>
                            </HStack>
                          </Box>
                        </Box>
                      );
                    })}
                </div>
              </Box>
              <Spacer />
              <Box w={isLargerThan ? "15%" : "10%"}></Box>
            </Flex>
          )}
        </>
      )}
    </div>
  );
}

export default OrderHistory;
