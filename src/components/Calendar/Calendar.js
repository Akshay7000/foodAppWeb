import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./cal.css";
export default function Calendar({ data, currentProduct }) {
  const [CalendarArray, setCalendarArray] = useState([]);
  useEffect(() => {
    if (data?.length > 0) {
      ReduceArray();
    }
  }, [data]);

  const ReduceArray = () => {
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
    <div class="container">
      {data.length > 0 ? (
        <>
          <div class="calendar">
            <div class="front">
              <div class="current-month">
                <div class="weeks">
                  {CalendarArray?.result?.map((date, index) => {
                    return (
                      <div class="" key={date}>
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
        <>
          <Text fontWeight={"bold"}>Data not found for the current month</Text>
        </>
      )}
    </div>
  );
}
