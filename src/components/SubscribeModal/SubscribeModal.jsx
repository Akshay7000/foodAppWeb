import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Stack,
  useDisclosure,
  useMediaQuery,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profileUpdate } from "../../redux/AuthReducer/action";
import { getLocalData } from "../../utils/localStorage";
import AlertCustom from "../Alert/Alert";
import {
  checkMobile,
  checkPinCode,
  checkSubscribeFormEmpty,
  setToast,
} from "../Other/CheckProperty";
import { profile, GET_Attendance } from "../../redux/AuthReducer/action";
import Calendar from "../Calendar/Calendar";
function SubscribeModal() {
  const [currentSubProd, setCurrentSubProd] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [NoOfDays, setNoOfDays] = useState(0);
  const toast = useToast();
  const dispatch = useDispatch();
  const [isChecked, setisChecked] = useState(false);
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const auth = useSelector((store) => store.AuthReducer.isAuth);
  const subscribeProducts = useSelector(
    (store) => store.pagesReducer.subscribeProducts
  );

  const profilei = useSelector((store) => store?.AuthReducer?.profileData);
  const [FormData, setFormData] = useState({
    firstName: profilei?.firstName,
    lastName: profilei?.lastName,
    mobile: profilei?.mobile,
    addressLine1: profilei?.address?.addressLine1,
    addressLine2: profilei?.address?.addressLine2,
    locality: profilei?.address?.locality,
    pinCode: profilei?.address?.pinCode,
    state: profilei?.address?.state,
    subscribedID: profilei?.subscribedID,
  });
  const token = getLocalData("token"); //different approaches for getting local storage
  const email = getLocalData("userInfo");
  const payload = {
    email: email,
    token,
  };
  const [AlerState, setAlerState] = useState(false);
  const navigate = useNavigate();
  const handleSubscribe = async () => {
    if (auth) {
      onOpen();
    } else {
      setToast(toast, "Sign in to subscribe", "info");
      navigate("login");
    }
  };

  const handleFormValidation = (form) => {
    const isEmpty = checkSubscribeFormEmpty(form);
    if (!isEmpty.status) {
      setToast(toast, isEmpty.message, "error");
      return isEmpty.status;
    }
    const isPinCode = checkPinCode(form.pinCode);
    if (!isPinCode.status) {
      setToast(toast, isPinCode.message, "error");
      return isPinCode.status;
    }
    const isMobile = checkMobile(form.mobile);

    if (!isMobile.status) {
      setToast(toast, isMobile.message, "error");
      return isMobile.status;
    }
    return true;
  };
  const FormSubmit = () => {
    if (handleFormValidation(FormData)) {
      const {
        addressLine1,
        addressLine2,
        locality,
        pinCode,
        state,
        subscribedID,
        mobile,
        firstName,
        lastName,
      } = FormData;
      var data = {
        address: {
          addressLine1,
          addressLine2,
          locality,
          pinCode,
          state,
        },
        isSubscribed: true,
        subscribedID,
        mobile,
        firstName,
        lastName,
        status: "pending",
      };
      dispatch(profileUpdate(data));
      onClose();
      setToast(toast, "Successfully Subscribed", "success");
      dispatch(profile(payload));
      // window.location.reload();
    } else {
      console.log("else", FormData);
    }
  };
  // useEffect(() => {
  //   {
  //     token?.uid && dispatch(GET_Attendance(token.uid));
  //   }
  // }, []);

  return (
    <div>
      {/* <AlertCustom
        MainBtn={""}
        OnClose={() => setAlerState(false)}
        onOK={() => {
          setAlerState(false);
          onOpen();
        }}
        showAlert={AlerState}
        Title={
          "Already Subscribed to " +
          " " +
          currentSubProd?.productName +
          " " +
          currentSubProd?.weight
        }
        Description={"Total ₹" + " " + NoOfDays * currentSubProd?.price}
      /> */}

      <Box mt="3rem">
        <Button
          width={["80%", "80%", "70%", "70%"]}
          bg="#13acbc"
          color={"whitesmoke"}
          colorScheme={"blackAlpha"}
          // disabled={isInCart()}
          onClick={handleSubscribe}
        >
          {"SUBSCRIBE"}
        </Button>
      </Box>

      <Modal
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent top={10}>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box m="auto" min-h="100vh" zIndex={9999}>
              {profilei?.isSubscribed ? (
                <Box p="1rem" my={"5"}>
                  <Calendar data={NoOfDays} currentProduct={currentSubProd} />
                </Box>
              ) : (
                <FormControl p="1rem">
                  <Heading align={"left"} my={"5"}>
                    Subscribe<span style={{ color: "red" }}>*</span>
                  </Heading>
                  <HStack spacing={"2"}>
                    <Input
                      onChange={(e) =>
                        setFormData({ ...FormData, firstName: e.target.value })
                      }
                      type="text"
                      name="firstName"
                      placeholder="First Name*"
                      value={FormData?.firstName}
                    />
                    <Input
                      onChange={(e) =>
                        setFormData({ ...FormData, lastName: e.target.value })
                      }
                      type="text"
                      name="lastName"
                      placeholder="Last Name*"
                      value={FormData?.lastName}
                    />
                  </HStack>
                  <VStack spacing={"10"} my={"10"}>
                    <Input
                      onChange={(e) =>
                        setFormData({
                          ...FormData,
                          addressLine1: e.target.value,
                        })
                      }
                      type="text"
                      name="addressLine1"
                      placeholder="Address Line 1*"
                      value={FormData?.addressLine1}
                    />
                    <Input
                      onChange={(e) =>
                        setFormData({
                          ...FormData,
                          addressLine2: e.target.value,
                        })
                      }
                      type="text"
                      name="addressLine2"
                      placeholder="Address Line 2"
                      value={FormData?.addressLine2}
                    />
                  </VStack>
                  <HStack my={"8"}>
                    <Input
                      onChange={(e) =>
                        setFormData({ ...FormData, locality: e.target.value })
                      }
                      type="text"
                      name="locality"
                      placeholder="Town/City*"
                      value={FormData?.locality}
                    />
                    <Input
                      onChange={(e) =>
                        setFormData({ ...FormData, pinCode: e.target.value })
                      }
                      type="number"
                      name="pinCode"
                      placeholder="Pin Code*"
                      value={FormData?.pinCode}
                    />
                  </HStack>
                  <HStack>
                    <Input
                      onChange={(e) =>
                        setFormData({ ...FormData, state: e.target.value })
                      }
                      type="text"
                      name="state"
                      placeholder="State/Territory*"
                      value={FormData?.state}
                    />
                    <Input
                      onChange={(e) =>
                        setFormData({ ...FormData, mobile: e.target.value })
                      }
                      type="number"
                      name="mobile"
                      placeholder="Mobile*"
                      value={FormData?.mobile}
                    />
                  </HStack>
                  <Stack my={"8"}>
                    <Select
                      placeholder="Select Product*"
                      size="md"
                      defaultValue={FormData?.subscribedID}
                      onChange={(e) => {
                        setFormData({
                          ...FormData,
                          subscribedID: e.target.value,
                        });
                      }}
                    >
                      {subscribeProducts?.map((item) => {
                        return (
                          <option value={item?.id}>
                            {item?.productName + " - " + item.weight}
                          </option>
                        );
                      })}
                    </Select>
                  </Stack>
                  <Divider />
                  <Checkbox onChange={(e) => setisChecked(e.target.checked)}>
                    Accept Terms & Conditions
                  </Checkbox>
                  <Button
                    onClick={FormSubmit}
                    mt="2rem"
                    width={["100%", "100%"]}
                    // my={"4"}
                    disabled={!isChecked}
                    bg={isLargerThan ? "black" : "grey"}
                    color="whitesmoke"
                    p="1.5rem 2rem"
                    border={"1px solid beige"}
                    _hover={{
                      background: "none",
                      color: "teal",
                      border: "1px solid black",
                    }}
                    type="submit"
                  >
                    SUBSCRIBE
                  </Button>
                </FormControl>
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default SubscribeModal;
