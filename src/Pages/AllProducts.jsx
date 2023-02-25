import { Box, Flex, Heading, Spacer, useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
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
          <Flex my={"20"}>
            <Box w={isLargerThan ? "15%" : "10%"}></Box>
            <Spacer />
            <Box>
              <Heading align={"left"} my={"10"}>
                DEALS FOR YOU
              </Heading>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  margin: "0 20px 0 20px",
                }}
              >
                {products?.length > 0 &&
                  products?.map((item) => {
                    return (
                      <div
                        key={item.id + item.description}
                        style={{ flex: "1 0 200px " }}
                      >
                        <ProductDis item={item} type={"products"} />
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
