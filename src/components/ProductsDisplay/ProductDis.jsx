import { Badge, Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { AiOutlineStar } from "react-icons/ai";

const ProductDis = ({ item, type }) => {
  const navigate = useNavigate();
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

  const handleDes = () => {
    navigate(`/description/${type}/${id}`);
  };

  return (
    <div>
      <Box
        key={id}
        m="auto"
        onClick={handleDes}
        my={"3"}
        border={"1px solid #d2d2d2b0"}
        p={"4"}
        borderRadius={"15px"}
        boxShadow={"xl"}
        h={"100%"}
        minW={"250px"}
      >
        <Box
          overflow={"hidden"}
          position={"relative"}
          height={"250px"}
          width={"95%"}
          borderRadius={"15px"}
          m="auto"
        >
          <Badge
            // colorScheme="green"
            position={"absolute"}
            zIndex={"banner"}
            left={0}
            top={5}
            px={"2"}
            bg={"#13acbc"}
          >
            <Text fontWeight={"semibold"} fontSize={["sm", "md", "lg", "xl"]}>
              ₹{price}.00
            </Text>
          </Badge>
          <Image
            className="imageAnimation"
            src={image}
            alt={name}
            fallbacksrc="https://via.placeholder.com/150"
          />
        </Box>
        <Box
          color={"HighlightText"}
          fontSize={["xs", "sm", "md", "md"]}
          textTransform={"capitalize"}
          justifyContent={"space-between"}
          display={"flex"}
          alignItems={"flex-start"}
          mx={"4"}
          my={"2"}
        >
          <Text
            fontSize={"md"}
            maxW={"70%"}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow={"ellipsis"}
          >
            {productName ? productName : "-"}
          </Text>

          <Text
            maxW={"30%"}
            color={"#13acbc"}
            fontWeight={"bold "}
            flexWrap={"wrap"}
            display={"flex"}
          >
            {weight ? weight : "-"} {unit}
          </Text>
        </Box>
        <HStack textAlign={"left"} my={"1"} mx={"3"} color={"darkgray"}>
          <Text
            fontSize={["sm", "md"]}
            textTransform={"capitalize"}
            noOfLines={2}
          >
            {description}
          </Text>
        </HStack>
      </Box>
    </div>
  );
};

export default ProductDis;
