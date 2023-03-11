import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GET_Attendance } from "../../redux/AuthReducer/action";
import { getLocalData } from "../../utils/localStorage";
import "./cal.css";
export default function Calendar() {
  const [CalendarArray, setCalendarArray] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const subscribeProducts = useSelector(
    (store) => store.pagesReducer.subscribeProducts
  );
  const token = getLocalData("token"); //different approaches for getting local storage
  const email = getLocalData("userInfo");
  const payload = {
    email: email,
    token,
  };
  const profile = useSelector((store) => store?.AuthReducer?.profileData);
  useEffect(() => {
    var noOfDays = GET_Attendance(token.uid).then((res) => {
      ReduceArray(res);
    });

    var data = subscribeProducts.find((ele) => ele.id === profile.subscribedID);
    console.log("🚀 ~ file: Calendar.js:26 ~ useEffect ~ data:", data);
    setCurrentProduct(data);
  }, []);

  const ReduceArray = (data) => {
    const perChunk = 7;
    var inputArray = data;
    var noOfDays = data?.filter((ele) => ele.delivered);
    const result = inputArray?.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);
    setCalendarArray({ result, noOfDays });
    console.log("data", result);
    return result;
  };

  return (
    <div className="container">
      {CalendarArray?.result?.length > 0 ? (
        <>
          <div className="calendar">
            <div className="front">
              <div className="current-month">
                <div className="weeks">
                  {CalendarArray?.result?.map((date, index) => {
                    return (
                      <div className="" key={date}>
                        {date?.map((i) => (
                          <span className={i?.delivered ? "active" : ""}>
                            {i?.date?.toLocaleString("en-US", {
                              minimumIntegerDigits: 2,
                              useGrouping: false,
                            })}
                          </span>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <Flex justify={"center"} flexDir={"column"} alignItems="center">
            <Text fontSize={"2xl"}>
              Already Subscribed to {currentProduct?.productName + " "}
              {currentProduct?.weight}
            </Text>

            <Text fontWeight={"bold"}>
              Total Price ₹
              {currentProduct.price * CalendarArray?.noOfDays?.length}
            </Text>
          </Flex>
        </>
      ) : (
        <Flex justify={"center"} flexDir={"column"} alignItems="center">
          <Text fontSize={"2xl"}>
            Already Subscribed to {currentProduct?.productName + " "}
            {currentProduct?.weight}
          </Text>
          <Text fontWeight={"bold"}>Data not found for the current month</Text>
        </Flex>
      )}
    </div>
  );
}
