import { Badge, Box, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AiOutlineStar } from "react-icons/ai";
import { StarIcon } from "@chakra-ui/icons";

const ProductDis = ({ item }) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    color,
    gender,
    images,
    final_price,
    reviews,
    rating,
    description,
    image,
    price,
    productName,
    rank,
    weight,
    unit = "kg",
  } = item;
  const [img, setImg] = useState(image);
  const handleDes = () => {
    navigate(`/description/${id}`);
  };
  const ChangeHoverImage = () => {
    setImg(images[1]);
  };
  const OriginalImage = () => {
    setImg(images[0]);
  };

  return (
    <div>
      <Box
        key={id}
        m="auto"
        onClick={handleDes}
        my={"3"}
        border={"1px solid #d2d2d2b0"}
        p={"2"}
        borderRadius={"15px"}
        boxShadow={"xl"}
        h={"100%"}
      >
        <Box
          overflow={"hidden"}
          position={"relative"}
          height={"300px"}
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
            src={img}
            alt={name}
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Box>
        <Box
          color={"darkgray"}
          fontSize={["xs", "sm", "md", "md"]}
          textTransform={"capitalize"}
          justifyContent={"space-between"}
          display={"flex"}
          alignItems={"baseline"}
          mx={"4"}
          my={"2"}
        >
          <Text fontSize={"2xl"}>{productName ? productName : "-"}</Text>

          <Text color={"#13acbc"} fontWeight={"bold "}>
            {weight ? weight : "-"} {unit}
          </Text>
        </Box>
        <HStack textAlign={"left"} my={"2"} mx={"4"}>
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
