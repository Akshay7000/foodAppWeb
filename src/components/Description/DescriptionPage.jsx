import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../../redux/CartReducer/action";
import { getData } from "../../redux/DataReducer/action";
import { getFeaturedProducts } from "../../redux/PagesReducer/action";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";
import { setToast } from "../Other/CheckProperty";
// import { BsBagFill } from "react-icons/bs";
const DescriptionPage = () => {
  const { id, type } = useParams();
  const toast = useToast();
  const products = useSelector((store) => store.dataReducer.products);
  const isloading = useSelector((store) => store.dataReducer.isLoading);
  const featured = useSelector((store) => store.pagesReducer.featured);
  const cart = useSelector((store) => store.cart.cart);
  const profile = useSelector((state) => state.AuthReducer?.profileData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentProducts, setCurrentProducts] = useState({});
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const auth = useSelector((state) => state.AuthReducer.isAuth);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getData());
    }
    if (featured.length === 0) {
      dispatch(getFeaturedProducts());
    }
  }, [dispatch, products.length, featured.length]);
  useEffect(() => {
    if (type === "products") {
      if (id) {
        const cur = products.find((item) => item.id === id);

        cur && setCurrentProducts(cur);
      }
    }
    if (type === "featured") {
      if (id) {
        const cur = featured.find((item) => item.id === id);

        cur && setCurrentProducts(cur);
      }
    }
  }, [id, products, featured, type]);

  const handleCart = () => {
    if (auth) {
      console.log("currentProducts", { currentProducts, uid: profile.uid });
      dispatch(addToCart({ currentProducts, uid: profile.uid }));
      setToast(toast, `${currentProducts.productName} Added To Bag`, "success");
    } else {
      navigate("/login");
    }
  };
  // const handleWishList = () => {
  //   let payload = {
  //     ...currentProducts,
  //   };
  //   dispatch(addToWishList(payload, toast));
  // };
  const isInCart = () => {
    var isinCart = cart.find((ele) => ele.id === id);

    if (isinCart) return true;
    else return false;
  };

  return (
    <div key={currentProducts.id}>
      <Navbar /> <br />
      {isloading ? (
        <Loading />
      ) : (
        <Flex
          justify={"space-between"}
          flexDirection={isLargerThan ? "row" : "column"}
          my={"90"}
        >
          <Box
            width={["100%", "100%", "60%", "60%"]}
            min-height={"100vh"}
            fallbacksrc="https://via.placeholder.com/150"
          >
            {/* ------------------------------ 1 image------------------------------------ */}
            <Box>
              <Image
                w={"100%"}
                h={"580"}
                objectFit={"contain"}
                src={currentProducts?.image}
                fallbacksrc="https://via.placeholder.com/150"
              />
            </Box>

            {/* ------------------------------ 4 images------------------------------------ */}

            {/* <Box>
            <Flex>
              <Box>
                <Image src={currentProducts.images?.[1]} />
              </Box>
              <Box>
                <Image src={currentProducts.images?.[2]} />
              </Box>
            </Flex>
            <Flex>
              <Box>
                <Image src={currentProducts.images?.[3]} />
              </Box>
              <Box>
                <Image src={currentProducts.images?.[4]} />
              </Box>
            </Flex>
          </Box> */}

            {/* --------------------------------------------------------------------- */}
          </Box>

          {/* ------------------------------details Box------------------------------------ */}
          <Box
            width={["100%", "100%", "35%", "35%"]}
            min-height={"100vh"}
            textAlign={"left"}
            my={"6"}
            px={"6"}
            border={"none"}
          >
            <Box border={"none"}>
              <Heading>{currentProducts.productName}</Heading>
              <Box my={"6"} fontSize={["sm", "md", "lg", "xl"]} border={"none"}>
                <Text fontSize={"lg"}>
                  MRP :
                  {/* <span style={{ textDecoration: "line-through" }}>
                  ₹{currentProducts.price}.00
                </span> */}
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      marginLeft: "5px",
                    }}
                  >
                    ₹{currentProducts.price}.00
                  </span>
                </Text>
                <Text fontSize={"lg"}>
                  weight :
                  <span>
                    {" " + currentProducts.weight + " " + currentProducts.unit}
                  </span>
                </Text>
                <Badge color={"grey"} fontWeight={"bold"}>
                  incl. of taxes and duties
                </Badge>
              </Box>
              {/* <Box>
              <Text
                fontSize={["sm", "md", "lg", "xl"]}
                textAlign="left"
                mx={"4"}
                fontWeight={"bold"}
              >
                Select Size
              </Text>
              <Flex gap={"2rem"} my={"5"} mx={"4"}>
                {currentProducts.sizes?.map((size) => (
                  <Button
                    key={size}
                    _hover={{
                      border: "1px solid black",
                      bg: "none",
                      color: "blue",
                    }}
                    onClick={() => setSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </Flex>
            </Box> */}
              <Box mt="3rem" align={"left"}>
                <Button
                  width={["100%", "100%", "70%", "70%"]}
                  bg="black"
                  color={"whitesmoke"}
                  colorScheme={"blackAlpha"}
                  disabled={isInCart()}
                  onClick={handleCart}
                >
                  {isInCart() ? "ADDED TO BEG" : "ADD TO BAG"}
                </Button>
              </Box>
              {/* <Box mt="1rem" align={"left"}>
              <Button
                width={["100%", "100%", "70%", "70%"]}
                bg="white"
                border={"1px solid black"}
                color="black"
                onClick={handleWishList}
              >
                ADD TO FAVOURITE <AiFillHeart color="red" size={"20px"} />
              </Button>
            </Box> */}
            </Box>
            <hr />
            {/* ------------------------------details Box End------------------------------------ */}

            {/* ------------------------------description Box------------------------------------ */}
            <Box mt={"5rem"} align={"left"} textTransform={"capitalize"}>
              <Badge fontSize="1rem" colorScheme="blackAlpha">
                Description :
              </Badge>

              <Text fontSize={"lg"}>
                <span>{currentProducts.description}</span>
              </Text>
            </Box>
          </Box>
        </Flex>
      )}
    </div>
  );
};

export default DescriptionPage;
