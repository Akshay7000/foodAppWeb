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
import { useLocation, useSearchParams } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import Trending from "../components/Trends/Trending";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import ProductDis from "../components/ProductsDisplay/ProductDis";
import { getData } from "../redux/DataReducer/action";
// import Paginate from "../components/Paginatation/Paginate";
//import FilterChecked from "../Filter/Filters/FilterChecked";
const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store?.dataReducer?.products);
  const loading = useSelector((store) => store?.dataReducer?.isLoading);
  const [searchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    // if (location.search || products?.length === 0) {
    //   const sortBy = searchParams.get("sortBy");

    //   const queryParams = {
    //     params: {
    //       category: searchParams.getAll("category"),
    //       gender: searchParams.getAll("gender"),
    //       colortype: searchParams.getAll("colortype"),
    //       sizes: searchParams.getAll("sizes"),
    //       _sort: sortBy && "rating",
    //       _order: sortBy,
    //     },
    //   };
    dispatch(getData());
    // }
  }, [dispatch, location.search, products?.length, searchParams]);

  // const postPerPage = 9;
  // const totalPosts = products?.length;
  // const indexOfLastPost = currentPage * postPerPage;
  // const indexOfFirstPost = indexOfLastPost - postPerPage;
  // const filterPosts = products?.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className="AllProducts">
      <Navbar /> <br />
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* <Box w="95%" m="auto">

            <Trending />
          </Box> */}
          <Flex marginBottom={"10"}>
            <Box w={isLargerThan ? "15%" : "10%"}>
              {/* <FilterData /> */}
              {/* <Fil  terChecked/> */}
            </Box>
            <Spacer />
            <Box width={"100%"}>
              <Heading align={"left"} my={"10"}>
                DEALS FOR YOU
              </Heading>
              <Grid
                templateColumns={
                  isLargerThan ? "repeat(3, 1fr)" : "repeat(2, 1fr)"
                }
                // display={"flex"}
                // flexWrap={"wrap"}
                // alignItems={"center"}
                // justifyContent={"center"}
                gap={"15px"}
                // background={"red"}
              >
                {products?.length > 0 &&
                  products?.map((item) => {
                    return <ProductDis key={item.key} item={item} />;
                  })}
              </Grid>
            </Box>
            <Spacer />
            <Box w={isLargerThan ? "15%" : "10%"}>
              {/* <FilterData /> */}
              {/* <Fil  terChecked/> */}
            </Box>
          </Flex>

          {/* {totalPosts > postPerPage && (
            <Paginate
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPosts={totalPosts}
              postPerPage={postPerPage}
            />
          )} */}
        </>
      )}
    </div>
  );
};

export default AllProducts;

// not applied pagination because it takes too much time to load

// const [currentPage, setCurrentPage] = useState(1);
// const postPerPage = 9;
// const totalPosts = products.length;
// const indexOfLastPost = currentPage * postPerPage;
// const indexOfFirstPost = indexOfLastPost - postPerPage;
// const filterPosts = products.slice(indexOfFirstPost, indexOfLastPost);
// {totalPosts > postPerPage && (
//   <Paginate
//     currentPage={currentPage}
//     setCurrentPage={setCurrentPage}
//     totalPosts={totalPosts}
//     postPerPage={postPerPage}
//   />
// )}
