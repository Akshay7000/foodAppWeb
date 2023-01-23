import {
  Box,
  Flex,
  Grid,
  Heading,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import ProductDis from "../components/ProductsDisplay/ProductDis";
import { getFeaturedProducts } from "../redux/PagesReducer/action";

const SomethingNew = () => {
  const dispatch = useDispatch();

  const loading = useSelector((store) => store?.pagesReducer?.isLoading);

  const [isLargerThan] = useMediaQuery("(min-width: 768px)");

  const featured = useSelector((store) => store.pagesReducer.featured);

  useEffect(() => {
    if (featured?.length === 0) {
      dispatch(getFeaturedProducts());
    }
  }, [dispatch, featured?.length]);

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
            <Box width={"100%"}>
              <Heading align={"left"} my={"10"}>
                TRY SOMETHING NEW
              </Heading>
              <Grid
                templateColumns={
                  isLargerThan ? "repeat(3, 1fr)" : "repeat(2, 1fr)"
                }
                gap={"15px"}
              >
                {featured?.length > 0 &&
                  featured?.map((item) => {
                    return (
                      <ProductDis
                        key={item.key}
                        item={item}
                        type={"featured"}
                      />
                    );
                  })}
              </Grid>
            </Box>
            <Spacer />
            <Box w={isLargerThan ? "15%" : "10%"}></Box>
          </Flex>
        </>
      )}
    </div>
  );
};

export default SomethingNew;
