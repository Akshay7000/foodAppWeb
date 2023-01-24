import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";

function Return() {
  return (
    <div>
      <Navbar />
      {false ? (
        <Loading />
      ) : (
        <>
          <Box pt={"40"} pb={"20"} mx={"14"}>
            <Flex
              flexDir={"column"}
              h={"100%"}
              //   borderRadius={"18px"}

              gap={"5"}
              borderBottom={"8px solid #13acbc"}
            >
              <Flex
                h={"44"}
                px={"8%"}
                alignItems={"center"}
                bg={"#13acbc"}
                color={"#fff"}
                borderTopLeftRadius={"18px"}
                borderTopRightRadius={"18px"}
              >
                <Heading>REFUND POLICY</Heading>
              </Flex>
              <Flex
                px={"8%"}
                alignItems={"center"}
                // py={"42"}
                textAlign={"left"}
                fontSize={"calc(1.275rem + .3vw)"}
              >
                <Text>
                  You can change or cancel an item or the entire order before 10
                  pm the previous day. In order to cancel a part of, or the
                  entire order, please contact us on whatsapp-9479394010 & mail
                  on 'avyayahealth@gmail.com' and quote your name and changes.
                  Alternately, you may make changes in your order through the
                  website. We'll try to accommodate your request as best as we
                  can.
                </Text>
              </Flex>

              <Flex
                px={"8%"}
                // alignItems={"center"}
                py={"42"}
                textAlign={"left"}
                flexDirection={"column"}
                fontSize={"calc(1.275rem + .3vw)"}
                gap={"6"}
              >
                <Heading as="h6" size="3md">
                  Conditions for Refund
                </Heading>
                <UnorderedList display={"flex"} flexDir={"column"} gap={"3"}>
                  <ListItem fontWeight={"600"}>
                    Milk Unfit for Consumption :
                  </ListItem>
                  <Text>
                    Our milk has no preservatives or additives. Maintaining
                    optimum temperature, hence, is key to keeping the milk fresh
                    and fit to be consumed. However if the cold chain
                    inadvertently breaks at our end, causing the milk to turn
                    sour on the day of delivery, you can request a refund for
                    the said lot. Refund is initiated once we collect the soured
                    milk pack from you.
                  </Text>
                  <ListItem fontWeight={"600"}>Incorrect Delivery :</ListItem>
                  <Text>
                    A delivery will only be considered incorrect at our end if
                    you have informed us in advance. If you receive a delivery
                    despite of this, you are not eligible for a refund. Refusing
                    delivery without prior information does not qualify for
                    refund.
                  </Text>
                  <ListItem fontWeight={"600"}>
                    Refusal / Late cancellation :
                  </ListItem>
                  <Text>
                    Charges will still be applicable in case intimation for
                    cancellation is made after 10 pm, and also on refusal to
                    take the delivery in the morning.
                  </Text>
                  <ListItem fontWeight={"600"}>Missed Delivery :</ListItem>
                  <Text>
                    If, on any given day, your milk delivery has been missed,
                    please inform us before 1 pm on the same day so that we can
                    resolve it immediately and ensure smooth delivery of your
                    favourite milk. Please note that we will be unable to take
                    into consideration any complaint after that so we urge you
                    to let us know before 1pm.
                  </Text>
                </UnorderedList>
              </Flex>
              <Flex
                px={"8%"}
                // alignItems={"center"}
                py={"42"}
                textAlign={"left"}
                flexDirection={"column"}
                fontSize={"calc(1.275rem + .3vw)"}
                gap={"4"}
              >
                <Heading as="h6" size="3md">
                  The following are the only admissible ways of prior intimation
                  :
                </Heading>
                <Text>
                  Call, whatsapp or mail our customer care department. Update
                  necessary information in your account on the website.
                </Text>
                <Text>
                  <b> Note :</b> Informing the delivery boy is not admissible as
                  formal intimation of order. The customer care department is
                  the only authorized channel for this.
                </Text>
              </Flex>
              <Flex
                px={"8%"}
                // alignItems={"center"}
                py={"42"}
                textAlign={"left"}
                flexDirection={"column"}
                fontSize={"calc(1.275rem + .3vw)"}
                gap={"6"}
              >
                <Heading as="h6" size="3md">
                  Terms and conditions
                </Heading>
                <UnorderedList display={"flex"} flexDir={"column"} gap={"3"}>
                  <ListItem>
                    Members of the same family can not claim any offer, cash
                    back or bonus twice.
                  </ListItem>

                  <ListItem>
                    Similarly, any offer, cash back or bonus can not be enjoyed
                    on the same delivery address more than once.
                  </ListItem>

                  <ListItem>
                    We do not encourage monetization of cash back. However, it
                    can be certainly benefitted against your subscription value.
                  </ListItem>

                  <ListItem>Missed Delivery :</ListItem>
                  <ListItem>
                    Cashback value cannot be consumed in the first order.
                  </ListItem>
                  <ListItem>
                    In case of any user found exploiting the offers, the
                    cashback amount or offer amount will be forfeited and
                    remaining balance needs to be consumed. No refund will be
                    given.
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Box>
        </>
      )}
    </div>
  );
}

export default Return;
