import { Box, Flex, Heading, Spacer, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import ProductDis from "../components/ProductsDisplay/ProductDis";
import { getFeaturedProducts } from "../redux/PagesReducer/action";

const SomethingNew = () => {
  const dispatch = useDispatch();
  const vidRef = useRef();
  const loading = useSelector((store) => store?.pagesReducer?.isLoading);

  const [isLargerThan] = useMediaQuery("(min-width: 768px)");

  const featured = useSelector((store) => store.pagesReducer.featured);
  const [isVIDEOon, setisVIDEOon] = useState(false);
  useEffect(() => {
    if (featured?.length === 0) {
      dispatch(getFeaturedProducts());
    }
  }, [dispatch, featured?.length]);

  useLayoutEffect(() => {
    setisVIDEOon(true);
    setTimeout(() => {
      vidRef?.current?.play();
    }, 1000);
  }, []);

  const handleVideoEnded = () => {
    setisVIDEOon(false);
  };
  return (
    <div className="AllProducts">
      <Navbar /> <br />
      {loading ? (
        <Loading />
      ) : (
        <>
          {isVIDEOon ? (
            <Flex
              justify={"center"}
              bg={"#000"}
              h={"100vh"}
              onClick={() => vidRef?.current?.play()}
            >
              {isVIDEOon && (
                <video
                  playsInline
                  ref={vidRef}
                  id="myVideo"
                  name="media"
                  preload="auto"
                  // muted
                  // key={new Date().getTime()}
                  onEnded={handleVideoEnded}
                >
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/avyayahealth-9f67d.appspot.com/o/team%2FWhatsApp%20Video%202023-03-06%20at%202.44.39%20PM.mp4?alt=media&token=408522bb-bbfd-4232-825d-4d451e542b49"
                    type="video/mp4"
                  />
                </video>
                // <div
                //   dangerouslySetInnerHTML={{
                //     __html: `<video  key=${new Date().getTime()}  onEnded={handleVideoEnded} /className="app__backgroundVideo" autoplay   playsinline>
                //       <source src="https://firebasestorage.googleapis.com/v0/b/avyayahealth-9f67d.appspot.com/o/team%2FWhatsApp%20Video%202023-03-06%20at%202.44.39%20PM.mp4?alt=media&token=408522bb-bbfd-4232-825d-4d451e542b49" type="video/mp4" />
                //       Your browser does not support the video tag.
                // </video>`,
                //   }}
                //   ref={vidRef}
                // />
              )}
            </Flex>
          ) : (
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
          )}
        </>
      )}
    </div>
  );
};

export default SomethingNew;
