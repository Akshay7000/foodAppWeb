import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomeDis = ({ item }) => {
  const navigate = useNavigate();
  const { id, name, color, gender, images,image,price,productName,rank,weight ,unit="kg" } = item;

  const [img, setImg] = useState(image);
  const [fname, setFname] = useState("normal");

  const ChangeHoverImage = () => {
    setImg(images[1]);
    setFname("bold");
  };
  const OriginalImage = () => {
    setImg(images[0]);
    setFname("normal");
  };

  return (
    <div key={id}
    //  onMouseEnter={ChangeHoverImage} onMouseLeave={OriginalImage}
     >
      <Box
        width={["95%", "80%", "80%", "80%"]}
        onClick={() => navigate("/allproducts")}
      >
        <Box overflow={"hidden"} position={"relative"}>
          <Image className="imageAnimation" src={img} alt={name} />
        </Box>
        <Text fontWeight={fname}>{productName}</Text>
        <Text>
          {weight+" "+unit}
        </Text>
      </Box>
    </div>
  );
};

// const handleDes = () => {
//   navigate(`/description/${id}`);
// };
