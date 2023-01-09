import { Box, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AiOutlineStar } from "react-icons/ai";
import { StarIcon } from "@chakra-ui/icons";

const ProductDis = ({ item }) => {
  const navigate = useNavigate();
  const { id, name, color, gender, images, final_price, reviews, rating,description,image,price,productName,rank,weight ,unit="kg"} =
    item;
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
        // onMouseEnter={ChangeHoverImage}
        // onMouseLeave={OriginalImage}
        onClick={handleDes}
        my={"3"}

      >
        <Box overflow={"hidden"} position={"relative"}
        height={"300px"} width={"95%"}>
          <Image className="imageAnimation" src={img} alt={name} fallbackSrc='https://via.placeholder.com/150' />
        </Box>
        <Box
          textAlign={"left"}
          color={"darkgrey"}
          fontSize={["xs", "sm", "md", "md"]}
        >
          <Text>{productName}</Text>

          <Text>{weight}{unit}</Text>
        </Box>
        <Flex
          justify={"left"}
          gap={"2rem"}
          fontWeight={"medium"}
          align={"center"}
        >
          <Text as={Flex} alignItems={"center"}  fontSize={["xs", "sm", "md", "md"]}>
            <Icon as={StarIcon} color="yellow.500" /> : {rank}
          </Text>
          <Text fontSize={["xs", "sm", "md", "md"]}>Review : ({rank}) </Text>
        </Flex>
        <HStack justify={"left"}>
          <Text fontWeight={"semibold"} fontSize={["sm", "md", "lg", "xl"]}>
            ₹{price}.00
          </Text>
        </HStack>
      </Box>
    </div>
  );
};

export default ProductDis;
