import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const HomeDis = ({ item }) => {
  const navigate = useNavigate();
  const {
    id,
    name,

    image,

    productName,

    weight,
    unit = "kg",
  } = item;

  return (
    <div
      key={id}
      //  onMouseEnter={ChangeHoverImage} onMouseLeave={OriginalImage}
    >
      <Box
        width={["95%", "80%", "80%", "80%"]}
        onClick={() => navigate("/allproducts")}
      >
        <Box overflow={"hidden"} position={"relative"}>
          <Image
            className="imageAnimation"
            src={image}
            alt={name}
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Box>
        <Box textTransform={"capitalize"} color={"GrayText"}>
          <Text fontWeight={"normal"}>{productName}</Text>
          <Text>{weight + " " + unit}</Text>
        </Box>
      </Box>
    </div>
  );
};

// const handleDes = () => {
//   navigate(`/description/${id}`);
// };
