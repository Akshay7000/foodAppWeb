import { Box, Flex, Heading, Spacer, useMediaQuery } from "@chakra-ui/react";
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
          <Flex my={"20"}>
            <Box w={isLargerThan ? "15%" : "10%"}></Box>
            <Spacer />
            <Box>
              <Heading align={"left"} my={"10"}>
                TRY SOMETHING NEW
              </Heading>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  margin: "0 20px 0 20px",
                }}
              >
                {featured?.length > 0 &&
                  featured?.map((item) => {
                    return (
                      <div
                        key={item.id + item.description}
                        style={{ flex: "1 0 200px " }}
                      >
                        <ProductDis
                          key={item.key}
                          item={item}
                          type={"featured"}
                        />
                      </div>
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
};

export default SomethingNew;
