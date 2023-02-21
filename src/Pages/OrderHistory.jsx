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
import React from "react";
import { useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import ProductDis from "../components/ProductsDisplay/ProductDis";

function OrderHistory() {
  var loading = false;
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");

  const products = useSelector((store) => store?.dataReducer?.products);
  return (
    <div className="AllProducts">
      <Navbar /> <br />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Flex my={"10"}>
            <Box w={isLargerThan ? "15%" : "10%"}></Box>
            <Spacer />
            <Box>
              <Heading align={"left"} my={"20"}>
                YOUR ORDERS
              </Heading>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  margin: "0 20px 0 20px",
                  justifyContent: "space-around",
                }}
              >
                {products?.length > 0 &&
                  products?.map((item) => {
                    const {
                      id,
                      name,

                      description,
                      image,
                      price,
                      productName,

                      weight,
                      unit = "kg",
                    } = item;

                    return (
                      <Box
                        key={item.id + item.description}
                        flex={isLargerThan ? "0 0 600px " : "0 0 100%"}
                      >
                        <Box
                          key={id}
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
                              <Text fontSize={"2xl"}>Order ID: 1234567</Text>
                              <Text fontSize={"md"} color={"gray.500"}>
                                Order Date: 12 june 2023
                              </Text>
                            </Box>
                            <Box textAlign={"right"}>
                              <Text fontSize={"xl"}>Status</Text>
                              <Text
                                fontSize={"xs"}
                                backgroundColor={"red.200"}
                                px={"20px"}
                                py={"4px"}
                                borderRadius={"12px"}
                              >
                                Pending
                              </Text>
                            </Box>
                          </Box>
                          <Divider />

                          <HStack
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
                                  src={image}
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
                                  <Text fontSize={"xl"} fontWeight={"bold"}>
                                    Milk
                                  </Text>
                                  <Text fontSize={"sm"}>500 Gm</Text>
                                </Flex>
                                <Flex
                                  flexDir={"column"}
                                  alignItems={"end"}
                                  h={"60%"}
                                  justifyContent={"space-around"}
                                >
                                  <Text fontSize={"xl"} fontWeight={"bold"}>
                                    ₹ 1234
                                  </Text>
                                  <Text fontSize={"sm"}>QTY: 3</Text>
                                </Flex>
                              </Flex>
                            </Flex>
                          </HStack>
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
                                <Text fontSize={"6xs"}>Visa **88</Text>
                              </Box>

                              <Box>
                                <Text fontSize={"xl"} fontWeight={"black"}>
                                  Delivery
                                </Text>
                                <Text fontSize={"14px"} color={"gray.500"}>
                                  Address
                                </Text>
                                <Text fontSize={"6xs"}>
                                  249, Barfani Dham,MR9 INDORE MP, barfani Dham,
                                  MR9 INDORE MP
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
                                    <Text fontSize={"17px"} color={"gray.500"}>
                                      Subtotal
                                    </Text>
                                    <Text fontSize={"16px"} color={"gray.500"}>
                                      Quantity
                                    </Text>
                                  </Box>
                                  <Box textAlign={"right"}>
                                    <Text fontSize={"6xs"}>₹ 249</Text>
                                    <Text fontSize={"6xs"}>3</Text>
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
        </>
      )}
    </div>
  );
}

export default OrderHistory;
