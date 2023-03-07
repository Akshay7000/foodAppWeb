import { Button, ButtonGroup, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateOrder } from "../redux/OrderReducer/acton";
import { getJsonData } from "../components/rozarpay/RozarPay";
import { profile } from "../redux/AuthReducer/action";
import { getLocalData } from "../utils/localStorage";
import { getCart } from "../redux/CartReducer/action";
import Loading from "../components/Loading/Loading";
import * as types from "../redux/CartReducer/actionType";
import moment from "moment";
import { customers, orders } from "../Firebase/Collection";

export default function OrderSuccess() {
  const nav = useNavigate();
  const location = useLocation().search.substring(1);
  const [order, setOrder] = useState({});
  const cart = useSelector((store) => store?.cart?.cart);
  const profileData = useSelector((state) => state.AuthReducer?.profileData);
  const isLoading = useSelector((state) => state.orderReducer?.isLoading);
  const [readyToGo, setReadyToGo] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const init = async () => {
      const token = await getLocalData("token"); //different approaches for getting local storage
      const email = await getLocalData("userInfo");
      const payload = {
        email: email,
        token,
      };

      dispatch(profile(payload));
      var cartItems = dispatch(getCart(token.uid));

      var perJson = await getJsonData(location);
      Object.keys(perJson).forEach((key) =>
        perJson[key] === "undefined" ? delete perJson[key] : {}
      );
      setOrder(perJson);
      setReadyToGo(false);
    };

    init();
  }, []);

  const moveTo = (path) => {
    if (Object.keys(order)?.length > 0) {
      dispatch(CreateOrder({ cart, order, uid: profileData.uid }));

      dispatch({ type: types.CLEAR_CART, payload: profileData.uid });
    }
    nav(path);
  };

  return (
    <>
      {readyToGo ? (
        <Loading />
      ) : (
        <div className="success">
          <div className="card">
            {order?.order_status === "Success" ? (
              <>
                <div className="subCard">
                  <i className="check">✓</i>
                </div>
                <h1>Success</h1>
                <p>
                  We received your purchase request;
                  <br /> we'll be in touch shortly!
                </p>
              </>
            ) : (
              <div className="fail">
                <div className="subCard">
                  <i className="cross">✗</i>
                </div>
                <h1 className="failtext">Failed</h1>
                <p>
                  We are unable to received your purchase request;
                  <br /> Please try again after sometime!
                </p>
              </div>
            )}

            <Wrap
              pt={"5"}
              spacing={4}
              justifyContent={"center"}
              alignItems={"center"}
              alignContent="center"
              margin={"0 auto"}
            >
              <WrapItem>
                <Button
                  // isLoading={setReadyToGo}
                  onClick={() => {
                    moveTo("/orders");
                  }}
                  disabled={isLoading}
                  bg={"black"}
                  color="whitesmoke"
                  _hover={{
                    background: "none",
                    color: "teal",
                    border: "1px solid black",
                  }}
                >
                  View Orders
                </Button>
              </WrapItem>
              <WrapItem>
                <Button
                  onClick={() => {
                    moveTo("/products");
                  }}
                  bg={"#e08f38"}
                  disabled={isLoading}
                  color="whitesmoke"
                  _hover={{
                    background: "none",
                    color: "teal",
                    border: "1px solid black",
                  }}
                >
                  Shop More
                </Button>
              </WrapItem>
            </Wrap>
          </div>
        </div>
      )}
    </>
  );
}
